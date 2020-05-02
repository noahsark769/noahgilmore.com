(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{258:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return c}),t.d(a,"default",function(){return p});t(9),t(10),t(5),t(13),t(22),t(0);var n=t(84),s=t(273);var c={},i={_frontmatter:c},r=s.a;function p(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(r,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"To clear a value from UserDefaults, I previously thought it was fine to do something like this:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"set"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(n.b)("p",null,"Turns out that this works differently in different iOS versions. Starting in iOS 11, setting nil for a key works as I expected and the following prints nil:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"set"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"))")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// nil")))),Object(n.b)("p",null,"However, in iOS 10, UserDefaults actually tries to serialize nil into a Data:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"set"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"))")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// 135 bytes")))),Object(n.b)("p",null,"If we look at this data, it seems like it might be a plist:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"String"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")!,")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"encoding"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": ."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"ascii")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"))")))),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'Optional("bplist00Ô\\u{01}\\u{02}\\u{03}\\u{04}\\u{05}\\u{08}\\n\\u{0B}T$topX$objectsX$versionY$archiverÑ\\u{06}\\u{07}Troot\\0¡\\tU$null\\u{12}\\0\\u{01} _\\u{10}\\u{0F}NSKeyedArchiver\\u{08}\\u{11}\\u{16}\\u{1F}(25:<>DI\\0\\0\\0\\0\\0\\0\\u{01}\\u{01}\\0\\0\\0\\0\\0\\0\\0\\u{0C}\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0[")'))),Object(n.b)("p",null,"Turns out that we can use PropertyListSerialization to actually print the serialized value of nil:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," data = UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")!")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," propertyList = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"try"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"! PropertyListSerialization."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"propertyList"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"from"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": data,")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"options"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": [],")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"format"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(propertyList)")))),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"{"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$archiver" = NSKeyedArchiver;'),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$objects" =     ('),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'        "$null"'),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"    );"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$top" =     {'),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'        root = "<CFKeyedArchiverUID 0x79e7c420 [0xf126e8]>{value = 0}";'),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"    };"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$version" = 100000;'),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"}"))),Object(n.b)("p",null,"For whatever reason, this was totally unexpected to me. It’s particularly tricky when you’re trying to interpret the value of a previously cleared UserDefaults key as JSON:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," data = UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," json = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"try"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"JSONDecoder"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"decode"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(MyClass.self, "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"from"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": data)")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(json)")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"} "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"else"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"No data found"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(n.b)("p",null,"This will work just fine on iOS 11+, but throw an error on iOS 10."),Object(n.b)("p",null,"Here’s an ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/userdefaults-set-nil-example"}),"example project")," which demonstrates this behavior. I ended up finding one stackoverflow post about it, but as far as I can tell this isn’t documented anywhere. If you have any more info about it, ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769"}),"let me know")," 👋"),Object(n.b)("p",null,"Lesson learned — setting nil isn’t a good way to clear a UserDefaults value. Instead, use the recommended approach:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"removeObject"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(n.b)("style",{className:"vscode-highlight-styles"},".dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }"))}p.isMDXComponent=!0},261:function(e,a,t){"use strict";t.d(a,"d",function(){return j}),t.d(a,"b",function(){return N}),t.d(a,"c",function(){return O}),t.d(a,"g",function(){return h}),t.d(a,"e",function(){return f}),t.d(a,"f",function(){return u}),t.d(a,"a",function(){return k});var n=t(2),s=t(263),c=t.n(s),i=t(264),r=t.n(i),p=t(265),o=t.n(p),l=t(266),m=t.n(l);function b(){var e=g(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n            url('","') format('woff'),\n            url('","') format('truetype'),\n            url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    @media (prefers-color-scheme: dark) {\n        html, body {\n            background-color: #2b2c2f;\n        }\n    }\n"]);return b=function(){return e},e}function d(){var e=g(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return d=function(){return e},e}function g(e,a){return a||(a=e.slice(0)),e.raw=a,e}var j=Object(n.a)(d(),c.a,c.a,r.a,o.a,m.a),N=Object(n.a)(b(),c.a,c.a,r.a,o.a,m.a),O=n.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),h=(n.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),n.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),f=n.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),u=n.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),k=n.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},263:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},264:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},265:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},266:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},267:function(e,a,t){"use strict";var n=t(0),s=t.n(n),c=t(261),i=t(66),r=t(2),p=t(271),o=t(272),l=r.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),m=r.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),b=Object(r.c)(c.g).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),d=Object(r.c)(c.e).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),g=Object(r.c)(c.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],i.a,i.b);a.a=function(e){return s.a.createElement(l,null,s.a.createElement(m,null,s.a.createElement(g,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),s.a.createElement(b,null,s.a.createElement(d,null,s.a.createElement(g,{"aria-label":"Blog Home",href:"/blog"},s.a.createElement(p.b,{color:i.a,size:"24"}))),s.a.createElement(d,null,s.a.createElement(g,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},s.a.createElement(o.a,{color:i.a,size:"24"}))),s.a.createElement(d,null,s.a.createElement(g,{"aria-label":"App Store",href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},s.a.createElement(p.a,{color:i.a,size:"24"})))))}},268:function(e,a,t){"use strict";t.d(a,"a",function(){return r}),t.d(a,"b",function(){return m});var n=t(0),s=t.n(n),c=t(2),i=t(262);var r=c.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:",";margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.isCompressed?"700px":"1600px"},function(e){return e.darkened&&Object(c.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),p=c.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),o=c.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),l=c.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),m=function(e){return s.a.createElement("div",null,s.a.createElement(i.Helmet,null,s.a.createElement("title",null,e.title)),s.a.createElement(p,null,s.a.createElement(o,null,e.title),s.a.createElement(l,null,e.date)))};s.a.Component},269:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(0),s=t.n(n);var c=t(2).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;padding:3px 5px;margin:0px 2px;@media (prefers-color-scheme:dark){color:#fff;}}code:not(.vscode-highlight-code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;margin-top:10px;border:1px solid #e5e4e1;border-radius:2px;@media all and (max-width:600px){width:100%;margin:10px auto 0 auto;border-left:none;border-right:none;border-radius:0;overflow-x:scroll;}}pre > code{display:block;margin:0;padding:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),i=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return s.a.createElement(c,null,this.props.children)},n}(s.a.Component)},270:function(e,a,t){"use strict";function n(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}t.d(a,"a",function(){return n})},273:function(e,a,t){"use strict";t(114);var n=t(0),s=t.n(n),c=t(262),i=t(261),r=t(267),p=t(2),o=t(271),l=t(272),m=t(66);var b=p.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),d=p.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],m.a,m.b,function(e){return e.margin&&Object(p.b)(["margin-right:20px;"])}),g=function(e){return s.a.createElement(i.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},s.a.createElement(d,{margin:e.margin},e.children))},j=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e,a=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return s.a.createElement(b,null,s.a.createElement(g,{label:"Twitter",url:a,newTab:!0,margin:!0},s.a.createElement(l.a,{size:24,color:"white"})),s.a.createElement(g,{label:"Blog homepage",url:"/blog"},s.a.createElement(o.b,{size:24,color:"white"})))},n}(s.a.Component),N=t(268),O=t(269),h=t(270),f=t(46);var u=p.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),k=function(e){var a,t;function n(){return e.apply(this,arguments)||this}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var c=n.prototype;return c.render=function(){return s.a.createElement(u,null,s.a.createElement("div",{id:"disqus_thread"}))},c.componentDidMount=function(){var e,a;e=document,(a=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",a.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(a)},n}(s.a.Component),y=t(115),v=t.n(y);t.d(a,"a",function(){return D});var x=p.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),w=p.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),E=p.c.div.withConfig({displayName:"BlogPageLayout__InstabugContainer",componentId:"sc-118ribu-2"})(["min-width:430px;margin-left:60px;@media all and (max-width:1200px){display:none;}"]),_=p.c.div.withConfig({displayName:"BlogPageLayout__InstabugInner",componentId:"sc-118ribu-3"})([""]),C=p.c.div.withConfig({displayName:"BlogPageLayout__PostContainerOuter",componentId:"sc-118ribu-4"})(["display:flex;flex-direction:row;padding:",";@media all and (max-width:1200px){padding:0;}"],function(e){return e.hasPadding?"20px":"0"}),I=p.c.div.withConfig({displayName:"BlogPageLayout__PostContainerInner",componentId:"sc-118ribu-5"})(["display:block;flex-direction:column;width:100%;"]),D=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isShowingInstabug:!0},t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var p=n.prototype;return p.handleInstabugHide=function(){this.setState({isShowingInstabug:!1})},p.render=function(){var e=this,a="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return s.a.createElement(x,null,s.a.createElement(i.b,null),s.a.createElement(c.Helmet,null,s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!a&&s.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),a&&s.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),s.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),s.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),s.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),s.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),s.a.createElement(r.a,{blog:!0}),s.a.createElement(N.a,{isCompressed:!this.state.isShowingInstabug||!this.props.pageContext.frontmatter.instabugEnabled},s.a.createElement(C,{hasPadding:this.state.isShowingInstabug&&this.props.pageContext.frontmatter.instabugEnabled},s.a.createElement(I,null,s.a.createElement(w,null,s.a.createElement(N.b,{title:this.props.pageContext.frontmatter.title,date:Object(h.a)(this.props.pageContext.frontmatter.date)})),s.a.createElement(O.a,null,this.props.children),s.a.createElement(w,null,s.a.createElement(j,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),s.a.createElement(k,null))),this.state.isShowingInstabug&&this.props.pageContext.frontmatter.instabugEnabled&&s.a.createElement(E,null,s.a.createElement(_,null,s.a.createElement(f.a,{onHide:function(){return e.handleInstabugHide()}}))))))},p.componentDidMount=function(){v.a.initialize("UA-35325391-1"),v.a.pageview(window.location.pathname+window.location.search)},n}(s.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-userdefaults-set-nil-mdx-6bc56c73bcf44c11d1e6.js.map