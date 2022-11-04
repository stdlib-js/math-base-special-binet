// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}function u(r){return Math.abs(r)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var f=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a,c="function"==typeof Symbol?Symbol.toStringTag:"";a=o&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return f.call(r);t=r[c],o=c,n=null!=(u=r)&&i.call(u,o);try{r[c]=void 0}catch(n){return f.call(r)}return e=f.call(r),n?r[c]=t:delete r[c],e}:function(r){return f.call(r)};var l=a,y="function"==typeof Uint32Array;var v="function"==typeof Uint32Array?Uint32Array:null;var p,b="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(y&&t instanceof Uint32Array||"[object Uint32Array]"===l(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var s=p,w="function"==typeof Float64Array;var A="function"==typeof Float64Array?Float64Array:null;var _,d="function"==typeof Float64Array?Float64Array:void 0;_=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,NaN]),t=n,r=(w&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var m=_,h="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var U,j="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(h&&t instanceof Uint8Array||"[object Uint8Array]"===l(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g=U,I="function"==typeof Uint16Array;var O="function"==typeof Uint16Array?Uint16Array:null;var S,E="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===l(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,H={uint16:S,uint8:g};(F=new H.uint16(1))[0]=4660;var T=52===new H.uint8(F.buffer)[0],G=!0===T?1:0,P=new m(1),L=new s(P.buffer);function M(r){return P[0]=r,L[G]}function V(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var W=-.16666666666666632;function k(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(W+u*t):r-(u*(.5*n-e*t)-n-e*W)}var x,Y,q=!0===T?0:1,C=new m(1),z=new s(C.buffer);!0===T?(x=1,Y=0):(x=0,Y=1);var B={HIGH:x,LOW:Y},D=new m(1),J=new s(D.buffer),K=B.HIGH,Q=B.LOW;function R(r,n){return J[K]=r,J[Q]=n,D[0]}var X,Z,$=Math.floor;!0===T?(X=1,Z=0):(X=0,Z=1);var rr={HIGH:X,LOW:Z},nr=new m(1),tr=new s(nr.buffer),er=rr.HIGH,ur=rr.LOW;function or(r,n){return nr[0]=n,r[0]=tr[er],r[1]=tr[ur],r}function fr(r,n){return 1===arguments.length?or([0,0],r):or(r,n)}var ir=[0,0];function ar(r,n){var t,e;return fr(ir,r),t=ir[0],t&=2147483647,e=M(n),R(t|=e&=2147483648,ir[1])}var cr="function"==typeof Object.defineProperty?Object.defineProperty:null;var lr,yr=Object.defineProperty,vr=Object.prototype,pr=vr.toString,br=vr.__defineGetter__,sr=vr.__defineSetter__,wr=vr.__lookupGetter__,Ar=vr.__lookupSetter__;lr=function(){try{return cr({},"x",{}),!0}catch(r){return!1}}()?yr:function(r,n,t){var e,u,o,f;if("object"!=typeof r||null===r||"[object Array]"===pr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===pr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(wr.call(r,n)||Ar.call(r,n)?(e=r.__proto__,r.__proto__=vr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,f="set"in t,u&&(o||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&br&&br.call(r,n,t.get),f&&sr&&sr.call(r,n,t.set),r};function _r(n,t,o,f){return r(n)||e(n)?(t[f]=n,t[f+o]=0,t):0!==n&&u(n)<22250738585072014e-324?(t[f]=4503599627370496*n,t[f+o]=-52,t):(t[f]=n,t[f+o]=0,t)}lr((function(r){return _r(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:_r});var dr=[0,0],mr=[0,0];function hr(u,o){var f,i;return 0===o||0===u||r(u)||e(u)?u:(_r(u,dr,1,0),o+=dr[1],o+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-1023|0}(u=dr[0]),o<-1074?ar(0,u):o>1023?u<0?t:n:(o<=-1023?(o+=52,i=2220446049250313e-31):i=1,fr(mr,u),f=mr[0],f&=2148532223,i*R(f|=o+1023<<20,mr[1])))}function Nr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gr=5.960464477539063e-8,Ir=Nr(20),Or=Nr(20),Sr=Nr(20),Er=Nr(20);function Fr(r,n,t,e,u,o,f,i,a){var c,l,y,v,p,b,s,w,A;for(v=o,A=e[t],w=t,p=0;w>0;p++)l=gr*A|0,Er[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=hr(A,u),A-=8*$(.125*A),A-=s=0|A,y=0,u>0?(s+=p=Er[t-1]>>24-u,Er[t-1]-=p<<24-u,y=Er[t-1]>>23-u):0===u?y=Er[t-1]>>23:A>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)w=Er[p],0===c?0!==w&&(c=1,Er[p]=16777216-w):Er[p]=16777215-w;if(u>0)switch(u){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=hr(1,u)))}if(0===A){for(w=0,p=t-1;p>=o;p--)w|=Er[p];if(0===w){for(b=1;0===Er[o-b];b++);for(p=t+1;p<=t+b;p++){for(a[i+p]=Ur[f+p],l=0,w=0;w<=i;w++)l+=r[w]*a[i+(p-w)];e[p]=l}return Fr(r,n,t+=b,e,u,o,f,i,a)}}if(0===A)for(t-=1,u-=24;0===Er[t];)t-=1,u-=24;else(A=hr(A,-u))>=16777216?(l=gr*A|0,Er[t]=A-16777216*l|0,u+=24,Er[t+=1]=l):Er[t]=0|A;for(l=hr(1,u),p=t;p>=0;p--)e[p]=l*Er[p],l*=gr;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=jr[b]*e[p+b];Sr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Sr[p];for(n[0]=0===y?l:-l,l=Sr[0]-l,p=1;p<=t;p++)l+=Sr[p];return n[1]=0===y?l:-l,7&s}function Hr(r,n,t,e){var u,o,f,i,a,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Ir[a]=c<0?0:Ur[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Ir[f+(a-c)];Or[a]=u}return 4,Fr(r,n,4,Or,i,4,o,f,Ir)}var Tr=Math.round;function Gr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(M(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(M(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Pr=1.5707963267341256,Lr=6077100506506192e-26,Mr=2*Lr,Vr=4*Lr,Wr=[0,0,0],kr=[0,0];function xr(r,n){var t,e,u,o,f,i,a;if((u=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Gr(r,u,n):u<=1073928572?r>0?(a=r-Pr,n[0]=a-Lr,n[1]=a-n[0]-Lr,1):(a=r+Pr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-1):r>0?(a=r-2*Pr,n[0]=a-Mr,n[1]=a-n[0]-Mr,2):(a=r+2*Pr,n[0]=a+Mr,n[1]=a-n[0]+Mr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Gr(r,u,n):r>0?(a=r-3*Pr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Pr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Gr(r,u,n):r>0?(a=r-4*Pr,n[0]=a-Vr,n[1]=a-n[0]-Vr,4):(a=r+4*Pr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-4);if(u<1094263291)return Gr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return C[0]=r,z[q]}(r),a=R(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Wr[f]=0|a,a=16777216*(a-Wr[f]);for(Wr[2]=a,o=3;0===Wr[o-1];)o-=1;return i=Hr(Wr,kr,e,o),r<0?(n[0]=-kr[0],n[1]=-kr[1],-i):(n[0]=kr[0],n[1]=kr[1],i)}var Yr=[0,0];function qr(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1044381696?1:V(r,0);if(n>=2146435072)return NaN;switch(3&xr(r,Yr)){case 0:return V(Yr[0],Yr[1]);case 1:return-k(Yr[0],Yr[1]);case 2:return-V(Yr[0],Yr[1]);default:return k(Yr[0],Yr[1])}}var Cr=[0,0];var zr=3.141592653589793;function Br(n){var t,o,f,i;return r(n)||e(n)?NaN:(t=u(n))>9007199254740992?1:.5===(f=t-(o=$(t)))?0:(i=f<.25?qr(zr*f):f<.75?function(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:k(r,0);if(n>=2146435072)return NaN;switch(3&xr(r,Cr)){case 0:return k(Cr[0],Cr[1]);case 1:return V(Cr[0],Cr[1]);case 2:return-k(Cr[0],Cr[1]);default:return-V(Cr[0],Cr[1])}}(zr*(f=.5-f)):-qr(zr*(f=1-f)),o%2==1?-i:i)}function Dr(r){return $(r)===r}function Jr(r){return Dr(r/2)}function Kr(r){return Jr(r>0?r-1:r+1)}var Qr=Math.sqrt,Rr=!0===T?0:1,Xr=new m(1),Zr=new s(Xr.buffer);function $r(r,n){return Xr[0]=r,Zr[Rr]=n>>>0,Xr[0]}function rn(r){return 0|r}var nn=!0===T?1:0,tn=new m(1),en=new s(tn.buffer);function un(r,n){return tn[0]=r,en[nn]=n>>>0,tn[0]}var on=[1,1.5],fn=[0,.5849624872207642],an=[0,1.350039202129749e-8];var cn=1e300,ln=1e-300,yn=[0,0],vn=[0,0];function pn(o,f){var i,a,c,l,y,v,p,b,s,w,A,_,d,m;if(r(o)||r(f))return NaN;if(fr(yn,f),y=yn[0],0===yn[1]){if(0===f)return 1;if(1===f)return o;if(-1===f)return 1/o;if(.5===f)return Qr(o);if(-.5===f)return 1/Qr(o);if(2===f)return o*o;if(3===f)return o*o*o;if(4===f)return(o*=o)*o;if(e(f))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(t===n)?0:n}(o,f)}if(fr(yn,o),l=yn[0],0===yn[1]){if(0===l)return function(r,e){return e===t?n:e===n?0:e>0?Kr(e)?r:0:Kr(e)?ar(n,r):n}(o,f);if(1===o)return 1;if(-1===o&&Kr(f))return-1;if(e(o))return o===t?pn(-0,-f):f<0?0:n}if(o<0&&!1===Dr(f))return(o-o)/(o-o);if(c=u(o),i=2147483647&l|0,a=2147483647&y|0,p=y>>>31|0,v=(v=l>>>31|0)&&Kr(f)?-1:1,a>1105199104){if(a>1139802112)return function(r,n){return(2147483647&M(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(o,f);if(i<1072693247)return 1===p?v*cn*cn:v*ln*ln;if(i>1072693248)return 0===p?v*cn*cn:v*ln*ln;A=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=$r(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(vn,c)}else A=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p,b,s,w,A,_,d,m,h,N,U;return m=0,t<1048576&&(m-=53,t=M(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=1048576),f=$r(u=(_=(n=un(n,t))-(c=on[N]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=un(0,e+=N<<18),A=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=$r(a=3+(o=f*f)+(A+=(i=d*(_-f*a-f*(n-(a-c))))*(f+u)),0),s=(p=-7.028461650952758e-9*(y=$r(y=(_=f*a)+(d=i*a+(A-(a-3-o))*u),0))+.9617966939259756*(d-(y-_))+an[N])-((b=$r(b=(v=.9617967009544373*y)+p+(l=fn[N])+(w=m),0))-w-l-v),r[0]=b,r[1]=s,r}(vn,c,i);if(w=(f-(b=$r(f,0)))*A[0]+f*A[1],s=b*A[0],fr(yn,_=w+s),d=rn(yn[0]),m=rn(yn[1]),d>=1083179008){if(0!=(d-1083179008|m))return v*cn*cn;if(w+8008566259537294e-32>_-s)return v*cn*cn}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|m))return v*ln*ln;if(w<=_-s)return v*ln*ln}return _=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=o=un(0,e)),r=rn(r=M(c=1-((c=(f=.6931471824645996*(o=$r(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(u=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=i-(c-f))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?hr(c,l):un(c,r)}(d,s,w),v*_}function bn(e){var u;return r(e)||e===n||e===t?NaN:((u=pn(1.618033988749895,e))-Br(e)/u)/2.23606797749979}export{bn as default};
//# sourceMappingURL=mod.js.map
