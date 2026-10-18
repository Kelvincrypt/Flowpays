import"./chunk-mqqrd9xd.js";import{Oe as Y8,Te as x5,Ue as a0,Ve as Q0}from"./chunk-31942z79.js";import{gf as M,kf as x,lf as y,mf as s,nf as N}from"./chunk-m2g7pjx3.js";import{$g as g0,Ag as S0,Eg as h0,Mg as J1,Ng as L5,Og as D,Qg as W,Rg as P0,Ug as $1,Wg as f1,Xg as d,Yg as h,Zg as U,_g as z,ah as C,fh as f,kh as X0,lh as Y1}from"./chunk-9y7xk3dn.js";import{sh as O9,th as C0,uh as y0}from"./chunk-q0fckzp1.js";import{vh as z9}from"./chunk-ajc23y29.js";import"./chunk-kz9ry8p2.js";import{Ah as E,yh as O,zh as H}from"./chunk-kqe818f4.js";import"./chunk-apcym7z8.js";import"./chunk-f2x6e9bx.js";import{oj as D1,rj as P,sj as V0,wj as V}from"./chunk-m8hgzdp5.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import"./chunk-bccvmyr2.js";import{EH as K2,GH as S}from"./chunk-dgwf5jrz.js";var V8=S((wY,H8)=>{H8.exports=function(){return typeof Promise==="function"&&Promise.prototype&&Promise.prototype.then}});var O0=S((e5)=>{var U1,t5=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e5.getSymbolSize=function(Y){if(!Y)throw Error('"version" cannot be null or undefined');if(Y<1||Y>40)throw Error('"version" should be in range from 1 to 40');return Y*4+17};e5.getSymbolTotalCodewords=function(Y){return t5[Y]};e5.getBCHDigit=function($){let Y=0;while($!==0)Y++,$>>>=1;return Y};e5.setToSJISFunction=function(Y){if(typeof Y!=="function")throw Error('"toSJISFunc" is not a valid function.');U1=Y};e5.isKanjiModeEnabled=function(){return typeof U1<"u"};e5.toSJIS=function(Y){return U1(Y)}});var Z1=S((F$)=>{F$.L={bit:1};F$.M={bit:0};F$.Q={bit:3};F$.H={bit:2};function X$($){if(typeof $!=="string")throw Error("Param is not a string");switch($.toLowerCase()){case"l":case"low":return F$.L;case"m":case"medium":return F$.M;case"q":case"quartile":return F$.Q;case"h":case"high":return F$.H;default:throw Error("Unknown EC Level: "+$)}}F$.isValid=function(Y){return Y&&typeof Y.bit<"u"&&Y.bit>=0&&Y.bit<4};F$.from=function(Y,J){if(F$.isValid(Y))return Y;try{return X$(Y)}catch(Z){return J}}});var U8=S((_Y,M8)=>{function f8(){this.buffer=[],this.length=0}f8.prototype={get:function($){let Y=Math.floor($/8);return(this.buffer[Y]>>>7-$%8&1)===1},put:function($,Y){for(let J=0;J<Y;J++)this.putBit(($>>>Y-J-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function($){let Y=Math.floor(this.length/8);if(this.buffer.length<=Y)this.buffer.push(0);if($)this.buffer[Y]|=128>>>this.length%8;this.length++}};M8.exports=f8});var A8=S((WY,E8)=>{function m0($){if(!$||$<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=$,this.data=new Uint8Array($*$),this.reservedBit=new Uint8Array($*$)}m0.prototype.set=function($,Y,J,Z){let K=$*this.size+Y;if(this.data[K]=J,Z)this.reservedBit[K]=!0};m0.prototype.get=function($,Y){return this.data[$*this.size+Y]};m0.prototype.xor=function($,Y,J){this.data[$*this.size+Y]^=J};m0.prototype.isReserved=function($,Y){return this.reservedBit[$*this.size+Y]};E8.exports=m0});var j8=S((O$)=>{var P$=O0().getSymbolSize;O$.getRowColCoords=function(Y){if(Y===1)return[];let J=Math.floor(Y/7)+2,Z=P$(Y),K=Z===145?26:Math.ceil((Z-13)/(2*J-2))*2,q=[Z-7];for(let X=1;X<J-1;X++)q[X]=q[X-1]-K;return q.push(6),q.reverse()};O$.getPositions=function(Y){let J=[],Z=O$.getRowColCoords(Y),K=Z.length;for(let q=0;q<K;q++)for(let X=0;X<K;X++){if(q===0&&X===0||q===0&&X===K-1||q===K-1&&X===0)continue;J.push([Z[q],Z[X]])}return J}});var S8=S((H$)=>{var N$=O0().getSymbolSize;H$.getPositions=function(Y){let J=N$(Y);return[[0,0],[J-7,0],[0,J-7]]}});var v8=S((B$)=>{B$.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var U0={N1:3,N2:3,N3:40,N4:10};B$.isValid=function(Y){return Y!=null&&Y!==""&&!isNaN(Y)&&Y>=0&&Y<=7};B$.from=function(Y){return B$.isValid(Y)?parseInt(Y,10):void 0};B$.getPenaltyN1=function(Y){let J=Y.size,Z=0,K=0,q=0,X=null,F=null;for(let Q=0;Q<J;Q++){K=q=0,X=F=null;for(let G=0;G<J;G++){let T=Y.get(Q,G);if(T===X)K++;else{if(K>=5)Z+=U0.N1+(K-5);X=T,K=1}if(T=Y.get(G,Q),T===F)q++;else{if(q>=5)Z+=U0.N1+(q-5);F=T,q=1}}if(K>=5)Z+=U0.N1+(K-5);if(q>=5)Z+=U0.N1+(q-5)}return Z};B$.getPenaltyN2=function(Y){let J=Y.size,Z=0;for(let K=0;K<J-1;K++)for(let q=0;q<J-1;q++){let X=Y.get(K,q)+Y.get(K,q+1)+Y.get(K+1,q)+Y.get(K+1,q+1);if(X===4||X===0)Z++}return Z*U0.N2};B$.getPenaltyN3=function(Y){let J=Y.size,Z=0,K=0,q=0;for(let X=0;X<J;X++){K=q=0;for(let F=0;F<J;F++){if(K=K<<1&2047|Y.get(X,F),F>=10&&(K===1488||K===93))Z++;if(q=q<<1&2047|Y.get(F,X),F>=10&&(q===1488||q===93))Z++}}return Z*U0.N3};B$.getPenaltyN4=function(Y){let J=0,Z=Y.data.length;for(let q=0;q<Z;q++)J+=Y.data[q];return Math.abs(Math.ceil(J*100/Z/5)-10)*U0.N4};function z$($,Y,J){switch($){case B$.Patterns.PATTERN000:return(Y+J)%2===0;case B$.Patterns.PATTERN001:return Y%2===0;case B$.Patterns.PATTERN010:return J%3===0;case B$.Patterns.PATTERN011:return(Y+J)%3===0;case B$.Patterns.PATTERN100:return(Math.floor(Y/2)+Math.floor(J/3))%2===0;case B$.Patterns.PATTERN101:return Y*J%2+Y*J%3===0;case B$.Patterns.PATTERN110:return(Y*J%2+Y*J%3)%2===0;case B$.Patterns.PATTERN111:return(Y*J%3+(Y+J)%2)%2===0;default:throw Error("bad maskPattern:"+$)}}B$.applyMask=function(Y,J){let Z=J.size;for(let K=0;K<Z;K++)for(let q=0;q<Z;q++){if(J.isReserved(q,K))continue;J.xor(q,K,z$(Y,q,K))}};B$.getBestMask=function(Y,J){let Z=Object.keys(B$.Patterns).length,K=0,q=1/0;for(let X=0;X<Z;X++){J(X),B$.applyMask(X,Y);let F=B$.getPenaltyN1(Y)+B$.getPenaltyN2(Y)+B$.getPenaltyN3(Y)+B$.getPenaltyN4(Y);if(B$.applyMask(X,Y),F<q)q=F,K=X}return K}});var A1=S((I$)=>{var G0=Z1(),q1=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],K1=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];I$.getBlocksCount=function(Y,J){switch(J){case G0.L:return q1[(Y-1)*4+0];case G0.M:return q1[(Y-1)*4+1];case G0.Q:return q1[(Y-1)*4+2];case G0.H:return q1[(Y-1)*4+3];default:return}};I$.getTotalCodewordsCount=function(Y,J){switch(J){case G0.L:return K1[(Y-1)*4+0];case G0.M:return K1[(Y-1)*4+1];case G0.Q:return K1[(Y-1)*4+2];case G0.H:return K1[(Y-1)*4+3];default:return}}});var _8=S((U$)=>{var d0=new Uint8Array(512),X1=new Uint8Array(256);(function(){let Y=1;for(let J=0;J<255;J++)if(d0[J]=Y,X1[Y]=J,Y<<=1,Y&256)Y^=285;for(let J=255;J<512;J++)d0[J]=d0[J-255]})();U$.log=function(Y){if(Y<1)throw Error("log("+Y+")");return X1[Y]};U$.exp=function(Y){return d0[Y]};U$.mul=function(Y,J){if(Y===0||J===0)return 0;return d0[X1[Y]+X1[J]]}});var k8=S((j$)=>{var R1=_8();j$.mul=function(Y,J){let Z=new Uint8Array(Y.length+J.length-1);for(let K=0;K<Y.length;K++)for(let q=0;q<J.length;q++)Z[K+q]^=R1.mul(Y[K],J[q]);return Z};j$.mod=function(Y,J){let Z=new Uint8Array(Y);while(Z.length-J.length>=0){let K=Z[0];for(let X=0;X<J.length;X++)Z[X]^=R1.mul(J[X],K);let q=0;while(q<Z.length&&Z[q]===0)q++;Z=Z.slice(q)}return Z};j$.generateECPolynomial=function(Y){let J=new Uint8Array([1]);for(let Z=0;Z<Y;Z++)J=j$.mul(J,new Uint8Array([1,R1.exp(Z)]));return J}});var u8=S((mY,y8)=>{var C8=k8();function j1($){if(this.genPoly=void 0,this.degree=$,this.degree)this.initialize(this.degree)}j1.prototype.initialize=function(Y){this.degree=Y,this.genPoly=C8.generateECPolynomial(this.degree)};j1.prototype.encode=function(Y){if(!this.genPoly)throw Error("Encoder not initialized");let J=new Uint8Array(Y.length+this.degree);J.set(Y);let Z=C8.mod(J,this.genPoly),K=this.degree-Z.length;if(K>0){let q=new Uint8Array(this.degree);return q.set(Z,K),q}return Z};y8.exports=j1});var S1=S((L$)=>{L$.isValid=function(Y){return!isNaN(Y)&&Y>=1&&Y<=40}});var x1=S((W$)=>{var l0="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";l0=l0.replace(/u/g,"\\u");var w$="(?:(?![A-Z0-9 $%*+\\-./:]|"+l0+`)(?:.|[\r
]))+`;W$.KANJI=new RegExp(l0,"g");W$.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");W$.BYTE=new RegExp(w$,"g");W$.NUMERIC=new RegExp("[0-9]+","g");W$.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var b$=new RegExp("^"+l0+"$"),v$=new RegExp("^[0-9]+$"),_$=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");W$.testKanji=function(Y){return b$.test(Y)};W$.testNumeric=function(Y){return v$.test(Y)};W$.testAlphanumeric=function(Y){return _$.test(Y)}});var N0=S((n$)=>{var l$=S1(),L1=x1();n$.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};n$.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};n$.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};n$.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};n$.MIXED={bit:-1};n$.getCharCountIndicator=function(Y,J){if(!Y.ccBits)throw Error("Invalid mode: "+Y);if(!l$.isValid(J))throw Error("Invalid version: "+J);if(J>=1&&J<10)return Y.ccBits[0];else if(J<27)return Y.ccBits[1];return Y.ccBits[2]};n$.getBestModeForData=function(Y){if(L1.testNumeric(Y))return n$.NUMERIC;else if(L1.testAlphanumeric(Y))return n$.ALPHANUMERIC;else if(L1.testKanji(Y))return n$.KANJI;else return n$.BYTE};n$.toString=function(Y){if(Y&&Y.id)return Y.id;throw Error("Invalid mode")};n$.isValid=function(Y){return Y&&Y.bit&&Y.ccBits};function c$($){if(typeof $!=="string")throw Error("Param is not a string");switch($.toLowerCase()){case"numeric":return n$.NUMERIC;case"alphanumeric":return n$.ALPHANUMERIC;case"kanji":return n$.KANJI;case"byte":return n$.BYTE;default:throw Error("Unknown mode: "+$)}}n$.from=function(Y,J){if(n$.isValid(Y))return Y;try{return c$(Y)}catch(Z){return J}}});var c8=S((J9)=>{var F1=O0(),t$=A1(),g8=Z1(),H0=N0(),_1=S1(),m8=F1.getBCHDigit(7973);function e$($,Y,J){for(let Z=1;Z<=40;Z++)if(Y<=J9.getCapacity(Z,J,$))return Z;return}function d8($,Y){return H0.getCharCountIndicator($,Y)+4}function $9($,Y){let J=0;return $.forEach(function(Z){let K=d8(Z.mode,Y);J+=K+Z.getBitsLength()}),J}function Y9($,Y){for(let J=1;J<=40;J++)if($9($,J)<=J9.getCapacity(J,Y,H0.MIXED))return J;return}J9.from=function(Y,J){if(_1.isValid(Y))return parseInt(Y,10);return J};J9.getCapacity=function(Y,J,Z){if(!_1.isValid(Y))throw Error("Invalid QR Code version");if(typeof Z>"u")Z=H0.BYTE;let K=F1.getSymbolTotalCodewords(Y),q=t$.getTotalCodewordsCount(Y,J),X=(K-q)*8;if(Z===H0.MIXED)return X;let F=X-d8(Z,Y);switch(Z){case H0.NUMERIC:return Math.floor(F/10*3);case H0.ALPHANUMERIC:return Math.floor(F/11*2);case H0.KANJI:return Math.floor(F/13);case H0.BYTE:default:return Math.floor(F/8)}};J9.getBestVersionForData=function(Y,J){let Z,K=g8.from(J,g8.M);if(Array.isArray(Y)){if(Y.length>1)return Y9(Y,K);if(Y.length===0)return 1;Z=Y[0]}else Z=Y;return e$(Z.mode,Z.getLength(),K)};J9.getEncodedBits=function(Y){if(!_1.isValid(Y)||Y<7)throw Error("Invalid QR Code version");let J=Y<<12;while(F1.getBCHDigit(J)-m8>=0)J^=7973<<F1.getBCHDigit(J)-m8;return Y<<12|J}});var i8=S((X9)=>{var W1=O0(),n8=W1.getBCHDigit(1335);X9.getEncodedBits=function(Y,J){let Z=Y.bit<<3|J,K=Z<<10;while(W1.getBCHDigit(K)-n8>=0)K^=1335<<W1.getBCHDigit(K)-n8;return(Z<<10|K)^21522}});var s8=S((aY,a8)=>{var Q9=N0();function b0($){this.mode=Q9.NUMERIC,this.data=$.toString()}b0.getBitsLength=function(Y){return 10*Math.floor(Y/3)+(Y%3?Y%3*3+1:0)};b0.prototype.getLength=function(){return this.data.length};b0.prototype.getBitsLength=function(){return b0.getBitsLength(this.data.length)};b0.prototype.write=function(Y){let J,Z,K;for(J=0;J+3<=this.data.length;J+=3)Z=this.data.substr(J,3),K=parseInt(Z,10),Y.put(K,10);let q=this.data.length-J;if(q>0)Z=this.data.substr(J),K=parseInt(Z,10),Y.put(K,q*3+1)};a8.exports=b0});var r8=S((sY,o8)=>{var P9=N0(),k1=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function v0($){this.mode=P9.ALPHANUMERIC,this.data=$}v0.getBitsLength=function(Y){return 11*Math.floor(Y/2)+6*(Y%2)};v0.prototype.getLength=function(){return this.data.length};v0.prototype.getBitsLength=function(){return v0.getBitsLength(this.data.length)};v0.prototype.write=function(Y){let J;for(J=0;J+2<=this.data.length;J+=2){let Z=k1.indexOf(this.data[J])*45;Z+=k1.indexOf(this.data[J+1]),Y.put(Z,11)}if(this.data.length%2)Y.put(k1.indexOf(this.data[J]),6)};o8.exports=v0});var e8=S((oY,t8)=>{var G9=O9(),N9=N0();function _0($){if(this.mode=N9.BYTE,typeof $==="string")$=G9($);this.data=new Uint8Array($)}_0.getBitsLength=function(Y){return Y*8};_0.prototype.getLength=function(){return this.data.length};_0.prototype.getBitsLength=function(){return _0.getBitsLength(this.data.length)};_0.prototype.write=function($){for(let Y=0,J=this.data.length;Y<J;Y++)$.put(this.data[Y],8)};t8.exports=_0});var Y5=S((rY,$5)=>{var H9=N0(),V9=O0();function W0($){this.mode=H9.KANJI,this.data=$}W0.getBitsLength=function(Y){return Y*13};W0.prototype.getLength=function(){return this.data.length};W0.prototype.getBitsLength=function(){return W0.getBitsLength(this.data.length)};W0.prototype.write=function($){let Y;for(Y=0;Y<this.data.length;Y++){let J=V9.toSJIS(this.data[Y]);if(J>=33088&&J<=40956)J-=33088;else if(J>=57408&&J<=60351)J-=49472;else throw Error("Invalid SJIS character: "+this.data[Y]+`
Make sure your charset is UTF-8`);J=(J>>>8&255)*192+(J&255),$.put(J,13)}};$5.exports=W0});var P5=S((f9)=>{var A=N0(),q5=s8(),K5=r8(),X5=e8(),F5=Y5(),c0=x1(),Q1=O0(),B9=z9();function J5($){return unescape(encodeURIComponent($)).length}function n0($,Y,J){let Z=[],K;while((K=$.exec(J))!==null)Z.push({data:K[0],index:K.index,mode:Y,length:K[0].length});return Z}function Q5($){let Y=n0(c0.NUMERIC,A.NUMERIC,$),J=n0(c0.ALPHANUMERIC,A.ALPHANUMERIC,$),Z,K;if(Q1.isKanjiModeEnabled())Z=n0(c0.BYTE,A.BYTE,$),K=n0(c0.KANJI,A.KANJI,$);else Z=n0(c0.BYTE_KANJI,A.BYTE,$),K=[];return Y.concat(J,Z,K).sort(function(X,F){return X.index-F.index}).map(function(X){return{data:X.data,mode:X.mode,length:X.length}})}function C1($,Y){switch(Y){case A.NUMERIC:return q5.getBitsLength($);case A.ALPHANUMERIC:return K5.getBitsLength($);case A.KANJI:return F5.getBitsLength($);case A.BYTE:return X5.getBitsLength($)}}function D9($){return $.reduce(function(Y,J){let Z=Y.length-1>=0?Y[Y.length-1]:null;if(Z&&Z.mode===J.mode)return Y[Y.length-1].data+=J.data,Y;return Y.push(J),Y},[])}function T9($){let Y=[];for(let J=0;J<$.length;J++){let Z=$[J];switch(Z.mode){case A.NUMERIC:Y.push([Z,{data:Z.data,mode:A.ALPHANUMERIC,length:Z.length},{data:Z.data,mode:A.BYTE,length:Z.length}]);break;case A.ALPHANUMERIC:Y.push([Z,{data:Z.data,mode:A.BYTE,length:Z.length}]);break;case A.KANJI:Y.push([Z,{data:Z.data,mode:A.BYTE,length:J5(Z.data)}]);break;case A.BYTE:Y.push([{data:Z.data,mode:A.BYTE,length:J5(Z.data)}])}}return Y}function I9($,Y){let J={},Z={start:{}},K=["start"];for(let q=0;q<$.length;q++){let X=$[q],F=[];for(let Q=0;Q<X.length;Q++){let G=X[Q],T=""+q+Q;F.push(T),J[T]={node:G,lastCount:0},Z[T]={};for(let v=0;v<K.length;v++){let R=K[v];if(J[R]&&J[R].node.mode===G.mode)Z[R][T]=C1(J[R].lastCount+G.length,G.mode)-C1(J[R].lastCount,G.mode),J[R].lastCount+=G.length;else{if(J[R])J[R].lastCount=G.length;Z[R][T]=C1(G.length,G.mode)+4+A.getCharCountIndicator(G.mode,Y)}}}K=F}for(let q=0;q<K.length;q++)Z[K[q]].end=0;return{map:Z,table:J}}function Z5($,Y){let J,Z=A.getBestModeForData($);if(J=A.from(Y,Z),J!==A.BYTE&&J.bit<Z.bit)throw Error('"'+$+'" cannot be encoded with mode '+A.toString(J)+`.
 Suggested mode is: `+A.toString(Z));if(J===A.KANJI&&!Q1.isKanjiModeEnabled())J=A.BYTE;switch(J){case A.NUMERIC:return new q5($);case A.ALPHANUMERIC:return new K5($);case A.KANJI:return new F5($);case A.BYTE:return new X5($)}}f9.fromArray=function(Y){return Y.reduce(function(J,Z){if(typeof Z==="string")J.push(Z5(Z,null));else if(Z.data)J.push(Z5(Z.data,Z.mode));return J},[])};f9.fromString=function(Y,J){let Z=Q5(Y,Q1.isKanjiModeEnabled()),K=T9(Z),q=I9(K,J),X=B9.find_path(q.map,"start","end"),F=[];for(let Q=1;Q<X.length-1;Q++)F.push(q.table[X[Q]].node);return f9.fromArray(D9(F))};f9.rawSplit=function(Y){return f9.fromArray(Q5(Y,Q1.isKanjiModeEnabled()))}});var O5=S((y9)=>{var O1=O0(),u1=Z1(),E9=U8(),A9=A8(),R9=j8(),j9=S8(),m1=v8(),d1=A1(),S9=u8(),P1=c8(),x9=i8(),L9=N0(),p1=P5();function h9($,Y){let J=$.size,Z=j9.getPositions(Y);for(let K=0;K<Z.length;K++){let q=Z[K][0],X=Z[K][1];for(let F=-1;F<=7;F++){if(q+F<=-1||J<=q+F)continue;for(let Q=-1;Q<=7;Q++){if(X+Q<=-1||J<=X+Q)continue;if(F>=0&&F<=6&&(Q===0||Q===6)||Q>=0&&Q<=6&&(F===0||F===6)||F>=2&&F<=4&&Q>=2&&Q<=4)$.set(q+F,X+Q,!0,!0);else $.set(q+F,X+Q,!1,!0)}}}}function w9($){let Y=$.size;for(let J=8;J<Y-8;J++){let Z=J%2===0;$.set(J,6,Z,!0),$.set(6,J,Z,!0)}}function b9($,Y){let J=R9.getPositions(Y);for(let Z=0;Z<J.length;Z++){let K=J[Z][0],q=J[Z][1];for(let X=-2;X<=2;X++)for(let F=-2;F<=2;F++)if(X===-2||X===2||F===-2||F===2||X===0&&F===0)$.set(K+X,q+F,!0,!0);else $.set(K+X,q+F,!1,!0)}}function v9($,Y){let J=$.size,Z=P1.getEncodedBits(Y),K,q,X;for(let F=0;F<18;F++)K=Math.floor(F/3),q=F%3+J-8-3,X=(Z>>F&1)===1,$.set(K,q,X,!0),$.set(q,K,X,!0)}function g1($,Y,J){let Z=$.size,K=x9.getEncodedBits(Y,J),q,X;for(q=0;q<15;q++){if(X=(K>>q&1)===1,q<6)$.set(q,8,X,!0);else if(q<8)$.set(q+1,8,X,!0);else $.set(Z-15+q,8,X,!0);if(q<8)$.set(8,Z-q-1,X,!0);else if(q<9)$.set(8,15-q-1+1,X,!0);else $.set(8,15-q-1,X,!0)}$.set(Z-8,8,1,!0)}function _9($,Y){let J=$.size,Z=-1,K=J-1,q=7,X=0;for(let F=J-1;F>0;F-=2){if(F===6)F--;while(!0){for(let Q=0;Q<2;Q++)if(!$.isReserved(K,F-Q)){let G=!1;if(X<Y.length)G=(Y[X]>>>q&1)===1;if($.set(K,F-Q,G),q--,q===-1)X++,q=7}if(K+=Z,K<0||J<=K){K-=Z,Z=-Z;break}}}}function W9($,Y,J){let Z=new E9;J.forEach(function(Q){Z.put(Q.mode.bit,4),Z.put(Q.getLength(),L9.getCharCountIndicator(Q.mode,$)),Q.write(Z)});let K=O1.getSymbolTotalCodewords($),q=d1.getTotalCodewordsCount($,Y),X=(K-q)*8;if(Z.getLengthInBits()+4<=X)Z.put(0,4);while(Z.getLengthInBits()%8!==0)Z.putBit(0);let F=(X-Z.getLengthInBits())/8;for(let Q=0;Q<F;Q++)Z.put(Q%2?17:236,8);return k9(Z,$,Y)}function k9($,Y,J){let Z=O1.getSymbolTotalCodewords(Y),K=d1.getTotalCodewordsCount(Y,J),q=Z-K,X=d1.getBlocksCount(Y,J),F=Z%X,Q=X-F,G=Math.floor(Z/X),T=Math.floor(q/X),v=T+1,R=G-T,p=new S9(R),w=0,I=Array(X),B=Array(X),L=0,j=new Uint8Array($.buffer);for(let j0=0;j0<X;j0++){let I1=j0<Q?T:v;I[j0]=j.slice(w,w+I1),B[j0]=p.encode(I[j0]),w+=I1,L=Math.max(L,I1)}let u=new Uint8Array(Z),_=0,k,J0;for(k=0;k<L;k++)for(J0=0;J0<X;J0++)if(k<I[J0].length)u[_++]=I[J0][k];for(k=0;k<R;k++)for(J0=0;J0<X;J0++)u[_++]=B[J0][k];return u}function C9($,Y,J,Z){let K;if(Array.isArray($))K=p1.fromArray($);else if(typeof $==="string"){let G=Y;if(!G){let T=p1.rawSplit($);G=P1.getBestVersionForData(T,J)}K=p1.fromString($,G||40)}else throw Error("Invalid data");let q=P1.getBestVersionForData(K,J);if(!q)throw Error("The amount of data is too big to be stored in a QR Code");if(!Y)Y=q;else if(Y<q)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+q+`.
