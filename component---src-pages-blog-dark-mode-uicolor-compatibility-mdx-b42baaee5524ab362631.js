(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"LVU/":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return o}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var s=t("E/Ix"),n=t("1zrH"),c=t("Qjvx"),b=(t("5yWb"),t("D+Sk")),l=t("xHeK");var p={},i={_frontmatter:p},m=n.a;function o(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(s.b)(m,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Update (6/13/2019): The original version of this post featured the wrong colors in the ColorCompatibility enum at the end of the post. This has now been fixed.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Update (9/21/2019): The original version of this post included systemBrown, a color which was removed in the Xcode 11 GM. It also contained unnecessary availability checks in the code at the bottom (system colors like red, blue etc have been available since iOS 7). The code has been updated, and the tables in this post still list all system and element colors - even those which have been available for a while, since they're different in dark mode vs light mode. I also updated a reference to Mac Catalyst.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Update (10/5/2019): A previous version of this post included the wrong default colors in the ",Object(s.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," code at the bottom of the post. These have been updated - the defaults are now the light mode colors which are being used in production in ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}),"Trestle")," and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"CIFilter.io"),".")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Update (10/5/2019): In order to better support bug reporting on ColorCompatibility, I've released it as a library. The code now lives in ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/ColorCompatibility"}),"this GitHub repo"),". You can read more about it ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/blog/color-compatibility-pod"}),"here"),".")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Update (10/17/2019): A previous version of this post included the wrong color values in one of the example code blocks. This has now been fixed, but I'd recommend looking at the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/ColorCompatibility"}),"ColorCompatibility library")," if you're interested in using it in your own projects.")),Object(s.b)("p",null,"At WWDC 2019, Apple announced that Dark Mode would be supported on iOS 13. There are some significant changes to UIKit in order to support this - many of them are detailed in the talk ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/videos/play/wwdc2019/214/"}),"Implementing Dark Mode on iOS")," which I'd highly recommend watching."),Object(s.b)("p",null,"One of the changes that makes adopting Dark Mode so easy is the new system colors API from ",Object(s.b)("inlineCode",{parentName:"p"},"UIColor"),". On iOS 12 and older, you might have a label you want to make black, and it would work just fine - in fact, black was the default color for ",Object(s.b)("inlineCode",{parentName:"p"},"UILabel"),"s."),Object(s.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"label."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = UIColor."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"black")))),Object(s.b)("p",null,"But in Dark Mode, the background will also be black, which means the text won't be visible. In iOS 13+, it's better to use the new system color which will respect the user's color scheme preference:"),Object(s.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"label."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = UIColor."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"label")," is only one example: there are 24 new color scheme agnostic ",Object(s.b)("inlineCode",{parentName:"p"},"UIColor"),"s available in iOS 13+."),Object(s.b)("p",null,"Colors are organized into two groups:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"}),"Element Colors")," (e.g. ",Object(s.b)("inlineCode",{parentName:"li"},"label"),")"),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"}),"Standard Colors")," (",Object(s.b)("inlineCode",{parentName:"li"},"systemIndigo"),", ",Object(s.b)("inlineCode",{parentName:"li"},"systemGray3"),", etc).")),Object(s.b)("p",null,"iOS 13 has 23 new element colors (",Object(s.b)("inlineCode",{parentName:"p"},"label")," etc) and one new standard color (",Object(s.b)("inlineCode",{parentName:"p"},"systemIndigo"),"). However, even system colors that have been around for a while (like ",Object(s.b)("inlineCode",{parentName:"p"},"systemRed"),") have become dynamic in iOS 13 - they might actually be different colors in dark mode vs light mode."),Object(s.b)("p",null,"(Skip to the bottom if you'd like to see a list of the new colors.)"),Object(s.b)("h2",{id:"compatibility"},"Compatibility"),Object(s.b)("p",null,"These new colors are all well and good, but most of us with existing apps will still be supporting devices with iOS 12 or lower, at least for a while. This means we'll probably be doing a lot of things like this, using ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://docs.swift.org/swift-book/ReferenceManual/Attributes.html"}),"Swift's #available syntax"),":"),Object(s.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"#available"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"iOS"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"13"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"*"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    label."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"} "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"else"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    label."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"black")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,"It's a workable solution, but it necessitates changing a lot of code - an ",Object(s.b)("inlineCode",{parentName:"p"},"if")," statement for every custom label or background color! For ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"/blog/cifilterio"}),"CIFilter.io"),", I wondered if there was a better way. What if, instead of the ",Object(s.b)("inlineCode",{parentName:"p"},"if #available"),", there was a way to abstract the color choice down one level, so we could do something like this?"),Object(s.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"label."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"textColor"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ColorCompatibility."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")))),Object(s.b)("h2",{id:"generating-system-colors"},"Generating system colors"),Object(s.b)("p",null,"I wrote a ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSystemColorComparison"}),"small app")," (with SwiftUI, no less!) which displays all the system colors in the current color scheme."),Object(s.b)(b.a,{columns:2,mdxType:"FlowGrid"},Object(s.b)(c.a,{max:300,filename:"systemcolors-light.png",alt:"System colors (light mode)",caption:"Light mode",mdxType:"CaptionedImage"}),Object(s.b)(c.a,{max:300,filename:"systemcolors-dark.png",alt:"System colors (dark mode)",caption:"Dark mode",mdxType:"CaptionedImage"})),Object(s.b)("p",null,"This app collects all the ",Object(s.b)("inlineCode",{parentName:"p"},"UIColor")," objects - once we have those, we can use their red/green/blue/alpha components to ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSystemColorComparison/blob/master/NGSystemColorComparison/SystemColors.swift#L102"}),"generate the implementation")," of ",Object(s.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," that we want:"),Object(s.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"enum"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"ColorCompatibility"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"static"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," label: UIColor {")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"#available"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"iOS"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"13"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"*"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," ."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"label")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        }")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIColor"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"red"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.0"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"green"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.0"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"blue"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.0"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"alpha"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1.0"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"static"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," secondaryLabel: UIColor {")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"#available"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"iOS"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"13"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"*"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," ."),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"secondaryLabel")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        }")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIColor"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"red"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.23529411764705882"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"green"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.23529411764705882"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"blue"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.2627450980392157"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"alpha"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0.6"),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// ... 21 more definitions: full code in the link at the bottom")),"\n",Object(s.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,"We can then use ",Object(s.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," it to set any colors we need."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: we can't use ",Object(s.b)("inlineCode",{parentName:"p"},"@available")," for these checks, since it doesn't provide a way to check if the current environment is ",Object(s.b)("em",{parentName:"p"},"less")," than a specific app version.")),Object(s.b)("h2",{id:"conclusion"},"Conclusion"),Object(s.b)("p",null,"This approach has some great advantages:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"This code will compile on iOS 13+, iOS 12 and earlier, and Catalyst ✅"),Object(s.b)("li",{parentName:"ol"},"Since everything is a computed ",Object(s.b)("inlineCode",{parentName:"li"},"var"),", we never pre-store colors, which means that when the user switches color scheme, our app will automatically adapt as the trait collection changes 👍"),Object(s.b)("li",{parentName:"ol"},"When we drop iOS 12 support, cleaning this up will be as simple as replacing every instance of ",Object(s.b)("inlineCode",{parentName:"li"},"ColorCompatibility")," with ",Object(s.b)("inlineCode",{parentName:"li"},"UIColor")," 🎉")),Object(s.b)("p",null,"Hopefully this makes your app's transition to dark mode easier!"),Object(s.b)("p",null,"If you're interested in dark mode and new UIColor apis, you can ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",Object.assign({parentName:"strong"},{href:"https://twitter.com/noahsark769"}),"follow me on Twitter"))," as I continue to play around with these new iOS technologies."),Object(s.b)("h2",{id:"table-of-system-colors"},"Table of system colors"),Object(s.b)("p",null,"For those interested in iOS 13+ system colors but not wanting (or not able) to compile the sample app, here's a list of the system colors in light and dark mode, with their hex codes and RGBA values:"),Object(s.b)(l.a,{mdxType:"IOS13SystemColorTable"}),Object(s.b)("h2",{id:"colorcompatibility-full-code"},"ColorCompatibility full code"),Object(s.b)("p",null,"The full, generated implementation of ",Object(s.b)("inlineCode",{parentName:"p"},"ColorCompatibility"),", which is used by ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}),"Trestle")," and ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"CIFilter.io"),", is available ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/ColorCompatibility"}),"here"),"."),Object(s.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-dark-mode-uicolor-compatibility-mdx-b42baaee5524ab362631.js.map