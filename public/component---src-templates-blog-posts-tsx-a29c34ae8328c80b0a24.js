(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogPostsPage",(function(){return j}));n(394);var a=n(396),r=n.n(a),o=(n(395),n(397)),l=n.n(o),i=(n(426),n(430)),c=n.n(i),u=(n(405),n(407)),s=n.n(u),f=(n(398),n(117)),p=n.n(f),d=(n(28),n(3),n(431)),m=n(1),y=n.n(m),g=n(86),h=n(156),b=n.n(h),v=n(400),O=n(399),w=n(401),C=n(402),E=n(403),N=n(406),j=(n(404),function(e){var t=e.pathContext,n=t.group,a=t.index,o=t.pageCount,i=a-1==1?"":(a-1).toString(),u=(a+1).toString(),f=d.data.site;return y.a.createElement(v.a,null,y.a.createElement(O.a,{title:f.siteMetadata.title+" | "+f.siteMetadata.description,description:f.siteMetadata.description}),n.map((function(e){var t=e.node,n=t.featured_media&&t.featured_media.localFile&&t.featured_media.localFile.childImageSharp&&t.featured_media.localFile.childImageSharp.fluid?t.featured_media.localFile.childImageSharp.fluid:null,a=t.categories&&t.categories.length>0?t.categories.filter((function(e){return"Uncategorized"!==e.name})):new Array,r=t.tags&&t.tags.length>0?t.tags.filter((function(e){return"Uncategorized"!==e.name})):new Array;return y.a.createElement("div",{key:t.slug,className:"posts"},y.a.createElement(g.a,{to:"/post/"+t.slug,title:t.slug},y.a.createElement("h1",{className:"black-color"},Object(N.a)(t.title))),(a&&a.length>0||r&&r.length>0)&&y.a.createElement("div",{className:"categories-container tags-container margin-bottom-24px"},a.map((function(e,t){return y.a.createElement(s.a,{key:t},y.a.createElement(g.a,{to:"/category/"+e.slug,title:e.name},y.a.createElement(p.a,{type:"folder"}),e.name))})),r.map((function(e,t){return y.a.createElement(s.a,{key:t},y.a.createElement(g.a,{to:"/tag/"+e.slug,title:e.name},y.a.createElement(p.a,{type:"tag"}),e.name))}))),y.a.createElement(g.a,{to:"/post/"+t.slug,title:t.slug},n&&n.src&&n.src.length>0&&y.a.createElement(b.a,{fluid:n,alt:t.title,title:t.title})),y.a.createElement("div",{className:"post-excerpt",dangerouslySetInnerHTML:{__html:Object(N.a)(t.excerpt)}}))})),y.a.createElement("div",{className:"navigation-links"},a>1&&y.a.createElement("div",{className:"previous-link"},y.a.createElement(g.a,{to:"/posts/"+i,title:"/posts/"+i},y.a.createElement(c.a,{type:"primary"},"Go to Previous Page"))),a<=o-1&&y.a.createElement("div",{className:"next-link"},y.a.createElement(g.a,{to:"/posts/"+u,title:"/posts/"+u},y.a.createElement(c.a,{type:"primary"},"Go to Next Page")))),y.a.createElement(w.a,{allInstaNode:e.pathContext.allInstaNode}),y.a.createElement(r.a,{type:"flex",align:"middle",gutter:36,className:"margin-top-36px"},y.a.createElement(l.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,className:"align-center"},y.a.createElement(C.a,null)),y.a.createElement(l.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,className:"align-center"},y.a.createElement(E.a,null))))});t.default=j},426:function(e,t,n){"use strict";n(44),n(463)},430:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(442)),r=o(n(443));function o(e){return e&&e.__esModule?e:{default:e}}a.default.Group=r.default;var l=a.default;t.default=l},431:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"My Demo Blog","description":"This is a demo blog"}}}}')},442:function(e,t,n){"use strict";n(36),n(14),n(11),n(15),n(9),n(4),n(5),n(3),n(12),n(13),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(1)),r=m(n(0)),o=p(n(19)),l=n(40),i=p(n(118)),c=p(n(117)),u=n(35),s=p(n(230)),f=n(157);function p(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){if(e&&e.__esModule)return e;var t=d();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}}return n.default=e,t&&t.set(e,n),n}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=/^[\u4e00-\u9fa5]{2}$/,N=E.test.bind(E);function j(e,t){var n=!1,r=[];return a.Children.forEach(e,(function(e){var t=w(e),a="string"===t||"number"===t;if(n&&a){var o=r.length-1,l=r[o];r[o]="".concat(l).concat(e)}else r.push(e);n=a})),a.Children.map(r,(function(e){return function(e,t){if(null!=e){var n=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&"string"==typeof e.type&&N(e.props.children)?a.cloneElement(e,{},e.props.children.split("").join(n)):"string"==typeof e?(N(e)&&(e=e.split("").join(n)),a.createElement("span",null,e)):e}}(e,t)}))}(0,f.tuple)("default","primary","ghost","dashed","danger","link");var k=(0,f.tuple)("circle","circle-outline","round"),P=(0,f.tuple)("large","default","small"),x=(0,f.tuple)("submit","button","reset"),_=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,v(t).call(this,e))).saveButtonRef=function(e){n.buttonNode=e},n.handleClick=function(e){var t=n.state.loading,a=n.props.onClick;t||a&&a(e)},n.renderButton=function(e){var t,r=e.getPrefixCls,l=e.autoInsertSpaceInButton,u=n.props,f=u.prefixCls,p=u.type,d=u.shape,m=u.size,h=u.className,b=u.children,v=u.icon,O=u.ghost,w=u.block,E=C(u,["prefixCls","type","shape","size","className","children","icon","ghost","block"]),N=n.state,k=N.loading,P=N.hasTwoCNChar,x=r("btn",f),_=!1!==l,T="";switch(m){case"large":T="lg";break;case"small":T="sm"}var S=k?"loading":v,M=(0,o.default)(x,h,(g(t={},"".concat(x,"-").concat(p),p),g(t,"".concat(x,"-").concat(d),d),g(t,"".concat(x,"-").concat(T),T),g(t,"".concat(x,"-icon-only"),!b&&0!==b&&S),g(t,"".concat(x,"-loading"),!!k),g(t,"".concat(x,"-background-ghost"),O),g(t,"".concat(x,"-two-chinese-chars"),P&&_),g(t,"".concat(x,"-block"),w),t)),I=S?a.createElement(c.default,{type:S}):null,B=b||0===b?j(b,n.isNeedInserted()&&_):null,z=(0,i.default)(E,["htmlType","loading"]);if(void 0!==z.href)return a.createElement("a",y({},z,{className:M,onClick:n.handleClick,ref:n.saveButtonRef}),I,B);var D=E,U=D.htmlType,W=C(D,["htmlType"]),F=a.createElement("button",y({},(0,i.default)(W,["loading"]),{type:U,className:M,onClick:n.handleClick,ref:n.saveButtonRef}),I,B);return"link"===p?F:a.createElement(s.default,null,F)},n.state={loading:e.loading,hasTwoCNChar:!1},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fixTwoCNChar()}},{key:"componentDidUpdate",value:function(e){var t=this;this.fixTwoCNChar(),e.loading&&"boolean"!=typeof e.loading&&clearTimeout(this.delayTimeout);var n=this.props.loading;n&&"boolean"!=typeof n&&n.delay?this.delayTimeout=window.setTimeout((function(){t.setState({loading:n})}),n.delay):e.loading!==n&&this.setState({loading:n})}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"fixTwoCNChar",value:function(){if(this.buttonNode){var e=this.buttonNode.textContent||this.buttonNode.innerText;this.isNeedInserted()&&N(e)?this.state.hasTwoCNChar||this.setState({hasTwoCNChar:!0}):this.state.hasTwoCNChar&&this.setState({hasTwoCNChar:!1})}}},{key:"isNeedInserted",value:function(){var e=this.props,t=e.icon,n=e.children,r=e.type;return 1===a.Children.count(n)&&!t&&"link"!==r}},{key:"render",value:function(){return a.createElement(u.ConfigConsumer,null,this.renderButton)}}])&&h(n.prototype,r),l&&h(n,l),t}(a.Component);_.__ANT_BUTTON=!0,_.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},_.propTypes={type:r.string,shape:r.oneOf(k),size:r.oneOf(P),htmlType:r.oneOf(x),onClick:r.func,loading:r.oneOfType([r.bool,r.object]),className:r.string,icon:r.string,block:r.bool,title:r.string},(0,l.polyfill)(_);var T=_;t.default=T},443:function(e,t,n){"use strict";n(11),n(9),n(4),n(5),n(3),n(12),n(13),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(1)),o=(a=n(19))&&a.__esModule?a:{default:a},l=n(35);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},s=function(e){return r.createElement(l.ConfigConsumer,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,l=e.size,i=e.className,s=u(e,["prefixCls","size","className"]),f=n("btn-group",a),p="";switch(l){case"large":p="lg";break;case"small":p="sm"}var d=(0,o.default)(f,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"".concat(f,"-").concat(p),p),i);return r.createElement("div",c({},s,{className:d}))}))};t.default=s}}]);
//# sourceMappingURL=component---src-templates-blog-posts-tsx-a29c34ae8328c80b0a24.js.map