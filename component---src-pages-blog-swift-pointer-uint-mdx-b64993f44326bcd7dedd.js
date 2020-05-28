(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"9kN4":function(a,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return d}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("E/Ix"),s=t("1zrH");var r={},c={_frontmatter:r},o=s.a;function d(a){var e=a.components,t=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,["components"]);return Object(n.b)(o,Object.assign({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are some times in Swift, like when using ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/videos/play/wwdc2016/411/"}),"System Trace"),", that you want to get the pointer value of an object directly as a ",Object(n.b)("inlineCode",{parentName:"p"},"UInt")," (passing the pointer to ",Object(n.b)("inlineCode",{parentName:"p"},"kdebug_signpost")," is one). I was surprised at how hard it was to find documentation on how to get a Swift reference’s pointer value as a ",Object(n.b)("inlineCode",{parentName:"p"},"UInt"),". Here’s how to do it, using the ",Object(n.b)("inlineCode",{parentName:"p"},"UInt(bitPattern:)")," initializer:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"_"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"withUnsafePointer"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"to"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": myObject) { unsafePointer "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"in")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," pointerValue = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"UInt"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"bitPattern"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": unsafePointer)")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// do whatever with pointerValue: it's a UInt!")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(n.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-swift-pointer-uint-mdx-b64993f44326bcd7dedd.js.map