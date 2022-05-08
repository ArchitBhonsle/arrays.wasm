(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[710],{3905:function(n,t,e){"use strict";e.d(t,{Zo:function(){return d},kt:function(){return h}});var a=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=a.createContext({}),c=function(n){var t=a.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):s(s({},t),n)),e},d=function(n){var t=c(n.components);return a.createElement(l.Provider,{value:t},n.children)},m={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),p=c(e),h=o,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return e?a.createElement(u,s(s({ref:t},d),{},{components:e})):a.createElement(u,s({ref:t},d))}));function h(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=e.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var c=2;c<r;c++)s[c]=e[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},2132:function(n,t,e){"use strict";e.r(t),e.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=e(2122),o=e(9756),r=(e(7294),e(3905)),s=["components"],i={title:"FloatsMatrix"},l=void 0,c={unversionedId:"Matrices/FloatsMatrix",id:"Matrices/FloatsMatrix",isDocsHomePage:!1,title:"FloatsMatrix",description:"FloatsMatrix is an two dimensional array or a matrix of 64-bit floats.",source:"@site/docs/03-Matrices/03-FloatsMatrix.md",sourceDirName:"03-Matrices",slug:"/Matrices/FloatsMatrix",permalink:"/arrays.wasm/Matrices/FloatsMatrix",editUrl:"https://github.com/ArchitBhonsle/arrays.wasm/edit/master/docs/docs/03-Matrices/03-FloatsMatrix.md",version:"current",sidebarPosition:3,frontMatter:{title:"FloatsMatrix"},sidebar:"tutorialSidebar",previous:{title:"IntegersMatrix",permalink:"/arrays.wasm/Matrices/IntegersMatrix"},next:{title:"StringsMatrix",permalink:"/arrays.wasm/Matrices/StringsMatrix"}},d=[{value:"Constructors Methods",id:"constructors-methods",children:[]},{value:"Interop Methods",id:"interop-methods",children:[]},{value:"Utility Methods",id:"utility-methods",children:[]},{value:"Iteration Methods",id:"iteration-methods",children:[]},{value:"Math Methods",id:"math-methods",children:[]},{value:"Statistical Methods",id:"statistical-methods",children:[]},{value:"Random Methods",id:"random-methods",children:[]}],m={toc:d};function p(n){var t=n.components,e=(0,o.Z)(n,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"FloatsMatrix is an two dimensional array or a matrix of 64-bit floats."),(0,r.kt)("p",null,"The following scripts assume that you have imported the ",(0,r.kt)("inlineCode",{parentName:"p"},"FloatsMatrix")," object\nfrom the package and set up the threads as explained in ",(0,r.kt)("a",{parentName:"p",href:"../"},"getting started"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some of these have a ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," variant. ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," variant returns a FloatsVector by\napplying the operation row-wise. ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," variant returns a FloatsVector by applying\nthe operation on each column-wise."))),(0,r.kt)("h2",{id:"constructors-methods"},"Constructors Methods"),(0,r.kt)("p",null,"These methods are used to create new ",(0,r.kt)("inlineCode",{parentName:"p"},"FloatsMatrix"),"s."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Random constructors are in the ",(0,r.kt)("a",{parentName:"p",href:"#random-methods"},"random section"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Create a FloatsMatrix from a given JavaScript array\nconst a = new FloatsMatrix([\n  [0.1, 0.2, 0.3],\n  [0.5, 0.6, 0.7],\n]);\nconsole.log(a.data); // [[0.1, 0.2, 0.3], [0.5, 0.6, 0.7]]\n")),(0,r.kt)("h2",{id:"interop-methods"},"Interop Methods"),(0,r.kt)("p",null,"Some handy methods to work with the array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const a = new FloatsMatrix([\n  [0.1, 0.2, 0.3],\n  [0.5, 0.6, 0.7],\n]);\n\n// Both toJSON and data return a JavaScript array representation of the\n// FloatsMatrix\nconsole.log(a.toJSON()); // [[0.1, 0.2, 0.3], [0.5, 0.6, 0.7]]\nconsole.log(a.data); // [[0.1, 0.2, 0.3], [0.5, 0.6, 0.7]]\n\n// This returns the data and metadata about the FloatsMatrix\nconsole.log(a.toString());\n// "[[0.1, 0.2, 0.3], [0.5, 0.6, 0.7]], shape=[2, 3], strides=[3, 1], layout=Cc (0x5), const ndim=2"\n\n// It returns clone of the FloatsMatrix\nconst b = a.clone();\nconsole.log(b.data); // [[0.1, 0.2, 0.3], [0.5, 0.6, 0.7]]\n')),(0,r.kt)("h2",{id:"utility-methods"},"Utility Methods"),(0,r.kt)("p",null,"Basic getters and setters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const x = new FloatsMatrix([\n  [0.1, 0.2, 0.3],\n  [0.5, 0.6, 0.7],\n]);\n\n// Get the number of rows in the FloatsMatrix\nconsole.log(x.nrows()); // 2\n\n// Get the number of columns in the FloatsMatrix\nconsole.log(x.ncols()); // 3\n\n// Get the shape of the FloatsMatrix\nconsole.log(x.shape()); // [2, 3]\n\n// Set the given value at the specified index\nconsole.log(x.get([0, 1])); // 0.2\n\n// Get the value at the specified index\nx.setR(1, new FloatsVector([0.8, 0.9, 1.0]));\nconsole.log(x.data);\n// [[0.1, 0.2, 0.3],\n//  [0.9, 0.8, 1]]\n\n// Swap the values at the specified indices\nx.swapC(0, 1);\nconsole.log(x.data);\n// [[0.1, 0.2, 0.3],\n//  [0.9, 0.8, 1]]\n")),(0,r.kt)("p",null,"More complex methods used to manipulate the ",(0,r.kt)("inlineCode",{parentName:"p"},"FloatsMatrix"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Each of these methods has two versions. The "pure" version returns the result of\nperforming the operation while the "impure" version actually changes the array.'),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"append -> appended"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"extend -> extended"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"insert -> inserted"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"splice -> spliced")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const a = new FloatsMatrix([\n  [0.1, 0.2, 0.3],\n  [0.5, 0.6, 0.7],\n]);\nconst b = new FloatsMatrix([\n  [0.8, 0.9, 1.0],\n  [1.1, 1.2, 1.3],\n]);\n\n// Append an element to the FloatsMatrix\nconsole.log(a.appendedR(new FloatsVector([1.4, 1.5, 1.6])).data);\n// [[0.1, 0.2, 0.3],\n//  [0.5, 0.6, 0.7],\n//  [1.4, 1.5, 1.6]]\n\n// Extend the FloatsMatrix with another\nconsole.log(a.extendedC(b).data);\n// [[0.1, 0.2, 0.3, 0.8, 0.9, 1.0],\n//  [0.5, 0.6, 0.7, 1.1, 1.2, 1.3]]\n\n// Insert the given element at the specified index\nconsole.log(a.insertedR(1, new FloatsVector([1.4, 1.5, 1.6])).data);\n// [[0.1, 0.2, 0.3],\n//  [1.4, 1.5, 1.6],\n//  [0.5, 0.6, 0.7]]\n\n// Removes an element from the specified index\nconst [spliced, column] = a.splicedC(1);\nconsole.log(spliced.data, column.data);\n// [[0.1, 0.3],\n//  [0.5, 0.7]]\n//\n// [0.2, 0.6]\n")),(0,r.kt)("h2",{id:"iteration-methods"},"Iteration Methods"),(0,r.kt)("p",null,"These methods allow you to perform element-wise operations on the matrix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const a = new FloatsMatrix([[0.1, 0.2], [0.3, 0.4]]);\n\nconst b = a.map(x => x * 3);\nconsole.log(b.data);\n// [[0.30000000000000004, 0.6000000000000001],\n//  [0.8999999999999999, 1.2000000000000002]]\n\na.forEach(x => console.log(x));\n// 0.1\n// 0.2\n// 0.3\n// 0.4\n\na.transform(x => x * x);\nconsole.log(a.data);\n// [[0.010000000000000002, 0.04000000000000001],\n//  [0.09, 0.16000000000000003]],\n")),(0,r.kt)("h2",{id:"math-methods"},"Math Methods"),(0,r.kt)("p",null,"Methods to perform simple mathematical operations on the array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const a = new FloatsMatrix([\n  [0.1, 0.2, 0.3],\n  [0.5, 0.6, 0.7],\n]);\nconst b = new FloatsMatrix([\n  [0.8, 0.9, 1.0],\n  [1.1, 1.2, 1.6],\n]);\n\n// Perform element-wise addition of two FloatsMatrices\nconsole.log(a.add(b).data);\n// [[0.9, 1.1, 1.3],\n//  [1.6, 1.7999999999999998, 2.3]]\n\n// Perform element-wise subtraction of two FloatsMatrices\nconsole.log(a.sub(b).data);\n// [[0.9, 1.1, 1.3],\n//  [1.6, 1.7999999999999998, 2.3]]\n\n// Perform element-wise multiplication of two FloatsMatrices\nconsole.log(a.mul(b).data);\n// [[0.08000000000000002, 0.18000000000000002, 0.3],\n//  [0.55, 0.72, 1.1199999999999999]]\n\n// Perform element-wise division of two FloatsMatrices\nconsole.log(b.div(a).data);\n// [[8, 4.5, 3.3333333333333335],\n//  [2.2, 2, 2.285714285714286]]\n\n// Transposes the FloatsMatrix. That is it exchanges the rows and columns.\n// a.tranposed() will return the result of performing the operations\nb.transpose();\nconsole.log(b.data);\n// [[0.8, 1.1],\n//  [0.9, 1.2],\n//  [1, 1.6]]\n\n// Performs dot product of the two FloatsMatrices\nconsole.log(a.dot(b).data);\n// [[0.56, 0.83],\n//  [1.6400000000000001, 2.3899999999999997]]\n\n// Return the addition or product of the FloatsMatrices\nconsole.log(a.sum()); // 2.4000000000000004\nconsole.log(b.product()); // 1.5206400000000002\n\n// Efficiently perform in-place element-wise scaled addition of two FloatsMatrices\na.scaledAdd(2, b.transposed());\nconsole.log(a.data);\n// [[1.7000000000000002, 2, 2.3],\n//  [2.7, 3, 3.9000000000000004]]\n")),(0,r.kt)("h2",{id:"statistical-methods"},"Statistical Methods"),(0,r.kt)("p",null,"Methods to perform basic statistical operations."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All of these methods has a ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," and normal variant. ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," variant returns a\nFloatsVector by applying the operation on each row. ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," variant returns a\nFloatsVector by applying the operation on each column."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const a = new FloatsMatrix([\n  [0.1, 0.2, 0.3],\n  [0.4, 0.5, 0.6],\n]);\n\n// Return the minimum element in the array\nconsole.log(a.min()); // 0.1\n\n// Return the minimum element in each row\nconsole.log(a.maxR().data); // [0.3, 0.6]\n\n// Returns the mean of each column\nconsole.log(a.meanC().data); // [0.25, 0.35, 0.44999999999999996]\n\n// Return the standard deviation in each row\nconsole.log(a.stdR(0).data); // [0.0816496580927726, 0.08164965809277258]\n\n// Return the variance of the array\nconsole.log(a.varC(1).data); // [0.04500000000000001, 0.045000000000000005, 0.045000000000000005]\n")),(0,r.kt)("h2",{id:"random-methods"},"Random Methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const a = FloatsMatrix.newWithRandom([3, 2]);\nconsole.log(a.data);\n// [[0.40888454798641727, 0.3739993633147044],\n//  [0.08152247640640187, 0.8203409920415033],\n//  [0.29456711455073004, 0.6857528913804324]],\n\nconst b = FloatsMatrix.newWithRandomBeta([3, 2], 2, 5);\nconsole.log(b.data);\n// [[0.4352666050451828, 0.2452383631782982  ],\n//  [0.05846582502047908, 0.4333062397167741 ],\n//  [0.04941459693399252, 0.49269775774198726]]\n\nconst c = FloatsMatrix.newWithRandomCauchy([3, 2], 2, 5);\nconsole.log(c.data);\n// [[-11.385961920418827, -17.15161173318022],\n//  [0.1024638854925195 , 6.279745583099606 ],\n//  [3.3623184985082037 , 3.885489673921221 ]]\n\nconst d = FloatsMatrix.newWithRandomChiSquared([3, 2], 11);\nconsole.log(d.data);\n// [[10.277459169762322, 35.62020788455194 ],\n//  [4.284340214042332 , 24.45187876986452 ],\n//  [7.931668582420599 , 16.316163514969134]]\n\nconst e = FloatsMatrix.newWithRandomExp([3, 2], 10);\nconsole.log(e.data);\n// [[0.005281103503605415 , 0.015056308235273966],\n//  [0.27406523498818836  , 0.09097148317752426 ],\n//  [0.006186609231888619 , 0.14851041454423092 ]]\n\nconst f = FloatsMatrix.newWithRandomExp1([3, 2]);\nconsole.log(f.data);\n// [[2.9591898182632073 , 0.8112187545007865],\n//  [0.47473323680065416, 1.113445155678973 ],\n//  [0.49151564307595746, 1.1401397947664906]]\n\nconst g = FloatsMatrix.newWithRandomFisher([3, 2], 2, 32);\nconsole.log(g.data);\n// [[6.035022100298939 , 0.11195752275263829],\n//  [0.7880226226513286, 0.6831958349556548 ],\n//  [1.6891867144690675, 1.9251576486424293 ]]\n\nconst h = FloatsMatrix.newWithRandomGamma([3, 2], 2, 5);\nconsole.log(h.data);\n// [[7.297140827545098 , 15.075130704066002],\n//  [5.205631783926043 , 6.907301503082457 ],\n//  [3.9806281284745024, 2.5184095054934668]]\n\nconst i = FloatsMatrix.newWithRandomInverseGaussian([3, 2], 2, 5);\nconsole.log(i.data);\n// [[1.2362125958158847, 2.7094177472381786],\n//  [3.257640695896601 , 1.7968259845332966],\n//  [6.733285552808544 , 0.7546923920545539]]\n\nconst j = FloatsMatrix.newWithRandomLogNormal([3, 2], 2, 3);\nconsole.log(j.data);\n// [[1.5944633208973324 , 0.5804460356679529],\n//  [56.452828478914235 , 259.24032587609355],\n//  [0.18045171237969937, 2.314717853874176 ]]\n\nconst k = FloatsMatrix.newWithRandomNormal([3, 2], 2, 3);\nconsole.log(k.data);\n// [[-4.937582097353862, -3.304836741396361],\n//  [0.5065334060859159, 4.684446356297737 ],\n//  [1.7827328981046664, 1.0296375546818184]]\n\nconst l = FloatsMatrix.newWithRandomNormalInverseGaussian([3, 2], 3, 2);\nconsole.log(l.data);\n// [[-0.31152530286956825, 0.639648853420095 ],\n//  [0.5919188019185757  , 1.949471648391123 ],\n//  [0.4631301018401633  , 1.2970831389679616]]\n\nconst m = FloatsMatrix.newWithRandomOpen01([3, 2]);\nconsole.log(m.data);\n// [[0.39278753839723257, 0.6371308131278645],\n//  [0.4658275442670957 , 0.6107343971136397],\n//  [0.9566538341934372 , 0.6313048135752762]]\n\nconst n = FloatsMatrix.newWithRandomOpenClosed01([3, 2]);\nconsole.log(n.data);\n// [[0.7442221338996284 , 0.14949176424893484],\n//  [0.11589327743372535, 0.8767809717607971 ],\n//  [0.9017807183733559 , 0.20821136682264907]]\n\nconst o = FloatsMatrix.newWithRandomPERT([3, 2], 0, 5, 2.5);\nconsole.log(o.data);\n// [[3.5855992452910885, 1.298769153985166 ],\n//  [2.6433936456914715, 4.057706593468385 ],\n//  [3.7000687237710035, 3.9289862203349935]]\n\nconst p = FloatsMatrix.newWithRandomPERTwithShape([3, 2], 0, 5, 2.5, 3);\nconsole.log(p.data);\n// [[4.113333526166986 , 1.5249031843815544],\n//  [3.0846709909462557, 1.7871186584755294],\n//  [1.6376575755162703, 4.096643354436632 ]]\n\nconst r = FloatsMatrix.newWithRandomPareto([3, 2], 1, 2);\nconsole.log(r.data);\n// [[1.2218668439832818, 1.6203296802965663],\n//  [2.4633071191032023, 3.402201249428801 ],\n//  [1.0272698414424728, 1.2468035617869209]]\n\nconst s = FloatsMatrix.newWithRandomPoisson([3, 2], 2.0);\nconsole.log(s.data);\n// [[1.0, 1.0],\n//  [1.0, 1.0],\n//  [2.0, 0.0]]\n\nconst t = FloatsMatrix.newWithRandomStandardNormal([3, 2]);\nconsole.log(t.data);\n// [[-0.03480684481808905, -0.2367400510322934 ],\n//  [1.3014550243997869  , 1.1395929103674205  ],\n//  [0.2940861674794777  , -0.06811041348658564]]\n\nconst u = FloatsMatrix.newWithRandomStudentT([3, 2], 11);\nconsole.log(u.data);\n// [[-0.9730798806120124, -2.4774924587564855],\n//  [-0.8038916959915411, 0.38853519831079814],\n//  [1.48599116493284   , 0.19963185132348066]]\n\nconst v = FloatsMatrix.newWithRandomTriangular([3, 2], 0, 5, 2.5);\nconsole.log(v.data);\n// [[0.24923070839180786, 2.0092007287696343],\n//  [3.412657810267511  , 3.9658729074861685],\n//  [1.6378056427234886 , 3.390844513218333 ]]\n\nconst w = FloatsMatrix.newWithRandomUniform([3, 2], -5, 5);\nconsole.log(w.data);\n// [[-3.6360495078042154 , 4.960282899472354  ],\n//  [-0.45696304892605966, -3.913525369070674 ],\n//  [-2.271588129876956  , 0.07717747041089851]]\n\nconst x = FloatsMatrix.newWithRandomWeibull([3, 2], 1, 10);\nconsole.log(x.data);\n// [[1.0444881410425038, 0.9303758536841533],\n//  [0.8812800857921872, 1.1002321732214724],\n//  [1.1453184784018968, 0.9719495544740979]]\n\nconst aa = a.sampleR(2);\nconsole.log(aa.data);\n// [[0.4661858441911314, 0.7320500923756094],\n//  [0.6274918901836912, 0.6661593918373582]]\n")))}p.isMDXComponent=!0}}]);