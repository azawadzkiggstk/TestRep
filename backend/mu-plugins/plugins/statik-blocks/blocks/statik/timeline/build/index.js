!function(){"use strict";var t,e={5399:function(){var t=window.wp.blocks,e=window.wp.element,a=window.wp.blockEditor,n=window.lodash,o=window.wp.data;function r(t){const{clientId:n}=(0,a.useBlockEditContext)(),r=null!=t?t:n,{updateBlockAttributes:i}=(0,o.useDispatch)("core/block-editor");return{attributes:(0,o.useSelect)((t=>{const{getBlockAttributes:e}=t("core/block-editor");return e(r)}),[r]),setAttributes:(0,e.useCallback)((t=>{i(r,t)}))}}var i=window.wp.hooks;const s="blockProps";function l(t){for(const e in t)(0,n.isEmpty)(t[e])&&delete t[e]}const c=["statik/timeline-item"],p=[["statik/timeline-item",{}]];var u=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"95",height:"74.2",viewBox:"0 0 95 74.2"},(0,e.createElement)("path",{d:"M55.3 12a7.8 7.8 0 10-9.3 7.7v9.8a7.86 7.86 0 000 15.4v9.8a7.8 7.8 0 103 0v-9.8a7.86 7.86 0 000-15.4v-9.8a7.84 7.84 0 006.3-7.7zM93.5 0H65.2a1.54 1.54 0 00-1.5 1.5v5.6l-4.3 3.4a1.5 1.5 0 000 2.4l4.3 3.4v10.6a1.54 1.54 0 001.5 1.5h28.3a1.54 1.54 0 001.5-1.5V1.5A1.54 1.54 0 0093.5 0zM92 25.2H66.7v-9.8a1.43 1.43 0 00-.6-1.2l-3.4-2.6L66.1 9a1.43 1.43 0 00.6-1.2V3H92z"}),(0,e.createElement)("path",{d:"M71.7 9.3h15.2a1.5 1.5 0 000-3H71.7a1.5 1.5 0 100 3zM71.7 15.6h15.2a1.5 1.5 0 000-3H71.7a1.5 1.5 0 000 3zM71.7 21.9h15.2a1.5 1.5 0 000-3H71.7a1.5 1.5 0 000 3zM93.5 45.8H65.2a1.54 1.54 0 00-1.5 1.5v10.6l-4.3 3.4a1.5 1.5 0 000 2.4l4.3 3.4v5.6a1.54 1.54 0 001.5 1.5h28.3a1.54 1.54 0 001.5-1.5V47.3a1.54 1.54 0 00-1.5-1.5zM92 71H66.7v-4.8a1.43 1.43 0 00-.6-1.2l-3.4-2.6 3.4-2.6a1.43 1.43 0 00.6-1.2v-9.8H92z"}),(0,e.createElement)("path",{d:"M71.7 55.1h15.2a1.5 1.5 0 000-3H71.7a1.5 1.5 0 000 3zM71.7 61.4h15.2a1.5 1.5 0 000-3H71.7a1.5 1.5 0 000 3zM71.7 67.7h15.2a1.5 1.5 0 000-3H71.7a1.5 1.5 0 000 3zM35.6 35.9l-4.3-3.2v-8.1a1.54 1.54 0 00-1.5-1.5H1.5A1.54 1.54 0 000 24.6v25.2a1.54 1.54 0 001.5 1.5h28.3a1.54 1.54 0 001.5-1.5v-8.1l4.3-3.4a1.5 1.5 0 000-2.4zm-6.7 3.9a1.43 1.43 0 00-.6 1.2v7.3H3V26.1h25.3v7.3a1.43 1.43 0 00.6 1.2l3.4 2.6z"}),(0,e.createElement)("path",{d:"M23.3 29.4H8a1.5 1.5 0 000 3h15.2a1.54 1.54 0 001.5-1.5 1.39 1.39 0 00-1.4-1.5zM23.3 35.7H8a1.5 1.5 0 000 3h15.2a1.54 1.54 0 001.5-1.5 1.39 1.39 0 00-1.4-1.5zM23.3 42H8a1.5 1.5 0 000 3h15.2a1.54 1.54 0 001.5-1.5 1.39 1.39 0 00-1.4-1.5z"})),d=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"statik/timeline","version":"4.11.2","title":"Timeline","category":"layout","description":"Display a list of events in chronological order presented as cards.","keywords":[],"textdomain":"statik-blocks","attributes":{"labelsEnabled":{"type":"boolean","default":true}},"supports":{"html":false},"example":{"innerBlocks":[{"name":"statik/timeline-item","attributes":{"label":"First label"},"innerBlocks":[{"name":"core/group","attributes":{"style":{"spacing":{"padding":{"top":20,"right":20,"bottom":20,"left":20}}}},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet"}}]}]},{"name":"statik/timeline-item","attributes":{"label":"Second label","labelAlign":"right"},"innerBlocks":[{"name":"core/group","attributes":{"style":{"spacing":{"padding":{"top":20,"right":20,"bottom":20,"left":20}}}},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet"}}]}]},{"name":"statik/timeline-item","attributes":{"label":"Third label"},"innerBlocks":[{"name":"core/group","attributes":{"style":{"spacing":{"padding":{"top":20,"right":20,"bottom":20,"left":20}}}},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet"}}]}]}]},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');const m={icon:u,edit:function(){const n=(0,a.useBlockProps)();!function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{attributes:o,setAttributes:c}=r(),{name:p}=(0,a.useBlockEditContext)(),u=Object.entries(o).filter((t=>t[0]!==s)).sort(((t,e)=>t[0].localeCompare(e[0]))).map((t=>t[1]));(0,e.useEffect)((()=>{const e=(0,i.applyFilters)("blocks.getSaveContent.extraProps",{...n},(0,t.getBlockType)(p),o);l(e),c({blockProps:e})}),[JSON.stringify(u)])}();const o=(0,a.useInnerBlocksProps)({className:"wp-block-statik-timeline__inner-blocks"},{allowedBlocks:c,template:p,renderAppender:a.InnerBlocks.ButtonBlockAppender});return(0,e.createElement)("div",n,(0,e.createElement)("div",o))},save:()=>(0,e.createElement)(a.InnerBlocks.Content,null)};(0,t.registerBlockType)(d,m)}},a={};function n(t){var o=a[t];if(void 0!==o)return o.exports;var r=a[t]={exports:{}};return e[t](r,r.exports,n),r.exports}n.m=e,t=[],n.O=function(e,a,o,r){if(!a){var i=1/0;for(p=0;p<t.length;p++){a=t[p][0],o=t[p][1],r=t[p][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(p--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[a,o,r]},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={4600:0,4601:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var p=l(n)}for(e&&e(a);c<i.length;c++)r=i[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(p)},a=self.webpackChunk_statik_space_wordpress_statik_blocks=self.webpackChunk_statik_space_wordpress_statik_blocks||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var o=n.O(void 0,[4601],(function(){return n(5399)}));o=n.O(o)}();