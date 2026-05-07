import { Fragment as e, Transition as t, TransitionGroup as n, computed as r, createApp as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, nextTick as p, normalizeClass as m, normalizeStyle as h, onMounted as g, openBlock as _, provide as v, reactive as y, ref as ee, renderList as b, renderSlot as x, resolveComponent as S, toDisplayString as C, toRaw as te, useSlots as ne, watch as w, withCtx as T } from "vue";
//#region \0rolldown/runtime.js
var re = Object.create, ie = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, oe = Object.getOwnPropertyNames, se = Object.getPrototypeOf, E = Object.prototype.hasOwnProperty, D = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), O = (e, t) => {
	let n = {};
	for (var r in e) ie(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ie(n, Symbol.toStringTag, { value: "Module" }), n;
}, k = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = oe(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !E.call(e, s) && s !== n && ie(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ae(t, s)) || r.enumerable
	});
	return e;
}, A = (e, t, n) => (n = e == null ? {} : re(se(e)), k(t || !e || !e.__esModule ? ie(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), ce = /* @__PURE__ */ D(((e, t) => {
	function n(e, t) {
		var n = t.length, r = e.length;
		if (r > n) return !1;
		if (r === n) return e === t;
		outer: for (var i = 0, a = 0; i < r; i++) {
			for (var o = e.charCodeAt(i); a < n;) if (t.charCodeAt(a++) === o) continue outer;
			return !1;
		}
		return !0;
	}
	t.exports = n;
})), le = /* @__PURE__ */ A((/* @__PURE__ */ D(((e, t) => {
	function n() {}
	t.exports = n;
})))()), j = process.env.NODE_ENV === "production" ? le.default : function(e, t) {
	if (!e()) {
		let e = ["[Vue-Treeselect Warning]"].concat(t());
		console.error(...e);
	}
};
//#endregion
//#region src/vueTreeSelect/utils/onLeftClick.ts
function M(e) {
	return function(t, ...n) {
		t.type === "mousedown" && t.button === 0 && e.call(this, t, ...n);
	};
}
//#endregion
//#region src/vueTreeSelect/utils/scrollIntoView.ts
function ue(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
	r.bottom + i > n.bottom ? e.scrollTop = Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight) : r.top - i < n.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
//#endregion
//#region node_modules/lodash/isObject.js
var N = /* @__PURE__ */ D(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), P = /* @__PURE__ */ D(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), F = /* @__PURE__ */ D(((e, t) => {
	var n = P(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), de = /* @__PURE__ */ D(((e, t) => {
	var n = F();
	t.exports = function() {
		return n.Date.now();
	};
})), fe = /* @__PURE__ */ D(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), pe = /* @__PURE__ */ D(((e, t) => {
	var n = fe(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), me = /* @__PURE__ */ D(((e, t) => {
	t.exports = F().Symbol;
})), he = /* @__PURE__ */ D(((e, t) => {
	var n = me(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), ge = /* @__PURE__ */ D(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), _e = /* @__PURE__ */ D(((e, t) => {
	var n = me(), r = he(), i = ge(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), ve = /* @__PURE__ */ D(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), ye = /* @__PURE__ */ D(((e, t) => {
	var n = _e(), r = ve(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), be = /* @__PURE__ */ D(((e, t) => {
	var n = pe(), r = N(), i = ye(), a = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt;
	function u(e) {
		if (typeof e == "number") return e;
		if (i(e)) return a;
		if (r(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = r(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = n(e);
		var u = s.test(e);
		return u || c.test(e) ? l(e.slice(2), u ? 2 : 8) : o.test(e) ? a : +e;
	}
	t.exports = u;
})), xe = /* @__PURE__ */ A((/* @__PURE__ */ D(((e, t) => {
	var n = N(), r = de(), i = be(), a = "Expected a function", o = Math.max, s = Math.min;
	function c(e, t, c) {
		var l, u, d, f, p, m, h = 0, g = !1, _ = !1, v = !0;
		if (typeof e != "function") throw TypeError(a);
		t = i(t) || 0, n(c) && (g = !!c.leading, _ = "maxWait" in c, d = _ ? o(i(c.maxWait) || 0, t) : d, v = "trailing" in c ? !!c.trailing : v);
		function y(t) {
			var n = l, r = u;
			return l = u = void 0, h = t, f = e.apply(r, n), f;
		}
		function ee(e) {
			return h = e, p = setTimeout(S, t), g ? y(e) : f;
		}
		function b(e) {
			var n = e - m, r = e - h, i = t - n;
			return _ ? s(i, d - r) : i;
		}
		function x(e) {
			var n = e - m, r = e - h;
			return m === void 0 || n >= t || n < 0 || _ && r >= d;
		}
		function S() {
			var e = r();
			if (x(e)) return C(e);
			p = setTimeout(S, b(e));
		}
		function C(e) {
			return p = void 0, v && l ? y(e) : (l = u = void 0, f);
		}
		function te() {
			p !== void 0 && clearTimeout(p), h = 0, l = m = u = p = void 0;
		}
		function ne() {
			return p === void 0 ? f : C(r());
		}
		function w() {
			var e = r(), n = x(e);
			if (l = arguments, u = this, m = e, n) {
				if (p === void 0) return ee(m);
				if (_) return clearTimeout(p), p = setTimeout(S, t), y(m);
			}
			return p === void 0 && (p = setTimeout(S, t)), f;
		}
		return w.cancel = te, w.flush = ne, w;
	}
	t.exports = c;
})))()), Se = (function(e, t) {
	var n = document.createElement("_"), r = n.appendChild(document.createElement("_")), i = n.appendChild(document.createElement("_")), a = r.appendChild(document.createElement("_")), o = void 0, s = void 0;
	return r.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", a.style.cssText = i.style.cssText = "display:block;height:100%;transition:0s;width:100%", a.style.width = a.style.height = "200%", e.appendChild(n), c(), u;
	function c() {
		l();
		var a = e.offsetWidth, u = e.offsetHeight;
		(a !== o || u !== s) && (o = a, s = u, i.style.width = a * 2 + "px", i.style.height = u * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, t({
			width: a,
			height: u
		})), r.addEventListener("scroll", c), n.addEventListener("scroll", c);
	}
	function l() {
		r.removeEventListener("scroll", c), n.removeEventListener("scroll", c);
	}
	function u() {
		l(), e.removeChild(n);
	}
});
//#endregion
//#region src/vueTreeSelect/utils/removeFromArray.ts
function Ce(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
//#endregion
//#region src/vueTreeSelect/utils/watchSize.ts
var I, L = [], we = 100;
function R() {
	I = setInterval(() => {
		L.forEach(Ee);
	}, we);
}
function Te() {
	clearInterval(I), I = null;
}
function Ee(e) {
	let { $el: t, listener: n, lastWidth: r, lastHeight: i } = e, a = t.offsetWidth, o = t.offsetHeight;
	(r !== a || i !== o) && (e.lastWidth = a, e.lastHeight = o, n({
		width: a,
		height: o
	}));
}
function De(e, t) {
	let n = {
		$el: e,
		listener: t,
		lastWidth: null,
		lastHeight: null
	};
	return L.push(n), Ee(n), R(), () => {
		Ce(L, n), L.length || Te();
	};
}
function Oe(e, t) {
	let n = document.documentMode === 9, r = !0, i = (n ? De : Se)(e, (...e) => r || t(...e));
	return r = !1, i;
}
//#endregion
//#region src/vueTreeSelect/utils/setupResizeAndScrollEventListeners.ts
function z(e) {
	let t = [], n = e.parentNode;
	for (; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE;) B(n) && t.push(n), n = n.parentNode;
	return t.push(window), t;
}
function B(e) {
	let { overflow: t, overflowX: n, overflowY: r } = getComputedStyle(e);
	return /(auto|scroll|overlay)/.test(t + r + n);
}
function V(e, t) {
	let n = z(e);
	return window.addEventListener("resize", t, { passive: !0 }), n.forEach((e) => {
		e.addEventListener("scroll", t, { passive: !0 });
	}), function() {
		window.removeEventListener("resize", t, { passive: !0 }), n.forEach((e) => {
			e.removeEventListener("scroll", t, { passive: !0 });
		});
	};
}
//#endregion
//#region src/vueTreeSelect/utils/isNaN.ts
function ke(e) {
	return e !== e;
}
//#endregion
//#region node_modules/is-promise/index.mjs
function Ae(e) {
	return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
//#endregion
//#region node_modules/lodash/toFinite.js
var je = /* @__PURE__ */ D(((e, t) => {
	var n = be(), r = Infinity, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), Me = /* @__PURE__ */ D(((e, t) => {
	var n = je();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), Ne = /* @__PURE__ */ D(((e, t) => {
	var n = Me(), r = "Expected a function";
	function i(e, t) {
		var i;
		if (typeof t != "function") throw TypeError(r);
		return e = n(e), function() {
			return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = void 0), i;
		};
	}
	t.exports = i;
})), Pe = /* @__PURE__ */ A((/* @__PURE__ */ D(((e, t) => {
	var n = Ne();
	function r(e) {
		return n(2, e);
	}
	t.exports = r;
})))()), Fe = /* @__PURE__ */ A((/* @__PURE__ */ D(((e, t) => {
	function n(e) {
		return e;
	}
	t.exports = n;
})))()), Ie = /* @__PURE__ */ A((/* @__PURE__ */ D(((e, t) => {
	function n(e) {
		return function() {
			return e;
		};
	}
	t.exports = n;
})))()), H = () => Object.create(null), Le = /* @__PURE__ */ A((/* @__PURE__ */ D(((e, t) => {
	function n(e) {
		var t = e == null ? 0 : e.length;
		return t ? e[t - 1] : void 0;
	}
	t.exports = n;
})))());
//#endregion
//#region src/vueTreeSelect/utils/includes.ts
function U(e, t) {
	return e.indexOf(t) !== -1;
}
//#endregion
//#region src/vueTreeSelect/utils/find.ts
function Re(e, t, n) {
	for (let r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r, e)) return e[r];
}
//#endregion
//#region src/vueTreeSelect/utils/quickDiff.ts
function ze(e, t) {
	if (e.length !== t.length) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
	return !1;
}
//#endregion
//#region src/vueTreeSelect/utils/instanceIdSingleton.ts
var Be = 0, Ve = () => Be++, He = /* @__PURE__ */ A(ce()), W = "ALL_CHILDREN", Ue = "ALL_DESCENDANTS", We = "LEAF_CHILDREN", Ge = "LEAF_DESCENDANTS", Ke = "LOAD_ROOT_OPTIONS", qe = "LOAD_CHILDREN_OPTIONS", Je = "ASYNC_SEARCH", Ye = "BRANCH_PRIORITY", Xe = "LEAF_PRIORITY", Ze = "ALL_WITH_INDETERMINATE", Qe = "ORDER_SELECTED", $e = "LEVEL", et = "INDEX", G = {
	BACKSPACE: 8,
	ENTER: 13,
	ESCAPE: 27,
	END: 35,
	HOME: 36,
	ARROW_LEFT: 37,
	ARROW_UP: 38,
	ARROW_RIGHT: 39,
	ARROW_DOWN: 40,
	DELETE: 46
}, tt = process.env.NODE_ENV === "testing" ? 10 : /* istanbul ignore next */ 200, nt = f({
	name: "vue-treeselect--hidden-fields",
	inject: ["instance"],
	computed: {
		canRender() {
			return !this.instance || !this.instance.name || this.instance.disabled || !this.instance.hasValue;
		},
		values() {
			let e = this.instance.internalValue.value.map(this.stringifyValue);
			return this.instance.multiple && this.instance.joinValues && (e = [e.join(this.instance.delimiter)]), e;
		}
	},
	methods: { stringifyValue(e) {
		// istanbul ignore next
		return typeof e == "string" ? e : 
		// istanbul ignore else
e != null && !ke(e) ? JSON.stringify(e) : "";
	} }
}), K = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, q = ["name", "value"];
function J(t, n, r, i, a, c) {
	return t.canRender ? (_(!0), s(e, { key: 0 }, b(t.values, (e, n) => (_(), s("input", {
		type: "hidden",
		name: t.instance.name,
		value: e,
		key: "hidden-field-" + n
	}, null, 8, q))), 128)) : o("", !0);
}
var rt = /* @__PURE__ */ K(nt, [["render", J]]), it = [
	G.ENTER,
	G.END,
	G.HOME,
	G.ARROW_LEFT,
	G.ARROW_UP,
	G.ARROW_RIGHT,
	G.ARROW_DOWN
], at = {
	name: "vue-treeselect--input",
	inject: ["instance"],
	data: () => ({
		inputWidth: 5,
		value: ""
	}),
	computed: {
		isSearchable() {
			return this.instance.searchable;
		},
		isDisabled() {
			return this.instance.disabled;
		},
		isRequired() {
			return this.instance.required;
		},
		tabIndex() {
			return this.instance.tabIndex;
		},
		hasValue() {
			return this.instance.hasValue.value;
		},
		isEmpty() {
			return !this.value.length;
		},
		needAutoSize() {
			let { instance: e } = this;
			return e.searchable && !e.disabled && e.multiple;
		},
		inputStyle() {
			return {};
		}
	},
	watch: {
		"instance.trigger.searchQuery"(e) {
			this.value = e;
		},
		value() {
			// istanbul ignore else
			this.needAutoSize && this.$nextTick(this.updateInputWidth);
		}
	},
	mounted() {
		this.debouncedCallback = (0, xe.default)(this.updateSearchQuery, tt, {
			leading: !0,
			trailing: !0
		});
	},
	methods: {
		clear() {
			this.onInput({ target: { value: "" } });
		},
		focus() {
			let { instance: e } = this;
			e.disabled || this.$refs.input && this.$refs.input.focus();
		},
		blur() {
			this.$refs.input && this.$refs.input.blur();
		},
		onFocus() {
			let { instance: e } = this;
			// istanbul ignore else
			e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
		},
		onBlur() {
			let { instance: e } = this, t = e.getMenu();
			// istanbul ignore next
			if (t && document.activeElement === t) return this.focus();
			e.trigger.isFocused = !1, this.value = "";
		},
		onInput(e) {
			let { value: t } = e.target;
			this.value = t, t ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
		},
		onKeyDown(e) {
			let { instance: t } = this, n = "which" in e ? e.which : 			/* istanbul ignore next */ e.keyCode;
			if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
				if (!t.menu.isOpen && U(it, n)) return e.preventDefault(), t.openMenu();
				switch (n) {
					case G.BACKSPACE:
						t.backspaceRemoves && !this.value.length && t.removeLastValue();
						break;
					case G.ENTER: {
						if (e.preventDefault(), t.menu.current === null) return;
						let n = t.getNode(t.menu.current);
						if (n.isBranch && t.disableBranchNodes) return;
						t.select(n);
						break;
					}
					case G.ESCAPE:
						this.value.length ? this.clear() : t.menu.isOpen && t.closeMenu();
						break;
					case G.END:
						e.preventDefault(), t.highlightLastOption();
						break;
					case G.HOME:
						e.preventDefault(), t.highlightFirstOption();
						break;
					case G.ARROW_LEFT: {
						let n = t.getNode(t.menu.current);
						n.isBranch && t.shouldExpand(n) ? (e.preventDefault(), t.toggleExpanded(n)) : !n.isRootNode && (n.isLeaf || n.isBranch && !t.shouldExpand(n)) && (e.preventDefault(), t.setCurrentHighlightedOption(n.parentNode));
						break;
					}
					case G.ARROW_UP:
						e.preventDefault(), t.highlightPrevOption();
						break;
					case G.ARROW_RIGHT: {
						let n = t.getNode(t.menu.current);
						n.isBranch && !t.shouldExpand(n) && (e.preventDefault(), t.toggleExpanded(n));
						break;
					}
					case G.ARROW_DOWN:
						e.preventDefault(), t.highlightNextOption();
						break;
					case G.DELETE:
						t.deleteRemoves && !this.value.length && t.removeLastValue();
						break;
					default:
 // istanbul ignore else
					t.openMenu();
				}
			}
		},
		onMouseDown(e) {
			// istanbul ignore next
			this.value.length && e.stopPropagation();
		},
		updateInputWidth() {
			this.inputWidth = Math.max(5, this.$refs.sizer.scrollWidth + 15);
		},
		updateSearchQuery() {
			let { instance: e } = this;
			e.trigger.searchQuery = this.value;
		}
	}
}, ot = ["tabindex"], st = [
	"tabIndex",
	"required",
	"value"
];
function ct(t, n, r, i, a, l) {
	return _(), s("div", {
		class: "vue-treeselect__input-container",
		tabindex: !l.isSearchable && !l.isDisabled ? l.instance.tabIndex : "",
		onFocus: n[5] ||= (e) => l.isSearchable ? null : l.onFocus,
		onBlur: n[6] ||= (e) => l.isSearchable ? null : l.onBlur,
		onKeydown: n[7] ||= (e) => l.isSearchable ? null : l.onKeyDown
	}, [l.isSearchable && !l.isDisabled ? (_(), s(e, { key: 0 }, [c("input", {
		ref: "input",
		class: m(["vue-treeselect__input", { "is-empty": l.isEmpty }]),
		type: "text",
		autocomplete: "off",
		tabIndex: l.tabIndex,
		required: l.isRequired && !l.hasValue,
		value: t.value,
		style: h(l.inputStyle),
		onFocus: n[0] ||= (...e) => l.onFocus && l.onFocus(...e),
		onInput: n[1] ||= (...e) => l.onInput && l.onInput(...e),
		onBlur: n[2] ||= (...e) => l.onBlur && l.onBlur(...e),
		onKeydown: n[3] ||= (...e) => l.onKeyDown && l.onKeyDown(...e),
		onMousedown: n[4] ||= (...e) => l.onMouseDown && l.onMouseDown(...e)
	}, null, 46, st), l.needAutoSize ? (_(), s("div", {
		key: 0,
		ref: "sizer",
		class: "vue-treeselect__sizer"
	}, C(t.value), 513)) : o("", !0)], 64)) : o("", !0)], 40, ot);
}
var Y = /* @__PURE__ */ K(at, [["render", ct]]), lt = {
	name: "vue-treeselect--placeholder",
	inject: ["instance"],
	computed: {
		hasValue() {
			return this.instance.hasValue.value;
		},
		hasSearchQuery() {
			return !!this.instance.trigger.searchQuery;
		}
	}
};
//#endregion
//#region src/vueTreeSelect/components/Placeholder.vue
function ut(e, t, n, r, i, a) {
	return _(), s("div", { class: m({
		"vue-treeselect__placeholder": !0,
		"vue-treeselect-helper-zoom-effect-off": !0,
		"vue-treeselect-helper-hide": a.hasValue || a.hasSearchQuery
	}) }, C(a.instance.placeholder), 3);
}
var dt = /* @__PURE__ */ K(lt, [["render", ut]]), ft = {
	name: "vue-treeselect--single-value",
	inject: ["instance"],
	components: {
		Placeholder: dt,
		Input: Y
	},
	computed: {
		node() {
			return this.instance.selectedNodes.value[0];
		},
		hasValue() {
			return this.instance.hasValue.value;
		},
		hasActiveQuery() {
			return this.instance.trigger.searchQuery;
		},
		isFocused() {
			return this.instance.trigger.isFocused;
		}
	}
}, X = {
	key: 0,
	class: "vue-treeselect__value-container"
}, pt = { class: "vue-treeselect__single-value s-value-container" };
function mt(t, n, r, i, l, f) {
	let p = S("Placeholder"), h = S("Input");
	return _(), s(e, null, [
		f.hasValue ? (_(), s("div", X, [c("div", pt, [t.$slots["value-label"] ? x(t.$slots, "value-label", {
			key: 0,
			node: f.node
		}) : (_(), s(e, { key: 1 }, [u(C(f.node.label), 1)], 64))])])) : o("", !0),
		!f.hasValue && !f.isFocused ? (_(), a(p, {
			key: 1,
			class: "s-value-container"
		})) : o("", !0),
		d(h, {
			ref: "input",
			class: m({ "as-overlay": f.hasValue })
		}, null, 8, ["class"])
	], 64);
}
var Z = /* @__PURE__ */ K(ft, [["render", mt]]), ht = { name: "vue-treeselect--x" }, gt = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 348.333 348.333"
};
function _t(e, t, n, r, i, a) {
	return _(), s("svg", gt, [...t[0] ||= [c("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)]]);
}
var vt = /* @__PURE__ */ K(ht, [["render", _t]]), yt = {
	name: "vue-treeselect--multi-value-item",
	inject: ["instance"],
	components: { DeleteIcon: vt },
	props: { node: {
		type: Object,
		required: !0
	} },
	computed: { itemClass() {
		return {
			"vue-treeselect__multi-value-item": !0,
			"vue-treeselect__multi-value-item-disabled": this.node.isDisabled,
			"vue-treeselect__multi-value-item-new": this.node.isNew
		};
	} },
	methods: { handleMouseDown: M(function() {
		let { instance: e, node: t } = this;
		e.select(t);
	}) }
}, bt = { class: "vue-treeselect__multi-value-item-container" }, xt = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
function Q(t, n, r, i, a, o) {
	let l = S("DeleteIcon");
	return _(), s("div", bt, [c("div", {
		class: m(o.itemClass),
		onMousedown: n[0] ||= (...e) => o.handleMouseDown && o.handleMouseDown(...e)
	}, [t.$slots["value-label"] ? x(t.$slots, "value-label", {
		key: 0,
		node: r.node
	}) : (_(), s(e, { key: 1 }, [u(C(r.node.label), 1)], 64)), c("span", xt, [d(l)])], 34)]);
}
//#endregion
//#region src/vueTreeSelect/components/MultiValue.vue?vue&type=script&lang.ts
var $ = {
	name: "vue-treeselect--multi-value",
	inject: ["instance"],
	components: {
		Placeholder: dt,
		TransitionGroup: n,
		Input: Y,
		MultiValueItem: /* @__PURE__ */ K(yt, [["render", Q]])
	},
	computed: {
		multiValueItems() {
			return this.instance.internalValue.value.slice(0, this.instance.limit).map(this.instance.getNode);
		},
		count() {
			return this.instance.internalValue.length - this.instance.limit;
		},
		isFocused() {
			return this.instance.trigger.isFocused;
		},
		hasValue() {
			return this.instance.hasValue.value;
		}
	}
}, St = {
	class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
	key: "exceed-limit-tip"
}, Ct = { class: "vue-treeselect__limit-tip-text" };
function wt(t, n, r, i, u, f) {
	let p = S("MultiValueItem"), m = S("Placeholder"), h = S("Input");
	return _(), s(e, null, [
		(_(!0), s(e, null, b(f.multiValueItems, (e) => (_(), a(p, {
			key: `multi-value-item-${e.id}`,
			node: e
		}, l({ _: 2 }, [t.$slots["value-label"] ? {
			name: "value-label",
			fn: T(({ node: e }) => [x(t.$slots, "value-label", { node: e })]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128)),
		f.count > 0 ? (_(), s("div", St, [c("span", Ct, C(f.instance.limitText(f.count)), 1)])) : o("", !0),
		!f.hasValue && !f.isFocused ? (_(), a(m, { key: "placeholder" })) : o("", !0),
		d(h, {
			ref: "input",
			key: "input"
		}, null, 512)
	], 64);
}
var Tt = /* @__PURE__ */ K($, [["render", wt]]), Et = { name: "vue-treeselect--arrow" }, Dt = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 292.362 292.362"
};
function Ot(e, t, n, r, i, a) {
	return _(), s("svg", Dt, [...t[0] ||= [c("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)]]);
}
var kt = /* @__PURE__ */ K(Et, [["render", Ot]]), At = {
	name: "vue-treeselect--control",
	inject: ["instance"],
	components: {
		SingleValue: Z,
		MultiValue: Tt,
		DeleteIcon: vt,
		ArrowIcon: kt
	},
	data() {
		return {
			SingleValue: Z,
			MultiValue: Tt
		};
	},
	computed: {
		isSingle() {
			return this.instance.single.value;
		},
		shouldShowX() {
			let { instance: e } = this;
			return e.clearable && !e.disabled && e.hasValue && (this.hasUndisabledValue || e.allowClearingDisabled);
		},
		shouldShowArrow() {
			let { instance: e } = this;
			return e.alwaysOpen ? !e.menu.isOpen : !0;
		},
		hasUndisabledValue() {
			let { instance: e } = this;
			return e.hasValue && e.internalValue.value.some((t) => !e.getNode(t).isDisabled);
		}
	},
	methods: {
		getTitleX() {
			return this.instance.multiple ? this.instance.clearAllText : this.instance.clearValueText;
		},
		getArrowClass() {
			return {
				"vue-treeselect__control-arrow": !0,
				"vue-treeselect__control-arrow--rotated": this.instance.menu.isOpen
			};
		},
		handleMouseDownOnX: M(function(e) {
			e.stopPropagation(), e.preventDefault();
			let { instance: t } = this, n = t.beforeClearAll(), r = (e) => {
				e && t.clear();
			};
			Ae(n) ? n.then(r) : setTimeout(() => r(n), 0);
		}),
		handleMouseDownOnArrow: M(function(e) {
			e.preventDefault(), e.stopPropagation();
			let { instance: t } = this;
			t.focusInput(), t.toggleMenu();
		})
	}
}, jt = ["title"];
function Mt(e, t, n, r, i, u) {
	let f = S("SingleValue"), p = S("MultiValue"), h = S("DeleteIcon"), g = S("ArrowIcon");
	return _(), s("div", {
		class: "vue-treeselect__control",
		onMousedown: t[2] ||= (...e) => u.instance.handleMouseDown && u.instance.handleMouseDown(...e)
	}, [
		u.isSingle ? (_(), a(f, {
			key: 0,
			ref: "value-container"
		}, l({ _: 2 }, [e.$slots["value-label"] ? {
			name: "value-label",
			fn: T(({ node: t }) => [x(e.$slots, "value-label", { node: t })]),
			key: "0"
		} : void 0]), 1536)) : (_(), a(p, {
			key: 1,
			ref: "value-container"
		}, l({ _: 2 }, [e.$slots["value-label"] ? {
			name: "value-label",
			fn: T(({ node: t }) => [x(e.$slots, "value-label", { node: t })]),
			key: "0"
		} : void 0]), 1536)),
		u.shouldShowX ? (_(), s("div", {
			key: 2,
			class: "vue-treeselect__x-container",
			title: u.getTitleX(),
			onMousedown: t[0] ||= (...e) => u.handleMouseDownOnX && u.handleMouseDownOnX(...e)
		}, [d(h, { class: "vue-treeselect__x" })], 40, jt)) : o("", !0),
		c("div", {
			class: "vue-treeselect__control-arrow-container",
			onMousedown: t[1] ||= (...e) => u.handleMouseDownOnArrow && u.handleMouseDownOnArrow(...e)
		}, [d(g, { class: m(u.getArrowClass()) }, null, 8, ["class"])], 32)
	], 32);
}
var Nt = /* @__PURE__ */ K(At, [["render", Mt]]), Pt = f({
	name: "vue-treeselect--tip",
	props: {
		type: {
			type: String,
			required: !0
		},
		icon: {
			type: String,
			required: !0
		}
	}
}), Ft = { class: "vue-treeselect__icon-container" };
function It(e, t, n, r, i, a) {
	return _(), s("div", { class: m(`vue-treeselect__tip vue-treeselect__${e.type}-tip`) }, [c("div", Ft, [c("span", { class: m(`vue-treeselect__icon-${e.icon}`) }, null, 2)]), c("span", { class: m(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`) }, [x(e.$slots, "default")], 2)], 2);
}
var Lt = /* @__PURE__ */ K(Pt, [["render", It]]), Rt = {
	name: "VueTreeselectOption",
	inject: ["instance"],
	components: {
		ArrowIcon: kt,
		Transition: t,
		Tip: Lt
	},
	props: { node: {
		type: Object,
		required: !0
	} },
	data() {
		return {
			UNCHECKED: 0,
			INDETERMINATE: 1,
			CHECKED: 2
		};
	},
	computed: {
		isSingle() {
			return this.instance.single.value;
		},
		shouldExpand() {
			let { instance: e, node: t } = this;
			return t.isBranch && e.shouldExpand(t);
		},
		shouldShow() {
			let { instance: e, node: t } = this;
			return e.shouldShowOptionInMenu(t);
		},
		checkedState() {
			return this.instance.forest.checkedStateMap[this.node.id];
		},
		shouldShowCount() {
			return this.node.isBranch && (this.instance.localSearch.active ? this.instance.showCountOnSearchComputed : this.instance.showCount);
		},
		childrenStatesLoaded() {
			return this.node.childrenStates.isLoaded;
		}
	},
	methods: {
		getCount() {
			return this.shouldShowCount ? this.instance.localSearch.active ? this.instance.localSearch.countMap[this.node.id][this.instance.showCountOf] : this.node.count[this.instance.showCountOf] : NaN;
		},
		handleMouseEnterOption(e) {
			let { instance: t, node: n } = this;
			e.target === e.currentTarget && t.setCurrentHighlightedOption(n, !1);
		},
		handleMouseDownOnArrow: M(function() {
			let { instance: e, node: t } = this;
			e.toggleExpanded(t);
		}),
		handleMouseDownOnLabelContainer: M(function() {
			let { instance: e, node: t } = this;
			t.isBranch && e.disableBranchNodes ? e.toggleExpanded(t) : e.select(t);
		}),
		handleMouseDownOnRetry: M(function() {
			let { instance: e, node: t } = this;
			e.loadChildrenOptions(t);
		})
	}
}, zt = ["data-id"], Bt = {
	key: 1,
	class: "vue-treeselect__option-arrow-placeholder"
}, Vt = {
	key: 0,
	class: "vue-treeselect__checkbox-container"
}, Ht = {
	key: 2,
	class: /* @__PURE__ */ m("vue-treeselect__label")
}, Ut = {
	key: 0,
	class: /* @__PURE__ */ m("vue-treeselect__count")
}, Wt = { key: 0 }, Gt = { class: "vue-treeselect__list" }, Kt = ["title"];
function qt(n, r, i, f, p, h) {
	let g = S("ArrowIcon"), v = S("VueTreeselectOption"), y = S("Tip");
	return _(), s("div", { class: m({
		"vue-treeselect__list-item": !0,
		[`vue-treeselect__indent-level-${h.instance.shouldFlattenOptions ? 0 : i.node.level}`]: !0
	}) }, [c("div", {
		class: m({
			"vue-treeselect__option": !0,
			"vue-treeselect__option--disabled": i.node.isDisabled,
			"vue-treeselect__option--selected": h.instance.isSelected(i.node),
			"vue-treeselect__option--highlight": i.node.isHighlighted,
			"vue-treeselect__option--matched": h.instance.localSearch.active && i.node.isMatched,
			"vue-treeselect__option--hide": !h.shouldShow
		}),
		onMouseenter: r[2] ||= (...e) => h.handleMouseEnterOption && h.handleMouseEnterOption(...e),
		"data-id": i.node.id
	}, [h.instance.shouldFlattenOptions && this.shouldShow ? o("", !0) : (_(), s(e, { key: 0 }, [i.node.isBranch ? (_(), s("div", {
		key: 0,
		class: "vue-treeselect__option-arrow-container",
		onMousedown: r[0] ||= (...e) => h.handleMouseDownOnArrow && h.handleMouseDownOnArrow(...e)
	}, [d(g, { class: m({
		"vue-treeselect__option-arrow": !0,
		"vue-treeselect__option-arrow--rotated": h.shouldExpand
	}) }, null, 8, ["class"])], 32)) : o("", !0), h.instance.hasBranchNodes ? (_(), s("div", Bt, "\xA0")) : o("", !0)], 64)), c("div", {
		class: "vue-treeselect__label-container",
		onMousedown: r[1] ||= (...e) => h.handleMouseDownOnLabelContainer && h.handleMouseDownOnLabelContainer(...e)
	}, [!h.isSingle && !(h.instance.disableBranchNodes && i.node.isBranch) ? (_(), s("div", Vt, [c("span", { class: m({
		"vue-treeselect__checkbox": !0,
		"vue-treeselect__checkbox--checked": h.checkedState === p.CHECKED,
		"vue-treeselect__checkbox--indeterminate": h.checkedState === p.INDETERMINATE,
		"vue-treeselect__checkbox--unchecked": h.checkedState === p.UNCHECKED,
		"vue-treeselect__checkbox--disabled": i.node.isDisabled
	}) }, [...r[4] ||= [c("span", { class: "vue-treeselect__check-mark" }, null, -1), c("span", { class: "vue-treeselect__minus-mark" }, null, -1)]], 2)])) : o("", !0), n.$slots["option-label"] ? x(n.$slots, "option-label", {
		key: 1,
		node: i.node,
		shouldShowCount: h.shouldShowCount,
		count: h.getCount()
	}) : (_(), s("label", Ht, [u(C(i.node.label) + " ", 1), h.shouldShowCount ? (_(), s("span", Ut, "({ getCount() })")) : o("", !0)]))], 32)], 42, zt), i.node.isBranch && h.shouldExpand ? (_(), s("div", Wt, [d(t, { name: "vue-treeselect__list--transition" }, {
		default: T(() => [c("div", Gt, [h.childrenStatesLoaded ? (_(!0), s(e, { key: 0 }, b(i.node.children, (e) => (_(), a(v, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [n.$slots["option-label"] ? {
			name: "option-label",
			fn: T(({ node: e, shouldShowCount: t, count: r }) => [x(n.$slots, "option-label", {
				node: e,
				shouldShowCount: t,
				count: r
			})]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128)) : (_(), s(e, { key: 1 }, [
			i.node.childrenStates.isLoaded && !i.node.children.length ? (_(), a(y, {
				key: 0,
				type: "no-children",
				icon: "warning"
			}, {
				default: T(() => [u(C(h.instance.noChildrenText), 1)]),
				_: 1
			})) : o("", !0),
			i.node.childrenStates.isLoading ? (_(), a(y, {
				key: 1,
				type: "loading",
				icon: "loader"
			}, {
				default: T(() => [u(C(h.instance.loadingText), 1)]),
				_: 1
			})) : o("", !0),
			i.node.childrenStates.loadingError ? (_(), a(y, {
				key: 2,
				type: "error",
				icon: "error"
			}, {
				default: T(() => [r[5] ||= u(" { node.childrenStates.loadingError } ", -1), c("a", {
					class: "vue-treeselect__retry",
					title: h.instance.retryTitle,
					onMousedown: r[3] ||= (...e) => h.handleMouseDownOnRetry && h.handleMouseDownOnRetry(...e)
				}, C(h.instance.retryText), 41, Kt)]),
				_: 1
			})) : o("", !0)
		], 64))])]),
		_: 3
	})])) : o("", !0)], 2);
}
var Jt = /* @__PURE__ */ K(Rt, [["render", qt]]), Yt = {
	top: "top",
	bottom: "bottom",
	above: "top",
	below: "bottom"
}, Xt = {
	name: "vue-treeselect--menu",
	inject: ["instance"],
	components: {
		Transition: t,
		Tip: Lt,
		Option: Jt
	},
	computed: {
		getTipIcon() {
			let e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, t = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
			return e ? "warning" : this.entry.isLoading ? "loader" : this.entry.loadingError ? "error" : t ? "warning" : null;
		},
		menuStyle() {
			let { instance: e } = this;
			return { maxHeight: e.maxHeight + "px" };
		},
		menuContainerStyle() {
			let { instance: e } = this;
			return { zIndex: e.appendToBody ? null : e.zIndex };
		},
		getTipText() {
			let e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, t = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
			return e ? this.instance.searchPromptText : this.entry.isLoading ? this.instance.loadingText : this.entry.loadingError ? this.entry.loadingError : t ? this.instance.noResultsText : null;
		},
		getNormalTip() {
			return this.instance.rootOptionsStates.isLoading ? ["loader", this.instance.loadingText] : this.instance.rootOptionsStates.loadingError ? [
				"error",
				this.instance.rootOptionsStates.loadingError,
				this.instance.retryText
			] : this.instance.rootOptionsStates.isLoaded && this.instance.forest.normalizedOptions.length === 0 ? ["warning", this.instance.noOptionsText] : this.instance.localSearch.noResults ? ["warning", this.instance.noResultsText] : null;
		},
		shouldShowSearchPromptTip() {
			return this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions;
		},
		entry() {
			return this.instance.getRemoteSearchEntry();
		},
		normalizedOptions() {
			return te(this.instance.forest.normalizedOptions);
		}
	},
	watch: { "instance.menu.isOpen"(e) {
		e ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
	} },
	mounted() {
		this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null, this.instance.menu.isOpen && this.$nextTick(this.onMenuOpen);
	},
	unmounted() {
		this.onMenuClose();
	},
	methods: {
		onMenuOpen() {
			this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
		},
		onMenuClose() {
			this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
		},
		adjustMenuOpenDirection() {
			let { instance: e } = this;
			if (!e.menu.isOpen) return;
			let t = e.getMenu(), n = e.getControl(), r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), a = r.height, o = window.innerHeight, s = i.top, c = window.innerHeight - i.bottom, l = i.top >= 0 && i.top <= o || i.top < 0 && i.bottom > 0, u = c > a + 40, d = s > a + 40;
			l ? e.openDirection === "auto" ? u || !d ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.menu.placement = Yt[e.openDirection] : e.closeMenu();
		},
		setupMenuSizeWatcher() {
			let { instance: e } = this, t = e.getMenu();
			this.menuSizeWatcher ||= { remove: Oe(t, this.adjustMenuOpenDirection) };
		},
		setupMenuResizeAndScrollEventListeners() {
			let { instance: e } = this, t = e.getControl();
			this.menuResizeAndScrollEventListeners ||= { remove: V(t, this.adjustMenuOpenDirection) };
		},
		removeMenuSizeWatcher() {
			this.menuSizeWatcher &&= (this.menuSizeWatcher.remove(), null);
		},
		removeMenuResizeAndScrollEventListeners() {
			this.menuResizeAndScrollEventListeners &&= (this.menuResizeAndScrollEventListeners.remove(), null);
		}
	}
}, Zt = ["title"], Qt = ["title"];
function $t(t, n, r, i, c, d) {
	let f = S("Tip"), p = S("Option");
	return _(), s("div", {
		ref: "menu-container",
		class: "vue-treeselect__menu-container",
		style: h(d.menuContainerStyle)
	}, [d.instance.menu.isOpen ? (_(), s("div", {
		key: 0,
		ref: "menu",
		class: "vue-treeselect__menu",
		onMousedown: n[2] ||= (...e) => d.instance.handleMouseDown && d.instance.handleMouseDown(...e),
		style: h(d.menuStyle)
	}, [
		x(t.$slots, "before-list"),
		d.instance.async ? (_(), s(e, { key: 0 }, [d.entry.isLoading || !d.entry.isLoaded || d.entry.loadingError || !d.entry.options.length ? (_(), a(f, {
			key: 0,
			type: "search-prompt",
			icon: d.getTipIcon
		}, {
			default: T(() => [u(C(d.getTipText) + " ", 1), d.getTipIcon === "error" ? (_(), s("a", {
				key: 0,
				class: "vue-treeselect__retry",
				onClick: n[0] ||= (...e) => d.instance.handleRemoteSearch && d.instance.handleRemoteSearch(...e),
				title: d.instance.retryTitle
			}, C(d.instance.retryText), 9, Zt)) : o("", !0)]),
			_: 1
		}, 8, ["icon"])) : (_(!0), s(e, { key: 1 }, b(d.normalizedOptions, (e) => (_(), a(p, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [t.$slots["option-label"] ? {
			name: "option-label",
			fn: T(({ node: e, shouldShowCount: n, count: r }) => [x(t.$slots, "option-label", {
				node: e,
				shouldShowCount: n,
				count: r
			})]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128))], 64)) : (_(), s(e, { key: 1 }, [d.getNormalTip ? (_(), a(f, {
			key: 0,
			type: "search-prompt",
			icon: d.getNormalTip[0]
		}, {
			default: T(() => [u(C(d.getNormalTip[1]) + " ", 1), d.getNormalTip[2] ? (_(), s("a", {
				key: 0,
				class: "vue-treeselect__retry",
				onClick: n[1] ||= (...e) => d.instance.loadRootOptions && d.instance.loadRootOptions(...e),
				title: d.instance.retryTitle
			}, C(d.instance.retryText), 9, Qt)) : o("", !0)]),
			_: 1
		}, 8, ["icon"])) : (_(!0), s(e, { key: 1 }, b(d.normalizedOptions, (e) => (_(), a(p, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [t.$slots["option-label"] ? {
			name: "option-label",
			fn: T(({ node: e, shouldShowCount: n, count: r }) => [x(t.$slots, "option-label", {
				node: e,
				shouldShowCount: n,
				count: r
			})]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128))], 64)),
		x(t.$slots, "after-list")
	], 36)) : o("", !0)], 4);
}
var en = /* @__PURE__ */ K(Xt, [["render", $t]]), tn = {
	name: "vue-treeselect--portal-target",
	inject: ["instance"],
	watch: {
		"instance.menu.isOpen"(e) {
			e ? this.setupHandlers() : this.removeHandlers();
		},
		"instance.menu.placement"() {
			this.updateMenuContainerOffset();
		}
	},
	created() {
		this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
	},
	mounted() {
		let { instance: e } = this;
		e.menu.isOpen && this.setupHandlers();
	},
	methods: {
		setupHandlers() {
			this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
		},
		removeHandlers() {
			this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
		},
		setupControlResizeAndScrollEventListeners() {
			let { instance: e } = this, t = e.getControl();
			this.controlResizeAndScrollEventListeners ||= { remove: V(t, this.updateMenuContainerOffset) };
		},
		setupControlSizeWatcher() {
			let { instance: e } = this, t = e.getControl();
			this.controlSizeWatcher ||= { remove: Oe(t, () => {
				this.updateWidth(), this.updateMenuContainerOffset();
			}) };
		},
		removeControlResizeAndScrollEventListeners() {
			this.controlResizeAndScrollEventListeners &&= (this.controlResizeAndScrollEventListeners.remove(), null);
		},
		removeControlSizeWatcher() {
			this.controlSizeWatcher &&= (this.controlSizeWatcher.remove(), null);
		},
		updateWidth() {
			let { instance: e } = this, t = this.$el, n = e.getControl().getBoundingClientRect();
			t.style.width = n.width + "px";
		},
		updateMenuContainerOffset() {
			let { instance: e } = this, t = e.getControl(), n = this.$el, r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), a = e.menu.placement === "bottom" ? r.height : 0, o = Math.round(r.left - i.left) + "px", s = Math.round(r.top - i.top + a) + "px", c = this.$refs.menu.$refs["menu-container"].style, l = Re([
				"transform",
				"webkitTransform",
				"MozTransform",
				"msTransform"
			], (e) => e in document.body.style);
			c[l] = `translate(${o}, ${s})`;
		}
	},
	unmounted() {
		this.removeHandlers();
	}
}, nn = {
	name: "vue-treeselect--menu-portal",
	created() {
		this.portalTarget = null;
	},
	mounted() {
		this.setup();
	},
	unmounted() {
		this.teardown();
	},
	methods: {
		setup() {
			let e = document.createElement("div");
			document.body.appendChild(e), this.portalTarget = i({
				parent: this,
				...tn
			}), this.portalTarget.mount(e);
		},
		teardown() {
			document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
		}
	}
}, rn = { class: "vue-treeselect__menu-placeholder" };
function an(e, t, n, r, i, a) {
	return _(), s("div", rn);
}
var on = /* @__PURE__ */ K(nn, [["render", an]]), sn = /* @__PURE__ */ f({
	name: "vue-treeselect",
	props: {
		allowClearingDisabled: {
			type: Boolean,
			default: !1
		},
		allowSelectingDisabledDescendants: {
			type: Boolean,
			default: !1
		},
		alwaysOpen: {
			type: Boolean,
			default: !1
		},
		appendToBody: {
			type: Boolean,
			default: !1
		},
		async: {
			type: Boolean,
			default: !1
		},
		autoFocus: {
			type: Boolean,
			default: !1
		},
		autoLoadRootOptions: {
			type: Boolean,
			default: !0
		},
		autoDeselectAncestors: {
			type: Boolean,
			default: !1
		},
		autoDeselectDescendants: {
			type: Boolean,
			default: !1
		},
		autoSelectAncestors: {
			type: Boolean,
			default: !1
		},
		autoSelectDescendants: {
			type: Boolean,
			default: !1
		},
		backspaceRemoves: {
			type: Boolean,
			default: !0
		},
		beforeClearAll: {
			type: Function,
			default: (0, Ie.default)(!0)
		},
		branchNodesFirst: {
			type: Boolean,
			default: !1
		},
		cacheOptions: {
			type: Boolean,
			default: !0
		},
		clearable: {
			type: Boolean,
			default: !0
		},
		clearAllText: {
			type: String,
			default: "Clear all"
		},
		clearOnSelect: {
			type: Boolean,
			default: !1
		},
		clearValueText: {
			type: String,
			default: "Clear value"
		},
		closeOnSelect: {
			type: Boolean,
			default: !0
		},
		defaultExpandLevel: {
			type: Number,
			default: 0
		},
		defaultOptions: { default: !1 },
		deleteRemoves: {
			type: Boolean,
			default: !0
		},
		delimiter: {
			type: String,
			default: ","
		},
		flattenSearchResults: {
			type: Boolean,
			default: !1
		},
		disableBranchNodes: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		disableFuzzyMatching: {
			type: Boolean,
			default: !1
		},
		flat: {
			type: Boolean,
			default: !1
		},
		joinValues: {
			type: Boolean,
			default: !1
		},
		limit: {
			type: Number,
			default: Infinity
		},
		limitText: {
			type: Function,
			default: function(e) {
				return `and ${e} more`;
			}
		},
		loadingText: {
			type: String,
			default: "Loading..."
		},
		loadOptions: { type: Function },
		matchKeys: {
			type: Array,
			default: (0, Ie.default)(["label"])
		},
		maxHeight: {
			type: Number,
			default: 300
		},
		multiple: {
			type: Boolean,
			default: !1
		},
		name: { type: String },
		noChildrenText: {
			type: String,
			default: "No sub-options."
		},
		noOptionsText: {
			type: String,
			default: "No options available."
		},
		noResultsText: {
			type: String,
			default: "No results found..."
		},
		normalizer: {
			type: Function,
			default: Fe.default
		},
		openDirection: {
			type: String,
			default: "auto",
			validator(e) {
				return U([
					"auto",
					"top",
					"bottom",
					"above",
					"below"
				], e);
			}
		},
		openOnClick: {
			type: Boolean,
			default: !0
		},
		openOnFocus: {
			type: Boolean,
			default: !1
		},
		options: { type: Array },
		placeholder: {
			type: String,
			default: "Select..."
		},
		required: {
			type: Boolean,
			default: !1
		},
		retryText: {
			type: String,
			default: "Retry?"
		},
		retryTitle: {
			type: String,
			default: "Click to retry"
		},
		searchable: {
			type: Boolean,
			default: !0
		},
		searchNested: {
			type: Boolean,
			default: !1
		},
		searchPromptText: {
			type: String,
			default: "Type to search..."
		},
		showCount: {
			type: Boolean,
			default: !1
		},
		showCountOf: {
			type: String,
			default: W,
			validator(e) {
				return U([
					W,
					Ue,
					We,
					Ge
				], e);
			}
		},
		showCountOnSearch: null,
		sortValueBy: {
			type: String,
			default: Qe,
			validator(e) {
				return U([
					Qe,
					$e,
					et
				], e);
			}
		},
		tabIndex: {
			type: Number,
			default: 0
		},
		modelValue: null,
		valueConsistsOf: {
			type: String,
			default: Ye,
			validator(e) {
				return U([
					"ALL",
					Ye,
					Xe,
					Ze
				], e);
			}
		},
		valueFormat: {
			type: String,
			default: "id"
		},
		zIndex: {
			type: [Number, String],
			default: 999
		}
	},
	emits: [
		"update:modelValue",
		"search-change",
		"close",
		"open",
		"select",
		"deselect"
	],
	setup(t, { expose: n, emit: i }) {
		let c = ee(null), u = ee(null), f = ee(null), h = ee(null), b = Ve(), S = (e, t) => {
			let n = 0;
			do {
				if (e.level < n) return -1;
				if (t.level < n) return 1;
				if (e.index[n] !== t.index[n]) return e.index[n] - t.index[n];
				n++;
			} while (!0);
		}, C = (e, t) => e.level === t.level ? S(e, t) : e.level - t.level, re = () => ({
			isLoaded: !1,
			isLoading: !1,
			loadingError: ""
		}), ie = (e) => typeof e == "string" ? e : typeof e == "number" && !ke(e) ? e + "" : "", ae = (e, t, n) => e ? (0, He.default)(t, n) : U(n, t), oe = (e) => e.message || String(e), se = () => O.modelValue == null ? [] : O.valueFormat === "id" ? O.multiple ? O.modelValue.slice() : [O.modelValue] : (O.multiple ? O.modelValue : [O.modelValue]).map((e) => X(e)).map((e) => e.id), E = i, D = ne(), O = t, k = y({
			trigger: {
				isFocused: !1,
				searchQuery: ""
			},
			menu: {
				isOpen: !1,
				current: null,
				lastScrollPosition: 0,
				placement: "bottom"
			},
			forest: {
				normalizedOptions: [],
				nodeMap: H(),
				checkedStateMap: H(),
				selectedNodeIds: se(),
				selectedNodeMap: H()
			},
			rootOptionsStates: re(),
			localSearch: {
				active: !1,
				noResults: !1,
				countMap: H()
			},
			remoteSearch: H(),
			isReady: !1,
			_blurOnSelect: !1
		}), A = r(() => ({
			name: O.name || "vue-treeselect",
			hasValue: N,
			trigger: k.trigger,
			forest: k.forest,
			localSearch: k.localSearch,
			remoteSearch: k.remoteSearch,
			isReady: k.isReady,
			rootOptionsStates: k.rootOptionsStates,
			internalValue: M,
			selectedNodes: le,
			$slots: D,
			$refs: {
				control: c.value,
				wrapper: u.value,
				portal: f.value,
				menu: h.value
			},
			menu: k.menu,
			single: P,
			verifyProps: xe,
			resetFlags: Se,
			initialize: I,
			getInstanceId: L,
			getValue: we,
			getNode: R,
			createFallbackNode: Te,
			extractCheckedNodeIdsFromValue: se,
			extractNodeFromValue: Ee,
			fixSelectedNodeIds: De,
			keepDataOfSelectedNodes: Oe,
			isSelected: z,
			traverseDescendantsBFS: B,
			traverseDescendantsDFS: V,
			traverseAllNodesDFS: je,
			traverseAllNodesByIndex: Me,
			toggleClickOutsideEvent: Ne,
			getValueContainer: Fe,
			getInput: Ie,
			focusInput: Be,
			blurInput: Ye,
			handleMouseDown: Xe,
			handleClickOutside: Ze,
			handleLocalSearch: Qe,
			getRemoteSearchEntry: $e,
			shouldExpand: et,
			shouldOptionBeIncludedInSearchResult: G,
			shouldShowOptionInMenu: tt,
			getControl: nt,
			getMenu: K,
			setCurrentHighlightedOption: q,
			resetHighlightedOptionWhenNecessary: J,
			highlightFirstOption: it,
			highlightPrevOption: at,
			highlightNextOption: ot,
			highlightLastOption: st,
			resetSearchQuery: ct,
			closeMenu: Y,
			openMenu: lt,
			toggleMenu: ut,
			toggleExpanded: dt,
			buildForestState: ft,
			enhancedNormalizer: X,
			normalize: pt,
			loadRootOptions: mt,
			loadChildrenOptions: Z,
			callLoadOptionsProp: ht,
			checkDuplication: gt,
			verifyNodeShape: _t,
			select: vt,
			clear: yt,
			_selectNode: bt,
			_deselectNode: xt,
			addValue: Q,
			removeValue: $,
			removeLastValue: St,
			saveMenuScrollPosition: Ct,
			restoreMenuScrollPosition: wt,
			handleRemoteSearch: Tt,
			allowClearingDisabled: O.allowClearingDisabled,
			allowSelectingDisabledDescendants: O.allowSelectingDisabledDescendants,
			alwaysOpen: O.alwaysOpen,
			appendToBody: O.appendToBody,
			async: O.async,
			autoFocus: O.autoFocus,
			autoLoadRootOptions: O.autoLoadRootOptions,
			autoDeselectAncestors: O.autoDeselectAncestors,
			autoDeselectDescendants: O.autoDeselectDescendants,
			autoSelectAncestors: O.autoSelectAncestors,
			autoSelectDescendants: O.autoSelectDescendants,
			backspaceRemoves: O.backspaceRemoves,
			beforeClearAll: O.beforeClearAll,
			branchNodesFirst: O.branchNodesFirst,
			cacheOptions: O.cacheOptions,
			clearable: O.clearable,
			clearAllText: O.clearAllText,
			clearOnSelect: O.clearOnSelect,
			clearValueText: O.clearValueText,
			closeOnSelect: O.closeOnSelect,
			defaultExpandLevel: O.defaultExpandLevel,
			defaultOptions: O.defaultOptions,
			deleteRemoves: O.deleteRemoves,
			delimiter: O.delimiter,
			flattenSearchResults: O.flattenSearchResults,
			disableBranchNodes: O.disableBranchNodes,
			disabled: O.disabled,
			disableFuzzyMatching: O.disableFuzzyMatching,
			flat: O.flat,
			instanceId: b,
			joinValues: O.joinValues,
			limit: O.limit,
			limitText: O.limitText,
			loadingText: O.loadingText,
			loadOptions: O.loadOptions,
			matchKeys: O.matchKeys,
			maxHeight: O.maxHeight,
			multiple: O.multiple,
			noChildrenText: O.noChildrenText,
			noOptionsText: O.noOptionsText,
			noResultsText: O.noResultsText,
			normalizer: O.normalizer,
			openDirection: O.openDirection,
			openOnClick: O.openOnClick,
			openOnFocus: O.openOnFocus,
			options: O.options,
			placeholder: O.placeholder,
			required: O.required,
			retryText: O.retryText,
			retryTitle: O.retryTitle,
			searchable: O.searchable,
			searchNested: O.searchNested,
			searchPromptText: O.searchPromptText,
			showCount: O.showCount,
			showCountOf: O.showCountOf,
			showCountOnSearch: O.showCountOnSearch,
			sortValueBy: O.sortValueBy,
			tabIndex: O.tabIndex,
			modelValue: O.modelValue,
			valueConsistsOf: O.valueConsistsOf,
			valueFormat: O.valueFormat,
			zIndex: O.zIndex
		})), ce = r(() => ({
			"vue-treeselect": !0,
			"vue-treeselect--single": P.value,
			"vue-treeselect--multi": O.multiple,
			"vue-treeselect--searchable": O.searchable,
			"vue-treeselect--disabled": O.disabled,
			"vue-treeselect--focused": k.trigger.isFocused,
			"vue-treeselect--has-value": N.value,
			"vue-treeselect--open": k.menu.isOpen,
			"vue-treeselect--open-above": k.menu.placement === "top",
			"vue-treeselect--open-below": k.menu.placement === "bottom",
			"vue-treeselect--branch-nodes-disabled": O.disableBranchNodes,
			"vue-treeselect--append-to-body": O.appendToBody
		})), le = r(() => k.forest.selectedNodeIds.map(R)), M = r(() => {
			let e;
			// istanbul ignore else
			if (P.value || O.flat || O.disableBranchNodes || O.valueConsistsOf === "ALL") e = k.forest.selectedNodeIds.slice();
			else if (O.valueConsistsOf === "BRANCH_PRIORITY") e = k.forest.selectedNodeIds.filter((e) => {
				let t = R(e);
				return t.isRootNode ? !0 : !z(t.parentNode);
			});
			else if (O.valueConsistsOf === "LEAF_PRIORITY") e = k.forest.selectedNodeIds.filter((e) => {
				let t = R(e);
				return t.isLeaf ? !0 : t.children.length === 0;
			});
			else if (O.valueConsistsOf === "ALL_WITH_INDETERMINATE") {
				let t = [];
				e = k.forest.selectedNodeIds.slice(), le.value.forEach((n) => {
					n.ancestors.forEach((n) => {
						U(t, n.id) || U(e, n.id) || t.push(n.id);
					});
				}), e.push(...t);
			}
			return O.sortValueBy === "LEVEL" ? e.sort((e, t) => C(R(e), R(t))) : O.sortValueBy === "INDEX" && e.sort((e, t) => S(R(e), R(t))), e;
		}), N = r(() => M.value.length > 0), P = r(() => !O.multiple), F = r(() => {
			let e = [];
			return Me((t) => {
				if ((!k.localSearch.active || G(t)) && e.push(t.id), t.isBranch && !et(t)) return !1;
			}), e;
		}), de = r(() => F.value.length !== 0);
		r(() => typeof O.showCountOnSearch == "boolean" ? O.showCountOnSearch : O.showCount), r(() => k.forest.normalizedOptions.some((e) => e.isBranch)), r(() => k.localSearch.active && O.flattenSearchResults);
		let fe = r(() => k.trigger.searchQuery), pe = r(() => O.modelValue), me = r(() => O.alwaysOpen), he = r(() => O.branchNodesFirst), ge = r(() => O.disabled), _e = r(() => O.flat), ve = r(() => O.matchKeys), ye = r(() => O.multiple), be = r(() => O.options), xe = () => {
			j(() => O.async ? O.searchable : !0, () => "For async search mode, the value of \"searchable\" prop must be true."), O.options == null && !O.loadOptions && j(() => !1, () => "Are you meant to dynamically load options? You need to use \"loadOptions\" prop."), O.flat && j(() => O.multiple, () => "You are using flat mode. But you forgot to add \"multiple=true\"?"), O.flat || [
				"autoSelectAncestors",
				"autoSelectDescendants",
				"autoDeselectAncestors",
				"autoDeselectDescendants"
			].forEach((e) => {
				j(() => !O[e], () => `"${e}" only applies to flat mode.`);
			});
		}, Se = () => {
			k._blurOnSelect = !1;
		}, I = () => {
			let e = O.async ? $e().options : te(O.options);
			if (Array.isArray(e)) {
				let t = k.forest.nodeMap;
				k.forest.nodeMap = H(), Oe(t), k.forest.normalizedOptions = pt(null, e, t), De(M.value);
				let { searchQuery: n } = k.trigger;
				k.remoteSearch[n] = $e();
			} else k.forest.normalizedOptions = [];
		}, L = () => b, we = () => {
			if (O.valueFormat === "id") return O.multiple ? M.value.slice() : M.value[0];
			let e = M.value.map((e) => R(e).raw);
			return O.multiple ? e : e[0];
		}, R = (e) => (j(() => e != null, () => `Invalid node id: ${e}`), e == null ? null : e in k.forest.nodeMap ? k.forest.nodeMap[e] : Te(e)), Te = (e) => {
			let t = Ee(e), n = {
				id: e,
				label: X(t).label || `${e} (unknown)`,
				ancestors: [],
				parentNode: null,
				isFallbackNode: !0,
				isRootNode: !0,
				isLeaf: !0,
				isBranch: !1,
				isDisabled: !1,
				isNew: !1,
				index: [-1],
				level: 0,
				raw: t
			};
			return k.forest.nodeMap[e] = n;
		}, Ee = (e) => {
			let t = { id: e };
			return O.valueFormat === "id" ? t : Re(O.multiple ? Array.isArray(O.modelValue) ? O.modelValue : [] : O.modelValue ? [O.modelValue] : [], (t) => t && X(t).id === e) || t;
		}, De = (e) => {
			let t = [];
			// istanbul ignore else
			if (P.value || O.flat || O.disableBranchNodes || O.valueConsistsOf === "ALL") t = e;
			else if (O.valueConsistsOf === "BRANCH_PRIORITY") e.forEach((e) => {
				t.push(e);
				let n = R(e);
				n.isBranch && B(n, (e) => {
					t.push(e.id);
				});
			});
			else if (O.valueConsistsOf === "LEAF_PRIORITY") {
				let n = H(), r = e.slice();
				for (; r.length;) {
					let e = r.shift(), i = R(e);
					t.push(e), !i.isRootNode && (i.parentNode.id in n || (n[i.parentNode.id] = i.parentNode.children.length), --n[i.parentNode.id] === 0 && r.push(i.parentNode.id));
				}
			} else if (O.valueConsistsOf === "ALL_WITH_INDETERMINATE") {
				let n = H(), r = e.filter((e) => {
					let t = R(e);
					return t.isLeaf || t.children.length === 0;
				});
				for (; r.length;) {
					let e = r.shift(), i = R(e);
					t.push(e), !i.isRootNode && (i.parentNode.id in n || (n[i.parentNode.id] = i.parentNode.children.length), --n[i.parentNode.id] === 0 && r.push(i.parentNode.id));
				}
			}
		}, Oe = (e) => {
			k.forest.selectedNodeIds.forEach((t) => {
				e[t] && (k.forest.nodeMap[t] = {
					...e[t],
					isFallbackNode: !0
				});
			});
		}, z = (e) => k.forest.selectedNodeMap[e.id] === !0, B = (e, t) => {
			// istanbul ignore if
			if (!e.isBranch) return;
			let n = e.children.slice();
			for (; n.length;) {
				let e = n[0];
				e.isBranch && n.push(...e.children), t(e), n.shift();
			}
		}, V = (e, t) => {
			e.isBranch && e.children.forEach((e) => {
				V(e, t), t(e);
			});
		}, je = (e) => {
			k.forest.normalizedOptions.forEach((t) => {
				V(t, e), e(t);
			});
		}, Me = (e) => {
			let t = (n) => {
				n.children.forEach((n) => {
					e(n) !== !1 && n.isBranch && t(n);
				});
			};
			t({ children: k.forest.normalizedOptions });
		}, Ne = (e) => {
			e ? document.addEventListener("mousedown", Ze, !1) : document.removeEventListener("mousedown", Ze, !1);
		}, Fe = () => c.value.$refs["value-container"], Ie = () => Fe().$refs.input, Be = () => {
			Ie().focus();
		}, Ye = () => {
			Ie().blur();
		}, Xe = () => {}, Ze = (e) => {
			// istanbul ignore else
			u.value && !u.value.contains(e.target) && (Ye(), Y());
		}, Qe = () => {
			let { searchQuery: e } = k.trigger, t = () => J(!0);
			if (!e) return k.localSearch.active = !1, k.localSearch.noResults = !1, t();
			k.localSearch.active = !0, k.localSearch.noResults = !0, je((e) => {
				e.isBranch && (e.isExpandedOnSearch = !1, e.showAllChildrenOnSearch = !1, e.isMatched = !1, e.hasMatchedDescendants = !1, k.localSearch.countMap[e.id] = {
					[W]: 0,
					[Ue]: 0,
					[We]: 0,
					[Ge]: 0
				});
			});
			let n = e.trim().toLocaleLowerCase(), r = n.replace(/\s+/g, " ").split(" ");
			je((e) => {
				O.searchNested && r.length > 1 ? e.isMatched = r.every((t) => ae(!1, t, e.nestedSearchLabel)) : e.isMatched = O.matchKeys.some((t) => ae(!O.disableFuzzyMatching, n, e.lowerCased[t])), e.isMatched && (k.localSearch.noResults = !1, e.ancestors.forEach((e) => k.localSearch.countMap[e.id][Ue]++), e.isLeaf && e.ancestors.forEach((e) => k.localSearch.countMap[e.id][Ge]++), e.parentNode !== null && (k.localSearch.countMap[e.parentNode.id][W] += 1, e.isLeaf && (k.localSearch.countMap[e.parentNode.id][We] += 1))), (e.isMatched || e.isBranch && e.isExpandedOnSearch) && e.parentNode !== null && (e.parentNode.isExpandedOnSearch = !0, e.parentNode.hasMatchedDescendants = !0);
			}), t();
		}, $e = () => {
			let { searchQuery: e } = k.trigger, t = k.remoteSearch[e] || {
				...re(),
				options: []
			};
			if (e === "") {
				if (Array.isArray(O.defaultOptions)) return t.options = O.defaultOptions, t.isLoaded = !0, t;
				if (O.defaultOptions !== !0) return t.isLoaded = !0, t;
			}
			return k.remoteSearch[e] || (k.remoteSearch[e] = t), k.remoteSearch[e];
		}, et = (e) => k.localSearch.active ? e.isExpandedOnSearch : e.isExpanded, G = (e) => !!(e.isMatched || e.isBranch && e.hasMatchedDescendants && !O.flattenSearchResults || !e.isRootNode && e.parentNode.showAllChildrenOnSearch), tt = (e) => !(k.localSearch.active && !G(e)), nt = () => c.value.$el, K = () => h.value.$el, q = (e, t = !0) => {
			let n = k.menu.current;
			if (n != null && n in k.forest.nodeMap && (k.forest.nodeMap[n].isHighlighted = !1), k.menu.current = e.id, e.isHighlighted = !0, k.menu.isOpen && t) {
				let t = () => {
					let t = K(), n = t.querySelector(`.vue-treeselect__option[data-id="${e.id}"]`);
					n && ue(t, n);
				};
				K() ? t() : 
				// istanbul ignore next
p(t);
			}
		}, J = (e = !1) => {
			let { current: t } = k.menu;
			(e || t == null || !(t in k.forest.nodeMap) || !tt(R(t))) && it();
		}, it = () => {
			if (!de.value) return;
			let e = F.value[0];
			q(R(e));
		}, at = () => {
			if (!de.value) return;
			let e = F.value.indexOf(k.menu.current) - 1;
			if (e === -1) return st();
			q(R(F.value[e]));
		}, ot = () => {
			if (!de.value) return;
			let e = F.value.indexOf(k.menu.current) + 1;
			if (e === F.value.length) return it();
			q(R(F.value[e]));
		}, st = () => {
			de.value && q(R((0, Le.default)(F.value)));
		}, ct = () => {
			k.trigger.searchQuery = "";
		}, Y = () => {
			!k.menu.isOpen || !O.disabled && O.alwaysOpen || (Ct(), k.menu.isOpen = !1, Ne(!1), ct(), E("close", we(), L()));
		}, lt = () => {
			O.disabled || k.menu.isOpen || (k.menu.isOpen = !0, p(J), p(wt), !O.options && !O.async && mt(), Ne(!0), E("open", L()));
		}, ut = () => {
			k.menu.isOpen ? Y() : lt();
		}, dt = (e) => {
			let t;
			k.localSearch.active ? (t = e.isExpandedOnSearch = !e.isExpandedOnSearch, t && (e.showAllChildrenOnSearch = !0)) : t = e.isExpanded = !e.isExpanded, t && !e.childrenStates.isLoaded && Z(e);
		}, ft = () => {
			let e = H();
			k.forest.selectedNodeIds.forEach((t) => {
				e[t] = !0;
			}), k.forest.selectedNodeMap = e;
			let t = H();
			O.multiple && (Me((e) => {
				t[e.id] = 0;
			}), le.value.forEach((e) => {
				t[e.id] = 2, !O.flat && !O.disableBranchNodes && e.ancestors.forEach((e) => {
					z(e) || (t[e.id] = 1);
				});
			})), k.forest.checkedStateMap = t;
		}, X = (e) => ({
			...e,
			...O.normalizer(e, L())
		}), pt = (e, t, n) => {
			let r = t.map((e) => [X(e), e]).map(([t, r], i) => {
				gt(t), _t(t);
				let { id: a, label: o, children: s, isDefaultExpanded: c } = t, l = e === null, u = l ? 0 : e.level + 1, d = Array.isArray(s) || s === null, f = !d, p = !!t.isDisabled || !O.flat && !l && e.isDisabled, m = !!t.isNew, h = O.matchKeys.reduce((e, n) => ({
					...e,
					[n]: ie(t[n]).toLocaleLowerCase()
				}), {}), g = l ? h.label : e.nestedSearchLabel + " " + h.label;
				k.forest.nodeMap[a] = H();
				let _ = k.forest.nodeMap[a];
				if (_.id = a, _.label = o, _.level = u, _.ancestors = l ? [] : [e].concat(e.ancestors), _.index = (l ? [] : e.index).concat(i), _.parentNode = e, _.lowerCased = h, _.nestedSearchLabel = g, _.isDisabled = p, _.isNew = m, _.isMatched = !1, _.isHighlighted = !1, _.isBranch = d, _.isLeaf = f, _.isRootNode = l, _.raw = r, d) {
					let e = Array.isArray(s);
					_.childrenStates = {
						...re(),
						isLoaded: e
					}, _.isExpanded = typeof c == "boolean" ? c : u < O.defaultExpandLevel, _.hasMatchedDescendants = !1, _.hasDisabledDescendants = !1, _.isExpandedOnSearch = !1, _.showAllChildrenOnSearch = !1, _.count = {
						[W]: 0,
						[Ue]: 0,
						[We]: 0,
						[Ge]: 0
					}, _.children = e ? pt(_, s, n) : [], c === !0 && _.ancestors.forEach((e) => {
						e.isExpanded = !0;
					}), !e && typeof O.loadOptions != "function" ? j(() => !1, () => "Unloaded branch node detected. \"loadOptions\" prop is required to load its children.") : !e && _.isExpanded && Z(_);
				}
				if (_.ancestors.forEach((e) => e.count[Ue]++), f && _.ancestors.forEach((e) => e.count[Ge]++), l || (e.count[W] += 1, f && (e.count[We] += 1), p && (e.hasDisabledDescendants = !0)), n && n[a]) {
					let e = n[a];
					_.isMatched = e.isMatched, _.showAllChildrenOnSearch = e.showAllChildrenOnSearch, _.isHighlighted = e.isHighlighted, e.isBranch && _.isBranch && (_.isExpanded = e.isExpanded, _.isExpandedOnSearch = e.isExpandedOnSearch, e.childrenStates.isLoaded && !_.childrenStates.isLoaded ? _.isExpanded = !1 : _.childrenStates = { ...e.childrenStates });
				}
				return _;
			});
			if (O.branchNodesFirst) {
				let e = r.filter((e) => e.isBranch), t = r.filter((e) => e.isLeaf);
				r = e.concat(t);
			}
			return r;
		}, mt = () => {
			ht({
				action: Ke,
				isPending: () => k.rootOptionsStates.isLoading,
				start: () => {
					k.rootOptionsStates.isLoading = !0, k.rootOptionsStates.loadingError = "";
				},
				succeed: () => {
					k.rootOptionsStates.isLoaded = !0, p(() => {
						J(!0);
					});
				},
				fail: (e) => {
					k.rootOptionsStates.loadingError = oe(e);
				},
				end: () => {
					k.rootOptionsStates.isLoading = !1;
				}
			});
		}, Z = (e) => {
			let { id: t, raw: n } = e;
			ht({
				action: qe,
				args: { parentNode: n },
				isPending: () => R(t).childrenStates.isLoading,
				start: () => {
					R(t).childrenStates.isLoading = !0, R(t).childrenStates.loadingError = "";
				},
				succeed: (n) => {
					let r = R(t);
					r.children = pt(e, n), r.childrenStates.isLoaded = !0;
				},
				fail: (e) => {
					R(t).childrenStates.loadingError = oe(e);
				},
				end: () => {
					R(t).childrenStates.isLoading = !1;
				}
			});
		}, ht = ({ action: e, args: t, isPending: n, start: r, succeed: i, fail: a, end: o }) => {
			if (!O.loadOptions || n()) return;
			r();
			let s = (0, Pe.default)((e, t) => {
				e ? a(e) : i(t), o();
			}), c = O.loadOptions({
				id: L(),
				instanceId: L(),
				action: e,
				...t,
				callback: s
			});
			Ae(c) && c.then(() => {
				s();
			}, (e) => {
				s(e);
			}).catch((e) => {
				// istanbul ignore next
				console.error(e);
			});
		}, gt = (e) => {
			j(() => !(e.id in k.forest.nodeMap && !k.forest.nodeMap[e.id].isFallbackNode), () => `Detected duplicate presence of node id ${JSON.stringify(e.id)}. Their labels are "${k.forest.nodeMap[e.id].label}" and "${e.label}" respectively.`);
		}, _t = (e) => {
			j(() => !(e.children === void 0 && e.isBranch === !0), () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.");
		}, vt = (e) => {
			if (O.disabled || e.isDisabled) return;
			P.value && yt();
			let t = O.multiple && !O.flat ? k.forest.checkedStateMap[e.id] === 0 : !z(e);
			t ? bt(e) : xt(e), ft(), E(t ? "select" : "deselect", e.raw, L()), k.localSearch.active && t && (P.value || O.clearOnSelect) && ct(), P.value && O.closeOnSelect && (Y(), O.searchable && (k._blurOnSelect = !0)), E("update:modelValue", O.multiple ? k.forest.selectedNodeIds : k.forest.selectedNodeIds[0] || null);
		}, yt = () => {
			N.value && (P.value || O.allowClearingDisabled ? k.forest.selectedNodeIds = [] : k.forest.selectedNodeIds = k.forest.selectedNodeIds.filter((e) => R(e).isDisabled), ft(), E("update:modelValue", null));
		}, bt = (e) => {
			if (P.value || O.disableBranchNodes) return Q(e);
			if (O.flat) {
				Q(e), O.autoSelectAncestors ? e.ancestors.forEach((e) => {
					!z(e) && !e.isDisabled && Q(e);
				}) : O.autoSelectDescendants && B(e, (e) => {
					!z(e) && !e.isDisabled && Q(e);
				});
				return;
			}
			let t = e.isLeaf || !e.hasDisabledDescendants || O.allowSelectingDisabledDescendants;
			if (t && Q(e), e.isBranch && B(e, (e) => {
				(!e.isDisabled || O.allowSelectingDisabledDescendants) && Q(e);
			}), t) {
				let t = e;
				for (; (t = t.parentNode) !== null && t.children.every(z);) Q(t);
			}
		}, xt = (e) => {
			if (O.disableBranchNodes) return $(e);
			if (O.flat) {
				$(e), O.autoDeselectAncestors ? e.ancestors.forEach((e) => {
					z(e) && !e.isDisabled && $(e);
				}) : O.autoDeselectDescendants && B(e, (e) => {
					z(e) && !e.isDisabled && $(e);
				});
				return;
			}
			let t = !1;
			if (e.isBranch && V(e, (e) => {
				(!e.isDisabled || O.allowSelectingDisabledDescendants) && ($(e), t = !0);
			}), e.isLeaf || t || e.children.length === 0) {
				$(e);
				let t = e;
				for (; (t = t.parentNode) !== null && z(t);) $(t);
			}
		}, Q = (e) => {
			k.forest.selectedNodeIds.push(e.id), k.forest.selectedNodeMap[e.id] = !0;
		}, $ = (e) => {
			Ce(k.forest.selectedNodeIds, e.id), delete k.forest.selectedNodeMap[e.id];
		}, St = () => {
			if (N.value) {
				if (P.value) return yt();
				vt(R((0, Le.default)(M.value)));
			}
		}, Ct = () => {
			let e = K();
			// istanbul ignore else
			e && (h.value.lastScrollPosition = e.scrollTop);
		}, wt = () => {
			let e = K();
			// istanbul ignore else
			e && (e.scrollTop = h.value.lastScrollPosition);
		}, Tt = () => {
			let { searchQuery: e } = k.trigger, t = $e(), n = () => {
				I(t), J(!0);
			};
			if ((e === "" || O.cacheOptions) && t.isLoaded) return n();
			ht({
				action: Je,
				args: { searchQuery: e },
				isPending() {
					return t.isLoading;
				},
				start: () => {
					t.isLoading = !0, t.isLoaded = !1, t.loadingError = "";
				},
				succeed: (r) => {
					t.isLoading = !1, t.isLoaded = !0, t.options = r, k.trigger.searchQuery === e && n();
				},
				fail: (e) => {
					t.isLoading = !1, t.loadingError = oe(e);
				},
				end: () => {
					t.isLoading = !1;
				}
			});
		};
		return n({ clear: yt }), w(me, (e) => {
			e ? lt() : Y();
		}), w(he, () => {
			I();
		}), w(ge, (e) => {
			e && k.menu.isOpen ? Y() : !e && !k.menu.isOpen && O.alwaysOpen && lt();
		}), w(_e, () => {
			I();
		}), w(ve, () => {
			I();
		}), w(ye, (e) => {
			// istanbul ignore else
			e && ft();
		}), w(be, () => {
			O.async || (I(), k.rootOptionsStates.isLoaded = Array.isArray(O.options));
		}, {
			deep: !0,
			immediate: !0
		}), w(fe, () => {
			O.async ? Tt() : Qe(), E("search-change", k.trigger.searchQuery, L());
		}), w(pe, () => {
			let e = se();
			ze(e, M.value) && De(e);
		}), g(() => {
			k.isReady = !0;
		}), v("instance", A.value), (n, r) => (_(), s("div", {
			ref_key: "wrapper",
			ref: u,
			class: m(ce.value)
		}, [k.isReady ? (_(), s(e, { key: 0 }, [
			d(rt),
			d(Nt, {
				ref_key: "control",
				ref: c
			}, l({ _: 2 }, [n.$slots["value-label"] ? {
				name: "value-label",
				fn: T(({ node: e }) => [x(n.$slots, "value-label", { node: e })]),
				key: "0"
			} : void 0]), 1536),
			t.appendToBody ? (_(), a(on, {
				key: 0,
				ref_key: "portal",
				ref: f
			}, null, 512)) : (_(), a(en, {
				key: 1,
				ref_key: "rmenu",
				ref: h
			}, l({ _: 2 }, [
				n.$slots["before-list"] ? {
					name: "before-list",
					fn: T(() => [x(n.$slots, "before-list")]),
					key: "0"
				} : void 0,
				n.$slots["after-list"] ? {
					name: "after-list",
					fn: T(() => [x(n.$slots, "after-list")]),
					key: "1"
				} : void 0,
				n.$slots["option-label"] ? {
					name: "option-label",
					fn: T(({ node: e, shouldShowCount: t, count: r }) => [x(n.$slots, "option-label", {
						node: e,
						shouldShowCount: t,
						count: r
					})]),
					key: "2"
				} : void 0
			]), 1536))
		], 64)) : o("", !0)], 2));
	}
}), cn = /* @__PURE__ */ O({ Treeselect: () => sn });
//#endregion
//#region node_modules/defu/dist/defu.mjs
function ln(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function un(e, t, n = ".", r) {
	if (!ln(t)) return un(e, {}, n, r);
	let i = { ...t };
	for (let t of Object.keys(e)) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (Array.isArray(a) && Array.isArray(i[t]) ? i[t] = [...a, ...i[t]] : ln(a) && ln(i[t]) ? i[t] = un(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : i[t] = a));
	}
	return i;
}
function dn(e) {
	return (...t) => t.reduce((t, n) => un(t, n, "", e), {});
}
var fn = dn(), pn = (e) => {
	let t = fn(e, {
		showLogs: !0,
		components: {
			globallyRegister: !1,
			exclude: []
		}
	});
	return (e) => {
		if (t.components?.globallyRegister) for (let n in cn) {
			if (t.components && t.components.exclude && t.components.exclude.includes(n)) {
				mn(n, n, !1, t.showLogs);
				continue;
			}
			mn(n, n, !0, t.showLogs), e.component(n, cn[n]);
		}
		else mn("ALL COMPONENTS", !1, !1);
	};
}, mn = (e, t, n, r = !0) => {
	if (!r) return;
	t = t === !1 ? !1 : t;
	let i = t ? `globally added %c as %c <${t}>` : "imported %c %c";
	n || (i = "excluded in global registration %c %c"), console.log(`%c${e}%c - %c ${i}`, `color: ${n ? "green" : "red"}; font-weight: bold;font-size: 1.2em`, "color:gray", "color:orange", "color:gray", "color:teal; font-weight: bold;font-size: 1.2em");
};
//#endregion
export { sn as Treeselect, cn as components, pn as useComponentLibrary };
