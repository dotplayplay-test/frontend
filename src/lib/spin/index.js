var e = Object.defineProperty
  , t = Object.defineProperties
  , r = Object.getOwnPropertyDescriptors
  , n = Object.getOwnPropertySymbols
  , o = Object.prototype.hasOwnProperty
  , i = Object.prototype.propertyIsEnumerable
  , a = (t,r,n)=>r in t ? e(t, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[r] = n
  , s = (e,t)=>{
    for (var r in t || (t = {}))
        o.call(t, r) && a(e, r, t[r]);
    if (n)
        for (var r of n(t))
            i.call(t, r) && a(e, r, t[r]);
    return e
}
  , c = (e,n)=>t(e, r(n))
  , p = (e,t)=>{
    var r = {};
    for (var a in e)
        o.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
    if (null != e && n)
        for (var a of n(e))
            t.indexOf(a) < 0 && i.call(e, a) && (r[a] = e[a]);
    return r
}
;
import {$ as u, r as l, j as h, R as d, n as x, au as m, L as f, F as g, o as y, av as w, g as S, aw as b, s as z} from "./vendor.34a1b5f3.js";
import {p as v, X as C, a3 as $, a4 as T, C as k, a5 as _, a6 as O, w as A, H as I, a0 as P, j as W, I as E, L as R, r as j, a as N} from "./index.fa6aefbf.js";
import {S as H, u as M, m as D, T as F, P as B, C as L, a as G} from "./usePixiGsap.a61fec70.js";
var U = "https://static.nanogames.io/assets/sprites@2x.6522026d.png";
var q = {
    frames: {
        "bg1.png": {
            frame: {
                x: 350,
                y: 1,
                w: 752,
                h: 128
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 6,
                w: 752,
                h: 128
            },
            sourceSize: {
                w: 752,
                h: 140
            }
        },
        "bonus_zoom.png": {
            frame: {
                x: 173,
                y: 926,
                w: 468,
                h: 52
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 468,
                h: 52
            },
            sourceSize: {
                w: 468,
                h: 52
            }
        },
        "box1.png": {
            frame: {
                x: 173,
                y: 884,
                w: 40,
                h: 554
            },
            rotated: !0,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 40,
                h: 554
            },
            sourceSize: {
                w: 40,
                h: 554
            }
        },
        "box2.png": {
            frame: {
                x: 350,
                y: 373,
                w: 644,
                h: 114
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 644,
                h: 114
            },
            sourceSize: {
                w: 644,
                h: 114
            }
        },
        "bracket.png": {
            frame: {
                x: 350,
                y: 489,
                w: 424,
                h: 186
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 424,
                h: 186
            },
            sourceSize: {
                w: 424,
                h: 186
            }
        },
        "button.png": {
            frame: {
                x: 357,
                y: 677,
                w: 476,
                h: 113
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 1,
                w: 476,
                h: 113
            },
            sourceSize: {
                w: 476,
                h: 114
            }
        },
        "circle.png": {
            frame: {
                x: 809,
                y: 884,
                w: 60,
                h: 60
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 60,
                h: 60
            },
            sourceSize: {
                w: 60,
                h: 60
            }
        },
        "coin_bg.png": {
            frame: {
                x: 929,
                y: 880,
                w: 44,
                h: 44
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 44,
                h: 44
            },
            sourceSize: {
                w: 44,
                h: 44
            }
        },
        "flag.png": {
            frame: {
                x: 350,
                y: 131,
                w: 661,
                h: 240
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 2,
                y: 29,
                w: 661,
                h: 240
            },
            sourceSize: {
                w: 664,
                h: 274
            }
        },
        "light.png": {
            frame: {
                x: 871,
                y: 880,
                w: 56,
                h: 56
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 56,
                h: 56
            },
            sourceSize: {
                w: 56,
                h: 56
            }
        },
        "more_gold.png": {
            frame: {
                x: 1,
                y: 697,
                w: 354,
                h: 148
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 4,
                y: 15,
                w: 354,
                h: 148
            },
            sourceSize: {
                w: 376,
                h: 202
            }
        },
        "num_bg.png": {
            frame: {
                x: 910,
                y: 489,
                w: 76,
                h: 100
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 76,
                h: 100
            },
            sourceSize: {
                w: 76,
                h: 100
            }
        },
        "pap1.png": {
            frame: {
                x: 173,
                y: 847,
                w: 38,
                h: 26
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 38,
                h: 26
            },
            sourceSize: {
                w: 38,
                h: 26
            }
        },
        "pap2.png": {
            frame: {
                x: 1,
                y: 947,
                w: 22,
                h: 22
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 22,
                h: 22
            },
            sourceSize: {
                w: 22,
                h: 22
            }
        },
        "pap3.png": {
            frame: {
                x: 996,
                y: 373,
                w: 12,
                h: 26
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 12,
                h: 26
            },
            sourceSize: {
                w: 12,
                h: 26
            }
        },
        "pap4.png": {
            frame: {
                x: 776,
                y: 623,
                w: 50,
                h: 64
            },
            rotated: !0,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 50,
                h: 64
            },
            sourceSize: {
                w: 50,
                h: 64
            }
        },
        "pap5.png": {
            frame: {
                x: 975,
                y: 880,
                w: 44,
                h: 44
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 44,
                h: 44
            },
            sourceSize: {
                w: 44,
                h: 44
            }
        },
        "pap6.png": {
            frame: {
                x: 1074,
                y: 648,
                w: 18,
                h: 16
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 18,
                h: 16
            },
            sourceSize: {
                w: 18,
                h: 16
            }
        },
        "pap7.png": {
            frame: {
                x: 643,
                y: 926,
                w: 48,
                h: 44
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 48,
                h: 44
            },
            sourceSize: {
                w: 48,
                h: 44
            }
        },
        "pap8.png": {
            frame: {
                x: 729,
                y: 884,
                w: 78,
                h: 68
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 78,
                h: 68
            },
            sourceSize: {
                w: 78,
                h: 68
            }
        },
        "pap9.png": {
            frame: {
                x: 910,
                y: 591,
                w: 16,
                h: 18
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 16,
                h: 18
            },
            sourceSize: {
                w: 16,
                h: 18
            }
        },
        "pap11.png": {
            frame: {
                x: 809,
                y: 946,
                w: 30,
                h: 32
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 30,
                h: 32
            },
            sourceSize: {
                w: 30,
                h: 32
            }
        },
        "ring.png": {
            frame: {
                x: 1,
                y: 1,
                w: 347,
                h: 694
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 347,
                h: 694
            },
            sourceSize: {
                w: 347,
                h: 694
            }
        },
        "spin_button.png": {
            frame: {
                x: 842,
                y: 648,
                w: 230,
                h: 230
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 16,
                y: 16,
                w: 230,
                h: 230
            },
            sourceSize: {
                w: 264,
                h: 264
            }
        },
        "spin_text.png": {
            frame: {
                x: 1,
                y: 847,
                w: 170,
                h: 98
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 49,
                y: 79,
                w: 170,
                h: 98
            },
            sourceSize: {
                w: 264,
                h: 264
            }
        },
        "sunflower.png": {
            frame: {
                x: 776,
                y: 489,
                w: 132,
                h: 132
            },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 132,
                h: 132
            },
            sourceSize: {
                w: 132,
                h: 132
            }
        },
        "text1.png": {
            frame: {
                x: 357,
                y: 792,
                w: 483,
                h: 90
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 17,
                y: 2,
                w: 483,
                h: 90
            },
            sourceSize: {
                w: 518,
                h: 100
            }
        },
        "text2.png": {
            frame: {
                x: 1013,
                y: 131,
                w: 515,
                h: 85
            },
            rotated: !0,
            trimmed: !0,
            spriteSourceSize: {
                x: 2,
                y: 7,
                w: 515,
                h: 85
            },
            sourceSize: {
                w: 518,
                h: 100
            }
        }
    },
    meta: {
        app: "https://www.codeandweb.com/texturepacker",
        version: "1.0",
        image: "sprites@2x.png",
        format: "RGBA8888",
        size: {
            w: 1103,
            h: 979
        },
        scale: "1",
        smartupdate: "$TexturePacker:SmartUpdate:0ff1a90c81998aadb703e5dbbaa9bdde:92f2dea8b762adb9da1cb9fe046d7d46:29d0d1a87896af4ba9df7fc872031c2e$"
    }
}
  , X = "https://static.nanogames.io/assets/sounds.b8fb8ba1.mp3";