`);let X=W9(Y,J,K),F=O1.getSymbolSize(Y),Q=new A9(F);if(h9(Q,Y),w9(Q),b9(Q,Y),g1(Q,J,0),Y>=7)v9(Q,Y);if(_9(Q,X),isNaN(Z))Z=m1.getBestMask(Q,g1.bind(null,Q,J));return m1.applyMask(Z,Q),g1(Q,J,Z),{modules:Q,version:Y,errorCorrectionLevel:J,maskPattern:Z,segments:K}}y9.create=function(Y,J){if(typeof Y>"u"||Y==="")throw Error("No input text");let Z=u1.M,K,q;if(typeof J<"u"){if(Z=u1.from(J.errorCorrectionLevel,u1.M),K=P1.from(J.version),q=m1.from(J.maskPattern),J.toSJISFunc)O1.setToSJISFunction(J.toSJISFunc)}return C9(Y,K,Z,q)}});var c1=S((p9)=>{function G5($){if(typeof $==="number")$=$.toString();if(typeof $!=="string")throw Error("Color should be defined as hex string");let Y=$.slice().replace("#","").split("");if(Y.length<3||Y.length===5||Y.length>8)throw Error("Invalid hex color: "+$);if(Y.length===3||Y.length===4)Y=Array.prototype.concat.apply([],Y.map(function(Z){return[Z,Z]}));if(Y.length===6)Y.push("F","F");let J=parseInt(Y.join(""),16);return{r:J>>24&255,g:J>>16&255,b:J>>8&255,a:J&255,hex:"#"+Y.slice(0,6).join("")}}p9.getOptions=function(Y){if(!Y)Y={};if(!Y.color)Y.color={};let J=typeof Y.margin>"u"||Y.margin===null||Y.margin<0?4:Y.margin,Z=Y.width&&Y.width>=21?Y.width:void 0,K=Y.scale||4;return{width:Z,scale:Z?4:K,margin:J,color:{dark:G5(Y.color.dark||"#000000ff"),light:G5(Y.color.light||"#ffffffff")},type:Y.type,rendererOpts:Y.rendererOpts||{}}};p9.getScale=function(Y,J){return J.width&&J.width>=Y+J.margin*2?J.width/(Y+J.margin*2):J.scale};p9.getImageWidth=function(Y,J){let Z=p9.getScale(Y,J);return Math.floor((Y+J.margin*2)*Z)};p9.qrToImageData=function(Y,J,Z){let K=J.modules.size,q=J.modules.data,X=p9.getScale(K,Z),F=Math.floor((K+Z.margin*2)*X),Q=Z.margin*X,G=[Z.color.light,Z.color.dark];for(let T=0;T<F;T++)for(let v=0;v<F;v++){let R=(T*F+v)*4,p=Z.color.light;if(T>=Q&&v>=Q&&T<F-Q&&v<F-Q){let w=Math.floor((T-Q)/X),I=Math.floor((v-Q)/X);p=G[q[w*K+I]?1:0]}Y[R++]=p.r,Y[R++]=p.g,Y[R++]=p.b,Y[R]=p.a}}});var H5=S((n9)=>{var n1=c1();function l9($,Y,J){if($.clearRect(0,0,Y.width,Y.height),!Y.style)Y.style={};Y.height=J,Y.width=J,Y.style.height=J+"px",Y.style.width=J+"px"}function c9(){try{return document.createElement("canvas")}catch($){throw Error("You need to specify a canvas element")}}n9.render=function(Y,J,Z){let K=Z,q=J;if(typeof K>"u"&&(!J||!J.getContext))K=J,J=void 0;if(!J)q=c9();K=n1.getOptions(K);let X=n1.getImageWidth(Y.modules.size,K),F=q.getContext("2d"),Q=F.createImageData(X,X);return n1.qrToImageData(Q.data,Y,K),l9(F,q,X),F.putImageData(Q,0,0),q};n9.renderToDataURL=function(Y,J,Z){let K=Z;if(typeof K>"u"&&(!J||!J.getContext))K=J,J=void 0;if(!K)K={};let q=n9.render(Y,J,K),X=K.type||"image/png",F=K.rendererOpts||{};return q.toDataURL(X,F.quality)}});var z5=S((o9)=>{var a9=c1();function V5($,Y){let J=$.a/255,Z=Y+'="'+$.hex+'"';return J<1?Z+" "+Y+'-opacity="'+J.toFixed(2).slice(1)+'"':Z}function i1($,Y,J){let Z=$+Y;if(typeof J<"u")Z+=" "+J;return Z}function s9($,Y,J){let Z="",K=0,q=!1,X=0;for(let F=0;F<$.length;F++){let Q=Math.floor(F%Y),G=Math.floor(F/Y);if(!Q&&!q)q=!0;if($[F]){if(X++,!(F>0&&Q>0&&$[F-1]))Z+=q?i1("M",Q+J,0.5+G+J):i1("m",K,0),K=0,q=!1;if(!(Q+1<Y&&$[F+1]))Z+=i1("h",X),X=0}else K++}return Z}o9.render=function(Y,J,Z){let K=a9.getOptions(J),q=Y.modules.size,X=Y.modules.data,F=q+K.margin*2,Q=!K.color.light.a?"":"<path "+V5(K.color.light,"fill")+' d="M0 0h'+F+"v"+F+'H0z"/>',G="<path "+V5(K.color.dark,"stroke")+' d="'+s9(X,q,K.margin)+'"/>',T='viewBox="0 0 '+F+" "+F+'"',R='<svg xmlns="http://www.w3.org/2000/svg" '+(!K.width?"":'width="'+K.width+'" height="'+K.width+'" ')+T+' shape-rendering="crispEdges">'+Q+G+`</svg>
`;if(typeof Z==="function")Z(null,R);return R}});var D5=S(($2)=>{var t9=V8(),a1=O5(),B5=H5(),e9=z5();function s1($,Y,J,Z,K){let q=[].slice.call(arguments,1),X=q.length,F=typeof q[X-1]==="function";if(!F&&!t9())throw Error("Callback required as last argument");if(F){if(X<2)throw Error("Too few arguments provided");if(X===2)K=J,J=Y,Y=Z=void 0;else if(X===3)if(Y.getContext&&typeof K>"u")K=Z,Z=void 0;else K=Z,Z=J,J=Y,Y=void 0}else{if(X<1)throw Error("Too few arguments provided");if(X===1)J=Y,Y=Z=void 0;else if(X===2&&!Y.getContext)Z=J,J=Y,Y=void 0;return new Promise(function(Q,G){try{let T=a1.create(J,Z);Q($(T,Y,Z))}catch(T){G(T)}})}try{let Q=a1.create(J,Z);K(null,$(Q,Y,Z))}catch(Q){K(Q)}}$2.create=a1.create;$2.toCanvas=s1.bind(null,B5.render);$2.toDataURL=s1.bind(null,B5.renderToDataURL);$2.toString=s1.bind(null,function($,Y,J){return e9.render($,J)})});var x0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},D0=class extends V{constructor(){super();this.unsubscribe=[],this.tabIdx=void 0,this.connectors=C.state.connectors,this.count=U.state.count,this.filteredCount=U.state.filteredWallets.length,this.isFetchingRecommendedWallets=U.state.isFetchingRecommendedWallets,this.unsubscribe.push(C.subscribeKey("connectors",(Y)=>this.connectors=Y),U.subscribeKey("count",(Y)=>this.count=Y),U.subscribeKey("filteredWallets",(Y)=>this.filteredCount=Y.length),U.subscribeKey("isFetchingRecommendedWallets",(Y)=>this.isFetchingRecommendedWallets=Y))}disconnectedCallback(){this.unsubscribe.forEach((Y)=>Y())}render(){let Y=this.connectors.find((G)=>G.id==="walletConnect"),{allWallets:J}=W.state;if(!Y||J==="HIDE")return null;if(J==="ONLY_MOBILE"&&!D.isMobile())return null;let Z=U.state.featured.length,K=this.count+Z,q=K<10?K:Math.floor(K/10)*10,X=this.filteredCount>0?this.filteredCount:q,F=`${X}`;if(this.filteredCount>0)F=`${this.filteredCount}`;else if(X<K)F=`${X}+`;let Q=f.hasAnyConnection(S0.CONNECTOR_ID.WALLET_CONNECT);return P`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${F}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${E(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${Q}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){h.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),z.push("AllWallets",{redirectView:z.state.data?.redirectView})}};x0([O()],D0.prototype,"tabIdx",void 0);x0([H()],D0.prototype,"connectors",void 0);x0([H()],D0.prototype,"count",void 0);x0([H()],D0.prototype,"filteredCount",void 0);x0([H()],D0.prototype,"isFetchingRecommendedWallets",void 0);D0=x0([N("w3m-all-wallets-widget")],D0);var $8=M`
  :host {
    margin-top: ${({spacing:$})=>$["1"]};
  }
  wui-separator {
    margin: ${({spacing:$})=>$["3"]} calc(${({spacing:$})=>$["3"]} * -1)
      ${({spacing:$})=>$["2"]} calc(${({spacing:$})=>$["3"]} * -1);
    width: calc(100% + ${({spacing:$})=>$["3"]} * 2);
  }
`;var Z0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},a=class extends V{constructor(){super();if(this.unsubscribe=[],this.connectors=C.state.connectors,this.recommended=U.state.recommended,this.featured=U.state.featured,this.explorerWallets=U.state.explorerWallets,this.connections=f.state.connections,this.connectorImages=f1.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(C.subscribeKey("connectors",(Y)=>this.connectors=Y),f.subscribeKey("connections",(Y)=>this.connections=Y),f1.subscribeKey("connectorImages",(Y)=>this.connectorImages=Y),U.subscribeKey("recommended",(Y)=>this.recommended=Y),U.subscribeKey("featured",(Y)=>this.featured=Y),U.subscribeKey("explorerFilteredWallets",(Y)=>{this.explorerWallets=Y?.length?Y:U.state.explorerWallets}),U.subscribeKey("explorerWallets",(Y)=>{if(!this.explorerWallets?.length)this.explorerWallets=Y})),D.isTelegram()&&D.isIos())this.loadingTelegram=!f.state.wcUri,this.unsubscribe.push(f.subscribeKey("wcUri",(Y)=>this.loadingTelegram=!Y))}disconnectedCallback(){this.unsubscribe.forEach((Y)=>Y())}render(){return P`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(Y,J){return Y.map((Z)=>{if(Z.type==="MULTI_CHAIN"&&Z.connectors){let q=Z.connectors.map((G)=>G.id),X=Z.connectors.map((G)=>G.name),F=Z.connectors.map((G)=>G.info?.rdns),Q=J?.find((G)=>q.includes(G.id)||X.includes(G.name)||G.rdns&&(F.includes(G.rdns)||q.includes(G.rdns)));return Z.explorerWallet=Q??Z.explorerWallet,Z}let K=J?.find((q)=>q.id===Z.id||q.rdns===Z.info?.rdns||q.name===Z.name);return Z.explorerWallet=K??Z.explorerWallet,Z})}processConnectorsByType(Y,J=!0){let Z=Q0.sortConnectorsByExplorerWallet([...Y]);return J?Z.filter(Q0.showConnector):Z}connectorListTemplate(){let Y=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),J=Q0.getConnectorsByType(Y,this.recommended,this.featured),Z=this.processConnectorsByType(J.announced.filter((I)=>I.id!=="walletConnect")),K=this.processConnectorsByType(J.injected),q=this.processConnectorsByType(J.multiChain.filter((I)=>I.name!=="WalletConnect"),!1),X=J.custom,F=J.recent,Q=this.processConnectorsByType(J.external.filter((I)=>I.id!==S0.CONNECTOR_ID.COINBASE_SDK)),G=J.recommended,T=J.featured,v=Q0.getConnectorTypeOrder({custom:X,recent:F,announced:Z,injected:K,multiChain:q,recommended:G,featured:T,external:Q}),R=this.connectors.find((I)=>I.id==="walletConnect"),p=D.isMobile(),w=[];for(let I of v)switch(I){case"walletConnect":{if(!p&&R)w.push({kind:"connector",subtype:"walletConnect",connector:R});break}case"recent":{Q0.getFilteredRecentWallets().forEach((L)=>w.push({kind:"wallet",subtype:"recent",wallet:L}));break}case"injected":{q.forEach((B)=>w.push({kind:"connector",subtype:"multiChain",connector:B})),Z.forEach((B)=>w.push({kind:"connector",subtype:"announced",connector:B})),K.forEach((B)=>w.push({kind:"connector",subtype:"injected",connector:B}));break}case"featured":{T.forEach((B)=>w.push({kind:"wallet",subtype:"featured",wallet:B}));break}case"custom":{Q0.getFilteredCustomWallets(X??[]).forEach((L)=>w.push({kind:"wallet",subtype:"custom",wallet:L}));break}case"external":{Q.forEach((B)=>w.push({kind:"connector",subtype:"external",connector:B}));break}case"recommended":{Q0.getCappedRecommendedWallets(G).forEach((L)=>w.push({kind:"wallet",subtype:"recommended",wallet:L}));break}default:console.warn(`Unknown connector type: ${I}`)}return w.map((I,B)=>{if(I.kind==="connector")return this.renderConnector(I,B);return this.renderWallet(I,B)})}renderConnector(Y,J){let Z=Y.connector,K=d.getConnectorImage(Z)||this.connectorImages[Z?.imageId??""],X=(this.connections.get(Z.chain)??[]).some((v)=>Y8.isLowerCaseMatch(v.connectorId,Z.id)),F=void 0,Q=void 0;if(Y.subtype==="multiChain")F="multichain",Q="info";else if(Y.subtype==="walletConnect")F="qr code",Q="accent";else if(Y.subtype==="injected"||Y.subtype==="announced")F=X?"connected":"installed",Q=X?"info":"success";else F=void 0,Q=void 0;let G=f.hasAnyConnection(S0.CONNECTOR_ID.WALLET_CONNECT),T=Y.subtype==="walletConnect"||Y.subtype==="external"?G:!1;return P`
      <w3m-list-wallet
        displayIndex=${J}
        imageSrc=${E(K)}
        .installed=${!0}
        name=${Z.name??"Unknown"}
        .tagVariant=${Q}
        tagLabel=${E(F)}
        data-testid=${`wallet-selector-${Z.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(Y)}
        tabIdx=${E(this.tabIdx)}
        ?disabled=${T}
        rdnsId=${E(Z.explorerWallet?.rdns||void 0)}
        walletRank=${E(Z.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(Y){let J=z.state.data?.redirectView;if(Y.subtype==="walletConnect"){if(C.setActiveConnector(Y.connector),D.isMobile())z.push("AllWallets");else z.push("ConnectingWalletConnect",{redirectView:J});return}if(Y.subtype==="multiChain"){C.setActiveConnector(Y.connector),z.push("ConnectingMultiChain",{redirectView:J});return}if(Y.subtype==="injected"){C.setActiveConnector(Y.connector),z.push("ConnectingExternal",{connector:Y.connector,redirectView:J,wallet:Y.connector.explorerWallet});return}if(Y.subtype==="announced"){if(Y.connector.id==="walletConnect"){if(D.isMobile())z.push("AllWallets");else z.push("ConnectingWalletConnect",{redirectView:J});return}z.push("ConnectingExternal",{connector:Y.connector,redirectView:J,wallet:Y.connector.explorerWallet});return}z.push("ConnectingExternal",{connector:Y.connector,redirectView:J})}renderWallet(Y,J){let Z=Y.wallet,K=d.getWalletImage(Z),X=f.hasAnyConnection(S0.CONNECTOR_ID.WALLET_CONNECT),F=this.loadingTelegram,Q=Y.subtype==="recent"?"recent":void 0,G=Y.subtype==="recent"?"info":void 0;return P`
      <w3m-list-wallet
        displayIndex=${J}
        imageSrc=${E(K)}
        name=${Z.name??"Unknown"}
        @click=${()=>this.onClickWallet(Y)}
        size="sm"
        data-testid=${`wallet-selector-${Z.id}`}
        tabIdx=${E(this.tabIdx)}
        ?loading=${F}
        ?disabled=${X}
        rdnsId=${E(Z.rdns||void 0)}
        walletRank=${E(Z.order)}
        tagLabel=${E(Q)}
        .tagVariant=${G}
      >
      </w3m-list-wallet>
    `}onClickWallet(Y){let J=z.state.data?.redirectView;if(Y.subtype==="featured"){C.selectWalletConnector(Y.wallet);return}if(Y.subtype==="recent"){if(this.loadingTelegram)return;C.selectWalletConnector(Y.wallet);return}if(Y.subtype==="custom"){if(this.loadingTelegram)return;z.push("ConnectingWalletConnect",{wallet:Y.wallet,redirectView:J});return}if(this.loadingTelegram)return;let Z=C.getConnector({id:Y.wallet.id,rdns:Y.wallet.rdns});if(Z)z.push("ConnectingExternal",{connector:Z,redirectView:J});else z.push("ConnectingWalletConnect",{wallet:Y.wallet,redirectView:J})}};a.styles=$8;Z0([O({type:Number})],a.prototype,"tabIdx",void 0);Z0([H()],a.prototype,"connectors",void 0);Z0([H()],a.prototype,"recommended",void 0);Z0([H()],a.prototype,"featured",void 0);Z0([H()],a.prototype,"explorerWallets",void 0);Z0([H()],a.prototype,"connections",void 0);Z0([H()],a.prototype,"connectorImages",void 0);Z0([H()],a.prototype,"loadingTelegram",void 0);a=Z0([N("w3m-connector-list")],a);var J8=M`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:$})=>$[1]} ${({spacing:$})=>$[2]};
    column-gap: ${({spacing:$})=>$[1]};
    color: ${({tokens:$})=>$.theme.textSecondary};
    border-radius: ${({borderRadius:$})=>$[20]};
    background-color: transparent;
    transition: background-color ${({durations:$})=>$.lg}
      ${({easings:$})=>$["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:$})=>$.theme.textPrimary};
    background-color: ${({tokens:$})=>$.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:$})=>$.theme.textPrimary};
    }
  }
