(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{240:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return r}),t.d(a,"default",function(){return m});t(9),t(10),t(5),t(13),t(22),t(0);var n=t(84),s=t(273),i=t(18),o=(t(46),t(35)),c=t(82);var r={},l={_frontmatter:r},p=s.a;function m(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(p,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Update (6/13/2019): The original version of this post featured the wrong colors in the ColorCompatibility enum at the end of the post. This has now been fixed.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Update (9/21/2019): The original version of this post included systemBrown, a color which was removed in the Xcode 11 GM. It also contained unnecessary availability checks in the code at the bottom (system colors like red, blue etc have been available since iOS 7). The code has been updated, and the tables in this post still list all system and element colors - even those which have been available for a while, since they're different in dark mode vs light mode. I also updated a reference to Mac Catalyst.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Update (10/5/2019): A previous version of this post included the wrong default colors in the ",Object(n.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," code at the bottom of the post. These have been updated - the defaults are now the light mode colors which are being used in production in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}),"Trestle")," and ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"CIFilter.io"),".")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Update (10/5/2019): In order to better support bug reporting on ColorCompatibility, I've released it as a library. The code now lives in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/ColorCompatibility"}),"this GitHub repo"),". You can read more about it ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/blog/color-compatibility-pod"}),"here"),".")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Update (10/17/2019): A previous version of this post included the wrong color values in one of the example code blocks. This has now been fixed, but I'd recommend looking at the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/ColorCompatibility"}),"ColorCompatibility library")," if you're interested in using it in your own projects.")),Object(n.b)("p",null,"At WWDC 2019, Apple announced that Dark Mode would be supported on iOS 13. There are some significant changes to UIKit in order to support this - many of them are detailed in the talk ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/videos/play/wwdc2019/214/"}),"Implementing Dark Mode on iOS")," which I'd highly recommend watching."),Object(n.b)("p",null,"One of the changes that makes adopting Dark Mode so easy is the new system colors API from ",Object(n.b)("inlineCode",{parentName:"p"},"UIColor"),". On iOS 12 and older, you might have a label you want to make black, and it would work just fine - in fact, black was the default color for ",Object(n.b)("inlineCode",{parentName:"p"},"UILabel"),"s."),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"label."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = UIColor."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"black")))),Object(n.b)("p",null,"But in Dark Mode, the background will also be black, which means the text won't be visible. In iOS 13+, it's better to use the new system color which will respect the user's color scheme preference:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"label."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = UIColor."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")))),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"label")," is only one example: there are 24 new color scheme agnostic ",Object(n.b)("inlineCode",{parentName:"p"},"UIColor"),"s available in iOS 13+."),Object(n.b)("p",null,"Colors are organized into two groups:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"}),"Element Colors")," (e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"label"),")"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"}),"Standard Colors")," (",Object(n.b)("inlineCode",{parentName:"li"},"systemIndigo"),", ",Object(n.b)("inlineCode",{parentName:"li"},"systemGray3"),", etc).")),Object(n.b)("p",null,"iOS 13 has 23 new element colors (",Object(n.b)("inlineCode",{parentName:"p"},"label")," etc) and one new standard color (",Object(n.b)("inlineCode",{parentName:"p"},"systemIndigo"),"). However, even system colors that have been around for a while (like ",Object(n.b)("inlineCode",{parentName:"p"},"systemRed"),") have become dynamic in iOS 13 - they might actually be different colors in dark mode vs light mode."),Object(n.b)("p",null,"(Skip to the bottom if you'd like to see a list of the new colors.)"),Object(n.b)("h2",null,"Compatibility"),Object(n.b)("p",null,"These new colors are all well and good, but most of us with existing apps will still be supporting devices with iOS 12 or lower, at least for a while. This means we'll probably be doing a lot of things like this, using ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.swift.org/swift-book/ReferenceManual/Attributes.html"}),"Swift's #available syntax"),":"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"#available"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"iOS"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"13"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"*"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    label."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"} "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"else"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    label."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"black")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(n.b)("p",null,"It's a workable solution, but it necessitates changing a lot of code - an ",Object(n.b)("inlineCode",{parentName:"p"},"if")," statement for every custom label or background color! For ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/blog/cifilterio"}),"CIFilter.io"),", I wondered if there was a better way. What if, instead of the ",Object(n.b)("inlineCode",{parentName:"p"},"if #available"),", there was a way to abstract the color choice down one level, so we could do something like this?"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"label."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ColorCompatibility."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")))),Object(n.b)("h2",null,"Generating system colors"),Object(n.b)("p",null,"I wrote a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSystemColorComparison"}),"small app")," (with SwiftUI, no less!) which displays all the system colors in the current color scheme."),Object(n.b)(o.a,{columns:2,mdxType:"FlowGrid"},Object(n.b)(i.a,{max:300,filename:"systemcolors-light.png",alt:"System colors (light mode)",caption:"Light mode",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"systemcolors-dark.png",alt:"System colors (dark mode)",caption:"Dark mode",mdxType:"CaptionedImage"})),Object(n.b)("p",null,"This app collects all the ",Object(n.b)("inlineCode",{parentName:"p"},"UIColor")," objects - once we have those, we can use their red/green/blue/alpha components to ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSystemColorComparison/blob/master/NGSystemColorComparison/SystemColors.swift#L102"}),"generate the implementation")," of ",Object(n.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," that we want:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"enum"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"ColorCompatibility"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"static"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," label: UIColor {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"#available"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"iOS"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"13"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"*"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," ."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        }")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIColor"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"red"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.0"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"green"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.0"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"blue"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.0"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"alpha"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1.0"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"static"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," secondaryLabel: UIColor {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"#available"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"iOS"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"13"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"*"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," ."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"secondaryLabel")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        }")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIColor"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"red"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.23529411764705882"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"green"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.23529411764705882"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"blue"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.2627450980392157"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"alpha"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.6"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// ... 21 more definitions: full code in the link at the bottom")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(n.b)("p",null,"We can then use ",Object(n.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," it to set any colors we need."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: we can't use ",Object(n.b)("inlineCode",{parentName:"p"},"@available")," for these checks, since it doesn't provide a way to check if the current environment is ",Object(n.b)("em",{parentName:"p"},"less")," than a specific app version.")),Object(n.b)("h2",null,"Conclusion"),Object(n.b)("p",null,"This approach has some great advantages:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"This code will compile on iOS 13+, iOS 12 and earlier, and Catalyst ✅"),Object(n.b)("li",{parentName:"ol"},"Since everything is a computed ",Object(n.b)("inlineCode",{parentName:"li"},"var"),", we never pre-store colors, which means that when the user switches color scheme, our app will automatically adapt as the trait collection changes 👍"),Object(n.b)("li",{parentName:"ol"},"When we drop iOS 12 support, cleaning this up will be as simple as replacing every instance of ",Object(n.b)("inlineCode",{parentName:"li"},"ColorCompatibility")," with ",Object(n.b)("inlineCode",{parentName:"li"},"UIColor")," 🎉")),Object(n.b)("p",null,"Hopefully this makes your app's transition to dark mode easier!"),Object(n.b)("h2",null,"Table of system colors"),Object(n.b)("p",null,"For those interested in iOS 13+ system colors but not wanting (or not able) to compile the sample app, here's a list of the system colors in light and dark mode, with their hex codes and RGBA values:"),Object(n.b)(c.a,{mdxType:"IOS13SystemColorTable"}),Object(n.b)("h2",null,"ColorCompatibility full code"),Object(n.b)("p",null,"The full, generated implementation of ",Object(n.b)("inlineCode",{parentName:"p"},"ColorCompatibility"),", which is used by ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}),"Trestle")," and ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"CIFilter.io"),", is available ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/ColorCompatibility"}),"here"),"."),Object(n.b)("style",{className:"vscode-highlight-styles"},".dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }"))}m.isMDXComponent=!0},261:function(e,a,t){"use strict";t.d(a,"d",function(){return h}),t.d(a,"b",function(){return O}),t.d(a,"c",function(){return u}),t.d(a,"g",function(){return j}),t.d(a,"e",function(){return f}),t.d(a,"f",function(){return N}),t.d(a,"a",function(){return k});var n=t(2),s=t(263),i=t.n(s),o=t(264),c=t.n(o),r=t(265),l=t.n(r),p=t(266),m=t.n(p);function b(){var e=g(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n            url('","') format('woff'),\n            url('","') format('truetype'),\n            url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    @media (prefers-color-scheme: dark) {\n        html, body {\n            background-color: #2b2c2f;\n        }\n    }\n"]);return b=function(){return e},e}function d(){var e=g(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return d=function(){return e},e}function g(e,a){return a||(a=e.slice(0)),e.raw=a,e}var h=Object(n.a)(d(),i.a,i.a,c.a,l.a,m.a),O=Object(n.a)(b(),i.a,i.a,c.a,l.a,m.a),u=n.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),j=(n.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),n.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),f=n.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),N=n.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),k=n.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},263:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},264:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},265:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},266:function(e,a,t){e.exports=t.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},267:function(e,a,t){"use strict";var n=t(0),s=t.n(n),i=t(261),o=t(66),c=t(2),r=t(271),l=t(272),p=c.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),m=c.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),b=Object(c.c)(i.g).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),d=Object(c.c)(i.e).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),g=Object(c.c)(i.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],o.a,o.b);a.a=function(e){return s.a.createElement(p,null,s.a.createElement(m,null,s.a.createElement(g,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),s.a.createElement(b,null,s.a.createElement(d,null,s.a.createElement(g,{"aria-label":"Blog Home",href:"/blog"},s.a.createElement(r.b,{color:o.a,size:"24"}))),s.a.createElement(d,null,s.a.createElement(g,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},s.a.createElement(l.a,{color:o.a,size:"24"}))),s.a.createElement(d,null,s.a.createElement(g,{"aria-label":"App Store",href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},s.a.createElement(r.a,{color:o.a,size:"24"})))))}},268:function(e,a,t){"use strict";t.d(a,"a",function(){return c}),t.d(a,"b",function(){return m});var n=t(0),s=t.n(n),i=t(2),o=t(262);var c=i.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:",";margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.isCompressed?"700px":"1600px"},function(e){return e.darkened&&Object(i.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),r=i.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),l=i.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),p=i.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),m=function(e){return s.a.createElement("div",null,s.a.createElement(o.Helmet,null,s.a.createElement("title",null,e.title)),s.a.createElement(r,null,s.a.createElement(l,null,e.title),s.a.createElement(p,null,e.date)))};s.a.Component},269:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(0),s=t.n(n);var i=t(2).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;padding:3px 5px;margin:0px 2px;@media (prefers-color-scheme:dark){color:#fff;}}code:not(.vscode-highlight-code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;margin-top:10px;border:1px solid #e5e4e1;border-radius:2px;@media all and (max-width:600px){width:100%;margin:10px auto 0 auto;border-left:none;border-right:none;border-radius:0;overflow-x:scroll;}}pre > code{display:block;margin:0;padding:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),o=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return s.a.createElement(i,null,this.props.children)},n}(s.a.Component)},270:function(e,a,t){"use strict";function n(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}t.d(a,"a",function(){return n})},273:function(e,a,t){"use strict";t(114);var n=t(0),s=t.n(n),i=t(262),o=t(261),c=t(267),r=t(2),l=t(271),p=t(272),m=t(66);var b=r.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),d=r.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],m.a,m.b,function(e){return e.margin&&Object(r.b)(["margin-right:20px;"])}),g=function(e){return s.a.createElement(o.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},s.a.createElement(d,{margin:e.margin},e.children))},h=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e,a=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return s.a.createElement(b,null,s.a.createElement(g,{label:"Twitter",url:a,newTab:!0,margin:!0},s.a.createElement(p.a,{size:24,color:"white"})),s.a.createElement(g,{label:"Blog homepage",url:"/blog"},s.a.createElement(l.b,{size:24,color:"white"})))},n}(s.a.Component),O=t(268),u=t(269),j=t(270),f=t(46);var N=r.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),k=function(e){var a,t;function n(){return e.apply(this,arguments)||this}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var i=n.prototype;return i.render=function(){return s.a.createElement(N,null,s.a.createElement("div",{id:"disqus_thread"}))},i.componentDidMount=function(){var e,a;e=document,(a=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",a.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(a)},n}(s.a.Component),w=t(115),y=t.n(w);t.d(a,"a",function(){return S});var v=r.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),x=r.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),C=r.c.div.withConfig({displayName:"BlogPageLayout__InstabugContainer",componentId:"sc-118ribu-2"})(["min-width:430px;margin-left:60px;@media all and (max-width:1200px){display:none;}"]),E=r.c.div.withConfig({displayName:"BlogPageLayout__InstabugInner",componentId:"sc-118ribu-3"})([""]),_=r.c.div.withConfig({displayName:"BlogPageLayout__PostContainerOuter",componentId:"sc-118ribu-4"})(["display:flex;flex-direction:row;padding:",";@media all and (max-width:1200px){padding:0;}"],function(e){return e.hasPadding?"20px":"0"}),I=r.c.div.withConfig({displayName:"BlogPageLayout__PostContainerInner",componentId:"sc-118ribu-5"})(["display:block;flex-direction:column;width:100%;"]),S=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={isShowingInstabug:!0},t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.handleInstabugHide=function(){this.setState({isShowingInstabug:!1})},r.render=function(){var e=this,a="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return s.a.createElement(v,null,s.a.createElement(o.b,null),s.a.createElement(i.Helmet,null,s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!a&&s.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),a&&s.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),s.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),s.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),s.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),s.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),s.a.createElement(c.a,{blog:!0}),s.a.createElement(O.a,{isCompressed:!this.state.isShowingInstabug||!this.props.pageContext.frontmatter.instabugEnabled},s.a.createElement(_,{hasPadding:this.state.isShowingInstabug&&this.props.pageContext.frontmatter.instabugEnabled},s.a.createElement(I,null,s.a.createElement(x,null,s.a.createElement(O.b,{title:this.props.pageContext.frontmatter.title,date:Object(j.a)(this.props.pageContext.frontmatter.date)})),s.a.createElement(u.a,null,this.props.children),s.a.createElement(x,null,s.a.createElement(h,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),s.a.createElement(k,null))),this.state.isShowingInstabug&&this.props.pageContext.frontmatter.instabugEnabled&&s.a.createElement(C,null,s.a.createElement(E,null,s.a.createElement(f.a,{onHide:function(){return e.handleInstabugHide()}}))))))},r.componentDidMount=function(){y.a.initialize("UA-35325391-1"),y.a.pageview(window.location.pathname+window.location.search)},n}(s.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-dark-mode-uicolor-compatibility-mdx-274da38669d6d853c40a.js.map