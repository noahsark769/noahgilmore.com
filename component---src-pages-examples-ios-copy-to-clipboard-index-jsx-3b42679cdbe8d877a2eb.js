(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{223:function(e,t,n){"use strict";n.r(t);n(157),n(46),n(7),n(11),n(12),n(6),n(19),n(110),n(111);var o=n(0),r=n.n(o),i=n(10),a=n(259),c=n.n(a);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var u=i.c.div.withConfig({displayName:"ios-copy-to-clipboard__Container",componentId:"xa11yy-0"})(["width:960px;height:100vh;margin:0 auto;"]),d=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.handleOnClick=function(){var e,t=document.createElement("input"),n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({timestamp:Date.now()},this.props.data),o=JSON.stringify(n),r=btoa(o);e=this.props.href.includes("?")?"&ed="+r:"?ed="+r,t.value=this.props.href+e,t.style="position: absolute; opacity: 0.0",document.body.appendChild(t),function(e){var t=e.contentEditable,n=e.readOnly,o=document.createRange();e.contentEditable=!0,e.readOnly=!1,o.selectNodeContents(e);var r=window.getSelection();r.removeAllRanges(),r.addRange(o),console.log(o),console.log(r),e.setSelectionRange(0,999999),e.contentEditable=t,e.readOnly=n,document.execCommand("copy")}(t)},n.render=function(){return r.a.createElement("a",{href:this.props.href,onClick:this.handleOnClick.bind(this)},this.props.children)},t}(r.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.render=function(){return r.a.createElement(u,null,r.a.createElement(d,{data:{referrer:"pasteboard-blog-post"},href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},"This is the link"))},n.componentDidMount=function(){c.a.initialize("UA-35325391-1"),c.a.pageview(window.location.pathname+window.location.search)},t}(r.a.Component);t.default=h}}]);
//# sourceMappingURL=component---src-pages-examples-ios-copy-to-clipboard-index-jsx-3b42679cdbe8d877a2eb.js.map