`;var u0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},n5={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},i5={lg:"md",md:"sm",sm:"sm"},T0=class extends V{constructor(){super(...arguments);this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return P`
      <button data-active=${this.active}>
        ${this.icon?P`<wui-icon size=${i5[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${n5[this.size]}> ${this.label} </wui-text>
      </button>
    `}};T0.styles=[x,y,J8];u0([O()],T0.prototype,"icon",void 0);u0([O()],T0.prototype,"size",void 0);u0([O()],T0.prototype,"label",void 0);u0([O({type:Boolean})],T0.prototype,"active",void 0);T0=u0([N("wui-tab-item")],T0);var Z8=M`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:$})=>$.theme.foregroundSecondary};
    border-radius: ${({borderRadius:$})=>$[32]};
    padding: ${({spacing:$})=>$["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var p0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},I0=class extends V{constructor(){super(...arguments);this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((Y,J)=>{let Z=J===this.activeTab;return P`
        <wui-tab-item
          @click=${()=>this.onTabClick(J)}
          icon=${Y.icon}
          size=${this.size}
          label=${Y.label}
          ?active=${Z}
          data-active=${Z}
          data-testid="tab-${Y.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(Y){this.activeTab=Y,this.onTabChange(Y)}};I0.styles=[x,y,Z8];p0([O({type:Array})],I0.prototype,"tabs",void 0);p0([O()],I0.prototype,"onTabChange",void 0);p0([O()],I0.prototype,"size",void 0);p0([H()],I0.prototype,"activeTab",void 0);I0=p0([N("wui-tabs")],I0);var M1=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},o0=class extends V{constructor(){super(...arguments);this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((Y)=>Y())}render(){let Y=this.generateTabs();return P`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${Y} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let Y=this.platforms.map((J)=>{if(J==="browser")return{label:"Browser",icon:"extension",platform:"browser"};else if(J==="mobile")return{label:"Mobile",icon:"mobile",platform:"mobile"};else if(J==="qrcode")return{label:"Mobile",icon:"mobile",platform:"qrcode"};else if(J==="web")return{label:"Webapp",icon:"browser",platform:"web"};else if(J==="desktop")return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=Y.map(({platform:J})=>J),Y}onTabChange(Y){let J=this.platformTabs[Y];if(J)this.onSelectPlatfrom?.(J)}};M1([O({type:Array})],o0.prototype,"platforms",void 0);M1([O()],o0.prototype,"onSelectPlatfrom",void 0);o0=M1([N("w3m-connecting-header")],o0);var q8=M`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:$})=>$[2]};
    transition:
      scale ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-1"]},
      background-color ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      border-radius ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:$})=>$[2]};
    padding: 0 ${({spacing:$})=>$[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:$})=>$[3]};
    padding: 0 ${({spacing:$})=>$[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:$})=>$[4]};
    padding: 0 ${({spacing:$})=>$[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:$})=>$.core.backgroundAccentPrimary};
    color: ${({tokens:$})=>$.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:$})=>$.core.foregroundAccent010};
    color: ${({tokens:$})=>$.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:$})=>$.theme.backgroundInvert};
    color: ${({tokens:$})=>$.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:$})=>$.theme.borderSecondary};
    color: ${({tokens:$})=>$.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:$})=>$.theme.foregroundPrimary};
    color: ${({tokens:$})=>$.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:$})=>$.core.textError};
    color: ${({tokens:$})=>$.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:$})=>$.core.backgroundError};
    color: ${({tokens:$})=>$.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var f0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},a5={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},s5={lg:"md",md:"md",sm:"sm"},q0=class extends V{constructor(){super(...arguments);this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let Y=this.textVariant??a5[this.size];return P`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${Y} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let Y=s5[this.size],J=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return P`<wui-loading-spinner color=${J} size=${Y}></wui-loading-spinner>`}return null}};q0.styles=[x,y,q8];f0([O()],q0.prototype,"size",void 0);f0([O({type:Boolean})],q0.prototype,"disabled",void 0);f0([O({type:Boolean})],q0.prototype,"fullWidth",void 0);f0([O({type:Boolean})],q0.prototype,"loading",void 0);f0([O()],q0.prototype,"variant",void 0);f0([O()],q0.prototype,"textVariant",void 0);q0=f0([N("wui-button")],q0);var K8=M`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${($)=>$.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var X8=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},r0=class extends V{constructor(){super(...arguments);this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let Y=this.radius>50?50:this.radius,J=36,Z=36-Y,K=116+Z,q=245+Z,X=360+Z*1.75;return P`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${Y}
          stroke-dasharray="${K} ${q}"
          stroke-dashoffset=${X}
        />
      </svg>
    `}};r0.styles=[x,K8];X8([O({type:Number})],r0.prototype,"radius",void 0);r0=X8([N("wui-loading-thumbnail")],r0);var F8=M`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:$})=>$.theme.foregroundPrimary};
    border-radius: ${({borderRadius:$})=>$[5]};
    padding-left: ${({spacing:$})=>$[3]};
    padding-right: ${({spacing:$})=>$[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:$})=>$[6]};
  }

  wui-text {
    color: ${({tokens:$})=>$.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var t0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},L0=class extends V{constructor(){super(...arguments);this.disabled=!1,this.label="",this.buttonLabel=""}render(){return P`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};L0.styles=[x,y,F8];t0([O({type:Boolean})],L0.prototype,"disabled",void 0);t0([O()],L0.prototype,"label",void 0);t0([O()],L0.prototype,"buttonLabel",void 0);L0=t0([N("wui-cta-button")],L0);var Q8=M`
  :host {
    display: block;
    padding: 0 ${({spacing:$})=>$["5"]} ${({spacing:$})=>$["5"]};
  }
`;var P8=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},e0=class extends V{constructor(){super(...arguments);this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:Y,app_store:J,play_store:Z,chrome_store:K,homepage:q}=this.wallet,X=D.isMobile(),F=D.isIos(),Q=D.isAndroid(),G=[J,Z,q,K].filter(Boolean).length>1,T=s.getTruncateString({string:Y,charsStart:12,charsEnd:0,truncate:"end"});if(G&&!X)return P`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${()=>z.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `;if(!G&&q)return P`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;if(J&&F)return P`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;if(Z&&Q)return P`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;return this.style.display="none",null}onAppStore(){if(this.wallet?.app_store)D.openHref(this.wallet.app_store,"_blank")}onPlayStore(){if(this.wallet?.play_store)D.openHref(this.wallet.play_store,"_blank")}onHomePage(){if(this.wallet?.homepage)D.openHref(this.wallet.homepage,"_blank")}};e0.styles=[Q8];P8([O({type:Object})],e0.prototype,"wallet",void 0);e0=P8([N("w3m-mobile-download-links")],e0);var O8=M`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:$})=>$["1"]} * -1);
    bottom: calc(${({spacing:$})=>$["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:$})=>$.lg};
    transition-timing-function: ${({easings:$})=>$["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:$})=>$["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:$})=>$["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var o=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q};class b extends V{constructor(){super();if(this.wallet=z.state.data?.wallet,this.connector=z.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=d.getConnectorImage(this.connector)??d.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=f.state.wcUri,this.error=f.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[f.subscribeKey("wcUri",($)=>{if(this.uri=$,this.isRetrying&&this.onRetry)this.isRetrying=!1,this.onConnect?.()}),f.subscribeKey("wcError",($)=>this.error=$)]),(D.isTelegram()||D.isSafari())&&D.isIos()&&f.state.wcUri)this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(($)=>$()),f.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let $=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,Y="";if(this.label)Y=this.label;else if(Y=`Continue in ${this.name}`,this.error)Y="Connection declined";return P`
      <wui-flex
        data-error=${E(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${E(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${Y}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${$}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?P`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?P`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry)this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}onTryAgain(){if(f.setWcError(!1),this.onRetry)this.isRetrying=!0,this.onRetry?.();else this.onConnect?.()}loaderTemplate(){let $=g0.state.themeVariables["--w3m-border-radius-master"],Y=$?parseInt($.replace("px",""),10):4;return P`<wui-loading-thumbnail radius=${Y*9}></wui-loading-thumbnail>`}onCopyUri(){try{if(this.uri)D.copyToClopboard(this.uri),P0.showSuccess("Link copied")}catch{P0.showError("Failed to copy")}}}b.styles=O8;o([H()],b.prototype,"isRetrying",void 0);o([H()],b.prototype,"uri",void 0);o([H()],b.prototype,"error",void 0);o([H()],b.prototype,"ready",void 0);o([H()],b.prototype,"showRetry",void 0);o([H()],b.prototype,"label",void 0);o([H()],b.prototype,"secondaryBtnLabel",void 0);o([H()],b.prototype,"secondaryLabel",void 0);o([H()],b.prototype,"isLoading",void 0);o([O({type:Boolean})],b.prototype,"isMobile",void 0);o([O()],b.prototype,"onRetry",void 0);var o5=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},G8=class extends b{constructor(){super();if(!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),h.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:z.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:Y}=C.state,J=Y.find((Z)=>Z.type==="ANNOUNCED"&&Z.info?.rdns===this.wallet?.rdns||Z.type==="INJECTED"||Z.name===this.wallet?.name);if(J)await f.connectExternal(J,J.chain);else throw Error("w3m-connecting-wc-browser: No connector found");Y1.close(),h.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:z.state.view,walletRank:this.wallet?.order}})}catch(Y){if(Y instanceof $1&&Y.originalName===h0.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)h.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:Y.message}});else h.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:Y?.message??"Unknown"}});this.error=!0}}};G8=o5([N("w3m-connecting-wc-browser")],G8);var r5=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},N8=class extends b{constructor(){super();if(!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),h.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:z.state.view}})}onRenderProxy(){if(!this.ready&&this.uri)this.ready=!0,this.onConnect?.()}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:Y,name:J}=this.wallet,{redirect:Z,href:K}=D.formatNativeUrl(Y,this.uri);f.setWcLinking({name:J,href:K}),f.setRecentWallet(this.wallet),D.openHref(Z,"_blank")}catch{this.error=!0}}};N8=r5([N("w3m-connecting-wc-desktop")],N8);var w0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},M0=class extends b{constructor(){super();if(this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=W.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:Y,link_mode:J,name:Z}=this.wallet,{redirect:K,redirectUniversalLink:q,href:X}=D.formatNativeUrl(Y,this.uri,J);if(this.redirectDeeplink=K,this.redirectUniversalLink=q,this.target=D.isIframe()?"_top":"_self",f.setWcLinking({name:Z,href:X}),f.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink)D.openHref(this.redirectUniversalLink,this.target);else D.openHref(this.redirectDeeplink,this.target)}catch(Y){h.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:Y instanceof Error?Y.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=J1.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(f.subscribeKey("wcUri",()=>{this.onHandleURI()})),h.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:z.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){if(this.isLoading=!this.uri,!this.ready&&this.uri)this.ready=!0,this.onConnect?.()}onTryAgain(){f.setWcError(!1),this.onConnect?.()}};w0([H()],M0.prototype,"redirectDeeplink",void 0);w0([H()],M0.prototype,"redirectUniversalLink",void 0);w0([H()],M0.prototype,"target",void 0);w0([H()],M0.prototype,"preferUniversalLinks",void 0);w0([H()],M0.prototype,"isLoading",void 0);M0=w0([N("w3m-connecting-wc-mobile")],M0);var I5=K2(D5(),1);var X2=0.1,T5=2.5,K0=7;function o1($,Y,J){if($===Y)return!1;return($-Y<0?Y-$:$-Y)<=J+X2}function F2($,Y){let J=Array.prototype.slice.call(I5.default.create($,{errorCorrectionLevel:Y}).modules.data,0),Z=Math.sqrt(J.length);return J.reduce((K,q,X)=>(X%Z===0?K.push([q]):K[K.length-1].push(q))&&K,[])}var f5={generate({uri:$,size:Y,logoSize:J,padding:Z=8,dotColor:K="var(--apkt-colors-black)"}){let X=[],F=F2($,"Q"),Q=(Y-2*Z)/F.length,G=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];G.forEach(({x:I,y:B})=>{let L=(F.length-K0)*Q*I+Z,j=(F.length-K0)*Q*B+Z,u=0.45;for(let _=0;_<G.length;_+=1){let k=Q*(K0-_*2);X.push(V0`
            <rect
              fill=${_===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${_===0?k-10:k}
              rx= ${_===0?(k-10)*0.45:k*0.45}
              ry= ${_===0?(k-10)*0.45:k*0.45}
              stroke=${K}
              stroke-width=${_===0?10:0}
              height=${_===0?k-10:k}
              x= ${_===0?j+Q*_+5:j+Q*_}
              y= ${_===0?L+Q*_+5:L+Q*_}
            />
          `)}});let T=Math.floor((J+25)/Q),v=F.length/2-T/2,R=F.length/2+T/2-1,p=[];F.forEach((I,B)=>{I.forEach((L,j)=>{if(F[B][j]){if(!(B<K0&&j<K0||B>F.length-(K0+1)&&j<K0||B<K0&&j>F.length-(K0+1))){if(!(B>v&&B<R&&j>v&&j<R)){let u=B*Q+Q/2+Z,_=j*Q+Q/2+Z;p.push([u,_])}}}})});let w={};return p.forEach(([I,B])=>{if(w[I])w[I]?.push(B);else w[I]=[B]}),Object.entries(w).map(([I,B])=>{let L=B.filter((j)=>B.every((u)=>!o1(j,u,Q)));return[Number(I),L]}).forEach(([I,B])=>{B.forEach((L)=>{X.push(V0`<circle cx=${I} cy=${L} fill=${K} r=${Q/T5} />`)})}),Object.entries(w).filter(([I,B])=>B.length>1).map(([I,B])=>{let L=B.filter((j)=>B.some((u)=>o1(j,u,Q)));return[Number(I),L]}).map(([I,B])=>{B.sort((j,u)=>j<u?-1:1);let L=[];for(let j of B){let u=L.find((_)=>_.some((k)=>o1(j,k,Q)));if(u)u.push(j);else L.push([j])}return[I,L.map((j)=>[j[0],j[j.length-1]])]}).forEach(([I,B])=>{B.forEach(([L,j])=>{X.push(V0`
              <line
                x1=${I}
                x2=${I}
                y1=${L}
                y2=${j}
                stroke=${K}
                stroke-width=${Q/(T5/2)}
                stroke-linecap="round"
              />
            `)})}),X}};var M5=M`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:$})=>$.white};
    border: 1px solid ${({tokens:$})=>$.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:$})=>$[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:$})=>$.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:$})=>$.theme.backgroundPrimary};
    border-radius: ${({borderRadius:$})=>$[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:$})=>$[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var z0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},t=class extends V{constructor(){super(...arguments);this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,P`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return V0`
      <svg height=${this.size} width=${this.size}>
        ${f5.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){if(this.imageSrc)return P`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`;if(this.farcaster)return P`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;return P`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};t.styles=[x,M5];z0([O()],t.prototype,"uri",void 0);z0([O({type:Number})],t.prototype,"size",void 0);z0([O()],t.prototype,"theme",void 0);z0([O()],t.prototype,"imageSrc",void 0);z0([O()],t.prototype,"alt",void 0);z0([O({type:Boolean})],t.prototype,"arenaClear",void 0);z0([O({type:Boolean})],t.prototype,"farcaster",void 0);t=z0([N("wui-qr-code")],t);var U5=M`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:$})=>$.theme.foregroundSecondary} 0%,
      ${({tokens:$})=>$.theme.foregroundTertiary} 50%,
      ${({tokens:$})=>$.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:$})=>$[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:$})=>$[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var i0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},E0=class extends V{constructor(){super(...arguments);this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",P`<slot></slot>`}};E0.styles=[U5];i0([O()],E0.prototype,"width",void 0);i0([O()],E0.prototype,"height",void 0);i0([O()],E0.prototype,"variant",void 0);i0([O({type:Boolean})],E0.prototype,"rounded",void 0);E0=i0([N("wui-shimmer")],E0);var E5=M`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:$})=>$[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:$})=>$.xl};
    animation-timing-function: ${({easings:$})=>$["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var A5=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},G1=class extends b{constructor(){super();this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){if(!this.basic)h.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:z.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach((Y)=>Y()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),P`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){if(!this.ready&&this.uri)this.timeout=setTimeout(()=>{this.ready=!0},200)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let Y=this.getBoundingClientRect().width-40,J=this.wallet?this.wallet.name:void 0;f.setWcLinking(void 0),f.setRecentWallet(this.wallet);let Z=this.uri;if(this.wallet?.mobile_link){let{redirect:K}=D.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);Z=K}return P` <wui-qr-code
      size=${Y}
      theme=${g0.state.themeMode}
      uri=${Z}
      imageSrc=${E(d.getWalletImage(this.wallet))}
      color=${E(g0.state.themeVariables["--w3m-qr-color"])}
      alt=${E(J)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let Y=!this.uri||!this.ready;return P`<wui-button
      .disabled=${Y}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};G1.styles=E5;A5([O({type:Boolean})],G1.prototype,"basic",void 0);G1=A5([N("w3m-connecting-wc-qrcode")],G1);var Q2=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},R5=class extends V{constructor(){super();if(this.wallet=z.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");h.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:z.state.view}})}render(){return P`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${E(d.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};R5=Q2([N("w3m-connecting-wc-unsupported")],R5);var j5=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},r1=class extends b{constructor(){super();if(this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=J1.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(f.subscribeKey("wcUri",()=>{this.updateLoadingState()})),h.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:z.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:Y,name:J}=this.wallet,{redirect:Z,href:K}=D.formatUniversalUrl(Y,this.uri);f.setWcLinking({name:J,href:K}),f.setRecentWallet(this.wallet),D.openHref(Z,"_blank")}catch{this.error=!0}}};j5([H()],r1.prototype,"isLoading",void 0);r1=j5([N("w3m-connecting-wc-web")],r1);var S5=M`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var A0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},F0=class extends V{constructor(){super();this.wallet=z.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(W.state.siwx),this.remoteFeatures=W.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(W.subscribeKey("remoteFeatures",(Y)=>this.remoteFeatures=Y))}disconnectedCallback(){this.unsubscribe.forEach((Y)=>Y())}render(){if(W.state.enableMobileFullScreen)this.setAttribute("data-mobile-fullscreen","true");return P`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){if(!this.remoteFeatures?.reownBranding||!this.displayBranding)return null;return P`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(Y=!1){if(this.platform==="browser"||W.state.manualWCControl&&!Y)return;try{let{wcPairingExpiry:J,status:Z}=f.state,{redirectView:K}=z.state.data??{};if(Y||W.state.enableEmbedded||D.isPairingExpired(J)||Z==="connecting"){let q=f.getConnections(X0.state.activeChain),X=this.remoteFeatures?.multiWallet,F=q.length>0;if(await f.connectWalletConnect({cache:"never"}),!this.isSiwxEnabled)if(F&&X)z.replace("ProfileWallets"),P0.showSuccess("New Wallet Added");else if(K)z.replace(K);else Y1.close()}}catch(J){if(J instanceof Error&&J.message.includes("An error occurred when attempting to switch chain")&&!W.state.enableNetworkSwitch){if(X0.state.activeChain){X0.setActiveCaipNetwork(x5.getUnsupportedNetwork(`${X0.state.activeChain}:${X0.state.activeCaipNetwork?.id}`)),X0.showUnsupportedChainUI();return}}if(J instanceof $1&&J.originalName===h0.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)h.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:J.message}});else h.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:J?.message??"Unknown"}});f.setWcError(!0),P0.showError(J.message??"Connection error"),f.resetWcConnection(),z.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:Y,desktop_link:J,webapp_link:Z,injected:K,rdns:q}=this.wallet,X=K?.map(({injected_id:w})=>w).filter(Boolean),F=[...q?[q]:X??[]],Q=W.state.isUniversalProvider?!1:F.length,G=Y,T=Z,v=f.checkInstalled(F),R=Q&&v,p=J&&!D.isMobile();if(R&&!X0.state.noAdapters)this.platforms.push("browser");if(G)this.platforms.push(D.isMobile()?"mobile":"qrcode");if(T)this.platforms.push("web");if(p)this.platforms.push("desktop");if(!R&&Q&&!X0.state.noAdapters)this.platforms.push("unsupported");this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return P`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return P`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return P`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return P`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return P`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return P`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){if(!(this.platforms.length>1))return null;return P`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `}async onSelectPlatform(Y){let J=this.shadowRoot?.querySelector("div");if(J)await J.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=Y,J.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}};F0.styles=S5;A0([H()],F0.prototype,"platform",void 0);A0([H()],F0.prototype,"platforms",void 0);A0([H()],F0.prototype,"isSiwxEnabled",void 0);A0([H()],F0.prototype,"remoteFeatures",void 0);A0([O({type:Boolean})],F0.prototype,"displayBranding",void 0);A0([O({type:Boolean})],F0.prototype,"basic",void 0);F0=A0([N("w3m-connecting-wc-view")],F0);var t1=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},N1=class extends V{constructor(){super();this.unsubscribe=[],this.isMobile=D.isMobile(),this.remoteFeatures=W.state.remoteFeatures,this.unsubscribe.push(W.subscribeKey("remoteFeatures",(Y)=>this.remoteFeatures=Y))}disconnectedCallback(){this.unsubscribe.forEach((Y)=>Y())}render(){if(this.isMobile){let{featured:Y,recommended:J}=U.state,{customWallets:Z}=W.state,K=L5.getRecentWallets(),q=Y.length||J.length||Z?.length||K.length;return P`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${q?P`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return P`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){if(!this.remoteFeatures?.reownBranding)return null;return P` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`}};t1([H()],N1.prototype,"isMobile",void 0);t1([H()],N1.prototype,"remoteFeatures",void 0);N1=t1([N("w3m-connecting-wc-basic-view")],N1);var h5=M`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      color ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      border ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      box-shadow ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      width ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      height ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      transform ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      opacity ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:$})=>$.neutrals300};
    border-radius: ${({borderRadius:$})=>$.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      color ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      border ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      box-shadow ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      width ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      height ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]},
      transform ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      opacity ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:$})=>$.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:$})=>$.core.iconAccentPrimary};
    background-color: ${({tokens:$})=>$.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:$})=>$.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:$})=>$.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:$})=>$.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:$})=>$.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:$})=>$.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:$})=>$.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:$})=>$.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:$})=>$.theme.textTertiary};
  }
`;var H1=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},k0=class extends V{constructor(){super(...arguments);this.inputElementRef=C0(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return P`
      <label data-size=${this.size}>
        <input
          ${y0(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};k0.styles=[x,y,h5];H1([O({type:Boolean})],k0.prototype,"checked",void 0);H1([O({type:Boolean})],k0.prototype,"disabled",void 0);H1([O()],k0.prototype,"size",void 0);k0=H1([N("wui-toggle")],k0);var w5=M`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:$})=>$["2"]};
    padding: ${({spacing:$})=>$["2"]} ${({spacing:$})=>$["3"]};
    background-color: ${({tokens:$})=>$.theme.foregroundPrimary};
    border-radius: ${({borderRadius:$})=>$["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:$})=>$.theme.foregroundPrimary};
    transition: background-color ${({durations:$})=>$.lg}
      ${({easings:$})=>$["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var b5=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},V1=class extends V{constructor(){super(...arguments);this.checked=!1}render(){return P`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(Y){Y.stopPropagation(),this.checked=Y.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};V1.styles=[x,y,w5];b5([O({type:Boolean})],V1.prototype,"checked",void 0);V1=b5([N("wui-certified-switch")],V1);var v5=M`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:$})=>$[3]};
    color: ${({tokens:$})=>$.theme.textPrimary};
    caret-color: ${({tokens:$})=>$.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:$})=>$[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:$})=>$.theme.borderPrimary};
    caret-color: ${({tokens:$})=>$.core.textAccentPrimary};
    padding: ${({spacing:$})=>$[3]} ${({spacing:$})=>$[3]}
      ${({spacing:$})=>$[3]} ${({spacing:$})=>$[10]};
    font-size: ${({textSize:$})=>$.large};
    line-height: ${({typography:$})=>$["lg-regular"].lineHeight};
    letter-spacing: ${({typography:$})=>$["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:$})=>$.regular};
    font-family: ${({fontFamily:$})=>$.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:$})=>$[4]} ${({spacing:$})=>$[3]}
      ${({spacing:$})=>$[4]} ${({spacing:$})=>$[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:$})=>$.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:$})=>$.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:$})=>$.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:$})=>$.theme.borderSecondary};
    background-color: ${({tokens:$})=>$.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:$})=>$.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:$})=>$.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:$})=>$.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:$})=>$[4]};
    color: ${({tokens:$})=>$.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:$})=>$[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:$})=>$[2]};
    color: ${({tokens:$})=>$.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:$})=>$.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:$})=>$[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var l=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},g=class extends V{constructor(){super(...arguments);this.inputElementRef=C0(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return P` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${y0(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${E(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){if(this.icon)return P`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;return null}templateSubmitButton(){if(this.onSubmit)return P`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?P`<wui-icon name="spinner" size="md"></wui-icon>`:P`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`;return null}templateError(){if(this.errorText)return P`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`;return null}templateWarning(){if(this.warningText)return P`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`;return null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};g.styles=[x,y,v5];l([O()],g.prototype,"icon",void 0);l([O({type:Boolean})],g.prototype,"disabled",void 0);l([O({type:Boolean})],g.prototype,"loading",void 0);l([O()],g.prototype,"placeholder",void 0);l([O()],g.prototype,"type",void 0);l([O()],g.prototype,"value",void 0);l([O()],g.prototype,"errorText",void 0);l([O()],g.prototype,"warningText",void 0);l([O()],g.prototype,"onSubmit",void 0);l([O()],g.prototype,"size",void 0);l([O({attribute:!1})],g.prototype,"onKeyDown",void 0);g=l([N("wui-input-text")],g);var _5=M`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:$})=>$[3]};
    color: ${({tokens:$})=>$.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:$})=>$[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:$})=>$[4]};
    transition: background-color ${({durations:$})=>$.lg}
      ${({easings:$})=>$["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:$})=>$.theme.foregroundSecondary};
    }
  }
