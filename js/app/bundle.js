if(!$.browser.msie && !parseInt($.browser.version) <= 10) { //判断浏览器及其版本,如果是IE10及其以下版本统一这样处理
	! function(t) {
		function i(n) { if(e[n]) return e[n].exports; var s = e[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(s.exports, s, s.exports, i), s.loaded = !0, s.exports }
		var e = {};
		return i.m = t, i.c = e, i.p = "", i(0)
	}([function(t, i, e) { e(1), e(44) }, function(t, i, e) { t.exports = { snabbt: e(2), Hammer: e(5), SteadyOutput: e(8), Loader: e(10), CenterIt: e(27), ImageBackground: e(28), RandomLayout: e(29), Timer: e(30), StateMachine: e(31), Util: e(9), TWEEN: e(32), NoDoubleTapZoom: e(34), Tilting: e(35), Animation: e(36), ScrollPercentage: e(37), ScrollLoader: e(38), Lazy: e(39), CommandManager: e(41), Shake: e(42) } }, function(t, i, e) { e(3), t.exports = wy.base.snabbt = e(4) }, function(t, i) {
		(function(i) {
			function e() { var t = null; return i.wy ? t = i.wy : (i.wy = { version: "0.0.1", author: "jack yang", base: {}, effect: {} }, t = i.wy), t } t.exports = e()
		}).call(i, function() { return this }())
	}, function(t, i, e) { /*! snabbt.js v0.5.8 built: 2015-09-23  (c)2015 Daniel Lundin @license MIT */
		! function(i, e) {
			var n = e();
			t.exports = n
		}(this, function() {
			var t = [],
				i = [],
				e = [],
				n = "transform",
				s = window.getComputedStyle(document.documentElement, ""),
				o = (Array.prototype.slice.call(s).join("").match(/-(moz|webkit|ms)-/) || "" === s.OLink && ["", "o"])[1];
			"webkit" === o && (n = "webkitTransform");
			var r = function(t, i, e) { var n = t; if(void 0 !== n.length) { for(var s = { chainers: [], then: function(t) { return console.log("DeprecationWarning: then() is renamed to snabbt()"), this.snabbt(t) }, snabbt: function(t) { var i = this.chainers.length; return this.chainers.forEach(function(e, n) { e.snabbt(a(t, n, i)) }), s }, setValue: function(t) { return this.chainers.forEach(function(i) { i.setValue(t) }), s }, finish: function() { return this.chainers.forEach(function(t) { t.finish() }), s }, rollback: function() { return this.chainers.forEach(function(t) { t.rollback() }), s } }, o = 0, r = n.length; r > o; ++o) s.chainers.push("string" == typeof i ? h(n[o], i, a(e, o, r)) : h(n[o], a(i, o, r), e)); return s } return "string" == typeof i ? h(n, i, a(e, 0, 1)) : h(n, a(i, 0, 1), e) },
				a = function(t, i, e) {
					if(!t) return t;
					var n = U(t);
					q(t.delay) && (n.delay = t.delay(i, e)), q(t.callback) && (console.log("DeprecationWarning: callback is renamed to complete"), n.complete = function() { t.callback.call(this, i, e) });
					var s = q(t.allDone),
						o = q(t.complete);
					(o || s) && (n.complete = function() { o && t.complete.call(this, i, e), s && i == e - 1 && t.allDone() }), q(t.valueFeeder) && (n.valueFeeder = function(n, s) { return t.valueFeeder(n, s, i, e) }), q(t.easing) && (n.easing = function(n) { return t.easing(n, i, e) });
					var r = ["position", "rotation", "skew", "rotationPost", "scale", "scalePost", "width", "height", "opacity", "fromPosition", "fromRotation", "fromSkew", "fromRotationPost", "fromScale", "fromScalePost", "fromWidth", "fromHeight", "fromOpacity", "transformOrigin", "duration", "delay"];
					return r.forEach(function(s) { q(t[s]) && (n[s] = t[s](i, e)) }), n
				},
				h = function(t, e, n) {
					function s(e) { return v.tick(e), v.updateElement(t), v.isStopped() ? void 0 : v.completed() ? void(o.loop > 1 && !v.isStopped() ? (o.loop -= 1, v.restart(), _(s)) : (o.complete && o.complete.call(t), y.length && (o = y.pop(), h = m(o, u, !0), u = m(o, U(u)), o = g(h, u, o), v = b(o), i.push([t, v]), v.tick(e), _(s)))) : _(s) }
					if("attention" === e) return c(t, n);
					if("stop" === e) return l(t);
					var o = e;
					p();
					var r = f(t),
						h = r;
					h = m(o, h, !0);
					var u = U(r);
					u = m(o, u);
					var d = g(h, u, o),
						v = b(d);
					i.push([t, v]), v.updateElement(t, !0);
					var y = [],
						x = { snabbt: function(t) { return y.unshift(a(t, 0, 1)), x }, then: function(t) { return console.log("DeprecationWarning: then() is renamed to snabbt()"), this.snabbt(t) } };
					return _(s), o.manual ? v : x
				},
				c = function(t, e) {
					function n(i) { o.tick(i), o.updateElement(t), o.completed() ? (e.callback && e.callback(t), e.loop && e.loop > 1 && (e.loop--, o.restart(), _(n))) : _(n) }
					var s = m(e, L({}));
					e.movement = s;
					var o = x(e);
					i.push([t, o]), _(n)
				},
				l = function(t) {
					for(var e = 0, n = i.length; n > e; ++e) {
						var s = i[e],
							o = s[0],
							r = s[1];
						o === t && r.stop()
					}
				},
				u = function(t, i) {
					for(var e = 0, n = t.length; n > e; ++e) {
						var s = t[e],
							o = s[0],
							r = s[1];
						if(o === i) { var a = r.getCurrentState(); return r.stop(), a }
					}
				},
				p = function() { e = e.filter(function(t) { return d(t[0]).body }) },
				d = function(t) { for(var i = t; i.parentNode;) i = i.parentNode; return i },
				f = function(t) { var n = u(i, t); return n ? n : u(e, t) },
				m = function(t, i, e) {
					i || (i = L({ position: [0, 0, 0], rotation: [0, 0, 0], rotationPost: [0, 0, 0], scale: [1, 1], scalePost: [1, 1], skew: [0, 0] }));
					var n = "position",
						s = "rotation",
						o = "skew",
						r = "rotationPost",
						a = "scale",
						h = "scalePost",
						c = "width",
						l = "height",
						u = "opacity";
					return e && (n = "fromPosition", s = "fromRotation", o = "fromSkew", r = "fromRotationPost", a = "fromScale", h = "fromScalePost", c = "fromWidth", l = "fromHeight", u = "fromOpacity"), i.position = F(t[n], i.position), i.rotation = F(t[s], i.rotation), i.rotationPost = F(t[r], i.rotationPost), i.skew = F(t[o], i.skew), i.scale = F(t[a], i.scale), i.scalePost = F(t[h], i.scalePost), i.opacity = t[u], i.width = t[c], i.height = t[l], i
				},
				g = function(t, i, e) { return e.startState = t, e.endState = i, e },
				v = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { return setTimeout(t, 1e3 / 60) },
				_ = function(i) { 0 === t.length && v(y), t.push(i) },
				y = function(n) {
					for(var s = t.length, o = 0; s > o; ++o) t[o](n);
					t.splice(0, s);
					var r = i.filter(function(t) { return t[1].completed() });
					e = e.filter(function(t) {
						for(var i = 0, e = r.length; e > i; ++i)
							if(t[0] === r[i][0]) return !1;
						return !0
					}), e = e.concat(r), i = i.filter(function(t) { return !t[1].completed() }), 0 !== t.length && v(y)
				},
				b = function(t) {
					var i = t.startState,
						e = t.endState,
						n = F(t.duration, 500),
						s = F(t.delay, 0),
						o = t.perspective,
						r = P(F(t.easing, "linear"), t),
						a = 0 === n ? e.clone() : i.clone();
					t.transformOrigin, a.transformOrigin = t.transformOrigin;
					var h, c, l = 0,
						u = 0,
						p = !1,
						d = !1,
						f = t.manual,
						m = 0,
						g = s / n;
					return c = t.valueFeeder ? H(t.valueFeeder, i, e, a) : W(i, e, a), {
						stop: function() { p = !0 },
						isStopped: function() { return p },
						finish: function(t) {
							f = !1;
							var i = n * m;
							l = u - i, h = t, r.resetFrom(m)
						},
						rollback: function(t) {
							f = !1, c.setReverse();
							var i = n * (1 - m);
							l = u - i, h = t, r.resetFrom(m)
						},
						restart: function() { l = void 0, r.resetFrom(0) },
						tick: function(t) {
							if(!p) {
								if(f) return u = t, void this.updateCurrentTransform();
								if(l || (l = t), t - l > s) {
									d = !0, u = t - s;
									var i = Math.min(Math.max(0, u - l), n);
									r.tick(i / n), this.updateCurrentTransform(), this.completed() && h && h()
								}
							}
						},
						getCurrentState: function() { return a },
						setValue: function(t) { d = !0, m = Math.min(Math.max(t, 1e-4), 1 + g) },
						updateCurrentTransform: function() {
							var t = r.getValue();
							if(f) {
								var i = Math.max(1e-5, m - g);
								r.isSpring ? t = i : (r.tick(i, !0), t = r.getValue())
							}
							c.tween(t)
						},
						completed: function() { return p ? !0 : 0 === l ? !1 : r.completed() },
						updateElement: function(t, i) {
							if(d || i) {
								var e = c.asMatrix(),
									n = c.getProperties();
								B(t, e, o), N(t, n)
							}
						}
					}
				},
				x = function(t) {
					var i = t.movement;
					t.initialVelocity = .1, t.equilibriumPosition = 0;
					var e = E(t),
						n = !1,
						s = i.position,
						o = i.rotation,
						r = i.rotationPost,
						a = i.scale,
						h = i.scalePost,
						c = i.skew,
						l = L({ position: s ? [0, 0, 0] : void 0, rotation: o ? [0, 0, 0] : void 0, rotationPost: r ? [0, 0, 0] : void 0, scale: a ? [0, 0] : void 0, skew: c ? [0, 0] : void 0 });
					return {
						stop: function() { n = !0 },
						isStopped: function() { return n },
						tick: function() { n || e.equilibrium || (e.tick(), this.updateMovement()) },
						updateMovement: function() {
							var t = e.getValue();
							s && (l.position[0] = i.position[0] * t, l.position[1] = i.position[1] * t, l.position[2] = i.position[2] * t), o && (l.rotation[0] = i.rotation[0] * t, l.rotation[1] = i.rotation[1] * t, l.rotation[2] = i.rotation[2] * t), r && (l.rotationPost[0] = i.rotationPost[0] * t, l.rotationPost[1] = i.rotationPost[1] * t, l.rotationPost[2] = i.rotationPost[2] * t), a && (l.scale[0] = 1 + i.scale[0] * t, l.scale[1] = 1 + i.scale[1] * t), h && (l.scalePost[0] = 1 + i.scalePost[0] * t, l.scalePost[1] = 1 + i.scalePost[1] * t), c && (l.skew[0] = i.skew[0] * t, l.skew[1] = i.skew[1] * t)
						},
						updateElement: function(t) { B(t, l.asMatrix()), N(t, l.getProperties()) },
						getCurrentState: function() { return l },
						completed: function() { return e.equilibrium || n },
						restart: function() { e = E(t) }
					}
				},
				w = function(t) { return t },
				k = function(t) { return(Math.cos(t * Math.PI + Math.PI) + 1) / 2 },
				T = function(t) { return t * t },
				S = function(t) { return -Math.pow(t - 1, 2) + 1 },
				E = function(t) {
					var i = F(t.startPosition, 0),
						e = F(t.equilibriumPosition, 1),
						n = F(t.initialVelocity, 0),
						s = F(t.springConstant, .8),
						o = F(t.springDeceleration, .9),
						r = F(t.springMass, 10),
						a = !1;
					return {
						isSpring: !0,
						tick: function(t, h) {
							if(0 !== t && !h && !a) {
								var c = -(i - e) * s,
									l = c / r;
								n += l, i += n, n *= o, Math.abs(i - e) < .001 && Math.abs(n) < .001 && (a = !0)
							}
						},
						resetFrom: function(t) { console.log("resetting spring from " + t), i = t, n = 0 },
						getValue: function() { return a ? e : i },
						completed: function() { return a }
					}
				},
				$ = { linear: w, ease: k, easeIn: T, easeOut: S },
				P = function(t, i) {
					if("spring" == t) return E(i);
					var e = t;
					q(t) || (e = $[t]);
					var n, s = e,
						o = 0;
					return { tick: function(t) { o = s(t), n = t }, resetFrom: function() { n = 0 }, getValue: function() { return o }, completed: function() { return n >= 1 ? n : !1 } }
				},
				I = function(t, i, e, n) { t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = i, t[13] = e, t[14] = n, t[15] = 1 },
				A = function(t, i) { t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = Math.cos(i), t[6] = -Math.sin(i), t[7] = 0, t[8] = 0, t[9] = Math.sin(i), t[10] = Math.cos(i), t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1 },
				C = function(t, i) { t[0] = Math.cos(i), t[1] = 0, t[2] = Math.sin(i), t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = -Math.sin(i), t[9] = 0, t[10] = Math.cos(i), t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1 },
				M = function(t, i) { t[0] = Math.cos(i), t[1] = -Math.sin(i), t[2] = 0, t[3] = 0, t[4] = Math.sin(i), t[5] = Math.cos(i), t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1 },
				D = function(t, i, e) { t[0] = 1, t[1] = Math.tan(i), t[2] = 0, t[3] = 0, t[4] = Math.tan(e), t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1 },
				R = function(t, i, e) { t[0] = i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1 },
				Y = function(t) { t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1 },
				X = function(t, i) { i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15] },
				O = function() {
					var t = new Float32Array(16),
						i = new Float32Array(16),
						e = new Float32Array(16);
					return Y(t), { data: t, asCSS: function() { for(var i = "matrix3d(", e = 0; 15 > e; ++e) i += Math.abs(t[e]) < 1e-4 ? "0," : t[e].toFixed(10) + ","; return i += Math.abs(t[15]) < 1e-4 ? "0)" : t[15].toFixed(10) + ")" }, clear: function() { Y(t) }, translate: function(n, s, o) { return X(t, i), I(e, n, s, o), z(i, e, t), this }, rotateX: function(n) { return X(t, i), A(e, n), z(i, e, t), this }, rotateY: function(n) { return X(t, i), C(e, n), z(i, e, t), this }, rotateZ: function(n) { return X(t, i), M(e, n), z(i, e, t), this }, scale: function(n, s) { return X(t, i), R(e, n, s), z(i, e, t), this }, skew: function(n, s) { return X(t, i), D(e, n, s), z(i, e, t), this } }
				},
				z = function(t, i, e) { return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + t[3] * i[12], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + t[3] * i[13], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + t[3] * i[14], e[3] = t[0] * i[3] + t[1] * i[7] + t[2] * i[11] + t[3] * i[15], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8] + t[7] * i[12], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9] + t[7] * i[13], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10] + t[7] * i[14], e[7] = t[4] * i[3] + t[5] * i[7] + t[6] * i[11] + t[7] * i[15], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8] + t[11] * i[12], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9] + t[11] * i[13], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10] + t[11] * i[14], e[11] = t[8] * i[3] + t[9] * i[7] + t[10] * i[11] + t[11] * i[15], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + t[15] * i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + t[15] * i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + t[15] * i[14], e[15] = t[12] * i[3] + t[13] * i[7] + t[14] * i[11] + t[15] * i[15], e },
				L = function(t) {
					var i = O(),
						e = { opacity: void 0, width: void 0, height: void 0 };
					return { position: t.position, rotation: t.rotation, rotationPost: t.rotationPost, skew: t.skew, scale: t.scale, scalePost: t.scalePost, opacity: t.opacity, width: t.width, height: t.height, clone: function() { return L({ position: this.position ? this.position.slice(0) : void 0, rotation: this.rotation ? this.rotation.slice(0) : void 0, rotationPost: this.rotationPost ? this.rotationPost.slice(0) : void 0, skew: this.skew ? this.skew.slice(0) : void 0, scale: this.scale ? this.scale.slice(0) : void 0, scalePost: this.scalePost ? this.scalePost.slice(0) : void 0, height: this.height, width: this.width, opacity: this.opacity }) }, asMatrix: function() { var t = i; return t.clear(), this.transformOrigin && t.translate(-this.transformOrigin[0], -this.transformOrigin[1], -this.transformOrigin[2]), this.scale && t.scale(this.scale[0], this.scale[1]), this.skew && t.skew(this.skew[0], this.skew[1]), this.rotation && (t.rotateX(this.rotation[0]), t.rotateY(this.rotation[1]), t.rotateZ(this.rotation[2])), this.position && t.translate(this.position[0], this.position[1], this.position[2]), this.rotationPost && (t.rotateX(this.rotationPost[0]), t.rotateY(this.rotationPost[1]), t.rotateZ(this.rotationPost[2])), this.scalePost && t.scale(this.scalePost[0], this.scalePost[1]), this.transformOrigin && t.translate(this.transformOrigin[0], this.transformOrigin[1], this.transformOrigin[2]), t }, getProperties: function() { return e.opacity = this.opacity, e.width = this.width + "px", e.height = this.height + "px", e } }
				},
				W = function(t, i, e) {
					var n = t,
						s = i,
						o = e,
						r = void 0 !== s.position,
						a = void 0 !== s.rotation,
						h = void 0 !== s.rotationPost,
						c = void 0 !== s.scale,
						l = void 0 !== s.scalePost,
						u = void 0 !== s.skew,
						p = void 0 !== s.width,
						d = void 0 !== s.height,
						f = void 0 !== s.opacity;
					return {
						tween: function(t) {
							if(r) {
								var i = s.position[0] - n.position[0],
									e = s.position[1] - n.position[1],
									m = s.position[2] - n.position[2];
								o.position[0] = n.position[0] + t * i, o.position[1] = n.position[1] + t * e, o.position[2] = n.position[2] + t * m
							}
							if(a) {
								var g = s.rotation[0] - n.rotation[0],
									v = s.rotation[1] - n.rotation[1],
									_ = s.rotation[2] - n.rotation[2];
								o.rotation[0] = n.rotation[0] + t * g, o.rotation[1] = n.rotation[1] + t * v, o.rotation[2] = n.rotation[2] + t * _
							}
							if(h) {
								var y = s.rotationPost[0] - n.rotationPost[0],
									b = s.rotationPost[1] - n.rotationPost[1],
									x = s.rotationPost[2] - n.rotationPost[2];
								o.rotationPost[0] = n.rotationPost[0] + t * y, o.rotationPost[1] = n.rotationPost[1] + t * b, o.rotationPost[2] = n.rotationPost[2] + t * x
							}
							if(u) {
								var w = s.skew[0] - n.skew[0],
									k = s.skew[1] - n.skew[1];
								o.skew[0] = n.skew[0] + t * w, o.skew[1] = n.skew[1] + t * k
							}
							if(c) {
								var T = s.scale[0] - n.scale[0],
									S = s.scale[1] - n.scale[1];
								o.scale[0] = n.scale[0] + t * T, o.scale[1] = n.scale[1] + t * S
							}
							if(l) {
								var E = s.scalePost[0] - n.scalePost[0],
									$ = s.scalePost[1] - n.scalePost[1];
								o.scalePost[0] = n.scalePost[0] + t * E, o.scalePost[1] = n.scalePost[1] + t * $
							}
							if(p) {
								var P = s.width - n.width;
								o.width = n.width + t * P
							}
							if(d) {
								var I = s.height - n.height;
								o.height = n.height + t * I
							}
							if(f) {
								var A = s.opacity - n.opacity;
								o.opacity = n.opacity + t * A
							}
						},
						asMatrix: function() { return o.asMatrix() },
						getProperties: function() { return o.getProperties() },
						setReverse: function() {
							var t = n;
							n = s, s = t
						}
					}
				},
				H = function(t, i, e, n) {
					var s = t(0, O()),
						o = i,
						r = e,
						a = n,
						h = !1;
					return {
						tween: function(i) {
							h && (i = 1 - i), s.clear(), s = t(i, s);
							var e = r.width - o.width,
								n = r.height - o.height,
								c = r.opacity - o.opacity;
							void 0 !== r.width && (a.width = o.width + i * e), void 0 !== r.height && (a.height = o.height + i * n), void 0 !== r.opacity && (a.opacity = o.opacity + i * c)
						},
						asMatrix: function() { return s },
						getProperties: function() { return a.getProperties() },
						setReverse: function() { h = !0 }
					}
				},
				F = function(t, i) { return "undefined" == typeof t ? i : t },
				B = function(t, i, e) {
					var s = "";
					e && (s = "perspective(" + e + "px) ");
					var o = i.asCSS();
					t.style[n] = s + o
				},
				N = function(t, i) { for(var e in i) t.style[e] = i[e] },
				q = function(t) { return "function" == typeof t },
				U = function(t) { if(!t) return t; var i = {}; for(var e in t) i[e] = t[e]; return i };
			return window.jQuery && ! function(t) { t.fn.snabbt = function(t, i) { return r(this.get(), t, i) } }(jQuery), r.createMatrix = O, r.setElementTransform = B, r
		})
	}, function(t, i, e) { e(3), t.exports = wy.base.Hammer = e(6) }, function(t, i, e) {
		var n;
		/*! Hammer.JS - v2.0.4 - 2014-09-28
		 * http://hammerjs.github.io/
		 *
		 * Copyright (c) 2014 Jorik Tangelder;
		 * Licensed under the MIT license */
		! function(s, o, r, a) {
			"use strict";

			function h(t, i, e) { return setTimeout(f(t, e), i) }

			function c(t, i, e) { return Array.isArray(t) ? (l(t, e[i], e), !0) : !1 }

			function l(t, i, e) {
				var n;
				if(t)
					if(t.forEach) t.forEach(i, e);
					else if(t.length !== a)
					for(n = 0; n < t.length;) i.call(e, t[n], n, t), n++;
				else
					for(n in t) t.hasOwnProperty(n) && i.call(e, t[n], n, t)
			}

			function u(t, i, e) { for(var n = Object.keys(i), s = 0; s < n.length;)(!e || e && t[n[s]] === a) && (t[n[s]] = i[n[s]]), s++; return t }

			function p(t, i) { return u(t, i, !0) }

			function d(t, i, e) {
				var n, s = i.prototype;
				n = t.prototype = Object.create(s), n.constructor = t, n._super = s, e && u(n, e)
			}

			function f(t, i) { return function() { return t.apply(i, arguments) } }

			function m(t, i) { return typeof t == ft ? t.apply(i ? i[0] || a : a, i) : t }

			function g(t, i) { return t === a ? i : t }

			function v(t, i, e) { l(x(i), function(i) { t.addEventListener(i, e, !1) }) }

			function _(t, i, e) { l(x(i), function(i) { t.removeEventListener(i, e, !1) }) }

			function y(t, i) {
				for(; t;) {
					if(t == i) return !0;
					t = t.parentNode
				}
				return !1
			}

			function b(t, i) { return t.indexOf(i) > -1 }

			function x(t) { return t.trim().split(/\s+/g) }

			function w(t, i, e) {
				if(t.indexOf && !e) return t.indexOf(i);
				for(var n = 0; n < t.length;) {
					if(e && t[n][e] == i || !e && t[n] === i) return n;
					n++
				}
				return -1
			}

			function k(t) { return Array.prototype.slice.call(t, 0) }

			function T(t, i, e) {
				for(var n = [], s = [], o = 0; o < t.length;) {
					var r = i ? t[o][i] : t[o];
					w(s, r) < 0 && n.push(t[o]), s[o] = r, o++
				}
				return e && (n = i ? n.sort(function(t, e) { return t[i] > e[i] }) : n.sort()), n
			}

			function S(t, i) {
				for(var e, n, s = i[0].toUpperCase() + i.slice(1), o = 0; o < pt.length;) {
					if(e = pt[o], n = e ? e + s : i, n in t) return n;
					o++
				}
				return a
			}

			function E() { return _t++ }

			function $(t) { var i = t.ownerDocument; return i.defaultView || i.parentWindow }

			function P(t, i) {
				var e = this;
				this.manager = t, this.callback = i, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(i) { m(t.options.enable, [t]) && e.handler(i) }, this.init()
			}

			function I(t) { var i, e = t.options.inputClass; return new(i = e ? e : xt ? B : wt ? U : bt ? j : F)(t, A) }

			function A(t, i, e) {
				var n = e.pointers.length,
					s = e.changedPointers.length,
					o = i & Pt && n - s === 0,
					r = i & (At | Ct) && n - s === 0;
				e.isFirst = !!o, e.isFinal = !!r, o && (t.session = {}), e.eventType = i, C(t, e), t.emit("hammer.input", e), t.recognize(e), t.session.prevInput = e
			}

			function C(t, i) {
				var e = t.session,
					n = i.pointers,
					s = n.length;
				e.firstInput || (e.firstInput = R(i)), s > 1 && !e.firstMultiple ? e.firstMultiple = R(i) : 1 === s && (e.firstMultiple = !1);
				var o = e.firstInput,
					r = e.firstMultiple,
					a = r ? r.center : o.center,
					h = i.center = Y(n);
				i.timeStamp = vt(), i.deltaTime = i.timeStamp - o.timeStamp, i.angle = L(a, h), i.distance = z(a, h), M(e, i), i.offsetDirection = O(i.deltaX, i.deltaY), i.scale = r ? H(r.pointers, n) : 1, i.rotation = r ? W(r.pointers, n) : 0, D(e, i);
				var c = t.element;
				y(i.srcEvent.target, c) && (c = i.srcEvent.target), i.target = c
			}

			function M(t, i) {
				var e = i.center,
					n = t.offsetDelta || {},
					s = t.prevDelta || {},
					o = t.prevInput || {};
				(i.eventType === Pt || o.eventType === At) && (s = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }, n = t.offsetDelta = { x: e.x, y: e.y }), i.deltaX = s.x + (e.x - n.x), i.deltaY = s.y + (e.y - n.y)
			}

			function D(t, i) {
				var e, n, s, o, r = t.lastInterval || i,
					h = i.timeStamp - r.timeStamp;
				if(i.eventType != Ct && (h > $t || r.velocity === a)) {
					var c = r.deltaX - i.deltaX,
						l = r.deltaY - i.deltaY,
						u = X(h, c, l);
					n = u.x, s = u.y, e = gt(u.x) > gt(u.y) ? u.x : u.y, o = O(c, l), t.lastInterval = i
				} else e = r.velocity, n = r.velocityX, s = r.velocityY, o = r.direction;
				i.velocity = e, i.velocityX = n, i.velocityY = s, i.direction = o
			}

			function R(t) { for(var i = [], e = 0; e < t.pointers.length;) i[e] = { clientX: mt(t.pointers[e].clientX), clientY: mt(t.pointers[e].clientY) }, e++; return { timeStamp: vt(), pointers: i, center: Y(i), deltaX: t.deltaX, deltaY: t.deltaY } }

			function Y(t) { var i = t.length; if(1 === i) return { x: mt(t[0].clientX), y: mt(t[0].clientY) }; for(var e = 0, n = 0, s = 0; i > s;) e += t[s].clientX, n += t[s].clientY, s++; return { x: mt(e / i), y: mt(n / i) } }

			function X(t, i, e) { return { x: i / t || 0, y: e / t || 0 } }

			function O(t, i) { return t === i ? Mt : gt(t) >= gt(i) ? t > 0 ? Dt : Rt : i > 0 ? Yt : Xt }

			function z(t, i, e) {
				e || (e = Wt);
				var n = i[e[0]] - t[e[0]],
					s = i[e[1]] - t[e[1]];
				return Math.sqrt(n * n + s * s)
			}

			function L(t, i, e) {
				e || (e = Wt);
				var n = i[e[0]] - t[e[0]],
					s = i[e[1]] - t[e[1]];
				return 180 * Math.atan2(s, n) / Math.PI
			}

			function W(t, i) { return L(i[1], i[0], Ht) - L(t[1], t[0], Ht) }

			function H(t, i) { return z(i[0], i[1], Ht) / z(t[0], t[1], Ht) }

			function F() { this.evEl = Bt, this.evWin = Nt, this.allow = !0, this.pressed = !1, P.apply(this, arguments) }

			function B() { this.evEl = Vt, this.evWin = jt, P.apply(this, arguments), this.store = this.manager.session.pointerEvents = [] }

			function N() { this.evTarget = Zt, this.evWin = Qt, this.started = !1, P.apply(this, arguments) }

			function q(t, i) {
				var e = k(t.touches),
					n = k(t.changedTouches);
				return i & (At | Ct) && (e = T(e.concat(n), "identifier", !0)), [e, n]
			}

			function U() { this.evTarget = Kt, this.targetIds = {}, P.apply(this, arguments) }

			function V(t, i) {
				var e = k(t.touches),
					n = this.targetIds;
				if(i & (Pt | It) && 1 === e.length) return n[e[0].identifier] = !0, [e, e];
				var s, o, r = k(t.changedTouches),
					a = [],
					h = this.target;
				if(o = e.filter(function(t) { return y(t.target, h) }), i === Pt)
					for(s = 0; s < o.length;) n[o[s].identifier] = !0, s++;
				for(s = 0; s < r.length;) n[r[s].identifier] && a.push(r[s]), i & (At | Ct) && delete n[r[s].identifier], s++;
				return a.length ? [T(o.concat(a), "identifier", !0), a] : void 0
			}

			function j() {
				P.apply(this, arguments);
				var t = f(this.handler, this);
				this.touch = new U(this.manager, t), this.mouse = new F(this.manager, t)
			}

			function G(t, i) { this.manager = t, this.set(i) }

			function Z(t) {
				if(b(t, oi)) return oi;
				var i = b(t, ri),
					e = b(t, ai);
				return i && e ? ri + " " + ai : i || e ? i ? ri : ai : b(t, si) ? si : ni
			}

			function Q(t) { this.id = E(), this.manager = null, this.options = p(t || {}, this.defaults), this.options.enable = g(this.options.enable, !0), this.state = hi, this.simultaneous = {}, this.requireFail = [] }

			function J(t) { return t & di ? "cancel" : t & ui ? "end" : t & li ? "move" : t & ci ? "start" : "" }

			function K(t) { return t == Xt ? "down" : t == Yt ? "up" : t == Dt ? "left" : t == Rt ? "right" : "" }

			function tt(t, i) { var e = i.manager; return e ? e.get(t) : t }

			function it() { Q.apply(this, arguments) }

			function et() { it.apply(this, arguments), this.pX = null, this.pY = null }

			function nt() { it.apply(this, arguments) }

			function st() { Q.apply(this, arguments), this._timer = null, this._input = null }

			function ot() { it.apply(this, arguments) }

			function rt() { it.apply(this, arguments) }

			function at() { Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0 }

			function ht(t, i) { return i = i || {}, i.recognizers = g(i.recognizers, ht.defaults.preset), new ct(t, i) }

			function ct(t, i) {
				i = i || {}, this.options = p(i, ht.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = I(this), this.touchAction = new G(this, this.options.touchAction), lt(this, !0), l(i.recognizers, function(t) {
					var i = this.add(new t[0](t[1]));
					t[2] && i.recognizeWith(t[2]), t[3] && i.requireFailure(t[3])
				}, this)
			}

			function lt(t, i) {
				var e = t.element;
				l(t.options.cssProps, function(t, n) { e.style[S(e.style, n)] = i ? t : "" })
			}

			function ut(t, i) {
				var e = o.createEvent("Event");
				e.initEvent(t, !0, !0), e.gesture = i, i.target.dispatchEvent(e)
			}
			var pt = ["", "webkit", "moz", "MS", "ms", "o"],
				dt = o.createElement("div"),
				ft = "function",
				mt = Math.round,
				gt = Math.abs,
				vt = Date.now,
				_t = 1,
				yt = /mobile|tablet|ip(ad|hone|od)|android/i,
				bt = "ontouchstart" in s,
				xt = S(s, "PointerEvent") !== a,
				wt = bt && yt.test(navigator.userAgent),
				kt = "touch",
				Tt = "pen",
				St = "mouse",
				Et = "kinect",
				$t = 25,
				Pt = 1,
				It = 2,
				At = 4,
				Ct = 8,
				Mt = 1,
				Dt = 2,
				Rt = 4,
				Yt = 8,
				Xt = 16,
				Ot = Dt | Rt,
				zt = Yt | Xt,
				Lt = Ot | zt,
				Wt = ["x", "y"],
				Ht = ["clientX", "clientY"];
			P.prototype = { handler: function() {}, init: function() { this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v($(this.element), this.evWin, this.domHandler) }, destroy: function() { this.evEl && _(this.element, this.evEl, this.domHandler), this.evTarget && _(this.target, this.evTarget, this.domHandler), this.evWin && _($(this.element), this.evWin, this.domHandler) } };
			var Ft = { mousedown: Pt, mousemove: It, mouseup: At },
				Bt = "mousedown",
				Nt = "mousemove mouseup";
			d(F, P, {
				handler: function(t) {
					var i = Ft[t.type];
					i & Pt && 0 === t.button && (this.pressed = !0), i & It && 1 !== t.which && (i = At), this.pressed && this.allow && (i & At && (this.pressed = !1), this.callback(this.manager, i, { pointers: [t], changedPointers: [t], pointerType: St, srcEvent: t }))
				}
			});
			var qt = { pointerdown: Pt, pointermove: It, pointerup: At, pointercancel: Ct, pointerout: Ct },
				Ut = { 2: kt, 3: Tt, 4: St, 5: Et },
				Vt = "pointerdown",
				jt = "pointermove pointerup pointercancel";
			s.MSPointerEvent && (Vt = "MSPointerDown", jt = "MSPointerMove MSPointerUp MSPointerCancel"), d(B, P, {
				handler: function(t) {
					var i = this.store,
						e = !1,
						n = t.type.toLowerCase().replace("ms", ""),
						s = qt[n],
						o = Ut[t.pointerType] || t.pointerType,
						r = o == kt,
						a = w(i, t.pointerId, "pointerId");
					s & Pt && (0 === t.button || r) ? 0 > a && (i.push(t), a = i.length - 1) : s & (At | Ct) && (e = !0), 0 > a || (i[a] = t, this.callback(this.manager, s, { pointers: i, changedPointers: [t], pointerType: o, srcEvent: t }), e && i.splice(a, 1))
				}
			});
			var Gt = { touchstart: Pt, touchmove: It, touchend: At, touchcancel: Ct },
				Zt = "touchstart",
				Qt = "touchstart touchmove touchend touchcancel";
			d(N, P, {
				handler: function(t) {
					var i = Gt[t.type];
					if(i === Pt && (this.started = !0), this.started) {
						var e = q.call(this, t, i);
						i & (At | Ct) && e[0].length - e[1].length === 0 && (this.started = !1), this.callback(this.manager, i, { pointers: e[0], changedPointers: e[1], pointerType: kt, srcEvent: t })
					}
				}
			});
			var Jt = { touchstart: Pt, touchmove: It, touchend: At, touchcancel: Ct },
				Kt = "touchstart touchmove touchend touchcancel";
			d(U, P, {
				handler: function(t) {
					var i = Jt[t.type],
						e = V.call(this, t, i);
					e && this.callback(this.manager, i, { pointers: e[0], changedPointers: e[1], pointerType: kt, srcEvent: t })
				}
			}), d(j, P, {
				handler: function(t, i, e) {
					var n = e.pointerType == kt,
						s = e.pointerType == St;
					if(n) this.mouse.allow = !1;
					else if(s && !this.mouse.allow) return;
					i & (At | Ct) && (this.mouse.allow = !0), this.callback(t, i, e)
				},
				destroy: function() { this.touch.destroy(), this.mouse.destroy() }
			});
			var ti = S(dt.style, "touchAction"),
				ii = ti !== a,
				ei = "compute",
				ni = "auto",
				si = "manipulation",
				oi = "none",
				ri = "pan-x",
				ai = "pan-y";
			G.prototype = {
				set: function(t) { t == ei && (t = this.compute()), ii && (this.manager.element.style[ti] = t), this.actions = t.toLowerCase().trim() },
				update: function() { this.set(this.manager.options.touchAction) },
				compute: function() { var t = []; return l(this.manager.recognizers, function(i) { m(i.options.enable, [i]) && (t = t.concat(i.getTouchAction())) }), Z(t.join(" ")) },
				preventDefaults: function(t) {
					if(!ii) {
						var i = t.srcEvent,
							e = t.offsetDirection;
						if(this.manager.session.prevented) return void i.preventDefault();
						var n = this.actions,
							s = b(n, oi),
							o = b(n, ai),
							r = b(n, ri);
						return s || o && e & Ot || r && e & zt ? this.preventSrc(i) : void 0
					}
				},
				preventSrc: function(t) { this.manager.session.prevented = !0, t.preventDefault() }
			};
			var hi = 1,
				ci = 2,
				li = 4,
				ui = 8,
				pi = ui,
				di = 16,
				fi = 32;
			Q.prototype = {
				defaults: {},
				set: function(t) { return u(this.options, t), this.manager && this.manager.touchAction.update(), this },
				recognizeWith: function(t) { if(c(t, "recognizeWith", this)) return this; var i = this.simultaneous; return t = tt(t, this), i[t.id] || (i[t.id] = t, t.recognizeWith(this)), this },
				dropRecognizeWith: function(t) { return c(t, "dropRecognizeWith", this) ? this : (t = tt(t, this), delete this.simultaneous[t.id], this) },
				requireFailure: function(t) { if(c(t, "requireFailure", this)) return this; var i = this.requireFail; return t = tt(t, this), -1 === w(i, t) && (i.push(t), t.requireFailure(this)), this },
				dropRequireFailure: function(t) {
					if(c(t, "dropRequireFailure", this)) return this;
					t = tt(t, this);
					var i = w(this.requireFail, t);
					return i > -1 && this.requireFail.splice(i, 1), this
				},
				hasRequireFailures: function() { return this.requireFail.length > 0 },
				canRecognizeWith: function(t) { return !!this.simultaneous[t.id] },
				emit: function(t) {
					function i(i) { e.manager.emit(e.options.event + (i ? J(n) : ""), t) }
					var e = this,
						n = this.state;
					ui > n && i(!0), i(), n >= ui && i(!0)
				},
				tryEmit: function(t) { return this.canEmit() ? this.emit(t) : void(this.state = fi) },
				canEmit: function() {
					for(var t = 0; t < this.requireFail.length;) {
						if(!(this.requireFail[t].state & (fi | hi))) return !1;
						t++
					}
					return !0
				},
				recognize: function(t) { var i = u({}, t); return m(this.options.enable, [this, i]) ? (this.state & (pi | di | fi) && (this.state = hi), this.state = this.process(i), void(this.state & (ci | li | ui | di) && this.tryEmit(i))) : (this.reset(), void(this.state = fi)) },
				process: function(t) {},
				getTouchAction: function() {},
				reset: function() {}
			}, d(it, Q, {
				defaults: { pointers: 1 },
				attrTest: function(t) { var i = this.options.pointers; return 0 === i || t.pointers.length === i },
				process: function(t) {
					var i = this.state,
						e = t.eventType,
						n = i & (ci | li),
						s = this.attrTest(t);
					return n && (e & Ct || !s) ? i | di : n || s ? e & At ? i | ui : i & ci ? i | li : ci : fi
				}
			}), d(et, it, {
				defaults: { event: "pan", threshold: 10, pointers: 1, direction: Lt },
				getTouchAction: function() {
					var t = this.options.direction,
						i = [];
					return t & Ot && i.push(ai), t & zt && i.push(ri), i
				},
				directionTest: function(t) {
					var i = this.options,
						e = !0,
						n = t.distance,
						s = t.direction,
						o = t.deltaX,
						r = t.deltaY;
					return s & i.direction || (i.direction & Ot ? (s = 0 === o ? Mt : 0 > o ? Dt : Rt, e = o != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === r ? Mt : 0 > r ? Yt : Xt, e = r != this.pY, n = Math.abs(t.deltaY))), t.direction = s, e && n > i.threshold && s & i.direction
				},
				attrTest: function(t) { return it.prototype.attrTest.call(this, t) && (this.state & ci || !(this.state & ci) && this.directionTest(t)) },
				emit: function(t) {
					this.pX = t.deltaX, this.pY = t.deltaY;
					var i = K(t.direction);
					i && this.manager.emit(this.options.event + i, t), this._super.emit.call(this, t)
				}
			}), d(nt, it, {
				defaults: { event: "pinch", threshold: 0, pointers: 2 },
				getTouchAction: function() { return [oi] },
				attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ci) },
				emit: function(t) {
					if(this._super.emit.call(this, t), 1 !== t.scale) {
						var i = t.scale < 1 ? "in" : "out";
						this.manager.emit(this.options.event + i, t)
					}
				}
			}), d(st, Q, {
				defaults: { event: "press", pointers: 1, time: 500, threshold: 5 },
				getTouchAction: function() { return [ni] },
				process: function(t) {
					var i = this.options,
						e = t.pointers.length === i.pointers,
						n = t.distance < i.threshold,
						s = t.deltaTime > i.time;
					if(this._input = t, !n || !e || t.eventType & (At | Ct) && !s) this.reset();
					else if(t.eventType & Pt) this.reset(), this._timer = h(function() { this.state = pi, this.tryEmit() }, i.time, this);
					else if(t.eventType & At) return pi;
					return fi
				},
				reset: function() { clearTimeout(this._timer) },
				emit: function(t) { this.state === pi && (t && t.eventType & At ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = vt(), this.manager.emit(this.options.event, this._input))) }
			}), d(ot, it, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() { return [oi] }, attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ci) } }), d(rt, it, {
				defaults: { event: "swipe", threshold: 10, velocity: .65, direction: Ot | zt, pointers: 1 },
				getTouchAction: function() { return et.prototype.getTouchAction.call(this) },
				attrTest: function(t) { var i, e = this.options.direction; return e & (Ot | zt) ? i = t.velocity : e & Ot ? i = t.velocityX : e & zt && (i = t.velocityY), this._super.attrTest.call(this, t) && e & t.direction && t.distance > this.options.threshold && gt(i) > this.options.velocity && t.eventType & At },
				emit: function(t) {
					var i = K(t.direction);
					i && this.manager.emit(this.options.event + i, t), this.manager.emit(this.options.event, t)
				}
			}), d(at, Q, {
				defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 },
				getTouchAction: function() { return [si] },
				process: function(t) {
					var i = this.options,
						e = t.pointers.length === i.pointers,
						n = t.distance < i.threshold,
						s = t.deltaTime < i.time;
					if(this.reset(), t.eventType & Pt && 0 === this.count) return this.failTimeout();
					if(n && s && e) {
						if(t.eventType != At) return this.failTimeout();
						var o = this.pTime ? t.timeStamp - this.pTime < i.interval : !0,
							r = !this.pCenter || z(this.pCenter, t.center) < i.posThreshold;
						this.pTime = t.timeStamp, this.pCenter = t.center, r && o ? this.count += 1 : this.count = 1, this._input = t;
						var a = this.count % i.taps;
						if(0 === a) return this.hasRequireFailures() ? (this._timer = h(function() { this.state = pi, this.tryEmit() }, i.interval, this), ci) : pi
					}
					return fi
				},
				failTimeout: function() { return this._timer = h(function() { this.state = fi }, this.options.interval, this), fi },
				reset: function() { clearTimeout(this._timer) },
				emit: function() { this.state == pi && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) }
			}), ht.VERSION = "2.0.4", ht.defaults = {
				domEvents: !1,
				touchAction: ei,
				enable: !0,
				inputTarget: null,
				inputClass: null,
				preset: [
					[ot, { enable: !1 }],
					[nt, { enable: !1 },
						["rotate"]
					],
					[rt, { direction: Ot }],
					[et, { direction: Ot },
						["swipe"]
					],
					[at],
					[at, { event: "doubletap", taps: 2 },
						["tap"]
					],
					[st]
				],
				cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" }
			};
			var mi = 1,
				gi = 2;
			ct.prototype = {
				set: function(t) { return u(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this },
				stop: function(t) { this.session.stopped = t ? gi : mi },
				recognize: function(t) {
					var i = this.session;
					if(!i.stopped) {
						this.touchAction.preventDefaults(t);
						var e, n = this.recognizers,
							s = i.curRecognizer;
						(!s || s && s.state & pi) && (s = i.curRecognizer = null);
						for(var o = 0; o < n.length;) e = n[o], i.stopped === gi || s && e != s && !e.canRecognizeWith(s) ? e.reset() : e.recognize(t), !s && e.state & (ci | li | ui) && (s = i.curRecognizer = e), o++
					}
				},
				get: function(t) {
					if(t instanceof Q) return t;
					for(var i = this.recognizers, e = 0; e < i.length; e++)
						if(i[e].options.event == t) return i[e];
					return null
				},
				add: function(t) { if(c(t, "add", this)) return this; var i = this.get(t.options.event); return i && this.remove(i), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t },
				remove: function(t) { if(c(t, "remove", this)) return this; var i = this.recognizers; return t = this.get(t), i.splice(w(i, t), 1), this.touchAction.update(), this },
				on: function(t, i) { var e = this.handlers; return l(x(t), function(t) { e[t] = e[t] || [], e[t].push(i) }), this },
				off: function(t, i) { var e = this.handlers; return l(x(t), function(t) { i ? e[t].splice(w(e[t], i), 1) : delete e[t] }), this },
				emit: function(t, i) { this.options.domEvents && ut(t, i); var e = this.handlers[t] && this.handlers[t].slice(); if(e && e.length) { i.type = t, i.preventDefault = function() { i.srcEvent.preventDefault() }; for(var n = 0; n < e.length;) e[n](i), n++ } },
				destroy: function() { this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null }
			}, u(ht, { INPUT_START: Pt, INPUT_MOVE: It, INPUT_END: At, INPUT_CANCEL: Ct, STATE_POSSIBLE: hi, STATE_BEGAN: ci, STATE_CHANGED: li, STATE_ENDED: ui, STATE_RECOGNIZED: pi, STATE_CANCELLED: di, STATE_FAILED: fi, DIRECTION_NONE: Mt, DIRECTION_LEFT: Dt, DIRECTION_RIGHT: Rt, DIRECTION_UP: Yt, DIRECTION_DOWN: Xt, DIRECTION_HORIZONTAL: Ot, DIRECTION_VERTICAL: zt, DIRECTION_ALL: Lt, Manager: ct, Input: P, TouchAction: G, TouchInput: U, MouseInput: F, PointerEventInput: B, TouchMouseInput: j, SingleTouchInput: N, Recognizer: Q, AttrRecognizer: it, Tap: at, Pan: et, Swipe: rt, Pinch: nt, Rotate: ot, Press: st, on: v, off: _, each: l, merge: p, extend: u, inherit: d, bindFn: f, prefixed: S }), "function" == ft && e(7) ? (n = function() { return ht }.call(i, e, i, t), !(n !== a && (t.exports = n))) : "undefined" != typeof t && t.exports ? t.exports = ht : s[r] = ht
		}(window, document, "Hammer")
	}, function(t, i) {
		(function(i) { t.exports = i }).call(i, {})
	}, function(t, i, e) {
		function n(t) {
			var i = { max: 1e3, interval: 1e3, overflow: "omit" };
			t = t || {};
			for(var e in i) void 0 != t[e] && null != t[e] && (i[e] = t[e]);
			this.options = i, this.queue = [], this.registerFunc = null, this.interval = 0, this.lastConsumeTime = null, this.loopId = 0
		}
		e(3);
		var s = e(9),
			o = s.requestAnimationFrame,
			r = s.cancelAnimationFrame,
			a = s.random;
		n.prototype = {
			constructor: n,
			_consume: function() {
				var t = this.queue.shift();
				t.options.loop && this.queue.push(t), this.registerFunc(t.item, this.queue)
			},
			_getNextInterval: function() { var t; return "function" == typeof this.options.interval ? t = this.options.interval() : "number" == typeof this.options.interval ? t = this.options.interval : this.options.interval instanceof Array && (t = a(this.options.interval[0], this.options.interval[1])), t },
			_loop: function() {
				var t;
				this.queue.length > 0 && (t = new Date, t - this.lastConsumeTime > this.interval && (this._consume(), this.lastConsumeTime = t, this.interval = this._getNextInterval())), this.loopId = o(this._loop.bind(this))
			},
			register: function(t) { this.registerFunc = t },
			push: function(t, i) { return i || (i = { loop: !1, delay: -1 }), i.delay >= 0 ? void setTimeout(function() { this.registerFunc(t, this.queue) }.bind(this), i.delay) : void(this.queue.length < this.options.max ? this.queue.push({ item: t, options: i }) : "shift" === this.options.overflow ? (this.queue.shift(), this.queue.push({ item: t, options: i })) : console.warn("reach max size, omit more items, max: " + this.options.max)) },
			start: function() { this.lastConsumeTime = new Date, this.interval = this._getNextInterval(), this._loop() },
			stop: function(t) { r(this.loopId), t && (this.queue = []) }
		}, t.exports = wy.base.SteadyOutput = n
	}, function(t, i, e) {
		function n(t, i) { this.min = t, this.max = i, this.span = i - t + 1 } e(3), n.prototype.map = function(t) { var i = 0; return i = t < this.min ? this.max - Math.abs((this.min - t) % this.span) : t > this.max ? this.min + Math.abs((t - this.max) % this.span) : t }(function() {
			for(var t = 0, i = ["webkit", "moz"], e = 0; e < i.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
			window.requestAnimationFrame || (window.requestAnimationFrame = function(i, e) {
				var n = (new Date).getTime(),
					s = Math.max(0, 16 - (n - t)),
					o = window.setTimeout(function() { i(n + s) }, s);
				return t = n + s, o
			}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) })
		}());
		var s = { random: function(t, i) { return Math.floor(t + Math.random() * (i - t)) }, getDegree: function(t) { return t / Math.PI * 180 }, getRadian: function(t) { return t * Math.PI / 180 }, requestAnimationFrame: window.requestAnimationFrame, cancelAnimationFrame: window.cancelAnimationFrame, RangeMapping: n };
		t.exports = wy.base.Util = s
	}, function(t, i, e) { e(3), t.exports = wy.base.Loader = e(11) }, function(t, i, e) { t.exports = e(12), t.exports.Resource = e(22), t.exports.middleware = { caching: { memory: e(24) }, parsing: { blob: e(25) } } }, function(t, i, e) {
		function n(t, i) { a.call(this), i = i || 10, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._boundOnLoad = this._onLoad.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = s.queue(this._boundLoadResource, i), this.resources = {} }
		var s = e(13),
			o = e(16),
			r = e(22),
			a = e(23);
		n.prototype = Object.create(a.prototype), n.prototype.constructor = n, t.exports = n, n.prototype.add = n.prototype.enqueue = function(t, i, e, n) { if(Array.isArray(t)) { for(var s = 0; s < t.length; ++s) this.add(t[s]); return this } if("object" == typeof t && (n = i || t.callback || t.onComplete, e = t, i = t.url, t = t.name || t.key || t.url), "string" != typeof i && (n = e, e = i, i = t), "string" != typeof i) throw new Error("No url passed to add resource to loader."); if("function" == typeof e && (n = e, e = null), this.resources[t]) throw new Error('Resource with name "' + t + '" already exists.'); return i = this._handleBaseUrl(i), this.resources[t] = new r(t, i, e), "function" == typeof n && this.resources[t].once("afterMiddleware", n), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = 100 / this._buffer.length), this }, n.prototype._handleBaseUrl = function(t) { var i = o.parse(t); return i.protocol || 0 === i.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && t.lastIndexOf("/") !== t.length - 1 ? this.baseUrl + "/" + t : this.baseUrl + t }, n.prototype.before = n.prototype.pre = function(t) { return this._beforeMiddleware.push(t), this }, n.prototype.after = n.prototype.use = function(t) { return this._afterMiddleware.push(t), this }, n.prototype.reset = function() { this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1, this.resources = {} }, n.prototype.load = function(t) {
			if("function" == typeof t && this.once("complete", t), this._queue.started) return this;
			this.emit("start", this);
			for(var i = 0; i < this._buffer.length; ++i) this._queue.push(this._buffer[i]);
			return this._buffer.length = 0, this
		}, n.prototype._loadResource = function(t, i) {
			var e = this;
			t._dequeue = i, this._runMiddleware(t, this._beforeMiddleware, function() { t.load(e._boundOnLoad) })
		}, n.prototype._onComplete = function() { this.emit("complete", this, this.resources) }, n.prototype._onLoad = function(t) { this.progress += this._progressChunk, this.emit("progress", this, t), this._runMiddleware(t, this._afterMiddleware, function() { t.emit("afterMiddleware", t), this._numToLoad--, 0 === this._numToLoad && (this.progress = 100, this._onComplete()), t.error ? this.emit("error", t.error, this, t) : this.emit("load", this, t) }), t._dequeue() }, n.prototype._runMiddleware = function(t, i, e) {
			var n = this;
			s.eachSeries(i, function(i, e) { i.call(n, t, e) }, e.bind(this, t))
		}, n.LOAD_TYPE = r.LOAD_TYPE, n.XHR_READY_STATE = r.XHR_READY_STATE, n.XHR_RESPONSE_TYPE = r.XHR_RESPONSE_TYPE
	}, function(t, i, e) {
		var n, s;
		(function(e, o) {
			/*!
			 * async
			 * https://github.com/caolan/async
			 *
			 * Copyright 2010-2014 Caolan McMahon
			 * Released under the MIT license
			 */
			! function() {
				function r(t) {
					var i = !1;
					return function() {
						if(i) throw new Error("Callback was already called.");
						i = !0, t.apply(a, arguments)
					}
				}
				var a, h, c = {};
				a = this, null != a && (h = a.async), c.noConflict = function() { return a.async = h, c };
				var l = Object.prototype.toString,
					u = Array.isArray || function(t) { return "[object Array]" === l.call(t) },
					p = function(t, i) { for(var e = 0; e < t.length; e += 1) i(t[e], e, t) },
					d = function(t, i) { if(t.map) return t.map(i); var e = []; return p(t, function(t, n, s) { e.push(i(t, n, s)) }), e },
					f = function(t, i, e) { return t.reduce ? t.reduce(i, e) : (p(t, function(t, n, s) { e = i(e, t, n, s) }), e) },
					m = function(t) { if(Object.keys) return Object.keys(t); var i = []; for(var e in t) t.hasOwnProperty(e) && i.push(e); return i };
				"undefined" != typeof e && e.nextTick ? (c.nextTick = e.nextTick, "undefined" != typeof o ? c.setImmediate = function(t) { o(t) } : c.setImmediate = c.nextTick) : "function" == typeof o ? (c.nextTick = function(t) { o(t) }, c.setImmediate = c.nextTick) : (c.nextTick = function(t) { setTimeout(t, 0) }, c.setImmediate = c.nextTick), c.each = function(t, i, e) {
					function n(i) { i ? (e(i), e = function() {}) : (s += 1, s >= t.length && e()) }
					if(e = e || function() {}, !t.length) return e();
					var s = 0;
					p(t, function(t) { i(t, r(n)) })
				}, c.forEach = c.each, c.eachSeries = function(t, i, e) {
					if(e = e || function() {}, !t.length) return e();
					var n = 0,
						s = function() { i(t[n], function(i) { i ? (e(i), e = function() {}) : (n += 1, n >= t.length ? e() : s()) }) };
					s()
				}, c.forEachSeries = c.eachSeries, c.eachLimit = function(t, i, e, n) {
					var s = g(i);
					s.apply(null, [t, e, n])
				}, c.forEachLimit = c.eachLimit;
				var g = function(t) {
						return function(i, e, n) {
							if(n = n || function() {}, !i.length || 0 >= t) return n();
							var s = 0,
								o = 0,
								r = 0;
							! function a() { if(s >= i.length) return n(); for(; t > r && o < i.length;) o += 1, r += 1, e(i[o - 1], function(t) { t ? (n(t), n = function() {}) : (s += 1, r -= 1, s >= i.length ? n() : a()) }) }()
						}
					},
					v = function(t) { return function() { var i = Array.prototype.slice.call(arguments); return t.apply(null, [c.each].concat(i)) } },
					_ = function(t, i) { return function() { var e = Array.prototype.slice.call(arguments); return i.apply(null, [g(t)].concat(e)) } },
					y = function(t) { return function() { var i = Array.prototype.slice.call(arguments); return t.apply(null, [c.eachSeries].concat(i)) } },
					b = function(t, i, e, n) {
						if(i = d(i, function(t, i) { return { index: i, value: t } }), n) {
							var s = [];
							t(i, function(t, i) { e(t.value, function(e, n) { s[t.index] = n, i(e) }) }, function(t) { n(t, s) })
						} else t(i, function(t, i) { e(t.value, function(t) { i(t) }) })
					};
				c.map = v(b), c.mapSeries = y(b), c.mapLimit = function(t, i, e, n) { return x(i)(t, e, n) };
				var x = function(t) { return _(t, b) };
				c.reduce = function(t, i, e, n) { c.eachSeries(t, function(t, n) { e(i, t, function(t, e) { i = e, n(t) }) }, function(t) { n(t, i) }) }, c.inject = c.reduce, c.foldl = c.reduce, c.reduceRight = function(t, i, e, n) {
					var s = d(t, function(t) { return t }).reverse();
					c.reduce(s, i, e, n)
				}, c.foldr = c.reduceRight;
				var w = function(t, i, e, n) {
					var s = [];
					i = d(i, function(t, i) { return { index: i, value: t } }), t(i, function(t, i) { e(t.value, function(e) { e && s.push(t), i() }) }, function(t) { n(d(s.sort(function(t, i) { return t.index - i.index }), function(t) { return t.value })) })
				};
				c.filter = v(w), c.filterSeries = y(w), c.select = c.filter, c.selectSeries = c.filterSeries;
				var k = function(t, i, e, n) {
					var s = [];
					i = d(i, function(t, i) { return { index: i, value: t } }), t(i, function(t, i) { e(t.value, function(e) { e || s.push(t), i() }) }, function(t) { n(d(s.sort(function(t, i) { return t.index - i.index }), function(t) { return t.value })) })
				};
				c.reject = v(k), c.rejectSeries = y(k);
				var T = function(t, i, e, n) { t(i, function(t, i) { e(t, function(e) { e ? (n(t), n = function() {}) : i() }) }, function(t) { n() }) };
				c.detect = v(T), c.detectSeries = y(T), c.some = function(t, i, e) { c.each(t, function(t, n) { i(t, function(t) { t && (e(!0), e = function() {}), n() }) }, function(t) { e(!1) }) }, c.any = c.some, c.every = function(t, i, e) { c.each(t, function(t, n) { i(t, function(t) { t || (e(!1), e = function() {}), n() }) }, function(t) { e(!0) }) }, c.all = c.every, c.sortBy = function(t, i, e) {
					c.map(t, function(t, e) { i(t, function(i, n) { i ? e(i) : e(null, { value: t, criteria: n }) }) }, function(t, i) {
						if(t) return e(t);
						var n = function(t, i) {
							var e = t.criteria,
								n = i.criteria;
							return n > e ? -1 : e > n ? 1 : 0
						};
						e(null, d(i.sort(n), function(t) { return t.value }))
					})
				}, c.auto = function(t, i) {
					i = i || function() {};
					var e = m(t),
						n = e.length;
					if(!n) return i();
					var s = {},
						o = [],
						r = function(t) { o.unshift(t) },
						a = function(t) {
							for(var i = 0; i < o.length; i += 1)
								if(o[i] === t) return void o.splice(i, 1)
						},
						h = function() { n--, p(o.slice(0), function(t) { t() }) };
					r(function() {
						if(!n) {
							var t = i;
							i = function() {}, t(null, s)
						}
					}), p(e, function(e) {
						var n = u(t[e]) ? t[e] : [t[e]],
							o = function(t) {
								var n = Array.prototype.slice.call(arguments, 1);
								if(n.length <= 1 && (n = n[0]), t) {
									var o = {};
									p(m(s), function(t) { o[t] = s[t] }), o[e] = n, i(t, o), i = function() {}
								} else s[e] = n, c.setImmediate(h)
							},
							l = n.slice(0, Math.abs(n.length - 1)) || [],
							d = function() { return f(l, function(t, i) { return t && s.hasOwnProperty(i) }, !0) && !s.hasOwnProperty(e) };
						if(d()) n[n.length - 1](o, s);
						else {
							var g = function() { d() && (a(g), n[n.length - 1](o, s)) };
							r(g)
						}
					})
				}, c.retry = function(t, i, e) {
					var n = 5,
						s = [];
					"function" == typeof t && (e = i, i = t, t = n), t = parseInt(t, 10) || n;
					var o = function(n, o) {
						for(var r = function(t, i) { return function(e) { t(function(t, n) { e(!t || i, { err: t, result: n }) }, o) } }; t;) s.push(r(i, !(t -= 1)));
						c.series(s, function(t, i) { i = i[i.length - 1], (n || e)(i.err, i.result) })
					};
					return e ? o() : o
				}, c.waterfall = function(t, i) {
					if(i = i || function() {}, !u(t)) { var e = new Error("First argument to waterfall must be an array of functions"); return i(e) }
					if(!t.length) return i();
					var n = function(t) {
						return function(e) {
							if(e) i.apply(null, arguments), i = function() {};
							else {
								var s = Array.prototype.slice.call(arguments, 1),
									o = t.next();
								o ? s.push(n(o)) : s.push(i), c.setImmediate(function() { t.apply(null, s) })
							}
						}
					};
					n(c.iterator(t))()
				};
				var S = function(t, i, e) {
					if(e = e || function() {}, u(i)) t.map(i, function(t, i) {
						t && t(function(t) {
							var e = Array.prototype.slice.call(arguments, 1);
							e.length <= 1 && (e = e[0]), i.call(null, t, e)
						})
					}, e);
					else {
						var n = {};
						t.each(m(i), function(t, e) {
							i[t](function(i) {
								var s = Array.prototype.slice.call(arguments, 1);
								s.length <= 1 && (s = s[0]), n[t] = s, e(i)
							})
						}, function(t) { e(t, n) })
					}
				};
				c.parallel = function(t, i) { S({ map: c.map, each: c.each }, t, i) }, c.parallelLimit = function(t, i, e) { S({ map: x(i), each: g(i) }, t, e) }, c.series = function(t, i) {
					if(i = i || function() {}, u(t)) c.mapSeries(t, function(t, i) {
						t && t(function(t) {
							var e = Array.prototype.slice.call(arguments, 1);
							e.length <= 1 && (e = e[0]), i.call(null, t, e)
						})
					}, i);
					else {
						var e = {};
						c.eachSeries(m(t), function(i, n) {
							t[i](function(t) {
								var s = Array.prototype.slice.call(arguments, 1);
								s.length <= 1 && (s = s[0]), e[i] = s, n(t)
							})
						}, function(t) { i(t, e) })
					}
				}, c.iterator = function(t) { var i = function(e) { var n = function() { return t.length && t[e].apply(null, arguments), n.next() }; return n.next = function() { return e < t.length - 1 ? i(e + 1) : null }, n }; return i(0) }, c.apply = function(t) { var i = Array.prototype.slice.call(arguments, 1); return function() { return t.apply(null, i.concat(Array.prototype.slice.call(arguments))) } };
				var E = function(t, i, e, n) {
					var s = [];
					t(i, function(t, i) { e(t, function(t, e) { s = s.concat(e || []), i(t) }) }, function(t) { n(t, s) })
				};
				c.concat = v(E), c.concatSeries = y(E), c.whilst = function(t, i, e) { t() ? i(function(n) { return n ? e(n) : void c.whilst(t, i, e) }) : e() }, c.doWhilst = function(t, i, e) {
					t(function(n) {
						if(n) return e(n);
						var s = Array.prototype.slice.call(arguments, 1);
						i.apply(null, s) ? c.doWhilst(t, i, e) : e()
					})
				}, c.until = function(t, i, e) { t() ? e() : i(function(n) { return n ? e(n) : void c.until(t, i, e) }) }, c.doUntil = function(t, i, e) {
					t(function(n) {
						if(n) return e(n);
						var s = Array.prototype.slice.call(arguments, 1);
						i.apply(null, s) ? e() : c.doUntil(t, i, e)
					})
				}, c.queue = function(t, i) {
					function e(t, i, e, n) {
						return t.started || (t.started = !0), u(i) || (i = [i]), 0 == i.length ? c.setImmediate(function() { t.drain && t.drain() }) : void p(i, function(i) {
							var s = { data: i, callback: "function" == typeof n ? n : null };
							e ? t.tasks.unshift(s) : t.tasks.push(s), t.saturated && t.tasks.length === t.concurrency && t.saturated(), c.setImmediate(t.process)
						})
					}
					void 0 === i && (i = 1);
					var n = 0,
						s = {
							tasks: [],
							concurrency: i,
							saturated: null,
							empty: null,
							drain: null,
							started: !1,
							paused: !1,
							push: function(t, i) { e(s, t, !1, i) },
							kill: function() { s.drain = null, s.tasks = [] },
							unshift: function(t, i) { e(s, t, !0, i) },
							process: function() {
								if(!s.paused && n < s.concurrency && s.tasks.length) {
									var i = s.tasks.shift();
									s.empty && 0 === s.tasks.length && s.empty(), n += 1;
									var e = function() { n -= 1, i.callback && i.callback.apply(i, arguments), s.drain && s.tasks.length + n === 0 && s.drain(), s.process() },
										o = r(e);
									t(i.data, o)
								}
							},
							length: function() { return s.tasks.length },
							running: function() { return n },
							idle: function() { return s.tasks.length + n === 0 },
							pause: function() { s.paused !== !0 && (s.paused = !0) },
							resume: function() { if(s.paused !== !1) { s.paused = !1; for(var t = 1; t <= s.concurrency; t++) c.setImmediate(s.process) } }
						};
					return s
				}, c.priorityQueue = function(t, i) {
					function e(t, i) { return t.priority - i.priority }

					function n(t, i, e) {
						for(var n = -1, s = t.length - 1; s > n;) {
							var o = n + (s - n + 1 >>> 1);
							e(i, t[o]) >= 0 ? n = o : s = o - 1
						}
						return n
					}

					function s(t, i, s, o) {
						return t.started || (t.started = !0), u(i) || (i = [i]), 0 == i.length ? c.setImmediate(function() { t.drain && t.drain() }) : void p(i, function(i) {
							var r = { data: i, priority: s, callback: "function" == typeof o ? o : null };
							t.tasks.splice(n(t.tasks, r, e) + 1, 0, r), t.saturated && t.tasks.length === t.concurrency && t.saturated(), c.setImmediate(t.process)
						})
					}
					var o = c.queue(t, i);
					return o.push = function(t, i, e) { s(o, t, i, e) }, delete o.unshift, o
				}, c.cargo = function(t, i) {
					var e = !1,
						n = [],
						s = {
							tasks: n,
							payload: i,
							saturated: null,
							empty: null,
							drain: null,
							drained: !0,
							push: function(t, e) { u(t) || (t = [t]), p(t, function(t) { n.push({ data: t, callback: "function" == typeof e ? e : null }), s.drained = !1, s.saturated && n.length === i && s.saturated() }), c.setImmediate(s.process) },
							process: function o() {
								if(!e) {
									if(0 === n.length) return s.drain && !s.drained && s.drain(), void(s.drained = !0);
									var r = "number" == typeof i ? n.splice(0, i) : n.splice(0, n.length),
										a = d(r, function(t) { return t.data });
									s.empty && s.empty(), e = !0, t(a, function() {
										e = !1;
										var t = arguments;
										p(r, function(i) { i.callback && i.callback.apply(null, t) }), o()
									})
								}
							},
							length: function() { return n.length },
							running: function() { return e }
						};
					return s
				};
				var $ = function(t) {
					return function(i) {
						var e = Array.prototype.slice.call(arguments, 1);
						i.apply(null, e.concat([function(i) { var e = Array.prototype.slice.call(arguments, 1); "undefined" != typeof console && (i ? console.error && console.error(i) : console[t] && p(e, function(i) { console[t](i) })) }]))
					}
				};
				c.log = $("log"), c.dir = $("dir"), c.memoize = function(t, i) {
					var e = {},
						n = {};
					i = i || function(t) { return t };
					var s = function() {
						var s = Array.prototype.slice.call(arguments),
							o = s.pop(),
							r = i.apply(null, s);
						r in e ? c.nextTick(function() { o.apply(null, e[r]) }) : r in n ? n[r].push(o) : (n[r] = [o], t.apply(null, s.concat([function() {
							e[r] = arguments;
							var t = n[r];
							delete n[r];
							for(var i = 0, s = t.length; s > i; i++) t[i].apply(null, arguments)
						}])))
					};
					return s.memo = e, s.unmemoized = t, s
				}, c.unmemoize = function(t) { return function() { return(t.unmemoized || t).apply(null, arguments) } }, c.times = function(t, i, e) { for(var n = [], s = 0; t > s; s++) n.push(s); return c.map(n, i, e) }, c.timesSeries = function(t, i, e) { for(var n = [], s = 0; t > s; s++) n.push(s); return c.mapSeries(n, i, e) }, c.seq = function() {
					var t = arguments;
					return function() {
						var i = this,
							e = Array.prototype.slice.call(arguments),
							n = e.pop();
						c.reduce(t, e, function(t, e, n) {
							e.apply(i, t.concat([function() {
								var t = arguments[0],
									i = Array.prototype.slice.call(arguments, 1);
								n(t, i)
							}]))
						}, function(t, e) { n.apply(i, [t].concat(e)) })
					}
				}, c.compose = function() { return c.seq.apply(null, Array.prototype.reverse.call(arguments)) };
				var P = function(t, i) {
					var e = function() {
						var e = this,
							n = Array.prototype.slice.call(arguments),
							s = n.pop();
						return t(i, function(t, i) { t.apply(e, n.concat([i])) }, s)
					};
					if(arguments.length > 2) { var n = Array.prototype.slice.call(arguments, 2); return e.apply(this, n) }
					return e
				};
				c.applyEach = v(P), c.applyEachSeries = y(P), c.forever = function(t, i) {
					function e(n) { if(n) { if(i) return i(n); throw n } t(e) } e()
				}, "undefined" != typeof t && t.exports ? t.exports = c : (n = [], s = function() { return c }.apply(i, n), !(void 0 !== s && (t.exports = s)))
			}()
		}).call(i, e(14), e(15).setImmediate)
	}, function(t, i) {
		function e() { c = !1, r.length ? h = r.concat(h) : l = -1, h.length && n() }

		function n() {
			if(!c) {
				var t = setTimeout(e);
				c = !0;
				for(var i = h.length; i;) {
					for(r = h, h = []; ++l < i;) r && r[l].run();
					l = -1, i = h.length
				}
				r = null, c = !1, clearTimeout(t)
			}
		}

		function s(t, i) { this.fun = t, this.array = i }

		function o() {}
		var r, a = t.exports = {},
			h = [],
			c = !1,
			l = -1;
		a.nextTick = function(t) {
			var i = new Array(arguments.length - 1);
			if(arguments.length > 1)
				for(var e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
			h.push(new s(t, i)), 1 !== h.length || c || setTimeout(n, 0)
		}, s.prototype.run = function() { this.fun.apply(null, this.array) }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = o, a.addListener = o, a.once = o, a.off = o, a.removeListener = o, a.removeAllListeners = o, a.emit = o, a.binding = function(t) { throw new Error("process.binding is not supported") }, a.cwd = function() { return "/" }, a.chdir = function(t) { throw new Error("process.chdir is not supported") }, a.umask = function() { return 0 }
	}, function(t, i, e) {
		(function(t, n) {
			function s(t, i) { this._id = t, this._clearFn = i }
			var o = e(14).nextTick,
				r = Function.prototype.apply,
				a = Array.prototype.slice,
				h = {},
				c = 0;
			i.setTimeout = function() { return new s(r.call(setTimeout, window, arguments), clearTimeout) }, i.setInterval = function() { return new s(r.call(setInterval, window, arguments), clearInterval) }, i.clearTimeout = i.clearInterval = function(t) { t.close() }, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() { this._clearFn.call(window, this._id) }, i.enroll = function(t, i) { clearTimeout(t._idleTimeoutId), t._idleTimeout = i }, i.unenroll = function(t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, i._unrefActive = i.active = function(t) {
				clearTimeout(t._idleTimeoutId);
				var i = t._idleTimeout;
				i >= 0 && (t._idleTimeoutId = setTimeout(function() { t._onTimeout && t._onTimeout() }, i))
			}, i.setImmediate = "function" == typeof t ? t : function(t) {
				var e = c++,
					n = arguments.length < 2 ? !1 : a.call(arguments, 1);
				return h[e] = !0, o(function() { h[e] && (n ? t.apply(null, n) : t.call(null), i.clearImmediate(e)) }), e
			}, i.clearImmediate = "function" == typeof n ? n : function(t) { delete h[t] }
		}).call(i, e(15).setImmediate, e(15).clearImmediate)
	}, function(t, i, e) {
		function n() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null }

		function s(t, i, e) { if(t && c(t) && t instanceof n) return t; var s = new n; return s.parse(t, i, e), s }

		function o(t) { return h(t) && (t = s(t)), t instanceof n ? t.format() : n.prototype.format.call(t) }

		function r(t, i) { return s(t, !1, !0).resolve(i) }

		function a(t, i) { return t ? s(t, !1, !0).resolveObject(i) : i }

		function h(t) { return "string" == typeof t }

		function c(t) { return "object" == typeof t && null !== t }

		function l(t) { return null === t }

		function u(t) { return null == t }
		var p = e(17);
		i.parse = s, i.resolve = r, i.resolveObject = a, i.format = o, i.Url = n;
		var d = /^([a-z0-9.+-]+:)/i,
			f = /:[0-9]*$/,
			m = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
			g = ["{", "}", "|", "\\", "^", "`"].concat(m),
			v = ["'"].concat(g),
			_ = ["%", "/", "?", ";", "#"].concat(v),
			y = ["/", "?", "#"],
			b = 255,
			x = /^[a-z0-9A-Z_-]{0,63}$/,
			w = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
			k = { javascript: !0, "javascript:": !0 },
			T = { javascript: !0, "javascript:": !0 },
			S = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
			E = e(19);
		n.prototype.parse = function(t, i, e) {
			if(!h(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
			var n = t;
			n = n.trim();
			var s = d.exec(n);
			if(s) {
				s = s[0];
				var o = s.toLowerCase();
				this.protocol = o, n = n.substr(s.length)
			}
			if(e || s || n.match(/^\/\/[^@\/]+@[^@\/]+/)) { var r = "//" === n.substr(0, 2);!r || s && T[s] || (n = n.substr(2), this.slashes = !0) }
			if(!T[s] && (r || s && !S[s])) {
				for(var a = -1, c = 0; c < y.length; c++) { var l = n.indexOf(y[c]); - 1 !== l && (-1 === a || a > l) && (a = l) }
				var u, f;
				f = -1 === a ? n.lastIndexOf("@") : n.lastIndexOf("@", a), -1 !== f && (u = n.slice(0, f), n = n.slice(f + 1), this.auth = decodeURIComponent(u)), a = -1;
				for(var c = 0; c < _.length; c++) { var l = n.indexOf(_[c]); - 1 !== l && (-1 === a || a > l) && (a = l) } - 1 === a && (a = n.length), this.host = n.slice(0, a), n = n.slice(a), this.parseHost(), this.hostname = this.hostname || "";
				var m = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
				if(!m)
					for(var g = this.hostname.split(/\./), c = 0, $ = g.length; $ > c; c++) {
						var P = g[c];
						if(P && !P.match(x)) {
							for(var I = "", A = 0, C = P.length; C > A; A++) I += P.charCodeAt(A) > 127 ? "x" : P[A];
							if(!I.match(x)) {
								var M = g.slice(0, c),
									D = g.slice(c + 1),
									R = P.match(w);
								R && (M.push(R[1]), D.unshift(R[2])), D.length && (n = "/" + D.join(".") + n), this.hostname = M.join(".");
								break
							}
						}
					}
				if(this.hostname.length > b ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !m) {
					for(var Y = this.hostname.split("."), X = [], c = 0; c < Y.length; ++c) {
						var O = Y[c];
						X.push(O.match(/[^A-Za-z0-9_-]/) ? "xn--" + p.encode(O) : O)
					}
					this.hostname = X.join(".")
				}
				var z = this.port ? ":" + this.port : "",
					L = this.hostname || "";
				this.host = L + z, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== n[0] && (n = "/" + n))
			}
			if(!k[o])
				for(var c = 0, $ = v.length; $ > c; c++) {
					var W = v[c],
						H = encodeURIComponent(W);
					H === W && (H = escape(W)), n = n.split(W).join(H)
				}
			var F = n.indexOf("#"); - 1 !== F && (this.hash = n.substr(F), n = n.slice(0, F));
			var B = n.indexOf("?");
			if(-1 !== B ? (this.search = n.substr(B), this.query = n.substr(B + 1), i && (this.query = E.parse(this.query)), n = n.slice(0, B)) : i && (this.search = "", this.query = {}), n && (this.pathname = n), S[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
				var z = this.pathname || "",
					O = this.search || "";
				this.path = z + O
			}
			return this.href = this.format(), this
		}, n.prototype.format = function() {
			var t = this.auth || "";
			t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
			var i = this.protocol || "",
				e = this.pathname || "",
				n = this.hash || "",
				s = !1,
				o = "";
			this.host ? s = t + this.host : this.hostname && (s = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && c(this.query) && Object.keys(this.query).length && (o = E.stringify(this.query));
			var r = this.search || o && "?" + o || "";
			return i && ":" !== i.substr(-1) && (i += ":"), this.slashes || (!i || S[i]) && s !== !1 ? (s = "//" + (s || ""), e && "/" !== e.charAt(0) && (e = "/" + e)) : s || (s = ""), n && "#" !== n.charAt(0) && (n = "#" + n), r && "?" !== r.charAt(0) && (r = "?" + r), e = e.replace(/[?#]/g, function(t) { return encodeURIComponent(t) }), r = r.replace("#", "%23"), i + s + e + r + n
		}, n.prototype.resolve = function(t) { return this.resolveObject(s(t, !1, !0)).format() }, n.prototype.resolveObject = function(t) {
			if(h(t)) {
				var i = new n;
				i.parse(t, !1, !0), t = i
			}
			var e = new n;
			if(Object.keys(this).forEach(function(t) { e[t] = this[t] }, this), e.hash = t.hash, "" === t.href) return e.href = e.format(), e;
			if(t.slashes && !t.protocol) return Object.keys(t).forEach(function(i) { "protocol" !== i && (e[i] = t[i]) }), S[e.protocol] && e.hostname && !e.pathname && (e.path = e.pathname = "/"), e.href = e.format(), e;
			if(t.protocol && t.protocol !== e.protocol) {
				if(!S[t.protocol]) return Object.keys(t).forEach(function(i) { e[i] = t[i] }), e.href = e.format(), e;
				if(e.protocol = t.protocol, t.host || T[t.protocol]) e.pathname = t.pathname;
				else {
					for(var s = (t.pathname || "").split("/"); s.length && !(t.host = s.shift()););
					t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== s[0] && s.unshift(""), s.length < 2 && s.unshift(""), e.pathname = s.join("/")
				}
				if(e.search = t.search, e.query = t.query, e.host = t.host || "", e.auth = t.auth, e.hostname = t.hostname || t.host, e.port = t.port, e.pathname || e.search) {
					var o = e.pathname || "",
						r = e.search || "";
					e.path = o + r
				}
				return e.slashes = e.slashes || t.slashes, e.href = e.format(), e
			}
			var a = e.pathname && "/" === e.pathname.charAt(0),
				c = t.host || t.pathname && "/" === t.pathname.charAt(0),
				p = c || a || e.host && t.pathname,
				d = p,
				f = e.pathname && e.pathname.split("/") || [],
				s = t.pathname && t.pathname.split("/") || [],
				m = e.protocol && !S[e.protocol];
			if(m && (e.hostname = "", e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === s[0] ? s[0] = t.host : s.unshift(t.host)), t.host = null), p = p && ("" === s[0] || "" === f[0])), c) e.host = t.host || "" === t.host ? t.host : e.host, e.hostname = t.hostname || "" === t.hostname ? t.hostname : e.hostname, e.search = t.search, e.query = t.query, f = s;
			else if(s.length) f || (f = []), f.pop(), f = f.concat(s), e.search = t.search, e.query = t.query;
			else if(!u(t.search)) {
				if(m) {
					e.hostname = e.host = f.shift();
					var g = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
					g && (e.auth = g.shift(), e.host = e.hostname = g.shift())
				}
				return e.search = t.search, e.query = t.query, l(e.pathname) && l(e.search) || (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.href = e.format(), e
			}
			if(!f.length) return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, e.href = e.format(), e;
			for(var v = f.slice(-1)[0], _ = (e.host || t.host) && ("." === v || ".." === v) || "" === v, y = 0, b = f.length; b >= 0; b--) v = f[b], "." == v ? f.splice(b, 1) : ".." === v ? (f.splice(b, 1), y++) : y && (f.splice(b, 1), y--);
			if(!p && !d)
				for(; y--; y) f.unshift("..");
			!p || "" === f[0] || f[0] && "/" === f[0].charAt(0) || f.unshift(""), _ && "/" !== f.join("/").substr(-1) && f.push("");
			var x = "" === f[0] || f[0] && "/" === f[0].charAt(0);
			if(m) {
				e.hostname = e.host = x ? "" : f.length ? f.shift() : "";
				var g = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
				g && (e.auth = g.shift(), e.host = e.hostname = g.shift())
			}
			return p = p || e.host && f.length, p && !x && f.unshift(""), f.length ? e.pathname = f.join("/") : (e.pathname = null, e.path = null), l(e.pathname) && l(e.search) || (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.auth = t.auth || e.auth, e.slashes = e.slashes || t.slashes, e.href = e.format(), e
		}, n.prototype.parseHost = function() {
			var t = this.host,
				i = f.exec(t);
			i && (i = i[0], ":" !== i && (this.port = i.substr(1)), t = t.substr(0, t.length - i.length)), t && (this.hostname = t)
		}
	}, function(t, i, e) {
		var n;
		(function(t, s) {
			! function(o) {
				function r(t) { throw RangeError(M[t]) }

				function a(t, i) { for(var e = t.length, n = []; e--;) n[e] = i(t[e]); return n }

				function h(t, i) {
					var e = t.split("@"),
						n = "";
					e.length > 1 && (n = e[0] + "@", t = e[1]), t = t.replace(C, ".");
					var s = t.split("."),
						o = a(s, i).join(".");
					return n + o
				}

				function c(t) { for(var i, e, n = [], s = 0, o = t.length; o > s;) i = t.charCodeAt(s++), i >= 55296 && 56319 >= i && o > s ? (e = t.charCodeAt(s++), 56320 == (64512 & e) ? n.push(((1023 & i) << 10) + (1023 & e) + 65536) : (n.push(i), s--)) : n.push(i); return n }

				function l(t) { return a(t, function(t) { var i = ""; return t > 65535 && (t -= 65536, i += Y(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), i += Y(t) }).join("") }

				function u(t) { return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : x }

				function p(t, i) { return t + 22 + 75 * (26 > t) - ((0 != i) << 5) }

				function d(t, i, e) { var n = 0; for(t = e ? R(t / S) : t >> 1, t += R(t / i); t > D * k >> 1; n += x) t = R(t / D); return R(n + (D + 1) * t / (t + T)) }

				function f(t) {
					var i, e, n, s, o, a, h, c, p, f, m = [],
						g = t.length,
						v = 0,
						_ = $,
						y = E;
					for(e = t.lastIndexOf(P), 0 > e && (e = 0), n = 0; e > n; ++n) t.charCodeAt(n) >= 128 && r("not-basic"), m.push(t.charCodeAt(n));
					for(s = e > 0 ? e + 1 : 0; g > s;) {
						for(o = v, a = 1, h = x; s >= g && r("invalid-input"), c = u(t.charCodeAt(s++)), (c >= x || c > R((b - v) / a)) && r("overflow"), v += c * a, p = y >= h ? w : h >= y + k ? k : h - y, !(p > c); h += x) f = x - p, a > R(b / f) && r("overflow"), a *= f;
						i = m.length + 1, y = d(v - o, i, 0 == o), R(v / i) > b - _ && r("overflow"), _ += R(v / i), v %= i, m.splice(v++, 0, _)
					}
					return l(m)
				}

				function m(t) {
					var i, e, n, s, o, a, h, l, u, f, m, g, v, _, y, T = [];
					for(t = c(t), g = t.length, i = $, e = 0, o = E, a = 0; g > a; ++a) m = t[a], 128 > m && T.push(Y(m));
					for(n = s = T.length, s && T.push(P); g > n;) {
						for(h = b, a = 0; g > a; ++a) m = t[a], m >= i && h > m && (h = m);
						for(v = n + 1, h - i > R((b - e) / v) && r("overflow"), e += (h - i) * v, i = h, a = 0; g > a; ++a)
							if(m = t[a], i > m && ++e > b && r("overflow"), m == i) {
								for(l = e, u = x; f = o >= u ? w : u >= o + k ? k : u - o, !(f > l); u += x) y = l - f, _ = x - f, T.push(Y(p(f + y % _, 0))), l = R(y / _);
								T.push(Y(p(l, 0))), o = d(e, v, n == s), e = 0, ++n
							}++e, ++i
					}
					return T.join("")
				}

				function g(t) { return h(t, function(t) { return I.test(t) ? f(t.slice(4).toLowerCase()) : t }) }

				function v(t) { return h(t, function(t) { return A.test(t) ? "xn--" + m(t) : t }) }
				var _ = ("object" == typeof i && i && !i.nodeType && i, "object" == typeof t && t && !t.nodeType && t, "object" == typeof s && s);
				(_.global === _ || _.window === _ || _.self === _) && (o = _);
				var y, b = 2147483647,
					x = 36,
					w = 1,
					k = 26,
					T = 38,
					S = 700,
					E = 72,
					$ = 128,
					P = "-",
					I = /^xn--/,
					A = /[^\x20-\x7E]/,
					C = /[\x2E\u3002\uFF0E\uFF61]/g,
					M = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
					D = x - w,
					R = Math.floor,
					Y = String.fromCharCode;
				y = { version: "1.3.2", ucs2: { decode: c, encode: l }, decode: f, encode: m, toASCII: v, toUnicode: g }, n = function() { return y }.call(i, e, i, t), !(void 0 !== n && (t.exports = n))
			}(this)
		}).call(i, e(18)(t), function() { return this }())
	}, function(t, i) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t } }, function(t, i, e) {
		"use strict";
		i.decode = i.parse = e(20), i.encode = i.stringify = e(21)
	}, function(t, i) {
		"use strict";

		function e(t, i) { return Object.prototype.hasOwnProperty.call(t, i) } t.exports = function(t, i, n, s) {
			i = i || "&", n = n || "=";
			var o = {};
			if("string" != typeof t || 0 === t.length) return o;
			var r = /\+/g;
			t = t.split(i);
			var a = 1e3;
			s && "number" == typeof s.maxKeys && (a = s.maxKeys);
			var h = t.length;
			a > 0 && h > a && (h = a);
			for(var c = 0; h > c; ++c) {
				var l, u, p, d, f = t[c].replace(r, "%20"),
					m = f.indexOf(n);
				m >= 0 ? (l = f.substr(0, m), u = f.substr(m + 1)) : (l = f, u = ""), p = decodeURIComponent(l), d = decodeURIComponent(u), e(o, p) ? Array.isArray(o[p]) ? o[p].push(d) : o[p] = [o[p], d] : o[p] = d
			}
			return o
		}
	}, function(t, i) {
		"use strict";
		var e = function(t) {
			switch(typeof t) {
				case "string":
					return t;
				case "boolean":
					return t ? "true" : "false";
				case "number":
					return isFinite(t) ? t : "";
				default:
					return ""
			}
		};
		t.exports = function(t, i, n, s) { return i = i || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map(function(s) { var o = encodeURIComponent(e(s)) + n; return Array.isArray(t[s]) ? t[s].map(function(t) { return o + encodeURIComponent(e(t)) }).join(i) : o + encodeURIComponent(e(t[s])) }).join(i) : s ? encodeURIComponent(e(s)) + n + encodeURIComponent(e(t)) : "" }
	}, function(t, i, e) {
		function n(t, i, e) {
			if(r.call(this), e = e || {}, "string" != typeof t || "string" != typeof i) throw new Error("Both name and url are required for constructing a resource.");
			this.name = t, this.url = i, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = e.crossOrigin === !0 ? "anonymous" : null, this.loadType = e.loadType || this._determineLoadType(), this.xhrType = e.xhrType, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
		}

		function s(t) { return t.toString().replace("object ", "") }

		function o(t, i, e) { i && 0 === i.indexOf(".") && (i = i.substring(1)), i && (t[i] = e) }
		var r = e(23),
			a = e(16),
			h = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
			c = null;
		n.prototype = Object.create(r.prototype), n.prototype.constructor = n, t.exports = n, n.prototype.complete = function() { this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError), this.data.removeEventListener("load", this._boundComplete), this.data.removeEventListener("progress", this._boundOnProgress), this.data.removeEventListener("canplaythrough", this._boundComplete)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError), this.xhr.removeEventListener("abort", this._boundXhrOnAbort), this.xhr.removeEventListener("progress", this._boundOnProgress), this.xhr.removeEventListener("load", this._boundXhrOnLoad)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.emit("complete", this) }, n.prototype.load = function(t) {
			switch(this.emit("start", this), t && this.once("complete", t), "string" != typeof this.crossOrigin && (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
				case n.LOAD_TYPE.IMAGE:
					this._loadImage();
					break;
				case n.LOAD_TYPE.AUDIO:
					this._loadElement("audio");
					break;
				case n.LOAD_TYPE.VIDEO:
					this._loadElement("video");
					break;
				case n.LOAD_TYPE.XHR:
				default:
					h && this.crossOrigin ? this._loadXdr() : this._loadXhr()
			}
		}, n.prototype._loadImage = function() { this.data = new Image, this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.data.src = this.url, this.isImage = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1) }, n.prototype._loadElement = function(t) {
			if("audio" === t && "undefined" != typeof Audio ? this.data = new Audio : this.data = document.createElement(t), null === this.data) return this.error = new Error("Unsupported element " + t), void this.complete();
			if(navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
			else if(Array.isArray(this.url))
				for(var i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(t, this.url[i]));
			else this.data.appendChild(this._createSource(t, this.url));
			this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
		}, n.prototype._loadXhr = function() {
			"string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
			var t = this.xhr = new XMLHttpRequest;
			t.open("GET", this.url, !0), this.xhrType === n.XHR_RESPONSE_TYPE.JSON || this.xhrType === n.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = n.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
		}, n.prototype._loadXdr = function() {
			"string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
			var t = this.xhr = new XDomainRequest;
			t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() { t.send() }, 0)
		}, n.prototype._createSource = function(t, i, e) { e || (e = t + "/" + i.substr(i.lastIndexOf(".") + 1)); var n = document.createElement("source"); return n.src = i, n.type = e, n }, n.prototype._onError = function(t) { this.error = new Error("Failed to load element using " + t.target.nodeName), this.complete() }, n.prototype._onProgress = function(t) { t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total) }, n.prototype._xhrOnError = function() { this.error = new Error(s(this.xhr) + " Request failed. Status: " + this.xhr.status + ', text: "' + this.xhr.statusText + '"'), this.complete() }, n.prototype._xhrOnAbort = function() { this.error = new Error(s(this.xhr) + " Request was aborted by the user."), this.complete() }, n.prototype._xdrOnTimeout = function() { this.error = new Error(s(this.xhr) + " Request timed out."), this.complete() }, n.prototype._xhrOnLoad = function() {
			var t = this.xhr,
				i = void 0 !== t.status ? t.status : 200;
			if(200 === i || 204 === i || 0 === i && t.responseText.length > 0)
				if(this.xhrType === n.XHR_RESPONSE_TYPE.TEXT) this.data = t.responseText;
				else if(this.xhrType === n.XHR_RESPONSE_TYPE.JSON) try { this.data = JSON.parse(t.responseText), this.isJson = !0 } catch(e) { this.error = new Error("Error trying to parse loaded json:", e) } else if(this.xhrType === n.XHR_RESPONSE_TYPE.DOCUMENT) try {
					if(window.DOMParser) {
						var s = new DOMParser;
						this.data = s.parseFromString(t.responseText, "text/xml")
					} else {
						var o = document.createElement("div");
						o.innerHTML = t.responseText, this.data = o
					}
					this.isXml = !0
				} catch(e) { this.error = new Error("Error trying to parse loaded xml:", e) } else this.data = t.response || t.responseText;
				else this.error = new Error("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
			this.complete()
		}, n.prototype._determineCrossOrigin = function(t, i) {
			if(0 === t.indexOf("data:")) return "";
			i = i || window.location, c || (c = document.createElement("a")), c.href = t, t = a.parse(c.href);
			var e = !t.port && "" === i.port || t.port === i.port;
			return t.hostname === i.hostname && e && t.protocol === i.protocol ? "" : "anonymous"
		}, n.prototype._determineXhrType = function() { return n._xhrTypeMap[this._getExtension()] || n.XHR_RESPONSE_TYPE.TEXT }, n.prototype._determineLoadType = function() { return n._loadTypeMap[this._getExtension()] || n.LOAD_TYPE.XHR }, n.prototype._getExtension = function() {
			var t, i = this.url;
			if(this.isDataUrl) {
				var e = i.indexOf("/");
				t = i.substring(e + 1, i.indexOf(";", e))
			} else { var n = i.indexOf("?"); - 1 !== n && (i = i.substring(0, n)), t = i.substring(i.lastIndexOf(".") + 1) }
			return t
		}, n.prototype._getMimeFromXhrType = function(t) {
			switch(t) {
				case n.XHR_RESPONSE_TYPE.BUFFER:
					return "application/octet-binary";
				case n.XHR_RESPONSE_TYPE.BLOB:
					return "application/blob";
				case n.XHR_RESPONSE_TYPE.DOCUMENT:
					return "application/xml";
				case n.XHR_RESPONSE_TYPE.JSON:
					return "application/json";
				case n.XHR_RESPONSE_TYPE.DEFAULT:
				case n.XHR_RESPONSE_TYPE.TEXT:
				default:
					return "text/plain"
			}
		}, n.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }, n.XHR_READY_STATE = { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 }, n.XHR_RESPONSE_TYPE = { DEFAULT: "text", BUFFER: "arraybuffer", BLOB: "blob", DOCUMENT: "document", JSON: "json", TEXT: "text" }, n._loadTypeMap = {
			gif: n.LOAD_TYPE.IMAGE,
			png: n.LOAD_TYPE.IMAGE,
			bmp: n.LOAD_TYPE.IMAGE,
			jpg: n.LOAD_TYPE.IMAGE,
			jpeg: n.LOAD_TYPE.IMAGE,
			tif: n.LOAD_TYPE.IMAGE,
			tiff: n.LOAD_TYPE.IMAGE,
			webp: n.LOAD_TYPE.IMAGE,
			tga: n.LOAD_TYPE.IMAGE
		}, n._xhrTypeMap = { xhtml: n.XHR_RESPONSE_TYPE.DOCUMENT, html: n.XHR_RESPONSE_TYPE.DOCUMENT, htm: n.XHR_RESPONSE_TYPE.DOCUMENT, xml: n.XHR_RESPONSE_TYPE.DOCUMENT, tmx: n.XHR_RESPONSE_TYPE.DOCUMENT, tsx: n.XHR_RESPONSE_TYPE.DOCUMENT, svg: n.XHR_RESPONSE_TYPE.DOCUMENT, gif: n.XHR_RESPONSE_TYPE.BLOB, png: n.XHR_RESPONSE_TYPE.BLOB, bmp: n.XHR_RESPONSE_TYPE.BLOB, jpg: n.XHR_RESPONSE_TYPE.BLOB, jpeg: n.XHR_RESPONSE_TYPE.BLOB, tif: n.XHR_RESPONSE_TYPE.BLOB, tiff: n.XHR_RESPONSE_TYPE.BLOB, webp: n.XHR_RESPONSE_TYPE.BLOB, tga: n.XHR_RESPONSE_TYPE.BLOB, json: n.XHR_RESPONSE_TYPE.JSON, text: n.XHR_RESPONSE_TYPE.TEXT, txt: n.XHR_RESPONSE_TYPE.TEXT }, n.setExtensionLoadType = function(t, i) { o(n._loadTypeMap, t, i) }, n.setExtensionXhrType = function(t, i) { o(n._xhrTypeMap, t, i) }
	}, function(t, i, e) {
		"use strict";

		function n(t, i, e) { this.fn = t, this.context = i, this.once = e || !1 }

		function s() {}
		var o = "function" != typeof Object.create ? "~" : !1;
		s.prototype._events = void 0, s.prototype.listeners = function(t, i) {
			var e = o ? o + t : t,
				n = this._events && this._events[e];
			if(i) return !!n;
			if(!n) return [];
			if(n.fn) return [n.fn];
			for(var s = 0, r = n.length, a = new Array(r); r > s; s++) a[s] = n[s].fn;
			return a
		}, s.prototype.emit = function(t, i, e, n, s, r) {
			var a = o ? o + t : t;
			if(!this._events || !this._events[a]) return !1;
			var h, c, l = this._events[a],
				u = arguments.length;
			if("function" == typeof l.fn) {
				switch(l.once && this.removeListener(t, l.fn, void 0, !0), u) {
					case 1:
						return l.fn.call(l.context), !0;
					case 2:
						return l.fn.call(l.context, i), !0;
					case 3:
						return l.fn.call(l.context, i, e), !0;
					case 4:
						return l.fn.call(l.context, i, e, n), !0;
					case 5:
						return l.fn.call(l.context, i, e, n, s), !0;
					case 6:
						return l.fn.call(l.context, i, e, n, s, r), !0
				}
				for(c = 1, h = new Array(u - 1); u > c; c++) h[c - 1] = arguments[c];
				l.fn.apply(l.context, h)
			} else {
				var p, d = l.length;
				for(c = 0; d > c; c++) switch(l[c].once && this.removeListener(t, l[c].fn, void 0, !0), u) {
					case 1:
						l[c].fn.call(l[c].context);
						break;
					case 2:
						l[c].fn.call(l[c].context, i);
						break;
					case 3:
						l[c].fn.call(l[c].context, i, e);
						break;
					default:
						if(!h)
							for(p = 1, h = new Array(u - 1); u > p; p++) h[p - 1] = arguments[p];
						l[c].fn.apply(l[c].context, h)
				}
			}
			return !0
		}, s.prototype.on = function(t, i, e) {
			var s = new n(i, e || this),
				r = o ? o + t : t;
			return this._events || (this._events = o ? {} : Object.create(null)), this._events[r] ? this._events[r].fn ? this._events[r] = [this._events[r], s] : this._events[r].push(s) : this._events[r] = s, this
		}, s.prototype.once = function(t, i, e) {
			var s = new n(i, e || this, !0),
				r = o ? o + t : t;
			return this._events || (this._events = o ? {} : Object.create(null)), this._events[r] ? this._events[r].fn ? this._events[r] = [this._events[r], s] : this._events[r].push(s) : this._events[r] = s, this
		}, s.prototype.removeListener = function(t, i, e, n) {
			var s = o ? o + t : t;
			if(!this._events || !this._events[s]) return this;
			var r = this._events[s],
				a = [];
			if(i)
				if(r.fn)(r.fn !== i || n && !r.once || e && r.context !== e) && a.push(r);
				else
					for(var h = 0, c = r.length; c > h; h++)(r[h].fn !== i || n && !r[h].once || e && r[h].context !== e) && a.push(r[h]);
			return a.length ? this._events[s] = 1 === a.length ? a[0] : a : delete this._events[s], this
		}, s.prototype.removeAllListeners = function(t) { return this._events ? (t ? delete this._events[o ? o + t : t] : this._events = o ? {} : Object.create(null), this) : this }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prototype.setMaxListeners = function() { return this }, s.prefixed = o, t.exports = s
	}, function(t, i) {
		var e = {};
		t.exports = function() { return function(t, i) { e[t.url] ? (t.data = e[t.url], t.complete()) : (t.once("complete", function() { e[this.url] = this.data }), i()) } }
	}, function(t, i, e) {
		var n = e(22),
			s = e(26);
		window.URL = window.URL || window.webkitURL, t.exports = function() {
			return function(t, i) {
				if(!t.data) return i();
				if(t.xhr && t.xhrType === n.XHR_RESPONSE_TYPE.BLOB)
					if(window.Blob && "string" != typeof t.data) {
						if(0 === t.data.type.indexOf("image")) {
							var e = URL.createObjectURL(t.data);
							t.blob = t.data, t.data = new Image, t.data.src = e, t.isImage = !0, t.data.onload = function() { URL.revokeObjectURL(e), t.data.onload = null, i() }
						}
					} else {
						var o = t.xhr.getResponseHeader("content-type");
						o && 0 === o.indexOf("image") && (t.data = new Image, t.data.src = "data:" + o + ";base64," + s.encodeBinary(t.xhr.responseText), t.isImage = !0, t.data.onload = function() { t.data.onload = null, i() })
					}
				else i()
			}
		}
	}, function(t, i) {
		t.exports = {
			_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			encodeBinary: function(t) {
				for(var i, e = "", n = new Array(4), s = 0, o = 0, r = 0; s < t.length;) {
					for(i = new Array(3), o = 0; o < i.length; o++) s < t.length ? i[o] = 255 & t.charCodeAt(s++) : i[o] = 0;
					switch(n[0] = i[0] >> 2, n[1] = (3 & i[0]) << 4 | i[1] >> 4, n[2] = (15 & i[1]) << 2 | i[2] >> 6, n[3] = 63 & i[2], r = s - (t.length - 1)) {
						case 2:
							n[3] = 64, n[2] = 64;
							break;
						case 1:
							n[3] = 64
					}
					for(o = 0; o < n.length; o++) e += this._keyStr.charAt(n[o])
				}
				return e
			}
		}
	}, function(t, i, e) {
		function n(t, i, e, n, s) {
			var o = { type: "contain" };
			for(var r in o) s[r] && (o[r] = s[r]);
			switch(this.options = o, this._cWidth = t, this._cHeight = i, this._iWidth = e, this._iHeight = n, this._offset = { top: 0, left: 0 }, this._newHeight = 0, this._newWidth = 0, this._ratio = 1, this.options.type) {
				case "contain":
					this._containCenter();
					break;
				case "cover":
					this._coverCenter()
			}
		}
		e(3), n.prototype = {
			constructor: n,
			_coverCenter: function() {
				var t = this._iWidth / this._iHeight,
					i = this._cWidth / this._cHeight,
					e = 1;
				t > i ? (e = this._cHeight / this._iHeight, this._newWidth = this._iWidth * e, this._newHeight = this._iHeight * e, this._offset = { top: 0, left: (this._newWidth - this._cWidth) / -2 }) : i > t ? (e = this._cWidth / this._iWidth, this._newWidth = this._iWidth * e, this._newHeight = this._iHeight * e, this._offset = { top: (this._newHeight - this._cHeight) / -2, left: 0 }) : (e = this._cWidth / this._iWidth, this._newWidth = this._iWidth * e, this._newHeight = this._iHeight * e, this._offset = { top: 0, left: 0 }), this._ratio = e
			},
			_containCenter: function() {
				var t = this._iWidth / this._iHeight,
					i = this._cWidth / this._cHeight,
					e = 1;
				t > i ? (e = this._cWidth / this._iWidth, this._newWidth = this._iWidth * e, this._newHeight = this._iHeight * e, this._offset = { top: (this._cHeight - this._newHeight) / 2, left: 0 }) : i > t ? (e = this._cHeight / this._iHeight, this._newWidth = this._iWidth * e, this._newHeight = this._iHeight * e, this._offset = { top: 0, left: (this._cWidth - this._newWidth) / 2 }) : (e = this._cHeight / this._iHeight, this._newWidth = this._iWidth * e, this._newHeight = this._iHeight * e, this._offset = { top: 0, left: 0 }), this._ratio = e
			},
			ratio: function() { return this._ratio },
			offset: function() { return this._offset },
			newWidth: function() { return this._newWidth },
			newHeight: function() { return this._newHeight },
			map: function(t, i, e) {
				var n = this._newWidth / this._iWidth,
					s = { x: 0, y: 0 };
				return s.x = t * n, s.y = i * n, e || (s.x += this.offset().left, s.y += this.offset().top), s
			}
		}, t.exports = wy.base.CenterIt = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { imageUrl: "", imageNaturalWidth: 0, imageNaturalHeight: 0, workingArea: [0, 0, 0, 0] };
			this.$el = t, this.options = $.extend(e, i), this.ratio = this.options.imageNaturalWidth / this.options.imageNaturalHeight, this._init()
		}
		e(3), n.prototype = {
			constructor: n,
			_init: function() { this.$el.on("resize", this._resize.bind(this)), this.$el.css("box-sizing", "border-box").css("background-image", "url(" + this.options.imageUrl + ")").css("background-repeat", "no-repeat").css("background-size", "contain"), this._resize() },
			_resize: function() {
				var t = this._getPaddings();
				this.$el.css("padding-top", t[0] + "px").css("padding-right", t[1] + "px").css("padding-bottom", t[2] + "px").css("padding-left", t[3] + "px")
			},
			_getPaddings: function() { return this.options.workingArea[0] < 1 ? [this.options.workingArea[0] * this.$el.height(), this.options.workingArea[1] * this.$el.width(), this.options.workingArea[2] * this.$el.height(), this.options.workingArea[3] * this.$el.width()] : [this.options.workingArea[0] / this.options.imageNaturalHeight * this.$el.height(), this.options.workingArea[1] / this.options.imageNaturalWidth * this.$el.width(), this.options.workingArea[2] / this.options.imageNaturalHeight * this.$el.height(), this.options.workingArea[3] / this.options.imageNaturalWidth * this.$el.width()] },
			width: function(t) { return t ? (this.$el.css("width", t + "px"), this.$el.css("height", t / this.ratio + "px"), void this._resize()) : this.$el.width() },
			height: function(t) { return t ? (this.$el.css("height", t + "px"), this.$el.css("width", t * this.ratio + "px"), void this._resize()) : this.$el.height() }
		}, t.exports = wy.base.ImageBackground = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { size: [5, 2], inBound: !0, itemWidth: 0, itemHeight: 0, randomTopOffset: [-20, 20], randomLeftOffset: [-20, 20] };
			this.$el = t, this.options = $.extend(e, i), this.blockWidth = 0, this.blockHeight = 0, this.blocks = [], this._init()
		}
		e(3);
		var s = e(9).random;
		n.prototype = {
			constructor: n,
			_init: function() {
				var t, i, e, n = this.options.size[0],
					s = this.options.size[1],
					o = 0,
					r = 0,
					a = 0;
				for(this.options.inBound ? (r = this.options.itemHeight / 2 + Math.max(Math.abs(this.options.randomTopOffset[0]), Math.abs(this.options.randomTopOffset[1])), a = this.options.itemWidth / 2 + Math.max(Math.abs(this.options.randomLeftOffset[0]), Math.abs(this.options.randomLeftOffset[1])), this.blockWidth = (this.$el.width() - 2 * a) / s, this.blockHeight = (this.$el.height() - 2 * r) / n) : (this.blockWidth = this.$el.width() / s, this.blockHeight = this.$el.height() / n), t = 0; n > t; t++)
					for(i = 0; s > i; i++) e = { id: o++, top: t * this.blockHeight + r, left: i * this.blockWidth + a, x: (i + .5) * this.blockWidth + a, y: (t + .5) * this.blockHeight + r, weight: 0 }, this.blocks.push(e)
			},
			_getMinWeightBlocks: function() { var t = this.blocks[0].weight; return this.blocks.forEach(function(i) { i.weight <= t && (t = i.weight) }), this.blocks.filter(function(i) { return i.weight == t }) },
			occupy: function() {
				var t = this._getMinWeightBlocks(),
					i = s(0, t.length),
					e = t[i];
				return e.weight++, { x: e.x + s(this.options.randomLeftOffset[0], this.options.randomLeftOffset[1]), y: e.y + s(this.options.randomTopOffset[0], this.options.randomTopOffset[1]) }
			},
			free: function(t, i) { this.blocks.forEach(function(e) { i >= e.top && i < e.top + this.blockHeight && t >= e.left && t < e.left + this.blockWidth && e.weight-- }.bind(this)) }
		}, t.exports = wy.base.RandomLayout = n
	}, function(t, i, e) {
		function n(t) {
			var i = { time: 6e4, tickUnit: 1e3, onTick: function(t) {}, onComplete: function() { console.log("complete") } };
			this.options = {};
			for(var e in i) void 0 != t[e] && null != t[e] ? this.options[e] = t[e] : this.options[e] = i[e];
			this.seedId = 0, this.lastTick = null, this.startTime = null, this.ticking = 0, this.status = ""
		}
		e(3);
		var s = e(9).requestAnimationFrame,
			o = e(9).cancelAnimationFrame;
		n.prototype = { constructor: n, _tick: function() { var t = new Date; return "ticking" == this.status && this.ticking >= this.options.time ? (this.pause(), this.status = "", this.options.onTick && this.options.onTick(Math.floor(this.ticking / this.options.tickUnit)), void(this.options.onComplete && this.options.onComplete())) : (t - this.lastTick >= this.options.tickUnit && (this.ticking += t - this.lastTick, this.lastTick = t, this.options.onTick && this.options.onTick(Math.floor(this.ticking / this.options.tickUnit))), void(this.seedId = s(this._tick.bind(this)))) }, start: function() { "" == this.status && (this.reset(), this.status = "ticking", this.startTime = new Date, this.lastTick = this.startTime, this.options.onTick && this.options.onTick(0), this._tick()) }, pause: function() { "ticking" == this.status && (this.status = "paused", o(this.seedId)) }, resume: function() { "paused" == this.status && (this.status = "ticking", this.lastTick = new Date, this._tick()) }, reset: function() { o(this.seedId), this.lastTick = null, this.startTime = null, this.ticking = 0, this.seedId = 0, this.status = "" }, add: function(t) { this.ticking += t * this.options.tickUnit, this.ticking < 0 && (this.ticking = 0), this.ticking >= this.options.time && (this.ticking = this.options.time) } }, t.exports = wy.base.Timer = n
	}, function(t, i, e) {
		function n(t) {
			var i = { defaultState: "", status: [], onStateChange: function(t, i) {} };
			this.options = {};
			for(var e in i) null != t[e] && void 0 != t[e] && (this.options[e] = t[e]);
			this.stateValue = "", this.mapping = {}, this._init()
		}
		e(3), n.prototype = {
			constructor: n,
			_init: function() { this.options.status.forEach(function(t) { this.mapping[t.value] = t.actions }.bind(this)), this.options.defaultState ? this.stateValue = this.options.defaultState : this.stateValue = this.options.status[0].value },
			takeAction: function() {
				var t = this.mapping[this.stateValue][arguments[0]];
				t ? (Array.prototype.splice.call(arguments, 0, 1), t.apply(this, arguments)) : console.warn("this is no action[" + t + "] defined under current state[" + this.stateValue + "]")
			},
			getState: function() { return this.stateValue },
			setState: function(t) {
				var i = this.stateValue;
				this.stateValue != t ? (this.stateValue = t, this.options.onStateChange && this.options.onStateChange.bind(this)(i, t)) : console.warn("new state value is the same as old state value", t)
			},
			addState: function(t, i) { this.mapping[t] = i }
		}, t.exports = wy.base.StateMachine = n
	}, function(t, i, e) { e(3), t.exports = wy.base.TWEEN = e(33) }, function(t, i, e) {
		var n, s;
		! function() {
			if("performance" in window == !1 && (window.performance = {}), Date.now = Date.now || function() { return(new Date).getTime() }, "now" in window.performance == !1) {
				var t = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
				window.performance.now = function() { return Date.now() - t }
			}
		}();
		var o = o || function() { var t = []; return { getAll: function() { return t }, removeAll: function() { t = [] }, add: function(i) { t.push(i) }, remove: function(i) { var e = t.indexOf(i); - 1 !== e && t.splice(e, 1) }, update: function(i) { if(0 === t.length) return !1; var e = 0; for(i = void 0 !== i ? i : window.performance.now(); e < t.length;) t[e].update(i) ? e++ : t.splice(e, 1); return !0 } } }();
		o.Tween = function(t) {
				var i = t,
					e = {},
					n = {},
					s = {},
					r = 1e3,
					a = 0,
					h = !1,
					c = !1,
					l = !1,
					u = 0,
					p = null,
					d = o.Easing.Linear.None,
					f = o.Interpolation.Linear,
					m = [],
					g = null,
					v = !1,
					_ = null,
					y = null,
					b = null;
				for(var x in t) e[x] = parseFloat(t[x], 10);
				this.to = function(t, i) { return void 0 !== i && (r = i), n = t, this }, this.start = function(t) {
					o.add(this), c = !0, v = !1, p = void 0 !== t ? t : window.performance.now(), p += u;
					for(var r in n) {
						if(n[r] instanceof Array) {
							if(0 === n[r].length) continue;
							n[r] = [i[r]].concat(n[r])
						}
						void 0 !== e[r] && (e[r] = i[r], e[r] instanceof Array == !1 && (e[r] *= 1), s[r] = e[r] || 0)
					}
					return this
				}, this.stop = function() { return c ? (o.remove(this), c = !1, null !== b && b.call(i), this.stopChainedTweens(), this) : this }, this.stopChainedTweens = function() { for(var t = 0, i = m.length; i > t; t++) m[t].stop() }, this.delay = function(t) { return u = t, this }, this.repeat = function(t) { return a = t, this }, this.yoyo = function(t) { return h = t, this }, this.easing = function(t) { return d = t, this }, this.interpolation = function(t) { return f = t, this }, this.chain = function() { return m = arguments, this }, this.onStart = function(t) { return g = t, this }, this.onUpdate = function(t) { return _ = t, this }, this.onComplete = function(t) { return y = t, this }, this.onStop = function(t) { return b = t, this }, this.update = function(t) {
					var o, c, b;
					if(p > t) return !0;
					v === !1 && (null !== g && g.call(i), v = !0), c = (t - p) / r, c = c > 1 ? 1 : c, b = d(c);
					for(o in n)
						if(void 0 !== e[o]) {
							var x = e[o] || 0,
								w = n[o];
							w instanceof Array ? i[o] = f(w, b) : ("string" == typeof w && (w = w.startsWith("+") || w.startsWith("-") ? x + parseFloat(w, 10) : parseFloat(w, 10)), "number" == typeof w && (i[o] = x + (w - x) * b))
						}
					if(null !== _ && _.call(i, b), 1 === c) {
						if(a > 0) {
							isFinite(a) && a--;
							for(o in s) {
								if("string" == typeof n[o] && (s[o] = s[o] + parseFloat(n[o], 10)), h) {
									var k = s[o];
									s[o] = n[o], n[o] = k
								}
								e[o] = s[o]
							}
							return h && (l = !l), p = t + u, !0
						}
						null !== y && y.call(i);
						for(var T = 0, S = m.length; S > T; T++) m[T].start(p + r);
						return !1
					}
					return !0
				}
			}, o.Easing = {
				Linear: { None: function(t) { return t } },
				Quadratic: { In: function(t) { return t * t }, Out: function(t) { return t * (2 - t) }, InOut: function(t) { return(t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1) } },
				Cubic: { In: function(t) { return t * t * t }, Out: function(t) { return --t * t * t + 1 }, InOut: function(t) { return(t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) } },
				Quartic: { In: function(t) { return t * t * t * t }, Out: function(t) { return 1 - --t * t * t * t }, InOut: function(t) { return(t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2) } },
				Quintic: { In: function(t) { return t * t * t * t * t }, Out: function(t) { return --t * t * t * t * t + 1 }, InOut: function(t) { return(t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) } },
				Sinusoidal: { In: function(t) { return 1 - Math.cos(t * Math.PI / 2) }, Out: function(t) { return Math.sin(t * Math.PI / 2) }, InOut: function(t) { return .5 * (1 - Math.cos(Math.PI * t)) } },
				Exponential: { In: function(t) { return 0 === t ? 0 : Math.pow(1024, t - 1) }, Out: function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, InOut: function(t) { return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2) } },
				Circular: { In: function(t) { return 1 - Math.sqrt(1 - t * t) }, Out: function(t) { return Math.sqrt(1 - --t * t) }, InOut: function(t) { return(t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) } },
				Elastic: {
					In: function(t) {
						var i, e = .1,
							n = .4;
						return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, i = n / 4) : i = n * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / n)))
					},
					Out: function(t) {
						var i, e = .1,
							n = .4;
						return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, i = n / 4) : i = n * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * t) * Math.sin((t - i) * (2 * Math.PI) / n) + 1)
					},
					InOut: function(t) {
						var i, e = .1,
							n = .4;
						return 0 === t ? 0 : 1 === t ? 1 : (!e || 1 > e ? (e = 1, i = n / 4) : i = n * Math.asin(1 / e) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / n)) : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / n) * .5 + 1)
					}
				},
				Back: { In: function(t) { var i = 1.70158; return t * t * ((i + 1) * t - i) }, Out: function(t) { var i = 1.70158; return --t * t * ((i + 1) * t + i) + 1 }, InOut: function(t) { var i = 2.5949095; return(t *= 2) < 1 ? .5 * (t * t * ((i + 1) * t - i)) : .5 * ((t -= 2) * t * ((i + 1) * t + i) + 2) } },
				Bounce: { In: function(t) { return 1 - o.Easing.Bounce.Out(1 - t) }, Out: function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, InOut: function(t) { return .5 > t ? .5 * o.Easing.Bounce.In(2 * t) : .5 * o.Easing.Bounce.Out(2 * t - 1) + .5 } }
			}, o.Interpolation = {
				Linear: function(t, i) {
					var e = t.length - 1,
						n = e * i,
						s = Math.floor(n),
						r = o.Interpolation.Utils.Linear;
					return 0 > i ? r(t[0], t[1], n) : i > 1 ? r(t[e], t[e - 1], e - n) : r(t[s], t[s + 1 > e ? e : s + 1], n - s)
				},
				Bezier: function(t, i) { for(var e = 0, n = t.length - 1, s = Math.pow, r = o.Interpolation.Utils.Bernstein, a = 0; n >= a; a++) e += s(1 - i, n - a) * s(i, a) * t[a] * r(n, a); return e },
				CatmullRom: function(t, i) {
					var e = t.length - 1,
						n = e * i,
						s = Math.floor(n),
						r = o.Interpolation.Utils.CatmullRom;
					return t[0] === t[e] ? (0 > i && (s = Math.floor(n = e * (1 + i))), r(t[(s - 1 + e) % e], t[s], t[(s + 1) % e], t[(s + 2) % e], n - s)) : 0 > i ? t[0] - (r(t[0], t[0], t[1], t[1], -n) - t[0]) : i > 1 ? t[e] - (r(t[e], t[e], t[e - 1], t[e - 1], n - e) - t[e]) : r(t[s ? s - 1 : 0], t[s], t[s + 1 > e ? e : s + 1], t[s + 2 > e ? e : s + 2], n - s)
				},
				Utils: {
					Linear: function(t, i, e) { return(i - t) * e + t },
					Bernstein: function(t, i) { var e = o.Interpolation.Utils.Factorial; return e(t) / e(i) / e(t - i) },
					Factorial: function() { var t = [1]; return function(i) { var e = 1; if(t[i]) return t[i]; for(var n = i; n > 1; n--) e *= n; return t[i] = e, e } }(),
					CatmullRom: function(t, i, e, n, s) {
						var o = .5 * (e - t),
							r = .5 * (n - i),
							a = s * s,
							h = s * a;
						return(2 * i - 2 * e + o + r) * h + (-3 * i + 3 * e - 2 * o - r) * a + o * s + i
					}
				}
			},
			function(e) { n = [], s = function() { return o }.apply(i, n), !(void 0 !== s && (t.exports = s)) }(this)
	}, function(t, i, e) {
		e(3),
			function(t) {
				var i = /iphone|ipad/i.test(navigator.userAgent);
				t.fn.nodoubletapzoom = function() {
					//				i && t(this).bind("touchstart", function(i) {
					//					var e = i.timeStamp,
					//						n = t(this).data("lastTouch") || e,
					//						s = e - n,
					//						o = i.originalEvent.touches.length;
					//					t(this).data("lastTouch", e), !s || s > 500 || o > 1 || (i.preventDefault(), t(this).trigger("click").trigger("click"))
					//				})
				}
			}(jQuery), t.exports = wy.base.NoDoubleTapZoom = {}
	}, function(t, i, e) {
		function n(t) {
			for(var i = document.createElement("div"), e = !1, n = null, s = !1, o = null, r = null, h = 0, c = a.length; c > h; h++)
				if(null !== a[h] ? (o = a[h][0] + "transform", r = a[h][1] + "Transform") : (o = "transform", r = "transform"), void 0 !== i.style[r]) { e = !0; break }
			switch(t) {
				case "2D":
					s = e;
					break;
				case "3D":
					if(e) {
						var l = document.body || document.createElement("body"),
							u = document.documentElement,
							p = u.style.overflow;
						document.body || (u.style.overflow = "hidden", u.appendChild(l), l.style.overflow = "hidden", l.style.background = ""), l.appendChild(i), i.style[r] = "translate3d(1px,1px,1px)", n = window.getComputedStyle(i).getPropertyValue(o), s = void 0 !== n && n.length > 0 && "none" !== n, u.style.overflow = p, l.removeChild(i)
					}
			}
			return s
		}

		function s(t, i) {
			var e = { relativeInput: !1, clipRelativeInput: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5, depth: 1 };
			this.$el = t, $.extend(this, e, i), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this._init()
		}
		e(3);
		var o = e(9).requestAnimationFrame,
			r = e(9).cancelAnimationFrame,
			a = [null, ["-webkit-", "webkit"],
				["-moz-", "Moz"],
				["-o-", "O"],
				["-ms-", "ms"]
			],
			h = 30;
		s.prototype = {
			constructor: s,
			ww: null,
			wh: null,
			wcx: null,
			wcy: null,
			wrx: null,
			wry: null,
			portrait: null,
			desktop: !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
			motionSupport: !!window.DeviceMotionEvent,
			orientationSupport: !!window.DeviceOrientationEvent,
			orientationStatus: 0,
			transform2DSupport: n("2D"),
			transform3DSupport: n("3D"),
			propertyCache: {},
			_init: function() { this._updateDimensions(), this.enable(), this._queueCalibration(this.calibrationDelay) },
			_css: function(t, i, e) {
				var n = this.propertyCache[i];
				if(!n)
					for(var s = 0, o = a.length; o > s; s++)
						if(n = null !== a[s] ? $.camelCase(a[s][1] + "-" + i) : i, void 0 !== t.style[n]) { this.propertyCache[i] = n; break }
				t.style[n] = e
			},
			_queueCalibration: function(t) { clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this._onCalibrationTimer.bind(this), t) },
			_updateDimensions: function() { this.ww = window.innerWidth, this.wh = window.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy) },
			_updateBounds: function() { this.bounds = this.$el[0].getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy) },
			_onAnimationFrame: function() {
				this._updateBounds();
				var t = this.ix - this.cx,
					i = this.iy - this.cy;
				(Math.abs(t) > this.calibrationThreshold || Math.abs(i) > this.calibrationThreshold) && this._queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? i : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? i : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this._clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this._clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
				var e = this.vx * this.depth * (this.invertX ? -1 : 1),
					n = this.vy * this.depth * (this.invertY ? -1 : 1),
					s = this;
				this.$el.each(function() { s._setPosition(this, e, n) }), this.raf = o(this._onAnimationFrame.bind(this))
			},
			_clamp: function(t, i, e) { return t = Math.max(t, i), t = Math.min(t, e) },
			_setPosition: function(t, i, e) { i += "px", e += "px", this.transform3DSupport ? this._css(t, "transform", "translate3d(" + i + "," + e + ",0)") : this.transform2DSupport ? this._css(t, "transform", "translate(" + i + "," + e + ")") : (t.style.left = i, t.style.top = e) },
			_onDeviceOrientation: function(t) {
				if(!this.desktop && null !== t.beta && null !== t.gamma) {
					this.orientationStatus = 1;
					var i = (t.beta || 0) / h,
						e = (t.gamma || 0) / h,
						n = window.innerHeight > window.innerWidth;
					this.portrait !== n && (this.portrait = n, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = e), this.ix = i, this.iy = e
				}
			},
			_onOrientationTimer: function() { this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable()) },
			_onCalibrationTimer: function() { this.calibrationFlag = !0 },
			_onWindowResize: function() { this._updateDimensions() },
			_onMouseMove: function(t) {
				var i = t.clientX,
					e = t.clientY;
				!this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (i = Math.max(i, this.ex), i = Math.min(i, this.ex + this.ew), e = Math.max(e, this.ey), e = Math.min(e, this.ey + this.eh)), this.ix = (i - this.ex - this.ecx) / this.erx, this.iy = (e - this.ey - this.ecy) / this.ery) : (this.ix = (i - this.wcx) / this.wrx, this.iy = (e - this.wcy) / this.wry)
			},
			enable: function() { this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, this.$el.attr("data-mode", "orientation"), window.addEventListener("deviceorientation", this._onDeviceOrientation.bind(this)), setTimeout(this._onOrientationTimer.bind(this), this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, this.$el.attr("data-mode", "cursor"), window.addEventListener("mousemove", this._onMouseMove.bind(this))), window.addEventListener("resize", this._onWindowResize.bind(this)), this.raf = o(this._onAnimationFrame.bind(this))) },
			disable: function() { this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this._onDeviceOrientation.bind(this)) : window.removeEventListener("mousemove", this._onMouseMove.bind(this)), window.removeEventListener("resize", this._onWindowResize.bind(this)), r(this.raf)) }
		}, t.exports = wy.base.Tilting = s
	}, function(t, i, e) {
		function n(t, i) {
			var e = { animationName: "", duration: 1e3, easing: "ease", delay: 0, iteration: 1, direction: "normal", fillMode: "none", autoPlay: !0, onAnimationStart: function() {}, onAnimationEnd: function() {}, onAnimationIteration: function() {} };
			this.options = $.extend(e, i), this.$el = t, this.playing = !1, this.iterationCount = 0, this._init()
		}
		e(3), n.prototype = {
			constructor: n,
			_init: function() {
				var t = function(t) { return /^\d+$/.test(t) ? t + "ms" : t.toString() },
					i = n.PREFIX;
				this.$el.css(i + "animation-duration", t(this.options.duration)).css(i + "animation-timing-function", this.options.easing).css(i + "animation-delay", t(this.options.delay)).css(i + "animation-direction", this.options.direction).css(i + "animation-fill-mode", this.options.fillMode).css(i + "animation-play-state", this.options.autoPlay ? "running" : "paused").css(i + "animation-iteration-count", this.options.iteration.toString()), this._attach(), this.options.autoPlay && this.play()
			},
			_attach: function() {
				var t = n.EVENT_PREFIX,
					i = this;
				this.$el.on(t + "AnimationStart", function(t) { t.target == i.$el[0] && i.options.onAnimationStart && i.options.onAnimationStart() }), this.$el.on(t + "AnimationIteration", function(t) { t.target == i.$el[0] && (i.iterationCount++, i.options.onAnimationIteration && i.options.onAnimationIteration()) }), this.$el.on(t + "AnimationEnd", function(t) { t.target == i.$el[0] && i.options.onAnimationEnd && i.options.onAnimationEnd() })
			},
			play: function() {
				var t = n.get(this.options.animationName),
					i = n.PREFIX;
				this.playing = !0, this.$el.css(i + "animation-name", t), this.$el.css(i + "animation-play-state", "running")
			},
			replay: function() { this.revoke(), setTimeout(function() { this.play() }.bind(this), 50) },
			stop: function() { this.playing = !1, this.$el.css(n.PREFIX + "animation-play-state", "paused") },
			revoke: function() {
				var t = n.PREFIX;
				this.iterationCount = 0, this.playing = !1, this.$el.css(t + "animation-name", "")
			}
		}, n._map = {}, n._handleVendorPrefix = function() {
			if(!n.PREFIX || !n.EVENT_PREFIX) {
				var t, i, e = "",
					s = { webkit: "webkit", moz: "", O: "o" },
					o = document.createElement("div");
				for(i in s) void 0 !== o.style[s[i] + "Animation"] && (e = "-" + i.toLowerCase() + "-", t = i);
				n.PREFIX = e, n.EVENT_PREFIX = t
			}
		}, n.get = function(t) { return n._map[t] }, n.defineAnimation = function(t, i) {
			n._handleVendorPrefix();
			var e, s = document.createElement("style"),
				o = document.getElementsByTagName("head")[0] || document.documentElement,
				r = "wy-animation-" + 1 * new Date + parseInt(1e4 * Math.random()),
				a = "@" + n.PREFIX + "keyframes " + r + "{";
			for(e in i) {
				var h, c, l, u = "{",
					p = i[e];
				for(h in p) c = p[h], h = h.replace(/([A-Z])/g, function(t, i) { return "-" + i.toLowerCase() }), h = h.replace(/easing/g, "animation-timing"), h = h.replace(/^(?=transform|perspective|transition|animation)/g, n.PREFIX), u += h + ":" + c + ";";
				for(u += "}", e = e.replace(/%/g, ""), e = e.split(","), l = 0; l < e.length; l++) a += e[l] + "%", a += u
			}
			a += "}", s.appendChild(document.createTextNode(a)), o.appendChild(s), n._map[t] = r
		}, n.applyAnimation = function(t, i) {
			if(!i) return console.error("options is required for Animation.apply()"), null;
			var e = n.EFFECT[i.animationName],
				s = n.get(i.animationName);
			return !s && e && n.defineAnimation(i.animationName, e), new n(t, i)
		}, n.EFFECT = { flash: { "0,50,100": { opacity: 1 }, "25,75": { opacity: 0 } }, shake: { "0,100": { transform: "translate3d(0, 0, 0)" }, "10, 30, 50, 70, 90": { transform: "translate3d(-10px, 0, 0)" }, "20, 40, 60, 80": { transform: "translate3d(10px, 0, 0)" } }, swing: { 20: { transform: "rotate3d(0, 0, 1, 15deg)" }, 40: { transform: "rotate3d(0, 0, 1, -10deg)" }, 60: { transform: "rotate3d(0, 0, 1, 5deg)" }, 80: { transform: "rotate3d(0, 0, 1, -5deg)" }, 100: { transform: "rotate3d(0, 0, 1, 0deg)" } }, wobble: { 0: { transform: "none" }, 15: { transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)" }, 30: { transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)" }, 45: { transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)" }, 60: { transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)" }, 75: { transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)" }, 100: { transform: "none" } }, bounceIn: { 0: { opacity: 0, transform: "scale3d(.3, .3, .3)" }, 20: { transform: "scale3d(1.1, 1.1, 1.1)" }, 40: { transform: "scale3d(.9, .9, .9)" }, 60: { opacity: 1, transform: "scale3d(1.03, 1.03, 1.03)" }, 80: { transform: "scale3d(.97, .97, .97)" }, 100: { opacity: 1, transform: "scale3d(1, 1, 1)" } }, bounceInLeft: { 0: { opacity: 0, transform: "translate3d(-3000px, 0, 0)" }, 60: { opacity: 1, transform: "translate3d(25px, 0, 0)" }, 75: { transform: "translate3d(-10px, 0, 0)" }, 90: { transform: "translate3d(5px, 0, 0)" }, 100: { transform: "none" } }, bounceInRight: { 0: { opacity: 0, transform: "translate3d(3000px, 0, 0)" }, 60: { opacity: 1, transform: "translate3d(-25px, 0, 0)" }, 75: { transform: "translate3d(10px, 0, 0)" }, 90: { transform: "translate3d(-5px, 0, 0)" }, 100: { transform: "none" } }, bounceOut: { 0: { transform: "scale3d(.9, .9, .9)" }, "50,55": { transform: "scale3d(1.1, 1.1, 1.1)" }, 100: { opacity: 0, transform: "scale3d(.3, .3, .3)" } }, bounceOutLeft: { 20: { opacity: 1, transform: "translate3d(20px, 0, 0)" }, 100: { opacity: 0, transform: "translate3d(-2000px, 0, 0)" } }, bounceOutRight: { 20: { opacity: 1, transform: "translate3d(-20px, 0, 0)" }, 100: { opacity: 0, transform: "translate3d(2000px, 0, 0)" } }, fadeIn: { 0: { opacity: 0 }, 100: { opacity: 1 } }, fadeOut: { 0: { opacity: 1 }, 100: { opacity: 0 } }, flip: { 0: { transform: "perspective(400px) rotate3d(0, 1, 0, -360deg)" }, 40: { transform: "perspective(400px) rotate3d(0, 1, 0, -190deg)" }, 60: { transform: "perspective(400px) rotate3d(0, 1, 0, -170deg)" }, 80: { transform: "perspective(400px) scale3d(.95, .95, .95)", "animation-timing-function": "ease-in" }, 100: { transform: "perspective(400px)", "animation-timing-function": "ease-in" } }, flipInX: { 0: { transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)" }, 40: { transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)" }, 60: { transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)" }, 80: { transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)" }, 100: { transform: "perspective(400px)" } }, flipInY: { 0: { transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)" }, 40: { transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)" }, 60: { transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)" }, 80: { transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)" }, 100: { transform: "perspective(400px)" } }, flipOutX: { 0: { transform: "perspective(400px)" }, 30: { transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", opacity: 1 }, 100: { transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", opacity: 0 } }, flipOutY: { 0: { transform: "perspective(400px)" }, 30: { transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)", opacity: 1 }, 100: { transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", opacity: 0 } }, rollIn: { 0: { transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)", opacity: 0 }, 100: { transform: "none", opacity: 1 } }, rollOut: { 0: { transform: "none", opacity: 1 }, 100: { transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)", opacity: 0 } }, zoomIn: { 0: { transform: "scale3d(.3, .3, .3)", opacity: 0 }, 50: { opacity: 1 } }, zoomOut: { 0: { opacity: 1 }, 50: { transform: "scale3d(.3, .3, .3)", opacity: 0 }, 100: { opacity: 0 } } }, t.exports = wy.base.Animation = n
	}, function(t, i, e) {
		function n(t) {
			var i = { container: $(window), content: $(document) };
			this.options = $.extend(i, t), this.$el = this.options.container, this.handlers = [], this.onScrollHandler = null
		}
		e(3), n.prototype = {
			_init: function() { this.onScrollHandler = this._onScroll.bind(this), this.$el.on("scroll", this.onScrollHandler), this.$el.on("resize", this.onScrollHandler) },
			_calPercentage: function() {
				var t = $(this.options.container).scrollTop(),
					i = $(this.options.content).height(),
					e = $(this.options.container).height(),
					n = t / (i - e);
				return n
			},
			_onScroll: function() {
				var t = this.get();
				this.handlers.forEach(function(i) { "function" == typeof i && i.call(null, t) })
			},
			register: function(t) { this.handlers.push(t) },
			start: function() { this._init() },
			stop: function() { this.$el.off("scroll", this.onScrollHandler), this.$el.off("resize", this.onScrollHandler) },
			get: function() { return this._calPercentage() }
		}, t.exports = wy.base.ScrollPercentage = n
	}, function(t, i, e) {
		function n(t) {
			var i = { container: $(window), content: $(document), threshold: .7 };
			this.options = $.extend(i, t), this.scrollPercentage = null, this.loading = !1, this.count = 0, this._init()
		}
		e(3);
		var s = e(37);
		n.prototype = {
			constructor: n,
			_init: function() { this._initScrollPercentage() },
			_initScrollPercentage: function() { this.scrollPercentage = new s(this.options) },
			register: function(t) {
				var i = this,
					e = this.scrollPercentage.get(),
					n = i.options.threshold;
				this.scrollPercentage.register(function(s) { s > e && s > n && !i.loading && (i.loading = !0, t && t.call(null, i.count, function() { i.loading = !1, i.count++ })), e = s })
			},
			start: function() { this.scrollPercentage.start() },
			stop: function() { this.scrollPercentage.stop() }
		}, t.exports = wy.base.ScrollLoader = n
	}, function(t, i, e) { e(40) }, function(t, i) {
		! function(t, i, e, n) {
			"use strict";

			function s(e, n, s, o) {
				function r() { y = i.devicePixelRatio > 1, a(s), n("delay") >= 0 && setTimeout(function() { h(!0) }, n("delay")), (n("delay") < 0 || n("combined")) && (o.e = d(n("throttle"), function(t) { "resize" === t.type && (v = _ = -1), h(t.all) }), o.a = function(t) { a(t), s.push.apply(s, t) }, o.g = function() { return s }, h(), t(n("appendScroll")).on("scroll." + e.name + " resize." + e.name, o.e)) }

				function a(i) {
					if(i = t(i).filter(function() { return !t(this).data(n("handledName")) && (t(this).attr(n("attribute")) || t(this).attr(n("loaderAttribute"))) }).data("plugin_" + e.name, e), n("defaultImage") || n("placeholder"))
						for(var s = 0; s < i.length; s++) {
							var o = t(i[s]),
								r = i[s].tagName.toLowerCase(),
								a = "background-image";
							"img" == r && n("defaultImage") && !o.attr("src") ? o.attr("src", n("defaultImage")) : "img" == r || !n("placeholder") || o.css(a) && "none" != o.css(a) || o.css(a, "url(" + n("placeholder") + ")")
						}
				}

				function h(i) {
					if(!s.length) return void(n("autoDestroy") && e.destroy());
					for(var o = !1, r = n("imageBase") ? n("imageBase") : "", a = 0; a < s.length; a++)(function(e) {
						if(l(e) || i) {
							var s, a = t(e),
								h = e.tagName.toLowerCase(),
								u = a.attr(n("attribute"));
							a.data(n("handledName")) || n("visibleOnly") && !a.is(":visible") || !(u && ("img" == h && r + u != a.attr("src") || "img" != h && r + u != a.css("background-image")) || (s = a.attr(n("loaderAttribute")))) || (o = !0, a.data(n("handledName"), !0), c(a, h, r, s))
						}
					})(s[a]);
					o && (s = t(s).filter(function() { return !t(this).data(n("handledName")) }))
				}

				function c(i, e, s, o) {
					++g;
					var r = function() { m("onError", i), f() };
					if(m("beforeLoad", i), o) i.off("error").one("error", r), i.one("load", function() { n("removeAttribute") && i.removeAttr(n("loaderAttribute")), m("afterLoad", i), f() }), m(o, i, function(t) { t ? i.load() : i.error() }) || i.error();
					else {
						var a = t(new Image);
						a.one("error", r), a.one("load", function() { i.hide(), "img" == e ? i.attr("src", a.attr("src")) : i.css("background-image", "url(" + a.attr("src") + ")"), i[n("effect")](n("effectTime")), n("removeAttribute") && i.removeAttr(n("attribute") + " " + n("retinaAttribute")), m("afterLoad", i), a.remove(), f() }), a.attr("src", s + i.attr(n(y && i.attr(n("retinaAttribute")) ? "retinaAttribute" : "attribute"))), a.complete && a.load()
					}
				}

				function l(t) {
					var i = t.getBoundingClientRect(),
						e = n("scrollDirection"),
						s = n("threshold"),
						o = p() + s > i.top && -s < i.bottom,
						r = u() + s > i.left && -s < i.right;
					return "vertical" == e ? o : "horizontal" == e ? r : o && r
				}

				function u() { return v >= 0 ? v : v = t(i).width() }

				function p() { return _ >= 0 ? _ : _ = t(i).height() }

				function d(t, i) {
					var s, o = 0;
					return function(r, a) {
						function h() { o = +new Date, i.call(e, r) }
						var c = +new Date - o;
						s && clearTimeout(s), c > t || !n("enableThrottle") || a ? h() : s = setTimeout(h, t - c)
					}
				}

				function f() {--g, s.size() || g || m("onFinishedAll") }

				function m(t, i, s) { return(t = n(t)) ? (t.apply(e, [].slice.call(arguments, 1)), !0) : !1 }
				var g = 0,
					v = -1,
					_ = -1,
					y = !1;
				! function() { "event" == n("bind") ? r() : t(i).load(r) }()
			}

			function o(i, e) {
				var o = this,
					r = t.extend({}, o.configuration, e),
					a = {};
				return o.config = function(t, i) { return i === n ? r[t] : (r[t] = i, o) }, o.addItems = function(i) { return a.a && a.a("string" === t.type(i) ? t(i) : i), o }, o.getItems = function() { return a.g ? a.g() : {} }, o.update = function(t) { return a.e && a.e({}, !t), o }, o.loadAll = function() { return a.e && a.e({ all: !0 }, !0), o }, o.destroy = function() { return t(o.config("appendScroll")).off("." + o.name, a.e), a = {}, n }, s(o, o.config, i, a), o.config("chainable") ? i : o
			}
			t.fn.Lazy = t.fn.lazy = function(t) { return new o(this, t) }, t.extend(o.prototype, { name: "lazy", configuration: { chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: i, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", retinaAttribute: "data-retina", loaderAttribute: "data-loader", removeAttribute: !0, handledName: "handled", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: null, afterLoad: null, onError: null, onFinishedAll: null } })
		}(jQuery, window, document)
	}, function(t, i, e) {
		function n(t, i) {
			var e = "[CommandManager]: ";
			console[i || "log"](e + t)
		}

		function s(t) {
			var i = { maxHistory: 20 };
			t || (t = {}), this.options = {};
			for(var e in i) void 0 !== t[e] ? this.options[e] = t[e] : this.options[e] = i[e];
			this.history = [], this.commands = {}
		}

		function o(t, i) { i || (i = {}), this.name = t, this.executeImpl = i.execute, this.undoImpl = i.undo } e(3), s.prototype = {
			constructor: s,
			execute: function(t) { var i, e = this.commands[t]; return e ? (this.history.length > this.options.maxHistory && this.history.shift(), i = Array.prototype.slice.call(arguments, 1), e.execute.apply(e, i), void this.history.push({ name: t, arguments: i })) : void n("[" + t + "] is not defined", "error") },
			undo: function() {
				var t, i, e = this.history.pop();
				e ? (t = this.commands[e.name], i = e.arguments, t.undo.apply(t, i)) : n("This is no more undo", "warn")
			},
			create: function(t, i) { var e = new o(t, i); return this.commands[t] ? (n("command [" + t + "] is already created", "error"), this.commands[t]) : (this.commands[t] = e, e) }
		}, o.prototype = { constructor: o, execute: function() { this.executeImpl ? this.executeImpl.apply(null, arguments) : console.warn("You did not pass any implementation for [execute] of " + this.name + " command") }, undo: function() { this.undoImpl ? this.undoImpl.apply(null, arguments) : console.warn("You did not pass any implementation for [undo] of " + this.name + " command") } }, t.exports = wy.base.CommandManager = s
	}, function(t, i, e) { e(3), t.exports = wy.base.Shake = e(43) }, function(t, i, e) {
		var n;
		! function(s, o) { n = function() { return o(s, s.document) }.call(i, e, i, t), !(void 0 !== n && (t.exports = n)) }("undefined" != typeof window ? window : this, function(t, i) {
			"use strict";

			function e(e) {
				if(this.hasDeviceMotion = "ondevicemotion" in t, this.options = { threshold: 15, timeout: 1e3 }, "object" == typeof e)
					for(var n in e) e.hasOwnProperty(n) && (this.options[n] = e[n]);
				if(this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null, "function" == typeof i.CustomEvent) this.event = new i.CustomEvent("shake", { bubbles: !0, cancelable: !0 });
				else {
					if("function" != typeof i.createEvent) return !1;
					this.event = i.createEvent("Event"), this.event.initEvent("shake", !0, !0)
				}
			}
			return e.prototype.reset = function() { this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null }, e.prototype.start = function() { this.reset(), this.hasDeviceMotion && t.addEventListener("devicemotion", this, !1) }, e.prototype.stop = function() { this.hasDeviceMotion && t.removeEventListener("devicemotion", this, !1), this.reset() }, e.prototype.devicemotion = function(i) {
				var e, n, s = i.accelerationIncludingGravity,
					o = 0,
					r = 0,
					a = 0;
				return null === this.lastX && null === this.lastY && null === this.lastZ ? (this.lastX = s.x, this.lastY = s.y, void(this.lastZ = s.z)) : (o = Math.abs(this.lastX - s.x), r = Math.abs(this.lastY - s.y), a = Math.abs(this.lastZ - s.z), (o > this.options.threshold && r > this.options.threshold || o > this.options.threshold && a > this.options.threshold || r > this.options.threshold && a > this.options.threshold) && (e = new Date, n = e.getTime() - this.lastTime.getTime(), n > this.options.timeout && (t.dispatchEvent(this.event), this.lastTime = new Date)), this.lastX = s.x, this.lastY = s.y, void(this.lastZ = s.z))
			}, e.prototype.handleEvent = function(t) { return "function" == typeof this[t.type] ? this[t.type](t) : void 0 }, e
		})
	}, function(t, i, e) { t.exports = { Wheel: e(45), Barrage: e(46), ScratchPad: e(47), ImageEditor: e(48), HappyBirthday: e(49), MovingStairs: e(50), FallingPetals: e(51), Jigsaw: e(52), MemoWall: e(53), Marquee: e(54), Jiugongge: e(55), BubbleUp: e(56), DropAndClick: e(57), CatchMe: e(58), TiltImage: e(59), Guide: e(60), Flipper: e(61), Scroll: e(63), GridLayout: e(65), ImageMovie: e(73), EmojiSelector: e(74), Counter: e(76), AvatarBubble: e(78), Doodle: e(79), InfiniteScroll: e(80), AnimatedList: e(82) } }, function(t, i, e) {
		function n(t, i) {
			var e = { wheelImage: "", centerImage: "", wheelSize: 400, centerSize: 100, rotatingAudio: null, completedAudio: null, rotateDuration: "7.6", rotateRoundRange: [6, 8], segments: [], clickToRoll: !0, onReady: null, onCompleteRotating: null, onClick: null };
			this.$el = t, this.options = $.extend(e, i), this.status = "loading", this.imageLoadStatus = { wheel: !1, center: !1 }, this.audioLoadStatus = { rotating: !1, completed: !1 }, this.segmentRange = [], this.targetSegmentIndex = null, this.resultSegmentIndex = 0, this.rotateDeg = 0, this.rotatingAudio, this.completedAudio, this._init()
		}
		e(3);
		var s = e(9).random;
		n.prototype = {
			constructor: n,
			_init: function() { this._calculateSegmentRange(), this._styleContainerElement(), this._loadResources() },
			_calculateSegmentRange: function() {
				var t = this.options.segments.length,
					i = 0,
					e = 0,
					n = 0;
				this.options.segments[0]._percentage ? this.segmentRange = this.options.segments.map(function(t) { return e = i, n = i + 360 * t._percentage, i = n, { from: e, to: n } }) : (i = 360 / t, this.segmentRange = this.options.segments.map(function(t, s) { return e = s * i, n = (s + 1) * i, { from: e, to: n } }))
			},
			_loadResources: function() {
				["rotating", "completed"].forEach(function(t) { this._loadAudio(t) }.bind(this)), ["wheel", "center"].forEach(function(t) { this._loadImage(t) }.bind(this))
			},
			_loadAudio: function(t) {
				var i = $("<audio>"),
					e = this.options[t + "Audio"];
				e ? (i.on("canplaythrough", function() { this[t + "Audio"] = i[0], this[t + "Audio"].autoplay = !1, this[t + "Audio"].loop = !1, this.audioLoadStatus[t] = !0, this._resourceReady() && this._ready() }.bind(this)), i.attr("src", e), this.$el.append(i)) : (this.audioLoadStatus[t] = !0, this._resourceReady() && this._ready())
			},
			_loadImage: function(t) {
				var i = $("<img alt='image'>");
				i.on("load", function() { this.imageLoadStatus[t] = !0, this._resourceReady() && this._ready() }.bind(this)), i.attr("src", this.options[t + "Image"]), this["$" + t + "Img"] = i
			},
			_styleContainerElement: function() { this.$el.css("display", "inline-block"), this.$el.css("position", "relative"), this.$el.css("overflow", "hidden"), this.$el.width(this.options.wheelSize + "px"), this.$el.height(this.options.wheelSize + "px") },
			_resourceReady: function() { return this._allImageLoaded() },
			_allAudioLoaded: function() {
				var t, i = !0;
				for(t in this.audioLoadStatus)
					if(!this.audioLoadStatus[t] && this.options[t + "Audio"]) { i = !1; break }
				return i
			},
			_allImageLoaded: function() {
				var t, i = !0;
				for(t in this.imageLoadStatus)
					if(!this.imageLoadStatus[t] && this.options[t + "Image"]) { i = !1; break }
				return i
			},
			_ready: function() {
				["wheel", "center"].forEach(function(t) {
					var i = this["$" + t + "Img"];
					i.width(this.options[t + "Size"] + "px"), i.height(this.options[t + "Size"] + "px"), "center" == t && (i.css("position", "absolute"), i.css("top", "50%"), i.css("left", "50%"), i.css("transform", "translateX(-50%) translateY(-50%)"), i.css("-webkit-transform", "translateX(-50%) translateY(-50%)")), this.$el.append(i)
				}.bind(this)), this.$wheelImg.css("transition", "transform " + this.options.rotateDuration + "s ease-out"), this.$wheelImg.css("-webkit-transition", "-webkit-transform " + this.options.rotateDuration + "s ease-out"), this.$wheelImg.css("transform", "rotate(0deg)"), this.$wheelImg.css("-webkit-transform", "rotate(0deg)"), this._bindClickEvent(), this.status = "ready", this.options.onReady && this.options.onReady.bind(this)()
			},
			_rotateCompleted: function() {
				var t, i, e = this.rotateDeg % 360;
				for(i = 0; i < this.segmentRange.length; i++)
					if(t = this.segmentRange[i], 360 - e >= t.from && 360 - e < t.to) { this.resultSegmentIndex = i; break }
				this._bindClickEvent(), this._removeTransitionEvent(), this._playCompletedAudio(), this.status = "ready", this.options.onCompleteRotating && this.options.onCompleteRotating.bind(this)()
			},
			_getRandomDeg: function() {
				var t = s(this.options.rotateRoundRange[0], this.options.rotateRoundRange[1]),
					i = s(0, 360);
				return 360 * t + i
			},
			_rotate: function(t) { "ready" == this.status && (this._bindTransitionEvent(), this._removeClickEvent(), this.status = "rotating", this._playRotatingAudio(), this.rotateDeg += t, this.$wheelImg.css("transform", "rotate(" + this.rotateDeg + "deg)"), this.$wheelImg.css("-webkit-transform", "rotate(" + this.rotateDeg + "deg)")) },
			_bindTransitionEvent: function() { this.$wheelImg.on("transitionend webkitTransitionEnd", this._rotateCompleted.bind(this)) },
			_removeTransitionEvent: function() { this.$wheelImg.off("transitionend webkitTransitionEnd") },
			_bindClickEvent: function() { this.options.clickToRoll && this.$centerImg.on("click", function() { this.options.onClick ? this.options.onClick.bind(this)() : this.start() }.bind(this)) },
			_removeClickEvent: function() { this.$centerImg.off("click") },
			_playRotatingAudio: function() { this.rotatingAudio && this.rotatingAudio.play() },
			_playCompletedAudio: function() { this.completedAudio && this.completedAudio.play() },
			_rotateToSegment: function(t) {
				var i = 360 / this.options.segments.length / 4,
					e = 360 - s(this.segmentRange[t].from + i, this.segmentRange[t].to - i),
					n = e - this.rotateDeg % 360,
					o = s(this.options.rotateRoundRange[0], this.options.rotateRoundRange[1]);
				this._rotate(360 * o + n)
			},
			start: function() { null == this.targetSegmentIndex ? this._rotate(this._getRandomDeg()) : this._rotateToSegment(this.targetSegmentIndex) },
			setTargetSegmentIndex: function(t) { this.targetSegmentIndex = t },
			getResult: function() { return this.options.segments[this.resultSegmentIndex] }
		}, t.exports = wy.effect.Wheel = n
	}, function(t, i, e) {
		function n(t) {
			if(t.options.colorRange) {
				var i = t.options.colorRange.length,
					e = a(0, i);
				return t.options.colorRange[e]
			}
			return "#" + function(t) { return(t += "0123456789abcdef" [Math.floor(16 * Math.random())]) && 6 == t.length ? t : arguments.callee(t) }("")
		}

		function s(t) { return a(t.options.fontSizeRange.from, t.options.fontSizeRange.to) }

		function o(t) {
			var i = a(0, t.lanes.length),
				e = null,
				n = "horizontal" == t.options.direction ? t.$el.height() : t.$el.width(),
				s = 0,
				o = n - t.laneWidth;
			if(t.laneStatus[i]) {
				for(i = 0; i < t.lanes.length; i++)
					if(!t.laneStatus[i]) { e = t.lanes[i], t.laneStatus[i] = !0; break }
				e && (s = e.from, o = e.to)
			} else t.laneStatus[i] = !0, e = t.lanes[i], s = e.from, o = e.to;
			return o = Math.min(o, n - t.laneWidth), { index: i, position: a(s, o) }
		}

		function r(t, i) {
			var e = { width: "100%", height: "200px", duration: 5e3, direction: "horizontal", reverse: !1, displayMax: 3, fontSizeRange: { from: 8, to: 48 }, colorRange: h, beforeItemIn: function(t, i) {}, positionStrategy: function() { return o(this) }, colorStrategy: function() { return n(this) }, fontSizeStrategy: function() { return s(this) } };
			this.options = $.extend(e, i), this.$el = t, this.queue = [], this.displayCount = 0, this.laneWidth = 0, this.lanes = [], this.laneStatus = {}, this._init()
		}
		e(3);
		var a = (e(4), e(9).random),
			h = ["black", "red", "black", "black", "black"];
		r.prototype = {
			constructor: r,
			_init: function() {
				var t;
				this.$el.css("width", this.options.width), this.$el.css("height", this.options.height), this.$el.css("position", "relative"), this.$el.css("overflow", "hidden"), t = "horizontal" == this.options.direction ? this.$el.height() : this.$el.width(), this.laneWidth = t / this.options.displayMax;
				for(var i = 0; i + this.laneWidth <= t;) this.lanes.push({ from: i, to: i += this.laneWidth })
			},
			_getRandomPosition: function() { return this.options.positionStrategy.bind(this)() },
			_getRandomFontSize: function() { return this.options.fontSizeStrategy.bind(this)() },
			_getRandomColor: function() { return this.options.colorStrategy.bind(this)() },
			_consumeQueue: function(t) {
				var i = null;
				this.displayCount >= this.options.displayMax || 0 == this.queue.length || (i = this.queue.shift(), i.options.forever && this.queue.push(i), t ? setTimeout(function() { this._append(i.content, i.options) }.bind(this), a(0, this.options.duration)) : this._append(i.content, i.options))
			},
			_beforeItemIn: function(t, i) { this.options.beforeItemIn && this.options.beforeItemIn(t, i) },
			_append: function(t, i) {
				var e = null,
					n = null;
				e = $("<div>"), e.css("display", "inline-block"), e.css("position", "absolute"), e.css("white-space", "nowrap"), e.css("color", i.color || this._getRandomColor()), e.css("font-size", i.fontSize || this._getRandomFontSize() + "px"), e.html(t), this.$el.append(e), n = this._getRandomPosition(), "horizontal" == this.options.direction ? (this.options.reverse ? e.css("left", -e.width() + "px") : e.css("right", -e.width() + "px"), e.css("top", i.position || n.position + "px"), this._beforeItemIn(e, n), e.snabbt({ position: [(e.width() + this.$el.width()) * (this.options.reverse ? 1 : -1), 0, 0], duration: this.options.duration, complete: function() {--this.displayCount, this.laneStatus[n.index] = !1, e.remove(), this._consumeQueue(!0) }.bind(this) })) : (this.options.reverse ? e.css("bottom", -e.height() + "px") : e.css("top", -e.height() + "px"), e.css("left", n.position + "px"), e.snabbt({ position: [0, (e.height() + this.$el.height()) * (this.options.reverse ? -1 : 1), 0], duration: this.options.duration, complete: function() {--this.displayCount, this.laneStatus[n.index] = !1, e.remove(), this._consumeQueue(!0) }.bind(this) })), ++this.displayCount
			},
			push: function(t, i, e) { e || (e = { forever: !1 }), i ? this._append(t, e) : (this.queue.push({ content: t, options: e }), this._consumeQueue()) },
			pushForever: function(t, i) { i || (i = {}), i.forever = !0, this.queue.push({ content: t, options: i }), this._consumeQueue() },
			reset: function() { this.queue = [] }
		}, t.exports = wy.effect.Barrage = r
	}, function(t, i, e) {
		function n(t, i) {
			var e = { maskType: "color", maskWidth: "auto", maskHeight: "auto", maskColor: "#ccc", maskImage: "", maskText: "", maskFontWeight: "Bold", maskFontSize: "24", maskFontFamily: "Arial", maskTextAlign: "center", maskTextColor: "#333333", backgroundType: "color", backgroundWidth: "auto", backgroundHeight: "auto", backgroundColor: "#ffffff", backgroundImage: "", backgroundImageRepeat: "no-repeat", backgroundImageSize: "cover", backgroundImagePosition: "center", backgroundText: "", backgroundFontWeight: "bold", backgroundFontSize: "24", backgroundFontFamily: "Arial", backgroundFontStyle: "normal", backgroundTextColor: "red", backgroundHTML: "", threshold: 80, penWidth: 30, onScratch: null, onDisclosure: null, onClickBackground: null };
			i = i || {};
			for(var n in e) void 0 !== i[n] && (e[n] = i[n]);
			this.options = e, this.$el = t, this.$bgWrapper = null, this.$background = null, this.$mask = null, this.maskContext = null, this._init()
		}
		e(3);
		var s = "ontouchstart" in window,
			o = s ? "touchstart" : "mousedown",
			r = s ? "touchmove" : "mousemove",
			a = s ? "touchend" : "mouseup";
		n.prototype = {
			constructor: n,
			_init: function() { this.$el.css("display", "inline-block"), this.$el.css("position", "relative"), this.$el.css("overflow", "hidden"), this._createBackgroundWrapper(), this._createBackground(), this._createMask() },
			_createBackgroundWrapper: function() { this.$bgWrapper = $("<div>"), this.$bgWrapper.css("visibility", "hidden"), this.$bgWrapper.css("position", "relative"), this.$bgWrapper.css("display", "-webkit-box"), this.$bgWrapper.css("-webkit-box-pack", "center"), this.$bgWrapper.css("-webkit-box-align", "center"), "html" != this.options.backgroundType && (this.$bgWrapper.width(this.$el.width()), this.$bgWrapper.height(this.$el.height())), this.$el.append(this.$bgWrapper) },
			_createBackground: function() {
				var t = this.options;
				switch(this.$background = $("<div>"), "auto" == t.backgroundWidth && (t.backgroundWidth = this.$el.width()), "auto" == t.backgroundHeight && (t.backgroundHeight = this.$el.height()), this.$background.width(t.backgroundWidth), this.$background.height(t.backgroundHeight), t.backgroundType) {
					case "color":
						this._drawColorBackground();
						break;
					case "image":
						this._drawImageBackground();
						break;
					case "html":
						this._drawHTMLBackground()
				}
				t.backgroundText && "html" != t.backgroundType && this._drawBackgroundText(), this.$bgWrapper.append(this.$background)
			},
			_createMask: function() {
				var t = this.options;
				switch(this.$mask = $("<canvas>"), this.$mask.css("position", "absolute"), this.$mask.css("display", "inline-block"), this.$mask.css("z-index", 2), "auto" == t.maskWidth && (t.maskWidth = this.$el.width()), "auto" == t.maskHeight && (t.maskHeight = this.$el.height()), "html" == t.backgroundType ? (this.$mask.css("left", "0"), this.$mask.css("top", "0"), t.maskWidth = this.$el.width(), t.maskHeight = this.$el.height()) : (this.$mask.css("left", (this.$el.width() - t.maskWidth) / 2 + "px"), this.$mask.css("top", (this.$el.height() - t.maskHeight) / 2 + "px")), this.$mask[0].width = t.maskWidth, this.$mask[0].height = t.maskHeight, this.maskContext = this.$mask[0].getContext("2d"), t.maskType) {
					case "color":
						this._drawColorMask();
						break;
					case "image":
						this._drawImageMask()
				}
				this.$el.append(this.$mask)
			},
			_drawImageBackground: function() {
				var t = this.options;
				this.$background.css("background-image", "url(" + t.backgroundImage + ")"), this.$background.css("background-repeat", t.backgroundImageRepeat), this.$background.css("background-position", t.backgroundImagePosition), this.$background.css("background-size", t.backgroundImageSize)
			},
			_drawHTMLBackground: function() {
				var t, i = this.options,
					e = i.backgroundHTML;
				t = "string" == typeof e ? $("<div>").append($(e)) : $("<div>").append(e), this.$background.css("width", "auto"), this.$background.css("height", "auto"), this.$el.css("width", "auto"), this.$el.css("height", "auto"), this.$background.append(t)
			},
			_drawColorBackground: function() { this.$background.css("background", this.options.backgroundColor) },
			_drawBackgroundText: function() {
				var t, i = this.options;
				t = $("<span>").text(i.backgroundText), t.css("font-weight", i.backgroundFontWeight), t.css("font-family", i.backgroundFontFamily), t.css("font-size", i.backgroundFontSize + "px"), t.css("font-style", i.backgroundFontStyle), t.css("color", i.backgroundTextColor), t.css("display", "inline-block"), this.$background.css("display", "-webkit-box"), this.$background.css("-webkit-box-align", "center"), this.$background.css("-webkit-box-pack", "center"), this.$background.append(t)
			},
			_drawColorMask: function() {
				var t = this.options;
				this.maskContext.save(), this.maskContext.fillStyle = t.maskColor, this.maskContext.fillRect(0, 0, t.maskWidth, t.maskHeight), this.maskContext.restore(), this._maskReady()
			},
			_drawImageMask: function() {
				var t = this.options,
					i = this.maskContext,
					e = new Image;
				e.onload = function() { i.drawImage(e, 0, 0, t.maskWidth, t.maskHeight), this._maskReady() }.bind(this), e.src = t.maskImage
			},
			_drawMaskText: function() {
				var t = this.options;
				this.maskContext.save(), this.maskContext.font = t.maskFontWeight + " " + t.maskFontSize + "px " + t.maskFontFamily, this.maskContext.textAlign = t.maskTextAlign, this.maskContext.fillStyle = t.maskTextColor, this.maskContext.fillText(t.maskText, t.maskWidth / 2, t.maskHeight / 2 + t.maskFontSize / 2), this.maskContext.restore()
			},
			_maskReady: function() {
				var t = this.options,
					i = this.maskContext;
				t.maskText && this._drawMaskText(), i.globalCompositeOperation = "destination-out", this.$bgWrapper.css("visibility", "visible"), this._bindEvent()
			},
			_scratch: function(t, i) {
				var e, n;
				this.maskContext.beginPath(), e = this.maskContext.createRadialGradient(t, i, 0, t, i, this.options.penWidth), e.addColorStop(0, "rgba(0,0,0,1)"), e.addColorStop(1, "rgba(255, 255, 255, 0)"), this.maskContext.fillStyle = e, this.maskContext.arc(t, i, this.options.penWidth, 0, 2 * Math.PI, !0), this.maskContext.fill(), n = this._getScratchPercentage(), this.options.onScratch && this.options.onScratch(n), n >= this.options.threshold && this._disclose()
			},
			_disclose: function() {
				var t = this.options;
				this.maskContext.clearRect(0, 0, t.maskWidth, t.maskHeight), this._unbindEvent(), this.$mask.remove(), "html" != this.options.backgroundType && this.options.onClickBackground && setTimeout(function() { this.$background.on("click", this.options.onClickBackground) }.bind(this), 100), this.options.onDisclosure && this.options.onDisclosure()
			},
			_getScratchPercentage: function() {
				var t, i, e = this.maskContext,
					n = this.options.maskWidth,
					s = this.options.maskHeight,
					o = e.getImageData(0, 0, n, s),
					r = o.data,
					a = [];
				for(t = 0; t < r.length; t += 4) i = r[t + 3], 128 > i && a.push(t);
				return(a.length / (r.length / 4) * 100).toFixed(2)
			},
			_bindEvent: function() { this.$mask.on(o, this._onStart.bind(this)), this.$mask.on(r, this._onMove.bind(this)), this.$mask.on(a, this._onEnd.bind(this)) },
			_unbindEvent: function() { this.$mask.off(o, this._onStart.bind(this)), this.$mask.off(r, this._onMove.bind(this)), this.$mask.off(a, this._onEnd.bind(this)) },
			_onStart: function(t) {
				this.started = !0;
				var i, e = 0,
					n = 0;
				i = s ? t.originalEvent.touches[0] : t, e = i.offsetX || i.pageX - this.$mask.offset().left, n = i.offsetY || i.pageY - this.$mask.offset().top, this._scratch(e, n), t.preventDefault()
			},
			_onMove: function(t) {
				if(this.started) {
					var i, e = 0,
						n = 0;
					i = s ? t.originalEvent.touches[0] : t, e = i.offsetX || i.pageX - this.$mask.offset().left, n = i.offsetY || i.pageY - this.$mask.offset().top, this._scratch(e, n), t.preventDefault()
				}
			},
			_onEnd: function(t) { this.started = !1, t.preventDefault() },
			destroy: function() { this.$background && this.$background.remove(), this.$bgWrapper && this.$bgWrapper.remove(), this.$mask && this.$mask.remove(), this.$background.off("click"), this._unbindEvent() }
		}, t.exports = wy.effect.ScratchPad = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { width: 400, height: 400, imageUrls: [], removeIcon: "assets/images/delete.png", removeIconSize: 30, addImageAnimation: !0, removeImageAnimation: !0, onImagesLoaded: function() {}, onInitCompleted: function() {} };
			this.$el = t, this.options = $.extend(e, i), this.inited = !1, this.images = [], this.activeImage = null, this.startCenterPoint = { x: 0, y: 0 }, this.startPan = { x: 0, y: 0 }, this.startRotation = 0, this.startScale = 1, this.hammerManager = new s.Manager(t[0]), this._init()
		}
		e(3);
		var s = e(6);
		n.prototype = {
			constructor: n,
			_init: function() { this.$el.css("position", "relative"), this.$el.css("height", this.options.height), this.$el.css("width", this.options.width), this.$el.css("overflow", "hidden"), this.hammerManager.add(new s.Pan({ threshold: 0, pointers: 0 })), this.hammerManager.add(new s.Swipe).recognizeWith(this.hammerManager.get("pan")), this.hammerManager.add(new s.Rotate({ threshold: 0 })).recognizeWith(this.hammerManager.get("pan")), this.hammerManager.add(new s.Pinch({ threshold: 0 })).recognizeWith([this.hammerManager.get("pan"), this.hammerManager.get("rotate")]), this.hammerManager.on("panstart panmove", this._onPan.bind(this)), this.hammerManager.on("rotatestart rotatemove", this._onRotate.bind(this)), this.hammerManager.on("pinchstart pinchmove", this._onPinch.bind(this)), this._loadImage(this.options.imageUrls) },
			_loadImage: function(t) {
				var i = this;
				t instanceof Array || (t = [t]), t.forEach(function(t) { i.addImage(t) })
			},
			_placeImage: function(t) {
				var i = t.img,
					e = t.order,
					n = $(i),
					o = t.$imgWrapper,
					r = this.options.width,
					a = this.options.height,
					h = i.naturalWidth,
					c = i.naturalHeight,
					l = Math.min(r / h, a / c),
					u = h * l,
					p = c * l,
					d = 0,
					f = 0;
				r - u > a - p ? f = (r - u) / 2 : d = (a - p) / 2, o.css("left", f), o.css("top", d), o.css("box-sizing", "border-box"), t.width = u, t.height = p, t.centerPoint = { x: f + u / 2, y: d + p / 2 }, n.css("width", u), n.css("height", p), o.css("position", "absolute"), o.css("z-index", 5 + e), new s(o[0]).on("tap", function() { t.clickToSelect && this.selectImage(t), t.onClick && t.onClick() }.bind(this));
				var m = $("<span>").css("position", "absolute").css("top", 0).css("bottom", 0).css("left", 0).css("right", 0).css("z-index", 9).css("background", "rgba(0,0,0,0)");
				o.append(m), t.$mask = m;
				var g = $("<img alt='image'>").css("position", "absolute").css("top", 0).css("right", 0).css("width", this.options.removeIconSize).css("z-index", 10).attr("src", this.options.removeIcon);
				t.closeButtonRequire && (new s(g[0]).on("tap", function(i) { this.removeImage(t) }.bind(this)), o.append(g)), t.$removeIcon = g, this.$el.append(o), this.options.addImageAnimation && (o.css("display", "none"), o.fadeIn("fast"))
			},
			_updateImageTransform: function(t) {
				var i = t.transform,
					e = t.$imgWrapper[0],
					n = t.$removeIcon[0],
					s = ["translate(" + i.translate.x + "px, " + i.translate.y + "px)", "scale(" + i.scale + ", " + i.scale + ")", "rotate(" + i.rotation + "deg)"].join(""),
					o = "scale(" + 1 / i.scale + ", " + 1 / i.scale + ")";
				e.style.webkitTransform = s, e.style.mozTransform = s, e.style.transform = s, n.style.webkitTransform = o, n.style.mozTransform = o, n.style.transform = o
			},
			_onPan: function(t) { var i = this.activeImage; "panstart" == t.type && (this.startPan = { x: i.transform.translate.x, y: i.transform.translate.y }, this.startCenterPoint = { x: i.centerPoint.x, y: i.centerPoint.y }), i.transform.translate = { x: this.startPan.x + t.deltaX, y: this.startPan.y + t.deltaY }, i.centerPoint = { x: this.startCenterPoint.x + t.deltaX, y: this.startCenterPoint.y + t.deltaY }, this._updateImageTransform(i), t.preventDefault() },
			_onRotate: function(t) { var i = this.activeImage; "rotatestart" == t.type && (this.startRotation = i.transform.rotation), i.transform.rotation = this.startRotation + t.rotation, this._updateImageTransform(i), t.preventDefault() },
			_onPinch: function(t) { var i, e = this.activeImage; "pinchstart" == t.type && (this.startScale = e.transform.scale), i = this.startScale * t.scale, .2 > i ? e.transform.scale = .2 : i > 5 ? e.transform.scale = 5 : e.transform.scale = i, this._updateImageTransform(e), t.preventDefault() },
			_drawImage: function(t, i) {
				var e = t.transform;
				i.save(), i.translate(t.centerPoint.x, t.centerPoint.y), i.rotate(e.rotation * Math.PI / 180), i.translate(-t.centerPoint.x, -t.centerPoint.y), i.scale(e.scale, e.scale), i.drawImage(t.img, (t.centerPoint.x - t.width * e.scale / 2) / e.scale, (t.centerPoint.y - t.height * e.scale / 2) / e.scale, t.width, t.height), i.restore()
			},
			_preProcessImageUrl: function(t) { var i = { url: "", closeButtonRequire: !0, clickToSelect: !0, onClick: null }; return "string" == typeof t ? i.url = t : "object" == typeof t && (i = $.extend(i, t)), i },
			moveImage: function(t, i) {
				var e = this.activeImage;
				e.transform.translate = { x: e.transform.translate.x + t, y: e.transform.translate.y + i }, e.centerPoint = { x: e.centerPoint.x + t, y: e.centerPoint.y + i }, this._updateImageTransform(e)
			},
			rotateImage: function(t) {
				var i = this.activeImage;
				i.transform.rotation = this.startRotation + 1 * t, this._updateImageTransform(i)
			},
			scaleImage: function(t) {
				var i = this.activeImage;
				i.transform.scale = t, this._updateImageTransform(i)
			},
			addImage: function(t, i) {
				t = this._preProcessImageUrl(t), void 0 === i && (i = !0);
				var e = $("<img />"),
					n = this,
					s = { id: 1 * new Date, url: t.url, closeButtonRequire: t.closeButtonRequire, clickToSelect: t.clickToSelect, onClick: t.onClick, img: null, $imgWrapper: null, $removeIcon: null, order: this.images.length + 1, height: 0, width: 0, centerPoint: { x: 0, y: 0 }, transform: { translate: { x: 0, y: 0 }, rotation: 0, scale: 1 } };
				this.images.push(s), e.on("load", function() {
					s.$imgWrapper = $("<span>").append($(this)), s.img = this, n._placeImage(s);
					var t = 0;
					n.images.forEach(function(i) { i.img && t++ }), t == n.images.length && (n.inited ? i && n.selectImage(n.images.length - 1) : (n.inited = !0, n.options.onInitCompleted && n.options.onInitCompleted()), n.options.onImagesLoaded && n.options.onImagesLoaded())
				}), e.attr("src", t.url)
			},
			setImage: function(t, i, e) {
				if(!(i > this.images.length - 1)) {
					t = this._preProcessImageUrl(t);
					var n = this.images[i],
						s = $("<img alt='image'>"),
						o = this;
					s.on("load", function() { n.$imgWrapper.remove(), n = { id: 1 * new Date, url: t.url, closeButtonRequire: t.closeButtonRequire, clickToSelect: t.clickToSelect, onClick: t.onClick, img: this, $imgWrapper: null, $removeIcon: null, order: i + 1, height: 0, width: 0, centerPoint: { x: 0, y: 0 }, transform: { translate: { x: 0, y: 0 }, rotation: 0, scale: 1 } }, n.$imgWrapper = $("<span>").append($(this)), o.images[i] = n, o._placeImage(n), e && o.selectImage(i) }), s.attr("src", t.url)
				}
			},
			removeImage: function(t) {
				var i;
				if("object" == typeof t) {
					if(i = this.images.filter(function(i) { return i.id == t.id })[0], !i) return;
					t = i.order - 1
				}
				this.images = this.images.filter(function(i, e) { var n = !0; return t == e && (n = !1, this.options.removeImageAnimation ? i.$imgWrapper.fadeOut("fast", function() { i.$imgWrapper.remove() }) : i.$imgWrapper.remove()), e > t && i.order--, n }.bind(this))
			},
			removeAll: function() { for(var t = this.images.length - 1; t >= 0; t--) this.removeImage(t) },
			reset: function() { this.removeAll(), this.options.imageUrls.forEach(function(t) { this.addImage(t, !1) }.bind(this)) },
			selectImage: function(t) {
				var i;
				if("object" == typeof t) {
					if(i = this.images.filter(function(i) { return i.id == t.id })[0], !i) return;
					t = i.order - 1
				}
				this.activeImage = this.images[t], this.images.forEach(function(i, e) { t == e ? i.$mask.css("background", "rgba(0,0,0,0.3)") : i.$mask.css("background", "rgba(0,0,0,0)") })
			},
			mergeImage: function() {
				var t = document.createElement("canvas"),
					i = t.getContext("2d"),
					e = this;
				return t.width = this.options.width, t.height = this.options.height, this.images.forEach(function(t) { e._drawImage(t, i) }), t
			}
		}, t.exports = wy.effect.ImageEditor = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { size: 50, count: 15, duration: 2e3, bind: function(t) {}, getValue: function() {}, mapping: [{ name: "gift", test: "gift", imageUrl: "assets/images/gift.png" }, { name: "tree", test: "tree", imageUrl: "assets/images/tree.png" }] };
			i = i || {}, this.options = $.extend(e, i), this.loader = null, this.imageCache = {}, this.itemsCache = [], this.height = 0, this.width = 0, this.status = "loading", this._init()
		}
		e(3);
		var s = e(9).random,
			o = e(10);
		n.prototype = {
			constructor: n,
			_init: function() { this.loader = new o, this.loader.on("complete", function() { this.status = "ready", this._coverImages() }.bind(this)), this.options.mapping.forEach(function(t) { this.loader.add(t.name, t.imageUrl) }.bind(this)), this.loader.load(), this._createStage(), this._createItems(), this._hideStage(), this._bind() },
			_bind: function() { this.options.bind(function() { this.test(this.options.getValue()) }.bind(this)) },
			_createStage: function() {
				var t = $("<div>");
				t.css("position", "fixed").css("top", "0").css("left", "0").css("bottom", "0").css("right", "0").css("z-index", 99999).css("overflow", "hidden"), $(document.body).append(t), this.$stage = t,
					this.height = t.height(), this.width = t.width()
			},
			_createItems: function() { for(var t, i = 0; i < this.options.count; i++) t = this._createItem(), this.$stage.append(t), this.itemsCache.push(t) },
			_createItem: function() { var t = $("<img alt='image'>"); return t.css("position", "absolute").css("width", this.options.size + "px").css("height", this.options.size + "px"), t },
			_converToBase64: function(t) { var i, e, n = document.createElement("canvas"); return n.width = 100, n.height = 100, i = n.getContext("2d"), i.drawImage(t, 0, 0, 100, 100), e = n.toDataURL("image/png"), n = null, e },
			_coverImages: function() { var t, i, e; for(t in this.loader.resources) i = this.loader.resources[t], e = this._converToBase64(i.data), this.imageCache[t] = e },
			_hideStage: function() { this.$stage.css("display", "none") },
			_showStage: function() { this.$stage.css("display", "block") },
			_setImage: function(t) { this.itemsCache.forEach(function(i) { i.attr("src", t) }) },
			test: function(t) {
				if("ready" == this.status) {
					var i, e, n = !1;
					for(i = 0; i < this.options.mapping.length; i++)
						if(e = this.options.mapping[i], -1 != t.indexOf(e.test)) { n = !0, this._setImage(this.imageCache[e.name]); break }
					n && this.play()
				}
			},
			play: function() {
				var t = this.options.size,
					i = this.width,
					e = this.height,
					n = 0;
				$("#log").text(i + ", " + e), this._showStage(), this.$stage.find("img").snabbt({ fromPosition: function(e, n) { return [e * i / n, 0 - t, 0] }, position: function(t, n) { return [t * i / n, e, 0] }, easing: "easeIn", duration: this.options.duration, delay: function() { return s(100, 1e3) }, complete: function(t, i) {++n == i && this._hideStage(), $("#log").text(n) }.bind(this) })
			}
		}, t.exports = wy.effect.HappyBirthday = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { stepCount: 5, stepHeight: 100, stepWidth: 400, stepDeep: 100, backgroundColor: "#BE512C", frontFaceColor: "#F1592A", topFaceColor: "#F78F1E", carrierSurfaceOffset: .75, scale: 1.2, perspective: 1800, movingDirection: 1, movingSpeed: 1, onRenderItem: function(t) { return t.toString() } };
			i = i || {}, this.options = $.extend(e, i), this.$el = t, this.$stair = null, this.steps = [], this.offsetY = 0, this.offsetZ = 0, this.paused = !1, this.items = [], this.steadyOutput = null, this._init()
		}
		e(3);
		var s = e(8),
			o = e(9),
			r = o.requestAnimationFrame;
		n.prototype = {
			constructor: n,
			_init: function() { this._initSteadyOutput(), this._styleContainerElement(), this._createStair(), this.rotateStair(-10, 0, 0), this._loop() },
			_initSteadyOutput: function() { this.steadyOutput = new s({ interval: 1e3 }), this.steadyOutput.register(function(t) { this.items.push(t) }.bind(this)) },
			_styleContainerElement: function() { this.$el.css("background", this.options.backgroundColor).css("overflow", "hidden"), this.options.stepWidth = this.$el.width() },
			_createStair: function() {
				var t, i, e, n, s = $("<div>").css("transform-style", "preserve-3d");
				for(t = 0; t < this.options.stepCount; t++) i = this._createFrontFace(), e = this._createTopFace(), n = this._createCarrier(), s.append(e), s.append(i), s.append(n), this.steps.push({ $frontFace: i, $topFace: e, $carrier: n });
				this.$stair = s, this.$el.append(s), this._render()
			},
			_createFrontFace: function() { var t = $("<div>").attr("name", "step-front-face").css("position", "absolute").css("width", this.options.stepWidth + "px").css("height", this.options.stepHeight + "px").css("background-color", this.options.frontFaceColor); return t },
			_createTopFace: function() { var t = $("<div>").attr("name", "step-top-face").css("position", "absolute").css("width", this.options.stepWidth + "px").css("height", this.options.stepHeight + "px").css("background-color", this.options.topFaceColor); return t },
			_createCarrier: function() { var t = $("<div>").attr("name", "carrier").css("position", "absolute").css("width", "100%").css("height", this.options.stepHeight + "px").css("overflow", "hidden"); return t },
			_renderContent: function(t) { var i = this.options.onRenderItem(t); return i },
			_getNextItemContent: function() { return this.items.shift() },
			_loop: function() { r(this._loop.bind(this)), this.paused || this._move(this.options.movingDirection) },
			_positionFrontFace: function(t, i) {
				var e = "perspective(" + this.options.perspective + "px)",
					n = "translate3d(" + i[0] + "px," + i[1] + "px ," + i[2] + "px)";
				t.css("transform", e + " " + n)
			},
			_positionTopFace: function(t, i) {
				var e = "perspective(" + this.options.perspective + "px)",
					n = "rotateX(90deg)",
					s = "translate3d(" + i[0] + "px," + i[1] + "px ," + i[2] + "px)";
				t.css("transform", e + " " + s + " " + n)
			},
			_positionCarrier: function(t, i) {
				var e = "perspective(" + this.options.perspective + "px)",
					n = "translate3d(" + i[0] + "px," + i[1] + "px ," + i[2] + "px)";
				t.css("transform", e + " " + n)
			},
			_render: function() {
				var t = this.options.stepHeight,
					i = this.options.stepDeep,
					e = this.options.stepCount,
					n = this.offsetY,
					s = this.offsetZ,
					r = new o.RangeMapping(0, e * t),
					a = new o.RangeMapping(-(e - 1) * i, i),
					h = new o.RangeMapping(-t / 2, e * t - t / 2),
					c = new o.RangeMapping(-(e * i - i / 2), i / 2),
					l = new o.RangeMapping(0, e * t),
					u = new o.RangeMapping(-(e - 1) * i + i * this.options.carrierSurfaceOffset, i + i * this.options.carrierSurfaceOffset);
				this.steps.forEach(function(o, p) {
					var d = o.$frontFace,
						f = o.$topFace,
						m = o.$carrier,
						g = o.lastPosition,
						v = [0, p * t + n, -(e - p - 1) * i + s],
						_ = [0, p * t - t / 2 + n, -(e - p) * i + i / 2 + s],
						y = [0, p * t + n, -(e - p - 1) * i + s + i * this.options.carrierSurfaceOffset];
					if(v = [v[0], r.map(v[1]), a.map(v[2])], _ = [_[0], h.map(_[1]), c.map(_[2])], y = [y[0], l.map(y[1]), u.map(y[2])], this._positionTopFace(f, _), this._positionFrontFace(d, v), this._positionCarrier(m, y), o.lastPosition = y, g && Math.abs(g[2] - y[2]) > i) {
						var b = this._getNextItemContent();
						m.html(""), b && m.append(this._renderContent(b))
					}
				}.bind(this))
			},
			_move: function(t) { t > 0 ? (this.offsetY -= this.options.movingSpeed, this.offsetZ -= this.options.movingSpeed) : (this.offsetY += this.options.movingSpeed, this.offsetZ += this.options.movingSpeed), this._render() },
			rotateStair: function(t, i, e) {
				var n = "rotateX(" + t + "deg)",
					s = "rotateY(" + i + "deg)",
					o = "rotateZ(" + e + "deg)",
					r = "translateY(-50px)",
					a = "scale(" + this.options.scale + ", " + this.options.scale + ")",
					h = "perspective(" + this.options.perspective + "px)";
				this.$stair.css("transform", h + " " + n + " " + s + " " + o + " " + r + " " + a)
			},
			queue: function(t) { this.steadyOutput.push(t) },
			loop: function(t) { this.steadyOutput.push(t, { loop: !0 }) },
			push: function(t) { this.items.splice(0, 0, t) },
			start: function() { this.paused = !1, this.steadyOutput.start() },
			stop: function() { this.paused = !0, this.steadyOutput.stop() }
		}, t.exports = wy.effect.MovingStairs = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { images: [], direction: 1, rotation: !0, speedRange: [3, 5], fallingConstance: 4, count: 10, onClick: function(t) {} };
			this.$el = t, this.options = $.extend(e, i), this.petals = [], this.seedId = 0, this.status = "stopped", this._init()
		}

		function s(t) {
			var i = { stageWidth: 400, stageHeight: 300, direction: 1, speedRange: [3, 5], fallingConstance: 4, imageUrl: "", rotation: !0, onClick: function() {} };
			this.options = $.extend(i, t || {}), this.t = 0, this.vx = 0, this.py = 0, this.deltaRotation = 0, this.$img = null, this.top = 0, this.left = 0, this.rotation = 0, this.resetable = !0, this.$img = $("<img alt='image'>").attr("src", this.options.imageUrl).css("position", "absolute"), this.$img.on("touchstart", this.handleClick.bind(this))
		}
		e(3);
		var o = e(9),
			r = o.requestAnimationFrame;
		n.prototype = {
			constructor: n,
			_init: function() { this.$el.css("position", "relative").css("overflow", "hidden"), this._createPetals() },
			_createPetals: function() {
				for(var t = 0; t < this.options.count; t++) {
					var i = new s({ imageUrl: this.options.images[t % this.options.images.length], stageHeight: this.$el.height(), stageWidth: this.$el.width(), direction: this.options.direction, rotation: this.options.rotation, speedRange: this.options.speedRange, fallingConstance: this.options.fallingConstance, onClick: this.options.onClick });
					i.build(this.$el), this.petals.push(i)
				}
			},
			_loop: function() { this.seedId = r(this._animate.bind(this)) },
			_animate: function() {
				if("stopping" == this.status) {
					var t = 0;
					this.petals.forEach(function(i) { i.inViewport(this.$el.width(), this.$el.height()) && (t += 1) }.bind(this)), 0 == t && this.stop(!0)
				}
				this.petals.forEach(function(t) { t.move(1e3 / 60), t.rotate(), t.reset() }.bind(this)), "paused" != this.status && "stopped" != this.status && (this.seedId = r(this._animate.bind(this)))
			},
			start: function() { "started" != this.status && (this._loop(), this.status = "started") },
			pause: function() { "started" == this.status && (this.status = "paused") },
			stop: function(t) { "stopped" != this.status && (t ? (this.petals.forEach(function(t) { t.init(), t.show(), t.resetable = !0 }), this.status = "stopped") : (this.petals.forEach(function(t) { t.prepareToStop() }.bind(this)), this.status = "stopping")) }
		}, s.prototype = { constructor: s, init: function() { this.t = 0, this.deltaRotation = .01 * o.random(50, 100), this.vx = o.random(this.options.speedRange[0], this.options.speedRange[1]) * this.options.direction, this.py = o.random(-100, this.options.stageHeight / 2), 1 == this.options.direction && (this.left = -1 * o.random(100, this.options.stageWidth + 100), this.$img.css("left", this.left + "px")), -1 == this.options.direction && (this.left = o.random(100, this.options.stageWidth + 100) + this.options.stageWidth, this.$img.css("left", this.left + "px")) }, handleClick: function() { this.options.onClick && this.options.onClick.bind(this)(this.$img) }, hide: function() { this.$img.css("visibility", "hidden") }, show: function() { this.$img.css("visibility", "visible") }, move: function(t) { "hidden" != this.$img.css("visibility") && (this.t += t, this.left += this.vx, this.top = 5e-6 * this.options.fallingConstance * this.t * this.t + this.py, this.$img.css("left", this.left + "px"), this.$img.css("top", this.top + "px")) }, rotate: function() { "hidden" != this.$img.css("visibility") && this.options.rotation && this.$img.css("transform", "translateZ(0) rotate(" + (this.rotation += this.deltaRotation) + "deg)").css("-webkit-transform", "translateZ(0) rotate(" + (this.rotation += this.deltaRotation) + "deg)") }, reset: function() { 1 == this.options.direction && this.left < this.options.stageWidth + 100 && this.top < this.options.stageHeight || -1 == this.options.direction && this.left > -100 && this.top < this.options.stageHeight || this.resetable && this.init() }, build: function(t) { this.init(), t.append(this.$img) }, inViewport: function(t, i) { return "hidden" == this.$img.css("visibility") ? !1 : this.top > -1 * this.$img.outerHeight(!0) && this.top < this.options.stageHeight && this.left > -1 * this.$img.outerHeight(!0) && this.left < this.options.stageWidth }, prepareToStop: function() { this.resetable = !1 } }, t.exports = wy.effect.FallingPetals = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { size: [3, 4], gameTime: -1, imageUrl: "", backgroundColor: "lightgrey", borderColor: "1px solid white", highlightBorderColor: "1px solid grey", onTick: function(t) { console.log("tick", t) }, onTimeEnd: function() { console.log("timeend") }, onGameWin: function() { console.log("WIN~~") } };
			this.options = $.extend(e, i), this.$el = t, this.loader = null, this.centerIt = null, this.timer = null, this.status = "", this.blocks = [], this.selectedBlocks = [], this.blockWidth = 0, this.blockHeight = 0, this._init()
		}
		e(3);
		var s = e(10),
			o = e(27),
			r = e(9).random,
			a = e(30);
		n.prototype = {
			constructor: n,
			_init: function() { this._reset(), this._styleContainerElement(), this._loadImage() },
			_loadImage: function() {
				var t = new s;
				t.add("backgroundImage", this.options.imageUrl), t.on("complete", function(t) { this.status = "loaded", this._centerImage(t.resources.backgroundImage.data) }.bind(this)), t.load(), this.loader = t
			},
			_styleContainerElement: function() { this.$el.css("position", "relative").css("background", this.options.backgroundColor).css("overflow", "hidden") },
			_centerImage: function(t) {
				this.centerIt = new o(this.$el.width(), this.$el.height(), t.naturalWidth, t.naturalHeight, { type: "cover" });
				var i = $("<img alt='image'>").attr("src", this.options.imageUrl).width(this.centerIt.newWidth()).height(this.centerIt.newHeight()).css("top", this.centerIt.offset().top).css("left", this.centerIt.offset().left);
				i.on("click", function() { this.start() }.bind(this)), this.$el.html(""), this.$el.append(i)
			},
			_createBlocks: function() {
				var t, i, e;
				for(this.$el.html(""), this.blocks = [], t = 0; t < this.options.size[0]; t++)
					for(i = 0; i < this.options.size[1]; i++) e = this._createBlock(t, i), this.$el.append(e.$block), this.blocks.push(e)
			},
			_createBlock: function(t, i) {
				var e, n = this._calculateBlockOffset(t, i),
					s = $("<span>").width(this.blockWidth).height(this.blockHeight).css("position", "absolute").css("box-sizing", "border-box").css("top", n.top).css("left", n.left).css("z-index", 1).css("transition", "top 0.5s ease, left 0.5s ease").css("border", this.options.borderColor);
				return this._clipBlockBackground(s, t, i), e = { $block: s, order: this.blocks.length, position: { r: t, c: i } }, this._attachEventHandlers(e), e
			},
			_attachEventHandlers: function(t) { t.$block.on("transitionend webkitTransitionEnd", function() { this._handleTransitionend(t) }.bind(this)), t.$block.on("click", function() { this._handleClick(t) }.bind(this)) },
			_calculateBlockOffset: function(t, i) { return { top: t * this.blockHeight, left: i * this.blockWidth } },
			_calculateImageClipOffset: function(t, i) { return { top: t * this.blockHeight - this.centerIt.offset().top, left: i * this.blockWidth - this.centerIt.offset().left } },
			_clipBlockBackground: function(t, i, e) {
				var n = this._calculateImageClipOffset(i, e);
				t.css("background-image", "url(" + this.options.imageUrl + ")").css("background-position-x", -1 * n.left + "px").css("background-position-y", -1 * n.top + "px").css("background-repeat", "no-repeat").css("background-size", this.centerIt.newWidth() + "px " + this.centerIt.newHeight() + "px")
			},
			_getBlock: function(t, i) { var e, n, s; for(n = 0; n < this.blocks.length; n++) e = this.blocks[n], e.position.r == t && e.position.c == i && (s = e); return s },
			_placeBlock: function(t, i, e) {
				if(t.position.r != i || t.position.c != e) {
					var n = this._calculateBlockOffset(i, e);
					t.position = { r: i, c: e }, t.$block.css("z-index", 9).css("top", n.top).css("left", n.left)
				}
			},
			_switch: function(t, i, e, n) {
				var s = this._getBlock(t, i),
					o = this._getBlock(e, n);
				this._placeBlock(s, e, n), this._placeBlock(o, t, i)
			},
			_winCheck: function() {
				var t, i, e, n = !0,
					s = 0;
				for(t = 0; t < this.options.size[0]; t++)
					for(i = 0; i < this.options.size[1]; i++) e = this._getBlock(t, i), e.order != s++ && (n = !1);
				return n && (this._clearSelection(), this._stopTimer(), this.status = "end", this.options.onGameWin && this.options.onGameWin()), n
			},
			_messBlocks: function() {
				var t, i, e, n = this.options.size[0],
					s = this.options.size[1],
					o = {};
				for(t = 0; n > t; t++)
					for(i = 0; s > i; i++) {
						for(e = r(0, this.blocks.length); o[e];) e = (e + 1) % this.blocks.length;
						o[e] = !0, this._placeBlock(this.blocks[e], t, i)
					}
			},
			_highlight: function() { this.selectedBlocks.forEach(function(t) { t.$block.css("border", this.options.highlightBorderColor) }.bind(this)) },
			_clearHighlight: function() { this.selectedBlocks.forEach(function(t) { t.$block.css("border", this.options.borderColor) }.bind(this)) },
			_clearSelection: function() { this._clearHighlight(), this.selectedBlocks = [] },
			_handleTransitionend: function(t) { t.$block.css("z-index", 1), "started" == this.status && this._winCheck() },
			_reset: function() { this.timer && this.timer.reset(), this.$el.html(""), this.loader = null, this.centerIt = null, this.timer = null, this.status = "", this.blocks = [], this.selectedBlocks = [], this.blockWidth = this.$el.width() / this.options.size[1], this.blockHeight = this.$el.height() / this.options.size[0] },
			_handleClick: function(t) { "started" == this.status && (0 == this.selectedBlocks.length ? (this.selectedBlocks.push(t), this._highlight()) : 1 == this.selectedBlocks.length && (this.selectedBlocks.push(t), this._highlight(), setTimeout(function() { this._switch(this.selectedBlocks[0].position.r, this.selectedBlocks[0].position.c, this.selectedBlocks[1].position.r, this.selectedBlocks[1].position.c), this._clearSelection() }.bind(this), 100))) },
			_startTimer: function() {-1 != this.options.gameTime && (this.timer && this.timer.reset(), this.timer = new a({ time: this.options.gameTime, onTick: this.options.onTick, onComplete: function() { this.status = "end", this.options.onTimeEnd && this.options.onTimeEnd() }.bind(this) }), this.timer.start()) },
			_stopTimer: function() { this.timer && this.timer.pause() },
			start: function() { this._createBlocks(), this._messBlocks(), this._startTimer(), this.status = "started" },
			setImage: function(t) { this.options.imageUrl = t, this._reset(), this._loadImage() },
			setSize: function(t, i) { this.options.size = [t, i], this._reset(), this._loadImage() },
			destroy: function() { this._reset() }
		}, t.exports = wy.effect.Jigsaw = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { memoTypes: ["self", "other"], defaultMemoType: "other", memoMaximum: { self: 1, other: 10 }, memoRenderer: { self: a, other: r }, layoutSize: [5, 3], layoutInBound: !0 };
			this.$el = t, this.options = $.extend(e, i), this.memos = {}, this.topIndex = 0, this.randomLayout = null, this._init()
		}

		function s(t, i) {
			var e = { renderer: null, onClick: null };
			this.options = $.extend(e, i), this.data = t, this.$el = null, this._init()
		}

		function o(t) {
			var i = $("<div>"),
				e = $("<h2>").css("margin", "0").css("padding-bottom", "10px").css("font-family", '"Reenie Beanie", arial, sans-serif, å¾®è½¯é›…é»‘').text(t.title),
				n = $("<p>").css("margin", "0").css("font-family", '"Reenie Beanie", arial, sans-serif, å¾®è½¯é›…é»‘').text(t.content);
			return i.css("color", "#000").css("padding", "20px").css("box-shadow", "3px 3px 7px rgba(33,33,33,0.7)").css("-webkit-box-shadow", "3px 3px 7px rgba(33,33,33,0.7)").width(100).height(100), i.append(e).append(n), i
		}

		function r(t) { var i = o(t); return i.css("background-color", "rgb(255, 255, 204)"), i }

		function a(t) { var i = o(t); return i.css("background-color", "rgb(204, 255, 206)"), i } e(3);
		var h = (e(9), e(4), e(29));
		n.prototype = {
			constructor: n,
			_init: function() { this._styleContainerElement(), this.options.memoTypes.forEach(function(t) { this.memos[t] = [] }.bind(this)) },
			_initRandomLayout: function(t, i) { this.randomLayout = new h(this.$el, { size: this.options.layoutSize, inBound: this.options.layoutInBound, itemWidth: t, itemHeight: i, randomTopOffset: [t / -5, t / 5], randomLeftOffset: [i / -3, i / 3] }) },
			_styleContainerElement: function() { this.$el.css("position", "relative").css("overflow", "hidden") },
			_findPosition: function(t) { return this.randomLayout || this._initRandomLayout(t.width(), t.height()), this.randomLayout.occupy() },
			_getAllMemos: function() { var t, i = []; for(t in this.memos) this.memos[t].forEach(function(t) { i.push(t) }); return i },
			_getMemoRenderer: function(t) { var i = null; return this.options.memoRenderer && (i = "function" == typeof this.options.memoRenderer ? this.options.memoRenderer : this.options.memoRenderer[t]), i },
			_getMemoMaximum: function(t) { return "object" == typeof this.options.memoMaximum ? this.options.memoMaximum[t] : this.options.memoMaximum },
			_makeTop: function(t) {
				var i = t.zIndex(),
					e = this._getAllMemos();
				e.forEach(function(t) { t.zIndex() > i && t.zIndex(t.zIndex() - 1) }), t.zIndex(this.topIndex), t.$el.snabbt({ fromOpacity: 0, opacity: 1, fromScale: [.9, .9], scale: [1, 1], easing: "spring", springConstant: .3, springDeceleration: .7 })
			},
			addMemo: function(t, i, e) {
				i = i || this.options.defaultMemoType;
				var n, o = this._getMemoRenderer(i),
					r = this._getMemoMaximum(i),
					a = new s(t, { renderer: o, onClick: function() { this.topMemo(a) }.bind(this) });
				if(a.appendTo(this.$el, e), n = this._findPosition(a), a.setPosition(n.y - a.$el.outerHeight(!0) / 2, n.x - a.$el.outerWidth(!0) / 2), a.zIndex(this.topIndex += 1), this.memos[i].length >= r) {
					var h = this.memos[i].shift();
					h.remove(!0)
				}
				this.memos[i].push(a)
			},
			topMemo: function(t) { "object" == typeof t && this._makeTop(t), "string" == typeof t && this.memos[t].forEach(function(t) { this._makeTop(t) }.bind(this)) },
			removeAll: function(t) { this._getAllMemos().forEach(function(i) { i.remove(t) }), this.options.memoTypes.forEach(function(t) { this.memos[t] = [] }.bind(this)) }
		}, s.prototype = { constructor: s, _init: function() { this.$el = this._render(), this.$el.css("position", "absolute").css("overflow", "hidden").on("click", this.options.onClick) }, _render: function() { var t = this.options.renderer || r; return t(this.data) }, width: function() { return this.$el.width() }, height: function() { return this.$el.height() }, setPosition: function(t, i) { this.$el.css("top", t + "px").css("left", i + "px") }, zIndex: function(t) { return void 0 == t ? 1 * this.$el.css("z-index") : void this.$el.css("z-index", t) }, appendTo: function(t, i) { t.append(this.$el), i && this.$el.snabbt({ fromScale: [5, 5], scale: [1, 1], fromOpacity: 0, opacity: 1, easing: "easeIn" }) }, remove: function(t) { t ? this.$el.snabbt({ fromOpacity: 1, opacity: 0, easing: "easeOut", complete: function() { this.$el.remove() }.bind(this) }) : this.$el.remove() } }, t.exports = wy.effect.MemoWall = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { animation: "scroll", scrollDirection: "right", scrollBehavior: "move", scrollSpeed: 5, scrollSpeedConstance: 50, scrollIntervalStopPosition: "center", scrollIntervalStopDuration: 2e3, textJoiner: ", ", textDuplicate: !1, textDuplicateGapChar: "&nbsp;", textDuplicateGap: 5, textItemMax: 4, inAnimation: function() {}, stayAnimation: function() {}, outAnimation: function() {}, onStarted: function() {}, onPaused: function() {}, onStopped: function() {}, onResumed: function() {} };
			this.$el = t, this.options = $.extend(e, i), this.stateMachine = null, this.nextPassThroughCallback = null, this.moving = !1, this.$mover = null, this.queue = [], this._init()
		}
		e(3);
		var s = e(31);
		e(4);
		n.prototype = {
			constructor: n,
			_init: function() { this._initStateMachine(), this._styleContainerElement() },
			_styleContainerElement: function() {
				var t = "1em";
				this.options.height ? t = this.options.height : 0 != this.$el.height() && (t = this.$el.height() + "px"), this.$el.css("height", t).css("position", "relative").css("overflow", "hidden")
			},
			_initStateMachine: function() {
				var t = this;
				this.stateMachine = new s({ holder: this, defaultState: "stopped", status: [{ value: "stopped", actions: { start: function() { t._start(arguments), this.setState("started") }, pause: function() {}, resume: function() {}, stop: function() {}, reset: function() { t._reset(arguments), this.setState("stopped") }, set: function() {}, appendText: function() {} } }, { value: "started", actions: { start: function() {}, pause: function() { t._pause(arguments), this.setState("paused") }, resume: function() {}, stop: function(i) { t._stop(i), this.setState("stopped") }, reset: function() { t._reset(arguments), this.setState("stopped") }, set: function(i, e) { t._set(i, e) }, appendText: function(i, e) { t._appendText(i, e) } } }, { value: "paused", actions: { start: function() {}, pause: function() {}, resume: function() { t._resume(arguments), this.setState("started") }, stop: function() { t._stop(arguments), this.setState("stopped") }, reset: function() { t._reset(arguments), this.setState("stopped") }, set: function(t, i) {}, appendText: function() {} } }] })
			},
			_onPassThrough: function() { this.nextPassThroughCallback && this.nextPassThroughCallback() },
			_start: function() { this._reset(), this.options.onStarted && this.options.onStarted() },
			_pause: function() { this.$mover.snabbt("stop") },
			_resume: function() {},
			_stop: function(t) {
				var i = { delayStop: !1, onStopCallback: null };
				t = $.extend(i, t), t.delayStop ? this.nextPassThroughCallback = function() { this.nextPassThroughCallback = null, this.$el.html(""), this.moving = !1, t.onStopCallback && t.onStopCallback(), this.options.onStopped && this.options.onStopped() }.bind(this) : (this.$el.html(""), this.moving = !1, this.options.onStopped && this.options.onStopped())
			},
			_reset: function() { this.$el.html(""), this.queue = [], this.moving = !1, this.$mover = null, this.nextPassThroughCallback = null },
			_scroll: function() {},
			_scrollMove: function(t, i) {
				function e() {
					var s = n.options.scrollSpeed,
						r = n.options.scrollSpeedConstance,
						a = 0,
						h = 0,
						c = 0,
						l = 0,
						u = n.options.scrollDirection,
						p = 0;
					switch(u) {
						case "bottom":
							c = -1 * t.height(), l = n.$el.height(), p = n.$el.height() / s * r;
							break;
						case "left":
							a = n.$el.width(), h = -1 * t.width(), p = n.$el.width() / s * r;
							break;
						case "top":
							c = n.$el.height(), l = -1 * t.height(), p = n.$el.height() / s * r;
							break;
						case "right":
							a = -1 * t.width(), h = n.$el.width(), p = n.$el.width() / s * r
					}
					o++, n.moving = !0, t.snabbt({ fromPosition: [a, c, 0], position: [h, l, 0], duration: p, complete: function() { n._onPassThrough(), -1 == i.loop ? e() : o < i.loop ? e() : n.moving = !1 } })
				}
				var n = this,
					s = { loop: -1, nextRound: !1 },
					o = 0;
				i = $.extend(s, i), i.nextRound && this.moving ? this.nextPassThroughCallback = function() { n.nextPassThroughCallback = null, n.$el.html("").append(t), e() } : (this.$el.html("").append(t), e())
			},
			_scrollBounce: function(t, i) {
				function e(o) {
					var r = n.options.scrollSpeed,
						a = n.options.scrollSpeedConstance,
						h = 0,
						c = 0,
						l = 0,
						u = 0,
						p = 0,
						d = n.options.scrollDirection;
					switch(d) {
						case "top":
							o ? (l = 0, u = n.$el.height() - t.height()) : (l = n.$el.height() - t.height(), u = 0), p = n.$el.height() / r * a;
							break;
						case "left":
							o ? (h = 0, c = n.$el.width() - t.width()) : (h = n.$el.width() - t.width(), c = 0), p = n.$el.width() / r * a;
							break;
						case "bottom":
							o ? (l = 0, u = n.$el.height() - t.height()) : (l = n.$el.height() - t.height(), u = 0), p = n.$el.height() / r * a;
							break;
						case "right":
							o ? (h = n.$el.width() - t.width(), c = 0) : (h = 0, c = n.$el.width() - t.width()), p = n.$el.width() / r * a
					}
					s++, n.moving = !0, t.snabbt({ fromPosition: [h, l, 0], position: [c, u, 0], duration: p, complete: function() {-1 == i.loop ? e(!o) : s < i.loop ? e(!o) : (n.$el.html(""), n.moving = !1) } })
				}
				var n = this,
					s = 0,
					o = { loop: -1 };
				i = $.extend(o, i), this.$el.html("").append(t), e(!1)
			},
			_scrollInterval: function(t, i) {
				function e() {
					var o = n.options.scrollSpeed,
						r = n.options.scrollSpeedConstance,
						a = 0,
						h = 0,
						c = 0,
						l = 0,
						u = 0,
						p = 0,
						d = n.options.scrollIntervalStopPosition,
						f = n.options.scrollDirection,
						m = 0,
						g = 0;
					switch(f) {
						case "top":
							h = n.$el.height(), l = "start" == d ? n.$el.height() - t.height() : "center" == d ? (n.$el.height() - t.height()) / 2 : 0, p = -1 * t.height(), m = n.$el.height() / o * r, g = (l - p) / ((h - l) / m);
							break;
						case "left":
							a = n.$el.width(), c = "start" == d ? n.$el.width() - t.width() : "center" == d ? (n.$el.width() - t.width()) / 2 : 0, u = -1 * t.width(), m = n.$el.width() / o * r, g = (c - u) / ((a - c) / m);
							break;
						case "bottom":
							h = -1 * t.height(), l = "start" == d ? 0 : "center" == d ? (n.$el.height() - t.height()) / 2 : n.$el.height() - t.height(), p = n.$el.height(), m = n.$el.height() / o * r, g = (p - l) / ((l - h) / m);
							break;
						case "right":
							a = -1 * t.width(), c = "start" == d ? 0 : "center" == d ? (n.$el.width() - t.width()) / 2 : n.$el.width() - t.width(), u = n.$el.width(), m = n.$el.width() / o * r, g = (u - c) / ((c - a) / m)
					}
					n.moving = !0, s++, t.snabbt({ fromPosition: [a, h, 0], position: [c, l, 0], duration: m, complete: function() { setTimeout(function() { t.snabbt({ fromPosition: [c, l, 0], position: [u, p, 0], duration: g, complete: function() { n._onPassThrough(), -1 == i.loop ? e() : s < i.loop ? e() : n.moving = !1 } }) }, n.options.scrollIntervalStopDuration) } })
				}
				var n = this,
					s = 0,
					o = { loop: -1, nextRound: !1 };
				i = $.extend(o, i), i.nextRound && this.moving ? this.nextPassThroughCallback = function() { n.nextPassThroughCallback = null, n.$el.html("").append(t), e() } : (this.$el.html("").append(t), e())
			},
			_set: function(t, i) {
				switch(this.$mover = $("<span>").css("position", "absolute").css("display", "inline-block"), this.$mover.append(t), this.options.scrollBehavior) {
					case "move":
						this._scrollMove(this.$mover, i);
						break;
					case "bounce":
						this._scrollBounce(this.$mover, i);
						break;
					case "interval":
						this._scrollInterval(this.$mover, i)
				}
			},
			_appendText: function(t, i) {
				var e = "",
					n = "";
				if(this.$mover = $("<span>").css("position", "absolute").css("display", "inline-block"), this.queue.length >= this.options.textItemMax && this.queue.shift(), this.queue.push(t), this.queue.forEach(function(t, i) { e += t, i != this.queue.length - 1 && (e += this.options.textJoiner) }.bind(this)), this.options.textDuplicate) {
					for(var s = 0; s < this.options.textDuplicateGap; s++) n += this.options.textDuplicateGapChar;
					e += n + e
				}
				switch(this.$mover.html(e), this.options.scrollBehavior) {
					case "move":
						this._scrollMove(this.$mover, i);
						break;
					case "bounce":
						this._scrollBounce(this.$mover, i);
						break;
					case "interval":
						this._scrollInterval(this.$mover, i)
				}
			},
			start: function() { this.stateMachine.takeAction("start") },
			pause: function() { this.stateMachine.takeAction("pause") },
			resume: function() { this.stateMachine.takeAction("resume") },
			stop: function(t) { this.stateMachine.takeAction("stop", t) },
			reset: function() { this.stateMachine.takeAction("reset") },
			set: function(t, i) { this.stateMachine.takeAction("set", t, i) },
			appendText: function(t, i) { this.stateMachine.takeAction("appendText", t, i) }
		}, t.exports = wy.effect.Marquee = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { size: [3, 3], coverImage: "assets/images/cover.jpg", warningImage: "assets/images/warning.jpg", rules: [{ win: !0, cover: "assets/images/bai_1.png", back: "assets/images/yes.png" }, { win: !0, cover: "assets/images/bai_2.jpg", back: "assets/images/yes.png" }, { win: !0, cover: "assets/images/bai_5.jpg", back: "assets/images/yes.png" }, { win: !1, cover: "assets/images/wang_1.jpg", back: "assets/images/no.png" }, { win: !1, cover: "assets/images/wang_3.jpg", back: "assets/images/no.png" }, { win: !1, cover: "assets/images/wang_4.jpg", back: "assets/images/no.png" }], result: { win: 0, fail: 0 }, gameTime: 1e4, onTick: function(t) {}, onTapped: function(t) {}, onGameEnd: function(t) {} };
			this.$el = t, this.options = $.extend(e, i), this.blockSize = 0, this.blocks = [], this.intervalTimer = null, this.stateMachine = null, this.timer = null, this.roundCount = 0, this.result = $.extend(!0, {}, this.options.result), this._init()
		}

		function s(t, i) {
			var e = { top: 0, left: 0, width: 50, height: 50, background: "red", flipStayDuration: 1e3, onTapped: function() {}, initiatedRenderer: function(t) { t.css("background", "lightseagreen") }, flippedRenderer: function(t) { t.css("background", "yellow") }, tappedRenderer: function(t) { t.css("background", "lightgreen") }, warningRenderer: function(t) { t.css("background", "red") } };
			this.options = $.extend(e, i), this.stateMachine = null, this.$el = null, this._init()
		}
		e(3);
		var o = e(31),
			r = e(30),
			a = e(10),
			h = e(9).random;
		n.prototype = {
			constructor: n,
			_init: function() {
				var t = this;
				this._styleContainerElement(), this._createBlocks(), this.stateMachine = new o({ defaultState: "loading", status: [{ value: "loading", actions: { start: function() { console.log("game not loaded yet") }, load: function(i) { t._load(function() { this.setState("loaded"), i && i() }.bind(this)) }, end: function() {} } }, { value: "loaded", actions: { start: function() { t._start(), this.setState("started") }, load: function() {}, end: function() {} } }, { value: "started", actions: { start: function() {}, load: function() {}, end: function() { t._end(), this.setState("ended") } } }, { value: "ended", actions: { start: function() { this.setState("started"), t._start() }, load: function() {}, end: function() {} } }] })
			},
			_load: function(t) {
				var i = new a,
					e = 0;
				i.add("image_id_" + e++, this.options.coverImage, { loadType: a.LOAD_TYPE.IMAGE }), i.add("image_id_" + e++, this.options.warningImage, { loadType: a.LOAD_TYPE.IMAGE }), this.options.rules.forEach(function(t) { i.add("image_id_" + e++, t.cover, { loadType: a.LOAD_TYPE.IMAGE }), i.add("image_id_" + e++, t.back, { loadType: a.LOAD_TYPE.IMAGE }) }), i.on("complete", function(i) { t && t() }), i.load()
			},
			_styleContainerElement: function() {
				var t = this.$el.width(),
					i = this.options.size[0],
					e = this.options.size[1];
				this.blockSize = t / e, this.$el.height(this.blockSize * i), this.$el.css("position", "relative")
			},
			_createBlocks: function() {
				var t, i, e, n = this.options.coverImage,
					o = this.options.warningImage,
					r = this.options.size[0],
					a = this.options.size[1];
				for(t = 0; r > t; t++)
					for(i = 0; a > i; i++) e = new s(null, { width: this.blockSize, height: this.blockSize, top: t * this.blockSize, left: i * this.blockSize, initiatedRenderer: function(t) { t.css("background-image", "url(" + n + ")").css("background-repeat", "no-repeat").css("background-position", "center center").css("background-size", "contain") }, warningRenderer: function(t) { t.css("background-image", "url(" + o + ")").css("background-repeat", "no-repeat").css("background-position", "center center").css("background-size", "contain") } }), this.$el.append(e.$el), this.blocks.push(e)
			},
			_getNextFlipInterval: function() { var t = 0; return t = this.roundCount < 3 ? 1e3 : this.roundCount < 5 ? 800 : this.roundCount < 8 ? 400 : 200 },
			_getNextFlipStayDuration: function() { var t = 0; return t = this.roundCount < 6 ? 1e3 : this.roundCount < 8 ? 900 : this.roundCount < 11 ? 800 : 700 },
			_getNextFlipData: function() { for(var t, i = [], e = 0; e < h(1, this.blocks.length); e++) t = h(0, this.options.rules.length), i.push(this.options.rules[t]); return i },
			_flipBlocks: function(t) {
				for(var i = null, e = this, n = 0, s = this.blocks.map(function(t) { return t }); s.length > this.blocks.length - t.length;) i = s.splice(h(0, s.length), 1)[0],
					function(n) { i.options.flippedRenderer = function(i) { i.css("background-image", "url(" + t[n].cover + ")").css("background-repeat", "no-repeat").css("background-position", "center center").css("background-size", "contain") }, i.options.tappedRenderer = function(i) { i.css("background-image", "url(" + t[n].back + ")").css("background-repeat", "no-repeat").css("background-position", "center center").css("background-size", "contain") }, i.options.onTapped = function() { e.options.onTapped && e.options.onTapped.bind(e)(t[n]) } }(n), i.flip(), n++
			},
			_unflipBlocks: function() { this.blocks.forEach(function(t) { t.reset() }) },
			_loop: function() { if("ended" != this.stateMachine.getState()) { var t = this;++this.roundCount, this.intervalTimer = new r({ time: this._getNextFlipInterval(), tickUnit: 1, onComplete: function() { this._flipBlocks(this._getNextFlipData()), setTimeout(function() { t._unflipBlocks(), t.intervalTimer.reset(), t.intervalTimer = null, t._loop() }, this._getNextFlipStayDuration()) }.bind(this) }), this.intervalTimer.start() } },
			_reset: function() { this.timer = null, this.roundCount = 0, this.result = this.options.result },
			_start: function() { this.blocks.forEach(function(t) { t.enable() }), this._loop(), this.timer = new r({ time: this.options.gameTime, tickUnit: 1e3, onTick: this.options.onTick, onComplete: this.end.bind(this) }), this.timer.start() },
			_end: function() { this.blocks.forEach(function(t) { t.reset(), t.disable() }), this.options.onGameEnd && this.options.onGameEnd(this.result), this._reset() },
			start: function() { this.stateMachine.takeAction("start") },
			end: function() { this.stateMachine.takeAction("end") },
			load: function(t) { this.stateMachine.takeAction("load", t) }
		}, s.prototype = {
			_init: function() {
				this.$el = $("<span>").css("display", "inline-block").css("position", "absolute").css("box-sizing", "border-box").css("top", this.options.top + "px").css("left", this.options.left + "px").width(this.options.width).height(this.options.height),
					this._initStateMachine(), this.options.initiatedRenderer(this.$el), this.$el.on("touchstart", function() { this.tap() }.bind(this))
			},
			_initStateMachine: function() {
				var t = this;
				this.stateMachine = new o({ defaultState: "disabled", status: [{ value: "disabled", actions: { tap: function() {}, flip: function() {}, reset: function() {}, enable: function() { this.setState("enabled") }, disable: function() {} } }, { value: "enabled", actions: { tap: function() { t.options.warningRenderer(t.$el), this.setState("tapped"), setTimeout(function() { t.options.initiatedRenderer(t.$el), this.setState("enabled") }.bind(this), t.options.flipStayDuration) }, flip: function() { t._flip(), this.setState("flipped") }, reset: function() { t._reset() }, enable: function() {}, disable: function() { this.setState("disabled") } } }, { value: "flipped", actions: { tap: function() { t._tap(), this.setState("tapped"), setTimeout(function() { t._reset(), this.setState("enabled") }.bind(this), t.options.flipStayDuration) }, flip: function() {}, reset: function() { t._reset(), this.setState("enabled") }, enable: function() {}, disable: function() {} } }, { value: "tapped", actions: { tap: function() {}, flip: function() { t._flip(), this.setState("flipped") }, reset: function() { t._reset(), this.setState("enabled") }, enable: function() {}, disable: function() {} } }] })
			},
			_reset: function() { this.options.initiatedRenderer(this.$el) },
			_tap: function() { this.options.tappedRenderer(this.$el), this.options.onTapped && this.options.onTapped() },
			_flip: function() { this.options.flippedRenderer(this.$el) },
			reset: function() { this.stateMachine.takeAction("reset") },
			tap: function() { this.stateMachine.takeAction("tap") },
			flip: function(t) { this.stateMachine.takeAction("flip", t) },
			enable: function() { this.stateMachine.takeAction("enable") },
			disable: function() { this.stateMachine.takeAction("disable") }
		}, t.exports = wy.effect.Jiugongge = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { onClickItem: function(t, i) { console.log(t, i) }, itemRenderer: function(t) { return $("<div>").text(t) }, enterAnimation: { fillMode: "both", animationName: "bubble-up-fadeIn" }, exitAnimation: { animationName: "bubble-up-fadeOut" } };
			this.options = $.extend(e, i), this.$el = t, this.$wrapper = null, this.stateMachine = null, this.$scroller = null, this.$placeholder = null, this.$items = [], this.transitionY = 0, this._init()
		}
		e(3), e(2);
		var s = e(31),
			o = e(36);
		o.defineAnimation("bubble-up-fadeIn", { 0: { opacity: 0, transform: "scale(0,0)" }, 100: { opacity: 1, transform: "scale(1,1)" } }), o.defineAnimation("bubble-up-fadeOut", { 0: { opacity: 1 }, 100: { opacity: 0 } }), n.prototype = {
			constructor: n,
			_init: function() { this.$wrapper = $("<div>").css("position", "relative").css("overflow", "hidden").width(this.$el.width()).height(this.$el.height()), this.$scroller = $("<div>").css("-webkit-transform", "translateY(0)").css("-webkit-transition", "-webkit-transform 0.5s ease").on("webkitTransitionEnd", function() { this.$items.forEach(function(t) { t.offset().top <= this.$wrapper.offset().top + 1 && t && !t._needRemove && (t._needRemove = !0, t.on("webkitAnimationEnd", function() { this.$placeholder.height(this.$placeholder.height() + t.outerHeight(!0)), t.off("webkitAnimationEnd").remove() }.bind(this)), o.applyAnimation(t, this.options.exitAnimation)) }.bind(this)) }.bind(this)), this.$placeholder = $("<div>").height(this.$el.height()), this.$scroller.append(this.$placeholder), this.$wrapper.append(this.$scroller), this.$el.html("").append(this.$wrapper), this._initStateMachine() },
			_initStateMachine: function() {
				var t = this;
				this.stateMachine = new s({ defaultState: "stopped", status: [{ value: "stopped", actions: { start: function() { t._start(), this.setState("started") }, stop: function() {}, reset: function() { t._reset() }, add: function() {} } }, { value: "started", actions: { start: function() {}, stop: function() { t._stop(), this.setState("stopped") }, reset: function() { t._reset(), this.setState("stopped") }, add: function(i) { t._add(i) } } }] })
			},
			_scrollBottom: function(t) { this.transitionY += t, this.$scroller.css("-webkit-transform", "translateY(-" + this.transitionY + "px)") },
			_add: function(t) {
				var i = $("<div>").attr("name", "item-wrapper").css("position", "relative").css("float", "left").css("width", "100%").css("margin", "0").css("padding", "0").css("-webkit-transform-origin", "50% 50%"),
					e = this.options.itemRenderer(t);
				this.$scroller.append(i.append(e)), this.$items.push(i), o.applyAnimation(i, this.options.enterAnimation), e.on("touchstart", function() { this.options.onClickItem && this.options.onClickItem(e, t) }.bind(this)), this._scrollBottom(i.outerHeight(!0))
			},
			_start: function() { console.log("start") },
			_stop: function() { console.log("stop") },
			_reset: function() { console.log("reset"), this.$placeholder.height(this.$el.height()), this.$scroller.html("").append(this.$placeholder), this.$items = [], this.transitionY = 0, this._scrollBottom(0) },
			add: function(t) { this.stateMachine.takeAction("add", t) },
			start: function() { this.stateMachine.takeAction("start") },
			stop: function() { this.stateMachine.takeAction("stop") },
			reset: function() { this.stateMachine.takeAction("reset") }
		}, t.exports = wy.effect.BubbleUp = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { items: [{ name: "", imageUrl: "assets/images/item_1.png", _weight: 1 }, { name: "", imageUrl: "assets/images/item_2.png", _weight: 1 }, { name: "", imageUrl: "assets/images/item_3.png", _weight: 5 }, { name: "", imageUrl: "assets/images/item_4.png", _weight: 1 }], nextItemInterval: [200, 1500], getInAnimation: function() { return {} }, getMovingAnimation: function() { return {} }, getOutAnimation: function() { return {} }, itemRenderer: function(t) { return $("<img alt='image'>").attr("src", t.imageUrl) }, onClickItem: function(t, i) {} };
			this.options = $.extend(e, i), this.$el = t, this.$wrapper = null, this.timer = null, this.nextInterval = 0, this.lastTick = 0, this.items = [], this._init()
		}
		e(3);
		var s = (e(31), e(2), e(30), e(10), e(9)),
			o = s.random,
			r = s.requestAnimationFrame,
			a = s.cancelAnimationFrame;
		n.prototype = {
			constructor: n,
			_init: function() {
				this.$wrapper = $("<div>").attr("name", "drop-and-click-wrapper").css("position", "relative").css("overflow", "hidden").width(this.$el.width()).height(this.$el.height()), this.$el.append(this.$wrapper), this.options.items.forEach(function(t) {
					var i;
					if("number" == typeof t._weight)
						for(i = 0; i < t._weight; i++) this.items.push(t);
					else this.items.push(t)
				}.bind(this))
			},
			_push: function(t) {
				var i = this.options.itemRenderer(t),
					e = this.options.getInAnimation(t),
					n = this.options.getMovingAnimation(t, { inAnimation: e }),
					s = this.options.getOutAnimation(t, { inAnimation: e, movingAnimation: n });
				i.on("touchstart", function() { this.options.onClickItem && this.options.onClickItem(t, i) }.bind(this)), this.$wrapper.append(i), i.snabbt(e).snabbt(n).snabbt(s).snabbt({ complete: function() { i.remove() } })
			},
			_nextItem: function() { var t = o(0, this.items.length); return this.items[t] },
			_loop: function() {
				var t = 1 * new Date;
				if(t - this.lastTick > this.nextInterval) {
					var i = this._nextItem();
					this._push(i), this.lastTick = t, this.nextInterval = o(this.options.nextItemInterval[0], this.options.nextItemInterval[1])
				}
				this.seedId = r(this._loop.bind(this))
			},
			start: function() { this._loop() },
			stop: function() { a(this.seedId) }
		}, t.exports = wy.effect.DropAndClick = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { onTimerTick: function(t) { console.log("timer", t) }, onTimerComplete: function() { console.log("timer complete") }, onLoaded: function() {} };
			this.options = $.extend(e, i), this.$el = t, this.canvas = null, this.stage = null, this.loader = null, this.manifest = [{ src: "sky.png", id: "sky" }, { src: "ground.png", id: "ground" }, { src: "hill1.png", id: "hill1" }, { src: "hill2.png", id: "hill2" }, { src: "spritesheet_running.png", id: "man" }], this.sky = null, this.hill1 = null, this.hill2 = null, this.ground = null, this.man = null, this.stateMachine = null, this.timer = null, this._init()
		}
		e(3);
		var s = e(31),
			o = e(30);
		n.prototype = {
			constructor: n,
			_init: function() { this._createCanvas(), this._createStage(), this._initStateMachine(), this._initTimer(), this.load() },
			_initTimer: function() { this.timer = new o({ time: 3e4, tickUnit: 1e3, onTick: this.options.onTimerTick, onComplete: this.options.onTimerComplete }) },
			_initStateMachine: function() {
				var t = this;
				this.stateMachine = new s({ defaultState: "init", status: [{ value: "init", actions: { load: function() { t._load(function() { this.setState("ready") }.bind(this)), this.setState("loading") }, start: function() {}, stop: function() {}, pause: function() {}, resume: function() {} } }, { value: "loading", actions: { load: function() {}, start: function() {}, stop: function() {}, pause: function() {}, resume: function() {} } }, { value: "ready", actions: { load: function() {}, start: function() { t._start(), this.setState("started") }, stop: function() {}, pause: function() {}, resume: function() {} } }, { value: "started", actions: { load: function() {}, start: function() {}, stop: function() { t._stop(), this.setState("ready") }, pause: function() { t._pause(), this.setState("paused") }, resume: function() {} } }, { value: "paused", actions: { load: function() {}, start: function() {}, stop: function() { t._stop(), this.setState("ready") }, pause: function() {}, resume: function() { t._resume(), this.setState("started") } } }] })
			},
			_createStage: function() { this.stage = new createjs.Stage(this.canvas), this.stage.addEventListener("stagemousedown", function() { console.log("stagemousedown") }), this.stage.addEventListener("click", function() { console.log("click") }), this.stage.addEventListener("mousedown", function() { console.log("mousedown") }) },
			_createCanvas: function() { this.canvas = document.createElement("canvas"), this.canvas.width = this.$el.width(), this.canvas.height = this.$el.height(), this.$el.append($(this.canvas)) },
			_handleLoadComplete: function() {
				console.log("loaded");
				var t = this.loader.getResult("ground"),
					i = new createjs.SpriteSheet({ framerate: 20, images: [this.loader.getResult("man")], frames: { regX: 0, height: 80, count: 5, regY: 0, width: 80 }, animations: { run: [0, 4] } }),
					e = this.canvas.width,
					n = this.canvas.height;
				this.sky = new createjs.Shape, this.sky.graphics.beginBitmapFill(this.loader.getResult("sky")).drawRect(0, 0, e, n), this.ground = new createjs.Shape, this.ground.graphics.beginBitmapFill(t).drawRect(0, 0, e + t.width, t.height), this.ground.tileW = t.width, this.ground.y = n - t.height, this.hill1 = new createjs.Bitmap(this.loader.getResult("hill1")), this.hill1.setTransform(Math.random() * e, n - 4 * this.hill1.image.height - t.height, 4, 4), this.hill1.alpha = .5, this.hill2 = new createjs.Bitmap(this.loader.getResult("hill2")), this.hill2.setTransform(Math.random() * e, n - 3 * this.hill2.image.height - t.height, 3, 3), this.man = new createjs.Sprite(i, "run"), this.man.y = 85, this.stage.addChild(this.sky, this.hill1, this.hill2, this.ground, this.man), createjs.Ticker.timingMode = createjs.Ticker.RAF, createjs.Ticker.addEventListener("tick", this._tick.bind(this))
			},
			_tick: function(t) {
				var i = t.delta / 1e3,
					e = this.canvas.width;
				"started" === this.stateMachine.getState() ? (this.ground.x = (this.ground.x - 150 * i) % this.ground.tileW, this.hill1.x = this.hill1.x - 30 * i, this.hill1.x + this.hill1.image.width * this.hill1.scaleX <= 0 && (this.hill1.x = e), this.hill2.x = this.hill2.x - 45 * i, this.hill2.x + this.hill2.image.width * this.hill2.scaleX <= 0 && (this.hill2.x = e), this.man.play()) : this.man.stop(), this.stage.update(t)
			},
			_load: function(t) { this.loader = new createjs.LoadQueue(!1), this.loader.addEventListener("complete", function() { this._handleLoadComplete(), t && t(), this.options.onLoaded && this.options.onLoaded() }.bind(this)), this.loader.loadManifest(this.manifest, !0, "assets/images/") },
			_start: function() { this.timer.start() },
			_stop: function() { this.timer.reset() },
			_pause: function() { this.timer.pause() },
			_resume: function() { this.timer.resume() },
			load: function() { this.stateMachine.takeAction("load") },
			start: function() { this.stateMachine.takeAction("start") },
			stop: function() { this.stateMachine.takeAction("stop") },
			pause: function() { this.stateMachine.takeAction("pause") },
			resume: function() { this.stateMachine.takeAction("resume") }
		}, t.exports = wy.effect.CatchMe = n
	}, function(t, i, e) {
		function n(t, i) {
			var e = { imageUrl: "", pointRenderer: null, points: [], onLoad: function() {}, onComplete: function() {} };
			this.options = $.extend(e, i), this.$el = t, this.$wrapper = null, this.$img = null, this.$overlay = null, this.loader = null, this.centerIt = null, this.imageTilting = null, this.overlayTilting = null, this.started = !1, this.enableClick = !1, this.options.imageUrl && this.options.pointRenderer && 0 !== this.options.points.length ? this._init() : console.error("TiltImage options are not valid")
		}
		e(3);
		var s = e(27),
			o = e(10),
			r = e(35);
		n.prototype = {
			constructor: n,
			_init: function() {
				this._createWrapper(), this.loader = new o, this.loader.add("image", this.options.imageUrl, { loadType: o.LOAD_TYPE.IMAGE }, function(t) {
					var i = t.data;
					this.centerIt = new s(this.$wrapper.width(), this.$wrapper.height(), i.naturalWidth, i.naturalHeight, { type: "cover" }), this._createImage(i), this._createOverlay(), this._createPoints(), this._initTilting(), this.options.onComplete && this.options.onComplete()
				}.bind(this)), this.loader.load(), this.options.onLoad && this.options.onLoad()
			},
			_initTilting: function() {
				var t = this.centerIt.offset().left,
					i = this.centerIt.offset().top,
					e = { limitX: 0 === t ? 0 : Math.abs(t), limitY: 0 === i ? 0 : Math.abs(i), scalarX: 20, scalarY: 20 };
				this.imageTilting = new r(this.$img, e), this.overlayTilting = new r(this.$overlay, e), this.start()
			},
			_createWrapper: function() { this.$wrapper = $("<div>").css("position", "relative").css("overflow", "hidden").css("margin", 0).css("padding", 0).attr("name", "tilt-image-wrapper").width(this.$el.width()).height(this.$el.height()), this.$el.html("").append(this.$wrapper) },
			_createImage: function(t) { this.$img = $(t).css("position", "relative").css("top", this.centerIt.offset().top + "px").css("left", this.centerIt.offset().left + "px").css("z-index", 9).css("margin", 0).css("padding", 0).width(this.centerIt.newWidth()).height(this.centerIt.newHeight()), this.$wrapper.append(this.$img) },
			_createOverlay: function() { this.$overlay = $("<div>").css("position", "absolute").css("top", this.centerIt.offset().top + "px").css("left", this.centerIt.offset().left + "px").css("margin", 0).css("padding", 0).css("z-index", 10).css("background-color", "transparent").attr("name", "tilt-image-overlay").width(this.centerIt.newWidth()).height(this.centerIt.newHeight()), this.$wrapper.append(this.$overlay) },
			_createPoints: function() { this.options.points.forEach(function(t) { this._createPoint(t) }.bind(this)) },
			_createPoint: function(t) {
				var i = this.centerIt.map(t.x, t.y, !0),
					e = $("<span>").css("position", "absolute").css("display", "inline-block").css("margin", 0).css("padding", 0).css("left", i.x + t.offsetX).css("top", i.y + t.offsetY),
					n = this.options.pointRenderer(t);
				e.on("click", function() { this.enableClick && t.onClick && t.onClick(t) }.bind(this)), e.append(n), this.$overlay.append(e)
			},
			start: function() { this.started || (this.imageTilting.enable(), this.overlayTilting.enable(), this.started = !0, this.enableClick = !0) },
			stop: function(t) { this.started && (this.imageTilting.disable(), this.overlayTilting.disable(), this.started = !1, this.enableClick = t || !1) }
		}, t.exports = wy.effect.TiltImage = n
	}, function(t, i, e) {
		function n() { return $("<div>").attr("name", "guide-mask").css("position", "fixed").css("top", 0).css("left", 0).css("bottom", 0).css("right", 0).css("background-color", "rgba(0,0,0,0.5)").css("z-index", 99999) }

		function s(t) {
			var i = { guides: [{ step: 1, stepName: "", type: "", pointPosition: "", pointSize: 1, blockKeepRatio: !0, padding: [10, 10, 10, 10], target: "", imageUrl: "", anchorX: 0, anchorY: 0, animation: "fadeIn" }], mask: n, clickMaskToNextGuide: !0, onLoaded: function() { this.play() }.bind(this), onCompleted: null };
			this.options = $.extend(i, t), this.$mask = null, this.$guidesWrapper = null, this.loader = null, this.currentStep = 0, this._init()
		}
		e(3);
		var o = e(27),
			r = e(10),
			a = e(36);
		s.prototype = {
			constructor: s,
			_init: function() { this._createMask(), this._load() },
			_load: function(t) { this.loader = new r, this.options.guides.forEach(function(t) { this.loader.add(t.stepName + "_" + t.imageUrl, t.imageUrl) }.bind(this)), this.loader.on("complete", function() { this.options.onLoaded && this.options.onLoaded() }.bind(this)), this.loader.load() },
			_createMask: function() { "function" == typeof this.options.mask && (this.$mask = this.options.mask()), "string" == typeof this.options.mask && (this.$mask = $("#" + this.options.mask)), "object" == typeof this.options.mask && (this.$mask = this.options.mask), this.$mask.css("z-index", 99999), this.options.clickMaskToNextGuide && this.$mask.on("click", this.next.bind(this)), this.$guidesWrapper = $("<div>").attr("name", "guides-wrapper").css("position", "absolute").css("top", 0).css("bottom", 0).css("left", 0).css("right", 0), this.$mask.append(this.$guidesWrapper), this.$mask.hide(), $(document.body).append(this.$mask) },
			play: function() { this.currentStep = 0, this.$mask.show(), this.next() },
			next: function() {
				var t = this,
					i = [],
					e = this.loader,
					n = ++this.currentStep;
				console.log("next", n), this.$guidesWrapper.html(""), i = this.options.guides.filter(function(t) { return t.step === n }), i.length > 0 ? i.forEach(function(i) {
					var n = "string" == typeof i.target ? $("#" + i.target) : i.target,
						s = n.outerWidth(!0),
						r = n.outerHeight(!0),
						h = e.resources[i.stepName + "_" + i.imageUrl].data,
						c = isNaN(i.anchorX) ? 0 : i.anchorX,
						l = isNaN(i.anchorY) ? 0 : i.anchorY,
						u = $("<span>").css("position", "absolute").css("top", n.offset().top + "px").css("left", n.offset().left + "px").width(s).height(r),
						p = new o(s, r, h.naturalWidth, h.naturalHeight, { type: "cover" }),
						d = p.newHeight() * l,
						f = p.newWidth() * c,
						m = $(h).css("position", "absolute").css("top", p.offset().top - d + "px").css("left", p.offset().left - f + "px").width(p.newWidth()).height(p.newHeight());
					u.append(m), t.$guidesWrapper.append(u), a.applyAnimation(u, { animationName: i.animation })
				}) : (this.$mask.hide(), this.currentStep = 0, this.options.onCompleted && this.options.onCompleted())
			}
		}, t.exports = wy.effect.Guide = s
	}, function(t, i, e) {
		function n(t, i) {
			var e = { height: "200px", width: "200px", perspective: "800px", duration: 1e3, easing: "ease", direction: "alternate", horizontal: !1, auto: !1, autoFlipInterval: 1e3, onFlipStart: null, onFlipEnd: null };
			this.options = $.extend(e, i), this.$el = t;
			var n = this.$el.children()[0],
				s = this.$el.children()[1];
			this.$el.html(""), this.$frontWrapper = $("<div>").attr("name", "flip-front-wrapper").append(n), this.$backWrapper = $("<div>").attr("name", "flip-back-wrapper").append(s), this.flipped = !1, this.seedId = null, this.rotateMethod = this.options.horizontal ? "rotateX" : "rotateY", this.frontFaceDeg = 0, this.backFaceDeg = 180, this._init()
		}
		e(3);
		var s = e(62);
		n.prototype = {
			constructor: n,
			_init: function() { this._initContainer(), this._initFrontFace(), this._initBackFace(), this._bind(), this.play() },
			_bind: function() { var t = "transitionend"; - 1 !== s("transition").indexOf("webkit") && (t = "webkitTransitionEnd"), this.$frontWrapper.on(t, function(t) { var i = t.originalEvent.propertyName; - 1 !== i.indexOf("transform") && this.options.onFlipEnd && this.options.onFlipEnd(this.flipped) }.bind(this)) },
			_initContainer: function() { this.$el.css("height", this.options.height).css("width", this.options.width).css("position", "relative").css(s.dash("perspective"), this.options.perspective) },
			_initFrontFace: function() { this.$frontWrapper.css("opacity", 1).css(s.dash("transform"), this.rotateMethod + "(" + this.frontFaceDeg + "deg)"), this._styleFlipFace(this.$frontWrapper), this.$el.append(this.$frontWrapper) },
			_initBackFace: function() { this.$backWrapper.css("opacity", 0).css(s.dash("transform"), this.rotateMethod + "(" + this.backFaceDeg + "deg)"), this._styleFlipFace(this.$backWrapper), this.$el.append(this.$backWrapper) },
			_styleFlipFace: function(t) { t.css("position", "absolute").css("top", 0).css("left", 0).css("width", "100%").css("height", "100%").css("overflow", "hidden").css(s.dash("transform-style"), "preserve-3d").css(s.dash("backface-visibility"), "hidden").css(s.dash("transition"), "all " + this.options.duration / 1e3 + "s " + this.options.easing) },
			flipForward: function() { this.frontFaceDeg += 180, this.backFaceDeg += 180, this.$frontWrapper.css("opacity", this.flipped ? 1 : 0).css(s.dash("transform"), this.rotateMethod + "(" + this.frontFaceDeg + "deg)"), this.$backWrapper.css("opacity", this.flipped ? 0 : 1).css(s.dash("transform"), this.rotateMethod + "(" + this.backFaceDeg + "deg)"), this.flipped = !this.flipped },
			flipBackward: function() { this.frontFaceDeg -= 180, this.backFaceDeg -= 180, this.$frontWrapper.css("opacity", this.flipped ? 1 : 0).css(s.dash("transform"), this.rotateMethod + "(" + this.frontFaceDeg + "deg)"), this.$backWrapper.css("opacity", this.flipped ? 0 : 1).css(s.dash("transform"), this.rotateMethod + "(" + this.backFaceDeg + "deg)"), this.flipped = !this.flipped },
			flipAlternate: function() { this.flipped ? this.flipBackward() : this.flipForward() },
			flip: function() {
				switch(this.options.onFlipStart && this.options.onFlipStart(this.flipped), this.options.direction) {
					case "forward":
						this.flipForward();
						break;
					case "backward":
						this.flipBackward();
						break;
					case "alternate":
						this.flipAlternate()
				}
			},
			stop: function() { this.options.auto && clearInterval(this.seedId) },
			play: function() { this.options.auto && (this.seedId = setInterval(function() { this.flip() }.bind(this), this.options.autoFlipInterval)) }
		}, t.exports = wy.effect.Flipper = n
	}, function(t, i) {
		"use strict";

		function e(t) { return t in c ? c[t] : c[t] = n(t) }

		function n(t) {
			var i, e = t.replace(/-([a-z])/g, function(t, i) { return i.toUpperCase() }),
				n = a.length;
			if(void 0 !== r[e]) return e;
			for(e = s(t); n--;)
				if(i = a[n] + e, void 0 !== r[i]) return i;
			throw new Error("unable to prefix " + t)
		}

		function s(t) { return t.charAt(0).toUpperCase() + t.slice(1) }

		function o(t) {
			var i = e(t),
				n = /([A-Z])/g;
			return n.test(i) && (i = (h.test(i) ? "-" : "") + i.replace(n, "-$1")), i.toLowerCase()
		}
		var r = document.createElement("p").style,
			a = "O ms Moz webkit".split(" "),
			h = /^(o|ms|moz|webkit)/,
			c = {};
		t.exports = e, t.exports.dash = o
	}, function(t, i, e) {
		function n(t, i) {
			var e = { listElement: "", pullDownElement: "", pullDownThreshold: 5, onPullingDown: null, onReachingPullDownThreshold: null, onPullDownLoading: null, pullUpElement: "", pullUpThreshold: 50, onPullingUp: null };
			this.$el = t, this.options = $.extend(e, i), this.stateMachine = null, this.scroller = null, "string" == typeof this.options.pullDownElement ? this.$pullDown = $("#" + this.options.pullDownElement) : this.$pullDown = this.options.pullDownElement, "string" == typeof this.options.pullUpElement ? this.$pullUp = $("#" + this.options.pullUpElement) : this.$pullUp = this.options.pullUpElement, "string" == typeof this.options.listElement ? this.$list = $("#" + this.options.listElement) : this.$list = this.options.listElement, this._init()
		}
		e(3);
		var s = e(31),
			o = e(64);
		n.prototype = {
			constructor: n,
			_init: function() { this._initScroller(), this._initStateMachine() },
			_initScroller: function() {
				var t = this.$pullDown.outerHeight(!0),
					i = this;
				this.scroller = new o(this.$el[0], { probeType: 2, startY: -1 * t }), this.scroller.on("scroll", function() { i.stateMachine.takeAction("handleScroll") }), this.scroller.on("scrollEnd", function() { i.stateMachine.takeAction("handleScrollEnd") }), this.scroller.on("refresh", function() { 0 != this.maxScrollY ? i.$pullUp.show() : (this.maxScrollY = this.options.startY, i.$pullUp.hide()), this.hasVerticalScroll = !0 }), this.scroller.refresh()
			},
			_initStateMachine: function() {
				function t() {
					var t = i.stateMachine;
					i.$list.outerHeight(!0) > e.wrapperHeight && e.y < e.maxScrollY + i.options.pullUpThreshold && (i.options.onPullingUp && i.options.onPullingUp(function() { e.refresh(), t.setState("normal") }), t.setState("pullingUpLoading"))
				}
				var i = this,
					e = i.scroller;
				this.stateMachine = new s({ defaultState: "normal", onStateChange: function(t, i) {}, status: [{ value: "normal", actions: { handleScroll: function() { e.y > e.options.startY && this.setState("pullingDown"), t() }, handleScrollEnd: function() { e.y > e.options.startY && (0 === e.maxScrollY ? (e.maxScrollY = e.options.startY, e.scrollTo(0, e.options.startY, 200)) : e.scrollTo(0, e.options.startY, 200)), t() } } }, { value: "pullingDown", actions: { handleScroll: function() { e.y <= e.options.startY && this.setState("normal"), e.y > i.options.pullDownThreshold && (i.options.onReachingPullDownThreshold && i.options.onReachingPullDownThreshold(), this.setState("pullingDownReachThreshold")) }, handleScrollEnd: function() { e.scrollTo(0, e.options.startY, 200), this.setState("normal") } } }, { value: "pullingDownReachThreshold", actions: { handleScroll: function() { e.y <= i.options.pullDownThreshold && (i.options.onPullingDown && i.options.onPullingDown(), this.setState("pullingDown")) }, handleScrollEnd: function() { i.options.onPullDownLoading && i.options.onPullDownLoading(function() { e.scrollTo(0, e.options.startY, 200) }), this.setState("pullingDownLoading") } } }, { value: "pullingDownLoading", actions: { handleScroll: function() {}, handleScrollEnd: function() { i.options.onPullingDown && i.options.onPullingDown(), e.refresh(), e.scrollTo(0, e.options.startY), this.setState("normal") } } }, { value: "pullingUpLoading", actions: { handleScroll: function() {}, handleScrollEnd: function() {} } }] })
			},
			refresh: function() {},
			load: function() {}
		}, t.exports = wy.effect.Scroll = n
	}, function(t, i) { /*! iScroll v5.1.2 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
		! function(i, e, n) {
			function s(t, i) {
				this.wrapper = "string" == typeof t ? e.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0 };
				for(var n in i) this.options[n] = i[n];
				this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
			}

			function o(t, i, n) {
				var s = e.createElement("div"),
					o = e.createElement("div");
				return n === !0 && (s.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), o.className = "iScrollIndicator", "h" == t ? (n === !0 && (s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%"), s.className = "iScrollHorizontalScrollbar") : (n === !0 && (s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%"), s.className = "iScrollVerticalScrollbar"), s.style.cssText += ";overflow:hidden", i || (s.style.pointerEvents = "none"), s.appendChild(o), s
			}

			function r(t, n) {
				this.wrapper = "string" == typeof n.el ? e.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 };
				for(var s in n) this.options[s] = n[s];
				this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(i, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(i, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(i, "mouseup", this))), this.options.fade && (this.wrapperStyle[h.style.transform] = this.scroller.translateZ, this.wrapperStyle[h.style.transitionDuration] = h.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
			}
			var a = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.oRequestAnimationFrame || i.msRequestAnimationFrame || function(t) { i.setTimeout(t, 1e3 / 60) },
				h = function() {
					function t(t) { return r === !1 ? !1 : "" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1) }
					var s = {},
						o = e.createElement("div").style,
						r = function() {
							for(var t, i = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, n = i.length; n > e; e++)
								if(t = i[e] + "ransform", t in o) return i[e].substr(0, i[e].length - 1);
							return !1
						}();
					s.getTime = Date.now || function() { return(new Date).getTime() }, s.extend = function(t, i) { for(var e in i) t[e] = i[e] }, s.addEvent = function(t, i, e, n) { t.addEventListener(i, e, !!n) }, s.removeEvent = function(t, i, e, n) { t.removeEventListener(i, e, !!n) }, s.prefixPointerEvent = function(t) { return i.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t }, s.momentum = function(t, i, e, s, o, r) {
						var a, h, c = t - i,
							l = n.abs(c) / e;
						return r = void 0 === r ? 6e-4 : r, a = t + l * l / (2 * r) * (0 > c ? -1 : 1), h = l / r, s > a ? (a = o ? s - o / 2.5 * (l / 8) : s, c = n.abs(a - t), h = c / l) : a > 0 && (a = o ? o / 2.5 * (l / 8) : 0, c = n.abs(t) + a, h = c / l), { destination: n.round(a), duration: h }
					};
					var a = t("transform");
					return s.extend(s, { hasTransform: a !== !1, hasPerspective: t("perspective") in o, hasTouch: "ontouchstart" in i, hasPointer: i.PointerEvent || i.MSPointerEvent, hasTransition: t("transition") in o }), s.isBadAndroid = /Android /.test(i.navigator.appVersion) && !/Chrome\/\d/.test(i.navigator.appVersion), s.extend(s.style = {}, { transform: a, transitionTimingFunction: t("transitionTimingFunction"), transitionDuration: t("transitionDuration"), transitionDelay: t("transitionDelay"), transformOrigin: t("transformOrigin") }), s.hasClass = function(t, i) { var e = new RegExp("(^|\\s)" + i + "(\\s|$)"); return e.test(t.className) }, s.addClass = function(t, i) {
						if(!s.hasClass(t, i)) {
							var e = t.className.split(" ");
							e.push(i), t.className = e.join(" ")
						}
					}, s.removeClass = function(t, i) {
						if(s.hasClass(t, i)) {
							var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
							t.className = t.className.replace(e, " ")
						}
					}, s.offset = function(t) { for(var i = -t.offsetLeft, e = -t.offsetTop; t = t.offsetParent;) i -= t.offsetLeft, e -= t.offsetTop; return { left: i, top: e } }, s.preventDefaultException = function(t, i) {
						for(var e in i)
							if(i[e].test(t[e])) return !0;
						return !1
					}, s.extend(s.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), s.extend(s.ease = {}, {
						quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function(t) { return t * (2 - t) } },
						circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function(t) { return n.sqrt(1 - --t * t) } },
						back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function(t) { var i = 4; return(t -= 1) * t * ((i + 1) * t + i) + 1 } },
						bounce: { style: "", fn: function(t) { return(t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 } },
						elastic: {
							style: "",
							fn: function(t) {
								var i = .22,
									e = .4;
								return 0 === t ? 0 : 1 == t ? 1 : e * n.pow(2, -10 * t) * n.sin((t - i / 4) * (2 * n.PI) / i) + 1
							}
						}
					}), s.tap = function(t, i) {
						var n = e.createEvent("Event");
						n.initEvent(i, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
					}, s.click = function(t) { var i, n = t.target; /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (i = e.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), i._constructed = !0, n.dispatchEvent(i)) }, s
				}();
			s.prototype = {
				version: "5.1.2",
				_init: function() { this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys() },
				destroy: function() { this._initEvents(!0), this._execEvent("destroy") },
				_transitionEnd: function(t) { t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd"))) },
				_start: function(t) {
					if((1 == h.eventType[t.type] || 0 === t.button) && this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
						!this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
						var i, e = t.touches ? t.touches[0] : t;
						this.initiated = h.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, i = this.getComputedPosition(), this._translate(n.round(i.x), n.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this._execEvent("beforeScrollStart")
					}
				},
				_move: function(t) {
					if(this.enabled && h.eventType[t.type] === this.initiated) {
						this.options.preventDefault && t.preventDefault();
						var i, e, s, o, r = t.touches ? t.touches[0] : t,
							a = r.pageX - this.pointX,
							c = r.pageY - this.pointY,
							l = h.getTime();
						if(this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += c, s = n.abs(this.distX), o = n.abs(this.distY), !(l - this.endTime > 300 && 10 > s && 10 > o)) {
							if(this.directionLocked || this.options.freeScroll || (s > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= s + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
								if("vertical" == this.options.eventPassthrough) t.preventDefault();
								else if("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
								c = 0
							} else if("v" == this.directionLocked) {
								if("horizontal" == this.options.eventPassthrough) t.preventDefault();
								else if("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
								a = 0
							}
							a = this.hasHorizontalScroll ? a : 0, c = this.hasVerticalScroll ? c : 0, i = this.x + a, e = this.y + c, (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX), (e > 0 || e < this.maxScrollY) && (e = this.options.bounce ? this.y + c / 3 : e > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : 0 > a ? 1 : 0, this.directionY = c > 0 ? -1 : 0 > c ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(i, e), l - this.startTime > 300 && (this.startTime = l, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll")
						}
					}
				},
				_end: function(t) {
					if(this.enabled && h.eventType[t.type] === this.initiated) {
						this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
						var i, e, s = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime),
							o = n.round(this.x),
							r = n.round(this.y),
							a = n.abs(o - this.startX),
							c = n.abs(r - this.startY),
							l = 0,
							u = "";
						if(this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
							if(this.scrollTo(o, r), !this.moved) return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
							if(this._events.flick && 200 > s && 100 > a && 100 > c) return void this._execEvent("flick");
							if(this.options.momentum && 300 > s && (i = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: o, duration: 0 }, e = this.hasVerticalScroll ? h.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: r, duration: 0 }, o = i.destination, r = e.destination, l = n.max(i.duration, e.duration), this.isInTransition = 1), this.options.snap) {
								var p = this._nearestSnap(o, r);
								this.currentPage = p, l = this.options.snapSpeed || n.max(n.max(n.min(n.abs(o - p.x), 1e3), n.min(n.abs(r - p.y), 1e3)), 300), o = p.x, r = p.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
							}
							return o != this.x || r != this.y ? ((o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = h.ease.quadratic), void this.scrollTo(o, r, l, u)) : void this._execEvent("scrollEnd")
						}
					}
				},
				_resize: function() {
					var t = this;
					clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() { t.refresh() }, this.options.resizePolling)
				},
				resetPosition: function(t) {
					var i = this.x,
						e = this.y;
					return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? i = 0 : this.x < this.maxScrollX && (i = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? e = 0 : this.y < this.maxScrollY && (e = this.maxScrollY), i == this.x && e == this.y ? !1 : (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
				},
				disable: function() { this.enabled = !1 },
				enable: function() { this.enabled = !0 },
				refresh: function() {
					this.wrapper.offsetHeight;
					this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
				},
				on: function(t, i) { this._events[t] || (this._events[t] = []), this._events[t].push(i) },
				off: function(t, i) {
					if(this._events[t]) {
						var e = this._events[t].indexOf(i);
						e > -1 && this._events[t].splice(e, 1)
					}
				},
				_execEvent: function(t) {
					if(this._events[t]) {
						var i = 0,
							e = this._events[t].length;
						if(e)
							for(; e > i; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1))
					}
				},
				scrollBy: function(t, i, e, n) { t = this.x + t, i = this.y + i, e = e || 0, this.scrollTo(t, i, e, n) },
				scrollTo: function(t, i, e, n) { n = n || h.ease.circular, this.isInTransition = this.options.useTransition && e > 0, !e || this.options.useTransition && n.style ? (this._transitionTimingFunction(n.style), this._transitionTime(e), this._translate(t, i)) : this._animate(t, i, e, n.fn) },
				scrollToElement: function(t, i, e, s, o) {
					if(t = t.nodeType ? t : this.scroller.querySelector(t)) {
						var r = h.offset(t);
						r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, e === !0 && (e = n.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), s === !0 && (s = n.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= e || 0, r.top -= s || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, i = void 0 === i || null === i || "auto" === i ? n.max(n.abs(this.x - r.left), n.abs(this.y - r.top)) : i, this.scrollTo(r.left, r.top, i, o)
					}
				},
				_transitionTime: function(t) {
					if(t = t || 0, this.scrollerStyle[h.style.transitionDuration] = t + "ms", !t && h.isBadAndroid && (this.scrollerStyle[h.style.transitionDuration] = "0.001s"), this.indicators)
						for(var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t)
				},
				_transitionTimingFunction: function(t) {
					if(this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators)
						for(var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(t)
				},
				_translate: function(t, i) {
					if(this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = n.round(t), i = n.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.x = t, this.y = i, this.indicators)
						for(var e = this.indicators.length; e--;) this.indicators[e].updatePosition()
				},
				_initEvents: function(t) {
					var e = t ? h.removeEvent : h.addEvent,
						n = this.options.bindToWrapper ? this.wrapper : i;
					e(i, "orientationchange", this), e(i, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(n, "mousemove", this), e(n, "mousecancel", this), e(n, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this), e(n, h.prefixPointerEvent("pointermove"), this), e(n, h.prefixPointerEvent("pointercancel"), this), e(n, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(n, "touchmove", this), e(n, "touchcancel", this), e(n, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
				},
				getComputedPosition: function() { var t, e, n = i.getComputedStyle(this.scroller, null); return this.options.useTransform ? (n = n[h.style.transform].split(")")[0].split(", "), t = +(n[12] || n[4]), e = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""), e = +n.top.replace(/[^-\d.]/g, "")), { x: t, y: e } },
				_initIndicators: function() {
					function t(t) { for(var i = a.indicators.length; i--;) t.call(a.indicators[i]) }
					var i, e = this.options.interactiveScrollbars,
						n = "string" != typeof this.options.scrollbars,
						s = [],
						a = this;
					this.indicators = [], this.options.scrollbars && (this.options.scrollY && (i = { el: o("v", e, this.options.scrollbars), interactive: e, defaultScrollbars: !0, customStyle: n, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(i.el), s.push(i)), this.options.scrollX && (i = { el: o("h", e, this.options.scrollbars), interactive: e, defaultScrollbars: !0, customStyle: n, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(i.el), s.push(i))), this.options.indicators && (s = s.concat(this.options.indicators));
					for(var h = s.length; h--;) this.indicators.push(new r(this, s[h]));
					this.options.fadeScrollbars && (this.on("scrollEnd", function() { t(function() { this.fade() }) }), this.on("scrollCancel", function() { t(function() { this.fade() }) }), this.on("scrollStart", function() { t(function() { this.fade(1) }) }), this.on("beforeScrollStart", function() { t(function() { this.fade(1, !0) }) })), this.on("refresh", function() { t(function() { this.refresh() }) }), this.on("destroy", function() { t(function() { this.destroy() }), delete this.indicators })
				},
				_initWheel: function() { h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() { h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this) }) },
				_wheel: function(t) {
					if(this.enabled) {
						t.preventDefault(), t.stopPropagation();
						var i, e, s, o, r = this;
						if(void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() { r._execEvent("scrollEnd"), r.wheelTimeout = void 0 }, 400), "deltaX" in t) i = -t.deltaX, e = -t.deltaY;
						else if("wheelDeltaX" in t) i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, e = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
						else if("wheelDelta" in t) i = e = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
						else {
							if(!("detail" in t)) return;
							i = e = -t.detail / 3 * this.options.mouseWheelSpeed
						}
						if(i *= this.options.invertWheelDirection, e *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = e, e = 0), this.options.snap) return s = this.currentPage.pageX, o = this.currentPage.pageY, i > 0 ? s-- : 0 > i && s++, e > 0 ? o-- : 0 > e && o++, void this.goToPage(s, o);
						s = this.x + n.round(this.hasHorizontalScroll ? i : 0), o = this.y + n.round(this.hasVerticalScroll ? e : 0), s > 0 ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX), o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(s, o, 0), this.options.probeType > 1 && this._execEvent("scroll")
					}
				},
				_initSnap: function() {
					this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
						var t, i, e, s, o, r, a = 0,
							h = 0,
							c = 0,
							l = this.options.snapStepX || this.wrapperWidth,
							u = this.options.snapStepY || this.wrapperHeight;
						if(this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
							if(this.options.snap === !0)
								for(e = n.round(l / 2), s = n.round(u / 2); c > -this.scrollerWidth;) {
									for(this.pages[a] = [], t = 0, o = 0; o > -this.scrollerHeight;) this.pages[a][t] = { x: n.max(c, this.maxScrollX), y: n.max(o, this.maxScrollY), width: l, height: u, cx: c - e, cy: o - s }, o -= u, t++;
									c -= l, a++
								} else
									for(r = this.options.snap, t = r.length, i = -1; t > a; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (h = 0, i++), this.pages[h] || (this.pages[h] = []), c = n.max(-r[a].offsetLeft, this.maxScrollX), o = n.max(-r[a].offsetTop, this.maxScrollY), e = c - n.round(r[a].offsetWidth / 2), s = o - n.round(r[a].offsetHeight / 2), this.pages[h][i] = { x: c, y: o, width: r[a].offsetWidth, height: r[a].offsetHeight, cx: e, cy: s }, c > this.maxScrollX && h++;
							this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
						}
					}), this.on("flick", function() {
						var t = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300);
						this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
					})
				},
				_nearestSnap: function(t, i) {
					if(!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
					var e = 0,
						s = this.pages.length,
						o = 0;
					if(n.abs(t - this.absStartX) < this.snapThresholdX && n.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
					for(t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY); s > e; e++)
						if(t >= this.pages[e][0].cx) { t = this.pages[e][0].x; break }
					for(s = this.pages[e].length; s > o; o++)
						if(i >= this.pages[0][o].cy) { i = this.pages[0][o].y; break }
					return e == this.currentPage.pageX && (e += this.directionX, 0 > e ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1), t = this.pages[e][0].x), o == this.currentPage.pageY && (o += this.directionY, 0 > o ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), i = this.pages[0][o].y), { x: t, y: i, pageX: e, pageY: o }
				},
				goToPage: function(t, i, e, s) {
					s = s || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0), i >= this.pages[t].length ? i = this.pages[t].length - 1 : 0 > i && (i = 0);
					var o = this.pages[t][i].x,
						r = this.pages[t][i].y;
					e = void 0 === e ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(o - this.x), 1e3), n.min(n.abs(r - this.y), 1e3)), 300) : e, this.currentPage = { x: o, y: r, pageX: t, pageY: i }, this.scrollTo(o, r, e, s)
				},
				next: function(t, i) {
					var e = this.currentPage.pageX,
						n = this.currentPage.pageY;
					e++, e >= this.pages.length && this.hasVerticalScroll && (e = 0, n++), this.goToPage(e, n, t, i)
				},
				prev: function(t, i) {
					var e = this.currentPage.pageX,
						n = this.currentPage.pageY;
					e--, 0 > e && this.hasVerticalScroll && (e = 0, n--), this.goToPage(e, n, t, i)
				},
				_initKeys: function(t) {
					var e, n = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
					if("object" == typeof this.options.keyBindings)
						for(e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
					else this.options.keyBindings = {};
					for(e in n) this.options.keyBindings[e] = this.options.keyBindings[e] || n[e];
					h.addEvent(i, "keydown", this), this.on("destroy", function() { h.removeEvent(i, "keydown", this) })
				},
				_key: function(t) {
					if(this.enabled) {
						var i, e = this.options.snap,
							s = e ? this.currentPage.pageX : this.x,
							o = e ? this.currentPage.pageY : this.y,
							r = h.getTime(),
							a = this.keyTime || 0,
							c = .25;
						switch(this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(n.round(i.x), n.round(i.y)), this.isInTransition = !1), this.keyAcceleration = 200 > r - a ? n.min(this.keyAcceleration + c, 50) : 0, t.keyCode) {
							case this.options.keyBindings.pageUp:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? s += e ? 1 : this.wrapperWidth : o += e ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.pageDown:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= e ? 1 : this.wrapperWidth : o -= e ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.end:
								s = e ? this.pages.length - 1 : this.maxScrollX, o = e ? this.pages[0].length - 1 : this.maxScrollY;
								break;
							case this.options.keyBindings.home:
								s = 0, o = 0;
								break;
							case this.options.keyBindings.left:
								s += e ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.up:
								o += e ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.right:
								s -= e ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.down:
								o -= e ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							default:
								return
						}
						if(e) return void this.goToPage(s, o);
						s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollX && (s = this.maxScrollX, this.keyAcceleration = 0), o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollY && (o = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(s, o, 0), this.keyTime = r
					}
				},
				_animate: function(t, i, e, n) {
					function s() { var p, d, f, m = h.getTime(); return m >= u ? (o.isAnimating = !1, o._translate(t, i), void(o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"))) : (m = (m - l) / e, f = n(m), p = (t - r) * f + r, d = (i - c) * f + c, o._translate(p, d), o.isAnimating && a(s), void(3 == o.options.probeType && o._execEvent("scroll"))) }
					var o = this,
						r = this.x,
						c = this.y,
						l = h.getTime(),
						u = l + e;
					this.isAnimating = !0, s()
				},
				handleEvent: function(t) {
					switch(t.type) {
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
						case "mousedown":
							this._start(t);
							break;
						case "touchmove":
						case "pointermove":
						case "MSPointerMove":
						case "mousemove":
							this._move(t);
							break;
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "pointercancel":
						case "MSPointerCancel":
						case "mousecancel":
							this._end(t);
							break;
						case "orientationchange":
						case "resize":
							this._resize();
							break;
						case "transitionend":
						case "webkitTransitionEnd":
						case "oTransitionEnd":
						case "MSTransitionEnd":
							this._transitionEnd(t);
							break;
						case "wheel":
						case "DOMMouseScroll":
						case "mousewheel":
							this._wheel(t);
							break;
						case "keydown":
							this._key(t);
							break;
						case "click":
							t._constructed || (t.preventDefault(), t.stopPropagation())
					}
				}
			}, r.prototype = {
				handleEvent: function(t) {
					switch(t.type) {
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
						case "mousedown":
							this._start(t);
							break;
						case "touchmove":
						case "pointermove":
						case "MSPointerMove":
						case "mousemove":
							this._move(t);
							break;
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "pointercancel":
						case "MSPointerCancel":
						case "mousecancel":
							this._end(t)
					}
				},
				destroy: function() { this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(i, "touchmove", this), h.removeEvent(i, h.prefixPointerEvent("pointermove"), this), h.removeEvent(i, "mousemove", this), h.removeEvent(i, "touchend", this), h.removeEvent(i, h.prefixPointerEvent("pointerup"), this), h.removeEvent(i, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper) },
				_start: function(t) {
					var e = t.touches ? t.touches[0] : t;
					t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(i, "touchmove", this), this.options.disablePointer || h.addEvent(i, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(i, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
				},
				_move: function(t) {
					var i, e, n, s, o = t.touches ? t.touches[0] : t,
						r = h.getTime();
					this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, i = o.pageX - this.lastPointX, this.lastPointX = o.pageX, e = o.pageY - this.lastPointY, this.lastPointY = o.pageY, n = this.x + i, s = this.y + e, this._pos(n, s), 1 == this.scroller.options.probeType && r - this.startTime > 300 ? (this.startTime = r, this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"), t.preventDefault(), t.stopPropagation()
				},
				_end: function(t) {
					if(this.initiated) {
						if(this.initiated = !1, t.preventDefault(), t.stopPropagation(), h.removeEvent(i, "touchmove", this), h.removeEvent(i, h.prefixPointerEvent("pointermove"), this), h.removeEvent(i, "mousemove", this), this.scroller.options.snap) {
							var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
								s = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.scroller.x - e.x), 1e3), n.min(n.abs(this.scroller.y - e.y), 1e3)), 300);
							(this.scroller.x != e.x || this.scroller.y != e.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, s, this.scroller.options.bounceEasing))
						}
						this.moved && this.scroller._execEvent("scrollEnd")
					}
				},
				transitionTime: function(t) { t = t || 0, this.indicatorStyle[h.style.transitionDuration] = t + "ms", !t && h.isBadAndroid && (this.indicatorStyle[h.style.transitionDuration] = "0.001s") },
				transitionTimingFunction: function(t) { this.indicatorStyle[h.style.transitionTimingFunction] = t },
				refresh: function() {
					this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
					this.wrapper.offsetHeight;
					this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
				},
				updatePosition: function() {
					var t = this.options.listenX && n.round(this.sizeRatioX * this.scroller.x) || 0,
						i = this.options.listenY && n.round(this.sizeRatioY * this.scroller.y) || 0;
					this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = n.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = n.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), i < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = n.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px"), i = this.minBoundaryY) : i > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = n.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height) : i = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = i, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px")
				},
				_pos: function(t, i) { 0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX), 0 > i ? i = 0 : i > this.maxPosY && (i = this.maxPosY), t = this.options.listenX ? n.round(t / this.sizeRatioX) : this.scroller.x, i = this.options.listenY ? n.round(i / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, i) },
				fade: function(t, i) {
					if(!i || this.visible) {
						clearTimeout(this.fadeTimeout),
							this.fadeTimeout = null;
						var e = t ? 250 : 500,
							n = t ? 0 : 300;
						t = t ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = e + "ms", this.fadeTimeout = setTimeout(function(t) { this.wrapperStyle.opacity = t, this.visible = +t }.bind(this, t), n)
					}
				}
			}, s.utils = h, "undefined" != typeof t && t.exports ? t.exports = s : i.IScroll = s
		}(window, document, Math)
	}, function(t, i, e) { e(3), GridLayout = e(66), t.exports = wy.effect.GridLayout = GridLayout }, function(t, i, e) {
		var n, s, o;
		/*!
		 * Masonry v4.0.0
		 * Cascading grid layout library
		 * http://masonry.desandro.com
		 * MIT License
		 * by David DeSandro
		 */
		! function(r, a) { s = [e(67), e(69)], n = a, o = "function" == typeof n ? n.apply(i, s) : n, !(void 0 !== o && (t.exports = o)) }(window, function(t, i) {
			"use strict";
			var e = t.create("masonry");
			return e.compatOptions.fitWidth = "isFitWidth", e.prototype._resetLayout = function() {
				this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
				for(var t = 0; t < this.cols; t++) this.colYs.push(0);
				this.maxY = 0
			}, e.prototype.measureColumns = function() {
				if(this.getContainerWidth(), !this.columnWidth) {
					var t = this.items[0],
						e = t && t.element;
					this.columnWidth = e && i(e).outerWidth || this.containerWidth
				}
				var n = this.columnWidth += this.gutter,
					s = this.containerWidth + this.gutter,
					o = s / n,
					r = n - s % n,
					a = r && 1 > r ? "round" : "floor";
				o = Math[a](o), this.cols = Math.max(o, 1)
			}, e.prototype.getContainerWidth = function() {
				var t = this._getOption("fitWidth"),
					e = t ? this.element.parentNode : this.element,
					n = i(e);
				this.containerWidth = n && n.innerWidth
			}, e.prototype._getItemLayoutPosition = function(t) {
				t.getSize();
				var i = t.size.outerWidth % this.columnWidth,
					e = i && 1 > i ? "round" : "ceil",
					n = Math[e](t.size.outerWidth / this.columnWidth);
				n = Math.min(n, this.cols);
				for(var s = this._getColGroup(n), o = Math.min.apply(Math, s), r = s.indexOf(o), a = { x: this.columnWidth * r, y: o }, h = o + t.size.outerHeight, c = this.cols + 1 - s.length, l = 0; c > l; l++) this.colYs[r + l] = h;
				return a
			}, e.prototype._getColGroup = function(t) {
				if(2 > t) return this.colYs;
				for(var i = [], e = this.cols + 1 - t, n = 0; e > n; n++) {
					var s = this.colYs.slice(n, n + t);
					i[n] = Math.max.apply(Math, s)
				}
				return i
			}, e.prototype._manageStamp = function(t) {
				var e = i(t),
					n = this._getElementOffset(t),
					s = this._getOption("originLeft"),
					o = s ? n.left : n.right,
					r = o + e.outerWidth,
					a = Math.floor(o / this.columnWidth);
				a = Math.max(0, a);
				var h = Math.floor(r / this.columnWidth);
				h -= r % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
				for(var c = this._getOption("originTop"), l = (c ? n.top : n.bottom) + e.outerHeight, u = a; h >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
			}, e.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, e.prototype._getContainerFitWidth = function() { for(var t = 0, i = this.cols; --i && 0 === this.colYs[i];) t++; return(this.cols - t) * this.columnWidth - this.gutter }, e.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, e
		})
	}, function(t, i, e) {
		var n, s;
		/*!
		 * Outlayer v2.0.1
		 * the brains and guts of a layout library
		 * MIT license
		 */
		! function(o, r) {
			"use strict";
			n = [e(68), e(69), e(70), e(72)], s = function(t, i, e, n) { return r(o, t, i, e, n) }.apply(i, n), !(void 0 !== s && (t.exports = s))
		}(window, function(t, i, e, n, s) {
			"use strict";

			function o(t, i) {
				var e = n.getQueryElement(t);
				if(!e) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (e || t)));
				this.element = e, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(i);
				var s = ++l;
				this.element.outlayerGUID = s, u[s] = this, this._create();
				var o = this._getOption("initLayout");
				o && this.layout()
			}

			function r(t) {
				function i() { t.apply(this, arguments) }
				return i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i
			}
			var a = t.console,
				h = t.jQuery,
				c = function() {},
				l = 0,
				u = {};
			o.namespace = "outlayer", o.Item = s, o.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
			var p = o.prototype;
			return n.extend(p, i.prototype), p.option = function(t) { n.extend(this.options, t) }, p._getOption = function(t) { var i = this.constructor.compatOptions[t]; return i && void 0 !== this.options[i] ? this.options[i] : this.options[t] }, o.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, p._create = function() {
				this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
				var t = this._getOption("resize");
				t && this.bindResize()
			}, p.reloadItems = function() { this.items = this._itemize(this.element.children) }, p._itemize = function(t) {
				for(var i = this._filterFindItemElements(t), e = this.constructor.Item, n = [], s = 0; s < i.length; s++) {
					var o = i[s],
						r = new e(o, this);
					n.push(r)
				}
				return n
			}, p._filterFindItemElements = function(t) { return n.filterFindElements(t, this.options.itemSelector) }, p.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, p.layout = function() {
				this._resetLayout(), this._manageStamps();
				var t = this._getOption("layoutInstant"),
					i = void 0 !== t ? t : !this._isLayoutInited;
				this.layoutItems(this.items, i), this._isLayoutInited = !0
			}, p._init = p.layout, p._resetLayout = function() { this.getSize() }, p.getSize = function() { this.size = e(this.element) }, p._getMeasurement = function(t, i) {
				var n, s = this.options[t];
				s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[t] = n ? e(n)[i] : s) : this[t] = 0
			}, p.layoutItems = function(t, i) { t = this._getItemsForLayout(t), this._layoutItems(t, i), this._postLayout() }, p._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, p._layoutItems = function(t, i) {
				if(this._emitCompleteOnItems("layout", t), t && t.length) {
					var e = [];
					t.forEach(function(t) {
						var n = this._getItemLayoutPosition(t);
						n.item = t, n.isInstant = i || t.isLayoutInstant, e.push(n)
					}, this), this._processLayoutQueue(e)
				}
			}, p._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, p._processLayoutQueue = function(t) { t.forEach(function(t) { this._positionItem(t.item, t.x, t.y, t.isInstant) }, this) }, p._positionItem = function(t, i, e, n) { n ? t.goTo(i, e) : t.moveTo(i, e) }, p._postLayout = function() { this.resizeContainer() }, p.resizeContainer = function() {
				var t = this._getOption("resizeContainer");
				if(t) {
					var i = this._getContainerSize();
					i && (this._setContainerMeasure(i.width, !0), this._setContainerMeasure(i.height, !1))
				}
			}, p._getContainerSize = c, p._setContainerMeasure = function(t, i) {
				if(void 0 !== t) {
					var e = this.size;
					e.isBorderBox && (t += i ? e.paddingLeft + e.paddingRight + e.borderLeftWidth + e.borderRightWidth : e.paddingBottom + e.paddingTop + e.borderTopWidth + e.borderBottomWidth), t = Math.max(t, 0), this.element.style[i ? "width" : "height"] = t + "px"
				}
			}, p._emitCompleteOnItems = function(t, i) {
				function e() { s.dispatchEvent(t + "Complete", null, [i]) }

				function n() { r++, r == o && e() }
				var s = this,
					o = i.length;
				if(!i || !o) return void e();
				var r = 0;
				i.forEach(function(i) { i.once(t, n) })
			}, p.dispatchEvent = function(t, i, e) {
				var n = i ? [i].concat(e) : e;
				if(this.emitEvent(t, n), h)
					if(this.$element = this.$element || h(this.element), i) {
						var s = h.Event(i);
						s.type = t, this.$element.trigger(s, e)
					} else this.$element.trigger(t, e)
			}, p.ignore = function(t) {
				var i = this.getItem(t);
				i && (i.isIgnored = !0)
			}, p.unignore = function(t) {
				var i = this.getItem(t);
				i && delete i.isIgnored
			}, p.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, p.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, p._find = function(t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0 }, p._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, p._getBoundingRect = function() {
				var t = this.element.getBoundingClientRect(),
					i = this.size;
				this._boundingRect = { left: t.left + i.paddingLeft + i.borderLeftWidth, top: t.top + i.paddingTop + i.borderTopWidth, right: t.right - (i.paddingRight + i.borderRightWidth), bottom: t.bottom - (i.paddingBottom + i.borderBottomWidth) }
			}, p._manageStamp = c, p._getElementOffset = function(t) {
				var i = t.getBoundingClientRect(),
					n = this._boundingRect,
					s = e(t),
					o = { left: i.left - n.left - s.marginLeft, top: i.top - n.top - s.marginTop, right: n.right - i.right - s.marginRight, bottom: n.bottom - i.bottom - s.marginBottom };
				return o
			}, p.handleEvent = n.handleEvent, p.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, p.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, p.onresize = function() { this.resize() }, n.debounceMethod(o, "onresize", 100), p.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, p.needsResizeLayout = function() {
				var t = e(this.element),
					i = this.size && t;
				return i && t.innerWidth !== this.size.innerWidth
			}, p.addItems = function(t) { var i = this._itemize(t); return i.length && (this.items = this.items.concat(i)), i }, p.appended = function(t) {
				var i = this.addItems(t);
				i.length && (this.layoutItems(i, !0), this.reveal(i))
			}, p.prepended = function(t) {
				var i = this._itemize(t);
				if(i.length) {
					var e = this.items.slice(0);
					this.items = i.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(i, !0), this.reveal(i), this.layoutItems(e)
				}
			}, p.reveal = function(t) { this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach(function(t) { t.reveal() }) }, p.hide = function(t) { this._emitCompleteOnItems("hide", t), t && t.length && t.forEach(function(t) { t.hide() }) }, p.revealItemElements = function(t) {
				var i = this.getItems(t);
				this.reveal(i)
			}, p.hideItemElements = function(t) {
				var i = this.getItems(t);
				this.hide(i)
			}, p.getItem = function(t) { for(var i = 0; i < this.items.length; i++) { var e = this.items[i]; if(e.element == t) return e } }, p.getItems = function(t) {
				t = n.makeArray(t);
				var i = [];
				return t.forEach(function(t) {
					var e = this.getItem(t);
					e && i.push(e)
				}, this), i
			}, p.remove = function(t) {
				var i = this.getItems(t);
				this._emitCompleteOnItems("remove", i), i && i.length && i.forEach(function(t) { t.remove(), n.removeFrom(this.items, t) }, this)
			}, p.destroy = function() {
				var t = this.element.style;
				t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
				var i = this.element.outlayerGUID;
				delete u[i], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
			}, o.data = function(t) { t = n.getQueryElement(t); var i = t && t.outlayerGUID; return i && u[i] }, o.create = function(t, i) { var e = r(o); return e.defaults = n.extend({}, o.defaults), n.extend(e.defaults, i), e.compatOptions = n.extend({}, o.compatOptions), e.namespace = t, e.data = o.data, e.Item = r(s), n.htmlInit(e, t), h && h.bridget && h.bridget(t, e), e }, o.Item = s, o
		})
	}, function(t, i, e) {
		var n, s;
		! function(o, r) { n = r, s = "function" == typeof n ? n.call(i, e, i, t) : n, !(void 0 !== s && (t.exports = s)) }(this, function() {
			"use strict";

			function t() {}
			var i = t.prototype;
			return i.on = function(t, i) {
				if(t && i) {
					var e = this._events = this._events || {},
						n = e[t] = e[t] || [];
					return -1 == n.indexOf(i) && n.push(i), this
				}
			}, i.once = function(t, i) {
				if(t && i) {
					this.on(t, i);
					var e = this._onceEvents = this._onceEvents || {},
						n = e[t] = e[t] || {};
					return n[i] = !0, this
				}
			}, i.off = function(t, i) { var e = this._events && this._events[t]; if(e && e.length) { var n = e.indexOf(i); return -1 != n && e.splice(n, 1), this } }, i.emitEvent = function(t, i) {
				var e = this._events && this._events[t];
				if(e && e.length) {
					var n = 0,
						s = e[n];
					i = i || [];
					for(var o = this._onceEvents && this._onceEvents[t]; s;) {
						var r = o && o[s];
						r && (this.off(t, s), delete o[s]), s.apply(this, i), n += r ? 0 : 1, s = e[n]
					}
					return this
				}
			}, t
		})
	}, function(t, i, e) {
		var n;
		/*!
		 * getSize v2.0.2
		 * measure size of elements
		 * MIT license
		 */
		! function(s, o) {
			"use strict";
			n = function() { return o() }.call(i, e, i, t), !(void 0 !== n && (t.exports = n))
		}(window, function() {
			"use strict";

			function t(t) {
				var i = parseFloat(t),
					e = -1 == t.indexOf("%") && !isNaN(i);
				return e && i
			}

			function i() {}

			function e() {
				for(var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, i = 0; c > i; i++) {
					var e = h[i];
					t[e] = 0
				}
				return t
			}

			function n(t) { var i = getComputedStyle(t); return i || a("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i }

			function s() {
				if(!l) {
					l = !0;
					var i = document.createElement("div");
					i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
					var e = document.body || document.documentElement;
					e.appendChild(i);
					var s = n(i);
					o.isBoxSizeOuter = r = 200 == t(s.width), e.removeChild(i)
				}
			}

			function o(i) {
				if(s(), "string" == typeof i && (i = document.querySelector(i)), i && "object" == typeof i && i.nodeType) {
					var o = n(i);
					if("none" == o.display) return e();
					var a = {};
					a.width = i.offsetWidth, a.height = i.offsetHeight;
					for(var l = a.isBorderBox = "border-box" == o.boxSizing, u = 0; c > u; u++) {
						var p = h[u],
							d = o[p],
							f = parseFloat(d);
						a[p] = isNaN(f) ? 0 : f
					}
					var m = a.paddingLeft + a.paddingRight,
						g = a.paddingTop + a.paddingBottom,
						v = a.marginLeft + a.marginRight,
						_ = a.marginTop + a.marginBottom,
						y = a.borderLeftWidth + a.borderRightWidth,
						b = a.borderTopWidth + a.borderBottomWidth,
						x = l && r,
						w = t(o.width);
					w !== !1 && (a.width = w + (x ? 0 : m + y));
					var k = t(o.height);
					return k !== !1 && (a.height = k + (x ? 0 : g + b)), a.innerWidth = a.width - (m + y), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + v, a.outerHeight = a.height + _, a
				}
			}
			var r, a = "undefined" == typeof console ? i : function(t) { console.error(t) },
				h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
				c = h.length,
				l = !1;
			return o
		})
	}, function(t, i, e) {
		var n, s;
		! function(o, r) { n = [e(71)], s = function(t) { return r(o, t) }.apply(i, n), !(void 0 !== s && (t.exports = s)) }(window, function(t, i) {
			"use strict";
			var e = {};
			e.extend = function(t, i) { for(var e in i) t[e] = i[e]; return t }, e.modulo = function(t, i) { return(t % i + i) % i }, e.makeArray = function(t) {
				var i = [];
				if(Array.isArray(t)) i = t;
				else if(t && "number" == typeof t.length)
					for(var e = 0; e < t.length; e++) i.push(t[e]);
				else i.push(t);
				return i
			}, e.removeFrom = function(t, i) { var e = t.indexOf(i); - 1 != e && t.splice(e, 1) }, e.getParent = function(t, e) {
				for(; t != document.body;)
					if(t = t.parentNode, i(t, e)) return t
			}, e.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, e.handleEvent = function(t) {
				var i = "on" + t.type;
				this[i] && this[i](t)
			}, e.filterFindElements = function(t, n) {
				t = e.makeArray(t);
				var s = [];
				return t.forEach(function(t) {
					if(t instanceof HTMLElement) {
						if(!n) return void s.push(t);
						i(t, n) && s.push(t);
						for(var e = t.querySelectorAll(n), o = 0; o < e.length; o++) s.push(e[o])
					}
				}), s
			}, e.debounceMethod = function(t, i, e) {
				var n = t.prototype[i],
					s = i + "Timeout";
				t.prototype[i] = function() {
					var t = this[s];
					t && clearTimeout(t);
					var i = arguments,
						o = this;
					this[s] = setTimeout(function() { n.apply(o, i), delete o[s] }, e || 100)
				}
			}, e.docReady = function(t) { "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t) }, e.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, i, e) { return i + "-" + e }).toLowerCase() };
			var n = t.console;
			return e.htmlInit = function(i, s) {
				e.docReady(function() {
					var o = e.toDashed(s),
						r = "data-" + o,
						a = document.querySelectorAll("[" + r + "]"),
						h = document.querySelectorAll(".js-" + o),
						c = e.makeArray(a).concat(e.makeArray(h)),
						l = r + "-options",
						u = t.jQuery;
					c.forEach(function(t) {
						var e, o = t.getAttribute(r) || t.getAttribute(l);
						try { e = o && JSON.parse(o) } catch(a) { return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a)) }
						var h = new i(t, e);
						u && u.data(t, s, h)
					})
				})
			}, e
		})
	}, function(t, i, e) {
		var n, s;
		! function(o, r) {
			"use strict";
			n = r, s = "function" == typeof n ? n.call(i, e, i, t) : n, !(void 0 !== s && (t.exports = s))
		}(window, function() {
			"use strict";
			var t = function() {
				var t = Element.prototype;
				if(t.matches) return "matches";
				if(t.matchesSelector) return "matchesSelector";
				for(var i = ["webkit", "moz", "ms", "o"], e = 0; e < i.length; e++) {
					var n = i[e],
						s = n + "MatchesSelector";
					if(t[s]) return s
				}
			}();
			return function(i, e) { return i[t](e) }
		})
	}, function(t, i, e) {
		var n, s, o;
		! function(r, a) { s = [e(68), e(69)], n = a, o = "function" == typeof n ? n.apply(i, s) : n, !(void 0 !== o && (t.exports = o)) }(window, function(t, i) {
			"use strict";

			function e(t) { for(var i in t) return !1; return i = null, !0 }

			function n(t, i) { t && (this.element = t, this.layout = i, this.position = { x: 0, y: 0 }, this._create()) }

			function s(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }
			var o = document.documentElement.style,
				r = "string" == typeof o.transition ? "transition" : "WebkitTransition",
				a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
				h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
				c = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property" },
				l = n.prototype = Object.create(t.prototype);
			l.constructor = n, l._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, l.handleEvent = function(t) {
				var i = "on" + t.type;
				this[i] && this[i](t)
			}, l.getSize = function() { this.size = i(this.element) }, l.css = function(t) {
				var i = this.element.style;
				for(var e in t) {
					var n = c[e] || e;
					i[n] = t[e]
				}
			}, l.getPosition = function() {
				var t = getComputedStyle(this.element),
					i = this.layout._getOption("originLeft"),
					e = this.layout._getOption("originTop"),
					n = t[i ? "left" : "right"],
					s = t[e ? "top" : "bottom"],
					o = this.layout.size,
					r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.width : parseInt(n, 10),
					a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
				r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= i ? o.paddingLeft : o.paddingRight, a -= e ? o.paddingTop : o.paddingBottom, this.position.x = r, this.position.y = a
			}, l.layoutPosition = function() {
				var t = this.layout.size,
					i = {},
					e = this.layout._getOption("originLeft"),
					n = this.layout._getOption("originTop"),
					s = e ? "paddingLeft" : "paddingRight",
					o = e ? "left" : "right",
					r = e ? "right" : "left",
					a = this.position.x + t[s];
				i[o] = this.getXValue(a), i[r] = "";
				var h = n ? "paddingTop" : "paddingBottom",
					c = n ? "top" : "bottom",
					l = n ? "bottom" : "top",
					u = this.position.y + t[h];
				i[c] = this.getYValue(u), i[l] = "", this.css(i), this.emitEvent("layout", [this])
			}, l.getXValue = function(t) { var i = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !i ? t / this.layout.size.width * 100 + "%" : t + "px" }, l.getYValue = function(t) { var i = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && i ? t / this.layout.size.height * 100 + "%" : t + "px" }, l._transitionTo = function(t, i) {
				this.getPosition();
				var e = this.position.x,
					n = this.position.y,
					s = parseInt(t, 10),
					o = parseInt(i, 10),
					r = s === this.position.x && o === this.position.y;
				if(this.setPosition(t, i), r && !this.isTransitioning) return void this.layoutPosition();
				var a = t - e,
					h = i - n,
					c = {};
				c.transform = this.getTranslate(a, h), this.transition({ to: c, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
			}, l.getTranslate = function(t, i) {
				var e = this.layout._getOption("originLeft"),
					n = this.layout._getOption("originTop");
				return t = e ? t : -t, i = n ? i : -i, "translate3d(" + t + "px, " + i + "px, 0)"
			}, l.goTo = function(t, i) { this.setPosition(t, i), this.layoutPosition() }, l.moveTo = l._transitionTo, l.setPosition = function(t, i) { this.position.x = parseInt(t, 10), this.position.y = parseInt(i, 10) }, l._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for(var i in t.onTransitionEnd) t.onTransitionEnd[i].call(this) }, l.transition = function(t) {
				if(!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
				var i = this._transn;
				for(var e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
				for(e in t.to) i.ingProperties[e] = !0, t.isCleaning && (i.clean[e] = !0);
				if(t.from) {
					this.css(t.from);
					var n = this.element.offsetHeight;
					n = null
				}
				this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
			};
			var u = "opacity," + s(a);
			l.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: u, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(h, this, !1)) }, l.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, l.onotransitionend = function(t) { this.ontransitionend(t) };
			var p = { "-webkit-transform": "transform" };
			l.ontransitionend = function(t) {
				if(t.target === this.element) {
					var i = this._transn,
						n = p[t.propertyName] || t.propertyName;
					if(delete i.ingProperties[n], e(i.ingProperties) && this.disableTransition(), n in i.clean && (this.element.style[t.propertyName] = "", delete i.clean[n]), n in i.onEnd) {
						var s = i.onEnd[n];
						s.call(this), delete i.onEnd[n]
					}
					this.emitEvent("transitionEnd", [this])
				}
			}, l.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1 }, l._removeStyles = function(t) {
				var i = {};
				for(var e in t) i[e] = "";
				this.css(i)
			};
			var d = { transitionProperty: "", transitionDuration: "" };
			return l.removeTransitionStyles = function() { this.css(d) }, l.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, l.remove = function() { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, l.reveal = function() {
				delete this.isHidden, this.css({ display: "" });
				var t = this.layout.options,
					i = {},
					e = this.getHideRevealTransitionEndProperty("visibleStyle");
				i[e] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: i })
			}, l.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, l.getHideRevealTransitionEndProperty = function(t) { var i = this.layout.options[t]; if(i.opacity) return "opacity"; for(var e in i) return e }, l.hide = function() {
				this.isHidden = !0, this.css({ display: "" });
				var t = this.layout.options,
					i = {},
					e = this.getHideRevealTransitionEndProperty("hiddenStyle");
				i[e] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: i })
			}, l.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, l.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n
		})
	}, function(t, i, e) {
		function n(t, i) {
			var e = { basePath: "", frames: [], startFrameIndex: 0, reverse: !1, auto: !0, interval: 100, size: "cover", onLoadCompleted: null, onPlay: null, onPause: null, onPlayCompleted: null, onUpdate: null };
			this.$el = t, this.options = $.extend(e, i), this.loader = null, this.$wrapper = null, this.$img = null, this.frames = [], this.currentFrameIndex = 0, this.totalFrames = this.options.frames.length, this.seedId = 0, this.lastTime = 0, this.tick = 0, this.interval = 0, this.playing = !1, this.reverse = this.options.reverse, this.repeat = -1, this.to = -1, this.by = -1, this._init()
		}
		e(3);
		var s = e(10),
			o = e(9),
			r = e(27),
			a = o.requestAnimationFrame,
			h = o.cancelAnimationFrame;
		n.prototype = {
			constructor: n,
			_init: function() { this.$img = $("<img alt='image'>").css("position", "absolute"), this.$wrapper = $("<div>").attr("name", "imageMovieWrapper").css("position", "relative").css("overflow", "hidden").width(this.$el.width()).height(this.$el.height()).append(this.$img), this.$el.append(this.$wrapper), this._load() },
			_load: function() {
				var t = this.options.basePath,
					i = new s;
				this.options.frames.forEach(function(e) { i.add(e, t + e) }), i.on("complete", this._loadComplete.bind(this)), i.load(), this.loader = i
			},
			_loadComplete: function() {
				var t, i = this,
					e = this.loader.resources;
				this.options.frames.forEach(function(t) { i.frames.push(e[t].data) }), t = new r(this.$wrapper.width(), this.$wrapper.height(), this.frames[0].naturalWidth, this.frames[0].naturalHeight, { type: this.options.size }), this.$img.css("left", t.offset().left + "px").css("top", t.offset().top + "px").width(t.newWidth()).height(t.newHeight()), this.options.onLoadCompleted && this.options.onLoadCompleted(), this.options.auto ? this.play() : this._setFrame(this.options.startFrameIndex)
			},
			_setFrame: function(t) { 0 > t ? t -= Math.floor(t / this.totalFrames) * this.totalFrames : t %= this.totalFrames, this.currentFrameIndex = t, this.$img[0].src = this.frames[t].src, this.options.onUpdate && this.options.onUpdate() },
			_loop: function(t) { var i = !1; return this.seedId = a(this._loop.bind(this)), t - this.lastTime > this.interval && (this.reverse ? this.prev() : this.next(), this.lastTime = t, this.tick++, this.repeat > 0 && this.tick / this.totalFrames === this.repeat && (i = !0), this.to > -1 && this.currentFrameIndex === this.to && (i = !0), this.by > -1 && this.tick === this.by && (i = !0)), i ? (this.pause(), void(this.options.onPlayCompleted && this.options.onPlayCompleted())) : void 0 },
			play: function(t) {
				this.playing && this.pause();
				var i = { reverse: this.options.reverse, interval: this.options.interval },
					e = $.extend(i, t);
				this.interval = e.interval, this.reverse = e.reverse, this.lastTime = 0, this.seedId = a(this._loop.bind(this)), this.playing = !0, this.options.onPlay && this.options.onPlay()
			},
			repeatPlay: function(t) { this.playing && this.pause(), "object" == typeof t ? this.repeat = t.repeat : this.repeat = t, this.play(t) },
			playTo: function(t) { this.playing && this.pause(), "object" == typeof t ? this.to = t.to % this.options.frames.length : this.to = t % this.options.frames.length, this.play(t) },
			playBy: function(t) { this.playing && this.pause(), "object" == typeof t ? this.by = t.by : this.by = t, this.play(t) },
			pause: function() { this.playing && (h(this.seedId), this.playing = !1, this.tick = 0, this.repeat = -1, this.to = -1, this.by = -1, this.options.onPause && this.options.onPause()) },
			go: function(t) { return 0 > t ? void console.error(t + " is a wrong index") : void this._setFrame(t % this.options.frames.length) },
			next: function() { this._setFrame(this.currentFrameIndex + 1) },
			prev: function() { this._setFrame(this.currentFrameIndex - 1) },
			currentIndex: function() { return this.currentFrameIndex },
			nextIndex: function() { return this._nextFrameIndex() },
			prevIndex: function() { return this._prevFrameIndex() },
			destroy: function() { this.pause(), this.loader = null, this.frames.forEach(function(t) { t = null }), this.frames = [] }
		}, t.exports = wy.effect.ImageMovie = n
	}, function(t, i, e) {
		function n() { if(c) return c; for(var t in p) c++; return c }

		function s() { if(l.length > 0) return l; for(var t in p) l.push({ code: t, desc: p[t].desc, img: p[t].img }); return l }

		function o() {
			if(u) return u;
			u = {};
			for(var t in p) u[p[t].desc] = { code: t, img: p[t].img };
			return u
		}

		function r(t, i) {
			var e = { inputSelector: "", size: [3, 7], width: "", height: "", basePath: "assets/images/emoji/", emojiClass: "emoji", onSelected: null };
			this.options = $.extend(e, i), this.$el = t, this.$wrapper = null, this.$input = $(this.options.inputSelector), this.scroller = null, this.pageSize = this.options.size[0] * this.options.size[1], this.pageCount = Math.ceil(n() / this.pageSize), this._init()
		}
		e(3);
		var a = e(75),
			h = /\[([\S]+?)\]/g,
			c = 0,
			l = [],
			u = null,
			p = { "/::)": { desc: "å¾®ç¬‘", img: "001" }, "/::~": { desc: "ä¼¤å¿ƒ", img: "002" }, "/::B": { desc: "ç¾Žå¥³", img: "003" }, "/::|": { desc: "å‘å‘†", img: "004" }, "/:8-)": { desc: "å¢¨é•œ", img: "005" }, "/::<": { desc: "å“­", img: "006" }, "/::$": { desc: "ç¾ž", img: "007" }, "/::X": { desc: "å“‘", img: "008" }, "/::Z": { desc: "ç¡", img: "009" }, "/::â€™(": { desc: "æµæ³ª", img: "010" }, "/::-|": { desc: "å›§", img: "011" }, "/::@": { desc: "æ€’", img: "012" }, "/::P": { desc: "è°ƒçš®", img: "013" }, "/::D": { desc: "æ‚å˜´", img: "014" }, "/::O": { desc: "æƒŠè®¶", img: "015" }, "/::(": { desc: "éš¾è¿‡", img: "016" }, "/::+": { desc: "é…·", img: "017" }, "/:â€“b": { desc: "è„¸çº¢", img: "018" }, "/::Q": { desc: "æŠ“ç‹‚", img: "019" }, "/::T": { desc: "å", img: "020" }, "/:,@P": { desc: "ç¬‘", img: "021" }, "/:,@-D": { desc: "å¿«ä¹", img: "022" }, "/::d": { desc: "å¥‡", img: "023" }, "/:,@o": { desc: "å‚²", img: "024" }, "/::g": { desc: "é¥¿", img: "025" }, "/:|-)": { desc: "ç´¯", img: "026" }, "/::!": { desc: "å“", img: "027" }, "/::L": { desc: "æ— è¯­", img: "028" }, "/::>": { desc: "é«˜å…´", img: "029" }, "/::,@": { desc: "é—²", img: "030" }, "/:,@f": { desc: "åŠªåŠ›", img: "031" }, "/::-S": { desc: "éª‚", img: "032" }, "/:?": { desc: "ç–‘é—®", img: "033" }, "/:,@x": { desc: "ç§˜å¯†", img: "034" }, "/:,@@": { desc: "ä¹±", img: "035" }, "/::8": { desc: "ç–¯", img: "036" }, "/:,@!": { desc: "å“€", img: "037" }, "/:!!!": { desc: "é¬¼", img: "038" }, "/:xx": { desc: "æ‰“å‡»", img: "039" }, "/:bye": { desc: "bye", img: "040" }, "/:wipe": { desc: "æ±—", img: "041" }, "/:dig": { desc: "æŠ ", img: "042" }, "/:handclap": { desc: "é¼“æŽŒ", img: "043" }, "/:&-(": { desc: "ç³Ÿç³•", img: "044" }, "/:B-)": { desc: "æ¶æž", img: "045" }, "/:<@": { desc: "ä»€ä¹ˆ(å·¦)", img: "046" }, "/:@>": { desc: "ä»€ä¹ˆ(å³)", img: "047" }, "/::-O": { desc: "å“ˆæ¬ ", img: "048" }, "/:>-|": { desc: "çœ‹", img: "049" }, "/:P-(": { desc: "æ²®ä¸§", img: "050" }, "/::â€™|": { desc: "æ‚²ä¼¤", img: "051" }, "/:X-)": { desc: "åç¬‘", img: "052" }, "/::*": { desc: "äº²", img: "053" }, "/:@x": { desc: "çžªçœ¼", img: "054" }, "/:8*": { desc: "å¯æ€œ", img: "055" }, "/:pd": { desc: "èœåˆ€", img: "056" }, "/:<W>": { desc: "æ°´æžœ", img: "057" }, "/:beer": { desc: "é…’", img: "058" }, "/:basketb": { desc: "ç¯®çƒ", img: "059" }, "/:oo": { desc: "ä¹’ä¹“", img: "060" }, "/:coffee": { desc: "å’–å•¡", img: "061" }, "/:eat": { desc: "ç¾Žé£Ÿ", img: "062" }, "/:pig": { desc: "åŠ¨ç‰©", img: "063" }, "/:rose": { desc: "é²œèŠ±", img: "064" }, "/:fade": { desc: "æž¯", img: "065" }, "/:showlove": { desc: "å”‡", img: "066" }, "/:heart": { desc: "çˆ±å¿ƒ", img: "067" }, "/:break": { desc: "åˆ†æ‰‹", img: "068" }, "/:cake": { desc: "ç”Ÿæ—¥", img: "069" }, "/:li": { desc: "ç”µ", img: "070" }, "/:bome": { desc: "ç‚¸å¼¹", img: "071" }, "/:kn": { desc: "åˆ€", img: "072" }, "/:footb": { desc: "è¶³çƒ", img: "073" }, "/:ladybug": { desc: "è™«", img: "074" }, "/:shit": { desc: "è‡­", img: "075" }, "/:moon": { desc: "æœˆäº®", img: "076" }, "/:sun": { desc: "å¤ªé˜³", img: "077" }, "/:gift": { desc: "ç¤¼ç‰©", img: "078" }, "/:hug": { desc: "ä¼™ä¼´", img: "079" }, "/:strong": { desc: "èµž", img: "080" }, "/:weak": { desc: "å·®", img: "081" }, "/:share": { desc: "æ¡æ‰‹", img: "082" }, "/:v": { desc: "ä¼˜", img: "083" }, "/:@)": { desc: "æ­", img: "084" }, "/:jj": { desc: "å‹¾", img: "085" }, "/:@@": { desc: "é¡¶", img: "086" }, "/:bad": { desc: "å°æ‹‡æŒ‡", img: "087" }, "/:lvu": { desc: "yo", img: "088" }, "/:no": { desc: "ä¸", img: "089" }, "/:ok": { desc: "å¥½çš„", img: "090" }, "/:love": { desc: "çˆ±", img: "091" }, "/:<L>": { desc: "å»", img: "092" }, "/:jump": { desc: "è·³", img: "093" }, "/:shake": { desc: "æ€•", img: "094" }, "/:<O>": { desc: "å°–å«", img: "095" }, "/:circle": { desc: "åœˆ", img: "096" }, "/:kotow": { desc: "æ‹œ", img: "097" }, "/:turn": { desc: "å›žå¤´", img: "098" }, "/:#-0": { desc: "æ¿€åŠ¨", img: "101" }, "/:kiss": { desc: "å¥‹æ–—", img: "103" }, "/:<&": { desc: "ç‘œä¼½", img: "104" }, "/:&>": { desc: "å¤ªæž", img: "105" } };
		r.prototype = {
			constructor: r,
			_init: function() {
				$.fn.insertAtCaret || ($.fn.insertAtCaret = function(t) {
					return this.each(function() {
						var i = this;
						if(i.selectionStart || "0" == i.selectionStart) {
							var e = i.selectionStart,
								n = i.selectionEnd,
								s = i.scrollTop;
							i.value = i.value.substring(0, e) + t + i.value.substring(n, i.value.length), i.selectionStart = e + t.length, i.selectionEnd = e + t.length, i.scrollTop = s
						} else i.value += t
					})
				}), this._styleContainer(), this._createPages(), this._initScroller()
			},
			_styleContainer: function() { this.$el.css("position", "relative").css("overflow", "hidden"), this.options.width && this.$el.width(this.options.width), this.options.height && this.$el.height(this.options.height), this.$wrapper = $("<div>").width(this.$el.width() * this.pageCount).height(this.$el.height()), this.$el.append(this.$wrapper) },
			_initScroller: function() { this.scroller = new a(this.$el[0], { scrollX: !0, scrollY: !1, snap: !0, momentum: !1, tap: !0 }) },
			_createPages: function() { for(var t = 0; t < this.pageCount; t++) this._createPage(t) },
			_createPage: function(t) {
				for(var i, e, n, o, r, a = $("<table>").attr("border", "0").attr("cellspacing", "0").attr("cellpadding", "0").css("float", "left").width(this.$el.width()).height(this.$el.height()).append($("<tbody>")), h = this.options.size[0], c = this.options.size[1], l = s(), u = this, p = 0; h > p; p++) {
					i = $("<tr>");
					for(var d = 0; c > d; d++) r = p * c + d + t * this.pageSize, r > l.length - 1 || (o = l[r], e = $("<td>").css("text-align", "center").on("tap", function(t) { return function() { u._insertEmoji(t) } }(o)), n = this._createEmojiImg(o), e.append(n), i.append(e));
					a.append(i)
				}
				this.$wrapper.append(a)
			},
			_createEmojiImg: function(t) { return $("<img alt='image'>").addClass(this.options.emojiClass).attr("src", this.options.basePath + t.img + ".png") },
			_insertEmoji: function(t) { this.$input.attr("readonly", !0), this.$input.insertAtCaret("[" + t.desc + "]"), this.$input.attr("readonly", !1), this.options.onSelected && this.options.onSelected(t) },
			toImage: function(t) { for(var i, e, n, s = "", r = o(); i = h.exec(t);) s = i[1], i = i[0], e = r[s], e && (n = this._createEmojiImg(e), t = t.replace(i, n[0].outerHTML)), console.log(i, s, e, n); return t }
		}, t.exports = wy.effect.EmojiSelector = r
	}, function(t, i) { /*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
		! function(i, e, n) {
			function s(t, i) {
				this.wrapper = "string" == typeof t ? e.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0 };
				for(var n in i) this.options[n] = i[n];
				this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
			}

			function o(t, i, n) {
				var s = e.createElement("div"),
					o = e.createElement("div");
				return n === !0 && (s.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), o.className = "iScrollIndicator", "h" == t ? (n === !0 && (s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%"), s.className = "iScrollHorizontalScrollbar") : (n === !0 && (s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%"), s.className = "iScrollVerticalScrollbar"), s.style.cssText += ";overflow:hidden", i || (s.style.pointerEvents = "none"), s.appendChild(o), s
			}

			function r(t, n) {
				this.wrapper = "string" == typeof n.el ? e.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 };
				for(var s in n) this.options[s] = n[s];
				this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(i, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(i, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(i, "mouseup", this))), this.options.fade && (this.wrapperStyle[h.style.transform] = this.scroller.translateZ, this.wrapperStyle[h.style.transitionDuration] = h.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
			}
			var a = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.oRequestAnimationFrame || i.msRequestAnimationFrame || function(t) { i.setTimeout(t, 1e3 / 60) },
				h = function() {
					function t(t) { return r === !1 ? !1 : "" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1) }
					var s = {},
						o = e.createElement("div").style,
						r = function() {
							for(var t, i = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, n = i.length; n > e; e++)
								if(t = i[e] + "ransform", t in o) return i[e].substr(0, i[e].length - 1);
							return !1
						}();
					s.getTime = Date.now || function() { return(new Date).getTime() }, s.extend = function(t, i) { for(var e in i) t[e] = i[e] }, s.addEvent = function(t, i, e, n) { t.addEventListener(i, e, !!n) }, s.removeEvent = function(t, i, e, n) { t.removeEventListener(i, e, !!n) }, s.prefixPointerEvent = function(t) { return i.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t }, s.momentum = function(t, i, e, s, o, r) {
						var a, h, c = t - i,
							l = n.abs(c) / e;
						return r = void 0 === r ? 6e-4 : r, a = t + l * l / (2 * r) * (0 > c ? -1 : 1), h = l / r, s > a ? (a = o ? s - o / 2.5 * (l / 8) : s, c = n.abs(a - t), h = c / l) : a > 0 && (a = o ? o / 2.5 * (l / 8) : 0, c = n.abs(t) + a, h = c / l), { destination: n.round(a), duration: h }
					};
					var a = t("transform");
					return s.extend(s, { hasTransform: a !== !1, hasPerspective: t("perspective") in o, hasTouch: "ontouchstart" in i, hasPointer: i.PointerEvent || i.MSPointerEvent, hasTransition: t("transition") in o }), s.isBadAndroid = /Android /.test(i.navigator.appVersion) && !/Chrome\/\d/.test(i.navigator.appVersion), s.extend(s.style = {}, { transform: a, transitionTimingFunction: t("transitionTimingFunction"), transitionDuration: t("transitionDuration"), transitionDelay: t("transitionDelay"), transformOrigin: t("transformOrigin") }), s.hasClass = function(t, i) { var e = new RegExp("(^|\\s)" + i + "(\\s|$)"); return e.test(t.className) }, s.addClass = function(t, i) {
						if(!s.hasClass(t, i)) {
							var e = t.className.split(" ");
							e.push(i), t.className = e.join(" ")
						}
					}, s.removeClass = function(t, i) {
						if(s.hasClass(t, i)) {
							var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
							t.className = t.className.replace(e, " ")
						}
					}, s.offset = function(t) { for(var i = -t.offsetLeft, e = -t.offsetTop; t = t.offsetParent;) i -= t.offsetLeft, e -= t.offsetTop; return { left: i, top: e } }, s.preventDefaultException = function(t, i) {
						for(var e in i)
							if(i[e].test(t[e])) return !0;
						return !1
					}, s.extend(s.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), s.extend(s.ease = {}, {
						quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function(t) { return t * (2 - t) } },
						circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function(t) { return n.sqrt(1 - --t * t) } },
						back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function(t) { var i = 4; return(t -= 1) * t * ((i + 1) * t + i) + 1 } },
						bounce: { style: "", fn: function(t) { return(t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 } },
						elastic: {
							style: "",
							fn: function(t) {
								var i = .22,
									e = .4;
								return 0 === t ? 0 : 1 == t ? 1 : e * n.pow(2, -10 * t) * n.sin((t - i / 4) * (2 * n.PI) / i) + 1
							}
						}
					}), s.tap = function(t, i) {
						var n = e.createEvent("Event");
						n.initEvent(i, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
					}, s.click = function(t) { var i, n = t.target; /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (i = e.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), i._constructed = !0, n.dispatchEvent(i)) }, s
				}();
			s.prototype = {
				version: "5.1.3",
				_init: function() { this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys() },
				destroy: function() { this._initEvents(!0), this._execEvent("destroy") },
				_transitionEnd: function(t) { t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd"))) },
				_start: function(t) {
					if((1 == h.eventType[t.type] || 0 === t.button) && this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
						!this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
						var i, e = t.touches ? t.touches[0] : t;
						this.initiated = h.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, i = this.getComputedPosition(), this._translate(n.round(i.x), n.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this._execEvent("beforeScrollStart")
					}
				},
				_move: function(t) {
					if(this.enabled && h.eventType[t.type] === this.initiated) {
						this.options.preventDefault && t.preventDefault();
						var i, e, s, o, r = t.touches ? t.touches[0] : t,
							a = r.pageX - this.pointX,
							c = r.pageY - this.pointY,
							l = h.getTime();
						if(this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += c, s = n.abs(this.distX), o = n.abs(this.distY), !(l - this.endTime > 300 && 10 > s && 10 > o)) {
							if(this.directionLocked || this.options.freeScroll || (s > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= s + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
								if("vertical" == this.options.eventPassthrough) t.preventDefault();
								else if("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
								c = 0
							} else if("v" == this.directionLocked) {
								if("horizontal" == this.options.eventPassthrough) t.preventDefault();
								else if("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
								a = 0
							}
							a = this.hasHorizontalScroll ? a : 0, c = this.hasVerticalScroll ? c : 0, i = this.x + a, e = this.y + c, (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX), (e > 0 || e < this.maxScrollY) && (e = this.options.bounce ? this.y + c / 3 : e > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : 0 > a ? 1 : 0, this.directionY = c > 0 ? -1 : 0 > c ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(i, e), l - this.startTime > 300 && (this.startTime = l, this.startX = this.x, this.startY = this.y)
						}
					}
				},
				_end: function(t) {
					if(this.enabled && h.eventType[t.type] === this.initiated) {
						this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
						var i, e, s = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime),
							o = n.round(this.x),
							r = n.round(this.y),
							a = n.abs(o - this.startX),
							c = n.abs(r - this.startY),
							l = 0,
							u = "";
						if(this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
							if(this.scrollTo(o, r), !this.moved) return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
							if(this._events.flick && 200 > s && 100 > a && 100 > c) return void this._execEvent("flick");
							if(this.options.momentum && 300 > s && (i = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: o, duration: 0 }, e = this.hasVerticalScroll ? h.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: r, duration: 0 }, o = i.destination, r = e.destination, l = n.max(i.duration, e.duration), this.isInTransition = 1), this.options.snap) {
								var p = this._nearestSnap(o, r);
								this.currentPage = p, l = this.options.snapSpeed || n.max(n.max(n.min(n.abs(o - p.x), 1e3), n.min(n.abs(r - p.y), 1e3)), 300), o = p.x, r = p.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
							}
							return o != this.x || r != this.y ? ((o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = h.ease.quadratic), void this.scrollTo(o, r, l, u)) : void this._execEvent("scrollEnd")
						}
					}
				},
				_resize: function() {
					var t = this;
					clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() { t.refresh() }, this.options.resizePolling)
				},
				resetPosition: function(t) {
					var i = this.x,
						e = this.y;
					return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? i = 0 : this.x < this.maxScrollX && (i = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? e = 0 : this.y < this.maxScrollY && (e = this.maxScrollY), i == this.x && e == this.y ? !1 : (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
				},
				disable: function() { this.enabled = !1 },
				enable: function() { this.enabled = !0 },
				refresh: function() {
					this.wrapper.offsetHeight;
					this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
				},
				on: function(t, i) { this._events[t] || (this._events[t] = []), this._events[t].push(i) },
				off: function(t, i) {
					if(this._events[t]) {
						var e = this._events[t].indexOf(i);
						e > -1 && this._events[t].splice(e, 1)
					}
				},
				_execEvent: function(t) {
					if(this._events[t]) {
						var i = 0,
							e = this._events[t].length;
						if(e)
							for(; e > i; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1))
					}
				},
				scrollBy: function(t, i, e, n) { t = this.x + t, i = this.y + i, e = e || 0, this.scrollTo(t, i, e, n) },
				scrollTo: function(t, i, e, n) { n = n || h.ease.circular, this.isInTransition = this.options.useTransition && e > 0, !e || this.options.useTransition && n.style ? (this._transitionTimingFunction(n.style), this._transitionTime(e), this._translate(t, i)) : this._animate(t, i, e, n.fn) },
				scrollToElement: function(t, i, e, s, o) {
					if(t = t.nodeType ? t : this.scroller.querySelector(t)) {
						var r = h.offset(t);
						r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, e === !0 && (e = n.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), s === !0 && (s = n.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= e || 0, r.top -= s || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, i = void 0 === i || null === i || "auto" === i ? n.max(n.abs(this.x - r.left), n.abs(this.y - r.top)) : i, this.scrollTo(r.left, r.top, i, o)
					}
				},
				_transitionTime: function(t) {
					if(t = t || 0, this.scrollerStyle[h.style.transitionDuration] = t + "ms", !t && h.isBadAndroid && (this.scrollerStyle[h.style.transitionDuration] = "0.001s"), this.indicators)
						for(var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t)
				},
				_transitionTimingFunction: function(t) {
					if(this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators)
						for(var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(t)
				},
				_translate: function(t, i) {
					if(this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = n.round(t), i = n.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.x = t, this.y = i, this.indicators)
						for(var e = this.indicators.length; e--;) this.indicators[e].updatePosition()
				},
				_initEvents: function(t) {
					var e = t ? h.removeEvent : h.addEvent,
						n = this.options.bindToWrapper ? this.wrapper : i;
					e(i, "orientationchange", this), e(i, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(n, "mousemove", this), e(n, "mousecancel", this), e(n, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this), e(n, h.prefixPointerEvent("pointermove"), this), e(n, h.prefixPointerEvent("pointercancel"), this), e(n, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(n, "touchmove", this), e(n, "touchcancel", this), e(n, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
				},
				getComputedPosition: function() { var t, e, n = i.getComputedStyle(this.scroller, null); return this.options.useTransform ? (n = n[h.style.transform].split(")")[0].split(", "), t = +(n[12] || n[4]), e = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""), e = +n.top.replace(/[^-\d.]/g, "")), { x: t, y: e } },
				_initIndicators: function() {
					function t(t) { for(var i = a.indicators.length; i--;) t.call(a.indicators[i]) }
					var i, e = this.options.interactiveScrollbars,
						n = "string" != typeof this.options.scrollbars,
						s = [],
						a = this;
					this.indicators = [], this.options.scrollbars && (this.options.scrollY && (i = { el: o("v", e, this.options.scrollbars), interactive: e, defaultScrollbars: !0, customStyle: n, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(i.el), s.push(i)), this.options.scrollX && (i = { el: o("h", e, this.options.scrollbars), interactive: e, defaultScrollbars: !0, customStyle: n, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(i.el), s.push(i))), this.options.indicators && (s = s.concat(this.options.indicators));
					for(var h = s.length; h--;) this.indicators.push(new r(this, s[h]));
					this.options.fadeScrollbars && (this.on("scrollEnd", function() { t(function() { this.fade() }) }), this.on("scrollCancel", function() { t(function() { this.fade() }) }), this.on("scrollStart", function() { t(function() { this.fade(1) }) }), this.on("beforeScrollStart", function() { t(function() { this.fade(1, !0) }) })), this.on("refresh", function() { t(function() { this.refresh() }) }), this.on("destroy", function() { t(function() { this.destroy() }), delete this.indicators })
				},
				_initWheel: function() { h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() { h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this) }) },
				_wheel: function(t) {
					if(this.enabled) {
						t.preventDefault(), t.stopPropagation();
						var i, e, s, o, r = this;
						if(void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() { r._execEvent("scrollEnd"), r.wheelTimeout = void 0 }, 400), "deltaX" in t) 1 === t.deltaMode ? (i = -t.deltaX * this.options.mouseWheelSpeed, e = -t.deltaY * this.options.mouseWheelSpeed) : (i = -t.deltaX, e = -t.deltaY);
						else if("wheelDeltaX" in t) i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, e = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
						else if("wheelDelta" in t) i = e = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
						else {
							if(!("detail" in t)) return;
							i = e = -t.detail / 3 * this.options.mouseWheelSpeed
						}
						if(i *= this.options.invertWheelDirection, e *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = e, e = 0), this.options.snap) return s = this.currentPage.pageX, o = this.currentPage.pageY, i > 0 ? s-- : 0 > i && s++, e > 0 ? o-- : 0 > e && o++, void this.goToPage(s, o);
						s = this.x + n.round(this.hasHorizontalScroll ? i : 0), o = this.y + n.round(this.hasVerticalScroll ? e : 0), s > 0 ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX), o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(s, o, 0)
					}
				},
				_initSnap: function() {
					this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
						var t, i, e, s, o, r, a = 0,
							h = 0,
							c = 0,
							l = this.options.snapStepX || this.wrapperWidth,
							u = this.options.snapStepY || this.wrapperHeight;
						if(this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
							if(this.options.snap === !0)
								for(e = n.round(l / 2), s = n.round(u / 2); c > -this.scrollerWidth;) {
									for(this.pages[a] = [], t = 0, o = 0; o > -this.scrollerHeight;) this.pages[a][t] = { x: n.max(c, this.maxScrollX), y: n.max(o, this.maxScrollY), width: l, height: u, cx: c - e, cy: o - s }, o -= u, t++;
									c -= l, a++
								} else
									for(r = this.options.snap, t = r.length, i = -1; t > a; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (h = 0, i++), this.pages[h] || (this.pages[h] = []), c = n.max(-r[a].offsetLeft, this.maxScrollX), o = n.max(-r[a].offsetTop, this.maxScrollY), e = c - n.round(r[a].offsetWidth / 2), s = o - n.round(r[a].offsetHeight / 2), this.pages[h][i] = { x: c, y: o, width: r[a].offsetWidth, height: r[a].offsetHeight, cx: e, cy: s }, c > this.maxScrollX && h++;
							this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
						}
					}), this.on("flick", function() {
						var t = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300);
						this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
					})
				},
				_nearestSnap: function(t, i) {
					if(!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
					var e = 0,
						s = this.pages.length,
						o = 0;
					if(n.abs(t - this.absStartX) < this.snapThresholdX && n.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
					for(t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY); s > e; e++)
						if(t >= this.pages[e][0].cx) { t = this.pages[e][0].x; break }
					for(s = this.pages[e].length; s > o; o++)
						if(i >= this.pages[0][o].cy) { i = this.pages[0][o].y; break }
					return e == this.currentPage.pageX && (e += this.directionX, 0 > e ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1), t = this.pages[e][0].x), o == this.currentPage.pageY && (o += this.directionY, 0 > o ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), i = this.pages[0][o].y), { x: t, y: i, pageX: e, pageY: o }
				},
				goToPage: function(t, i, e, s) {
					s = s || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0), i >= this.pages[t].length ? i = this.pages[t].length - 1 : 0 > i && (i = 0);
					var o = this.pages[t][i].x,
						r = this.pages[t][i].y;
					e = void 0 === e ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(o - this.x), 1e3), n.min(n.abs(r - this.y), 1e3)), 300) : e, this.currentPage = { x: o, y: r, pageX: t, pageY: i }, this.scrollTo(o, r, e, s)
				},
				next: function(t, i) {
					var e = this.currentPage.pageX,
						n = this.currentPage.pageY;
					e++, e >= this.pages.length && this.hasVerticalScroll && (e = 0, n++), this.goToPage(e, n, t, i)
				},
				prev: function(t, i) {
					var e = this.currentPage.pageX,
						n = this.currentPage.pageY;
					e--, 0 > e && this.hasVerticalScroll && (e = 0, n--), this.goToPage(e, n, t, i)
				},
				_initKeys: function(t) {
					var e, n = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
					if("object" == typeof this.options.keyBindings)
						for(e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
					else this.options.keyBindings = {};
					for(e in n) this.options.keyBindings[e] = this.options.keyBindings[e] || n[e];
					h.addEvent(i, "keydown", this), this.on("destroy", function() { h.removeEvent(i, "keydown", this) })
				},
				_key: function(t) {
					if(this.enabled) {
						var i, e = this.options.snap,
							s = e ? this.currentPage.pageX : this.x,
							o = e ? this.currentPage.pageY : this.y,
							r = h.getTime(),
							a = this.keyTime || 0,
							c = .25;
						switch(this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(n.round(i.x), n.round(i.y)), this.isInTransition = !1), this.keyAcceleration = 200 > r - a ? n.min(this.keyAcceleration + c, 50) : 0, t.keyCode) {
							case this.options.keyBindings.pageUp:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? s += e ? 1 : this.wrapperWidth : o += e ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.pageDown:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= e ? 1 : this.wrapperWidth : o -= e ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.end:
								s = e ? this.pages.length - 1 : this.maxScrollX, o = e ? this.pages[0].length - 1 : this.maxScrollY;
								break;
							case this.options.keyBindings.home:
								s = 0, o = 0;
								break;
							case this.options.keyBindings.left:
								s += e ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.up:
								o += e ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.right:
								s -= e ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.down:
								o -= e ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							default:
								return
						}
						if(e) return void this.goToPage(s, o);
						s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollX && (s = this.maxScrollX, this.keyAcceleration = 0), o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollY && (o = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(s, o, 0), this.keyTime = r
					}
				},
				_animate: function(t, i, e, n) {
					function s() { var p, d, f, m = h.getTime(); return m >= u ? (o.isAnimating = !1, o._translate(t, i), void(o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"))) : (m = (m - l) / e, f = n(m), p = (t - r) * f + r, d = (i - c) * f + c, o._translate(p, d), void(o.isAnimating && a(s))) }
					var o = this,
						r = this.x,
						c = this.y,
						l = h.getTime(),
						u = l + e;
					this.isAnimating = !0, s()
				},
				handleEvent: function(t) {
					switch(t.type) {
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
						case "mousedown":
							this._start(t);
							break;
						case "touchmove":
						case "pointermove":
						case "MSPointerMove":
						case "mousemove":
							this._move(t);
							break;
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "pointercancel":
						case "MSPointerCancel":
						case "mousecancel":
							this._end(t);
							break;
						case "orientationchange":
						case "resize":
							this._resize();
							break;
						case "transitionend":
						case "webkitTransitionEnd":
						case "oTransitionEnd":
						case "MSTransitionEnd":
							this._transitionEnd(t);
							break;
						case "wheel":
						case "DOMMouseScroll":
						case "mousewheel":
							this._wheel(t);
							break;
						case "keydown":
							this._key(t);
							break;
						case "click":
							t._constructed || (t.preventDefault(), t.stopPropagation())
					}
				}
			}, r.prototype = {
				handleEvent: function(t) {
					switch(t.type) {
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
						case "mousedown":
							this._start(t);
							break;
						case "touchmove":
						case "pointermove":
						case "MSPointerMove":
						case "mousemove":
							this._move(t);
							break;
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "pointercancel":
						case "MSPointerCancel":
						case "mousecancel":
							this._end(t)
					}
				},
				destroy: function() { this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(i, "touchmove", this), h.removeEvent(i, h.prefixPointerEvent("pointermove"), this), h.removeEvent(i, "mousemove", this), h.removeEvent(i, "touchend", this), h.removeEvent(i, h.prefixPointerEvent("pointerup"), this), h.removeEvent(i, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper) },
				_start: function(t) {
					var e = t.touches ? t.touches[0] : t;
					t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(i, "touchmove", this), this.options.disablePointer || h.addEvent(i, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(i, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
				},
				_move: function(t) {
					var i, e, n, s, o = t.touches ? t.touches[0] : t;
					h.getTime();
					this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, i = o.pageX - this.lastPointX, this.lastPointX = o.pageX, e = o.pageY - this.lastPointY, this.lastPointY = o.pageY, n = this.x + i, s = this.y + e, this._pos(n, s), t.preventDefault(), t.stopPropagation()
				},
				_end: function(t) {
					if(this.initiated) {
						if(this.initiated = !1, t.preventDefault(), t.stopPropagation(), h.removeEvent(i, "touchmove", this), h.removeEvent(i, h.prefixPointerEvent("pointermove"), this), h.removeEvent(i, "mousemove", this), this.scroller.options.snap) {
							var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
								s = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.scroller.x - e.x), 1e3), n.min(n.abs(this.scroller.y - e.y), 1e3)), 300);
							(this.scroller.x != e.x || this.scroller.y != e.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, s, this.scroller.options.bounceEasing))
						}
						this.moved && this.scroller._execEvent("scrollEnd")
					}
				},
				transitionTime: function(t) { t = t || 0, this.indicatorStyle[h.style.transitionDuration] = t + "ms", !t && h.isBadAndroid && (this.indicatorStyle[h.style.transitionDuration] = "0.001s") },
				transitionTimingFunction: function(t) { this.indicatorStyle[h.style.transitionTimingFunction] = t },
				refresh: function() {
					this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
					this.wrapper.offsetHeight;
					this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
				},
				updatePosition: function() {
					var t = this.options.listenX && n.round(this.sizeRatioX * this.scroller.x) || 0,
						i = this.options.listenY && n.round(this.sizeRatioY * this.scroller.y) || 0;
					this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = n.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = n.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), i < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = n.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px"), i = this.minBoundaryY) : i > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = n.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height) : i = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = i, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px")
				},
				_pos: function(t, i) { 0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX), 0 > i ? i = 0 : i > this.maxPosY && (i = this.maxPosY), t = this.options.listenX ? n.round(t / this.sizeRatioX) : this.scroller.x, i = this.options.listenY ? n.round(i / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, i) },
				fade: function(t, i) {
					if(!i || this.visible) {
						clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
						var e = t ? 250 : 500,
							n = t ? 0 : 300;
						t = t ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = e + "ms", this.fadeTimeout = setTimeout(function(t) { this.wrapperStyle.opacity = t, this.visible = +t }.bind(this, t), n)
					}
				}
			}, s.utils = h, "undefined" != typeof t && t.exports ? t.exports = s : i.IScroll = s
		}(window, document, Math)
	}, function(t, i, e) {
		function n(t, i) {
			var e = { start: 0, end: 1e3, decimal: 0, decimalSeparator: ".", duration: 5e3, easing: !0, grouping: !0, groupSeparator: ",", prefix: "", suffix: "", onComplete: null };
			this.options = $.extend(e, i), this.counter = new s(t[0], this.options.start, this.options.end, this.options.decimal, this.options.duration / 1e3, { useEasing: this.options.easing, useGrouping: this.options.grouping, separator: this.options.groupSeparator, decimal: this.options.decimalSeparator, prefix: this.options.prefix, suffix: this.options.suffix }), this.counter.callback = this.options.onComplete
		}
		e(3);
		var s = e(77);
		n.prototype = { constructor: n, start: function() { this.counter.start() }, pauseResume: function() { this.counter.pauseResume() }, reset: function() { this.counter.reset() }, to: function(t) { this.counter.update(t) }, add: function(t) { this.counter.update(this.counter.frameVal + t) }, setDuration: function(t) { this.options.duration = t, this.counter.duration = t }, setPrefix: function(t) { this.options.prefix = this.counter.options.prefix = t }, setSuffix: function(t) { this.options.suffix = this.counter.options.suffix = t }, setGroupSeparator: function(t) { this.options.groupSeparator = this.counter.options.separator = t }, setGrouping: function(t) { this.options.grouping = this.counter.options.userGrouping = t }, setDecimalSeparator: function(t) { this.options.decimalSeparator = this.counter.options.decimal = t }, setDecimal: function(t) { this.options.decimal = this.counter.decimals = t }, setEasing: function(t) { this.options.easing = this.counter.options.useEasing = t }, setOnComplete: function(t) { this.options.onComplete = this.counter.onComplete = t } }, t.exports = wy.effect.Counter = n
	}, function(t, i, e) {
		var n, s;
		! function(o, r) { n = r, s = "function" == typeof n ? n.call(i, e, i, t) : n, !(void 0 !== s && (t.exports = s)) }(this, function(t, i, e) {
			var n = function(t, i, e, n, s, o) {
				for(var r = 0, a = ["webkit", "moz", "ms", "o"], h = 0; h < a.length && !window.requestAnimationFrame; ++h) window.requestAnimationFrame = window[a[h] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[h] + "CancelAnimationFrame"] || window[a[h] + "CancelRequestAnimationFrame"];
				window.requestAnimationFrame || (window.requestAnimationFrame = function(t, i) {
					var e = (new Date).getTime(),
						n = Math.max(0, 16 - (e - r)),
						s = window.setTimeout(function() { t(e + n) }, n);
					return r = e + n, s
				}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) }), this.easeOutExpo = function(t, i, e, n) { return e * (-Math.pow(2, -10 * t / n) + 1) * 1024 / 1023 + i }, this.options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", postFormatter: null, easingFn: null };
				for(var c in o) o.hasOwnProperty(c) && (this.options[c] = o[c]);
				"" === this.options.separator && (this.options.useGrouping = !1), this.options.prefix || (this.options.prefix = ""), this.options.suffix || (this.options.suffix = ""), this.options.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.d = "string" == typeof t ? document.getElementById(t) : t, this.startVal = Number(i), this.endVal = Number(e), this.countDown = this.startVal > this.endVal, this.frameVal = this.startVal, this.decimals = Math.max(0, n || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * Number(s) || 2e3;
				var l = this;
				this.version = function() { return "1.6.1" }, this.printValue = function(t) { var i = isNaN(t) ? "--" : l.formatNumber(t); "INPUT" == l.d.tagName ? this.d.value = i : "text" == l.d.tagName || "tspan" == l.d.tagName ? this.d.textContent = i : this.d.innerHTML = i }, this.count = function(t) {
					l.startTime || (l.startTime = t), l.timestamp = t;
					var i = t - l.startTime;
					l.remaining = l.duration - i, l.options.useEasing ? l.countDown ? l.frameVal = l.startVal - l.options.easingFn.call(l, i, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.options.easingFn.call(l, i, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.frameVal = l.startVal - (l.startVal - l.endVal) * (i / l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (i / l.duration), l.countDown ? l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal, l.frameVal = Math.floor(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), i < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
				}, this.start = function(t) { return l.callback = t, l.rAF = requestAnimationFrame(l.count), !1 }, this.pauseResume = function() { l.paused ? (l.paused = !1, delete l.startTime, l.duration = l.remaining, l.startVal = l.frameVal, requestAnimationFrame(l.count)) : (l.paused = !0, cancelAnimationFrame(l.rAF)) }, this.reset = function() { l.paused = !1, delete l.startTime, l.startVal = i, cancelAnimationFrame(l.rAF), l.printValue(l.startVal) }, this.update = function(t) { cancelAnimationFrame(l.rAF), l.paused = !1, delete l.startTime, l.startVal = l.frameVal, l.endVal = Number(t), l.countDown = l.startVal > l.endVal, l.rAF = requestAnimationFrame(l.count) }, this.formatNumber = function(t) {
					t = t.toFixed(l.decimals), t += "";
					var i, e, n, s;
					if(i = t.split("."), e = i[0], n = i.length > 1 ? l.options.decimal + i[1] : "", s = /(\d+)(\d{3})/, l.options.useGrouping)
						for(; s.test(e);) e = e.replace(s, "$1" + l.options.separator + "$2");
					var o = l.options.prefix + e + n + l.options.suffix;
					return null != l.options.postFormatter && (o = l.options.postFormatter(o)), o
				}, l.printValue(l.startVal)
			};
			return n
		})
	}, function(t, i, e) {
		function n(t, i) {
			var e = { interval: 1e3, inDuration: 500, outDuration: 200, bubbleDuration: [3e3, 7e3], sideDuration: [700, 1e3], itemRenderer: null, onBubble: null };
			this.options = $.extend(e, i), this.$el = t, this.width = this.$el.width(), this.height = this.$el.height(), this.steadyOutput = null, this.started = !1, this._init()
		}
		e(3), e(2);
		var s = e(36),
			o = (e(9), e(8));
		s.defineAnimation("avatar-bubble-animation", { 0: { "margin-left": "-10px" }, 100: { "margin-left": "10px" } }), n.prototype = {
			constructor: n,
			_init: function() {
				var t = this;
				this.$el.css("position", "relative").css("overflow", "hidden"), this.steadyOutput = new o({ interval: this.options.interval }), this.steadyOutput.register(function(i) { t._add(i) })
			},
			_getDuration: function(t) { var i = this.options[t]; return i instanceof Array ? wy.base.Util.random(i[0], i[1]) : i },
			_renderItem: function(t) { return this.options.itemRenderer ? this.options.itemRenderer(t).css("position", "absolute") : $("<span>").text(t) },
			_add: function(t) {
				var i, e, n = this._renderItem(t);
				this.$el.append(n), i = [(this.width - n.width()) / 2, this.height, 0], e = [wy.base.Util.random(0 - n.width() / 2, this.width - n.width() / 2), 0, 0], s.applyAnimation(n, { animationName: "avatar-bubble-animation", duration: this._getDuration("sideDuration"), iteration: "infinite", easing: "ease-in-out", direction: "alternate" }), n.snabbt({ fromPosition: i, position: [i[0], i[1] - n.height(), i[2]], fromOpacity: 0, opacity: 1, fromScale: [0, 0], scale: [1, 1], easing: "easeOut", duration: this._getDuration("inDuration") }).snabbt({ fromPosition: [i[0], i[1] - n.height(), i[2]], position: e, duration: this._getDuration("bubbleDuration") }).snabbt({ fromScale: [1, 1], scale: [1.5, 1.5], fromOpacity: 1, opacity: 0, duration: this._getDuration("outDuration"), easing: "easeIn", complete: function() { n.remove() } }), this.options.onBubble && this.options.onBubble()
			},
			isStarted: function() { return this.started },
			start: function() { this.started || (this.steadyOutput.start(), this.started = !0) },
			add: function(t, i) { this.started && this.steadyOutput.push(t, { delay: i }) },
			stop: function() { this.started && (this.steadyOutput.stop(), this.started = !1) },
			clear: function() { this.started && (this.steadyOutput.stop(!0), this.$el.html(""), this.started = !1) }
		}, t.exports = wy.effect.AvatarBubble = n
	}, function(t, i, e) {
		function n(t, i, e, n) { t.beginPath(), t.lineWidth = n.penSize, t.strokeStyle = n.penColor, t.moveTo(i.x, i.y), t.lineTo(e.x, e.y), t.stroke(), t.closePath() }

		function s(t, i) {
			var e = { width: -1, height: -1, penSize: 1, penColor: "black", eraserSize: 20, background: "", maskColor: "white", maskOpacity: .5, maxHistory: 5 };
			this.options = $.extend(e, i), this.$el = t, this.loader = null, this.centerIt = null, this.canvas = null, this.context = null, this.$background = null, this.$mask = null, this.$doodleImage = null, this.snapshots = [], this.started = !1, this.lastX = 0, this.lastY = 0, this.currentMode = s.MODE.DRAW, this._init()
		}
		e(3);
		var o = e(27),
			r = e(10),
			a = e(36),
			h = "ontouchstart" in window,
			c = h ? "touchstart" : "mousedown",
			l = h ? "touchmove" : "mousemove",
			u = h ? "touchend" : "mouseup";
		s.MODE = { DRAW: "draw", ERASE: "erase" }, s.prototype = {
			constructor: s,
			_init: function() { this.options.width > 0 && this.$el.width(this.options.width), this.options.height > 0 && this.$el.height(this.options.height), this.$el.css("position", "relative").css("overflow", "hidden"), this._load(this.options.background), this._createMask(), this._bindEvents() },
			_load: function() {
				var t = new r;
				t.add("background", this.options.background), t.on("complete", function(t) { this._handleLoadComplete() }.bind(this)), t.load(), this.loader = t
			},
			_handleLoadComplete: function() { this._createCanvas(), this._createBackground(), this.setMode(s.MODE.DRAW), this.loader = null },
			_createCanvas: function() {
				var t = document.createElement("canvas");
				t.width = this.$el.width(), t.height = this.$el.height(), $(t).css("position", "absolute").css("left", 0).css("right", 0).css("z-index", 3), this.$el.append(t), this.canvas = t, this.context = t.getContext("2d")
			},
			_createBackground: function() {
				var t = this.loader.resources.background.data,
					i = new o(this.$el.width(), this.$el.height(), t.naturalWidth, t.naturalHeight, { type: "cover" }),
					e = $(t).css("position", "absolute").css("left", i.offset().left + "px").css("top", i.offset().top + "px").css("z-index", 1).width(i.newWidth()).height(i.newHeight());
				this.$el.append(e), this.$background = e, this.centerIt = i, a.applyAnimation(e, { animationName: "fadeIn" })
			},
			_createMask: function() {
				var t = $("<div>").css("position", "absolute").css("z-index", 2).css("top", 0).css("left", 0);
				this.$el.append(t), this.$mask = t, this._resetMask()
			},
			_resetMask: function() { this.$mask.css("background-color", this.options.maskColor).css("opacity", this.options.maskOpacity).width(this.$el.width()).height(this.$el.height()) },
			_resetBackground: function() { this.$background.remove(), this._load() },
			_bindEvents: function() { this.$el.on(c, this._onStart.bind(this)), this.$el.on(l, this._onMove.bind(this)), this.$el.on(u, this._onEnd.bind(this)) },
			_unbindEvent: function() { this.$el.off(c, this._onStart.bind(this)), this.$el.off(l, this._onMove.bind(this)), this.$el.off(u, this._onEnd.bind(this)) },
			_onStart: function(t) {
				this.started = !0, this._saveSnapshot();
				var i, e, n;
				n = h ? t.originalEvent.touches[0] : t, i = n.offsetX || n.pageX - this.$mask.offset().left, e = n.offsetY || n.pageY - this.$mask.offset().top, this.lastX = i, this.lastY = e, this._draw(i, e), t.preventDefault()
			},
			_onMove: function(t) {
				if(this.started) {
					var i, e, n;
					n = h ? t.originalEvent.touches[0] : t, i = n.offsetX || n.pageX - this.$mask.offset().left, e = n.offsetY || n.pageY - this.$mask.offset().top, this._draw(i, e), t.preventDefault()
				}
			},
			_onEnd: function(t) { this.started = !1, t.preventDefault() },
			_draw: function(t, i) { this.currentMode === s.MODE.DRAW ? this._doodle(t, i) : this._erase(t, i) },
			_doodle: function(t, i) {
				var e = { x: this.lastX, y: this.lastY },
					s = { x: t, y: i },
					o = { penSize: this.options.penSize, penColor: this.options.penColor };
				n(this.context, e, s, o), this.lastX = t, this.lastY = i
			},
			_erase: function(t, i) {
				var e = this.context.createRadialGradient(t, i, 0, t, i, this.options.eraserSize);
				e.addColorStop(0, "rgba(0,0,0,1)"), e.addColorStop(1, "rgba(255, 255, 255, 0)"), this.context.beginPath(), this.context.fillStyle = e, this.context.arc(t, i, this.options.eraserSize, 0, 2 * Math.PI, !0), this.context.fill()
			},
			_drawBackgroundImage: function(t) { t.save(), t.drawImage(this.$background[0], this.centerIt.offset().left, this.centerIt.offset().top, this.centerIt.newWidth(), this.centerIt.newHeight()), t.restore() },
			_drawDoodleImage: function(t) { t.save(), t.drawImage(this.$doodleImage[0], 0, 0, this.$el.width(), this.$el.height()), t.restore() },
			_generateDoodleImage: function() {
				var t = $("<img alt='image'>").attr("src", this.canvas.toDataURL());
				this.$doodleImage = t
			},
			_saveSnapshot: function() { this.snapshots.length > this.options.maxHistory && this.snapshots.shift(), this.snapshots.push(this.canvas.toDataURL()) },
			_restoreSnapshot: function() {
				var t, i = this.snapshots.pop();
				if(i) {
					t = document.createElement("img"), t.src = i;
					var e = this.context.globalCompositeOperation;
					this.context.globalCompositeOperation = "source-over", this.context.save(), this.context.drawImage(t, 0, 0), this.context.restore(), this.context.globalCompositeOperation = e
				}
			},
			getMode: function() { return this.currentMode },
			setMode: function(t) { return t === s.MODE.ERASE ? this.context.globalCompositeOperation = "destination-out" : this.context.globalCompositeOperation = "source-over", this.currentMode = t, this },
			getPenSize: function() { return this.options.penSize },
			setPenSize: function(t) { return this.options.penSize = t, this },
			getPenColor: function(t) { return this.options.penColor },
			setPenColor: function(t) { return this.options.penColor = t, this },
			getBackground: function() { return this.options.background },
			setBackground: function(t) { return this.options.background = t, this.clear(), this._resetBackground(), this },
			getEraserSize: function() { return this.options.eraserSize },
			setEraserSize: function(t) { return this.options.eraserSize = t, this },
			getMaskColor: function() { return this.options.maskColor },
			setMaskColor: function(t) { return this.options.maskColor = t, this._resetMask(), this },
			getMaskOpacity: function() { return this.options.maskOpacity },
			setMaskOpacity: function(t) { return this.options.maskOpacity = t, this._resetMask(), this },
			clear: function(t) { return this._saveSnapshot(), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), t || this.setMode(s.MODE.DRAW), this },
			undo: function() { this.snapshots.length > 0 && (this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this._restoreSnapshot()) },
			clearHistory: function() { this.snapshots = [] },
			toBase64: function(t) { return this.toCanvas(t).toDataURL() },
			toImage: function(t) {
				var i = this.toCanvas(t),
					e = document.createElement("img");
				return e.src = i.toDataURL(), e
			},
			toCanvas: function(t) { var i, e = document.createElement("canvas"); return e.width = this.$el.width(), e.height = this.$el.height(), i = e.getContext("2d"), t || this._drawBackgroundImage(i), this._generateDoodleImage(), this._drawDoodleImage(i), e }
		}, t.exports = wy.effect.Doodle = s
	}, function(t, i, e) {
		function n(t, i) {
			var e = { data: [], size: 4, topOffset: 0, itemHeight: 90, onClickItem: function() {}, itemRenderer: function(t, i) { t.text(i) } };
			this.options = $.extend(e, i), this.$el = t, this.$overlay = null, this.$list = null, this.listHeight = this.options.size * this.options.itemHeight, this.data = this.options.data, this.items = [], this.ticking = !1, this.cursor = 0, this.scroller = null, this.lastScrollTop = 0, this._init()
		}
		e(3);
		var s = e(9).requestAnimationFrame,
			o = e(81);
		n.prototype = {
			constructor: n,
			_init: function() { this._initContainer(), this._initOverlay(), this._initList(), this._initListItem(), this._initScroller(), this._bindEvent(), this._loop(), this._update(0) },
			_initContainer: function() { this.$el.css("overflow-y", "hidden").css("position", "relative") },
			_initOverlay: function() { this.$overlay = $("<div>").css("position", "absolute").css("top", 0).css("bottom", 0).css("left", 0).css("right", 0).css("pointer-events", "none").height(this.data.length * this.options.itemHeight), this.$el.append(this.$overlay) },
			_initScroller: function() { this.scroller = new o(this._updatePosition.bind(this), { scrollingX: !1, scrollingY: !0, bouncing: !1 }), this.scroller.setDimensions(this.$el.width(), this.$el.height(), this.$overlay.width(), this.$overlay.height()) },
			_initList: function() { this.$list = $("<ul>").css("position", "relative").css("list-style", "none").css("padding", 0).css("margin", 0), this.$el.append(this.$list) },
			_initListItem: function() {
				var t, i, e = this.options.size,
					n = this.data,
					s = this.options.itemHeight;
				for(t = 0; e > t; t++) i = $("<li>").css("position", "absolute"), this.$list.append(i), this.items.push({ $li: i, data: n[t], dirty: !0, y: t * s })
			},
			_updatePosition: function(t, i) {
				var e = i,
					n = 0;
				this.ticking || this.lastScrollTop !== e && (n = e - this.lastScrollTop, this.items.forEach(function(t) { t.y -= n, t.dirty = !0 }), this.lastScrollTop = e, this._handleScroll(e - this.options.topOffset))
			},
			_bindEvent: function() {
				var t = this;
				this.$el.on("touchstart", function(i) { i = i.originalEvent, t.scroller.doTouchStart(i.touches, i.timeStamp) }).on("touchmove", function(i) { i = i.originalEvent, t.scroller.doTouchMove(i.touches, i.timeStamp, i.scale), i.preventDefault() }).on("touchend", function(i) { i = i.originalEvent, t.scroller.doTouchEnd(i.timeStamp) }).on("touchcancel", function(i) { i = i.originalEvent, t.scroller.doTouchEnd(i.timeStamp) })
			},
			_handleScroll: function(t) {
				var i = this.options.itemHeight,
					e = Math.ceil(t / i);
				e >= 0 && this._update(e)
			},
			_renderListItem: function(t) {
				var i = this.options.itemRenderer,
					e = t.$li,
					n = t.data;
				setTimeout(function() { i(e, n) }, 0)
			},
			_translateY: function(t) { t.$li.css("transform", "translateY(" + t.y + "px) translateZ(0)") },
			_update: function(t) { for(var i, e, n = this.items, s = t - this.cursor, o = Math.abs(t - this.cursor); o > 0;) s > 0 ? (e = this.cursor + 1, e < this.data.length && (i = n.shift(), i.data = this.data[this.cursor = e], i.y += this.listHeight, i.dirty = !0, n.push(i))) : (e = this.cursor - 1, e > -1 && (i = n.pop(), i.data = this.data[this.cursor = e], i.y -= this.listHeight, i.dirty = !0, n.unshift(i))), --o },
			_loop: function() { this.items.forEach(function(t) { t.dirty && (this._translateY(t), this._renderListItem(t), t.dirty = !1) }, this), s(this._loop.bind(this)) },
			push: function(t) { this.data = this.data.concat(t), this.$overlay.height(this.options.itemHeight * this.data.length), this.$el.trigger("scroll") }
		}, t.exports = wy.effect.InfiniteScroll = n
	}, function(t, i) {
		(function(i) {
			! function(t) {
				var i = Date.now || function() { return +new Date },
					e = 60,
					n = 1e3,
					s = {},
					o = 1;
				t.core ? core.effect || (core.effect = {}) : t.core = { effect: {} }, core.effect.Animate = {
					requestAnimationFrame: function() {
						var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame,
							e = !!i;
						if(i && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(i.toString()) && (e = !1), e) return function(t, e) { i(t, e) };
						var n = 60,
							s = {},
							o = 0,
							r = 1,
							a = null,
							h = +new Date;
						return function(t, i) {
							var e = r++;
							return s[e] = t, o++, null === a && (a = setInterval(function() {
								var t = +new Date,
									i = s;
								s = {}, o = 0;
								for(var e in i) i.hasOwnProperty(e) && (i[e](t), h = t);
								t - h > 2500 && (clearInterval(a), a = null)
							}, 1e3 / n)), e
						}
					}(),
					stop: function(t) { var i = null != s[t]; return i && (s[t] = null), i },
					isRunning: function(t) { return null != s[t] },
					start: function(t, r, a, h, c, l) {
						var u = i(),
							p = u,
							d = 0,
							f = 0,
							m = o++;
						if(l || (l = document.body), m % 20 === 0) {
							var g = {};
							for(var v in s) g[v] = !0;
							s = g
						}
						var _ = function(o) {
							var g = o !== !0,
								v = i();
							if(!s[m] || r && !r(m)) return s[m] = null, void(a && a(e - f / ((v - u) / n), m, !1));
							if(g)
								for(var y = Math.round((v - p) / (n / e)) - 1, b = 0; b < Math.min(y, 4); b++) _(!0), f++;
							h && (d = (v - u) / h, d > 1 && (d = 1));
							var x = c ? c(d) : d;
							t(x, v, g) !== !1 && 1 !== d || !g ? g && (p = v, core.effect.Animate.requestAnimationFrame(_, l)) : (s[m] = null, a && a(e - f / ((v - u) / n), m, 1 === d || null == h))
						};
						return s[m] = !0, core.effect.Animate.requestAnimationFrame(_, l), m
					}
				}
			}(window || i);
			var e;
			! function() {
				var t = function() {};
				e = function(i, e) { this.__callback = i, this.options = { scrollingX: !0, scrollingY: !0, animating: !0, animationDuration: 250, bouncing: !0, locking: !0, paging: !1, snapping: !1, zooming: !1, minZoom: .5, maxZoom: 3, speedMultiplier: 1, scrollingComplete: t, penetrationDeceleration: .03, penetrationAcceleration: .08 }; for(var n in e) this.options[n] = e[n] };
				var i = function(t) { return Math.pow(t - 1, 3) + 1 },
					n = function(t) { return(t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2) },
					s = {
						__isSingleTouch: !1,
						__isTracking: !1,
						__didDecelerationComplete: !1,
						__isGesturing: !1,
						__isDragging: !1,
						__isDecelerating: !1,
						__isAnimating: !1,
						__clientLeft: 0,
						__clientTop: 0,
						__clientWidth: 0,
						__clientHeight: 0,
						__contentWidth: 0,
						__contentHeight: 0,
						__snapWidth: 100,
						__snapHeight: 100,
						__refreshHeight: null,
						__refreshActive: !1,
						__refreshActivate: null,
						__refreshDeactivate: null,
						__refreshStart: null,
						__zoomLevel: 1,
						__scrollLeft: 0,
						__scrollTop: 0,
						__maxScrollLeft: 0,
						__maxScrollTop: 0,
						__scheduledLeft: 0,
						__scheduledTop: 0,
						__scheduledZoom: 0,
						__lastTouchLeft: null,
						__lastTouchTop: null,
						__lastTouchMove: null,
						__positions: null,
						__minDecelerationScrollLeft: null,
						__minDecelerationScrollTop: null,
						__maxDecelerationScrollLeft: null,
						__maxDecelerationScrollTop: null,
						__decelerationVelocityX: null,
						__decelerationVelocityY: null,
						setDimensions: function(t, i, e, n) {
							var s = this;
							t === +t && (s.__clientWidth = t), i === +i && (s.__clientHeight = i), e === +e && (s.__contentWidth = e), n === +n && (s.__contentHeight = n), s.__computeScrollMax(), s.scrollTo(s.__scrollLeft, s.__scrollTop, !0)
						},
						setPosition: function(t, i) {
							var e = this;
							e.__clientLeft = t || 0, e.__clientTop = i || 0
						},
						setSnapSize: function(t, i) {
							var e = this;
							e.__snapWidth = t, e.__snapHeight = i
						},
						activatePullToRefresh: function(t, i, e, n) {
							var s = this;
							s.__refreshHeight = t, s.__refreshActivate = i, s.__refreshDeactivate = e, s.__refreshStart = n
						},
						triggerPullToRefresh: function() { this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, !0), this.__refreshStart && this.__refreshStart() },
						finishPullToRefresh: function() {
							var t = this;
							t.__refreshActive = !1, t.__refreshDeactivate && t.__refreshDeactivate(), t.scrollTo(t.__scrollLeft, t.__scrollTop, !0)
						},
						getValues: function() { var t = this; return { left: t.__scrollLeft, top: t.__scrollTop, zoom: t.__zoomLevel } },
						getScrollMax: function() { var t = this; return { left: t.__maxScrollLeft, top: t.__maxScrollTop } },
						zoomTo: function(t, i, e, n, s) {
							var o = this;
							if(!o.options.zooming) throw new Error("Zooming is not enabled!");
							s && (o.__zoomComplete = s), o.__isDecelerating && (core.effect.Animate.stop(o.__isDecelerating), o.__isDecelerating = !1);
							var r = o.__zoomLevel;
							null == e && (e = o.__clientWidth / 2), null == n && (n = o.__clientHeight / 2), t = Math.max(Math.min(t, o.options.maxZoom), o.options.minZoom), o.__computeScrollMax(t);
							var a = (e + o.__scrollLeft) * t / r - e,
								h = (n + o.__scrollTop) * t / r - n;
							a > o.__maxScrollLeft ? a = o.__maxScrollLeft : 0 > a && (a = 0), h > o.__maxScrollTop ? h = o.__maxScrollTop : 0 > h && (h = 0), o.__publish(a, h, t, i)
						},
						zoomBy: function(t, i, e, n, s) {
							var o = this;
							o.zoomTo(o.__zoomLevel * t, i, e, n, s)
						},
						scrollTo: function(t, i, e, n) {
							var s = this;
							if(s.__isDecelerating && (core.effect.Animate.stop(s.__isDecelerating), s.__isDecelerating = !1), null != n && n !== s.__zoomLevel) {
								if(!s.options.zooming) throw new Error("Zooming is not enabled!");
								t *= n, i *= n, s.__computeScrollMax(n)
							} else n = s.__zoomLevel;
							s.options.scrollingX ? s.options.paging ? t = Math.round(t / s.__clientWidth) * s.__clientWidth : s.options.snapping && (t = Math.round(t / s.__snapWidth) * s.__snapWidth) : t = s.__scrollLeft, s.options.scrollingY ? s.options.paging ? i = Math.round(i / s.__clientHeight) * s.__clientHeight : s.options.snapping && (i = Math.round(i / s.__snapHeight) * s.__snapHeight) : i = s.__scrollTop, t = Math.max(Math.min(s.__maxScrollLeft, t), 0), i = Math.max(Math.min(s.__maxScrollTop, i), 0), t === s.__scrollLeft && i === s.__scrollTop && (e = !1), s.__publish(t, i, n, e)
						},
						scrollBy: function(t, i, e) {
							var n = this,
								s = n.__isAnimating ? n.__scheduledLeft : n.__scrollLeft,
								o = n.__isAnimating ? n.__scheduledTop : n.__scrollTop;
							n.scrollTo(s + (t || 0), o + (i || 0), e)
						},
						doMouseZoom: function(t, i, e, n) {
							var s = this,
								o = t > 0 ? .97 : 1.03;
							return s.zoomTo(s.__zoomLevel * o, !1, e - s.__clientLeft, n - s.__clientTop)
						},
						doTouchStart: function(t, i) {
							if(null == t.length) throw new Error("Invalid touch list: " + t);
							if(i instanceof Date && (i = i.valueOf()), "number" != typeof i) throw new Error("Invalid timestamp value: " + i);
							var e = this;
							e.__interruptedAnimation = !0, e.__isDecelerating && (core.effect.Animate.stop(e.__isDecelerating), e.__isDecelerating = !1, e.__interruptedAnimation = !0), e.__isAnimating && (core.effect.Animate.stop(e.__isAnimating), e.__isAnimating = !1, e.__interruptedAnimation = !0);
							var n, s, o = 1 === t.length;
							o ? (n = t[0].pageX, s = t[0].pageY) : (n = Math.abs(t[0].pageX + t[1].pageX) / 2, s = Math.abs(t[0].pageY + t[1].pageY) / 2), e.__initialTouchLeft = n, e.__initialTouchTop = s, e.__zoomLevelStart = e.__zoomLevel, e.__lastTouchLeft = n, e.__lastTouchTop = s, e.__lastTouchMove = i, e.__lastScale = 1, e.__enableScrollX = !o && e.options.scrollingX, e.__enableScrollY = !o && e.options.scrollingY, e.__isTracking = !0, e.__didDecelerationComplete = !1, e.__isDragging = !o, e.__isSingleTouch = o, e.__positions = []
						},
						doTouchMove: function(t, i, e) {
							if(null == t.length) throw new Error("Invalid touch list: " + t);
							if(i instanceof Date && (i = i.valueOf()), "number" != typeof i) throw new Error("Invalid timestamp value: " + i);
							var n = this;
							if(n.__isTracking) {
								var s, o;
								2 === t.length ? (s = Math.abs(t[0].pageX + t[1].pageX) / 2, o = Math.abs(t[0].pageY + t[1].pageY) / 2) : (s = t[0].pageX, o = t[0].pageY);
								var r = n.__positions;
								if(n.__isDragging) {
									var a = s - n.__lastTouchLeft,
										h = o - n.__lastTouchTop,
										c = n.__scrollLeft,
										l = n.__scrollTop,
										u = n.__zoomLevel;
									if(null != e && n.options.zooming) {
										var p = u;
										if(u = u / n.__lastScale * e, u = Math.max(Math.min(u, n.options.maxZoom), n.options.minZoom), p !== u) {
											var d = s - n.__clientLeft,
												f = o - n.__clientTop;
											c = (d + c) * u / p - d, l = (f + l) * u / p - f, n.__computeScrollMax(u)
										}
									}
									if(n.__enableScrollX) {
										c -= a * this.options.speedMultiplier;
										var m = n.__maxScrollLeft;
										(c > m || 0 > c) && (n.options.bouncing ? c += a / 2 * this.options.speedMultiplier : c = c > m ? m : 0)
									}
									if(n.__enableScrollY) {
										l -= h * this.options.speedMultiplier;
										var g = n.__maxScrollTop;
										(l > g || 0 > l) && (n.options.bouncing ? (l += h / 2 * this.options.speedMultiplier, n.__enableScrollX || null == n.__refreshHeight || (!n.__refreshActive && l <= -n.__refreshHeight ? (n.__refreshActive = !0, n.__refreshActivate && n.__refreshActivate()) : n.__refreshActive && l > -n.__refreshHeight && (n.__refreshActive = !1, n.__refreshDeactivate && n.__refreshDeactivate()))) : l = l > g ? g : 0)
									}
									r.length > 60 && r.splice(0, 30), r.push(c, l, i), n.__publish(c, l, u)
								} else {
									var v = n.options.locking ? 3 : 0,
										_ = 5,
										y = Math.abs(s - n.__initialTouchLeft),
										b = Math.abs(o - n.__initialTouchTop);
									n.__enableScrollX = n.options.scrollingX && y >= v, n.__enableScrollY = n.options.scrollingY && b >= v, r.push(n.__scrollLeft, n.__scrollTop, i), n.__isDragging = (n.__enableScrollX || n.__enableScrollY) && (y >= _ || b >= _), n.__isDragging && (n.__interruptedAnimation = !1)
								}
								n.__lastTouchLeft = s, n.__lastTouchTop = o, n.__lastTouchMove = i, n.__lastScale = e
							}
						},
						doTouchEnd: function(t) {
							if(t instanceof Date && (t = t.valueOf()), "number" != typeof t) throw new Error("Invalid timestamp value: " + t);
							var i = this;
							if(i.__isTracking) {
								if(i.__isTracking = !1, i.__isDragging)
									if(i.__isDragging = !1, i.__isSingleTouch && i.options.animating && t - i.__lastTouchMove <= 100) {
										for(var e = i.__positions, n = e.length - 1, s = n, o = n; o > 0 && e[o] > i.__lastTouchMove - 100; o -= 3) s = o;
										if(s !== n) {
											var r = e[n] - e[s],
												a = i.__scrollLeft - e[s - 2],
												h = i.__scrollTop - e[s - 1];
											i.__decelerationVelocityX = a / r * (1e3 / 60), i.__decelerationVelocityY = h / r * (1e3 / 60);
											var c = i.options.paging || i.options.snapping ? 4 : 1;
											(Math.abs(i.__decelerationVelocityX) > c || Math.abs(i.__decelerationVelocityY) > c) && (i.__refreshActive || i.__startDeceleration(t))
										} else i.options.scrollingComplete()
									} else t - i.__lastTouchMove > 100 && i.options.scrollingComplete();
								i.__isDecelerating || (i.__refreshActive && i.__refreshStart ? (i.__publish(i.__scrollLeft, -i.__refreshHeight, i.__zoomLevel, !0), i.__refreshStart && i.__refreshStart()) : ((i.__interruptedAnimation || i.__isDragging) && i.options.scrollingComplete(), i.scrollTo(i.__scrollLeft, i.__scrollTop, !0, i.__zoomLevel), i.__refreshActive && (i.__refreshActive = !1, i.__refreshDeactivate && i.__refreshDeactivate()))), i.__positions.length = 0
							}
						},
						__publish: function(t, e, s, o) {
							var r = this,
								a = r.__isAnimating;
							if(a && (core.effect.Animate.stop(a), r.__isAnimating = !1), o && r.options.animating) {
								r.__scheduledLeft = t, r.__scheduledTop = e, r.__scheduledZoom = s;
								var h = r.__scrollLeft,
									c = r.__scrollTop,
									l = r.__zoomLevel,
									u = t - h,
									p = e - c,
									d = s - l,
									f = function(t, i, e) { e && (r.__scrollLeft = h + u * t, r.__scrollTop = c + p * t, r.__zoomLevel = l + d * t, r.__callback && r.__callback(r.__scrollLeft, r.__scrollTop, r.__zoomLevel)) },
									m = function(t) { return r.__isAnimating === t },
									g = function(t, i, e) { i === r.__isAnimating && (r.__isAnimating = !1), (r.__didDecelerationComplete || e) && r.options.scrollingComplete(), r.options.zooming && (r.__computeScrollMax(), r.__zoomComplete && (r.__zoomComplete(), r.__zoomComplete = null)) };
								r.__isAnimating = core.effect.Animate.start(f, m, g, r.options.animationDuration, a ? i : n)
							} else r.__scheduledLeft = r.__scrollLeft = t, r.__scheduledTop = r.__scrollTop = e, r.__scheduledZoom = r.__zoomLevel = s, r.__callback && r.__callback(t, e, s), r.options.zooming && (r.__computeScrollMax(), r.__zoomComplete && (r.__zoomComplete(), r.__zoomComplete = null))
						},
						__computeScrollMax: function(t) {
							var i = this;
							null == t && (t = i.__zoomLevel), i.__maxScrollLeft = Math.max(i.__contentWidth * t - i.__clientWidth, 0), i.__maxScrollTop = Math.max(i.__contentHeight * t - i.__clientHeight, 0)
						},
						__startDeceleration: function(t) {
							var i = this;
							if(i.options.paging) {
								var e = Math.max(Math.min(i.__scrollLeft, i.__maxScrollLeft), 0),
									n = Math.max(Math.min(i.__scrollTop, i.__maxScrollTop), 0),
									s = i.__clientWidth,
									o = i.__clientHeight;
								i.__minDecelerationScrollLeft = Math.floor(e / s) * s, i.__minDecelerationScrollTop = Math.floor(n / o) * o, i.__maxDecelerationScrollLeft = Math.ceil(e / s) * s, i.__maxDecelerationScrollTop = Math.ceil(n / o) * o
							} else i.__minDecelerationScrollLeft = 0, i.__minDecelerationScrollTop = 0, i.__maxDecelerationScrollLeft = i.__maxScrollLeft, i.__maxDecelerationScrollTop = i.__maxScrollTop;
							var r = function(t, e, n) { i.__stepThroughDeceleration(n) },
								a = i.options.snapping ? 4 : .1,
								h = function() { var t = Math.abs(i.__decelerationVelocityX) >= a || Math.abs(i.__decelerationVelocityY) >= a; return t || (i.__didDecelerationComplete = !0), t },
								c = function(t, e, n) { i.__isDecelerating = !1, i.__didDecelerationComplete && i.options.scrollingComplete(), i.scrollTo(i.__scrollLeft, i.__scrollTop, i.options.snapping) };
							i.__isDecelerating = core.effect.Animate.start(r, h, c)
						},
						__stepThroughDeceleration: function(t) {
							var i = this,
								e = i.__scrollLeft + i.__decelerationVelocityX,
								n = i.__scrollTop + i.__decelerationVelocityY;
							if(!i.options.bouncing) {
								var s = Math.max(Math.min(i.__maxDecelerationScrollLeft, e), i.__minDecelerationScrollLeft);
								s !== e && (e = s, i.__decelerationVelocityX = 0);
								var o = Math.max(Math.min(i.__maxDecelerationScrollTop, n), i.__minDecelerationScrollTop);
								o !== n && (n = o, i.__decelerationVelocityY = 0)
							}
							if(t ? i.__publish(e, n, i.__zoomLevel) : (i.__scrollLeft = e, i.__scrollTop = n), !i.options.paging) {
								var r = .95;
								i.__decelerationVelocityX *= r, i.__decelerationVelocityY *= r
							}
							if(i.options.bouncing) {
								var a = 0,
									h = 0,
									c = i.options.penetrationDeceleration,
									l = i.options.penetrationAcceleration;
								e < i.__minDecelerationScrollLeft ? a = i.__minDecelerationScrollLeft - e : e > i.__maxDecelerationScrollLeft && (a = i.__maxDecelerationScrollLeft - e), n < i.__minDecelerationScrollTop ? h = i.__minDecelerationScrollTop - n : n > i.__maxDecelerationScrollTop && (h = i.__maxDecelerationScrollTop - n), 0 !== a && (a * i.__decelerationVelocityX <= 0 ? i.__decelerationVelocityX += a * c : i.__decelerationVelocityX = a * l), 0 !== h && (h * i.__decelerationVelocityY <= 0 ? i.__decelerationVelocityY += h * c : i.__decelerationVelocityY = h * l)
							}
						}
					};
				for(var o in s) e.prototype[o] = s[o]
			}(), t.exports = e
		}).call(i, function() { return this }())
	}, function(t, i, e) {
		function n(t, i) {
			var e = { inAnimation: "zoomIn", inDuration: 1e3, inEasing: "ease", outAnimation: "zoomOut", outDuration: 1e3, outEasing: "ease", moveDuration: 1e3, moveEasing: "ease", direction: "horizontal", reverse: !1, itemAmount: "auto", itemRenderer: function(t) { return $("<span>").text(t) } };
			this.options = $.extend(e, i), this.$el = t, this.$wrapper = null, this.items = [], this.dirty = !1, this._init()
		}
		e(3);
		var s = e(36);
		n.prototype = {
			_init: function() { this._createWrapper(), this._update() },
			_createWrapper: function() { this.$wrapper = $("<div>").css("position", "relative").css("overflow", "hidden").css("margin", 0).css("padding", 0).width(this.$el.width()).height(this.$el.height()), this.$el.html("").append(this.$wrapper) },
			_createItem: function(t) {
				var i = $("<div>").css("position", "absolute").css("overflow", "hidden").css("margin", 0).css("padding", 0).css("will-change", "transform, -webkit-transform"),
					e = "auto" !== this.options.itemAmount;
				return "horizontal" === this.options.direction ? (i.height(this.$wrapper.height()), e && i.width(this.$wrapper.width() / this.options.itemAmount)) : (i.width(this.$wrapper.width()), e && i.height(this.$wrapper.height() / this.options.itemAmount)), i.append(this.options.itemRenderer(t)), i
			},
			_enter: function(t) {
				t.currentPosition = t.targetPosition, t.tag = "", t.$el.css("opacity", 1);
				var i = s.applyAnimation(t.$el.children().first(), { animationName: this.options.inAnimation, duration: this.options.inDuration, easing: this.options.inEasing, onAnimationEnd: function() { i.revoke() } });
				this._move(t)
			},
			_move: function(t) { t.currentPosition = t.targetPosition, t.tag = "", t.$el.css("transition", "transform " + this.options.moveDuration + "ms " + this.options.moveEasing), t.$el.css("transition", "-webkit-transform " + this.options.moveDuration + "ms " + this.options.moveEasing), "horizontal" === this.options.direction ? (t.$el.css("transform", "translateX(" + t.targetPosition + "px)"), t.$el.css("-webkit-transform", "translateX(" + t.targetPosition + "px)")) : (t.$el.css("transform", "translateY(" + t.targetPosition + "px)"), t.$el.css("-webkit-transform", "translateY(" + t.targetPosition + "px)")) },
			_leave: function(t) {
				var i = s.applyAnimation(t.$el.children().first(), { animationName: this.options.outAnimation, duration: this.options.outDuration, easing: this.options.outEasing, onAnimationEnd: function() { t.$el.remove(), i.revoke() } });
				this._move(t)
			},
			_update: function() {
				if(requestAnimationFrame(this._update.bind(this)), this.dirty) {
					var t = [];
					this.items.forEach(function(i) {
						switch(i.tag) {
							case "enter":
								this._enter(i), t.push(i);
								break;
							case "move":
								this._move(i), t.push(i);
								break;
							case "leave":
								this._leave(i)
						}
					}, this), this.items = t, this.dirty = !1
				}
			},
			_tag: function() {
				var t = "auto" !== this.options.itemAmount,
					i = this.options.itemAmount;
				this.items.forEach(function(e, n) {
					n === this.items.length - 1 ? e.tag = "enter" : t && this.items.length > i && n < this.items.length - i ? (console.log("index ", n),
						e.tag = "leave") : !t && this._reachBoundry(e) ? e.tag = "leave" : e.tag = "move", e.targetPosition = e.currentPosition + this.incomingOffset
				}, this)
			},
			_reachBoundry: function(t) {
				var i = this.$wrapper[0].getBoundingClientRect(),
					e = t.$el[0].getBoundingClientRect();
				return "horizontal" === this.options.direction ? this.options.reverse ? e.left < i.left : e.right > i.right : this.options.reverse ? e.top < i.top : e.bottom > i.bottom
			},
			_initPosition: function(t) { var i = 0; return "horizontal" === this.options.direction ? (i = this.options.reverse ? this.$wrapper.width() : -1 * t.outerWidth(!0), t.css("transform", "translateX(" + i + "px)").css("-webkit-transform", "translateX(" + i + "px)").css("opacity", 0)) : (i = this.options.reverse ? this.$wrapper.height() : -1 * t.outerHeight(!0), t.css("transform", "translateY(" + i + "px)").css("-webkit-transform", "translateY(" + i + "px)").css("opacity", 0)), i },
			_setIncomingOffset: function(t) {
				var i;
				i = "horizontal" === this.options.direction ? this.options.reverse ? -1 * t.outerWidth(!0) : t.outerWidth(!0) : this.options.reverse ? -1 * t.outerHeight(!0) : t.outerHeight(!0), this.incomingOffset = i
			},
			push: function(t) {
				var i, e = this._createItem(t);
				this.$wrapper.append(e), i = this._initPosition(e), this._setIncomingOffset(e), this.items.push({ $el: e, data: t, currentPosition: i }), this._tag(), setTimeout(function() { this.dirty = !0 }.bind(this), 10)
			}
		}, t.exports = wy.effect.AnimatedList = n
	}]);
	//# sourceMappingURL=bundle.js.map
}