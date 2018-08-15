(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("These methods are mostly used to improve the process of the development.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("There are several possible ways of adding new method along with other auxiliary files:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("You can check the size of separate or all methods")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("As nanoutils is a Ramda-compatible, it needs to show a diff between implemented methods.")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._m(28),e._v(" "),e._m(29),e._m(30),e._v(" "),e._m(31),s("p",[e._v("We use "),s("a",{attrs:{href:"https://github.com/ai/size-limit",target:"_blank",rel:"noopener noreferrer"}},[e._v("size-limit"),s("OutboundLink")],1),e._v(" to check the size of methods.")])])},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{attrs:{id:"add-new-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-new-method","aria-hidden":"true"}},[e._v("#")]),e._v(" Add new method")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Add folder with method and test files:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run method:add coolMethod\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("It creates "),s("code",[e._v("index.js")]),e._v(" and "),s("code",[e._v("coolMethod.test.js")]),e._v(" inside a folder "),s("code",[e._v("coolMethod")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("If method already exists, you probably need to use extra flag "),s("code",[e._v("-f")]),e._v(" to replace the old implementation with new one")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Add folder with curried method and test files:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run method:add coolMethod --curried\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("By default, it uses "),s("code",[e._v("curryN")]),e._v(". If you need an arity of "),s("code",[e._v("2")]),e._v(" or "),s("code",[e._v("3")]),e._v(", better to specify them as methods will be optimised in size")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run method:add coolMethod --curried"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("2\n")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Add folder with method, type and test files:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run method:add coolMethod --types\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("In addition it adds "),s("code",[e._v("index.d.ts")]),e._v(" and "),s("code",[e._v("index.js.flow")]),e._v(" files for TS / Flow types")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Add folder with method and test (including performance test) files:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run method:add coolMethod --perf\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("It creates "),s("code",[e._v("coolMethod.performance.js")]),e._v(" to generate test output which is used in "),s("code",[e._v("TIMES.md")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"check-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-size","aria-hidden":"true"}},[this._v("#")]),this._v(" Check size")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Size of list of methods ("),s("code",[e._v("any")]),e._v(", "),s("code",[e._v("all")]),e._v(" and "),s("code",[e._v("find")]),e._v("):")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run size any all "),s("span",{attrs:{class:"token function"}},[e._v("find")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Size of all methods")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" run size\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("It's a behaviour by default if no method is specified")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"check-performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-performance","aria-hidden":"true"}},[this._v("#")]),this._v(" Check performance")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Performance check is working the same way. Just replace "),s("code",[e._v("size")]),e._v(" with "),s("code",[e._v("time")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("If "),s("code",[e._v("<method>.performance.js")]),e._v(" exists, it will be checked")]),e._v(" "),s("p",[e._v("For now, there is no way to skip it")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("By default, the returning "),s("code",[e._v("type")]),e._v(" of performance test is "),s("code",[e._v("no_perf")])]),e._v(" "),s("p",[e._v("If it's not replaced with any correct "),s("code",[e._v("type")]),e._v(", it will throw error "),s("code",[e._v("coolMethod.performance.js must have data to return")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"check-not-implemented-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-not-implemented-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Check not implemented methods")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Display methods which are both in nanoutils and Ramda:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" run method:check both\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Display nanoutils' methods which are absent in Ramda")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run method:check "),s("span",{attrs:{class:"token function"}},[e._v("nano")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Display Ramda's methods which are absent in nanoutils")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" run method:check ramda\n")])])])}],!1,null,null,null);n.options.__file="cli.md";t.default=n.exports}}]);