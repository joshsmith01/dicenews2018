/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer337169371 = (function () {
    'use strict';

    var global = this;

    function Tracer() {
        this._calls = [];
        this._args = [];
        this.global = global;

        this._probeValues = {};
    }
    Tracer.prototype = {
        logEntry: function (location, args) {
            this._calls.push({
                index: this._calls.length,
                position: location,
                // args: Array.prototype.slice.call(args),
                argsCount: args.length,
                time: Date.now()
            });
            this._args.push(_.cloneDeep(args));
        },

        getCalls: function (since) {
            var calls = this._calls.filter(function(call) {
                return (since) ? call.time > since : true;
            });
            return stringify(calls);
        },

        getCallCount: function () {
            return this._calls.length;
        },

        logProbe: function (location, result) {
            this._probeValues[location.toString()] = _.cloneDeep(result);
            return result;
        },

        updateProbeValues: function () {
            var self = this;

            var probeIds = Object.keys(this._probeValues);
            var output = probeIds.map(function(probeId) {
               return {
                   id: probeId,
                   type: self.getType(self._probeValues[probeId])
               };
            });

            return stringify(output);
        },

        getType: function (value) {
            var type = typeof value;

            if (type === 'number' && isNaN(value)) {
                type = 'NaN';
            }
            if (type === null) {
                type = 'null';
            }

            return type;
        },

        test: function () {
            console.log('[recognizer tracer] test function run successfully');
        },

        connect: function () {
            return this;
        }
    };


    /**
     * JSON stringify with circular references
     * Copyright (c) Isaac Z. Schlueter ("Author")
     * The BSD License
     */
    function getSerialize(a,b){var c=[],d=[];return b=b||function(a,b){return"[Circular "+getPath(b,c,d)+"]"},function(e,f){var g=f;return"object"==typeof f&&f&&(-1!==c.indexOf(f)?g=b(e,f):(c.push(f),d.push(e))),a&&(g=a(e,g)),g}}
    function getPath(a,b,c){var d=b.indexOf(a),e=[c[d]];for(d--;d>=0;d--)b[d][e[0]]===a&&(a=b[d],e.unshift(c[d]));return"~"+e.join(".")}
    function stringify(a,b,c,d){return JSON.stringify(a,getSerialize(b,d),c)}stringify.getSerialize=getSerialize;


    /**
     * @license
     * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
     * Build: `lodash modern -o ./dist/lodash.js`
     */
    ;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
    }}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
    }function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
        t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
        return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
    }function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
    }if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
        De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
    }var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
    }function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
        if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
    });return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
        for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
        var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
    }),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
    }function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
        var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
        if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
    else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
    });return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
        for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
        return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
    }function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
        m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
        i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
    }catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
        var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
    }:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
        return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
        return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
    }},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
    },J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
        (Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
        return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
        return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
    });return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
    }else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
    })},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
    },J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
    })),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
    },J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
    }),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
    },J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
    },J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
    },J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
    }),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
    },J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
    },J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
        return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
        K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
        var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);


    return new Tracer();

}());


/**
 * Instrumented code
 */

