import"./chunk-p82qd26d.js";import"./chunk-kz9ry8p2.js";import{Ah as w,yh as V,zh as $}from"./chunk-kqe818f4.js";import{$h as S,Ai as vz,Bi as q,Oh as Hz,Xh as Tz,Yh as R,Zh as Yz,_h as n,ai as o,bi as y,ci as D,di as Mz,ei as C,fi as v,ji as f,li as r,mi as N,oi as x,ri as Bz,si as i,ti as M,ui as Az,xi as H,yi as p,zi as m}from"./chunk-462194qs.js";import"./chunk-6y4yydee.js";import"./chunk-apcym7z8.js";import"./chunk-f2x6e9bx.js";import{oj as G,rj as P,wj as O}from"./chunk-m8hgzdp5.js";import"./chunk-febpbmcg.js";import"./chunk-t1zraet7.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import"./chunk-bccvmyr2.js";import"./chunk-dgwf5jrz.js";var e=G`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var Rz=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},a=class extends O{render(){return P`<slot></slot>`}};a.styles=[H,e];a=Rz([q("wui-card")],a);var zz=G`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var W=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},E=class extends O{constructor(){super(...arguments);this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,P`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){S.close()}};E.styles=[H,zz];W([V()],E.prototype,"message",void 0);W([V()],E.prototype,"backgroundColor",void 0);W([V()],E.prototype,"iconColor",void 0);W([V()],E.prototype,"icon",void 0);E=W([q("wui-alertbar")],E);var Fz=G`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var Jz=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},jz={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}},k=class extends O{constructor(){super();this.unsubscribe=[],this.open=S.state.open,this.onOpen(!0),this.unsubscribe.push(S.subscribeKey("open",(z)=>{this.open=z,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach((z)=>z())}render(){let{message:z,variant:J}=S.state,Q=jz[J];return P`
      <wui-alertbar
        message=${z}
        backgroundColor=${Q?.backgroundColor}
        iconColor=${Q?.iconColor}
        icon=${Q?.icon}
      ></wui-alertbar>
    `}onOpen(z){if(this.open)this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto";else if(!z)this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none"}};k.styles=Fz;Jz([$()],k.prototype,"open",void 0);k=Jz([q("w3m-alertbar")],k);var Kz=G`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var _=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},U=class extends O{constructor(){super(...arguments);this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let z=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",J=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${z});
    --local-padding: var(${J});
`,P`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};U.styles=[H,p,m,Kz];_([V()],U.prototype,"size",void 0);_([V({type:Boolean})],U.prototype,"disabled",void 0);_([V()],U.prototype,"icon",void 0);_([V()],U.prototype,"iconColor",void 0);U=_([q("wui-icon-link")],U);var Pz=G`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Qz=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},d=class extends O{constructor(){super(...arguments);this.imageSrc=""}render(){return P`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){if(this.imageSrc)return P`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;return P`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};d.styles=[H,p,m,Pz];Qz([V()],d.prototype,"imageSrc",void 0);d=Qz([q("wui-select")],d);var Xz=G`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var B=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},bz=["SmartSessionList"];function s(){let F=D.state.data?.connector?.name,z=D.state.data?.wallet?.name,J=D.state.data?.network?.name,Q=z??F,X=C.getConnectors();return{Connect:`Connect ${X.length===1&&X[0]?.id==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:Q??"Connect Wallet",ConnectingWalletConnect:Q??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:Q?`Get ${Q}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:J??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:r.state.socialProvider?r.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}var I=class extends O{constructor(){super();this.unsubscribe=[],this.heading=s()[D.state.view],this.network=f.state.activeCaipNetwork,this.networkImage=n.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=D.state.view,this.viewDirection="",this.headerText=s()[D.state.view],this.unsubscribe.push(Yz.subscribeNetworkImages(()=>{this.networkImage=n.getNetworkImage(this.network)}),D.subscribeKey("view",(z)=>{setTimeout(()=>{this.view=z,this.headerText=s()[z]},M.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),f.subscribeKey("activeCaipNetwork",(z)=>{this.network=z,this.networkImage=n.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach((z)=>z())}render(){return P`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){o.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),D.push("WhatIsAWallet")}async onClose(){await i.safeClose()}rightHeaderTemplate(){let z=R?.state?.features?.smartSessions;if(D.state.view!=="Account"||!z)return this.closeButtonTemplate();return P`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>D.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return P`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){let z=bz.includes(this.view);return P`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${z?P`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:z}=D.state,J=z==="Connect",Q=R.state.enableEmbedded,X=z==="ApproveTransaction",K=z==="ConnectingSiwe",Y=z==="Account",Z=R.state.enableNetworkSwitch,c=X||K||J&&Q;if(Y&&Z)return P`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${w(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${w(this.networkImage)}
      ></wui-select>`;if(this.showBack&&!c)return P`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`;return P`<wui-icon-link
      data-hidden=${!J}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){if(this.isAllowedNetworkSwitch())o.sendEvent({type:"track",event:"CLICK_NETWORKS"}),D.push("Networks")}isAllowedNetworkSwitch(){let z=f.getAllRequestedCaipNetworks(),J=z?z.length>1:!1,Q=z?.find(({id:X})=>X===this.network?.id);return J||!Q}getPadding(){if(this.heading)return["l","2l","l","2l"];return["0","2l","0","2l"]}onViewChange(){let{history:z}=D.state,J=M.VIEW_DIRECTION.Next;if(z.length<this.prevHistoryLength)J=M.VIEW_DIRECTION.Prev;this.prevHistoryLength=z.length,this.viewDirection=J}async onHistoryChange(){let{history:z}=D.state,J=this.shadowRoot?.querySelector("#dynamic");if(z.length>1&&!this.showBack&&J)await J.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,J.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"});else if(z.length<=1&&this.showBack&&J)await J.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,J.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}onGoBack(){D.goBack()}};I.styles=Xz;B([$()],I.prototype,"heading",void 0);B([$()],I.prototype,"network",void 0);B([$()],I.prototype,"networkImage",void 0);B([$()],I.prototype,"showBack",void 0);B([$()],I.prototype,"prevHistoryLength",void 0);B([$()],I.prototype,"view",void 0);B([$()],I.prototype,"viewDirection",void 0);B([$()],I.prototype,"headerText",void 0);I=B([q("w3m-header")],I);var Zz=G`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var j=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},A=class extends O{constructor(){super(...arguments);this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return P`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){if(this.loading)return P`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`;if(this.iconType==="default")return P`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`;return P`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};A.styles=[H,Zz];j([V()],A.prototype,"backgroundColor",void 0);j([V()],A.prototype,"iconColor",void 0);j([V()],A.prototype,"icon",void 0);j([V()],A.prototype,"message",void 0);j([V()],A.prototype,"loading",void 0);j([V()],A.prototype,"iconType",void 0);A=j([q("wui-snackbar")],A);var $z=G`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Dz=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},Sz={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},l=class extends O{constructor(){super();this.unsubscribe=[],this.timeout=void 0,this.open=v.state.open,this.unsubscribe.push(v.subscribeKey("open",(z)=>{this.open=z,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((z)=>z())}render(){let{message:z,variant:J,svg:Q}=v.state,X=Sz[J],{icon:K,iconColor:Y}=Q??X??{};return P`
      <wui-snackbar
        message=${z}
        backgroundColor=${X?.backgroundColor}
        iconColor=${Y}
        icon=${K}
        .loading=${J==="loading"}
      ></wui-snackbar>
    `}onOpen(){if(clearTimeout(this.timeout),this.open){if(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout)clearTimeout(this.timeout);if(v.state.autoClose)this.timeout=setTimeout(()=>v.hide(),2500)}else this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};l.styles=$z;Dz([$()],l.prototype,"open",void 0);l=Dz([q("w3m-snackbar")],l);var qz=G`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var h=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},b=class extends O{constructor(){super();this.unsubscribe=[],this.open=x.state.open,this.message=x.state.message,this.triggerRect=x.state.triggerRect,this.variant=x.state.variant,this.unsubscribe.push(...[x.subscribe((z)=>{this.open=z.open,this.message=z.message,this.triggerRect=z.triggerRect,this.variant=z.variant})])}disconnectedCallback(){this.unsubscribe.forEach((z)=>z())}render(){this.dataset.variant=this.variant;let z=this.triggerRect.top,J=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${z}px;
    --w3m-tooltip-left: ${J}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,P`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};b.styles=[qz];h([$()],b.prototype,"open",void 0);h([$()],b.prototype,"message",void 0);h([$()],b.prototype,"triggerRect",void 0);h([$()],b.prototype,"variant",void 0);b=h([q("w3m-tooltip"),q("w3m-tooltip")],b);var Gz=G`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var t=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},g=class extends O{constructor(){super();this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=D.state.view,this.viewDirection="",this.unsubscribe.push(D.subscribeKey("view",(z)=>this.onViewChange(z)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([z])=>{let J=`${z?.contentRect.height}px`;if(this.prevHeight!=="0px")this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",J),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto";setTimeout(()=>{this.prevHeight=J,this.style.animation="unset"},M.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((z)=>z())}render(){return P`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return P`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return P`<w3m-account-view></w3m-account-view>`;case"AllWallets":return P`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return P`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return P`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return P`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return P`<w3m-connect-view></w3m-connect-view>`;case"Create":return P`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return P`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return P`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return P`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return P`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return P`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return P`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return P`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return P`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return P`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return P`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return P`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return P`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return P`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return P`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return P`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return P`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return P`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return P`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return P`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return P`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return P`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return P`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return P`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return P`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return P`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return P`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return P`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return P`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return P`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return P`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return P`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return P`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return P`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return P`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return P`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return P`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return P`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return P`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return P`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return P`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return P`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return P`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return P`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return P`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return P`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return P`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return P`<w3m-pay-loading-view></w3m-pay-loading-view>`;default:return P`<w3m-connect-view></w3m-connect-view>`}}onViewChange(z){x.hide();let J=M.VIEW_DIRECTION.Next,{history:Q}=D.state;if(Q.length<this.prevHistoryLength)J=M.VIEW_DIRECTION.Prev;this.prevHistoryLength=Q.length,this.viewDirection=J,setTimeout(()=>{this.view=z},M.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};g.styles=Gz;t([$()],g.prototype,"view",void 0);t([$()],g.prototype,"viewDirection",void 0);g=t([q("w3m-router")],g);var Oz=G`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var L=function(F,z,J,Q){var X=arguments.length,K=X<3?z:Q===null?Q=Object.getOwnPropertyDescriptor(z,J):Q,Y;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")K=Reflect.decorate(F,z,J,Q);else for(var Z=F.length-1;Z>=0;Z--)if(Y=F[Z])K=(X<3?Y(K):X>3?Y(z,J,K):Y(z,J))||K;return X>3&&K&&Object.defineProperty(z,J,K),K},Vz="scroll-lock";class T extends O{constructor(){super();this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=R.state.enableEmbedded,this.open=N.state.open,this.caipAddress=f.state.activeCaipAddress,this.caipNetwork=f.state.activeCaipNetwork,this.shake=N.state.shake,this.filterByNamespace=C.state.filterByNamespace,this.initializeTheming(),y.prefetchAnalyticsConfig(),this.unsubscribe.push(...[N.subscribeKey("open",(F)=>F?this.onOpen():this.onClose()),N.subscribeKey("shake",(F)=>this.shake=F),f.subscribeKey("activeCaipNetwork",(F)=>this.onNewNetwork(F)),f.subscribeKey("activeCaipAddress",(F)=>this.onNewAddress(F)),R.subscribeKey("enableEmbedded",(F)=>this.enableEmbedded=F),C.subscribeKey("filterByNamespace",(F)=>{if(this.filterByNamespace!==F&&!f.getAccountData(F)?.caipAddress)y.fetchRecommendedWallets(),this.filterByNamespace=F})])}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){N.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}if(this.open)this.onOpen();if(this.enableEmbedded)this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((F)=>F()),this.onRemoveKeyboardListener()}render(){if(this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded)return P`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;return this.open?P`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return P` <wui-card
      shake="${this.shake}"
      data-embedded="${w(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(F){if(F.target===F.currentTarget)await this.handleClose()}async handleClose(){await i.safeClose()}initializeTheming(){let{themeVariables:F,themeMode:z}=Mz.state,J=vz.getColorTheme(z);Az(F,J)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),v.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let F=document.createElement("style");F.dataset.w3m=Vz,F.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(F)}onScrollUnlock(){let F=document.head.querySelector(`style[data-w3m="${Vz}"]`);if(F)F.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let F=this.shadowRoot?.querySelector("wui-card");F?.focus(),window.addEventListener("keydown",(z)=>{if(z.key==="Escape")this.handleClose();else if(z.key==="Tab"){let{tagName:J}=z.target;if(J&&!J.includes("W3M-")&&!J.includes("WUI-"))F?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(F){let z=f.state.isSwitchingNamespace,J=Tz.getPlainAddress(F),Q=!J&&!z,X=z&&J;if(Q)N.close();else if(X)D.goBack();await Bz.initializeIfEnabled(),this.caipAddress=F,f.setIsSwitchingNamespace(!1)}onNewNetwork(F){let z=this.caipNetwork,J=z?.caipNetworkId?.toString(),Q=z?.chainNamespace,X=F?.caipNetworkId?.toString(),K=F?.chainNamespace,Y=J!==X,c=Y&&Q===K,xz=z?.name===Hz.UNSUPPORTED_NETWORK_NAME,Nz=D.state.view==="ConnectingExternal",Lz=!f.getAccountData(F?.chainNamespace)?.caipAddress,Ez=D.state.view==="UnsupportedChain",Uz=N.state.open,u=!1;if(Uz&&!Nz){if(Lz){if(Y)u=!0}else if(Ez)u=!0;else if(c&&!xz)u=!0}if(u&&D.state.view!=="SIWXSignMessage")D.goBack();this.caipNetwork=F}prefetch(){if(!this.hasPrefetched)y.prefetch(),y.fetchWalletsByPage({page:1}),this.hasPrefetched=!0}}T.styles=Oz;L([V({type:Boolean})],T.prototype,"enableEmbedded",void 0);L([$()],T.prototype,"open",void 0);L([$()],T.prototype,"caipAddress",void 0);L([$()],T.prototype,"caipNetwork",void 0);L([$()],T.prototype,"shake",void 0);L([$()],T.prototype,"filterByNamespace",void 0);var fz=class extends T{};fz=L([q("w3m-modal")],fz);var Iz=class extends T{};Iz=L([q("appkit-modal")],Iz);export{T as W3mModalBase,fz as W3mModal,Iz as AppKitModal};
