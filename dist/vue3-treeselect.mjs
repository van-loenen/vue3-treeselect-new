import { Fragment as e, Transition as t, TransitionGroup as n, computed as r, createApp as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, nextTick as p, normalizeClass as m, normalizeStyle as h, onMounted as g, openBlock as _, provide as v, reactive as y, ref as b, renderList as x, renderSlot as S, resolveComponent as C, toDisplayString as w, toRaw as ee, useSlots as te, watch as T, withCtx as E } from "vue";
//#region \0rolldown/runtime.js
var ne = Object.create, re = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, ae = Object.getOwnPropertyNames, oe = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty, O = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), k = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ae(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !D.call(e, s) && s !== n && re(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ie(t, s)) || r.enumerable
	});
	return e;
}, A = (e, t, n) => (n = e == null ? {} : ne(oe(e)), k(t || !e || !e.__esModule ? re(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), se = /* @__PURE__ */ O(((e, t) => {
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
})), ce = /* @__PURE__ */ A((/* @__PURE__ */ O(((e, t) => {
	function n() {}
	t.exports = n;
})))()), j = process.env.NODE_ENV === "production" ? ce.default : function(e, t) {
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
function le(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
	r.bottom + i > n.bottom ? e.scrollTop = Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight) : r.top - i < n.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
//#endregion
//#region node_modules/lodash/isObject.js
var N = /* @__PURE__ */ O(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), ue = /* @__PURE__ */ O(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), P = /* @__PURE__ */ O(((e, t) => {
	var n = ue(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), F = /* @__PURE__ */ O(((e, t) => {
	var n = P();
	t.exports = function() {
		return n.Date.now();
	};
})), de = /* @__PURE__ */ O(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), fe = /* @__PURE__ */ O(((e, t) => {
	var n = de(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), pe = /* @__PURE__ */ O(((e, t) => {
	t.exports = P().Symbol;
})), me = /* @__PURE__ */ O(((e, t) => {
	var n = pe(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
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
})), he = /* @__PURE__ */ O(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), ge = /* @__PURE__ */ O(((e, t) => {
	var n = pe(), r = me(), i = he(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), _e = /* @__PURE__ */ O(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), ve = /* @__PURE__ */ O(((e, t) => {
	var n = ge(), r = _e(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), ye = /* @__PURE__ */ O(((e, t) => {
	var n = fe(), r = N(), i = ve(), a = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt;
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
})), be = /* @__PURE__ */ A((/* @__PURE__ */ O(((e, t) => {
	var n = N(), r = F(), i = ye(), a = "Expected a function", o = Math.max, s = Math.min;
	function c(e, t, c) {
		var l, u, d, f, p, m, h = 0, g = !1, _ = !1, v = !0;
		if (typeof e != "function") throw TypeError(a);
		t = i(t) || 0, n(c) && (g = !!c.leading, _ = "maxWait" in c, d = _ ? o(i(c.maxWait) || 0, t) : d, v = "trailing" in c ? !!c.trailing : v);
		function y(t) {
			var n = l, r = u;
			return l = u = void 0, h = t, f = e.apply(r, n), f;
		}
		function b(e) {
			return h = e, p = setTimeout(C, t), g ? y(e) : f;
		}
		function x(e) {
			var n = e - m, r = e - h, i = t - n;
			return _ ? s(i, d - r) : i;
		}
		function S(e) {
			var n = e - m, r = e - h;
			return m === void 0 || n >= t || n < 0 || _ && r >= d;
		}
		function C() {
			var e = r();
			if (S(e)) return w(e);
			p = setTimeout(C, x(e));
		}
		function w(e) {
			return p = void 0, v && l ? y(e) : (l = u = void 0, f);
		}
		function ee() {
			p !== void 0 && clearTimeout(p), h = 0, l = m = u = p = void 0;
		}
		function te() {
			return p === void 0 ? f : w(r());
		}
		function T() {
			var e = r(), n = S(e);
			if (l = arguments, u = this, m = e, n) {
				if (p === void 0) return b(m);
				if (_) return clearTimeout(p), p = setTimeout(C, t), y(m);
			}
			return p === void 0 && (p = setTimeout(C, t)), f;
		}
		return T.cancel = ee, T.flush = te, T;
	}
	t.exports = c;
})))()), xe = (function(e, t) {
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
function Se(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
//#endregion
//#region src/vueTreeSelect/utils/watchSize.ts
var Ce, I = [], L = 100;
function we() {
	Ce = setInterval(() => {
		I.forEach(Te);
	}, L);
}
function R() {
	clearInterval(Ce), Ce = null;
}
function Te(e) {
	let { $el: t, listener: n, lastWidth: r, lastHeight: i } = e, a = t.offsetWidth, o = t.offsetHeight;
	(r !== a || i !== o) && (e.lastWidth = a, e.lastHeight = o, n({
		width: a,
		height: o
	}));
}
function Ee(e, t) {
	let n = {
		$el: e,
		listener: t,
		lastWidth: null,
		lastHeight: null
	};
	return I.push(n), Te(n), we(), () => {
		Se(I, n), I.length || R();
	};
}
function z(e, t) {
	let n = document.documentMode === 9, r = !0, i = (n ? Ee : xe)(e, (...e) => r || t(...e));
	return r = !1, i;
}
//#endregion
//#region src/vueTreeSelect/utils/setupResizeAndScrollEventListeners.ts
function De(e) {
	let t = [], n = e.parentNode;
	for (; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE;) B(n) && t.push(n), n = n.parentNode;
	return t.push(window), t;
}
function B(e) {
	let { overflow: t, overflowX: n, overflowY: r } = getComputedStyle(e);
	return /(auto|scroll|overlay)/.test(t + r + n);
}
function V(e, t) {
	let n = De(e);
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
function Oe(e) {
	return e !== e;
}
//#endregion
//#region node_modules/is-promise/index.mjs
function ke(e) {
	return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
//#endregion
//#region node_modules/lodash/toFinite.js
var Ae = /* @__PURE__ */ O(((e, t) => {
	var n = ye(), r = Infinity, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), je = /* @__PURE__ */ O(((e, t) => {
	var n = Ae();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), Me = /* @__PURE__ */ O(((e, t) => {
	var n = je(), r = "Expected a function";
	function i(e, t) {
		var i;
		if (typeof t != "function") throw TypeError(r);
		return e = n(e), function() {
			return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = void 0), i;
		};
	}
	t.exports = i;
})), Ne = /* @__PURE__ */ A((/* @__PURE__ */ O(((e, t) => {
	var n = Me();
	function r(e) {
		return n(2, e);
	}
	t.exports = r;
})))()), Pe = /* @__PURE__ */ A((/* @__PURE__ */ O(((e, t) => {
	function n(e) {
		return e;
	}
	t.exports = n;
})))()), Fe = /* @__PURE__ */ A((/* @__PURE__ */ O(((e, t) => {
	function n(e) {
		return function() {
			return e;
		};
	}
	t.exports = n;
})))()), H = () => Object.create(null), Ie = /* @__PURE__ */ A((/* @__PURE__ */ O(((e, t) => {
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
function Le(e, t, n) {
	for (let r = 0, i = e.length; r < i; r++) if (t.call(n, e[r], r, e)) return e[r];
}
//#endregion
//#region src/vueTreeSelect/utils/quickDiff.ts
function Re(e, t) {
	if (e.length !== t.length) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
	return !1;
}
//#endregion
//#region src/vueTreeSelect/utils/instanceIdSingleton.ts
var ze = 0, Be = () => ze++, Ve = /* @__PURE__ */ A(se()), W = "ALL_CHILDREN", He = "ALL_DESCENDANTS", Ue = "LEAF_CHILDREN", We = "LEAF_DESCENDANTS", Ge = "LOAD_ROOT_OPTIONS", Ke = "LOAD_CHILDREN_OPTIONS", qe = "ASYNC_SEARCH", Je = "BRANCH_PRIORITY", Ye = "LEAF_PRIORITY", Xe = "ALL_WITH_INDETERMINATE", Ze = "ORDER_SELECTED", Qe = "LEVEL", $e = "INDEX", G = {
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
}, et = process.env.NODE_ENV === "testing" ? 10 : /* istanbul ignore next */ 200, tt = f({
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
e != null && !Oe(e) ? JSON.stringify(e) : "";
	} }
}), K = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, q = ["name", "value"];
function J(t, n, r, i, a, c) {
	return t.canRender ? (_(!0), s(e, { key: 0 }, x(t.values, (e, n) => (_(), s("input", {
		type: "hidden",
		name: t.instance.name,
		value: e,
		key: "hidden-field-" + n
	}, null, 8, q))), 128)) : o("", !0);
}
var nt = /* @__PURE__ */ K(tt, [["render", J]]), Y = [
	G.ENTER,
	G.END,
	G.HOME,
	G.ARROW_LEFT,
	G.ARROW_UP,
	G.ARROW_RIGHT,
	G.ARROW_DOWN
], rt = {
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
		this.debouncedCallback = (0, be.default)(this.updateSearchQuery, et, {
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
				if (!t.menu.isOpen && U(Y, n)) return e.preventDefault(), t.openMenu();
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
}, it = ["tabindex"], at = [
	"tabIndex",
	"required",
	"value"
];
function ot(t, n, r, i, a, l) {
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
	}, null, 46, at), l.needAutoSize ? (_(), s("div", {
		key: 0,
		ref: "sizer",
		class: "vue-treeselect__sizer"
	}, w(t.value), 513)) : o("", !0)], 64)) : o("", !0)], 40, it);
}
var st = /* @__PURE__ */ K(rt, [["render", ot]]), X = {
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
function ct(e, t, n, r, i, a) {
	return _(), s("div", { class: m({
		"vue-treeselect__placeholder": !0,
		"vue-treeselect-helper-zoom-effect-off": !0,
		"vue-treeselect-helper-hide": a.hasValue || a.hasSearchQuery
	}) }, w(a.instance.placeholder), 3);
}
var lt = /* @__PURE__ */ K(X, [["render", ct]]), ut = {
	name: "vue-treeselect--single-value",
	inject: ["instance"],
	components: {
		Placeholder: lt,
		Input: st
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
}, dt = {
	key: 0,
	class: "vue-treeselect__value-container"
}, Z = { class: "vue-treeselect__single-value s-value-container" };
function ft(t, n, r, i, l, f) {
	let p = C("Placeholder"), h = C("Input");
	return _(), s(e, null, [
		f.hasValue ? (_(), s("div", dt, [c("div", Z, [t.$slots["value-label"] ? S(t.$slots, "value-label", {
			key: 0,
			node: f.node
		}) : (_(), s(e, { key: 1 }, [u(w(f.node.label), 1)], 64))])])) : o("", !0),
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
var pt = /* @__PURE__ */ K(ut, [["render", ft]]), mt = { name: "vue-treeselect--x" }, ht = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 348.333 348.333"
};
function gt(e, t, n, r, i, a) {
	return _(), s("svg", ht, [...t[0] ||= [c("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1)]]);
}
var _t = /* @__PURE__ */ K(mt, [["render", gt]]), vt = {
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
	methods: { handleMouseDown: M(function() {
		let { instance: e, node: t } = this;
		e.select(t);
	}) }
}, yt = { class: "vue-treeselect__multi-value-item-container" }, bt = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
function xt(t, n, r, i, a, o) {
	let l = C("DeleteIcon");
	return _(), s("div", yt, [c("div", {
		class: m(o.itemClass),
		onMousedown: n[0] ||= (...e) => o.handleMouseDown && o.handleMouseDown(...e)
	}, [t.$slots["value-label"] ? S(t.$slots, "value-label", {
		key: 0,
		node: r.node
	}) : (_(), s(e, { key: 1 }, [u(w(r.node.label), 1)], 64)), c("span", bt, [d(l)])], 34)]);
}
//#endregion
//#region src/vueTreeSelect/components/MultiValue.vue?vue&type=script&lang.ts
var Q = {
	name: "vue-treeselect--multi-value",
	inject: ["instance"],
	components: {
		Placeholder: lt,
		TransitionGroup: n,
		Input: st,
		MultiValueItem: /* @__PURE__ */ K(vt, [["render", xt]])
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
	let p = C("MultiValueItem"), m = C("Placeholder"), h = C("Input");
	return _(), s(e, null, [
		(_(!0), s(e, null, x(f.multiValueItems, (e) => (_(), a(p, {
			key: `multi-value-item-${e.id}`,
			node: e
		}, l({ _: 2 }, [t.$slots["value-label"] ? {
			name: "value-label",
			fn: E(({ node: e }) => [S(t.$slots, "value-label", { node: e })]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128)),
		f.count > 0 ? (_(), s("div", $, [c("span", St, w(f.instance.limitText(f.count)), 1)])) : o("", !0),
		!f.hasValue && !f.isFocused ? (_(), a(m, { key: "placeholder" })) : o("", !0),
		d(h, {
			ref: "input",
			key: "input"
		}, null, 512)
	], 64);
}
var wt = /* @__PURE__ */ K(Q, [["render", Ct]]), Tt = { name: "vue-treeselect--arrow" }, Et = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 292.362 292.362"
};
function Dt(e, t, n, r, i, a) {
	return _(), s("svg", Et, [...t[0] ||= [c("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1)]]);
}
var Ot = /* @__PURE__ */ K(Tt, [["render", Dt]]), kt = {
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
		handleMouseDownOnX: M(function(e) {
			e.stopPropagation(), e.preventDefault();
			let { instance: t } = this, n = t.beforeClearAll(), r = (e) => {
				e && t.clear();
			};
			ke(n) ? n.then(r) : setTimeout(() => r(n), 0);
		}),
		handleMouseDownOnArrow: M(function(e) {
			e.preventDefault(), e.stopPropagation();
			let { instance: t } = this;
			t.focusInput(), t.toggleMenu();
		})
	}
}, At = ["title"];
function jt(e, t, n, r, i, u) {
	let f = C("SingleValue"), p = C("MultiValue"), h = C("DeleteIcon"), g = C("ArrowIcon");
	return _(), s("div", {
		class: "vue-treeselect__control",
		onMousedown: t[2] ||= (...e) => u.instance.handleMouseDown && u.instance.handleMouseDown(...e)
	}, [
		u.isSingle ? (_(), a(f, {
			key: 0,
			ref: "value-container"
		}, l({ _: 2 }, [e.$slots["value-label"] ? {
			name: "value-label",
			fn: E(({ node: t }) => [S(e.$slots, "value-label", { node: t })]),
			key: "0"
		} : void 0]), 1536)) : (_(), a(p, {
			key: 1,
			ref: "value-container"
		}, l({ _: 2 }, [e.$slots["value-label"] ? {
			name: "value-label",
			fn: E(({ node: t }) => [S(e.$slots, "value-label", { node: t })]),
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
var Mt = /* @__PURE__ */ K(kt, [["render", jt]]), Nt = f({
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
	return _(), s("div", { class: m(`vue-treeselect__tip vue-treeselect__${e.type}-tip`) }, [c("div", Pt, [c("span", { class: m(`vue-treeselect__icon-${e.icon}`) }, null, 2)]), c("span", { class: m(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`) }, [S(e.$slots, "default")], 2)], 2);
}
var It = /* @__PURE__ */ K(Nt, [["render", Ft]]), Lt = {
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
	let g = C("ArrowIcon"), v = C("VueTreeselectOption"), y = C("Tip");
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
	}) }, [...r[4] ||= [c("span", { class: "vue-treeselect__check-mark" }, null, -1), c("span", { class: "vue-treeselect__minus-mark" }, null, -1)]], 2)])) : o("", !0), n.$slots["option-label"] ? S(n.$slots, "option-label", {
		key: 1,
		node: i.node,
		shouldShowCount: h.shouldShowCount,
		count: h.getCount()
	}) : (_(), s("label", Vt, [u(w(i.node.label) + " ", 1), h.shouldShowCount ? (_(), s("span", Ht, "({ getCount() })")) : o("", !0)]))], 32)], 42, Rt), i.node.isBranch && h.shouldExpand ? (_(), s("div", Ut, [d(t, { name: "vue-treeselect__list--transition" }, {
		default: E(() => [c("div", Wt, [h.childrenStatesLoaded ? (_(!0), s(e, { key: 0 }, x(i.node.children, (e) => (_(), a(v, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [n.$slots["option-label"] ? {
			name: "option-label",
			fn: E(({ node: e, shouldShowCount: t, count: r }) => [S(n.$slots, "option-label", {
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
				default: E(() => [u(w(h.instance.noChildrenText), 1)]),
				_: 1
			})) : o("", !0),
			i.node.childrenStates.isLoading ? (_(), a(y, {
				key: 1,
				type: "loading",
				icon: "loader"
			}, {
				default: E(() => [u(w(h.instance.loadingText), 1)]),
				_: 1
			})) : o("", !0),
			i.node.childrenStates.loadingError ? (_(), a(y, {
				key: 2,
				type: "error",
				icon: "error"
			}, {
				default: E(() => [r[5] ||= u(" { node.childrenStates.loadingError } ", -1), c("a", {
					class: "vue-treeselect__retry",
					title: h.instance.retryTitle,
					onMousedown: r[3] ||= (...e) => h.handleMouseDownOnRetry && h.handleMouseDownOnRetry(...e)
				}, w(h.instance.retryText), 41, Gt)]),
				_: 1
			})) : o("", !0)
		], 64))])]),
		_: 3
	})])) : o("", !0)], 2);
}
var qt = /* @__PURE__ */ K(Lt, [["render", Kt]]), Jt = {
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
			return ee(this.instance.forest.normalizedOptions);
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
			this.menuSizeWatcher ||= { remove: z(t, this.adjustMenuOpenDirection) };
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
}, Xt = ["title"], Zt = ["title"];
function Qt(t, n, r, i, c, d) {
	let f = C("Tip"), p = C("Option");
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
		S(t.$slots, "before-list"),
		d.instance.async ? (_(), s(e, { key: 0 }, [d.entry.isLoading || !d.entry.isLoaded || d.entry.loadingError || !d.entry.options.length ? (_(), a(f, {
			key: 0,
			type: "search-prompt",
			icon: d.getTipIcon
		}, {
			default: E(() => [u(w(d.getTipText) + " ", 1), d.getTipIcon === "error" ? (_(), s("a", {
				key: 0,
				class: "vue-treeselect__retry",
				onClick: n[0] ||= (...e) => d.instance.handleRemoteSearch && d.instance.handleRemoteSearch(...e),
				title: d.instance.retryTitle
			}, w(d.instance.retryText), 9, Xt)) : o("", !0)]),
			_: 1
		}, 8, ["icon"])) : (_(!0), s(e, { key: 1 }, x(d.normalizedOptions, (e) => (_(), a(p, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [t.$slots["option-label"] ? {
			name: "option-label",
			fn: E(({ node: e, shouldShowCount: n, count: r }) => [S(t.$slots, "option-label", {
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
			default: E(() => [u(w(d.getNormalTip[1]) + " ", 1), d.getNormalTip[2] ? (_(), s("a", {
				key: 0,
				class: "vue-treeselect__retry",
				onClick: n[1] ||= (...e) => d.instance.loadRootOptions && d.instance.loadRootOptions(...e),
				title: d.instance.retryTitle
			}, w(d.instance.retryText), 9, Zt)) : o("", !0)]),
			_: 1
		}, 8, ["icon"])) : (_(!0), s(e, { key: 1 }, x(d.normalizedOptions, (e) => (_(), a(p, {
			node: e,
			key: e.id
		}, l({ _: 2 }, [t.$slots["option-label"] ? {
			name: "option-label",
			fn: E(({ node: e, shouldShowCount: n, count: r }) => [S(t.$slots, "option-label", {
				node: e,
				shouldShowCount: n,
				count: r
			})]),
			key: "0"
		} : void 0]), 1032, ["node"]))), 128))], 64)),
		S(t.$slots, "after-list")
	], 36)) : o("", !0)], 4);
}
var $t = /* @__PURE__ */ K(Yt, [["render", Qt]]), en = {
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
			this.controlSizeWatcher ||= { remove: z(t, () => {
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
			let { instance: e } = this, t = e.getControl(), n = this.$el, r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), a = e.menu.placement === "bottom" ? r.height : 0, o = Math.round(r.left - i.left) + "px", s = Math.round(r.top - i.top + a) + "px", c = this.$refs.menu.$refs["menu-container"].style, l = Le([
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
var an = /* @__PURE__ */ K(tn, [["render", rn]]), on = { Treeselect: /* @__PURE__ */ f({
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
			default: (0, Fe.default)(!0)
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
			default: (0, Fe.default)(["label"])
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
			default: Pe.default
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
					He,
					Ue,
					We
				], e);
			}
		},
		showCountOnSearch: null,
		sortValueBy: {
			type: String,
			default: Ze,
			validator(e) {
				return U([
					Ze,
					Qe,
					$e
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
			default: Je,
			validator(e) {
				return U([
					"ALL",
					Je,
					Ye,
					Xe
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
		let c = b(null), u = b(null), f = b(null), h = b(null), x = Be(), C = (e, t) => {
			let n = 0;
			do {
				if (e.level < n) return -1;
				if (t.level < n) return 1;
				if (e.index[n] !== t.index[n]) return e.index[n] - t.index[n];
				n++;
			} while (!0);
		}, w = (e, t) => e.level === t.level ? C(e, t) : e.level - t.level, ne = () => ({
			isLoaded: !1,
			isLoading: !1,
			loadingError: ""
		}), re = (e) => typeof e == "string" ? e : typeof e == "number" && !Oe(e) ? e + "" : "", ie = (e, t, n) => e ? (0, Ve.default)(t, n) : U(n, t), ae = (e) => e.message || String(e), oe = () => k.modelValue == null ? [] : k.valueFormat === "id" ? k.multiple ? k.modelValue.slice() : [k.modelValue] : (k.multiple ? k.modelValue : [k.modelValue]).map((e) => Z(e)).map((e) => e.id), D = i, O = te(), k = t, A = y({
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
				selectedNodeIds: oe(),
				selectedNodeMap: H()
			},
			rootOptionsStates: ne(),
			localSearch: {
				active: !1,
				noResults: !1,
				countMap: H()
			},
			remoteSearch: H(),
			isReady: !1,
			_blurOnSelect: !1
		}), se = r(() => ({
			name: k.name || "vue-treeselect",
			hasValue: ue,
			trigger: A.trigger,
			forest: A.forest,
			localSearch: A.localSearch,
			remoteSearch: A.remoteSearch,
			isReady: A.isReady,
			rootOptionsStates: A.rootOptionsStates,
			internalValue: N,
			selectedNodes: M,
			$slots: O,
			$refs: {
				control: c.value,
				wrapper: u.value,
				portal: f.value,
				menu: h.value
			},
			menu: A.menu,
			single: P,
			verifyProps: xe,
			resetFlags: Ce,
			initialize: I,
			getInstanceId: L,
			getValue: we,
			getNode: R,
			createFallbackNode: Te,
			extractCheckedNodeIdsFromValue: oe,
			extractNodeFromValue: Ee,
			fixSelectedNodeIds: z,
			keepDataOfSelectedNodes: De,
			isSelected: B,
			traverseDescendantsBFS: V,
			traverseDescendantsDFS: Ae,
			traverseAllNodesDFS: je,
			traverseAllNodesByIndex: Me,
			toggleClickOutsideEvent: Pe,
			getValueContainer: Fe,
			getInput: ze,
			focusInput: Je,
			blurInput: Ye,
			handleMouseDown: Xe,
			handleClickOutside: Ze,
			handleLocalSearch: Qe,
			getRemoteSearchEntry: $e,
			shouldExpand: G,
			shouldOptionBeIncludedInSearchResult: et,
			shouldShowOptionInMenu: tt,
			getControl: K,
			getMenu: q,
			setCurrentHighlightedOption: J,
			resetHighlightedOptionWhenNecessary: Y,
			highlightFirstOption: rt,
			highlightPrevOption: it,
			highlightNextOption: at,
			highlightLastOption: ot,
			resetSearchQuery: st,
			closeMenu: X,
			openMenu: ct,
			toggleMenu: lt,
			toggleExpanded: ut,
			buildForestState: dt,
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
			allowClearingDisabled: k.allowClearingDisabled,
			allowSelectingDisabledDescendants: k.allowSelectingDisabledDescendants,
			alwaysOpen: k.alwaysOpen,
			appendToBody: k.appendToBody,
			async: k.async,
			autoFocus: k.autoFocus,
			autoLoadRootOptions: k.autoLoadRootOptions,
			autoDeselectAncestors: k.autoDeselectAncestors,
			autoDeselectDescendants: k.autoDeselectDescendants,
			autoSelectAncestors: k.autoSelectAncestors,
			autoSelectDescendants: k.autoSelectDescendants,
			backspaceRemoves: k.backspaceRemoves,
			beforeClearAll: k.beforeClearAll,
			branchNodesFirst: k.branchNodesFirst,
			cacheOptions: k.cacheOptions,
			clearable: k.clearable,
			clearAllText: k.clearAllText,
			clearOnSelect: k.clearOnSelect,
			clearValueText: k.clearValueText,
			closeOnSelect: k.closeOnSelect,
			defaultExpandLevel: k.defaultExpandLevel,
			defaultOptions: k.defaultOptions,
			deleteRemoves: k.deleteRemoves,
			delimiter: k.delimiter,
			flattenSearchResults: k.flattenSearchResults,
			disableBranchNodes: k.disableBranchNodes,
			disabled: k.disabled,
			disableFuzzyMatching: k.disableFuzzyMatching,
			flat: k.flat,
			instanceId: x,
			joinValues: k.joinValues,
			limit: k.limit,
			limitText: k.limitText,
			loadingText: k.loadingText,
			loadOptions: k.loadOptions,
			matchKeys: k.matchKeys,
			maxHeight: k.maxHeight,
			multiple: k.multiple,
			noChildrenText: k.noChildrenText,
			noOptionsText: k.noOptionsText,
			noResultsText: k.noResultsText,
			normalizer: k.normalizer,
			openDirection: k.openDirection,
			openOnClick: k.openOnClick,
			openOnFocus: k.openOnFocus,
			options: k.options,
			placeholder: k.placeholder,
			required: k.required,
			retryText: k.retryText,
			retryTitle: k.retryTitle,
			searchable: k.searchable,
			searchNested: k.searchNested,
			searchPromptText: k.searchPromptText,
			showCount: k.showCount,
			showCountOf: k.showCountOf,
			showCountOnSearch: k.showCountOnSearch,
			sortValueBy: k.sortValueBy,
			tabIndex: k.tabIndex,
			modelValue: k.modelValue,
			valueConsistsOf: k.valueConsistsOf,
			valueFormat: k.valueFormat,
			zIndex: k.zIndex
		})), ce = r(() => ({
			"vue-treeselect": !0,
			"vue-treeselect--single": P.value,
			"vue-treeselect--multi": k.multiple,
			"vue-treeselect--searchable": k.searchable,
			"vue-treeselect--disabled": k.disabled,
			"vue-treeselect--focused": A.trigger.isFocused,
			"vue-treeselect--has-value": ue.value,
			"vue-treeselect--open": A.menu.isOpen,
			"vue-treeselect--open-above": A.menu.placement === "top",
			"vue-treeselect--open-below": A.menu.placement === "bottom",
			"vue-treeselect--branch-nodes-disabled": k.disableBranchNodes,
			"vue-treeselect--append-to-body": k.appendToBody
		})), M = r(() => A.forest.selectedNodeIds.map(R)), N = r(() => {
			let e;
			// istanbul ignore else
			if (P.value || k.flat || k.disableBranchNodes || k.valueConsistsOf === "ALL") e = A.forest.selectedNodeIds.slice();
			else if (k.valueConsistsOf === "BRANCH_PRIORITY") e = A.forest.selectedNodeIds.filter((e) => {
				let t = R(e);
				return t.isRootNode ? !0 : !B(t.parentNode);
			});
			else if (k.valueConsistsOf === "LEAF_PRIORITY") e = A.forest.selectedNodeIds.filter((e) => {
				let t = R(e);
				return t.isLeaf ? !0 : t.children.length === 0;
			});
			else if (k.valueConsistsOf === "ALL_WITH_INDETERMINATE") {
				let t = [];
				e = A.forest.selectedNodeIds.slice(), M.value.forEach((n) => {
					n.ancestors.forEach((n) => {
						U(t, n.id) || U(e, n.id) || t.push(n.id);
					});
				}), e.push(...t);
			}
			return k.sortValueBy === "LEVEL" ? e.sort((e, t) => w(R(e), R(t))) : k.sortValueBy === "INDEX" && e.sort((e, t) => C(R(e), R(t))), e;
		}), ue = r(() => N.value.length > 0), P = r(() => !k.multiple), F = r(() => {
			let e = [];
			return Me((t) => {
				if ((!A.localSearch.active || et(t)) && e.push(t.id), t.isBranch && !G(t)) return !1;
			}), e;
		}), de = r(() => F.value.length !== 0);
		r(() => typeof k.showCountOnSearch == "boolean" ? k.showCountOnSearch : k.showCount), r(() => A.forest.normalizedOptions.some((e) => e.isBranch)), r(() => A.localSearch.active && k.flattenSearchResults);
		let fe = r(() => A.trigger.searchQuery), pe = r(() => k.modelValue), me = r(() => k.alwaysOpen), he = r(() => k.branchNodesFirst), ge = r(() => k.disabled), _e = r(() => k.flat), ve = r(() => k.matchKeys), ye = r(() => k.multiple), be = r(() => k.options), xe = () => {
			j(() => k.async ? k.searchable : !0, () => "For async search mode, the value of \"searchable\" prop must be true."), k.options == null && !k.loadOptions && j(() => !1, () => "Are you meant to dynamically load options? You need to use \"loadOptions\" prop."), k.flat && j(() => k.multiple, () => "You are using flat mode. But you forgot to add \"multiple=true\"?"), k.flat || [
				"autoSelectAncestors",
				"autoSelectDescendants",
				"autoDeselectAncestors",
				"autoDeselectDescendants"
			].forEach((e) => {
				j(() => !k[e], () => `"${e}" only applies to flat mode.`);
			});
		}, Ce = () => {
			A._blurOnSelect = !1;
		}, I = () => {
			let e = k.async ? $e().options : ee(k.options);
			if (Array.isArray(e)) {
				let t = A.forest.nodeMap;
				A.forest.nodeMap = H(), De(t), A.forest.normalizedOptions = ft(null, e, t), z(N.value);
				let { searchQuery: n } = A.trigger;
				A.remoteSearch[n] = $e();
			} else A.forest.normalizedOptions = [];
		}, L = () => x, we = () => {
			if (k.valueFormat === "id") return k.multiple ? N.value.slice() : N.value[0];
			let e = N.value.map((e) => R(e).raw);
			return k.multiple ? e : e[0];
		}, R = (e) => (j(() => e != null, () => `Invalid node id: ${e}`), e == null ? null : e in A.forest.nodeMap ? A.forest.nodeMap[e] : Te(e)), Te = (e) => {
			let t = Ee(e), n = {
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
			return A.forest.nodeMap[e] = n;
		}, Ee = (e) => {
			let t = { id: e };
			return k.valueFormat === "id" ? t : Le(k.multiple ? Array.isArray(k.modelValue) ? k.modelValue : [] : k.modelValue ? [k.modelValue] : [], (t) => t && Z(t).id === e) || t;
		}, z = (e) => {
			let t = [];
			// istanbul ignore else
			if (P.value || k.flat || k.disableBranchNodes || k.valueConsistsOf === "ALL") t = e;
			else if (k.valueConsistsOf === "BRANCH_PRIORITY") e.forEach((e) => {
				t.push(e);
				let n = R(e);
				n.isBranch && V(n, (e) => {
					t.push(e.id);
				});
			});
			else if (k.valueConsistsOf === "LEAF_PRIORITY") {
				let n = H(), r = e.slice();
				for (; r.length;) {
					let e = r.shift(), i = R(e);
					t.push(e), !i.isRootNode && (i.parentNode.id in n || (n[i.parentNode.id] = i.parentNode.children.length), --n[i.parentNode.id] === 0 && r.push(i.parentNode.id));
				}
			} else if (k.valueConsistsOf === "ALL_WITH_INDETERMINATE") {
				let n = H(), r = e.filter((e) => {
					let t = R(e);
					return t.isLeaf || t.children.length === 0;
				});
				for (; r.length;) {
					let e = r.shift(), i = R(e);
					t.push(e), !i.isRootNode && (i.parentNode.id in n || (n[i.parentNode.id] = i.parentNode.children.length), --n[i.parentNode.id] === 0 && r.push(i.parentNode.id));
				}
			}
		}, De = (e) => {
			A.forest.selectedNodeIds.forEach((t) => {
				e[t] && (A.forest.nodeMap[t] = {
					...e[t],
					isFallbackNode: !0
				});
			});
		}, B = (e) => A.forest.selectedNodeMap[e.id] === !0, V = (e, t) => {
			// istanbul ignore if
			if (!e.isBranch) return;
			let n = e.children.slice();
			for (; n.length;) {
				let e = n[0];
				e.isBranch && n.push(...e.children), t(e), n.shift();
			}
		}, Ae = (e, t) => {
			e.isBranch && e.children.forEach((e) => {
				Ae(e, t), t(e);
			});
		}, je = (e) => {
			A.forest.normalizedOptions.forEach((t) => {
				Ae(t, e), e(t);
			});
		}, Me = (e) => {
			let t = (n) => {
				n.children.forEach((n) => {
					e(n) !== !1 && n.isBranch && t(n);
				});
			};
			t({ children: A.forest.normalizedOptions });
		}, Pe = (e) => {
			e ? document.addEventListener("mousedown", Ze, !1) : document.removeEventListener("mousedown", Ze, !1);
		}, Fe = () => c.value.$refs["value-container"], ze = () => Fe().$refs.input, Je = () => {
			ze().focus();
		}, Ye = () => {
			ze().blur();
		}, Xe = () => {}, Ze = (e) => {
			// istanbul ignore else
			u.value && !u.value.contains(e.target) && (Ye(), X());
		}, Qe = () => {
			let { searchQuery: e } = A.trigger, t = () => Y(!0);
			if (!e) return A.localSearch.active = !1, A.localSearch.noResults = !1, t();
			A.localSearch.active = !0, A.localSearch.noResults = !0, je((e) => {
				e.isBranch && (e.isExpandedOnSearch = !1, e.showAllChildrenOnSearch = !1, e.isMatched = !1, e.hasMatchedDescendants = !1, A.localSearch.countMap[e.id] = {
					[W]: 0,
					[He]: 0,
					[Ue]: 0,
					[We]: 0
				});
			});
			let n = e.trim().toLocaleLowerCase(), r = n.replace(/\s+/g, " ").split(" ");
			je((e) => {
				k.searchNested && r.length > 1 ? e.isMatched = r.every((t) => ie(!1, t, e.nestedSearchLabel)) : e.isMatched = k.matchKeys.some((t) => ie(!k.disableFuzzyMatching, n, e.lowerCased[t])), e.isMatched && (A.localSearch.noResults = !1, e.ancestors.forEach((e) => A.localSearch.countMap[e.id][He]++), e.isLeaf && e.ancestors.forEach((e) => A.localSearch.countMap[e.id][We]++), e.parentNode !== null && (A.localSearch.countMap[e.parentNode.id][W] += 1, e.isLeaf && (A.localSearch.countMap[e.parentNode.id][Ue] += 1))), (e.isMatched || e.isBranch && e.isExpandedOnSearch) && e.parentNode !== null && (e.parentNode.isExpandedOnSearch = !0, e.parentNode.hasMatchedDescendants = !0);
			}), t();
		}, $e = () => {
			let { searchQuery: e } = A.trigger, t = A.remoteSearch[e] || {
				...ne(),
				options: []
			};
			if (e === "") {
				if (Array.isArray(k.defaultOptions)) return t.options = k.defaultOptions, t.isLoaded = !0, t;
				if (k.defaultOptions !== !0) return t.isLoaded = !0, t;
			}
			return A.remoteSearch[e] || (A.remoteSearch[e] = t), A.remoteSearch[e];
		}, G = (e) => A.localSearch.active ? e.isExpandedOnSearch : e.isExpanded, et = (e) => !!(e.isMatched || e.isBranch && e.hasMatchedDescendants && !k.flattenSearchResults || !e.isRootNode && e.parentNode.showAllChildrenOnSearch), tt = (e) => !(A.localSearch.active && !et(e)), K = () => c.value.$el, q = () => h.value.$el, J = (e, t = !0) => {
			let n = A.menu.current;
			if (n != null && n in A.forest.nodeMap && (A.forest.nodeMap[n].isHighlighted = !1), A.menu.current = e.id, e.isHighlighted = !0, A.menu.isOpen && t) {
				let t = () => {
					let t = q(), n = t.querySelector(`.vue-treeselect__option[data-id="${e.id}"]`);
					n && le(t, n);
				};
				q() ? t() : 
				// istanbul ignore next
p(t);
			}
		}, Y = (e = !1) => {
			let { current: t } = A.menu;
			(e || t == null || !(t in A.forest.nodeMap) || !tt(R(t))) && rt();
		}, rt = () => {
			if (!de.value) return;
			let e = F.value[0];
			J(R(e));
		}, it = () => {
			if (!de.value) return;
			let e = F.value.indexOf(A.menu.current) - 1;
			if (e === -1) return ot();
			J(R(F.value[e]));
		}, at = () => {
			if (!de.value) return;
			let e = F.value.indexOf(A.menu.current) + 1;
			if (e === F.value.length) return rt();
			J(R(F.value[e]));
		}, ot = () => {
			de.value && J(R((0, Ie.default)(F.value)));
		}, st = () => {
			A.trigger.searchQuery = "";
		}, X = () => {
			!A.menu.isOpen || !k.disabled && k.alwaysOpen || (Ct(), A.menu.isOpen = !1, Pe(!1), st(), D("close", we(), L()));
		}, ct = () => {
			k.disabled || A.menu.isOpen || (A.menu.isOpen = !0, p(Y), p(wt), !k.options && !k.async && pt(), Pe(!0), D("open", L()));
		}, lt = () => {
			A.menu.isOpen ? X() : ct();
		}, ut = (e) => {
			let t;
			A.localSearch.active ? (t = e.isExpandedOnSearch = !e.isExpandedOnSearch, t && (e.showAllChildrenOnSearch = !0)) : t = e.isExpanded = !e.isExpanded, t && !e.childrenStates.isLoaded && mt(e);
		}, dt = () => {
			let e = H();
			A.forest.selectedNodeIds.forEach((t) => {
				e[t] = !0;
			}), A.forest.selectedNodeMap = e;
			let t = H();
			k.multiple && (Me((e) => {
				t[e.id] = 0;
			}), M.value.forEach((e) => {
				t[e.id] = 2, !k.flat && !k.disableBranchNodes && e.ancestors.forEach((e) => {
					B(e) || (t[e.id] = 1);
				});
			})), A.forest.checkedStateMap = t;
		}, Z = (e) => ({
			...e,
			...k.normalizer(e, L())
		}), ft = (e, t, n) => {
			let r = t.map((e) => [Z(e), e]).map(([t, r], i) => {
				gt(t), _t(t);
				let { id: a, label: o, children: s, isDefaultExpanded: c } = t, l = e === null, u = l ? 0 : e.level + 1, d = Array.isArray(s) || s === null, f = !d, p = !!t.isDisabled || !k.flat && !l && e.isDisabled, m = !!t.isNew, h = k.matchKeys.reduce((e, n) => ({
					...e,
					[n]: re(t[n]).toLocaleLowerCase()
				}), {}), g = l ? h.label : e.nestedSearchLabel + " " + h.label;
				A.forest.nodeMap[a] = H();
				let _ = A.forest.nodeMap[a];
				if (_.id = a, _.label = o, _.level = u, _.ancestors = l ? [] : [e].concat(e.ancestors), _.index = (l ? [] : e.index).concat(i), _.parentNode = e, _.lowerCased = h, _.nestedSearchLabel = g, _.isDisabled = p, _.isNew = m, _.isMatched = !1, _.isHighlighted = !1, _.isBranch = d, _.isLeaf = f, _.isRootNode = l, _.raw = r, d) {
					let e = Array.isArray(s);
					_.childrenStates = {
						...ne(),
						isLoaded: e
					}, _.isExpanded = typeof c == "boolean" ? c : u < k.defaultExpandLevel, _.hasMatchedDescendants = !1, _.hasDisabledDescendants = !1, _.isExpandedOnSearch = !1, _.showAllChildrenOnSearch = !1, _.count = {
						[W]: 0,
						[He]: 0,
						[Ue]: 0,
						[We]: 0
					}, _.children = e ? ft(_, s, n) : [], c === !0 && _.ancestors.forEach((e) => {
						e.isExpanded = !0;
					}), !e && typeof k.loadOptions != "function" ? j(() => !1, () => "Unloaded branch node detected. \"loadOptions\" prop is required to load its children.") : !e && _.isExpanded && mt(_);
				}
				if (_.ancestors.forEach((e) => e.count[He]++), f && _.ancestors.forEach((e) => e.count[We]++), l || (e.count[W] += 1, f && (e.count[Ue] += 1), p && (e.hasDisabledDescendants = !0)), n && n[a]) {
					let e = n[a];
					_.isMatched = e.isMatched, _.showAllChildrenOnSearch = e.showAllChildrenOnSearch, _.isHighlighted = e.isHighlighted, e.isBranch && _.isBranch && (_.isExpanded = e.isExpanded, _.isExpandedOnSearch = e.isExpandedOnSearch, e.childrenStates.isLoaded && !_.childrenStates.isLoaded ? _.isExpanded = !1 : _.childrenStates = { ...e.childrenStates });
				}
				return _;
			});
			if (k.branchNodesFirst) {
				let e = r.filter((e) => e.isBranch), t = r.filter((e) => e.isLeaf);
				r = e.concat(t);
			}
			return r;
		}, pt = () => {
			ht({
				action: Ge,
				isPending: () => A.rootOptionsStates.isLoading,
				start: () => {
					A.rootOptionsStates.isLoading = !0, A.rootOptionsStates.loadingError = "";
				},
				succeed: () => {
					A.rootOptionsStates.isLoaded = !0, p(() => {
						Y(!0);
					});
				},
				fail: (e) => {
					A.rootOptionsStates.loadingError = ae(e);
				},
				end: () => {
					A.rootOptionsStates.isLoading = !1;
				}
			});
		}, mt = (e) => {
			let { id: t, raw: n } = e;
			ht({
				action: Ke,
				args: { parentNode: n },
				isPending: () => R(t).childrenStates.isLoading,
				start: () => {
					R(t).childrenStates.isLoading = !0, R(t).childrenStates.loadingError = "";
				},
				succeed: (n) => {
					let r = R(t);
					r.children = ft(e, n), r.childrenStates.isLoaded = !0;
				},
				fail: (e) => {
					R(t).childrenStates.loadingError = ae(e);
				},
				end: () => {
					R(t).childrenStates.isLoading = !1;
				}
			});
		}, ht = ({ action: e, args: t, isPending: n, start: r, succeed: i, fail: a, end: o }) => {
			if (!k.loadOptions || n()) return;
			r();
			let s = (0, Ne.default)((e, t) => {
				e ? a(e) : i(t), o();
			}), c = k.loadOptions({
				id: L(),
				instanceId: L(),
				action: e,
				...t,
				callback: s
			});
			ke(c) && c.then(() => {
				s();
			}, (e) => {
				s(e);
			}).catch((e) => {
				// istanbul ignore next
				console.error(e);
			});
		}, gt = (e) => {
			j(() => !(e.id in A.forest.nodeMap && !A.forest.nodeMap[e.id].isFallbackNode), () => `Detected duplicate presence of node id ${JSON.stringify(e.id)}. Their labels are "${A.forest.nodeMap[e.id].label}" and "${e.label}" respectively.`);
		}, _t = (e) => {
			j(() => !(e.children === void 0 && e.isBranch === !0), () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.");
		}, vt = (e) => {
			if (k.disabled || e.isDisabled) return;
			P.value && yt();
			let t = k.multiple && !k.flat ? A.forest.checkedStateMap[e.id] === 0 : !B(e);
			t ? bt(e) : xt(e), dt(), D(t ? "select" : "deselect", e.raw, L()), A.localSearch.active && t && (P.value || k.clearOnSelect) && st(), P.value && k.closeOnSelect && (X(), k.searchable && (A._blurOnSelect = !0)), D("update:modelValue", k.multiple ? A.forest.selectedNodeIds : A.forest.selectedNodeIds[0] || null);
		}, yt = () => {
			ue.value && (P.value || k.allowClearingDisabled ? A.forest.selectedNodeIds = [] : A.forest.selectedNodeIds = A.forest.selectedNodeIds.filter((e) => R(e).isDisabled), dt(), D("update:modelValue", null));
		}, bt = (e) => {
			if (P.value || k.disableBranchNodes) return Q(e);
			if (k.flat) {
				Q(e), k.autoSelectAncestors ? e.ancestors.forEach((e) => {
					!B(e) && !e.isDisabled && Q(e);
				}) : k.autoSelectDescendants && V(e, (e) => {
					!B(e) && !e.isDisabled && Q(e);
				});
				return;
			}
			let t = e.isLeaf || !e.hasDisabledDescendants || k.allowSelectingDisabledDescendants;
			if (t && Q(e), e.isBranch && V(e, (e) => {
				(!e.isDisabled || k.allowSelectingDisabledDescendants) && Q(e);
			}), t) {
				let t = e;
				for (; (t = t.parentNode) !== null && t.children.every(B);) Q(t);
			}
		}, xt = (e) => {
			if (k.disableBranchNodes) return $(e);
			if (k.flat) {
				$(e), k.autoDeselectAncestors ? e.ancestors.forEach((e) => {
					B(e) && !e.isDisabled && $(e);
				}) : k.autoDeselectDescendants && V(e, (e) => {
					B(e) && !e.isDisabled && $(e);
				});
				return;
			}
			let t = !1;
			if (e.isBranch && Ae(e, (e) => {
				(!e.isDisabled || k.allowSelectingDisabledDescendants) && ($(e), t = !0);
			}), e.isLeaf || t || e.children.length === 0) {
				$(e);
				let t = e;
				for (; (t = t.parentNode) !== null && B(t);) $(t);
			}
		}, Q = (e) => {
			A.forest.selectedNodeIds.push(e.id), A.forest.selectedNodeMap[e.id] = !0;
		}, $ = (e) => {
			Se(A.forest.selectedNodeIds, e.id), delete A.forest.selectedNodeMap[e.id];
		}, St = () => {
			if (ue.value) {
				if (P.value) return yt();
				vt(R((0, Ie.default)(N.value)));
			}
		}, Ct = () => {
			let e = q();
			// istanbul ignore else
			e && (h.value.lastScrollPosition = e.scrollTop);
		}, wt = () => {
			let e = q();
			// istanbul ignore else
			e && (e.scrollTop = h.value.lastScrollPosition);
		}, Tt = () => {
			let { searchQuery: e } = A.trigger, t = $e(), n = () => {
				I(t), Y(!0);
			};
			if ((e === "" || k.cacheOptions) && t.isLoaded) return n();
			ht({
				action: qe,
				args: { searchQuery: e },
				isPending() {
					return t.isLoading;
				},
				start: () => {
					t.isLoading = !0, t.isLoaded = !1, t.loadingError = "";
				},
				succeed: (r) => {
					t.isLoading = !1, t.isLoaded = !0, t.options = r, A.trigger.searchQuery === e && n();
				},
				fail: (e) => {
					t.isLoading = !1, t.loadingError = ae(e);
				},
				end: () => {
					t.isLoading = !1;
				}
			});
		};
		return n({ clear: yt }), T(me, (e) => {
			e ? ct() : X();
		}), T(he, () => {
			I();
		}), T(ge, (e) => {
			e && A.menu.isOpen ? X() : !e && !A.menu.isOpen && k.alwaysOpen && ct();
		}), T(_e, () => {
			I();
		}), T(ve, () => {
			I();
		}), T(ye, (e) => {
			// istanbul ignore else
			e && dt();
		}), T(be, () => {
			k.async || (I(), A.rootOptionsStates.isLoaded = Array.isArray(k.options));
		}, {
			deep: !0,
			immediate: !0
		}), T(fe, () => {
			k.async ? Tt() : Qe(), D("search-change", A.trigger.searchQuery, L());
		}), T(pe, () => {
			let e = oe();
			Re(e, N.value) && z(e);
		}), g(() => {
			A.isReady = !0;
		}), v("instance", se.value), (n, r) => (_(), s("div", {
			ref_key: "wrapper",
			ref: u,
			class: m(ce.value)
		}, [A.isReady ? (_(), s(e, { key: 0 }, [
			d(nt),
			d(Mt, {
				ref_key: "control",
				ref: c
			}, l({ _: 2 }, [n.$slots["value-label"] ? {
				name: "value-label",
				fn: E(({ node: e }) => [S(n.$slots, "value-label", { node: e })]),
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
					fn: E(() => [S(n.$slots, "before-list")]),
					key: "0"
				} : void 0,
				n.$slots["after-list"] ? {
					name: "after-list",
					fn: E(() => [S(n.$slots, "after-list")]),
					key: "1"
				} : void 0,
				n.$slots["option-label"] ? {
					name: "option-label",
					fn: E(({ node: e, shouldShowCount: t, count: r }) => [S(n.$slots, "option-label", {
						node: e,
						shouldShowCount: t,
						count: r
					})]),
					key: "2"
				} : void 0
			]), 1536))
		], 64)) : o("", !0)], 2));
	}
}) };
//#endregion
export { on as default };
