import"./chunk-mqqrd9xd.js";import{Ye as y,Ze as mJ,_e as m,af as qJ,bf as e,ef as U,ff as k,gf as I,hf as gJ,kf as S,lf as r,mf as zJ,nf as D}from"./chunk-m2g7pjx3.js";import{$g as kJ,Ag as n,Dg as yJ,Og as uJ,Qg as O,Rg as _,Tg as bJ,Wg as HJ,Xg as t,Yg as b,Zg as s,_g as V,ah as c,ch as vJ,kh as x,lh as v}from"./chunk-9y7xk3dn.js";import{Ah as f,yh as G,zh as F}from"./chunk-kqe818f4.js";import"./chunk-apcym7z8.js";import"./chunk-f2x6e9bx.js";import{oj as JJ,rj as Y,wj as T}from"./chunk-m8hgzdp5.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import"./chunk-bccvmyr2.js";import"./chunk-dgwf5jrz.js";var TJ=I`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:J})=>J["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:J})=>J.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var aJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},XJ=class extends T{render(){return Y`<slot></slot>`}};XJ.styles=[S,TJ];XJ=aJ([D("wui-card")],XJ);var IJ=I`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:J})=>J[2]};
    padding: ${({spacing:J})=>J[3]};
    border-radius: ${({borderRadius:J})=>J[6]};
    border: 1px solid ${({tokens:J})=>J.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:J})=>J.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:J})=>J.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:J})=>J.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:J})=>J.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:J})=>J.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:J})=>J.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:J})=>J.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:J})=>J.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:J})=>J.core.backgroundError};

      wui-icon {
        color: ${({tokens:J})=>J.core.borderError};
      }
    }
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
    color: ${({tokens:J})=>J.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:J})=>J["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;var KJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},sJ={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"},p=class extends T{constructor(){super(...arguments);this.message="",this.type="info"}render(){return Y`
      <wui-flex
        data-type=${f(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${sJ[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){y.close()}};p.styles=[S,IJ];KJ([G()],p.prototype,"message",void 0);KJ([G()],p.prototype,"type",void 0);p=KJ([D("wui-alertbar")],p);var OJ=I`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:J})=>J["3"]};
    left: ${({spacing:J})=>J["4"]};
    right: ${({spacing:J})=>J["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;var PJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},oJ={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}},o=class extends T{constructor(){super();this.unsubscribe=[],this.open=y.state.open,this.onOpen(!0),this.unsubscribe.push(y.subscribeKey("open",(Q)=>{this.open=Q,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach((Q)=>Q())}render(){let{message:Q,variant:$}=y.state,z=oJ[$];return Y`
      <wui-alertbar
        message=${Q}
        backgroundColor=${z?.backgroundColor}
        iconColor=${z?.iconColor}
        icon=${z?.icon}
        type=${$}
      ></wui-alertbar>
    `}onOpen(Q){if(this.open)this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto";else if(!Q)this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none"}};o.styles=OJ;PJ([F()],o.prototype,"open",void 0);o=PJ([D("w3m-alertbar")],o);var fJ=I`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:J})=>J[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:J})=>J.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:J})=>J.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:J})=>J.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:J})=>J.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:J})=>J.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:J})=>J[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:J})=>J[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:J})=>J[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:J})=>J[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:J})=>J.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:J})=>J.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:J})=>J.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:J})=>J.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:J})=>J.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:J})=>J.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var R=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},E=class extends T{constructor(){super(...arguments);this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return Y`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${f(this.iconSize)}></wui-icon>
    </button>`}};E.styles=[S,r,fJ];R([G()],E.prototype,"icon",void 0);R([G()],E.prototype,"variant",void 0);R([G()],E.prototype,"type",void 0);R([G()],E.prototype,"size",void 0);R([G()],E.prototype,"iconSize",void 0);R([G({type:Boolean})],E.prototype,"fullWidth",void 0);R([G({type:Boolean})],E.prototype,"disabled",void 0);E=R([D("wui-icon-button")],E);var xJ=I`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:J})=>J[1]};
    transition: background-color ${({durations:J})=>J.lg}
      ${({easings:J})=>J["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:J})=>J[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:J})=>J[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:J})=>J.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:J})=>J.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:J})=>J.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:J})=>J.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:J})=>J.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:J})=>J.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var u=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},rJ={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},tJ={lg:"lg",md:"md",sm:"sm"},w=class extends T{constructor(){super(...arguments);this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return Y`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let Q=rJ[this.size];if(this.text)return Y`<wui-text color="primary" variant=${Q}>${this.text}</wui-text>`;return null}imageTemplate(){if(this.imageSrc)return Y`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let Q=tJ[this.size];return Y` <wui-flex class="left-icon-container">
      <wui-icon size=${Q} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};w.styles=[S,r,xJ];u([G()],w.prototype,"imageSrc",void 0);u([G()],w.prototype,"text",void 0);u([G()],w.prototype,"size",void 0);u([G()],w.prototype,"type",void 0);u([G({type:Boolean})],w.prototype,"disabled",void 0);w=u([D("wui-select")],w);var NJ=I`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:J})=>J["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:J})=>J["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:J})=>J["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:J})=>J["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
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
`;var W=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},eJ=["SmartSessionList"],JQ={PayWithExchange:k.tokens.theme.foregroundPrimary};function AJ(){let J=V.state.data?.connector?.name,Q=V.state.data?.wallet?.name,$=V.state.data?.network?.name,z=Q??J,Z=c.getConnectors(),q=Z.length===1&&Z[0]?.id==="w3m-email",X=x.getAccountData()?.socialProvider,K=X?X.charAt(0).toUpperCase()+X.slice(1):"Connect Social";return{Connect:`Connect ${q?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:z??"Connect Wallet",ConnectingWalletConnect:z??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:z?`Get ${z}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:$??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:K,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset"}}var M=class extends T{constructor(){super();this.unsubscribe=[],this.heading=AJ()[V.state.view],this.network=x.state.activeCaipNetwork,this.networkImage=t.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=V.state.view,this.viewDirection="",this.unsubscribe.push(HJ.subscribeNetworkImages(()=>{this.networkImage=t.getNetworkImage(this.network)}),V.subscribeKey("view",(Q)=>{setTimeout(()=>{this.view=Q,this.heading=AJ()[Q]},U.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),x.subscribeKey("activeCaipNetwork",(Q)=>{this.network=Q,this.networkImage=t.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach((Q)=>Q())}render(){let Q=JQ[V.state.view]??k.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",Q),Y`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){b.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),V.push("WhatIsAWallet")}async onClose(){await e.safeClose()}rightHeaderTemplate(){let Q=O?.state?.features?.smartSessions;if(V.state.view!=="Account"||!Q)return this.closeButtonTemplate();return Y`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>V.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return Y`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){let Q=eJ.includes(this.view);return Y`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${Q?Y`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:Q}=V.state,$=Q==="Connect",z=O.state.enableEmbedded,Z=Q==="ApproveTransaction",q=Q==="ConnectingSiwe",X=Q==="Account",K=O.state.enableNetworkSwitch,B=Z||q||$&&z;if(X&&K)return Y`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${f(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${f(this.networkImage)}
      ></wui-select>`;if(this.showBack&&!B)return Y`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`;return Y`<wui-icon-button
      data-hidden=${!$}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){if(this.isAllowedNetworkSwitch())b.sendEvent({type:"track",event:"CLICK_NETWORKS"}),V.push("Networks")}isAllowedNetworkSwitch(){let Q=x.getAllRequestedCaipNetworks(),$=Q?Q.length>1:!1,z=Q?.find(({id:Z})=>Z===this.network?.id);return $||!z}onViewChange(){let{history:Q}=V.state,$=U.VIEW_DIRECTION.Next;if(Q.length<this.prevHistoryLength)$=U.VIEW_DIRECTION.Prev;this.prevHistoryLength=Q.length,this.viewDirection=$}async onHistoryChange(){let{history:Q}=V.state,$=this.shadowRoot?.querySelector("#dynamic");if(Q.length>1&&!this.showBack&&$)await $.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,$.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"});else if(Q.length<=1&&this.showBack&&$)await $.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,$.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}onGoBack(){V.goBack()}};M.styles=NJ;W([F()],M.prototype,"heading",void 0);W([F()],M.prototype,"network",void 0);W([F()],M.prototype,"networkImage",void 0);W([F()],M.prototype,"showBack",void 0);W([F()],M.prototype,"prevHistoryLength",void 0);W([F()],M.prototype,"view",void 0);W([F()],M.prototype,"viewDirection",void 0);M=W([D("w3m-header")],M);var BJ=I`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:J})=>J[1]};
    padding: ${({spacing:J})=>J[2]} ${({spacing:J})=>J[3]}
      ${({spacing:J})=>J[2]} ${({spacing:J})=>J[2]};
    border-radius: ${({borderRadius:J})=>J[20]};
    background-color: ${({tokens:J})=>J.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:J})=>J.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:J})=>J.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:J})=>J[1]};
    background-color: ${({tokens:J})=>J.core.foregroundAccent010};
    border-radius: ${({borderRadius:J})=>J.round} !important;
  }
