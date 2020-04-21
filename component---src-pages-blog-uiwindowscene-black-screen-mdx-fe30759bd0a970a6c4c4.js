(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{ARx6:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return i}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("E/Ix"),s=t("1zrH");var o={},c={_frontmatter:o},r=s.a;function i(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(r,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"I've encountered this bug enough times that I figured it was time to write a quick post about it. If you've looked into ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/app_and_environment/scenes"}),"multiple window support")," for your app in iOS 13, you might know that a lot of the setup you used to have to do in the app delegate now lives in the scene delegate instead."),Object(n.b)("p",null,"However, multiple times now, I've thought I've set everything up correctly (scene delegate class implemented, configuration with ",Object(n.b)("inlineCode",{parentName:"p"},"delegateClass")," set properly, correct Info.plist setup, etc), only to get a black screen on launch."),Object(n.b)("p",null,"The secret is this: prior to iOS 13, it was common to set up your ",Object(n.b)("inlineCode",{parentName:"p"},"UIWindow")," with the bounds of the screen:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// Does not work in iOS 13+")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"window = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIWindow"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"frame"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": UIScreen."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"main"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"bounds"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(n.b)("p",null,"This breaks when using the UISceneSession system. Instead, you have to initialize the window with the scene itself, in your ",Object(n.b)("inlineCode",{parentName:"p"},"scene(scene:willConnectTo:options:)")," method:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"window = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIWindow"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"windowScene"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": windowScene)")))),Object(n.b)("p",null,"This has generally been the missing piece I forgot, and ends up resolving the black screen issue. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSystemColorComparison/blob/master/NGSystemColorComparison/SceneDelegate.swift#L24"}),"Here's a concrete example"),"."),Object(n.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-uiwindowscene-black-screen-mdx-fe30759bd0a970a6c4c4.js.map