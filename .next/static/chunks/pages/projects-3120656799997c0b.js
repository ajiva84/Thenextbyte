(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(8997)}])},638:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=l.default,s=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(n(e,Promise)?s.loader=function(){return e}:"function"==typeof e?s.loader=e:"object"==typeof e&&(s=a({},s,e)),(s=a({},s,t)).suspense&&(delete s.ssr,delete s.loading),s.loadableGenerated&&delete(s=a({},s,s.loadableGenerated)).loadableGenerated,"boolean"==typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,i(r,s);delete s.ssr}return r(s)},t.noSSR=i;var a=r(6495).Z,s=r(2648).Z,l=(s(r(7294)),s(r(4302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294)).default.createContext(null);t.LoadableContext=n},4302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9658).Z,a=r(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(6495).Z,l=(0,r(2648).Z)(r(7294)),i=r(6319),u=r(7294).useSyncExternalStore,o=[],d=[],c=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(function(e){return r.loading=!1,r.loaded=e,e}).catch(function(e){throw r.loading=!1,r.error=e,e}),r}var p=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"==typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},r.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var r=function(){if(!h){var t=new p(e,f);h={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return h.promise()},n=function(){r();var e=l.default.useContext(i.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},a=function(e,t){n();var r=u(h.subscribe,h.getCurrentValue,h.getCurrentValue);return l.default.useImperativeHandle(t,function(){return{retry:h.retry}},[]),l.default.useMemo(function(){var t;return r.loading||r.error?l.default.createElement(f.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:h.retry}):r.loaded?l.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null},[e,r])},o=function(e,t){return n(),l.default.createElement(f.lazy,s({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=l.default.lazy(f.loader));var h=null;if(!c){var m=f.webpack?f.webpack():f.modules;m&&d.push(function(e){var t=!0,n=!1,a=void 0;try{for(var s,l=m[Symbol.iterator]();!(t=(s=l.next()).done);t=!0){var i=s.value;if(-1!==e.indexOf(i))return r()}}catch(u){n=!0,a=u}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}})}var _=f.suspense?o:a;return _.preload=function(){return r()},_.displayName="LoadableComponent",l.default.forwardRef(_)}(f,e)}function m(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(function(){if(e.length)return m(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){m(o).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var r=function(){return c=!0,t()};m(d,e).then(r,r)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},8997:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(6484),s=r(5926),l=r(5152),i=r.n(l)()(function(){return Promise.all([r.e(391),r.e(237)]).then(r.bind(r,237))},{loadableGenerated:{webpack:function(){return[237]}},ssr:!1}),u=function(){return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(s.Z,{titleHtml:"Project <span>Grid</span>",titleText:"Project Grid"}),(0,n.jsx)("section",{className:"project-page-area pt-130 pb-100 rel z-1",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(i,{})})})]})};t.default=u},5926:function(e,t,r){"use strict";var n=r(5893),a=r(1664),s=r.n(a),l=function(e){var t=e.titleHtml,r=e.titleText;return(0,n.jsxs)("section",{className:"page-banner-area pt-245 rpt-150 pb-170 rpb-100 rel z-1 bgc-lighter text-center",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"banner-inner rpt-10",children:[(0,n.jsx)("h1",{className:"page-title wow fadeInUp delay-0-2s",dangerouslySetInnerHTML:{__html:t}}),(0,n.jsx)("nav",{"aria-label":"breadcrumb",children:(0,n.jsxs)("ol",{className:"breadcrumb justify-content-center wow fadeInUp delay-0-4s",children:[(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("a",{children:"home"})})}),(0,n.jsx)("li",{className:"breadcrumb-item active",children:r})]})})]})}),(0,n.jsxs)("div",{className:"banner-shapes",children:[(0,n.jsx)("div",{className:"circle wow zoomInLeft delay-0-2s","data-wow-duration":"2s"}),(0,n.jsx)("img",{className:"shape-one",src:"assets/images/shapes/hero-shape1.png",alt:"Shape"}),(0,n.jsx)("img",{className:"shape-two",src:"assets/images/shapes/hero-shape2.png",alt:"Shape"})]})]})};t.Z=l},5152:function(e,t,r){e.exports=r(638)}},function(e){e.O(0,[664,944,484,774,888,179],function(){return e(e.s=9182)}),_N_E=e.O()}]);