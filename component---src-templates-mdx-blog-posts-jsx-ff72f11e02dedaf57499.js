(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,n){"use strict";n.r(t);n(49),n(191),n(50);var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(163),d=n(156),c=n(171),s=n(172),p=n(185),m=n(182),u=n.n(m),f=(n(170),n(175)),g=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.render=function(){return r.a.createElement("div",null,r.a.createElement(d.c,null),r.a.createElement(l.Helmet,null,r.a.createElement("title",null,this.props.pageContext.tag+" | ","Noah Gilmore"),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),r.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com/blog"}),r.a.createElement("meta",{property:"og:title",content:"Blog - Noah Gilmore"}),r.a.createElement("meta",{property:"og:description",content:"Noah Gilmore's personal blog. Software development (web, iOS)."}),r.a.createElement("meta",{name:"Description",content:"Noah Gilmore's personal blog. Software development (web, iOS)."})),r.a.createElement(c.a,null),r.a.createElement(s.a,{darkened:!0},this.props.pageContext.edges.map(function(e){return r.a.createElement(p.a,{key:e.node.id,url:"/blog/"+e.node.parent.name,title:e.node.frontmatter.title,date:Object(f.a)(e.node.frontmatter.date),mdxPreview:e.node.frontmatter.mdxPreview})})))},n.componentDidMount=function(){u.a.initialize("UA-35325391-1"),u.a.pageview(window.location.pathname+window.location.search)},t}(r.a.Component);t.default=g},156:function(e,t,n){"use strict";n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return x}),n.d(t,"d",function(){return w}),n.d(t,"e",function(){return y}),n.d(t,"a",function(){return b});var a=n(177),i=n.n(a),o=(n(0),n(154)),r=n(164),l=n.n(r),d=n(165),c=n.n(d),s=n(166),p=n.n(s),m=n(167),u=n.n(m);function f(){var e=i()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return f=function(){return e},e}var g=Object(o.a)(f(),l.a,l.a,c.a,p.a,u.a),h=o.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),x=(o.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),o.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),w=o.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),y=o.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),b=o.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},162:function(e,t,n){var a;e.exports=(a=n(174))&&a.default||a},164:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},165:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},166:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},167:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},168:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var a="rgba(128, 165, 177, 1)",i="rgba(151, 195, 210, 1)"},170:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return u});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(155),d=n.n(l);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(162),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var p=n(34);n.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),u=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},171:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(156),r=n(168),l=n(154),d=n(178),c=n(179),s=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}"]),p=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;']),m=Object(l.c)(o.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),u=Object(l.c)(o.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),f=Object(l.c)(o.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],r.a,r.b);l.c.div.withConfig({displayName:"Nav__MediaOnlySmall",componentId:"sc-1cm9dpf-5"})(["display:none;@media all and (max-width:600px){display:inline-block;}"]),l.c.div.withConfig({displayName:"Nav__MediaOnlyLarge",componentId:"sc-1cm9dpf-6"})(["display:inline-block;@media all and (max-width:600px){display:none;}"]);t.a=function(e){return i.a.createElement(s,null,i.a.createElement(p,null,i.a.createElement(f,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),i.a.createElement(m,null,i.a.createElement(u,null,i.a.createElement(f,{"aria-label":"Blog Home",href:"/blog"},i.a.createElement(d.b,{color:r.a,size:"24"}))),i.a.createElement(u,null,i.a.createElement(f,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},i.a.createElement(c.a,{color:r.a,size:"24"}))),i.a.createElement(u,null,i.a.createElement(f,{"aria-label":"App Store",href:"https://appstore.com/trestle"},i.a.createElement(d.a,{color:r.a,size:"24"})))))}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(154),d=n(163),c=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&"background-color: #f6f6f6;"}),s=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),p=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;']),m=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),u=function(e){return r.a.createElement("div",null,r.a.createElement(d.Helmet,null,r.a.createElement("title",null,e.title)),r.a.createElement(s,null,r.a.createElement(p,null,e.title),r.a.createElement(m,null,e.date)))};r.a.Component},173:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(35),d=n.n(l),c=n(154).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;p{margin:0;padding:0;color:#555;}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}a:hover{color:#47656E;}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),s=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.render=function(){return r.a.createElement(c,null,this.props.children)},n.componentDidMount=function(){for(var e=d.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},t}(r.a.Component)},174:function(e,t,n){"use strict";n.r(t);var a=n(13),i=n.n(a),o=n(0),r=n.n(o),l=n(4),d=n.n(l),c=n(52),s=n(2),p=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,i()({location:t,pageResources:n},n.json))};p.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},t.default=p},175:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},185:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(154),d=n(156),c=n(173),s=n(193),p=n.n(s),m=l.c.div.withConfig({displayName:"BlogPostPreview__Wrapper",componentId:"sc-19o7o75-0"})(["border:1px solid #ddd;border-radius:2px;padding:20px;margin-bottom:20px;cursor:pointer;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;background-color:white;&:hover{border-color:rgba(128,165,177,1);}@media all and (max-width:600px){border-right:none;border-left:none;padding-right:0;padding-left:0;background-color:white;}"]),u=l.c.h1.withConfig({displayName:"BlogPostPreview__Title",componentId:"sc-19o7o75-1"})(['font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:20px;margin-bottom:5px;']),f=l.c.div.withConfig({displayName:"BlogPostPreview__StyledDate",componentId:"sc-19o7o75-2"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;margin-bottom:20px;']),g=l.c.div.withConfig({displayName:"BlogPostPreview__Content",componentId:"sc-19o7o75-3"})(['font-family:"Open Sans",times,serif;font-size:15px;line-height:16px;color:#333;padding-bottom:15px;margin-top:15px;line-height:26px;']),h=l.c.div.withConfig({displayName:"BlogPostPreview__NonContent",componentId:"sc-19o7o75-4"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),x=Object(l.c)(d.a).withConfig({displayName:"BlogPostPreview__StyledA",componentId:"sc-19o7o75-5"})(['&,&:hover{color:#1A3F4B;text-decoration:underline;font-family:"Gentium Book Basic",times,serif;font-size:16px;line-height:18px;}']),w=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.handleClick=function(){window.location=this.props.url},n.render=function(){var e=this;return r.a.createElement(m,{onClick:function(){return e.handleClick()}},r.a.createElement(h,null,r.a.createElement(u,null,this.props.title),r.a.createElement(f,null,this.props.date)),r.a.createElement(g,null,r.a.createElement(c.a,null,r.a.createElement(p.a,{source:this.props.mdxPreview}))),r.a.createElement(h,null,r.a.createElement(d.e,null,r.a.createElement(x,{href:this.props.url},"Read more"))))},t}(r.a.Component)}}]);
//# sourceMappingURL=component---src-templates-mdx-blog-posts-jsx-ff72f11e02dedaf57499.js.map