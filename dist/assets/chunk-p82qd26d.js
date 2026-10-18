import{wh as l,xh as d}from"./chunk-kz9ry8p2.js";import{Ch as y,Eh as n,yh as Z}from"./chunk-kqe818f4.js";import{Ai as B,Bi as w,xi as q,yi as t,zi as L}from"./chunk-462194qs.js";import{oj as N,rj as G,uj as W,wj as P}from"./chunk-m8hgzdp5.js";import{JH as A}from"./chunk-dgwf5jrz.js";var _=N`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var O=function(J,K,Q,$){var z=arguments.length,D=z<3?K:$===null?$=Object.getOwnPropertyDescriptor(K,Q):$,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(J,K,Q,$);else for(var X=J.length-1;X>=0;X--)if(Y=J[X])D=(z<3?Y(D):z>3?Y(K,Q,D):Y(K,Q))||D;return z>3&&D&&Object.defineProperty(K,Q,D),D},f=class extends P{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&B.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&B.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&B.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&B.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&B.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&B.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&B.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&B.getSpacingStyles(this.margin,3)};
    `,G`<slot></slot>`}};f.styles=[q,_];O([Z()],f.prototype,"flexDirection",void 0);O([Z()],f.prototype,"flexWrap",void 0);O([Z()],f.prototype,"flexBasis",void 0);O([Z()],f.prototype,"flexGrow",void 0);O([Z()],f.prototype,"flexShrink",void 0);O([Z()],f.prototype,"alignItems",void 0);O([Z()],f.prototype,"justifyContent",void 0);O([Z()],f.prototype,"columnGap",void 0);O([Z()],f.prototype,"rowGap",void 0);O([Z()],f.prototype,"gap",void 0);O([Z()],f.prototype,"padding",void 0);O([Z()],f.prototype,"margin",void 0);f=O([w("wui-flex")],f);var u=N`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var v=function(J,K,Q,$){var z=arguments.length,D=z<3?K:$===null?$=Object.getOwnPropertyDescriptor(K,Q):$,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(J,K,Q,$);else for(var X=J.length-1;X>=0;X--)if(Y=J[X])D=(z<3?Y(D):z>3?Y(K,Q,D):Y(K,Q))||D;return z>3&&D&&Object.defineProperty(K,Q,D),D},E=class extends P{constructor(){super(...arguments);this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let K={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:this.lineClamp?!0:!1};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,G`<slot class=${n(K)}></slot>`}};E.styles=[q,u];v([Z()],E.prototype,"variant",void 0);v([Z()],E.prototype,"color",void 0);v([Z()],E.prototype,"align",void 0);v([Z()],E.prototype,"lineClamp",void 0);E=v([w("wui-text")],E);class U{constructor(J){this.G=J}disconnect(){this.G=void 0}reconnect(J){this.G=J}deref(){return this.G}}class x{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((J)=>this.Z=J)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var g=(J)=>!l(J)&&typeof J.then=="function",p=1073741823;class i extends d{constructor(){super(...arguments),this._$Cwt=p,this._$Cbt=[],this._$CK=new U(this),this._$CX=new x}render(...J){return J.find((K)=>!g(K))??W}update(J,K){let Q=this._$Cbt,$=Q.length;this._$Cbt=K;let z=this._$CK,D=this._$CX;this.isConnected||this.disconnected();for(let Y=0;Y<K.length&&!(Y>this._$Cwt);Y++){let X=K[Y];if(!g(X))return this._$Cwt=Y,X;Y<$&&X===Q[Y]||(this._$Cwt=p,$=0,Promise.resolve(X).then(async(h)=>{for(;D.get();)await D.get();let H=z.deref();if(H!==void 0){let j=H._$Cbt.indexOf(X);j>-1&&j<H._$Cwt&&(H._$Cwt=j,H.setValue(h))}}))}return W}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}var c=y(i);class o{constructor(){this.cache=new Map}set(J,K){this.cache.set(J,K)}get(J){return this.cache.get(J)}has(J){return this.cache.has(J)}delete(J){this.cache.delete(J)}clear(){this.cache.clear()}}var S=new o;var a=N`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var F=function(J,K,Q,$){var z=arguments.length,D=z<3?K:$===null?$=Object.getOwnPropertyDescriptor(K,Q):$,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(J,K,Q,$);else for(var X=J.length-1;X>=0;X--)if(Y=J[X])D=(z<3?Y(D):z>3?Y(K,Q,D):Y(K,Q))||D;return z>3&&D&&Object.defineProperty(K,Q,D),D},s={add:async()=>(await import("./chunk-1ry7k6gm.js")).addSvg,allWallets:async()=>(await import("./chunk-g0tashev.js")).allWalletsSvg,arrowBottomCircle:async()=>(await import("./chunk-zjn5hjf5.js")).arrowBottomCircleSvg,appStore:async()=>(await import("./chunk-k36trp06.js")).appStoreSvg,apple:async()=>(await import("./chunk-7fntkz35.js")).appleSvg,arrowBottom:async()=>(await import("./chunk-bs7jfnzj.js")).arrowBottomSvg,arrowLeft:async()=>(await import("./chunk-wqxxhtj4.js")).arrowLeftSvg,arrowRight:async()=>(await import("./chunk-a3k03eyv.js")).arrowRightSvg,arrowTop:async()=>(await import("./chunk-zqxcks1j.js")).arrowTopSvg,bank:async()=>(await import("./chunk-eb8v17gy.js")).bankSvg,browser:async()=>(await import("./chunk-hdgt2495.js")).browserSvg,card:async()=>(await import("./chunk-s9pq882v.js")).cardSvg,checkmark:async()=>(await import("./chunk-3jqshrrf.js")).checkmarkSvg,checkmarkBold:async()=>(await import("./chunk-tesyny48.js")).checkmarkBoldSvg,chevronBottom:async()=>(await import("./chunk-2yp7tk47.js")).chevronBottomSvg,chevronLeft:async()=>(await import("./chunk-crkb9xfb.js")).chevronLeftSvg,chevronRight:async()=>(await import("./chunk-wntqmpyy.js")).chevronRightSvg,chevronTop:async()=>(await import("./chunk-kg47svx3.js")).chevronTopSvg,chromeStore:async()=>(await import("./chunk-7ahwhgrj.js")).chromeStoreSvg,clock:async()=>(await import("./chunk-zm0hhm5b.js")).clockSvg,close:async()=>(await import("./chunk-seb1axby.js")).closeSvg,compass:async()=>(await import("./chunk-ygxwc6rs.js")).compassSvg,coinPlaceholder:async()=>(await import("./chunk-hdx3d6sk.js")).coinPlaceholderSvg,copy:async()=>(await import("./chunk-f28nfsnt.js")).copySvg,cursor:async()=>(await import("./chunk-rz046gq7.js")).cursorSvg,cursorTransparent:async()=>(await import("./chunk-2t6pmyk4.js")).cursorTransparentSvg,desktop:async()=>(await import("./chunk-bhe0hcpn.js")).desktopSvg,disconnect:async()=>(await import("./chunk-6969s794.js")).disconnectSvg,discord:async()=>(await import("./chunk-w4p8rwhx.js")).discordSvg,etherscan:async()=>(await import("./chunk-scxbj5np.js")).etherscanSvg,extension:async()=>(await import("./chunk-fs1zs14s.js")).extensionSvg,externalLink:async()=>(await import("./chunk-aq92h7va.js")).externalLinkSvg,facebook:async()=>(await import("./chunk-wrhkrmh4.js")).facebookSvg,farcaster:async()=>(await import("./chunk-ctjwtx8h.js")).farcasterSvg,filters:async()=>(await import("./chunk-m8mfpyq7.js")).filtersSvg,github:async()=>(await import("./chunk-134hssrf.js")).githubSvg,google:async()=>(await import("./chunk-rk90zgsb.js")).googleSvg,helpCircle:async()=>(await import("./chunk-9t29deen.js")).helpCircleSvg,image:async()=>(await import("./chunk-7bqre0p1.js")).imageSvg,id:async()=>(await import("./chunk-0awfpy5q.js")).idSvg,infoCircle:async()=>(await import("./chunk-q7kzdsnx.js")).infoCircleSvg,lightbulb:async()=>(await import("./chunk-mm0p2qjh.js")).lightbulbSvg,mail:async()=>(await import("./chunk-yr2cg2f6.js")).mailSvg,mobile:async()=>(await import("./chunk-cgzfwc7y.js")).mobileSvg,more:async()=>(await import("./chunk-ce2vp07m.js")).moreSvg,networkPlaceholder:async()=>(await import("./chunk-pamgcrt1.js")).networkPlaceholderSvg,nftPlaceholder:async()=>(await import("./chunk-09p2mbxz.js")).nftPlaceholderSvg,off:async()=>(await import("./chunk-stvwq9as.js")).offSvg,playStore:async()=>(await import("./chunk-4wsk0ap6.js")).playStoreSvg,plus:async()=>(await import("./chunk-1snbc83w.js")).plusSvg,qrCode:async()=>(await import("./chunk-vg3ecgx9.js")).qrCodeIcon,recycleHorizontal:async()=>(await import("./chunk-rmfr3h5r.js")).recycleHorizontalSvg,refresh:async()=>(await import("./chunk-f0g59q9q.js")).refreshSvg,search:async()=>(await import("./chunk-sj8ckfxj.js")).searchSvg,send:async()=>(await import("./chunk-hk9jh80g.js")).sendSvg,swapHorizontal:async()=>(await import("./chunk-ns05f4xy.js")).swapHorizontalSvg,swapHorizontalMedium:async()=>(await import("./chunk-nx118qcg.js")).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await import("./chunk-v7885rtx.js")).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await import("./chunk-25sz4w1j.js")).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await import("./chunk-43mk841p.js")).swapVerticalSvg,telegram:async()=>(await import("./chunk-k9dqr8y7.js")).telegramSvg,threeDots:async()=>(await import("./chunk-hp48ypx3.js")).threeDotsSvg,twitch:async()=>(await import("./chunk-6ggsw2e9.js")).twitchSvg,twitter:async()=>(await import("./chunk-fcbq4j82.js")).xSvg,twitterIcon:async()=>(await import("./chunk-cwyk1p70.js")).twitterIconSvg,verify:async()=>(await import("./chunk-e1s5fsbb.js")).verifySvg,verifyFilled:async()=>(await import("./chunk-4ktp632k.js")).verifyFilledSvg,wallet:async()=>(await import("./chunk-af37rek2.js")).walletSvg,walletConnect:async()=>(await import("./chunk-pr5rh3fv.js")).walletConnectSvg,walletConnectLightBrown:async()=>(await import("./chunk-pr5rh3fv.js")).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await import("./chunk-pr5rh3fv.js")).walletConnectBrownSvg,walletPlaceholder:async()=>(await import("./chunk-dbcytqf7.js")).walletPlaceholderSvg,warningCircle:async()=>(await import("./chunk-jrv3xvq3.js")).warningCircleSvg,x:async()=>(await import("./chunk-fcbq4j82.js")).xSvg,info:async()=>(await import("./chunk-2ct06wy9.js")).infoSvg,exclamationTriangle:async()=>(await import("./chunk-hs3dmw9f.js")).exclamationTriangleSvg,reown:async()=>(await import("./chunk-9geda5js.js")).reownSvg};async function JA(J){if(S.has(J))return S.get(J);let Q=(s[J]??s.copy)();return S.set(J,Q),Q}var M=class extends P{constructor(){super(...arguments);this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,G`${c(JA(this.name),G`<div class="fallback"></div>`)}`}};M.styles=[q,L,a];F([Z()],M.prototype,"size",void 0);F([Z()],M.prototype,"name",void 0);F([Z()],M.prototype,"color",void 0);F([Z()],M.prototype,"aspectRatio",void 0);M=F([w("wui-icon")],M);var r=N`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var R=function(J,K,Q,$){var z=arguments.length,D=z<3?K:$===null?$=Object.getOwnPropertyDescriptor(K,Q):$,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(J,K,Q,$);else for(var X=J.length-1;X>=0;X--)if(Y=J[X])D=(z<3?Y(D):z>3?Y(K,Q,D):Y(K,Q))||D;return z>3&&D&&Object.defineProperty(K,Q,D),D},V=class extends P{constructor(){super(...arguments);this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let K=this.iconSize||this.size,Q=this.size==="lg",$=this.size==="xl",z=Q?"12%":"16%",D=Q?"xxs":$?"s":"3xl",Y=this.background==="gray",X=this.background==="opaque",h=this.backgroundColor==="accent-100"&&X||this.backgroundColor==="success-100"&&X||this.backgroundColor==="error-100"&&X||this.backgroundColor==="inverse-100"&&X,H=`var(--wui-color-${this.backgroundColor})`;if(h)H=`var(--wui-icon-box-bg-${this.backgroundColor})`;else if(Y)H=`var(--wui-color-gray-${this.backgroundColor})`;return this.style.cssText=`
       --local-bg-value: ${H};
       --local-bg-mix: ${h||Y?"100%":z};
       --local-border-radius: var(--wui-border-radius-${D});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,G` <wui-icon color=${this.iconColor} size=${K} name=${this.icon}></wui-icon> `}};V.styles=[q,t,r];R([Z()],V.prototype,"size",void 0);R([Z()],V.prototype,"backgroundColor",void 0);R([Z()],V.prototype,"iconColor",void 0);R([Z()],V.prototype,"iconSize",void 0);R([Z()],V.prototype,"background",void 0);R([Z({type:Boolean})],V.prototype,"border",void 0);R([Z()],V.prototype,"borderColor",void 0);R([Z()],V.prototype,"icon",void 0);V=R([w("wui-icon-box")],V);var e=N`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var I=function(J,K,Q,$){var z=arguments.length,D=z<3?K:$===null?$=Object.getOwnPropertyDescriptor(K,Q):$,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(J,K,Q,$);else for(var X=J.length-1;X>=0;X--)if(Y=J[X])D=(z<3?Y(D):z>3?Y(K,Q,D):Y(K,Q))||D;return z>3&&D&&Object.defineProperty(K,Q,D),D},T=class extends P{constructor(){super(...arguments);this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,G`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};T.styles=[q,L,e];I([Z()],T.prototype,"src",void 0);I([Z()],T.prototype,"alt",void 0);I([Z()],T.prototype,"size",void 0);T=I([w("wui-image")],T);var AA=N`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var m=function(J,K,Q,$){var z=arguments.length,D=z<3?K:$===null?$=Object.getOwnPropertyDescriptor(K,Q):$,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(J,K,Q,$);else for(var X=J.length-1;X>=0;X--)if(Y=J[X])D=(z<3?Y(D):z>3?Y(K,Q,D):Y(K,Q))||D;return z>3&&D&&Object.defineProperty(K,Q,D),D},b=class extends P{constructor(){super(...arguments);this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let K=this.size==="md"?"mini-700":"micro-700";return G`
      <wui-text data-variant=${this.variant} variant=${K} color="inherit">
        <slot></slot>
      </wui-text>
    `}};b.styles=[q,AA];m([Z()],b.prototype,"variant",void 0);m([Z()],b.prototype,"size",void 0);b=m([w("wui-tag")],b);var DA=N`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var k=function(J,K,Q,$){var z=arguments.length,D=z<3?K:$===null?$=Object.getOwnPropertyDescriptor(K,Q):$,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")D=Reflect.decorate(J,K,Q,$);else for(var X=J.length-1;X>=0;X--)if(Y=J[X])D=(z<3?Y(D):z>3?Y(K,Q,D):Y(K,Q))||D;return z>3&&D&&Object.defineProperty(K,Q,D),D},C=class extends P{constructor(){super(...arguments);this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,G`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};C.styles=[q,DA];k([Z()],C.prototype,"color",void 0);k([Z()],C.prototype,"size",void 0);C=k([w("wui-loading-spinner")],C);
