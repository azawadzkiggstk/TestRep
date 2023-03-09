!function(){var e,t={9752:function(e,t,o){"use strict";var r=window.wp.i18n,l=window.wp.element,n=(0,l.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{fill:"#1e1e1e",d:"M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"})),a=o(4184),i=o.n(a),c=window.lodash,s=window.wp.blockEditor,u=window.wp.data,m=window.wp.richText;const p="is-style-solid-color",g={value:{type:"string",source:"html",selector:"blockquote",multiline:"p"},citation:{type:"string",source:"html",selector:"cite",default:""},mainColor:{type:"string"},customMainColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"}};function d(e){if(!e)return;const t=e.match(/border-color:([^;]+)[;]?/);return t&&t[1]?t[1]:void 0}function v(e){return(0,m.toHTMLString)({value:(0,m.replace)((0,m.create)({html:e,multilineTag:"p"}),new RegExp(m.__UNSTABLE_LINE_SEPARATOR,"g"),"\n")})}var h=[{attributes:{value:{type:"string",source:"html",selector:"blockquote",multiline:"p",__experimentalRole:"content"},citation:{type:"string",source:"html",selector:"cite",default:"",__experimentalRole:"content"},textAlign:{type:"string"}},save(e){let{attributes:t}=e;const{textAlign:o,citation:r,value:n}=t,a=!s.RichText.isEmpty(r);return(0,l.createElement)("figure",s.useBlockProps.save({className:i()({[`has-text-align-${o}`]:o})}),(0,l.createElement)("blockquote",null,(0,l.createElement)(s.RichText.Content,{value:n,multiline:!0}),a&&(0,l.createElement)(s.RichText.Content,{tagName:"cite",value:r})))},migrate(e){let{value:t,...o}=e;return{value:v(t),...o}}},{attributes:{...g},save(e){let{attributes:t}=e;const{mainColor:o,customMainColor:r,customTextColor:n,textColor:a,value:u,citation:m,className:g}=t;let d,v;if((0,c.includes)(g,p)){const e=(0,s.getColorClassName)("background-color",o);d=i()({"has-background":e||r,[e]:e}),v={backgroundColor:e?void 0:r}}else r&&(v={borderColor:r});const h=(0,s.getColorClassName)("color",a),f=i()({"has-text-color":a||n,[h]:h}),b=h?void 0:{color:n};return(0,l.createElement)("figure",s.useBlockProps.save({className:d,style:v}),(0,l.createElement)("blockquote",{className:f,style:b},(0,l.createElement)(s.RichText.Content,{value:u,multiline:!0}),!s.RichText.isEmpty(m)&&(0,l.createElement)(s.RichText.Content,{tagName:"cite",value:m})))},migrate(e){let{value:t,className:o,mainColor:r,customMainColor:l,customTextColor:n,...a}=e;const i=(0,c.includes)(o,p);let s;return l&&(s=i?{color:{background:l}}:{border:{color:l}}),n&&s&&(s.color={...s.color,text:n}),{value:v(t),className:o,backgroundColor:i?r:void 0,borderColor:i?void 0:r,textAlign:i?"left":void 0,style:s,...a}}},{attributes:{...g,figureStyle:{source:"attribute",selector:"figure",attribute:"style"}},save(e){let{attributes:t}=e;const{mainColor:o,customMainColor:r,textColor:n,customTextColor:a,value:u,citation:m,className:g,figureStyle:v}=t;let h,f;if((0,c.includes)(g,p)){const e=(0,s.getColorClassName)("background-color",o);h=i()({"has-background":e||r,[e]:e}),f={backgroundColor:e?void 0:r}}else r?f={borderColor:r}:o&&(f={borderColor:d(v)});const b=(0,s.getColorClassName)("color",n),x=(n||a)&&i()("has-text-color",{[b]:b}),k=b?void 0:{color:a};return(0,l.createElement)("figure",{className:h,style:f},(0,l.createElement)("blockquote",{className:x,style:k},(0,l.createElement)(s.RichText.Content,{value:u,multiline:!0}),!s.RichText.isEmpty(m)&&(0,l.createElement)(s.RichText.Content,{tagName:"cite",value:m})))},migrate(e){let{value:t,className:o,figureStyle:r,mainColor:l,customMainColor:n,customTextColor:a,...i}=e;const s=(0,c.includes)(o,p);let u;if(n&&(u=s?{color:{background:n}}:{border:{color:n}}),a&&u&&(u.color={...u.color,text:a}),!s&&l&&r){const e=d(r);if(e)return{value:v(t),...i,className:o,style:{border:{color:e}}}}return{value:v(t),className:o,backgroundColor:s?l:void 0,borderColor:s?void 0:l,textAlign:s?"left":void 0,style:u,...i}}},{attributes:g,save(e){let{attributes:t}=e;const{mainColor:o,customMainColor:r,textColor:n,customTextColor:a,value:m,citation:g,className:d}=t;let v,h;if((0,c.includes)(d,p))v=(0,s.getColorClassName)("background-color",o),v||(h={backgroundColor:r});else if(r)h={borderColor:r};else if(o){const e=(0,c.get)((0,u.select)(s.store).getSettings(),["colors"],[]);h={borderColor:(0,s.getColorObjectByAttributeValues)(e,o).color}}const f=(0,s.getColorClassName)("color",n),b=n||a?i()("has-text-color",{[f]:f}):void 0,x=f?void 0:{color:a};return(0,l.createElement)("figure",{className:v,style:h},(0,l.createElement)("blockquote",{className:b,style:x},(0,l.createElement)(s.RichText.Content,{value:m,multiline:!0}),!s.RichText.isEmpty(g)&&(0,l.createElement)(s.RichText.Content,{tagName:"cite",value:g})))},migrate(e){let{value:t,className:o,mainColor:r,customMainColor:l,customTextColor:n,...a}=e;const i=(0,c.includes)(o,p);let s={};return l&&(s=i?{color:{background:l}}:{border:{color:l}}),n&&s&&(s.color={...s.color,text:n}),{value:v(t),className:o,backgroundColor:i?r:void 0,borderColor:i?void 0:r,textAlign:i?"left":void 0,style:s,...a}}},{attributes:{...g},save(e){let{attributes:t}=e;const{value:o,citation:r}=t;return(0,l.createElement)("blockquote",null,(0,l.createElement)(s.RichText.Content,{value:o,multiline:!0}),!s.RichText.isEmpty(r)&&(0,l.createElement)(s.RichText.Content,{tagName:"cite",value:r}))},migrate(e){let{value:t,...o}=e;return{value:v(t),...o}}},{attributes:{...g,citation:{type:"string",source:"html",selector:"footer"},align:{type:"string",default:"none"}},save(e){let{attributes:t}=e;const{value:o,citation:r,align:n}=t;return(0,l.createElement)("blockquote",{className:`align${n}`},(0,l.createElement)(s.RichText.Content,{value:o,multiline:!0}),!s.RichText.isEmpty(r)&&(0,l.createElement)(s.RichText.Content,{tagName:"footer",value:r}))},migrate(e){let{value:t,...o}=e;return{value:v(t),...o}}}],f=window.wp.blocks;const b="web"===l.Platform.OS;var x=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/pullquote","title":"Pullquote","category":"text","description":"Give special visual emphasis to a quote from your text.","textdomain":"default","attributes":{"value":{"type":"string","source":"html","selector":"p","__experimentalRole":"content"},"citation":{"type":"string","source":"html","selector":"cite","default":"","__experimentalRole":"content"},"textAlign":{"type":"string"}},"supports":{"anchor":true,"align":["left","right","wide","full"],"color":{"gradients":true,"background":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true,"fontAppearance":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"__experimentalStyle":{"typography":{"fontSize":"1.5em","lineHeight":"1.6"}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}'),k={from:[{type:"block",isMultiBlock:!0,blocks:["core/paragraph"],transform:e=>(0,f.createBlock)("core/pullquote",{value:(0,m.toHTMLString)({value:(0,m.join)(e.map((e=>{let{content:t}=e;return(0,m.create)({html:t})})),"\n")}),anchor:e.anchor})},{type:"block",blocks:["core/heading"],transform:e=>{let{content:t,anchor:o}=e;return(0,f.createBlock)("core/pullquote",{value:t,anchor:o})}}],to:[{type:"block",blocks:["core/paragraph"],transform:e=>{let{value:t,citation:o}=e;const r=[];return t&&r.push((0,f.createBlock)("core/paragraph",{content:t})),o&&r.push((0,f.createBlock)("core/paragraph",{content:o})),0===r.length?(0,f.createBlock)("core/paragraph",{content:""}):r}},{type:"block",blocks:["core/heading"],transform:e=>{let{value:t,citation:o}=e;if(!t)return(0,f.createBlock)("core/heading",{content:o});const r=(0,f.createBlock)("core/heading",{content:t});return o?[r,(0,f.createBlock)("core/heading",{content:o})]:r}}]},C=window.wp.hooks;const{name:y}=x;var _,E,N;_=y,E=x,N={icon:n,example:{attributes:{value:// translators: Quote serving as example for the Pullquote block. Attributed to Matt Mullenweg.
(0,r.__)("One of the hardest things to do in technology is disrupt yourself."),citation:(0,r.__)("Matt Mullenweg")}},transforms:k,edit:function(e){let{attributes:t,setAttributes:o,isSelected:n,insertBlocksAfter:a}=e;const{textAlign:c,citation:u,value:m}=t,p=(0,s.useBlockProps)({className:i()({[`has-text-align-${c}`]:c})}),g=!s.RichText.isEmpty(u)||n;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.BlockControls,{group:"block"},(0,l.createElement)(s.AlignmentControl,{value:c,onChange:e=>{o({textAlign:e})}})),(0,l.createElement)("figure",p,(0,l.createElement)("blockquote",null,(0,l.createElement)(s.RichText,{identifier:"value",tagName:"p",value:m,onChange:e=>o({value:e}),"aria-label":(0,r.__)("Pullquote text"),placeholder:// translators: placeholder text used for the quote
(0,r.__)("Add quote"),textAlign:"center"}),g&&(0,l.createElement)(s.RichText,{identifier:"citation",tagName:b?"cite":void 0,style:{display:"block"},value:u,"aria-label":(0,r.__)("Pullquote citation text"),placeholder:// translators: placeholder text used for the citation
(0,r.__)("Add citation"),onChange:e=>o({citation:e}),className:"wp-block-pullquote__citation",__unstableMobileNoFocusOnMount:!0,textAlign:"center",__unstableOnSplitAtEnd:()=>a((0,f.createBlock)((0,f.getDefaultBlockName)()))}))))},save:function(e){let{attributes:t}=e;const{textAlign:o,citation:r,value:n}=t,a=!s.RichText.isEmpty(r);return(0,l.createElement)("figure",s.useBlockProps.save({className:i()({[`has-text-align-${o}`]:o})}),(0,l.createElement)("blockquote",null,(0,l.createElement)(s.RichText.Content,{tagName:"p",value:n}),a&&(0,l.createElement)(s.RichText.Content,{tagName:"cite",value:r})))},deprecated:h},(0,C.addFilter)("blocks.registerBlockType",`statik/override/${_}`,((e,t,o)=>t===_&&(0,c.isNil)(o)?((0,u.select)("statik").getOverriddenBlocks().includes(_)||(0,u.dispatch)("statik").addOverriddenBlock(_),(0,c.merge)({},e,E,N)):e))},4184:function(e,t){var o;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var a=l.apply(null,o);a&&e.push(a)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},o={};function r(e){var l=o[e];if(void 0!==l)return l.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=function(t,o,l,n){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],l=e[u][1],n=e[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&n||a>=n)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,l,n]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={8859:0,3240:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,n,a=o[0],i=o[1],c=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(c)var u=c(r)}for(t&&t(o);s<a.length;s++)n=a[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},o=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var l=r.O(void 0,[3240],(function(){return r(9752)}));l=r.O(l)}();