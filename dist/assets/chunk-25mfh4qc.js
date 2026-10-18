import{Hb as r,Ib as o,Nb as e,Ob as _,Pb as H,Qb as w,Rb as M,Sb as Z,Tb as A,Ub as D}from"./chunk-66nwbamh.js";import{fc as F0}from"./chunk-aagm961e.js";import{gc as z0}from"./chunk-26wak72f.js";import{cd as j,dd as x,ed as u,fd as v,gd as f,hd as c,id as y,jd as m,kd as p,nd as d}from"./chunk-wnaj3nn9.js";import{Md as b,Pd as N,Qd as Q,Sd as g}from"./chunk-kb4jkdxf.js";import{wf as E}from"./chunk-x1kejvva.js";import{Gf as l,Kf as C,Lf as a,Nf as h,Uf as i,Vf as s,ag as t}from"./chunk-habw07dy.js";import{ng as n}from"./chunk-x6g0a0qc.js";import{Wo as Y}from"./chunk-dxjv5qr6.js";import{tr as k}from"./chunk-vkwhypcn.js";import{Au as J0,Bu as U,Cu as F,Du as P}from"./chunk-0y5gb12m.js";import{EH as I0}from"./chunk-dgwf5jrz.js";var B=I0(J0(),1);class K0 extends B.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(z,K){this.props.onError(z)}componentDidUpdate(z){z.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...z){super(...z),this.state={hasError:!1}}}function P0(z,K,J){let I=Number(z);if(!Number.isFinite(I)||I===0)return`1 ${K} ≈ ${z} ${J}`;if(I>=0.01)return`1 ${K} ≈ ${L(I)} ${J}`;return`${L(1/I)} ${K} ≈ 1 ${J}`}function L(z){return z>=1000?new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Math.round(z)):z>=100?new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(z):z>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(z):new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(z)}function l0(z,K){let J=Number(z);if(!Number.isFinite(J)||J===0)return z;let I=K!=null?J/10**K:J;return I>=1000?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(I):I>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(I):I>=0.0001?new Intl.NumberFormat("en-US",{maximumFractionDigits:6}).format(I):new Intl.NumberFormat("en-US",{maximumSignificantDigits:4}).format(I)}function a0({address:z,caip2:K,config:J}){for(let I of J.currencies){let q=I.chains.find(($)=>$.caip2===K&&$.address.toLowerCase()===z.toLowerCase());if(q)return{symbol:I.symbol.toUpperCase(),decimals:q.decimals}}return{symbol:z,decimals:void 0}}function h0(z,K){let J=K[z];return J?.displayName??J?.display_name??z}function i0(z,K){return z.chains.filter((J)=>J.can_be_relay_deposit_source===!0).map((J)=>{let I=K.chains[J.caip2];return I?{caip2:J.caip2,displayName:I.displayName,iconUrl:I.iconUrl,vmType:I.vmType,currencyAddress:J.address,currencyDecimals:J.decimals}:null}).filter((J)=>J!==null)}function s0(z,K){if(!z.chains[K.destinationChain])return`Unsupported destination chain: "${K.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let J=K.destinationCurrency.toLowerCase();return z.currencies.some((I)=>I.chains.some((q)=>q.caip2===K.destinationChain&&q.address.toLowerCase()===J))?null:`Unsupported destination currency "${K.destinationCurrency}" on chain "${K.destinationChain}". Check that this token address is supported on the specified chain.`}var Y0=new Set(["ROUTE_UNAVAILABLE","UNEXPECTED_STATE","TIMEOUT_WAITING_FOR_NEXT_ORDER","TIMEOUT_ORDER_COMPLETION","DEPOSIT_FAILED","DEPOSIT_REFUNDED","USER_EXITED","AMOUNT_TOO_LOW","INSUFFICIENT_LIQUIDITY","UNSUPPORTED_CHAIN","UNSUPPORTED_CURRENCY","UNSUPPORTED_ROUTE","NO_SWAP_ROUTES_FOUND","NO_INTERNAL_SWAP_ROUTES_FOUND","NO_QUOTES","SANCTIONED_WALLET_ADDRESS","REFUND_WALLET_CREATION_FAILED","DEPOSIT_ADDRESSES_NOT_ENABLED","NOT_AUTHENTICATED"]);function $0(z){return Y0.has(z)}function t0(z){return $0(z)?z:"UNKNOWN_ERROR"}var n0=({trackingUrl:z,onViewBlockExplorer:K,onClose:J})=>{let I=z&&K?()=>{K(),window.open(z,"_blank","noopener,noreferrer")}:void 0;return F(E,{icon:i,iconVariant:"subtle",title:"Transfer in progress",subtitle:"Your deposit was received and the transfer is now processing.",showClose:!0,onClose:J,secondaryCta:I?{label:"View on block explorer ↗",onClick:I}:void 0,watermark:!1,children:P(e,{children:[P(_,{children:[F(H,{$status:"done",children:F(C,{size:14,color:"var(--privy-color-icon-success)",strokeWidth:2})}),F(M,{children:"Deposit received"})]}),F(w,{}),P(_,{children:[F(H,{$status:"active",children:F(q0,{})}),F(M,{children:"Bridging"})]}),F(w,{}),P(_,{children:[F(H,{$status:"pending"}),F(M,{children:"Funds arrived"})]})]})})},q0=Y.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function B0({address:z,onClick:K}){let[J,I]=B.useState(!1);return F(U,{children:J?F(G0,{onClick:()=>I(!1),style:{marginTop:"1.5rem"},children:F(F0,{url:z,size:312,hideLogo:!0})}):P(O0,{title:"Click to copy address",onClick:K,style:{marginTop:"1.5rem"},children:[P(R0,{children:[F(V0,{children:"Deposit address"}),F(W0,{children:z})]}),F(X0,{children:F(Z0,{type:"button",onClick:(q)=>{q.stopPropagation(),I(!0)},children:F(t,{size:16,color:"var(--privy-color-icon-muted)"})})})]})})}var G0=Y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,O0=Y.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,R0=Y.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,V0=Y.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,W0=Y.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,X0=Y.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,Z0=Y.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,S=(z)=>/^0x/i.test(z)||z.length>16;function A0({quote:z,selectedCurrency:K,selectedChain:J,destinationSymbol:I,destinationChainName:q,destinationAsset:$}){let[W,X]=B.useState(!1),G=K.symbol.toUpperCase(),O=J.displayName,R=B.useRef(null);return P(D0,{children:[P(T0,{onClick:B.useCallback(()=>{let V=document.getElementById("privy-modal-content");V&&(R.current&&clearTimeout(R.current),V.style.transition="none",R.current=setTimeout(()=>{V.style.transition="",R.current=null},160)),X((T)=>!T)},[]),children:[P(_0,{children:[K.logoURI&&F(r,{src:K.logoURI,alt:G,style:{width:"2rem",height:"2rem"}}),J.iconUrl&&F(H0,{src:J.iconUrl,alt:O})]}),P(M0,{children:[F(U0,{children:"You send"}),P(k0,{children:[G," on ",O]})]}),F(w0,{children:F(W?h:a,{size:16})})]}),F(S0,{$expanded:W,children:F(b0,{children:P(C0,{children:[z.indicative_rate&&P(Z,{children:[F(A,{children:"Conversion rate"}),P(D,{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[P0(z.indicative_rate,G,I.toUpperCase()),F(N0,{content:"Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing."})]})]}),P(Z,{children:[F(A,{children:"Receive"}),P(D,{children:[I&&!S(I)?I.toUpperCase():S($)?k($):$.toUpperCase(),q?` on ${q}`:""]})]}),z.slippage_bps!=null&&P(Z,{children:[F(A,{children:"Max slippage"}),P(D,{children:[(z.slippage_bps/100).toFixed(1),"%"]})]}),z.refund_address&&P(Z,{children:[F(A,{children:"Refund address"}),F(D,{children:F(z0,{value:z.refund_address,iconOnly:!0,iconSize:11,children:k(z.refund_address,4,4)})})]})]})})}),P(E0,{children:[F(l,{size:16,color:"var(--privy-color-icon-muted)",style:{flexShrink:0}}),P(L0,{children:["Only send ",F("strong",{children:G})," on ",F("strong",{children:O}),". Other assets may be lost."]})]})]})}var D0=Y.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,T0=Y.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,_0=Y.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,H0=Y(o)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid var(--privy-color-background);
    background-color: var(--privy-color-background);
  }
`,M0=Y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,U0=Y.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,k0=Y.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,w0=Y.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked);
  color: var(--privy-color-foreground-3);
