import{mo as F}from"./chunk-8h44c1p6.js";import{Vo as Z,Wo as C}from"./chunk-dxjv5qr6.js";import{kr as X}from"./chunk-33gf305j.js";import{mr as M}from"./chunk-h502gd9e.js";import{Br as W,Ir as E}from"./chunk-vkwhypcn.js";import{ou as V,ru as I,ut as S}from"./chunk-g0zvh043.js";import{Au as A,Cu as P}from"./chunk-0y5gb12m.js";import{NA as Q}from"./chunk-zs038p3b.js";import{EH as z}from"./chunk-dgwf5jrz.js";var w=z(A(),1);var d=(h)=>{let[k,D]=w.useState("auto");return w.useEffect(()=>{let x=new ResizeObserver((q)=>{D(q[0]?.contentRect.height??"auto")});return h.current&&x.observe(h.current),()=>{h.current&&x.unobserve(h.current)}},[h.current]),k},m=C.div`
  text-align: left;
  flex-grow: 1;
`,i=C.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,G=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,l=C(G)`
  ${(h)=>h.$colorScheme==="light"?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":h.$colorScheme==="dark"?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 3px;
`,$=Z`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    min-height: 56px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--privy-color-foreground);

    padding: 10px 12px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-md);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }
  }
`,n=C.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,B=C.button.attrs({className:"login-method-button"})`
  ${$}
`;C.a`
  ${$}
`;var s=C.div`
  width: 32px;
  height: 32px;
  border-radius: ${(h)=>h.$fullSize?"0":"4px"};
  background: ${(h)=>h.$fullSize?"transparent":"var(--privy-color-background-2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: ${(h)=>h.$fullSize?"32px":"18px"};
    height: ${(h)=>h.$fullSize?"32px":"18px"};
    color: ${(h)=>h.$fullSize?"inherit":"var(--privy-color-icon-muted)"};
  }
`,c=C.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${(h)=>h.$if?"display: none;":""}
`,o=C.div`
  width: 100%;
  height: 100%;
  padding: ${(h)=>h.$withPadding?"64px 0px":"0px"};
`,a=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;async function r(h,k,D){if(!k.shouldEnforceDefaultChainOnConnect)return;let x=Number(h.chainId.replace("eip155:",""));if(!k.chains.find((q)=>q.id===x)&&(h.connectorType!=="wallet_connect_v2"||h.walletClientType!=="metamask")){D?.();try{await h.switchChain(k.defaultChain.id),h.chainId=W(Q(k.defaultChain.id))}catch{X.warn("Unable to switch to default chain after connect",{chainId:k.defaultChain.id})}}}var b=w.createContext({}),t=({children:h})=>{let k=V(),[D,x]=w.useState({});return F("login",{onComplete:({loginAccount:q})=>{q&&q.type!=="passkey"&&q.type!=="cross_app"&&(q.type!=="wallet"||q.walletClientType!=="privy")&&(E.put(O(k.id),q.type),q.type==="wallet"?(E.put(K(k.id),q.walletClientType),E.put(L(k.id),q.chainType),x({accountType:q.type,walletClientType:q.walletClientType,chainType:q.chainType})):(E.del(K(k.id)),E.del(L(k.id)),x({accountType:q.type})))}}),w.useEffect(()=>{if(!k.id)return;let q=E.get(O(k.id)),v=E.get(K(k.id)),y=E.get(L(k.id));q&&x(q==="wallet"?{accountType:q,walletClientType:v,chainType:y}:{accountType:q})},[k.id]),P(b.Provider,{value:D,children:h})},O=(h)=>`privy:${h}:recent-login-method`,K=(h)=>`privy:${h}:recent-login-wallet-client`,L=(h)=>`privy:${h}:recent-login-chain-type`,e=()=>w.useContext(b),h0=(h)=>{F("fundWallet",h);let{fundWallet:k}=S();return{fundWallet:({address:D,options:x})=>k(D,x)}};function k0(h){let{login:k}=w.useContext(I);return F("login",h),{login:k}}function q0(h){let{logout:k}=w.useContext(I);return F("logout",h),{logout:k}}function w0(h){let{connectWallet:k}=w.useContext(I);return F("connectWallet",h),{connectWallet:k}}var R=M(()=>({isModalOpen:!1,resolvers:null})),x0=M(()=>({}));var C0=({address:h,client:k,appId:D})=>{let x=`${k}:${h}`;D&&E.put(T(D),x),R.setState({wallet:x})};var T=(h)=>`privy:${h}:active-wallet-connection`;
export{d as Sn,m as Tn,i as Un,G as Vn,l as Wn,n as Xn,B as Yn,s as Zn,c as _n,o as $n,a as ao,r as bo,t as co,e as do,h0 as eo,k0 as fo,q0 as go,w0 as ho,C0 as io};
