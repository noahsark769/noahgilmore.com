(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{x9Rx:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return p})),s.d(e,"default",(function(){return i}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH"),c=s("Qjvx");var p={},b={_frontmatter:p},m=n.a;function i(a){var e=a.components,s=function(a,e){if(null==a)return{};var s,t,n={},c=Object.keys(a);for(t=0;t<c.length;t++)s=c[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,["components"]);return Object(t.b)(m,Object.assign({},b,s,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"After struggling for some time with ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/documentation/coreimage/cifilter"}),"CIFilter")," documentation at work, I've been ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1080580341973348352"}),"working on an app")," which can apply filters interactively for various inputs (another blog post to come on this later). As part of this app, I needed a UI for the user to select a color, and decided to implement a color wheel."),Object(t.b)("p",null,"There are several open source projects implementing color wheels on iOS, and StackOverflow has a ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/5108921/how-to-draw-a-color-wheel-in-objective-c"}),"few answers")," which mostly recommend drawing the color wheel image yourself by iterating over the ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/HSL_and_HSV"}),"Hue-Saturation-Lightness")," color representation. However, I managed to find ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"http://www.chibicode.org/?p=62"}),"this post")," about new CIFilters in iOS 10, which included a description of ",Object(t.b)("inlineCode",{parentName:"p"},"CIHueSaturationValueGradient"),", and realized we can use this filter to generate a color wheel much more easily."),Object(t.b)("h2",{id:"coreimage-has-color-wheels-built-in"},"CoreImage Has Color Wheels Built In"),Object(t.b)("p",null,"The description of ",Object(t.b)("inlineCode",{parentName:"p"},"CIHueSaturationValueGradient")," is:"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Generates a color wheel that shows hues and saturations for a specified value.")),Object(t.b)("p",null,"For a given value of lightness (0 is dark, 1 is light), this filter's output image will be a wheel of all the hues and saturations for that lightness in a given color space. Code that looks like this:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," filter = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CIFilter"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"name"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"CIHueSaturationValueGradient"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"parameters"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": [")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"inputColorSpace"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGColorSpaceCreateDeviceRGB"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(),")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"inputDither"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"inputRadius"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"160"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"inputSoftness"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"inputValue"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"])!")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," image = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIImage"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"ciImage"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": filter."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"outputImage"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"!)")))),Object(t.b)("p",null,"Generates an output image that looks like this:"),Object(t.b)(c.a,{max:"400",filename:"cifilter-colorwheel-1.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(t.b)("h2",{id:"details"},"Details"),Object(t.b)("p",null,"The filter takes five parameters:"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"inputColorSpace"),": This is a ",Object(t.b)("inlineCode",{parentName:"p"},"CGColorSpaceRef")," representing the color space in which to generate the wheel. Generally, you're going to want to use ",Object(t.b)("inlineCode",{parentName:"p"},"CGColorSpaceCreateDeviceRGB()")," for this, which will generate a wheel in the current device's color space."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"inputDither"),": The amount of ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Dither"}),"dither")," to apply to the wheel. I'm not exactly sure what this is useful for, but it can be fun to play around with. I also don't really know the units of this value, but I think it's pixels (if you can confirm, ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769"}),"let me know"),"). For example, here's a color wheel with ",Object(t.b)("inlineCode",{parentName:"p"},"inputDither")," as 300:"),Object(t.b)(c.a,{max:"400",filename:"cifilter-colorwheel-2.png",alt:"Color wheel with dither",caption:"",mdxType:"CaptionedImage"}),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"inputRadius"),": The value, ",Object(t.b)("em",{parentName:"p"},"in points"),", of the radius of the wheel. A radius of 160 creates an image which is 320x320 points square (640x640 pixels on a device with 2x screen scale)."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"inputSoftness"),": Specifies a softness value to smooth the gradient. A value of 0 means no smoothing, which is probably what you want for a color wheel. I'm also pretty sure the units here are pixels. Here's a color wheel with ",Object(t.b)("inlineCode",{parentName:"p"},"inputSoftness")," as 4:"),Object(t.b)(c.a,{max:"400",filename:"cifilter-colorwheel-3.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"inputValue"),": The lightness value. 0 creates a black wheel, 1 means full lightness. Here's a color wheel with ",Object(t.b)("inlineCode",{parentName:"p"},"inputValue")," as 0.5:"),Object(t.b)(c.a,{max:"400",filename:"cifilter-colorwheel-4.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(t.b)("h2",{id:"getting-the-color-on-touch"},"Getting The Color On Touch"),Object(t.b)("p",null,"I still needed to actually let the user select a color from the color wheel. Turns out there are tons of people online talking about how to get the color at a given touch location for a ",Object(t.b)("inlineCode",{parentName:"p"},"UIImageView"),". I ended up going with ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/12770181/how-to-get-the-pixel-color-on-touch"}),"this one")," which translated pretty well into an extension:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"extension"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"UIImageView"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"func"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"getPixelColorAt"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"point"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": CGPoint) -> UIColor {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," pixel = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"UnsafeMutablePointer"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"CUnsignedChar"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),">."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"allocate"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"capacity"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"4"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," colorSpace = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGColorSpaceCreateDeviceRGB"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," bitmapInfo = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGBitmapInfo"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"rawValue"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": CGImageAlphaInfo."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"premultipliedLast"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"rawValue"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," context = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGContext"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": pixel,")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"width"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"height"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"bitsPerComponent"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"8"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"bytesPerRow"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"4"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"space"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": colorSpace,")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"bitmapInfo"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": bitmapInfo."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"rawValue")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        )")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        context!."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"translateBy"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": -point."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"x"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"y"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": -point."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"y"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        layer."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"render"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"in"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": context!)")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," color = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIColor"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"red"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGFloat"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(pixel["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"]) / "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"255.0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"green"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGFloat"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(pixel["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"]) / "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"255.0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"blue"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGFloat"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(pixel["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"2"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"]) / "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"255.0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"alpha"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CGFloat"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(pixel["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"3"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"]) / "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"255.0")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        )")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        pixel."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"deallocate"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," color")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("h2",{id:"end-result"},"End Result"),Object(t.b)("p",null,"It ended up ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1087511576871981056"}),"working pretty well"),"! Adding a gesture recognizer to the imageView which calls ",Object(t.b)("inlineCode",{parentName:"p"},"getPixelColorAt(point:)")," allows us to easily determine the color that the user picked and render a simple UI to show the selected color:"),Object(t.b)(c.a,{max:"400",filename:"cifilter-colorwheel-5.png",alt:"Color wheel",caption:"",mdxType:"CaptionedImage"}),Object(t.b)("p",null,"All in all, this was a great exercise in figuring out the least complicated way to implement a complicated UI component, and I continue to learn about all the awesome stuff that CoreImage comes with out of the box (not just color wheels, but photo effects, blurs, distortions, etc)."),Object(t.b)("p",null,"More on CIFilters soon to come! 👋"),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-cifilter-colorwheel-mdx-86a2521c824239922429.js.map