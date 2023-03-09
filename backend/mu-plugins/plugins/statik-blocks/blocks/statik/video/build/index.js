!function(){"use strict";var e,t={4466:function(){var e=window.wp.blocks,t=window.wp.element,l=window.wp.blockEditor,o=window.wp.components,a=window.wp.i18n,r=window.wp.data;function n(e){const{clientId:o}=(0,l.useBlockEditContext)(),a=null!=e?e:o,{updateBlockAttributes:n}=(0,r.useDispatch)("core/block-editor");return{attributes:(0,r.useSelect)((e=>{const{getBlockAttributes:t}=e("core/block-editor");return t(a)}),[a]),setAttributes:(0,t.useCallback)((e=>{n(a,e)}))}}function i(e){let{x:t,y:l}=e;return`${Math.round(100*t)}% ${Math.round(100*l)}%`}function s(e){const{bgImageRef:r}=e,{attributes:s,setAttributes:c}=n(),{height:u,width:d,hasOverlay:b,followUp:p,overlayColor:m,overlayColorOpacity:k,overlayImage:h,overlayHasParallax:v,overlayIsRepeated:g,overlayFocalPoint:y,overlayAltText:w}=s,f=h&&(!v||g),_=(0,l.useSetting)("color.palette")||[],C=(0,t.useCallback)((e=>{c({height:e})})),E=(0,t.useCallback)((e=>{c({width:e})})),x=(0,t.useCallback)((e=>{c({hasOverlay:e})})),R=(0,t.useCallback)((()=>{c({overlayHasParallax:!v,...v?{}:{overlayFocalPoint:void 0}})})),S=(0,t.useCallback)((()=>{c({overlayIsRepeated:!g})})),P=(0,t.useCallback)((e=>{c({overlayColor:e})})),I=(0,t.useCallback)((e=>{c({overlayColorOpacity:e})})),O=(0,t.useCallback)((e=>{c({overlayFocalPoint:e})})),B=(0,t.useCallback)((e=>{c({overlayAltText:e})})),A=(0,t.useCallback)((()=>{c({overlayImage:void 0,overlayFocalPoint:void 0,overlayHasParallax:void 0,overlayIsRepeated:void 0})})),H=(0,t.useCallback)((e=>{c({followUp:e})})),V=(0,t.useCallback)((e=>{const[t,l]=[r.current.style,"backgroundPosition"];t[l]=i(e)}));return(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,a.__)("Dimensions","statik-blocks")},(0,t.createElement)(o.BaseControl,null,(0,t.createElement)(o.__experimentalUnitControl,{label:(0,a.__)("Height of a video block","statik-blocks"),value:u,isPressEnterToChange:!0,onChange:C,step:1,__unstableInputWidth:"80px"})),(0,t.createElement)(o.BaseControl,null,(0,t.createElement)(o.__experimentalUnitControl,{label:(0,a.__)("Width of a video block","statik-blocks"),value:d,isPressEnterToChange:!0,onChange:E,step:1,__unstableInputWidth:"80px"}))),(0,t.createElement)(o.PanelBody,{title:(0,a.__)("Overlay Settings","statik-blocks")},(0,t.createElement)(o.ToggleControl,{label:(0,a.__)("Display Overlay","statik-blocks"),checked:b,onChange:x}),b&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.__experimentalColorGradientControl,{label:(0,a.__)("Background color","statik-blocks"),colorValue:m,colors:_,gradients:void 0,disableCustomColors:!1,disableCustomGradients:!0,onColorChange:P}),(0,t.createElement)(o.RangeControl,{label:(0,a.__)("Opacity","statik-blocks"),value:k,onChange:I,min:0,max:100,step:10,required:!0}))),h&&(0,t.createElement)(o.PanelBody,{title:(0,a.__)("Media settings","statik-blocks")},(0,t.createElement)(o.ToggleControl,{label:(0,a.__)("Fixed background","statik-blocks"),checked:v,onChange:R}),(0,t.createElement)(o.ToggleControl,{label:(0,a.__)("Repeated background","statik-blocks"),checked:g,onChange:S}),f&&(0,t.createElement)(o.FocalPointPicker,{label:(0,a.__)("Focal point picker","statik-blocks"),url:h,value:y,onDragStart:V,onDrag:V,onChange:O}),(0,t.createElement)(o.TextareaControl,{label:(0,a.__)("Alt text (alternative text)","statik-blocks"),value:w,onChange:B,help:(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.ExternalLink,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree"},(0,a.__)("Describe the purpose of the image","statik-blocks")),(0,a.__)("Leave empty if the image is purely decorative.","statik-blocks"))}),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.Button,{variant:"secondary",isSmall:!0,className:"block-library-cover__reset-button",onClick:A},(0,a.__)("Clear Media","statik-blocks")))),(0,t.createElement)(o.PanelBody,{title:(0,a.__)("Follow-up action","statik-blocks")},(0,t.createElement)(o.SelectControl,{label:(0,a.__)("Follow-up behavior","statik-blocks"),options:[{value:"none",label:(0,a.__)("None","statik-blocks")},{value:"modal",label:(0,a.__)("Display in a modal","statik-blocks")},{value:"redirect",label:(0,a.__)("Redirect to the video","statik-blocks")}],value:p,onChange:H})))}var c=window.wp.keycodes;function u(e){const{mediaURL:a,onSelectURL:r,name:n="Replace Url"}=e,[i,s]=(0,t.useState)(a),u=(0,t.createRef)(),d=e=>{e.keyCode===c.DOWN&&(e.preventDefault(),e.stopPropagation(),e.target.click())};return(0,t.createElement)(o.Dropdown,{contentClassName:"block-editor-media-replace-flow__options",renderToggle:e=>{let{isOpen:l,onToggle:a}=e;return(0,t.createElement)(o.ToolbarGroup,{className:"media-replace-flow"},(0,t.createElement)(o.Button,{ref:u,"aria-expanded":l,onClick:a,onKeyDown:d},n))},renderContent:()=>(0,t.createElement)("form",{className:"block-editor-media-flow__url-input",onKeyDown:e=>{e.stopPropagation()},onKeyPress:e=>{e.stopPropagation()}},(0,t.createElement)("span",{className:"block-editor-media-replace-flow__image-url-label"},"Current media URL:"),(0,t.createElement)(l.__experimentalLinkControl,{value:{url:i},settings:[],showSuggestions:!1,onChange:e=>{let{url:t}=e;s(t),r(t),u.current.focus()}}))})}function d(){const{attributes:e,setAttributes:o}=n(),{hasOverlay:a,url:r,overlayImage:i}=e,s=(0,t.useCallback)((e=>{o({url:e})})),c=(0,t.useCallback)((e=>{e&&e.url&&o({overlayImage:e.url})}));return(0,t.createElement)(l.BlockControls,{group:"other"},(0,t.createElement)(u,{mediaURL:r,onSelectURL:s}),a&&(0,t.createElement)(l.MediaReplaceFlow,{name:"Replace Overlay",mediaURL:i,onSelect:c,accept:"image/*",allowedTypes:["image"]}))}var b=window.wp.primitives,p=(0,t.createElement)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(b.Path,{d:"M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"}));const m=/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,k=/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,h=e=>{var t;return e?null!==(t=(e=>{if(void 0!==e||""!==e){const t=e.match(m);if(t)return`https://www.youtube.com/embed/${t[1]}?autoplay=0`}return null})(e))&&void 0!==t?t:(e=>{if(void 0!==e||""!==e){const t=e.match(k);if(t)return`https://player.vimeo.com/video/${t[2]}`}return null})(e):null};function v(){const e=(0,l.useBlockProps)(),{attributes:r,setAttributes:i}=n(),{url:s}=r,c=(0,t.useCallback)((e=>{h(e)&&i({url:e})}));return(0,t.createElement)("div",e,(0,t.createElement)(o.Placeholder,{icon:(0,t.createElement)(l.BlockIcon,{icon:p}),instructions:(0,a.__)("Embed a video uploaded to either Youtube or Vimeo.","statik-blocks"),label:(0,a.__)("Video","statik-blocks"),isColumnLayout:!1},(0,t.createElement)(o.TextControl,{label:(0,a.__)("Youtube or Vimeo URL","statik-blocks"),value:s,onChange:c,placeholder:(0,a.__)("https://youtube.com/watch?v=…","statik-blocks")})))}var g=window.lodash,y=window.wp.hooks;const w="blockProps";function f(e){for(const t in e)(0,g.isEmpty)(e[t])&&delete e[t]}var _=(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26.09",height:"22.36",viewBox:"0 0 26.09 22.36"},(0,t.createElement)("path",{d:"M19.29,22.36v-1.5h1.6a3.7,3.7,0,0,0,0-7.4h-1.6v-1.5h1.6a5.164,5.164,0,0,1,5.2,5.2,5.228,5.228,0,0,1-5.2,5.2Zm-5.6,0a5.2,5.2,0,1,1,0-10.4h1.6v1.5h-1.6a3.7,3.7,0,1,0,0,7.4h1.6v1.5Zm.9-4.3v-1.5h5.3v1.5ZM7,18H2.3A2.263,2.263,0,0,1,0,15.7V2.3A2.263,2.263,0,0,1,2.3,0H15.7A2.263,2.263,0,0,1,18,2.3V10H16.5V2.3a.854.854,0,0,0-.8-.8H2.3a.854.854,0,0,0-.8.8V15.7a.854.854,0,0,0,.8.8H7V18H7Zm0-6V6l5,3L7,12H7Z"})),C=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/video","version":"4.11.2","title":"Video","category":"common","description":"Embed a video uploaded to either YouTube or Vimeo.","keywords":[],"textdomain":"statik-blocks","attributes":{"url":{"type":"string"},"width":{"type":"string","default":"100%"},"height":{"type":"string","default":"320px"},"openAsModal":{"type":"boolean","default":false},"followUp":{"enum":["none","modal","redirect"],"default":"none"},"hasOverlay":{"type":"boolean","default":false},"overlayColor":{"type":"string"},"overlayColorOpacity":{"type":"number","default":80},"overlayImage":{"type":"string"},"overlayHasParallax":{"type":"boolean","default":false},"overlayIsRepeated":{"type":"boolean","default":false},"overlayAltText":{"type":"string"},"overlayFocalPoint":{"type":"object"}},"example":{"attributes":{"url":"https://www.youtube.com/watch?v=jNQXAC9IVRw"}},"supports":{"align":["wide","full"]},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');const E={icon:_,edit:function(a){const{attributes:c,isSelected:u}=a,{width:b,height:p,hasOverlay:m,overlayImage:k}=c,{boxRef:g,bgImageRef:_,boxWidth:C,boxHeight:E,videoUrl:x,handleResizeStart:R,handleResizeStop:S,blockStyle:P,iframeStyle:I,bgStyle:O,bgImageStyle:B}=(()=>{const{attributes:e,setAttributes:l}=n(),{url:o,width:a,height:s,overlayColor:c,overlayColorOpacity:u,overlayImage:d,overlayFocalPoint:b,overlayHasParallax:p,overlayIsRepeated:m}=e,{toggleSelection:k}=(0,r.useDispatch)("core/block-editor"),v=(0,t.useRef)(),g=(0,t.useRef)(),y=(0,t.useCallback)((()=>{k(!1)})),w=(0,t.useCallback)(((e,t,o,r)=>{let n=a,i=s;0!==r.width&&(n=`${parseInt(v.current.size.width)}px`),0!==r.height&&(i=`${parseInt(v.current.size.height)}px`),l({width:n,height:i}),k(!0)})),f=h(o),_={height:s},C={backgroundColor:c,opacity:u/100,width:a,height:s},E={width:a,height:s,backgroundImage:d&&`url(${d})`,backgroundSize:m?"auto":"cover",backgroundRepeat:m?"repeat":"no-repeat",backgroundAttachment:p?"fixed":"scroll",backgroundPosition:d&&b?i(b):void 0};return{boxRef:v,bgImageRef:g,boxWidth:a,boxHeight:s,videoUrl:f,handleResizeStart:y,handleResizeStop:w,blockStyle:_,iframeStyle:{width:a,height:s,pointerEvents:"none"},bgStyle:C,bgImageStyle:E}})(),A=(0,l.useBlockProps)({style:P});!function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{attributes:a,setAttributes:r}=n(),{name:i}=(0,l.useBlockEditContext)(),s=Object.entries(a).filter((e=>e[0]!==w)).sort(((e,t)=>e[0].localeCompare(t[0]))).map((e=>e[1]));(0,t.useEffect)((()=>{const t=(0,y.applyFilters)("blocks.getSaveContent.extraProps",{...o},(0,e.getBlockType)(i),a);f(t),r({blockProps:t})}),[JSON.stringify(s)])}({style:P});const H=(0,l.useInnerBlocksProps)({className:"wp-block-statik-video__inner-container"},{template:[["core/paragraph",{placeholder:"Add content…",align:"center",fontSize:"large"}]]});return x?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(d,null),(0,t.createElement)(s,{bgImageRef:_}),(0,t.createElement)("div",A,(0,t.createElement)(o.ResizableBox,{ref:g,className:"wp-block-statik-video__box",size:{width:C,height:E},minHeight:240,enable:{top:!1,right:!0,bottom:!0,left:!1},lockAspectRatio:!1,onResizeStart:R,onResizeStop:S,showHandle:u},(0,t.createElement)("iframe",{title:"Video",width:b,height:p,style:I,src:x,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}),m&&(0,t.createElement)("div",{className:"wp-block-statik-video__overlay"},k&&(0,t.createElement)("div",{className:"wp-block-statik-video__background-image",ref:_,style:B}),(0,t.createElement)("div",{className:"wp-block-statik-video__background",style:O}),(0,t.createElement)("div",{className:"wp-block-statik-video__body"},(0,t.createElement)("div",H)))))):(0,t.createElement)(v,null)},save:()=>(0,t.createElement)(l.InnerBlocks.Content,null)};(0,e.registerBlockType)(C,E)}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,l,a,r){if(!l){var n=1/0;for(u=0;u<e.length;u++){l=e[u][0],a=e[u][1],r=e[u][2];for(var i=!0,s=0;s<l.length;s++)(!1&r||n>=r)&&Object.keys(o.O).every((function(e){return o.O[e](l[s])}))?l.splice(s--,1):(i=!1,r<n&&(n=r));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,a,r]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={2950:0,5498:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,r,n=l[0],i=l[1],s=l[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(s)var u=s(o)}for(t&&t(l);c<n.length;c++)r=n[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},l=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var a=o.O(void 0,[5498],(function(){return o(4466)}));a=o.O(a)}();