(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return c});n(9),n(10),n(5),n(13),n(22),n(0);var a=n(84),o=n(273);var i={},r={_frontmatter:i},l=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For some reason lately, I've been having a lot of trouble installing apps and running tests in the iOS simulator on Xcode 10 (non-beta). The error message looks like this:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Failed to install the requested application")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The application's CFBundleVersion is invalid")),Object(a.b)("p",null,"To be completely honest, I'm not super sure what causes this error, but it might be related to the fact that I'm using non-semver version numbers (they include a sub-patch number) and ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://forums.developer.apple.com/thread/117322"}),"the Xcode 11 simulator treats CFBundleVersion numbers differently"),". For what it's worth, this started happening when installing the Xcode 11 beta and running it in parallel with Xcode 10."),Object(a.b)("p",null,"Anyways, the magic fix is to kill CoreSimulatorBridge: in 99% of cases, this has fixed the error for me! 🎉"),Object(a.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":""},Object(a.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(a.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"killall -9 CoreSimulatorBridge"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: in a few instances, I've had this not work. Usually, erasing the simulator (Hardware > Erase All Content And Settings) then killing the CoreSimulatorBridge again seems to help.")),Object(a.b)("style",{className:"vscode-highlight-styles"},".dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}"))}c.isMDXComponent=!0},261:function(e,t,n){"use strict";n.d(t,"d",function(){return h}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"g",function(){return x}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return w}),n.d(t,"a",function(){return v});var a=n(2),o=n(263),i=n.n(o),r=n(264),l=n.n(r),c=n(265),s=n.n(c),d=n(266),p=n.n(d);function m(){var e=u(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n            url('","') format('woff'),\n            url('","') format('truetype'),\n            url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    @media (prefers-color-scheme: dark) {\n        html, body {\n            background-color: #2b2c2f;\n        }\n    }\n"]);return m=function(){return e},e}function f(){var e=u(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return f=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),e.raw=t,e}var h=Object(a.a)(f(),i.a,i.a,l.a,s.a,p.a),g=Object(a.a)(m(),i.a,i.a,l.a,s.a,p.a),b=a.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),x=(a.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),a.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),y=a.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),w=a.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),v=a.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},263:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},264:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},265:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},266:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},267:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(261),r=n(66),l=n(2),c=n(271),s=n(272),d=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),p=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),m=Object(l.c)(i.g).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(i.e).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(i.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],r.a,r.b);t.a=function(e){return o.a.createElement(d,null,o.a.createElement(p,null,o.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),o.a.createElement(m,null,o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},o.a.createElement(c.b,{color:r.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},o.a.createElement(s.a,{color:r.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"App Store",href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},o.a.createElement(c.a,{color:r.a,size:"24"})))))}},268:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return p});var a=n(0),o=n.n(a),i=n(2),r=n(262);var l=i.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:",";margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.isCompressed?"700px":"1600px"},function(e){return e.darkened&&Object(i.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),c=i.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),s=i.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),d=i.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),p=function(e){return o.a.createElement("div",null,o.a.createElement(r.Helmet,null,o.a.createElement("title",null,e.title)),o.a.createElement(c,null,o.a.createElement(s,null,e.title),o.a.createElement(d,null,e.date)))};o.a.Component},269:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),o=n.n(a);var i=n(2).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;padding:3px 5px;margin:0px 2px;@media (prefers-color-scheme:dark){color:#fff;}}code:not(.vscode-highlight-code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;margin-top:10px;border:1px solid #e5e4e1;border-radius:2px;@media all and (max-width:600px){width:100%;margin:10px auto 0 auto;border-left:none;border-right:none;border-radius:0;overflow-x:scroll;}}pre > code{display:block;margin:0;padding:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),r=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(i,null,this.props.children)},a}(o.a.Component)},270:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},273:function(e,t,n){"use strict";n(114);var a=n(0),o=n.n(a),i=n(262),r=n(261),l=n(267),c=n(2),s=n(271),d=n(272),p=n(66);var m=c.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),f=c.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],p.a,p.b,function(e){return e.margin&&Object(c.b)(["margin-right:20px;"])}),u=function(e){return o.a.createElement(r.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},o.a.createElement(f,{margin:e.margin},e.children))},h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return o.a.createElement(m,null,o.a.createElement(u,{label:"Twitter",url:t,newTab:!0,margin:!0},o.a.createElement(d.a,{size:24,color:"white"})),o.a.createElement(u,{label:"Blog homepage",url:"/blog"},o.a.createElement(s.b,{size:24,color:"white"})))},a}(o.a.Component),g=n(268),b=n(269),x=n(270),y=n(46);var w=c.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),v=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.render=function(){return o.a.createElement(w,null,o.a.createElement("div",{id:"disqus_thread"}))},i.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},a}(o.a.Component),k=n(115),_=n.n(k);n.d(t,"a",function(){return O});var E=c.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),C=c.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),N=c.c.div.withConfig({displayName:"BlogPageLayout__InstabugContainer",componentId:"sc-118ribu-2"})(["min-width:430px;margin-left:60px;@media all and (max-width:1200px){display:none;}"]),j=c.c.div.withConfig({displayName:"BlogPageLayout__InstabugInner",componentId:"sc-118ribu-3"})([""]),I=c.c.div.withConfig({displayName:"BlogPageLayout__PostContainerOuter",componentId:"sc-118ribu-4"})(["display:flex;flex-direction:row;padding:",";@media all and (max-width:1200px){padding:0;}"],function(e){return e.hasPadding?"20px":"0"}),B=c.c.div.withConfig({displayName:"BlogPageLayout__PostContainerInner",componentId:"sc-118ribu-5"})(["display:block;flex-direction:column;width:100%;"]),O=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={isShowingInstabug:!0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=a.prototype;return c.handleInstabugHide=function(){this.setState({isShowingInstabug:!1})},c.render=function(){var e=this,t="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return o.a.createElement(E,null,o.a.createElement(r.b,null),o.a.createElement(i.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!t&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),t&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),o.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),o.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),o.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),o.a.createElement(l.a,{blog:!0}),o.a.createElement(g.a,{isCompressed:!this.state.isShowingInstabug||!this.props.pageContext.frontmatter.instabugEnabled},o.a.createElement(I,{hasPadding:this.state.isShowingInstabug&&this.props.pageContext.frontmatter.instabugEnabled},o.a.createElement(B,null,o.a.createElement(C,null,o.a.createElement(g.b,{title:this.props.pageContext.frontmatter.title,date:Object(x.a)(this.props.pageContext.frontmatter.date)})),o.a.createElement(b.a,null,this.props.children),o.a.createElement(C,null,o.a.createElement(h,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement(v,null))),this.state.isShowingInstabug&&this.props.pageContext.frontmatter.instabugEnabled&&o.a.createElement(N,null,o.a.createElement(j,null,o.a.createElement(y.a,{onHide:function(){return e.handleInstabugHide()}}))))))},c.componentDidMount=function(){_.a.initialize("UA-35325391-1"),_.a.pageview(window.location.pathname+window.location.search)},a}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-cfbundleversion-invalid-mdx-206ef642b52b239380ce.js.map