(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var a=n(157),o=n.n(a),i=n(0),r=n.n(i),l=n(172),s=n(169),p=n(155);t.default=function(e){var t=e.components,n=o()(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",Layout:s.a,layoutProps:n,components:t},r.a.createElement(p.b,{title:"Setting a UserDefaults value to nil might not do what you think it does",date:"October 22nd, 2018"}),r.a.createElement(l.MDXTag,{name:"p",components:t},"To clear a value from UserDefaults, I previously thought it was fine to do something like this:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\n')),r.a.createElement(l.MDXTag,{name:"p",components:t},"Turns out that this works differently in different iOS versions. Starting in iOS 11, setting nil for a key works as I expected and the following prints nil:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\nprint(UserDefaults.standard.data(forKey: "myKey"))\n// nil\n')),r.a.createElement(l.MDXTag,{name:"p",components:t},"However, in iOS 10, UserDefaults actually tries to serialize nil into a Data:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\nprint(UserDefaults.standard.data(forKey: "myKey"))\n// 135 bytes\n')),r.a.createElement(l.MDXTag,{name:"p",components:t},"If we look at this data, it seems like it might be a plist:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'print(String(\n    data: UserDefaults.standard.data(forKey: "myKey")!,\n    encoding: .ascii\n))\n')),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},'Optional("bplist00Ô\b\n\vT$topX$objectsX$versionY$archiverÑTroot\0¡\tU$null\0 _NSKeyedArchiver\b(25:<>DI\0\0\0\0\0\0\0\0\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0[")\n')),r.a.createElement(l.MDXTag,{name:"p",components:t},"Turns out that we can use PropertyListSerialization to actually print the serialized value of nil:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'let data = UserDefaults.standard.data(forKey: "myKey")!\nlet propertyList = try! PropertyListSerialization.propertyList(\n   from: data,\n   options: [],\n   format: nil\n)\nprint(propertyList)\n')),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},'{\n    "$archiver" = NSKeyedArchiver;\n    "$objects" =     (\n        "$null"\n    );\n    "$top" =     {\n        root = "<CFKeyedArchiverUID 0x79e7c420 [0xf126e8]>{value = 0}";\n    };\n    "$version" = 100000;\n}\n')),r.a.createElement(l.MDXTag,{name:"p",components:t},"For whatever reason, this was totally unexpected to me. It’s particularly tricky when you’re trying to interpret the value of a previously cleared UserDefaults key as JSON:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'if let data = UserDefaults.standard.data(forKey: "myKey") {\n    let json = try JSONDecoder().decode(MyClass.self, from: data)\n    print(json)\n} else {\n    print("No data found")\n}\n')),r.a.createElement(l.MDXTag,{name:"p",components:t},"This will work just fine on iOS 11+, but throw an error on iOS 10."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Here’s an example project which demonstrates this behavior. I ended up finding one stackoverflow post about it, but as far as I can tell this isn’t documented anywhere. If you have any more info about it, let me know 👋"),r.a.createElement(l.MDXTag,{name:"p",components:t},"Lesson learned — setting nil isn’t a good way to clear a UserDefaults value. Instead, just use the recommended approach:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.removeObject(forKey: "myKey")\n')))};var c={}},144:function(e,t,n){"use strict";n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return y}),n.d(t,"d",function(){return x}),n.d(t,"a",function(){return w});var a=n(158),o=n.n(a),i=(n(0),n(143)),r=n(149),l=n.n(r),s=n(150),p=n.n(s),c=n(151),m=n.n(c),d=n(152),f=n.n(d);function u(){var e=o()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n"]);return u=function(){return e},e}var g=Object(i.a)(u(),l.a,l.a,p.a,m.a,f.a),h=i.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(i.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),i.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),x=i.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),w=i.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-4"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},149:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},150:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},151:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},152:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},154:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(144),r=n(143),l=r.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){flex-direction:column;padding:20px 20px 10px 20px;}"]),s=r.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;']),p=Object(r.c)(i.e).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;@media all and (max-width:600px){justify-content:flex-start;}"]),c=Object(r.c)(i.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:horizontal;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;@media all and (max-width:600px){display:block;width:100%;font-size:20px;margin:5px 0px;padding:10px 10px;background-color:#eee;}']),m=Object(r.c)(i.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:rgba(128,165,177,1);&:hover{color:rgba(151,195,210,1);}@media all and (max-width:600px){width:100%;}"]);t.a=function(e){return o.a.createElement(l,null,o.a.createElement(s,null,"NOAH GILMORE"),o.a.createElement(p,null,o.a.createElement(c,null,o.a.createElement(m,{href:"/"},"HOME")),o.a.createElement(c,null,o.a.createElement(m,{href:"/blog/"},"POSTS"))))}},155:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"b",function(){return f});var a=n(7),o=n.n(a),i=n(0),r=n.n(i),l=(n(144),n(156),n(143)),s=n(146),p=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}"]),c=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),m=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;margin-bottom:10px;']),d=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),f=function(e){return r.a.createElement("div",null,r.a.createElement(s.Helmet,null,r.a.createElement("title",null,e.title)),r.a.createElement(c,null,r.a.createElement(m,null,e.title),r.a.createElement(d,null,e.date)))};r.a.Component},156:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(7),o=n.n(a),i=n(0),r=n.n(i),l=(n(144),n(143)),s=(n(146),l.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"])),p=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return r.a.createElement(s,null,r.a.createElement("div",{id:"disqus_thread"}))},n.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},t}(r.a.Component)},169:function(e,t,n){"use strict";n(49);var a=n(7),o=n.n(a),i=n(0),r=n.n(i),l=n(146),s=n(144),p=n(154),c=n(155),m=n(34),d=n.n(m),f=n(143),u=(n(174),f.c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['.format-post-preview p,.format-post-preview li{font-family:"Open Sans",arial,sans-serif;font-size:14px;line-height:14px;line-height:18px;margin-top:10px;padding-bottom:10px;}.format-post-preview p + p{margin-top:0;}.format-post-preview pre > code{font-size:12px;line-height:12px;margin-top:0;margin-bottom:0;}p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:26px;color:#333;padding-bottom:15px;margin-top:15px;}a{color:#1A3F4B;}code{font-family:monospace;font-size:16px;}pre{display:block;margin:0;padding:0;background:none;}pre > code{display:block;margin:0;padding:0;border:1px solid #ddd;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;white-space:pre-wrap;}pre > code.hljs{border:none;}pre + p{margin-top:30px;}ol{margin-left:30px;}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}'])),g=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return r.a.createElement(u,null,this.props.children)},n.componentDidMount=function(){var e=d.a.findDOMNode(this).querySelectorAll("pre code");console.log("HEYYYY YAAAAAA"),console.log(e);for(var t=0;t<e.length;t++)window.hljs.highlightBlock(e[t])},t}(r.a.Component),h=n(156),y=n(159),x=n.n(y);n.d(t,"a",function(){return w});var w=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return r.a.createElement("div",null,r.a.createElement(s.c,null),r.a.createElement(l.Helmet,null,r.a.createElement("link",{href:"http://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"})),r.a.createElement(p.a,null),r.a.createElement(c.a,null,r.a.createElement(g,null,this.props.children),r.a.createElement(h.a,null)))},n.componentDidMount=function(){x.a.initialize("UA-35325391-1"),x.a.pageview(window.location.pathname+window.location.search)},t}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-userdefaults-set-nil-mdx-6ce28bd266e7c65647da.js.map