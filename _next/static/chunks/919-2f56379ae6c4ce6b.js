"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[919],{1621:function(e,t,n){n.d(t,{Ps:function(){return z}});var i=function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.create;Object.create;function r(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const s=/\r\n|[\n\r]/g;function o(e,t){let n=0,i=1;for(const o of e.body.matchAll(s)){if("number"===typeof o.index||r(!1),o.index>=t)break;n=o.index+o[0].length,i+=1}return{line:i,column:t+1-n}}function a(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,r=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?n:0,l=t.column+a,u=`${e.name}:${o}:${l}\n`,h=i.split(/\r\n|[\n\r]/g),p=h[r];if(p.length>120){const e=Math.floor(l/80),t=l%80,n=[];for(let i=0;i<p.length;i+=80)n.push(p.slice(i,i+80));return u+c([[`${o} |`,n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return u+c([[o-1+" |",h[r-1]],[`${o} |`,p],["|","^".padStart(l)],[`${o+1} |`,h[r+1]]])}function c(e){const t=e.filter((([e,t])=>void 0!==t)),n=Math.max(...t.map((([e])=>e.length)));return t.map((([e,t])=>e.padStart(n)+(t?" "+t:""))).join("\n")}class l extends Error{constructor(e,t,n,i,r,s,a){var c,h,p;super(e),this.name="GraphQLError",this.path=null!==r&&void 0!==r?r:void 0,this.originalError=null!==s&&void 0!==s?s:void 0,this.nodes=u(Array.isArray(t)?t:t?[t]:void 0);const d=u(null===(c=this.nodes)||void 0===c?void 0:c.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!==n&&void 0!==n?n:null===d||void 0===d||null===(h=d[0])||void 0===h?void 0:h.source,this.positions=null!==i&&void 0!==i?i:null===d||void 0===d?void 0:d.map((e=>e.start)),this.locations=i&&n?i.map((e=>o(n,e))):null===d||void 0===d?void 0:d.map((e=>o(e.source,e.start)));const f="object"==typeof(E=null===s||void 0===s?void 0:s.extensions)&&null!==E?null===s||void 0===s?void 0:s.extensions:void 0;var E;this.extensions=null!==(p=null!==a&&void 0!==a?a:f)&&void 0!==p?p:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!==s&&void 0!==s&&s.stack?Object.defineProperty(this,"stack",{value:s.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,l):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+a((t=n.loc).source,o(t.source,t.start)));else if(this.source&&this.locations)for(const n of this.locations)e+="\n\n"+a(this.source,n);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function u(e){return void 0===e||0===e.length?void 0:e}function h(e,t,n){return new l(`Syntax Error: ${n}`,void 0,e,[t])}var p=n(7359),d=n(2380);let f;!function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(f||(f={}));var E=n(1270);let v;!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(v||(v={}));var m=n(7392),N=n(8297);class k{constructor(e){const t=new d.WU(f.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;return this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==f.EOF)do{if(e.next)e=e.next;else{const t=O(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===f.COMMENT);return e}}function T(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function _(e,t){return y(e.charCodeAt(t))&&x(e.charCodeAt(t+1))}function y(e){return e>=55296&&e<=56319}function x(e){return e>=56320&&e<=57343}function A(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return f.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function I(e,t,n,i,r){const s=e.line,o=1+n-e.lineStart;return new d.WU(t,n,i,s,o,r)}function O(e,t){const n=e.source.body,i=n.length;let r=t;for(;r<i;){const t=n.charCodeAt(r);switch(t){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:10===n.charCodeAt(r+1)?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return D(e,r);case 33:return I(e,f.BANG,r,r+1);case 36:return I(e,f.DOLLAR,r,r+1);case 38:return I(e,f.AMP,r,r+1);case 40:return I(e,f.PAREN_L,r,r+1);case 41:return I(e,f.PAREN_R,r,r+1);case 46:if(46===n.charCodeAt(r+1)&&46===n.charCodeAt(r+2))return I(e,f.SPREAD,r,r+3);break;case 58:return I(e,f.COLON,r,r+1);case 61:return I(e,f.EQUALS,r,r+1);case 64:return I(e,f.AT,r,r+1);case 91:return I(e,f.BRACKET_L,r,r+1);case 93:return I(e,f.BRACKET_R,r,r+1);case 123:return I(e,f.BRACE_L,r,r+1);case 124:return I(e,f.PIPE,r,r+1);case 125:return I(e,f.BRACE_R,r,r+1);case 34:return 34===n.charCodeAt(r+1)&&34===n.charCodeAt(r+2)?F(e,r):b(e,r)}if((0,N.X1)(t)||45===t)return g(e,r,t);if((0,N.LQ)(t))return M(e,r);throw h(e.source,r,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":T(t)||_(n,r)?`Unexpected character: ${A(e,r)}.`:`Invalid character: ${A(e,r)}.`)}return I(e,f.EOF,i,i)}function D(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(10===e||13===e)break;if(T(e))++r;else{if(!_(n,r))break;r+=2}}return I(e,f.COMMENT,t,r,n.slice(t+1,r))}function g(e,t,n){const i=e.source.body;let r=t,s=n,o=!1;if(45===s&&(s=i.charCodeAt(++r)),48===s){if(s=i.charCodeAt(++r),(0,N.X1)(s))throw h(e.source,r,`Invalid number, unexpected digit after 0: ${A(e,r)}.`)}else r=C(e,r,s),s=i.charCodeAt(r);if(46===s&&(o=!0,s=i.charCodeAt(++r),r=C(e,r,s),s=i.charCodeAt(r)),69!==s&&101!==s||(o=!0,s=i.charCodeAt(++r),43!==s&&45!==s||(s=i.charCodeAt(++r)),r=C(e,r,s),s=i.charCodeAt(r)),46===s||(0,N.LQ)(s))throw h(e.source,r,`Invalid number, expected digit but got: ${A(e,r)}.`);return I(e,o?f.FLOAT:f.INT,t,r,i.slice(t,r))}function C(e,t,n){if(!(0,N.X1)(n))throw h(e.source,t,`Invalid number, expected digit but got: ${A(e,t)}.`);const i=e.source.body;let r=t+1;for(;(0,N.X1)(i.charCodeAt(r));)++r;return r}function b(e,t){const n=e.source.body,i=n.length;let r=t+1,s=r,o="";for(;r<i;){const i=n.charCodeAt(r);if(34===i)return o+=n.slice(s,r),I(e,f.STRING,t,r+1,o);if(92!==i){if(10===i||13===i)break;if(T(i))++r;else{if(!_(n,r))throw h(e.source,r,`Invalid character within String: ${A(e,r)}.`);r+=2}}else{o+=n.slice(s,r);const t=117===n.charCodeAt(r+1)?123===n.charCodeAt(r+2)?R(e,r):S(e,r):P(e,r);o+=t.value,r+=t.size,s=r}}throw h(e.source,r,"Unterminated string.")}function R(e,t){const n=e.source.body;let i=0,r=3;for(;r<12;){const e=n.charCodeAt(t+r++);if(125===e){if(r<5||!T(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|L(e),i<0)break}throw h(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function S(e,t){const n=e.source.body,i=w(n,t+2);if(T(i))return{value:String.fromCodePoint(i),size:6};if(y(i)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=w(n,t+8);if(x(e))return{value:String.fromCodePoint(i,e),size:12}}throw h(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function w(e,t){return L(e.charCodeAt(t))<<12|L(e.charCodeAt(t+1))<<8|L(e.charCodeAt(t+2))<<4|L(e.charCodeAt(t+3))}function L(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function P(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw h(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function F(e,t){const n=e.source.body,i=n.length;let r=e.lineStart,s=t+3,o=s,a="";const c=[];for(;s<i;){const i=n.charCodeAt(s);if(34===i&&34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)){a+=n.slice(o,s),c.push(a);const i=I(e,f.BLOCK_STRING,t,s+3,(0,m.wv)(c).join("\n"));return e.line+=c.length-1,e.lineStart=r,i}if(92!==i||34!==n.charCodeAt(s+1)||34!==n.charCodeAt(s+2)||34!==n.charCodeAt(s+3))if(10!==i&&13!==i)if(T(i))++s;else{if(!_(n,s))throw h(e.source,s,`Invalid character within String: ${A(e,s)}.`);s+=2}else a+=n.slice(o,s),c.push(a),13===i&&10===n.charCodeAt(s+1)?s+=2:++s,a="",o=s,r=s;else a+=n.slice(o,s),o=s+1,s+=4}throw h(e.source,s,"Unterminated string.")}function M(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(!(0,N.HQ)(e))break;++r}return I(e,f.NAME,t,r,n.slice(t,r))}class U{constructor(e,t){const n=(0,E.T)(e)?e:new E.H(e);this._lexer=new k(n),this._options=t}parseName(){const e=this.expectToken(f.NAME);return this.node(e,{kind:p.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:p.h.DOCUMENT,definitions:this.many(f.SOF,this.parseDefinition,f.EOF)})}parseDefinition(){if(this.peek(f.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===f.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw h(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(f.BRACE_L))return this.node(e,{kind:p.h.OPERATION_DEFINITION,operation:d.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(f.NAME)&&(n=this.parseName()),this.node(e,{kind:p.h.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(f.NAME);switch(e.value){case"query":return d.ku.QUERY;case"mutation":return d.ku.MUTATION;case"subscription":return d.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(f.PAREN_L,this.parseVariableDefinition,f.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:p.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(f.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(f.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(f.DOLLAR),this.node(e,{kind:p.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:p.h.SELECTION_SET,selections:this.many(f.BRACE_L,this.parseSelection,f.BRACE_R)})}parseSelection(){return this.peek(f.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,i;return this.expectOptionalToken(f.COLON)?(n=t,i=this.parseName()):i=t,this.node(e,{kind:p.h.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(f.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(f.PAREN_L,t,f.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,n=this.parseName();return this.expectToken(f.COLON),this.node(t,{kind:p.h.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(f.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(f.NAME)?this.node(e,{kind:p.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:p.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var e;const t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacyFragmentVariables)?this.node(t,{kind:p.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:p.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case f.BRACKET_L:return this.parseList(e);case f.BRACE_L:return this.parseObject(e);case f.INT:return this._lexer.advance(),this.node(t,{kind:p.h.INT,value:t.value});case f.FLOAT:return this._lexer.advance(),this.node(t,{kind:p.h.FLOAT,value:t.value});case f.STRING:case f.BLOCK_STRING:return this.parseStringLiteral();case f.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:p.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:p.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:p.h.NULL});default:return this.node(t,{kind:p.h.ENUM,value:t.value})}case f.DOLLAR:if(e){if(this.expectToken(f.DOLLAR),this._lexer.token.kind===f.NAME){const e=this._lexer.token.value;throw h(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this._lexer.advance(),this.node(e,{kind:p.h.STRING,value:e.value,block:e.kind===f.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:p.h.LIST,values:this.any(f.BRACKET_L,(()=>this.parseValueLiteral(e)),f.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:p.h.OBJECT,fields:this.any(f.BRACE_L,(()=>this.parseObjectField(e)),f.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(f.COLON),this.node(t,{kind:p.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(f.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(f.AT),this.node(t,{kind:p.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(f.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(f.BRACKET_R),t=this.node(e,{kind:p.h.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(f.BANG)?this.node(e,{kind:p.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:p.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(f.STRING)||this.peek(f.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(f.BRACE_L,this.parseOperationTypeDefinition,f.BRACE_R);return this.node(e,{kind:p.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(f.COLON);const n=this.parseNamedType();return this.node(e,{kind:p.h.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:p.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:p.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(f.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(f.BRACE_L,this.parseFieldDefinition,f.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(f.COLON);const r=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:p.h.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:s})}parseArgumentDefs(){return this.optionalMany(f.PAREN_L,this.parseInputValueDef,f.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(f.COLON);const i=this.parseTypeReference();let r;this.expectOptionalToken(f.EQUALS)&&(r=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:p.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:r,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:p.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:p.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(f.EQUALS)?this.delimitedMany(f.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:p.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r})}parseEnumValuesDefinition(){return this.optionalMany(f.BRACE_L,this.parseEnumValueDefinition,f.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:p.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw h(this._lexer.source,this._lexer.token.start,`${B(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:p.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(f.BRACE_L,this.parseInputValueDef,f.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===f.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(f.BRACE_L,this.parseOperationTypeDefinition,f.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:p.h.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:p.h.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:p.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:p.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:p.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:p.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:p.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(f.AT);const n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:p.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:s})}parseDirectiveLocations(){return this.delimitedMany(f.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(v,t.value))return t;throw this.unexpected(e)}node(e,t){var n;return!0!==(null===(n=this._options)||void 0===n?void 0:n.noLocation)&&(t.loc=new d.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw h(this._lexer.source,t.start,`Expected ${K(e)}, found ${B(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this._lexer.advance(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==f.NAME||t.value!==e)throw h(this._lexer.source,t.start,`Expected "${e}", found ${B(t)}.`);this._lexer.advance()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===f.NAME&&t.value===e&&(this._lexer.advance(),!0)}unexpected(e){const t=null!==e&&void 0!==e?e:this._lexer.token;return h(this._lexer.source,t.start,`Unexpected ${B(t)}.`)}any(e,t,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(t.call(this));return i}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}}function B(e){const t=e.value;return K(e.kind)+(null!=t?` "${t}"`:"")}function K(e){return function(e){return e===f.BANG||e===f.DOLLAR||e===f.AMP||e===f.PAREN_L||e===f.PAREN_R||e===f.SPREAD||e===f.COLON||e===f.EQUALS||e===f.AT||e===f.BRACKET_L||e===f.BRACKET_R||e===f.BRACE_L||e===f.PIPE||e===f.BRACE_R}(e)?`"${e}"`:e}var V=new Map,G=new Map,Q=!0,j=!1;function $(e){return e.replace(/[\s,]+/g," ").trim()}function Y(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,r=$((o=e.loc).source.body.substring(o.start,o.end)),s=G.get(i);s&&!s.has(r)?Q&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||G.set(i,s=new Set),s.add(r),t.has(r)||(t.add(r),n.push(e))}else n.push(e);var o})),i(i({},e),{definitions:n})}function q(e){var t=$(e);if(!V.has(t)){var n=function(e,t){return new U(e,t).parseDocument()}(e,{experimentalFragmentVariables:j,allowLegacyFragmentVariables:j});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");V.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var i=e[n];i&&"object"===typeof i&&t.add(i)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(Y(n)))}return V.get(t)}function z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"===typeof e&&(e=[e]);var i=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[n+1]})),q(i)}var J,X=z,H=function(){V.clear(),G.clear()},W=function(){Q=!1},Z=function(){j=!0},ee=function(){j=!1};(J=z||(z={})).gql=X,J.resetCaches=H,J.disableFragmentWarnings=W,J.enableExperimentalFragmentVariables=Z,J.disableExperimentalFragmentVariables=ee,z.default=z},3056:function(e,t,n){n.d(t,{a:function(){return E}});var i,r=n(3564),s=n(7294),o=n(2152),a=n(8728),c=n(5317),l=n(990),u=n(1644),h=n(7477);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(i||(i={}));var p=new Map;function d(e){var t;switch(e){case i.Query:t="Query";break;case i.Mutation:t="Mutation";break;case i.Subscription:t="Subscription"}return t}function f(e,t){var n=function(e){var t,n,r=p.get(e);if(r)return r;__DEV__?(0,h.kG)(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,h.kG)(!!e&&!!e.kind,30);var s=e.definitions.filter((function(e){return"FragmentDefinition"===e.kind})),o=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})),a=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})),c=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"subscription"===e.operation}));__DEV__?(0,h.kG)(!s.length||o.length||a.length||c.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,h.kG)(!s.length||o.length||a.length||c.length,31),__DEV__?(0,h.kG)(o.length+a.length+c.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(o.length," queries, ").concat(c.length," ")+"subscriptions and ".concat(a.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,h.kG)(o.length+a.length+c.length<=1,32),n=o.length?i.Query:i.Mutation,o.length||a.length||(n=i.Subscription);var l=o.length?o:a.length?a:c;__DEV__?(0,h.kG)(1===l.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(l.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,h.kG)(1===l.length,33);var u=l[0];t=u.variableDefinitions||[];var d={name:u.name&&"Name"===u.name.kind?u.name.value:"data",type:n,variables:t};return p.set(e,d),d}(e),r=d(t),s=d(n.type);__DEV__?(0,h.kG)(n.type===t,"Running a ".concat(r," requires a graphql ")+"".concat(r,", but a ").concat(s," was used instead.")):(0,h.kG)(n.type===t,34)}function E(e,t){var n,a=(0,s.useContext)((0,c.K)()),p=function(e){var t=(0,s.useContext)((0,c.K)()),n=e||t.client;return __DEV__?(0,h.kG)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClientApolloClient instance in via options.'):(0,h.kG)(!!n,29),n}(null===t||void 0===t?void 0:t.client),d=p.defaultOptions.watchQuery;f(e,i.Query);var E,m=(0,s.useState)((function(){var n=v(e,t,d),i=null;return a.renderPromises&&(i=a.renderPromises.getSSRObservable(n)),i||(i=p.watchQuery(n),a.renderPromises&&a.renderPromises.registerSSRObservable(i,n)),a.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&i.getCurrentResult().loading&&a.renderPromises.addQueryPromise({getOptions:function(){return v(e,t,d)},fetchData:function(){return new Promise((function(e){var t=i.subscribe({next:function(n){n.loading||(e(),t.unsubscribe())},error:function(){e(),t.unsubscribe()},complete:function(){e()}})}))}},(function(){return null})),i})),N=m[0],k=m[1],T=(0,s.useState)((function(){var e,n,i=N.getCurrentResult();return!i.loading&&t&&(i.error?null===(e=t.onError)||void 0===e||e.call(t,i.error):i.data&&(null===(n=t.onCompleted)||void 0===n||n.call(t,i.data))),i})),_=T[0],y=T[1],x=(0,s.useRef)({client:p,query:e,options:t,result:_,previousData:void 0,watchQueryOptions:v(e,t,d)});(0,s.useEffect)((function(){var n,i,r,s=v(e,t,d);if(x.current.client===p&&(0,o.D)(x.current.query,e))(0,o.D)(x.current.watchQueryOptions,s)||(N.setOptions(s).catch((function(){})),r=N.getCurrentResult(),x.current.watchQueryOptions=s);else{var a=p.watchQuery(s);k(a),r=a.getCurrentResult()}if(r){var c=x.current.result;c.data&&(x.current.previousData=c.data),y(x.current.result=r),!r.loading&&t&&(r.error?null===(n=t.onError)||void 0===n||n.call(t,r.error):r.data&&(null===(i=t.onCompleted)||void 0===i||i.call(t,r.data)))}Object.assign(x.current,{client:p,query:e})}),[N,p,e,t]),(0,s.useEffect)((function(){if(!a.renderPromises){var e=N.subscribe(t,(function n(i){var r,s,a=N.last;e.unsubscribe();try{N.resetLastResults(),e=N.subscribe(t,n)}finally{N.last=a}if(!i.hasOwnProperty("graphQLErrors"))throw i;var c=x.current.result;(c&&c.loading||!(0,o.D)(i,c.error))&&(y(x.current.result={data:c.data,error:i,loading:!1,networkStatus:u.I.error}),null===(s=null===(r=x.current.options)||void 0===r?void 0:r.onError)||void 0===s||s.call(r,i))}));return function(){return e.unsubscribe()}}function t(){var e,t,n=x.current.result,i=N.getCurrentResult();n&&n.loading===i.loading&&n.networkStatus===i.networkStatus&&(0,o.D)(n.data,i.data)||(n.data&&(x.current.previousData=n.data),y(x.current.result=i),i.loading||null===(t=null===(e=x.current.options)||void 0===e?void 0:e.onCompleted)||void 0===t||t.call(e,i.data))}}),[N,a.renderPromises,p.disableNetworkFetches]),E=(n=_).partial,_=(0,r._T)(n,["partial"]),!E||!(null===t||void 0===t?void 0:t.partialRefetch)||_.loading||_.data&&0!==Object.keys(_.data).length||"cache-only"===N.options.fetchPolicy||(_=(0,r.pi)((0,r.pi)({},_),{loading:!0,networkStatus:u.I.refetch}),N.refetch()),a.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&_.loading&&N.setOptions(v(e,t,d)).catch((function(){})),Object.assign(x.current,{options:t}),(a.renderPromises||p.disableNetworkFetches)&&!1===(null===t||void 0===t?void 0:t.ssr)?_=x.current.result={loading:!0,data:void 0,error:void 0,networkStatus:u.I.loading}:((null===t||void 0===t?void 0:t.skip)||"standby"===(null===t||void 0===t?void 0:t.fetchPolicy))&&(_={loading:!1,data:void 0,error:void 0,networkStatus:u.I.ready}),_.errors&&_.errors.length&&(_=(0,r.pi)((0,r.pi)({},_),{error:_.error||new l.c({graphQLErrors:_.errors})}));var A=(0,s.useMemo)((function(){return{refetch:N.refetch.bind(N),fetchMore:N.fetchMore.bind(N),updateQuery:N.updateQuery.bind(N),startPolling:N.startPolling.bind(N),stopPolling:N.stopPolling.bind(N),subscribeToMore:N.subscribeToMore.bind(N)}}),[N]);return(0,r.pi)((0,r.pi)((0,r.pi)({},A),{variables:v(e,t,d).variables,client:p,called:!0,previousData:x.current.previousData}),_)}function v(e,t,n){var i;void 0===t&&(t={});var s=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.displayName,(0,r._T)(t,["skip","ssr","onCompleted","onError","displayName"])),c=(0,r.pi)({query:e},o);return n&&(c=(0,a.J)(n,c)),s?c.fetchPolicy="standby":(!(null===(i=c.context)||void 0===i?void 0:i.renderPromises)||"network-only"!==c.fetchPolicy&&"cache-and-network"!==c.fetchPolicy)&&c.fetchPolicy||(c.fetchPolicy="cache-first"),c.variables||(c.variables={}),c}}}]);