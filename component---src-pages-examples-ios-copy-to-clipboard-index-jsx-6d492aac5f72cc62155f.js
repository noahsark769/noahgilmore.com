(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{140:function(n,e,t){"use strict";t.r(e);t(49),t(306);var o=t(7),i=t.n(o),a=t(0),c=t.n(a),r=t(156),l=t(189),u=t.n(l);var d=r.c.div.withConfig({displayName:"ios-copy-to-clipboard__Container",componentId:"xa11yy-0"})(["width:960px;height:100vh;margin:0 auto;"]),s=function(n){function e(e){var t;return(t=n.call(this,e)||this).myRef=c.a.createRef(),t}i()(e,n);var t=e.prototype;return t.handleOnClick=function(){var n=this.myRef.current;console.log(n),function(n){var e=n.contentEditable,t=n.readOnly,o=document.createRange();n.contentEditable=!0,n.readOnly=!1,o.selectNodeContents(n);var i=window.getSelection();i.removeAllRanges(),i.addRange(o),console.log(o),console.log(i),n.setSelectionRange(0,999999),n.contentEditable=e,n.readOnly=t,document.execCommand("copy")}(n)},t.render=function(){return c.a.createElement(d,null,c.a.createElement("input",{id:"ye",ref:this.myRef}),c.a.createElement("a",{onClick:this.handleOnClick.bind(this)},"This is the link"))},t.componentDidMount=function(){u.a.initialize("UA-35325391-1"),u.a.pageview(window.location.pathname+window.location.search)},e}(c.a.Component);e.default=s},306:function(n,e,t){var o=t(6);o(o.P,"Function",{bind:t(307)})},307:function(n,e,t){"use strict";var o=t(18),i=t(11),a=t(78),c=[].slice,r={};n.exports=Function.bind||function(n){var e=o(this),t=c.call(arguments,1),l=function(){var o=t.concat(c.call(arguments));return this instanceof l?function(n,e,t){if(!(e in r)){for(var o=[],i=0;i<e;i++)o[i]="a["+i+"]";r[e]=Function("F,a","return new F("+o.join(",")+")")}return r[e](n,t)}(e,o.length,o):a(e,o,n)};return i(e.prototype)&&(l.prototype=e.prototype),l}}}]);
//# sourceMappingURL=component---src-pages-examples-ios-copy-to-clipboard-index-jsx-6d492aac5f72cc62155f.js.map