const J = {
    sprites: U,
    soundSprite: X
}
  , K = {};
function Q(e) {
    return new Promise((t=>{
        e.add(Object.values(J)).load(((e,r)=>{
            Object.assign(K, r),
            t(r)
        }
        ))
    }
    )).then((()=>{
        return e = U,
        t = q,
        new Promise((r=>{
            const n = new H(K[e].texture.baseTexture,t);
            n.parse((()=>{
                K[e].spritesheet = n,
                r(n)
            }
            ))
        }
        ));
        var e, t
    }
    ))
}
function V(e) {
    var t;
    return null == (t = K[U].spritesheet) ? void 0 : t.textures[e]
}
const Y = new u.Howl({
    src: [X],
    sprite: {
        SpinOpen: [0, 1979],
        SpinAndBonus: [1979, 8268],
        Click: [10247, 306],
        Collect: [10553, 601]
    }
});
function Z(e) {
    try {
        Y.play(e)
    } catch (t) {}
}
function ee({disabled: e=!1}={}) {
    const [t,r] = M({
        scale: 1,
        config: {
            duration: .2
        }
    });
    return l.exports.useMemo((()=>e ? {} : {
        ref: t,
        pointerdown() {
            r({
                scale: .9
            })
        },
        pointerup() {
            r({
                scale: 1
            })
        },
        pointerupoutside() {
            r({
                scale: 1
            })
        },
        buttonMode: !0,
        interactive: !0
    }), [e])
}
function te(e) {
    return Object.assign({
        fontFamily: "Montserrat",
        fill: 16119543
    }, e)
}
const re = l.exports.forwardRef((function(e, t) {
    var r = e
      , {name: n, anchor: o=.5} = r
      , i = p(r, ["name", "anchor"]);
    return h(D.exports.Sprite, c(s({
        ref: t
    }, i), {
        anchor: o,
        texture: V(n)
    }))
}
))
  , ne = l.exports.forwardRef((function(e, t) {
    var r = e
      , {name: n} = r
      , o = p(r, ["name"]);
    const {width: i=0, height: a=0} = o;
    return h(D.exports.NineSlicePlane, c(s({
        ref: t
    }, o), {
        pivot: [i / 2, a / 2],
        texture: V(n)
    }))
}
));
var oe = re
  , ie = d.memo((function(e) {
    var t = e
      , {text: r, onClick: n} = t
      , o = p(t, ["text", "onClick"]);
    const i = ee();
    return h(oe, c(s(s({}, i), o), {
        pointertap: n,
        name: "button.png",
        children: h(D.exports.Text, {
            style: ae,
            anchor: .5,
            text: r
        })
    }))
}
));
const ae = te({
    fontSize: 16,
    fontWeight: "bold"
});
function se() {
    return x(D.exports.Container, {
        x: 212,
        y: 390,
        children: [h(oe, {
            name: "flag.png",
            children: h(oe, {
                y: 15,
                name: "text1.png"
            })
        }), h(ie, {
            onClick: ()=>{
                v.back(),
                C("/login/regist")
            }
            ,
            y: 110,
            text: "Sign up and spin now"
        })]
    })
}
var ce = {
    alpha: {
        start: 1,
        end: 1
    },
    scale: {
        list: [{
            value: .15,
            time: 0
        }, {
            value: .6,
            time: .5
        }, {
            value: .6,
            time: 1
        }],
        minimumScaleMultiplier: 2
    },
    color: {
        start: "#ffffff",
        end: "#ffffff"
    },
    speed: {
        start: 320,
        end: 0,
        minimumSpeedMultiplier: 1.5
    },
    acceleration: {
        x: 0,
        y: 500
    },
    maxSpeed: 0,
    startRotation: {
        min: 240,
        max: 300
    },
    noRotation: !1,
    rotationSpeed: {
        min: 300,
        max: 600
    },
    lifetime: {
        min: 2,
        max: 3
    },
    blendMode: "screen",
    frequency: .005,
    emitterLifetime: .2,
    maxParticles: 1e3,
    pos: {
        x: 0,
        y: 0
    },
    addAtBack: !0,
    autoUpdate: !0,
    spawnType: "point"
}
  , pe = d.memo((function({onClose: e, bonus: t}) {
    const [r,n] = M({
        alpha: 0,
        config: {
            duration: .3
        }
    })
      , [o,i] = M({
        scale: .5,
        config: {
            duration: .5,
            ease: m.easeOut
        }
    });
    l.exports.useEffect((()=>{
        n({
            alpha: .85
        }),
        i({
            scale: 1
        })
    }
    ), []);
    return x(D.exports.Container, {
        x: 212,
        y: 334,
        children: [h(D.exports.Sprite, {
            ref: r,
            texture: F.WHITE,
            tint: 0,
            width: 424,
            height: 668,
            anchor: .5,
            interactive: !0
        }), x(D.exports.Container, {
            y: 20,
            ref: o,
            children: [h(ue, {}), h(ne, {
                name: "box1.png",
                leftWidth: 12,
                topHeight: 12,
                rightWidth: 0,
                bottomHeight: 12,
                x: -90,
                width: 180,
                height: 280
            }), h(ne, {
                name: "box1.png",
                x: 90,
                leftWidth: 12,
                topHeight: 12,
                rightWidth: 0,
                bottomHeight: 12,
                width: 180,
                height: 280,
                scale: [-1, 1]
            }), x(D.exports.Container, {
                y: -130,
                children: [h(oe, {
                    y: 40,
                    name: "bonus_zoom.png"
                }), h(D.exports.Text, {
                    y: 75,
                    style: he,
                    anchor: .5,
                    text: "Wheel Bonus"
                }), h(D.exports.Text, {
                    y: 100,
                    style: de,
                    anchor: .5,
                    text: String(t[0].amount) + " " + t[0].currencyName
                }), x(ne, {
                    name: "box2.png",
                    y: 150,
                    leftWidth: 15,
                    rightWidth: 15,
                    topHeight: 0,
                    bottomHeight: 0,
                    width: 322,
                    height: 50,
                    children: [h(D.exports.Text, {
                        x: 110,
                        y: 26,
                        style: xe,
                        anchor: .5,
                        text: "Daily Check in :"
                    }), h(D.exports.Text, {
                        x: 210,
                        y: 26,
                        style: xe,
                        anchor: .5,
                        text: String(t[1].amount) + " " + t[1].currencyName
                    })]
                })]
            }), h(ie, {
                y: 90,
                onClick: ()=>{
                    Z("Collect"),
                    e()
                }
                ,
                text: "Collect now"
            }), h(le, {})]
        })]
    })
}
));
const ue = d.memo((function() {
    const [e,t] = M({
        rotation: 0,
        config: {
            repeat: -1,
            duration: 5,
            ease: f.easeNone
        }
    })
      , [r,n] = M({
        scale: .5,
        y: -170,
        config: {
            repeat: 0,
            yoyo: !0,
            duration: .3,
            ease: f.easeNone
        }
    });
    return l.exports.useEffect((()=>{
        t({
            rotation: 360
        }),
        n({
            scale: 1.1,
            y: -180
        })
    }
    ), []),
    x(g, {
        children: [h(D.exports.Container, {
            y: -120,
            scale: 2.4,
            ref: e,
            children: Array(4).fill(Math.PI / 2).map(((e,t)=>h(oe, {
                name: "sunflower.png",
                anchor: [1, 1],
                rotation: e * t
            }, t)))
        }), h(oe, {
            ref: r,
            y: -180,
            name: "more_gold.png"
        })]
    })
}
))
  , le = d.memo((function() {
    const [e,t] = l.exports.useState(!1)
      , r = $();
    l.exports.useEffect((()=>{
        T(500).then((()=>{
            r() && t(!0)
        }
        ))
    }
    ), []);
    const n = [V("pap1.png"), V("pap2.png"), V("pap3.png"), V("pap4.png"), V("pap5.png"), V("pap6.png"), V("pap7.png"), V("pap8.png"), V("pap9.png"), V("pap11.png")];
    return h(D.exports.Container, {
        y: -140,
        zIndex: 99,
        children: h(B, {
            textures: n,
            emit: e,
            config: ce
        })
    })
}
))
  , he = te({
    fontSize: 13,
    fill: 16764192,
    fontWeight: "bold"
})
  , de = te({
    fontSize: 24,
    fill: 6135808,
    fontWeight: "bold"
})
  , xe = te({
    fontWeight: "bold",
    fontSize: 14
});
function me() {
    return x(D.exports.Container, {
        y: 145,
        children: [h(D.exports.Text, {
            y: -50,
            style: we,
            anchor: .5,
            text: "Next free spin bonus"
        }), h(fe, {}), h(D.exports.Text, {
            x: -48,
            y: -5,
            style: ye,
            anchor: .5,
            text: ":"
        }), h(D.exports.Text, {
            x: 54,
            y: -5,
            style: ye,
            anchor: .5,
            text: ":"
        })]
    })
}
const fe = y((function() {
    return h(k, {
        endTime: _.nextTime,
        onEnd: _.fetchState,
        children: ({hours: e, minutes: t, seconds: r})=>x(g, {
            children: [h(ge, {
                x: -120,
                num: e
            }), h(ge, {
                x: -20,
                num: t
            }), h(ge, {
                x: 80,
                num: r
            })]
        })
    })
}
))
  , ge = d.memo((function(e) {
    var t = e
      , {num: r} = t
      , n = p(t, ["num"]);
    return x(D.exports.Container, c(s({}, n), {
        children: [h(oe, {
            name: "num_bg.png",
            children: h(D.exports.Text, {
                style: ye,
                anchor: .5,
                text: String(Math.floor(r / 10))
            })
        }), h(oe, {
            x: 44,
            name: "num_bg.png",
            children: h(D.exports.Text, {
                style: ye,
                anchor: .5,
                text: String(r % 10)
            })
        })]
    }))
}
))
  , ye = te({
    fontSize: 30,
    fontWeight: "bold"
})
  , we = te({
    fontSize: 18
});
var Se = d.memo((function() {
    return x(D.exports.Container, {
        x: 212,
        y: 212,
        children: [h(be, {}), h(Ce, {})]
    })
}
));
const be = d.memo((function() {
    const e = l.exports.useRef(0)
      , t = $()
      , [r,n] = l.exports.useState(null)
      , [o,i] = l.exports.useState(!1)
      , [a,s] = M({
        rotation: 0,
        config: {
            duration: 5,
            ease: w.easeOut
        }
    });
    return l.exports.useEffect((()=>{
        const r = ({position: r, bonus: o})=>{
            Z("SpinAndBonus");
            let a = 2160 - 360 * r / 16;
            const c = e.current
              , p = c + 360 - c % 360 + a;
            e.current = p,
            s({
                rotation: p
            }),
            T(4300).then((()=>{
                t() && i(!0)
            }
            )),
            T(5300).then((()=>{
                t() && n(o)
            }
            ))
        }
        ;
        return _.on("spin", r),
        ()=>{
            _.off("spin", r)
        }
    }
    ), []),
    x(g, {
        children: [x(D.exports.Container, {
            ref: a,
            children: [h(oe, {
                anchor: [1, .5],
                name: "ring.png"
            }), h(oe, {
                anchor: [1, .5],
                scale: [-1, -1],
                name: "ring.png"
            }), _.payouts.map((([e,t],r)=>h(ve, {
                name: e,
                amount: t,
                i: r
            }, r)))]
        }), h(ze, {
            play: o
        }), r && h(O, {
            id: "spin-root",
            children: h(pe, {
                bonus: r,
                onClose: ()=>{
                    n(null),
                    i(!1)
                }
            })
        })]
    })
}
))
  , ze = d.memo((function({play: e}) {
    const t = l.exports.useRef(null)
      , r = l.exports.useRef(null)
      , n = l.exports.useRef(null)
      , o = l.exports.useCallback((e=>{
        e.beginFill(16777215, .35),
        e.drawRect(0, 0, 20, 100),
        e.endFill()
    }
    ), [])
      , i = l.exports.useCallback((e=>{
        e.beginFill(0),
        e.moveTo(0, 22),
        e.lineTo(130, 0),
        e.lineTo(130, 58),
        e.lineTo(0, 32),
        e.closePath(),
        e.endFill()
    }
    ), []);
    return l.exports.useEffect((()=>{
        const e = r.current
          , t = n.current;
        e && t && (e.mask = t)
    }
    ), []),
    l.exports.useEffect((()=>{
        const n = r.current
          , o = t.current;
        if (!e || !n || !o)
            return;
        const i = S.timeline();
        return i.set(n, {
            visible: !0
        }),
        i.to(o, {
            duration: .15,
            pixi: {
                scale: 1.2
            }
        }),
        i.to(o, {
            duration: .3,
            pixi: {
                scale: 1
            },
            ease: f.easeOut
        }),
        i.fromTo(n, {
            pixi: {
                x: -50,
                scale: 1
            }
        }, {
            duration: 1.2,
            pixi: {
                x: 180,
                scale: 1.5
            }
        }, 0),
        i.set(n, {
            visible: !1
        }),
        ()=>{
            i.kill()
        }
    }
    ), [e]),
    x(D.exports.Container, {
        x: 97,
        y: .5,
        ref: t,
        children: [h(D.exports.Graphics, {
            ref: n,
            x: -65,
            y: -28,
            draw: i
        }), h(D.exports.Graphics, {
            ref: r,
            x: 0,
            y: -50,
            draw: o,
            skew: [-Math.PI / 8, 0],
            visible: !1
        }), h(oe, {
            name: "bracket.png"
        })]
    })
}
))
  , ve = d.memo((function({name: e, amount: t, i: r}) {
    let n = t.toFixed(8).slice(0, 6);
    !0 === /\.$/.test(n) && (n = n.slice(0, -1));
    const o = l.exports.useRef(null);
    return l.exports.useEffect((()=>{
        const e = S.timeline({
            repeat: -1
        });
        return e.call((()=>{
            const e = o.current;
            e && (e.visible = !e.visible)
        }
        ), void 0, .5),
        ()=>{
            e.kill()
        }
    }
    ), []),
    x(D.exports.Container, {
        rotation: (r + 1) * Math.PI * 2 / 16,
        children: [h(D.exports.Sprite, {
            x: 138,
            width: 22,
            height: 22,
            anchor: .5,
            image: `/coin/${A.getAlias(e)}.png`
        }), h(oe, {
            x: 138,
            width: 24,
            height: 24,
            name: "coin_bg.png"
        }), h(D.exports.Text, {
            x: 62,
            anchor: [0, .5],
            style: $e,
            text: t.toFixed(8).slice(0, 6)
        }), h(oe, {
            visible: r % 2 == 0,
            ref: o,
            x: 163.7,
            y: 34.5,
            name: "light.png"
        })]
    })
}
))
  , Ce = y((function() {
    const e = _.freeTimes > 0
      , t = $()
      , [r,n] = l.exports.useState(!1)
      , o = _.inited
      , i = ee({
        disabled: r
    })
      , [a,p,u] = M({
        rotation: 0,
        scale: 1,
        config: {
            duration: 1,
            yoyo: !0,
            repeat: -1
        }
    })
      , [d,m,g] = M({
        scale: 1,
        config: {
            duration: 1,
            yoyo: !0,
            repeat: -1,
            ease: f.easeNone
        }
    });
    l.exports.useEffect((()=>{
        p({
            rotation: 10,
            scale: 1.2
        }),
        m({
            scale: 1.1
        });
        const e = async()=>{
            n(!0),
            await T(7e3),
            t() && n(!1)
        }
        ;
        return _.on("spin_start", e),
        ()=>{
            _.off("spin_start", e)
        }
    }
    ), []),
    l.exports.useEffect((()=>{
        var t, r, n, o;
        e ? (null == (t = u.current) || t.resume(),
        null == (r = g.current) || r.resume()) : (null == (n = u.current) || n.pause(0),
        null == (o = g.current) || o.pause(0))
    }
    ), [e]);
    const y = ()=>{
        I.login ? e && (_.handleSpin(),
        Z("Click")) : (v.back(),
        C("/login"))
    }
    ;
    return x(D.exports.Container, c(s({}, i), {
        hitArea: new L(0,0,50),
        pointertap: r ? void 0 : y,
        pointerover: ()=>{
            var t, r;
            e && (null == (t = u.current) || t.pause(),
            null == (r = g.current) || r.pause())
        }
        ,
        pointerout: ()=>{
            var t, r;
            e && (null == (t = u.current) || t.resume(),
            null == (r = g.current) || r.resume())
        }
        ,
        children: [h(oe, {
            ref: d,
            name: "spin_button.png",
            children: h(oe, {
                ref: a,
                name: "spin_text.png"
            })
        }), h(O, {
            id: "spin_now",
            children: !o || r || e ? h(ie, {
                onClick: r ? void 0 : y,
                text: "Spin now",
                y: 120
            }) : h(me, {})
        })]
    }))
}
))
  , $e = te({
    fontSize: 17,
    fontWeight: 600,
    stroke: 0,
    strokeThickness: 2
});
function Te() {
    return x(D.exports.Container, {
        x: 212,
        y: 370,
        children: [h(oe, {
            name: "flag.png",
            children: h(oe, {
                y: 15,
                name: "text2.png"
            })
        }), h(O, {
            id: "spin_now"
        })]
    })
}
function ke() {
    return W.post("/activity/spin/lottery/list/", {
        page: 1,
        pageSize: 100
    }).then((e=>e.list))
}
var _e = d.memo((function() {
    const {error: e, data: t} = P(ke);
    return e || !t ? null : h(Oe, {
        list: t
    })
}
));
function Oe({list: e}) {
    const t = l.exports.useRef()
      , r = l.exports.useRef();
    l.exports.useLayoutEffect((()=>{
        r.current.mask = t.current
    }
    ), []);
    const n = l.exports.useCallback((t=>{
        const r = e.splice(Math.floor(b(e.length - 1)), 1)[0];
        return r ? (t && e.push(t),
        r) : t
    }
    ), []);
    return x(D.exports.Container, {
        x: 212,
        y: 610,
        children: [h(oe, {
            name: "bg1.png"
        }), h(D.exports.Sprite, {
            ref: t,
            x: -185,
            y: -35,
            texture: F.WHITE,
            width: 370,
            height: 70
        }), x(D.exports.Container, {
            ref: r,
            x: -188,
            children: [h(Ae, {
                x: 0,
                y: -12,
                onChangeItem: n
            }), h(Ae, {
                delay: 2,
                x: 0,
                y: -12,
                onChangeItem: n
            }), h(Ae, {
                delay: 4,
                x: 0,
                y: -12,
                onChangeItem: n
            }), h(Ae, {
                delay: 1,
                x: 0,
                y: 12,
                onChangeItem: n
            }), h(Ae, {
                delay: 3,
                x: 0,
                y: 12,
                onChangeItem: n
            }), h(Ae, {
                delay: 5,
                x: 0,
                y: 12,
                onChangeItem: n
            })]
        })]
    })
}
function Ae(e) {
    var t = e
      , {delay: r=0, onChangeItem: n} = t
      , o = p(t, ["delay", "onChangeItem"]);
    const [i,a] = l.exports.useState((()=>n(null)))
      , [u,d,m] = M({
        x: 500,
        config: {
            duration: 6,
            delay: r,
            ease: f.easeNone,
            onComplete() {
                var e;
                a(n),
                null == (e = m.current) || e.restart()
            }
        }
    });
    return l.exports.useLayoutEffect((()=>{
        d({
            x: -200
        })
    }
    ), []),
    i ? x(D.exports.Container, c(s({
        ref: u
    }, o), {
        pivot: [-70, 7],
        children: [h(D.exports.Text, {
            x: 0,
            style: Ie,
            anchor: [1, 0],
            text: i.userName
        }), h(D.exports.Sprite, {
            x: 5,
            width: 14,
            height: 14,
            image: `/coin/${A.getAlias(i.currencyName)}.png`
        }), h(D.exports.Text, {
            x: 25,
            style: Pe,
            text: `+${i.amount}`
        })]
    })) : null
}
const Ie = te({
    fontSize: 12,
    fontWeight: "bold"
})
  , Pe = te({
    fontSize: 12,
    fill: 6135808,
    fontWeight: "bold"
});
var We = y((function() {
    return x(D.exports.Container, {
        children: [h(Se, {}), I.login ? h(Te, {}) : h(se, {}), h(_e, {}), h(O, {
            id: "spin-root"
        })]
    })
}
));
function Ee() {
    const [e,t] = l.exports.useState(!0)
      , r = l.exports.useRef(null);
    return l.exports.useEffect((()=>{
        const e = r.current;
        e && Promise.all([Q(e.loader), _.init]).then((()=>t(!1)))
    }
    ), []),
    x(Re, {
        children: [h("button", {
            onClick: ()=>v.back(),
            className: "close flex-center",
            children: h(E, {
                name: "Close"
            })
        }), e && h(R, {}), h(G, {
            ref: r,
            width: 424,
            height: 668,
            children: !e && h(We, {})
        }), !e && x(g, {
            children: [h("b", {
                className: "bg-a"
            }), h("b", {
                className: "bg-b"
            }), h("b", {
                className: "bg-c"
            })]
        })]
    })
}
const Re = z.div`
  position: relative;
  width: ${j(424)};
  height: ${j(668)};
  border-radius: ${j(20)};
  overflow: hidden;
  background-image: linear-gradient(
    8deg,
    #31343c -16%,
    #1e2025 -5%,
    #1e2025 6%,
    #1d2024 40%,
    #1e2025 74%,
    #1e2025 113%
  );
  .bg-c {
    content: "";
    position: absolute;
    background-image: radial-gradient(
      ${N("#2955ad", .8)} 0.7%,
      ${N("#2955AD", .6)} 10%,
      ${N("#2955AD", .2)} 50%,
      ${N("#2955AD", 0)} 72%
    );
    width: ${j(424)};
    height: ${j(250)};
    left: 50%;
    bottom: ${j(-10)};
    margin: 0 0 ${j(-120)} ${j(-200)};
  }
  .bg-a {
    content: "";
    position: absolute;
    background-image: radial-gradient(
      #ad2973 1%,
      ${N("#AD2973", .1)} 63%,
      ${N("#AD2973", 0)} 70%
    );
    width: ${j(340)};
    height: ${j(340)};
    left: ${j(0)};
    top: ${j(0)};
    border-radius: ${j(170)};
  }
  .bg-b {
    content: "";
    position: absolute;
    background-image: radial-gradient(
      ${N("#2955AD", .8)} 1%,
      ${N("#2955AD", .1)} 55%,
      ${N("#2955AD", 0)} 70%
    );
    width: ${j(300)};
    height: ${j(300)};
    right: 0;
    top: ${j(210)};
    border-radius: ${j(150)};
  }
  .close {
    position: absolute;
    right: ${j(6)};
    top: ${j(6)};
    width: ${j(44)};
    height: ${j(44)};
    z-index: 10;
    .icon {
      width: ${j(12)};
      height: ${j(12)};
      fill: #fff;
    }
  }
  canvas {
    width: 100% !important;
    height: 100% !important;
    position: relative;
    z-index: 1;
  }
`;
export {Ee as default};
