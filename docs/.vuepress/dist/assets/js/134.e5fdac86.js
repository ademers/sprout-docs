(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{278:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",[t._v("Campaign Emails")]),s("p",[t._v("Campaign Email Elements allow you to build and manage marketing and bulk email right within Craft and send those emails via your favorite Email Service Providers.")]),s("div",{staticClass:"table"},[s("table",[t._m(0),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("router-link",{attrs:{to:"./copy-paste-mailer.html"}},[t._v("Copy/Paste")])],1),s("td",{staticStyle:{"text-align":"left"}},[t._v("Copy and paste your email campaigns to better (or worse) places")])]),t._m(1),t._m(2),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Custom")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Via a "),s("router-link",{attrs:{to:"./custom-mailers.html"}},[t._v("Custom Mailer")]),t._v(" or "),s("a",{attrs:{href:"mailto:sprout@barrelstrengthdesign.com"}},[t._v("Get in touch")]),t._v("!")],1)])])])]),t._m(3),t._m(4),t._m(5),s("p",[t._v("The selected Campaign Type will determine which Email Service is used when sending your Campaign Emails. Each Mailer will have settings necessary for connecting and sending emails via the Mailer's email service provider.")]),t._m(6),s("p",[t._v("If a Mailer supports Lists, a dropdown with all available email lists will appear in the sidebar settings when creating a new Campaign Email.")]),t._m(7),s("p",[t._v("Email Templates for your Campaign Emails can be managed via "),s("router-link",{attrs:{to:"./template-overrides.html"}},[t._v("Template Overrides")]),t._v(" or via a "),s("router-link",{attrs:{to:"./custom-email-templates.html"}},[t._v("Custom Email Template")]),t._v(".")],1),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("Mailer")]),a("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("MailChimp")]),a("td",{staticStyle:{"text-align":"left"}},[this._v("Send your email campaigns via MailChimp")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("Campaign Monitor")]),a("td",{staticStyle:{"text-align":"left"}},[this._v("Send your email campaigns via Campaign Monitor")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"campaign-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#campaign-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Campaign Types")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("When you first setup your Campaign Emails you will need to select a "),a("strong",[this._v("Campaign Type")]),this._v(". The Campaign Type defines which Mailer you want to use and will affect several things about your Campaign Email Workflow.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"service-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-provider","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Provider")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lists","aria-hidden":"true"}},[this._v("#")]),this._v(" Lists")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"email-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Email Templates")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"test-emails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-emails","aria-hidden":"true"}},[this._v("#")]),this._v(" Test Emails")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Each email service provider handles tests differently. The "),a("em",[this._v("Send Test")]),this._v(" bahavior may vary depending on the Campaign Type you are using.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"templating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templating","aria-hidden":"true"}},[this._v("#")]),this._v(" Templating")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{pre:!0},[a("p",[this._v("To output your Campaign emails in your templates you can use the "),a("code",[this._v("craft.sproutEmail.entries")]),this._v(" tag.  Here is a basic overview of what is available:")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token ld"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("id")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("craft")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("sproutEmail")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("entries")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("id")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("first")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token rd"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token ld"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("slug")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("craft")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("sproutEmail")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("entries")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("slug")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("my-email-slug"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("first")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token rd"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token ld"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("campaignId")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("craft")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("sproutEmail")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("entries")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("campaignId")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token rd"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token ld"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("campaignHandle")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("craft")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("sproutEmail")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("entries")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("campaignHandle")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("myCampaign"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token property"}},[t._v("find")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token rd"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])}],!1,null,null,null);a.default=n.exports}}]);