!function(){"use strict";var e,t={6039:function(e,t,r){var n=window.wp.element,l=(0,n.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{fill:"#1e1e1e",d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),o=window.wp.i18n,i=window.wp.blockEditor,a=window.lodash;const s=e=>{if(!(0,a.isObject)(e)||Array.isArray(e))return e;const t=(0,a.pickBy)((0,a.mapValues)(e,s),a.identity);return(0,a.isEmpty)(t)?void 0:t};var c=s,u=window.wp.blocks;function p(e){var t;const r={ordered:"OL"===e.tagName,anchor:""===e.id?void 0:e.id,start:e.getAttribute("start")?parseInt(e.getAttribute("start"),10):void 0,reversed:!!e.hasAttribute("reversed")||void 0,type:null!==(t=e.getAttribute("type"))&&void 0!==t?t:void 0},n=Array.from(e.children).map((e=>{const t=Array.from(e.childNodes).filter((e=>e.nodeType!==e.TEXT_NODE||0!==e.textContent.trim().length));t.reverse();const[r,...n]=t;if("UL"!==(null==r?void 0:r.tagName)&&"OL"!==(null==r?void 0:r.tagName))return(0,u.createBlock)("core/list-item",{content:e.innerHTML});const l=n.map((e=>e.nodeType===e.TEXT_NODE?e.textContent:e.outerHTML));l.reverse();const o={content:l.join("").trim()},i=[p(r)];return(0,u.createBlock)("core/list-item",o,i)}));return(0,u.createBlock)("core/list",r,n)}function d(e){const{values:t,start:r,reversed:n,ordered:l,type:o}=e,i=document.createElement(l?"ol":"ul");i.innerHTML=t,r&&i.setAttribute("start",r),n&&i.setAttribute("reversed",!0),o&&i.setAttribute("type",o);const a=p(i),{values:s,...c}=e;return[{...c,...a.attributes},a.innerBlocks]}var m=[{attributes:{ordered:{type:"boolean",default:!1,__experimentalRole:"content"},values:{type:"string",source:"html",selector:"ol,ul",multiline:"li",__unstableMultilineWrapperTags:["ol","ul"],default:"",__experimentalRole:"content"},type:{type:"string"},start:{type:"number"},reversed:{type:"boolean"},placeholder:{type:"string"}},supports:{anchor:!0,className:!1,typography:{fontSize:!0,__experimentalFontFamily:!0,lineHeight:!0,__experimentalFontStyle:!0,__experimentalFontWeight:!0,__experimentalLetterSpacing:!0,__experimentalTextTransform:!0,__experimentalDefaultControls:{fontSize:!0}},color:{gradients:!0,link:!0,__experimentalDefaultControls:{background:!0,text:!0}},__unstablePasteTextInline:!0,__experimentalSelector:"ol,ul",__experimentalSlashInserter:!0},save(e){let{attributes:t}=e;const{ordered:r,values:l,type:o,reversed:a,start:s}=t,c=r?"ol":"ul";return(0,n.createElement)(c,i.useBlockProps.save({type:o,reversed:a,start:s}),(0,n.createElement)(i.RichText.Content,{value:l,multiline:"li"}))},migrate:d},{attributes:{ordered:{type:"boolean",default:!1,__experimentalRole:"content"},values:{type:"string",source:"html",selector:"ol,ul",multiline:"li",__unstableMultilineWrapperTags:["ol","ul"],default:"",__experimentalRole:"content"},type:{type:"string"},start:{type:"number"},reversed:{type:"boolean"},placeholder:{type:"string"}},supports:{anchor:!0,className:!1,typography:{fontSize:!0,__experimentalFontFamily:!0},color:{gradients:!0,link:!0},__unstablePasteTextInline:!0,__experimentalSelector:"ol,ul",__experimentalSlashInserter:!0},save(e){let{attributes:t}=e;const{ordered:r,values:l,type:o,reversed:a,start:s}=t,c=r?"ol":"ul";return(0,n.createElement)(c,i.useBlockProps.save({type:o,reversed:a,start:s}),(0,n.createElement)(i.RichText.Content,{value:l,multiline:"li"}))},migrate:function(e){var t,r;if(null==e||null===(t=e.style)||void 0===t||null===(r=t.typography)||void 0===r||!r.fontFamily)return e;const n=(0,a.cloneDeep)(e),l=n.style.typography.fontFamily.split("|").pop();return delete n.style.typography.fontFamily,n.style=c(n.style),{...n,fontFamily:l}},isEligible(e){var t;let{style:r}=e;return null==r||null===(t=r.typography)||void 0===t?void 0:t.fontFamily}}];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}var h=window.wp.components,_=window.wp.data,f=window.wp.primitives,g=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM15.4697 14.9697L18.4393 12L15.4697 9.03033L16.5303 7.96967L20.0303 11.4697L20.5607 12L20.0303 12.5303L16.5303 16.0303L15.4697 14.9697Z"})),y=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"})),b=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"})),k=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),w=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M3.8 15.8h8.9v-1.5H3.8v1.5zm0-7h8.9V7.2H3.8v1.6zm14.7-2.1V10h1V5.3l-2.2.7.3 1 .9-.3zm1.2 6.1c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5H20v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3 0-.8-.3-1.1z"})),x=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"})),B=window.wp.deprecated,E=r.n(B),T=e=>{let{setAttributes:t,reversed:r,start:l}=e;return(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(h.PanelBody,{title:(0,o.__)("Ordered list settings")},(0,n.createElement)(h.TextControl,{label:(0,o.__)("Start value"),type:"number",onChange:e=>{const r=parseInt(e,10);t({start:isNaN(r)?void 0:r})},value:Number.isInteger(l)?l.toString(10):"",step:"1"}),(0,n.createElement)(h.ToggleControl,{label:(0,o.__)("Reverse list numbering"),checked:r||!1,onChange:e=>{t({reversed:e||void 0})}})))},C=(0,n.forwardRef)((function(e,t){const{ordered:r,...l}=e,o=r?"ol":"ul";return(0,n.createElement)(o,v({ref:t},l))}));const S=[["core/list-item"]];function z(e){let{clientId:t}=e;const[r,l]=function(e){const{canOutdent:t}=(0,_.useSelect)((t=>{const{getBlockRootClientId:r,getBlock:n}=t(i.store),l=r(e);return{canOutdent:!!l&&"core/list-item"===n(l).name}}),[e]),{replaceBlocks:r,selectionChange:l}=(0,_.useDispatch)(i.store),{getBlockRootClientId:o,getBlockAttributes:a,getBlock:s}=(0,_.useSelect)(i.store);return[t,(0,n.useCallback)((()=>{const t=o(e),n=a(t),i=(0,u.createBlock)("core/list-item",n),{innerBlocks:c}=s(e);r([t],[i,...c]),l(c[c.length-1].clientId)}),[e])]}(t);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(h.ToolbarButton,{icon:(0,o.isRTL)()?g:y,title:(0,o.__)("Outdent"),describedBy:(0,o.__)("Outdent list item"),disabled:!r,onClick:l}))}var O=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/list","title":"List","category":"text","description":"Create a bulleted or numbered list.","keywords":["bullet list","ordered list","numbered list"],"textdomain":"default","attributes":{"ordered":{"type":"boolean","default":false,"__experimentalRole":"content"},"values":{"type":"string","source":"html","selector":"ol,ul","multiline":"li","__unstableMultilineWrapperTags":["ol","ul"],"default":"","__experimentalRole":"content"},"type":{"type":"string"},"start":{"type":"number"},"reversed":{"type":"boolean"},"placeholder":{"type":"string"}},"supports":{"anchor":true,"className":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"margin":true,"padding":true},"__unstablePasteTextInline":true,"__experimentalSelector":"ol,ul","__experimentalSlashInserter":true},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}'),V=window.wp.richText;function H(e){let{phrasingContentSchema:t}=e;const r={...t,ul:{},ol:{attributes:["type","start","reversed"]}};return["ul","ol"].forEach((e=>{r[e].children={li:{children:r}}})),r}function M(e){return e.flatMap((e=>{let{name:t,attributes:r,innerBlocks:n=[]}=e;return"core/list-item"===t?[r.content,...M(n)]:M(n)}))}var L={from:[{type:"block",isMultiBlock:!0,blocks:["core/paragraph","core/heading"],transform:e=>{let t=[];if(e.length>1)t=e.map((e=>{let{content:t}=e;return(0,u.createBlock)("core/list-item",{content:t})}));else if(1===e.length){const r=(0,V.create)({html:e[0].content});t=(0,V.split)(r,"\n").map((e=>(0,u.createBlock)("core/list-item",{content:(0,V.toHTMLString)({value:e})})))}return(0,u.createBlock)("core/list",{anchor:e.anchor},t)}},{type:"raw",selector:"ol,ul",schema:e=>({ol:H(e).ol,ul:H(e).ul}),transform:p},...["*","-"].map((e=>({type:"prefix",prefix:e,transform(e){return(0,u.createBlock)("core/list",{},[(0,u.createBlock)("core/list-item",{content:e})])}}))),...["1.","1)"].map((e=>({type:"prefix",prefix:e,transform(e){return(0,u.createBlock)("core/list",{ordered:!0},[(0,u.createBlock)("core/list-item",{content:e})])}})))],to:[...["core/paragraph","core/heading"].map((e=>({type:"block",blocks:[e],transform:(t,r)=>M(r).map((t=>(0,u.createBlock)(e,{content:t})))}))),{type:"block",blocks:["*"],transform:(e,t)=>M(t).map((e=>(0,u.createBlock)("core/paragraph",{content:e})))}]},I=window.wp.hooks;const{name:P}=O;!function(e,t,r){(0,I.addFilter)("blocks.registerBlockType",`statik/override/${e}`,((n,l,o)=>l===e&&(0,a.isNil)(o)?((0,_.select)("statik").getOverriddenBlocks().includes(e)||(0,_.dispatch)("statik").addOverriddenBlock(e),(0,a.merge)({},n,t,r)):n))}(P,O,{icon:l,example:{innerBlocks:[{name:"core/list-item",attributes:{content:(0,o.__)("Alice.")}},{name:"core/list-item",attributes:{content:(0,o.__)("The White Rabbit.")}},{name:"core/list-item",attributes:{content:(0,o.__)("The Cheshire Cat.")}},{name:"core/list-item",attributes:{content:(0,o.__)("The Mad Hatter.")}},{name:"core/list-item",attributes:{content:(0,o.__)("The Queen of Hearts.")}}]},transforms:L,edit:function(e){let{attributes:t,setAttributes:r,clientId:l,style:a}=e;const s=(0,i.useBlockProps)({...n.Platform.isNative&&{style:a}}),c=(0,i.useInnerBlocksProps)(s,{allowedBlocks:["core/list-item"],template:S,templateLock:!1,templateInsertUpdatesSelection:!0,...n.Platform.isNative&&{marginVertical:8,marginHorizontal:8,useCompactList:!0}});!function(e,t){const r=(0,_.useRegistry)(),{updateBlockAttributes:l,replaceInnerBlocks:o}=(0,_.useDispatch)(i.store);(0,n.useEffect)((()=>{if(!e.values)return;const[n,i]=d(e);E()("Value attribute on the list block",{since:"6.0",version:"6.5",alternative:"inner blocks"}),r.batch((()=>{l(t,n),o(t,i)}))}),[e.values])}(t,l);const{ordered:u,type:p,reversed:m,start:f}=t,g=(0,n.createElement)(i.BlockControls,{group:"block"},(0,n.createElement)(h.ToolbarButton,{icon:(0,o.isRTL)()?b:k,title:(0,o.__)("Unordered"),describedBy:(0,o.__)("Convert to unordered list"),isActive:!1===u,onClick:()=>{r({ordered:!1})}}),(0,n.createElement)(h.ToolbarButton,{icon:(0,o.isRTL)()?w:x,title:(0,o.__)("Ordered"),describedBy:(0,o.__)("Convert to ordered list"),isActive:!0===u,onClick:()=>{r({ordered:!0})}}),(0,n.createElement)(z,{clientId:l}));return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(C,v({ordered:u,reversed:m,start:f,type:p},c)),g,u&&(0,n.createElement)(T,{setAttributes:r,ordered:u,reversed:m,start:f}))},save:function(e){let{attributes:t}=e;const{ordered:r,type:l,reversed:o,start:a}=t,s=r?"ol":"ul";return(0,n.createElement)(s,i.useBlockProps.save({type:l,reversed:o,start:a}),(0,n.createElement)(i.InnerBlocks.Content,null))},deprecated:m})}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,l,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],l=e[u][1],o=e[u][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,l,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={116:0,9359:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,o,i=r[0],a=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(s)var u=s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var l=n.O(void 0,[9359],(function(){return n(6039)}));l=n.O(l)}();