import { Fragment as e, Transition as t, TransitionGroup as n, computed as r, createApp as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, nextTick as p, normalizeClass as m, normalizeStyle as h, onMounted as g, openBlock as _, provide as ee, reactive as v, ref as te, renderList as y, renderSlot as b, resolveComponent as x, toDisplayString as S, toRaw as ne, useSlots as re, watch as C, withCtx as w } from "vue";
//#region \0rolldown/runtime.js
var ie = Object.create, ae = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, se = Object.getOwnPropertyNames, ce = Object.getPrototypeOf, T = Object.prototype.hasOwnProperty, E = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), D = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = se(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !T.call(e, s) && s !== n && ae(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = oe(t, s)) || r.enumerable
	});
	return e;
}, O = (e, t, n) => (n = e == null ? {} : ie(ce(e)), D(t || !e || !e.__esModule ? ae(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), le = /* @__PURE__ */ E(((e, t) => {
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
})), ue = /* @__PURE__ */ O((/* @__PURE__ */ E(((e, t) => {
	function n() {}
	t.exports = n;
})))()), k = process.env.NODE_ENV === "production" ? ue.default : function(e, t) {
	if (!e()) {
		let e = ["[Vue-Treeselect Warning]"].concat(t());
		console.error(...e);
	}
};
//#endregion
//#region src/utils/onLeftClick.js
function A(e) {
	return function(t, ...n) {
		t.type === "mousedown" && t.button === 0 && e.call(this, t, ...n);
	};
}
//#endregion
//#region src/utils/scrollIntoView.js
function de(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
	r.bottom + i > n.bottom ? e.scrollTop = Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight) : r.top - i < n.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
//#endregion
//#region node_modules/lodash/isObject.js
var j = /* @__PURE__ */ E(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), fe = /* @__PURE__ */ E(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), M = /* @__PURE__ */ E(((e, t) => {
	var n = fe(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), N = /* @__PURE__ */ E(((e, t) => {
	var n = M();
	t.exports = function() {
		return n.Date.now();
	};
})), pe = /* @__PURE__ */ E(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), me = /* @__PURE__ */ E(((e, t) => {
	var n = pe(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), he = /* @__PURE__ */ E(((e, t) => {
	t.exports = M().Symbol;
})), ge = /* @__PURE__ */ E(((e, t) => {
	var n = he(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
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
})), _e = /* @__PURE__ */ E(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), ve = /* @__PURE__ */ E(((e, t) => {
	var n = he(), r = ge(), i = _e(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), ye = /* @__PURE__ */ E(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), be = /* @__PURE__ */ E(((e, t) => {
	var n = ve(), r = ye(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), xe = /* @__PURE__ */ E(((e, t) => {
	var n = me(), r = j(), i = be(), a = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt;
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
})), Se = /* @__PURE__ */ O((/* @__PURE__ */ E(((e, t) => {
	var n = j(), r = N(), i = xe(), a = "Expected a function", o = Math.max, s = Math.min;
	function c(e, t, c) {
		var l, u, d, f, p, m, h = 0, g = !1, _ = !1, ee = !0;
		if (typeof e != "function") throw TypeError(a);
		t = i(t) || 0, n(c) && (g = !!c.leading, _ = "maxWait" in c, d = _ ? o(i(c.maxWait) || 0, t) : d, ee = "trailing" in c ? !!c.trailing : ee);
		function v(t) {
			var n = l, r = u;
			return l = u = void 0, h = t, f = e.apply(r, n), f;
		}
		function te(e) {
			return h = e, p = setTimeout(x, t), g ? v(e) : f;
		}
		function y(e) {
			var n = e - m, r = e - h, i = t - n;
			return _ ? s(i, d - r) : i;
		}
		function b(e) {
			var n = e - m, r = e - h;
			return m === void 0 || n >= t || n < 0 || _ && r >= d;
		}
		function x() {
			var e = r();
			if (b(e)) return S(e);
			p = setTimeout(x, y(e));
		}
		function S(e) {
			return p = void 0, ee && l ? v(e) : (l = u = void 0, f);
		}
		function ne() {
			p !== void 0 && clearTimeout(p), h = 0, l = m = u = p = void 0;
		}
		function re() {
			return p === void 0 ? f : S(r());
		}
		function C() {
			var e = r(), n = b(e);
			if (l = arguments, u = this, m = e, n) {
				if (p === void 0) return te(m);
				if (_) return clearTimeout(p), p = setTimeout(x, t), v(m);
			}
			return p === void 0 && (p = setTimeout(x, t)), f;
		}
		return C.cancel = ne, C.flush = re, C;
	}
	t.exports = c;
})))()), Ce = (function(e, t) {
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
//#region src/utils/removeFromArray.js
function we(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
//#endregion
//#region src/utils/watchSize.js
var Te, P = [], F = 100;
function Ee() {
	Te = setInterval(() => {
		P.forEach(De);
	}, F);
}
function I() {
	clearInterval(Te), Te = null;
}
function De(e) {
	let { $el: t, listener: n, lastWidth: r, lastHeight: i } = e, a = t.offsetWidth, o = t.offsetHeight;
	(r !== a || i !== o) && (e.lastWidth = a, e.lastHeight = o, n({
		width: a,
		height: o
	}));
}
function Oe(e, t) {
	let n = {
		$el: e,
		listener: t,
		lastWidth: null,
		lastHeight: null
	};
	return P.push(n), De(n), Ee(), () => {
		we(P, n), P.length || I();
	};
}
function ke(e, t) {
	let n = document.documentMode === 9, r = !0, i = (n ? Oe : Ce)(e, (...e) => r || t(...e));
	return r = !1, i;
}
//#endregion
//#region src/utils/setupResizeAndScrollEventListeners.js
function Ae(e) {
	let t = [], n = e.parentNode;
	for (; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE;) L(n) && t.push(n), n = n.parentNode;
	return t.push(window), t;
}
function L(e) {
	let { overflow: t, overflowX: n, overflowY: r } = getComputedStyle(e);
	return /(auto|scroll|overlay)/.test(t + r + n);
}
function R(e, t) {
	let n = Ae(e);
	return window.addEventListener("resize", t, { passive: !0 }), n.forEach((e) => {
		e.addEventListener("scroll", t, { passive: !0 });
	}), function() {
		window.removeEventListener("resize", t, { passive: !0 }), n.forEach((e) => {
			e.removeEventListener("scroll", t, { passive: !0 });
		});
	};
}
//#endregion
//#region src/utils/isNaN.js
function je(e) {
	return e !== e;
}
//#endregion
//#region node_modules/is-promise/index.mjs
function Me(e) {
	return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
//#endregion
//#region node_modules/lodash/toFinite.js
var Ne = /* @__PURE__ */ E(((e, t) => {
	var n = xe(), r = Infinity, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), Pe = /* @__PURE__ */ E(((e, t) => {
	var n = Ne();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), Fe = /* @__PURE__ */ E(((e, t) => {
	var n = Pe(), r = "Expected a function";
	function i(e, t) {
		var i;
		if (typeof t != "function") throw TypeError(r);
		return e = n(e), function() {
			return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = void 0), i;
		};
	}
	t.exports = i;
})), Ie = /* @__PURE__ */ O((/* @__PURE__ */ E(((e, t) => {
	var n = Fe();
	function r(e) {
		return n(2, e);
	}
	t.exports = r;
})))()), Le = /* @__PURE__ */ O((/* @__PURE__ */ E(((e, t) => {
	function n(e) {
		return e;
	}
	t.exports = n;
})))()), Re = /* @__PURE__ */ O((/* @__PURE__ */ E(((e, t) => {
	function n(e) {
		return function() {
			return e;
		};
	}
	t.exports = n;
})))()), z = () => Object.create(null), ze = /* @__PURE__ */ O((/* @__PURE__ */ E(((e, t) => {
	function n(e) {
		var t = e == null ? 0 : e.length;
		return t ? e[t - 1] : void 0;
	}
	t.exports = n;
})))());
//#endregion
//#region src/utils/includes.js
function B(e, t) {
	return e.indexOf(t) !== -1;
}
//#endregion
//#region src/utils/find.js
function Be(e, t, n) {
	for (let r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r, e)) return e[r];
}
//#endregion
//#region src/utils/quickDiff.js
function Ve(e, t) {
	if (e.length !== t.length) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
	return !1;
}
//#endregion
//#region src/utils/instanceIdSingleton.js
var He = 0, Ue = () => He++, We = /* @__PURE__ */ O(le()), V = "ALL_CHILDREN", Ge = "ALL_DESCENDANTS", H = "LEAF_CHILDREN", Ke = "LEAF_DESCENDANTS", qe = "LOAD_ROOT_OPTIONS", Je = "LOAD_CHILDREN_OPTIONS", Ye = "ASYNC_SEARCH", Xe = "BRANCH_PRIORITY", Ze = "LEAF_PRIORITY", Qe = "ALL_WITH_INDETERMINATE", $e = "ORDER_SELECTED", et = "LEVEL", tt = "INDEX", U = {
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
}, nt = process.env.NODE_ENV === "testing" ? 10 : /* istanbul ignore next */ 200, W = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, rt = f({
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
e != null && !je(e) ? JSON.stringify(e) : "";
	} }
}), G = ["name", "value"];
function K(t, n, r, i, a, c) {
	return t.canRender ? (_(!0), s(e, { key: 0 }, y(t.values, (e, n) => (_(), s("input", {
		type: "hidden",
		name: t.instance.name,
		value: e,
		key: "hidden-field-" + n
	}, null, 8, G))), 128)) : o("", !0);
}
var it = /* @__PURE__ */ W(rt, [["render", K]]), q = [
	U.ENTER,
	U.END,
	U.HOME,
	U.ARROW_LEFT,
	U.ARROW_UP,
	U.ARROW_RIGHT,
	U.ARROW_DOWN
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
		this.debouncedCallback = (0, Se.default)(this.updateSearchQuery, nt, {
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
				if (!t.menu.isOpen && B(q, n)) return e.preventDefault(), t.openMenu();
				switch (n) {
					case U.BACKSPACE:
						t.backspaceRemoves && !this.value.length && t.removeLastValue();
						break;
					case U.ENTER: {
						if (e.preventDefault(), t.menu.current === null) return;
						let n = t.getNode(t.menu.current);
						if (n.isBranch && t.disableBranchNodes) return;
						t.select(n);
						break;
					}
					case U.ESCAPE:
						this.value.length ? this.clear() : t.menu.isOpen && t.closeMenu();
						break;
					case U.END:
						e.preventDefault(), t.highlightLastOption();
						break;
					case U.HOME:
						e.preventDefault(), t.highlightFirstOption();
						break;
					case U.ARROW_LEFT: {
						let n = t.getNode(t.menu.current);
						n.isBranch && t.shouldExpand(n) ? (e.preventDefault(), t.toggleExpanded(n)) : !n.isRootNode && (n.isLeaf || n.isBranch && !t.shouldExpand(n)) && (e.preventDefault(), t.setCurrentHighlightedOption(n.parentNode));
						break;
					}
					case U.ARROW_UP:
						e.preventDefault(), t.highlightPrevOption();
						break;
					case U.ARROW_RIGHT: {
						let n = t.getNode(t.menu.current);
						n.isBranch && !t.shouldExpand(n) && (e.preventDefault(), t.toggleExpanded(n));
						break;
					}
					case U.ARROW_DOWN:
						e.preventDefault(), t.highlightNextOption();
						break;
					case U.DELETE:
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
	}, S(t.value), 513)) : o("", !0)], 64)) : o("", !0)], 40, ot);
}
var lt = /* @__PURE__ */ W(at, [["render", ct]]), J = {
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
function Y(e, t, n, r, i, a) {
	return _(), s("div", { class: m({
		"vue-treeselect__placeholder": !0,
		"vue-treeselect-helper-zoom-effect-off": !0,
		"vue-treeselect-helper-hide": a.hasValue || a.hasSearchQuery
	}) }, S(a.instance.placeholder), 3);
}
var ut = /* @__PURE__ */ W(J, [["render", Y]]), dt = {
	name: "vue-treeselect--single-value",
	inject: ["instance"],
	components: {
		Placeholder: ut,
		Input: lt
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
}, Z = { class: "vue-treeselect__single-value s-value-container" };
function ft(t, n, r, i, l, f) {
	let p = x("Placeholder"), h = x("Input");
	return _(), s(e, null, [
		f.hasValue ? (_(), s("div", X, [c("div", Z, [t.$slots["value-label"] ? b(t.$slots, "value-label", {
			key: 0,
			node: f.node
		}) : (_(), s(e, { key: 1 }, [u(S(f.node.label), 1)], 64))])])) : o("", !0),
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
var pt = /* @__PURE__ */ W(dt, [["render", ft]]), mt = { name: "vue-treeselect--x" }, ht = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 348.333 348.333"
};
function gt(e, t, n, r, i, a) {
	return _(), s("svg", ht, [...t[0] ||= [c("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)]]);
}
var _t = /* @__PURE__ */ W(mt, [["render", gt]]), vt = {
	name: "vue-treeselect--multi-value-item",
	inject: ["instance"],
	components: { DeleteIcon: _t },
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
	methods: { handleMouseDown: A(function() {
		let { instance: e, node: t } = this;
		e.select(t);
	}) }
}, yt = { class: "vue-treeselect__multi-value-item-container" }, bt = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
function xt(t, n, r, i, a, o) {
	let l = x("DeleteIcon");
	return _(), s("div", yt, [c("div", {
		class: m(o.itemClass),
		onMousedown: n[0] ||= (...e) => o.handleMouseDown && o.handleMouseDown(...e)
	}, [t.$slots["value-label"] ? b(t.$slots, "value-label", {
		key: 0,
		node: r.node
	}) : (_(), s(e, { key: 1 }, [u(S(r.node.label), 1)], 64)), c("span", bt, [d(l)])], 34)]);
}
//#endregion
//#region src/components/MultiValue.vue
var Q = {
	name: "vue-treeselect--multi-value",
	inject: ["instance"],
	components: {
		Placeholder: ut,
		TransitionGroup: n,
		Input: lt,
		MultiValueItem: /* @__PURE__ */ W(vt, [["render", xt]])
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
}, $ = {
	class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
	key: "exceed-limit-tip"
}, St = { class: "vue-treeselect__limit-tip-text" };
function Ct(t, n, r, i, u, f) {
	let p = x("MultiValueItem"), m = x("Placeholder"), h = x("Input");
	return _(), s(e, null, [
		(_(!0), s(e, null, y(f.multiValueItems, (e) => (_(), a(p, {
			key: `multi-value-item-${e.id}`,
			node: e
		}, l({ _: 2 }, [t.$slots["value-label"] ? {
			name: "value-label",
			fn: w(({ node: e }) => [b(t.$slots, "value-label", { node: e })]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128)),
		f.count > 0 ? (_(), s("div", $, [c("span", St, S(f.instance.limitText(f.count)), 1)])) : o("", !0),
		!f.hasValue && !f.isFocused ? (_(), a(m, { key: "placeholder" })) : o("", !0),
		d(h, {
			ref: "input",
			key: "input"
		}, null, 512)
	], 64);
}
var wt = /* @__PURE__ */ W(Q, [["render", Ct]]), Tt = { name: "vue-treeselect--arrow" }, Et = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 292.362 292.362"
};
function Dt(e, t, n, r, i, a) {
	return _(), s("svg", Et, [...t[0] ||= [c("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)]]);
}
var Ot = /* @__PURE__ */ W(Tt, [["render", Dt]]), kt = {
	name: "vue-treeselect--control",
	inject: ["instance"],
	components: {
		SingleValue: pt,
		MultiValue: wt,
		DeleteIcon: _t,
		ArrowIcon: Ot
	},
	data() {
		return {
			SingleValue: pt,
			MultiValue: wt
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
		handleMouseDownOnX: A(function(e) {
			e.stopPropagation(), e.preventDefault();
			let { instance: t } = this, n = t.beforeClearAll(), r = (e) => {
				e && t.clear();
			};
			Me(n) ? n.then(r) : setTimeout(() => r(n), 0);
		}),
		handleMouseDownOnArrow: A(function(e) {
			e.preventDefault(), e.stopPropagation();
			let { instance: t } = this;
			t.focusInput(), t.toggleMenu();
		})
	}
}, At = ["title"];
function jt(e, t, n, r, i, u) {
	let f = x("SingleValue"), p = x("MultiValue"), h = x("DeleteIcon"), g = x("ArrowIcon");
	return _(), s("div", {
		class: "vue-treeselect__control",
		onMousedown: t[2] ||= (...e) => u.instance.handleMouseDown && u.instance.handleMouseDown(...e)
	}, [
		u.isSingle ? (_(), a(f, {
			key: 0,
			ref: "value-container"
		}, l({ _: 2 }, [e.$slots["value-label"] ? {
			name: "value-label",
			fn: w(({ node: t }) => [b(e.$slots, "value-label", { node: t })]),
			key: "0"
		} : void 0]), 1536)) : (_(), a(p, {
			key: 1,
			ref: "value-container"
		}, l({ _: 2 }, [e.$slots["value-label"] ? {
			name: "value-label",
			fn: w(({ node: t }) => [b(e.$slots, "value-label", { node: t })]),
			key: "0"
		} : void 0]), 1536)),
		u.shouldShowX ? (_(), s("div", {
			key: 2,
			class: "vue-treeselect__x-container",
			title: u.getTitleX(),
			onMousedown: t[0] ||= (...e) => u.handleMouseDownOnX && u.handleMouseDownOnX(...e)
		}, [d(h, { class: "vue-treeselect__x" })], 40, At)) : o("", !0),
		c("div", {
			class: "vue-treeselect__control-arrow-container",
			onMousedown: t[1] ||= (...e) => u.handleMouseDownOnArrow && u.handleMouseDownOnArrow(...e)
		}, [d(g, { class: m(u.getArrowClass()) }, null, 8, ["class"])], 32)
	], 32);
}
var Mt = /* @__PURE__ */ W(kt, [["render", jt]]), Nt = f({
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
}), Pt = { class: "vue-treeselect__icon-container" };
function Ft(e, t, n, r, i, a) {
	return _(), s("div", { class: m(`vue-treeselect__tip vue-treeselect__${e.type}-tip`) }, [c("div", Pt, [c("span", { class: m(`vue-treeselect__icon-${e.icon}`) }, null, 2)]), c("span", { class: m(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`) }, [b(e.$slots, "default")], 2)], 2);
}
var It = /* @__PURE__ */ W(Nt, [["render", Ft]]), Lt = {
	name: "VueTreeselectOption",
	inject: ["instance"],
	components: {
		ArrowIcon: Ot,
		Transition: t,
		Tip: It
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
		handleMouseDownOnArrow: A(function() {
			let { instance: e, node: t } = this;
			e.toggleExpanded(t);
		}),
		handleMouseDownOnLabelContainer: A(function() {
			let { instance: e, node: t } = this;
			t.isBranch && e.disableBranchNodes ? e.toggleExpanded(t) : e.select(t);
		}),
		handleMouseDownOnRetry: A(function() {
			let { instance: e, node: t } = this;
			e.loadChildrenOptions(t);
		})
	}
}, Rt = ["data-id"], zt = {
	key: 1,
	class: "vue-treeselect__option-arrow-placeholder"
}, Bt = {
	key: 0,
	class: "vue-treeselect__checkbox-container"
}, Vt = {
	key: 2,
	class: /* @__PURE__ */ m("vue-treeselect__label")
}, Ht = {
	key: 0,
	class: /* @__PURE__ */ m("vue-treeselect__count")
}, Ut = { key: 0 }, Wt = { class: "vue-treeselect__list" }, Gt = ["title"];
function Kt(n, r, i, f, p, h) {
	let g = x("ArrowIcon"), ee = x("VueTreeselectOption"), v = x("Tip");
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
	}) }, null, 8, ["class"])], 32)) : o("", !0), h.instance.hasBranchNodes ? (_(), s("div", zt, "\xA0")) : o("", !0)], 64)), c("div", {
		class: "vue-treeselect__label-container",
		onMousedown: r[1] ||= (...e) => h.handleMouseDownOnLabelContainer && h.handleMouseDownOnLabelContainer(...e)
	}, [!h.isSingle && !(h.instance.disableBranchNodes && i.node.isBranch) ? (_(), s("div", Bt, [c("span", { class: m({
		"vue-treeselect__checkbox": !0,
		"vue-treeselect__checkbox--checked": h.checkedState === p.CHECKED,
		"vue-treeselect__checkbox--indeterminate": h.checkedState === p.INDETERMINATE,
		"vue-treeselect__checkbox--unchecked": h.checkedState === p.UNCHECKED,
		"vue-treeselect__checkbox--disabled": i.node.isDisabled
	}) }, [...r[4] ||= [c("span", { class: "vue-treeselect__check-mark" }, null, -1), c("span", { class: "vue-treeselect__minus-mark" }, null, -1)]], 2)])) : o("", !0), n.$slots["option-label"] ? b(n.$slots, "option-label", {
		key: 1,
		node: i.node,
		shouldShowCount: h.shouldShowCount,
		count: h.getCount()
	}) : (_(), s("label", Vt, [u(S(i.node.label) + " ", 1), h.shouldShowCount ? (_(), s("span", Ht, "({ getCount() })")) : o("", !0)]))], 32)], 42, Rt), i.node.isBranch && h.shouldExpand ? (_(), s("div", Ut, [d(t, { name: "vue-treeselect__list--transition" }, {
		default: w(() => [c("div", Wt, [h.childrenStatesLoaded ? (_(!0), s(e, { key: 0 }, y(i.node.children, (e) => (_(), a(ee, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [n.$slots["option-label"] ? {
			name: "option-label",
			fn: w(({ node: e, shouldShowCount: t, count: r }) => [b(n.$slots, "option-label", {
				node: e,
				shouldShowCount: t,
				count: r
			})]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128)) : (_(), s(e, { key: 1 }, [
			i.node.childrenStates.isLoaded && !i.node.children.length ? (_(), a(v, {
				key: 0,
				type: "no-children",
				icon: "warning"
			}, {
				default: w(() => [u(S(h.instance.noChildrenText), 1)]),
				_: 1
			})) : o("", !0),
			i.node.childrenStates.isLoading ? (_(), a(v, {
				key: 1,
				type: "loading",
				icon: "loader"
			}, {
				default: w(() => [u(S(h.instance.loadingText), 1)]),
				_: 1
			})) : o("", !0),
			i.node.childrenStates.loadingError ? (_(), a(v, {
				key: 2,
				type: "error",
				icon: "error"
			}, {
				default: w(() => [r[5] ||= u(" { node.childrenStates.loadingError } ", -1), c("a", {
					class: "vue-treeselect__retry",
					title: h.instance.retryTitle,
					onMousedown: r[3] ||= (...e) => h.handleMouseDownOnRetry && h.handleMouseDownOnRetry(...e)
				}, S(h.instance.retryText), 41, Gt)]),
				_: 1
			})) : o("", !0)
		], 64))])]),
		_: 3
	})])) : o("", !0)], 2);
}
var qt = /* @__PURE__ */ W(Lt, [["render", Kt]]), Jt = {
	top: "top",
	bottom: "bottom",
	above: "top",
	below: "bottom"
}, Yt = {
	name: "vue-treeselect--menu",
	inject: ["instance"],
	components: {
		Transition: t,
		Tip: It,
		Option: qt
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
			return ne(this.instance.forest.normalizedOptions);
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
			l ? e.openDirection === "auto" ? u || !d ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.menu.placement = Jt[e.openDirection] : e.closeMenu();
		},
		setupMenuSizeWatcher() {
			let { instance: e } = this, t = e.getMenu();
			this.menuSizeWatcher ||= { remove: ke(t, this.adjustMenuOpenDirection) };
		},
		setupMenuResizeAndScrollEventListeners() {
			let { instance: e } = this, t = e.getControl();
			this.menuResizeAndScrollEventListeners ||= { remove: R(t, this.adjustMenuOpenDirection) };
		},
		removeMenuSizeWatcher() {
			this.menuSizeWatcher &&= (this.menuSizeWatcher.remove(), null);
		},
		removeMenuResizeAndScrollEventListeners() {
			this.menuResizeAndScrollEventListeners &&= (this.menuResizeAndScrollEventListeners.remove(), null);
		}
	}
}, Xt = ["title"], Zt = ["title"];
function Qt(t, n, r, i, c, d) {
	let f = x("Tip"), p = x("Option");
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
		b(t.$slots, "before-list"),
		d.instance.async ? (_(), s(e, { key: 0 }, [d.entry.isLoading || !d.entry.isLoaded || d.entry.loadingError || !d.entry.options.length ? (_(), a(f, {
			key: 0,
			type: "search-prompt",
			icon: d.getTipIcon
		}, {
			default: w(() => [u(S(d.getTipText) + " ", 1), d.getTipIcon === "error" ? (_(), s("a", {
				key: 0,
				class: "vue-treeselect__retry",
				onClick: n[0] ||= (...e) => d.instance.handleRemoteSearch && d.instance.handleRemoteSearch(...e),
				title: d.instance.retryTitle
			}, S(d.instance.retryText), 9, Xt)) : o("", !0)]),
			_: 1
		}, 8, ["icon"])) : (_(!0), s(e, { key: 1 }, y(d.normalizedOptions, (e) => (_(), a(p, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [t.$slots["option-label"] ? {
			name: "option-label",
			fn: w(({ node: e, shouldShowCount: n, count: r }) => [b(t.$slots, "option-label", {
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
			default: w(() => [u(S(d.getNormalTip[1]) + " ", 1), d.getNormalTip[2] ? (_(), s("a", {
				key: 0,
				class: "vue-treeselect__retry",
				onClick: n[1] ||= (...e) => d.instance.loadRootOptions && d.instance.loadRootOptions(...e),
				title: d.instance.retryTitle
			}, S(d.instance.retryText), 9, Zt)) : o("", !0)]),
			_: 1
		}, 8, ["icon"])) : (_(!0), s(e, { key: 1 }, y(d.normalizedOptions, (e) => (_(), a(p, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [t.$slots["option-label"] ? {
			name: "option-label",
			fn: w(({ node: e, shouldShowCount: n, count: r }) => [b(t.$slots, "option-label", {
				node: e,
				shouldShowCount: n,
				count: r
			})]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128))], 64)),
		b(t.$slots, "after-list")
	], 36)) : o("", !0)], 4);
}
var $t = /* @__PURE__ */ W(Yt, [["render", Qt]]), en = {
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
			this.controlResizeAndScrollEventListeners ||= { remove: R(t, this.updateMenuContainerOffset) };
		},
		setupControlSizeWatcher() {
			let { instance: e } = this, t = e.getControl();
			this.controlSizeWatcher ||= { remove: ke(t, () => {
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
			let { instance: e } = this, t = e.getControl(), n = this.$el, r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), a = e.menu.placement === "bottom" ? r.height : 0, o = Math.round(r.left - i.left) + "px", s = Math.round(r.top - i.top + a) + "px", c = this.$refs.menu.$refs["menu-container"].style, l = Be([
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
}, tn = {
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
				...en
			}), this.portalTarget.mount(e);
		},
		teardown() {
			document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
		}
	}
}, nn = { class: "vue-treeselect__menu-placeholder" };
function rn(e, t, n, r, i, a) {
	return _(), s("div", nn);
}
var an = /* @__PURE__ */ W(tn, [["render", rn]]), on = /* @__PURE__ */ Object.assign({ name: "vue-treeselect" }, {
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
			default: (0, Re.default)(!0)
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
			default: (0, Re.default)(["label"])
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
			default: Le.default
		},
		openDirection: {
			type: String,
			default: "auto",
			validator(e) {
				return B([
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
			default: V,
			validator(e) {
				return B([
					V,
					Ge,
					H,
					Ke
				], e);
			}
		},
		showCountOnSearch: null,
		sortValueBy: {
			type: String,
			default: $e,
			validator(e) {
				return B([
					$e,
					et,
					tt
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
			default: Xe,
			validator(e) {
				return B([
					"ALL",
					Xe,
					Ze,
					Qe
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
		let c = te(null), u = te(null), f = te(null), h = te(null), y = Ue(), x = (e, t) => {
			let n = 0;
			do {
				if (e.level < n) return -1;
				if (t.level < n) return 1;
				if (e.index[n] !== t.index[n]) return e.index[n] - t.index[n];
				n++;
			} while (!0);
		}, S = (e, t) => e.level === t.level ? x(e, t) : e.level - t.level, ie = () => ({
			isLoaded: !1,
			isLoading: !1,
			loadingError: ""
		}), ae = (e) => typeof e == "string" ? e : typeof e == "number" && !je(e) ? e + "" : "", oe = (e, t, n) => e ? (0, We.default)(t, n) : B(n, t), se = (e) => e.message || String(e), ce = () => D.modelValue == null ? [] : D.valueFormat === "id" ? D.multiple ? D.modelValue.slice() : [D.modelValue] : (D.multiple ? D.modelValue : [D.modelValue]).map((e) => Z(e)).map((e) => e.id), T = i, E = re(), D = t, O = v({
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
				nodeMap: z(),
				checkedStateMap: z(),
				selectedNodeIds: ce(),
				selectedNodeMap: z()
			},
			rootOptionsStates: ie(),
			localSearch: {
				active: !1,
				noResults: !1,
				countMap: z()
			},
			remoteSearch: z(),
			isReady: !1,
			_blurOnSelect: !1
		}), le = r(() => ({
			name: D.name || "vue-treeselect",
			hasValue: fe,
			trigger: O.trigger,
			forest: O.forest,
			localSearch: O.localSearch,
			remoteSearch: O.remoteSearch,
			isReady: O.isReady,
			rootOptionsStates: O.rootOptionsStates,
			internalValue: j,
			selectedNodes: A,
			$slots: E,
			$refs: {
				control: c.value,
				wrapper: u.value,
				portal: f.value,
				menu: h.value
			},
			menu: O.menu,
			single: M,
			verifyProps: Ce,
			resetFlags: Te,
			initialize: P,
			getInstanceId: F,
			getValue: Ee,
			getNode: I,
			createFallbackNode: De,
			extractCheckedNodeIdsFromValue: ce,
			extractNodeFromValue: Oe,
			fixSelectedNodeIds: ke,
			keepDataOfSelectedNodes: Ae,
			isSelected: L,
			traverseDescendantsBFS: R,
			traverseDescendantsDFS: Ne,
			traverseAllNodesDFS: Pe,
			traverseAllNodesByIndex: Fe,
			toggleClickOutsideEvent: Le,
			getValueContainer: Re,
			getInput: He,
			focusInput: Xe,
			blurInput: Ze,
			handleMouseDown: Qe,
			handleClickOutside: $e,
			handleLocalSearch: et,
			getRemoteSearchEntry: tt,
			shouldExpand: U,
			shouldOptionBeIncludedInSearchResult: nt,
			shouldShowOptionInMenu: W,
			getControl: rt,
			getMenu: G,
			setCurrentHighlightedOption: K,
			resetHighlightedOptionWhenNecessary: q,
			highlightFirstOption: at,
			highlightPrevOption: ot,
			highlightNextOption: st,
			highlightLastOption: ct,
			resetSearchQuery: lt,
			closeMenu: J,
			openMenu: Y,
			toggleMenu: ut,
			toggleExpanded: dt,
			buildForestState: X,
			enhancedNormalizer: Z,
			normalize: ft,
			loadRootOptions: pt,
			loadChildrenOptions: mt,
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
			allowClearingDisabled: D.allowClearingDisabled,
			allowSelectingDisabledDescendants: D.allowSelectingDisabledDescendants,
			alwaysOpen: D.alwaysOpen,
			appendToBody: D.appendToBody,
			async: D.async,
			autoFocus: D.autoFocus,
			autoLoadRootOptions: D.autoLoadRootOptions,
			autoDeselectAncestors: D.autoDeselectAncestors,
			autoDeselectDescendants: D.autoDeselectDescendants,
			autoSelectAncestors: D.autoSelectAncestors,
			autoSelectDescendants: D.autoSelectDescendants,
			backspaceRemoves: D.backspaceRemoves,
			beforeClearAll: D.beforeClearAll,
			branchNodesFirst: D.branchNodesFirst,
			cacheOptions: D.cacheOptions,
			clearable: D.clearable,
			clearAllText: D.clearAllText,
			clearOnSelect: D.clearOnSelect,
			clearValueText: D.clearValueText,
			closeOnSelect: D.closeOnSelect,
			defaultExpandLevel: D.defaultExpandLevel,
			defaultOptions: D.defaultOptions,
			deleteRemoves: D.deleteRemoves,
			delimiter: D.delimiter,
			flattenSearchResults: D.flattenSearchResults,
			disableBranchNodes: D.disableBranchNodes,
			disabled: D.disabled,
			disableFuzzyMatching: D.disableFuzzyMatching,
			flat: D.flat,
			instanceId: y,
			joinValues: D.joinValues,
			limit: D.limit,
			limitText: D.limitText,
			loadingText: D.loadingText,
			loadOptions: D.loadOptions,
			matchKeys: D.matchKeys,
			maxHeight: D.maxHeight,
			multiple: D.multiple,
			noChildrenText: D.noChildrenText,
			noOptionsText: D.noOptionsText,
			noResultsText: D.noResultsText,
			normalizer: D.normalizer,
			openDirection: D.openDirection,
			openOnClick: D.openOnClick,
			openOnFocus: D.openOnFocus,
			options: D.options,
			placeholder: D.placeholder,
			required: D.required,
			retryText: D.retryText,
			retryTitle: D.retryTitle,
			searchable: D.searchable,
			searchNested: D.searchNested,
			searchPromptText: D.searchPromptText,
			showCount: D.showCount,
			showCountOf: D.showCountOf,
			showCountOnSearch: D.showCountOnSearch,
			sortValueBy: D.sortValueBy,
			tabIndex: D.tabIndex,
			modelValue: D.modelValue,
			valueConsistsOf: D.valueConsistsOf,
			valueFormat: D.valueFormat,
			zIndex: D.zIndex
		})), ue = r(() => ({
			"vue-treeselect": !0,
			"vue-treeselect--single": M.value,
			"vue-treeselect--multi": D.multiple,
			"vue-treeselect--searchable": D.searchable,
			"vue-treeselect--disabled": D.disabled,
			"vue-treeselect--focused": O.trigger.isFocused,
			"vue-treeselect--has-value": fe.value,
			"vue-treeselect--open": O.menu.isOpen,
			"vue-treeselect--open-above": O.menu.placement === "top",
			"vue-treeselect--open-below": O.menu.placement === "bottom",
			"vue-treeselect--branch-nodes-disabled": D.disableBranchNodes,
			"vue-treeselect--append-to-body": D.appendToBody
		})), A = r(() => O.forest.selectedNodeIds.map(I)), j = r(() => {
			let e;
			// istanbul ignore else
			if (M.value || D.flat || D.disableBranchNodes || D.valueConsistsOf === "ALL") e = O.forest.selectedNodeIds.slice();
			else if (D.valueConsistsOf === "BRANCH_PRIORITY") e = O.forest.selectedNodeIds.filter((e) => {
				let t = I(e);
				return t.isRootNode ? !0 : !L(t.parentNode);
			});
			else if (D.valueConsistsOf === "LEAF_PRIORITY") e = O.forest.selectedNodeIds.filter((e) => {
				let t = I(e);
				return t.isLeaf ? !0 : t.children.length === 0;
			});
			else if (D.valueConsistsOf === "ALL_WITH_INDETERMINATE") {
				let t = [];
				e = O.forest.selectedNodeIds.slice(), A.value.forEach((n) => {
					n.ancestors.forEach((n) => {
						B(t, n.id) || B(e, n.id) || t.push(n.id);
					});
				}), e.push(...t);
			}
			return D.sortValueBy === "LEVEL" ? e.sort((e, t) => S(I(e), I(t))) : D.sortValueBy === "INDEX" && e.sort((e, t) => x(I(e), I(t))), e;
		}), fe = r(() => j.value.length > 0), M = r(() => !D.multiple), N = r(() => {
			let e = [];
			return Fe((t) => {
				if ((!O.localSearch.active || nt(t)) && e.push(t.id), t.isBranch && !U(t)) return !1;
			}), e;
		}), pe = r(() => N.value.length !== 0);
		r(() => typeof D.showCountOnSearch == "boolean" ? D.showCountOnSearch : D.showCount), r(() => O.forest.normalizedOptions.some((e) => e.isBranch)), r(() => O.localSearch.active && D.flattenSearchResults);
		let me = r(() => O.trigger.searchQuery), he = r(() => D.modelValue), ge = r(() => D.alwaysOpen), _e = r(() => D.branchNodesFirst), ve = r(() => D.disabled), ye = r(() => D.flat), be = r(() => D.matchKeys), xe = r(() => D.multiple), Se = r(() => D.options), Ce = () => {
			k(() => D.async ? D.searchable : !0, () => "For async search mode, the value of \"searchable\" prop must be true."), D.options == null && !D.loadOptions && k(() => !1, () => "Are you meant to dynamically load options? You need to use \"loadOptions\" prop."), D.flat && k(() => D.multiple, () => "You are using flat mode. But you forgot to add \"multiple=true\"?"), D.flat || [
				"autoSelectAncestors",
				"autoSelectDescendants",
				"autoDeselectAncestors",
				"autoDeselectDescendants"
			].forEach((e) => {
				k(() => !D[e], () => `"${e}" only applies to flat mode.`);
			});
		}, Te = () => {
			O._blurOnSelect = !1;
		}, P = () => {
			let e = D.async ? tt().options : ne(D.options);
			if (Array.isArray(e)) {
				let t = O.forest.nodeMap;
				O.forest.nodeMap = z(), Ae(t), O.forest.normalizedOptions = ft(null, e, t), ke(j.value);
				let { searchQuery: n } = O.trigger;
				O.remoteSearch[n] = tt();
			} else O.forest.normalizedOptions = [];
		}, F = () => y, Ee = () => {
			if (D.valueFormat === "id") return D.multiple ? j.value.slice() : j.value[0];
			let e = j.value.map((e) => I(e).raw);
			return D.multiple ? e : e[0];
		}, I = (e) => (k(() => e != null, () => `Invalid node id: ${e}`), e == null ? null : e in O.forest.nodeMap ? O.forest.nodeMap[e] : De(e)), De = (e) => {
			let t = Oe(e), n = {
				id: e,
				label: Z(t).label || `${e} (unknown)`,
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
			return O.forest.nodeMap[e] = n;
		}, Oe = (e) => {
			let t = { id: e };
			return D.valueFormat === "id" ? t : Be(D.multiple ? Array.isArray(D.modelValue) ? D.modelValue : [] : D.modelValue ? [D.modelValue] : [], (t) => t && Z(t).id === e) || t;
		}, ke = (e) => {
			let t = [];
			// istanbul ignore else
			if (M.value || D.flat || D.disableBranchNodes || D.valueConsistsOf === "ALL") t = e;
			else if (D.valueConsistsOf === "BRANCH_PRIORITY") e.forEach((e) => {
				t.push(e);
				let n = I(e);
				n.isBranch && R(n, (e) => {
					t.push(e.id);
				});
			});
			else if (D.valueConsistsOf === "LEAF_PRIORITY") {
				let n = z(), r = e.slice();
				for (; r.length;) {
					let e = r.shift(), i = I(e);
					t.push(e), !i.isRootNode && (i.parentNode.id in n || (n[i.parentNode.id] = i.parentNode.children.length), --n[i.parentNode.id] === 0 && r.push(i.parentNode.id));
				}
			} else if (D.valueConsistsOf === "ALL_WITH_INDETERMINATE") {
				let n = z(), r = e.filter((e) => {
					let t = I(e);
					return t.isLeaf || t.children.length === 0;
				});
				for (; r.length;) {
					let e = r.shift(), i = I(e);
					t.push(e), !i.isRootNode && (i.parentNode.id in n || (n[i.parentNode.id] = i.parentNode.children.length), --n[i.parentNode.id] === 0 && r.push(i.parentNode.id));
				}
			}
		}, Ae = (e) => {
			O.forest.selectedNodeIds.forEach((t) => {
				e[t] && (O.forest.nodeMap[t] = {
					...e[t],
					isFallbackNode: !0
				});
			});
		}, L = (e) => O.forest.selectedNodeMap[e.id] === !0, R = (e, t) => {
			// istanbul ignore if
			if (!e.isBranch) return;
			let n = e.children.slice();
			for (; n.length;) {
				let e = n[0];
				e.isBranch && n.push(...e.children), t(e), n.shift();
			}
		}, Ne = (e, t) => {
			e.isBranch && e.children.forEach((e) => {
				Ne(e, t), t(e);
			});
		}, Pe = (e) => {
			O.forest.normalizedOptions.forEach((t) => {
				Ne(t, e), e(t);
			});
		}, Fe = (e) => {
			let t = (n) => {
				n.children.forEach((n) => {
					e(n) !== !1 && n.isBranch && t(n);
				});
			};
			t({ children: O.forest.normalizedOptions });
		}, Le = (e) => {
			e ? document.addEventListener("mousedown", $e, !1) : document.removeEventListener("mousedown", $e, !1);
		}, Re = () => c.value.$refs["value-container"], He = () => Re().$refs.input, Xe = () => {
			He().focus();
		}, Ze = () => {
			He().blur();
		}, Qe = () => {}, $e = (e) => {
			// istanbul ignore else
			u.value && !u.value.contains(e.target) && (Ze(), J());
		}, et = () => {
			let { searchQuery: e } = O.trigger, t = () => q(!0);
			if (!e) return O.localSearch.active = !1, O.localSearch.noResults = !1, t();
			O.localSearch.active = !0, O.localSearch.noResults = !0, Pe((e) => {
				e.isBranch && (e.isExpandedOnSearch = !1, e.showAllChildrenOnSearch = !1, e.isMatched = !1, e.hasMatchedDescendants = !1, O.localSearch.countMap[e.id] = {
					[V]: 0,
					[Ge]: 0,
					[H]: 0,
					[Ke]: 0
				});
			});
			let n = e.trim().toLocaleLowerCase(), r = n.replace(/\s+/g, " ").split(" ");
			Pe((e) => {
				D.searchNested && r.length > 1 ? e.isMatched = r.every((t) => oe(!1, t, e.nestedSearchLabel)) : e.isMatched = D.matchKeys.some((t) => oe(!D.disableFuzzyMatching, n, e.lowerCased[t])), e.isMatched && (O.localSearch.noResults = !1, e.ancestors.forEach((e) => O.localSearch.countMap[e.id][Ge]++), e.isLeaf && e.ancestors.forEach((e) => O.localSearch.countMap[e.id][Ke]++), e.parentNode !== null && (O.localSearch.countMap[e.parentNode.id][V] += 1, e.isLeaf && (O.localSearch.countMap[e.parentNode.id][H] += 1))), (e.isMatched || e.isBranch && e.isExpandedOnSearch) && e.parentNode !== null && (e.parentNode.isExpandedOnSearch = !0, e.parentNode.hasMatchedDescendants = !0);
			}), t();
		}, tt = () => {
			let { searchQuery: e } = O.trigger, t = O.remoteSearch[e] || {
				...ie(),
				options: []
			};
			if (e === "") {
				if (Array.isArray(D.defaultOptions)) return t.options = D.defaultOptions, t.isLoaded = !0, t;
				if (D.defaultOptions !== !0) return t.isLoaded = !0, t;
			}
			return O.remoteSearch[e] || (O.remoteSearch[e] = t), O.remoteSearch[e];
		}, U = (e) => O.localSearch.active ? e.isExpandedOnSearch : e.isExpanded, nt = (e) => !!(e.isMatched || e.isBranch && e.hasMatchedDescendants && !D.flattenSearchResults || !e.isRootNode && e.parentNode.showAllChildrenOnSearch), W = (e) => !(O.localSearch.active && !nt(e)), rt = () => c.value.$el, G = () => h.value.$el, K = (e, t = !0) => {
			let n = O.menu.current;
			if (n != null && n in O.forest.nodeMap && (O.forest.nodeMap[n].isHighlighted = !1), O.menu.current = e.id, e.isHighlighted = !0, O.menu.isOpen && t) {
				let t = () => {
					let t = G(), n = t.querySelector(`.vue-treeselect__option[data-id="${e.id}"]`);
					n && de(t, n);
				};
				G() ? t() : 
				// istanbul ignore next
p(t);
			}
		}, q = (e = !1) => {
			let { current: t } = O.menu;
			(e || t == null || !(t in O.forest.nodeMap) || !W(I(t))) && at();
		}, at = () => {
			if (!pe.value) return;
			let e = N.value[0];
			K(I(e));
		}, ot = () => {
			if (!pe.value) return;
			let e = N.value.indexOf(O.menu.current) - 1;
			if (e === -1) return ct();
			K(I(N.value[e]));
		}, st = () => {
			if (!pe.value) return;
			let e = N.value.indexOf(O.menu.current) + 1;
			if (e === N.value.length) return at();
			K(I(N.value[e]));
		}, ct = () => {
			pe.value && K(I((0, ze.default)(N.value)));
		}, lt = () => {
			O.trigger.searchQuery = "";
		}, J = () => {
			!O.menu.isOpen || !D.disabled && D.alwaysOpen || (Ct(), O.menu.isOpen = !1, Le(!1), lt(), T("close", Ee(), F()));
		}, Y = () => {
			D.disabled || O.menu.isOpen || (O.menu.isOpen = !0, p(q), p(wt), !D.options && !D.async && pt(), Le(!0), T("open", F()));
		}, ut = () => {
			O.menu.isOpen ? J() : Y();
		}, dt = (e) => {
			let t;
			O.localSearch.active ? (t = e.isExpandedOnSearch = !e.isExpandedOnSearch, t && (e.showAllChildrenOnSearch = !0)) : t = e.isExpanded = !e.isExpanded, t && !e.childrenStates.isLoaded && mt(e);
		}, X = () => {
			let e = z();
			O.forest.selectedNodeIds.forEach((t) => {
				e[t] = !0;
			}), O.forest.selectedNodeMap = e;
			let t = z();
			D.multiple && (Fe((e) => {
				t[e.id] = 0;
			}), A.value.forEach((e) => {
				t[e.id] = 2, !D.flat && !D.disableBranchNodes && e.ancestors.forEach((e) => {
					L(e) || (t[e.id] = 1);
				});
			})), O.forest.checkedStateMap = t;
		}, Z = (e) => ({
			...e,
			...D.normalizer(e, F())
		}), ft = (e, t, n) => {
			let r = t.map((e) => [Z(e), e]).map(([t, r], i) => {
				gt(t), _t(t);
				let { id: a, label: o, children: s, isDefaultExpanded: c } = t, l = e === null, u = l ? 0 : e.level + 1, d = Array.isArray(s) || s === null, f = !d, p = !!t.isDisabled || !D.flat && !l && e.isDisabled, m = !!t.isNew, h = D.matchKeys.reduce((e, n) => ({
					...e,
					[n]: ae(t[n]).toLocaleLowerCase()
				}), {}), g = l ? h.label : e.nestedSearchLabel + " " + h.label;
				O.forest.nodeMap[a] = z();
				let _ = O.forest.nodeMap[a];
				if (_.id = a, _.label = o, _.level = u, _.ancestors = l ? [] : [e].concat(e.ancestors), _.index = (l ? [] : e.index).concat(i), _.parentNode = e, _.lowerCased = h, _.nestedSearchLabel = g, _.isDisabled = p, _.isNew = m, _.isMatched = !1, _.isHighlighted = !1, _.isBranch = d, _.isLeaf = f, _.isRootNode = l, _.raw = r, d) {
					let e = Array.isArray(s);
					_.childrenStates = {
						...ie(),
						isLoaded: e
					}, _.isExpanded = typeof c == "boolean" ? c : u < D.defaultExpandLevel, _.hasMatchedDescendants = !1, _.hasDisabledDescendants = !1, _.isExpandedOnSearch = !1, _.showAllChildrenOnSearch = !1, _.count = {
						[V]: 0,
						[Ge]: 0,
						[H]: 0,
						[Ke]: 0
					}, _.children = e ? ft(_, s, n) : [], c === !0 && _.ancestors.forEach((e) => {
						e.isExpanded = !0;
					}), !e && typeof D.loadOptions != "function" ? k(() => !1, () => "Unloaded branch node detected. \"loadOptions\" prop is required to load its children.") : !e && _.isExpanded && mt(_);
				}
				if (_.ancestors.forEach((e) => e.count[Ge]++), f && _.ancestors.forEach((e) => e.count[Ke]++), l || (e.count[V] += 1, f && (e.count[H] += 1), p && (e.hasDisabledDescendants = !0)), n && n[a]) {
					let e = n[a];
					_.isMatched = e.isMatched, _.showAllChildrenOnSearch = e.showAllChildrenOnSearch, _.isHighlighted = e.isHighlighted, e.isBranch && _.isBranch && (_.isExpanded = e.isExpanded, _.isExpandedOnSearch = e.isExpandedOnSearch, e.childrenStates.isLoaded && !_.childrenStates.isLoaded ? _.isExpanded = !1 : _.childrenStates = { ...e.childrenStates });
				}
				return _;
			});
			if (D.branchNodesFirst) {
				let e = r.filter((e) => e.isBranch), t = r.filter((e) => e.isLeaf);
				r = e.concat(t);
			}
			return r;
		}, pt = () => {
			ht({
				action: qe,
				isPending: () => O.rootOptionsStates.isLoading,
				start: () => {
					O.rootOptionsStates.isLoading = !0, O.rootOptionsStates.loadingError = "";
				},
				succeed: () => {
					O.rootOptionsStates.isLoaded = !0, p(() => {
						q(!0);
					});
				},
				fail: (e) => {
					O.rootOptionsStates.loadingError = se(e);
				},
				end: () => {
					O.rootOptionsStates.isLoading = !1;
				}
			});
		}, mt = (e) => {
			let { id: t, raw: n } = e;
			ht({
				action: Je,
				args: { parentNode: n },
				isPending: () => I(t).childrenStates.isLoading,
				start: () => {
					I(t).childrenStates.isLoading = !0, I(t).childrenStates.loadingError = "";
				},
				succeed: (n) => {
					let r = I(t);
					r.children = ft(e, n), r.childrenStates.isLoaded = !0;
				},
				fail: (e) => {
					I(t).childrenStates.loadingError = se(e);
				},
				end: () => {
					I(t).childrenStates.isLoading = !1;
				}
			});
		}, ht = ({ action: e, args: t, isPending: n, start: r, succeed: i, fail: a, end: o }) => {
			if (!D.loadOptions || n()) return;
			r();
			let s = (0, Ie.default)((e, t) => {
				e ? a(e) : i(t), o();
			}), c = D.loadOptions({
				id: F(),
				instanceId: F(),
				action: e,
				...t,
				callback: s
			});
			Me(c) && c.then(() => {
				s();
			}, (e) => {
				s(e);
			}).catch((e) => {
				// istanbul ignore next
				console.error(e);
			});
		}, gt = (e) => {
			k(() => !(e.id in O.forest.nodeMap && !O.forest.nodeMap[e.id].isFallbackNode), () => `Detected duplicate presence of node id ${JSON.stringify(e.id)}. Their labels are "${O.forest.nodeMap[e.id].label}" and "${e.label}" respectively.`);
		}, _t = (e) => {
			k(() => !(e.children === void 0 && e.isBranch === !0), () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.");
		}, vt = (e) => {
			if (D.disabled || e.isDisabled) return;
			M.value && yt();
			let t = D.multiple && !D.flat ? O.forest.checkedStateMap[e.id] === 0 : !L(e);
			t ? bt(e) : xt(e), X(), T(t ? "select" : "deselect", e.raw, F()), O.localSearch.active && t && (M.value || D.clearOnSelect) && lt(), M.value && D.closeOnSelect && (J(), D.searchable && (O._blurOnSelect = !0)), T("update:modelValue", D.multiple ? O.forest.selectedNodeIds : O.forest.selectedNodeIds[0] || null);
		}, yt = () => {
			fe.value && (M.value || D.allowClearingDisabled ? O.forest.selectedNodeIds = [] : O.forest.selectedNodeIds = O.forest.selectedNodeIds.filter((e) => I(e).isDisabled), X(), T("update:modelValue", null));
		}, bt = (e) => {
			if (M.value || D.disableBranchNodes) return Q(e);
			if (D.flat) {
				Q(e), D.autoSelectAncestors ? e.ancestors.forEach((e) => {
					!L(e) && !e.isDisabled && Q(e);
				}) : D.autoSelectDescendants && R(e, (e) => {
					!L(e) && !e.isDisabled && Q(e);
				});
				return;
			}
			let t = e.isLeaf || !e.hasDisabledDescendants || D.allowSelectingDisabledDescendants;
			if (t && Q(e), e.isBranch && R(e, (e) => {
				(!e.isDisabled || D.allowSelectingDisabledDescendants) && Q(e);
			}), t) {
				let t = e;
				for (; (t = t.parentNode) !== null && t.children.every(L);) Q(t);
			}
		}, xt = (e) => {
			if (D.disableBranchNodes) return $(e);
			if (D.flat) {
				$(e), D.autoDeselectAncestors ? e.ancestors.forEach((e) => {
					L(e) && !e.isDisabled && $(e);
				}) : D.autoDeselectDescendants && R(e, (e) => {
					L(e) && !e.isDisabled && $(e);
				});
				return;
			}
			let t = !1;
			if (e.isBranch && Ne(e, (e) => {
				(!e.isDisabled || D.allowSelectingDisabledDescendants) && ($(e), t = !0);
			}), e.isLeaf || t || e.children.length === 0) {
				$(e);
				let t = e;
				for (; (t = t.parentNode) !== null && L(t);) $(t);
			}
		}, Q = (e) => {
			O.forest.selectedNodeIds.push(e.id), O.forest.selectedNodeMap[e.id] = !0;
		}, $ = (e) => {
			we(O.forest.selectedNodeIds, e.id), delete O.forest.selectedNodeMap[e.id];
		}, St = () => {
			if (fe.value) {
				if (M.value) return yt();
				vt(I((0, ze.default)(j.value)));
			}
		}, Ct = () => {
			let e = G();
			// istanbul ignore else
			e && (h.value.lastScrollPosition = e.scrollTop);
		}, wt = () => {
			let e = G();
			// istanbul ignore else
			e && (e.scrollTop = h.value.lastScrollPosition);
		}, Tt = () => {
			let { searchQuery: e } = O.trigger, t = tt(), n = () => {
				P(t), q(!0);
			};
			if ((e === "" || D.cacheOptions) && t.isLoaded) return n();
			ht({
				action: Ye,
				args: { searchQuery: e },
				isPending() {
					return t.isLoading;
				},
				start: () => {
					t.isLoading = !0, t.isLoaded = !1, t.loadingError = "";
				},
				succeed: (r) => {
					t.isLoading = !1, t.isLoaded = !0, t.options = r, O.trigger.searchQuery === e && n();
				},
				fail: (e) => {
					t.isLoading = !1, t.loadingError = se(e);
				},
				end: () => {
					t.isLoading = !1;
				}
			});
		};
		return n({ clear: yt }), C(ge, (e) => {
			e ? Y() : J();
		}), C(_e, () => {
			P();
		}), C(ve, (e) => {
			e && O.menu.isOpen ? J() : !e && !O.menu.isOpen && D.alwaysOpen && Y();
		}), C(ye, () => {
			P();
		}), C(be, () => {
			P();
		}), C(xe, (e) => {
			// istanbul ignore else
			e && X();
		}), C(Se, () => {
			D.async || (P(), O.rootOptionsStates.isLoaded = Array.isArray(D.options));
		}, {
			deep: !0,
			immediate: !0
		}), C(me, () => {
			D.async ? Tt() : et(), T("search-change", O.trigger.searchQuery, F());
		}), C(he, () => {
			let e = ce();
			Ve(e, j.value) && ke(e);
		}), g(() => {
			Ce(), Te(), O.isReady = !0, D.autoFocus && Xe(), !D.options && !D.async && D.autoLoadRootOptions && pt(), D.alwaysOpen && Y(), D.async && D.defaultOptions && Tt(), X();
		}), ee("instance", le.value), (n, r) => (_(), s("div", {
			ref_key: "wrapper",
			ref: u,
			class: m(ue.value)
		}, [O.isReady ? (_(), s(e, { key: 0 }, [
			d(it),
			d(Mt, {
				ref_key: "control",
				ref: c
			}, l({ _: 2 }, [n.$slots["value-label"] ? {
				name: "value-label",
				fn: w(({ node: e }) => [b(n.$slots, "value-label", { node: e })]),
				key: "0"
			} : void 0]), 1536),
			t.appendToBody ? (_(), a(an, {
				key: 0,
				ref_key: "portal",
				ref: f
			}, null, 512)) : (_(), a($t, {
				key: 1,
				ref_key: "rmenu",
				ref: h
			}, l({ _: 2 }, [
				n.$slots["before-list"] ? {
					name: "before-list",
					fn: w(() => [b(n.$slots, "before-list")]),
					key: "0"
				} : void 0,
				n.$slots["after-list"] ? {
					name: "after-list",
					fn: w(() => [b(n.$slots, "after-list")]),
					key: "1"
				} : void 0,
				n.$slots["option-label"] ? {
					name: "option-label",
					fn: w(({ node: e, shouldShowCount: t, count: r }) => [b(n.$slots, "option-label", {
						node: e,
						shouldShowCount: t,
						count: r
					})]),
					key: "2"
				} : void 0
			]), 1536))
		], 64)) : o("", !0)], 2));
	}
}), sn = {
	components: { Treeselect: on },
	data() {
		return {
			test: "b",
			test2: ["b", "c"],
			test3: ["b", "c"],
			test4: null,
			options: [
				{
					id: "a",
					label: "Ohm",
					symbol: "&#8486;",
					children: [{
						id: "aa",
						label: "Beta",
						symbol: "&#8492;"
					}, {
						id: "ab",
						label: "Charlie",
						symbol: "&#8493;"
					}]
				},
				{
					id: "b",
					label: "Snowman",
					symbol: "&#9731;"
				},
				{
					id: "c",
					label: "Phone",
					symbol: "&#9743;"
				}
			],
			highLevelOptions: [{
				id: "a1",
				label: "Ohm-lvl1",
				symbol: "&#8486;",
				children: null
			}]
		};
	},
	methods: {
		handleEvent(e, t) {
			console.log(e, t);
		},
		fakeLoad() {
			return new Promise((e) => {
				setTimeout(() => e(ne(this.highLevelOptions)), 2e3);
			});
		},
		fakeLoadChildren() {
			return new Promise((e) => {
				setTimeout(() => e(ne(this.options)), 2e3);
			});
		},
		async loadOptions({ action: e, searchQuery: t, callback: n }) {
			e === "ASYNC_SEARCH" && n(null, await this.fakeLoad()), e === "LOAD_CHILDREN_OPTIONS" && n(null, await this.fakeLoadChildren());
		}
	},
	watch: {
		test(e, t) {
			console.log(e, t);
		},
		test2(e, t) {
			console.log(e, t);
		}
	}
}, cn = ["innerHTML"], ln = { style: {
	display: "flex",
	"flex-flow": "row"
} }, un = ["innerHTML"];
function dn(e, t, n, r, i, a) {
	let o = x("Treeselect");
	return _(), s("div", null, [
		t[24] ||= c("div", { class: "heading" }, "Single Value", -1),
		d(o, {
			modelValue: i.test,
			"onUpdate:modelValue": [t[0] ||= (e) => i.test = e, t[3] ||= (e) => a.handleEvent(e, "update")],
			options: i.options,
			onOpen: t[1] ||= (e) => a.handleEvent(e, "open"),
			onClose: t[2] ||= (e) => a.handleEvent(e, "close"),
			"clear-on-select": !1,
			onSelect: t[4] ||= (e) => a.handleEvent(e, "select"),
			onDeselect: t[5] ||= (e) => a.handleEvent(e, "deselect"),
			onSearchChange: t[6] ||= (e) => a.handleEvent(e, "search-change"),
			"close-on-select": !1
		}, null, 8, ["modelValue", "options"]),
		t[25] ||= c("div", { class: "heading" }, "Multiple Values", -1),
		d(o, {
			modelValue: i.test2,
			"onUpdate:modelValue": [t[7] ||= (e) => i.test2 = e, t[10] ||= (e) => a.handleEvent(e, "update")],
			options: i.options,
			multiple: !0,
			"close-on-select": !1,
			onOpen: t[8] ||= (e) => a.handleEvent(e, "open"),
			onClose: t[9] ||= (e) => a.handleEvent(e, "close"),
			onSelect: t[11] ||= (e) => a.handleEvent(e, "select"),
			onDeselect: t[12] ||= (e) => a.handleEvent(e, "deselect"),
			onSearchChange: t[13] ||= (e) => a.handleEvent(e, "search-change")
		}, null, 8, ["modelValue", "options"]),
		t[26] ||= c("div", { class: "heading" }, "Slots", -1),
		d(o, {
			modelValue: i.test3,
			"onUpdate:modelValue": [t[14] ||= (e) => i.test3 = e, t[17] ||= (e) => a.handleEvent(e, "update")],
			options: i.options,
			onOpen: t[15] ||= (e) => a.handleEvent(e, "open"),
			onClose: t[16] ||= (e) => a.handleEvent(e, "close"),
			multiple: !0,
			"clear-on-select": !1,
			onSelect: t[18] ||= (e) => a.handleEvent(e, "select"),
			onDeselect: t[19] ||= (e) => a.handleEvent(e, "deselect"),
			onSearchChange: t[20] ||= (e) => a.handleEvent(e, "search-change"),
			"close-on-select": !1
		}, {
			"before-list": w(() => [...t[22] ||= [c("div", { innerHTML: "☝" }, null, -1)]]),
			"after-list": w(() => [...t[23] ||= [c("div", { innerHTML: "✌" }, null, -1)]]),
			"option-label": w(({ node: e, shouldShowCount: t, count: n }) => [c("div", null, [u(S(e.label) + " ", 1), c("span", { innerHTML: e.raw.symbol }, null, 8, cn)])]),
			"value-label": w(({ node: e }) => [c("div", ln, [u(S(e.label) + " ", 1), c("span", { innerHTML: e.raw.symbol }, null, 8, un)])]),
			_: 1
		}, 8, ["modelValue", "options"]),
		t[27] ||= c("div", { class: "heading" }, "Async", -1),
		d(o, {
			modelValue: i.test4,
			"onUpdate:modelValue": t[21] ||= (e) => i.test4 = e,
			async: !0,
			"default-options": !0,
			"load-options": a.loadOptions
		}, null, 8, ["modelValue", "load-options"])
	]);
}
//#endregion
//#region src/index.js
i(/* @__PURE__ */ W(sn, [["render", dn]])).mount("#app");
var fn = on;
//#endregion
export { Ye as ASYNC_SEARCH, Je as LOAD_CHILDREN_OPTIONS, qe as LOAD_ROOT_OPTIONS, on as Treeselect, fn as default };
