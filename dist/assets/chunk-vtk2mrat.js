import{A as T,B as H,D as A}from"./chunk-hn9f54zq.js";import{Ic as F}from"./chunk-6qqf292j.js";import{Xd as S}from"./chunk-3bpev457.js";import{Ge as E}from"./chunk-v8yp5de1.js";import{Wo as N}from"./chunk-dxjv5qr6.js";import{eu as z,ou as Q}from"./chunk-g0zvh043.js";import{Au as y,Bu as K,Cu as q,Du as X}from"./chunk-0y5gb12m.js";import{EH as x}from"./chunk-dgwf5jrz.js";var U=x(y(),1);var g=({label:G,children:M,valueStyles:J})=>X(B,{children:[q("div",{children:G}),q(C,{style:{...J},children:M})]}),B=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,C=N.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`,D=({gas:G,tokenPrice:M,tokenSymbol:J})=>X(E,{style:{paddingBottom:"12px"},children:[X(V,{children:[q($,{children:"Est. Fees"}),q("div",{children:q(H,{weiQuantities:[BigInt(G)],tokenPrice:M,tokenSymbol:J})})]}),M&&q(W,{children:`${F(BigInt(G),J)}`})]}),L=({value:G,gas:M,tokenPrice:J,tokenSymbol:R})=>{let O=BigInt(G??0)+BigInt(M);return X(E,{children:[X(V,{children:[q($,{children:"Total (including fees)"}),q("div",{children:q(H,{weiQuantities:[BigInt(G||0),BigInt(M)],tokenPrice:J,tokenSymbol:R})})]}),J&&q(W,{children:F(O,R)})]})},V=N.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,W=N.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,$=N.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`,Y=U.createContext(void 0),Z=U.createContext(void 0),m=({defaultValue:G,children:M})=>{let[J,R]=U.useState(G||null);return q(Y.Provider,{value:{activePanel:J,togglePanel:(O)=>{R(J===O?null:O)}},children:q(I,{children:M})})},h=({value:G,children:M})=>{let{activePanel:J,togglePanel:R}=U.useContext(Y),O=J===G;return q(Z.Provider,{value:{onToggle:()=>R(G),value:G},children:q(s,{isActive:O?"true":"false","data-open":String(O),children:M})})},u=({children:G})=>{let{activePanel:M}=U.useContext(Y),{onToggle:J,value:R}=U.useContext(Z),O=M===R;return X(K,{children:[X(P,{onClick:J,"data-open":String(O),children:[q(a,{children:G}),q(c,{isactive:O?"true":"false",children:q(S,{height:"16px",width:"16px",strokeWidth:"2"})})]}),q(p,{})]})},v=({children:G})=>{let{activePanel:M}=U.useContext(Y),{value:J}=U.useContext(Z);return q(d,{"data-open":String(M===J),children:q(b,{children:G})})},w=({children:G})=>{let{activePanel:M}=U.useContext(Y),{value:J}=U.useContext(Z);return q(b,{children:typeof G=="function"?G({isActive:M===J}):G})},I=N.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,P=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,p=N.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,a=N.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,s=N.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,d=N.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,b=N.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,c=N.div`
  transform: ${(G)=>G.isactive==="true"?"rotate(180deg)":"rotate(0deg)"};
`,Jq=({from:G,to:M,txn:J,transactionInfo:R,tokenPrice:O,gas:_,tokenSymbol:f})=>{let j=BigInt(J?.value||0);return q(m,{...Q().render.standalone?{defaultValue:"details"}:{},children:X(h,{value:"details",children:[q(u,{children:X(l,{children:[q("div",{children:R?.title||"Details"}),q(o,{children:q(T,{weiQuantities:[j],tokenPrice:O,tokenSymbol:f})})]})}),X(v,{children:[q(g,{label:"From",children:q(A,{walletAddress:G,chainId:J.chainId||z,chainType:"ethereum"})}),q(g,{label:"To",children:q(A,{walletAddress:M,chainId:J.chainId||z,chainType:"ethereum"})}),R&&R.action&&q(g,{label:"Action",children:R.action}),_&&q(D,{value:J.value,gas:_,tokenPrice:O,tokenSymbol:f})]}),q(w,{children:({isActive:k})=>q(L,{value:J.value,displayFee:k,gas:_||"0x0",tokenPrice:O,tokenSymbol:f})})]})})},l=N.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,o=N.div`
  flex-shrink: 0;
  padding-left: 8px;
`;
export{Jq as z};
