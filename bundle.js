!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self)["@stdlib/math-base-special-binet"]=n()}(this,(function(){"use strict";var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=n,u=t;var f=function(r){return r===e||r===u};var i=function(r){return Math.abs(r)};var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var a=function(){return o&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,v=c;var y=function(r){return v.call(r)},l=Object.prototype.hasOwnProperty;var p=function(r,n){return null!=r&&l.call(r,n)},s="function"==typeof Symbol?Symbol.toStringTag:"",b=p,w=s,A=c;var d=y,h=function(r){var n,t,e;if(null==r)return A.call(r);t=r[w],n=b(r,w);try{r[w]=void 0}catch(n){return A.call(r)}return e=A.call(r),n?r[w]=t:delete r[w],e},N=a()?h:d,m=N,U="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null,g=function(r){return U&&r instanceof Uint32Array||"[object Uint32Array]"===m(r)},F=I;var S=function(){var r,n;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),r=g(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var H="function"==typeof Uint32Array?Uint32Array:void 0,O=function(){throw new Error("not implemented")},T=S()?H:O,j=N,E="function"==typeof Float64Array;var G="function"==typeof Float64Array?Float64Array:null,L=function(r){return E&&r instanceof Float64Array||"[object Float64Array]"===j(r)},M=G;var W=function(){var r,n;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),r=L(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var x="function"==typeof Float64Array?Float64Array:void 0,P=function(){throw new Error("not implemented")},V=W()?x:P,Y=N,_="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null,q=function(r){return _&&r instanceof Uint8Array||"[object Uint8Array]"===Y(r)},z=k;var B=function(){var r,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,256,257]),r=q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var C="function"==typeof Uint8Array?Uint8Array:void 0,D=function(){throw new Error("not implemented")},J=B()?C:D,K=N,Q="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null,X=function(r){return Q&&r instanceof Uint16Array||"[object Uint16Array]"===K(r)},Z=R;var $=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),r=X(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var rr,nr="function"==typeof Uint16Array?Uint16Array:void 0,tr=function(){throw new Error("not implemented")},er={uint16:$()?nr:tr,uint8:J};(rr=new er.uint16(1))[0]=4660;var ur=52===new er.uint8(rr.buffer)[0],fr=T,ir=!0===ur?1:0,or=new V(1),ar=new fr(or.buffer);var cr=function(r){return or[0]=r,ar[ir]};var vr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},yr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var lr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*vr(f),e+=u*u*yr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},pr=-.16666666666666632;var sr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(pr+u*t):r-(u*(.5*n-e*t)-n-e*pr)},br=T,wr=!0===ur?0:1,Ar=new V(1),dr=new br(Ar.buffer);var hr,Nr,mr=function(r){return Ar[0]=r,dr[wr]};!0===ur?(hr=1,Nr=0):(hr=0,Nr=1);var Ur=T,Ir={HIGH:hr,LOW:Nr},gr=new V(1),Fr=new Ur(gr.buffer),Sr=Ir.HIGH,Hr=Ir.LOW;var Or,Tr,jr=function(r,n){return Fr[Sr]=r,Fr[Hr]=n,gr[0]},Er=jr,Gr=Math.floor;!0===ur?(Or=1,Tr=0):(Or=0,Tr=1);var Lr=T,Mr={HIGH:Or,LOW:Tr},Wr=new V(1),xr=new Lr(Wr.buffer),Pr=Mr.HIGH,Vr=Mr.LOW;var Yr=function(r,n){return Wr[0]=n,r[0]=xr[Pr],r[1]=xr[Vr],r};var _r=function(r,n){return 1===arguments.length?Yr([0,0],r):Yr(r,n)},kr=_r,qr=kr,zr=cr,Br=Er,Cr=[0,0];var Dr=function(r,n){var t,e;return qr(Cr,r),t=Cr[0],t&=2147483647,e=zr(n),Br(t|=e&=2147483648,Cr[1])},Jr=f,Kr=r,Qr=i;var Rr=function(r,n){return Kr(n)||Jr(n)?(r[0]=n,r[1]=0,r):0!==n&&Qr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Xr=function(r,n){return 1===arguments.length?Rr([0,0],r):Rr(r,n)},Zr=cr;var $r=function(r){var n=Zr(r);return(n=(2146435072&n)>>>20)-1023|0},rn=n,nn=t,tn=r,en=f,un=Dr,fn=Xr,on=$r,an=kr,cn=Er,vn=[0,0],yn=[0,0];var ln=function(r,n){var t,e;return 0===r||tn(r)||en(r)?r:(fn(vn,r),n+=vn[1],(n+=on(r=vn[0]))<-1074?un(0,r):n>1023?r<0?nn:rn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,an(yn,r),t=yn[0],t&=2148532223,e*cn(t|=n+1023<<20,yn[1])))},pn=ln,sn=Gr,bn=pn,wn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],An=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],dn=16777216,hn=5.960464477539063e-8,Nn=gn(20),mn=gn(20),Un=gn(20),In=gn(20);function gn(r){var n,t;for(n=[],t=0;t<r;t++)n.push(0);return n}function Fn(r,n,t,e,u,f,i,o,a){var c,v,y,l,p,s,b,w,A;for(l=f,A=e[t],w=t,p=0;w>0;p++)v=hn*A|0,In[p]=A-dn*v|0,A=e[w-1]+v,w-=1;if(A=bn(A,u),A-=8*sn(.125*A),A-=b=0|A,y=0,u>0?(b+=p=In[t-1]>>24-u,In[t-1]-=p<<24-u,y=In[t-1]>>23-u):0===u?y=In[t-1]>>23:A>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)w=In[p],0===c?0!==w&&(c=1,In[p]=16777216-w):In[p]=16777215-w;if(u>0)switch(u){case 1:In[t-1]&=8388607;break;case 2:In[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=bn(1,u)))}if(0===A){for(w=0,p=t-1;p>=f;p--)w|=In[p];if(0===w){for(s=1;0===In[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=wn[i+p],v=0,w=0;w<=o;w++)v+=r[w]*a[o+(p-w)];e[p]=v}return Fn(r,n,t+=s,e,u,f,i,o,a)}}if(0===A)for(t-=1,u-=24;0===In[t];)t-=1,u-=24;else(A=bn(A,-u))>=dn?(v=hn*A|0,In[t]=A-dn*v|0,u+=24,In[t+=1]=v):In[t]=0|A;for(v=bn(1,u),p=t;p>=0;p--)e[p]=v*In[p],v*=hn;for(p=t;p>=0;p--){for(v=0,s=0;s<=l&&s<=t-p;s++)v+=An[s]*e[p+s];Un[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Un[p];for(n[0]=0===y?v:-v,v=Un[0]-v,p=1;p<=t;p++)v+=Un[p];return n[1]=0===y?v:-v,7&b}var Sn=function(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)Nn[a]=c<0?0:wn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Nn[i+(a-c)];mn[a]=u}return 4,Fn(r,n,4,mn,o,4,f,i,Nn)},Hn=Math.round,On=cr;var Tn=cr,jn=mr,En=Er,Gn=Sn,Ln=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Hn(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(On(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(On(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},Mn=1.5707963267341256,Wn=6077100506506192e-26,xn=2*Wn,Pn=3*Wn,Vn=4*Wn,Yn=[0,0,0],_n=[0,0];var kn=function(r,n){var t,e,u,f,i,o,a;if((u=2147483647&Tn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Ln(r,u,n):u<=1073928572?r>0?(a=r-Mn,n[0]=a-Wn,n[1]=a-n[0]-Wn,1):(a=r+Mn,n[0]=a+Wn,n[1]=a-n[0]+Wn,-1):r>0?(a=r-2*Mn,n[0]=a-xn,n[1]=a-n[0]-xn,2):(a=r+2*Mn,n[0]=a+xn,n[1]=a-n[0]+xn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Ln(r,u,n):r>0?(a=r-3*Mn,n[0]=a-Pn,n[1]=a-n[0]-Pn,3):(a=r+3*Mn,n[0]=a+Pn,n[1]=a-n[0]+Pn,-3):1075388923===u?Ln(r,u,n):r>0?(a=r-4*Mn,n[0]=a-Vn,n[1]=a-n[0]-Vn,4):(a=r+4*Mn,n[0]=a+Vn,n[1]=a-n[0]+Vn,-4);if(u<1094263291)return Ln(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=jn(r),a=En(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Yn[i]=0|a,a=16777216*(a-Yn[i]);for(Yn[2]=a,f=3;0===Yn[f-1];)f-=1;return o=Gn(Yn,_n,e,f),r<0?(n[0]=-_n[0],n[1]=-_n[1],-o):(n[0]=_n[0],n[1]=_n[1],o)},qn=cr,zn=lr,Bn=sr,Cn=kn,Dn=[0,0];var Jn=cr,Kn=lr,Qn=sr,Rn=kn,Xn=[0,0];var Zn=r,$n=f,rt=i,nt=function(r){var n;if(n=qn(r),(n&=2147483647)<=1072243195)return n<1044381696?1:zn(r,0);if(n>=2146435072)return NaN;switch(3&Cn(r,Dn)){case 0:return zn(Dn[0],Dn[1]);case 1:return-Bn(Dn[0],Dn[1]);case 2:return-zn(Dn[0],Dn[1]);default:return Bn(Dn[0],Dn[1])}},tt=function(r){var n;if(n=Jn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Qn(r,0);if(n>=2146435072)return NaN;switch(3&Rn(r,Xn)){case 0:return Qn(Xn[0],Xn[1]);case 1:return Kn(Xn[0],Xn[1]);case 2:return-Qn(Xn[0],Xn[1]);default:return-Kn(Xn[0],Xn[1])}},et=Gr,ut=3.141592653589793;var ft=function(r){var n,t,e,u;return Zn(r)||$n(r)?NaN:(n=rt(r))>9007199254740992?1:.5===(e=n-(t=et(n)))?0:(u=e<.25?nt(ut*e):e<.75?tt(ut*(e=.5-e)):-nt(ut*(e=1-e)),t%2==1?-u:u)},it=Gr;var ot=function(r){return it(r)===r},at=ot;var ct=function(r){return at(r/2)};var vt=function(r){return ct(r>0?r-1:r+1)},yt=Math.sqrt,lt=T,pt=!0===ur?0:1,st=new V(1),bt=new lt(st.buffer);var wt=function(r,n){return st[0]=r,bt[pt]=n>>>0,st[0]},At=wt;var dt=function(r){return 0|r},ht=vt,Nt=Dr,mt=t,Ut=n;var It=function(r,n){return n===mt?Ut:n===Ut?0:n>0?ht(n)?r:0:ht(n)?Nt(Ut,r):Ut},gt=cr;var Ft=function(r,n){return(2147483647&gt(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},St=i,Ht=n;var Ot=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:St(r)<1==(n===Ht)?0:Ht},Tt=T,jt=!0===ur?1:0,Et=new V(1),Gt=new Tt(Et.buffer);var Lt=function(r,n){return Et[0]=r,Gt[jt]=n>>>0,Et[0]};var Mt=cr,Wt=At,xt=Lt,Pt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Vt=1048576,Yt=[1,1.5],_t=[0,.5849624872207642],kt=[0,1.350039202129749e-8];var qt=At,zt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Bt=cr,Ct=Lt,Dt=At,Jt=dt,Kt=pn,Qt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Rt=2147483647,Xt=1048575,Zt=1048576;var $t=r,re=vt,ne=f,te=ot,ee=yt,ue=i,fe=kr,ie=At,oe=dt,ae=t,ce=n,ve=It,ye=Ft,le=Ot,pe=function(r,n,t){var e,u,f,i,o,a,c,v,y,l,p,s,b,w,A,d,h,N,m,U;return N=0,t<Vt&&(N-=53,t=Mt(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?U=0:m<767610?U=1:(U=0,N+=1,t-=Vt),e=524288+(t>>1|536870912),o=(h=1/((n=xt(n,t))+(c=Yt[U])))*((d=n-c)-(i=Wt(u=d*h,0))*(a=xt(0,e+=U<<18))-i*(n-(a-c))),A=(f=u*u)*f*Pt(f),a=Wt(a=3+(f=i*i)+(A+=o*(i+u)),0),b=(p=-7.028461650952758e-9*(y=Wt(y=(d=i*a)+(h=o*a+(A-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+kt[U])-((s=Wt(s=(l=.9617967009544373*y)+p+(v=_t[U])+(w=N),0))-w-v-l),r[0]=s,r[1]=b,r},se=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*zt(u)))-((e=qt(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},be=function(r,n,t){var e,u,f,i,o,a,c,v,y;return y=((v=r&Rt|0)>>20)-1023|0,c=0,v>1071644672&&(u=Ct(0,((c=r+(Zt>>y+1)>>>0)&~(Xt>>(y=((c&Rt)>>20)-1023|0)))>>>0),c=(c&Xt|Zt)>>20-y>>>0,r<0&&(c=-c),n-=u),o=(i=.6931471805599453*(t-((u=Dt(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(f=.6931471824645996*u)+i)-f),e=a-(u=a*a)*Qt(u),r=Bt(a=1-(a*e/(e-2)-(o+a*o)-a)),r=Jt(r),a=(r+=c<<20>>>0)>>20<=0?Kt(a,c):Ct(a,r)},we=2147483647,Ae=1083179008,de=1e300,he=1e-300,Ne=[0,0],me=[0,0];var Ue=function r(n,t){var e,u,f,i,o,a,c,v,y,l,p,s,b,w;if($t(n)||$t(t))return NaN;if(fe(Ne,t),o=Ne[0],0===Ne[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return ee(n);if(-.5===t)return 1/ee(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(ne(t))return le(n,t)}if(fe(Ne,n),i=Ne[0],0===Ne[1]){if(0===i)return ve(n,t);if(1===n)return 1;if(-1===n&&re(t))return-1;if(ne(n))return n===ae?r(-0,-t):t<0?0:ce}if(n<0&&!1===te(t))return(n-n)/(n-n);if(f=ue(n),e=i&we|0,u=o&we|0,c=o>>>31|0,a=(a=i>>>31|0)&&re(t)?-1:1,u>1105199104){if(u>1139802112)return ye(n,t);if(e<1072693247)return 1===c?a*de*de:a*he*he;if(e>1072693248)return 0===c?a*de*de:a*he*he;p=se(me,f)}else p=pe(me,f,e);if(l=(t-(v=ie(t,0)))*p[0]+t*p[1],y=v*p[0],fe(Ne,s=l+y),b=oe(Ne[0]),w=oe(Ne[1]),b>=Ae){if(0!=(b-Ae|w))return a*de*de;if(l+8008566259537294e-32>s-y)return a*de*de}else if((b&we)>=1083231232){if(0!=(b-3230714880|w))return a*he*he;if(l<=s-y)return a*he*he}return a*(s=be(b,y,l))},Ie=r,ge=ft,Fe=Ue,Se=n,He=t;return function(r){var n;return Ie(r)||r===Se||r===He?NaN:((n=Fe(1.618033988749895,r))-ge(r)/n)/2.23606797749979}}));