`;var GJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},d=class extends T{constructor(){super(...arguments);this.message="",this.variant="success"}render(){return Y`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){let Q={success:"success",error:"error",warning:"warning",info:"default"},$={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};if(this.variant==="loading")return Y`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`;return Y`<wui-icon-box
      size="md"
      color=${Q[this.variant]}
      icon=${$[this.variant]}
    ></wui-icon-box>`}};d.styles=[S,BJ];GJ([G()],d.prototype,"message",void 0);GJ([G()],d.prototype,"variant",void 0);d=GJ([D("wui-snackbar")],d);var SJ=JJ`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var EJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},QJ=class extends T{constructor(){super();this.unsubscribe=[],this.timeout=void 0,this.open=_.state.open,this.unsubscribe.push(_.subscribeKey("open",(Q)=>{this.open=Q,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((Q)=>Q())}render(){let{message:Q,variant:$}=_.state;return Y` <wui-snackbar message=${Q} variant=${$}></wui-snackbar> `}onOpen(){if(clearTimeout(this.timeout),this.open){if(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout)clearTimeout(this.timeout);if(_.state.autoClose)this.timeout=setTimeout(()=>_.hide(),2500)}else this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};QJ.styles=SJ;EJ([F()],QJ.prototype,"open",void 0);QJ=EJ([D("w3m-snackbar")],QJ);var MJ=I`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:J})=>J["3"]} 10px ${({spacing:J})=>J["3"]};
    border-radius: ${({borderRadius:J})=>J["3"]};
    color: ${({tokens:J})=>J.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:J})=>J["5"]});
    transition: opacity ${({durations:J})=>J.lg}
      ${({easings:J})=>J["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:J})=>J.xl};
    animation-timing-function: ${({easings:J})=>J["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:J})=>J.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:J})=>J.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:J})=>J.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:J})=>J.theme.foregroundPrimary};
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var l=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},C=class extends T{constructor(){super();this.unsubscribe=[],this.open=m.state.open,this.message=m.state.message,this.triggerRect=m.state.triggerRect,this.variant=m.state.variant,this.unsubscribe.push(...[m.subscribe((Q)=>{this.open=Q.open,this.message=Q.message,this.triggerRect=Q.triggerRect,this.variant=Q.variant})])}disconnectedCallback(){this.unsubscribe.forEach((Q)=>Q())}render(){this.dataset.variant=this.variant;let Q=this.triggerRect.top,$=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${Q}px;
    --w3m-tooltip-left: ${$}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,Y`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};C.styles=[MJ];l([F()],C.prototype,"open",void 0);l([F()],C.prototype,"message",void 0);l([F()],C.prototype,"triggerRect",void 0);l([F()],C.prototype,"variant",void 0);C=l([D("w3m-tooltip")],C);var h={getTabsByNamespace(J){if(!(Boolean(J)&&J===n.CHAIN.EVM))return[];if(O.state.remoteFeatures?.activity===!1)return U.ACCOUNT_TABS.filter(($)=>$.label!=="Activity");return U.ACCOUNT_TABS},isValidReownName(J){return/^[a-zA-Z0-9]+$/gu.test(J)},isValidEmail(J){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(J)},validateReownName(J){return J.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){let J=V.state.view;if(U.VIEWS_WITH_LEGAL_FOOTER.includes(J)){let{termsConditionsUrl:Q,privacyPolicyUrl:$}=O.state,z=O.state.features?.legalCheckbox;if(!Q&&!$||z)return!1;return!0}return U.VIEWS_WITH_DEFAULT_FOOTER.includes(J)}};var jJ=I`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:J})=>J["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:J})=>J.core.textAccentPrimary};
    font-weight: 500;
  }
`;var LJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},$J=class extends T{constructor(){super();this.unsubscribe=[],this.remoteFeatures=O.state.remoteFeatures,this.unsubscribe.push(O.subscribeKey("remoteFeatures",(Q)=>this.remoteFeatures=Q))}disconnectedCallback(){this.unsubscribe.forEach((Q)=>Q())}render(){let{termsConditionsUrl:Q,privacyPolicyUrl:$}=O.state,z=O.state.features?.legalCheckbox;if(!Q&&!$||z)return Y`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `;return Y`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){let{termsConditionsUrl:Q,privacyPolicyUrl:$}=O.state;return Q&&$?"and":""}termsTemplate(){let{termsConditionsUrl:Q}=O.state;if(!Q)return null;return Y`<a href=${Q} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`}privacyTemplate(){let{privacyPolicyUrl:Q}=O.state;if(!Q)return null;return Y`<a href=${Q} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`}reownBrandingTemplate(Q=!1){if(!this.remoteFeatures?.reownBranding)return null;if(Q)return Y`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`;return Y`<wui-ux-by-reown></wui-ux-by-reown>`}};$J.styles=[jJ];LJ([F()],$J.prototype,"remoteFeatures",void 0);$J=LJ([D("w3m-legal-footer")],$J);var UJ=JJ``;var QQ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},VJ=class extends T{render(){let{termsConditionsUrl:Q,privacyPolicyUrl:$}=O.state;if(!Q&&!$)return null;return Y`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return Y` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){b.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:vJ(x.state.activeChain)===bJ.ACCOUNT_TYPES.SMART_ACCOUNT}}),V.push("WhatIsABuy")}};VJ.styles=[UJ];VJ=QQ([D("w3m-onramp-providers-footer")],VJ);var RJ=I`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:J})=>J["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:J})=>J["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var FJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},i=class extends T{constructor(){super(...arguments);this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=V.state.view}firstUpdated(){this.status=h.hasFooter()?"show":"hide",this.unsubscribe.push(V.subscribeKey("view",(Q)=>{if(this.view=Q,this.status=h.hasFooter()?"show":"hide",this.status==="hide")document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver((Q)=>{for(let $ of Q)if($.target===this.getWrapper()){let z=`${$.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",z)}}),this.resizeObserver.observe(this.getWrapper())}render(){return Y`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){if(h.hasFooter())return Y` ${this.templateFooter()}`;return null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return Y`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return Y`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return Y` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){b.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),V.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};i.styles=[RJ];FJ([F()],i.prototype,"status",void 0);FJ([F()],i.prototype,"view",void 0);i=FJ([D("w3m-footer")],i);var wJ=I`
  :host {
    display: block;
    width: inherit;
  }
`;var DJ=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},a=class extends T{constructor(){super();this.unsubscribe=[],this.viewState=V.state.view,this.history=V.state.history.join(","),this.unsubscribe.push(V.subscribeKey("view",()=>{this.history=V.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach((Q)=>Q()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return Y`${this.templatePageContainer()}`}templatePageContainer(){return Y`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=V.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(Q){switch(Q){case"AccountSettings":return Y`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return Y`<w3m-account-view></w3m-account-view>`;case"AllWallets":return Y`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return Y`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return Y`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return Y`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return Y`<w3m-connect-view></w3m-connect-view>`;case"Create":return Y`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return Y`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return Y`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return Y`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return Y`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return Y`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return Y`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return Y`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return Y`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return Y`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return Y`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return Y`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return Y`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return Y`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return Y`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return Y`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return Y`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return Y`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return Y`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return Y`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return Y`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return Y`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return Y`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return Y`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return Y`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return Y`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return Y`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return Y`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return Y`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return Y`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return Y`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return Y`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return Y`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return Y`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return Y`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return Y`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return Y`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return Y`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return Y`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return Y`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return Y`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return Y`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return Y`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return Y`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return Y`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return Y`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return Y`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return Y`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return Y`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return Y`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return Y`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return Y`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;default:return Y`<w3m-connect-view></w3m-connect-view>`}}};a.styles=[wJ];DJ([F()],a.prototype,"viewState",void 0);DJ([F()],a.prototype,"history",void 0);a=DJ([D("w3m-router")],a);var WJ=I`
  :host {
    z-index: ${({tokens:J})=>J.core.zIndex};
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
    background-color: ${({tokens:J})=>J.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:J})=>J.lg} ${({easings:J})=>J["ease-out-power-2"]},
      backdrop-filter ${({durations:J})=>J.lg}
        ${({easings:J})=>J["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:J})=>J.lg}
        ${({easings:J})=>J["ease-out-power-2"]},
      border-radius ${({durations:J})=>J.lg}
        ${({easings:J})=>J["ease-out-power-1"]},
      background-color ${({durations:J})=>J.lg}
        ${({easings:J})=>J["ease-out-power-1"]},
      box-shadow ${({durations:J})=>J.lg}
        ${({easings:J})=>J["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:J})=>J.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:J})=>J.lg}
      ${({easings:J})=>J["ease-out-power-2"]};
    transition-delay: ${({durations:J})=>J.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:J})=>J.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:J})=>J.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:J})=>J.lg} ${({easings:J})=>J["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:J})=>J["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:J})=>J.lg} ${({easings:J})=>J["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:J})=>J["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:J})=>J.lg} ${({easings:J})=>J["ease-out-power-2"]},
      w3m-shake ${({durations:J})=>J.xl}
        ${({easings:J})=>J["ease-out-power-2"]};
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
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:J})=>J["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
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

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:J})=>J.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:J})=>J.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:J})=>J.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:J})=>J.theme.backgroundPrimary};
    }
  }
