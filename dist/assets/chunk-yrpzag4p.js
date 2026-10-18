import{Ab as T,Bb as B,Cb as S}from"./chunk-wp10ma7q.js";import{Db as d,Eb as t}from"./chunk-08d1drje.js";import{Fb as a,Jb as U,Lb as V}from"./chunk-66nwbamh.js";import{mc as o}from"./chunk-4e26kcj1.js";import"./chunk-x1kejvva.js";import"./chunk-tj10rwq1.js";import{Pf as w,Wf as y,hg as Y}from"./chunk-habw07dy.js";import{jg as _}from"./chunk-7h4dat7a.js";import"./chunk-x6g0a0qc.js";import{em as n,fm as u}from"./chunk-sm1pt66h.js";import"./chunk-zbkskpm6.js";import"./chunk-vdszn4dp.js";import"./chunk-8h44c1p6.js";import"./chunk-vt3prnt7.js";import{Uo as m}from"./chunk-7qzdshjv.js";import{Wo as $}from"./chunk-dxjv5qr6.js";import"./chunk-jahdzk1g.js";import"./chunk-7xcd2g77.js";import"./chunk-h502gd9e.js";import"./chunk-vkwhypcn.js";import"./chunk-88dt3s9b.js";import"./chunk-37sgv7h3.js";import{ou as j}from"./chunk-g0zvh043.js";import"./chunk-6etmxz3n.js";import{Au as R,Cu as q,Du as H}from"./chunk-0y5gb12m.js";import"./chunk-febpbmcg.js";import"./chunk-4zec644k.js";import"./chunk-0e590d22.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import{EH as N}from"./chunk-dgwf5jrz.js";var J=N(R(),1);var qq={component:()=>{let z=n(),{onUserCloseViaDialogOrKeybindRef:b}=m(),p=j(),K=J.useRef(!1),f=T(B),h=T(S),[D,F]=J.useState(!1),g=f?"APPLE_PAY":f===!1&&h?"GOOGLE_PAY":null,O=f===!0||f===!1&&h!==void 0,P=!z?.startFiat||O||D;J.useEffect(()=>{let Q=window.setTimeout(()=>F(!0),2000);return()=>window.clearTimeout(Q)},[]),J.useEffect(()=>{z&&(K.current=!1)},[z]);let i=J.useRef(null);J.useEffect(()=>{z&&!z.error&&P&&i.current!==z&&(i.current=z,z.recordRowsViewed?.({walletPay:z.startFiat?g:void 0,walletPayTimedOut:z.startFiat?!O:void 0}))},[P,z,g,O]);let M=J.useCallback(async()=>{!K.current&&z&&(K.current=!0,u(),await z.onCancel())},[z]);if(J.useEffect(()=>(b.current=M,()=>{b.current===M&&(b.current=null)}),[M,b]),!z)return null;if(z.error)return q(a,{title:"Unable to add funds",subtitle:z.error,showClose:!0,onClose:M,primaryCta:{label:"Close",onClick:M}});let A=async(Q)=>{K.current||(K.current=!0,await z.startFiat?.(Q))};return q(a,{title:"Pay with",subtitle:"Debit cards typically have higher success rates than credit cards, even with Apple Pay or Google Pay.",showClose:!0,onClose:M,children:P?H(o,{style:{marginTop:"1rem"},$colorScheme:p.appearance.palette.colorScheme,children:[z.startFiat&&H(V,{onClick:()=>A("CREDIT_DEBIT_CARD"),children:[q(W,{children:q(w,{})}),H(X,{children:[q(U,{children:"Debit or credit card"}),q(Z,{children:"Less than 10 minutes"})]})]}),z.startFiat&&g==="APPLE_PAY"&&H(V,{onClick:()=>A("APPLE_PAY"),children:[q(W,{children:q(d,{width:18,height:18})}),H(X,{children:[q(U,{children:"Apple Pay"}),q(Z,{children:"Less than 10 minutes"})]})]}),z.startFiat&&g==="GOOGLE_PAY"&&H(V,{onClick:()=>A("GOOGLE_PAY"),children:[q(W,{children:q(t,{width:18,height:18})}),H(X,{children:[q(U,{children:"Google Pay"}),q(Z,{children:"Less than 10 minutes"})]})]}),z.startFiat&&H(V,{onClick:()=>A("BANK"),children:[q(W,{children:q(y,{})}),H(X,{children:[q(U,{children:"Bank account"}),q(Z,{children:"1–2 days"})]})]}),z.startCrypto&&H(V,{onClick:async()=>{K.current||(K.current=!0,await z.startCrypto?.())},children:[q(W,{children:q(Y,{})}),H(X,{children:[q(U,{children:"Crypto wallet or exchange"}),q(Z,{children:"Instant"})]})]})]}):q(k,{children:q(_,{size:"50px"})})})}},k=$.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-height: 8rem;
`,W=$.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-icon-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,X=$.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Z=$.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{qq as default,qq as AddFundsSelectionScreen};
