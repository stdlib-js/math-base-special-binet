// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}function u(r){return Math.abs(r)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var i=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var c=o&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return i.call(r);t=r[a],o=a,n=null!=(u=r)&&f.call(u,o);try{r[a]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[a]=t:delete r[a],e}:function(r){return i.call(r)},l="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var v,p="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,n,t;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var s=v,b="function"==typeof Float64Array;var w="function"==typeof Float64Array?Float64Array:null;var A,_="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w([1,3.14,-3.14,NaN]),t=n,r=(b&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var d=A,m="function"==typeof Uint8Array;var h="function"==typeof Uint8Array?Uint8Array:null;var N,U="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,256,257]),t=n,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g=N,j="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var O,S="function"==typeof Uint16Array?Uint16Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),t=n,r=(j&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F={uint16:O,uint8:g};(E=new F.uint16(1))[0]=4660;var H=52===new F.uint8(E.buffer)[0],T=!0===H?1:0,G=new d(1),P=new s(G.buffer);function L(r){return G[0]=r,P[T]}function M(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var V=-.16666666666666632;function W(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(V+u*t):r-(u*(.5*n-e*t)-n-e*V)}var k,x,Y=!0===H?0:1,q=new d(1),C=new s(q.buffer);!0===H?(k=1,x=0):(k=0,x=1);var z={HIGH:k,LOW:x},B=new d(1),D=new s(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R=Math.floor,X="function"==typeof Object.defineProperty?Object.defineProperty:null;var Z=Object.defineProperty,$=Object.prototype,rr=$.toString,nr=$.__defineGetter__,tr=$.__defineSetter__,er=$.__lookupGetter__,ur=$.__lookupSetter__;var or,ir,fr=function(){try{return X({},"x",{}),!0}catch(r){return!1}}()?Z:function(r,n,t){var e,u,o,i;if("object"!=typeof r||null===r||"[object Array]"===rr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===rr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(er.call(r,n)||ur.call(r,n)?(e=r.__proto__,r.__proto__=$,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,i="set"in t,u&&(o||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&nr&&nr.call(r,n,t.get),i&&tr&&tr.call(r,n,t.set),r};function ar(r,n,t){fr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===H?(or=1,ir=0):(or=0,ir=1);var cr={HIGH:or,LOW:ir},lr=new d(1),yr=new s(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function sr(r,n,t,e){return lr[0]=r,n[e]=yr[vr],n[e+t]=yr[pr],n}function br(r){return sr(r,[0,0],1,0)}ar(br,"assign",sr);var wr=[0,0];function Ar(r,n){var t,e;return br.assign(r,wr,1,0),t=wr[0],t&=2147483647,e=L(n),Q(t|=e&=2147483648,wr[1])}function _r(n,t,o,i){return r(n)||e(n)?(t[i]=n,t[i+o]=0,t):0!==n&&u(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+o]=-52,t):(t[i]=n,t[i+o]=0,t)}ar((function(r){return _r(r,[0,0],1,0)}),"assign",_r);var dr=[0,0],mr=[0,0];function hr(u,o){var i,f;return 0===o||0===u||r(u)||e(u)?u:(_r(u,dr,1,0),o+=dr[1],o+=function(r){var n=L(r);return(n=(2146435072&n)>>>20)-1023|0}(u=dr[0]),o<-1074?Ar(0,u):o>1023?u<0?t:n:(o<=-1023?(o+=52,f=2220446049250313e-31):f=1,br.assign(u,mr,1,0),i=mr[0],i&=2148532223,f*Q(i|=o+1023<<20,mr[1])))}function Nr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=5.960464477539063e-8,Ir=Nr(20),Or=Nr(20),Sr=Nr(20),Er=Nr(20);function Fr(r,n,t,e,u,o,i,f,a){var c,l,y,v,p,s,b,w,A;for(v=o,A=e[t],w=t,p=0;w>0;p++)l=jr*A|0,Er[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=hr(A,u),A-=8*R(.125*A),A-=b=0|A,y=0,u>0?(b+=p=Er[t-1]>>24-u,Er[t-1]-=p<<24-u,y=Er[t-1]>>23-u):0===u?y=Er[t-1]>>23:A>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)w=Er[p],0===c?0!==w&&(c=1,Er[p]=16777216-w):Er[p]=16777215-w;if(u>0)switch(u){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=hr(1,u)))}if(0===A){for(w=0,p=t-1;p>=o;p--)w|=Er[p];if(0===w){for(s=1;0===Er[o-s];s++);for(p=t+1;p<=t+s;p++){for(a[f+p]=Ur[i+p],l=0,w=0;w<=f;w++)l+=r[w]*a[f+(p-w)];e[p]=l}return Fr(r,n,t+=s,e,u,o,i,f,a)}}if(0===A)for(t-=1,u-=24;0===Er[t];)t-=1,u-=24;else(A=hr(A,-u))>=16777216?(l=jr*A|0,Er[t]=A-16777216*l|0,u+=24,Er[t+=1]=l):Er[t]=0|A;for(l=hr(1,u),p=t;p>=0;p--)e[p]=l*Er[p],l*=jr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=gr[s]*e[p+s];Sr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Sr[p];for(n[0]=0===y?l:-l,l=Sr[0]-l,p=1;p<=t;p++)l+=Sr[p];return n[1]=0===y?l:-l,7&b}function Hr(r,n,t,e){var u,o,i,f,a,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),l=i+4,a=0;a<=l;a++)Ir[a]=c<0?0:Ur[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Ir[i+(a-c)];Or[a]=u}return 4,Fr(r,n,4,Or,f,4,o,i,Ir)}var Tr=Math.round;function Gr(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(L(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(L(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var Pr=1.5707963267341256,Lr=6077100506506192e-26,Mr=2*Lr,Vr=4*Lr,Wr=[0,0,0],kr=[0,0];function xr(r,n){var t,e,u,o,i,f,a;if((u=2147483647&L(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Gr(r,u,n):u<=1073928572?r>0?(a=r-Pr,n[0]=a-Lr,n[1]=a-n[0]-Lr,1):(a=r+Pr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-1):r>0?(a=r-2*Pr,n[0]=a-Mr,n[1]=a-n[0]-Mr,2):(a=r+2*Pr,n[0]=a+Mr,n[1]=a-n[0]+Mr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Gr(r,u,n):r>0?(a=r-3*Pr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Pr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Gr(r,u,n):r>0?(a=r-4*Pr,n[0]=a-Vr,n[1]=a-n[0]-Vr,4):(a=r+4*Pr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-4);if(u<1094263291)return Gr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,C[Y]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Wr[i]=0|a,a=16777216*(a-Wr[i]);for(Wr[2]=a,o=3;0===Wr[o-1];)o-=1;return f=Hr(Wr,kr,e,o),r<0?(n[0]=-kr[0],n[1]=-kr[1],-f):(n[0]=kr[0],n[1]=kr[1],f)}var Yr=[0,0];function qr(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1044381696?1:M(r,0);if(n>=2146435072)return NaN;switch(3&xr(r,Yr)){case 0:return M(Yr[0],Yr[1]);case 1:return-W(Yr[0],Yr[1]);case 2:return-M(Yr[0],Yr[1]);default:return W(Yr[0],Yr[1])}}var Cr=[0,0];var zr=3.141592653589793;function Br(n){var t,o,i,f;return r(n)||e(n)?NaN:(t=u(n))>9007199254740992?1:.5===(i=t-(o=R(t)))?0:(f=i<.25?qr(zr*i):i<.75?function(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1045430272?r:W(r,0);if(n>=2146435072)return NaN;switch(3&xr(r,Cr)){case 0:return W(Cr[0],Cr[1]);case 1:return M(Cr[0],Cr[1]);case 2:return-W(Cr[0],Cr[1]);default:return-M(Cr[0],Cr[1])}}(zr*(i=.5-i)):-qr(zr*(i=1-i)),o%2==1?-f:f)}function Dr(r){return R(r)===r}function Jr(r){return Dr(r/2)}function Kr(r){return Jr(r>0?r-1:r+1)}var Qr=Math.sqrt,Rr=!0===H?0:1,Xr=new d(1),Zr=new s(Xr.buffer);function $r(r,n){return Xr[0]=r,Zr[Rr]=n>>>0,Xr[0]}function rn(r){return 0|r}var nn=!0===H?1:0,tn=new d(1),en=new s(tn.buffer);function un(r,n){return tn[0]=r,en[nn]=n>>>0,tn[0]}var on=[1,1.5],fn=[0,.5849624872207642],an=[0,1.350039202129749e-8];var cn=1e300,ln=1e-300,yn=[0,0],vn=[0,0];function pn(o,i){var f,a,c,l,y,v,p,s,b,w,A,_,d,m;if(r(o)||r(i))return NaN;if(br.assign(i,yn,1,0),y=yn[0],0===yn[1]){if(0===i)return 1;if(1===i)return o;if(-1===i)return 1/o;if(.5===i)return Qr(o);if(-.5===i)return 1/Qr(o);if(2===i)return o*o;if(3===i)return o*o*o;if(4===i)return(o*=o)*o;if(e(i))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(t===n)?0:n}(o,i)}if(br.assign(o,yn,1,0),l=yn[0],0===yn[1]){if(0===l)return function(r,e){return e===t?n:e===n?0:e>0?Kr(e)?r:0:Kr(e)?Ar(n,r):n}(o,i);if(1===o)return 1;if(-1===o&&Kr(i))return-1;if(e(o))return o===t?pn(-0,-i):i<0?0:n}if(o<0&&!1===Dr(i))return(o-o)/(o-o);if(c=u(o),f=2147483647&l|0,a=2147483647&y|0,p=y>>>31|0,v=(v=l>>>31|0)&&Kr(i)?-1:1,a>1105199104){if(a>1139802112)return function(r,n){return(2147483647&L(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(o,i);if(f<1072693247)return 1===p?v*cn*cn:v*ln*ln;if(f>1072693248)return 0===p?v*cn*cn:v*ln*ln;A=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=$r(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(vn,c)}else A=function(r,n,t){var e,u,o,i,f,a,c,l,y,v,p,s,b,w,A,_,d,m,h,N,U;return m=0,t<1048576&&(m-=53,t=L(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=1048576),i=$r(u=(_=(n=un(n,t))-(c=on[N]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=un(0,e+=N<<18),A=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=$r(a=3+(o=i*i)+(A+=(f=d*(_-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(y=$r(y=(_=i*a)+(d=f*a+(A-(a-3-o))*u),0))+.9617966939259756*(d-(y-_))+an[N])-((s=$r(s=(v=.9617967009544373*y)+p+(l=fn[N])+(w=m),0))-w-l-v),r[0]=s,r[1]=b,r}(vn,c,f);if(_=(w=(i-(s=$r(i,0)))*A[0]+i*A[1])+(b=s*A[0]),br.assign(_,yn,1,0),d=rn(yn[0]),m=rn(yn[1]),d>=1083179008){if(0!=(d-1083179008|m))return v*cn*cn;if(w+8008566259537294e-32>_-b)return v*cn*cn}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|m))return v*ln*ln;if(w<=_-b)return v*ln*ln}return _=function(r,n,t){var e,u,o,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=o=un(0,e)),r=rn(r=L(c=1-((c=(i=.6931471824645996*(o=$r(o=t+n,0)))+(f=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(u=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?hr(c,l):un(c,r)}(d,b,w),v*_}function sn(e){var u;return r(e)||e===n||e===t?NaN:((u=pn(1.618033988749895,e))-Br(e)/u)/2.23606797749979}export{sn as default};
//# sourceMappingURL=mod.js.map