(function ($) {
    __recognizer337169371.logEntry([
        6,
        1,
        6,
        9
    ], arguments);
    function maybeCall(thing, ctx) {
        __recognizer337169371.logEntry([
            8,
            13,
            8,
            22
        ], arguments);
        return typeof __recognizer337169371.logProbe([
            9,
            23,
            9,
            28
        ], thing) == 'function' ? function () {
            var obj = __recognizer337169371.logProbe([
                    9,
                    47,
                    9,
                    52
                ], thing), fn = __recognizer337169371.logProbe([
                    9,
                    53,
                    9,
                    57
                ], obj.call);
            return fn.apply(obj, arguments);
        }.bind(this)(__recognizer337169371.logProbe([
            9,
            58,
            9,
            61
        ], ctx)) : __recognizer337169371.logProbe([
            9,
            66,
            9,
            71
        ], thing);
    }
    function Tipsy(element, options) {
        __recognizer337169371.logEntry([
            12,
            13,
            12,
            18
        ], arguments);
        this.$element = __recognizer337169371.logProbe([
            13,
            24,
            13,
            34
        ], __recognizer337169371.logProbe([
            13,
            24,
            13,
            25
        ], $)(__recognizer337169371.logProbe([
            13,
            26,
            13,
            33
        ], element)));
        this.options = __recognizer337169371.logProbe([
            14,
            23,
            14,
            30
        ], options);
        this.enabled = true;
        (function () {
            var obj = __recognizer337169371.logProbe([
                    16,
                    8,
                    16,
                    12
                ], this), fn = __recognizer337169371.logProbe([
                    16,
                    13,
                    16,
                    21
                ], obj.fixTitle);
            return fn.apply(obj, arguments);
        }.bind(this)());
    }
    Tipsy.prototype = {
        show: function () {
            __recognizer337169371.logEntry([
                20,
                14,
                20,
                22
            ], arguments);
            var title = function () {
                    var obj = __recognizer337169371.logProbe([
                            21,
                            24,
                            21,
                            28
                        ], this), fn = __recognizer337169371.logProbe([
                            21,
                            29,
                            21,
                            37
                        ], obj.getTitle);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            if (__recognizer337169371.logProbe([
                    22,
                    16,
                    22,
                    21
                ], title) && __recognizer337169371.logProbe([
                    22,
                    30,
                    22,
                    37
                ], __recognizer337169371.logProbe([
                    22,
                    25,
                    22,
                    29
                ], this).enabled)) {
                var $tip = function () {
                        var obj = __recognizer337169371.logProbe([
                                23,
                                27,
                                23,
                                31
                            ], this), fn = __recognizer337169371.logProbe([
                                23,
                                32,
                                23,
                                35
                            ], obj.tip);
                        return fn.apply(obj, arguments);
                    }.bind(this)();
                (function () {
                    var obj = function () {
                            var obj = __recognizer337169371.logProbe([
                                    25,
                                    16,
                                    25,
                                    20
                                ], $tip), fn = __recognizer337169371.logProbe([
                                    25,
                                    21,
                                    25,
                                    25
                                ], obj.find);
                            return fn.apply(obj, arguments);
                        }.bind(this)('.tipsy-inner'), fn = __recognizer337169371.logProbe([
                            25,
                            42,
                            25,
                            77
                        ], obj.);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer337169371.logProbe([
                    25,
                    79,
                    25,
                    84
                ], title)));
                $tip[0].className = 'tipsy';
                (function () {
                    var obj = function () {
                            var obj = function () {
                                    var obj = __recognizer337169371.logProbe([
                                            27,
                                            16,
                                            27,
                                            20
                                        ], $tip), fn = __recognizer337169371.logProbe([
                                            27,
                                            21,
                                            27,
                                            27
                                        ], obj.remove);
                                    return fn.apply(obj, arguments);
                                }.bind(this)(), fn = __recognizer337169371.logProbe([
                                    27,
                                    30,
                                    27,
                                    33
                                ], obj.css);
                            return fn.apply(obj, arguments);
                        }.bind(this)({
                            top: 0,
                            left: 0,
                            visibility: 'hidden',
                            display: 'block'
                        }), fn = __recognizer337169371.logProbe([
                            27,
                            93,
                            27,
                            102
                        ], obj.prependTo);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer337169371.logProbe([
                    27,
                    112,
                    27,
                    116
                ], __recognizer337169371.logProbe([
                    27,
                    103,
                    27,
                    111
                ], document).body)));
                var pos = function () {
                        var obj = __recognizer337169371.logProbe([
                                29,
                                26,
                                29,
                                27
                            ], $), fn = __recognizer337169371.logProbe([
                                29,
                                28,
                                29,
                                34
                            ], obj.extend);
                        return fn.apply(obj, arguments);
                    }.bind(this)({}, function () {
                        var obj = __recognizer337169371.logProbe([
                                29,
                                44,
                                29,
                                52
                            ], __recognizer337169371.logProbe([
                                29,
                                39,
                                29,
                                43
                            ], this).$element), fn = __recognizer337169371.logProbe([
                                29,
                                53,
                                29,
                                59
                            ], obj.offset);
                        return fn.apply(obj, arguments);
                    }.bind(this)(), {
                        width: __recognizer337169371.logProbe([
                            30,
                            44,
                            30,
                            55
                        ], __recognizer337169371.logProbe([
                            30,
                            41,
                            30,
                            42
                        ], __recognizer337169371.logProbe([
                            30,
                            32,
                            30,
                            40
                        ], __recognizer337169371.logProbe([
                            30,
                            27,
                            30,
                            31
                        ], this).$element)[0]).offsetWidth) || 0,
                        height: __recognizer337169371.logProbe([
                            31,
                            45,
                            31,
                            57
                        ], __recognizer337169371.logProbe([
                            31,
                            42,
                            31,
                            43
                        ], __recognizer337169371.logProbe([
                            31,
                            33,
                            31,
                            41
                        ], __recognizer337169371.logProbe([
                            31,
                            28,
                            31,
                            32
                        ], this).$element)[0]).offsetHeight) || 0
                    });
                if (typeof __recognizer337169371.logProbe([
                        34,
                        44,
                        34,
                        66
                    ], __recognizer337169371.logProbe([
                        34,
                        41,
                        34,
                        42
                    ], __recognizer337169371.logProbe([
                        34,
                        32,
                        34,
                        40
                    ], __recognizer337169371.logProbe([
                        34,
                        27,
                        34,
                        31
                    ], this).$element)[0]).nearestViewportElement) == 'object') {
                    var el = __recognizer337169371.logProbe([
                            36,
                            28,
                            36,
                            29
                        ], __recognizer337169371.logProbe([
                            36,
                            19,
                            36,
                            27
                        ], __recognizer337169371.logProbe([
                            36,
                            14,
                            36,
                            18
                        ], this).$element)[0]);
                    var rect = function () {
                            var obj = __recognizer337169371.logProbe([
                                    37,
                                    31,
                                    37,
                                    33
                                ], el), fn = __recognizer337169371.logProbe([
                                    37,
                                    34,
                                    37,
                                    55
                                ], obj.getBoundingClientRect);
                            return fn.apply(obj, arguments);
                        }.bind(this)();
                    pos.width = __recognizer337169371.logProbe([
                        38,
                        22,
                        38,
                        27
                    ], __recognizer337169371.logProbe([
                        38,
                        17,
                        38,
                        21
                    ], rect).width);
                    pos.height = __recognizer337169371.logProbe([
                        39,
                        23,
                        39,
                        29
                    ], __recognizer337169371.logProbe([
                        39,
                        18,
                        39,
                        22
                    ], rect).height);
                }
                var actualWidth = __recognizer337169371.logProbe([
                        43,
                        42,
                        43,
                        53
                    ], __recognizer337169371.logProbe([
                        43,
                        39,
                        43,
                        40
                    ], __recognizer337169371.logProbe([
                        43,
                        34,
                        43,
                        38
                    ], $tip)[0]).offsetWidth), actualHeight = __recognizer337169371.logProbe([
                        44,
                        43,
                        44,
                        55
                    ], __recognizer337169371.logProbe([
                        44,
                        40,
                        44,
                        41
                    ], __recognizer337169371.logProbe([
                        44,
                        35,
                        44,
                        39
                    ], $tip)[0]).offsetHeight), gravity = __recognizer337169371.logProbe([
                        45,
                        30,
                        45,
                        79
                    ], __recognizer337169371.logProbe([
                        45,
                        30,
                        45,
                        39
                    ], maybeCall)(__recognizer337169371.logProbe([
                        45,
                        53,
                        45,
                        60
                    ], __recognizer337169371.logProbe([
                        45,
                        45,
                        45,
                        52
                    ], __recognizer337169371.logProbe([
                        45,
                        40,
                        45,
                        44
                    ], this).options).gravity), __recognizer337169371.logProbe([
                        45,
                        76,
                        45,
                        77
                    ], __recognizer337169371.logProbe([
                        45,
                        67,
                        45,
                        75
                    ], __recognizer337169371.logProbe([
                        45,
                        62,
                        45,
                        66
                    ], this).$element)[0])));
                var tp;
                switch (function () {
                        var obj = __recognizer337169371.logProbe([
                                48,
                                24,
                                48,
                                31
                            ], gravity), fn = __recognizer337169371.logProbe([
                                48,
                                32,
                                48,
                                38
                            ], obj.charAt);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0)) {
                case 'n':
                    tp = {
                        top: __recognizer337169371.logProbe([
                            50,
                            39,
                            50,
                            42
                        ], __recognizer337169371.logProbe([
                            50,
                            35,
                            50,
                            38
                        ], pos).top) + __recognizer337169371.logProbe([
                            50,
                            49,
                            50,
                            55
                        ], __recognizer337169371.logProbe([
                            50,
                            45,
                            50,
                            48
                        ], pos).height) + __recognizer337169371.logProbe([
                            50,
                            71,
                            50,
                            77
                        ], __recognizer337169371.logProbe([
                            50,
                            63,
                            50,
                            70
                        ], __recognizer337169371.logProbe([
                            50,
                            58,
                            50,
                            62
                        ], this).options).offset),
                        left: __recognizer337169371.logProbe([
                            50,
                            89,
                            50,
                            93
                        ], __recognizer337169371.logProbe([
                            50,
                            85,
                            50,
                            88
                        ], pos).left) + __recognizer337169371.logProbe([
                            50,
                            100,
                            50,
                            105
                        ], __recognizer337169371.logProbe([
                            50,
                            96,
                            50,
                            99
                        ], pos).width) / 2 - __recognizer337169371.logProbe([
                            50,
                            112,
                            50,
                            123
                        ], actualWidth) / 2
                    };
                    break;
                case 's':
                    tp = {
                        top: __recognizer337169371.logProbe([
                            53,
                            39,
                            53,
                            42
                        ], __recognizer337169371.logProbe([
                            53,
                            35,
                            53,
                            38
                        ], pos).top) - __recognizer337169371.logProbe([
                            53,
                            45,
                            53,
                            57
                        ], actualHeight) - __recognizer337169371.logProbe([
                            53,
                            73,
                            53,
                            79
                        ], __recognizer337169371.logProbe([
                            53,
                            65,
                            53,
                            72
                        ], __recognizer337169371.logProbe([
                            53,
                            60,
                            53,
                            64
                        ], this).options).offset),
                        left: __recognizer337169371.logProbe([
                            53,
                            91,
                            53,
                            95
                        ], __recognizer337169371.logProbe([
                            53,
                            87,
                            53,
                            90
                        ], pos).left) + __recognizer337169371.logProbe([
                            53,
                            102,
                            53,
                            107
                        ], __recognizer337169371.logProbe([
                            53,
                            98,
                            53,
                            101
                        ], pos).width) / 2 - __recognizer337169371.logProbe([
                            53,
                            114,
                            53,
                            125
                        ], actualWidth) / 2
                    };
                    break;
                case 'e':
                    tp = {
                        top: __recognizer337169371.logProbe([
                            56,
                            39,
                            56,
                            42
                        ], __recognizer337169371.logProbe([
                            56,
                            35,
                            56,
                            38
                        ], pos).top) + __recognizer337169371.logProbe([
                            56,
                            49,
                            56,
                            55
                        ], __recognizer337169371.logProbe([
                            56,
                            45,
                            56,
                            48
                        ], pos).height) / 2 - __recognizer337169371.logProbe([
                            56,
                            62,
                            56,
                            74
                        ], actualHeight) / 2,
                        left: __recognizer337169371.logProbe([
                            56,
                            90,
                            56,
                            94
                        ], __recognizer337169371.logProbe([
                            56,
                            86,
                            56,
                            89
                        ], pos).left) - __recognizer337169371.logProbe([
                            56,
                            97,
                            56,
                            108
                        ], actualWidth) - __recognizer337169371.logProbe([
                            56,
                            124,
                            56,
                            130
                        ], __recognizer337169371.logProbe([
                            56,
                            116,
                            56,
                            123
                        ], __recognizer337169371.logProbe([
                            56,
                            111,
                            56,
                            115
                        ], this).options).offset)
                    };
                    break;
                case 'w':
                    tp = {
                        top: __recognizer337169371.logProbe([
                            59,
                            39,
                            59,
                            42
                        ], __recognizer337169371.logProbe([
                            59,
                            35,
                            59,
                            38
                        ], pos).top) + __recognizer337169371.logProbe([
                            59,
                            49,
                            59,
                            55
                        ], __recognizer337169371.logProbe([
                            59,
                            45,
                            59,
                            48
                        ], pos).height) / 2 - __recognizer337169371.logProbe([
                            59,
                            62,
                            59,
                            74
                        ], actualHeight) / 2,
                        left: __recognizer337169371.logProbe([
                            59,
                            90,
                            59,
                            94
                        ], __recognizer337169371.logProbe([
                            59,
                            86,
                            59,
                            89
                        ], pos).left) + __recognizer337169371.logProbe([
                            59,
                            101,
                            59,
                            106
                        ], __recognizer337169371.logProbe([
                            59,
                            97,
                            59,
                            100
                        ], pos).width) + __recognizer337169371.logProbe([
                            59,
                            122,
                            59,
                            128
                        ], __recognizer337169371.logProbe([
                            59,
                            114,
                            59,
                            121
                        ], __recognizer337169371.logProbe([
                            59,
                            109,
                            59,
                            113
                        ], this).options).offset)
                    };
                    break;
                }
                if (__recognizer337169371.logProbe([
                        63,
                        28,
                        63,
                        34
                    ], __recognizer337169371.logProbe([
                        63,
                        20,
                        63,
                        27
                    ], gravity).length) == 2) {
                    if (function () {
                            var obj = __recognizer337169371.logProbe([
                                    64,
                                    24,
                                    64,
                                    31
                                ], gravity), fn = __recognizer337169371.logProbe([
                                    64,
                                    32,
                                    64,
                                    38
                                ], obj.charAt);
                            return fn.apply(obj, arguments);
                        }.bind(this)(1) == 'w') {
                        tp.left = __recognizer337169371.logProbe([
                            65,
                            38,
                            65,
                            42
                        ], __recognizer337169371.logProbe([
                            65,
                            34,
                            65,
                            37
                        ], pos).left) + __recognizer337169371.logProbe([
                            65,
                            49,
                            65,
                            54
                        ], __recognizer337169371.logProbe([
                            65,
                            45,
                            65,
                            48
                        ], pos).width) / 2 - 15;
                    } else {
                        tp.left = __recognizer337169371.logProbe([
                            67,
                            38,
                            67,
                            42
                        ], __recognizer337169371.logProbe([
                            67,
                            34,
                            67,
                            37
                        ], pos).left) + __recognizer337169371.logProbe([
                            67,
                            49,
                            67,
                            54
                        ], __recognizer337169371.logProbe([
                            67,
                            45,
                            67,
                            48
                        ], pos).width) / 2 - __recognizer337169371.logProbe([
                            67,
                            61,
                            67,
                            72
                        ], actualWidth) + 15;
                    }
                }
                (function () {
                    var obj = function () {
                            var obj = __recognizer337169371.logProbe([
                                    71,
                                    16,
                                    71,
                                    20
                                ], $tip), fn = __recognizer337169371.logProbe([
                                    71,
                                    21,
                                    71,
                                    24
                                ], obj.css);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer337169371.logProbe([
                            71,
                            25,
                            71,
                            27
                        ], tp)), fn = __recognizer337169371.logProbe([
                            71,
                            29,
                            71,
                            37
                        ], obj.addClass);
                    return fn.apply(obj, arguments);
                }.bind(this)('tipsy-' + __recognizer337169371.logProbe([
                    71,
                    49,
                    71,
                    56
                ], gravity)));
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + function () {
                    var obj = __recognizer337169371.logProbe([
                            72,
                            86,
                            72,
                            93
                        ], gravity), fn = __recognizer337169371.logProbe([
                            72,
                            94,
                            72,
                            100
                        ], obj.charAt);
                    return fn.apply(obj, arguments);
                }.bind(this)(0);
                if (__recognizer337169371.logProbe([
                        73,
                        33,
                        73,
                        42
                    ], __recognizer337169371.logProbe([
                        73,
                        25,
                        73,
                        32
                    ], __recognizer337169371.logProbe([
                        73,
                        20,
                        73,
                        24
                    ], this).options).className)) {
                    (function () {
                        var obj = __recognizer337169371.logProbe([
                                74,
                                20,
                                74,
                                24
                            ], $tip), fn = __recognizer337169371.logProbe([
                                74,
                                25,
                                74,
                                33
                            ], obj.addClass);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer337169371.logProbe([
                        74,
                        34,
                        74,
                        85
                    ], __recognizer337169371.logProbe([
                        74,
                        34,
                        74,
                        43
                    ], maybeCall)(__recognizer337169371.logProbe([
                        74,
                        57,
                        74,
                        66
                    ], __recognizer337169371.logProbe([
                        74,
                        49,
                        74,
                        56
                    ], __recognizer337169371.logProbe([
                        74,
                        44,
                        74,
                        48
                    ], this).options).className), __recognizer337169371.logProbe([
                        74,
                        82,
                        74,
                        83
                    ], __recognizer337169371.logProbe([
                        74,
                        73,
                        74,
                        81
                    ], __recognizer337169371.logProbe([
                        74,
                        68,
                        74,
                        72
                    ], this).$element)[0])))));
                }
                if (__recognizer337169371.logProbe([
                        77,
                        33,
                        77,
                        37
                    ], __recognizer337169371.logProbe([
                        77,
                        25,
                        77,
                        32
                    ], __recognizer337169371.logProbe([
                        77,
                        20,
                        77,
                        24
                    ], this).options).fade)) {
                    (function () {
                        var obj = function () {
                                var obj = function () {
                                        var obj = __recognizer337169371.logProbe([
                                                78,
                                                20,
                                                78,
                                                24
                                            ], $tip), fn = __recognizer337169371.logProbe([
                                                78,
                                                25,
                                                78,
                                                29
                                            ], obj.stop);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)(), fn = __recognizer337169371.logProbe([
                                        78,
                                        32,
                                        78,
                                        35
                                    ], obj.css);
                                return fn.apply(obj, arguments);
                            }.bind(this)({
                                opacity: 0,
                                display: 'block',
                                visibility: 'visible'
                            }), fn = __recognizer337169371.logProbe([
                                78,
                                91,
                                78,
                                98
                            ], obj.animate);
                        return fn.apply(obj, arguments);
                    }.bind(this)({
                        opacity: __recognizer337169371.logProbe([
                            78,
                            122,
                            78,
                            129
                        ], __recognizer337169371.logProbe([
                            78,
                            114,
                            78,
                            121
                        ], __recognizer337169371.logProbe([
                            78,
                            109,
                            78,
                            113
                        ], this).options).opacity)
                    }));
                } else {
                    (function () {
                        var obj = __recognizer337169371.logProbe([
                                80,
                                20,
                                80,
                                24
                            ], $tip), fn = __recognizer337169371.logProbe([
                                80,
                                25,
                                80,
                                28
                            ], obj.css);
                        return fn.apply(obj, arguments);
                    }.bind(this)({
                        visibility: 'visible',
                        opacity: __recognizer337169371.logProbe([
                            80,
                            75,
                            80,
                            82
                        ], __recognizer337169371.logProbe([
                            80,
                            67,
                            80,
                            74
                        ], __recognizer337169371.logProbe([
                            80,
                            62,
                            80,
                            66
                        ], this).options).opacity)
                    }));
                }
                var t = __recognizer337169371.logProbe([
                        83,
                        24,
                        83,
                        28
                    ], this);
                var set_hovered = function (set_hover) {
                    __recognizer337169371.logEntry([
                        84,
                        35,
                        84,
                        43
                    ], arguments);
                    return function () {
                        __recognizer337169371.logEntry([
                            85,
                            27,
                            85,
                            35
                        ], arguments);
                        (function () {
                            var obj = __recognizer337169371.logProbe([
                                    86,
                                    26,
                                    86,
                                    30
                                ], __recognizer337169371.logProbe([
                                    86,
                                    24,
                                    86,
                                    25
                                ], t).$tip), fn = __recognizer337169371.logProbe([
                                    86,
                                    31,
                                    86,
                                    35
                                ], obj.stop);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                        t.tipHovered = __recognizer337169371.logProbe([
                            87,
                            39,
                            87,
                            48
                        ], set_hover);
                        if (!__recognizer337169371.logProbe([
                                88,
                                29,
                                88,
                                38
                            ], set_hover)) {
                            if (__recognizer337169371.logProbe([
                                    89,
                                    42,
                                    89,
                                    50
                                ], __recognizer337169371.logProbe([
                                    89,
                                    34,
                                    89,
                                    41
                                ], __recognizer337169371.logProbe([
                                    89,
                                    32,
                                    89,
                                    33
                                ], t).options).delayOut) === 0) {
                                (function () {
                                    var obj = __recognizer337169371.logProbe([
                                            90,
                                            32,
                                            90,
                                            33
                                        ], t), fn = __recognizer337169371.logProbe([
                                            90,
                                            34,
                                            90,
                                            38
                                        ], obj.hide);
                                    return fn.apply(obj, arguments);
                                }.bind(this)());
                            } else {
                                __recognizer337169371.logProbe([
                                    92,
                                    32,
                                    93,
                                    95
                                ], __recognizer337169371.logProbe([
                                    92,
                                    32,
                                    92,
                                    42
                                ], setTimeout)(function () {
                                    __recognizer337169371.logEntry([
                                        92,
                                        43,
                                        92,
                                        51
                                    ], arguments);
                                    if (__recognizer337169371.logProbe([
                                            93,
                                            42,
                                            93,
                                            52
                                        ], __recognizer337169371.logProbe([
                                            93,
                                            40,
                                            93,
                                            41
                                        ], t).hoverState) == 'out')
                                        (function () {
                                            var obj = __recognizer337169371.logProbe([
                                                    93,
                                                    63,
                                                    93,
                                                    64
                                                ], t), fn = __recognizer337169371.logProbe([
                                                    93,
                                                    65,
                                                    93,
                                                    69
                                                ], obj.hide);
                                            return fn.apply(obj, arguments);
                                        }.bind(this)());
                                }, __recognizer337169371.logProbe([
                                    93,
                                    86,
                                    93,
                                    94
                                ], __recognizer337169371.logProbe([
                                    93,
                                    78,
                                    93,
                                    85
                                ], __recognizer337169371.logProbe([
                                    93,
                                    76,
                                    93,
                                    77
                                ], t).options).delayOut)));
                            }
                        }
                    };
                };
                (function () {
                    var obj = __recognizer337169371.logProbe([
                            98,
                            15,
                            98,
                            19
                        ], $tip), fn = __recognizer337169371.logProbe([
                            98,
                            20,
                            98,
                            25
                        ], obj.hover);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer337169371.logProbe([
                    98,
                    26,
                    98,
                    43
                ], __recognizer337169371.logProbe([
                    98,
                    26,
                    98,
                    37
                ], set_hovered)(true)), __recognizer337169371.logProbe([
                    98,
                    45,
                    98,
                    63
                ], __recognizer337169371.logProbe([
                    98,
                    45,
                    98,
                    56
                ], set_hovered)(false))));
            }
        },
        hide: function () {
            __recognizer337169371.logEntry([
                102,
                14,
                102,
                22
            ], arguments);
            if (__recognizer337169371.logProbe([
                    103,
                    29,
                    103,
                    33
                ], __recognizer337169371.logProbe([
                    103,
                    21,
                    103,
                    28
                ], __recognizer337169371.logProbe([
                    103,
                    16,
                    103,
                    20
                ], this).options).fade)) {
                (function () {
                    var obj = function () {
                            var obj = function () {
                                    var obj = __recognizer337169371.logProbe([
                                            104,
                                            16,
                                            104,
                                            20
                                        ], this), fn = __recognizer337169371.logProbe([
                                            104,
                                            21,
                                            104,
                                            24
                                        ], obj.tip);
                                    return fn.apply(obj, arguments);
                                }.bind(this)(), fn = __recognizer337169371.logProbe([
                                    104,
                                    27,
                                    104,
                                    31
                                ], obj.stop);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer337169371.logProbe([
                            104,
                            34,
                            104,
                            41
                        ], obj.fadeOut);
                    return fn.apply(obj, arguments);
                }.bind(this)(function () {
                    __recognizer337169371.logEntry([
                        104,
                        42,
                        104,
                        50
                    ], arguments);
                    (function () {
                        var obj = __recognizer337169371.logProbe([
                                104,
                                55,
                                104,
                                62
                            ], __recognizer337169371.logProbe([
                                104,
                                55,
                                104,
                                56
                            ], $)(__recognizer337169371.logProbe([
                                104,
                                57,
                                104,
                                61
                            ], this))), fn = __recognizer337169371.logProbe([
                                104,
                                63,
                                104,
                                69
                            ], obj.remove);
                        return fn.apply(obj, arguments);
                    }.bind(this)());
                }));
            } else {
                (function () {
                    var obj = function () {
                            var obj = __recognizer337169371.logProbe([
                                    106,
                                    16,
                                    106,
                                    20
                                ], this), fn = __recognizer337169371.logProbe([
                                    106,
                                    21,
                                    106,
                                    24
                                ], obj.tip);
                            return fn.apply(obj, arguments);
                        }.bind(this)(), fn = __recognizer337169371.logProbe([
                            106,
                            27,
                            106,
                            33
                        ], obj.remove);
                    return fn.apply(obj, arguments);
                }.bind(this)());
            }
        },
        fixTitle: function () {
            __recognizer337169371.logEntry([
                110,
                18,
                110,
                26
            ], arguments);
            var $e = __recognizer337169371.logProbe([
                    111,
                    26,
                    111,
                    34
                ], __recognizer337169371.logProbe([
                    111,
                    21,
                    111,
                    25
                ], this).$element);
            if (function () {
                    var obj = __recognizer337169371.logProbe([
                            113,
                            16,
                            113,
                            18
                        ], $e), fn = __recognizer337169371.logProbe([
                            113,
                            19,
                            113,
                            23
                        ], obj.attr);
                    return fn.apply(obj, arguments);
                }.bind(this)('title') || typeof function () {
                    var obj = __recognizer337169371.logProbe([
                            113,
                            43,
                            113,
                            45
                        ], $e), fn = __recognizer337169371.logProbe([
                            113,
                            46,
                            113,
                            50
                        ], obj.attr);
                    return fn.apply(obj, arguments);
                }.bind(this)('original-title') != 'string') {
                (function () {
                    var obj = function () {
                            var obj = __recognizer337169371.logProbe([
                                    114,
                                    16,
                                    114,
                                    18
                                ], $e), fn = __recognizer337169371.logProbe([
                                    114,
                                    19,
                                    114,
                                    23
                                ], obj.attr);
                            return fn.apply(obj, arguments);
                        }.bind(this)('original-title', function () {
                            var obj = __recognizer337169371.logProbe([
                                    114,
                                    42,
                                    114,
                                    44
                                ], $e), fn = __recognizer337169371.logProbe([
                                    114,
                                    45,
                                    114,
                                    49
                                ], obj.attr);
                            return fn.apply(obj, arguments);
                        }.bind(this)('title') || ''), fn = __recognizer337169371.logProbe([
                            114,
                            66,
                            114,
                            76
                        ], obj.removeAttr);
                    return fn.apply(obj, arguments);
                }.bind(this)('title'));
            }
            if (typeof __recognizer337169371.logProbe([
                    116,
                    34,
                    116,
                    56
                ], __recognizer337169371.logProbe([
                    116,
                    26,
                    116,
                    33
                ], __recognizer337169371.logProbe([
                    116,
                    23,
                    116,
                    25
                ], $e).context).nearestViewportElement) == 'object') {
                if (__recognizer337169371.logProbe([
                        117,
                        41,
                        117,
                        47
                    ], function () {
                        var obj = __recognizer337169371.logProbe([
                                117,
                                20,
                                117,
                                22
                            ], $e), fn = __recognizer337169371.logProbe([
                                117,
                                23,
                                117,
                                31
                            ], obj.children);
                        return fn.apply(obj, arguments);
                    }.bind(this)('title').length)) {
                    (function () {
                        var obj = function () {
                                var obj = function () {
                                        var obj = __recognizer337169371.logProbe([
                                                118,
                                                20,
                                                118,
                                                22
                                            ], $e), fn = __recognizer337169371.logProbe([
                                                118,
                                                23,
                                                118,
                                                29
                                            ], obj.append);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)('<original-title>' + (function () {
                                        var obj = function () {
                                                var obj = __recognizer337169371.logProbe([
                                                        118,
                                                        52,
                                                        118,
                                                        54
                                                    ], $e), fn = __recognizer337169371.logProbe([
                                                        118,
                                                        55,
                                                        118,
                                                        63
                                                    ], obj.children);
                                                return fn.apply(obj, arguments);
                                            }.bind(this)('title'), fn = __recognizer337169371.logProbe([
                                                118,
                                                73,
                                                118,
                                                77
                                            ], obj.text);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)() || '') + '</original-title>'), fn = __recognizer337169371.logProbe([
                                        119,
                                        25,
                                        119,
                                        33
                                    ], obj.children);
                                return fn.apply(obj, arguments);
                            }.bind(this)('title'), fn = __recognizer337169371.logProbe([
                                119,
                                43,
                                119,
                                49
                            ], obj.remove);
                        return fn.apply(obj, arguments);
                    }.bind(this)());
                }
            }
        },
        getTitle: function () {
            __recognizer337169371.logEntry([
                124,
                18,
                124,
                26
            ], arguments);
            var title, $e = __recognizer337169371.logProbe([
                    126,
                    33,
                    126,
                    41
                ], __recognizer337169371.logProbe([
                    126,
                    28,
                    126,
                    32
                ], this).$element), o = __recognizer337169371.logProbe([
                    126,
                    52,
                    126,
                    59
                ], __recognizer337169371.logProbe([
                    126,
                    47,
                    126,
                    51
                ], this).options);
            (function () {
                var obj = __recognizer337169371.logProbe([
                        127,
                        12,
                        127,
                        16
                    ], this), fn = __recognizer337169371.logProbe([
                        127,
                        17,
                        127,
                        25
                    ], obj.fixTitle);
                return fn.apply(obj, arguments);
            }.bind(this)());
            if (typeof __recognizer337169371.logProbe([
                    129,
                    25,
                    129,
                    30
                ], __recognizer337169371.logProbe([
                    129,
                    23,
                    129,
                    24
                ], o).title) == 'string') {
                var title_name = __recognizer337169371.logProbe([
                        130,
                        35,
                        130,
                        40
                    ], __recognizer337169371.logProbe([
                        130,
                        33,
                        130,
                        34
                    ], o).title) == 'title' ? 'original-title' : __recognizer337169371.logProbe([
                        130,
                        75,
                        130,
                        80
                    ], __recognizer337169371.logProbe([
                        130,
                        73,
                        130,
                        74
                    ], o).title);
                if (__recognizer337169371.logProbe([
                        131,
                        44,
                        131,
                        50
                    ], function () {
                        var obj = __recognizer337169371.logProbe([
                                131,
                                20,
                                131,
                                22
                            ], $e), fn = __recognizer337169371.logProbe([
                                131,
                                23,
                                131,
                                31
                            ], obj.children);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer337169371.logProbe([
                        131,
                        32,
                        131,
                        42
                    ], title_name)).length)) {
                    title = function () {
                        var obj = function () {
                                var obj = __recognizer337169371.logProbe([
                                        132,
                                        28,
                                        132,
                                        30
                                    ], $e), fn = __recognizer337169371.logProbe([
                                        132,
                                        31,
                                        132,
                                        39
                                    ], obj.children);
                                return fn.apply(obj, arguments);
                            }.bind(this)(__recognizer337169371.logProbe([
                                132,
                                40,
                                132,
                                50
                            ], title_name)), fn = __recognizer337169371.logProbe([
                                132,
                                52,
                                132,
                                56
                            ], obj.html);
                        return fn.apply(obj, arguments);
                    }.bind(this)();
                } else {
                    title = function () {
                        var obj = __recognizer337169371.logProbe([
                                134,
                                28,
                                134,
                                30
                            ], $e), fn = __recognizer337169371.logProbe([
                                134,
                                31,
                                134,
                                35
                            ], obj.attr);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer337169371.logProbe([
                        134,
                        36,
                        134,
                        46
                    ], title_name));
                }
            } else if (typeof __recognizer337169371.logProbe([
                    137,
                    32,
                    137,
                    37
                ], __recognizer337169371.logProbe([
                    137,
                    30,
                    137,
                    31
                ], o).title) == 'function') {
                title = function () {
                    var obj = __recognizer337169371.logProbe([
                            138,
                            26,
                            138,
                            31
                        ], __recognizer337169371.logProbe([
                            138,
                            24,
                            138,
                            25
                        ], o).title), fn = __recognizer337169371.logProbe([
                            138,
                            32,
                            138,
                            36
                        ], obj.call);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer337169371.logProbe([
                    138,
                    40,
                    138,
                    41
                ], __recognizer337169371.logProbe([
                    138,
                    37,
                    138,
                    39
                ], $e)[0]));
            }
            title = function () {
                var obj = '' + __recognizer337169371.logProbe([
                        140,
                        26,
                        140,
                        31
                    ], title), fn = __recognizer337169371.logProbe([
                        140,
                        33,
                        140,
                        40
                    ], obj.replace);
                return fn.apply(obj, arguments);
            }.bind(this)(/(^\s*|\s*$)/, '');
            return __recognizer337169371.logProbe([
                141,
                19,
                141,
                24
            ], title) || __recognizer337169371.logProbe([
                141,
                30,
                141,
                38
            ], __recognizer337169371.logProbe([
                141,
                28,
                141,
                29
            ], o).fallback);
        },
        tip: function () {
            __recognizer337169371.logEntry([
                144,
                13,
                144,
                21
            ], arguments);
            if (!__recognizer337169371.logProbe([
                    145,
                    22,
                    145,
                    26
                ], __recognizer337169371.logProbe([
                    145,
                    17,
                    145,
                    21
                ], this).$tip)) {
                this.$tip = function () {
                    var obj = __recognizer337169371.logProbe([
                            146,
                            28,
                            146,
                            58
                        ], __recognizer337169371.logProbe([
                            146,
                            28,
                            146,
                            29
                        ], $)('<div class="tipsy"></div>')), fn = __recognizer337169371.logProbe([
                            146,
                            59,
                            146,
                            63
                        ], obj.html);
                    return fn.apply(obj, arguments);
                }.bind(this)('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return __recognizer337169371.logProbe([
                148,
                24,
                148,
                28
            ], __recognizer337169371.logProbe([
                148,
                19,
                148,
                23
            ], this).$tip);
        },
        validate: function () {
            __recognizer337169371.logEntry([
                151,
                18,
                151,
                26
            ], arguments);
            if (!__recognizer337169371.logProbe([
                    152,
                    34,
                    152,
                    44
                ], __recognizer337169371.logProbe([
                    152,
                    31,
                    152,
                    32
                ], __recognizer337169371.logProbe([
                    152,
                    22,
                    152,
                    30
                ], __recognizer337169371.logProbe([
                    152,
                    17,
                    152,
                    21
                ], this).$element)[0]).parentNode)) {
                (function () {
                    var obj = __recognizer337169371.logProbe([
                            153,
                            16,
                            153,
                            20
                        ], this), fn = __recognizer337169371.logProbe([
                            153,
                            21,
                            153,
                            25
                        ], obj.hide);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                this.$element = null;
                this.options = null;
            }
        },
        enable: function () {
            __recognizer337169371.logEntry([
                159,
                16,
                159,
                24
            ], arguments);
            this.enabled = true;
        },
        disable: function () {
            __recognizer337169371.logEntry([
                160,
                17,
                160,
                25
            ], arguments);
            this.enabled = false;
        },
        toggleEnabled: function () {
            __recognizer337169371.logEntry([
                161,
                23,
                161,
                31
            ], arguments);
            this.enabled = !__recognizer337169371.logProbe([
                161,
                57,
                161,
                64
            ], __recognizer337169371.logProbe([
                161,
                52,
                161,
                56
            ], this).enabled);
        }
    };
    $.fn.tipsy = function (options) {
        __recognizer337169371.logEntry([
            164,
            17,
            164,
            25
        ], arguments);
        if (__recognizer337169371.logProbe([
                166,
                12,
                166,
                19
            ], options) === true) {
            return function () {
                var obj = __recognizer337169371.logProbe([
                        167,
                        19,
                        167,
                        23
                    ], this), fn = __recognizer337169371.logProbe([
                        167,
                        24,
                        167,
                        28
                    ], obj.data);
                return fn.apply(obj, arguments);
            }.bind(this)('tipsy');
        } else if (typeof __recognizer337169371.logProbe([
                168,
                26,
                168,
                33
            ], options) == 'string') {
            var tipsy = function () {
                    var obj = __recognizer337169371.logProbe([
                            169,
                            24,
                            169,
                            28
                        ], this), fn = __recognizer337169371.logProbe([
                            169,
                            29,
                            169,
                            33
                        ], obj.data);
                    return fn.apply(obj, arguments);
                }.bind(this)('tipsy');
            if (__recognizer337169371.logProbe([
                    170,
                    16,
                    170,
                    21
                ], tipsy))
                (function () {
                    var obj = __recognizer337169371.logProbe([
                            170,
                            23,
                            170,
                            28
                        ], tipsy), fn = __recognizer337169371.logProbe([
                            170,
                            29,
                            170,
                            36
                        ], obj.options);
                    return fn.apply(obj, arguments);
                }.bind(this)());
            return __recognizer337169371.logProbe([
                171,
                19,
                171,
                23
            ], this);
        }
        options = function () {
            var obj = __recognizer337169371.logProbe([
                    174,
                    18,
                    174,
                    19
                ], $), fn = __recognizer337169371.logProbe([
                    174,
                    20,
                    174,
                    26
                ], obj.extend);
            return fn.apply(obj, arguments);
        }.bind(this)({}, __recognizer337169371.logProbe([
            174,
            42,
            174,
            50
        ], __recognizer337169371.logProbe([
            174,
            36,
            174,
            41
        ], __recognizer337169371.logProbe([
            174,
            33,
            174,
            35
        ], __recognizer337169371.logProbe([
            174,
            31,
            174,
            32
        ], $).fn).tipsy).defaults), __recognizer337169371.logProbe([
            174,
            52,
            174,
            59
        ], options));
        if (__recognizer337169371.logProbe([
                176,
                20,
                176,
                29
            ], __recognizer337169371.logProbe([
                176,
                12,
                176,
                19
            ], options).hoverlock) && __recognizer337169371.logProbe([
                176,
                41,
                176,
                49
            ], __recognizer337169371.logProbe([
                176,
                33,
                176,
                40
            ], options).delayOut) === 0) {
            options.delayOut = 100;
        }
        function get(ele) {
            __recognizer337169371.logEntry([
                180,
                17,
                180,
                20
            ], arguments);
            var tipsy = function () {
                    var obj = __recognizer337169371.logProbe([
                            181,
                            24,
                            181,
                            25
                        ], $), fn = __recognizer337169371.logProbe([
                            181,
                            26,
                            181,
                            30
                        ], obj.data);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer337169371.logProbe([
                    181,
                    31,
                    181,
                    34
                ], ele), 'tipsy');
            if (!__recognizer337169371.logProbe([
                    182,
                    17,
                    182,
                    22
                ], tipsy)) {
                tipsy = new (__recognizer337169371.logProbe([
                    183,
                    28,
                    183,
                    33
                ], Tipsy))(__recognizer337169371.logProbe([
                    183,
                    34,
                    183,
                    37
                ], ele), function () {
                    var obj = __recognizer337169371.logProbe([
                            183,
                            44,
                            183,
                            49
                        ], __recognizer337169371.logProbe([
                            183,
                            41,
                            183,
                            43
                        ], __recognizer337169371.logProbe([
                            183,
                            39,
                            183,
                            40
                        ], $).fn).tipsy), fn = __recognizer337169371.logProbe([
                            183,
                            50,
                            183,
                            64
                        ], obj.elementOptions);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer337169371.logProbe([
                    183,
                    65,
                    183,
                    68
                ], ele), __recognizer337169371.logProbe([
                    183,
                    70,
                    183,
                    77
                ], options)));
                (function () {
                    var obj = __recognizer337169371.logProbe([
                            184,
                            16,
                            184,
                            17
                        ], $), fn = __recognizer337169371.logProbe([
                            184,
                            18,
                            184,
                            22
                        ], obj.data);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer337169371.logProbe([
                    184,
                    23,
                    184,
                    26
                ], ele), 'tipsy', __recognizer337169371.logProbe([
                    184,
                    37,
                    184,
                    42
                ], tipsy)));
            }
            return __recognizer337169371.logProbe([
                186,
                19,
                186,
                24
            ], tipsy);
        }
        function enter() {
            __recognizer337169371.logEntry([
                189,
                17,
                189,
                22
            ], arguments);
            var tipsy = __recognizer337169371.logProbe([
                    190,
                    24,
                    190,
                    33
                ], __recognizer337169371.logProbe([
                    190,
                    24,
                    190,
                    27
                ], get)(__recognizer337169371.logProbe([
                    190,
                    28,
                    190,
                    32
                ], this)));
            tipsy.hoverState = 'in';
            if (__recognizer337169371.logProbe([
                    192,
                    24,
                    192,
                    31
                ], __recognizer337169371.logProbe([
                    192,
                    16,
                    192,
                    23
                ], options).delayIn) === 0) {
                (function () {
                    var obj = __recognizer337169371.logProbe([
                            193,
                            16,
                            193,
                            21
                        ], tipsy), fn = __recognizer337169371.logProbe([
                            193,
                            22,
                            193,
                            26
                        ], obj.show);
                    return fn.apply(obj, arguments);
                }.bind(this)());
            } else {
                (function () {
                    var obj = __recognizer337169371.logProbe([
                            195,
                            16,
                            195,
                            21
                        ], tipsy), fn = __recognizer337169371.logProbe([
                            195,
                            22,
                            195,
                            30
                        ], obj.fixTitle);
                    return fn.apply(obj, arguments);
                }.bind(this)());
                __recognizer337169371.logProbe([
                    196,
                    16,
                    196,
                    103
                ], __recognizer337169371.logProbe([
                    196,
                    16,
                    196,
                    26
                ], setTimeout)(function () {
                    __recognizer337169371.logEntry([
                        196,
                        27,
                        196,
                        35
                    ], arguments);
                    if (__recognizer337169371.logProbe([
                            196,
                            50,
                            196,
                            60
                        ], __recognizer337169371.logProbe([
                            196,
                            44,
                            196,
                            49
                        ], tipsy).hoverState) == 'in')
                        (function () {
                            var obj = __recognizer337169371.logProbe([
                                    196,
                                    70,
                                    196,
                                    75
                                ], tipsy), fn = __recognizer337169371.logProbe([
                                    196,
                                    76,
                                    196,
                                    80
                                ], obj.show);
                            return fn.apply(obj, arguments);
                        }.bind(this)());
                }, __recognizer337169371.logProbe([
                    196,
                    95,
                    196,
                    102
                ], __recognizer337169371.logProbe([
                    196,
                    87,
                    196,
                    94
                ], options).delayIn)));
            }
        }
        function leave() {
            __recognizer337169371.logEntry([
                200,
                17,
                200,
                22
            ], arguments);
            var tipsy = __recognizer337169371.logProbe([
                    201,
                    24,
                    201,
                    33
                ], __recognizer337169371.logProbe([
                    201,
                    24,
                    201,
                    27
                ], get)(__recognizer337169371.logProbe([
                    201,
                    28,
                    201,
                    32
                ], this)));
            tipsy.hoverState = 'out';
            if (__recognizer337169371.logProbe([
                    203,
                    24,
                    203,
                    32
                ], __recognizer337169371.logProbe([
                    203,
                    16,
                    203,
                    23
                ], options).delayOut) === 0) {
                (function () {
                    var obj = __recognizer337169371.logProbe([
                            204,
                            16,
                            204,
                            21
                        ], tipsy), fn = __recognizer337169371.logProbe([
                            204,
                            22,
                            204,
                            26
                        ], obj.hide);
                    return fn.apply(obj, arguments);
                }.bind(this)());
            } else {
                var to = function () {
                    __recognizer337169371.logEntry([
                        206,
                        25,
                        206,
                        33
                    ], arguments);
                    if (!__recognizer337169371.logProbe([
                            207,
                            31,
                            207,
                            41
                        ], __recognizer337169371.logProbe([
                            207,
                            25,
                            207,
                            30
                        ], tipsy).tipHovered) || !__recognizer337169371.logProbe([
                            207,
                            54,
                            207,
                            63
                        ], __recognizer337169371.logProbe([
                            207,
                            46,
                            207,
                            53
                        ], options).hoverlock)) {
                        if (__recognizer337169371.logProbe([
                                208,
                                34,
                                208,
                                44
                            ], __recognizer337169371.logProbe([
                                208,
                                28,
                                208,
                                33
                            ], tipsy).hoverState) == 'out')
                            (function () {
                                var obj = __recognizer337169371.logProbe([
                                        208,
                                        55,
                                        208,
                                        60
                                    ], tipsy), fn = __recognizer337169371.logProbe([
                                        208,
                                        61,
                                        208,
                                        65
                                    ], obj.hide);
                                return fn.apply(obj, arguments);
                            }.bind(this)());
                    }
                };
                __recognizer337169371.logProbe([
                    211,
                    16,
                    211,
                    48
                ], __recognizer337169371.logProbe([
                    211,
                    16,
                    211,
                    26
                ], setTimeout)(__recognizer337169371.logProbe([
                    211,
                    27,
                    211,
                    29
                ], to), __recognizer337169371.logProbe([
                    211,
                    39,
                    211,
                    47
                ], __recognizer337169371.logProbe([
                    211,
                    31,
                    211,
                    38
                ], options).delayOut)));
            }
        }
        if (__recognizer337169371.logProbe([
                215,
                20,
                215,
                27
            ], __recognizer337169371.logProbe([
                215,
                12,
                215,
                19
            ], options).trigger) != 'manual') {
            var binder = __recognizer337169371.logProbe([
                    216,
                    33,
                    216,
                    37
                ], __recognizer337169371.logProbe([
                    216,
                    25,
                    216,
                    32
                ], options).live) ? 'live' : 'bind', eventIn = __recognizer337169371.logProbe([
                    217,
                    34,
                    217,
                    41
                ], __recognizer337169371.logProbe([
                    217,
                    26,
                    217,
                    33
                ], options).trigger) == 'hover' ? 'mouseenter' : 'focus', eventOut = __recognizer337169371.logProbe([
                    218,
                    35,
                    218,
                    42
                ], __recognizer337169371.logProbe([
                    218,
                    27,
                    218,
                    34
                ], options).trigger) == 'hover' ? 'mouseleave' : 'blur';
            (function () {
                var obj = function () {
                        var obj = __recognizer337169371.logProbe([
                                219,
                                12,
                                219,
                                16
                            ], this), fn = __recognizer337169371.logProbe([
                                219,
                                17,
                                219,
                                23
                            ], obj.binder);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer337169371.logProbe([
                        219,
                        25,
                        219,
                        32
                    ], eventIn), __recognizer337169371.logProbe([
                        219,
                        34,
                        219,
                        39
                    ], enter)), fn = __recognizer337169371.logProbe([
                        219,
                        41,
                        219,
                        47
                    ], obj.binder);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer337169371.logProbe([
                219,
                49,
                219,
                57
            ], eventOut), __recognizer337169371.logProbe([
                219,
                59,
                219,
                64
            ], leave)));
        }
        return __recognizer337169371.logProbe([
            222,
            15,
            222,
            19
        ], this);
    };
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover',
        hoverlock: false
    };
    $.fn.tipsy.elementOptions = function (ele, options) {
        __recognizer337169371.logEntry([
            246,
            32,
            246,
            40
        ], arguments);
        return __recognizer337169371.logProbe([
            247,
            17,
            247,
            25
        ], __recognizer337169371.logProbe([
            247,
            15,
            247,
            16
        ], $).metadata) ? function () {
            var obj = __recognizer337169371.logProbe([
                    247,
                    28,
                    247,
                    29
                ], $), fn = __recognizer337169371.logProbe([
                    247,
                    30,
                    247,
                    36
                ], obj.extend);
            return fn.apply(obj, arguments);
        }.bind(this)({}, __recognizer337169371.logProbe([
            247,
            41,
            247,
            48
        ], options), function () {
            var obj = __recognizer337169371.logProbe([
                    247,
                    50,
                    247,
                    56
                ], __recognizer337169371.logProbe([
                    247,
                    50,
                    247,
                    51
                ], $)(__recognizer337169371.logProbe([
                    247,
                    52,
                    247,
                    55
                ], ele))), fn = __recognizer337169371.logProbe([
                    247,
                    57,
                    247,
                    65
                ], obj.metadata);
            return fn.apply(obj, arguments);
        }.bind(this)()) : __recognizer337169371.logProbe([
            247,
            71,
            247,
            78
        ], options);
    };
    $.fn.tipsy.autoNS = function () {
        __recognizer337169371.logEntry([
            250,
            24,
            250,
            32
        ], arguments);
        return __recognizer337169371.logProbe([
            251,
            32,
            251,
            35
        ], function () {
            var obj = __recognizer337169371.logProbe([
                    251,
                    15,
                    251,
                    22
                ], __recognizer337169371.logProbe([
                    251,
                    15,
                    251,
                    16
                ], $)(__recognizer337169371.logProbe([
                    251,
                    17,
                    251,
                    21
                ], this))), fn = __recognizer337169371.logProbe([
                    251,
                    23,
                    251,
                    29
                ], obj.offset);
            return fn.apply(obj, arguments);
        }.bind(this)().top) > function () {
            var obj = __recognizer337169371.logProbe([
                    251,
                    39,
                    251,
                    50
                ], __recognizer337169371.logProbe([
                    251,
                    39,
                    251,
                    40
                ], $)(__recognizer337169371.logProbe([
                    251,
                    41,
                    251,
                    49
                ], document))), fn = __recognizer337169371.logProbe([
                    251,
                    51,
                    251,
                    60
                ], obj.scrollTop);
            return fn.apply(obj, arguments);
        }.bind(this)() + function () {
            var obj = __recognizer337169371.logProbe([
                    251,
                    65,
                    251,
                    74
                ], __recognizer337169371.logProbe([
                    251,
                    65,
                    251,
                    66
                ], $)(__recognizer337169371.logProbe([
                    251,
                    67,
                    251,
                    73
                ], window))), fn = __recognizer337169371.logProbe([
                    251,
                    75,
                    251,
                    81
                ], obj.height);
            return fn.apply(obj, arguments);
        }.bind(this)() / 2 ? 's' : 'n';
    };
    $.fn.tipsy.autoWE = function () {
        __recognizer337169371.logEntry([
            254,
            24,
            254,
            32
        ], arguments);
        return __recognizer337169371.logProbe([
            255,
            32,
            255,
            36
        ], function () {
            var obj = __recognizer337169371.logProbe([
                    255,
                    15,
                    255,
                    22
                ], __recognizer337169371.logProbe([
                    255,
                    15,
                    255,
                    16
                ], $)(__recognizer337169371.logProbe([
                    255,
                    17,
                    255,
                    21
                ], this))), fn = __recognizer337169371.logProbe([
                    255,
                    23,
                    255,
                    29
                ], obj.offset);
            return fn.apply(obj, arguments);
        }.bind(this)().left) > function () {
            var obj = __recognizer337169371.logProbe([
                    255,
                    40,
                    255,
                    51
                ], __recognizer337169371.logProbe([
                    255,
                    40,
                    255,
                    41
                ], $)(__recognizer337169371.logProbe([
                    255,
                    42,
                    255,
                    50
                ], document))), fn = __recognizer337169371.logProbe([
                    255,
                    52,
                    255,
                    62
                ], obj.scrollLeft);
            return fn.apply(obj, arguments);
        }.bind(this)() + function () {
            var obj = __recognizer337169371.logProbe([
                    255,
                    67,
                    255,
                    76
                ], __recognizer337169371.logProbe([
                    255,
                    67,
                    255,
                    68
                ], $)(__recognizer337169371.logProbe([
                    255,
                    69,
                    255,
                    75
                ], window))), fn = __recognizer337169371.logProbe([
                    255,
                    77,
                    255,
                    82
                ], obj.width);
            return fn.apply(obj, arguments);
        }.bind(this)() / 2 ? 'e' : 'w';
    };
    $.fn.tipsy.autoBounds = function (margin, prefer) {
        __recognizer337169371.logEntry([
            273,
            29,
            273,
            37
        ], arguments);
        return function () {
            __recognizer337169371.logEntry([
                274,
                9,
                274,
                17
            ], arguments);
            var dir = {
                    ns: __recognizer337169371.logProbe([
                        275,
                        25,
                        275,
                        26
                    ], __recognizer337169371.logProbe([
                        275,
                        18,
                        275,
                        24
                    ], prefer)[0]),
                    ew: __recognizer337169371.logProbe([
                        275,
                        41,
                        275,
                        47
                    ], __recognizer337169371.logProbe([
                        275,
                        34,
                        275,
                        40
                    ], prefer).length) > 1 ? __recognizer337169371.logProbe([
                        275,
                        61,
                        275,
                        62
                    ], __recognizer337169371.logProbe([
                        275,
                        54,
                        275,
                        60
                    ], prefer)[1]) : false
                }, boundTop = function () {
                    var obj = __recognizer337169371.logProbe([
                            276,
                            18,
                            276,
                            29
                        ], __recognizer337169371.logProbe([
                            276,
                            18,
                            276,
                            19
                        ], $)(__recognizer337169371.logProbe([
                            276,
                            20,
                            276,
                            28
                        ], document))), fn = __recognizer337169371.logProbe([
                            276,
                            30,
                            276,
                            39
                        ], obj.scrollTop);
                    return fn.apply(obj, arguments);
                }.bind(this)() + __recognizer337169371.logProbe([
                    276,
                    44,
                    276,
                    50
                ], margin), boundLeft = function () {
                    var obj = __recognizer337169371.logProbe([
                            277,
                            19,
                            277,
                            30
                        ], __recognizer337169371.logProbe([
                            277,
                            19,
                            277,
                            20
                        ], $)(__recognizer337169371.logProbe([
                            277,
                            21,
                            277,
                            29
                        ], document))), fn = __recognizer337169371.logProbe([
                            277,
                            31,
                            277,
                            41
                        ], obj.scrollLeft);
                    return fn.apply(obj, arguments);
                }.bind(this)() + __recognizer337169371.logProbe([
                    277,
                    46,
                    277,
                    52
                ], margin), $this = __recognizer337169371.logProbe([
                    278,
                    15,
                    278,
                    22
                ], __recognizer337169371.logProbe([
                    278,
                    15,
                    278,
                    16
                ], $)(__recognizer337169371.logProbe([
                    278,
                    17,
                    278,
                    21
                ], this)));
            if (__recognizer337169371.logProbe([
                    280,
                    22,
                    280,
                    25
                ], function () {
                    var obj = __recognizer337169371.logProbe([
                            280,
                            7,
                            280,
                            12
                        ], $this), fn = __recognizer337169371.logProbe([
                            280,
                            13,
                            280,
                            19
                        ], obj.offset);
                    return fn.apply(obj, arguments);
                }.bind(this)().top) < __recognizer337169371.logProbe([
                    280,
                    28,
                    280,
                    36
                ], boundTop))
                dir.ns = 'n';
            if (__recognizer337169371.logProbe([
                    281,
                    22,
                    281,
                    26
                ], function () {
                    var obj = __recognizer337169371.logProbe([
                            281,
                            7,
                            281,
                            12
                        ], $this), fn = __recognizer337169371.logProbe([
                            281,
                            13,
                            281,
                            19
                        ], obj.offset);
                    return fn.apply(obj, arguments);
                }.bind(this)().left) < __recognizer337169371.logProbe([
                    281,
                    29,
                    281,
                    38
                ], boundLeft))
                dir.ew = 'w';
            if (function () {
                    var obj = __recognizer337169371.logProbe([
                            282,
                            7,
                            282,
                            16
                        ], __recognizer337169371.logProbe([
                            282,
                            7,
                            282,
                            8
                        ], $)(__recognizer337169371.logProbe([
                            282,
                            9,
                            282,
                            15
                        ], window))), fn = __recognizer337169371.logProbe([
                            282,
                            17,
                            282,
                            22
                        ], obj.width);
                    return fn.apply(obj, arguments);
                }.bind(this)() + function () {
                    var obj = __recognizer337169371.logProbe([
                            282,
                            27,
                            282,
                            38
                        ], __recognizer337169371.logProbe([
                            282,
                            27,
                            282,
                            28
                        ], $)(__recognizer337169371.logProbe([
                            282,
                            29,
                            282,
                            37
                        ], document))), fn = __recognizer337169371.logProbe([
                            282,
                            39,
                            282,
                            49
                        ], obj.scrollLeft);
                    return fn.apply(obj, arguments);
                }.bind(this)() - __recognizer337169371.logProbe([
                    282,
                    69,
                    282,
                    73
                ], function () {
                    var obj = __recognizer337169371.logProbe([
                            282,
                            54,
                            282,
                            59
                        ], $this), fn = __recognizer337169371.logProbe([
                            282,
                            60,
                            282,
                            66
                        ], obj.offset);
                    return fn.apply(obj, arguments);
                }.bind(this)().left) < __recognizer337169371.logProbe([
                    282,
                    76,
                    282,
                    82
                ], margin))
                dir.ew = 'e';
            if (function () {
                    var obj = __recognizer337169371.logProbe([
                            283,
                            7,
                            283,
                            16
                        ], __recognizer337169371.logProbe([
                            283,
                            7,
                            283,
                            8
                        ], $)(__recognizer337169371.logProbe([
                            283,
                            9,
                            283,
                            15
                        ], window))), fn = __recognizer337169371.logProbe([
                            283,
                            17,
                            283,
                            23
                        ], obj.height);
                    return fn.apply(obj, arguments);
                }.bind(this)() + function () {
                    var obj = __recognizer337169371.logProbe([
                            283,
                            28,
                            283,
                            39
                        ], __recognizer337169371.logProbe([
                            283,
                            28,
                            283,
                            29
                        ], $)(__recognizer337169371.logProbe([
                            283,
                            30,
                            283,
                            38
                        ], document))), fn = __recognizer337169371.logProbe([
                            283,
                            40,
                            283,
                            49
                        ], obj.scrollTop);
                    return fn.apply(obj, arguments);
                }.bind(this)() - __recognizer337169371.logProbe([
                    283,
                    69,
                    283,
                    72
                ], function () {
                    var obj = __recognizer337169371.logProbe([
                            283,
                            54,
                            283,
                            59
                        ], $this), fn = __recognizer337169371.logProbe([
                            283,
                            60,
                            283,
                            66
                        ], obj.offset);
                    return fn.apply(obj, arguments);
                }.bind(this)().top) < __recognizer337169371.logProbe([
                    283,
                    75,
                    283,
                    81
                ], margin))
                dir.ns = 's';
            return __recognizer337169371.logProbe([
                285,
                14,
                285,
                16
            ], __recognizer337169371.logProbe([
                285,
                10,
                285,
                13
            ], dir).ns) + (__recognizer337169371.logProbe([
                285,
                24,
                285,
                26
            ], __recognizer337169371.logProbe([
                285,
                20,
                285,
                23
            ], dir).ew) ? __recognizer337169371.logProbe([
                285,
                33,
                285,
                35
            ], __recognizer337169371.logProbe([
                285,
                29,
                285,
                32
            ], dir).ew) : '');
        };
    };
}(__recognizer337169371.logProbe([
    288,
    3,
    288,
    9
], jQuery)));