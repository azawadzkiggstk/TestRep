!function(){"use strict";var e,t={6394:function(){var e=window.wp.blocks,t=window.wp.element;function l(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=l(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var o=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=l(e))&&(n&&(n+=" "),n+=t);return n},n=window.wp.blockEditor;const a=["statik/slider-slide"],r=[["statik/slider-slide"]],s=()=>{const e=(0,n.useInnerBlocksProps)({className:"wp-block-statik-slider__slides"},{allowedBlocks:a,template:r,renderAppender:!1,orientation:"horizontal"});return(0,t.createElement)("div",e)};var i=window.wp.data;function c(e){const{clientId:l}=(0,n.useBlockEditContext)(),o=null!=e?e:l,{updateBlockAttributes:a}=(0,i.useDispatch)("core/block-editor");return{attributes:(0,i.useSelect)((e=>{const{getBlockAttributes:t}=e("core/block-editor");return t(o)}),[o]),setAttributes:(0,t.useCallback)((e=>{a(o,e)}))}}function d(e){const{clientId:t}=(0,n.useBlockEditContext)(),l=null!=e?e:t;return(0,i.useSelect)((e=>{const{getBlocks:t}=e("core/block-editor");return t(l)}),[l])}function u(){const{clientId:e}=(0,n.useBlockEditContext)();return e}const b=e=>{const{children:l,offset:o}=e,n=u(),{attributes:a,setAttributes:r}=c(),{selectedSlideIndex:s,loop:b}=a,{selectBlock:k}=(0,i.useDispatch)("core/block-editor"),p=d(n),m=p.length-1;let v=s+o;v<0&&b&&(v=m),v>m&&b&&(v=0);let h=!1;return o>0&&(h=!(b||s<m)),o<0&&(h=!(b||s>0)),(0,t.createElement)("button",{className:"wp-block-statik-slider__direction-nav-button",disabled:h,onClick:()=>{r({selectedSlideIndex:v}),k(p[v].clientId)}},l)};function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},k.apply(this,arguments)}function p(e){return(0,t.createElement)("svg",k({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),(0,t.createElement)("path",{d:"M19 12L13.75 17.75M19 12L4 12M19 12L13.75 6.75",stroke:"#1E1E1E",strokeWidth:"1.5"}))}function m(e){return(0,t.createElement)("svg",k({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),(0,t.createElement)("path",{d:"M5 11.5L10.25 5.75M5 11.5L20 11.5M5 11.5L10.25 16.75",stroke:"#1E1E1E",strokeWidth:"1.5"}))}const v=()=>(0,t.createElement)("div",{className:"wp-block-statik-slider__direction-nav"},(0,t.createElement)(b,{offset:-1},(0,t.createElement)(m,null)),(0,t.createElement)(b,{offset:1},(0,t.createElement)(p,null))),h=e=>{const{index:l,blockId:n}=e,{attributes:a,setAttributes:r}=c(),{selectBlock:s}=(0,i.useDispatch)("core/block-editor"),{selectedSlideIndex:d}=a,u=(0,t.useCallback)((()=>{r({selectedSlideIndex:l}),s(n)})),b=o({"wp-block-statik-slider__control-nav-button":!0,"wp-block-statik-slider__control-nav-button--selected":d===l});return(0,t.createElement)("button",{className:b,onClick:u})},w=()=>{const e=d();return(0,t.createElement)("div",{className:"wp-block-statik-slider__control-nav"},e.map(((e,l)=>(0,t.createElement)(h,{key:e.clientId,index:l,blockId:e.clientId}))))};var f=window.wp.components,E=window.wp.primitives,g=(0,t.createElement)(E.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(E.Path,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),_=(0,t.createElement)(E.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(E.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),y=(0,t.createElement)(E.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(E.Path,{d:"M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"})),x=window.wp.i18n;function S(e){const{clientId:t}=(0,n.useBlockEditContext)(),l=null!=e?e:t;return(0,i.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(l)}),[l])}function C(l){const{rootClientId:o}=l,n=u(),a=S(o),{selectBlock:r,insertBlock:s,removeBlock:d}=(0,i.useDispatch)("core/block-editor"),{getBlockIndex:b}=(0,i.useSelect)("core/block-editor"),{attributes:k,setAttributes:p}=c(o),{selectedSlideIndex:m}=k,v=n===o,h=a.length>1&&!v,w=a[m],E=(0,t.useMemo)((()=>a.map(((e,t)=>({label:`Slide #${t}`,value:e})))),[a]),C=(0,t.useCallback)((async e=>{var t;const l=b(e,o);p({selectedSlideIndex:l}),await r(e);const n=`block-${e}`;null===(t=window.document.getElementById(n))||void 0===t||t.focus()})),B=(0,t.useCallback)((async()=>{const t=(0,e.createBlock)("statik/slider-slide"),l=m+1;await s(t,l,o,!1),await C(t.clientId)})),I=(0,t.useCallback)((async()=>{h&&(await d(n),p({selectedSlideIndex:Math.max(0,m-1)}))}));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(f.ToolbarButton,{label:(0,x.__)("Slide index","statik-blocks"),isDisabled:!0},(0,t.createElement)("span",null,"  ",`#${m}`)),(0,t.createElement)(f.ToolbarDropdownMenu,{icon:g,label:(0,x.__)("Select slide","statik-blocks")},(()=>(0,t.createElement)(f.MenuGroup,null,(0,t.createElement)(f.MenuItemsChoice,{choices:E,value:v?void 0:w,onSelect:C})))),(0,t.createElement)(f.ToolbarButton,{icon:_,label:(0,x.__)("Add new slide","statik-blocks"),onClick:B}),(0,t.createElement)(f.ToolbarButton,{icon:y,label:(0,x.__)("Delete slide","statik-blocks"),onClick:I,isDisabled:!h}))}function B(){const e=u();return(0,t.createElement)(n.BlockControls,null,(0,t.createElement)(f.ToolbarGroup,null,(0,t.createElement)(C,{rootClientId:e})))}function I(){const{attributes:e,setAttributes:l}=c(),{showDirectionNav:o,showControlNav:a,autoplay:r,loop:s,autoHeight:i,interval:u,preSelectedSlide:b}=e,k=d(),p=(0,t.useMemo)((()=>k.map(((e,t)=>({value:t,label:`#${t+1}`})))),[k]);return(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(f.PanelBody,{title:(0,x.__)("Slider settings","statik-blocks")},(0,t.createElement)(f.SelectControl,{label:(0,x.__)("Pre-selected Slide","statik-blocks"),value:b,onChange:e=>{l({preSelectedSlide:Number(e)})},options:p}),(0,t.createElement)(f.ToggleControl,{label:(0,x.__)("Display navigation dots","statik-blocks"),checked:a,onChange:()=>l({showControlNav:!a})}),(0,t.createElement)(f.ToggleControl,{label:(0,x.__)("Display navigation arrows","statik-blocks"),checked:o,onChange:()=>l({showDirectionNav:!o})}),(0,t.createElement)(f.ToggleControl,{label:(0,x.__)("Start carousel automatically","statik-blocks"),checked:r,onChange:()=>l({autoplay:!r})}),(0,t.createElement)(f.ToggleControl,{label:(0,x.__)("Loop carousel indefinitely","statik-blocks"),checked:s,onChange:()=>l({loop:!s})}),(0,t.createElement)(f.ToggleControl,{label:(0,x.__)("Adjust carousel height to fit slides","statik-blocks"),checked:i,onChange:()=>l({autoHeight:!i})}),(0,t.createElement)(f.__experimentalUnitControl,{label:(0,x.__)("Interval","statik-blocks"),units:[{value:"ms",label:(0,x.__)("ms","statik-blocks"),default:3e3}],value:`${u}ms`,onChange:e=>l({interval:parseInt(e)}),__unstableInputWidth:"80px"})))}var N=window.lodash,H=window.wp.hooks;const D="blockProps";function M(e){for(const t in e)(0,N.isEmpty)(e[t])&&delete e[t]}var O=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27.68 18"},(0,t.createElement)("defs",null),(0,t.createElement)("g",{id:"Layer_2","data-name":"Layer 2"},(0,t.createElement)("g",{id:"Layer_1-2","data-name":"Layer 1"},(0,t.createElement)("path",{id:"Path_1","data-name":"Path 1",d:"M7.14,0a2.27,2.27,0,0,0-2.3,2.23V15.7A2.27,2.27,0,0,0,7.07,18H20.54a2.27,2.27,0,0,0,2.3-2.23V2.3A2.26,2.26,0,0,0,20.62,0H7.14Zm13.4,16.5H7.14a.86.86,0,0,1-.8-.8V2.3a.86.86,0,0,1,.8-.8h13.4a.86.86,0,0,1,.8.8V15.7C21.07,16.23,20.81,16.5,20.54,16.5Z"}),(0,t.createElement)("polygon",{points:"27.68 8.99 25 6.31 24.1 7.22 25.88 9 24.1 10.79 25 11.69 27.68 9.01 27.67 9 27.68 8.99"}),(0,t.createElement)("polygon",{points:"0 8.99 2.68 6.31 3.58 7.22 1.8 9 3.58 10.79 2.68 11.69 0 9.01 0.01 9 0 8.99"}),(0,t.createElement)("rect",{id:"Rectangle_2","data-name":"Rectangle 2",x:"7.86",y:"12.45",width:"9",height:"1.5"}),(0,t.createElement)("path",{className:"cls-1",d:"M7.8,7.5l3-2.4a.45.45,0,0,1,.64,0c.45.36,2.34,1.82,2.34,1.82l2.9-3.18a.52.52,0,0,1,.81,0c.47.5,2.45,2.66,2.45,2.66V8.24L17.07,5.16,14.24,8.24a.69.69,0,0,1-.85,0c-.62-.43-2.29-1.63-2.29-1.63L7.79,9.33Z"}))));const V=e=>{const{attributes:l}=e,{blockId:o,loop:n,preSelectedSlide:a,slides:r}=l,s=!Boolean(n)&&0===Number(a),i=!Boolean(n)&&Number(a)===r.length-1,c=`wp-block-${o}-slides`;return(0,t.createElement)("div",{className:"wp-block-statik-slider__direction-nav"},(0,t.createElement)("button",{className:"wp-block-statik-slider__direction-nav-button",disabled:s,"aria-controls":c,"aria-label":"Previous Slide"},(0,t.createElement)(m,null)),(0,t.createElement)("button",{className:"wp-block-statik-slider__direction-nav-button",disabled:i,"aria-controls":c,"aria-label":"Next Slide"},(0,t.createElement)(p,null)))},A=e=>{const{attributes:l}=e,{blockId:n,slides:a,preSelectedSlide:r}=l;return(0,t.createElement)("div",{className:"wp-block-statik-slider__control-nav"},a.map(((e,l)=>{const a=r===l;return(0,t.createElement)("button",{key:e.blockId,className:o("wp-block-statik-slider__control-nav-button",{"wp-block-statik-slider__control-nav-button--selected":a}),"aria-controls":`wp-block-${n}-slides`,"aria-label":`Go to the Slide ${l+1}`})})))};var P=[{attributes:{selectedSlideIndex:{type:"number",default:0},showDirectionNav:{type:"boolean",default:!0},showControlNav:{type:"boolean",default:!0},autoplay:{type:"boolean",default:!0},loop:{type:"boolean",default:!0},autoHeight:{type:"boolean",default:!1},interval:{type:"number",default:3e3},slides:{type:"array",default:[]}},save(){return(0,t.createElement)(n.InnerBlocks.Content,null)}}],L=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/slider","version":"4.11.2","title":"Slider","category":"layout","description":"Display a carousel which prints one element at the time of a collection in a cyclic view.","keywords":[],"textdomain":"statik-blocks","attributes":{"selectedSlideIndex":{"type":"number","default":0},"preSelectedSlide":{"type":"number","default":0},"showDirectionNav":{"type":"boolean","default":true},"showControlNav":{"type":"boolean","default":true},"autoplay":{"type":"boolean","default":true},"loop":{"type":"boolean","default":true},"autoHeight":{"type":"boolean","default":false},"interval":{"type":"number","default":3000},"slides":{"type":"array","default":[]}},"example":{"attributes":{"innerBlocks":[{"name":"statik/slider-slide"}]}},"supports":{"align":["wide","full"],"html":false},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","viewScript":"file:./build/view.js"}');const j=()=>{var e,t;if("undefined"!=typeof statikBlocks)return Boolean(null===(e=statikBlocks)||void 0===e||null===(t=e.config)||void 0===t?void 0:t.saveJsExecution);throw new Error("`statikBlocks` variable does not exist")},z={icon:O,edit:function(){const{showDirectionNav:l,showControlNav:a,autoHeight:r}=(()=>{const{attributes:e,setAttributes:l}=c(),{selectedSlideIndex:o,showDirectionNav:n,showControlNav:a,autoHeight:r}=e,s=S(),i=s.length>0,[d,u]=(0,t.useState)((()=>s[o]));return(0,t.useEffect)((()=>{i&&u(s[o])}),[o]),(0,t.useEffect)((()=>{i&&s.includes(d)&&l({selectedSlideIndex:s.indexOf(d)})}),[s]),{showDirectionNav:n,showControlNav:a,autoHeight:r}})();!function(){const{setAttributes:e}=c(),l=d();(0,t.useEffect)((()=>{const t=l.map((e=>{const{blockId:t}=e.attributes;return{blockId:t}}));e({slides:t})}),[l])}();const i=(0,n.useBlockProps)({className:o({"wp-block-statik-slider--auto-height":Boolean(r)})});return function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{attributes:o,setAttributes:a}=c(),{name:r}=(0,n.useBlockEditContext)(),s=Object.entries(o).filter((e=>e[0]!==D)).sort(((e,t)=>e[0].localeCompare(t[0]))).map((e=>e[1]));(0,t.useEffect)((()=>{const t=(0,H.applyFilters)("blocks.getSaveContent.extraProps",{...l},(0,e.getBlockType)(r),o);M(t),a({blockProps:t})}),[JSON.stringify(s)])}(),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(B,null),(0,t.createElement)(I,null),(0,t.createElement)("div",i,(0,t.createElement)(s,null),l&&(0,t.createElement)(v,null),a&&(0,t.createElement)(w,null)))},save:function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,t.createElement)(n.InnerBlocks.Content,null);return t=>j()?e(t):l}((function(e){const{attributes:l}=e,{blockId:a,showDirectionNav:r,showControlNav:s,autoHeight:i}=l,c=n.useBlockProps.save({className:o(`wp-block-${a}`,{"wp-block-statik-slider--auto-height":Boolean(i)}),"aria-roledescription":"carousel","aria-label":"Slideshow"}),d=n.useInnerBlocksProps.save({id:`wp-block-${a}-slides`,className:"wp-block-statik-slider__slides","aria-live":"off"});return(0,t.createElement)("div",c,(0,t.createElement)("div",{className:"wp-block-statik-slider__slides-container"},(0,t.createElement)("div",d)),r&&(0,t.createElement)(V,{attributes:l}),s&&(0,t.createElement)(A,{attributes:l}))})),deprecated:P};(0,e.registerBlockType)(L,z)}},l={};function o(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,l,n,a){if(!l){var r=1/0;for(d=0;d<e.length;d++){l=e[d][0],n=e[d][1],a=e[d][2];for(var s=!0,i=0;i<l.length;i++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](l[i])}))?l.splice(i--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[l,n,a]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={8983:0,2165:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,a,r=l[0],s=l[1],i=l[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(i)var d=i(o)}for(t&&t(l);c<r.length;c++)a=r[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},l=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var n=o.O(void 0,[2165],(function(){return o(6394)}));n=o.O(n)}();