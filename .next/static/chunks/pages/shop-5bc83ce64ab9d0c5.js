(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{9173:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return n(5546)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=l.default,s=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?s.loader=function(){return e}:"function"==typeof e?s.loader=e:"object"==typeof e&&(s=a({},s,e)),(s=a({},s,t)).suspense&&(delete s.ssr,delete s.loading),s.loadableGenerated&&delete(s=a({},s,s.loadableGenerated)).loadableGenerated,"boolean"==typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,i(n,s);delete s.ssr}return n(s)},t.noSSR=i;var a=n(6495).Z,s=n(2648).Z,l=(s(n(7294)),s(n(4302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(6495).Z,l=(0,n(2648).Z)(n(7294)),i=n(6319),u=n(7294).useSyncExternalStore,o=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!h){var t=new p(e,f);h={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return h.promise()},r=function(){n();var e=l.default.useContext(i.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},a=function(e,t){r();var n=u(h.subscribe,h.getCurrentValue,h.getCurrentValue);return l.default.useImperativeHandle(t,function(){return{retry:h.retry}},[]),l.default.useMemo(function(){var t;return n.loading||n.error?l.default.createElement(f.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:h.retry}):n.loaded?l.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},o=function(e,t){return r(),l.default.createElement(f.lazy,s({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=l.default.lazy(f.loader));var h=null;if(!c){var m=f.webpack?f.webpack():f.modules;m&&d.push(function(e){var t=!0,r=!1,a=void 0;try{for(var s,l=m[Symbol.iterator]();!(t=(s=l.next()).done);t=!0){var i=s.value;if(-1!==e.indexOf(i))return n()}}catch(u){r=!0,a=u}finally{try{t||null==l.return||l.return()}finally{if(r)throw a}}})}var _=f.suspense?o:a;return _.preload=function(){return n()},_.displayName="LoadableComponent",l.default.forwardRef(_)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return m(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){m(o).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return c=!0,t()};m(d,e).then(n,n)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},5546:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(6484),s=n(5926),l=n(5152),i=n.n(l)()(function(){return Promise.all([n.e(391),n.e(798)]).then(n.bind(n,1013))},{loadableGenerated:{webpack:function(){return[1013]}},ssr:!1}),u=function(){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{titleHtml:"Our<span> Shop</span>",titleText:"Shop"}),(0,r.jsx)("section",{className:"shop-page-area py-130 rel z-1",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"row justify-content-center pb-20",children:(0,r.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-10",children:(0,r.jsxs)("div",{className:"section-title text-center mb-30 wow fadeInUp delay-0-2s",children:[(0,r.jsx)("span",{className:"sub-title style-two mb-15",children:"Pre-made Template"}),(0,r.jsx)("h2",{children:"Let’s See Our Popular Website Template"})]})})}),(0,r.jsx)(i,{})]})})]})};t.default=u},5926:function(e,t,n){"use strict";var r=n(5893),a=n(1664),s=n.n(a),l=function(e){var t=e.titleHtml,n=e.titleText;return(0,r.jsxs)("section",{className:"page-banner-area pt-245 rpt-150 pb-170 rpb-100 rel z-1 bgc-lighter text-center",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"banner-inner rpt-10",children:[(0,r.jsx)("h1",{className:"page-title wow fadeInUp delay-0-2s",dangerouslySetInnerHTML:{__html:t}}),(0,r.jsx)("nav",{"aria-label":"breadcrumb",children:(0,r.jsxs)("ol",{className:"breadcrumb justify-content-center wow fadeInUp delay-0-4s",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(s(),{href:"/",children:(0,r.jsx)("a",{children:"home"})})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:n})]})})]})}),(0,r.jsxs)("div",{className:"banner-shapes",children:[(0,r.jsx)("div",{className:"circle wow zoomInLeft delay-0-2s","data-wow-duration":"2s"}),(0,r.jsx)("img",{className:"shape-one",src:"assets/images/shapes/hero-shape1.png",alt:"Shape"}),(0,r.jsx)("img",{className:"shape-two",src:"assets/images/shapes/hero-shape2.png",alt:"Shape"})]})]})};t.Z=l},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[664,944,484,774,888,179],function(){return e(e.s=9173)}),_N_E=e.O()}]);