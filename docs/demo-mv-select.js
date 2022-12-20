/*! For license information please see demo-mv-select.js.LICENSE.txt */
(()=>{var e,t,o={564:()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=r.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(o,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1]),e[0]);return new n(r,e,o)},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e;var i;const f=window,l=f.trustedTypes,s=l?l.emptyScript:"",u=f.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?s:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:b};class h extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const r=this._$Ep(o,t);void 0!==r&&(this._$Ev.set(r,o),e.push(r))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,o,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const r=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,r)=>{t?o.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):r.forEach((t=>{const r=document.createElement("style"),n=e.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,o.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=p){var r;const n=this.constructor._$Ep(e,o);if(void 0!==n&&!0===o.reflect){const a=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:d).toAttribute(t,o.type);this._$El=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var o;const r=this.constructor,n=r._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=r.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:d;this._$El=n,this[n]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let r=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||b)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var m;h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:h}),(null!==(i=f.reactiveElementVersions)&&void 0!==i?i:f.reactiveElementVersions=[]).push("1.4.2");const g=window,v=g.trustedTypes,y=v?v.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,k="?"+w,x=`<${k}>`,q=document,E=(e="")=>q.createComment(e),A=e=>null===e||"object"!=typeof e&&"function"!=typeof e,S=Array.isArray,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,O=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),D=/'/g,L=/"/g,T=/^(?:script|style|textarea|title)$/i,z=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),j=z(1),R=(z(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),I=new WeakMap,N=q.createTreeWalker(q,129,null,!1),P=(e,t)=>{const o=e.length-1,r=[];let n,a=2===t?"<svg>":"",c=$;for(let t=0;t<o;t++){const o=e[t];let i,f,l=-1,s=0;for(;s<o.length&&(c.lastIndex=s,f=c.exec(o),null!==f);)s=c.lastIndex,c===$?"!--"===f[1]?c=C:void 0!==f[1]?c=O:void 0!==f[2]?(T.test(f[2])&&(n=RegExp("</"+f[2],"g")),c=_):void 0!==f[3]&&(c=_):c===_?">"===f[0]?(c=null!=n?n:$,l=-1):void 0===f[1]?l=-2:(l=c.lastIndex-f[2].length,i=f[1],c=void 0===f[3]?_:'"'===f[3]?L:D):c===L||c===D?c=_:c===C||c===O?c=$:(c=_,n=void 0);const u=c===_&&e[t+1].startsWith("/>")?" ":"";a+=c===$?o+x:l>=0?(r.push(i),o.slice(0,l)+"$lit$"+o.slice(l)+w+u):o+w+(-2===l?(r.push(void 0),t):u)}const i=a+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(i):i,r]};class H{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,a=0;const c=e.length-1,i=this.parts,[f,l]=P(e,t);if(this.el=H.createElement(f,o),N.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=N.nextNode())&&i.length<c;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const o=l[a++];if(e.push(t),void 0!==o){const e=r.getAttribute(o.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(o);i.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?Z:"@"===t[1]?J:V})}else i.push({type:6,index:n})}for(const t of e)r.removeAttribute(t)}if(T.test(r.tagName)){const e=r.textContent.split(w),t=e.length-1;if(t>0){r.textContent=v?v.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],E()),N.nextNode(),i.push({type:2,index:++n});r.append(e[t],E())}}}else if(8===r.nodeType)if(r.data===k)i.push({type:2,index:n});else{let e=-1;for(;-1!==(e=r.data.indexOf(w,e+1));)i.push({type:7,index:n}),e+=w.length-1}n++}}static createElement(e,t){const o=q.createElement("template");return o.innerHTML=e,o}}function F(e,t,o=e,r){var n,a,c,i;if(t===R)return t;let f=void 0!==r?null===(n=o._$Co)||void 0===n?void 0:n[r]:o._$Cl;const l=A(t)?void 0:t._$litDirective$;return(null==f?void 0:f.constructor)!==l&&(null===(a=null==f?void 0:f._$AO)||void 0===a||a.call(f,!1),void 0===l?f=void 0:(f=new l(e),f._$AT(e,o,r)),void 0!==r?(null!==(c=(i=o)._$Co)&&void 0!==c?c:i._$Co=[])[r]=f:o._$Cl=f),void 0!==f&&(t=F(e,f._$AS(e,t.values),f,r)),t}class M{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:o},parts:r}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:q).importNode(o,!0);N.currentNode=n;let a=N.nextNode(),c=0,i=0,f=r[0];for(;void 0!==f;){if(c===f.index){let t;2===f.type?t=new B(a,a.nextSibling,this,e):1===f.type?t=new f.ctor(a,f.name,f.strings,this,e):6===f.type&&(t=new W(a,this,e)),this.u.push(t),f=r[++i]}c!==(null==f?void 0:f.index)&&(a=N.nextNode(),c++)}return n}p(e){let t=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class B{constructor(e,t,o,r){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cm=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),A(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==R&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>S(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==U&&A(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){var t;const{values:o,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=H.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(o);else{const e=new M(n,this),t=e.v(this.options);e.p(o),this.T(t),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new H(e)),t}k(e){S(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const n of e)r===t.length?t.push(o=new B(this.O(E()),this.O(E()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,o,r,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,r){const n=this.strings;let a=!1;if(void 0===n)e=F(this,e,t,0),a=!A(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{const r=e;let c,i;for(e=n[0],c=0;c<n.length-1;c++)i=F(this,r[o+c],t,c),i===R&&(i=this._$AH[c]),a||(a=!A(i)||i!==this._$AH[c]),i===U?e=U:e!==U&&(e+=(null!=i?i:"")+n[c+1]),this._$AH[c]=i}a&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}const Y=v?v.emptyScript:"";class Z extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class J extends V{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=F(this,e,t,0))&&void 0!==o?o:U)===R)return;const r=this._$AH,n=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==U&&(r===U||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const K=g.litHtmlPolyfillSupport;var X,Q;null==K||K(H,B),(null!==(m=g.litHtmlVersions)&&void 0!==m?m:g.litHtmlVersions=[]).push("2.4.0");class ee extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var r,n;const a=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:t;let c=a._$litPart$;if(void 0===c){const e=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;a._$litPart$=c=new B(t.insertBefore(E(),e),e,void 0,null!=o?o:{})}return c._$AI(e),c})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return R}}ee.finalized=!0,ee._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2"),customElements.define("mv-button",class extends ee{static get properties(){return{visible:{type:Boolean,attribute:!0},selected:{type:Boolean,attribute:!0},disabled:{type:Boolean,attribute:!0},type:{type:String,attribute:!0},"button-style":{type:String,attribute:!0},fill:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return a`
      :host {
        --font-size: var(--mv-button-font-size, 1rem);
        --circle-button-size: var(--mv-button-circle-button-size, 55px);
        --button-margin: var(--mv-button-margin, 5px);
        --button-padding: var(--mv-button-padding, 10px 30px);
        --button-min-width: var(--mv-button-min-width, 120px);
        --button-max-width: var(--mv-button-max-width);
        --button-width: var(--mv-button-width);
        --rounded-radius: var(--mv-button-rounded-radius, 50px);
        --color: var(--mv-button-color, #ffffff);
        --button-color: var(--mv-button-custom-color);
        --button-hover-color: var(--mv-button-hover-custom-color)
        --hover-color: var(--mv-button-custom-hover-color);
      }
      button {
        font-family: var(--font-family, Arial);
        min-width: var(--button-min-width);
        max-width: var(--button-max-width);
        width: var(--button-width);
        font-size: var(--font-size);
        margin: var(--button-margin);
      }
      button.success:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button.error:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button.info:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button.cancel:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color:  #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button:focus {
        outline: none;
      }
      button:hover:not([disabled]) {
        cursor: pointer;
      }
      button.circle {
        min-width: var(--circle-button-size);
        max-width: var(--button-max-width);
        width: var(--button-width);
        height: var(--circle-button-size);
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: var(--mv-button-circle-color, #80828c);
        border-radius: 50%;
        box-shadow: unset;
        border: none;
      }
      button.circle:hover:not([disabled]) {
        cursor: pointer;
        color: var(--button-hover-color, #1d9bc9);
        border: var(--mv-button-border,1px solid var(--button-color, #1d9bc9));
        background-color: var(--mv-button-custom-hover-color, #ffffff);
        box-shadow: var(--mv-button-box-shadow,
          inset 0px 0px 9px 0px rgba(29, 155, 201, 0.3)
          );
      }
      button.circle.selected,
      button.circle.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #008fc3);
        box-shadow: 0px 0px 10px 0px rgba(0, 143, 195, 0.6);
        z-index: 100;
      }
      button.circle:disabled {
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: #cacbd2;
        z-index: 100;
      }
      button.default {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
      }
      button.default.success {
        color: var(--color);
        border-color: var(--button-color, #54ca95);
        background-color: var(--button-color, #54ca95);
      }
      button.default.success:hover:not([disabled]) {
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.default.error {
        color: #ffffff;
        border-color: var(--button-color, #dd5c55);
        background-color: var(--button-color, #dd5c55);
      }
      button.default.error:hover:not([disabled]) {
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.default.info {
        color: #ffffff;
        border-color: var(--button-color, #3999c1);
        background-color: var(--button-color, #3999c1);
      }
      button.default.info:hover:not([disabled]) {
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.default.cancel {
        color: #ffffff;
        border-color: var(--button-color, #bbbfce);
        background-color: var(--button-color, #bbbfce);
      }
      button.default.cancel:hover:not([disabled]) {
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.outline.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.outline.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.outline.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.outline.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.outline.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.outline.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.outline.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.outline.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline.success.selected,
      button.outline.success.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #0ca361);
      }
      button.outline.error.selected,
      button.outline.error.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #e71919);
      }
      button.outline.info.selected,
      button.outline.info.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #3999c1);
      }
      button.outline.cancel.selected,
      button.outline.cancel.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #9297a6);
      }
      button.rounded {
        border-width: 1px;
        border-style: solid;
        border-radius: var(--rounded-radius);
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.rounded.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.rounded.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.rounded.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.rounded.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.rounded.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.rounded.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.rounded.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.rounded.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
    `}constructor(){super(),this.visible=!0,this.selected=!1,this.disabled=!1,this.type="default",this["button-style"]="success",this.theme="light"}render(){const e="round"!==this.type?` ${this["button-style"]}`:"",t=this.selected?" selected":"",o=`${this.type}${e}${t}`;return this.visible?j`
          <button
            class="${o} ${this.theme}"
            @click="${this.handleClick}"
            ?disabled="${this.disabled}"
          >
            <slot> </slot>
          </button>
        `:j``}handleClick=()=>{this.dispatchEvent(new CustomEvent("button-clicked"))}}),customElements.define("mv-container",class extends ee{static get properties(){return{value:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return a`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --light-background: var(--mv-container-background, #ffffff);
        --dark-background: var(--mv-container-dark-background, #373e48);
        --light-color: var(--mv-container-light-color, #000000);
        --dark-color: var(--mv-container-dark-color, #ffffff);
      }

      section {
        min-width: var(--mv-container-min-width, 300px);
        max-width: var(--mv-container-max-width, 500px);
        min-height: var(--mv-container-min-height, auto);
        max-height: var(--mv-container-max-height, auto);
        margin: var(--mv-container-margin, 20px auto);
        padding: var(--mv-container-padding, 20px);
        border: var(--mv-container-border, 1px solid #bfbfbf);
        border-radius: var(--mv-container-border-radius, 5px);
        top: var(--mv-container-top, 0);
        position: var(--mv-container-position, relative);
        background-color: var(--background-color);
        box-shadow: var(
          --mv-container-shadow,
          0 0 13px 0 rgba(42, 42, 42, 0.65)
        );
        color: var(--color);
      }

      .light {
        background-color: var(--light-background);
        color: var(--light-color);
      }

      .dark {
        background-color: var(--dark-background);
        color: var(--dark-color);
      }
    `}constructor(){super(),this.theme="light"}render(){return j`
      <section class="${this.theme}">
        <slot></slot>
      </section>
    `}});const oe=["home","apartment","pencil","magic-wand","drop","lighter","poop","sun","moon","cloud","cloud-upload","cloud-download","cloud-sync","cloud-check","database","lock","cog","trash","dice","heart","star","star-half","star-empty","flag","envelope","paperclip","inbox","eye","printer","file-empty","file-add","enter","exit","graduation-hat","license","music-note","film-play","camera-video","camera","picture","book","bookmark","user","users","shirt","store","cart","tag","phone-handset","phone","pushpin","map-marker","map","location","calendar-full","keyboard","spell-check","screen","smartphone","tablet","laptop","laptop-phone","power-switch","bubble","heart-pulse","construction","pie-chart","chart-bars","gift","diamond","linearicons","dinner","coffee-cup","leaf","paw","rocket","briefcase","bus","car","train","bicycle","wheelchair","select","earth","smile","sad","neutral","mustache","alarm","bullhorn","volume-high","volume-medium","volume-low","volume","mic","hourglass","undo","redo","sync","history","clock","download","upload","enter-down","exit-up","bug","code","link","unlink","thumbs-up","thumbs-down","magnifier","cross","menu","list","chevron-up","chevron-down","chevron-left","chevron-right","arrow-up","arrow-down","arrow-left","arrow-right","move","warning","question-circle","menu-circle","checkmark-circle","cross-circle","plus-circle","circle-minus","arrow-up-circle","arrow-down-circle","arrow-left-circle","arrow-right-circle","chevron-up-circle","chevron-down-circle","chevron-left-circle","chevron-right-circle","crop","frame-expand","frame-contract","layers","funnel","text-format","text-format-remove","text-size","bold","italic","underline","strikethrough","highlight","text-align-left","text-align-center","text-align-right","text-align-justify","line-spacing","indent-increase","indent-decrease","pilcrow","direction-ltr","direction-rtl","page-break","sort-alpha-asc","sort-amount-asc","hand","pointer-up","pointer-right","pointer-down","pointer-left"];customElements.define("mv-lnr",class extends ee{static get properties(){return{icon:{type:String,attribute:!0},showIcon:{type:Boolean,attribute:!1,reflect:!0}}}static get styles(){return a`
    .lnr {
      font-family: 'Linearicons-Free';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
    
      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .lnr-home:before {
      content: "\\e800";
    }
    .lnr-apartment:before {
      content: "\\e801";
    }
    .lnr-pencil:before {
      content: "\\e802";
    }
    .lnr-magic-wand:before {
      content: "\\e803";
    }
    .lnr-drop:before {
      content: "\\e804";
    }
    .lnr-lighter:before {
      content: "\\e805";
    }
    .lnr-poop:before {
      content: "\\e806";
    }
    .lnr-sun:before {
      content: "\\e807";
    }
    .lnr-moon:before {
      content: "\\e808";
    }
    .lnr-cloud:before {
      content: "\\e809";
    }
    .lnr-cloud-upload:before {
      content: "\\e80a";
    }
    .lnr-cloud-download:before {
      content: "\\e80b";
    }
    .lnr-cloud-sync:before {
      content: "\\e80c";
    }
    .lnr-cloud-check:before {
      content: "\\e80d";
    }
    .lnr-database:before {
      content: "\\e80e";
    }
    .lnr-lock:before {
      content: "\\e80f";
    }
    .lnr-cog:before {
      content: "\\e810";
    }
    .lnr-trash:before {
      content: "\\e811";
    }
    .lnr-dice:before {
      content: "\\e812";
    }
    .lnr-heart:before {
      content: "\\e813";
    }
    .lnr-star:before {
      content: "\\e814";
    }
    .lnr-star-half:before {
      content: "\\e815";
    }
    .lnr-star-empty:before {
      content: "\\e816";
    }
    .lnr-flag:before {
      content: "\\e817";
    }
    .lnr-envelope:before {
      content: "\\e818";
    }
    .lnr-paperclip:before {
      content: "\\e819";
    }
    .lnr-inbox:before {
      content: "\\e81a";
    }
    .lnr-eye:before {
      content: "\\e81b";
    }
    .lnr-printer:before {
      content: "\\e81c";
    }
    .lnr-file-empty:before {
      content: "\\e81d";
    }
    .lnr-file-add:before {
      content: "\\e81e";
    }
    .lnr-enter:before {
      content: "\\e81f";
    }
    .lnr-exit:before {
      content: "\\e820";
    }
    .lnr-graduation-hat:before {
      content: "\\e821";
    }
    .lnr-license:before {
      content: "\\e822";
    }
    .lnr-music-note:before {
      content: "\\e823";
    }
    .lnr-film-play:before {
      content: "\\e824";
    }
    .lnr-camera-video:before {
      content: "\\e825";
    }
    .lnr-camera:before {
      content: "\\e826";
    }
    .lnr-picture:before {
      content: "\\e827";
    }
    .lnr-book:before {
      content: "\\e828";
    }
    .lnr-bookmark:before {
      content: "\\e829";
    }
    .lnr-user:before {
      content: "\\e82a";
    }
    .lnr-users:before {
      content: "\\e82b";
    }
    .lnr-shirt:before {
      content: "\\e82c";
    }
    .lnr-store:before {
      content: "\\e82d";
    }
    .lnr-cart:before {
      content: "\\e82e";
    }
    .lnr-tag:before {
      content: "\\e82f";
    }
    .lnr-phone-handset:before {
      content: "\\e830";
    }
    .lnr-phone:before {
      content: "\\e831";
    }
    .lnr-pushpin:before {
      content: "\\e832";
    }
    .lnr-map-marker:before {
      content: "\\e833";
    }
    .lnr-map:before {
      content: "\\e834";
    }
    .lnr-location:before {
      content: "\\e835";
    }
    .lnr-calendar-full:before {
      content: "\\e836";
    }
    .lnr-keyboard:before {
      content: "\\e837";
    }
    .lnr-spell-check:before {
      content: "\\e838";
    }
    .lnr-screen:before {
      content: "\\e839";
    }
    .lnr-smartphone:before {
      content: "\\e83a";
    }
    .lnr-tablet:before {
      content: "\\e83b";
    }
    .lnr-laptop:before {
      content: "\\e83c";
    }
    .lnr-laptop-phone:before {
      content: "\\e83d";
    }
    .lnr-power-switch:before {
      content: "\\e83e";
    }
    .lnr-bubble:before {
      content: "\\e83f";
    }
    .lnr-heart-pulse:before {
      content: "\\e840";
    }
    .lnr-construction:before {
      content: "\\e841";
    }
    .lnr-pie-chart:before {
      content: "\\e842";
    }
    .lnr-chart-bars:before {
      content: "\\e843";
    }
    .lnr-gift:before {
      content: "\\e844";
    }
    .lnr-diamond:before {
      content: "\\e845";
    }
    .lnr-linearicons:before {
      content: "\\e846";
    }
    .lnr-dinner:before {
      content: "\\e847";
    }
    .lnr-coffee-cup:before {
      content: "\\e848";
    }
    .lnr-leaf:before {
      content: "\\e849";
    }
    .lnr-paw:before {
      content: "\\e84a";
    }
    .lnr-rocket:before {
      content: "\\e84b";
    }
    .lnr-briefcase:before {
      content: "\\e84c";
    }
    .lnr-bus:before {
      content: "\\e84d";
    }
    .lnr-car:before {
      content: "\\e84e";
    }
    .lnr-train:before {
      content: "\\e84f";
    }
    .lnr-bicycle:before {
      content: "\\e850";
    }
    .lnr-wheelchair:before {
      content: "\\e851";
    }
    .lnr-select:before {
      content: "\\e852";
    }
    .lnr-earth:before {
      content: "\\e853";
    }
    .lnr-smile:before {
      content: "\\e854";
    }
    .lnr-sad:before {
      content: "\\e855";
    }
    .lnr-neutral:before {
      content: "\\e856";
    }
    .lnr-mustache:before {
      content: "\\e857";
    }
    .lnr-alarm:before {
      content: "\\e858";
    }
    .lnr-bullhorn:before {
      content: "\\e859";
    }
    .lnr-volume-high:before {
      content: "\\e85a";
    }
    .lnr-volume-medium:before {
      content: "\\e85b";
    }
    .lnr-volume-low:before {
      content: "\\e85c";
    }
    .lnr-volume:before {
      content: "\\e85d";
    }
    .lnr-mic:before {
      content: "\\e85e";
    }
    .lnr-hourglass:before {
      content: "\\e85f";
    }
    .lnr-undo:before {
      content: "\\e860";
    }
    .lnr-redo:before {
      content: "\\e861";
    }
    .lnr-sync:before {
      content: "\\e862";
    }
    .lnr-history:before {
      content: "\\e863";
    }
    .lnr-clock:before {
      content: "\\e864";
    }
    .lnr-download:before {
      content: "\\e865";
    }
    .lnr-upload:before {
      content: "\\e866";
    }
    .lnr-enter-down:before {
      content: "\\e867";
    }
    .lnr-exit-up:before {
      content: "\\e868";
    }
    .lnr-bug:before {
      content: "\\e869";
    }
    .lnr-code:before {
      content: "\\e86a";
    }
    .lnr-link:before {
      content: "\\e86b";
    }
    .lnr-unlink:before {
      content: "\\e86c";
    }
    .lnr-thumbs-up:before {
      content: "\\e86d";
    }
    .lnr-thumbs-down:before {
      content: "\\e86e";
    }
    .lnr-magnifier:before {
      content: "\\e86f";
    }
    .lnr-cross:before {
      content: "\\e870";
    }
    .lnr-menu:before {
      content: "\\e871";
    }
    .lnr-list:before {
      content: "\\e872";
    }
    .lnr-chevron-up:before {
      content: "\\e873";
    }
    .lnr-chevron-down:before {
      content: "\\e874";
    }
    .lnr-chevron-left:before {
      content: "\\e875";
    }
    .lnr-chevron-right:before {
      content: "\\e876";
    }
    .lnr-arrow-up:before {
      content: "\\e877";
    }
    .lnr-arrow-down:before {
      content: "\\e878";
    }
    .lnr-arrow-left:before {
      content: "\\e879";
    }
    .lnr-arrow-right:before {
      content: "\\e87a";
    }
    .lnr-move:before {
      content: "\\e87b";
    }
    .lnr-warning:before {
      content: "\\e87c";
    }
    .lnr-question-circle:before {
      content: "\\e87d";
    }
    .lnr-menu-circle:before {
      content: "\\e87e";
    }
    .lnr-checkmark-circle:before {
      content: "\\e87f";
    }
    .lnr-cross-circle:before {
      content: "\\e880";
    }
    .lnr-plus-circle:before {
      content: "\\e881";
    }
    .lnr-circle-minus:before {
      content: "\\e882";
    }
    .lnr-arrow-up-circle:before {
      content: "\\e883";
    }
    .lnr-arrow-down-circle:before {
      content: "\\e884";
    }
    .lnr-arrow-left-circle:before {
      content: "\\e885";
    }
    .lnr-arrow-right-circle:before {
      content: "\\e886";
    }
    .lnr-chevron-up-circle:before {
      content: "\\e887";
    }
    .lnr-chevron-down-circle:before {
      content: "\\e888";
    }
    .lnr-chevron-left-circle:before {
      content: "\\e889";
    }
    .lnr-chevron-right-circle:before {
      content: "\\e88a";
    }
    .lnr-crop:before {
      content: "\\e88b";
    }
    .lnr-frame-expand:before {
      content: "\\e88c";
    }
    .lnr-frame-contract:before {
      content: "\\e88d";
    }
    .lnr-layers:before {
      content: "\\e88e";
    }
    .lnr-funnel:before {
      content: "\\e88f";
    }
    .lnr-text-format:before {
      content: "\\e890";
    }
    .lnr-text-format-remove:before {
      content: "\\e891";
    }
    .lnr-text-size:before {
      content: "\\e892";
    }
    .lnr-bold:before {
      content: "\\e893";
    }
    .lnr-italic:before {
      content: "\\e894";
    }
    .lnr-underline:before {
      content: "\\e895";
    }
    .lnr-strikethrough:before {
      content: "\\e896";
    }
    .lnr-highlight:before {
      content: "\\e897";
    }
    .lnr-text-align-left:before {
      content: "\\e898";
    }
    .lnr-text-align-center:before {
      content: "\\e899";
    }
    .lnr-text-align-right:before {
      content: "\\e89a";
    }
    .lnr-text-align-justify:before {
      content: "\\e89b";
    }
    .lnr-line-spacing:before {
      content: "\\e89c";
    }
    .lnr-indent-increase:before {
      content: "\\e89d";
    }
    .lnr-indent-decrease:before {
      content: "\\e89e";
    }
    .lnr-pilcrow:before {
      content: "\\e89f";
    }
    .lnr-direction-ltr:before {
      content: "\\e8a0";
    }
    .lnr-direction-rtl:before {
      content: "\\e8a1";
    }
    .lnr-page-break:before {
      content: "\\e8a2";
    }
    .lnr-sort-alpha-asc:before {
      content: "\\e8a3";
    }
    .lnr-sort-amount-asc:before {
      content: "\\e8a4";
    }
    .lnr-hand:before {
      content: "\\e8a5";
    }
    .lnr-pointer-up:before {
      content: "\\e8a6";
    }
    .lnr-pointer-right:before {
      content: "\\e8a7";
    }
    .lnr-pointer-down:before {
      content: "\\e8a8";
    }
    .lnr-pointer-left:before {
      content: "\\e8a9";
    }    
    `}constructor(){super(),this.showIcon=!1}render(){return this.showIcon?j`
          <i class="lnr lnr-${this.icon}"></i>
        `:j``}connectedCallback(){this.showIcon=oe.includes(this.icon),super.connectedCallback()}});const re=["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","ankh","apple-alt","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","atlas","atom","audio-description","award","baby","baby-carriage","backspace","backward","bacon","balance-scale","balance-scale-left","balance-scale-right","ban","band-aid","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bezier-curve","bible","bicycle","biking","binoculars","biohazard","birthday-cake","blender","blender-phone","blind","blog","bold","bolt","bomb","bone","bong","book","book-dead","book-medical","book-open","book-reader","bookmark","border-all","border-none","border-style","bowling-ball","box","box-open","boxes","braille","brain","bread-slice","briefcase","briefcase-medical","broadcast-tower","broom","brush","bug","building","bullhorn","bullseye","burn","bus","bus-alt","business-time","calculator","calendar","calendar-alt","calendar-check","calendar-day","calendar-minus","calendar-plus","calendar-times","calendar-week","camera","camera-retro","campground","candy-cane","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","carrot","cart-arrow-down","cart-plus","cash-register","cat","certificate","chair","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","church","circle","circle-notch","city","clinic-medical","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-sun","cloud-sun-rain","cloud-upload-alt","cocktail","code","code-branch","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-medical","comment-slash","comments","comments-dollar","compact-disc","compass","compress","compress-arrows-alt","concierge-bell","cookie","cookie-bite","copy","copyright","couch","credit-card","crop","crop-alt","cross","crosshairs","crow","crown","crutch","cube","cubes","cut","database","deaf","democrat","desktop","dharmachakra","diagnoses","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digital-tachograph","directions","divide","dizzy","dna","dog","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","drafting-compass","dragon","draw-polygon","drum","drum-steelpan","drumstick-bite","dumbbell","dumpster","dumpster-fire","dungeon","edit","egg","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-open-text","envelope-square","equals","eraser","ethernet","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fan","fast-backward","fast-forward","fax","feather","feather-alt","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-contract","file-csv","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-alt","fire-extinguisher","first-aid","fish","fist-raised","flag","flag-checkered","flag-usa","flask","flushed","folder","folder-minus","folder-open","folder-plus","font","football-ball","forward","frog","frown","frown-open","funnel-dollar","futbol","gamepad","gas-pump","gavel","gem","genderless","ghost","gift","gifts","glass-cheers","glass-martini","glass-martini-alt","glass-whiskey","glasses","globe","globe-africa","globe-americas","globe-asia","globe-europe","golf-ball","gopuram","graduation-cap","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-lines","grip-lines-vertical","grip-vertical","guitar","h-square","hamburger","hammer","hamsa","hand-holding","hand-holding-heart","hand-holding-usd","hand-lizard","hand-middle-finger","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","hands","hands-helping","handshake","hanukiah","hard-hat","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","haykal","hdd","heading","headphones","headphones-alt","headset","heart","heart-broken","heartbeat","helicopter","highlighter","hiking","hippo","history","hockey-puck","holly-berry","home","horse","horse-head","hospital","hospital-alt","hospital-symbol","hot-tub","hotdog","hotel","hourglass","hourglass-end","hourglass-half","hourglass-start","house-damage","hryvnia","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-alt","igloo","image","images","inbox","indent","industry","infinity","info","info-circle","italic","jedi","joint","journal-whills","kaaba","key","keyboard","khanda","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","landmark","language","laptop","laptop-code","laptop-medical","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","lemon","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","magic","magnet","mail-bulk","male","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mask","medal","medkit","meh","meh-blank","meh-rolling-eyes","memory","menorah","mercury","meteor","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","minus","minus-circle","minus-square","mitten","mobile","mobile-alt","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mountain","mouse","mouse-pointer","mug-hot","music","network-wired","neuter","newspaper","not-equal","notes-medical","object-group","object-ungroup","oil-can","om","otter","outdent","pager","paint-brush","paint-roller","palette","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","pause","pause-circle","paw","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","people-carry","pepper-hot","percent","percentage","person-booth","phone","phone-alt","phone-slash","phone-square","phone-square-alt","phone-volume","photo-video","piggy-bank","pills","pizza-slice","place-of-worship","plane","plane-arrival","plane-departure","play","play-circle","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poo-storm","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","project-diagram","puzzle-piece","qrcode","question","question-circle","quidditch","quote-left","quote-right","quran","radiation","radiation-alt","rainbow","random","receipt","record-vinyl","recycle","redo","redo-alt","registered","remove-format","reply","reply-all","republican","restroom","retweet","ribbon","ring","road","robot","rocket","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","running","rupee-sign","sad-cry","sad-tear","satellite","satellite-dish","save","school","screwdriver","scroll","sd-card","search","search-dollar","search-location","search-minus","search-plus","seedling","server","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shipping-fast","shoe-prints","shopping-bag","shopping-basket","shopping-cart","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sim-card","sitemap","skating","skiing","skiing-nordic","skull","skull-crossbones","slash","sleigh","sliders-h","smile","smile-beam","smile-wink","smog","smoking","smoking-ban","sms","snowboarding","snowflake","snowman","snowplow","socks","solar-panel","sort","sort-alpha-down","sort-alpha-down-alt","sort-alpha-up","sort-alpha-up-alt","sort-amount-down","sort-amount-down-alt","sort-amount-up","sort-amount-up-alt","sort-down","sort-numeric-down","sort-numeric-down-alt","sort-numeric-up","sort-numeric-up-alt","sort-up","spa","space-shuttle","spell-check","spider","spinner","splotch","spray-can","square","square-full","square-root-alt","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","store","store-alt","stream","street-view","strikethrough","stroopwafel","subscript","subway","suitcase","suitcase-rolling","sun","superscript","surprise","swatchbook","swimmer","swimming-pool","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teeth","teeth-open","temperature-high","temperature-low","tenge","terminal","text-height","text-width","th","th-large","th-list","theater-masks","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toilet","toilet-paper","toolbox","tools","tooth","torah","torii-gate","tractor","trademark","traffic-light","train","tram","transgender","transgender-alt","trash","trash-alt","trash-restore","trash-restore-alt","tree","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tv","umbrella","umbrella-beach","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-injured","user-lock","user-md","user-minus","user-ninja","user-nurse","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","utensil-spoon","utensils","vector-square","venus","venus-double","venus-mars","vial","vials","video","video-slash","vihara","voicemail","volleyball-ball","volume-down","volume-mute","volume-off","volume-up","vote-yea","vr-cardboard","walking","wallet","warehouse","water","wave-square","weight","weight-hanging","wheelchair","wifi","wind","window-close","window-maximize","window-minimize","window-restore","wine-bottle","wine-glass","wine-glass-alt","won-sign","wrench","x-ray","yen-sign","yin-yang"],ne=["address-book","address-card","angry","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","bell","bell-slash","bookmark","building","calendar","calendar-alt","calendar-check","calendar-minus","calendar-plus","calendar-times","caret-square-down","caret-square-left","caret-square-right","caret-square-up","chart-bar","check-circle","check-square","circle","clipboard","clock","clone","closed-captioning","comment","comment-alt","comment-dots","comments","compass","copy","copyright","credit-card","dizzy","dot-circle","edit","envelope","envelope-open","eye","eye-slash","file","file-alt","file-archive","file-audio","file-code","file-excel","file-image","file-pdf","file-powerpoint","file-video","file-word","flag","flushed","folder","folder-open","frown","frown-open","futbol","gem","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","hand-lizard","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","handshake","hdd","heart","hospital","hourglass","id-badge","id-card","image","images","keyboard","kiss","kiss-beam","kiss-wink-heart","laugh","laugh-beam","laugh-squint","laugh-wink","lemon","life-ring","lightbulb","list-alt","map","meh","meh-blank","meh-rolling-eyes","minus-square","money-bill-alt","moon","newspaper","object-group","object-ungroup","paper-plane","pause-circle","play-circle","plus-square","question-circle","registered","sad-cry","sad-tear","save","share-square","smile","smile-beam","smile-wink","snowflake","square","star","star-half","sticky-note","stop-circle","sun","surprise","thumbs-down","thumbs-up","times-circle","tired","trash-alt","user","user-circle","window-close","window-maximize","window-minimize","window-restore"],ae=["500px","accessible-icon","accusoft","acquisitions-incorporated","adn","adobe","adversal","affiliatetheme","airbnb","algolia","alipay","amazon","amazon-pay","amilia","android","angellist","angrycreative","angular","app-store","app-store-ios","apper","apple","apple-pay","artstation","asymmetrik","atlassian","audible","autoprefixer","avianex","aviato","aws","bandcamp","battle-net","behance","behance-square","bimobject","bitbucket","bitcoin","bity","black-tie","blackberry","blogger","blogger-b","bluetooth","bluetooth-b","bootstrap","btc","buffer","buromobelexperte","buy-n-large","buysellads","canadian-maple-leaf","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","centos","chrome","chromecast","cloudscale","cloudsmith","cloudversify","codepen","codiepie","confluence","connectdevelop","contao","cotton-bureau","cpanel","creative-commons","creative-commons-by","creative-commons-nc","creative-commons-nc-eu","creative-commons-nc-jp","creative-commons-nd","creative-commons-pd","creative-commons-pd-alt","creative-commons-remix","creative-commons-sa","creative-commons-sampling","creative-commons-sampling-plus","creative-commons-share","creative-commons-zero","critical-role","css3","css3-alt","cuttlefish","d-and-d","d-and-d-beyond","dashcube","delicious","deploydog","deskpro","dev","deviantart","dhl","diaspora","digg","digital-ocean","discord","discourse","dochub","docker","draft2digital","dribbble","dribbble-square","dropbox","drupal","dyalog","earlybirds","ebay","edge","elementor","ello","ember","empire","envira","erlang","ethereum","etsy","evernote","expeditedssl","facebook","facebook-f","facebook-messenger","facebook-square","fantasy-flight-games","fedex","fedora","figma","firefox","first-order","first-order-alt","firstdraft","flickr","flipboard","fly","font-awesome","font-awesome-alt","font-awesome-flag","fonticons","fonticons-fi","fort-awesome","fort-awesome-alt","forumbee","foursquare","free-code-camp","freebsd","fulcrum","galactic-republic","galactic-senate","get-pocket","gg","gg-circle","git","git-alt","git-square","github","github-alt","github-square","gitkraken","gitlab","gitter","glide","glide-g","gofore","goodreads","goodreads-g","google","google-drive","google-play","google-plus","google-plus-g","google-plus-square","google-wallet","gratipay","grav","gripfire","grunt","gulp","hacker-news","hacker-news-square","hackerrank","hips","hire-a-helper","hooli","hornbill","hotjar","houzz","html5","hubspot","imdb","instagram","intercom","internet-explorer","invision","ioxhost","itch-io","itunes","itunes-note","java","jedi-order","jenkins","jira","joget","joomla","js","js-square","jsfiddle","kaggle","keybase","keycdn","kickstarter","kickstarter-k","korvue","laravel","lastfm","lastfm-square","leanpub","less","line","linkedin","linkedin-in","linode","linux","lyft","magento","mailchimp","mandalorian","markdown","mastodon","maxcdn","mdb","medapps","medium","medium-m","medrt","meetup","megaport","mendeley","microsoft","mix","mixcloud","mizuni","modx","monero","napster","neos","nimblr","node","node-js","npm","ns8","nutritionix","odnoklassniki","odnoklassniki-square","old-republic","opencart","openid","opera","optin-monster","orcid","osi","page4","pagelines","palfed","patreon","paypal","penny-arcade","periscope","phabricator","phoenix-framework","phoenix-squadron","php","pied-piper","pied-piper-alt","pied-piper-hat","pied-piper-pp","pinterest","pinterest-p","pinterest-square","playstation","product-hunt","pushed","python","qq","quinscape","quora","r-project","raspberry-pi","ravelry","react","reacteurope","readme","rebel","red-river","reddit","reddit-alien","reddit-square","redhat","renren","replyd","researchgate","resolving","rev","rocketchat","rockrms","safari","salesforce","sass","schlix","scribd","searchengin","sellcast","sellsy","servicestack","shirtsinbulk","shopware","simplybuilt","sistrix","sith","sketch","skyatlas","skype","slack","slack-hash","slideshare","snapchat","snapchat-ghost","snapchat-square","soundcloud","sourcetree","speakap","speaker-deck","spotify","squarespace","stack-exchange","stack-overflow","stackpath","staylinked","steam","steam-square","steam-symbol","sticker-mule","strava","stripe","stripe-s","studiovinari","stumbleupon","stumbleupon-circle","superpowers","supple","suse","swift","symfony","teamspeak","telegram","telegram-plane","tencent-weibo","the-red-yeti","themeco","themeisle","think-peaks","trade-federation","trello","tripadvisor","tumblr","tumblr-square","twitch","twitter","twitter-square","typo3","uber","ubuntu","uikit","umbraco","uniregistry","untappd","ups","usb","usps","ussunnah","vaadin","viacoin","viadeo","viadeo-square","viber","vimeo","vimeo-square","vimeo-v","vine","vk","vnv","vuejs","waze","weebly","weibo","weixin","whatsapp","whatsapp-square","whmcs","wikipedia-w","windows","wix","wizards-of-the-coast","wolf-pack-battalion","wordpress","wordpress-simple","wpbeginner","wpexplorer","wpforms","wpressr","xbox","xing","xing-square","y-combinator","yahoo","yammer","yandex","yandex-international","yarn","yelp","yoast","youtube","youtube-square","zhihu"];var ce;customElements.define("mv-fa",class extends ee{static get properties(){return{icon:{type:String},regular:{type:Boolean},prefix:{type:String,attribute:!1},showIcon:{type:Boolean,attribute:!1},iconProps:{type:String,attribute:"icon-props"}}}static get styles(){return a`
      /*!
    * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
    * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
    */
      .fa,
      .fas,
      .far,
      .fal,
      .fad,
      .fab {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
      }

      .fa-lg {
        font-size: 1.33333em;
        line-height: 0.75em;
        vertical-align: -0.0667em;
      }

      .fa-xs {
        font-size: 0.75em;
      }

      .fa-sm {
        font-size: 0.875em;
      }

      .fa-1x {
        font-size: 1em;
      }

      .fa-2x {
        font-size: 2em;
      }

      .fa-3x {
        font-size: 3em;
      }

      .fa-4x {
        font-size: 4em;
      }

      .fa-5x {
        font-size: 5em;
      }

      .fa-6x {
        font-size: 6em;
      }

      .fa-7x {
        font-size: 7em;
      }

      .fa-8x {
        font-size: 8em;
      }

      .fa-9x {
        font-size: 9em;
      }

      .fa-10x {
        font-size: 10em;
      }

      .fa-fw {
        text-align: center;
        width: 1.25em;
      }

      .fa-ul {
        list-style-type: none;
        margin-left: 2.5em;
        padding-left: 0;
      }
      .fa-ul > li {
        position: relative;
      }

      .fa-li {
        left: -2em;
        position: absolute;
        text-align: center;
        width: 2em;
        line-height: inherit;
      }

      .fa-border {
        border: solid 0.08em #eee;
        border-radius: 0.1em;
        padding: 0.2em 0.25em 0.15em;
      }

      .fa-pull-left {
        float: left;
      }

      .fa-pull-right {
        float: right;
      }

      .fa.fa-pull-left,
      .fas.fa-pull-left,
      .far.fa-pull-left,
      .fal.fa-pull-left,
      .fab.fa-pull-left {
        margin-right: 0.3em;
      }

      .fa.fa-pull-right,
      .fas.fa-pull-right,
      .far.fa-pull-right,
      .fal.fa-pull-right,
      .fab.fa-pull-right {
        margin-left: 0.3em;
      }

      .fa-spin {
        -webkit-animation: fa-spin 2s infinite linear;
        animation: fa-spin 2s infinite linear;
      }

      .fa-pulse {
        -webkit-animation: fa-spin 1s infinite steps(8);
        animation: fa-spin 1s infinite steps(8);
      }

      @-webkit-keyframes fa-spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes fa-spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      .fa-rotate-90 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      .fa-rotate-180 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .fa-rotate-270 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
      }

      .fa-flip-horizontal {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
        -webkit-transform: scale(-1, 1);
        transform: scale(-1, 1);
      }

      .fa-flip-vertical {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
        -webkit-transform: scale(1, -1);
        transform: scale(1, -1);
      }

      .fa-flip-both,
      .fa-flip-horizontal.fa-flip-vertical {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
        -webkit-transform: scale(-1, -1);
        transform: scale(-1, -1);
      }

      :root .fa-rotate-90,
      :root .fa-rotate-180,
      :root .fa-rotate-270,
      :root .fa-flip-horizontal,
      :root .fa-flip-vertical,
      :root .fa-flip-both {
        -webkit-filter: none;
        filter: none;
      }

      .fa-stack {
        display: inline-block;
        height: 2em;
        line-height: 2em;
        position: relative;
        vertical-align: middle;
        width: 2.5em;
      }

      .fa-stack-1x,
      .fa-stack-2x {
        left: 0;
        position: absolute;
        text-align: center;
        width: 100%;
      }

      .fa-stack-1x {
        line-height: inherit;
      }

      .fa-stack-2x {
        font-size: 2em;
      }

      .fa-inverse {
        color: #fff;
      }

      /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
    readers do not read off random characters that represent icons */
      .fa-500px:before {
        content: "\\f26e";
      }

      .fa-accessible-icon:before {
        content: "\\f368";
      }

      .fa-accusoft:before {
        content: "\\f369";
      }

      .fa-acquisitions-incorporated:before {
        content: "\\f6af";
      }

      .fa-ad:before {
        content: "\\f641";
      }

      .fa-address-book:before {
        content: "\\f2b9";
      }

      .fa-address-card:before {
        content: "\\f2bb";
      }

      .fa-adjust:before {
        content: "\\f042";
      }

      .fa-adn:before {
        content: "\\f170";
      }

      .fa-adobe:before {
        content: "\\f778";
      }

      .fa-adversal:before {
        content: "\\f36a";
      }

      .fa-affiliatetheme:before {
        content: "\\f36b";
      }

      .fa-air-freshener:before {
        content: "\\f5d0";
      }

      .fa-airbnb:before {
        content: "\\f834";
      }

      .fa-algolia:before {
        content: "\\f36c";
      }

      .fa-align-center:before {
        content: "\\f037";
      }

      .fa-align-justify:before {
        content: "\\f039";
      }

      .fa-align-left:before {
        content: "\\f036";
      }

      .fa-align-right:before {
        content: "\\f038";
      }

      .fa-alipay:before {
        content: "\\f642";
      }

      .fa-allergies:before {
        content: "\\f461";
      }

      .fa-amazon:before {
        content: "\\f270";
      }

      .fa-amazon-pay:before {
        content: "\\f42c";
      }

      .fa-ambulance:before {
        content: "\\f0f9";
      }

      .fa-american-sign-language-interpreting:before {
        content: "\\f2a3";
      }

      .fa-amilia:before {
        content: "\\f36d";
      }

      .fa-anchor:before {
        content: "\\f13d";
      }

      .fa-android:before {
        content: "\\f17b";
      }

      .fa-angellist:before {
        content: "\\f209";
      }

      .fa-angle-double-down:before {
        content: "\\f103";
      }

      .fa-angle-double-left:before {
        content: "\\f100";
      }

      .fa-angle-double-right:before {
        content: "\\f101";
      }

      .fa-angle-double-up:before {
        content: "\\f102";
      }

      .fa-angle-down:before {
        content: "\\f107";
      }

      .fa-angle-left:before {
        content: "\\f104";
      }

      .fa-angle-right:before {
        content: "\\f105";
      }

      .fa-angle-up:before {
        content: "\\f106";
      }

      .fa-angry:before {
        content: "\\f556";
      }

      .fa-angrycreative:before {
        content: "\\f36e";
      }

      .fa-angular:before {
        content: "\\f420";
      }

      .fa-ankh:before {
        content: "\\f644";
      }

      .fa-app-store:before {
        content: "\\f36f";
      }

      .fa-app-store-ios:before {
        content: "\\f370";
      }

      .fa-apper:before {
        content: "\\f371";
      }

      .fa-apple:before {
        content: "\\f179";
      }

      .fa-apple-alt:before {
        content: "\\f5d1";
      }

      .fa-apple-pay:before {
        content: "\\f415";
      }

      .fa-archive:before {
        content: "\\f187";
      }

      .fa-archway:before {
        content: "\\f557";
      }

      .fa-arrow-alt-circle-down:before {
        content: "\\f358";
      }

      .fa-arrow-alt-circle-left:before {
        content: "\\f359";
      }

      .fa-arrow-alt-circle-right:before {
        content: "\\f35a";
      }

      .fa-arrow-alt-circle-up:before {
        content: "\\f35b";
      }

      .fa-arrow-circle-down:before {
        content: "\\f0ab";
      }

      .fa-arrow-circle-left:before {
        content: "\\f0a8";
      }

      .fa-arrow-circle-right:before {
        content: "\\f0a9";
      }

      .fa-arrow-circle-up:before {
        content: "\\f0aa";
      }

      .fa-arrow-down:before {
        content: "\\f063";
      }

      .fa-arrow-left:before {
        content: "\\f060";
      }

      .fa-arrow-right:before {
        content: "\\f061";
      }

      .fa-arrow-up:before {
        content: "\\f062";
      }

      .fa-arrows-alt:before {
        content: "\\f0b2";
      }

      .fa-arrows-alt-h:before {
        content: "\\f337";
      }

      .fa-arrows-alt-v:before {
        content: "\\f338";
      }

      .fa-artstation:before {
        content: "\\f77a";
      }

      .fa-assistive-listening-systems:before {
        content: "\\f2a2";
      }

      .fa-asterisk:before {
        content: "\\f069";
      }

      .fa-asymmetrik:before {
        content: "\\f372";
      }

      .fa-at:before {
        content: "\\f1fa";
      }

      .fa-atlas:before {
        content: "\\f558";
      }

      .fa-atlassian:before {
        content: "\\f77b";
      }

      .fa-atom:before {
        content: "\\f5d2";
      }

      .fa-audible:before {
        content: "\\f373";
      }

      .fa-audio-description:before {
        content: "\\f29e";
      }

      .fa-autoprefixer:before {
        content: "\\f41c";
      }

      .fa-avianex:before {
        content: "\\f374";
      }

      .fa-aviato:before {
        content: "\\f421";
      }

      .fa-award:before {
        content: "\\f559";
      }

      .fa-aws:before {
        content: "\\f375";
      }

      .fa-baby:before {
        content: "\\f77c";
      }

      .fa-baby-carriage:before {
        content: "\\f77d";
      }

      .fa-backspace:before {
        content: "\\f55a";
      }

      .fa-backward:before {
        content: "\\f04a";
      }

      .fa-bacon:before {
        content: "\\f7e5";
      }

      .fa-balance-scale:before {
        content: "\\f24e";
      }

      .fa-balance-scale-left:before {
        content: "\\f515";
      }

      .fa-balance-scale-right:before {
        content: "\\f516";
      }

      .fa-ban:before {
        content: "\\f05e";
      }

      .fa-band-aid:before {
        content: "\\f462";
      }

      .fa-bandcamp:before {
        content: "\\f2d5";
      }

      .fa-barcode:before {
        content: "\\f02a";
      }

      .fa-bars:before {
        content: "\\f0c9";
      }

      .fa-baseball-ball:before {
        content: "\\f433";
      }

      .fa-basketball-ball:before {
        content: "\\f434";
      }

      .fa-bath:before {
        content: "\\f2cd";
      }

      .fa-battery-empty:before {
        content: "\\f244";
      }

      .fa-battery-full:before {
        content: "\\f240";
      }

      .fa-battery-half:before {
        content: "\\f242";
      }

      .fa-battery-quarter:before {
        content: "\\f243";
      }

      .fa-battery-three-quarters:before {
        content: "\\f241";
      }

      .fa-battle-net:before {
        content: "\\f835";
      }

      .fa-bed:before {
        content: "\\f236";
      }

      .fa-beer:before {
        content: "\\f0fc";
      }

      .fa-behance:before {
        content: "\\f1b4";
      }

      .fa-behance-square:before {
        content: "\\f1b5";
      }

      .fa-bell:before {
        content: "\\f0f3";
      }

      .fa-bell-slash:before {
        content: "\\f1f6";
      }

      .fa-bezier-curve:before {
        content: "\\f55b";
      }

      .fa-bible:before {
        content: "\\f647";
      }

      .fa-bicycle:before {
        content: "\\f206";
      }

      .fa-biking:before {
        content: "\\f84a";
      }

      .fa-bimobject:before {
        content: "\\f378";
      }

      .fa-binoculars:before {
        content: "\\f1e5";
      }

      .fa-biohazard:before {
        content: "\\f780";
      }

      .fa-birthday-cake:before {
        content: "\\f1fd";
      }

      .fa-bitbucket:before {
        content: "\\f171";
      }

      .fa-bitcoin:before {
        content: "\\f379";
      }

      .fa-bity:before {
        content: "\\f37a";
      }

      .fa-black-tie:before {
        content: "\\f27e";
      }

      .fa-blackberry:before {
        content: "\\f37b";
      }

      .fa-blender:before {
        content: "\\f517";
      }

      .fa-blender-phone:before {
        content: "\\f6b6";
      }

      .fa-blind:before {
        content: "\\f29d";
      }

      .fa-blog:before {
        content: "\\f781";
      }

      .fa-blogger:before {
        content: "\\f37c";
      }

      .fa-blogger-b:before {
        content: "\\f37d";
      }

      .fa-bluetooth:before {
        content: "\\f293";
      }

      .fa-bluetooth-b:before {
        content: "\\f294";
      }

      .fa-bold:before {
        content: "\\f032";
      }

      .fa-bolt:before {
        content: "\\f0e7";
      }

      .fa-bomb:before {
        content: "\\f1e2";
      }

      .fa-bone:before {
        content: "\\f5d7";
      }

      .fa-bong:before {
        content: "\\f55c";
      }

      .fa-book:before {
        content: "\\f02d";
      }

      .fa-book-dead:before {
        content: "\\f6b7";
      }

      .fa-book-medical:before {
        content: "\\f7e6";
      }

      .fa-book-open:before {
        content: "\\f518";
      }

      .fa-book-reader:before {
        content: "\\f5da";
      }

      .fa-bookmark:before {
        content: "\\f02e";
      }

      .fa-bootstrap:before {
        content: "\\f836";
      }

      .fa-border-all:before {
        content: "\\f84c";
      }

      .fa-border-none:before {
        content: "\\f850";
      }

      .fa-border-style:before {
        content: "\\f853";
      }

      .fa-bowling-ball:before {
        content: "\\f436";
      }

      .fa-box:before {
        content: "\\f466";
      }

      .fa-box-open:before {
        content: "\\f49e";
      }

      .fa-boxes:before {
        content: "\\f468";
      }

      .fa-braille:before {
        content: "\\f2a1";
      }

      .fa-brain:before {
        content: "\\f5dc";
      }

      .fa-bread-slice:before {
        content: "\\f7ec";
      }

      .fa-briefcase:before {
        content: "\\f0b1";
      }

      .fa-briefcase-medical:before {
        content: "\\f469";
      }

      .fa-broadcast-tower:before {
        content: "\\f519";
      }

      .fa-broom:before {
        content: "\\f51a";
      }

      .fa-brush:before {
        content: "\\f55d";
      }

      .fa-btc:before {
        content: "\\f15a";
      }

      .fa-buffer:before {
        content: "\\f837";
      }

      .fa-bug:before {
        content: "\\f188";
      }

      .fa-building:before {
        content: "\\f1ad";
      }

      .fa-bullhorn:before {
        content: "\\f0a1";
      }

      .fa-bullseye:before {
        content: "\\f140";
      }

      .fa-burn:before {
        content: "\\f46a";
      }

      .fa-buromobelexperte:before {
        content: "\\f37f";
      }

      .fa-bus:before {
        content: "\\f207";
      }

      .fa-bus-alt:before {
        content: "\\f55e";
      }

      .fa-business-time:before {
        content: "\\f64a";
      }

      .fa-buy-n-large:before {
        content: "\\f8a6";
      }

      .fa-buysellads:before {
        content: "\\f20d";
      }

      .fa-calculator:before {
        content: "\\f1ec";
      }

      .fa-calendar:before {
        content: "\\f133";
      }

      .fa-calendar-alt:before {
        content: "\\f073";
      }

      .fa-calendar-check:before {
        content: "\\f274";
      }

      .fa-calendar-day:before {
        content: "\\f783";
      }

      .fa-calendar-minus:before {
        content: "\\f272";
      }

      .fa-calendar-plus:before {
        content: "\\f271";
      }

      .fa-calendar-times:before {
        content: "\\f273";
      }

      .fa-calendar-week:before {
        content: "\\f784";
      }

      .fa-camera:before {
        content: "\\f030";
      }

      .fa-camera-retro:before {
        content: "\\f083";
      }

      .fa-campground:before {
        content: "\\f6bb";
      }

      .fa-canadian-maple-leaf:before {
        content: "\\f785";
      }

      .fa-candy-cane:before {
        content: "\\f786";
      }

      .fa-cannabis:before {
        content: "\\f55f";
      }

      .fa-capsules:before {
        content: "\\f46b";
      }

      .fa-car:before {
        content: "\\f1b9";
      }

      .fa-car-alt:before {
        content: "\\f5de";
      }

      .fa-car-battery:before {
        content: "\\f5df";
      }

      .fa-car-crash:before {
        content: "\\f5e1";
      }

      .fa-car-side:before {
        content: "\\f5e4";
      }

      .fa-caret-down:before {
        content: "\\f0d7";
      }

      .fa-caret-left:before {
        content: "\\f0d9";
      }

      .fa-caret-right:before {
        content: "\\f0da";
      }

      .fa-caret-square-down:before {
        content: "\\f150";
      }

      .fa-caret-square-left:before {
        content: "\\f191";
      }

      .fa-caret-square-right:before {
        content: "\\f152";
      }

      .fa-caret-square-up:before {
        content: "\\f151";
      }

      .fa-caret-up:before {
        content: "\\f0d8";
      }

      .fa-carrot:before {
        content: "\\f787";
      }

      .fa-cart-arrow-down:before {
        content: "\\f218";
      }

      .fa-cart-plus:before {
        content: "\\f217";
      }

      .fa-cash-register:before {
        content: "\\f788";
      }

      .fa-cat:before {
        content: "\\f6be";
      }

      .fa-cc-amazon-pay:before {
        content: "\\f42d";
      }

      .fa-cc-amex:before {
        content: "\\f1f3";
      }

      .fa-cc-apple-pay:before {
        content: "\\f416";
      }

      .fa-cc-diners-club:before {
        content: "\\f24c";
      }

      .fa-cc-discover:before {
        content: "\\f1f2";
      }

      .fa-cc-jcb:before {
        content: "\\f24b";
      }

      .fa-cc-mastercard:before {
        content: "\\f1f1";
      }

      .fa-cc-paypal:before {
        content: "\\f1f4";
      }

      .fa-cc-stripe:before {
        content: "\\f1f5";
      }

      .fa-cc-visa:before {
        content: "\\f1f0";
      }

      .fa-centercode:before {
        content: "\\f380";
      }

      .fa-centos:before {
        content: "\\f789";
      }

      .fa-certificate:before {
        content: "\\f0a3";
      }

      .fa-chair:before {
        content: "\\f6c0";
      }

      .fa-chalkboard:before {
        content: "\\f51b";
      }

      .fa-chalkboard-teacher:before {
        content: "\\f51c";
      }

      .fa-charging-station:before {
        content: "\\f5e7";
      }

      .fa-chart-area:before {
        content: "\\f1fe";
      }

      .fa-chart-bar:before {
        content: "\\f080";
      }

      .fa-chart-line:before {
        content: "\\f201";
      }

      .fa-chart-pie:before {
        content: "\\f200";
      }

      .fa-check:before {
        content: "\\f00c";
      }

      .fa-check-circle:before {
        content: "\\f058";
      }

      .fa-check-double:before {
        content: "\\f560";
      }

      .fa-check-square:before {
        content: "\\f14a";
      }

      .fa-cheese:before {
        content: "\\f7ef";
      }

      .fa-chess:before {
        content: "\\f439";
      }

      .fa-chess-bishop:before {
        content: "\\f43a";
      }

      .fa-chess-board:before {
        content: "\\f43c";
      }

      .fa-chess-king:before {
        content: "\\f43f";
      }

      .fa-chess-knight:before {
        content: "\\f441";
      }

      .fa-chess-pawn:before {
        content: "\\f443";
      }

      .fa-chess-queen:before {
        content: "\\f445";
      }

      .fa-chess-rook:before {
        content: "\\f447";
      }

      .fa-chevron-circle-down:before {
        content: "\\f13a";
      }

      .fa-chevron-circle-left:before {
        content: "\\f137";
      }

      .fa-chevron-circle-right:before {
        content: "\\f138";
      }

      .fa-chevron-circle-up:before {
        content: "\\f139";
      }

      .fa-chevron-down:before {
        content: "\\f078";
      }

      .fa-chevron-left:before {
        content: "\\f053";
      }

      .fa-chevron-right:before {
        content: "\\f054";
      }

      .fa-chevron-up:before {
        content: "\\f077";
      }

      .fa-child:before {
        content: "\\f1ae";
      }

      .fa-chrome:before {
        content: "\\f268";
      }

      .fa-chromecast:before {
        content: "\\f838";
      }

      .fa-church:before {
        content: "\\f51d";
      }

      .fa-circle:before {
        content: "\\f111";
      }

      .fa-circle-notch:before {
        content: "\\f1ce";
      }

      .fa-city:before {
        content: "\\f64f";
      }

      .fa-clinic-medical:before {
        content: "\\f7f2";
      }

      .fa-clipboard:before {
        content: "\\f328";
      }

      .fa-clipboard-check:before {
        content: "\\f46c";
      }

      .fa-clipboard-list:before {
        content: "\\f46d";
      }

      .fa-clock:before {
        content: "\\f017";
      }

      .fa-clone:before {
        content: "\\f24d";
      }

      .fa-closed-captioning:before {
        content: "\\f20a";
      }

      .fa-cloud:before {
        content: "\\f0c2";
      }

      .fa-cloud-download-alt:before {
        content: "\\f381";
      }

      .fa-cloud-meatball:before {
        content: "\\f73b";
      }

      .fa-cloud-moon:before {
        content: "\\f6c3";
      }

      .fa-cloud-moon-rain:before {
        content: "\\f73c";
      }

      .fa-cloud-rain:before {
        content: "\\f73d";
      }

      .fa-cloud-showers-heavy:before {
        content: "\\f740";
      }

      .fa-cloud-sun:before {
        content: "\\f6c4";
      }

      .fa-cloud-sun-rain:before {
        content: "\\f743";
      }

      .fa-cloud-upload-alt:before {
        content: "\\f382";
      }

      .fa-cloudscale:before {
        content: "\\f383";
      }

      .fa-cloudsmith:before {
        content: "\\f384";
      }

      .fa-cloudversify:before {
        content: "\\f385";
      }

      .fa-cocktail:before {
        content: "\\f561";
      }

      .fa-code:before {
        content: "\\f121";
      }

      .fa-code-branch:before {
        content: "\\f126";
      }

      .fa-codepen:before {
        content: "\\f1cb";
      }

      .fa-codiepie:before {
        content: "\\f284";
      }

      .fa-coffee:before {
        content: "\\f0f4";
      }

      .fa-cog:before {
        content: "\\f013";
      }

      .fa-cogs:before {
        content: "\\f085";
      }

      .fa-coins:before {
        content: "\\f51e";
      }

      .fa-columns:before {
        content: "\\f0db";
      }

      .fa-comment:before {
        content: "\\f075";
      }

      .fa-comment-alt:before {
        content: "\\f27a";
      }

      .fa-comment-dollar:before {
        content: "\\f651";
      }

      .fa-comment-dots:before {
        content: "\\f4ad";
      }

      .fa-comment-medical:before {
        content: "\\f7f5";
      }

      .fa-comment-slash:before {
        content: "\\f4b3";
      }

      .fa-comments:before {
        content: "\\f086";
      }

      .fa-comments-dollar:before {
        content: "\\f653";
      }

      .fa-compact-disc:before {
        content: "\\f51f";
      }

      .fa-compass:before {
        content: "\\f14e";
      }

      .fa-compress:before {
        content: "\\f066";
      }

      .fa-compress-arrows-alt:before {
        content: "\\f78c";
      }

      .fa-concierge-bell:before {
        content: "\\f562";
      }

      .fa-confluence:before {
        content: "\\f78d";
      }

      .fa-connectdevelop:before {
        content: "\\f20e";
      }

      .fa-contao:before {
        content: "\\f26d";
      }

      .fa-cookie:before {
        content: "\\f563";
      }

      .fa-cookie-bite:before {
        content: "\\f564";
      }

      .fa-copy:before {
        content: "\\f0c5";
      }

      .fa-copyright:before {
        content: "\\f1f9";
      }

      .fa-cotton-bureau:before {
        content: "\\f89e";
      }

      .fa-couch:before {
        content: "\\f4b8";
      }

      .fa-cpanel:before {
        content: "\\f388";
      }

      .fa-creative-commons:before {
        content: "\\f25e";
      }

      .fa-creative-commons-by:before {
        content: "\\f4e7";
      }

      .fa-creative-commons-nc:before {
        content: "\\f4e8";
      }

      .fa-creative-commons-nc-eu:before {
        content: "\\f4e9";
      }

      .fa-creative-commons-nc-jp:before {
        content: "\\f4ea";
      }

      .fa-creative-commons-nd:before {
        content: "\\f4eb";
      }

      .fa-creative-commons-pd:before {
        content: "\\f4ec";
      }

      .fa-creative-commons-pd-alt:before {
        content: "\\f4ed";
      }

      .fa-creative-commons-remix:before {
        content: "\\f4ee";
      }

      .fa-creative-commons-sa:before {
        content: "\\f4ef";
      }

      .fa-creative-commons-sampling:before {
        content: "\\f4f0";
      }

      .fa-creative-commons-sampling-plus:before {
        content: "\\f4f1";
      }

      .fa-creative-commons-share:before {
        content: "\\f4f2";
      }

      .fa-creative-commons-zero:before {
        content: "\\f4f3";
      }

      .fa-credit-card:before {
        content: "\\f09d";
      }

      .fa-critical-role:before {
        content: "\\f6c9";
      }

      .fa-crop:before {
        content: "\\f125";
      }

      .fa-crop-alt:before {
        content: "\\f565";
      }

      .fa-cross:before {
        content: "\\f654";
      }

      .fa-crosshairs:before {
        content: "\\f05b";
      }

      .fa-crow:before {
        content: "\\f520";
      }

      .fa-crown:before {
        content: "\\f521";
      }

      .fa-crutch:before {
        content: "\\f7f7";
      }

      .fa-css3:before {
        content: "\\f13c";
      }

      .fa-css3-alt:before {
        content: "\\f38b";
      }

      .fa-cube:before {
        content: "\\f1b2";
      }

      .fa-cubes:before {
        content: "\\f1b3";
      }

      .fa-cut:before {
        content: "\\f0c4";
      }

      .fa-cuttlefish:before {
        content: "\\f38c";
      }

      .fa-d-and-d:before {
        content: "\\f38d";
      }

      .fa-d-and-d-beyond:before {
        content: "\\f6ca";
      }

      .fa-dashcube:before {
        content: "\\f210";
      }

      .fa-database:before {
        content: "\\f1c0";
      }

      .fa-deaf:before {
        content: "\\f2a4";
      }

      .fa-delicious:before {
        content: "\\f1a5";
      }

      .fa-democrat:before {
        content: "\\f747";
      }

      .fa-deploydog:before {
        content: "\\f38e";
      }

      .fa-deskpro:before {
        content: "\\f38f";
      }

      .fa-desktop:before {
        content: "\\f108";
      }

      .fa-dev:before {
        content: "\\f6cc";
      }

      .fa-deviantart:before {
        content: "\\f1bd";
      }

      .fa-dharmachakra:before {
        content: "\\f655";
      }

      .fa-dhl:before {
        content: "\\f790";
      }

      .fa-diagnoses:before {
        content: "\\f470";
      }

      .fa-diaspora:before {
        content: "\\f791";
      }

      .fa-dice:before {
        content: "\\f522";
      }

      .fa-dice-d20:before {
        content: "\\f6cf";
      }

      .fa-dice-d6:before {
        content: "\\f6d1";
      }

      .fa-dice-five:before {
        content: "\\f523";
      }

      .fa-dice-four:before {
        content: "\\f524";
      }

      .fa-dice-one:before {
        content: "\\f525";
      }

      .fa-dice-six:before {
        content: "\\f526";
      }

      .fa-dice-three:before {
        content: "\\f527";
      }

      .fa-dice-two:before {
        content: "\\f528";
      }

      .fa-digg:before {
        content: "\\f1a6";
      }

      .fa-digital-ocean:before {
        content: "\\f391";
      }

      .fa-digital-tachograph:before {
        content: "\\f566";
      }

      .fa-directions:before {
        content: "\\f5eb";
      }

      .fa-discord:before {
        content: "\\f392";
      }

      .fa-discourse:before {
        content: "\\f393";
      }

      .fa-divide:before {
        content: "\\f529";
      }

      .fa-dizzy:before {
        content: "\\f567";
      }

      .fa-dna:before {
        content: "\\f471";
      }

      .fa-dochub:before {
        content: "\\f394";
      }

      .fa-docker:before {
        content: "\\f395";
      }

      .fa-dog:before {
        content: "\\f6d3";
      }

      .fa-dollar-sign:before {
        content: "\\f155";
      }

      .fa-dolly:before {
        content: "\\f472";
      }

      .fa-dolly-flatbed:before {
        content: "\\f474";
      }

      .fa-donate:before {
        content: "\\f4b9";
      }

      .fa-door-closed:before {
        content: "\\f52a";
      }

      .fa-door-open:before {
        content: "\\f52b";
      }

      .fa-dot-circle:before {
        content: "\\f192";
      }

      .fa-dove:before {
        content: "\\f4ba";
      }

      .fa-download:before {
        content: "\\f019";
      }

      .fa-draft2digital:before {
        content: "\\f396";
      }

      .fa-drafting-compass:before {
        content: "\\f568";
      }

      .fa-dragon:before {
        content: "\\f6d5";
      }

      .fa-draw-polygon:before {
        content: "\\f5ee";
      }

      .fa-dribbble:before {
        content: "\\f17d";
      }

      .fa-dribbble-square:before {
        content: "\\f397";
      }

      .fa-dropbox:before {
        content: "\\f16b";
      }

      .fa-drum:before {
        content: "\\f569";
      }

      .fa-drum-steelpan:before {
        content: "\\f56a";
      }

      .fa-drumstick-bite:before {
        content: "\\f6d7";
      }

      .fa-drupal:before {
        content: "\\f1a9";
      }

      .fa-dumbbell:before {
        content: "\\f44b";
      }

      .fa-dumpster:before {
        content: "\\f793";
      }

      .fa-dumpster-fire:before {
        content: "\\f794";
      }

      .fa-dungeon:before {
        content: "\\f6d9";
      }

      .fa-dyalog:before {
        content: "\\f399";
      }

      .fa-earlybirds:before {
        content: "\\f39a";
      }

      .fa-ebay:before {
        content: "\\f4f4";
      }

      .fa-edge:before {
        content: "\\f282";
      }

      .fa-edit:before {
        content: "\\f044";
      }

      .fa-egg:before {
        content: "\\f7fb";
      }

      .fa-eject:before {
        content: "\\f052";
      }

      .fa-elementor:before {
        content: "\\f430";
      }

      .fa-ellipsis-h:before {
        content: "\\f141";
      }

      .fa-ellipsis-v:before {
        content: "\\f142";
      }

      .fa-ello:before {
        content: "\\f5f1";
      }

      .fa-ember:before {
        content: "\\f423";
      }

      .fa-empire:before {
        content: "\\f1d1";
      }

      .fa-envelope:before {
        content: "\\f0e0";
      }

      .fa-envelope-open:before {
        content: "\\f2b6";
      }

      .fa-envelope-open-text:before {
        content: "\\f658";
      }

      .fa-envelope-square:before {
        content: "\\f199";
      }

      .fa-envira:before {
        content: "\\f299";
      }

      .fa-equals:before {
        content: "\\f52c";
      }

      .fa-eraser:before {
        content: "\\f12d";
      }

      .fa-erlang:before {
        content: "\\f39d";
      }

      .fa-ethereum:before {
        content: "\\f42e";
      }

      .fa-ethernet:before {
        content: "\\f796";
      }

      .fa-etsy:before {
        content: "\\f2d7";
      }

      .fa-euro-sign:before {
        content: "\\f153";
      }

      .fa-evernote:before {
        content: "\\f839";
      }

      .fa-exchange-alt:before {
        content: "\\f362";
      }

      .fa-exclamation:before {
        content: "\\f12a";
      }

      .fa-exclamation-circle:before {
        content: "\\f06a";
      }

      .fa-exclamation-triangle:before {
        content: "\\f071";
      }

      .fa-expand:before {
        content: "\\f065";
      }

      .fa-expand-arrows-alt:before {
        content: "\\f31e";
      }

      .fa-expeditedssl:before {
        content: "\\f23e";
      }

      .fa-external-link-alt:before {
        content: "\\f35d";
      }

      .fa-external-link-square-alt:before {
        content: "\\f360";
      }

      .fa-eye:before {
        content: "\\f06e";
      }

      .fa-eye-dropper:before {
        content: "\\f1fb";
      }

      .fa-eye-slash:before {
        content: "\\f070";
      }

      .fa-facebook:before {
        content: "\\f09a";
      }

      .fa-facebook-f:before {
        content: "\\f39e";
      }

      .fa-facebook-messenger:before {
        content: "\\f39f";
      }

      .fa-facebook-square:before {
        content: "\\f082";
      }

      .fa-fan:before {
        content: "\\f863";
      }

      .fa-fantasy-flight-games:before {
        content: "\\f6dc";
      }

      .fa-fast-backward:before {
        content: "\\f049";
      }

      .fa-fast-forward:before {
        content: "\\f050";
      }

      .fa-fax:before {
        content: "\\f1ac";
      }

      .fa-feather:before {
        content: "\\f52d";
      }

      .fa-feather-alt:before {
        content: "\\f56b";
      }

      .fa-fedex:before {
        content: "\\f797";
      }

      .fa-fedora:before {
        content: "\\f798";
      }

      .fa-female:before {
        content: "\\f182";
      }

      .fa-fighter-jet:before {
        content: "\\f0fb";
      }

      .fa-figma:before {
        content: "\\f799";
      }

      .fa-file:before {
        content: "\\f15b";
      }

      .fa-file-alt:before {
        content: "\\f15c";
      }

      .fa-file-archive:before {
        content: "\\f1c6";
      }

      .fa-file-audio:before {
        content: "\\f1c7";
      }

      .fa-file-code:before {
        content: "\\f1c9";
      }

      .fa-file-contract:before {
        content: "\\f56c";
      }

      .fa-file-csv:before {
        content: "\\f6dd";
      }

      .fa-file-download:before {
        content: "\\f56d";
      }

      .fa-file-excel:before {
        content: "\\f1c3";
      }

      .fa-file-export:before {
        content: "\\f56e";
      }

      .fa-file-image:before {
        content: "\\f1c5";
      }

      .fa-file-import:before {
        content: "\\f56f";
      }

      .fa-file-invoice:before {
        content: "\\f570";
      }

      .fa-file-invoice-dollar:before {
        content: "\\f571";
      }

      .fa-file-medical:before {
        content: "\\f477";
      }

      .fa-file-medical-alt:before {
        content: "\\f478";
      }

      .fa-file-pdf:before {
        content: "\\f1c1";
      }

      .fa-file-powerpoint:before {
        content: "\\f1c4";
      }

      .fa-file-prescription:before {
        content: "\\f572";
      }

      .fa-file-signature:before {
        content: "\\f573";
      }

      .fa-file-upload:before {
        content: "\\f574";
      }

      .fa-file-video:before {
        content: "\\f1c8";
      }

      .fa-file-word:before {
        content: "\\f1c2";
      }

      .fa-fill:before {
        content: "\\f575";
      }

      .fa-fill-drip:before {
        content: "\\f576";
      }

      .fa-film:before {
        content: "\\f008";
      }

      .fa-filter:before {
        content: "\\f0b0";
      }

      .fa-fingerprint:before {
        content: "\\f577";
      }

      .fa-fire:before {
        content: "\\f06d";
      }

      .fa-fire-alt:before {
        content: "\\f7e4";
      }

      .fa-fire-extinguisher:before {
        content: "\\f134";
      }

      .fa-firefox:before {
        content: "\\f269";
      }

      .fa-first-aid:before {
        content: "\\f479";
      }

      .fa-first-order:before {
        content: "\\f2b0";
      }

      .fa-first-order-alt:before {
        content: "\\f50a";
      }

      .fa-firstdraft:before {
        content: "\\f3a1";
      }

      .fa-fish:before {
        content: "\\f578";
      }

      .fa-fist-raised:before {
        content: "\\f6de";
      }

      .fa-flag:before {
        content: "\\f024";
      }

      .fa-flag-checkered:before {
        content: "\\f11e";
      }

      .fa-flag-usa:before {
        content: "\\f74d";
      }

      .fa-flask:before {
        content: "\\f0c3";
      }

      .fa-flickr:before {
        content: "\\f16e";
      }

      .fa-flipboard:before {
        content: "\\f44d";
      }

      .fa-flushed:before {
        content: "\\f579";
      }

      .fa-fly:before {
        content: "\\f417";
      }

      .fa-folder:before {
        content: "\\f07b";
      }

      .fa-folder-minus:before {
        content: "\\f65d";
      }

      .fa-folder-open:before {
        content: "\\f07c";
      }

      .fa-folder-plus:before {
        content: "\\f65e";
      }

      .fa-font:before {
        content: "\\f031";
      }

      .fa-font-awesome:before {
        content: "\\f2b4";
      }

      .fa-font-awesome-alt:before {
        content: "\\f35c";
      }

      .fa-font-awesome-flag:before {
        content: "\\f425";
      }

      .fa-font-awesome-logo-full:before {
        content: "\\f4e6";
      }

      .fa-fonticons:before {
        content: "\\f280";
      }

      .fa-fonticons-fi:before {
        content: "\\f3a2";
      }

      .fa-football-ball:before {
        content: "\\f44e";
      }

      .fa-fort-awesome:before {
        content: "\\f286";
      }

      .fa-fort-awesome-alt:before {
        content: "\\f3a3";
      }

      .fa-forumbee:before {
        content: "\\f211";
      }

      .fa-forward:before {
        content: "\\f04e";
      }

      .fa-foursquare:before {
        content: "\\f180";
      }

      .fa-free-code-camp:before {
        content: "\\f2c5";
      }

      .fa-freebsd:before {
        content: "\\f3a4";
      }

      .fa-frog:before {
        content: "\\f52e";
      }

      .fa-frown:before {
        content: "\\f119";
      }

      .fa-frown-open:before {
        content: "\\f57a";
      }

      .fa-fulcrum:before {
        content: "\\f50b";
      }

      .fa-funnel-dollar:before {
        content: "\\f662";
      }

      .fa-futbol:before {
        content: "\\f1e3";
      }

      .fa-galactic-republic:before {
        content: "\\f50c";
      }

      .fa-galactic-senate:before {
        content: "\\f50d";
      }

      .fa-gamepad:before {
        content: "\\f11b";
      }

      .fa-gas-pump:before {
        content: "\\f52f";
      }

      .fa-gavel:before {
        content: "\\f0e3";
      }

      .fa-gem:before {
        content: "\\f3a5";
      }

      .fa-genderless:before {
        content: "\\f22d";
      }

      .fa-get-pocket:before {
        content: "\\f265";
      }

      .fa-gg:before {
        content: "\\f260";
      }

      .fa-gg-circle:before {
        content: "\\f261";
      }

      .fa-ghost:before {
        content: "\\f6e2";
      }

      .fa-gift:before {
        content: "\\f06b";
      }

      .fa-gifts:before {
        content: "\\f79c";
      }

      .fa-git:before {
        content: "\\f1d3";
      }

      .fa-git-alt:before {
        content: "\\f841";
      }

      .fa-git-square:before {
        content: "\\f1d2";
      }

      .fa-github:before {
        content: "\\f09b";
      }

      .fa-github-alt:before {
        content: "\\f113";
      }

      .fa-github-square:before {
        content: "\\f092";
      }

      .fa-gitkraken:before {
        content: "\\f3a6";
      }

      .fa-gitlab:before {
        content: "\\f296";
      }

      .fa-gitter:before {
        content: "\\f426";
      }

      .fa-glass-cheers:before {
        content: "\\f79f";
      }

      .fa-glass-martini:before {
        content: "\\f000";
      }

      .fa-glass-martini-alt:before {
        content: "\\f57b";
      }

      .fa-glass-whiskey:before {
        content: "\\f7a0";
      }

      .fa-glasses:before {
        content: "\\f530";
      }

      .fa-glide:before {
        content: "\\f2a5";
      }

      .fa-glide-g:before {
        content: "\\f2a6";
      }

      .fa-globe:before {
        content: "\\f0ac";
      }

      .fa-globe-africa:before {
        content: "\\f57c";
      }

      .fa-globe-americas:before {
        content: "\\f57d";
      }

      .fa-globe-asia:before {
        content: "\\f57e";
      }

      .fa-globe-europe:before {
        content: "\\f7a2";
      }

      .fa-gofore:before {
        content: "\\f3a7";
      }

      .fa-golf-ball:before {
        content: "\\f450";
      }

      .fa-goodreads:before {
        content: "\\f3a8";
      }

      .fa-goodreads-g:before {
        content: "\\f3a9";
      }

      .fa-google:before {
        content: "\\f1a0";
      }

      .fa-google-drive:before {
        content: "\\f3aa";
      }

      .fa-google-play:before {
        content: "\\f3ab";
      }

      .fa-google-plus:before {
        content: "\\f2b3";
      }

      .fa-google-plus-g:before {
        content: "\\f0d5";
      }

      .fa-google-plus-square:before {
        content: "\\f0d4";
      }

      .fa-google-wallet:before {
        content: "\\f1ee";
      }

      .fa-gopuram:before {
        content: "\\f664";
      }

      .fa-graduation-cap:before {
        content: "\\f19d";
      }

      .fa-gratipay:before {
        content: "\\f184";
      }

      .fa-grav:before {
        content: "\\f2d6";
      }

      .fa-greater-than:before {
        content: "\\f531";
      }

      .fa-greater-than-equal:before {
        content: "\\f532";
      }

      .fa-grimace:before {
        content: "\\f57f";
      }

      .fa-grin:before {
        content: "\\f580";
      }

      .fa-grin-alt:before {
        content: "\\f581";
      }

      .fa-grin-beam:before {
        content: "\\f582";
      }

      .fa-grin-beam-sweat:before {
        content: "\\f583";
      }

      .fa-grin-hearts:before {
        content: "\\f584";
      }

      .fa-grin-squint:before {
        content: "\\f585";
      }

      .fa-grin-squint-tears:before {
        content: "\\f586";
      }

      .fa-grin-stars:before {
        content: "\\f587";
      }

      .fa-grin-tears:before {
        content: "\\f588";
      }

      .fa-grin-tongue:before {
        content: "\\f589";
      }

      .fa-grin-tongue-squint:before {
        content: "\\f58a";
      }

      .fa-grin-tongue-wink:before {
        content: "\\f58b";
      }

      .fa-grin-wink:before {
        content: "\\f58c";
      }

      .fa-grip-horizontal:before {
        content: "\\f58d";
      }

      .fa-grip-lines:before {
        content: "\\f7a4";
      }

      .fa-grip-lines-vertical:before {
        content: "\\f7a5";
      }

      .fa-grip-vertical:before {
        content: "\\f58e";
      }

      .fa-gripfire:before {
        content: "\\f3ac";
      }

      .fa-grunt:before {
        content: "\\f3ad";
      }

      .fa-guitar:before {
        content: "\\f7a6";
      }

      .fa-gulp:before {
        content: "\\f3ae";
      }

      .fa-h-square:before {
        content: "\\f0fd";
      }

      .fa-hacker-news:before {
        content: "\\f1d4";
      }

      .fa-hacker-news-square:before {
        content: "\\f3af";
      }

      .fa-hackerrank:before {
        content: "\\f5f7";
      }

      .fa-hamburger:before {
        content: "\\f805";
      }

      .fa-hammer:before {
        content: "\\f6e3";
      }

      .fa-hamsa:before {
        content: "\\f665";
      }

      .fa-hand-holding:before {
        content: "\\f4bd";
      }

      .fa-hand-holding-heart:before {
        content: "\\f4be";
      }

      .fa-hand-holding-usd:before {
        content: "\\f4c0";
      }

      .fa-hand-lizard:before {
        content: "\\f258";
      }

      .fa-hand-middle-finger:before {
        content: "\\f806";
      }

      .fa-hand-paper:before {
        content: "\\f256";
      }

      .fa-hand-peace:before {
        content: "\\f25b";
      }

      .fa-hand-point-down:before {
        content: "\\f0a7";
      }

      .fa-hand-point-left:before {
        content: "\\f0a5";
      }

      .fa-hand-point-right:before {
        content: "\\f0a4";
      }

      .fa-hand-point-up:before {
        content: "\\f0a6";
      }

      .fa-hand-pointer:before {
        content: "\\f25a";
      }

      .fa-hand-rock:before {
        content: "\\f255";
      }

      .fa-hand-scissors:before {
        content: "\\f257";
      }

      .fa-hand-spock:before {
        content: "\\f259";
      }

      .fa-hands:before {
        content: "\\f4c2";
      }

      .fa-hands-helping:before {
        content: "\\f4c4";
      }

      .fa-handshake:before {
        content: "\\f2b5";
      }

      .fa-hanukiah:before {
        content: "\\f6e6";
      }

      .fa-hard-hat:before {
        content: "\\f807";
      }

      .fa-hashtag:before {
        content: "\\f292";
      }

      .fa-hat-cowboy:before {
        content: "\\f8c0";
      }

      .fa-hat-cowboy-side:before {
        content: "\\f8c1";
      }

      .fa-hat-wizard:before {
        content: "\\f6e8";
      }

      .fa-haykal:before {
        content: "\\f666";
      }

      .fa-hdd:before {
        content: "\\f0a0";
      }

      .fa-heading:before {
        content: "\\f1dc";
      }

      .fa-headphones:before {
        content: "\\f025";
      }

      .fa-headphones-alt:before {
        content: "\\f58f";
      }

      .fa-headset:before {
        content: "\\f590";
      }

      .fa-heart:before {
        content: "\\f004";
      }

      .fa-heart-broken:before {
        content: "\\f7a9";
      }

      .fa-heartbeat:before {
        content: "\\f21e";
      }

      .fa-helicopter:before {
        content: "\\f533";
      }

      .fa-highlighter:before {
        content: "\\f591";
      }

      .fa-hiking:before {
        content: "\\f6ec";
      }

      .fa-hippo:before {
        content: "\\f6ed";
      }

      .fa-hips:before {
        content: "\\f452";
      }

      .fa-hire-a-helper:before {
        content: "\\f3b0";
      }

      .fa-history:before {
        content: "\\f1da";
      }

      .fa-hockey-puck:before {
        content: "\\f453";
      }

      .fa-holly-berry:before {
        content: "\\f7aa";
      }

      .fa-home:before {
        content: "\\f015";
      }

      .fa-hooli:before {
        content: "\\f427";
      }

      .fa-hornbill:before {
        content: "\\f592";
      }

      .fa-horse:before {
        content: "\\f6f0";
      }

      .fa-horse-head:before {
        content: "\\f7ab";
      }

      .fa-hospital:before {
        content: "\\f0f8";
      }

      .fa-hospital-alt:before {
        content: "\\f47d";
      }

      .fa-hospital-symbol:before {
        content: "\\f47e";
      }

      .fa-hot-tub:before {
        content: "\\f593";
      }

      .fa-hotdog:before {
        content: "\\f80f";
      }

      .fa-hotel:before {
        content: "\\f594";
      }

      .fa-hotjar:before {
        content: "\\f3b1";
      }

      .fa-hourglass:before {
        content: "\\f254";
      }

      .fa-hourglass-end:before {
        content: "\\f253";
      }

      .fa-hourglass-half:before {
        content: "\\f252";
      }

      .fa-hourglass-start:before {
        content: "\\f251";
      }

      .fa-house-damage:before {
        content: "\\f6f1";
      }

      .fa-houzz:before {
        content: "\\f27c";
      }

      .fa-hryvnia:before {
        content: "\\f6f2";
      }

      .fa-html5:before {
        content: "\\f13b";
      }

      .fa-hubspot:before {
        content: "\\f3b2";
      }

      .fa-i-cursor:before {
        content: "\\f246";
      }

      .fa-ice-cream:before {
        content: "\\f810";
      }

      .fa-icicles:before {
        content: "\\f7ad";
      }

      .fa-icons:before {
        content: "\\f86d";
      }

      .fa-id-badge:before {
        content: "\\f2c1";
      }

      .fa-id-card:before {
        content: "\\f2c2";
      }

      .fa-id-card-alt:before {
        content: "\\f47f";
      }

      .fa-igloo:before {
        content: "\\f7ae";
      }

      .fa-image:before {
        content: "\\f03e";
      }

      .fa-images:before {
        content: "\\f302";
      }

      .fa-imdb:before {
        content: "\\f2d8";
      }

      .fa-inbox:before {
        content: "\\f01c";
      }

      .fa-indent:before {
        content: "\\f03c";
      }

      .fa-industry:before {
        content: "\\f275";
      }

      .fa-infinity:before {
        content: "\\f534";
      }

      .fa-info:before {
        content: "\\f129";
      }

      .fa-info-circle:before {
        content: "\\f05a";
      }

      .fa-instagram:before {
        content: "\\f16d";
      }

      .fa-intercom:before {
        content: "\\f7af";
      }

      .fa-internet-explorer:before {
        content: "\\f26b";
      }

      .fa-invision:before {
        content: "\\f7b0";
      }

      .fa-ioxhost:before {
        content: "\\f208";
      }

      .fa-italic:before {
        content: "\\f033";
      }

      .fa-itch-io:before {
        content: "\\f83a";
      }

      .fa-itunes:before {
        content: "\\f3b4";
      }

      .fa-itunes-note:before {
        content: "\\f3b5";
      }

      .fa-java:before {
        content: "\\f4e4";
      }

      .fa-jedi:before {
        content: "\\f669";
      }

      .fa-jedi-order:before {
        content: "\\f50e";
      }

      .fa-jenkins:before {
        content: "\\f3b6";
      }

      .fa-jira:before {
        content: "\\f7b1";
      }

      .fa-joget:before {
        content: "\\f3b7";
      }

      .fa-joint:before {
        content: "\\f595";
      }

      .fa-joomla:before {
        content: "\\f1aa";
      }

      .fa-journal-whills:before {
        content: "\\f66a";
      }

      .fa-js:before {
        content: "\\f3b8";
      }

      .fa-js-square:before {
        content: "\\f3b9";
      }

      .fa-jsfiddle:before {
        content: "\\f1cc";
      }

      .fa-kaaba:before {
        content: "\\f66b";
      }

      .fa-kaggle:before {
        content: "\\f5fa";
      }

      .fa-key:before {
        content: "\\f084";
      }

      .fa-keybase:before {
        content: "\\f4f5";
      }

      .fa-keyboard:before {
        content: "\\f11c";
      }

      .fa-keycdn:before {
        content: "\\f3ba";
      }

      .fa-khanda:before {
        content: "\\f66d";
      }

      .fa-kickstarter:before {
        content: "\\f3bb";
      }

      .fa-kickstarter-k:before {
        content: "\\f3bc";
      }

      .fa-kiss:before {
        content: "\\f596";
      }

      .fa-kiss-beam:before {
        content: "\\f597";
      }

      .fa-kiss-wink-heart:before {
        content: "\\f598";
      }

      .fa-kiwi-bird:before {
        content: "\\f535";
      }

      .fa-korvue:before {
        content: "\\f42f";
      }

      .fa-landmark:before {
        content: "\\f66f";
      }

      .fa-language:before {
        content: "\\f1ab";
      }

      .fa-laptop:before {
        content: "\\f109";
      }

      .fa-laptop-code:before {
        content: "\\f5fc";
      }

      .fa-laptop-medical:before {
        content: "\\f812";
      }

      .fa-laravel:before {
        content: "\\f3bd";
      }

      .fa-lastfm:before {
        content: "\\f202";
      }

      .fa-lastfm-square:before {
        content: "\\f203";
      }

      .fa-laugh:before {
        content: "\\f599";
      }

      .fa-laugh-beam:before {
        content: "\\f59a";
      }

      .fa-laugh-squint:before {
        content: "\\f59b";
      }

      .fa-laugh-wink:before {
        content: "\\f59c";
      }

      .fa-layer-group:before {
        content: "\\f5fd";
      }

      .fa-leaf:before {
        content: "\\f06c";
      }

      .fa-leanpub:before {
        content: "\\f212";
      }

      .fa-lemon:before {
        content: "\\f094";
      }

      .fa-less:before {
        content: "\\f41d";
      }

      .fa-less-than:before {
        content: "\\f536";
      }

      .fa-less-than-equal:before {
        content: "\\f537";
      }

      .fa-level-down-alt:before {
        content: "\\f3be";
      }

      .fa-level-up-alt:before {
        content: "\\f3bf";
      }

      .fa-life-ring:before {
        content: "\\f1cd";
      }

      .fa-lightbulb:before {
        content: "\\f0eb";
      }

      .fa-line:before {
        content: "\\f3c0";
      }

      .fa-link:before {
        content: "\\f0c1";
      }

      .fa-linkedin:before {
        content: "\\f08c";
      }

      .fa-linkedin-in:before {
        content: "\\f0e1";
      }

      .fa-linode:before {
        content: "\\f2b8";
      }

      .fa-linux:before {
        content: "\\f17c";
      }

      .fa-lira-sign:before {
        content: "\\f195";
      }

      .fa-list:before {
        content: "\\f03a";
      }

      .fa-list-alt:before {
        content: "\\f022";
      }

      .fa-list-ol:before {
        content: "\\f0cb";
      }

      .fa-list-ul:before {
        content: "\\f0ca";
      }

      .fa-location-arrow:before {
        content: "\\f124";
      }

      .fa-lock:before {
        content: "\\f023";
      }

      .fa-lock-open:before {
        content: "\\f3c1";
      }

      .fa-long-arrow-alt-down:before {
        content: "\\f309";
      }

      .fa-long-arrow-alt-left:before {
        content: "\\f30a";
      }

      .fa-long-arrow-alt-right:before {
        content: "\\f30b";
      }

      .fa-long-arrow-alt-up:before {
        content: "\\f30c";
      }

      .fa-low-vision:before {
        content: "\\f2a8";
      }

      .fa-luggage-cart:before {
        content: "\\f59d";
      }

      .fa-lyft:before {
        content: "\\f3c3";
      }

      .fa-magento:before {
        content: "\\f3c4";
      }

      .fa-magic:before {
        content: "\\f0d0";
      }

      .fa-magnet:before {
        content: "\\f076";
      }

      .fa-mail-bulk:before {
        content: "\\f674";
      }

      .fa-mailchimp:before {
        content: "\\f59e";
      }

      .fa-male:before {
        content: "\\f183";
      }

      .fa-mandalorian:before {
        content: "\\f50f";
      }

      .fa-map:before {
        content: "\\f279";
      }

      .fa-map-marked:before {
        content: "\\f59f";
      }

      .fa-map-marked-alt:before {
        content: "\\f5a0";
      }

      .fa-map-marker:before {
        content: "\\f041";
      }

      .fa-map-marker-alt:before {
        content: "\\f3c5";
      }

      .fa-map-pin:before {
        content: "\\f276";
      }

      .fa-map-signs:before {
        content: "\\f277";
      }

      .fa-markdown:before {
        content: "\\f60f";
      }

      .fa-marker:before {
        content: "\\f5a1";
      }

      .fa-mars:before {
        content: "\\f222";
      }

      .fa-mars-double:before {
        content: "\\f227";
      }

      .fa-mars-stroke:before {
        content: "\\f229";
      }

      .fa-mars-stroke-h:before {
        content: "\\f22b";
      }

      .fa-mars-stroke-v:before {
        content: "\\f22a";
      }

      .fa-mask:before {
        content: "\\f6fa";
      }

      .fa-mastodon:before {
        content: "\\f4f6";
      }

      .fa-maxcdn:before {
        content: "\\f136";
      }

      .fa-mdb:before {
        content: "\\f8ca";
      }

      .fa-medal:before {
        content: "\\f5a2";
      }

      .fa-medapps:before {
        content: "\\f3c6";
      }

      .fa-medium:before {
        content: "\\f23a";
      }

      .fa-medium-m:before {
        content: "\\f3c7";
      }

      .fa-medkit:before {
        content: "\\f0fa";
      }

      .fa-medrt:before {
        content: "\\f3c8";
      }

      .fa-meetup:before {
        content: "\\f2e0";
      }

      .fa-megaport:before {
        content: "\\f5a3";
      }

      .fa-meh:before {
        content: "\\f11a";
      }

      .fa-meh-blank:before {
        content: "\\f5a4";
      }

      .fa-meh-rolling-eyes:before {
        content: "\\f5a5";
      }

      .fa-memory:before {
        content: "\\f538";
      }

      .fa-mendeley:before {
        content: "\\f7b3";
      }

      .fa-menorah:before {
        content: "\\f676";
      }

      .fa-mercury:before {
        content: "\\f223";
      }

      .fa-meteor:before {
        content: "\\f753";
      }

      .fa-microchip:before {
        content: "\\f2db";
      }

      .fa-microphone:before {
        content: "\\f130";
      }

      .fa-microphone-alt:before {
        content: "\\f3c9";
      }

      .fa-microphone-alt-slash:before {
        content: "\\f539";
      }

      .fa-microphone-slash:before {
        content: "\\f131";
      }

      .fa-microscope:before {
        content: "\\f610";
      }

      .fa-microsoft:before {
        content: "\\f3ca";
      }

      .fa-minus:before {
        content: "\\f068";
      }

      .fa-minus-circle:before {
        content: "\\f056";
      }

      .fa-minus-square:before {
        content: "\\f146";
      }

      .fa-mitten:before {
        content: "\\f7b5";
      }

      .fa-mix:before {
        content: "\\f3cb";
      }

      .fa-mixcloud:before {
        content: "\\f289";
      }

      .fa-mizuni:before {
        content: "\\f3cc";
      }

      .fa-mobile:before {
        content: "\\f10b";
      }

      .fa-mobile-alt:before {
        content: "\\f3cd";
      }

      .fa-modx:before {
        content: "\\f285";
      }

      .fa-monero:before {
        content: "\\f3d0";
      }

      .fa-money-bill:before {
        content: "\\f0d6";
      }

      .fa-money-bill-alt:before {
        content: "\\f3d1";
      }

      .fa-money-bill-wave:before {
        content: "\\f53a";
      }

      .fa-money-bill-wave-alt:before {
        content: "\\f53b";
      }

      .fa-money-check:before {
        content: "\\f53c";
      }

      .fa-money-check-alt:before {
        content: "\\f53d";
      }

      .fa-monument:before {
        content: "\\f5a6";
      }

      .fa-moon:before {
        content: "\\f186";
      }

      .fa-mortar-pestle:before {
        content: "\\f5a7";
      }

      .fa-mosque:before {
        content: "\\f678";
      }

      .fa-motorcycle:before {
        content: "\\f21c";
      }

      .fa-mountain:before {
        content: "\\f6fc";
      }

      .fa-mouse:before {
        content: "\\f8cc";
      }

      .fa-mouse-pointer:before {
        content: "\\f245";
      }

      .fa-mug-hot:before {
        content: "\\f7b6";
      }

      .fa-music:before {
        content: "\\f001";
      }

      .fa-napster:before {
        content: "\\f3d2";
      }

      .fa-neos:before {
        content: "\\f612";
      }

      .fa-network-wired:before {
        content: "\\f6ff";
      }

      .fa-neuter:before {
        content: "\\f22c";
      }

      .fa-newspaper:before {
        content: "\\f1ea";
      }

      .fa-nimblr:before {
        content: "\\f5a8";
      }

      .fa-node:before {
        content: "\\f419";
      }

      .fa-node-js:before {
        content: "\\f3d3";
      }

      .fa-not-equal:before {
        content: "\\f53e";
      }

      .fa-notes-medical:before {
        content: "\\f481";
      }

      .fa-npm:before {
        content: "\\f3d4";
      }

      .fa-ns8:before {
        content: "\\f3d5";
      }

      .fa-nutritionix:before {
        content: "\\f3d6";
      }

      .fa-object-group:before {
        content: "\\f247";
      }

      .fa-object-ungroup:before {
        content: "\\f248";
      }

      .fa-odnoklassniki:before {
        content: "\\f263";
      }

      .fa-odnoklassniki-square:before {
        content: "\\f264";
      }

      .fa-oil-can:before {
        content: "\\f613";
      }

      .fa-old-republic:before {
        content: "\\f510";
      }

      .fa-om:before {
        content: "\\f679";
      }

      .fa-opencart:before {
        content: "\\f23d";
      }

      .fa-openid:before {
        content: "\\f19b";
      }

      .fa-opera:before {
        content: "\\f26a";
      }

      .fa-optin-monster:before {
        content: "\\f23c";
      }

      .fa-orcid:before {
        content: "\\f8d2";
      }

      .fa-osi:before {
        content: "\\f41a";
      }

      .fa-otter:before {
        content: "\\f700";
      }

      .fa-outdent:before {
        content: "\\f03b";
      }

      .fa-page4:before {
        content: "\\f3d7";
      }

      .fa-pagelines:before {
        content: "\\f18c";
      }

      .fa-pager:before {
        content: "\\f815";
      }

      .fa-paint-brush:before {
        content: "\\f1fc";
      }

      .fa-paint-roller:before {
        content: "\\f5aa";
      }

      .fa-palette:before {
        content: "\\f53f";
      }

      .fa-palfed:before {
        content: "\\f3d8";
      }

      .fa-pallet:before {
        content: "\\f482";
      }

      .fa-paper-plane:before {
        content: "\\f1d8";
      }

      .fa-paperclip:before {
        content: "\\f0c6";
      }

      .fa-parachute-box:before {
        content: "\\f4cd";
      }

      .fa-paragraph:before {
        content: "\\f1dd";
      }

      .fa-parking:before {
        content: "\\f540";
      }

      .fa-passport:before {
        content: "\\f5ab";
      }

      .fa-pastafarianism:before {
        content: "\\f67b";
      }

      .fa-paste:before {
        content: "\\f0ea";
      }

      .fa-patreon:before {
        content: "\\f3d9";
      }

      .fa-pause:before {
        content: "\\f04c";
      }

      .fa-pause-circle:before {
        content: "\\f28b";
      }

      .fa-paw:before {
        content: "\\f1b0";
      }

      .fa-paypal:before {
        content: "\\f1ed";
      }

      .fa-peace:before {
        content: "\\f67c";
      }

      .fa-pen:before {
        content: "\\f304";
      }

      .fa-pen-alt:before {
        content: "\\f305";
      }

      .fa-pen-fancy:before {
        content: "\\f5ac";
      }

      .fa-pen-nib:before {
        content: "\\f5ad";
      }

      .fa-pen-square:before {
        content: "\\f14b";
      }

      .fa-pencil-alt:before {
        content: "\\f303";
      }

      .fa-pencil-ruler:before {
        content: "\\f5ae";
      }

      .fa-penny-arcade:before {
        content: "\\f704";
      }

      .fa-people-carry:before {
        content: "\\f4ce";
      }

      .fa-pepper-hot:before {
        content: "\\f816";
      }

      .fa-percent:before {
        content: "\\f295";
      }

      .fa-percentage:before {
        content: "\\f541";
      }

      .fa-periscope:before {
        content: "\\f3da";
      }

      .fa-person-booth:before {
        content: "\\f756";
      }

      .fa-phabricator:before {
        content: "\\f3db";
      }

      .fa-phoenix-framework:before {
        content: "\\f3dc";
      }

      .fa-phoenix-squadron:before {
        content: "\\f511";
      }

      .fa-phone:before {
        content: "\\f095";
      }

      .fa-phone-alt:before {
        content: "\\f879";
      }

      .fa-phone-slash:before {
        content: "\\f3dd";
      }

      .fa-phone-square:before {
        content: "\\f098";
      }

      .fa-phone-square-alt:before {
        content: "\\f87b";
      }

      .fa-phone-volume:before {
        content: "\\f2a0";
      }

      .fa-photo-video:before {
        content: "\\f87c";
      }

      .fa-php:before {
        content: "\\f457";
      }

      .fa-pied-piper:before {
        content: "\\f2ae";
      }

      .fa-pied-piper-alt:before {
        content: "\\f1a8";
      }

      .fa-pied-piper-hat:before {
        content: "\\f4e5";
      }

      .fa-pied-piper-pp:before {
        content: "\\f1a7";
      }

      .fa-piggy-bank:before {
        content: "\\f4d3";
      }

      .fa-pills:before {
        content: "\\f484";
      }

      .fa-pinterest:before {
        content: "\\f0d2";
      }

      .fa-pinterest-p:before {
        content: "\\f231";
      }

      .fa-pinterest-square:before {
        content: "\\f0d3";
      }

      .fa-pizza-slice:before {
        content: "\\f818";
      }

      .fa-place-of-worship:before {
        content: "\\f67f";
      }

      .fa-plane:before {
        content: "\\f072";
      }

      .fa-plane-arrival:before {
        content: "\\f5af";
      }

      .fa-plane-departure:before {
        content: "\\f5b0";
      }

      .fa-play:before {
        content: "\\f04b";
      }

      .fa-play-circle:before {
        content: "\\f144";
      }

      .fa-playstation:before {
        content: "\\f3df";
      }

      .fa-plug:before {
        content: "\\f1e6";
      }

      .fa-plus:before {
        content: "\\f067";
      }

      .fa-plus-circle:before {
        content: "\\f055";
      }

      .fa-plus-square:before {
        content: "\\f0fe";
      }

      .fa-podcast:before {
        content: "\\f2ce";
      }

      .fa-poll:before {
        content: "\\f681";
      }

      .fa-poll-h:before {
        content: "\\f682";
      }

      .fa-poo:before {
        content: "\\f2fe";
      }

      .fa-poo-storm:before {
        content: "\\f75a";
      }

      .fa-poop:before {
        content: "\\f619";
      }

      .fa-portrait:before {
        content: "\\f3e0";
      }

      .fa-pound-sign:before {
        content: "\\f154";
      }

      .fa-power-off:before {
        content: "\\f011";
      }

      .fa-pray:before {
        content: "\\f683";
      }

      .fa-praying-hands:before {
        content: "\\f684";
      }

      .fa-prescription:before {
        content: "\\f5b1";
      }

      .fa-prescription-bottle:before {
        content: "\\f485";
      }

      .fa-prescription-bottle-alt:before {
        content: "\\f486";
      }

      .fa-print:before {
        content: "\\f02f";
      }

      .fa-procedures:before {
        content: "\\f487";
      }

      .fa-product-hunt:before {
        content: "\\f288";
      }

      .fa-project-diagram:before {
        content: "\\f542";
      }

      .fa-pushed:before {
        content: "\\f3e1";
      }

      .fa-puzzle-piece:before {
        content: "\\f12e";
      }

      .fa-python:before {
        content: "\\f3e2";
      }

      .fa-qq:before {
        content: "\\f1d6";
      }

      .fa-qrcode:before {
        content: "\\f029";
      }

      .fa-question:before {
        content: "\\f128";
      }

      .fa-question-circle:before {
        content: "\\f059";
      }

      .fa-quidditch:before {
        content: "\\f458";
      }

      .fa-quinscape:before {
        content: "\\f459";
      }

      .fa-quora:before {
        content: "\\f2c4";
      }

      .fa-quote-left:before {
        content: "\\f10d";
      }

      .fa-quote-right:before {
        content: "\\f10e";
      }

      .fa-quran:before {
        content: "\\f687";
      }

      .fa-r-project:before {
        content: "\\f4f7";
      }

      .fa-radiation:before {
        content: "\\f7b9";
      }

      .fa-radiation-alt:before {
        content: "\\f7ba";
      }

      .fa-rainbow:before {
        content: "\\f75b";
      }

      .fa-random:before {
        content: "\\f074";
      }

      .fa-raspberry-pi:before {
        content: "\\f7bb";
      }

      .fa-ravelry:before {
        content: "\\f2d9";
      }

      .fa-react:before {
        content: "\\f41b";
      }

      .fa-reacteurope:before {
        content: "\\f75d";
      }

      .fa-readme:before {
        content: "\\f4d5";
      }

      .fa-rebel:before {
        content: "\\f1d0";
      }

      .fa-receipt:before {
        content: "\\f543";
      }

      .fa-record-vinyl:before {
        content: "\\f8d9";
      }

      .fa-recycle:before {
        content: "\\f1b8";
      }

      .fa-red-river:before {
        content: "\\f3e3";
      }

      .fa-reddit:before {
        content: "\\f1a1";
      }

      .fa-reddit-alien:before {
        content: "\\f281";
      }

      .fa-reddit-square:before {
        content: "\\f1a2";
      }

      .fa-redhat:before {
        content: "\\f7bc";
      }

      .fa-redo:before {
        content: "\\f01e";
      }

      .fa-redo-alt:before {
        content: "\\f2f9";
      }

      .fa-registered:before {
        content: "\\f25d";
      }

      .fa-remove-format:before {
        content: "\\f87d";
      }

      .fa-renren:before {
        content: "\\f18b";
      }

      .fa-reply:before {
        content: "\\f3e5";
      }

      .fa-reply-all:before {
        content: "\\f122";
      }

      .fa-replyd:before {
        content: "\\f3e6";
      }

      .fa-republican:before {
        content: "\\f75e";
      }

      .fa-researchgate:before {
        content: "\\f4f8";
      }

      .fa-resolving:before {
        content: "\\f3e7";
      }

      .fa-restroom:before {
        content: "\\f7bd";
      }

      .fa-retweet:before {
        content: "\\f079";
      }

      .fa-rev:before {
        content: "\\f5b2";
      }

      .fa-ribbon:before {
        content: "\\f4d6";
      }

      .fa-ring:before {
        content: "\\f70b";
      }

      .fa-road:before {
        content: "\\f018";
      }

      .fa-robot:before {
        content: "\\f544";
      }

      .fa-rocket:before {
        content: "\\f135";
      }

      .fa-rocketchat:before {
        content: "\\f3e8";
      }

      .fa-rockrms:before {
        content: "\\f3e9";
      }

      .fa-route:before {
        content: "\\f4d7";
      }

      .fa-rss:before {
        content: "\\f09e";
      }

      .fa-rss-square:before {
        content: "\\f143";
      }

      .fa-ruble-sign:before {
        content: "\\f158";
      }

      .fa-ruler:before {
        content: "\\f545";
      }

      .fa-ruler-combined:before {
        content: "\\f546";
      }

      .fa-ruler-horizontal:before {
        content: "\\f547";
      }

      .fa-ruler-vertical:before {
        content: "\\f548";
      }

      .fa-running:before {
        content: "\\f70c";
      }

      .fa-rupee-sign:before {
        content: "\\f156";
      }

      .fa-sad-cry:before {
        content: "\\f5b3";
      }

      .fa-sad-tear:before {
        content: "\\f5b4";
      }

      .fa-safari:before {
        content: "\\f267";
      }

      .fa-salesforce:before {
        content: "\\f83b";
      }

      .fa-sass:before {
        content: "\\f41e";
      }

      .fa-satellite:before {
        content: "\\f7bf";
      }

      .fa-satellite-dish:before {
        content: "\\f7c0";
      }

      .fa-save:before {
        content: "\\f0c7";
      }

      .fa-schlix:before {
        content: "\\f3ea";
      }

      .fa-school:before {
        content: "\\f549";
      }

      .fa-screwdriver:before {
        content: "\\f54a";
      }

      .fa-scribd:before {
        content: "\\f28a";
      }

      .fa-scroll:before {
        content: "\\f70e";
      }

      .fa-sd-card:before {
        content: "\\f7c2";
      }

      .fa-search:before {
        content: "\\f002";
      }

      .fa-search-dollar:before {
        content: "\\f688";
      }

      .fa-search-location:before {
        content: "\\f689";
      }

      .fa-search-minus:before {
        content: "\\f010";
      }

      .fa-search-plus:before {
        content: "\\f00e";
      }

      .fa-searchengin:before {
        content: "\\f3eb";
      }

      .fa-seedling:before {
        content: "\\f4d8";
      }

      .fa-sellcast:before {
        content: "\\f2da";
      }

      .fa-sellsy:before {
        content: "\\f213";
      }

      .fa-server:before {
        content: "\\f233";
      }

      .fa-servicestack:before {
        content: "\\f3ec";
      }

      .fa-shapes:before {
        content: "\\f61f";
      }

      .fa-share:before {
        content: "\\f064";
      }

      .fa-share-alt:before {
        content: "\\f1e0";
      }

      .fa-share-alt-square:before {
        content: "\\f1e1";
      }

      .fa-share-square:before {
        content: "\\f14d";
      }

      .fa-shekel-sign:before {
        content: "\\f20b";
      }

      .fa-shield-alt:before {
        content: "\\f3ed";
      }

      .fa-ship:before {
        content: "\\f21a";
      }

      .fa-shipping-fast:before {
        content: "\\f48b";
      }

      .fa-shirtsinbulk:before {
        content: "\\f214";
      }

      .fa-shoe-prints:before {
        content: "\\f54b";
      }

      .fa-shopping-bag:before {
        content: "\\f290";
      }

      .fa-shopping-basket:before {
        content: "\\f291";
      }

      .fa-shopping-cart:before {
        content: "\\f07a";
      }

      .fa-shopware:before {
        content: "\\f5b5";
      }

      .fa-shower:before {
        content: "\\f2cc";
      }

      .fa-shuttle-van:before {
        content: "\\f5b6";
      }

      .fa-sign:before {
        content: "\\f4d9";
      }

      .fa-sign-in-alt:before {
        content: "\\f2f6";
      }

      .fa-sign-language:before {
        content: "\\f2a7";
      }

      .fa-sign-out-alt:before {
        content: "\\f2f5";
      }

      .fa-signal:before {
        content: "\\f012";
      }

      .fa-signature:before {
        content: "\\f5b7";
      }

      .fa-sim-card:before {
        content: "\\f7c4";
      }

      .fa-simplybuilt:before {
        content: "\\f215";
      }

      .fa-sistrix:before {
        content: "\\f3ee";
      }

      .fa-sitemap:before {
        content: "\\f0e8";
      }

      .fa-sith:before {
        content: "\\f512";
      }

      .fa-skating:before {
        content: "\\f7c5";
      }

      .fa-sketch:before {
        content: "\\f7c6";
      }

      .fa-skiing:before {
        content: "\\f7c9";
      }

      .fa-skiing-nordic:before {
        content: "\\f7ca";
      }

      .fa-skull:before {
        content: "\\f54c";
      }

      .fa-skull-crossbones:before {
        content: "\\f714";
      }

      .fa-skyatlas:before {
        content: "\\f216";
      }

      .fa-skype:before {
        content: "\\f17e";
      }

      .fa-slack:before {
        content: "\\f198";
      }

      .fa-slack-hash:before {
        content: "\\f3ef";
      }

      .fa-slash:before {
        content: "\\f715";
      }

      .fa-sleigh:before {
        content: "\\f7cc";
      }

      .fa-sliders-h:before {
        content: "\\f1de";
      }

      .fa-slideshare:before {
        content: "\\f1e7";
      }

      .fa-smile:before {
        content: "\\f118";
      }

      .fa-smile-beam:before {
        content: "\\f5b8";
      }

      .fa-smile-wink:before {
        content: "\\f4da";
      }

      .fa-smog:before {
        content: "\\f75f";
      }

      .fa-smoking:before {
        content: "\\f48d";
      }

      .fa-smoking-ban:before {
        content: "\\f54d";
      }

      .fa-sms:before {
        content: "\\f7cd";
      }

      .fa-snapchat:before {
        content: "\\f2ab";
      }

      .fa-snapchat-ghost:before {
        content: "\\f2ac";
      }

      .fa-snapchat-square:before {
        content: "\\f2ad";
      }

      .fa-snowboarding:before {
        content: "\\f7ce";
      }

      .fa-snowflake:before {
        content: "\\f2dc";
      }

      .fa-snowman:before {
        content: "\\f7d0";
      }

      .fa-snowplow:before {
        content: "\\f7d2";
      }

      .fa-socks:before {
        content: "\\f696";
      }

      .fa-solar-panel:before {
        content: "\\f5ba";
      }

      .fa-sort:before {
        content: "\\f0dc";
      }

      .fa-sort-alpha-down:before {
        content: "\\f15d";
      }

      .fa-sort-alpha-down-alt:before {
        content: "\\f881";
      }

      .fa-sort-alpha-up:before {
        content: "\\f15e";
      }

      .fa-sort-alpha-up-alt:before {
        content: "\\f882";
      }

      .fa-sort-amount-down:before {
        content: "\\f160";
      }

      .fa-sort-amount-down-alt:before {
        content: "\\f884";
      }

      .fa-sort-amount-up:before {
        content: "\\f161";
      }

      .fa-sort-amount-up-alt:before {
        content: "\\f885";
      }

      .fa-sort-down:before {
        content: "\\f0dd";
      }

      .fa-sort-numeric-down:before {
        content: "\\f162";
      }

      .fa-sort-numeric-down-alt:before {
        content: "\\f886";
      }

      .fa-sort-numeric-up:before {
        content: "\\f163";
      }

      .fa-sort-numeric-up-alt:before {
        content: "\\f887";
      }

      .fa-sort-up:before {
        content: "\\f0de";
      }

      .fa-soundcloud:before {
        content: "\\f1be";
      }

      .fa-sourcetree:before {
        content: "\\f7d3";
      }

      .fa-spa:before {
        content: "\\f5bb";
      }

      .fa-space-shuttle:before {
        content: "\\f197";
      }

      .fa-speakap:before {
        content: "\\f3f3";
      }

      .fa-speaker-deck:before {
        content: "\\f83c";
      }

      .fa-spell-check:before {
        content: "\\f891";
      }

      .fa-spider:before {
        content: "\\f717";
      }

      .fa-spinner:before {
        content: "\\f110";
      }

      .fa-splotch:before {
        content: "\\f5bc";
      }

      .fa-spotify:before {
        content: "\\f1bc";
      }

      .fa-spray-can:before {
        content: "\\f5bd";
      }

      .fa-square:before {
        content: "\\f0c8";
      }

      .fa-square-full:before {
        content: "\\f45c";
      }

      .fa-square-root-alt:before {
        content: "\\f698";
      }

      .fa-squarespace:before {
        content: "\\f5be";
      }

      .fa-stack-exchange:before {
        content: "\\f18d";
      }

      .fa-stack-overflow:before {
        content: "\\f16c";
      }

      .fa-stackpath:before {
        content: "\\f842";
      }

      .fa-stamp:before {
        content: "\\f5bf";
      }

      .fa-star:before {
        content: "\\f005";
      }

      .fa-star-and-crescent:before {
        content: "\\f699";
      }

      .fa-star-half:before {
        content: "\\f089";
      }

      .fa-star-half-alt:before {
        content: "\\f5c0";
      }

      .fa-star-of-david:before {
        content: "\\f69a";
      }

      .fa-star-of-life:before {
        content: "\\f621";
      }

      .fa-staylinked:before {
        content: "\\f3f5";
      }

      .fa-steam:before {
        content: "\\f1b6";
      }

      .fa-steam-square:before {
        content: "\\f1b7";
      }

      .fa-steam-symbol:before {
        content: "\\f3f6";
      }

      .fa-step-backward:before {
        content: "\\f048";
      }

      .fa-step-forward:before {
        content: "\\f051";
      }

      .fa-stethoscope:before {
        content: "\\f0f1";
      }

      .fa-sticker-mule:before {
        content: "\\f3f7";
      }

      .fa-sticky-note:before {
        content: "\\f249";
      }

      .fa-stop:before {
        content: "\\f04d";
      }

      .fa-stop-circle:before {
        content: "\\f28d";
      }

      .fa-stopwatch:before {
        content: "\\f2f2";
      }

      .fa-store:before {
        content: "\\f54e";
      }

      .fa-store-alt:before {
        content: "\\f54f";
      }

      .fa-strava:before {
        content: "\\f428";
      }

      .fa-stream:before {
        content: "\\f550";
      }

      .fa-street-view:before {
        content: "\\f21d";
      }

      .fa-strikethrough:before {
        content: "\\f0cc";
      }

      .fa-stripe:before {
        content: "\\f429";
      }

      .fa-stripe-s:before {
        content: "\\f42a";
      }

      .fa-stroopwafel:before {
        content: "\\f551";
      }

      .fa-studiovinari:before {
        content: "\\f3f8";
      }

      .fa-stumbleupon:before {
        content: "\\f1a4";
      }

      .fa-stumbleupon-circle:before {
        content: "\\f1a3";
      }

      .fa-subscript:before {
        content: "\\f12c";
      }

      .fa-subway:before {
        content: "\\f239";
      }

      .fa-suitcase:before {
        content: "\\f0f2";
      }

      .fa-suitcase-rolling:before {
        content: "\\f5c1";
      }

      .fa-sun:before {
        content: "\\f185";
      }

      .fa-superpowers:before {
        content: "\\f2dd";
      }

      .fa-superscript:before {
        content: "\\f12b";
      }

      .fa-supple:before {
        content: "\\f3f9";
      }

      .fa-surprise:before {
        content: "\\f5c2";
      }

      .fa-suse:before {
        content: "\\f7d6";
      }

      .fa-swatchbook:before {
        content: "\\f5c3";
      }

      .fa-swift:before {
        content: "\\f8e1";
      }

      .fa-swimmer:before {
        content: "\\f5c4";
      }

      .fa-swimming-pool:before {
        content: "\\f5c5";
      }

      .fa-symfony:before {
        content: "\\f83d";
      }

      .fa-synagogue:before {
        content: "\\f69b";
      }

      .fa-sync:before {
        content: "\\f021";
      }

      .fa-sync-alt:before {
        content: "\\f2f1";
      }

      .fa-syringe:before {
        content: "\\f48e";
      }

      .fa-table:before {
        content: "\\f0ce";
      }

      .fa-table-tennis:before {
        content: "\\f45d";
      }

      .fa-tablet:before {
        content: "\\f10a";
      }

      .fa-tablet-alt:before {
        content: "\\f3fa";
      }

      .fa-tablets:before {
        content: "\\f490";
      }

      .fa-tachometer-alt:before {
        content: "\\f3fd";
      }

      .fa-tag:before {
        content: "\\f02b";
      }

      .fa-tags:before {
        content: "\\f02c";
      }

      .fa-tape:before {
        content: "\\f4db";
      }

      .fa-tasks:before {
        content: "\\f0ae";
      }

      .fa-taxi:before {
        content: "\\f1ba";
      }

      .fa-teamspeak:before {
        content: "\\f4f9";
      }

      .fa-teeth:before {
        content: "\\f62e";
      }

      .fa-teeth-open:before {
        content: "\\f62f";
      }

      .fa-telegram:before {
        content: "\\f2c6";
      }

      .fa-telegram-plane:before {
        content: "\\f3fe";
      }

      .fa-temperature-high:before {
        content: "\\f769";
      }

      .fa-temperature-low:before {
        content: "\\f76b";
      }

      .fa-tencent-weibo:before {
        content: "\\f1d5";
      }

      .fa-tenge:before {
        content: "\\f7d7";
      }

      .fa-terminal:before {
        content: "\\f120";
      }

      .fa-text-height:before {
        content: "\\f034";
      }

      .fa-text-width:before {
        content: "\\f035";
      }

      .fa-th:before {
        content: "\\f00a";
      }

      .fa-th-large:before {
        content: "\\f009";
      }

      .fa-th-list:before {
        content: "\\f00b";
      }

      .fa-the-red-yeti:before {
        content: "\\f69d";
      }

      .fa-theater-masks:before {
        content: "\\f630";
      }

      .fa-themeco:before {
        content: "\\f5c6";
      }

      .fa-themeisle:before {
        content: "\\f2b2";
      }

      .fa-thermometer:before {
        content: "\\f491";
      }

      .fa-thermometer-empty:before {
        content: "\\f2cb";
      }

      .fa-thermometer-full:before {
        content: "\\f2c7";
      }

      .fa-thermometer-half:before {
        content: "\\f2c9";
      }

      .fa-thermometer-quarter:before {
        content: "\\f2ca";
      }

      .fa-thermometer-three-quarters:before {
        content: "\\f2c8";
      }

      .fa-think-peaks:before {
        content: "\\f731";
      }

      .fa-thumbs-down:before {
        content: "\\f165";
      }

      .fa-thumbs-up:before {
        content: "\\f164";
      }

      .fa-thumbtack:before {
        content: "\\f08d";
      }

      .fa-ticket-alt:before {
        content: "\\f3ff";
      }

      .fa-times:before {
        content: "\\f00d";
      }

      .fa-times-circle:before {
        content: "\\f057";
      }

      .fa-tint:before {
        content: "\\f043";
      }

      .fa-tint-slash:before {
        content: "\\f5c7";
      }

      .fa-tired:before {
        content: "\\f5c8";
      }

      .fa-toggle-off:before {
        content: "\\f204";
      }

      .fa-toggle-on:before {
        content: "\\f205";
      }

      .fa-toilet:before {
        content: "\\f7d8";
      }

      .fa-toilet-paper:before {
        content: "\\f71e";
      }

      .fa-toolbox:before {
        content: "\\f552";
      }

      .fa-tools:before {
        content: "\\f7d9";
      }

      .fa-tooth:before {
        content: "\\f5c9";
      }

      .fa-torah:before {
        content: "\\f6a0";
      }

      .fa-torii-gate:before {
        content: "\\f6a1";
      }

      .fa-tractor:before {
        content: "\\f722";
      }

      .fa-trade-federation:before {
        content: "\\f513";
      }

      .fa-trademark:before {
        content: "\\f25c";
      }

      .fa-traffic-light:before {
        content: "\\f637";
      }

      .fa-train:before {
        content: "\\f238";
      }

      .fa-tram:before {
        content: "\\f7da";
      }

      .fa-transgender:before {
        content: "\\f224";
      }

      .fa-transgender-alt:before {
        content: "\\f225";
      }

      .fa-trash:before {
        content: "\\f1f8";
      }

      .fa-trash-alt:before {
        content: "\\f2ed";
      }

      .fa-trash-restore:before {
        content: "\\f829";
      }

      .fa-trash-restore-alt:before {
        content: "\\f82a";
      }

      .fa-tree:before {
        content: "\\f1bb";
      }

      .fa-trello:before {
        content: "\\f181";
      }

      .fa-tripadvisor:before {
        content: "\\f262";
      }

      .fa-trophy:before {
        content: "\\f091";
      }

      .fa-truck:before {
        content: "\\f0d1";
      }

      .fa-truck-loading:before {
        content: "\\f4de";
      }

      .fa-truck-monster:before {
        content: "\\f63b";
      }

      .fa-truck-moving:before {
        content: "\\f4df";
      }

      .fa-truck-pickup:before {
        content: "\\f63c";
      }

      .fa-tshirt:before {
        content: "\\f553";
      }

      .fa-tty:before {
        content: "\\f1e4";
      }

      .fa-tumblr:before {
        content: "\\f173";
      }

      .fa-tumblr-square:before {
        content: "\\f174";
      }

      .fa-tv:before {
        content: "\\f26c";
      }

      .fa-twitch:before {
        content: "\\f1e8";
      }

      .fa-twitter:before {
        content: "\\f099";
      }

      .fa-twitter-square:before {
        content: "\\f081";
      }

      .fa-typo3:before {
        content: "\\f42b";
      }

      .fa-uber:before {
        content: "\\f402";
      }

      .fa-ubuntu:before {
        content: "\\f7df";
      }

      .fa-uikit:before {
        content: "\\f403";
      }

      .fa-umbraco:before {
        content: "\\f8e8";
      }

      .fa-umbrella:before {
        content: "\\f0e9";
      }

      .fa-umbrella-beach:before {
        content: "\\f5ca";
      }

      .fa-underline:before {
        content: "\\f0cd";
      }

      .fa-undo:before {
        content: "\\f0e2";
      }

      .fa-undo-alt:before {
        content: "\\f2ea";
      }

      .fa-uniregistry:before {
        content: "\\f404";
      }

      .fa-universal-access:before {
        content: "\\f29a";
      }

      .fa-university:before {
        content: "\\f19c";
      }

      .fa-unlink:before {
        content: "\\f127";
      }

      .fa-unlock:before {
        content: "\\f09c";
      }

      .fa-unlock-alt:before {
        content: "\\f13e";
      }

      .fa-untappd:before {
        content: "\\f405";
      }

      .fa-upload:before {
        content: "\\f093";
      }

      .fa-ups:before {
        content: "\\f7e0";
      }

      .fa-usb:before {
        content: "\\f287";
      }

      .fa-user:before {
        content: "\\f007";
      }

      .fa-user-alt:before {
        content: "\\f406";
      }

      .fa-user-alt-slash:before {
        content: "\\f4fa";
      }

      .fa-user-astronaut:before {
        content: "\\f4fb";
      }

      .fa-user-check:before {
        content: "\\f4fc";
      }

      .fa-user-circle:before {
        content: "\\f2bd";
      }

      .fa-user-clock:before {
        content: "\\f4fd";
      }

      .fa-user-cog:before {
        content: "\\f4fe";
      }

      .fa-user-edit:before {
        content: "\\f4ff";
      }

      .fa-user-friends:before {
        content: "\\f500";
      }

      .fa-user-graduate:before {
        content: "\\f501";
      }

      .fa-user-injured:before {
        content: "\\f728";
      }

      .fa-user-lock:before {
        content: "\\f502";
      }

      .fa-user-md:before {
        content: "\\f0f0";
      }

      .fa-user-minus:before {
        content: "\\f503";
      }

      .fa-user-ninja:before {
        content: "\\f504";
      }

      .fa-user-nurse:before {
        content: "\\f82f";
      }

      .fa-user-plus:before {
        content: "\\f234";
      }

      .fa-user-secret:before {
        content: "\\f21b";
      }

      .fa-user-shield:before {
        content: "\\f505";
      }

      .fa-user-slash:before {
        content: "\\f506";
      }

      .fa-user-tag:before {
        content: "\\f507";
      }

      .fa-user-tie:before {
        content: "\\f508";
      }

      .fa-user-times:before {
        content: "\\f235";
      }

      .fa-users:before {
        content: "\\f0c0";
      }

      .fa-users-cog:before {
        content: "\\f509";
      }

      .fa-usps:before {
        content: "\\f7e1";
      }

      .fa-ussunnah:before {
        content: "\\f407";
      }

      .fa-utensil-spoon:before {
        content: "\\f2e5";
      }

      .fa-utensils:before {
        content: "\\f2e7";
      }

      .fa-vaadin:before {
        content: "\\f408";
      }

      .fa-vector-square:before {
        content: "\\f5cb";
      }

      .fa-venus:before {
        content: "\\f221";
      }

      .fa-venus-double:before {
        content: "\\f226";
      }

      .fa-venus-mars:before {
        content: "\\f228";
      }

      .fa-viacoin:before {
        content: "\\f237";
      }

      .fa-viadeo:before {
        content: "\\f2a9";
      }

      .fa-viadeo-square:before {
        content: "\\f2aa";
      }

      .fa-vial:before {
        content: "\\f492";
      }

      .fa-vials:before {
        content: "\\f493";
      }

      .fa-viber:before {
        content: "\\f409";
      }

      .fa-video:before {
        content: "\\f03d";
      }

      .fa-video-slash:before {
        content: "\\f4e2";
      }

      .fa-vihara:before {
        content: "\\f6a7";
      }

      .fa-vimeo:before {
        content: "\\f40a";
      }

      .fa-vimeo-square:before {
        content: "\\f194";
      }

      .fa-vimeo-v:before {
        content: "\\f27d";
      }

      .fa-vine:before {
        content: "\\f1ca";
      }

      .fa-vk:before {
        content: "\\f189";
      }

      .fa-vnv:before {
        content: "\\f40b";
      }

      .fa-voicemail:before {
        content: "\\f897";
      }

      .fa-volleyball-ball:before {
        content: "\\f45f";
      }

      .fa-volume-down:before {
        content: "\\f027";
      }

      .fa-volume-mute:before {
        content: "\\f6a9";
      }

      .fa-volume-off:before {
        content: "\\f026";
      }

      .fa-volume-up:before {
        content: "\\f028";
      }

      .fa-vote-yea:before {
        content: "\\f772";
      }

      .fa-vr-cardboard:before {
        content: "\\f729";
      }

      .fa-vuejs:before {
        content: "\\f41f";
      }

      .fa-walking:before {
        content: "\\f554";
      }

      .fa-wallet:before {
        content: "\\f555";
      }

      .fa-warehouse:before {
        content: "\\f494";
      }

      .fa-water:before {
        content: "\\f773";
      }

      .fa-wave-square:before {
        content: "\\f83e";
      }

      .fa-waze:before {
        content: "\\f83f";
      }

      .fa-weebly:before {
        content: "\\f5cc";
      }

      .fa-weibo:before {
        content: "\\f18a";
      }

      .fa-weight:before {
        content: "\\f496";
      }

      .fa-weight-hanging:before {
        content: "\\f5cd";
      }

      .fa-weixin:before {
        content: "\\f1d7";
      }

      .fa-whatsapp:before {
        content: "\\f232";
      }

      .fa-whatsapp-square:before {
        content: "\\f40c";
      }

      .fa-wheelchair:before {
        content: "\\f193";
      }

      .fa-whmcs:before {
        content: "\\f40d";
      }

      .fa-wifi:before {
        content: "\\f1eb";
      }

      .fa-wikipedia-w:before {
        content: "\\f266";
      }

      .fa-wind:before {
        content: "\\f72e";
      }

      .fa-window-close:before {
        content: "\\f410";
      }

      .fa-window-maximize:before {
        content: "\\f2d0";
      }

      .fa-window-minimize:before {
        content: "\\f2d1";
      }

      .fa-window-restore:before {
        content: "\\f2d2";
      }

      .fa-windows:before {
        content: "\\f17a";
      }

      .fa-wine-bottle:before {
        content: "\\f72f";
      }

      .fa-wine-glass:before {
        content: "\\f4e3";
      }

      .fa-wine-glass-alt:before {
        content: "\\f5ce";
      }

      .fa-wix:before {
        content: "\\f5cf";
      }

      .fa-wizards-of-the-coast:before {
        content: "\\f730";
      }

      .fa-wolf-pack-battalion:before {
        content: "\\f514";
      }

      .fa-won-sign:before {
        content: "\\f159";
      }

      .fa-wordpress:before {
        content: "\\f19a";
      }

      .fa-wordpress-simple:before {
        content: "\\f411";
      }

      .fa-wpbeginner:before {
        content: "\\f297";
      }

      .fa-wpexplorer:before {
        content: "\\f2de";
      }

      .fa-wpforms:before {
        content: "\\f298";
      }

      .fa-wpressr:before {
        content: "\\f3e4";
      }

      .fa-wrench:before {
        content: "\\f0ad";
      }

      .fa-x-ray:before {
        content: "\\f497";
      }

      .fa-xbox:before {
        content: "\\f412";
      }

      .fa-xing:before {
        content: "\\f168";
      }

      .fa-xing-square:before {
        content: "\\f169";
      }

      .fa-y-combinator:before {
        content: "\\f23b";
      }

      .fa-yahoo:before {
        content: "\\f19e";
      }

      .fa-yammer:before {
        content: "\\f840";
      }

      .fa-yandex:before {
        content: "\\f413";
      }

      .fa-yandex-international:before {
        content: "\\f414";
      }

      .fa-yarn:before {
        content: "\\f7e3";
      }

      .fa-yelp:before {
        content: "\\f1e9";
      }

      .fa-yen-sign:before {
        content: "\\f157";
      }

      .fa-yin-yang:before {
        content: "\\f6ad";
      }

      .fa-yoast:before {
        content: "\\f2b1";
      }

      .fa-youtube:before {
        content: "\\f167";
      }

      .fa-youtube-square:before {
        content: "\\f431";
      }

      .fa-zhihu:before {
        content: "\\f63f";
      }

      .sr-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .sr-only-focusable:active,
      .sr-only-focusable:focus {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
        width: auto;
      }

      .fab {
        font-family: "Font Awesome 5 Brands";
      }

      .far {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }

      .fa,
      .fas {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }
    `}constructor(){super(),this.regular=!1,this.prefix="fas",this.showIcon=!1,this.iconProps=null}render(){const{icon:e,prefix:t,showIcon:o,iconProps:r}=this;return o?j` <i class="${t} fa-${e}${r?` ${r}`:""}"></i> `:j``}connectedCallback(){const e=ne.includes(this.icon)&&this.regular,t=!e&&re.includes(this.icon),o=!e&&!t&&ae.includes(this.icon);this.showIcon=e||t||o,e&&(this.prefix="far"),o&&(this.prefix="fab"),super.connectedCallback()}}),customElements.define("mv-toast",class extends ee{static get properties(){return{type:{type:String,attribute:!0},duration:{type:Number,attribute:!0},closeable:{type:Boolean,attribute:!0},visible:{type:Boolean,reflect:!0,attribute:!1},show:{type:Boolean,reflect:!0,attribute:!1},theme:{type:String,attribute:!0}}}static get styles(){return a`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --light-background: var(--mv-toast-light-background);
        --hover-light-color: var(--mv-toast-hover-light-color);
        --dark-background: var(--mv-toast-dark-background, #4E686D);
        --hover-dark-color: var(--mv-toast-hover-dark-color, #23404C);
        --color: var(--mv-toast-color, #000000);				
      }
      
      @keyframes fade-in {
        0% {
          left: 0;
          opacity: 0;
        }
        100% {
          left: 330;
          opacity: 1;
        }
      }

      @keyframes fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      .mv-toast {
        background-color: #FFFFFF;
        min-width: 330px;
        max-width: 500px;
        min-height: 111px;
        box-shadow: 0 0 10px 0 rgba(7,17,26, 0.2);
        border-radius: 5px;
        display: flex;
        flex-direction: row;
      }

      .mv-toast.show {
        animation: fade-in 1s ease-in;
      }

      .mv-toast.hide {
        animation: fade-out 1s ease-out;
      }

      .toast-icon-section {
        border-radius: 5px 0 0 5px;
        box-shadow: 0 0 10px 0 rgba(7,17,26, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial;
        padding: 1rem;
      }

      .toast-icon-section i {
        color: #FFFFFF;
        display: inline-block;
        height: 36px;
        width: 36px;
        border: 2px solid #FFFFFF;
        border-radius: 100%;
      }

      .toast-icon-section i * {
        border: none;
      }

      .toast-content {
        padding-left: 20px;
        min-width: 400px;
        max-width: 480px;
      }
      
      .close-button-section {
        min-height: 14px;
        text-align: right;
        line-height: 14px;
      }
      
      .close-button-section button {        
        border: none;
        background: transparent;
        font-size: 24px;
        line-height: 16px;
        cursor: pointer;
        padding-top: 5px;
      }

      .close-button-section button:focus {
        outline: none;
      }

      .type {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
      }

      .message-container {
        font-size: 14px;
        max-width: 100%;
        color: var(--color);
      }

      .message {
        margin: 10px 0;        
      }

      .message-container.scrollbar {
        max-height: 150px;
        float: left;
        overflow: auto;
        // fallback for firefox
        scrollbar-color: #5A6473 #788394;
        scrollbar-width: thin;
      }

      .message-container.scrollbar:focus {
        outline: transparent auto 0;
      }
    
      .message-container.scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #788394;
      }
    
      .message-container.scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #788394;
        border-radius: 10px;
      }
    
      .message-container.scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5A6473;
      }

      .message-container.scrollbar.light {
        // fallback for firefox
        scrollbar-color: #1D9BC9 #EAEBF0 !important;
      }

      .message-container.scrollbar.light::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #EAEBF0 !important;
      }
  
      .message-container.scrollbar.light::-webkit-scrollbar {
        background-color: #1D9BC9;
      }
  
      .message-container.scrollbar.light::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #008FC3;
      }

      /* SUCCESS */
      .mv-toast.success {
        border: 1px solid var(--background-color, #54CA95);
      }

      .toast-icon-section.success {
        background-color: var(--background-color, #54CA95);        
      }

      .toast-icon-section.success i * {
        font-size: 26px;
        padding: 0 0 0 4px;
      }

      .close-button-section.success button {
        color: var(--background-color, #54CA95);
      }

      .close-button-section.success button:hover {
        color: var(--hover-color, #0CA361);
      }

      .type.success {
        color: var(--background-color, #54CA95);
      }
      
      /* INFORMATION */
      .mv-toast.information {
        border: 1px solid var(--background-color, #3999C1);
      }

      .toast-icon-section.information {
        background-color: var(--background-color, #3999C1);
      }

      .toast-icon-section.information i * {
        font-size: 26px;
        padding: 2px 0 0 12px;
      }

      .close-button-section.information button {
        color: var(--background-color, #3999C1);
      }

      .close-button-section.information button:hover {
        color: var(--hover-color, #007FAD);
      }

      .type.information {
        color: var(--background-color, #3999C1);
      }

      /* ERROR */
      .mv-toast.error {
        border: 1px solid var(--background-color, #E52F2F);
      }

      .toast-icon-section.error {
        background-color: var(--background-color, #E52F2F);
      }

      .toast-icon-section.error i * {
        font-size: 36px;
        padding: 3px 0 0 6px;
        margin-top: -6px;
      }

      .close-button-section.error button {
        color: var(--background-color, #DD5C55);
      }

      .close-button-section.error button:hover {
        color: var(--hover-color, #E71919);
      }

      .type.error {
        color: var(--background-color, #E52F2F);
      }
      
      .light {
        --background-color: var(--light-background);
        --hover-color: var(--hover-light-color);
      }
      
      .dark {
        --background-color: var(--dark-background);
        --hover-color: var(--hover-dark-color);
      }
    `}constructor(){super(),this.type="success",this.duration=1,this.closeable=!0,this.visible=!0,this.show=!0,this.theme="light",this.icons={success:j`<i class="toast-icon">&check;</i>`,information:j`<i class="toast-icon">&excl;</i>`,error:j`<i class="toast-icon">&times;</i>`}}render(){const{type:e,icons:t,closeable:o,visible:r,show:n,close:a}=this;return r?j`
          <div class="mv-toast ${n?"show":"hide"} ${e} ${this.theme}">
            <div class="toast-icon-section ${e}"><i>${t[e]}</i></div>
            <div class="toast-content">
              <div class="close-button-section ${e}">
                ${o?j`<button @click="${a}">&times;</button>`:j``}
              </div>
              <div class="type ${e}">${this.type}</div>
              <div class="message-container scrollbar light">
                  <div class="message">
                    <slot> </slot>
                  </div>
              </div>
            </div>      
          </div>
          `:j``}close(){this.show=!1,setTimeout((()=>{this.clearMessage()}),1e3)}clearMessage(){this.visible=!1,this.dispatchEvent(new CustomEvent("clear-message"))}}),null===(ce=window.HTMLSlotElement)||void 0===ce||ce.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),customElements.define("mv-click-away",class extends ee{static get properties(){return{}}static get styles(){return a`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `}render(){return j`<slot></slot>`}connectedCallback(){document.addEventListener("click",this.handleClickAway),super.connectedCallback()}detachedCallback(){document.removeEventListener("click",this.handleClickAway),super.detachedCallback()}isInPath=(e,t)=>e.some((e=>e===t));isInParentNode=(e,t)=>!!e&&(e===t||this.isInParentNode(e.parentNode,t));handleClickAway=e=>{const{path:t,originalTarget:o}=e,r=t||e.composedPath();let n=!1;if(r)n=!this.isInPath(r,this);else{const e=this.shadowRoot.firstElementChild;n=!this.isInParentNode(o,e)}n?this.dispatchEvent(new CustomEvent("clicked-away")):this.dispatchEvent(new CustomEvent("clicked-inside"))}}),customElements.define("mv-select",class extends ee{static get properties(){return{value:{type:Object,attribute:!0,reflect:!0},options:{type:Array,attribute:!1,reflect:!0},open:{type:Boolean,attribute:!0,reflect:!0},placeholder:{type:String,attribute:!0},searchable:{type:Boolean,attribute:!0},hasEmptyOption:{type:Boolean,attribute:"has-empty-option"},noClearButton:{type:Boolean,attribute:"no-clear-button"},emptyLabel:{type:String,attribute:"empty-label"},alwaysOpen:{type:Boolean,attribute:"always-open"},multiSelect:{type:Boolean,attribute:"multi-select"},showInput:{type:Boolean,attribute:!1,reflect:!0},theme:{type:String},isFilter:{type:Boolean,attribute:"is-filter"},allValMultiSelect:{type:Array,attribute:!1,state:!0,reflect:!0}}}static get styles(){return a`
      :host {
        user-select: none;
        --mv-select-font-family: var(--font-family, Arial);
        --color: var(--mv-select-color, #777);
        --width: var(--mv-select-width, 200px);
        --input-padding: var(--mv-select-input-padding, 4px);
        --outside-padding: calc(var(--input-padding) * 2);
        --max-height: var(
          --mv-select-max-height,
          calc(var(--mv-select-font-size) + var(--outside-padding))
        );
        --input-height: var(--max-height);
        --total-height: calc(var(--max-height) + var(--outside-padding));
        --full-height: calc(var(--total-height) + 2px);
        --border: var(--mv-select-border, 1px solid #4e686d);
        --border-radius: var(--mv-select-border-radius, 5px);
        --clear-icon-size: var(
          --mv-select-clear-icon-size,
          var(--mv-select-font-size)
        );
        --dropdown-icon-button-margin: var(--input-padding);
        --dropdown-icon-size: var(
          --mv-select-dropdown-icon-size,
          calc(var(--mv-select-font-size) * 0.75)
        );
        --dropdown-icon-button-size: calc(
          var(--dropdown-icon-size) + var(--dropdown-icon-button-margin)
        );
        --dropdown-icon-total-width: calc(
          var(--dropdown-icon-button-size) + var(--input-padding)
        );
        --button-section-width: calc(var(--dropdown-icon-total-width) * 2);
        --dropdown-icon-button-color: var(
          --mv-select-dropdown-icon-button-color,
          var(--color)
        );
        --option-max-height: var(--mv-select-option-max-height, 250px);
        --option-color: var(--mv-select-option-color, var(--color));
        --option-background: var(--mv-select-option-background, #ffffff);
        --option-hover-background: var(
          --mv-select-option-hover-background,
          #1d9bc9
        );
        --option-hover-color: var(--mv-select-option-hover-color, #ffffff);
        --option-item-padding: var(--mv-select-option-max-height, 10px);
        --mv-select-selected-font-size: var(
          --mv-select-selected-option-font-size,
          12px
        );
        --mv-select-input-group-bg-color: var(
          --mv-select-background-color,
          transparent
        );
      }

      .mv-select {
        position: relative;
        min-height: var(--full-height);
      }

      .mv-select-contents {
        height: var(--full-height);
      }

      .mv-select-contents.always-open {
        position: absolute;
        height: unset;
        width: 100%;
      }

      .mv-select-input-group {
        background-color: var(--mv-select-input-group-bg-color);
        position: relative;
        align-items: center;
        justify-items: start;
        border: var(--border);
        border-radius: var(--border-radius);
        min-height: 30px;
        max-height: var(--max-height);
        padding: var(--input-padding);
        width: var(--width);
        display: table;
        width: 95%;
      }

      .mv-select-input {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: 0;
        outline: none;
        min-height: var(--input-height);
        max-height: var(--input-height);
        line-height: var(--input-height);
        width: calc(100% - var(--button-section-width));
      }

      .mv-select-input.no-clear,
      .mv-select-input.no-dropdown {
        width: calc(100% - var(--dropdown-icon-button-size));
      }

      .mv-select-button > * {
        border: 0;
        padding: 0;
        position: absolute;
        height: 100%;
        cursor: pointer;
      }

      .mv-select-dropdown-button {
        top: 0;
        right: 0;
        font-size: var(--dropdown-icon-size);
      }

      .mv-select-clear-button,
      .mv-select-dropdown-button {
        background: transparent;
        outline: none;
        margin: auto var(--dropdown-icon-button-margin);
        width: var(--dropdown-icon-button-size);
        color: var(--dropdown-icon-button-color);
      }

      .mv-select-dropdown-button.close {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }

      .mv-select-dropdown-button.open {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .mv-select-clear-button {
        top: 0;
        right: var(--dropdown-icon-total-width);
        font-size: var(--clear-icon-size);
      }

      .mv-select-clear-button.no-dropdown {
        top: 0;
        right: 0;
      }

      .mv-select-input.static {
        user-select: none;
        background: transparent;
        padding: auto;
        width: calc(100% - var(--dropdown-icon-total-width));
        overflow-x: hidden;
        white-space: nowrap;
      }

      .mv-select-input.static:hover {
        cursor: pointer;
      }

      .mv-select-input.searchable:hover {
        cursor: text;
      }

      .mv-select-options {
        margin: 0;
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: var(--border);
        border-radius: var(--border-radius);
        max-height: var(--option-max-height);
        background: var(--option-background);
        overflow: auto;
        display: block;
        left: 0;
        padding: 5px 0;
        width: auto;
        list-style: none;
        z-index: 0;
        position: absolute;
        top: calc(var(--full-height) + 2px);
      }

      .mv-select-options {
        top: 2px;
        position: relative;
      }

      .mv-select-options.open {
        box-shadow: 3px 3px 10px 0px rgba(58, 58, 58, 0.6);
        z-index: 10;
        position: absolute;
      }

      .mv-select-item {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        padding: var(--option-item-padding);
        display: block;
      }
      .mv-select-values-container {
        position: relative;
        //display: grid;
        place-items: center start;
        border: var(--border);
        border-radius: var(--border-radius);
        min-height: var(--max-height);
        height: auto;
        padding: var(--input-padding);
        display: table;
        width: 96%;
        margin-bottom: -20px;
        min-height: 30px;
        padding: 0;
      }

      .mv-select-item.selected,
      .mv-select-item.highlight,
      .mv-select-item:hover {
        background: var(--option-hover-background);
        color: var(--option-hover-color);
        cursor: pointer;
      }

      .scrollbar {
        width: 100%;
        float: left;
        overflow-y: auto;
        margin: 0;
        /* fallback for firefox */
        scrollbar-color: #5a6473 #788394;
        scrollbar-width: thin;
        margin: var(--content-margin);
      }

      .scrollbar:focus {
        outline: transparent auto 0;
      }

      .scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #788394;
      }

      .scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #788394;
        border-radius: 10px;
      }

      .scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5a6473;
      }

      .mv-select-input {
        --mv-select-font-size: var(--mv-select-selected-font-size);
      }

      .scrollbar.light {
        // fallback for firefox
        scrollbar-color: #1d9bc9 #eaebf0 !important;
      }

      .scrollbar.light::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #eaebf0 !important;
      }

      .scrollbar.light::-webkit-scrollbar {
        background-color: #1d9bc9;
      }

      .scrollbar.light::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #008fc3;
      }

      .active {
        background-color: rgba(86, 190, 172, 0.1);
        border: 2px solid #56beac;
      }

      .mv-select-values li {
        background: #3999c1;
        border-radius: 5px;
        margin: 2px;
        display: block;
        float: left;
        padding: 3px 10px;
        color: #fff;
        cursor: pointer;
        font-size: 11px;
        border: solid 1px #ccc;
        list-style: none;
      }
      .reset {
        display: none !important;
      }
      .clear {
        position: relative;
        bottom: 4px;
        cursor: pointer;
        background-color: none;
        color: rgb(0, 0, 0);
        border-radius: 5px;
        border: none;
        float: right;
        height: 20px;
        width: 20px;
        right: 25px;
        background: none;
      }

      .toggle-select {
        position: relative;
        float: right;

        height: 30px;
        cursor: pointer;
        background: none;
        border: none;
        bottom: 9px;
      }

      .selected {
        background-color: #3999c1;
        //display: none;
      }
      ul.open {
        position: relative !important;
      }

      .select-one {
        position: absolute;
        bottom: -2px;
        left: 20px;
        width: 60%;
        z-index: 9;
        cursor: pointer;
      }
      .mv-select-values {
        display: block;
        width: 90%;
        padding: 0px 10px 0px 0px;
        margin-top: 0px;
      }
      .level1 {
        text-indent: 15px;
      }
      .level2 {
        text-indent: 25px;
      }
      .level3 {
        text-indent: 35px;
      }
      .level4 {
        text-indent: 45px;
      }
      .level5 {
        text-indent: 55px;
      }
    `}constructor(){super(),this.emptyOption={label:"- Select one -",value:null},this.placeholder="",this.value=null,this.options=[],this.searchable=!1,this.open=!1,this.showInput=!1,this.alwaysOpen=!1,this.multiSelect=!1,this.multiLevel=!1,this.hasEmptyOption=!1,this.noClearButton=!1,this.theme="light",this.allValMultiSelect=[],this.option=[],this.stateMultiSelect=!1}render(){const e=this.alwaysOpen,t=this.hasEmptyOption?[this.emptyOption,...this.options]:this.options,o=this.noClearButton?" no-clear":"",r=e?" no-dropdown":"",n=this.searchable?"searchable":"static",a=this.multiSelect?"multiselect":"no-multiselect",c=this.multiLevel?"multilevel":"",i=`mv-select-input ${n}${r}${o}`,f=`mv-select-clear-button${r}`,l="mv-select-dropdown-button "+(this.open?"open":"close"),s=`mv-select-options scrollbar ${this.theme}${this.open&&!e?" open":""}`,u=this.value?this.value.label:"",d=this.showInput?"":u;return j`
      <mv-click-away @clicked-away="${this.handleClickAway}">
        <div class="mv-select ">
          <div class="mv-select-contents${e?" always-open":""}">
            <div
              class="mv-select-input-group${this.isFilter&&this.value.value?" active":""}"
              @click="${this.toggleDropdown}"
              @keyup="${this.handleKeyPress}"
            >
              ${this.showInput&&!this.multiSelect?j`
                    <input
                      class="${i}"
                      .value="${d}"
                      placeholder="${this.placeholder}"
                    />
                  `:j`
                    <slot name="custom-value">
                      ${this.multiSelect?j`
                            <ul class="mv-select-values">
                              ${this.allValMultiSelect.map(((e,t)=>j`
                                    <li
                                      data-options=${e}
                                      data-index=${t}
                                      class="data${t} datas selected-${e}"
                                      @click=${()=>this.removeItem(e,t)}
                                    >
                                      <slot name="custom-option">
                                        ${e.label} ×
                                      </slot>
                                    </li>
                                  `))}
                            </ul>
                          `:j`
                            <div class=${i}>${u}</div>
                          `}
                    </slot>
                  `}
              ${this.noClearButton?j``:j`
                    <slot name="custom-clear-button" class="mv-select-button">
                      <button
                        class="${f}"
                        @click="${this.clearSearch}"
                      >
                        &times;
                      </button>
                    </slot>
                  `}
              ${e?j``:j`
                    <slot
                      name="custom-dropdown-button"
                      class="mv-select-button"
                    >
                      <button class="${l}">&#9660;</button>
                    </slot>
                  `}
            </div>
            ${this.open||e?j`
                  ${t.length>0?j`
                        <ul
                          class="${s} ${a} ${c}"
                        >
                          ${t.map(((e,t)=>this.renderOption(e,t)))}
                        </ul>
                      `:j`
                        <ul class="${s}">
                          <li class="mv-select-item">
                            <slot name="custom-empty-message">
                              No available options
                            </slot>
                          </li>
                        </ul>
                      `}
                `:j``}
          </div>
        </div>
      </mv-click-away>
    `}firstUpdated(){if(this.multiLevel){this.showInput=!!this.alwaysOpen||this.open;const e=this;setTimeout((()=>{e.dispatchEvent(new CustomEvent("on-search",{detail:{value:null,originalEvent}}))}),0)}}connectedCallback(){this.hasEmptyOption&&(this.emptyOption.label=this.emptyLabel||"- Select one -",this.value||(this.value=this.emptyOption)),this.addEventListener("select-option",this.setValue),this.addEventListener("change",this.setValue),super.connectedCallback()}attributeChangedCallback(e,t,o){"value"===e&&!this.value&&this.hasEmptyOption&&(this.value=this.emptyOption),super.attributeChangedCallback(e,t,o)}handleClickAway=()=>{this.open=!1,this.showInput=!1};handleKeyPress=((e,t,o)=>{let r;return(...t)=>{const o=void 0;clearTimeout(r),r=setTimeout((function(){r=null,e.apply(o,t)}),300)}})((e=>{const{path:t,originalTarget:o}=e,r=t||e.composedPath(),[n]=r,{value:a}=n||o;this.dispatchEvent(new CustomEvent("on-search",{detail:{value:a,originalEvent:e}}))}));toggleDropdown=e=>{if(this.open=!this.open,this.searchable){this.showInput=!!this.alwaysOpen||this.open;const t=this;setTimeout((()=>{t.dispatchEvent(new CustomEvent("on-search",{detail:{value:null,originalEvent:e}}))}),0)}};setValue=()=>{this.open=!1,this.searchable&&(this.showInput=!1)};removeItem=e=>{this.unselect(e),0==this.value.length&&(this.allValMultiSelect=[],this.itemRemoved=!1,this.alwaysOpen=!1,this.dispatchEvent(new CustomEvent("change",{detail:{option:this.value}}))),self.dispatchEvent(new CustomEvent("change",{detail:{option:this.value}}))};isSelected(e){if(this.allValMultiSelect.includes(e))return!0;if(e.children)for(let t of e.children)if(this.isSelected(t)&&void 0!==e.selectable&&!e.selectable)return!0}renderOption(e,t,o=0,r){const n=e===this.value||this.isSelected(e)?"selected":"",a=`mv-select-item ${n}`,c=n?()=>this.removeItem(e):this.selectItem(e,r,t,n,e.value);return j`
      <li
        data-index="${t}"
        data-option="${e.value}"
        class="listitem${t} ${a} ${e.value} level${o}"
        @click="${c}"
      >
        <slot name="custom-option">
          ${e.label}
        </slot>
      </li>

      ${e.children&&e.children.length>0&&e.children.map(((e,r)=>this.renderOption(e,t+"."+r,o+1)))}
    `}pushOptionToList(e){if(this.allValMultiSelect.find((t=>t==e))||(void 0===e.selectable||e.selectable)&&this.allValMultiSelect.push(e),e.children&&e.children.length>0)for(let t of e.children)this.pushOptionToList(t)}selectItem=e=>{const t=this;return()=>{1==t.multiSelect?(this.pushOptionToList(e),t.value=[...this.allValMultiSelect],this.alwaysOpen=!0,t.dispatchEvent(new CustomEvent("change",{detail:{option:this.value}}))):(t.value=e,t.dispatchEvent(new CustomEvent("select-option",{detail:{option:t.value}})))}};clearSearch=e=>{this.allValMultiSelect=[],this.itemRemoved=!1,this.alwaysOpen=!1,this.dispatchEvent(new CustomEvent("on-clear",{detail:{originalEvent:e}}))};unselect(e){const t=this.allValMultiSelect.findIndex((t=>e===t));if(this.allValMultiSelect.splice(t,1),e.children)for(let t of e.children)this.unselect(t);this.value=[...this.allValMultiSelect]}});const ie=[{label:"Option 1",value:"option1",children:[{label:"Child Option 1.1",value:"option1.childOpt1"},{label:"Child Option 1.2",value:"option1.childOpt2"}]},{label:"Option 2",value:"option2",children:[{label:"Child Option 2.1",value:"option2.childOpt1",children:[{label:"Child option 2.1.1",value:"option2.childOpt1.childOpt1"}]}],selectable:!1},{label:"Option 3",value:"option3"}];customElements.define("mv-select-demo",class extends ee{static get properties(){return{value:{type:Object,attribute:!1,reflect:!0},options:{type:Array,attribute:!1,reflect:!0},theme:{type:String,attribute:!0},data:{type:Array,state:!0}}}static get styles(){return a`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --mv-select-font-size: 16px;
        --mv-select-input-padding: 6px;
        --mv-select-border: 1px solid #4e686d;
        display: flex;
      }

      mv-container label {
        display: block;
        margin-bottom: 5px;
        font-size: 1.2em;
        font-weight: bold;
      }

      mv-container {
        // --mv-container-min-width: 780px;
        --mv-container-max-width: 780px;
        margin-left: 5px;
        margin-right: 5px;
      }

      mv-button {
        --mv-button-padding: 8px 12px;
        --mv-button-margin: 0 5px;
        --mv-button-min-width: 50px;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
      }

      .contents {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        grid-gap: 20px;
      }

      .default-select-container {
        display: grid;
        grid-template-columns: auto 50px;
        align-items: flex-start !important;
      }

      .message {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      fieldset > label,
      label > input {
        cursor: pointer;
      }

      fieldset {
        width: 120px;
        margin-left: 10px;
        border: 2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        color: #818181;
      }

      legend {
        font-weight: 500;
        color: red;
      }
      .default-select-container {
        align-items: first baseline;
      }

      .options {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .options-container {
        --mv-container-position: sticky;
      }
    `}constructor(){super(),this.value={},this.options={default:null,searchable:null,alwaysOpen:null,multiSelect:null,multiLevel:null},this.theme="light",this.data=ie}updateValue(){this.data=JSON.parse(this.shadowRoot.querySelector("textarea").value)}render(){const{theme:e}=this;return j`
      <mv-container class="options-container">
        <div class="options">
          <textarea rows="30" cols="40">${JSON.stringify(this.data,null,2)}</textarea>
          <button @click="${this.updateValue}">Submit</button>
        </div>
      </mv-container>
      <mv-container .theme="${e}">
        <div class="contents">
          <div class="input-group">
            <label>Default</label>
            <div class="default-select-container">
              <mv-select
                .value="${this.value.default}"
                .options="${this.data}"
                .theme="${e}"
                @select-option="${this.displayValue("default")}"
                has-empty-option
                no-clear-button
              ></mv-select>
              <mv-button
                button-style="error"
                @button-clicked="${this.clearValue("default")}"
              >
                <mv-fa icon="times"></mv-fa>
              </mv-button>
            </div>
          </div>
          <div>
            <mv-toast
              type="information"
              .closeable="${!1}"
              .theme="${e}"
            >
              <h4>Default type selected value:</h4>
              <div class="message">
                ${this.value&&this.value.default&&this.value.default.label}
              </div>
            </mv-toast>
          </div>

          <div class="input-group">
            <label>Searchable</label>
            <mv-select
              .value="${this.value.searchable}"
              .options="${this.data}"
              .theme="${e}"
              @select-option="${this.displayValue("searchable")}"
              @on-search="${this.searchValue("searchable")}"
              @on-clear="${this.clearValue("searchable")}"
              searchable
            ></mv-select>
          </div>
          <div>
            <mv-toast
              type="information"
              .closeable="${!1}"
              .theme="${e}"
            >
              <h4>Searchable type selected value:</h4>
              <div class="message">
                ${this.value&&this.value.searchable&&this.value.searchable.label}
              </div>
            </mv-toast>
          </div>

          <div class="input-group" style="height:400px;display : block">
            <label>Always open</label>

            <mv-select
              .value="${this.value.alwaysOpen}"
              .options="${this.data}"
              .theme="${e}"
              @select-option="${this.displayValue("alwaysOpen")}"
              @on-search="${this.searchValue("alwaysOpen")}"
              @on-clear="${this.clearValue("alwaysOpen")}"
              always-open
              searchable
            ></mv-select>
          </div>

          <div>
            <mv-toast
              type="information"
              .closeable="${!1}"
              .theme="${e}"
            >
              <h4>Always open type selected value:</h4>
              <div class="message">
                ${this.value&&this.value.alwaysOpen&&this.value.alwaysOpen.label}
              </div>
            </mv-toast>
          </div>

          <div class="input-group" style="height:400px;display : block">
            <label>Multiple</label>

            <mv-select
              .value="${this.value.multiSelect}"
              .options="${this.data}"
              .theme="${e}"
              @select-option="${this.displayValue("multiselect")}"
              @on-search="${this.searchValue("multiSelect")}"
              @on-clear="${this.clearValue("multiSelect")}"
              @change="${this.removeValues("multiSelect")}"
              multi-select
            ></mv-select>
          </div>

          <div>
            <mv-toast
              type="information"
              .closeable="${!1}"
              .theme="${e}"
            >
              <h4>Multiple value:</h4>
              <div class="message">
              ${this.value.multiSelect&&this.value.multiSelect.map((e=>e.label))}
              </div>
            </mv-toast>
          </div>
        </div>
      </mv-container>
    `}displayValue=e=>t=>{const{detail:{option:o}}=t;this.value={...this.value,[e]:o}};displayValues=e=>t=>{const{detail:{option:o}}=t;this.value={...this.value,[e]:o},console.log(this.value)};removeValues=e=>t=>{const{detail:{option:o}}=t;this.value={...this.value,[e]:o}};searchValue=e=>t=>{const{detail:{value:o}}=t;this.options={...this.options,[e]:ie.filter((e=>{const t="html"===e.label.type?(new DOMParser).parseFromString(e.label.strings[0],"text/html").body.textContent.trim():e.label;return o?t.includes(o)||e.value.includes(o):e}))}};clearValue=e=>{const t=this;return({detail:o})=>{const{originalEvent:r}=o||{};r&&r.stopPropagation(),t.value={...t.value,[e]:null}}};changeTheme=e=>{const{target:{value:t}}=e;this.theme=t}})},636:e=>{"use strict";e.exports=c;var t=/(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/,o={reset:["fff","000"],black:"000",red:"ff0000",green:"209805",yellow:"e8bf03",blue:"0000ff",magenta:"ff00ff",cyan:"00ffee",lightgrey:"f0f0f0",darkgrey:"888"},r={30:"black",31:"red",32:"green",33:"yellow",34:"blue",35:"magenta",36:"cyan",37:"lightgrey"},n={1:"font-weight:bold",2:"opacity:0.5",3:"<i>",4:"<u>",8:"display:none",9:"<del>"},a={23:"</i>",24:"</u>",29:"</del>"};function c(e){if(!t.test(e))return e;var o=[],r=e.replace(/\033\[(\d+)m/g,(function(e,t){var r=n[t];if(r)return~o.indexOf(t)?(o.pop(),"</span>"):(o.push(t),"<"===r[0]?r:'<span style="'+r+';">');var c=a[t];return c?(o.pop(),c):""})),c=o.length;return c>0&&(r+=Array(c+1).join("</span>")),r}function i(e){for(var t in n[0]="font-weight:normal;opacity:1;color:#"+e.reset[0]+";background:#"+e.reset[1],n[7]="color:#"+e.reset[1]+";background:#"+e.reset[0],n[90]="color:#"+e.darkgrey,r){var o=e[r[t]]||"000";n[t]="color:#"+o,t=parseInt(t),n[(t+10).toString()]="background:#"+o}}[0,21,22,27,28,39,49].forEach((function(e){a[e]="</span>"})),c.setColors=function(e){if("object"!=typeof e)throw new Error("`colors` parameter must be an Object.");var t={};for(var r in o){var n=e.hasOwnProperty(r)?e[r]:null;if(n){if("reset"===r){if("string"==typeof n&&(n=[n]),!Array.isArray(n)||0===n.length||n.some((function(e){return"string"!=typeof e})))throw new Error("The value of `"+r+"` property must be an Array and each item could only be a hex string, e.g.: FF0000");var a=o[r];n[0]||(n[0]=a[0]),1!==n.length&&n[1]||(n=[n[0]]).push(a[1]),n=n.slice(0,2)}else if("string"!=typeof n)throw new Error("The value of `"+r+"` property must be a hex string, e.g.: FF0000");t[r]=n}else t[r]=o[r]}i(t)},c.reset=function(){i(o)},c.tags={},Object.defineProperty?(Object.defineProperty(c.tags,"open",{get:function(){return n}}),Object.defineProperty(c.tags,"close",{get:function(){return a}})):(c.tags.open=n,c.tags.close=a),c.reset()},187:e=>{"use strict";var t,o="object"==typeof Reflect?Reflect:null,r=o&&"function"==typeof o.apply?o.apply:function(e,t,o){return Function.prototype.apply.call(e,t,o)};t=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var n=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(o,r){function n(o){e.removeListener(t,a),r(o)}function a(){"function"==typeof e.removeListener&&e.removeListener("error",n),o([].slice.call(arguments))}h(e,t,a,{once:!0}),"error"!==t&&function(e,t,o){"function"==typeof e.on&&h(e,"error",t,{once:!0})}(e,n)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var c=10;function i(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function l(e,t,o,r){var n,a,c,l;if(i(o),void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,o.listener?o.listener:o),a=e._events),c=a[t]),void 0===c)c=a[t]=o,++e._eventsCount;else if("function"==typeof c?c=a[t]=r?[o,c]:[c,o]:r?c.unshift(o):c.push(o),(n=f(e))>0&&c.length>n&&!c.warned){c.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=c.length,l=s,console&&console.warn&&console.warn(l)}return e}function s(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(e,t,o){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:o},n=s.bind(r);return n.listener=o,r.wrapFn=n,n}function d(e,t,o){var r=e._events;if(void 0===r)return[];var n=r[t];return void 0===n?[]:"function"==typeof n?o?[n.listener||n]:[n]:o?function(e){for(var t=new Array(e.length),o=0;o<t.length;++o)t[o]=e[o].listener||e[o];return t}(n):p(n,n.length)}function b(e){var t=this._events;if(void 0!==t){var o=t[e];if("function"==typeof o)return 1;if(void 0!==o)return o.length}return 0}function p(e,t){for(var o=new Array(t),r=0;r<t;++r)o[r]=e[r];return o}function h(e,t,o,r){if("function"==typeof e.on)r.once?e.once(t,o):e.on(t,o);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function n(a){r.once&&e.removeEventListener(t,n),o(a)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||n(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||n(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return f(this)},a.prototype.emit=function(e){for(var t=[],o=1;o<arguments.length;o++)t.push(arguments[o]);var n="error"===e,a=this._events;if(void 0!==a)n=n&&void 0===a.error;else if(!n)return!1;if(n){var c;if(t.length>0&&(c=t[0]),c instanceof Error)throw c;var i=new Error("Unhandled error."+(c?" ("+c.message+")":""));throw i.context=c,i}var f=a[e];if(void 0===f)return!1;if("function"==typeof f)r(f,this,t);else{var l=f.length,s=p(f,l);for(o=0;o<l;++o)r(s[o],this,t)}return!0},a.prototype.addListener=function(e,t){return l(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return l(this,e,t,!0)},a.prototype.once=function(e,t){return i(t),this.on(e,u(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return i(t),this.prependListener(e,u(this,e,t)),this},a.prototype.removeListener=function(e,t){var o,r,n,a,c;if(i(t),void 0===(r=this._events))return this;if(void 0===(o=r[e]))return this;if(o===t||o.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,o.listener||t));else if("function"!=typeof o){for(n=-1,a=o.length-1;a>=0;a--)if(o[a]===t||o[a].listener===t){c=o[a].listener,n=a;break}if(n<0)return this;0===n?o.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(o,n),1===o.length&&(r[e]=o[0]),void 0!==r.removeListener&&this.emit("removeListener",e,c||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,o,r;if(void 0===(o=this._events))return this;if(void 0===o.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==o[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete o[e]),this;if(0===arguments.length){var n,a=Object.keys(o);for(r=0;r<a.length;++r)"removeListener"!==(n=a[r])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=o[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},a.prototype.listeners=function(e){return d(this,e,!0)},a.prototype.rawListeners=function(e){return d(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):b.call(e,t)},a.prototype.listenerCount=b,a.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},111:function(e,t,o){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=o(206),a=o(642),c=o(726),i=r(r({},n.namedReferences),{all:n.namedReferences.html5}),f={specialChars:/[<>'"&]/g,nonAscii:/(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,nonAsciiPrintable:/(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,extensive:/(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g},l={mode:"specialChars",level:"all",numeric:"decimal"};t.encode=function(e,t){var o=void 0===(s=(a=void 0===t?l:t).mode)?"specialChars":s,r=void 0===(p=a.numeric)?"decimal":p,n=a.level;if(!e)return"";var a,s,u=f[o],d=i[void 0===n?"all":n].characters,b="hexadecimal"===r;if(u.lastIndex=0,a=u.exec(e)){s="";var p=0;do{p!==a.index&&(s+=e.substring(p,a.index));var h=d[n=a[0]];if(!h){var m=n.length>1?c.getCodePoint(n,0):n.charCodeAt(0);h=(b?"&#x"+m.toString(16):"&#"+m)+";"}s+=h,p=a.index+n.length}while(a=u.exec(e));p!==e.length&&(s+=e.substring(p))}else s=e;return s};var s={scope:"body",level:"all"},u=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,d=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,b={xml:{strict:u,attribute:d,body:n.bodyRegExps.xml},html4:{strict:u,attribute:d,body:n.bodyRegExps.html4},html5:{strict:u,attribute:d,body:n.bodyRegExps.html5}},p=r(r({},b),{all:b.html5}),h=String.fromCharCode,m=h(65533),g={level:"all"};t.decodeEntity=function(e,t){var o=void 0===(r=(void 0===t?g:t).level)?"all":r;if(!e)return"";var r=e,n=(e[e.length-1],i[o].entities[e]);if(n)r=n;else if("&"===e[0]&&"#"===e[1]){var f=e[2],l="x"==f||"X"==f?parseInt(e.substr(3),16):parseInt(e.substr(2));r=l>=1114111?m:l>65535?c.fromCodePoint(l):h(a.numericUnicodeMap[l]||l)}return r},t.decode=function(e,t){var o=void 0===t?s:t,r=o.level,n=void 0===r?"all":r,f=o.scope,l=void 0===f?"xml"===n?"strict":"body":f;if(!e)return"";var u=p[n][l],d=i[n].entities,b="attribute"===l,g="strict"===l;u.lastIndex=0;var v,y=u.exec(e);if(y){v="";var w=0;do{w!==y.index&&(v+=e.substring(w,y.index));var k=y[0],x=k,q=k[k.length-1];if(b&&"="===q)x=k;else if(g&&";"!==q)x=k;else{var E=d[k];if(E)x=E;else if("&"===k[0]&&"#"===k[1]){var A=k[2],S="x"==A||"X"==A?parseInt(k.substr(3),16):parseInt(k.substr(2));x=S>=1114111?m:S>65535?c.fromCodePoint(S):h(a.numericUnicodeMap[S]||S)}}v+=x,w=y.index+k.length}while(y=u.exec(e));w!==e.length&&(v+=e.substring(w))}else v=e;return v}},206:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g},t.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;",ª:"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;",µ:"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;",º:"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;",À:"&Agrave;",Á:"&Aacute;",Â:"&Acirc;",Ã:"&Atilde;",Ä:"&Auml;",Å:"&Aring;",Æ:"&AElig;",Ç:"&Ccedil;",È:"&Egrave;",É:"&Eacute;",Ê:"&Ecirc;",Ë:"&Euml;",Ì:"&Igrave;",Í:"&Iacute;",Î:"&Icirc;",Ï:"&Iuml;",Ð:"&ETH;",Ñ:"&Ntilde;",Ò:"&Ograve;",Ó:"&Oacute;",Ô:"&Ocirc;",Õ:"&Otilde;",Ö:"&Ouml;","×":"&times;",Ø:"&Oslash;",Ù:"&Ugrave;",Ú:"&Uacute;",Û:"&Ucirc;",Ü:"&Uuml;",Ý:"&Yacute;",Þ:"&THORN;",ß:"&szlig;",à:"&agrave;",á:"&aacute;",â:"&acirc;",ã:"&atilde;",ä:"&auml;",å:"&aring;",æ:"&aelig;",ç:"&ccedil;",è:"&egrave;",é:"&eacute;",ê:"&ecirc;",ë:"&euml;",ì:"&igrave;",í:"&iacute;",î:"&icirc;",ï:"&iuml;",ð:"&eth;",ñ:"&ntilde;",ò:"&ograve;",ó:"&oacute;",ô:"&ocirc;",õ:"&otilde;",ö:"&ouml;","÷":"&divide;",ø:"&oslash;",ù:"&ugrave;",ú:"&uacute;",û:"&ucirc;",ü:"&uuml;",ý:"&yacute;",þ:"&thorn;",ÿ:"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;",Œ:"&OElig;",œ:"&oelig;",Š:"&Scaron;",š:"&scaron;",Ÿ:"&Yuml;",ˆ:"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;",ƒ:"&fnof;",Α:"&Alpha;",Β:"&Beta;",Γ:"&Gamma;",Δ:"&Delta;",Ε:"&Epsilon;",Ζ:"&Zeta;",Η:"&Eta;",Θ:"&Theta;",Ι:"&Iota;",Κ:"&Kappa;",Λ:"&Lambda;",Μ:"&Mu;",Ν:"&Nu;",Ξ:"&Xi;",Ο:"&Omicron;",Π:"&Pi;",Ρ:"&Rho;",Σ:"&Sigma;",Τ:"&Tau;",Υ:"&Upsilon;",Φ:"&Phi;",Χ:"&Chi;",Ψ:"&Psi;",Ω:"&Omega;",α:"&alpha;",β:"&beta;",γ:"&gamma;",δ:"&delta;",ε:"&epsilon;",ζ:"&zeta;",η:"&eta;",θ:"&theta;",ι:"&iota;",κ:"&kappa;",λ:"&lambda;",μ:"&mu;",ν:"&nu;",ξ:"&xi;",ο:"&omicron;",π:"&pi;",ρ:"&rho;",ς:"&sigmaf;",σ:"&sigma;",τ:"&tau;",υ:"&upsilon;",φ:"&phi;",χ:"&chi;",ψ:"&psi;",ω:"&omega;",ϑ:"&thetasym;",ϒ:"&upsih;",ϖ:"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;",℘:"&weierp;",ℑ:"&image;",ℜ:"&real;","™":"&trade;",ℵ:"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{Æ:"&AElig;","&":"&amp;",Á:"&Aacute;",Ă:"&Abreve;",Â:"&Acirc;",А:"&Acy;",𝔄:"&Afr;",À:"&Agrave;",Α:"&Alpha;",Ā:"&Amacr;","⩓":"&And;",Ą:"&Aogon;",𝔸:"&Aopf;","⁡":"&af;",Å:"&angst;",𝒜:"&Ascr;","≔":"&coloneq;",Ã:"&Atilde;",Ä:"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;",Б:"&Bcy;","∵":"&because;",ℬ:"&bernou;",Β:"&Beta;",𝔅:"&Bfr;",𝔹:"&Bopf;","˘":"&breve;","≎":"&bump;",Ч:"&CHcy;","©":"&copy;",Ć:"&Cacute;","⋒":"&Cap;",ⅅ:"&DD;",ℭ:"&Cfr;",Č:"&Ccaron;",Ç:"&Ccedil;",Ĉ:"&Ccirc;","∰":"&Cconint;",Ċ:"&Cdot;","¸":"&cedil;","·":"&middot;",Χ:"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;",ℂ:"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;",𝒞:"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;",Ђ:"&DJcy;",Ѕ:"&DScy;",Џ:"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;",Ď:"&Dcaron;",Д:"&Dcy;","∇":"&nabla;",Δ:"&Delta;",𝔇:"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;",ⅆ:"&dd;",𝔻:"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;",𝒟:"&Dscr;",Đ:"&Dstrok;",Ŋ:"&ENG;",Ð:"&ETH;",É:"&Eacute;",Ě:"&Ecaron;",Ê:"&Ecirc;",Э:"&Ecy;",Ė:"&Edot;",𝔈:"&Efr;",È:"&Egrave;","∈":"&isinv;",Ē:"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;",Ę:"&Eogon;",𝔼:"&Eopf;",Ε:"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;",ℰ:"&expectation;","⩳":"&Esim;",Η:"&Eta;",Ë:"&Euml;","∃":"&exist;",ⅇ:"&exponentiale;",Ф:"&Fcy;",𝔉:"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;",𝔽:"&Fopf;","∀":"&forall;",ℱ:"&Fscr;",Ѓ:"&GJcy;",">":"&gt;",Γ:"&Gamma;",Ϝ:"&Gammad;",Ğ:"&Gbreve;",Ģ:"&Gcedil;",Ĝ:"&Gcirc;",Г:"&Gcy;",Ġ:"&Gdot;",𝔊:"&Gfr;","⋙":"&ggg;",𝔾:"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;",𝒢:"&Gscr;","≫":"&gg;",Ъ:"&HARDcy;",ˇ:"&caron;","^":"&Hat;",Ĥ:"&Hcirc;",ℌ:"&Poincareplane;",ℋ:"&hamilt;",ℍ:"&quaternions;","─":"&boxh;",Ħ:"&Hstrok;","≏":"&bumpeq;",Е:"&IEcy;",Ĳ:"&IJlig;",Ё:"&IOcy;",Í:"&Iacute;",Î:"&Icirc;",И:"&Icy;",İ:"&Idot;",ℑ:"&imagpart;",Ì:"&Igrave;",Ī:"&Imacr;",ⅈ:"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;",Į:"&Iogon;",𝕀:"&Iopf;",Ι:"&Iota;",ℐ:"&imagline;",Ĩ:"&Itilde;",І:"&Iukcy;",Ï:"&Iuml;",Ĵ:"&Jcirc;",Й:"&Jcy;",𝔍:"&Jfr;",𝕁:"&Jopf;",𝒥:"&Jscr;",Ј:"&Jsercy;",Є:"&Jukcy;",Х:"&KHcy;",Ќ:"&KJcy;",Κ:"&Kappa;",Ķ:"&Kcedil;",К:"&Kcy;",𝔎:"&Kfr;",𝕂:"&Kopf;",𝒦:"&Kscr;",Љ:"&LJcy;","<":"&lt;",Ĺ:"&Lacute;",Λ:"&Lambda;","⟪":"&Lang;",ℒ:"&lagran;","↞":"&twoheadleftarrow;",Ľ:"&Lcaron;",Ļ:"&Lcedil;",Л:"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;",𝔏:"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;",Ŀ:"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;",𝕃:"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;",Ł:"&Lstrok;","≪":"&ll;","⤅":"&Map;",М:"&Mcy;"," ":"&MediumSpace;",ℳ:"&phmmat;",𝔐:"&Mfr;","∓":"&mp;",𝕄:"&Mopf;",Μ:"&Mu;",Њ:"&NJcy;",Ń:"&Nacute;",Ň:"&Ncaron;",Ņ:"&Ncedil;",Н:"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;",𝔑:"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;",ℕ:"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;",𝒩:"&Nscr;",Ñ:"&Ntilde;",Ν:"&Nu;",Œ:"&OElig;",Ó:"&Oacute;",Ô:"&Ocirc;",О:"&Ocy;",Ő:"&Odblac;",𝔒:"&Ofr;",Ò:"&Ograve;",Ō:"&Omacr;",Ω:"&ohm;",Ο:"&Omicron;",𝕆:"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;",𝒪:"&Oscr;",Ø:"&Oslash;",Õ:"&Otilde;","⨷":"&Otimes;",Ö:"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;",П:"&Pcy;",𝔓:"&Pfr;",Φ:"&Phi;",Π:"&Pi;","±":"&pm;",ℙ:"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;",𝒫:"&Pscr;",Ψ:"&Psi;",'"':"&quot;",𝔔:"&Qfr;",ℚ:"&rationals;",𝒬:"&Qscr;","⤐":"&drbkarow;","®":"&reg;",Ŕ:"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;",Ř:"&Rcaron;",Ŗ:"&Rcedil;",Р:"&Rcy;",ℜ:"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;",Ρ:"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;",ℝ:"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;",ℛ:"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;",Щ:"&SHCHcy;",Ш:"&SHcy;",Ь:"&SOFTcy;",Ś:"&Sacute;","⪼":"&Sc;",Š:"&Scaron;",Ş:"&Scedil;",Ŝ:"&Scirc;",С:"&Scy;",𝔖:"&Sfr;","↑":"&uparrow;",Σ:"&Sigma;","∘":"&compfn;",𝕊:"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;",𝒮:"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;",Þ:"&THORN;","™":"&trade;",Ћ:"&TSHcy;",Ц:"&TScy;","\t":"&Tab;",Τ:"&Tau;",Ť:"&Tcaron;",Ţ:"&Tcedil;",Т:"&Tcy;",𝔗:"&Tfr;","∴":"&therefore;",Θ:"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;",𝕋:"&Topf;","⃛":"&tdot;",𝒯:"&Tscr;",Ŧ:"&Tstrok;",Ú:"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;",Ў:"&Ubrcy;",Ŭ:"&Ubreve;",Û:"&Ucirc;",У:"&Ucy;",Ű:"&Udblac;",𝔘:"&Ufr;",Ù:"&Ugrave;",Ū:"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;",Ų:"&Uogon;",𝕌:"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;",ϒ:"&upsih;",Υ:"&Upsilon;",Ů:"&Uring;",𝒰:"&Uscr;",Ũ:"&Utilde;",Ü:"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;",В:"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;",𝔙:"&Vfr;",𝕍:"&Vopf;",𝒱:"&Vscr;","⊪":"&Vvdash;",Ŵ:"&Wcirc;","⋀":"&xwedge;",𝔚:"&Wfr;",𝕎:"&Wopf;",𝒲:"&Wscr;",𝔛:"&Xfr;",Ξ:"&Xi;",𝕏:"&Xopf;",𝒳:"&Xscr;",Я:"&YAcy;",Ї:"&YIcy;",Ю:"&YUcy;",Ý:"&Yacute;",Ŷ:"&Ycirc;",Ы:"&Ycy;",𝔜:"&Yfr;",𝕐:"&Yopf;",𝒴:"&Yscr;",Ÿ:"&Yuml;",Ж:"&ZHcy;",Ź:"&Zacute;",Ž:"&Zcaron;",З:"&Zcy;",Ż:"&Zdot;",Ζ:"&Zeta;",ℨ:"&zeetrf;",ℤ:"&integers;",𝒵:"&Zscr;",á:"&aacute;",ă:"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;",â:"&acirc;",а:"&acy;",æ:"&aelig;",𝔞:"&afr;",à:"&agrave;",ℵ:"&aleph;",α:"&alpha;",ā:"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;",ą:"&aogon;",𝕒:"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;",å:"&aring;",𝒶:"&ascr;","*":"&midast;",ã:"&atilde;",ä:"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;",б:"&bcy;","„":"&ldquor;","⦰":"&bemptyv;",β:"&beta;",ℶ:"&beth;","≬":"&twixt;",𝔟:"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;",𝕓:"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;",𝒷:"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;",ć:"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;",č:"&ccaron;",ç:"&ccedil;",ĉ:"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;",ċ:"&cdot;","⦲":"&cemptyv;","¢":"&cent;",𝔠:"&cfr;",ч:"&chcy;","✓":"&checkmark;",χ:"&chi;","○":"&cir;","⧃":"&cirE;",ˆ:"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;",𝕔:"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;",𝒸:"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;",ℸ:"&daleth;","‐":"&hyphen;","⤏":"&rBarr;",ď:"&dcaron;",д:"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;",δ:"&delta;","⦱":"&demptyv;","⥿":"&dfisht;",𝔡:"&dfr;","♦":"&diams;",ϝ:"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;",ђ:"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;",𝕕:"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;",𝒹:"&dscr;",ѕ:"&dscy;","⧶":"&dsol;",đ:"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;",џ:"&dzcy;","⟿":"&dzigrarr;",é:"&eacute;","⩮":"&easter;",ě:"&ecaron;","≖":"&eqcirc;",ê:"&ecirc;","≕":"&eqcolon;",э:"&ecy;",ė:"&edot;","≒":"&fallingdotseq;",𝔢:"&efr;","⪚":"&eg;",è:"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;",ℓ:"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;",ē:"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;",ŋ:"&eng;"," ":"&ensp;",ę:"&eogon;",𝕖:"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;",ε:"&epsilon;",ϵ:"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;",ℯ:"&escr;",η:"&eta;",ð:"&eth;",ë:"&euml;","€":"&euro;","!":"&excl;",ф:"&fcy;","♀":"&female;",ﬃ:"&ffilig;",ﬀ:"&fflig;",ﬄ:"&ffllig;",𝔣:"&ffr;",ﬁ:"&filig;",fj:"&fjlig;","♭":"&flat;",ﬂ:"&fllig;","▱":"&fltns;",ƒ:"&fnof;",𝕗:"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;",𝒻:"&fscr;","⪌":"&gtreqqless;",ǵ:"&gacute;",γ:"&gamma;","⪆":"&gtrapprox;",ğ:"&gbreve;",ĝ:"&gcirc;",г:"&gcy;",ġ:"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;",𝔤:"&gfr;",ℷ:"&gimel;",ѓ:"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;",𝕘:"&gopf;",ℊ:"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;",ъ:"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;",ℏ:"&plankv;",ĥ:"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;",𝔥:"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;",𝕙:"&hopf;","―":"&horbar;",𝒽:"&hscr;",ħ:"&hstrok;","⁃":"&hybull;",í:"&iacute;",î:"&icirc;",и:"&icy;",е:"&iecy;","¡":"&iexcl;",𝔦:"&ifr;",ì:"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;",ĳ:"&ijlig;",ī:"&imacr;",ı:"&inodot;","⊷":"&imof;",Ƶ:"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;",ё:"&iocy;",į:"&iogon;",𝕚:"&iopf;",ι:"&iota;","¿":"&iquest;",𝒾:"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;",ĩ:"&itilde;",і:"&iukcy;",ï:"&iuml;",ĵ:"&jcirc;",й:"&jcy;",𝔧:"&jfr;",ȷ:"&jmath;",𝕛:"&jopf;",𝒿:"&jscr;",ј:"&jsercy;",є:"&jukcy;",κ:"&kappa;",ϰ:"&varkappa;",ķ:"&kcedil;",к:"&kcy;",𝔨:"&kfr;",ĸ:"&kgreen;",х:"&khcy;",ќ:"&kjcy;",𝕜:"&kopf;",𝓀:"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;",ĺ:"&lacute;","⦴":"&laemptyv;",λ:"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;",ľ:"&lcaron;",ļ:"&lcedil;",л:"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;",𝔩:"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;",љ:"&ljcy;","⥫":"&llhard;","◺":"&lltri;",ŀ:"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;",𝕝:"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;",𝓁:"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;",ł:"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;",м:"&mcy;","—":"&mdash;",𝔪:"&mfr;","℧":"&mho;",µ:"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;",𝕞:"&mopf;",𝓂:"&mscr;",μ:"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;",ń:"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;",ŉ:"&napos;","♮":"&natural;","⩃":"&ncap;",ň:"&ncaron;",ņ:"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;",н:"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;",𝔫:"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;",њ:"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;",𝕟:"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;",𝓃:"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;",ñ:"&ntilde;",ν:"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;",ó:"&oacute;",ô:"&ocirc;",о:"&ocy;",ő:"&odblac;","⨸":"&odiv;","⦼":"&odsold;",œ:"&oelig;","⦿":"&ofcir;",𝔬:"&ofr;","˛":"&ogon;",ò:"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;",ō:"&omacr;",ω:"&omega;",ο:"&omicron;","⦶":"&omid;",𝕠:"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;",ℴ:"&oscr;",ª:"&ordf;",º:"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;",ø:"&oslash;","⊘":"&osol;",õ:"&otilde;","⨶":"&otimesas;",ö:"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;",п:"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;",𝔭:"&pfr;",φ:"&phi;",ϕ:"&varphi;","☎":"&phone;",π:"&pi;",ϖ:"&varpi;",ℎ:"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;",𝕡:"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;",𝓅:"&pscr;",ψ:"&psi;"," ":"&puncsp;",𝔮:"&qfr;",𝕢:"&qopf;","⁗":"&qprime;",𝓆:"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;",ŕ:"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;",ř:"&rcaron;",ŗ:"&rcedil;",р:"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;",𝔯:"&rfr;","⥬":"&rharul;",ρ:"&rho;",ϱ:"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;",𝕣:"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;",𝓇:"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;",ś:"&sacute;","⪴":"&scE;","⪸":"&succapprox;",š:"&scaron;",ş:"&scedil;",ŝ:"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;",с:"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;",𝔰:"&sfr;","♯":"&sharp;",щ:"&shchcy;",ш:"&shcy;","­":"&shy;",σ:"&sigma;",ς:"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;",ь:"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;",𝕤:"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;",𝓈:"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;",ß:"&szlig;","⌖":"&target;",τ:"&tau;",ť:"&tcaron;",ţ:"&tcedil;",т:"&tcy;","⌕":"&telrec;",𝔱:"&tfr;",θ:"&theta;",ϑ:"&vartheta;",þ:"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;",𝕥:"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;",𝓉:"&tscr;",ц:"&tscy;",ћ:"&tshcy;",ŧ:"&tstrok;","⥣":"&uHar;",ú:"&uacute;",ў:"&ubrcy;",ŭ:"&ubreve;",û:"&ucirc;",у:"&ucy;",ű:"&udblac;","⥾":"&ufisht;",𝔲:"&ufr;",ù:"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;",ū:"&umacr;",ų:"&uogon;",𝕦:"&uopf;",υ:"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;",ů:"&uring;","◹":"&urtri;",𝓊:"&uscr;","⋰":"&utdot;",ũ:"&utilde;",ü:"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;",в:"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;",𝔳:"&vfr;",𝕧:"&vopf;",𝓋:"&vscr;","⦚":"&vzigzag;",ŵ:"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;",℘:"&wp;",𝔴:"&wfr;",𝕨:"&wopf;",𝓌:"&wscr;",𝔵:"&xfr;",ξ:"&xi;","⋻":"&xnis;",𝕩:"&xopf;",𝓍:"&xscr;",ý:"&yacute;",я:"&yacy;",ŷ:"&ycirc;",ы:"&ycy;","¥":"&yen;",𝔶:"&yfr;",ї:"&yicy;",𝕪:"&yopf;",𝓎:"&yscr;",ю:"&yucy;",ÿ:"&yuml;",ź:"&zacute;",ž:"&zcaron;",з:"&zcy;",ż:"&zdot;",ζ:"&zeta;",𝔷:"&zfr;",ж:"&zhcy;","⇝":"&zigrarr;",𝕫:"&zopf;",𝓏:"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}}},642:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376}},726:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromCodePoint=String.fromCodePoint||function(e){return String.fromCharCode(Math.floor((e-65536)/1024)+55296,(e-65536)%1024+56320)},t.getCodePoint=String.prototype.codePointAt?function(e,t){return e.codePointAt(t)}:function(e,t){return 1024*(e.charCodeAt(t)-55296)+e.charCodeAt(t+1)-56320+65536},t.highSurrogateFrom=55296,t.highSurrogateTo=56319},999:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>a});var r=o(935);function n(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.client=new WebSocket(t),this.client.onerror=function(e){r.cM.error(e)}}var t,o;return t=e,(o=[{key:"onOpen",value:function(e){this.client.onopen=e}},{key:"onClose",value:function(e){this.client.onclose=e}},{key:"onMessage",value:function(e){this.client.onmessage=function(t){e(t.data)}}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()},428:(e,t,o)=>{"use strict";var r=o(919),n=o.n(r),a=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");const c=function(e){if("string"!=typeof e)throw new TypeError("Expected a `string`, got `".concat(typeof e,"`"));return e.replace(a,"")};var i=o(999),f=o(935),l=o(999),s=void 0!==l?void 0!==l.default?l.default:l:i.default,u=0,d=10,b=null,p=function(e,t,o){(b=new s(e)).onOpen((function(){u=0,void 0!==o&&(d=o)})),b.onClose((function(){if(0===u&&t.close(),b=null,u<d){var r=1e3*Math.pow(2,u)+100*Math.random();u+=1,f.cM.info("Trying to reconnect..."),setTimeout((function(){p(e,t,o)}),r)}})),b.onMessage((function(e){var o=JSON.parse(e);t[o.type]&&t[o.type](o.data,o.params)}))};const h=p;var m,g,v,y=o(636),w=o.n(y),k=o(111),x={reset:["transparent","transparent"],black:"181818",red:"E36049",green:"B3CB74",yellow:"FFD080",blue:"7CAFC2",magenta:"7FACCA",cyan:"C3C2EF",lightgrey:"EBE7E3",darkgrey:"6D7891"},q=[];function E(){m&&(document.body.removeChild(m),m=null,g=null)}function A(e,t){var o="warning"===e?"WARNING":"ERROR",r="";if("string"==typeof t)r+=t;else{var n=t.file||"",a=t.moduleName?-1!==t.moduleName.indexOf("!")?"".concat(t.moduleName.replace(/^(\s|\S)*!/,"")," (").concat(t.moduleName,")"):"".concat(t.moduleName):"",c=t.loc;o+="".concat(a||n?" in ".concat(a?"".concat(a).concat(n?" (".concat(n,")"):""):n).concat(c?" ".concat(c):""):""),r+=t.message||""}return{header:o,body:r}}function S(e,t,o){!function(e,t){g?e(g):(q.push(e),m||function(e){window.trustedTypes&&(v=window.trustedTypes.createPolicy(e||"webpack-dev-server#overlay",{createHTML:function(e){return e}})),(m=document.createElement("iframe")).id="webpack-dev-server-client-overlay",m.src="about:blank",m.style.position="fixed",m.style.left=0,m.style.top=0,m.style.right=0,m.style.bottom=0,m.style.width="100vw",m.style.height="100vh",m.style.border="none",m.style.zIndex=9999999999,m.onload=function(){(g=m.contentDocument.createElement("div")).id="webpack-dev-server-client-overlay-div",g.style.position="fixed",g.style.boxSizing="border-box",g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.width="100vw",g.style.height="100vh",g.style.backgroundColor="rgba(0, 0, 0, 0.85)",g.style.color="#E8E8E8",g.style.fontFamily="Menlo, Consolas, monospace",g.style.fontSize="large",g.style.padding="2rem",g.style.lineHeight="1.2",g.style.whiteSpace="pre-wrap",g.style.overflow="auto";var e=document.createElement("span");e.innerText="Compiled with problems:";var t=document.createElement("button");t.innerText="X",t.style.background="transparent",t.style.border="none",t.style.fontSize="20px",t.style.fontWeight="bold",t.style.color="white",t.style.cursor="pointer",t.style.cssFloat="right",t.style.styleFloat="right",t.addEventListener("click",(function(){E()})),g.appendChild(e),g.appendChild(t),g.appendChild(document.createElement("br")),g.appendChild(document.createElement("br")),m.contentDocument.body.appendChild(g),q.forEach((function(e){e(g)})),q=[],m.onload=null},document.body.appendChild(m)}(t))}((function(){t.forEach((function(t){var o=document.createElement("div"),r=document.createElement("span"),n=A(e,t),a=n.header,c=n.body;r.innerText=a,r.style.color="#".concat(x.red);var i=w()((0,k.encode)(c)),f=document.createElement("div");f.innerHTML=v?v.createHTML(i):i,o.appendChild(r),o.appendChild(document.createElement("br")),o.appendChild(document.createElement("br")),o.appendChild(f),o.appendChild(document.createElement("br")),o.appendChild(document.createElement("br")),g.appendChild(o)}))}),o)}w().setColors(x);const $=function(e,t){"undefined"==typeof self||"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope||self.postMessage({type:"webpack".concat(e),data:t},"*")};var C=o(208),O=o.n(C);const _=function(e,t){var o=e.hot,r=e.liveReload;if(!t.isUnloading){var n=t.currentHash,a=t.previousHash;if(!(n.indexOf(a)>=0)){var c=self.location.search.toLowerCase(),i=-1===c.indexOf("webpack-dev-server-hot=false"),l=-1===c.indexOf("webpack-dev-server-live-reload=false");if(o&&i)f.cM.info("App hot update..."),O().emit("webpackHotUpdate",t.currentHash),"undefined"!=typeof self&&self.window&&self.postMessage("webpackHotUpdate".concat(t.currentHash),"*");else if(r&&l)var s=self,u=self.setInterval((function(){("about:"!==s.location.protocol||(s=s.parent).parent===s)&&function(e,t){clearInterval(t),f.cM.info("App updated. Reloading..."),e.location.reload()}(s,u)}))}}};function D(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function L(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var T={isUnloading:!1,currentHash:o.h()},z={hot:!1,liveReload:!1,progress:!1,overlay:!1},j=function(e){var t={};if("string"==typeof e&&""!==e)for(var o=e.slice(1).split("&"),r=0;r<o.length;r++){var n=o[r].split("=");t[n[0]]=decodeURIComponent(n[1])}else{var a,c=function(){if(document.currentScript)return document.currentScript.getAttribute("src");var e=document.scripts||[],t=Array.prototype.filter.call(e,(function(e){return e.getAttribute("src")}));if(t.length>0)return t[t.length-1].getAttribute("src");throw new Error("[webpack-dev-server] Failed to get current script source.")}();try{a=new URL(c,self.location.href)}catch(e){}a&&((t=a).fromCurrentScript=!0)}return t}("?protocol=ws%3A&hostname=0.0.0.0&port=8081&pathname=%2Fws&logging=info&overlay=false&reconnect=10&hot=true&live-reload=true"),R={"Hot Module Replacement":!1,"Live Reloading":!1,Progress:!1,Overlay:!1};if("true"===j.hot&&(z.hot=!0,R["Hot Module Replacement"]=!0),"true"===j["live-reload"]&&(z.liveReload=!0,R["Live Reloading"]=!0),"true"===j.progress&&(z.progress=!0,R.Progress=!0),j.overlay){try{z.overlay=JSON.parse(j.overlay)}catch(e){f.cM.error("Error parsing overlay options from resource query:",e)}"object"==typeof z.overlay&&(z.overlay=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?D(Object(o),!0).forEach((function(t){L(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):D(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({errors:!0,warnings:!0},z.overlay)),R.Overlay=!0}function U(e){n().setLogLevel("verbose"===e||"log"===e?"info":e),(0,f.Ub)(e)}j.logging&&(z.logging=j.logging),void 0!==j.reconnect&&(z.reconnect=Number(j.reconnect)),z.logging&&U(z.logging),(0,f.Y_)(R),self.addEventListener("beforeunload",(function(){T.isUnloading=!0}));var I={hot:function(){"false"!==j.hot&&(z.hot=!0)},liveReload:function(){"false"!==j["live-reload"]&&(z.liveReload=!0)},invalid:function(){f.cM.info("App updated. Recompiling..."),z.overlay&&E(),$("Invalid")},hash:function(e){T.previousHash=T.currentHash,T.currentHash=e},logging:U,overlay:function(e){"undefined"!=typeof document&&(z.overlay=e)},reconnect:function(e){"false"!==j.reconnect&&(z.reconnect=e)},progress:function(e){z.progress=e},"progress-update":function(e){z.progress&&f.cM.info("".concat(e.pluginName?"[".concat(e.pluginName,"] "):"").concat(e.percent,"% - ").concat(e.msg,".")),$("Progress",e)},"still-ok":function(){f.cM.info("Nothing changed."),z.overlay&&E(),$("StillOk")},ok:function(){$("Ok"),z.overlay&&E(),_(z,T)},"content-changed":function(e){f.cM.info("".concat(e?'"'.concat(e,'"'):"Content"," from static directory was changed. Reloading...")),self.location.reload()},"static-changed":function(e){f.cM.info("".concat(e?'"'.concat(e,'"'):"Content"," from static directory was changed. Reloading...")),self.location.reload()},warnings:function(e,t){f.cM.warn("Warnings while compiling.");var o=e.map((function(e){var t=A("warning",e),o=t.header,r=t.body;return"".concat(o,"\n").concat(c(r))}));$("Warnings",o);for(var r=0;r<o.length;r++)f.cM.warn(o[r]);("boolean"==typeof z.overlay?z.overlay:z.overlay&&z.overlay.warnings)&&S("warning",e,"object"==typeof z.overlay&&z.overlay.trustedTypesPolicyName||null),t&&t.preventReloading||_(z,T)},errors:function(e){f.cM.error("Errors while compiling. Reload prevented.");var t=e.map((function(e){var t=A("error",e),o=t.header,r=t.body;return"".concat(o,"\n").concat(c(r))}));$("Errors",t);for(var o=0;o<t.length;o++)f.cM.error(t[o]);("boolean"==typeof z.overlay?z.overlay:z.overlay&&z.overlay.errors)&&S("error",e,"object"==typeof z.overlay&&z.overlay.trustedTypesPolicyName||null)},error:function(e){f.cM.error(e)},close:function(){f.cM.info("Disconnected!"),z.overlay&&E(),$("Close")}};h(function(e){var t=e.hostname,o="0.0.0.0"===t||"::"===t||"[::]"===t;o&&self.location.hostname&&0===self.location.protocol.indexOf("http")&&(t=self.location.hostname);var r=e.protocol||self.location.protocol;("auto:"===r||t&&o&&"https:"===self.location.protocol)&&(r=self.location.protocol),r=r.replace(/^(?:http|.+-extension|file)/i,"ws");var n="";e.username&&(n=e.username,e.password&&(n=n.concat(":",e.password)));var a=(t||self.location.hostname||"localhost").replace(/^\[(.*)\]$/,"$1"),c=e.port;c&&"0"!==c||(c=self.location.port);var i="/ws";return e.pathname&&!e.fromCurrentScript&&(i=e.pathname),function(e){var t=e.protocol||"";t&&":"!==t.substr(-1)&&(t+=":");var o=e.auth||"";o&&(o=(o=encodeURIComponent(o)).replace(/%3A/i,":"),o+="@");var r="";e.hostname&&(r=o+(-1===e.hostname.indexOf(":")?e.hostname:"[".concat(e.hostname,"]")),e.port&&(r+=":".concat(e.port)));var n=e.pathname||"";e.slashes?(r="//".concat(r||""),n&&"/"!==n.charAt(0)&&(n="/".concat(n))):r||(r="");var a=e.search||"";a&&"?"!==a.charAt(0)&&(a="?".concat(a));var c=e.hash||"";return c&&"#"!==c.charAt(0)&&(c="#".concat(c)),n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})),a=a.replace("#","%23"),"".concat(t).concat(r).concat(n).concat(a).concat(c)}({protocol:r,auth:n,hostname:a,port:c,pathname:i,slashes:!0})}(j),I,z.reconnect)},503:(e,t)=>{!function(){"use strict";var e={"./client-src/modules/logger/SyncBailHookFake.js":function(e){e.exports=function(){return{call:function(){}}}},"./node_modules/webpack/lib/logging/Logger.js":function(e,t){function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if(void 0!==("undefined"!=typeof Symbol?Symbol:function(e){return e})&&null!=e[("undefined"!=typeof Symbol?Symbol:function(e){return e}).iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function n(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=Object.freeze({error:"error",warn:"warn",info:"info",log:"log",debug:"debug",trace:"trace",group:"group",groupCollapsed:"groupCollapsed",groupEnd:"groupEnd",profile:"profile",profileEnd:"profileEnd",time:"time",clear:"clear",status:"status"});t.LogType=a;var c=("undefined"!=typeof Symbol?Symbol:function(e){return e})("webpack logger raw log method"),i=("undefined"!=typeof Symbol?Symbol:function(e){return e})("webpack logger times"),f=("undefined"!=typeof Symbol?Symbol:function(e){return e})("webpack logger aggregated times"),l=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this[c]=t,this.getChildLogger=o}var t,r;return t=e,r=[{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.error,t)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.warn,t)}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.info,t)}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.log,t)}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.debug,t)}},{key:"assert",value:function(e){if(!e){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];this[c](a.error,o)}}},{key:"trace",value:function(){this[c](a.trace,["Trace"])}},{key:"clear",value:function(){this[c](a.clear)}},{key:"status",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.status,t)}},{key:"group",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.group,t)}},{key:"groupCollapsed",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.groupCollapsed,t)}},{key:"groupEnd",value:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];this[c](a.groupEnd,t)}},{key:"profile",value:function(e){this[c](a.profile,[e])}},{key:"profileEnd",value:function(e){this[c](a.profileEnd,[e])}},{key:"time",value:function(e){this[i]=this[i]||new Map,this[i].set(e,process.hrtime())}},{key:"timeLog",value:function(e){var t=this[i]&&this[i].get(e);if(!t)throw new Error("No such label '".concat(e,"' for WebpackLogger.timeLog()"));var r=process.hrtime(t);this[c](a.time,[e].concat(o(r)))}},{key:"timeEnd",value:function(e){var t=this[i]&&this[i].get(e);if(!t)throw new Error("No such label '".concat(e,"' for WebpackLogger.timeEnd()"));var r=process.hrtime(t);this[i].delete(e),this[c](a.time,[e].concat(o(r)))}},{key:"timeAggregate",value:function(e){var t=this[i]&&this[i].get(e);if(!t)throw new Error("No such label '".concat(e,"' for WebpackLogger.timeAggregate()"));var o=process.hrtime(t);this[i].delete(e),this[f]=this[f]||new Map;var r=this[f].get(e);void 0!==r&&(o[1]+r[1]>1e9?(o[0]+=r[0]+1,o[1]=o[1]-1e9+r[1]):(o[0]+=r[0],o[1]+=r[1])),this[f].set(e,o)}},{key:"timeAggregateEnd",value:function(e){if(void 0!==this[f]){var t=this[f].get(e);void 0!==t&&(this[f].delete(e),this[c](a.time,[e].concat(o(t))))}}}],r&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Logger=l},"./node_modules/webpack/lib/logging/createConsoleLogger.js":function(e,t,o){function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if(void 0!==("undefined"!=typeof Symbol?Symbol:function(e){return e})&&null!=e[("undefined"!=typeof Symbol?Symbol:function(e){return e}).iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var a=o("./node_modules/webpack/lib/logging/Logger.js").LogType,c=function(e){if("string"==typeof e){var t=new RegExp("[\\\\/]".concat(e.replace(/[-[\]{}()*+?.\\^$|]/g,"\\$&"),"([\\\\/]|$|!|\\?)"));return function(e){return t.test(e)}}return e&&"object"==typeof e&&"function"==typeof e.test?function(t){return e.test(t)}:"function"==typeof e?e:"boolean"==typeof e?function(){return e}:void 0},i={none:6,false:6,error:5,warn:4,info:3,log:2,true:2,verbose:1};e.exports=function(e){var t=e.level,o=void 0===t?"info":t,n=e.debug,f=void 0!==n&&n,l=e.console,s="boolean"==typeof f?[function(){return f}]:[].concat(f).map(c),u=i["".concat(o)]||0;return function(e,t,o){var n=function(){return Array.isArray(o)?o.length>0&&"string"==typeof o[0]?["[".concat(e,"] ").concat(o[0])].concat(r(o.slice(1))):["[".concat(e,"]")].concat(r(o)):[]},c=s.some((function(t){return t(e)}));switch(t){case a.debug:if(!c)return;"function"==typeof l.debug?l.debug.apply(l,r(n())):l.log.apply(l,r(n()));break;case a.log:if(!c&&u>i.log)return;l.log.apply(l,r(n()));break;case a.info:if(!c&&u>i.info)return;l.info.apply(l,r(n()));break;case a.warn:if(!c&&u>i.warn)return;l.warn.apply(l,r(n()));break;case a.error:if(!c&&u>i.error)return;l.error.apply(l,r(n()));break;case a.trace:if(!c)return;l.trace();break;case a.groupCollapsed:if(!c&&u>i.log)return;if(!c&&u>i.verbose){"function"==typeof l.groupCollapsed?l.groupCollapsed.apply(l,r(n())):l.log.apply(l,r(n()));break}case a.group:if(!c&&u>i.log)return;"function"==typeof l.group?l.group.apply(l,r(n())):l.log.apply(l,r(n()));break;case a.groupEnd:if(!c&&u>i.log)return;"function"==typeof l.groupEnd&&l.groupEnd();break;case a.time:if(!c&&u>i.log)return;var f=1e3*o[1]+o[2]/1e6,d="[".concat(e,"] ").concat(o[0],": ").concat(f," ms");"function"==typeof l.logTime?l.logTime(d):l.log(d);break;case a.profile:"function"==typeof l.profile&&l.profile.apply(l,r(n()));break;case a.profileEnd:"function"==typeof l.profileEnd&&l.profileEnd.apply(l,r(n()));break;case a.clear:if(!c&&u>i.log)return;"function"==typeof l.clear&&l.clear();break;case a.status:if(!c&&u>i.info)return;"function"==typeof l.status?0===o.length?l.status():l.status.apply(l,r(n())):0!==o.length&&l.info.apply(l,r(n()));break;default:throw new Error("Unexpected LogType ".concat(t))}}}},"./node_modules/webpack/lib/logging/runtime.js":function(e,t,o){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},r.apply(this,arguments)}var n=o("./client-src/modules/logger/SyncBailHookFake.js"),a=o("./node_modules/webpack/lib/logging/Logger.js").Logger,c=o("./node_modules/webpack/lib/logging/createConsoleLogger.js"),i={level:"info",debug:!1,console},f=c(i);t.getLogger=function(e){return new a((function(o,r){void 0===t.hooks.log.call(e,o,r)&&f(e,o,r)}),(function(o){return t.getLogger("".concat(e,"/").concat(o))}))},t.configureDefaultLogger=function(e){r(i,e),f=c(i)},t.hooks={log:new n(["origin","type","args"])}}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){r.r(n),r.d(n,{default:function(){return e}});var e=r("./node_modules/webpack/lib/logging/runtime.js")}();var a=t;for(var c in n)a[c]=n[c];n.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})}()},935:(e,t,o)=>{"use strict";o.d(t,{Ub:()=>a,Y_:()=>i,cM:()=>c});var r=o(503),n=o.n(r);function a(e){n().configureDefaultLogger({level:e})}a("info");var c=n().getLogger("webpack-dev-server"),i=function(e){var t=Object.keys(e);if(e&&0!==t.length){for(var o="Server started:",r=0;r<t.length;r++){var n=t[r];o+=" ".concat(n," ").concat(e[n]?"enabled":"disabled",",")}o=o.slice(0,-1).concat("."),c.info(o)}}},952:(e,t,o)=>{var r,n=function(){return r.indexOf(o.h())>=0},a=o(919),c=function t(){e.hot.check(!0).then((function(e){if(!e)return a("warning","[HMR] Cannot find update. "+("undefined"!=typeof window?"Need to do a full reload!":"Please reload manually!")),a("warning","[HMR] (Probably because of restarting the webpack-dev-server)"),void("undefined"!=typeof window&&window.location.reload());n()||t(),o(374)(e,e),n()&&a("info","[HMR] App is up to date.")})).catch((function(t){var o=e.hot.status();["abort","fail"].indexOf(o)>=0?(a("warning","[HMR] Cannot apply update. "+("undefined"!=typeof window?"Need to do a full reload!":"Please reload manually!")),a("warning","[HMR] "+a.formatError(t)),"undefined"!=typeof window&&window.location.reload()):a("warning","[HMR] Update failed: "+a.formatError(t))}))};o(208).on("webpackHotUpdate",(function(t){r=t,n()||"idle"!==e.hot.status()||(a("info","[HMR] Checking for updates on the server..."),c())})),a("info","[HMR] Waiting for update signal from WDS...")},208:(e,t,o)=>{var r=o(187);e.exports=new r},374:(e,t,o)=>{e.exports=function(e,t){var r=e.filter((function(e){return t&&t.indexOf(e)<0})),n=o(919);r.length>0&&(n("warning","[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),r.forEach((function(e){n("warning","[HMR]  - "+e)}))),t&&0!==t.length?(n("info","[HMR] Updated modules:"),t.forEach((function(e){if("string"==typeof e&&-1!==e.indexOf("!")){var t=e.split("!");n.groupCollapsed("info","[HMR]  - "+t.pop()),n("info","[HMR]  - "+e),n.groupEnd("info")}else n("info","[HMR]  - "+e)})),t.every((function(e){return"number"==typeof e}))&&n("info",'[HMR] Consider using the optimization.moduleIds: "named" for module names.')):n("info","[HMR] Nothing hot updated.")}},919:e=>{var t="info";function o(){}function r(e){return"info"===t&&"info"===e||["info","warning"].indexOf(t)>=0&&"warning"===e||["info","warning","error"].indexOf(t)>=0&&"error"===e}function n(e){return function(t,o){r(t)&&e(o)}}e.exports=function(e,t){r(e)&&("info"===e?console.log(t):"warning"===e?console.warn(t):"error"===e&&console.error(t))};var a=console.group||o,c=console.groupCollapsed||o,i=console.groupEnd||o;e.exports.group=n(a),e.exports.groupCollapsed=n(c),e.exports.groupEnd=n(i),e.exports.setLogLevel=function(e){t=e},e.exports.formatError=function(e){var t=e.message,o=e.stack;return o?o.indexOf(t)<0?t+"\n"+o:o:t}}},r={};function n(e){var t=r[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var a=r[e]={exports:{}};try{var c={id:e,module:a,factory:o[e],require:n};n.i.forEach((function(e){e(c)})),a=c.module,c.factory.call(a.exports,a,a.exports,c.require)}catch(e){throw a.error=e,e}return a.exports}n.m=o,n.c=r,n.i=[],n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.hu=e=>e+"."+n.h()+".hot-update.js",n.hmrF=()=>"main."+n.h()+".hot-update.json",n.h=()=>"a260f5f1cc1585de2fe7",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@meveo-org/mv-select:",n.l=(o,r,a,c)=>{if(e[o])e[o].push(r);else{var i,f;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[r];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),f&&document.head.appendChild(i)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,t,o,r={},a=n.c,c=[],i=[],f="idle",l=0,s=[];function u(e){f=e;for(var t=[],o=0;o<i.length;o++)t[o]=i[o].call(null,e);return Promise.all(t)}function d(){0==--l&&u("ready").then((function(){if(0===l){var e=s;s=[];for(var t=0;t<e.length;t++)e[t]()}}))}function b(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return u("check").then(n.hmrM).then((function(o){return o?u("prepare").then((function(){var r=[];return t=[],Promise.all(Object.keys(n.hmrC).reduce((function(e,a){return n.hmrC[a](o.c,o.r,o.m,e,t,r),e}),[])).then((function(){return t=function(){return e?h(e):u("ready").then((function(){return r}))},0===l?t():new Promise((function(e){s.push((function(){e(t())}))}));var t}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==f?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+f+")")})):h(e)}function h(e){e=e||{},m();var r=t.map((function(t){return t(e)}));t=void 0;var n=r.map((function(e){return e.error})).filter(Boolean);if(n.length>0)return u("abort").then((function(){throw n[0]}));var a=u("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var c,i=u("apply"),f=function(e){c||(c=e)},l=[];return r.forEach((function(e){if(e.apply){var t=e.apply(f);if(t)for(var o=0;o<t.length;o++)l.push(t[o])}})),Promise.all([a,i]).then((function(){return c?u("fail").then((function(){throw c})):o?h(e).then((function(e){return l.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return l}))}))}function m(){if(o)return t||(t=[]),Object.keys(n.hmrI).forEach((function(e){o.forEach((function(o){n.hmrI[e](o,t)}))})),o=void 0,!0}n.hmrD=r,n.i.push((function(s){var h,m,g,v,y=s.module,w=function(t,o){var r=a[o];if(!r)return t;var n=function(n){if(r.hot.active){if(a[n]){var i=a[n].parents;-1===i.indexOf(o)&&i.push(o)}else c=[o],e=n;-1===r.children.indexOf(n)&&r.children.push(n)}else console.warn("[HMR] unexpected require("+n+") from disposed module "+o),c=[];return t(n)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(o){t[e]=o}}};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&"e"!==s&&Object.defineProperty(n,s,i(s));return n.e=function(e){return function(e){switch(f){case"ready":u("prepare");case"prepare":return l++,e.then(d,d),e;default:return e}}(t.e(e))},n}(s.require,s.id);y.hot=(h=s.id,m=y,v={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==h,_requireSelf:function(){c=m.parents.slice(),e=g?void 0:h,n(h)},active:!0,accept:function(e,t,o){if(void 0===e)v._selfAccepted=!0;else if("function"==typeof e)v._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)v._acceptedDependencies[e[r]]=t||function(){},v._acceptedErrorHandlers[e[r]]=o;else v._acceptedDependencies[e]=t||function(){},v._acceptedErrorHandlers[e]=o},decline:function(e){if(void 0===e)v._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)v._declinedDependencies[e[t]]=!0;else v._declinedDependencies[e]=!0},dispose:function(e){v._disposeHandlers.push(e)},addDisposeHandler:function(e){v._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=v._disposeHandlers.indexOf(e);t>=0&&v._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":t=[],Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](h,t)})),u("ready");break;case"ready":Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](h,t)}));break;case"prepare":case"check":case"dispose":case"apply":(o=o||[]).push(h)}},check:b,apply:p,status:function(e){if(!e)return f;i.push(e)},addStatusHandler:function(e){i.push(e)},removeStatusHandler:function(e){var t=i.indexOf(e);t>=0&&i.splice(t,1)},data:r[h]},e=void 0,v),y.parents=c,y.children=[],c=[],s.require=w})),n.hmrC={},n.hmrI={}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e,t,o,r,a,c=n.hmrS_jsonp=n.hmrS_jsonp||{179:0},i={};function f(t,o){return e=o,new Promise(((e,o)=>{i[t]=e;var r=n.p+n.hu(t),a=new Error;n.l(r,(e=>{if(i[t]){i[t]=void 0;var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;a.message="Loading hot update chunk "+t+" failed.\n("+r+": "+n+")",a.name="ChunkLoadError",a.type=r,a.request=n,o(a)}}))}))}function l(e){function i(e){for(var t=[e],o={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),c=a.id,i=a.chain,l=n.c[c];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var s=0;s<l.parents.length;s++){var u=l.parents[s],d=n.c[u];if(d){if(d.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([u]),moduleId:c,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[c]?(o[u]||(o[u]=[]),f(o[u],[c])):(delete o[u],t.push(u),r.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:o}}function f(e,t){for(var o=0;o<t.length;o++){var r=t[o];-1===e.indexOf(r)&&e.push(r)}}n.f&&delete n.f.jsonpHmr,t=void 0;var l={},s=[],u={},d=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var b in o)if(n.o(o,b)){var p,h=o[b],m=!1,g=!1,v=!1,y="";switch((p=h?i(b):{type:"disposed",moduleId:b}).chain&&(y="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":e.onDeclined&&e.onDeclined(p),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+p.moduleId+y));break;case"declined":e.onDeclined&&e.onDeclined(p),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+y));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(p),e.ignoreUnaccepted||(m=new Error("Aborted because "+b+" is not accepted"+y));break;case"accepted":e.onAccepted&&e.onAccepted(p),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(p),v=!0;break;default:throw new Error("Unexception type "+p.type)}if(m)return{error:m};if(g)for(b in u[b]=h,f(s,p.outdatedModules),p.outdatedDependencies)n.o(p.outdatedDependencies,b)&&(l[b]||(l[b]=[]),f(l[b],p.outdatedDependencies[b]));v&&(f(s,[p.moduleId]),u[b]=d)}o=void 0;for(var w,k=[],x=0;x<s.length;x++){var q=s[x],E=n.c[q];E&&(E.hot._selfAccepted||E.hot._main)&&u[q]!==d&&!E.hot._selfInvalidated&&k.push({module:q,require:E.hot._requireSelf,errorHandler:E.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete c[e]})),r=void 0;for(var t,o=s.slice();o.length>0;){var a=o.pop(),i=n.c[a];if(i){var f={},u=i.hot._disposeHandlers;for(x=0;x<u.length;x++)u[x].call(null,f);for(n.hmrD[a]=f,i.hot.active=!1,delete n.c[a],delete l[a],x=0;x<i.children.length;x++){var d=n.c[i.children[x]];d&&(e=d.parents.indexOf(a))>=0&&d.parents.splice(e,1)}}}for(var b in l)if(n.o(l,b)&&(i=n.c[b]))for(w=l[b],x=0;x<w.length;x++)t=w[x],(e=i.children.indexOf(t))>=0&&i.children.splice(e,1)},apply:function(t){for(var o in u)n.o(u,o)&&(n.m[o]=u[o]);for(var r=0;r<a.length;r++)a[r](n);for(var c in l)if(n.o(l,c)){var i=n.c[c];if(i){w=l[c];for(var f=[],d=[],b=[],p=0;p<w.length;p++){var h=w[p],m=i.hot._acceptedDependencies[h],g=i.hot._acceptedErrorHandlers[h];if(m){if(-1!==f.indexOf(m))continue;f.push(m),d.push(g),b.push(h)}}for(var v=0;v<f.length;v++)try{f[v].call(null,w)}catch(o){if("function"==typeof d[v])try{d[v](o,{moduleId:c,dependencyId:b[v]})}catch(r){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:b[v],error:r,originalError:o}),e.ignoreErrored||(t(r),t(o))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:b[v],error:o}),e.ignoreErrored||t(o)}}}for(var y=0;y<k.length;y++){var x=k[y],q=x.module;try{x.require(q)}catch(o){if("function"==typeof x.errorHandler)try{x.errorHandler(o,{moduleId:q,module:n.c[q]})}catch(r){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:q,error:r,originalError:o}),e.ignoreErrored||(t(r),t(o))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:q,error:o}),e.ignoreErrored||t(o)}}return s}}}self.webpackHotUpdate_meveo_org_mv_select=(t,r,c)=>{for(var f in r)n.o(r,f)&&(o[f]=r[f],e&&e.push(f));c&&a.push(c),i[t]&&(i[t](),i[t]=void 0)},n.hmrI.jsonp=function(e,t){o||(o={},a=[],r=[],t.push(l)),n.o(o,e)||(o[e]=n.m[e])},n.hmrC.jsonp=function(e,i,s,u,d,b){d.push(l),t={},r=i,o=s.reduce((function(e,t){return e[t]=!1,e}),{}),a=[],e.forEach((function(e){n.o(c,e)&&void 0!==c[e]?(u.push(f(e,b)),t[e]=!0):t[e]=!1})),n.f&&(n.f.jsonpHmr=function(e,o){t&&n.o(t,e)&&!t[e]&&(o.push(f(e)),t[e]=!0)})},n.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(n.p+n.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),n(428),n(952),n(564)})();