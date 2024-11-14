export const id=7785;export const ids=[7785];export const modules={79051:(e,t,o)=>{o.d(t,{d:()=>i});const i=e=>e.stopPropagation()},32920:(e,t,o)=>{o.d(t,{l:()=>i});const i=async e=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},77372:(e,t,o)=>{var i=o(36312),r=o(72606),d=o(50289),a=o(29818),l=o(49141);(0,i.A)([(0,a.EM)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[l.R,d.AH`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),r.$)},31979:(e,t,o)=>{var i=o(36312),r=o(68689),d=(o(89655),o(16891),o(50289)),a=o(29818),l=o(94100),s=o(34897),n=o(79051);const h={key:"Mod-s",run:e=>((0,s.r)(e.dom,"editor-save"),!0)},c=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,i.A)([(0,a.EM)("ha-code-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"linewrap",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"error",value:()=>!1},{kind:"field",decorators:[(0,a.wk)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.A)(i,"connectedCallback",this,3)([]),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",n.d),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.A)(i,"disconnectedCallback",this,3)([]),this.removeEventListener("keydown",n.d),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){this._loadedCodeMirror??=await Promise.all([o.e(1060),o.e(3214),o.e(1449)]).then(o.bind(o,61449)),(0,r.A)(i,"scheduleUpdate",this,3)([])}},{kind:"method",key:"update",value:function(e){if((0,r.A)(i,"update",this,3)([e]),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:[this._loadedCodeMirror.langCompartment.reconfigure(this._mode),this._loadedCodeMirror.foldingCompartment.reconfigure(this._getFoldingExtensions())]}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("linewrap")&&t.push({effects:this._loadedCodeMirror.linewrapCompartment.reconfigure(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[])}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.indentationMarkers({thickness:0,activeThickness:1,colors:{activeLight:"var(--secondary-text-color)",activeDark:"var(--secondary-text-color)"}}),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,h]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.linewrapCompartment.of(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[]),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate),this._loadedCodeMirror.foldingCompartment.of(this._getFoldingExtensions())];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:()=>(0,l.A)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=this._getStates(this.hass.states);return o&&o.length?{from:Number(t.from),options:o,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=[],this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:c})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=await this._getIconItems();return{from:Number(t.from),options:o,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,s.r)(this,"value-changed",{value:this._value}))}}},{kind:"field",key:"_getFoldingExtensions",value(){return()=>"yaml"===this.mode?[this._loadedCodeMirror.foldGutter(),this._loadedCodeMirror.foldingOnIndent]:[]}},{kind:"get",static:!0,key:"styles",value:function(){return d.AH`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}}]}}),d.mN)},31511:(e,t,o)=>{var i=o(36312),r=o(50289),d=o(29818);(0,i.A)([(0,d.EM)("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return r.qy`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>r.AH`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px;padding-inline-start:16px;padding-inline-end:16px}`}]}}),r.WF)},87785:(e,t,o)=>{o.r(t),o.d(t,{HaObjectSelector:()=>s});var i=o(36312),r=o(68689),d=o(50289),a=o(29818),l=o(34897);o(57641),o(31511);let s=(0,i.A)([(0,a.EM)("ha-selector-object")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,a.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,a.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,a.P)("ha-yaml-editor",!0)],key:"_yamlEditor",value:void 0},{kind:"field",key:"_valueChangedFromChild",value:()=>!1},{kind:"method",key:"render",value:function(){return d.qy`<ha-yaml-editor .hass="${this.hass}" .readonly="${this.disabled}" .label="${this.label}" .required="${this.required}" .placeholder="${this.placeholder}" .defaultValue="${this.value}" @value-changed="${this._handleChange}"></ha-yaml-editor> ${this.helper?d.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"updated",value:function(e){(0,r.A)(o,"updated",this,3)([e]),e.has("value")&&!this._valueChangedFromChild&&this._yamlEditor.setValue(this.value),this._valueChangedFromChild=!1}},{kind:"method",key:"_handleChange",value:function(e){this._valueChangedFromChild=!0;const t=e.target.value;e.target.isValid&&this.value!==t&&(0,l.r)(this,"value-changed",{value:t})}}]}}),d.WF)},57641:(e,t,o)=>{var i=o(36312),r=o(68689),d=o(51431),a=o(50289),l=o(29818),s=o(34897),n=o(55321),h=(o(31979),o(18589)),c=o(32920);o(77372);(0,i.A)([(0,l.EM)("ha-yaml-editor")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"yamlSchema",value:()=>d.my},{kind:"field",decorators:[(0,l.MZ)()],key:"defaultValue",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"isValid",value:()=>!0},{kind:"field",decorators:[(0,l.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"autoUpdate",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"copyClipboard",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"hasExtraActions",value:()=>!1},{kind:"field",decorators:[(0,l.wk)()],key:"_yaml",value:()=>""},{kind:"field",decorators:[(0,l.P)("ha-code-editor")],key:"_codeEditor",value:void 0},{kind:"method",key:"setValue",value:function(e){try{this._yaml=(e=>{if("object"!=typeof e||null===e)return!1;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0})(e)?"":(0,d.Bh)(e,{schema:this.yamlSchema,quotingType:'"',noRefs:!0})}catch(t){console.error(t,e),alert(`There was an error converting to YAML: ${t}`)}}},{kind:"method",key:"firstUpdated",value:function(){void 0!==this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"willUpdate",value:function(e){(0,r.A)(o,"willUpdate",this,3)([e]),this.autoUpdate&&e.has("value")&&this.setValue(this.value)}},{kind:"method",key:"focus",value:function(){this._codeEditor?.codemirror&&this._codeEditor?.codemirror.focus()}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?a.s6:a.qy` ${this.label?a.qy`<p>${this.label}${this.required?" *":""}</p>`:a.s6} <ha-code-editor .hass="${this.hass}" .value="${this._yaml}" .readOnly="${this.readOnly}" mode="yaml" autocomplete-entities autocomplete-icons .error="${!1===this.isValid}" @value-changed="${this._onChange}" dir="ltr"></ha-code-editor> ${this.copyClipboard||this.hasExtraActions?a.qy` <div class="card-actions"> ${this.copyClipboard?a.qy` <ha-button @click="${this._copyYaml}"> ${this.hass.localize("ui.components.yaml-editor.copy_to_clipboard")} </ha-button> `:a.s6} <slot name="extra-actions"></slot> </div> `:a.s6} `}},{kind:"method",key:"_onChange",value:function(e){let t;e.stopPropagation(),this._yaml=e.detail.value;let o=!0;if(this._yaml)try{t=(0,d.Hh)(this._yaml,{schema:this.yamlSchema})}catch(e){o=!1}else t={};this.value=t,this.isValid=o,(0,s.r)(this,"value-changed",{value:t,isValid:o})}},{kind:"get",key:"yaml",value:function(){return this._yaml}},{kind:"method",key:"_copyYaml",value:async function(){this.yaml&&(await(0,c.l)(this.yaml),(0,h.P)(this,{message:this.hass.localize("ui.common.copied_clipboard")}))}},{kind:"get",static:!0,key:"styles",value:function(){return[n.RF,a.AH`.card-actions{border-radius:var(--actions-border-radius,0px 0px var(--ha-card-border-radius,12px) var(--ha-card-border-radius,12px));border:1px solid var(--divider-color);padding:5px 16px}ha-code-editor{flex-grow:1}`]}}]}}),a.WF)},18589:(e,t,o)=>{o.d(t,{P:()=>r});var i=o(34897);const r=(e,t)=>(0,i.r)(e,"hass-notification",t)}};
//# sourceMappingURL=7785.OPG9fekCkTM.js.map