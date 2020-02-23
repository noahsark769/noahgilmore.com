(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{f9xq:function(e,a,s){"use strict";s.r(a),s.d(a,"_frontmatter",(function(){return c})),s.d(a,"default",(function(){return i}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH");var c={},b={_frontmatter:c},p=n.a;function i(e){var a=e.components,s=function(e,a){if(null==e)return{};var s,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)s=c[t],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,["components"]);return Object(t.b)(p,Object.assign({},b,s,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"I spent ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1231387394189824000?s=20"}),"more time than I'd care to admit")," today trying to debug why my Github Actions workflow to automatically deploy new versions of noahgilmore.com on push to ",Object(t.b)("inlineCode",{parentName:"p"},"master")," was failing. The site is built on ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/"}),"Gatsby"),", and the pipeline runs ",Object(t.b)("inlineCode",{parentName:"p"},"gatsby build"),", but I was running into the following error on every push:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":""},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'Something went wrong installing the "sharp" module'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"Module did not self-register."),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'- Remove the "node_modules/sharp" directory, run "npm install" and look for errors'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"- Consult the installation documentation at https://sharp.pixelplumbing.com/en/stable/install/"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"- Search for this error at https://github.com/lovell/sharp/issues"))),Object(t.b)("p",null,"Given ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/gatsbyjs/gatsby/issues/18277"}),"how")," ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lovell/sharp/issues/1899"}),"many")," ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lovell/sharp/issues/2031"}),"different")," ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lovell/sharp/issues/952"}),"people")," ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lovell/sharp/issues/1936"}),"have")," ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lovell/sharp/issues/1983"}),"reported")," ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lovell/sharp/issues/2065"}),"symptoms")," ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/lovell/sharp/issues/1819"}),"of")," what looks like the same issue, I figured I'd shared what worked for my case."),Object(t.b)("p",null,"The root cause of this issue seems to be that folks are trying to run ",Object(t.b)("inlineCode",{parentName:"p"},"gatsby build")," with a version of node which is different than the one they installed ",Object(t.b)("inlineCode",{parentName:"p"},"sharp")," with. In my case, I used to have the workflow set up do deploy like this:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"yml"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"- "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"name"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"Build and Deploy")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"uses"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"JamesIves/github-pages-deploy-action@db4aacadf4db71778afb0c8a452382184a71d318")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"env"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),":")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"ACCESS_TOKEN"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"${{ secrets.ACCESS_TOKEN }}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"BRANCH"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"gh-pages")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"FOLDER"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"public")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"BUILD_SCRIPT"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"npm run gatsby-build")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"CNAME"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"noahgilmore.com")))),Object(t.b)("p",null,Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/JamesIves/github-pages-deploy-action"}),"github-pages-deploy-action")," is a great github action that automatically pushes a given local folder to your ",Object(t.b)("inlineCode",{parentName:"p"},"gh-pages")," branch to deploy via ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://pages.github.com/"}),"Github Pages"),". The version I was using ran everything in a Docker container and excuted the given ",Object(t.b)("inlineCode",{parentName:"p"},"BUILD_SCRIPT")," before pushing. I think this was the issue - that container most likely had a different version of node."),Object(t.b)("p",null,"The most recent release of this action gets rid of the ",Object(t.b)("inlineCode",{parentName:"p"},"BUILD_SCRIPT")," entirely, opting to let the workflow build its own folder first, and the action ",Object(t.b)("em",{parentName:"p"},"just")," takes care of pushing the build folder. The working workflow looks like this:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"yml"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"- "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"name"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"npm run gatsby-build")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"run"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"npm run gatsby-build")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"- "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"name"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"Build and Deploy")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"uses"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"JamesIves/github-pages-deploy-action@releases/v3")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"with"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),":")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"ACCESS_TOKEN"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"${{ secrets.ACCESS_TOKEN }}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"BRANCH"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"gh-pages")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"FOLDER"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"public")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"CNAME"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),"noahgilmore.com")))),Object(t.b)("p",null,"Single responsibilities make everything easier for everyone 👍"),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-installing-sharp-github-actions-mdx-a54929488f7457d03c17.js.map