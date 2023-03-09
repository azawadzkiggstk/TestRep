!function(){var e,t={8507:function(e,t,o){"use strict";var r=window.wp.element,n=(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 94 55",version:"1.1",viewBox:"0 0 94 55",xmlSpace:"preserve"},(0,r.createElement)("path",{d:"M0 37c0 2.2 1.7 3.9 3.9 3.9h29L47 55l14.1-14.1h29c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9H3.9C1.7 33.1 0 34.8 0 37zM32.9 14.1h-29C1.7 14.1 0 15.9 0 18s1.7 3.9 3.9 3.9h86.2c2.2 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9h-29L47 0 32.9 14.1z"})),a=o(4184),s=o.n(a),l=window.wp.components,i=window.wp.blockEditor,c=window.wp.compose,u=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/separator","title":"Separator","category":"design","description":"Create a break between ideas or sections with a horizontal separator.","keywords":["horizontal-line","hr","divider"],"textdomain":"default","attributes":{"opacity":{"type":"string","default":"alpha-channel"}},"supports":{"anchor":true,"align":["center","wide","full"],"color":{"enableContrastChecker":false,"__experimentalSkipSerialization":true,"gradients":true,"background":true,"text":false,"__experimentalDefaultControls":{"background":true}},"spacing":{"margin":["top","bottom"]}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"wide","label":"Wide Line"},{"name":"dots","label":"Dots"}],"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}'),d=window.wp.blocks,p={from:[{type:"enter",regExp:/^-{3,}$/,transform:()=>(0,d.createBlock)("core/separator")},{type:"raw",selector:"hr",schema:{hr:{}}}]},f=window.wp.hooks,h=window.wp.data,v=window.lodash,g=[{attributes:{color:{type:"string"},customColor:{type:"string"}},save(e){let{attributes:t}=e;const{color:o,customColor:n}=t,a=(0,i.getColorClassName)("background-color",o),l=(0,i.getColorClassName)("color",o),c=s()({"has-text-color has-background":o||n,[a]:a,[l]:l}),u={backgroundColor:a?void 0:n,color:l?void 0:n};return(0,r.createElement)("hr",i.useBlockProps.save({className:c,style:u}))},migrate(e){const{color:t,customColor:o,...r}=e;return{...r,backgroundColor:t||void 0,opacity:"css",style:o?{color:{background:o}}:void 0}}}];const{name:m}=u;var b,k,y;b=m,k=u,y={icon:n,example:{attributes:{customColor:"#065174",className:"is-style-wide"}},transforms:p,edit:function(e){var t,o;let{attributes:n,setAttributes:a}=e;const{backgroundColor:u,opacity:d,style:p}=n,f=(0,i.__experimentalUseColorProps)(n),h=null==f||null===(t=f.style)||void 0===t?void 0:t.backgroundColor,v=!(null==p||null===(o=p.color)||void 0===o||!o.background);!function(e,t,o){const[n,a]=(0,r.useState)(!1),s=(0,c.usePrevious)(t);(0,r.useEffect)((()=>{"css"!==e||t||s||a(!0)}),[t,s,e]),(0,r.useEffect)((()=>{"css"===e&&(n&&t||s&&t!==s)&&(o({opacity:"alpha-channel"}),a(!1))}),[n,t,s])}(d,h,a);const g=(0,i.getColorClassName)("color",u),m=s()({"has-text-color":u||h,[g]:g,"has-css-opacity":"css"===d,"has-alpha-channel-opacity":"alpha-channel"===d},f.className),b={color:h,backgroundColor:h};return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.HorizontalRule,(0,i.useBlockProps)({className:m,style:v?b:void 0})))},save:function(e){var t,o;let{attributes:n}=e;const{backgroundColor:a,style:l,opacity:c}=n,u=null==l||null===(t=l.color)||void 0===t?void 0:t.background,d=(0,i.__experimentalGetColorClassesAndStyles)(n),p=(0,i.getColorClassName)("color",a),f=s()({"has-text-color":a||u,[p]:p,"has-css-opacity":"css"===c,"has-alpha-channel-opacity":"alpha-channel"===c},d.className),h={backgroundColor:null==d||null===(o=d.style)||void 0===o?void 0:o.backgroundColor,color:p?void 0:u};return(0,r.createElement)("hr",i.useBlockProps.save({className:f,style:h}))},deprecated:g},(0,f.addFilter)("blocks.registerBlockType",`statik/override/${b}`,((e,t,o)=>t===b&&(0,v.isNil)(o)?((0,h.select)("statik").getOverriddenBlocks().includes(b)||(0,h.dispatch)("statik").addOverriddenBlock(b),(0,v.merge)({},e,k,y)):e))},4184:function(e,t){var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&e.push(s)}}else if("object"===a){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var l in o)r.call(o,l)&&o[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,o,n,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],a=e[u][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[i])}))?o.splice(i--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={2888:0,9575:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,s=o[0],l=o[1],i=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(i)var u=i(r)}for(t&&t(o);c<s.length;c++)a=s[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var n=r.O(void 0,[9575],(function(){return r(8507)}));n=r.O(n)}();