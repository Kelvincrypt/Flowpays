import{sh as y9,th as C0,uh as u0}from"./chunk-q0fckzp1.js";import{vh as d9}from"./chunk-ajc23y29.js";import"./chunk-p82qd26d.js";import"./chunk-kz9ry8p2.js";import{Ah as H,Eh as V$,yh as P,zh as N}from"./chunk-kqe818f4.js";import{Mh as G0,Nh as K0}from"./chunk-bt51gs6v.js";import{Ai as a,Bi as O,Oh as x8,Vh as I1,Wh as P0,Xh as T,Yh as u,Zh as y1,_h as w,ai as C,bi as A,ci as U,di as i0,ei as B,fi as U0,gi as M,ji as n0,mi as D1,xi as R,yi as S,zi as K$}from"./chunk-462194qs.js";import"./chunk-6y4yydee.js";import"./chunk-apcym7z8.js";import"./chunk-f2x6e9bx.js";import{oj as z,rj as Q,sj as z0,wj as V}from"./chunk-m8hgzdp5.js";import"./chunk-febpbmcg.js";import"./chunk-t1zraet7.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import"./chunk-bccvmyr2.js";import{EH as W2,GH as L}from"./chunk-dgwf5jrz.js";var n8=L((uZ,m8)=>{m8.exports=function(){return typeof Promise==="function"&&Promise.prototype&&Promise.prototype.then}});var V0=L((L$)=>{var m1,S$=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];L$.getSymbolSize=function($){if(!$)throw Error('"version" cannot be null or undefined');if($<1||$>40)throw Error('"version" should be in range from 1 to 40');return $*4+17};L$.getSymbolTotalCodewords=function($){return S$[$]};L$.getBCHDigit=function(q){let $=0;while(q!==0)$++,q>>>=1;return $};L$.setToSJISFunction=function($){if(typeof $!=="function")throw Error('"toSJISFunc" is not a valid function.');m1=$};L$.isKanjiModeEnabled=function(){return typeof m1<"u"};L$.toSJIS=function($){return m1($)}});var B1=L((C$)=>{C$.L={bit:1};C$.M={bit:0};C$.Q={bit:3};C$.H={bit:2};function k$(q){if(typeof q!=="string")throw Error("Param is not a string");switch(q.toLowerCase()){case"l":case"low":return C$.L;case"m":case"medium":return C$.M;case"q":case"quartile":return C$.Q;case"h":case"high":return C$.H;default:throw Error("Unknown EC Level: "+q)}}C$.isValid=function($){return $&&typeof $.bit<"u"&&$.bit>=0&&$.bit<4};C$.from=function($,J){if(C$.isValid($))return $;try{return k$($)}catch(Z){return J}}});var r8=L((gZ,o8)=>{function a8(){this.buffer=[],this.length=0}a8.prototype={get:function(q){let $=Math.floor(q/8);return(this.buffer[$]>>>7-q%8&1)===1},put:function(q,$){for(let J=0;J<$;J++)this.putBit((q>>>$-J-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(q){let $=Math.floor(this.length/8);if(this.buffer.length<=$)this.buffer.push(0);if(q)this.buffer[$]|=128>>>this.length%8;this.length++}};o8.exports=a8});var e8=L((mZ,t8)=>{function s0(q){if(!q||q<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=q,this.data=new Uint8Array(q*q),this.reservedBit=new Uint8Array(q*q)}s0.prototype.set=function(q,$,J,Z){let K=q*this.size+$;if(this.data[K]=J,Z)this.reservedBit[K]=!0};s0.prototype.get=function(q,$){return this.data[q*this.size+$]};s0.prototype.xor=function(q,$,J){this.data[q*this.size+$]^=J};s0.prototype.isReserved=function(q,$){return this.reservedBit[q*this.size+$]};t8.exports=s0});var J5=L((y$)=>{var p$=V0().getSymbolSize;y$.getRowColCoords=function($){if($===1)return[];let J=Math.floor($/7)+2,Z=p$($),K=Z===145?26:Math.ceil((Z-13)/(2*J-2))*2,Y=[Z-7];for(let X=1;X<J-1;X++)Y[X]=Y[X-1]-K;return Y.push(6),Y.reverse()};y$.getPositions=function($){let J=[],Z=y$.getRowColCoords($),K=Z.length;for(let Y=0;Y<K;Y++)for(let X=0;X<K;X++){if(Y===0&&X===0||Y===0&&X===K-1||Y===K-1&&X===0)continue;J.push([Z[Y],Z[X]])}return J}});var Y5=L((n$)=>{var m$=V0().getSymbolSize;n$.getPositions=function($){let J=m$($);return[[0,0],[J-7,0],[0,J-7]]}});var Q5=L((c$)=>{c$.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var f0={N1:3,N2:3,N3:40,N4:10};c$.isValid=function($){return $!=null&&$!==""&&!isNaN($)&&$>=0&&$<=7};c$.from=function($){return c$.isValid($)?parseInt($,10):void 0};c$.getPenaltyN1=function($){let J=$.size,Z=0,K=0,Y=0,X=null,F=null;for(let G=0;G<J;G++){K=Y=0,X=F=null;for(let I=0;I<J;I++){let D=$.get(G,I);if(D===X)K++;else{if(K>=5)Z+=f0.N1+(K-5);X=D,K=1}if(D=$.get(I,G),D===F)Y++;else{if(Y>=5)Z+=f0.N1+(Y-5);F=D,Y=1}}if(K>=5)Z+=f0.N1+(K-5);if(Y>=5)Z+=f0.N1+(Y-5)}return Z};c$.getPenaltyN2=function($){let J=$.size,Z=0;for(let K=0;K<J-1;K++)for(let Y=0;Y<J-1;Y++){let X=$.get(K,Y)+$.get(K,Y+1)+$.get(K+1,Y)+$.get(K+1,Y+1);if(X===4||X===0)Z++}return Z*f0.N2};c$.getPenaltyN3=function($){let J=$.size,Z=0,K=0,Y=0;for(let X=0;X<J;X++){K=Y=0;for(let F=0;F<J;F++){if(K=K<<1&2047|$.get(X,F),F>=10&&(K===1488||K===93))Z++;if(Y=Y<<1&2047|$.get(F,X),F>=10&&(Y===1488||Y===93))Z++}}return Z*f0.N3};c$.getPenaltyN4=function($){let J=0,Z=$.data.length;for(let Y=0;Y<Z;Y++)J+=$.data[Y];return Math.abs(Math.ceil(J*100/Z/5)-10)*f0.N4};function d$(q,$,J){switch(q){case c$.Patterns.PATTERN000:return($+J)%2===0;case c$.Patterns.PATTERN001:return $%2===0;case c$.Patterns.PATTERN010:return J%3===0;case c$.Patterns.PATTERN011:return($+J)%3===0;case c$.Patterns.PATTERN100:return(Math.floor($/2)+Math.floor(J/3))%2===0;case c$.Patterns.PATTERN101:return $*J%2+$*J%3===0;case c$.Patterns.PATTERN110:return($*J%2+$*J%3)%2===0;case c$.Patterns.PATTERN111:return($*J%3+($+J)%2)%2===0;default:throw Error("bad maskPattern:"+q)}}c$.applyMask=function($,J){let Z=J.size;for(let K=0;K<Z;K++)for(let Y=0;Y<Z;Y++){if(J.isReserved(Y,K))continue;J.xor(Y,K,d$($,Y,K))}};c$.getBestMask=function($,J){let Z=Object.keys(c$.Patterns).length,K=0,Y=1/0;for(let X=0;X<Z;X++){J(X),c$.applyMask(X,$);let F=c$.getPenaltyN1($)+c$.getPenaltyN2($)+c$.getPenaltyN3($)+c$.getPenaltyN4($);if(c$.applyMask(X,$),F<Y)Y=F,K=X}return K}});var l1=L((a$)=>{var H0=B1(),M1=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],R1=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];a$.getBlocksCount=function($,J){switch(J){case H0.L:return M1[($-1)*4+0];case H0.M:return M1[($-1)*4+1];case H0.Q:return M1[($-1)*4+2];case H0.H:return M1[($-1)*4+3];default:return}};a$.getTotalCodewordsCount=function($,J){switch(J){case H0.L:return R1[($-1)*4+0];case H0.M:return R1[($-1)*4+1];case H0.Q:return R1[($-1)*4+2];case H0.H:return R1[($-1)*4+3];default:return}}});var P5=L((t$)=>{var a0=new Uint8Array(512),U1=new Uint8Array(256);(function(){let $=1;for(let J=0;J<255;J++)if(a0[J]=$,U1[$]=J,$<<=1,$&256)$^=285;for(let J=255;J<512;J++)a0[J]=a0[J-255]})();t$.log=function($){if($<1)throw Error("log("+$+")");return U1[$]};t$.exp=function($){return a0[$]};t$.mul=function($,J){if($===0||J===0)return 0;return a0[U1[$]+U1[J]]}});var O5=L((Y9)=>{var d1=P5();Y9.mul=function($,J){let Z=new Uint8Array($.length+J.length-1);for(let K=0;K<$.length;K++)for(let Y=0;Y<J.length;Y++)Z[K+Y]^=d1.mul($[K],J[Y]);return Z};Y9.mod=function($,J){let Z=new Uint8Array($);while(Z.length-J.length>=0){let K=Z[0];for(let X=0;X<J.length;X++)Z[X]^=d1.mul(J[X],K);let Y=0;while(Y<Z.length&&Z[Y]===0)Y++;Z=Z.slice(Y)}return Z};Y9.generateECPolynomial=function($){let J=new Uint8Array([1]);for(let Z=0;Z<$;Z++)J=Y9.mul(J,new Uint8Array([1,d1.exp(Z)]));return J}});var N5=L((aZ,H5)=>{var V5=O5();function c1(q){if(this.genPoly=void 0,this.degree=q,this.degree)this.initialize(this.degree)}c1.prototype.initialize=function($){this.degree=$,this.genPoly=V5.generateECPolynomial(this.degree)};c1.prototype.encode=function($){if(!this.genPoly)throw Error("Encoder not initialized");let J=new Uint8Array($.length+this.degree);J.set($);let Z=V5.mod(J,this.genPoly),K=this.degree-Z.length;if(K>0){let Y=new Uint8Array(this.degree);return Y.set(Z,K),Y}return Z};H5.exports=c1});var i1=L((K9)=>{K9.isValid=function($){return!isNaN($)&&$>=1&&$<=40}});var s1=L((O9)=>{var o0="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o0=o0.replace(/u/g,"\\u");var F9="(?:(?![A-Z0-9 $%*+\\-./:]|"+o0+`)(?:.|[\r
]))+`;O9.KANJI=new RegExp(o0,"g");O9.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");O9.BYTE=new RegExp(F9,"g");O9.NUMERIC=new RegExp("[0-9]+","g");O9.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var Q9=new RegExp("^"+o0+"$"),P9=new RegExp("^[0-9]+$"),G9=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");O9.testKanji=function($){return Q9.test($)};O9.testNumeric=function($){return P9.test($)};O9.testAlphanumeric=function($){return G9.test($)}});var N0=L((U9)=>{var M9=i1(),a1=s1();U9.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]};U9.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]};U9.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]};U9.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]};U9.MIXED={bit:-1};U9.getCharCountIndicator=function($,J){if(!$.ccBits)throw Error("Invalid mode: "+$);if(!M9.isValid(J))throw Error("Invalid version: "+J);if(J>=1&&J<10)return $.ccBits[0];else if(J<27)return $.ccBits[1];return $.ccBits[2]};U9.getBestModeForData=function($){if(a1.testNumeric($))return U9.NUMERIC;else if(a1.testAlphanumeric($))return U9.ALPHANUMERIC;else if(a1.testKanji($))return U9.KANJI;else return U9.BYTE};U9.toString=function($){if($&&$.id)return $.id;throw Error("Invalid mode")};U9.isValid=function($){return $&&$.bit&&$.ccBits};function R9(q){if(typeof q!=="string")throw Error("Param is not a string");switch(q.toLowerCase()){case"numeric":return U9.NUMERIC;case"alphanumeric":return U9.ALPHANUMERIC;case"kanji":return U9.KANJI;case"byte":return U9.BYTE;default:throw Error("Unknown mode: "+q)}}U9.from=function($,J){if(U9.isValid($))return $;try{return R9($)}catch(Z){return J}}});var M5=L((w9)=>{var A1=V0(),S9=l1(),z5=B1(),T0=N0(),$8=i1(),D5=A1.getBCHDigit(7973);function L9(q,$,J){for(let Z=1;Z<=40;Z++)if($<=w9.getCapacity(Z,J,q))return Z;return}function I5(q,$){return T0.getCharCountIndicator(q,$)+4}function h9(q,$){let J=0;return q.forEach(function(Z){let K=I5(Z.mode,$);J+=K+Z.getBitsLength()}),J}function b9(q,$){for(let J=1;J<=40;J++)if(h9(q,J)<=w9.getCapacity(J,$,T0.MIXED))return J;return}w9.from=function($,J){if($8.isValid($))return parseInt($,10);return J};w9.getCapacity=function($,J,Z){if(!$8.isValid($))throw Error("Invalid QR Code version");if(typeof Z>"u")Z=T0.BYTE;let K=A1.getSymbolTotalCodewords($),Y=S9.getTotalCodewordsCount($,J),X=(K-Y)*8;if(Z===T0.MIXED)return X;let F=X-I5(Z,$);switch(Z){case T0.NUMERIC:return Math.floor(F/10*3);case T0.ALPHANUMERIC:return Math.floor(F/11*2);case T0.KANJI:return Math.floor(F/13);case T0.BYTE:default:return Math.floor(F/8)}};w9.getBestVersionForData=function($,J){let Z,K=z5.from(J,z5.M);if(Array.isArray($)){if($.length>1)return b9($,K);if($.length===0)return 1;Z=$[0]}else Z=$;return L9(Z.mode,Z.getLength(),K)};w9.getEncodedBits=function($){if(!$8.isValid($)||$<7)throw Error("Invalid QR Code version");let J=$<<12;while(A1.getBCHDigit(J)-D5>=0)J^=7973<<A1.getBCHDigit(J)-D5;return $<<12|J}});var U5=L((k9)=>{var J8=V0(),R5=J8.getBCHDigit(1335);k9.getEncodedBits=function($,J){let Z=$.bit<<3|J,K=Z<<10;while(J8.getBCHDigit(K)-R5>=0)K^=1335<<J8.getBCHDigit(K)-R5;return(Z<<10|K)^21522}});var f5=L((Jq,A5)=>{var u9=N0();function w0(q){this.mode=u9.NUMERIC,this.data=q.toString()}w0.getBitsLength=function($){return 10*Math.floor($/3)+($%3?$%3*3+1:0)};w0.prototype.getLength=function(){return this.data.length};w0.prototype.getBitsLength=function(){return w0.getBitsLength(this.data.length)};w0.prototype.write=function($){let J,Z,K;for(J=0;J+3<=this.data.length;J+=3)Z=this.data.substr(J,3),K=parseInt(Z,10),$.put(K,10);let Y=this.data.length-J;if(Y>0)Z=this.data.substr(J),K=parseInt(Z,10),$.put(K,Y*3+1)};A5.exports=w0});var j5=L((Yq,E5)=>{var p9=N0(),Y8=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function v0(q){this.mode=p9.ALPHANUMERIC,this.data=q}v0.getBitsLength=function($){return 11*Math.floor($/2)+6*($%2)};v0.prototype.getLength=function(){return this.data.length};v0.prototype.getBitsLength=function(){return v0.getBitsLength(this.data.length)};v0.prototype.write=function($){let J;for(J=0;J+2<=this.data.length;J+=2){let Z=Y8.indexOf(this.data[J])*45;Z+=Y8.indexOf(this.data[J+1]),$.put(Z,11)}if(this.data.length%2)$.put(Y8.indexOf(this.data[J]),6)};E5.exports=v0});var S5=L((Zq,x5)=>{var g9=y9(),m9=N0();function _0(q){if(this.mode=m9.BYTE,typeof q==="string")q=g9(q);this.data=new Uint8Array(q)}_0.getBitsLength=function($){return $*8};_0.prototype.getLength=function(){return this.data.length};_0.prototype.getBitsLength=function(){return _0.getBitsLength(this.data.length)};_0.prototype.write=function(q){for(let $=0,J=this.data.length;$<J;$++)q.put(this.data[$],8)};x5.exports=_0});var h5=L((qq,L5)=>{var n9=N0(),l9=V0();function W0(q){this.mode=n9.KANJI,this.data=q}W0.getBitsLength=function($){return $*13};W0.prototype.getLength=function(){return this.data.length};W0.prototype.getBitsLength=function(){return W0.getBitsLength(this.data.length)};W0.prototype.write=function(q){let $;for($=0;$<this.data.length;$++){let J=l9.toSJIS(this.data[$]);if(J>=33088&&J<=40956)J-=33088;else if(J>=57408&&J<=60351)J-=49472;else throw Error("Invalid SJIS character: "+this.data[$]+`
Make sure your charset is UTF-8`);J=(J>>>8&255)*192+(J&255),q.put(J,13)}};L5.exports=W0});var u5=L((o9)=>{var j=N0(),v5=f5(),_5=j5(),W5=S5(),k5=h5(),r0=s1(),f1=V0(),c9=d9();function b5(q){return unescape(encodeURIComponent(q)).length}function t0(q,$,J){let Z=[],K;while((K=q.exec(J))!==null)Z.push({data:K[0],index:K.index,mode:$,length:K[0].length});return Z}function C5(q){let $=t0(r0.NUMERIC,j.NUMERIC,q),J=t0(r0.ALPHANUMERIC,j.ALPHANUMERIC,q),Z,K;if(f1.isKanjiModeEnabled())Z=t0(r0.BYTE,j.BYTE,q),K=t0(r0.KANJI,j.KANJI,q);else Z=t0(r0.BYTE_KANJI,j.BYTE,q),K=[];return $.concat(J,Z,K).sort(function(X,F){return X.index-F.index}).map(function(X){return{data:X.data,mode:X.mode,length:X.length}})}function Z8(q,$){switch($){case j.NUMERIC:return v5.getBitsLength(q);case j.ALPHANUMERIC:return _5.getBitsLength(q);case j.KANJI:return k5.getBitsLength(q);case j.BYTE:return W5.getBitsLength(q)}}function i9(q){return q.reduce(function($,J){let Z=$.length-1>=0?$[$.length-1]:null;if(Z&&Z.mode===J.mode)return $[$.length-1].data+=J.data,$;return $.push(J),$},[])}function s9(q){let $=[];for(let J=0;J<q.length;J++){let Z=q[J];switch(Z.mode){case j.NUMERIC:$.push([Z,{data:Z.data,mode:j.ALPHANUMERIC,length:Z.length},{data:Z.data,mode:j.BYTE,length:Z.length}]);break;case j.ALPHANUMERIC:$.push([Z,{data:Z.data,mode:j.BYTE,length:Z.length}]);break;case j.KANJI:$.push([Z,{data:Z.data,mode:j.BYTE,length:b5(Z.data)}]);break;case j.BYTE:$.push([{data:Z.data,mode:j.BYTE,length:b5(Z.data)}])}}return $}function a9(q,$){let J={},Z={start:{}},K=["start"];for(let Y=0;Y<q.length;Y++){let X=q[Y],F=[];for(let G=0;G<X.length;G++){let I=X[G],D=""+Y+G;F.push(D),J[D]={node:I,lastCount:0},Z[D]={};for(let f=0;f<K.length;f++){let h=K[f];if(J[h]&&J[h].node.mode===I.mode)Z[h][D]=Z8(J[h].lastCount+I.length,I.mode)-Z8(J[h].lastCount,I.mode),J[h].lastCount+=I.length;else{if(J[h])J[h].lastCount=I.length;Z[h][D]=Z8(I.length,I.mode)+4+j.getCharCountIndicator(I.mode,$)}}}K=F}for(let Y=0;Y<K.length;Y++)Z[K[Y]].end=0;return{map:Z,table:J}}function w5(q,$){let J,Z=j.getBestModeForData(q);if(J=j.from($,Z),J!==j.BYTE&&J.bit<Z.bit)throw Error('"'+q+'" cannot be encoded with mode '+j.toString(J)+`.
 Suggested mode is: `+j.toString(Z));if(J===j.KANJI&&!f1.isKanjiModeEnabled())J=j.BYTE;switch(J){case j.NUMERIC:return new v5(q);case j.ALPHANUMERIC:return new _5(q);case j.KANJI:return new k5(q);case j.BYTE:return new W5(q)}}o9.fromArray=function($){return $.reduce(function(J,Z){if(typeof Z==="string")J.push(w5(Z,null));else if(Z.data)J.push(w5(Z.data,Z.mode));return J},[])};o9.fromString=function($,J){let Z=C5($,f1.isKanjiModeEnabled()),K=s9(Z),Y=a9(K,J),X=c9.find_path(Y.map,"start","end"),F=[];for(let G=1;G<X.length-1;G++)F.push(Y.table[X[G]].node);return o9.fromArray(i9(F))};o9.rawSplit=function($){return o9.fromArray(C5($,f1.isKanjiModeEnabled()))}});var p5=L((N2)=>{var j1=V0(),K8=B1(),e9=r8(),$2=e8(),J2=J5(),Y2=Y5(),Q8=Q5(),P8=l1(),Z2=N5(),E1=M5(),q2=U5(),K2=N0(),X8=u5();function X2(q,$){let J=q.size,Z=Y2.getPositions($);for(let K=0;K<Z.length;K++){let Y=Z[K][0],X=Z[K][1];for(let F=-1;F<=7;F++){if(Y+F<=-1||J<=Y+F)continue;for(let G=-1;G<=7;G++){if(X+G<=-1||J<=X+G)continue;if(F>=0&&F<=6&&(G===0||G===6)||G>=0&&G<=6&&(F===0||F===6)||F>=2&&F<=4&&G>=2&&G<=4)q.set(Y+F,X+G,!0,!0);else q.set(Y+F,X+G,!1,!0)}}}}function F2(q){let $=q.size;for(let J=8;J<$-8;J++){let Z=J%2===0;q.set(J,6,Z,!0),q.set(6,J,Z,!0)}}function Q2(q,$){let J=J2.getPositions($);for(let Z=0;Z<J.length;Z++){let K=J[Z][0],Y=J[Z][1];for(let X=-2;X<=2;X++)for(let F=-2;F<=2;F++)if(X===-2||X===2||F===-2||F===2||X===0&&F===0)q.set(K+X,Y+F,!0,!0);else q.set(K+X,Y+F,!1,!0)}}function P2(q,$){let J=q.size,Z=E1.getEncodedBits($),K,Y,X;for(let F=0;F<18;F++)K=Math.floor(F/3),Y=F%3+J-8-3,X=(Z>>F&1)===1,q.set(K,Y,X,!0),q.set(Y,K,X,!0)}function F8(q,$,J){let Z=q.size,K=q2.getEncodedBits($,J),Y,X;for(Y=0;Y<15;Y++){if(X=(K>>Y&1)===1,Y<6)q.set(Y,8,X,!0);else if(Y<8)q.set(Y+1,8,X,!0);else q.set(Z-15+Y,8,X,!0);if(Y<8)q.set(8,Z-Y-1,X,!0);else if(Y<9)q.set(8,15-Y-1+1,X,!0);else q.set(8,15-Y-1,X,!0)}q.set(Z-8,8,1,!0)}function G2(q,$){let J=q.size,Z=-1,K=J-1,Y=7,X=0;for(let F=J-1;F>0;F-=2){if(F===6)F--;while(!0){for(let G=0;G<2;G++)if(!q.isReserved(K,F-G)){let I=!1;if(X<$.length)I=($[X]>>>Y&1)===1;if(q.set(K,F-G,I),Y--,Y===-1)X++,Y=7}if(K+=Z,K<0||J<=K){K-=Z,Z=-Z;break}}}}function O2(q,$,J){let Z=new e9;J.forEach(function(G){Z.put(G.mode.bit,4),Z.put(G.getLength(),K2.getCharCountIndicator(G.mode,q)),G.write(Z)});let K=j1.getSymbolTotalCodewords(q),Y=P8.getTotalCodewordsCount(q,$),X=(K-Y)*8;if(Z.getLengthInBits()+4<=X)Z.put(0,4);while(Z.getLengthInBits()%8!==0)Z.putBit(0);let F=(X-Z.getLengthInBits())/8;for(let G=0;G<F;G++)Z.put(G%2?17:236,8);return V2(Z,q,$)}function V2(q,$,J){let Z=j1.getSymbolTotalCodewords($),K=P8.getTotalCodewordsCount($,J),Y=Z-K,X=P8.getBlocksCount($,J),F=Z%X,G=X-F,I=Math.floor(Z/X),D=Math.floor(Y/X),f=D+1,h=I-D,d=new Z2(h),n=0,b=Array(X),E=Array(X),k=0,x=new Uint8Array(q.buffer);for(let x0=0;x0<X;x0++){let v1=x0<G?D:f;b[x0]=x.slice(n,n+v1),E[x0]=d.encode(b[x0]),n+=v1,k=Math.max(k,v1)}let y=new Uint8Array(Z),v=0,W,Z0;for(W=0;W<k;W++)for(Z0=0;Z0<X;Z0++)if(W<b[Z0].length)y[v++]=b[Z0][W];for(W=0;W<h;W++)for(Z0=0;Z0<X;Z0++)y[v++]=E[Z0][W];return y}function H2(q,$,J,Z){let K;if(Array.isArray(q))K=X8.fromArray(q);else if(typeof q==="string"){let I=$;if(!I){let D=X8.rawSplit(q);I=E1.getBestVersionForData(D,J)}K=X8.fromString(q,I||40)}else throw Error("Invalid data");let Y=E1.getBestVersionForData(K,J);if(!Y)throw Error("The amount of data is too big to be stored in a QR Code");if(!$)$=Y;else if($<Y)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+Y+`.
`);let X=O2($,J,K),F=j1.getSymbolSize($),G=new $2(F);if(X2(G,$),F2(G),Q2(G,$),F8(G,J,0),$>=7)P2(G,$);if(G2(G,X),isNaN(Z))Z=Q8.getBestMask(G,F8.bind(null,G,J));return Q8.applyMask(Z,G),F8(G,J,Z),{modules:G,version:$,errorCorrectionLevel:J,maskPattern:Z,segments:K}}N2.create=function($,J){if(typeof $>"u"||$==="")throw Error("No input text");let Z=K8.M,K,Y;if(typeof J<"u"){if(Z=K8.from(J.errorCorrectionLevel,K8.M),K=E1.from(J.version),Y=Q8.from(J.maskPattern),J.toSJISFunc)j1.setToSJISFunction(J.toSJISFunc)}return H2($,K,Z,Y)}});var O8=L((z2)=>{function y5(q){if(typeof q==="number")q=q.toString();if(typeof q!=="string")throw Error("Color should be defined as hex string");let $=q.slice().replace("#","").split("");if($.length<3||$.length===5||$.length>8)throw Error("Invalid hex color: "+q);if($.length===3||$.length===4)$=Array.prototype.concat.apply([],$.map(function(Z){return[Z,Z]}));if($.length===6)$.push("F","F");let J=parseInt($.join(""),16);return{r:J>>24&255,g:J>>16&255,b:J>>8&255,a:J&255,hex:"#"+$.slice(0,6).join("")}}z2.getOptions=function($){if(!$)$={};if(!$.color)$.color={};let J=typeof $.margin>"u"||$.margin===null||$.margin<0?4:$.margin,Z=$.width&&$.width>=21?$.width:void 0,K=$.scale||4;return{width:Z,scale:Z?4:K,margin:J,color:{dark:y5($.color.dark||"#000000ff"),light:y5($.color.light||"#ffffffff")},type:$.type,rendererOpts:$.rendererOpts||{}}};z2.getScale=function($,J){return J.width&&J.width>=$+J.margin*2?J.width/($+J.margin*2):J.scale};z2.getImageWidth=function($,J){let Z=z2.getScale($,J);return Math.floor(($+J.margin*2)*Z)};z2.qrToImageData=function($,J,Z){let K=J.modules.size,Y=J.modules.data,X=z2.getScale(K,Z),F=Math.floor((K+Z.margin*2)*X),G=Z.margin*X,I=[Z.color.light,Z.color.dark];for(let D=0;D<F;D++)for(let f=0;f<F;f++){let h=(D*F+f)*4,d=Z.color.light;if(D>=G&&f>=G&&D<F-G&&f<F-G){let n=Math.floor((D-G)/X),b=Math.floor((f-G)/X);d=I[Y[n*K+b]?1:0]}$[h++]=d.r,$[h++]=d.g,$[h++]=d.b,$[h]=d.a}}});var m5=L((U2)=>{var V8=O8();function M2(q,$,J){if(q.clearRect(0,0,$.width,$.height),!$.style)$.style={};$.height=J,$.width=J,$.style.height=J+"px",$.style.width=J+"px"}function R2(){try{return document.createElement("canvas")}catch(q){throw Error("You need to specify a canvas element")}}U2.render=function($,J,Z){let K=Z,Y=J;if(typeof K>"u"&&(!J||!J.getContext))K=J,J=void 0;if(!J)Y=R2();K=V8.getOptions(K);let X=V8.getImageWidth($.modules.size,K),F=Y.getContext("2d"),G=F.createImageData(X,X);return V8.qrToImageData(G.data,$,K),M2(F,Y,X),F.putImageData(G,0,0),Y};U2.renderToDataURL=function($,J,Z){let K=Z;if(typeof K>"u"&&(!J||!J.getContext))K=J,J=void 0;if(!K)K={};let Y=U2.render($,J,K),X=K.type||"image/png",F=K.rendererOpts||{};return Y.toDataURL(X,F.quality)}});var l5=L((j2)=>{var f2=O8();function n5(q,$){let J=q.a/255,Z=$+'="'+q.hex+'"';return J<1?Z+" "+$+'-opacity="'+J.toFixed(2).slice(1)+'"':Z}function H8(q,$,J){let Z=q+$;if(typeof J<"u")Z+=" "+J;return Z}function E2(q,$,J){let Z="",K=0,Y=!1,X=0;for(let F=0;F<q.length;F++){let G=Math.floor(F%$),I=Math.floor(F/$);if(!G&&!Y)Y=!0;if(q[F]){if(X++,!(F>0&&G>0&&q[F-1]))Z+=Y?H8("M",G+J,0.5+I+J):H8("m",K,0),K=0,Y=!1;if(!(G+1<$&&q[F+1]))Z+=H8("h",X),X=0}else K++}return Z}j2.render=function($,J,Z){let K=f2.getOptions(J),Y=$.modules.size,X=$.modules.data,F=Y+K.margin*2,G=!K.color.light.a?"":"<path "+n5(K.color.light,"fill")+' d="M0 0h'+F+"v"+F+'H0z"/>',I="<path "+n5(K.color.dark,"stroke")+' d="'+E2(X,Y,K.margin)+'"/>',D='viewBox="0 0 '+F+" "+F+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(!K.width?"":'width="'+K.width+'" height="'+K.width+'" ')+D+' shape-rendering="crispEdges">'+G+I+`</svg>
`;if(typeof Z==="function")Z(null,h);return h}});var c5=L((h2)=>{var S2=n8(),N8=p5(),d5=m5(),L2=l5();function T8(q,$,J,Z,K){let Y=[].slice.call(arguments,1),X=Y.length,F=typeof Y[X-1]==="function";if(!F&&!S2())throw Error("Callback required as last argument");if(F){if(X<2)throw Error("Too few arguments provided");if(X===2)K=J,J=$,$=Z=void 0;else if(X===3)if($.getContext&&typeof K>"u")K=Z,Z=void 0;else K=Z,Z=J,J=$,$=void 0}else{if(X<1)throw Error("Too few arguments provided");if(X===1)J=$,$=Z=void 0;else if(X===2&&!$.getContext)Z=J,J=$,$=void 0;return new Promise(function(G,I){try{let D=N8.create(J,Z);G(q(D,$,Z))}catch(D){I(D)}})}try{let G=N8.create(J,Z);K(null,q(G,$,Z))}catch(G){K(G)}}h2.create=N8.create;h2.toCanvas=T8.bind(null,d5.render);h2.toDataURL=T8.bind(null,d5.renderToDataURL);h2.toString=T8.bind(null,function(q,$,J){return L2.render(q,J)})});var A8=z`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var I0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},q0=class extends V{constructor(){super(...arguments);this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let $="xxs";if(this.size==="lg")$="m";else if(this.size==="md")$="xs";else $="xxs";if(this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${$});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon)this.dataset.walletIcon=this.walletIcon;return Q`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){if(this.imageSrc)return Q`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;else if(this.walletIcon)return Q`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`;return Q`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};q0.styles=[S,R,A8];I0([P()],q0.prototype,"size",void 0);I0([P()],q0.prototype,"name",void 0);I0([P()],q0.prototype,"imageSrc",void 0);I0([P()],q0.prototype,"walletIcon",void 0);I0([P({type:Boolean})],q0.prototype,"installed",void 0);I0([P()],q0.prototype,"badgeSize",void 0);q0=I0([O("wui-wallet-image")],q0);var f8=z`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var E8=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},_1=4,Y1=class extends V{constructor(){super(...arguments);this.walletImages=[]}render(){let $=this.walletImages.length<_1;return Q`${this.walletImages.slice(0,_1).map(({src:J,walletName:Z})=>Q`
            <wui-wallet-image
              size="inherit"
              imageSrc=${J}
              name=${H(Z)}
            ></wui-wallet-image>
          `)}
      ${$?[...Array(_1-this.walletImages.length)].map(()=>Q` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Y1.styles=[R,f8];E8([P({type:Array})],Y1.prototype,"walletImages",void 0);Y1=E8([O("wui-all-wallets-image")],Y1);var j8=z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var g=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},p=class extends V{constructor(){super(...arguments);this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return Q`
      <button ?disabled=${this.disabled} tabindex=${H(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){if(this.showAllWallets&&this.imageSrc)return Q` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `;else if(this.showAllWallets&&this.walletIcon)return Q` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `;return null}templateWalletImage(){if(!this.showAllWallets&&this.imageSrc)return Q`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`;else if(!this.showAllWallets&&!this.imageSrc)return Q`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`;return null}templateStatus(){if(this.loading)return Q`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`;else if(this.tagLabel&&this.tagVariant)return Q`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`;else if(this.icon)return Q`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`;return null}};p.styles=[R,S,j8];g([P({type:Array})],p.prototype,"walletImages",void 0);g([P()],p.prototype,"imageSrc",void 0);g([P()],p.prototype,"name",void 0);g([P()],p.prototype,"tagLabel",void 0);g([P()],p.prototype,"tagVariant",void 0);g([P()],p.prototype,"icon",void 0);g([P()],p.prototype,"walletIcon",void 0);g([P()],p.prototype,"tabIdx",void 0);g([P({type:Boolean})],p.prototype,"installed",void 0);g([P({type:Boolean})],p.prototype,"disabled",void 0);g([P({type:Boolean})],p.prototype,"showAllWallets",void 0);g([P({type:Boolean})],p.prototype,"loading",void 0);g([P({type:String})],p.prototype,"loadingSpinnerColor",void 0);p=g([O("wui-list-wallet")],p);var S0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},B0=class extends V{constructor(){super();this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.count=A.state.count,this.filteredCount=A.state.filteredWallets.length,this.isFetchingRecommendedWallets=A.state.isFetchingRecommendedWallets,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$),A.subscribeKey("count",($)=>this.count=$),A.subscribeKey("filteredWallets",($)=>this.filteredCount=$.length),A.subscribeKey("isFetchingRecommendedWallets",($)=>this.isFetchingRecommendedWallets=$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){let $=this.connectors.find((G)=>G.id==="walletConnect"),{allWallets:J}=u.state;if(!$||J==="HIDE")return null;if(J==="ONLY_MOBILE"&&!T.isMobile())return null;let Z=A.state.featured.length,K=this.count+Z,Y=K<10?K:Math.floor(K/10)*10,X=this.filteredCount>0?this.filteredCount:Y,F=`${X}`;if(this.filteredCount>0)F=`${this.filteredCount}`;else if(X<K)F=`${X}+`;return Q`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${F}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${H(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){C.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),U.push("AllWallets")}};S0([P()],B0.prototype,"tabIdx",void 0);S0([N()],B0.prototype,"connectors",void 0);S0([N()],B0.prototype,"count",void 0);S0([N()],B0.prototype,"filteredCount",void 0);S0([N()],B0.prototype,"isFetchingRecommendedWallets",void 0);B0=S0([O("w3m-all-wallets-widget")],B0);var W1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},Z1=class extends V{constructor(){super();this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){let $=this.connectors.filter((J)=>J.type==="ANNOUNCED");if(!$?.length)return this.style.cssText="display: none",null;return Q`
      <wui-flex flexDirection="column" gap="xs">
        ${$.filter(K0.showConnector).map((J)=>Q`
              <wui-list-wallet
                imageSrc=${H(w.getConnectorImage(J))}
                name=${J.name??"Unknown"}
                @click=${()=>this.onConnector(J)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${J.id}`}
                .installed=${!0}
                tabIdx=${H(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `}onConnector($){if($.id==="walletConnect")if(T.isMobile())U.push("AllWallets");else U.push("ConnectingWalletConnect");else U.push("ConnectingExternal",{connector:$})}};W1([P()],Z1.prototype,"tabIdx",void 0);W1([N()],Z1.prototype,"connectors",void 0);Z1=W1([O("w3m-connect-announced-widget")],Z1);var q1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},g0=class extends V{constructor(){super();if(this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.loading=!1,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$)),T.isTelegram()&&T.isIos())this.loading=!M.state.wcUri,this.unsubscribe.push(M.subscribeKey("wcUri",($)=>this.loading=!$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){let{customWallets:$}=u.state;if(!$?.length)return this.style.cssText="display: none",null;let J=this.filterOutDuplicateWallets($);return Q`<wui-flex flexDirection="column" gap="xs">
      ${J.map((Z)=>Q`
          <wui-list-wallet
            imageSrc=${H(w.getWalletImage(Z))}
            name=${Z.name??"Unknown"}
            @click=${()=>this.onConnectWallet(Z)}
            data-testid=${`wallet-selector-${Z.id}`}
            tabIdx=${H(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets($){let J=P0.getRecentWallets(),Z=this.connectors.map((F)=>F.info?.rdns).filter(Boolean),K=J.map((F)=>F.rdns).filter(Boolean),Y=Z.concat(K);if(Y.includes("io.metamask.mobile")&&T.isMobile()){let F=Y.indexOf("io.metamask.mobile");Y[F]="io.metamask"}return $.filter((F)=>!Y.includes(String(F?.rdns)))}onConnectWallet($){if(this.loading)return;U.push("ConnectingWalletConnect",{wallet:$})}};q1([P()],g0.prototype,"tabIdx",void 0);q1([N()],g0.prototype,"connectors",void 0);q1([N()],g0.prototype,"loading",void 0);g0=q1([O("w3m-connect-custom-widget")],g0);var k1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},K1=class extends V{constructor(){super();this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){let Z=this.connectors.filter((K)=>K.type==="EXTERNAL").filter(K0.showConnector).filter((K)=>K.id!==x8.CONNECTOR_ID.COINBASE_SDK);if(!Z?.length)return this.style.cssText="display: none",null;return Q`
      <wui-flex flexDirection="column" gap="xs">
        ${Z.map((K)=>Q`
            <wui-list-wallet
              imageSrc=${H(w.getConnectorImage(K))}
              .installed=${!0}
              name=${K.name??"Unknown"}
              data-testid=${`wallet-selector-external-${K.id}`}
              @click=${()=>this.onConnector(K)}
              tabIdx=${H(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector($){U.push("ConnectingExternal",{connector:$})}};k1([P()],K1.prototype,"tabIdx",void 0);k1([N()],K1.prototype,"connectors",void 0);K1=k1([O("w3m-connect-external-widget")],K1);var C1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},X1=class extends V{constructor(){super(...arguments);this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;return Q`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(($)=>Q`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${$.id}`}
              imageSrc=${H(w.getWalletImage($))}
              name=${$.name??"Unknown"}
              @click=${()=>this.onConnectWallet($)}
              tabIdx=${H(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet($){B.selectWalletConnector($)}};C1([P()],X1.prototype,"tabIdx",void 0);C1([P()],X1.prototype,"wallets",void 0);X1=C1([O("w3m-connect-featured-widget")],X1);var u1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},F1=class extends V{constructor(){super(...arguments);this.tabIdx=void 0,this.connectors=[]}render(){let $=this.connectors.filter(K0.showConnector);if($.length===0)return this.style.cssText="display: none",null;return Q`
      <wui-flex flexDirection="column" gap="xs">
        ${$.map((J)=>Q`
            <wui-list-wallet
              imageSrc=${H(w.getConnectorImage(J))}
              .installed=${!0}
              name=${J.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${J.id}`}
              @click=${()=>this.onConnector(J)}
              tabIdx=${H(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector($){B.setActiveConnector($),U.push("ConnectingExternal",{connector:$})}};u1([P()],F1.prototype,"tabIdx",void 0);u1([P()],F1.prototype,"connectors",void 0);F1=u1([O("w3m-connect-injected-widget")],F1);var p1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},Q1=class extends V{constructor(){super();this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){let $=this.connectors.filter((J)=>J.type==="MULTI_CHAIN"&&J.name!=="WalletConnect");if(!$?.length)return this.style.cssText="display: none",null;return Q`
      <wui-flex flexDirection="column" gap="xs">
        ${$.map((J)=>Q`
            <wui-list-wallet
              imageSrc=${H(w.getConnectorImage(J))}
              .installed=${!0}
              name=${J.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${J.id}`}
              @click=${()=>this.onConnector(J)}
              tabIdx=${H(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector($){B.setActiveConnector($),U.push("ConnectingMultiChain")}};p1([P()],Q1.prototype,"tabIdx",void 0);p1([N()],Q1.prototype,"connectors",void 0);Q1=p1([O("w3m-connect-multi-chain-widget")],Q1);var P1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},m0=class extends V{constructor(){super();if(this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.loading=!1,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$)),T.isTelegram()&&T.isIos())this.loading=!M.state.wcUri,this.unsubscribe.push(M.subscribeKey("wcUri",($)=>this.loading=!$))}render(){let J=P0.getRecentWallets().filter((Z)=>!G0.isExcluded(Z)).filter((Z)=>!this.hasWalletConnector(Z)).filter((Z)=>this.isWalletCompatibleWithCurrentChain(Z));if(!J.length)return this.style.cssText="display: none",null;return Q`
      <wui-flex flexDirection="column" gap="xs">
        ${J.map((Z)=>Q`
            <wui-list-wallet
              imageSrc=${H(w.getWalletImage(Z))}
              name=${Z.name??"Unknown"}
              @click=${()=>this.onConnectWallet(Z)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${H(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet($){if(this.loading)return;B.selectWalletConnector($)}hasWalletConnector($){return this.connectors.some((J)=>J.id===$.id||J.name===$.name)}isWalletCompatibleWithCurrentChain($){let J=n0.state.activeChain;if(J&&$.chains)return $.chains.some((Z)=>{let K=Z.split(":")[0];return J===K});return!0}};P1([P()],m0.prototype,"tabIdx",void 0);P1([N()],m0.prototype,"connectors",void 0);P1([N()],m0.prototype,"loading",void 0);m0=P1([O("w3m-connect-recent-widget")],m0);var G1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},l0=class extends V{constructor(){super();if(this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,T.isTelegram()&&T.isIos())this.loading=!M.state.wcUri,this.unsubscribe.push(M.subscribeKey("wcUri",($)=>this.loading=!$))}render(){let{connectors:$}=B.state,{customWallets:J,featuredWalletIds:Z}=u.state,K=P0.getRecentWallets(),Y=$.find((f)=>f.id==="walletConnect"),F=$.filter((f)=>f.type==="INJECTED"||f.type==="ANNOUNCED"||f.type==="MULTI_CHAIN").filter((f)=>f.name!=="Browser Wallet");if(!Y)return null;if(Z||J||!this.wallets.length)return this.style.cssText="display: none",null;let G=F.length+K.length,I=Math.max(0,2-G),D=G0.filterOutDuplicateWallets(this.wallets).slice(0,I);if(!D.length)return this.style.cssText="display: none",null;return Q`
      <wui-flex flexDirection="column" gap="xs">
        ${D.map((f)=>Q`
            <wui-list-wallet
              imageSrc=${H(w.getWalletImage(f))}
              name=${f?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(f)}
              tabIdx=${H(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet($){if(this.loading)return;let J=B.getConnector($.id,$.rdns);if(J)U.push("ConnectingExternal",{connector:J});else U.push("ConnectingWalletConnect",{wallet:$})}};G1([P()],l0.prototype,"tabIdx",void 0);G1([P()],l0.prototype,"wallets",void 0);G1([N()],l0.prototype,"loading",void 0);l0=G1([O("w3m-connect-recommended-widget")],l0);var O1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},d0=class extends V{constructor(){super();this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.connectorImages=y1.state.connectorImages,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$),y1.subscribeKey("connectorImages",($)=>this.connectorImages=$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){if(T.isMobile())return this.style.cssText="display: none",null;let $=this.connectors.find((Z)=>Z.id==="walletConnect");if(!$)return this.style.cssText="display: none",null;let J=$.imageUrl||this.connectorImages[$?.imageId??""];return Q`
      <wui-list-wallet
        imageSrc=${H(J)}
        name=${$.name??"Unknown"}
        @click=${()=>this.onConnector($)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${H(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector($){B.setActiveConnector($),U.push("ConnectingWalletConnect")}};O1([P()],d0.prototype,"tabIdx",void 0);O1([N()],d0.prototype,"connectors",void 0);O1([N()],d0.prototype,"connectorImages",void 0);d0=O1([O("w3m-connect-walletconnect-widget")],d0);var S8=z`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var c0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},M0=class extends V{constructor(){super();this.unsubscribe=[],this.tabIdx=void 0,this.connectors=B.state.connectors,this.recommended=A.state.recommended,this.featured=A.state.featured,this.unsubscribe.push(B.subscribeKey("connectors",($)=>this.connectors=$),A.subscribeKey("recommended",($)=>this.recommended=$),A.subscribeKey("featured",($)=>this.featured=$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){return Q`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){let{custom:$,recent:J,announced:Z,injected:K,multiChain:Y,recommended:X,featured:F,external:G}=K0.getConnectorsByType(this.connectors,this.recommended,this.featured);return K0.getConnectorTypeOrder({custom:$,recent:J,announced:Z,injected:K,multiChain:Y,recommended:X,featured:F,external:G}).map((D)=>{switch(D){case"injected":return Q`
            ${Y.length?Q`<w3m-connect-multi-chain-widget
                  tabIdx=${H(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${Z.length?Q`<w3m-connect-announced-widget
                  tabIdx=${H(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${K.length?Q`<w3m-connect-injected-widget
                  .connectors=${K}
                  tabIdx=${H(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return Q`<w3m-connect-walletconnect-widget
            tabIdx=${H(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return Q`<w3m-connect-recent-widget
            tabIdx=${H(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return Q`<w3m-connect-featured-widget
            .wallets=${F}
            tabIdx=${H(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return Q`<w3m-connect-custom-widget
            tabIdx=${H(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return Q`<w3m-connect-external-widget
            tabIdx=${H(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return Q`<w3m-connect-recommended-widget
            .wallets=${X}
            tabIdx=${H(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${D}`),null}})}};M0.styles=S8;c0([P()],M0.prototype,"tabIdx",void 0);c0([N()],M0.prototype,"connectors",void 0);c0([N()],M0.prototype,"recommended",void 0);c0([N()],M0.prototype,"featured",void 0);M0=c0([O("w3m-connector-list")],M0);var L8=z`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var O0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},t=class extends V{constructor(){super(...arguments);this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(($,J)=>{let Z=J===this.activeTab;return Q`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(J)}
          data-active=${Z}
          data-testid="tab-${$.label?.toLowerCase()}"
        >
          ${this.iconTemplate($)}
          <wui-text variant="small-600" color="inherit"> ${$.label} </wui-text>
        </button>
      `})}firstUpdated(){if(this.shadowRoot&&this.isDense)this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0)}iconTemplate($){if($.icon)return Q`<wui-icon size="xs" color="inherit" name=${$.icon}></wui-icon>`;return null}onTabClick($){if(this.buttons)this.animateTabs($,!1);this.activeTab=$,this.onTabChange($)}animateTabs($,J){let Z=this.buttons[this.activeTab],K=this.buttons[$],Y=Z?.querySelector("wui-text"),X=K?.querySelector("wui-text"),F=K?.getBoundingClientRect(),G=X?.getBoundingClientRect();if(Z&&Y&&!J&&$!==this.activeTab)Y.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),Z.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"});if(K&&F&&G&&X){if($!==this.activeTab||J)this.localTabWidth=`${Math.round(F.width+G.width)+6}px`,K.animate([{width:`${F.width+G.width}px`}],{duration:J?0:500,fill:"forwards",easing:"ease"}),X.animate([{opacity:1}],{duration:J?0:125,delay:J?0:200,fill:"forwards",easing:"ease"})}}};t.styles=[R,S,L8];O0([P({type:Array})],t.prototype,"tabs",void 0);O0([P()],t.prototype,"onTabChange",void 0);O0([P({type:Array})],t.prototype,"buttons",void 0);O0([P({type:Boolean})],t.prototype,"disabled",void 0);O0([P()],t.prototype,"localTabWidth",void 0);O0([N()],t.prototype,"activeTab",void 0);O0([N()],t.prototype,"isDense",void 0);t=O0([O("wui-tabs")],t);var g1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},V1=class extends V{constructor(){super(...arguments);this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(($)=>$())}render(){let $=this.generateTabs();return Q`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${$} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let $=this.platforms.map((J)=>{if(J==="browser")return{label:"Browser",icon:"extension",platform:"browser"};else if(J==="mobile")return{label:"Mobile",icon:"mobile",platform:"mobile"};else if(J==="qrcode")return{label:"Mobile",icon:"mobile",platform:"qrcode"};else if(J==="web")return{label:"Webapp",icon:"browser",platform:"web"};else if(J==="desktop")return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=$.map(({platform:J})=>J),$}onTabChange($){let J=this.platformTabs[$];if(J)this.onSelectPlatfrom?.(J)}};g1([P({type:Array})],V1.prototype,"platforms",void 0);g1([P()],V1.prototype,"onSelectPlatfrom",void 0);V1=g1([O("w3m-connecting-header")],V1);var h8=z`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var e=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},b8={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},f$={lg:"paragraph-600",md:"small-600"},E$={lg:"md",md:"md"},c=class extends V{constructor(){super(...arguments);this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let $=this.textVariant??f$[this.size];return Q`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${$} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let $=E$[this.size],J=this.disabled?b8.disabled:b8[this.variant];return Q`<wui-loading-spinner color=${J} size=${$}></wui-loading-spinner>`}return Q``}};c.styles=[R,S,h8];e([P()],c.prototype,"size",void 0);e([P({type:Boolean})],c.prototype,"disabled",void 0);e([P({type:Boolean})],c.prototype,"fullWidth",void 0);e([P({type:Boolean})],c.prototype,"loading",void 0);e([P()],c.prototype,"variant",void 0);e([P({type:Boolean})],c.prototype,"hasIconLeft",void 0);e([P({type:Boolean})],c.prototype,"hasIconRight",void 0);e([P()],c.prototype,"borderRadius",void 0);e([P()],c.prototype,"textVariant",void 0);c=e([O("wui-button")],c);var w8=z`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var H1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},L0=class extends V{constructor(){super(...arguments);this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return Q`
      <button ?disabled=${this.disabled} tabindex=${H(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};L0.styles=[R,S,w8];H1([P()],L0.prototype,"tabIdx",void 0);H1([P({type:Boolean})],L0.prototype,"disabled",void 0);H1([P()],L0.prototype,"color",void 0);L0=H1([O("wui-link")],L0);var v8=z`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var _8=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},N1=class extends V{constructor(){super(...arguments);this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let $=this.radius>50?50:this.radius,J=36,Z=36-$,K=116+Z,Y=245+Z,X=360+Z*1.75;return Q`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${$}
          stroke-dasharray="${K} ${Y}"
          stroke-dashoffset=${X}
        />
      </svg>
    `}};N1.styles=[R,v8];_8([P({type:Number})],N1.prototype,"radius",void 0);N1=_8([O("wui-loading-thumbnail")],N1);var W8=z`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var R0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},X0=class extends V{constructor(){super(...arguments);this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let $=this.size==="sm"?"small-600":"paragraph-600";return Q`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?Q`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${$} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};X0.styles=[R,S,W8];R0([P()],X0.prototype,"variant",void 0);R0([P()],X0.prototype,"imageSrc",void 0);R0([P({type:Boolean})],X0.prototype,"disabled",void 0);R0([P()],X0.prototype,"icon",void 0);R0([P()],X0.prototype,"size",void 0);R0([P()],X0.prototype,"text",void 0);X0=R0([O("wui-chip-button")],X0);var k8=z`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var T1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},h0=class extends V{constructor(){super(...arguments);this.disabled=!1,this.label="",this.buttonLabel=""}render(){return Q`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};h0.styles=[R,S,k8];T1([P({type:Boolean})],h0.prototype,"disabled",void 0);T1([P()],h0.prototype,"label",void 0);T1([P()],h0.prototype,"buttonLabel",void 0);h0=T1([O("wui-cta-button")],h0);var C8=z`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var u8=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},z1=class extends V{constructor(){super(...arguments);this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:$,app_store:J,play_store:Z,chrome_store:K,homepage:Y}=this.wallet,X=T.isMobile(),F=T.isIos(),G=T.isAndroid(),I=[J,Z,Y,K].filter(Boolean).length>1,D=a.getTruncateString({string:$,charsStart:12,charsEnd:0,truncate:"end"});if(I&&!X)return Q`
        <wui-cta-button
          label=${`Don't have ${D}?`}
          buttonLabel="Get"
          @click=${()=>U.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `;if(!I&&Y)return Q`
        <wui-cta-button
          label=${`Don't have ${D}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;if(J&&F)return Q`
        <wui-cta-button
          label=${`Don't have ${D}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;if(Z&&G)return Q`
        <wui-cta-button
          label=${`Don't have ${D}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;return this.style.display="none",null}onAppStore(){if(this.wallet?.app_store)T.openHref(this.wallet.app_store,"_blank")}onPlayStore(){if(this.wallet?.play_store)T.openHref(this.wallet.play_store,"_blank")}onHomePage(){if(this.wallet?.homepage)T.openHref(this.wallet.homepage,"_blank")}};z1.styles=[C8];u8([P({type:Object})],z1.prototype,"wallet",void 0);z1=u8([O("w3m-mobile-download-links")],z1);var p8=z`
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

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var $0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y};class _ extends V{constructor(){super();if(this.wallet=U.state.data?.wallet,this.connector=U.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=w.getWalletImage(this.wallet)??w.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=M.state.wcUri,this.error=M.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[M.subscribeKey("wcUri",(q)=>{if(this.uri=q,this.isRetrying&&this.onRetry)this.isRetrying=!1,this.onConnect?.()}),M.subscribeKey("wcError",(q)=>this.error=q)]),(T.isTelegram()||T.isSafari())&&T.isIos()&&M.state.wcUri)this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((q)=>q()),M.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let q=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,$=`Continue in ${this.name}`;if(this.error)$="Connection declined";return Q`
      <wui-flex
        data-error=${H(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${H(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${$}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${q}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?Q`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?Q`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry)this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}onTryAgain(){if(M.setWcError(!1),this.onRetry)this.isRetrying=!0,this.onRetry?.();else this.onConnect?.()}loaderTemplate(){let q=i0.state.themeVariables["--w3m-border-radius-master"],$=q?parseInt(q.replace("px",""),10):4;return Q`<wui-loading-thumbnail radius=${$*9}></wui-loading-thumbnail>`}onCopyUri(){try{if(this.uri)T.copyToClopboard(this.uri),U0.showSuccess("Link copied")}catch{U0.showError("Failed to copy")}}}_.styles=p8;$0([N()],_.prototype,"isRetrying",void 0);$0([N()],_.prototype,"uri",void 0);$0([N()],_.prototype,"error",void 0);$0([N()],_.prototype,"ready",void 0);$0([N()],_.prototype,"showRetry",void 0);$0([N()],_.prototype,"secondaryBtnLabel",void 0);$0([N()],_.prototype,"secondaryLabel",void 0);$0([N()],_.prototype,"isLoading",void 0);$0([P({type:Boolean})],_.prototype,"isMobile",void 0);$0([P()],_.prototype,"onRetry",void 0);var j$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},y8=class extends _{constructor(){super();if(!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:$}=B.state,J=$.find((Z)=>Z.type==="ANNOUNCED"&&Z.info?.rdns===this.wallet?.rdns||Z.type==="INJECTED"||Z.name===this.wallet?.name);if(J)await M.connectExternal(J,J.chain);else throw Error("w3m-connecting-wc-browser: No connector found");D1.close(),C.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch($){C.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:$?.message??"Unknown"}}),this.error=!0}}};y8=j$([O("w3m-connecting-wc-browser")],y8);var x$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},g8=class extends _{constructor(){super();if(!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){if(!this.ready&&this.uri)this.ready=!0,this.onConnect?.()}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:$,name:J}=this.wallet,{redirect:Z,href:K}=T.formatNativeUrl($,this.uri);M.setWcLinking({name:J,href:K}),M.setRecentWallet(this.wallet),T.openHref(Z,"_blank")}catch{this.error=!0}}};g8=x$([O("w3m-connecting-wc-desktop")],g8);var b0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},A0=class extends _{constructor(){super();if(this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=u.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:$,link_mode:J,name:Z}=this.wallet,{redirect:K,redirectUniversalLink:Y,href:X}=T.formatNativeUrl($,this.uri,J);if(this.redirectDeeplink=K,this.redirectUniversalLink=Y,this.target=T.isIframe()?"_top":"_self",M.setWcLinking({name:Z,href:X}),M.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink)T.openHref(this.redirectUniversalLink,this.target);else T.openHref(this.redirectDeeplink,this.target)}catch($){C.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:$ instanceof Error?$.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=I1.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(M.subscribeKey("wcUri",()=>{this.onHandleURI()})),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){if(this.isLoading=!this.uri,!this.ready&&this.uri)this.ready=!0,this.onConnect?.()}onTryAgain(){M.setWcError(!1),this.onConnect?.()}};b0([N()],A0.prototype,"redirectDeeplink",void 0);b0([N()],A0.prototype,"redirectUniversalLink",void 0);b0([N()],A0.prototype,"target",void 0);b0([N()],A0.prototype,"preferUniversalLinks",void 0);b0([N()],A0.prototype,"isLoading",void 0);A0=b0([O("w3m-connecting-wc-mobile")],A0);var s5=W2(c5(),1);var k2=0.1,i5=2.5,F0=7;function z8(q,$,J){if(q===$)return!1;return(q-$<0?$-q:q-$)<=J+k2}function C2(q,$){let J=Array.prototype.slice.call(s5.default.create(q,{errorCorrectionLevel:$}).modules.data,0),Z=Math.sqrt(J.length);return J.reduce((K,Y,X)=>(X%Z===0?K.push([Y]):K[K.length-1].push(Y))&&K,[])}var a5={generate({uri:q,size:$,logoSize:J,dotColor:Z="#141414"}){let X=[],F=C2(q,"Q"),G=$/F.length,I=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];I.forEach(({x:b,y:E})=>{let k=(F.length-F0)*G*b,x=(F.length-F0)*G*E,y=0.45;for(let v=0;v<I.length;v+=1){let W=G*(F0-v*2);X.push(z0`
            <rect
              fill=${v===2?Z:"transparent"}
              width=${v===0?W-5:W}
              rx= ${v===0?(W-5)*0.45:W*0.45}
              ry= ${v===0?(W-5)*0.45:W*0.45}
              stroke=${Z}
              stroke-width=${v===0?5:0}
              height=${v===0?W-5:W}
              x= ${v===0?x+G*v+2.5:x+G*v}
              y= ${v===0?k+G*v+2.5:k+G*v}
            />
          `)}});let D=Math.floor((J+25)/G),f=F.length/2-D/2,h=F.length/2+D/2-1,d=[];F.forEach((b,E)=>{b.forEach((k,x)=>{if(F[E][x]){if(!(E<F0&&x<F0||E>F.length-(F0+1)&&x<F0||E<F0&&x>F.length-(F0+1))){if(!(E>f&&E<h&&x>f&&x<h)){let y=E*G+G/2,v=x*G+G/2;d.push([y,v])}}}})});let n={};return d.forEach(([b,E])=>{if(n[b])n[b]?.push(E);else n[b]=[E]}),Object.entries(n).map(([b,E])=>{let k=E.filter((x)=>E.every((y)=>!z8(x,y,G)));return[Number(b),k]}).forEach(([b,E])=>{E.forEach((k)=>{X.push(z0`<circle cx=${b} cy=${k} fill=${Z} r=${G/i5} />`)})}),Object.entries(n).filter(([b,E])=>E.length>1).map(([b,E])=>{let k=E.filter((x)=>E.some((y)=>z8(x,y,G)));return[Number(b),k]}).map(([b,E])=>{E.sort((x,y)=>x<y?-1:1);let k=[];for(let x of E){let y=k.find((v)=>v.some((W)=>z8(x,W,G)));if(y)y.push(x);else k.push([x])}return[b,k.map((x)=>[x[0],x[x.length-1]])]}).forEach(([b,E])=>{E.forEach(([k,x])=>{X.push(z0`
              <line
                x1=${b}
                x2=${b}
                y1=${k}
                y2=${x}
                stroke=${Z}
                stroke-width=${G/(i5/2)}
                stroke-linecap="round"
              />
            `)})}),X}};var o5=z`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
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
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Q0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},u2="#3396ff",o=class extends V{constructor(){super(...arguments);this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??u2}
    `,Q`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let $=this.theme==="light"?this.size:this.size-32;return z0`
      <svg height=${$} width=${$}>
        ${a5.generate({uri:this.uri,size:$,logoSize:this.arenaClear?0:$/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){if(this.imageSrc)return Q`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`;if(this.farcaster)return Q`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;return Q`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};o.styles=[R,o5];Q0([P()],o.prototype,"uri",void 0);Q0([P({type:Number})],o.prototype,"size",void 0);Q0([P()],o.prototype,"theme",void 0);Q0([P()],o.prototype,"imageSrc",void 0);Q0([P()],o.prototype,"alt",void 0);Q0([P()],o.prototype,"color",void 0);Q0([P({type:Boolean})],o.prototype,"arenaClear",void 0);Q0([P({type:Boolean})],o.prototype,"farcaster",void 0);o=Q0([O("wui-qr-code")],o);var r5=z`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var e0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},E0=class extends V{constructor(){super(...arguments);this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,Q`<slot></slot>`}};E0.styles=[r5];e0([P()],E0.prototype,"width",void 0);e0([P()],E0.prototype,"height",void 0);e0([P()],E0.prototype,"borderRadius",void 0);e0([P()],E0.prototype,"variant",void 0);E0=e0([O("wui-shimmer")],E0);var t5="https://reown.com";var e5=z`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var p2=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},D8=class extends V{render(){return Q`
      <a
        data-testid="ux-branding-reown"
        href=${t5}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};D8.styles=[R,S,e5];D8=p2([O("wui-ux-by-reown")],D8);var $$=z`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var y2=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},I8=class extends _{constructor(){super();this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(($)=>$()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),Q`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){if(!this.ready&&this.uri)this.timeout=setTimeout(()=>{this.ready=!0},200)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let $=this.getBoundingClientRect().width-40,J=this.wallet?this.wallet.name:void 0;return M.setWcLinking(void 0),M.setRecentWallet(this.wallet),Q` <wui-qr-code
      size=${$}
      theme=${i0.state.themeMode}
      uri=${this.uri}
      imageSrc=${H(w.getWalletImage(this.wallet))}
      color=${H(i0.state.themeVariables["--w3m-qr-color"])}
      alt=${H(J)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let $=!this.uri||!this.ready;return Q`<wui-link
      .disabled=${$}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};I8.styles=$$;I8=y2([O("w3m-connecting-wc-qrcode")],I8);var g2=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},J$=class extends V{constructor(){super();if(this.wallet=U.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return Q`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${H(w.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};J$=g2([O("w3m-connecting-wc-unsupported")],J$);var Y$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},B8=class extends _{constructor(){super();if(this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=I1.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(M.subscribeKey("wcUri",()=>{this.updateLoadingState()})),C.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:$,name:J}=this.wallet,{redirect:Z,href:K}=T.formatUniversalUrl($,this.uri);M.setWcLinking({name:J,href:K}),M.setRecentWallet(this.wallet),T.openHref(Z,"_blank")}catch{this.error=!0}}};Y$([N()],B8.prototype,"isLoading",void 0);B8=Y$([O("w3m-connecting-wc-web")],B8);var $1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},k0=class extends V{constructor(){super();this.wallet=U.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(u.state.siwx),this.remoteFeatures=u.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(u.subscribeKey("remoteFeatures",($)=>this.remoteFeatures=$))}disconnectedCallback(){this.unsubscribe.forEach(($)=>$())}render(){return Q`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){if(!this.remoteFeatures?.reownBranding)return null;return Q`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection($=!1){if(this.platform==="browser"||u.state.manualWCControl&&!$)return;try{let{wcPairingExpiry:J,status:Z}=M.state;if($||u.state.enableEmbedded||T.isPairingExpired(J)||Z==="connecting"){if(await M.connectWalletConnect(),!this.isSiwxEnabled)D1.close()}}catch(J){C.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:J?.message??"Unknown"}}),M.setWcError(!0),U0.showError(J.message??"Connection error"),M.resetWcConnection(),U.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:$,desktop_link:J,webapp_link:Z,injected:K,rdns:Y}=this.wallet,X=K?.map(({injected_id:n})=>n).filter(Boolean),F=[...Y?[Y]:X??[]],G=u.state.isUniversalProvider?!1:F.length,I=$,D=Z,f=M.checkInstalled(F),h=G&&f,d=J&&!T.isMobile();if(h&&!n0.state.noAdapters)this.platforms.push("browser");if(I)this.platforms.push(T.isMobile()?"mobile":"qrcode");if(D)this.platforms.push("web");if(d)this.platforms.push("desktop");if(!h&&G&&!n0.state.noAdapters)this.platforms.push("unsupported");this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return Q`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return Q`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return Q`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return Q`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return Q`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return Q`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){if(!(this.platforms.length>1))return null;return Q`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `}async onSelectPlatform($){let J=this.shadowRoot?.querySelector("div");if(J)await J.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=$,J.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}};$1([N()],k0.prototype,"platform",void 0);$1([N()],k0.prototype,"platforms",void 0);$1([N()],k0.prototype,"isSiwxEnabled",void 0);$1([N()],k0.prototype,"remoteFeatures",void 0);k0=$1([O("w3m-connecting-wc-view")],k0);var Z$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},M8=class extends V{constructor(){super(...arguments);this.isMobile=T.isMobile()}render(){if(this.isMobile){let{featured:$,recommended:J}=A.state,{customWallets:Z}=u.state,K=P0.getRecentWallets(),Y=$.length||J.length||Z?.length||K.length;return Q`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${Y?Q`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return Q`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};Z$([N()],M8.prototype,"isMobile",void 0);M8=Z$([O("w3m-connecting-wc-basic-view")],M8);var q$=z`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
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
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var X$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},x1=class extends V{constructor(){super(...arguments);this.inputElementRef=C0(),this.checked=void 0}render(){return Q`
      <label>
        <input
          ${u0(this.inputElementRef)}
          type="checkbox"
          ?checked=${H(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};x1.styles=[R,S,K$,q$];X$([P({type:Boolean})],x1.prototype,"checked",void 0);x1=X$([O("wui-switch")],x1);var F$=z`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Q$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},S1=class extends V{constructor(){super(...arguments);this.checked=void 0}render(){return Q`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${H(this.checked)}></wui-switch>
      </button>
    `}};S1.styles=[R,S,F$];Q$([P({type:Boolean})],S1.prototype,"checked",void 0);S1=Q$([O("wui-certified-switch")],S1);var P$=z`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var G$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},L1=class extends V{constructor(){super(...arguments);this.icon="copy"}render(){return Q`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};L1.styles=[R,S,P$];G$([P()],L1.prototype,"icon",void 0);L1=G$([O("wui-input-element")],L1);var O$=z`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Y0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},i=class extends V{constructor(){super(...arguments);this.inputElementRef=C0(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let $=`wui-padding-right-${this.inputRightPadding}`,Z={[`wui-size-${this.size}`]:!0,[$]:Boolean(this.inputRightPadding)};return Q`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${u0(this.inputElementRef)}
        class=${V$(Z)}
        type=${this.type}
        enterkeyhint=${H(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${H(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){if(this.icon)return Q`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;return null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};i.styles=[R,S,O$];Y0([P()],i.prototype,"size",void 0);Y0([P()],i.prototype,"icon",void 0);Y0([P({type:Boolean})],i.prototype,"disabled",void 0);Y0([P()],i.prototype,"placeholder",void 0);Y0([P()],i.prototype,"type",void 0);Y0([P()],i.prototype,"keyHint",void 0);Y0([P()],i.prototype,"value",void 0);Y0([P()],i.prototype,"inputRightPadding",void 0);Y0([P()],i.prototype,"tabIdx",void 0);i=Y0([O("wui-input-text")],i);var H$=z`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var m2=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},R8=class extends V{constructor(){super(...arguments);this.inputComponentRef=C0()}render(){return Q`
      <wui-input-text
        ${u0(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let J=this.inputComponentRef.value?.inputElementRef.value;if(J)J.value="",J.focus(),J.dispatchEvent(new Event("input"))}};R8.styles=[R,H$];R8=m2([O("wui-search-bar")],R8);var N$=z0`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var T$=z`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var z$=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},h1=class extends V{constructor(){super(...arguments);this.type="wallet"}render(){return Q`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){if(this.type==="network")return Q` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${N$}`;return Q`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};h1.styles=[R,S,T$];z$([P()],h1.prototype,"type",void 0);h1=z$([O("wui-card-select-loader")],h1);var D$=z`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var s=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},m=class extends V{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&a.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&a.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&a.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&a.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&a.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&a.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&a.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&a.getSpacingStyles(this.margin,3)};
    `,Q`<slot></slot>`}};m.styles=[R,D$];s([P()],m.prototype,"gridTemplateRows",void 0);s([P()],m.prototype,"gridTemplateColumns",void 0);s([P()],m.prototype,"justifyItems",void 0);s([P()],m.prototype,"alignItems",void 0);s([P()],m.prototype,"justifyContent",void 0);s([P()],m.prototype,"alignContent",void 0);s([P()],m.prototype,"columnGap",void 0);s([P()],m.prototype,"rowGap",void 0);s([P()],m.prototype,"gap",void 0);s([P()],m.prototype,"padding",void 0);s([P()],m.prototype,"margin",void 0);m=s([O("wui-grid")],m);var I$=z`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var J1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},j0=class extends V{constructor(){super();this.observer=new IntersectionObserver(()=>{return}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(($)=>{$.forEach((J)=>{if(J.isIntersecting)this.visible=!0,this.fetchImageSrc();else this.visible=!1})},{threshold:0.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let $=this.wallet?.badge_type==="certified";return Q`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${H($?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${$?Q`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){if(!this.visible&&!this.imageSrc||this.imageLoading)return this.shimmerTemplate();return Q`
      <wui-wallet-image
        size="md"
        imageSrc=${H(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return Q`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){if(!this.wallet)return;if(this.imageSrc=w.getWalletImage(this.wallet),this.imageSrc)return;this.imageLoading=!0,this.imageSrc=await w.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1}};j0.styles=I$;J1([N()],j0.prototype,"visible",void 0);J1([N()],j0.prototype,"imageSrc",void 0);J1([N()],j0.prototype,"imageLoading",void 0);J1([P()],j0.prototype,"wallet",void 0);j0=J1([O("w3m-all-wallets-list-item")],j0);var B$=z`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
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

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var p0=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},M$="local-paginator",D0=class extends V{constructor(){super();this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!A.state.wallets.length,this.wallets=A.state.wallets,this.recommended=A.state.recommended,this.featured=A.state.featured,this.filteredWallets=A.state.filteredWallets,this.unsubscribe.push(...[A.subscribeKey("wallets",($)=>this.wallets=$),A.subscribeKey("recommended",($)=>this.recommended=$),A.subscribeKey("featured",($)=>this.featured=$),A.subscribeKey("filteredWallets",($)=>this.filteredWallets=$)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(($)=>$()),this.paginationObserver?.disconnect()}render(){return Q`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let $=this.shadowRoot?.querySelector("wui-grid");if($)await A.fetchWalletsByPage({page:1}),await $.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,$.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}shimmerTemplate($,J){return[...Array($)].map(()=>Q`
        <wui-card-select-loader type="wallet" id=${H(J)}></wui-card-select-loader>
      `)}walletsTemplate(){let $=this.filteredWallets?.length>0?T.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):T.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return G0.markWalletsAsInstalled($).map((Z)=>Q`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(Z)}
          .wallet=${Z}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:$,recommended:J,featured:Z,count:K}=A.state,Y=window.innerWidth<352?3:4,X=$.length+J.length,G=Math.ceil(X/Y)*Y-X+Y;if(G-=$.length?Z.length%Y:0,K===0&&Z.length>0)return null;if(K===0||[...Z,...$,...J].length<K)return this.shimmerTemplate(G,M$);return null}createPaginationObserver(){let $=this.shadowRoot?.querySelector(`#${M$}`);if($)this.paginationObserver=new IntersectionObserver(([J])=>{if(J?.isIntersecting&&!this.loading){let{page:Z,count:K,wallets:Y}=A.state;if(Y.length<K)A.fetchWalletsByPage({page:Z+1})}}),this.paginationObserver.observe($)}onConnectWallet($){B.selectWalletConnector($)}};D0.styles=B$;p0([N()],D0.prototype,"loading",void 0);p0([N()],D0.prototype,"wallets",void 0);p0([N()],D0.prototype,"recommended",void 0);p0([N()],D0.prototype,"featured",void 0);p0([N()],D0.prototype,"filteredWallets",void 0);D0=p0([O("w3m-all-wallets-list")],D0);var R$=z`
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
`;var b1=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},y0=class extends V{constructor(){super(...arguments);this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?Q`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){if(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await A.searchWallet({search:this.query,badge:this.badge}),this.loading=!1}walletsTemplate(){let{search:$}=A.state,J=G0.markWalletsAsInstalled($);if(!$.length)return Q`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;return Q`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${J.map((Z)=>Q`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(Z)}
              .wallet=${Z}
              data-testid="wallet-search-item-${Z.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `}onConnectWallet($){B.selectWalletConnector($)}};y0.styles=R$;b1([N()],y0.prototype,"loading",void 0);b1([P()],y0.prototype,"query",void 0);b1([P()],y0.prototype,"badge",void 0);y0=b1([O("w3m-all-wallets-search")],y0);var U8=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},w1=class extends V{constructor(){super(...arguments);this.search="",this.onDebouncedSearch=T.debounce(($)=>{this.search=$})}render(){let $=this.search.length>=2;return Q`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${$||this.badge?Q`<w3m-all-wallets-search
            query=${this.search}
            badge=${H(this.badge)}
          ></w3m-all-wallets-search>`:Q`<w3m-all-wallets-list badge=${H(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange($){this.onDebouncedSearch($.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",U0.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){if(T.isMobile())return Q`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;return null}onWalletConnectQr(){U.push("ConnectingWalletConnect")}};U8([N()],w1.prototype,"search",void 0);U8([N()],w1.prototype,"badge",void 0);w1=U8([O("w3m-all-wallets-view")],w1);var U$=z`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var r=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},l=class extends V{constructor(){super(...arguments);this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return Q`
      <button
        ?disabled=${this.loading?!0:Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${H(this.iconVariant)}
        tabindex=${H(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return Q`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return Q`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){let $=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",J=this.iconVariant==="square-blue"?"mdl":"md",Z=this.iconSize?this.iconSize:J;return Q`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${Z}
          background="transparent"
          iconColor=${$}
          backgroundColor=${$}
          size=${J}
        ></wui-icon-box>
      `}return null}loadingTemplate(){if(this.loading)return Q`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`;return Q``}chevronTemplate(){if(this.chevron)return Q`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`;return null}};l.styles=[R,S,U$];r([P()],l.prototype,"icon",void 0);r([P()],l.prototype,"iconSize",void 0);r([P()],l.prototype,"tabIdx",void 0);r([P()],l.prototype,"variant",void 0);r([P()],l.prototype,"iconVariant",void 0);r([P({type:Boolean})],l.prototype,"disabled",void 0);r([P()],l.prototype,"imageSrc",void 0);r([P()],l.prototype,"alt",void 0);r([P({type:Boolean})],l.prototype,"chevron",void 0);r([P({type:Boolean})],l.prototype,"loading",void 0);l=r([O("wui-list-item")],l);var n2=function(q,$,J,Z){var K=arguments.length,Y=K<3?$:Z===null?Z=Object.getOwnPropertyDescriptor($,J):Z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")Y=Reflect.decorate(q,$,J,Z);else for(var F=q.length-1;F>=0;F--)if(X=q[F])Y=(K<3?X(Y):K>3?X($,J,Y):X($,J))||Y;return K>3&&Y&&Object.defineProperty($,J,Y),Y},A$=class extends V{constructor(){super(...arguments);this.wallet=U.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return Q`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){if(!this.wallet?.chrome_store)return null;return Q`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`}iosTemplate(){if(!this.wallet?.app_store)return null;return Q`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`}androidTemplate(){if(!this.wallet?.play_store)return null;return Q`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`}homepageTemplate(){if(!this.wallet?.homepage)return null;return Q`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `}onChromeStore(){if(this.wallet?.chrome_store)T.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){if(this.wallet?.app_store)T.openHref(this.wallet.app_store,"_blank")}onPlayStore(){if(this.wallet?.play_store)T.openHref(this.wallet.play_store,"_blank")}onHomePage(){if(this.wallet?.homepage)T.openHref(this.wallet.homepage,"_blank")}};A$=n2([O("w3m-downloads-view")],A$);export{A$ as W3mDownloadsView,M8 as W3mConnectingWcBasicView,w1 as W3mAllWalletsView};
