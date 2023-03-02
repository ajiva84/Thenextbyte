(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{163:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index3",function(){return a(1260)}])},638:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(6856).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){var a=l.default,r=(null==s?void 0:s.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(i(e,Promise)?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=t({},r,e)),(r=t({},r,s)).suspense&&(delete r.ssr,delete r.loading),r.loadableGenerated&&delete(r=t({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,n(a,r);delete r.ssr}return a(r)},s.noSSR=n;var t=a(6495).Z,r=a(2648).Z,l=(r(a(7294)),r(a(4302)));function n(e,s){return delete s.webpack,delete s.modules,e(s)}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6319:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var i=(0,a(2648).Z)(a(7294)).default.createContext(null);s.LoadableContext=i},4302:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(9658).Z,t=a(7222).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=a(6495).Z,l=(0,a(2648).Z)(a(7294)),n=a(6319),c=a(7294).useSyncExternalStore,o=[],d=[],m=!1;function h(e){var s=e(),a={loading:!0,loaded:null,error:null};return a.promise=s.then(function(e){return a.loading=!1,a.loaded=e,e}).catch(function(e){throw a.loading=!1,a.error=e,e}),a}var u=function(){function e(s,a){i(this,e),this._loadFn=s,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return t(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,a=this._opts;s.loading&&("number"==typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},a.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(s){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function x(e){return function(e,s){var a=function(){if(!x){var s=new u(e,h);x={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return x.promise()},i=function(){a();var e=l.default.useContext(n.LoadableContext);e&&Array.isArray(h.modules)&&h.modules.forEach(function(s){e(s)})},t=function(e,s){i();var a=c(x.subscribe,x.getCurrentValue,x.getCurrentValue);return l.default.useImperativeHandle(s,function(){return{retry:x.retry}},[]),l.default.useMemo(function(){var s;return a.loading||a.error?l.default.createElement(h.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:x.retry}):a.loaded?l.default.createElement((s=a.loaded)&&s.__esModule?s.default:s,e):null},[e,a])},o=function(e,s){return i(),l.default.createElement(h.lazy,r({},e,{ref:s}))},h=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},s);h.suspense&&(h.lazy=l.default.lazy(h.loader));var x=null;if(!m){var p=h.webpack?h.webpack():h.modules;p&&d.push(function(e){var s=!0,i=!1,t=void 0;try{for(var r,l=p[Symbol.iterator]();!(s=(r=l.next()).done);s=!0){var n=r.value;if(-1!==e.indexOf(n))return a()}}catch(c){i=!0,t=c}finally{try{s||null==l.return||l.return()}finally{if(i)throw t}}})}var f=h.suspense?o:t;return f.preload=function(){return a()},f.displayName="LoadableComponent",l.default.forwardRef(f)}(h,e)}function p(e,s){for(var a=[];e.length;){var i=e.pop();a.push(i(s))}return Promise.all(a).then(function(){if(e.length)return p(e,s)})}x.preloadAll=function(){return new Promise(function(e,s){p(o).then(e,s)})},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(s){var a=function(){return m=!0,s()};p(d,e).then(a,a)})},window.__NEXT_PRELOADREADY=x.preloadReady,s.default=x},1260:function(e,s,a){"use strict";a.r(s);var i=a(1799),t=a(9396),r=a(5893),l=a(6066),n=a(6484),c=a(5968),o=a(5152),d=a.n(o),m=a(1664),h=a.n(m),u=a(6774),x=d()(function(){return Promise.all([a.e(391),a.e(940)]).then(a.bind(a,1940))},{loadableGenerated:{webpack:function(){return[1940]}},ssr:!1}),p=function(){return(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)("section",{className:"hero-area-three pt-210 rpt-150 rel z-1",children:[(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"row align-items-center justify-content-center",children:(0,r.jsx)("div",{className:"col-xl-10 col-lg-11",children:(0,r.jsxs)("div",{className:"hero-content-three text-center pt-10 mb-40 wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("h1",{children:["We Build Modern ",(0,r.jsx)("span",{children:"Website"})," for your Business"]}),(0,r.jsx)("p",{children:"Sorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna suspendisse ultrices gravida commodo"}),(0,r.jsxs)("div",{className:"hero-btns pt-5 wow fadeInUp delay-0-4s",children:[(0,r.jsx)(h(),{href:"/about",children:(0,r.jsxs)("a",{className:"theme-btn mt-15",children:["Create Your Website"," ",(0,r.jsx)("i",{className:"fas fa-angle-double-right"})]})}),(0,r.jsxs)("a",{href:"https://www.youtube.com/watch?v=9Y7ma241N8k",className:"mfp-iframe video-play-text mt-15",children:[(0,r.jsx)("i",{className:"fas fa-play"})," ",(0,r.jsx)("span",{children:"Watch Videos"})]})]})]})})}),(0,r.jsx)("div",{className:"hero-three-image wow fadeInUp delay-0-6s",children:(0,r.jsx)("img",{src:"assets/images/hero/hero-three.png",alt:"Hero"})})]}),(0,r.jsxs)("div",{className:"hero-three-shapes",children:[(0,r.jsx)("div",{className:"angle wow slideInDown delay-0-2s"}),(0,r.jsx)("div",{className:"circle wow zoomInLeft delay-0-2s","data-wow-duration":"2s"}),(0,r.jsx)("img",{className:"shape-one",src:"assets/images/shapes/hero-shape1.png",alt:"Shape"}),(0,r.jsx)("img",{className:"shape-two",src:"assets/images/shapes/hero-shape2.png",alt:"Shape"})]})]}),(0,r.jsx)("section",{className:"features-area-two pt-130 rel z-1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-two mt-60 wow fadeInUp delay-0-2s",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("i",{className:"fas fa-check"})}),(0,r.jsxs)("h4",{children:["249+ UI ",(0,r.jsx)("br",{}),"Components"]}),(0,r.jsx)("p",{children:"Sit amet conse adipiscin elitec eiusmod tempors incidide sesy labore dolore another"})]})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-two color-two wow fadeInUp delay-0-4s",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("i",{className:"fas fa-check"})}),(0,r.jsxs)("h4",{children:["5630+ ",(0,r.jsx)("br",{}),"Web Templates"]}),(0,r.jsx)("p",{children:"Sit amet conse adipiscin elitec eiusmod tempors incidide sesy labore dolore another"})]})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-two color-three mt-60 wow fadeInUp delay-0-6s",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("i",{className:"fas fa-check"})}),(0,r.jsxs)("h4",{children:["9562+ ",(0,r.jsx)("br",{}),"Digital Assets"]}),(0,r.jsx)("p",{children:"Sit amet conse adipiscin elitec eiusmod tempors incidide sesy labore dolore another"})]})}),(0,r.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-two color-four wow fadeInUp delay-0-8s",children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("i",{className:"fas fa-check"})}),(0,r.jsxs)("h4",{children:["4563+ ",(0,r.jsx)("br",{}),"Custome Addon"]}),(0,r.jsx)("p",{children:"Sit amet conse adipiscin elitec eiusmod tempors incidide sesy labore dolore another"})]})})]})})}),(0,r.jsx)("section",{className:"ww-do-area pt-100 pb-130 rel z-1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"col-xl-5 col-lg-6",children:(0,r.jsxs)("div",{className:"ww-do-content rmb-65",children:[(0,r.jsxs)("div",{className:"section-title mb-40 wow fadeInRight delay-0-2s",children:[(0,r.jsx)("span",{className:"sub-title style-two mb-15",children:"What We Do"}),(0,r.jsx)("h2",{children:"We Create Your Unique Online Websites"})]}),(0,r.jsxs)("div",{className:"feature-three-wrap",children:[(0,r.jsxs)("div",{className:"feature-item-three wow fadeInRight delay-0-3s",children:[(0,r.jsx)("i",{className:"flaticon-technical-support"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h4",{children:"Customize your site"}),(0,r.jsx)("p",{children:"Sit amet consectetur adipiscing sed eiusmod tempor incididunt labore et dolore magnaes epsums"})]})]}),(0,r.jsxs)("div",{className:"feature-item-three color-two wow fadeInRight delay-0-4s",children:[(0,r.jsx)("i",{className:"flaticon-settings"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h4",{children:"Add advanced features"}),(0,r.jsx)("p",{children:"Sit amet consectetur adipiscing sed eiusmod tempor incididunt labore et dolore magnaes epsums"})]})]}),(0,r.jsxs)("div",{className:"feature-item-three color-three wow fadeInRight delay-0-5s",children:[(0,r.jsx)("i",{className:"flaticon-app-development"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h4",{children:"Edit your mobile view"}),(0,r.jsx)("p",{children:"Sit amet consectetur adipiscing sed eiusmod tempor incididunt labore et dolore magnaes epsums"})]})]}),(0,r.jsxs)("div",{className:"feature-item-three color-four wow fadeInRight delay-0-6s",children:[(0,r.jsx)("i",{className:"flaticon-optimization"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h4",{children:"Optimize for search engines"}),(0,r.jsx)("p",{children:"Sit amet consectetur adipiscing sed eiusmod tempor incididunt labore et dolore magnaes epsums"})]})]})]})]})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)("div",{className:"ww-do-images",children:[(0,r.jsx)("img",{className:"image-one wow fadeInDown delay-0-2s",src:"assets/images/about/ww-do1.png",alt:"What We Do"}),(0,r.jsx)("img",{className:"image-two wow fadeInUp delay-0-4s",src:"assets/images/about/ww-do2.png",alt:"What We Do"}),(0,r.jsx)("img",{className:"image-three wow fadeInRight delay-0-6s",src:"assets/images/about/ww-do3.png",alt:"What We Do"})]})})]})})}),(0,r.jsx)("section",{className:"feature-with-image-area bgc-black text-white py-130 rel z-1",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"feature-with-image",children:[(0,r.jsx)("div",{className:"feature-image wow fadeInLeft delay-0-2s",children:(0,r.jsx)("img",{src:"assets/images/features/feature1.png",alt:"Feature"})}),(0,r.jsxs)("div",{className:"feature-content wow fadeInRight delay-0-2s",children:[(0,r.jsx)("h3",{children:"Advanced design features."}),(0,r.jsx)("p",{children:"Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaes suspendisse ultrices gravida commodo viverra mae cenas accumsan lacus vel facilisis."}),(0,r.jsx)(h(),{href:"/service-details",children:(0,r.jsxs)("a",{className:"read-more",children:["Learn More ",(0,r.jsx)("i",{className:"far fa-arrow-right"})]})})]}),(0,r.jsx)("div",{className:"feature-shape",children:(0,r.jsx)("img",{src:"assets/images/shapes/feature-shape.png",alt:"Shape"})})]}),(0,r.jsxs)("div",{className:"feature-with-image",children:[(0,r.jsx)("div",{className:"feature-shape",children:(0,r.jsx)("img",{src:"assets/images/shapes/feature-shape.png",alt:"Shape"})}),(0,r.jsxs)("div",{className:"feature-content wow fadeInRight delay-0-2s",children:[(0,r.jsx)("h3",{children:"We’ll instantly create a perfect design"}),(0,r.jsx)("p",{children:"Labore et do magna aliquaes suspendisse ultrices gravida commodo maeenas accumsan"}),(0,r.jsxs)("ul",{className:"list-style-three",children:[(0,r.jsx)("li",{children:"Is it easy to create a website"}),(0,r.jsx)("li",{children:"Build creative website easily"})]}),(0,r.jsx)(h(),{href:"/service-details",children:(0,r.jsxs)("a",{className:"read-more",children:["Learn More ",(0,r.jsx)("i",{className:"far fa-arrow-right"})]})})]}),(0,r.jsx)("div",{className:"feature-image wow fadeInLeft delay-0-2s",children:(0,r.jsx)("img",{src:"assets/images/features/feature2.png",alt:"Feature"})})]}),(0,r.jsxs)("div",{className:"feature-with-image",children:[(0,r.jsx)("div",{className:"feature-image wow fadeInLeft delay-0-2s",children:(0,r.jsx)("img",{src:"assets/images/features/feature3.png",alt:"Feature"})}),(0,r.jsxs)("div",{className:"feature-content wow fadeInRight delay-0-2s",children:[(0,r.jsx)("h3",{children:"Share your ideas. Grow your brand"}),(0,r.jsx)("p",{children:"Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaes suspendisse ultrices gravida commodo viverra mae cenas accumsan lacus vel facilisis."}),(0,r.jsx)(h(),{href:"/service-details",children:(0,r.jsxs)("a",{className:"read-more",children:["Learn More ",(0,r.jsx)("i",{className:"far fa-arrow-right"})]})})]}),(0,r.jsx)("div",{className:"feature-shape",children:(0,r.jsx)("img",{src:"assets/images/shapes/feature-shape.png",alt:"Shape"})})]})]})}),(0,r.jsx)("section",{className:"project-area-two pt-130 pb-100 rel z-1",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-xl-6 col-lg-7",children:(0,r.jsxs)("div",{className:"section-title text-center mb-50 wow fadeInUp delay-0-2s",children:[(0,r.jsx)("span",{className:"sub-title style-two mb-15",children:"Pre-made Template"}),(0,r.jsx)("h2",{children:"Let’s See Our Popular Website Template"})]})})}),(0,r.jsx)(x,{})]})}),(0,r.jsx)("section",{className:"feature-area-four pb-100 rel z-1",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-title text-center mb-50 wow fadeInUp delay-0-2s",children:[(0,r.jsx)("span",{className:"sub-title style-two mb-15",children:"Core Features"}),(0,r.jsx)("h2",{children:"Amazing Core Features"})]}),(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-four wow fadeInUp delay-0-3s",children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("i",{className:"flaticon-drag-and-drop"}),(0,r.jsx)(h(),{href:"/service-details",children:(0,r.jsxs)("a",{children:["Drag ","&amp;"," Drop"]})})]}),(0,r.jsxs)("p",{children:["Discover the ultimate creation experien eams. Work the same site at the same time feedback assign custom roles ","&amp;","permissions"]})]})}),(0,r.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-four wow fadeInUp delay-0-5s",children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("i",{className:"flaticon-responsive-1"}),(0,r.jsx)(h(),{href:"/service-details",children:"Edit by Device"})]}),(0,r.jsxs)("p",{children:["Discover the ultimate creation experien eams. Work the same site at the same time feedback assign custom roles ","&amp;","permissions"]})]})}),(0,r.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-four wow fadeInUp delay-0-7s",children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("i",{className:"flaticon-email"}),(0,r.jsx)(h(),{href:"/service-details",children:"Email Campaign"})]}),(0,r.jsxs)("p",{children:["Discover the ultimate creation experien eams. Work the same site at the same time feedback assign custom roles ","&amp;","permissions"]})]})}),(0,r.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-four wow fadeInUp delay-0-3s",children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("i",{className:"flaticon-monitor"}),(0,r.jsx)(h(),{href:"/service-details",children:"Simple to use"})]}),(0,r.jsxs)("p",{children:["Discover the ultimate creation experien eams. Work the same site at the same time feedback assign custom roles ","&amp;","permissions"]})]})}),(0,r.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-four wow fadeInUp delay-0-5s",children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("i",{className:"flaticon-user-experience"}),(0,r.jsx)(h(),{href:"/service-details",children:"Increase Leads"})]}),(0,r.jsxs)("p",{children:["Discover the ultimate creation experien eams. Work the same site at the same time feedback assign custom roles ","&amp;","permissions"]})]})}),(0,r.jsx)("div",{className:"col-xl-4 col-md-6",children:(0,r.jsxs)("div",{className:"feature-item-four wow fadeInUp delay-0-7s",children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("i",{className:"flaticon-coding-1"}),(0,r.jsx)(h(),{href:"/service-details",children:"Developer Mode"})]}),(0,r.jsxs)("p",{children:["Discover the ultimate creation experien eams. Work the same site at the same time feedback assign custom roles ","&amp;","permissions"]})]})})]})]})}),(0,r.jsx)("section",{className:"statistics-area-two bgc-lighter bgs-cover pt-130 pb-100 rel z-1",style:{backgroundImage:"url(assets/images/features/support-features-bg.png)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"col-lg-5",children:(0,r.jsxs)("div",{className:"statistics-two-content mb-30 rmb-35 wow fadeInRight delay-0-2s",children:[(0,r.jsxs)("div",{className:"section-title mb-25",children:[(0,r.jsx)("span",{className:"sub-title style-two mb-15",children:"Company Statistics"}),(0,r.jsxs)("h2",{children:["We're"," the best web development agency more achievement"]})]}),(0,r.jsxs)("p",{children:["Start building your first prototype in no time. Ogency intuitive, drag ","&amp;"," drop interface gives you all the building blocks that you need to get started! No skills required."]}),(0,r.jsx)(h(),{href:"/about",children:(0,r.jsxs)("a",{className:"theme-btn mt-15",children:["Learn More ",(0,r.jsx)("i",{className:"fas fa-angle-double-right"})]})})]})}),(0,r.jsx)("div",{className:"col-lg-7",children:(0,r.jsx)("div",{className:"statistics-two-counters mt-30",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-5 col-lg-6 col-md-5 col-sm-6",children:(0,r.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInLeft delay-0-2s",children:[(0,r.jsx)("i",{className:"flaticon-startup"}),(0,r.jsx)(u.Z,{end:2365}),(0,r.jsx)("span",{className:"counter-title",children:"Projects complete"})]})}),(0,r.jsx)("div",{className:"col-xl-5 col-lg-6 col-md-5 col-sm-6",children:(0,r.jsxs)("div",{className:"counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s",children:[(0,r.jsx)("i",{className:"flaticon-global"}),(0,r.jsx)(u.Z,{end:9632}),(0,r.jsx)("span",{className:"counter-title",children:"Trusted Global Clients"})]})}),(0,r.jsx)("div",{className:"col-xl-5 col-lg-6 col-md-5 col-sm-6 offset-xl-1",children:(0,r.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInLeft delay-0-2s",children:[(0,r.jsx)("i",{className:"flaticon-rating"}),(0,r.jsx)(u.Z,{end:8504}),(0,r.jsx)("span",{className:"counter-title",children:"Expert Team Member"})]})}),(0,r.jsx)("div",{className:"col-xl-5 col-lg-6 col-md-5 col-sm-6",children:(0,r.jsxs)("div",{className:"counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s",children:[(0,r.jsx)("i",{className:"flaticon-trophy"}),(0,r.jsx)(u.Z,{end:6763}),(0,r.jsx)("span",{className:"counter-title",children:"Projects complete"})]})})]})})})]})})}),(0,r.jsx)("section",{className:"why-choose-two-area py-130 rel z-1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"why-choose-two-image rmb-65 wow fadeInUp delay-0-4s",children:(0,r.jsx)("img",{src:"assets/images/about/why-choose-us-two.png",alt:"why choose us"})})}),(0,r.jsx)("div",{className:"col-xl-5 col-lg-6",children:(0,r.jsxs)("div",{className:"why-choose-two-content wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"section-title mb-35",children:[(0,r.jsx)("span",{className:"sub-title style-two mb-15",children:"Why Choose Us"}),(0,r.jsx)("h2",{children:"Great Web solutions that you can trust"})]}),(0,r.jsxs)("ul",{className:"list-style-one",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"Easy Customize"}),(0,r.jsx)("p",{children:"We use strategic marketing tactics have been ese proven programming complex functions."})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"Chat &amp; Messaging"}),(0,r.jsx)("p",{children:"We use strategic marketing tactics have been eses proven programming complex functions."})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"Payment Gatway"}),(0,r.jsx)("p",{children:"We use strategic marketing tactics have been eses proven programming complex functions."})]})})]})]})})]})})}),(0,r.jsxs)("section",{className:"feedback-area pb-130 rel z-1",children:[(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-xl-6 col-lg-8",children:(0,r.jsxs)("div",{className:"section-title text-center mb-40 wow fadeInUp delay-0-2s",children:[(0,r.jsx)("span",{className:"sub-title style-two mb-20",children:"Clents Feedback"}),(0,r.jsx)("h2",{children:"3,000+ Positive reviews by our satisfied clients"})]})})}),(0,r.jsxs)(l.Z,(0,t.Z)((0,i.Z)({},c.X$),{className:"feedback-active",children:[(0,r.jsxs)("div",{className:"feedback-item wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"author-logo",children:[(0,r.jsx)("i",{className:"far fa-quote-right"}),(0,r.jsx)("img",{src:"assets/images/feedback/logo1.png",alt:"Logo"})]}),(0,r.jsx)("h4",{children:"On the other hand denounes with indignwy"}),(0,r.jsx)("p",{children:"Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore"}),(0,r.jsxs)("div",{className:"feedback-author",children:[(0,r.jsx)("img",{src:"assets/images/feedback/author1.jpg",alt:"Author"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"Jonathan B. Bohnert"}),(0,r.jsxs)("span",{children:["CEO ","&amp;"," Founder"]})]})]})]}),(0,r.jsxs)("div",{className:"feedback-item wow fadeInUp delay-0-4s",children:[(0,r.jsxs)("div",{className:"author-logo",children:[(0,r.jsx)("i",{className:"far fa-quote-right"}),(0,r.jsx)("img",{src:"assets/images/feedback/logo2.png",alt:"Logo"})]}),(0,r.jsx)("h4",{children:"Custom programming fores most complex functions"}),(0,r.jsx)("p",{children:"Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore"}),(0,r.jsxs)("div",{className:"feedback-author",children:[(0,r.jsx)("img",{src:"assets/images/feedback/author2.jpg",alt:"Author"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"Nicholas R. Gomez"}),(0,r.jsx)("span",{children:"Medical Officers"})]})]})]}),(0,r.jsxs)("div",{className:"feedback-item wow fadeInUp delay-0-6s",children:[(0,r.jsxs)("div",{className:"author-logo",children:[(0,r.jsx)("i",{className:"far fa-quote-right"}),(0,r.jsx)("img",{src:"assets/images/feedback/logo3.png",alt:"Logo"})]}),(0,r.jsx)("h4",{children:"We use strategic marketing tactics be proven work."}),(0,r.jsx)("p",{children:"Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore"}),(0,r.jsxs)("div",{className:"feedback-author",children:[(0,r.jsx)("img",{src:"assets/images/feedback/author3.jpg",alt:"Author"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"James R. Lawrence"}),(0,r.jsx)("span",{children:"Junior Manager"})]})]})]}),(0,r.jsxs)("div",{className:"feedback-item wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"author-logo",children:[(0,r.jsx)("i",{className:"far fa-quote-right"}),(0,r.jsx)("img",{src:"assets/images/feedback/logo1.png",alt:"Logo"})]}),(0,r.jsx)("h4",{children:"On the other hand denounes with indignwy"}),(0,r.jsx)("p",{children:"Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore"}),(0,r.jsxs)("div",{className:"feedback-author",children:[(0,r.jsx)("img",{src:"assets/images/feedback/author1.jpg",alt:"Author"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"Jonathan B. Bohnert"}),(0,r.jsxs)("span",{children:["CEO ","&amp;"," Founder"]})]})]})]}),(0,r.jsxs)("div",{className:"feedback-item wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"author-logo",children:[(0,r.jsx)("i",{className:"far fa-quote-right"}),(0,r.jsx)("img",{src:"assets/images/feedback/logo2.png",alt:"Logo"})]}),(0,r.jsx)("h4",{children:"Custom programming fores most complex functions"}),(0,r.jsx)("p",{children:"Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore"}),(0,r.jsxs)("div",{className:"feedback-author",children:[(0,r.jsx)("img",{src:"assets/images/feedback/author2.jpg",alt:"Author"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"Nicholas R. Gomez"}),(0,r.jsx)("span",{children:"Medical Officers"})]})]})]}),(0,r.jsxs)("div",{className:"feedback-item wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"author-logo",children:[(0,r.jsx)("i",{className:"far fa-quote-right"}),(0,r.jsx)("img",{src:"assets/images/feedback/logo3.png",alt:"Logo"})]}),(0,r.jsx)("h4",{children:"We use strategic marketing tactics be proven work."}),(0,r.jsx)("p",{children:"Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore"}),(0,r.jsxs)("div",{className:"feedback-author",children:[(0,r.jsx)("img",{src:"assets/images/feedback/author3.jpg",alt:"Author"}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h5",{children:"James R. Lawrence"}),(0,r.jsx)("span",{children:"Junior Manager"})]})]})]})]}))]}),(0,r.jsx)("div",{className:"feedback-shape one",children:(0,r.jsx)("img",{src:"assets/images/feedback/man1.jpg",alt:"Man Shape"})}),(0,r.jsx)("div",{className:"feedback-shape two",children:(0,r.jsx)("img",{src:"assets/images/feedback/man2.jpg",alt:"Man Shape"})})]})]})};s.default=p},6774:function(e,s,a){"use strict";var i=a(5893),t=a(7857),r=a(3082),l=a.n(r),n=function(e){var s=e.end,a=e.decimals;return(0,i.jsx)(t.ZP,{end:s||100,duration:3,decimals:a||0,children:function(e){var a=e.countUpRef,t=e.start;return(0,i.jsx)(l(),{onChange:t,delayedCall:!0,children:(0,i.jsx)("span",{"data-from":"0",className:"count-text","data-to":s,ref:a,children:"count"})})}})};s.Z=n},5968:function(e,s,a){"use strict";a.d(s,{Gf:function(){return i},X$:function(){return t},iP:function(){return r}});var i={dots:!0,infinite:!0,autoplay:!1,autoplaySpeed:5e3,arrows:!1,centerMode:!1,speed:1e3,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:1199,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},]},t={dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1,centerMode:!1,speed:1e3,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:1199,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}},]},r={dots:!0,infinite:!0,autoplay:!1,autoplaySpeed:2e3,arrows:!1,speed:1e3,focusOnSelect:!1,slidesToShow:4,slidesToScroll:2,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}},]}},5152:function(e,s,a){e.exports=a(638)}},function(e){e.O(0,[664,944,55,655,484,774,888,179],function(){return e(e.s=163)}),_N_E=e.O()}]);