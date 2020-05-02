(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return s});n(11),n(12),n(6),n(19),n(21),n(0);var a=n(79),o=n(259),i=n(28);var r={},l={_frontmatter:r},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After struggling for some time with ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/documentation/coreimage/cifilter"}),"CIFilter")," documentation at work, I've been ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1080580341973348352"}),"working on an app")," which can apply filters interactively for various inputs (another blog post to come on this later). As part of this app, I needed a UI for the user to select a color, and decided to implement a color wheel."),Object(a.b)("p",null,"There are several open source projects implementing color wheels on iOS, and StackOverflow has a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/5108921/how-to-draw-a-color-wheel-in-objective-c"}),"few answers")," which mostly recommend drawing the color wheel image yourself by iterating over the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/HSL_and_HSV"}),"Hue-Saturation-Lightness")," color representation. However, I managed to find ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://www.chibicode.org/?p=62"}),"this post")," about new CIFilters in iOS 10, which included a description of ",Object(a.b)("inlineCode",{parentName:"p"},"CIHueSaturationValueGradient"),", and realized we can use this filter to generate a color wheel much more easily."),Object(a.b)("h2",null,"CoreImage Has Color Wheels Built In"),Object(a.b)("p",null,"The description of ",Object(a.b)("inlineCode",{parentName:"p"},"CIHueSaturationValueGradient")," is:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Generates a color wheel that shows hues and saturations for a specified value.")),Object(a.b)("p",null,"For a given value of lightness (0 is dark, 1 is light), this filter's output image will be a wheel of all the hues and saturations for that lightness in a given color space. Code that looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let filter = CIFilter(name: "CIHueSaturationValueGradient", parameters: [\n    "inputColorSpace": CGColorSpaceCreateDeviceRGB(),\n    "inputDither": 0,\n    "inputRadius": 160,\n    "inputSoftness": 0,\n    "inputValue": 1\n])!\nlet image = UIImage(ciImage: filter.outputImage!)\n')),Object(a.b)("p",null,"Generates an output image that looks like this:"),Object(a.b)(i.a,{max:"400",filename:"cifilter-colorwheel-1.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(a.b)("h2",null,"Details"),Object(a.b)("p",null,"The filter takes five parameters:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"inputColorSpace"),": This is a ",Object(a.b)("inlineCode",{parentName:"p"},"CGColorSpaceRef")," representing the color space in which to generate the wheel. Generally, you're going to want to use ",Object(a.b)("inlineCode",{parentName:"p"},"CGColorSpaceCreateDeviceRGB()")," for this, which will generate a wheel in the current device's color space."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"inputDither"),": The amount of ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Dither"}),"dither")," to apply to the wheel. I'm not exactly sure what this is useful for, but it can be fun to play around with. I also don't really know the units of this value, but I think it's pixels (if you can confirm, ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769"}),"let me know"),"). For example, here's a color wheel with ",Object(a.b)("inlineCode",{parentName:"p"},"inputDither")," as 300:"),Object(a.b)(i.a,{max:"400",filename:"cifilter-colorwheel-2.png",alt:"Color wheel with dither",caption:"",mdxType:"CaptionedImage"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"inputRadius"),": The value, ",Object(a.b)("em",{parentName:"p"},"in points"),", of the radius of the wheel. A radius of 160 creates an image which is 320x320 points square (640x640 pixels on a device with 2x screen scale)."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"inputSoftness"),": Specifies a softness value to smooth the gradient. A value of 0 means no smoothing, which is probably what you want for a color wheel. I'm also pretty sure the units here are pixels. Here's a color wheel with ",Object(a.b)("inlineCode",{parentName:"p"},"inputSoftness")," as 4:"),Object(a.b)(i.a,{max:"400",filename:"cifilter-colorwheel-3.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"inputValue"),": The lightness value. 0 creates a black wheel, 1 means full lightness. Here's a color wheel with ",Object(a.b)("inlineCode",{parentName:"p"},"inputValue")," as 0.5:"),Object(a.b)(i.a,{max:"400",filename:"cifilter-colorwheel-4.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(a.b)("h2",null,"Getting The Color On Touch"),Object(a.b)("p",null,"I still needed to actually let the user select a color from the color wheel. Turns out there are tons of people online talking about how to get the color at a given touch location for a ",Object(a.b)("inlineCode",{parentName:"p"},"UIImageView"),". I ended up going with ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/12770181/how-to-get-the-pixel-color-on-touch"}),"this one")," which translated pretty well into an extension:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"extension UIImageView {\n    func getPixelColorAt(point: CGPoint) -> UIColor {\n        let pixel = UnsafeMutablePointer<CUnsignedChar>.allocate(capacity: 4)\n        let colorSpace = CGColorSpaceCreateDeviceRGB()\n        let bitmapInfo = CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedLast.rawValue)\n        let context = CGContext(\n            data: pixel,\n            width: 1,\n            height: 1,\n            bitsPerComponent: 8,\n            bytesPerRow: 4,\n            space: colorSpace,\n            bitmapInfo: bitmapInfo.rawValue\n        )\n\n        context!.translateBy(x: -point.x, y: -point.y)\n        layer.render(in: context!)\n        let color = UIColor(\n            red: CGFloat(pixel[0]) / 255.0,\n            green: CGFloat(pixel[1]) / 255.0,\n            blue: CGFloat(pixel[2]) / 255.0,\n            alpha: CGFloat(pixel[3]) / 255.0\n        )\n\n        pixel.deallocate()\n        return color\n    }\n}\n")),Object(a.b)("h2",null,"End Result"),Object(a.b)("p",null,"It ended up ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1087511576871981056"}),"working pretty well"),"! Adding a gesture recognizer to the imageView which calls ",Object(a.b)("inlineCode",{parentName:"p"},"getPixelColorAt(point:)")," allows us to easily determine the color that the user picked and render a simple UI to show the selected color:"),Object(a.b)(i.a,{max:"400",filename:"cifilter-colorwheel-5.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(a.b)("p",null,"All in all, this was a great exercise in figuring out the least complicated way to implement a complicated UI component, and I continue to learn about all the awesome stuff that CoreImage comes with out of the box (not just color wheels, but photo effects, blurs, distortions, etc)."),Object(a.b)("p",null,"More on CIFilters soon to come! 👋"))}s.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"c",function(){return f}),n.d(t,"b",function(){return u}),n.d(t,"f",function(){return h}),n.d(t,"d",function(){return g}),n.d(t,"e",function(){return b}),n.d(t,"a",function(){return w});var a=n(10),o=n(249),i=n.n(o),r=n(250),l=n.n(r),c=n(251),s=n.n(c),p=n(252),d=n.n(p);function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return m=function(){return e},e}var f=Object(a.a)(m(),i.a,i.a,l.a,s.a,d.a),u=a.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),h=(a.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),a.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),g=a.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),b=a.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=a.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},247:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var a="rgba(128, 165, 177, 1)",o="rgba(151, 195, 210, 1)"},249:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},250:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},251:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},252:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},253:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(246),r=n(247),l=n(10),c=n(257),s=n(258),p=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),d=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),m=Object(l.c)(i.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(i.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(i.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],r.a,r.b);t.a=function(e){return o.a.createElement(p,null,o.a.createElement(d,null,o.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),o.a.createElement(m,null,o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},o.a.createElement(c.b,{color:r.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},o.a.createElement(s.a,{color:r.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"App Store",href:"https://appstore.com/trestle"},o.a.createElement(c.a,{color:r.a,size:"24"})))))}},254:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});var a=n(0),o=n.n(a),i=n(10),r=n(248);var l=i.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(i.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),c=i.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),s=i.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),p=i.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),d=function(e){return o.a.createElement("div",null,o.a.createElement(r.Helmet,null,o.a.createElement("title",null,e.title)),o.a.createElement(c,null,o.a.createElement(s,null,e.title),o.a.createElement(p,null,e.date)))};o.a.Component},255:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),i=n(50),r=n.n(i);var l=n(10).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:not(pre code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre > code.language-nohighlight{@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.render=function(){return o.a.createElement(l,null,this.props.children)},i.componentDidMount=function(){for(var e=r.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},a}(o.a.Component)},256:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},259:function(e,t,n){"use strict";n(157);var a=n(0),o=n.n(a),i=n(248),r=n(246),l=n(253),c=n(10),s=n(257),p=n(258),d=n(247);var m=c.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),f=c.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],d.a,d.b,function(e){return e.margin&&Object(c.b)(["margin-right:20px;"])}),u=function(e){return o.a.createElement(r.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},o.a.createElement(f,{margin:e.margin},e.children))},h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return o.a.createElement(m,null,o.a.createElement(u,{label:"Twitter",url:t,newTab:!0,margin:!0},o.a.createElement(p.a,{size:24,color:"white"})),o.a.createElement(u,{label:"Blog homepage",url:"/blog"},o.a.createElement(s.b,{size:24,color:"white"})))},a}(o.a.Component),g=n(254),b=n(255),w=n(256);var x=c.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),y=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.render=function(){return o.a.createElement(x,null,o.a.createElement("div",{id:"disqus_thread"}))},i.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},a}(o.a.Component),C=n(260),v=n.n(C);n.d(t,"a",function(){return k});var j=c.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),O=c.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),k=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=a.prototype;return c.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return o.a.createElement(j,null,o.a.createElement(r.c,null),o.a.createElement(i.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),o.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),o.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),o.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),o.a.createElement(l.a,{blog:!0}),o.a.createElement(g.a,null,o.a.createElement(O,null,o.a.createElement(g.b,{title:this.props.pageContext.frontmatter.title,date:Object(w.a)(this.props.pageContext.frontmatter.date)})),o.a.createElement(b.a,null,this.props.children),o.a.createElement(O,null,o.a.createElement(h,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement(y,null))))},c.componentDidMount=function(){v.a.initialize("UA-35325391-1"),v.a.pageview(window.location.pathname+window.location.search)},a}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-cifilter-colorwheel-mdx-53a2f3f196f0c545a40f.js.map