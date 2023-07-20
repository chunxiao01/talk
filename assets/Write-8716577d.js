import{d as T,A as Me,o as E,c as S,a as i,j as y,l as P,p as V,g as I,_ as A,r as f,w as C,v as B,B as Be,C as ze,e as Ee,F,q as Z,D as ee,T as Te,n as te,t as N,E as Ae,y as $e,G as We,m as ne,b as He,H as Ve,z as Ie,u as R}from"./index-ab3851e8.js";import{_ as Ne,T as Re}from"./ToolBarItem.vue_vue_type_script_setup_true_lang-66c2d049.js";import{m as Pe,r as Se,a as Fe}from"./request-266519f2.js";const U=e=>(V("data-v-91101cb6"),e=e(),I(),e),Oe={class:"write-nav-bar"},qe=U(()=>i("span",{class:"title-icon"},[i("svg",{class:"titel_icon_svg",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"745"},[i("path",{d:"M670.954667 86.826667L269.44 488.362667a32 32 0 0 0-2.090667 42.965333l2.090667 2.282667L670.933333 935.168a8.533333 8.533333 0 0 0 6.037334 2.496h66.368a8.533333 8.533333 0 0 0 6.037333-14.570667L337.28 511.018667 749.397333 98.901333a8.533333 8.533333 0 0 0-6.037333-14.570666h-66.346667a8.533333 8.533333 0 0 0-6.058666 2.496z","p-id":"746"})])],-1)),De=U(()=>i("span",{class:"title-text"},"发布动态",-1)),je=[qe,De],Ue={class:"write-nav-bar-tools"},Ge=U(()=>i("div",{class:"tool-bar-icon",title:"草稿箱"},[i("svg",{class:"icon_svg",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4896"},[i("path",{d:"M729.301333 42.666667c79.552 0 142.72 69.504 145.28 154.666666L874.666667 202.666667V576h32a74.666667 74.666667 0 0 1 74.56 70.570667L981.333333 650.666667v256a74.666667 74.666667 0 0 1-74.666666 74.666666h-789.333334A74.666667 74.666667 0 0 1 42.666667 906.666667v-256A74.666667 74.666667 0 0 1 117.333333 576H149.333333V202.666667c0-85.76 61.568-157.034667 140.416-159.914667L294.698667 42.666667h434.602666zM216.832 640H117.333333a10.666667 10.666667 0 0 0-10.666666 10.666667v256a10.666667 10.666667 0 0 0 10.666666 10.666666h789.333334a10.666667 10.666667 0 0 0 10.666666-10.666666v-256a10.666667 10.666667 0 0 0-10.666666-10.666667h-78.421334a10.666667 10.666667 0 0 0-6.912 2.538667l-126.890666 107.733333a74.666667 74.666667 0 0 1-48.32 17.728H381.226667a74.666667 74.666667 0 0 1-52.522667-21.589333l-104.405333-103.317334a10.666667 10.666667 0 0 0-7.488-3.093333zM729.301333 106.666667H294.698667c-42.666667 0-79.104 39.658667-81.28 91.136L213.333333 202.666667V576h3.498667a74.666667 74.666667 0 0 1 49.194667 18.517333l3.328 3.072 104.384 103.317334a10.666667 10.666667 0 0 0 7.509333 3.093333h264.874667a10.666667 10.666667 0 0 0 6.890666-2.538667l126.912-107.733333a74.666667 74.666667 0 0 1 30.72-15.637333L810.666667 202.666667c0-52.202667-35.114667-93.44-77.397334-95.893334L729.301333 106.666667zM629.333333 448a32 32 0 0 1 0 64h-234.666666a32 32 0 0 1 0-64h234.666666z m64-192a32 32 0 0 1 0 64h-362.666666a32 32 0 0 1 0-64h362.666666z","p-id":"4897"})])],-1)),Qe=T({__name:"WriteNavBar",emits:["momentDraftClick"],setup(e,{emit:t}){const n=Me(),o=()=>{n.go(-1)},s=()=>{t("momentDraftClick")};return(a,l)=>(E(),S("div",Oe,[i("div",{class:"write-nav-bar-title",onClick:o},je),i("div",Ue,[y(Re,{class:"main-tools-bar"},{default:P(()=>[y(Ne,{class:"main-tools-bar-item",isStatic:!0,onClick:s},{"slot-tool-bar-item-static":P(()=>[Ge]),_:1})]),_:1})])]))}});const Ke=A(Qe,[["__scopeId","data-v-91101cb6"]]);var oe=globalThis&&globalThis.__classPrivateFieldGet||function(e,t,n,o){if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?o:n==="a"?o.call(e):o?o.value:t.get(e)},W,O;const Je=["[data-md-button]","md-header","md-bold","md-italic","md-quote","md-code","md-link","md-image","md-unordered-list","md-ordered-list","md-task-list","md-mention","md-ref","md-strikethrough"];function ye(e){const t=[];for(const n of e.querySelectorAll(Je.join(", ")))n.hidden||n.offsetWidth<=0&&n.offsetHeight<=0||n.closest("markdown-toolbar")===e&&t.push(n);return t}function Le(e){return function(t){(t.key===" "||t.key==="Enter")&&(t.preventDefault(),e(t))}}const b=new WeakMap,Xe={"header-1":{prefix:"# "},"header-2":{prefix:"## "},"header-3":{prefix:"### "},"header-4":{prefix:"#### "},"header-5":{prefix:"##### "},"header-6":{prefix:"###### "},bold:{prefix:"**",suffix:"**",trimFirst:!0},italic:{prefix:"_",suffix:"_",trimFirst:!0},quote:{prefix:"> ",multiline:!0,surroundWithNewlines:!0},code:{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"},link:{prefix:"[",suffix:"](url)",replaceNext:"url",scanFor:"https?://"},image:{prefix:"![",suffix:"](url)",replaceNext:"url",scanFor:"https?://"},"unordered-list":{prefix:"- ",multiline:!0,unorderedList:!0},"ordered-list":{prefix:"1. ",multiline:!0,orderedList:!0},"task-list":{prefix:"- [ ] ",multiline:!0,surroundWithNewlines:!0},mention:{prefix:"@",prefixSpace:!0},ref:{prefix:"#",prefixSpace:!0},strikethrough:{prefix:"~~",suffix:"~~",trimFirst:!0}};class M extends HTMLElement{constructor(){super();const t=()=>{const n=b.get(this);n&&j(this,n)};this.addEventListener("keydown",Le(t)),this.addEventListener("click",t)}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","button")}click(){const t=b.get(this);t&&j(this,t)}}class se extends M{constructor(){super(...arguments),W.add(this)}connectedCallback(){const t=parseInt(this.getAttribute("level")||"3",10);oe(this,W,"m",O).call(this,t)}static get observedAttributes(){return["level"]}attributeChangedCallback(t,n,o){if(t!=="level")return;const s=parseInt(o||"3",10);oe(this,W,"m",O).call(this,s)}}W=new WeakSet,O=function(t){if(t<1||t>6)return;const n=`${"#".repeat(t)} `;b.set(this,{prefix:n})};window.customElements.get("md-header")||(window.MarkdownHeaderButtonElement=se,window.customElements.define("md-header",se));class ie extends M{connectedCallback(){b.set(this,{prefix:"**",suffix:"**",trimFirst:!0})}}window.customElements.get("md-bold")||(window.MarkdownBoldButtonElement=ie,window.customElements.define("md-bold",ie));class ae extends M{connectedCallback(){b.set(this,{prefix:"_",suffix:"_",trimFirst:!0})}}window.customElements.get("md-italic")||(window.MarkdownItalicButtonElement=ae,window.customElements.define("md-italic",ae));class le extends M{connectedCallback(){b.set(this,{prefix:"> ",multiline:!0,surroundWithNewlines:!0})}}window.customElements.get("md-quote")||(window.MarkdownQuoteButtonElement=le,window.customElements.define("md-quote",le));class ce extends M{connectedCallback(){b.set(this,{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"})}}window.customElements.get("md-code")||(window.MarkdownCodeButtonElement=ce,window.customElements.define("md-code",ce));class re extends M{connectedCallback(){b.set(this,{prefix:"[",suffix:"](url)",replaceNext:"url",scanFor:"https?://"})}}window.customElements.get("md-link")||(window.MarkdownLinkButtonElement=re,window.customElements.define("md-link",re));class de extends M{connectedCallback(){b.set(this,{prefix:"![",suffix:"](url)",replaceNext:"url",scanFor:"https?://"})}}window.customElements.get("md-image")||(window.MarkdownImageButtonElement=de,window.customElements.define("md-image",de));class ue extends M{connectedCallback(){b.set(this,{prefix:"- ",multiline:!0,unorderedList:!0})}}window.customElements.get("md-unordered-list")||(window.MarkdownUnorderedListButtonElement=ue,window.customElements.define("md-unordered-list",ue));class me extends M{connectedCallback(){b.set(this,{prefix:"1. ",multiline:!0,orderedList:!0})}}window.customElements.get("md-ordered-list")||(window.MarkdownOrderedListButtonElement=me,window.customElements.define("md-ordered-list",me));class fe extends M{connectedCallback(){b.set(this,{prefix:"- [ ] ",multiline:!0,surroundWithNewlines:!0})}}window.customElements.get("md-task-list")||(window.MarkdownTaskListButtonElement=fe,window.customElements.define("md-task-list",fe));class ve extends M{connectedCallback(){b.set(this,{prefix:"@",prefixSpace:!0})}}window.customElements.get("md-mention")||(window.MarkdownMentionButtonElement=ve,window.customElements.define("md-mention",ve));class he extends M{connectedCallback(){b.set(this,{prefix:"#",prefixSpace:!0})}}window.customElements.get("md-ref")||(window.MarkdownRefButtonElement=he,window.customElements.define("md-ref",he));class pe extends M{connectedCallback(){b.set(this,{prefix:"~~",suffix:"~~",trimFirst:!0})}}window.customElements.get("md-strikethrough")||(window.MarkdownStrikethroughButtonElement=pe,window.customElements.define("md-strikethrough",pe));function _e(e){const{target:t,currentTarget:n}=e;if(!(t instanceof HTMLElement))return;const o=t.closest("[data-md-button]");if(!o||o.closest("markdown-toolbar")!==n)return;const s=t.getAttribute("data-md-button"),a=Xe[s];a&&j(t,a)}class q extends HTMLElement{connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","toolbar"),this.addEventListener("keydown",we),this.setAttribute("tabindex","0"),this.addEventListener("focus",Ye,{once:!0}),this.addEventListener("keydown",Le(_e)),this.addEventListener("click",_e)}disconnectedCallback(){this.removeEventListener("keydown",we)}get field(){const t=this.getAttribute("for");if(!t)return null;const n="getRootNode"in this?this.getRootNode():document;let o;return(n instanceof Document||n instanceof ShadowRoot)&&(o=n.getElementById(t)),o instanceof HTMLTextAreaElement?o:null}}function Ye({target:e}){if(!(e instanceof Element)||e.hasAttribute("data-no-focus"))return;e.removeAttribute("tabindex");let t="0";for(const n of ye(e))n.setAttribute("tabindex",t),t==="0"&&(n.focus(),t="-1")}function we(e){const t=e.key;if(t!=="ArrowRight"&&t!=="ArrowLeft"&&t!=="Home"&&t!=="End")return;const n=e.currentTarget;if(!(n instanceof HTMLElement)||n.hasAttribute("data-no-focus"))return;const o=ye(n),s=o.indexOf(e.target),a=o.length;if(s===-1)return;let l=0;t==="ArrowLeft"&&(l=s-1),t==="ArrowRight"&&(l=s+1),t==="End"&&(l=a-1),l<0&&(l=a-1),l>a-1&&(l=0);for(let u=0;u<a;u+=1)o[u].setAttribute("tabindex",u===l?"0":"-1");e.preventDefault(),o[l].focus()}window.customElements.get("markdown-toolbar")||(window.MarkdownToolbarElement=q,window.customElements.define("markdown-toolbar",q));function D(e){return e.trim().split(`
`).length>1}function ge(e,t){return Array(t+1).join(e)}function Ze(e,t){let n=t;for(;e[n]&&e[n-1]!=null&&!e[n-1].match(/\s/);)n--;return n}function et(e,t,n){let o=t;const s=n?/\n/:/\s/;for(;e[o]&&!e[o].match(s);)o++;return o}let z=null;function tt(e,{text:t,selectionStart:n,selectionEnd:o}){const s=e.selectionStart,a=e.value.slice(0,s),l=e.value.slice(e.selectionEnd);if(z===null||z===!0){e.contentEditable="true";try{z=document.execCommand("insertText",!1,t)}catch{z=!1}e.contentEditable="false"}if(z&&!e.value.slice(0,e.selectionStart).endsWith(t)&&(z=!1),!z){try{document.execCommand("ms-beginUndoUnit")}catch{}e.value=a+t+l;try{document.execCommand("ms-endUndoUnit")}catch{}e.dispatchEvent(new CustomEvent("input",{bubbles:!0,cancelable:!0}))}n!=null&&o!=null?e.setSelectionRange(n,o):e.setSelectionRange(s,e.selectionEnd)}function nt(e,t){const n=e.value.slice(e.selectionStart,e.selectionEnd);let o;t.orderedList||t.unorderedList?o=ct(e,t):t.multiline&&D(n)?o=at(e,t):o=it(e,t),tt(e,o)}function ot(e){const t=e.value.split(`
`);let n=0;for(let o=0;o<t.length;o++){const s=t[o].length+1;e.selectionStart>=n&&e.selectionStart<n+s&&(e.selectionStart=n),e.selectionEnd>=n&&e.selectionEnd<n+s&&(e.selectionEnd=n+s-1),n+=s}}function st(e,t,n,o=!1){if(e.selectionStart===e.selectionEnd)e.selectionStart=Ze(e.value,e.selectionStart),e.selectionEnd=et(e.value,e.selectionEnd,o);else{const s=e.selectionStart-t.length,a=e.selectionEnd+n.length,l=e.value.slice(s,e.selectionStart)===t,u=e.value.slice(e.selectionEnd,a)===n;l&&u&&(e.selectionStart=s,e.selectionEnd=a)}return e.value.slice(e.selectionStart,e.selectionEnd)}function G(e){const t=e.value.slice(0,e.selectionStart),n=e.value.slice(e.selectionEnd),o=t.match(/\n*$/),s=n.match(/^\n*/),a=o?o[0].length:0,l=s?s[0].length:0;let u,d;return t.match(/\S/)&&a<2&&(u=ge(`
`,2-a)),n.match(/\S/)&&l<2&&(d=ge(`
`,2-l)),u==null&&(u=""),d==null&&(d=""),{newlinesToAppend:u,newlinesToPrepend:d}}function it(e,t){let n,o;const{prefix:s,suffix:a,blockPrefix:l,blockSuffix:u,replaceNext:d,prefixSpace:p,scanFor:r,surroundWithNewlines:v}=t,c=e.selectionStart,x=e.selectionEnd;let _=e.value.slice(e.selectionStart,e.selectionEnd),m=D(_)&&l.length>0?`${l}
`:s,g=D(_)&&u.length>0?`
${u}`:a;if(p){const k=e.value[e.selectionStart-1];e.selectionStart!==0&&k!=null&&!k.match(/\s/)&&(m=` ${m}`)}_=st(e,m,g,t.multiline);let h=e.selectionStart,w=e.selectionEnd;const J=d.length>0&&g.indexOf(d)>-1&&_.length>0;if(v){const k=G(e);n=k.newlinesToAppend,o=k.newlinesToPrepend,m=n+s,g+=o}if(_.startsWith(m)&&_.endsWith(g)){const k=_.slice(m.length,_.length-g.length);if(c===x){let L=c-m.length;L=Math.max(L,h),L=Math.min(L,h+k.length),h=w=L}else w=h+k.length;return{text:k,selectionStart:h,selectionEnd:w}}else if(J)if(r.length>0&&_.match(r)){g=g.replace(d,_);const k=m+g;return h=w=h+m.length,{text:k,selectionStart:h,selectionEnd:w}}else{const k=m+_+g;return h=h+m.length+_.length+g.indexOf(d),w=h+d.length,{text:k,selectionStart:h,selectionEnd:w}}else{let k=m+_+g;h=c+m.length,w=x+m.length;const L=_.match(/^\s*|\s*$/g);if(t.trimFirst&&L){const X=L[0]||"",Y=L[1]||"";k=X+m+_.trim()+g+Y,h+=X.length,w-=Y.length}return{text:k,selectionStart:h,selectionEnd:w}}}function at(e,t){const{prefix:n,suffix:o,surroundWithNewlines:s}=t;let a=e.value.slice(e.selectionStart,e.selectionEnd),l=e.selectionStart,u=e.selectionEnd;const d=a.split(`
`);if(d.every(r=>r.startsWith(n)&&r.endsWith(o)))a=d.map(r=>r.slice(n.length,r.length-o.length)).join(`
`),u=l+a.length;else if(a=d.map(r=>n+r+o).join(`
`),s){const{newlinesToAppend:r,newlinesToPrepend:v}=G(e);l+=r.length,u=l+a.length,a=r+a+v}return{text:a,selectionStart:l,selectionEnd:u}}function ke(e){const t=e.split(`
`),n=/^\d+\.\s+/,o=t.every(a=>n.test(a));let s=t;return o&&(s=t.map(a=>a.replace(n,""))),{text:s.join(`
`),processed:o}}function be(e){const t=e.split(`
`),n="- ",o=t.every(a=>a.startsWith(n));let s=t;return o&&(s=t.map(a=>a.slice(n.length,a.length))),{text:s.join(`
`),processed:o}}function $(e,t){return t?"- ":`${e+1}. `}function lt(e,t){let n,o,s;return e.orderedList?(o=ke(t),n=be(o.text),s=n.text):(o=be(t),n=ke(o.text),s=n.text),[o,n,s]}function ct(e,t){const n=e.selectionStart===e.selectionEnd;let o=e.selectionStart,s=e.selectionEnd;ot(e);const a=e.value.slice(e.selectionStart,e.selectionEnd),[l,u,d]=lt(t,a),p=d.split(`
`).map((m,g)=>`${$(g,t.unorderedList)}${m}`),r=p.reduce((m,g,h)=>m+$(h,t.unorderedList).length,0),v=p.reduce((m,g,h)=>m+$(h,!t.unorderedList).length,0);if(l.processed)return n?(o=Math.max(o-$(0,t.unorderedList).length,0),s=o):(o=e.selectionStart,s=e.selectionEnd-r),{text:d,selectionStart:o,selectionEnd:s};const{newlinesToAppend:c,newlinesToPrepend:x}=G(e),_=c+p.join(`
`)+x;return n?(o=Math.max(o+$(0,t.unorderedList).length+c.length,0),s=o):u.processed?(o=Math.max(e.selectionStart+c.length,0),s=e.selectionEnd+c.length+r-v):(o=Math.max(e.selectionStart+c.length,0),s=e.selectionEnd+c.length+r),{text:_,selectionStart:o,selectionEnd:s}}function j(e,t){const n=e.closest("markdown-toolbar");if(!(n instanceof q))return;const s=Object.assign(Object.assign({},{prefix:"",suffix:"",blockPrefix:"",blockSuffix:"",multiline:!1,replaceNext:"",prefixSpace:!1,scanFor:"",surroundWithNewlines:!1,orderedList:!1,unorderedList:!1,trimFirst:!1}),t),a=n.field;a&&(a.focus(),nt(a,s))}const Q=e=>(V("data-v-7a46f30f"),e=e(),I(),e),rt={class:"m-markdown"},dt={class:"m-markdown-toolbar"},ut={for:"textarea_md_write",class:"markdown-toolbar"},mt=ze('<div class="markdown-toolbar-btn" data-v-7a46f30f><md-bold class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M4 2a1 1 0 00-1 1v10a1 1 0 001 1h5.5a3.5 3.5 0 001.852-6.47A3.5 3.5 0 008.5 2H4zm4.5 5a1.5 1.5 0 100-3H5v3h3.5zM5 9v3h4.5a1.5 1.5 0 000-3H5z" data-v-7a46f30f></path></svg></md-bold></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-header class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M3.75 2a.75.75 0 01.75.75V7h7V2.75a.75.75 0 011.5 0v10.5a.75.75 0 01-1.5 0V8.5h-7v4.75a.75.75 0 01-1.5 0V2.75A.75.75 0 013.75 2z" data-v-7a46f30f></path></svg></md-header></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-italic class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M6 2.75A.75.75 0 016.75 2h6.5a.75.75 0 010 1.5h-2.505l-3.858 9H9.25a.75.75 0 010 1.5h-6.5a.75.75 0 010-1.5h2.505l3.858-9H6.75A.75.75 0 016 2.75z" data-v-7a46f30f></path></svg></md-italic></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-quote class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M1.75 2.5a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H1.75zm4 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM2.5 7.75a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6z" data-v-7a46f30f></path></svg></md-quote></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-code class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z" data-v-7a46f30f></path></svg></md-code></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-link class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" data-v-7a46f30f></path></svg></md-link></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-image class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M1.75 2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h.94a.76.76 0 01.03-.03l6.077-6.078a1.75 1.75 0 012.412-.06L14.5 10.31V2.75a.25.25 0 00-.25-.25H1.75zm12.5 11H4.81l5.048-5.047a.25.25 0 01.344-.009l4.298 3.889v.917a.25.25 0 01-.25.25zm1.75-.25V2.75A1.75 1.75 0 0014.25 1H1.75A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25zM5.5 6a.5.5 0 11-1 0 .5.5 0 011 0zM7 6a2 2 0 11-4 0 2 2 0 014 0z" data-v-7a46f30f></path></svg></md-image></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-unordered-list class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z" data-v-7a46f30f></path></svg></md-unordered-list></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-ordered-list class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M2.003 2.5a.5.5 0 00-.723-.447l-1.003.5a.5.5 0 00.446.895l.28-.14V6H.5a.5.5 0 000 1h2.006a.5.5 0 100-1h-.503V2.5zM5 3.25a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 3.25zm0 5a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 8.25zm0 5a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zM.924 10.32l.003-.004a.851.851 0 01.144-.153A.66.66 0 011.5 10c.195 0 .306.068.374.146a.57.57 0 01.128.376c0 .453-.269.682-.8 1.078l-.035.025C.692 11.98 0 12.495 0 13.5a.5.5 0 00.5.5h2.003a.5.5 0 000-1H1.146c.132-.197.351-.372.654-.597l.047-.035c.47-.35 1.156-.858 1.156-1.845 0-.365-.118-.744-.377-1.038-.268-.303-.658-.484-1.126-.484-.48 0-.84.202-1.068.392a1.858 1.858 0 00-.348.384l-.007.011-.002.004-.001.002-.001.001a.5.5 0 00.851.525zM.5 10.055l-.427-.26.427.26z" data-v-7a46f30f></path></svg></md-ordered-list></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-task-list class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M2.5 3.5v3h3v-3h-3zM2 2a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V3a1 1 0 00-1-1H2zm4.655 8.595a.75.75 0 010 1.06L4.03 14.28a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 111.06-1.06l.97.97 2.095-2.095a.75.75 0 011.06 0zM9.75 2.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" data-v-7a46f30f></path></svg></md-task-list></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-mention class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M4.75 2.37a6.5 6.5 0 006.5 11.26.75.75 0 01.75 1.298 8 8 0 113.994-7.273.754.754 0 01.006.095v1.5a2.75 2.75 0 01-5.072 1.475A4 4 0 1112 8v1.25a1.25 1.25 0 002.5 0V7.867a6.5 6.5 0 00-9.75-5.496V2.37zM10.5 8a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" data-v-7a46f30f></path></svg></md-mention></div><div class="markdown-toolbar-btn" data-v-7a46f30f><md-ref class="markdown-toolbar-item" data-v-7a46f30f><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="icon_svg" data-v-7a46f30f><path fill-rule="evenodd" d="M16 1.25v4.146a.25.25 0 01-.427.177L14.03 4.03l-3.75 3.75a.75.75 0 11-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0111.604 1h4.146a.25.25 0 01.25.25zM2.75 3.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-2.5a.75.75 0 111.5 0v2.5A1.75 1.75 0 0113.25 13H9.06l-2.573 2.573A1.457 1.457 0 014 14.543V13H2.75A1.75 1.75 0 011 11.25v-7.5C1 2.784 1.784 2 2.75 2h5.5a.75.75 0 010 1.5h-5.5z" data-v-7a46f30f></path></svg></md-ref></div>',12),ft=Q(()=>i("div",{"data-md-button":"",class:"markdown-toolbar-item"},[i("svg",{class:"icon_svg","aria-hidden":"true",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4561"},[i("path",{d:"M382.320274 405.357714v384a20.626286 20.626286 0 0 1-21.577143 21.284572H317.44256a20.626286 20.626286 0 0 1-21.577143-21.357715v-384a20.626286 20.626286 0 0 1 21.577143-21.284571h43.154286a20.626286 20.626286 0 0 1 21.577143 21.357714h0.073142z m172.909715 0v384a20.626286 20.626286 0 0 1-21.650286 21.284572h-43.154286a20.626286 20.626286 0 0 1-21.577143-21.357715v-384a20.626286 20.626286 0 0 1 21.577143-21.284571h43.154286a20.626286 20.626286 0 0 1 21.577143 21.357714z m172.909714 0v384a20.626286 20.626286 0 0 1-21.650286 21.284572h-43.154286a20.626286 20.626286 0 0 1-21.577142-21.357715l-0.073143-384a20.626286 20.626286 0 0 1 21.577143-21.284571h43.227428a20.626286 20.626286 0 0 1 21.577143 21.357714z m86.381714 482.669715V256H209.483703v631.954286a74.825143 74.825143 0 0 0 14.482286 45.056c3.364571 3.803429 5.778286 5.632 7.094857 5.632h561.883428c1.316571 0 3.657143-1.828571 7.094857-5.632a74.825143 74.825143 0 0 0 14.555429-44.982857zM360.743131 170.642286h302.518858l-32.402286-77.970286a19.017143 19.017143 0 0 0-11.483429-7.314286H405.287131a19.017143 19.017143 0 0 0-11.483428 7.314286l-33.060572 77.970286zM987.431131 192v42.642286a20.626286 20.626286 0 0 1-21.577142 21.357714h-64.877715v631.954286c0 36.937143-10.532571 68.754286-31.744 95.744-21.211429 26.843429-46.592 40.301714-76.288 40.301714H231.060846c-29.696 0-55.149714-13.019429-76.288-38.985143-21.211429-26.038857-31.744-57.490286-31.744-94.354286V256H58.151131A20.626286 20.626286 0 0 1 36.573989 234.642286v-42.642286a20.626286 20.626286 0 0 1 21.577142-21.357714h208.676572L314.151131 59.318857c6.729143-16.457143 18.870857-30.427429 36.425143-41.984 17.554286-11.556571 35.401143-17.334857 53.394286-17.334857h216.064c17.993143 0 35.84 5.778286 53.394286 17.334857 17.554286 11.556571 29.696 25.6 36.425143 41.984l47.323428 111.323429h208.676572a20.626286 20.626286 0 0 1 21.577142 21.357714z","p-id":"4562"})])],-1)),vt=[ft],ht={"data-md-button":"",class:"markdown-toolbar-item"},pt={class:"md-preview"},_t=Q(()=>i("svg",{class:"icon_svg","aria-hidden":"true",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7030"},[i("path",{d:"M512 832c-213.888 0-384.512-106.688-512-320 129.408-213.312 300.032-320 512-320 211.968 0 382.592 106.688 512 320-127.488 213.312-298.112 320-512 320z m0-64a256 256 0 1 0 0-512 256 256 0 0 0 0 512z m0-128a128 128 0 1 0 0-256 128 128 0 0 0 0 256z","p-id":"7031"})],-1)),wt=[_t],gt={class:"md-preview"},kt=Q(()=>i("svg",{class:"icon_svg","aria-hidden":"true",viewBox:"0 0 1049 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7128"},[i("path",{d:"M247.36 246.528L176.704 175.872l46.336-46.4 85.76 85.76C375.296 186.496 447.296 172.16 524.672 172.16c217.216 0 392.128 112.96 524.672 338.752-59.52 103.04-128.32 182.528-206.272 238.528l98.624 98.624-46.4 46.4-109.12-109.184a531.2 531.2 0 0 1-1.024 0.512l-126.272-126.208 0.832-0.768-70.016-69.952a99.968 99.968 0 0 1-0.768 0.64l-140.8-140.736 0.64-0.832-71.552-71.616a202.752 202.752 0 0 0-0.64 0.832L246.336 247.104l0.96-0.576z m451.584 358.848c14.4-28.16 22.464-60.288 22.464-94.4C721.408 398.72 633.344 307.84 524.672 307.84c-35.264 0-68.352 9.6-96.96 26.368l78.528 78.528c6.016-1.28 12.288-1.856 18.688-1.856 54.272 0 98.368 45.44 98.368 101.632 0 5.44-0.448 10.816-1.28 16l76.928 76.928zM191.296 284.8l150.656 150.72a208.64 208.64 0 0 0-14.08 75.52c0 112.256 88.128 203.264 196.8 203.264 28.16 0 54.848-6.08 79.04-17.024l117.888 117.824A551.04 551.04 0 0 1 524.672 849.792c-219.136 0-394.048-112.96-524.672-338.816C56.128 415.36 119.936 339.904 191.232 284.8z m329.216 329.216L426.816 520.32c3.776 51.008 43.904 91.52 93.696 93.696z","p-id":"7129"})],-1)),bt=[kt],xt={class:"m-markdown-textarea"},Mt=["innerHTML"],Et=T({__name:"MMardown",setup(e){const t=f(null),n=f(!1),o=f(""),s=f(""),a=()=>{t.value&&(t.value.value="",o.value="",s.value="",t.value.focus())},l=()=>{n.value=!n.value,s.value=Pe.parse(o.value)};return(u,d)=>(E(),S("div",rt,[i("div",dt,[i("markdown-toolbar",ut,[mt,i("div",{class:"markdown-toolbar-btn",onClick:a},vt),i("div",{class:"markdown-toolbar-btn",onClick:l},[i("div",ht,[C(i("div",pt,wt,512),[[B,!n.value]]),C(i("div",gt,bt,512),[[B,n.value]])])])])]),i("div",xt,[C(i("textarea",{id:"textarea_md_write",class:"textarea_md",placeholder:"写点什么...",ref_key:"refTextarea",ref:t,"onUpdate:modelValue":d[0]||(d[0]=p=>o.value=p)},null,512),[[Be,o.value],[B,!n.value]]),C(i("div",{class:"textarea_md_preview markdown-body",innerHTML:s.value},null,8,Mt),[[B,n.value]])])]))}});const St=A(Et,[["__scopeId","data-v-7a46f30f"]]),yt={class:"write-moment-content-container"},Lt=T({__name:"WriteMomentContent",setup(e,{expose:t}){const n=f();return t({refMarkdown:n}),(o,s)=>(E(),S("div",{class:"write-moment-content",ref_key:"refMarkdown",ref:n},[i("div",yt,[y(St)])],512))}});const Ct=A(Lt,[["__scopeId","data-v-f4e5261a"]]),K=e=>(V("data-v-971b2af4"),e=e(),I(),e),Bt={class:"m-select"},zt={class:"m-select-select-content"},Tt={class:"m-select-select-content-item-text"},At={class:"m-select-select-icon"},$t=K(()=>i("svg",{class:"m-select-icon-triangle",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1898"},[i("path",{d:"M878.592 250.88q29.696 0 48.128 11.264t24.576 29.696 0 41.472-26.624 45.568q-82.944 92.16-159.744 180.224t-148.48 164.864q-19.456 20.48-45.568 31.744t-53.76 11.776-53.248-8.704-43.008-28.672q-39.936-44.032-82.944-90.112l-88.064-92.16q-43.008-46.08-85.504-90.624t-79.36-86.528q-17.408-19.456-22.528-40.448t1.024-38.4 23.552-28.672 45.056-11.264q35.84 0 98.816-0.512t137.728-0.512l153.6 0 150.528 0 125.952 0 79.872 0z","p-id":"1899"})],-1)),Wt=[$t],Ht={class:"m-select-select-option-ul"},Vt=["onClick"],It={class:"m-select-select-option-li-content"},Nt={class:"m-select-select-option-icon"},Rt=K(()=>i("svg",{class:"m-select-icon-selected",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3288"},[i("path",{d:"M380.342857 801.645714a53.394286 53.394286 0 0 1-36.571428-16.091428l-218.331429-217.234286a55.588571 55.588571 0 0 1 0-77.165714 54.125714 54.125714 0 0 1 76.8 0l178.102857 179.2L835.291429 272.091429a53.394286 53.394286 0 0 1 76.434285 0 54.125714 54.125714 0 0 1 0 76.8L418.742857 785.554286a54.491429 54.491429 0 0 1-38.4 16.091428z","p-id":"3289"})],-1)),Pt=[Rt],Ft={class:"m-select-select-option-text"},Ot={class:"m-select-select-option-text-text"},qt={class:"m-select-select-option-icon"},Dt=K(()=>i("svg",{class:"m-select-icon-delete",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9419"},[i("path",{d:"M780.8 710.4 582.4 505.6l198.4-198.4c19.2-19.2 19.2-51.2 0-70.4-19.2-19.2-51.2-19.2-70.4 0L518.4 441.6 313.6 243.2c-19.2-19.2-51.2-19.2-76.8 0-19.2 19.2-19.2 51.2 0 76.8l198.4 198.4-198.4 198.4c-19.2 19.2-19.2 51.2 0 70.4 19.2 19.2 51.2 19.2 70.4 0l198.4-198.4 198.4 198.4c19.2 19.2 51.2 19.2 76.8 0C806.4 761.6 806.4 729.6 780.8 710.4z","p-id":"9420"})],-1)),jt=[Dt],Ut={class:"m-select-select-option-li-desc"},Gt=T({__name:"MSelect",props:{options:{type:Array,default(){return[{option_id:0,option_value:"",option_desc:"",option_color:""}]}}},setup(e){const t=e,n=f(!1),o=()=>{n.value=!n.value},s=(r,v)=>{const c=u.value.findIndex(x=>x.option_id===r);c===-1?(u.value.push(t.options[v]),l.value[v]=!0):(l.value[v]=!1,u.value.splice(c,1))},a=(r,v)=>l.value[v],l=f([]);t.options.forEach(r=>{l.value.push(!1)});const u=f([]),d=f(null),p=f(null);return Ee(()=>{document.addEventListener("click",function(r){var v;if(d.value){if(d.value.contains(r.target)||(v=p.value)!=null&&v.contains(r.target))return;n.value=!1}})}),(r,v)=>(E(),S("div",Bt,[i("div",{class:ee(["m-select-select-container",{"m-select-select-container-selected":n.value}]),ref_key:"mSelectRef",ref:d,onClick:o},[i("div",zt,[(E(!0),S(F,null,Z(u.value,c=>(E(),S("span",{class:"m-select-select-content-item",style:te({"background-color":c.option_color}),key:c.option_id},[i("span",Tt,N(c.option_value),1)],4))),128))]),i("div",At,[i("i",{class:ee(["m-select-select-icon-i",{"icon-reverse":n.value}])},Wt,2)])],2),y(Te,{name:"select-option"},{default:P(()=>[C(i("div",{class:"m-select-select-option",ref_key:"mOptionRef",ref:p},[i("ul",Ht,[(E(!0),S(F,null,Z(t.options,(c,x)=>(E(),S("li",{class:"m-select-select-option-li",key:c.option_id,onClick:_=>s(c.option_id,x)},[i("div",It,[i("div",Nt,[C(i("i",null,Pt,512),[[B,a(c.option_id,x)]])]),i("div",Ft,[c.option_color?(E(),S("span",{key:0,class:"m-select-select-option-text-color",style:te({background:c.option_color})},null,4)):Ae("",!0),i("span",Ot,N(c.option_value),1)]),i("div",qt,[C(i("i",null,jt,512),[[B,a(c.option_id,x)]])])]),i("div",Ut,N(c.option_desc),1)],8,Vt))),128))])],512),[[B,n.value]])]),_:1})]))}});const xe=A(Gt,[["__scopeId","data-v-971b2af4"]]),Ce=e=>(V("data-v-76b368cf"),e=e(),I(),e),Qt={class:"write-moment-mark-type"},Kt=Ce(()=>i("div",{class:"write-moment-mark-type-name"},"Labels:",-1)),Jt={class:"write-moment-mark-type-select"},Xt={class:"write-moment-mark-type"},Yt=Ce(()=>i("div",{class:"write-moment-mark-type-name"},"Milestone:",-1)),Zt={class:"write-moment-mark-type-select"},en=T({__name:"WriteMomentMark",props:{labels_options:{type:Array,default(){return[{option_id:0,option_value:"",option_desc:"",option_color:""}]}},milestone_options:{type:Array,default(){return[{option_id:0,option_value:"",option_desc:"",option_color:""}]}}},setup(e,{expose:t}){const n=f(null);return t({refMark:n}),(o,s)=>(E(),S("div",{class:"write-moment-mark",ref_key:"refMark",ref:n},[i("div",Qt,[Kt,i("div",Jt,[y(xe,{options:e.labels_options},null,8,["options"])])]),i("div",Xt,[Yt,i("div",Zt,[y(xe,{options:e.milestone_options},null,8,["options"])])])],512))}});const tn=A(en,[["__scopeId","data-v-76b368cf"]]),nn={class:"write-moment-action"},on=T({__name:"WriteMomentAction",emits:["saveDraftClick","publicClick"],setup(e,{emit:t}){const n=()=>{t("saveDraftClick")},o=()=>{t("publicClick")};return(s,a)=>(E(),S("div",nn,[i("div",{class:"write-moment-action-item"},[i("button",{class:"write-moment-action-item-btn1",onClick:n},"保存草稿")]),i("div",{class:"write-moment-action-item"},[i("button",{class:"write-moment-action-item-btn2",onClick:o},"发布")])]))}});const sn=A(on,[["__scopeId","data-v-73c45639"]]),H=$e();function an(){return Se({url:`https://api.github.com/repos/${H.useconfig.owner}/${H.useconfig.repo}/labels`,method:"get"})}function ln(){return Se({url:`https://api.github.com/repos/${H.useconfig.owner}/${H.useconfig.repo}/milestones`,method:"get"})}const cn=We("write",()=>{const e=f([]),t=f([]),n=ne({moment_create_id:"",moment_create_at_time:"",moment_update_at_time:"",moment_delete_at_time:"",moment_state:"",moment_isopen:!0,moment_ispublish:!0,moment_type:"",moment_content:"",select_labels:[],select_milestones:[]}),o=ne([]),s=f(!1);return{moment_labels:e,moment_milestones:t,moment_write_data:n,history_moment_write_data:o,isLoaded:s,public_moment:()=>{},save_moment:()=>{},create_moment_init:async()=>{try{const d=await an(),p=await ln(),r=[];d.data&&d.data.length>0&&(d.data.forEach(c=>{r.push({option_id:c.id,option_value:c.name,option_desc:c.description,option_color:"#"+c.color})}),e.value=r);const v=[];p.data&&p.data.length>0&&(p.data.forEach(c=>{v.push({option_id:c.id,option_value:c.title,option_desc:"截止日期："+Fe(c.due_on,2),option_color:""})}),t.value=v),s.value||(s.value=!0)}catch(d){console.log(d)}}}},{persist:{paths:["moment_labels","moment_milestones","history_moment_write_data","isLoaded"]}}),rn={class:"write-title"},dn={class:"write-content"},un=T({__name:"Write",setup(e){const t=cn(),{create_moment_init:n}=t,{moment_labels:o,moment_milestones:s,isLoaded:a}=He(t),l=f(0),u=f(0),d=f(!1),p=f(),r=f(),v=f(),c=f(0),x=f(0);Ee(async()=>{var w;await n(),p.value&&p.value.refMark&&(c.value=p.value.refMark.offsetHeight),x.value=(w=v.value)==null?void 0:w.$el.offsetHeight,l.value=document.documentElement.clientHeight,u.value=document.documentElement.clientHeight,window.addEventListener("resize",function(){l.value=document.body.clientHeight})}),Ve(l,()=>{const w=document.getElementsByClassName("add-image-link-wrapper")[0];l.value<u.value?(d.value=!0,r.value&&r.value.refMarkdown&&(r.value.refMarkdown.style.top="0px",r.value.refMarkdown.style.bottom="0px"),w&&(w.style.top="44px")):(d.value=!1,r.value&&r.value.refMarkdown&&(r.value.refMarkdown.style.top=c.value+"px",r.value.refMarkdown.style.bottom=x.value+10+"px"),w&&(w.style.top=c.value+"px"))});const _=Me(),m=()=>{_.push({name:"momentdraft"})},g=()=>{console.log("保存草稿")},h=()=>{console.log("发布动态")};return(w,J)=>{const k=Ie("Loading");return E(),S(F,null,[i("div",rn,[y(Ke,{onMomentDraftClick:m})]),i("div",dn,[C(y(tn,{class:"write-moment-mark",labels_options:R(o),milestone_options:R(s),ref_key:"refWriteMomentMark",ref:p},null,8,["labels_options","milestone_options"]),[[B,!d.value]]),y(Ct,{class:"write-moment-content",ref_key:"refWriteMomentContent",ref:r},null,512),C(y(sn,{class:"write-moment-action",ref_key:"refWriteMomentAction",ref:v,onSaveDraftClick:g,onPublicClick:h},null,512),[[B,!d.value]])]),y(k,{isShowLoading:!R(a),top:44,bottom:0,background:"var(--color-background-bar)"},null,8,["isShowLoading"])],64)}}});const hn=A(un,[["__scopeId","data-v-5af4660b"]]);export{hn as default};