`;var j=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},_J="scroll-lock",$Q={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class A extends T{constructor(){super();this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=O.state.enableEmbedded,this.open=v.state.open,this.caipAddress=x.state.activeCaipAddress,this.caipNetwork=x.state.activeCaipNetwork,this.shake=v.state.shake,this.filterByNamespace=c.state.filterByNamespace,this.padding=k.spacing[1],this.mobileFullScreen=O.state.enableMobileFullScreen,this.initializeTheming(),s.prefetchAnalyticsConfig(),this.unsubscribe.push(...[v.subscribeKey("open",(J)=>J?this.onOpen():this.onClose()),v.subscribeKey("shake",(J)=>this.shake=J),x.subscribeKey("activeCaipNetwork",(J)=>this.onNewNetwork(J)),x.subscribeKey("activeCaipAddress",(J)=>this.onNewAddress(J)),O.subscribeKey("enableEmbedded",(J)=>this.enableEmbedded=J),c.subscribeKey("filterByNamespace",(J)=>{if(this.filterByNamespace!==J&&!x.getAccountData(J)?.caipAddress)s.fetchRecommendedWallets(),this.filterByNamespace=J}),V.subscribeKey("view",()=>{this.dataset.border=h.hasFooter()?"true":"false",this.padding=$Q[V.state.view]??k.spacing[1]})])}firstUpdated(){if(this.dataset.border=h.hasFooter()?"true":"false",this.mobileFullScreen)this.setAttribute("data-mobile-fullscreen","true");if(this.caipAddress){if(this.enableEmbedded){v.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}if(this.open)this.onOpen();if(this.enableEmbedded)this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((J)=>J()),this.onRemoveKeyboardListener()}render(){if(this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded)return Y`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;return this.open?Y`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return Y` <wui-card
      shake="${this.shake}"
      data-embedded="${f(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(J){if(J.target===J.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await e.safeClose()}initializeTheming(){let{themeVariables:J,themeMode:Q}=kJ.state,$=zJ.getColorTheme(Q);gJ(J,$)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),_.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let J=document.createElement("style");J.dataset.w3m=_J,J.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(J)}onScrollUnlock(){let J=document.head.querySelector(`style[data-w3m="${_J}"]`);if(J)J.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let J=this.shadowRoot?.querySelector("wui-card");J?.focus(),window.addEventListener("keydown",(Q)=>{if(Q.key==="Escape")this.handleClose();else if(Q.key==="Tab"){let{tagName:$}=Q.target;if($&&!$.includes("W3M-")&&!$.includes("WUI-"))J?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(J){let Q=x.state.isSwitchingNamespace,$=V.state.view==="ProfileWallets";if(J)await this.onConnected({caipAddress:J,isSwitchingNamespace:Q,isInProfileView:$});else if(!Q&&!this.enableEmbedded&&!$)v.close();await qJ.initializeIfEnabled(J),this.caipAddress=J,x.setIsSwitchingNamespace(!1)}async onConnected(J){if(J.isInProfileView)return;let{chainNamespace:Q,chainId:$,address:z}=yJ.parseCaipAddress(J.caipAddress),Z=`${Q}:${$}`,q=!uJ.getPlainAddress(this.caipAddress),X=await qJ.getSessions({address:z,caipNetworkId:Z}),K=qJ.getSIWX()?X.some((ZJ)=>ZJ.data.accountAddress===z):!0,B=J.isSwitchingNamespace&&K&&!this.enableEmbedded,YJ=this.enableEmbedded&&q;if(B)V.goBack();else if(YJ)v.close()}onNewNetwork(J){let Q=this.caipNetwork,$=Q?.caipNetworkId?.toString(),z=Q?.chainNamespace,Z=J?.caipNetworkId?.toString(),q=J?.chainNamespace,X=$!==Z,B=X&&z===q,YJ=Q?.name===n.UNSUPPORTED_NETWORK_NAME,ZJ=V.state.view==="ConnectingExternal",dJ=V.state.view==="ProfileWallets",lJ=!x.getAccountData(J?.chainNamespace)?.caipAddress,nJ=V.state.view==="UnsupportedChain",iJ=v.state.open,g=!1;if(this.enableEmbedded&&V.state.view==="SwitchNetwork")g=!0;if(X)mJ.resetState();if(iJ&&!ZJ&&!dJ){if(lJ){if(X)g=!0}else if(nJ)g=!0;else if(B&&!YJ)g=!0}if(g&&V.state.view!=="SIWXSignMessage")V.goBack();this.caipNetwork=J}prefetch(){if(!this.hasPrefetched)s.prefetch(),s.fetchWalletsByPage({page:1}),this.hasPrefetched=!0}}A.styles=WJ;j([G({type:Boolean})],A.prototype,"enableEmbedded",void 0);j([F()],A.prototype,"open",void 0);j([F()],A.prototype,"caipAddress",void 0);j([F()],A.prototype,"caipNetwork",void 0);j([F()],A.prototype,"shake",void 0);j([F()],A.prototype,"filterByNamespace",void 0);j([F()],A.prototype,"padding",void 0);j([F()],A.prototype,"mobileFullScreen",void 0);var CJ=class extends A{};CJ=j([D("w3m-modal")],CJ);var hJ=class extends A{};hJ=j([D("appkit-modal")],hJ);var pJ=I`
  :host {
    width: 100%;
  }
