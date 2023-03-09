!function(){var t,e={9056:function(t,e,r){"use strict";var o=window.wp.blocks,l=window.wp.i18n,i=window.wp.element,a=(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)("path",{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n.apply(this,arguments)}function s(t){var e,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=s(t[e]))&&(o&&(o+=" "),o+=r);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var u=function(){for(var t,e,r=0,o="";r<arguments.length;)(t=arguments[r++])&&(e=s(t))&&(o&&(o+=" "),o+=e);return o},c=window.wp.components,d=window.wp.blockEditor,p=window.wp.keycodes,g=window.lodash,b=window.wp.data;function m(t){const{clientId:e}=(0,d.useBlockEditContext)(),r=null!=t?t:e,{updateBlockAttributes:o}=(0,b.useDispatch)("core/block-editor");return{attributes:(0,b.useSelect)((t=>{const{getBlockAttributes:e}=t("core/block-editor");return e(r)}),[r]),setAttributes:(0,i.useCallback)((t=>{o(r,t)}))}}var y=window.wp.hooks;const k="blockProps";function v(t){for(const e in t)(0,g.isEmpty)(t[e])&&delete t[e]}const f="noreferrer noopener";function _(t){let{selectedWidth:e,setAttributes:r}=t;return(0,i.createElement)(c.PanelBody,{title:(0,l.__)("Width settings")},(0,i.createElement)(c.ButtonGroup,{"aria-label":(0,l.__)("Button width")},[25,50,75,100].map((t=>(0,i.createElement)(c.Button,{key:t,isSmall:!0,variant:t===e?"primary":void 0,onClick:()=>{var o;r({width:e===(o=t)?void 0:o})}},t,"%")))))}var h=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/video-button","version":"4.11.2","title":"Video Button","category":"design","parent":["statik/video-buttons"],"description":"Prompt visitors to take action with a video button-style link.","keywords":["link"],"textdomain":"statik-blocks","attributes":{"url":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"title":{"type":"string","source":"attribute","selector":"a","attribute":"title"},"text":{"type":"string","source":"html","selector":"a"},"linkTarget":{"type":"string","source":"attribute","selector":"a","attribute":"target"},"rel":{"type":"string","source":"attribute","selector":"a","attribute":"rel"},"placeholder":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"gradient":{"type":"string"},"width":{"type":"number"}},"supports":{"anchor":true,"align":true,"alignWide":false,"color":{"__experimentalSkipSerialization":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"__experimentalFontFamily":true,"__experimentalDefaultControls":{"fontSize":true}},"reusable":false,"spacing":{"__experimentalSkipSerialization":true,"padding":["horizontal","vertical"],"__experimentalDefaultControls":{"padding":true}},"__experimentalBorder":{"radius":true,"__experimentalSkipSerialization":true,"__experimentalDefaultControls":{"radius":true}},"__experimentalSelector":".wp-block-statik-video-button__link"},"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"}],"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}'),x=r(4184),C=r.n(x),w=window.wp.compose;const S=t=>{if(!(0,g.isObject)(t)||Array.isArray(t))return t;const e=(0,g.pickBy)((0,g.mapValues)(t,S),g.identity);return(0,g.isEmpty)(e)?void 0:e};var N=S;function E(t){var e,r;if(null==t||null===(e=t.style)||void 0===e||null===(r=e.typography)||void 0===r||!r.fontFamily)return t;const o=(0,g.cloneDeep)(t),l=o.style.typography.fontFamily.split("|").pop();return delete o.style.typography.fontFamily,o.style=N(o.style),{...o,fontFamily:l}}const T=t=>{var e,r,o;const{borderRadius:l,...i}=t,a=[l,null===(e=i.style)||void 0===e||null===(r=e.border)||void 0===r?void 0:r.radius].find((t=>"number"==typeof t&&0!==t));return a?{...i,style:{...i.style,border:{...null===(o=i.style)||void 0===o?void 0:o.border,radius:`${a}px`}}}:i},B=t=>{if(!t.customTextColor&&!t.customBackgroundColor&&!t.customGradient)return t;const e={color:{}};return t.customTextColor&&(e.color.text=t.customTextColor),t.customBackgroundColor&&(e.color.background=t.customBackgroundColor),t.customGradient&&(e.color.gradient=t.customGradient),{...(0,g.omit)(t,["customTextColor","customBackgroundColor","customGradient"]),style:e}},R=t=>B((0,g.omit)({...t,customTextColor:t.textColor&&"#"===t.textColor[0]?t.textColor:void 0,customBackgroundColor:t.color&&"#"===t.color[0]?t.color:void 0},["color","textColor"])),z={url:{type:"string",source:"attribute",selector:"a",attribute:"href"},title:{type:"string",source:"attribute",selector:"a",attribute:"title"},text:{type:"string",source:"html",selector:"a"}};var A=[{attributes:{url:{type:"string",source:"attribute",selector:"a",attribute:"href"},title:{type:"string",source:"attribute",selector:"a",attribute:"title"},text:{type:"string",source:"html",selector:"a"},linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"},backgroundColor:{type:"string"},textColor:{type:"string"},gradient:{type:"string"},width:{type:"number"}},supports:{anchor:!0,align:!0,alignWide:!1,color:{__experimentalSkipSerialization:!0,gradients:!0},typography:{fontSize:!0,__experimentalFontFamily:!0},reusable:!1,spacing:{__experimentalSkipSerialization:!0,padding:["horizontal","vertical"],__experimentalDefaultControls:{padding:!0}},__experimentalBorder:{radius:!0,__experimentalSkipSerialization:!0},__experimentalSelector:".wp-block-statik-video-button__link"},save(t){var e,r;let{attributes:o,className:l}=t;const{fontSize:a,linkTarget:n,rel:s,style:u,text:c,title:p,url:g,width:b}=o;if(!c)return null;const m=(0,d.__experimentalGetBorderClassesAndStyles)(o),y=(0,d.__experimentalGetColorClassesAndStyles)(o),k=(0,d.__experimentalGetSpacingClassesAndStyles)(o),v=C()("wp-block-statik-video-button__link",y.className,m.className,{"no-border-radius":0===(null==u||null===(e=u.border)||void 0===e?void 0:e.radius)}),f={...m.style,...y.style,...k.style},_=C()(l,{[`has-custom-width wp-block-statik-video-button__width-${b}`]:b,"has-custom-font-size":a||(null==u||null===(r=u.typography)||void 0===r?void 0:r.fontSize)});return(0,i.createElement)("div",d.useBlockProps.save({className:_}),(0,i.createElement)(d.RichText.Content,{tagName:"a",className:v,href:g,title:p,style:f,value:c,target:n,rel:s}))},migrate:E,isEligible(t){var e;let{style:r}=t;return null==r||null===(e=r.typography)||void 0===e?void 0:e.fontFamily}},{supports:{anchor:!0,align:!0,alignWide:!1,color:{__experimentalSkipSerialization:!0,gradients:!0},typography:{fontSize:!0,__experimentalFontFamily:!0},reusable:!1,__experimentalSelector:".wp-block-statik-video-button__link"},attributes:{...z,linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"},backgroundColor:{type:"string"},textColor:{type:"string"},gradient:{type:"string"},width:{type:"number"}},isEligible(t){var e;let{style:r}=t;return"number"==typeof(null==r||null===(e=r.border)||void 0===e?void 0:e.radius)},save(t){var e,r,o;let{attributes:l,className:a}=t;const{fontSize:n,linkTarget:s,rel:u,style:c,text:p,title:g,url:b,width:m}=l;if(!p)return null;const y=null==c||null===(e=c.border)||void 0===e?void 0:e.radius,k=(0,d.__experimentalGetColorClassesAndStyles)(l),v=C()("wp-block-statik-video-button__link",k.className,{"no-border-radius":0===(null==c||null===(r=c.border)||void 0===r?void 0:r.radius)}),f={borderRadius:y||void 0,...k.style},_=C()(a,{[`has-custom-width wp-block-statik-video-button__width-${m}`]:m,"has-custom-font-size":n||(null==c||null===(o=c.typography)||void 0===o?void 0:o.fontSize)});return(0,i.createElement)("div",d.useBlockProps.save({className:_}),(0,i.createElement)(d.RichText.Content,{tagName:"a",className:v,href:b,title:g,style:f,value:p,target:s,rel:u}))},migrate:(0,w.compose)(E,T)},{supports:{anchor:!0,align:!0,alignWide:!1,color:{__experimentalSkipSerialization:!0},reusable:!1,__experimentalSelector:".wp-block-statik-video-button__link"},attributes:{...z,linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"},borderRadius:{type:"number"},backgroundColor:{type:"string"},textColor:{type:"string"},gradient:{type:"string"},style:{type:"object"},width:{type:"number"}},save(t){let{attributes:e,className:r}=t;const{borderRadius:o,linkTarget:l,rel:a,text:n,title:s,url:u,width:c}=e,p=(0,d.__experimentalGetColorClassesAndStyles)(e),g=C()("wp-block-statik-video-button__link",p.className,{"no-border-radius":0===o}),b={borderRadius:o?o+"px":void 0,...p.style},m=C()(r,{[`has-custom-width wp-block-statik-video-button__width-${c}`]:c});return(0,i.createElement)("div",d.useBlockProps.save({className:m}),(0,i.createElement)(d.RichText.Content,{tagName:"a",className:g,href:u,title:s,style:b,value:n,target:l,rel:a}))},migrate:(0,w.compose)(E,T)},{supports:{anchor:!0,align:!0,alignWide:!1,color:{__experimentalSkipSerialization:!0},reusable:!1,__experimentalSelector:".wp-block-statik-video-button__link"},attributes:{...z,linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"},borderRadius:{type:"number"},backgroundColor:{type:"string"},textColor:{type:"string"},gradient:{type:"string"},style:{type:"object"},width:{type:"number"}},save(t){let{attributes:e,className:r}=t;const{borderRadius:o,linkTarget:l,rel:a,text:n,title:s,url:u,width:c}=e,p=(0,d.__experimentalGetColorClassesAndStyles)(e),g=C()("wp-block-statik-video-button__link",p.className,{"no-border-radius":0===o}),b={borderRadius:o?o+"px":void 0,...p.style},m=C()(r,{[`has-custom-width wp-block-statik-video-button__width-${c}`]:c});return(0,i.createElement)("div",d.useBlockProps.save({className:m}),(0,i.createElement)(d.RichText.Content,{tagName:"a",className:g,href:u,title:s,style:b,value:n,target:l,rel:a}))},migrate:(0,w.compose)(E,T)},{supports:{align:!0,alignWide:!1,color:{gradients:!0}},attributes:{...z,linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"},borderRadius:{type:"number"},backgroundColor:{type:"string"},textColor:{type:"string"},gradient:{type:"string"},style:{type:"object"}},save(t){let{attributes:e}=t;const{borderRadius:r,linkTarget:o,rel:l,text:a,title:n,url:s}=e,u=C()("wp-block-statik-video-button__link",{"no-border-radius":0===r}),c={borderRadius:r?r+"px":void 0};return(0,i.createElement)(d.RichText.Content,{tagName:"a",className:u,href:s,title:n,style:c,value:a,target:o,rel:l})},migrate:T},{supports:{align:!0,alignWide:!1},attributes:{...z,linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"},borderRadius:{type:"number"},backgroundColor:{type:"string"},textColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},customGradient:{type:"string"},gradient:{type:"string"}},isEligible:t=>!!t.customTextColor||!!t.customBackgroundColor||!!t.customGradient,migrate:(0,w.compose)(T,B),save(t){let{attributes:e}=t;const{backgroundColor:r,borderRadius:o,customBackgroundColor:l,customTextColor:a,customGradient:n,linkTarget:s,gradient:u,rel:c,text:p,textColor:g,title:b,url:m}=e,y=(0,d.getColorClassName)("color",g),k=!n&&(0,d.getColorClassName)("background-color",r),v=(0,d.__experimentalGetGradientClass)(u),f=C()("wp-block-statik-video-button__link",{"has-text-color":g||a,[y]:y,"has-background":r||l||n||u,[k]:k,"no-border-radius":0===o,[v]:v}),_={background:n||void 0,backgroundColor:k||n||u?void 0:l,color:y?void 0:a,borderRadius:o?o+"px":void 0};return(0,i.createElement)("div",null,(0,i.createElement)(d.RichText.Content,{tagName:"a",className:f,href:m,title:b,style:_,value:p,target:s,rel:c}))}},{attributes:{...z,align:{type:"string",default:"none"},backgroundColor:{type:"string"},textColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"}},isEligible(t){return t.className&&t.className.includes("is-style-squared")},migrate(t){let e=t.className;return e&&(e=e.replace(/is-style-squared[\s]?/,"").trim()),T(B({...t,className:e||void 0,borderRadius:0}))},save(t){let{attributes:e}=t;const{backgroundColor:r,customBackgroundColor:o,customTextColor:l,linkTarget:a,rel:n,text:s,textColor:u,title:c,url:p}=e,g=(0,d.getColorClassName)("color",u),b=(0,d.getColorClassName)("background-color",r),m=C()("wp-block-statik-video-button__link",{"has-text-color":u||l,[g]:g,"has-background":r||o,[b]:b}),y={backgroundColor:b?void 0:o,color:g?void 0:l};return(0,i.createElement)("div",null,(0,i.createElement)(d.RichText.Content,{tagName:"a",className:m,href:p,title:c,style:y,value:s,target:a,rel:n}))}},{attributes:{...z,align:{type:"string",default:"none"},backgroundColor:{type:"string"},textColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"}},migrate:R,save(t){let{attributes:e}=t;const{url:r,text:o,title:l,backgroundColor:a,textColor:n,customBackgroundColor:s,customTextColor:u}=e,c=(0,d.getColorClassName)("color",n),p=(0,d.getColorClassName)("background-color",a),g=C()("wp-block-statik-video-button__link",{"has-text-color":n||u,[c]:c,"has-background":a||s,[p]:p}),b={backgroundColor:p?void 0:s,color:c?void 0:u};return(0,i.createElement)("div",null,(0,i.createElement)(d.RichText.Content,{tagName:"a",className:g,href:r,title:l,style:b,value:o}))}},{attributes:{...z,color:{type:"string"},textColor:{type:"string"},align:{type:"string",default:"none"}},save(t){let{attributes:e}=t;const{url:r,text:o,title:l,align:a,color:n,textColor:s}=e,u={backgroundColor:n,color:s};return(0,i.createElement)("div",{className:`align${a}`},(0,i.createElement)(d.RichText.Content,{tagName:"a",className:"wp-block-statik-video-button__link",href:r,title:l,style:u,value:o}))},migrate:R},{attributes:{...z,color:{type:"string"},textColor:{type:"string"},align:{type:"string",default:"none"}},save(t){let{attributes:e}=t;const{url:r,text:o,title:l,align:a,color:n,textColor:s}=e;return(0,i.createElement)("div",{className:`align${a}`,style:{backgroundColor:n}},(0,i.createElement)(d.RichText.Content,{tagName:"a",href:r,title:l,style:{color:s},value:o}))},migrate:R}];const{name:O}=h,G={icon:a,example:{attributes:{className:"is-style-fill",text:(0,l.__)("Call to Action")}},edit:function(t){var e;const{attributes:r,setAttributes:s,className:g,isSelected:b,onReplace:h,mergeBlocks:x}=t,{linkTarget:C,placeholder:w,rel:S,style:N,text:E,url:T,width:B}=r,R=(0,i.useCallback)((t=>{s({rel:t})}),[s]),z=(0,d.__experimentalUseBorderProps)(r),A=(0,d.__experimentalUseColorProps)(r),O=(0,d.__experimentalGetSpacingClassesAndStyles)(r),G=(0,i.useRef)(),j=(0,i.useRef)(),P=(0,d.useBlockProps)({ref:G,onKeyDown:function(t){if(p.isKeyboardEvent.primary(t,"k"))H(t);else if(p.isKeyboardEvent.primaryShift(t,"k")){var e;I(),null===(e=j.current)||void 0===e||e.focus()}}});!function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{attributes:e,setAttributes:r}=m(),{name:l}=(0,d.useBlockEditContext)(),a=Object.entries(e).filter((t=>t[0]!==k)).sort(((t,e)=>t[0].localeCompare(e[0]))).map((t=>t[1]));(0,i.useEffect)((()=>{const i=(0,y.applyFilters)("blocks.getSaveContent.extraProps",{...t},(0,o.getBlockType)(l),e);v(i),r({blockProps:i})}),[JSON.stringify(a)])}();const[F,D]=(0,i.useState)(!1),W=!!T,$="_blank"===C;function H(t){t.preventDefault(),D(!0)}function I(){s({url:void 0,linkTarget:void 0,rel:void 0}),D(!1)}return(0,i.useEffect)((()=>{b||D(!1)}),[b]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",n({},P,{className:u(P.className,{[`has-custom-width wp-block-statik-video-button__width-${B}`]:B,"has-custom-font-size":P.style.fontSize})}),(0,i.createElement)(d.RichText,{ref:j,"aria-label":(0,l.__)("Button text"),placeholder:w||(0,l.__)("Add text…"),value:E,onChange:t=>{s({text:t.replace(/<\/?a[^>]*>/g,"")})},withoutInteractiveFormatting:!0,className:u(g,"wp-block-statik-video-button__link",A.className,z.className,{"no-border-radius":0===(null==N||null===(e=N.border)||void 0===e?void 0:e.radius)}),style:{...z.style,...A.style,...O.style},onSplit:t=>(0,o.createBlock)("core/button",{...r,text:t}),onReplace:h,onMerge:x,identifier:"text"})),(0,i.createElement)(d.BlockControls,{group:"block"},!W&&(0,i.createElement)(c.ToolbarButton,{name:"link",icon:a,title:(0,l.__)("Link"),shortcut:p.displayShortcut.primary("k"),onClick:H}),W&&(0,i.createElement)(c.ToolbarButton,{name:"link",icon:a,title:(0,l.__)("Unlink"),shortcut:p.displayShortcut.primaryShift("k"),onClick:I,isActive:!0})),b&&(F||W)&&(0,i.createElement)(c.Popover,{position:"bottom center",onClose:()=>{var t;D(!1),null===(t=j.current)||void 0===t||t.focus()},anchorRef:null==G?void 0:G.current,focusOnMount:!!F&&"firstElement"},(0,i.createElement)(d.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:T,opensInNewTab:$},onChange:t=>{let{url:e="",opensInNewTab:r}=t;s({url:e}),$!==r&&function(t){const e=t?"_blank":void 0;let r=S;e&&!S?r=f:e||S!==f||(r=void 0),s({linkTarget:e,rel:r})}(r)},onRemove:()=>{var t;I(),null===(t=j.current)||void 0===t||t.focus()},forceIsEditingLink:F})),(0,i.createElement)(d.InspectorControls,null,(0,i.createElement)(_,{selectedWidth:B,setAttributes:s})),(0,i.createElement)(d.InspectorControls,{__experimentalGroup:"advanced"},(0,i.createElement)(c.TextControl,{label:(0,l.__)("Link rel"),value:S||"",onChange:R})))},save:function(t){var e,r;let{attributes:o,className:l}=t;const{fontSize:a,linkTarget:n,rel:s,style:u,text:c,title:p,url:g,width:b}=o;if(!c)return null;const m=(0,d.__experimentalGetBorderClassesAndStyles)(o),y=(0,d.__experimentalGetColorClassesAndStyles)(o),k=(0,d.__experimentalGetSpacingClassesAndStyles)(o),v=C()("wp-block-statik-video-button__link",y.className,m.className,{"no-border-radius":0===(null==u||null===(e=u.border)||void 0===e?void 0:e.radius)}),f={...m.style,...y.style,...k.style},_=C()(l,{[`has-custom-width wp-block-statik-video-button__width-${b}`]:b,"has-custom-font-size":a||(null==u||null===(r=u.typography)||void 0===r?void 0:r.fontSize)});return(0,i.createElement)("div",d.useBlockProps.save({className:_}),(0,i.createElement)(d.RichText.Content,{tagName:"a",className:v,href:g,title:p,style:f,value:c,target:n,rel:s}))},deprecated:A,merge:(t,e)=>{let{text:r=""}=e;return{...t,text:(t.text||"")+r}}};(0,o.registerBlockType)(h,G)},4184:function(t,e){var r;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var a=l.apply(null,r);a&&t.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var n in r)o.call(r,n)&&r[n]&&t.push(n)}}}return t.join(" ")}t.exports?(l.default=l,t.exports=l):void 0===(r=function(){return l}.apply(e,[]))||(t.exports=r)}()}},r={};function o(t){var l=r[t];if(void 0!==l)return l.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=function(e,r,l,i){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],l=t[c][1],i=t[c][2];for(var n=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[s])}))?r.splice(s--,1):(n=!1,i<a&&(a=i));if(n){t.splice(c--,1);var u=l();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,l,i]},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={6230:0,7256:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var l,i,a=r[0],n=r[1],s=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(l in n)o.o(n,l)&&(o.m[l]=n[l]);if(s)var c=s(o)}for(e&&e(r);u<a.length;u++)i=a[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},r=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var l=o.O(void 0,[7256],(function(){return o(9056)}));l=o.O(l)}();