`,C0=Y.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,E0=Y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: var(--privy-color-background-2);
`,L0=Y.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,S0=Y.div`
  display: grid;
  grid-template-rows: ${({$expanded:z})=>z?"1fr":"0fr"};
  transition: grid-template-rows 150ms ease-out;
`,b0=Y.div`
  overflow: hidden;
`;function N0({content:z}){let[K,J]=B.useState(!1),{refs:I,floatingStyles:q,context:$}=f({open:K,onOpenChange:J,placement:"top",whileElementsMounted:b,middleware:[N(6),g(),Q({padding:8})]}),W=j($,{move:!1,handleClose:d()}),X=c($),{getReferenceProps:G,getFloatingProps:O}=y([W,X,u($),v($),m($,{role:"tooltip"})]),{isMounted:R,styles:V}=p($,{duration:150});return P(U,{children:[F("button",{ref:I.setReference,type:"button","aria-label":"More information about conversion rate",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:"none",background:"none",color:"var(--privy-color-icon-muted)",cursor:"pointer"},...G(),children:F(s,{size:14})}),R&&F(x,{root:document.getElementById("privy-modal-content")??void 0,children:F(Q0,{ref:I.setFloating,style:{...q,...V},...O(),children:z})})]})}var Q0=Y.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`,r0=({quote:z,selectedCurrency:K,selectedChain:J,destinationSymbol:I,destinationChainName:q,destinationAsset:$,onBack:W,onClose:X})=>{let[G,O]=B.useState(!1),R=K?.symbol?.toUpperCase()??"funds",V=J?.displayName??"",T=async()=>{G||(await navigator.clipboard.writeText(z.deposit_address),O(!0),setTimeout(()=>O(!1),2000))};return P(E,{title:`Send ${R}${V?` on ${V}`:""}`,subtitle:"Send funds to the address below. Conversion and routing handled by Relay.",showBack:!0,onBack:W,showClose:!0,onClose:X,watermark:!1,children:[F(A0,{quote:z,selectedCurrency:K,selectedChain:J,destinationSymbol:I,destinationChainName:q,destinationAsset:$}),F(B0,{address:z.deposit_address,onClick:T}),F(n,{style:{marginTop:"1rem",marginBottom:"0.5rem",...G?{backgroundColor:"var(--privy-color-icon-success)",borderColor:"var(--privy-color-icon-success)"}:{}},onClick:T,children:G?P(U,{children:["Copied ",F(C,{size:16,style:{marginLeft:"0.25rem"}})]}):"Copy address"}),F(g0,{children:"Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes."})]})},g0=Y.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;
export{K0 as Ra,l0 as Sa,a0 as Ta,h0 as Ua,i0 as Va,s0 as Wa,t0 as Xa,n0 as Ya,r0 as Za};
