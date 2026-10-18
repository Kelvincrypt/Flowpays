import{nc as Y}from"./chunk-hmtww3pt.js";import{xc as X}from"./chunk-km6n52s4.js";import{Hc as K,Ic as M,Kc as Q,Lc as Z}from"./chunk-6qqf292j.js";import{Wo as H}from"./chunk-dxjv5qr6.js";import{tr as W}from"./chunk-vkwhypcn.js";import{Bu as J,Cu as A,Du as I}from"./chunk-0y5gb12m.js";import{Xx as V}from"./chunk-1pe80pyv.js";var y=({weiQuantities:q,tokenPrice:v,tokenSymbol:C})=>{let w=Q(q),z=v?K(w,v):void 0,E=M(w,C);return A(R,{children:z||E})},N=({weiQuantities:q,tokenPrice:v,tokenSymbol:C})=>{let w=Q(q),z=v?K(w,v):void 0,E=M(w,C);return A(R,{children:z?I(J,{children:[A(D,{children:"USD"}),z==="<$0.01"?I(b,{children:[A(_,{children:"<"}),"$0.01"]}):z]}):E})},g=({quantities:q,tokenPrice:v,tokenSymbol:C="SOL",tokenDecimals:w=9})=>{let z=q.reduce((k,B)=>k+B,0n),E=v&&C==="SOL"&&w===9?X(z,v):void 0,h=C==="SOL"&&w===9?Y(z):`${V(z,w)} ${C}`;return A(R,{children:E?A(J,{children:E==="<$0.01"?I(b,{children:[A(_,{children:"<"}),"$0.01"]}):E}):h})},R=H.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,D=H.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,_=H.span`
  font-size: 10px;
`,b=H.span`
  display: flex;
  align-items: center;
`;function G(q,v){return`https://explorer.solana.com/account/${q}?chain=${v}`}var j=(q)=>A(L,{href:q.chainType==="ethereum"?Z(q.chainId,q.walletAddress):G(q.walletAddress,q.chainId),target:"_blank",children:W(q.walletAddress)}),L=H.a`
  &:hover {
    text-decoration: underline;
  }
`;
export{y as A,N as B,g as C,j as D};
