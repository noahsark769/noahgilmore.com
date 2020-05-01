(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{C36M:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return c})),s.d(e,"default",(function(){return m}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH");var c={},b={_frontmatter:c},p=n.a;function m(a){var e=a.components,s=function(a,e){if(null==a)return{};var s,t,n={},c=Object.keys(a);for(t=0;t<c.length;t++)s=c[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,["components"]);return Object(t.b)(p,Object.assign({},b,s,{components:e,mdxType:"MDXLayout"}),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Update (4/27/2020): 4 years after writing this article, I realized that it could be improved on a little bit. Added info about the recommended way to override equality for NSObjects, and a note about how Swiftlint has a rule to handle this.")),Object(t.b)("p",null,"Swift can be tricky sometimes. For example, what does the following print?"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"class"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"A"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": NSObject {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," x: "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Int")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"init"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Int"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = x")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"func"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"=="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"left"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": A, "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"right"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": A) -> "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Bool"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," left."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," == right."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"A"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") == "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"A"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"))")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"A"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")] == ["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"A"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")])")))),Object(t.b)("p",null,"Perhaps surprisingly, it's this:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"true"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"false // huh?!"))),Object(t.b)("h3",{id:"equatable-conformance-is-hard"},"Equatable conformance is hard"),Object(t.b)("p",null,"Why does comparing two arrays with equal contents return false? It turns out that:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Array is bridged to NSArray"),Object(t.b)("li",{parentName:"ul"},"NSArray doesn't declare a ",Object(t.b)("inlineCode",{parentName:"li"},"==(_:_:)")," function, so it falls back to NSObject's ",Object(t.b)("inlineCode",{parentName:"li"},"==(_:_:)"),", which calls ",Object(t.b)("inlineCode",{parentName:"li"},"isEqual")),Object(t.b)("li",{parentName:"ul"},"NSArray's ",Object(t.b)("inlineCode",{parentName:"li"},"isEqual")," ",Object(t.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/apple/swift-corelibs-foundation/blob/0cbb3225660752987a6c2cf672886fca434d3b1d/Foundation/NSArray.swift#L310"}),"compares objects by casting to AnyHashable"))),Object(t.b)("p",null,"We can see that this is the problem by casting the objects to ",Object(t.b)("inlineCode",{parentName:"p"},"AnyHashable")," before comparing them:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"A"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") as "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"AnyHashable"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," == "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"A"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") as "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"AnyHashable"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"false"))),Object(t.b)("p",null,"Apparently, doing this will use the NSObject implementation of ",Object(t.b)("inlineCode",{parentName:"p"},"==(_:_:)")," rather than the ",Object(t.b)("inlineCode",{parentName:"p"},"A")," one. The NSObject implementation of ",Object(t.b)("inlineCode",{parentName:"p"},"==(_:_:)")," checks isEqual, which returns false because the two elements aren't the same in memory. We can see this by adding an override:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"class"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"B"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": NSObject {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," x: "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Int")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"init"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Int"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = x")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"override"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"func"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"isEqual"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"_"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"object"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Any"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"?) -> "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Bool"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"isEqual for B"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"super"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"isEqual"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(object)")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"func"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"=="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"left"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": B, "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"right"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": B) -> "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Bool"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"== for B"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," left."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," == right."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("p",null,"Then,"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"B"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")] == ["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"B"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")])")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"isEqual for B"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"false"))),Object(t.b)("h3",{id:"the-fix"},"The fix"),Object(t.b)("p",null,"The best way to make an NSObject subclass use custom equality inside an array is to override isEqual:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"class"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"C"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": NSObject {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," x: "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Int")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"init"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Int"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = x")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"override"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"func"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"isEqual"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"_"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"object"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Any"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"?) -> "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Bool"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"guard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," object = object as? C "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"else"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," { "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"false"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," object."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," == "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"C"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")] == ["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"C"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")])")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"true"))),Object(t.b)("p",null,"Of course, if we defined ",Object(t.b)("inlineCode",{parentName:"p"},"A")," as a ",Object(t.b)("inlineCode",{parentName:"p"},"struct")," or a regular ",Object(t.b)("inlineCode",{parentName:"p"},"class")," in the first place, there won't be ",Object(t.b)("inlineCode",{parentName:"p"},"==(_:_:)")," defined for ",Object(t.b)("inlineCode",{parentName:"p"},"[A]"),", which means the compiler would catch our mistake instead of falling back to something that might not work correctly."),Object(t.b)("p",null,"If you use Swiftlint, there's actually a rule you can use to prefer the recommended way of overriding ",Object(t.b)("inlineCode",{parentName:"p"},"isEqual"),": ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://realm.github.io/SwiftLint/nsobject_prefer_isequal.html"}),"nsobject_prefer_isequal"),". Highly recommended!"),Object(t.b)("p",null,"A working playground with the code from this post can be found ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/code-examples/blob/ed9df41aae709eaeb4e334e3e9a5b1a650deef4d/swift/swift-nsobject-equatable.playground/Contents.swift"}),"here"),"."),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-nsobject-equatable-mdx-b675a04fac276c5a7eda.js.map