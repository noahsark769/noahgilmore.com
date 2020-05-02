(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{KiL4:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return c})),s.d(e,"default",(function(){return p}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH");var c={},b={_frontmatter:c},m=n.a;function p(a){var e=a.components,s=function(a,e){if(null==a)return{};var s,t,n={},c=Object.keys(a);for(t=0;t<c.length;t++)s=c[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,["components"]);return Object(t.b)(m,Object.assign({},b,s,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"I use ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://gatsbyjs.org"}),"Gatsby")," as a static site generator to build this blog using React. As part of this, I wanted a simple component to display a static image, something like this:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"jsx"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Image"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"filename"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myimage.png"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"/>")))),Object(t.b)("p",null,"Surprisingly, this is hard to do in Gatsby. The default Image component generated by Gatsby uses ",Object(t.b)("inlineCode",{parentName:"p"},"StaticQuery"),":"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"jsx"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"import"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"Img"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"'gatsby-image'")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"const"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"Image"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = () "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"=>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," (")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"StaticQuery")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"query"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"graphql"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"`")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"      query {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {')),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"          childImageSharp {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"            fluid(maxWidth: 300) {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"              ...GatsbyImageSharpFluid")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"            }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"          }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"        }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"      }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"    `"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"render"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"=>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Img"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"fluid"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"placeholderImage"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"childImageSharp"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"fluid"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"/>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"/>")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(t.b)("p",null,"Simple enough - I figured I could make it customizable using props:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"jsx"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"const"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"Image"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"props"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"=>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," (")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"StaticQuery")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"query"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"graphql"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"`")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"      query {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"        placeholderImage: file(relativePath: { eq: "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"${"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"props"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"filename"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"})," }) {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"          childImageSharp {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"            fluid(maxWidth: 300) {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"              ...GatsbyImageSharpFluid")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"            }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"          }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"        }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"      }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"    `"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"render"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"=>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Img"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"fluid"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"placeholderImage"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"childImageSharp"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"fluid"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"/>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"/>")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(t.b)("p",null,"Unfortunately this doesn't actually work - ",Object(t.b)("inlineCode",{parentName:"p"},"StaticQuery")," is called \"Static\" because it's compiled and doesn't support string interpolation in its template literal. If you try to do this, you'll see an error like this on build:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"Error: BabelPluginRemoveGraphQL: String interpolations are not allowed in graphql fragments. Included fragments should be referenced as `...MyModule_foo`."))),Object(t.b)("p",null,"This behavior is ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/docs/static-query/"}),"documented")," by Gatsby, and that documentation notes that the alternative is to use a page query. I didn't want to put a query on every page with images though, so I started investigating other options."),Object(t.b)("p",null,"I came across ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://medium.freecodecamp.org/how-i-made-my-portfolio-website-blazing-fast-with-gatsby-82ccddc2f671"}),"this post")," by someone who had been doing some fancier image querying with Gatsby - they had the foresight to ",Object(t.b)("em",{parentName:"p"},"query all the images upfront")," by using the ",Object(t.b)("inlineCode",{parentName:"p"},"allFile")," query, and filter them down with props later. Based on that, I implemented the following component, which works great and includes all the fun functionality that ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-image/"}),"gatsby-image")," offers:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"jsx"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"import"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"Img"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"'gatsby-image'")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"const"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"Image"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = ("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"props"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"=>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," (")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"StaticQuery")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"query"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"graphql"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"`")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"      query {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"        images: allFile {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"          edges {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"            node {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"              relativePath")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"              name")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"              childImageSharp {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"                sizes(maxWidth: 600) {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"                  ...GatsbyImageSharpSizes")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"                }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"              }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"            }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"          }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"        }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"      }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"    `"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"render"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"=>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"const"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"image"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"images"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"edges"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"find"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"n"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"=>"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"n"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"node"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"relativePath"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"includes"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"props"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"filename"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),");")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      });")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," (!"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"image"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") { "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"null"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"; }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      ")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"const"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"imageSizes"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"image"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"node"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"childImageSharp"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"sizes"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),";")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," (")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"<"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Img")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"          "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"alt"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"props"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"alt"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"          "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"sizes"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"imageSizes"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"/>")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      );")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk17"}),"/>")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(t.b)("p",null,"Hopefully that snippet helps if you're trying to do something similar. If it does, ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769"}),"let me know")," 👋"),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-easy-gatsby-image-components-mdx-fc5cef99fdf8146d3941.js.map