`;var W5=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},z1=class extends V{constructor(){super(...arguments);this.inputComponentRef=C0(),this.inputValue=""}render(){return P`
      <wui-input-text
        ${y0(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?P`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(Y){this.inputValue=Y.detail||""}clearValue(){let J=this.inputComponentRef.value?.inputElementRef.value;if(J)J.value="",this.inputValue="",J.focus(),J.dispatchEvent(new Event("input"))}};z1.styles=[x,_5];W5([O()],z1.prototype,"inputValue",void 0);z1=W5([N("wui-search-bar")],z1);var k5=V0`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var C5=M`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:$})=>$[2]};
    background-color: ${({tokens:$})=>$.theme.foregroundPrimary};
    border-radius: ${({borderRadius:$})=>$[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:$})=>$.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var y5=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},B1=class extends V{constructor(){super(...arguments);this.type="wallet"}render(){return P`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){if(this.type==="network")return P` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${k5}`;return P`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};B1.styles=[x,y,C5];y5([O()],B1.prototype,"type",void 0);B1=y5([N("wui-card-select-loader")],B1);var u5=D1`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var c=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},m=class extends V{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&s.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&s.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&s.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&s.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&s.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&s.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&s.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&s.getSpacingStyles(this.margin,3)};
    `,P`<slot></slot>`}};m.styles=[x,u5];c([O()],m.prototype,"gridTemplateRows",void 0);c([O()],m.prototype,"gridTemplateColumns",void 0);c([O()],m.prototype,"justifyItems",void 0);c([O()],m.prototype,"alignItems",void 0);c([O()],m.prototype,"justifyContent",void 0);c([O()],m.prototype,"alignContent",void 0);c([O()],m.prototype,"columnGap",void 0);c([O()],m.prototype,"rowGap",void 0);c([O()],m.prototype,"gap",void 0);c([O()],m.prototype,"padding",void 0);c([O()],m.prototype,"margin",void 0);m=c([N("wui-grid")],m);var p5=M`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:$})=>$["2"]};
    padding: ${({spacing:$})=>$["3"]} ${({spacing:$})=>$["0"]};
    background-color: ${({tokens:$})=>$.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:$})=>$["4"]}, 20px);
    transition:
      color ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-1"]},
      background-color ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-1"]},
      border-radius ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:$})=>$.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:$})=>$.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:$})=>$.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:$})=>$.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:$})=>$.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:$})=>$.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var e=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},n=class extends V{constructor(){super();this.observer=new IntersectionObserver(()=>{return}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver((Y)=>{Y.forEach((J)=>{if(J.isIntersecting)this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent();else this.visible=!1})},{threshold:0.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let Y=this.wallet?.badge_type==="certified";return P`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${E(Y?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${Y?P`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){if(!this.visible&&!this.imageSrc||this.imageLoading)return this.shimmerTemplate();return P`
      <wui-wallet-image
        size="lg"
        imageSrc=${E(this.imageSrc)}
        name=${E(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return P`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){if(!this.wallet)return;if(this.imageSrc=d.getWalletImage(this.wallet),this.imageSrc)return;this.imageLoading=!0,this.imageSrc=await d.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1}sendImpressionEvent(){if(!this.wallet||this.isImpressed)return;this.isImpressed=!0,h.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:z.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex})}};n.styles=p5;e([H()],n.prototype,"visible",void 0);e([H()],n.prototype,"imageSrc",void 0);e([H()],n.prototype,"imageLoading",void 0);e([H()],n.prototype,"isImpressed",void 0);e([O()],n.prototype,"explorerId",void 0);e([O()],n.prototype,"walletQuery",void 0);e([O()],n.prototype,"certified",void 0);e([O()],n.prototype,"displayIndex",void 0);e([O({type:Object})],n.prototype,"wallet",void 0);n=e([N("w3m-all-wallets-list-item")],n);var g5=M`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:$})=>$.xl};
    animation-timing-function: ${({easings:$})=>$["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:$})=>$["4"]};
    padding-bottom: ${({spacing:$})=>$["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var B0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},m5="local-paginator",$0=class extends V{constructor(){super();this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!U.state.wallets.length,this.wallets=U.state.wallets,this.recommended=U.state.recommended,this.featured=U.state.featured,this.filteredWallets=U.state.filteredWallets,this.mobileFullScreen=W.state.enableMobileFullScreen,this.unsubscribe.push(...[U.subscribeKey("wallets",(Y)=>this.wallets=Y),U.subscribeKey("recommended",(Y)=>this.recommended=Y),U.subscribeKey("featured",(Y)=>this.featured=Y),U.subscribeKey("filteredWallets",(Y)=>this.filteredWallets=Y)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((Y)=>Y()),this.paginationObserver?.disconnect()}render(){if(this.mobileFullScreen)this.setAttribute("data-mobile-fullscreen","true");return P`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let Y=this.shadowRoot?.querySelector("wui-grid");if(Y)await U.fetchWalletsByPage({page:1}),await Y.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,Y.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}shimmerTemplate(Y,J){return[...Array(Y)].map(()=>P`
        <wui-card-select-loader type="wallet" id=${E(J)}></wui-card-select-loader>
      `)}getWallets(){let Y=[...this.featured,...this.recommended];if(this.filteredWallets?.length>0)Y.push(...this.filteredWallets);else Y.push(...this.wallets);let J=D.uniqueBy(Y,"id"),Z=a0.markWalletsAsInstalled(J);return a0.markWalletsWithDisplayIndex(Z)}walletsTemplate(){return this.getWallets().map((J,Z)=>P`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${J.id}"
          @click=${()=>this.onConnectWallet(J)}
          .wallet=${J}
          explorerId=${J.id}
          certified=${this.badge==="certified"}
          displayIndex=${Z}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:Y,recommended:J,featured:Z,count:K,mobileFilteredOutWalletsLength:q}=U.state,X=window.innerWidth<352?3:4,F=Y.length+J.length,G=Math.ceil(F/X)*X-F+X;if(G-=Y.length?Z.length%X:0,K===0&&Z.length>0)return null;if(K===0||[...Z,...Y,...J].length<K-(q??0))return this.shimmerTemplate(G,m5);return null}createPaginationObserver(){let Y=this.shadowRoot?.querySelector(`#${m5}`);if(Y)this.paginationObserver=new IntersectionObserver(([J])=>{if(J?.isIntersecting&&!this.loading){let{page:Z,count:K,wallets:q}=U.state;if(q.length<K)U.fetchWalletsByPage({page:Z+1})}}),this.paginationObserver.observe(Y)}onConnectWallet(Y){C.selectWalletConnector(Y)}};$0.styles=g5;B0([H()],$0.prototype,"loading",void 0);B0([H()],$0.prototype,"wallets",void 0);B0([H()],$0.prototype,"recommended",void 0);B0([H()],$0.prototype,"featured",void 0);B0([H()],$0.prototype,"filteredWallets",void 0);B0([H()],$0.prototype,"badge",void 0);B0([H()],$0.prototype,"mobileFullScreen",void 0);$0=B0([N("w3m-all-wallets-list")],$0);var d5=D1`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var s0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},R0=class extends V{constructor(){super(...arguments);this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=W.state.enableMobileFullScreen,this.query=""}render(){if(this.mobileFullScreen)this.setAttribute("data-mobile-fullscreen","true");return this.onSearch(),this.loading?P`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){if(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await U.searchWallet({search:this.query,badge:this.badge}),this.loading=!1}walletsTemplate(){let{search:Y}=U.state,J=a0.markWalletsAsInstalled(Y);if(!Y.length)return P`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;return P`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${J.map((Z,K)=>P`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(Z)}
              .wallet=${Z}
              data-testid="wallet-search-item-${Z.id}"
              explorerId=${Z.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${K}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `}onConnectWallet(Y){C.selectWalletConnector(Y)}};R0.styles=d5;s0([H()],R0.prototype,"loading",void 0);s0([H()],R0.prototype,"mobileFullScreen",void 0);s0([O()],R0.prototype,"query",void 0);s0([O()],R0.prototype,"badge",void 0);R0=s0([N("w3m-all-wallets-search")],R0);var e1=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},T1=class extends V{constructor(){super(...arguments);this.search="",this.badge=void 0,this.onDebouncedSearch=D.debounce((Y)=>{this.search=Y})}render(){let Y=this.search.length>=2;return P`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${Y||this.badge?P`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:P`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(Y){this.onDebouncedSearch(Y.detail)}onCertifiedSwitchChange(Y){if(Y.detail)this.badge="certified",P0.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"});else this.badge=void 0}qrButtonTemplate(){if(D.isMobile())return P`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;return null}onWalletConnectQr(){z.push("ConnectingWalletConnect")}};e1([H()],T1.prototype,"search",void 0);e1([H()],T1.prototype,"badge",void 0);T1=e1([N("w3m-all-wallets-view")],T1);var l5=M`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:$})=>$[3]};
    width: 100%;
    background-color: ${({tokens:$})=>$.theme.backgroundPrimary};
    border-radius: ${({borderRadius:$})=>$[4]};
    transition:
      background-color ${({durations:$})=>$.lg}
        ${({easings:$})=>$["ease-out-power-2"]},
      scale ${({durations:$})=>$.lg} ${({easings:$})=>$["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:$})=>$.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:$})=>$.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Y0=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},i=class extends V{constructor(){super(...arguments);this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",P`
      <button
        ?disabled=${this.loading?!0:Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${E(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){if(this.icon)return P`<wui-image
        icon=${this.icon}
        iconColor=${E(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`;return P`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){if(!this.rightIcon)return null;if(this.loading)return P`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`;return P`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`}};i.styles=[x,y,l5];Y0([O()],i.prototype,"imageSrc",void 0);Y0([O()],i.prototype,"icon",void 0);Y0([O()],i.prototype,"iconColor",void 0);Y0([O({type:Boolean})],i.prototype,"loading",void 0);Y0([O()],i.prototype,"tabIdx",void 0);Y0([O({type:Boolean})],i.prototype,"disabled",void 0);Y0([O({type:Boolean})],i.prototype,"rightIcon",void 0);Y0([O({type:Boolean})],i.prototype,"rounded",void 0);Y0([O({type:Boolean})],i.prototype,"fullSize",void 0);i=Y0([N("wui-list-item")],i);var P2=function($,Y,J,Z){var K=arguments.length,q=K<3?Y:Z===null?Z=Object.getOwnPropertyDescriptor(Y,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate($,Y,J,Z);else for(var F=$.length-1;F>=0;F--)if(X=$[F])q=(K<3?X(q):K>3?X(Y,J,q):X(Y,J))||q;return K>3&&q&&Object.defineProperty(Y,J,q),q},c5=class extends V{constructor(){super(...arguments);this.wallet=z.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return P`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){if(!this.wallet?.chrome_store)return null;return P`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`}iosTemplate(){if(!this.wallet?.app_store)return null;return P`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`}androidTemplate(){if(!this.wallet?.play_store)return null;return P`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`}homepageTemplate(){if(!this.wallet?.homepage)return null;return P`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `}openStore(Y){if(Y.href&&this.wallet)h.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:Y.type}}),D.openHref(Y.href,"_blank")}onChromeStore(){if(this.wallet?.chrome_store)this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){if(this.wallet?.app_store)this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){if(this.wallet?.play_store)this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){if(this.wallet?.homepage)this.openStore({href:this.wallet.homepage,type:"homepage"})}};c5=P2([N("w3m-downloads-view")],c5);export{c5 as W3mDownloadsView,N1 as W3mConnectingWcBasicView,T1 as W3mAllWalletsView};
