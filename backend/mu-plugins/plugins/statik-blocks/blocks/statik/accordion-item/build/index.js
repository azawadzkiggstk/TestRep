!function(){"use strict";var e,t={7937:function(){var e=window.wp.blocks,t=window.wp.element;function o(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}var n=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(c&&(c+=" "),c+=t);return c},c=window.wp.blockEditor,l=window.wp.primitives,a=(0,t.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(l.Path,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),r=(0,t.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,t.createElement)(l.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})),i=(0,t.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(l.Path,{d:"M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"})),s=window.wp.data,d=window.wp.i18n,u=window.wp.components;function p(){const{clientId:e}=(0,c.useBlockEditContext)();return e}function k(o){const{rootClientId:n}=o,l=function(e){const{clientId:t}=(0,c.useBlockEditContext)(),o=null!=e?e:t;return(0,s.useSelect)((e=>{const{getBlocks:t}=e("core/block-editor");return t(o)}),[o])}(n),k=p(),{selectBlock:m,insertBlock:b,removeBlock:v}=(0,s.useDispatch)("core/block-editor"),w=n===k,h=l.length>1,f=(0,t.useMemo)((()=>l.map(((e,t)=>({label:e.attributes.title||`Untitled #${t}`,value:e.clientId})))),[l]),E=(0,t.useCallback)((async e=>{await m(e);const t=`block-${e}`;try{var o;null===(o=window.document.getElementById(t))||void 0===o||o.focus()}catch(e){console.error("Something went wrong",e)}})),g=(0,t.useCallback)((async()=>{const t=(0,e.createBlock)("statik/accordion-item");await b(t,void 0,n)})),_=(0,t.useCallback)((async()=>{await v(k)}));return(0,t.createElement)(u.ToolbarGroup,null,(0,t.createElement)(u.ToolbarDropdownMenu,{icon:a,label:(0,d.__)("Select item","statik-blocks")},(()=>(0,t.createElement)(u.MenuGroup,null,(0,t.createElement)(u.MenuItemsChoice,{choices:f,value:k,onSelect:E})))),(0,t.createElement)(u.ToolbarButton,{icon:r,label:(0,d.__)("Add new item","statik-blocks"),onClick:g}),(0,t.createElement)(u.ToolbarButton,{icon:i,label:(0,d.__)("Delete item","statik-blocks"),onClick:_,isDisabled:w||!h}))}function m(){const e=function(e){const{clientId:t}=(0,c.useBlockEditContext)(),o=t;return(0,s.useSelect)((e=>{const{getBlockRootClientId:t}=e("core/block-editor");return t(o)}),[o])}();return(0,t.createElement)(c.BlockControls,null,(0,t.createElement)(k,{rootClientId:e}))}function b(e){const{clientId:o}=(0,c.useBlockEditContext)(),n=null!=e?e:o,{updateBlockAttributes:l}=(0,s.useDispatch)("core/block-editor");return{attributes:(0,s.useSelect)((e=>{const{getBlockAttributes:t}=e("core/block-editor");return t(n)}),[n]),setAttributes:(0,t.useCallback)((e=>{l(n,e)}))}}function v(){const{attributes:e,setAttributes:o}=b(),{defaultExpanded:n}=e,l=(0,t.useCallback)((()=>{o({defaultExpanded:!n})}));return(0,t.createElement)(c.InspectorControls,null,(0,t.createElement)(u.PanelBody,{title:(0,d.__)("Settings","statik-blocks")},(0,t.createElement)(u.ToggleControl,{label:(0,d.__)("Display expanded by default","statik-blocks"),checked:!!n,onChange:l})))}const w=()=>{const{attributes:e,setAttributes:o}=b(),{title:n,headerSelector:l}=e,a=p(),{removeBlock:r}=(0,s.useDispatch)("core/block-editor"),i=(0,t.useCallback)((e=>{const t=void 0===n||void 0!==n&&0===n.length;!e&&t&&r(a)})),u=(0,t.useCallback)((e=>{o({title:e})}));return(0,t.createElement)(c.RichText,{tagName:l,placeholder:(0,d.__)("Write accordion item title…","statik-blocks"),value:n,className:"wp-block-statik-accordion-item__title",onChange:u,onRemove:i})},h=[["core/group",{style:{spacing:{padding:{top:"20px",right:"20px",bottom:"20px",left:"20px"}}}},[["core/paragraph",{}]]]];var f=window.lodash,E=window.wp.hooks;const g="blockProps";function _(e){for(const t in e)(0,f.isEmpty)(e[t])&&delete e[t]}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},x.apply(this,arguments)}function y(e){return(0,t.createElement)("svg",x({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),(0,t.createElement)("path",{d:"M6.50002 10L12 15L17.5 10",stroke:"currentColor",strokeWidth:"1.5"}))}var B=(0,t.createElement)("svg",{version:"1.1",id:"Layer_1",focusable:"false",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},(0,t.createElement)("path",{d:"M22.2,3.8H1.9c-0.4,0-0.7,0.3-0.7,0.7v14.4v0.4c0,0.4,0.3,0.7,0.7,0.7h20.3c0.4,0,0.7-0.3,0.7-0.7V4.9V4.5 C22.9,4.1,22.6,3.8,22.2,3.8z M21.4,5.2v6.7H2.7V5.2H21.4z M21.4,13.3v1.9H2.7v-1.9H21.4z M2.7,18.6v-1.9h18.7v1.9H2.7z"})),C=[{attributes:{title:{type:"string"},defaultExpanded:{type:"boolean",default:!1}},save(){return(0,t.createElement)(c.InnerBlocks.Content,null)}},{attributes:{title:{type:"string"},defaultExpanded:{type:"boolean",default:!1}},migrate(e){return{...e,headerSelector:"p"}},save(e){const{attributes:o}=e,{blockId:l,defaultExpanded:a,title:r}=o,i=a,s=c.useBlockProps.save({className:n(`wp-block-${l}`,{"wp-block-statik-accordion-item--expanded":i})}),d=c.useInnerBlocksProps.save({className:"wp-block-statik-accordion-item__inner-blocks"}),u=`wp-block-${l}__header`,p=`wp-block-${l}__body`;return(0,t.createElement)("div",s,(0,t.createElement)("header",{id:u,className:"wp-block-statik-accordion-item__header",tabIndex:0,role:"heading","aria-expanded":i,"aria-disabled":!1,"aria-controls":p},(0,t.createElement)(c.RichText.Content,{tagName:"p",value:r,className:"wp-block-statik-accordion-item__title"}),(0,t.createElement)(y,{className:"wp-block-statik-accordion-item__icon"})),(0,t.createElement)("div",{id:p,className:"wp-block-statik-accordion-item__body",role:"region","aria-labelledby":u},(0,t.createElement)("div",d)))}}],I=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/accordion-item","version":"4.11.2","title":"Accordion Item","parent":["statik/accordion"],"category":"layout","description":"A child item of an Accordion Block.","keywords":[],"textdomain":"statik-blocks","attributes":{"title":{"type":"string"},"defaultExpanded":{"type":"boolean","default":false},"headerSelector":{"type":"string","enum":["p","span","h1","h2","h3","h4","h5"],"default":"h3"}},"supports":{"reusable":false,"html":false,"inserter":false},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');const S=()=>{var e,t;if("undefined"!=typeof statikBlocks)return Boolean(null===(e=statikBlocks)||void 0===e||null===(t=e.config)||void 0===t?void 0:t.saveJsExecution);throw new Error("`statikBlocks` variable does not exist")},N={icon:B,edit:function(o){const{blockId:l,attributes:a,isSelected:r}=o,{defaultExpanded:i}=a,d=function(e){const{clientId:t}=(0,c.useBlockEditContext)(),o=t;return(0,s.useSelect)((e=>{const{getBlockOrder:t}=e("core/block-editor");return t(o).length>0}),[o])}(),u=function(e){const{clientId:t}=(0,c.useBlockEditContext)(),o=t;return(0,s.useSelect)((e=>{const{hasSelectedInnerBlock:t}=e("core/block-editor");return t(o,!0)}),[o])}(),p=i||r||u,k=(0,c.useBlockProps)({className:n(`wp-block-${l}`,{"wp-block-statik-accordion-item--expanded":p,"wp-block-statik-accordion-item--default-expanded":i})});!function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{attributes:n,setAttributes:l}=b(),{name:a}=(0,c.useBlockEditContext)(),r=Object.entries(n).filter((e=>e[0]!==g)).sort(((e,t)=>e[0].localeCompare(t[0]))).map((e=>e[1]));(0,t.useEffect)((()=>{const t=(0,E.applyFilters)("blocks.getSaveContent.extraProps",{...o},(0,e.getBlockType)(a),n);_(t),l({blockProps:t})}),[JSON.stringify(r)])}({className:n({"wp-block-statik-accordion-item--default-expanded":i})});const f=(0,c.useInnerBlocksProps)({className:"wp-block-statik-accordion-item__inner-blocks"},{template:h,templateInsertUpdatesSelection:!0,renderAppender:!d&&c.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(m,null),(0,t.createElement)(v,null),(0,t.createElement)("div",k,(0,t.createElement)("header",{className:"wp-block-statik-accordion-item__header"},(0,t.createElement)(w,null),(0,t.createElement)(y,{className:"wp-block-statik-accordion-item__icon"})),p&&(0,t.createElement)("div",{className:n("wp-block-statik-accordion-item__body",{"wp-block-statik-accordion-item__body--empty":!d})},(0,t.createElement)("div",f))))},save:function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,t.createElement)(c.InnerBlocks.Content,null);return t=>S()?e(t):o}((function(e){const{attributes:o}=e,{blockId:l,defaultExpanded:a,title:r,headerSelector:i}=o,s=a,d=c.useBlockProps.save({className:n(`wp-block-${l}`,{"wp-block-statik-accordion-item--expanded":s})}),u=c.useInnerBlocksProps.save({className:"wp-block-statik-accordion-item__inner-blocks"}),p=`wp-block-${l}__header`,k=`wp-block-${l}__body`;return(0,t.createElement)("div",d,(0,t.createElement)("header",{id:p,className:"wp-block-statik-accordion-item__header",tabIndex:0,role:"heading","aria-expanded":s,"aria-disabled":!1,"aria-controls":k},(0,t.createElement)(c.RichText.Content,{tagName:i,value:r,className:"wp-block-statik-accordion-item__title"}),(0,t.createElement)(y,{className:"wp-block-statik-accordion-item__icon"})),(0,t.createElement)("div",{id:k,className:"wp-block-statik-accordion-item__body",role:"region","aria-labelledby":p},(0,t.createElement)("div",u)))})),deprecated:C};(0,e.registerBlockType)(I,N)}},o={};function n(e){var c=o[e];if(void 0!==c)return c.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,o,c,l){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],c=e[d][1],l=e[d][2];for(var r=!0,i=0;i<o.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(r=!1,l<a&&(a=l));if(r){e.splice(d--,1);var s=c();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[o,c,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={9969:0,5650:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var c,l,a=o[0],r=o[1],i=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(c in r)n.o(r,c)&&(n.m[c]=r[c]);if(i)var d=i(n)}for(t&&t(o);s<a.length;s++)l=a[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},o=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var c=n.O(void 0,[5650],(function(){return n(7937)}));c=n.O(c)}();