`;var N=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},P=class extends T{constructor(){super(...arguments);this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(Q){if(super.updated(Q),Q.has("name")||Q.has("imageSrc")||Q.has("walletRank"))this.hasImpressionSent=!1;if(Q.has("walletRank")&&this.walletRank&&!this.intersectionObserver)this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver((Q)=>{Q.forEach(($)=>{if($.isIntersecting&&!this.loading&&!this.hasImpressionSent)this.sendImpressionEvent()})},{threshold:0.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){if(this.intersectionObserver)this.intersectionObserver.disconnect(),this.intersectionObserver=void 0}sendImpressionEvent(){if(!this.name||this.hasImpressionSent||!this.walletRank)return;if(this.hasImpressionSent=!0,this.rdnsId||this.name)b.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:V.state.view,displayIndex:this.displayIndex})}render(){return Y`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${f(this.imageSrc)}
        name=${this.name}
        size=${f(this.size)}
        tagLabel=${f(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};P.styles=pJ;N([G({type:Array})],P.prototype,"walletImages",void 0);N([G()],P.prototype,"imageSrc",void 0);N([G()],P.prototype,"name",void 0);N([G()],P.prototype,"size",void 0);N([G()],P.prototype,"tagLabel",void 0);N([G()],P.prototype,"tagVariant",void 0);N([G()],P.prototype,"walletIcon",void 0);N([G()],P.prototype,"tabIdx",void 0);N([G({type:Boolean})],P.prototype,"disabled",void 0);N([G({type:Boolean})],P.prototype,"showAllWallets",void 0);N([G({type:Boolean})],P.prototype,"loading",void 0);N([G({type:String})],P.prototype,"loadingSpinnerColor",void 0);N([G()],P.prototype,"rdnsId",void 0);N([G()],P.prototype,"displayIndex",void 0);N([G()],P.prototype,"walletRank",void 0);P=N([D("w3m-list-wallet")],P);var cJ=I`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:J})=>J.lg};
    --local-transition: ${({easings:J})=>J["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:J})=>J.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:J})=>J.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:J})=>J.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var L=function(J,Q,$,z){var Z=arguments.length,q=Z<3?Q:z===null?z=Object.getOwnPropertyDescriptor(Q,$):z,X;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")q=Reflect.decorate(J,Q,$,z);else for(var K=J.length-1;K>=0;K--)if(X=J[K])q=(Z<3?X(q):Z>3?X(Q,$,q):X(Q,$))||q;return Z>3&&q&&Object.defineProperty(Q,$,q),q},qQ=60,H=class extends T{constructor(){super(...arguments);this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=O.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(Q){if(Q.has("history")){let $=this.history;if(this.historyState!==""&&this.historyState!==$)this.onViewChange($)}if(Q.has("transitionDuration"))this.style.setProperty("--local-duration",this.transitionDuration);if(Q.has("transitionFunction"))this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){if(this.transitionFunction)this.style.setProperty("--local-transition",this.transitionFunction);this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver((Q)=>{for(let $ of Q)if($.target===this.getWrapper()){let z=$.contentRect.height,Z=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){let q=window.visualViewport?.height||window.innerHeight,X=this.getHeaderHeight();z=q-X-Z,this.style.setProperty("--local-border-bottom-radius","0px")}else z=z+Z,this.style.setProperty("--local-border-bottom-radius",Z?"var(--apkt-borderRadius-5)":"0px");if(this.style.setProperty("--local-container-height",`${z}px`),this.previousHeight!=="0px")this.style.setProperty("--local-duration-height",this.transitionDuration);this.previousHeight=`${z}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){let Q=this.getWrapper();if(Q&&this.resizeObserver)this.resizeObserver.unobserve(Q);window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return Y`
      <div class="container" data-mobile-fullscreen="${f(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${f(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(Q){let $=Q.split(",").filter(Boolean),z=this.historyState.split(",").filter(Boolean),Z=z.length,q=$.length,X=$[$.length-1]||"",K=zJ.cssDurationToNumber(this.transitionDuration),B="";if(q>Z)B="next";else if(q<Z)B="prev";else if(q===Z&&$[q-1]!==z[Z-1])B="next";this.viewDirection=`${B}-${X}`,setTimeout(()=>{this.historyState=Q,this.setView?.(X)},K),setTimeout(()=>{this.viewDirection=""},K*2)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){let Q=this.getWrapper();if(!Q)return;let $=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0"),z=0;if(this.mobileFullScreen){let Z=window.visualViewport?.height||window.innerHeight,q=this.getHeaderHeight();z=Z-q-$,this.style.setProperty("--local-border-bottom-radius","0px")}else z=Q.getBoundingClientRect().height+$,this.style.setProperty("--local-border-bottom-radius",$?"var(--apkt-borderRadius-5)":"0px");if(this.style.setProperty("--local-container-height",`${z}px`),this.previousHeight!=="0px")this.style.setProperty("--local-duration-height",this.transitionDuration);this.previousHeight=`${z}px`}getHeaderHeight(){return qQ}};H.styles=[cJ];L([G({type:String})],H.prototype,"transitionDuration",void 0);L([G({type:String})],H.prototype,"transitionFunction",void 0);L([G({type:String})],H.prototype,"history",void 0);L([G({type:String})],H.prototype,"view",void 0);L([G({attribute:!1})],H.prototype,"setView",void 0);L([F()],H.prototype,"viewDirection",void 0);L([F()],H.prototype,"historyState",void 0);L([F()],H.prototype,"previousHeight",void 0);L([F()],H.prototype,"mobileFullScreen",void 0);H=L([D("w3m-router-container")],H);export{H as W3mRouterContainer,A as W3mModalBase,CJ as W3mModal,P as W3mListWallet,hJ as AppKitModal};
