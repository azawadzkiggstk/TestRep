!function(){"use strict";var t,e={4312:function(){var t=window.wp.blocks,e=window.wp.element,i=(0,e.createElement)("svg",{version:"1.1",id:"Layer_1",focusable:"false",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},(0,e.createElement)("g",null,(0,e.createElement)("polygon",{points:"2.5,14.8 6,11.3 9.4,14.8 11.5,14.8 6,9.2 0.4,14.8 \t"}),(0,e.createElement)("polygon",{points:"21.5,9.2 18,12.6 14.6,9.2 12.5,9.2 18,14.8 23.6,9.2 \t"})),(0,e.createElement)("rect",{y:"3.9",width:"24",height:"1.4"}),(0,e.createElement)("rect",{y:"18.6",width:"24",height:"1.4"})),r=window.wp.blockEditor;const n=["default","desktop","tablet","mobile"],s=t=>n.indexOf(t),a=t=>new o(t);class o{constructor(t){var e,i;i=[],(e="attribute")in this?Object.defineProperty(this,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[e]=i,this.attribute=[...t]}get default(){return this.attribute[0]}setDefault(t){this.attribute[0]=t}get desktop(){return this.attribute[1]}setDesktop(t){this.attribute[1]=t}get tablet(){return this.attribute[2]}setTablet(t){this.attribute[2]=t}get mobile(){return this.attribute[3]}setMobile(t){this.attribute[3]=t}getDeviceValue(t){const e=s(t);return this.attribute[e]}setDeviceValue(t,e){const i=s(t);this.attribute[i]=e}get inherit(){return{default:l(this.attribute,0),desktop:l(this.attribute,1),tablet:l(this.attribute,2),mobile:l(this.attribute,3)}}map(t){return[{breakpoint:null,value:l(this.attribute,0)},{breakpoint:1e3,value:l(this.attribute,1)},{breakpoint:500,value:l(this.attribute,2)},{breakpoint:0,value:l(this.attribute,3)}].map(t)}assignObject(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.attribute=p(this.attribute,...e),this.attribute}assignArray(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.attribute=b(this.attribute,...e),this.attribute}toRwd(){return this.attribute.map((t=>null!=t?t:""))}toObject(){return u(this.attribute)}}const l=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!Array.isArray(t))throw new Error(`Attribute value has to be array, but ${typeof t} given.`);switch(e){case 3:case 2:case 1:case 0:return c(t,e);default:return c(t,0)}},c=(t,e)=>void 0!==t[e]&&null!==t[e]&&""!==t[e]||0===e?t[e]:c(t,Math.max(e-1,0)),u=t=>t.reduce(((t,e,i)=>{const r=(t=>n[t])(i);return t[r]=e,t}),{}),h=t=>n.reduce(((e,i,r)=>(e[r]=t[i],e)),[]),p=function(t){const e=u(t);for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];const s=Object.assign({},e,...r);return h(s)},b=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return Object.entries(Object.assign({},t,...i)).sort(((t,e)=>parseInt(t[0])-parseInt(e[0]))).map((t=>t[1]))};var d=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/spacer","version":"4.11.2","title":"Spacer","category":"layout","description":"Display a vertical white-space to position other visible elements of the website.","keywords":[],"textdomain":"statik-blocks","attributes":{"height":{"type":"array","items":{"type":"string"},"default":["100px"]}},"example":{"attributes":{"height":["100px"]}},"supports":{"anchor":true},"editorScript":"file:./build/index.js","editorStyle":["file:./build/index.css","file:./build/style-index.css"],"style":"file:./build/style-index.css"}'),m=window.wp.components,v=window.wp.i18n,g=window.wp.primitives,w=(0,e.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(g.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),f=(0,e.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(g.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),k=(0,e.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(g.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),y=(0,e.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(g.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"}));const x=[{name:"default",title:(0,e.createElement)(m.Icon,{icon:w}),device:0},{name:"desktop",title:(0,e.createElement)(m.Icon,{icon:f}),device:1},{name:"tablet",title:(0,e.createElement)(m.Icon,{icon:k}),device:2},{name:"mobile",title:(0,e.createElement)(m.Icon,{icon:y}),device:3}];function E(t){const{children:i}=t;return(0,e.createElement)(m.TabPanel,{tabs:x},i)}var _=window.wp.data;function z(t){const{clientId:i}=(0,r.useBlockEditContext)(),n=null!=t?t:i,{updateBlockAttributes:s}=(0,_.useDispatch)("core/block-editor");return{attributes:(0,_.useSelect)((t=>{const{getBlockAttributes:e}=t("core/block-editor");return e(n)}),[n]),setAttributes:(0,e.useCallback)((t=>{s(n,t)}))}}function S(t){return(0,e.useMemo)((()=>a(t)),[t])}function V(){const{attributes:t,setAttributes:i}=z(),{height:n}=t,s=S(n),a=(0,e.useCallback)((t=>e=>{s.setDeviceValue(t,e),i({height:s.toRwd()})}));return(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(m.PanelBody,{title:(0,v.__)("Spacer settings","statik-blocks")},(0,e.createElement)(E,null,(t=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(m.__experimentalDivider,{marginTop:"0 !important"}),(0,e.createElement)(m.__experimentalUnitControl,{label:(0,v.__)("Vertical spacing","statik-blocks"),value:s.getDeviceValue(t.name),onChange:a(t.name),step:1,isPressEnterToChange:!0,placeholder:(0,v.__)("inherit","statik-blocks"),__unstableInputWidth:"80px"}))))))}const O=[16,24,32,42,64,72,96,128,256];var R=window.lodash,A=window.wp.hooks;const B="blockProps";function C(t){for(const e in t)(0,R.isEmpty)(t[e])&&delete t[e]}const P={icon:i,edit:function(i){const{isSelected:n}=i,{boxHeight:s,isResizing:a,handleResizeStart:o,handleResize:l,handleResizeStop:c}=(()=>{const{attributes:t,setAttributes:i}=z(),{height:r}=t,n=S(r),s=n.default,[a,o]=(0,e.useState)(!1),[l,c]=(0,e.useState)(s),{toggleSelection:u}=(0,_.useDispatch)("core/editor"),h=(0,e.useCallback)((()=>{o(!0),u(!1)})),p=(0,e.useCallback)(((t,e,i)=>{c(i.clientHeight),o(!0),u(!1)})),b=(0,e.useCallback)(((t,e,r,s)=>{if(0!==s.height){const t=((t,e)=>{const i=t-void 0;let r=t;if(!O.includes(t))if(i>0){const e=10*Math.ceil(t/10);r=O.find((i=>i>t&&i<e))||e}else if(i<0){const e=10*Math.floor(t/10);r=O.find((i=>i<t&&i>e))||e}return r=Math.min(parseInt(r,10),1/0),r})(r.clientHeight);n.setDefault(`${t}px`),c(t),i({height:n.toRwd()})}o(!1),u(!0)}));return{boxHeight:a?l:s,isResizing:a,setIsResizing:o,handleResizeStart:h,handleResize:p,handleResizeStop:b}})(),u=(0,r.useBlockProps)();return function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{attributes:n,setAttributes:s}=z(),{name:a}=(0,r.useBlockEditContext)(),o=Object.entries(n).filter((t=>t[0]!==B)).sort(((t,e)=>t[0].localeCompare(e[0]))).map((t=>t[1]));(0,e.useEffect)((()=>{const e=(0,A.applyFilters)("blocks.getSaveContent.extraProps",{...i},(0,t.getBlockType)(a),n);C(e),s({blockProps:e})}),[JSON.stringify(o)])}(),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(V,null),(0,e.createElement)("div",u,(0,e.createElement)(m.ResizableBox,{className:"wp-block-statik-spacer__resizable-box",size:{height:s},enable:{top:!1,right:!1,bottom:!0,left:!1},minHeight:10,onResizeStart:o,onResize:l,onResizeStop:c,showHandle:n,__experimentalShowTooltip:!0,__experimentalTooltipProps:{axis:"y",position:"bottom",isVisible:a}})))},save:function(t){const{attributes:i}=t,{height:n}=i,s=r.useBlockProps.save(),o=a(n);return(0,e.createElement)("div",s,(0,e.createElement)("div",{className:"wp-block-statik-spacer--mobile",style:{height:o.inherit.mobile}}),(0,e.createElement)("div",{className:"wp-block-statik-spacer--tablet",style:{height:o.inherit.tablet}}),(0,e.createElement)("div",{className:"wp-block-statik-spacer--desktop",style:{height:o.inherit.desktop}}))},deprecated:[{attributes:{height:{type:"array",items:{type:"string"},default:["100px"]}},save(){return null}}]};(0,t.registerBlockType)(d,P)}},i={};function r(t){var n=i[t];if(void 0!==n)return n.exports;var s=i[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.m=e,t=[],r.O=function(e,i,n,s){if(!i){var a=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],s=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(t){return r.O[t](i[l])}))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,n,s]},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={1712:0,3128:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,a=i[0],o=i[1],l=i[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var u=l(r)}for(e&&e(i);c<a.length;c++)s=a[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},i=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var n=r.O(void 0,[3128],(function(){return r(4312)}));n=r.O(n)}();