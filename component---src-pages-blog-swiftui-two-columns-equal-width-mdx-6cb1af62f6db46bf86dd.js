(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{FMMV:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return b})),s.d(e,"default",(function(){return i}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH"),c=s("D+Sk"),m=s("Qjvx");var b={},p={_frontmatter:b},l=n.a;function i(a){var e=a.components,s=function(a,e){if(null==a)return{};var s,t,n={},c=Object.keys(a);for(t=0;t<c.length;t++)s=c[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,["components"]);return Object(t.b)(l,Object.assign({},p,s,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"A problem that many people run into after writing enough SwiftUI is how to make it so that two views inside an ",Object(t.b)("inlineCode",{parentName:"p"},"HStack")," have equal width, such that if the ",Object(t.b)("inlineCode",{parentName:"p"},"HStack")," grows both inner views expand proportionally."),Object(t.b)("p",null,"There are several articles online talking about how to do this with ",Object(t.b)("inlineCode",{parentName:"p"},"GeometryReader")," or preferences, but for the common case of just having columns equally distributed, it's actually easier to just use frames. If you set the views' frames to both have a min width of 0 and max width of infinity, SwiftUI's layout system distributes them equally:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"struct"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"ContentView"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": View {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," body: some View {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"HStack"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"alignment"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"top"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"spacing"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"Rectangle"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"                ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"fill"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(Color."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"blue"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"                ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"frame"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"minWidth"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"maxWidth"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"infinity"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"Rectangle"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"                ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"fill"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(Color."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"red"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"                ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"frame"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"minWidth"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"maxWidth"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"infinity"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        }."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"padding"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"background"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(Color."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"white"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("p",null,"This produces the result we want regardless of screen size:"),Object(t.b)(c.a,{columns:2,mdxType:"FlowGrid"},Object(t.b)(m.a,{max:300,filename:"swiftui-columns-small.png",alt:"Red and blue squares filling space equally on a small screen",caption:"",mdxType:"CaptionedImage"}),Object(t.b)(m.a,{max:500,filename:"swiftui-columns-large.png",alt:"Red and blue squares filling space equally on a large screen",caption:"",mdxType:"CaptionedImage"})),Object(t.b)("p",null,"Hopefully this helps you simplify your SwiftUI code for when you only need to account for the common case of two columns 👍"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Sample code for this project is available at ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSwiftUIEqualWidthColumnsExample"}),"NGSwiftUIEqualWidthColumnExample"),".")),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-swiftui-two-columns-equal-width-mdx-6cb1af62f6db46bf86dd.js.map