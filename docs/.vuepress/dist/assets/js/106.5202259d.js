(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{230:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("Display Errors at top of page")]),t._m(0),t._m(1),a("p",[t._v("You can display error messaging at the top of your page in several ways.")]),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("To display all errors at the top of your form, you'll need to loop through your error object.  Your error object is two levels deep.  At the top level, is an array of the fields that have errors and within each field in the array is a list of errors associated with that field.")]),t._m(6),t._m(7),a("p",[t._v("If you are dynamically displaying a form on the page (perhaps via a Forms Relations field), you may not know the name of the form variable to use in the template. To access the error you will need to pass your entire FormModel to Twig's "),a("a",{attrs:{href:"http://twig.sensiolabs.org/doc/functions/attribute.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("attribute"),a("OutboundLink")],1),t._v(" tag along with the method that you want")]),t._m(8)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("If you would like to display errors at the top of your page, you can access those errors in the "),s("code",[this._v("form.getErrors()")]),this._v(" method.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("If your form submission does not validate, your page will reload with a variable that uses the same name as your form handle.  If you form handle is "),s("code",[this._v("contact")]),this._v(" your errors will be available to you via "),s("code",[this._v("contact.getErrors()")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"display-a-global-error-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-a-global-error-message","aria-hidden":"true"}},[this._v("#")]),this._v(" Display a global error message")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("contact")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("defined")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("contact")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("getErrors")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token property"}},[t._v("length")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t"),a("span",{attrs:{class:"token other"}},[t._v("Oh no! Errors.")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("Your FormModel will only be defined if your form submission fails, so you'll need to ensure your FormModel is available before you check for errors by checking "),s("code",[this._v("if contact is defined")]),this._v(".  If the FormModel exists, you can then test if there are any errors by checking to see if the errors array has any items: "),s("code",[this._v("contact.getErrors()|length")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"loop-through-all-error-messages-at-the-top-of-your-form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loop-through-all-error-messages-at-the-top-of-your-form","aria-hidden":"true"}},[this._v("#")]),this._v(" Loop through all error messages at the top of your form")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("contact")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("defined")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("contact")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("getErrors")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("length")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("errors")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("contact")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("getErrors")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t\t"),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("errors"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("error")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("errors")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("error")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t\t"),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"access-errors-with-dynamic-form-handles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-errors-with-dynamic-form-handles","aria-hidden":"true"}},[this._v("#")]),this._v(" Access errors with dynamic form handles")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("{# Identify your SproutForms_FormModel #}")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("form")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("entry")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("formFieldHandle")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token property"}},[t._v("first")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("{# Use the `attribute` tag to access the `getErrors()` method #}")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("form")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("defined")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("attribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("form")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("getErrors"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token property"}},[t._v("length")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t"),a("span",{attrs:{class:"token other"}},[t._v("Errors!")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);