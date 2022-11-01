// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}function o(r){return Math.abs(r)}var u,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"";u=f&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return i.call(r);t=r[c],u=c,n=null!=(o=r)&&a.call(o,u);try{r[c]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[c]=t:delete r[c],e}:function(r){return i.call(r)};var l,y=u,v="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(v&&t instanceof Uint32Array||"[object Uint32Array]"===y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var s,w=l,d="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,_="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,NaN]),t=n,r=(d&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=s,N="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,g="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),t=n,r=(N&&t instanceof Uint8Array||"[object Uint8Array]"===y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,E="function"==typeof Uint16Array?Uint16Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),t=n,r=(O&&t instanceof Uint16Array||"[object Uint16Array]"===y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T={uint16:j,uint8:I};(F=new T.uint16(1))[0]=4660;var H=52===new T.uint8(F.buffer)[0],G=!0===H?1:0,P=new h(1),L=new w(P.buffer);function M(r){return P[0]=r,L[G]}function V(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var W=-.16666666666666632;function k(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(W+o*t):r-(o*(.5*n-e*t)-n-e*W)}var x,Y,q=!0===H?0:1,C=new h(1),z=new w(C.buffer);!0===H?(x=1,Y=0):(x=0,Y=1);var B={HIGH:x,LOW:Y},D=new h(1),J=new w(D.buffer),K=B.HIGH,Q=B.LOW;function R(r,n){return J[K]=r,J[Q]=n,D[0]}var X,Z,$=Math.floor,rr=1023;!0===H?(X=1,Z=0):(X=0,Z=1);var nr={HIGH:X,LOW:Z},tr=new h(1),er=new w(tr.buffer),or=nr.HIGH,ur=nr.LOW;function fr(r,n){return tr[0]=n,r[0]=er[or],r[1]=er[ur],r}function ir(r,n){return 1===arguments.length?fr([0,0],r):fr(r,n)}var ar=[0,0];function cr(r,n){var t,e;return ir(ar,r),t=ar[0],t&=2147483647,e=M(n),R(t|=e&=2147483648,ar[1])}var lr,yr="function"==typeof Object.defineProperty?Object.defineProperty:null,vr=Object.defineProperty,pr=Object.prototype,br=pr.toString,sr=pr.__defineGetter__,wr=pr.__defineSetter__,dr=pr.__lookupGetter__,Ar=pr.__lookupSetter__;function _r(n,t,u,f){return r(n)||e(n)?(t[f]=n,t[f+u]=0,t):0!==n&&o(n)<22250738585072014e-324?(t[f]=4503599627370496*n,t[f+u]=-52,t):(t[f]=n,t[f+u]=0,t)}lr=function(){try{return yr({},"x",{}),!0}catch(r){return!1}}()?vr:function(r,n,t){var e,o,u,f;if("object"!=typeof r||null===r||"[object Array]"===br.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===br.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(dr.call(r,n)||Ar.call(r,n)?(e=r.__proto__,r.__proto__=pr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,f="set"in t,o&&(u||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&sr&&sr.call(r,n,t.get),f&&wr&&wr.call(r,n,t.set),r},lr((function(r){return _r(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:_r});var mr=[0,0],hr=[0,0];function Nr(o,u){var f,i;return 0===u||0===o||r(o)||e(o)?o:(_r(o,mr,1,0),u+=mr[1],u+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-rr|0}(o=mr[0]),u<-1074?cr(0,o):u>1023?o<0?t:n:(u<=-1023?(u+=52,i=2220446049250313e-31):i=1,ir(hr,o),f=hr[0],f&=2148532223,i*R(f|=u+rr<<20,hr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ir=16777216,Or=5.960464477539063e-8,Sr=Ur(20),Er=Ur(20),Fr=Ur(20),Tr=Ur(20);function Hr(r,n,t,e,o,u,f,i,a){var c,l,y,v,p,b,s,w,d;for(v=u,d=e[t],w=t,p=0;w>0;p++)l=Or*d|0,Tr[p]=d-Ir*l|0,d=e[w-1]+l,w-=1;if(d=Nr(d,o),d-=8*$(.125*d),d-=s=0|d,y=0,o>0?(s+=p=Tr[t-1]>>24-o,Tr[t-1]-=p<<24-o,y=Tr[t-1]>>23-o):0===o?y=Tr[t-1]>>23:d>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)w=Tr[p],0===c?0!==w&&(c=1,Tr[p]=16777216-w):Tr[p]=16777215-w;if(o>0)switch(o){case 1:Tr[t-1]&=8388607;break;case 2:Tr[t-1]&=4194303}2===y&&(d=1-d,0!==c&&(d-=Nr(1,o)))}if(0===d){for(w=0,p=t-1;p>=u;p--)w|=Tr[p];if(0===w){for(b=1;0===Tr[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[i+p]=gr[f+p],l=0,w=0;w<=i;w++)l+=r[w]*a[i+(p-w)];e[p]=l}return Hr(r,n,t+=b,e,o,u,f,i,a)}}if(0===d)for(t-=1,o-=24;0===Tr[t];)t-=1,o-=24;else(d=Nr(d,-o))>=Ir?(l=Or*d|0,Tr[t]=d-Ir*l|0,o+=24,Tr[t+=1]=l):Tr[t]=0|d;for(l=Nr(1,o),p=t;p>=0;p--)e[p]=l*Tr[p],l*=Or;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=jr[b]*e[p+b];Fr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Fr[p];for(n[0]=0===y?l:-l,l=Fr[0]-l,p=1;p<=t;p++)l+=Fr[p];return n[1]=0===y?l:-l,7&s}function Gr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Sr[a]=c<0?0:gr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Sr[f+(a-c)];Er[a]=o}return Hr(r,n,4,Er,i,4,u,f,Sr)}var Pr=Math.round;function Lr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Pr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(M(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(M(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var Mr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,kr=3*Vr,xr=4*Vr,Yr=[0,0,0],qr=[0,0];function Cr(r,n){var t,e,o,u,f,i,a;if((o=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Lr(r,o,n):o<=1073928572?r>0?(a=r-Mr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Mr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Mr,n[0]=a-Wr,n[1]=a-n[0]-Wr,2):(a=r+2*Mr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Lr(r,o,n):r>0?(a=r-3*Mr,n[0]=a-kr,n[1]=a-n[0]-kr,3):(a=r+3*Mr,n[0]=a+kr,n[1]=a-n[0]+kr,-3):1075388923===o?Lr(r,o,n):r>0?(a=r-4*Mr,n[0]=a-xr,n[1]=a-n[0]-xr,4):(a=r+4*Mr,n[0]=a+xr,n[1]=a-n[0]+xr,-4);if(o<1094263291)return Lr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return C[0]=r,z[q]}(r),a=R(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Yr[f]=0|a,a=16777216*(a-Yr[f]);for(Yr[2]=a,u=3;0===Yr[u-1];)u-=1;return i=Gr(Yr,qr,e,u),r<0?(n[0]=-qr[0],n[1]=-qr[1],-i):(n[0]=qr[0],n[1]=qr[1],i)}var zr=[0,0];function Br(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1044381696?1:V(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,zr)){case 0:return V(zr[0],zr[1]);case 1:return-k(zr[0],zr[1]);case 2:return-V(zr[0],zr[1]);default:return k(zr[0],zr[1])}}var Dr=[0,0],Jr=3.141592653589793;function Kr(n){var t,u,f,i;return r(n)||e(n)?NaN:(t=o(n))>9007199254740992?1:.5==(f=t-(u=$(t)))?0:(i=f<.25?Br(Jr*f):f<.75?function(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:k(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,Dr)){case 0:return k(Dr[0],Dr[1]);case 1:return V(Dr[0],Dr[1]);case 2:return-k(Dr[0],Dr[1]);default:return-V(Dr[0],Dr[1])}}(Jr*(f=.5-f)):-Br(Jr*(f=1-f)),u%2==1?-i:i)}function Qr(r){return $(r)===r}function Rr(r){return Qr(r/2)}function Xr(r){return Rr(r>0?r-1:r+1)}var Zr=Math.sqrt,$r=!0===H?0:1,rn=new h(1),nn=new w(rn.buffer);function tn(r,n){return rn[0]=r,nn[$r]=n>>>0,rn[0]}function en(r){return 0|r}var on=!0===H?1:0,un=new h(1),fn=new w(un.buffer);function an(r,n){return un[0]=r,fn[on]=n>>>0,un[0]}var cn=1048576,ln=[1,1.5],yn=[0,.5849624872207642],vn=[0,1.350039202129749e-8],pn=2147483647,bn=1048575,sn=1048576,wn=2147483647,dn=1083179008,An=1e300,_n=1e-300,mn=[0,0],hn=[0,0];function Nn(u,f){var i,a,c,l,y,v,p,b,s,w,d,A,_,m;if(r(u)||r(f))return NaN;if(ir(mn,f),y=mn[0],0===mn[1]){if(0===f)return 1;if(1===f)return u;if(-1===f)return 1/u;if(.5===f)return Zr(u);if(-.5===f)return 1/Zr(u);if(2===f)return u*u;if(3===f)return u*u*u;if(4===f)return(u*=u)*u;if(e(f))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:o(r)<1==(t===n)?0:n}(u,f)}if(ir(mn,u),l=mn[0],0===mn[1]){if(0===l)return function(r,e){return e===t?n:e===n?0:e>0?Xr(e)?r:0:Xr(e)?cr(n,r):n}(u,f);if(1===u)return 1;if(-1===u&&Xr(f))return-1;if(e(u))return u===t?Nn(-0,-f):f<0?0:n}if(u<0&&!1===Qr(f))return(u-u)/(u-u);if(c=o(u),i=l&wn|0,a=y&wn|0,p=y>>>31|0,v=(v=l>>>31|0)&&Xr(f)?-1:1,a>1105199104){if(a>1139802112)return function(r,n){return(2147483647&M(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(u,f);if(i<1072693247)return 1===p?v*An*An:v*_n*_n;if(i>1072693248)return 0===p?v*An*An:v*_n*_n;d=function(r,n){var t,e,o,u,f,i;return t=(f=1.9259629911266175e-8*(o=n-1)-o*o*(0===(i=o)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=tn(e=(u=1.4426950216293335*o)+f,0))-u),r[0]=e,r[1]=t,r}(hn,c)}else d=function(r,n,t){var e,o,u,f,i,a,c,l,y,v,p,b,s,w,d,A,_,m,h,N,U;return m=0,t<cn&&(m-=53,t=M(n*=9007199254740992)),m+=(t>>20)-rr|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=cn),f=tn(o=(A=(n=an(n,t))-(c=ln[N]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=an(0,e+=N<<18),d=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=tn(a=3+(u=f*f)+(d+=(i=_*(A-f*a-f*(n-(a-c))))*(f+o)),0),s=(p=-7.028461650952758e-9*(y=tn(y=(A=f*a)+(_=i*a+(d-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+vn[N])-((b=tn(b=(v=.9617967009544373*y)+p+(l=yn[N])+(w=m),0))-w-l-v),r[0]=b,r[1]=s,r}(hn,c,i);if(w=(f-(b=tn(f,0)))*d[0]+f*d[1],s=b*d[0],ir(mn,A=w+s),_=en(mn[0]),m=en(mn[1]),_>=dn){if(0!=(_-dn|m))return v*An*An;if(w+8008566259537294e-32>A-s)return v*An*An}else if((_&wn)>=1083231232){if(0!=(_-3230714880|m))return v*_n*_n;if(w<=A-s)return v*_n*_n}return A=function(r,n,t){var e,o,u,f,i,a,c,l,y,v;return y=((l=r&pn|0)>>20)-rr|0,c=0,l>1071644672&&(o=an(0,((c=r+(sn>>y+1)>>>0)&~(bn>>(y=((c&pn)>>20)-rr|0)))>>>0),c=(c&bn|sn)>>20-y>>>0,r<0&&(c=-c),n-=o),r=en(r=M(a=1-((a=(u=.6931471824645996*(o=tn(o=t+n,0)))+(f=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((i=f-(a-u))+a*i)-a))),(r+=c<<20>>>0)>>20<=0?Nr(a,c):an(a,r)}(_,s,w),v*A}return function(e){var o;return r(e)||e===n||e===t?NaN:((o=Nn(1.618033988749895,e))-Kr(e)/o)/2.23606797749979}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).binet=n();
//# sourceMappingURL=browser.js.map
