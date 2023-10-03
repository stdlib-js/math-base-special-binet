"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(f,a){
var v=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-cospi/dist'),s=require('@stdlib/math-base-special-pow/dist'),q=require('@stdlib/constants-float64-phi/dist'),o=require('@stdlib/constants-float64-pinf/dist'),N=require('@stdlib/constants-float64-ninf/dist'),c=2.23606797749979;function p(e){var r,i;return v(e)||e===o||e===N?NaN:(r=s(q,e),i=n(e)/r,(r-i)/c)}a.exports=p
});var I=u();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
