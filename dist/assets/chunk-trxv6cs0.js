import{ma as q1}from"./chunk-d211nnw2.js";import{pa as E1}from"./chunk-ega05b8g.js";import{Ha as l1,Ia as S1}from"./chunk-vsm0e82s.js";import{_a as U1}from"./chunk-hdbcyc7g.js";import{ab as O1}from"./chunk-twxqhckq.js";import{bb as R}from"./chunk-t18sfhaz.js";import{$b as h1}from"./chunk-mfah5zz2.js";import{Ec as C1}from"./chunk-y5ysnnw7.js";import{Mc as Z1}from"./chunk-4a3p0phs.js";import{Vd as J1}from"./chunk-ggq1psec.js";import{Xd as A1}from"./chunk-3bpev457.js";import{Yd as o}from"./chunk-dvgdxjsh.js";import{fe as u,ge as A,he as V,ie as D1,je as C}from"./chunk-m92hjby8.js";import{ye as T}from"./chunk-g20e8g1g.js";import{Ae as V1}from"./chunk-mwrfap4b.js";import{kg as R1,ng as d,sg as g1,tg as a,vg as v1,wg as B1}from"./chunk-x6g0a0qc.js";import{Tn as w1}from"./chunk-cp7qnsst.js";import{Wo as Y}from"./chunk-dxjv5qr6.js";import{Is as F1,kt as n,ou as e,ut as P1}from"./chunk-g0zvh043.js";import{Au as Y1,Bu as S,Cu as w,Du as v}from"./chunk-0y5gb12m.js";import{cB as z1}from"./chunk-zs038p3b.js";import{EH as X1}from"./chunk-dgwf5jrz.js";var t=X1(Y1(),1);var r=Y(V)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`;var y=X1(Y1(),1);function e1({title:G,titleId:X,...c},Q){return y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:Q,"aria-labelledby":X},c),G?y.createElement("title",{id:X},G):null,y.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"}))}var w5=y.forwardRef(e1),_1=w5;var H1=({iconUrl:G,value:X,symbol:c,usdValue:Q,nftName:g,nftCount:N,decimals:Z,$isLoading:L})=>{if(L)return w(Q1,{$isLoading:L});let m=X&&Q&&Z?function(B,U,l){let D=parseFloat(B),H=parseFloat(l);if(D===0||H===0||Number.isNaN(D)||Number.isNaN(H))return B;let F=Math.ceil(-Math.log10(0.01/(H/D))),p=Math.pow(10,F=Math.max(F=Math.min(F,U),1)),J=+(Math.floor(D*p)/p).toFixed(F).replace(/\.?0+$/,"");return Intl.NumberFormat(void 0,{maximumFractionDigits:U}).format(J)}(X,Z,Q):X;return v("div",{children:[v(Q1,{$isLoading:L,children:[G&&w(h5,{src:G,alt:"Token icon"}),N&&N>1?N+"x":void 0," ",g,m," ",c]}),Q&&v(v5,{$isLoading:L,children:["$",Q]})]})},Q1=Y.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  /**
   * @NOTE This is a code smell anti-pattern for styling components.
   * We are mixing JSX definitions with styled-components CSS definitions.
   * This is not ideal and should be refactored in the future to separate concerns.
   * This is also hard to read, as it makes it difficult to understand the structure
   * of the component and its styles by viewing the JSX.
   */

  ${V1}
`,v5=Y.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${V1}
`,h5=Y.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`,A5=(G)=>{let{chain:X,transactionDetails:c,isTokenContractInfoLoading:Q,symbol:g}=G,{action:N,functionName:Z}=c;return w(J1,{children:v(u,{children:[N!=="transaction"&&v(A,{children:[w(V,{children:"Action"}),w(C,{children:Z})]}),Z==="mint"&&"args"in c&&c.args.filter((L)=>L).map((L,m)=>v(A,{children:[w(V,{children:`Param ${m}`}),w(C,{children:typeof L=="string"&&z1(L)?w(T,{address:L,url:X?.blockExplorers?.default?.url,showCopyIcon:!1}):L?.toString()})]},m)),Z==="setApprovalForAll"&&c.operator&&v(A,{children:[w(V,{children:"Operator"}),w(C,{children:w(T,{address:c.operator,url:X?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),Z==="setApprovalForAll"&&c.approved!==void 0&&v(A,{children:[w(V,{children:"Set approval to"}),w(C,{children:c.approved?"true":"false"})]}),Z==="transfer"||Z==="transferWithMemo"||Z==="transferFrom"||Z==="safeTransferFrom"||Z==="approve"?v(S,{children:["formattedAmount"in c&&c.formattedAmount&&v(A,{children:[w(V,{children:"Amount"}),v(C,{$isLoading:Q,children:[c.formattedAmount," ",g]})]}),"tokenId"in c&&c.tokenId&&v(A,{children:[w(V,{children:"Token ID"}),w(C,{children:c.tokenId.toString()})]})]}):null,Z==="safeBatchTransferFrom"&&v(S,{children:["amounts"in c&&c.amounts&&v(A,{children:[w(V,{children:"Amounts"}),w(C,{children:c.amounts.join(", ")})]}),"tokenIds"in c&&c.tokenIds&&v(A,{children:[w(V,{children:"Token IDs"}),w(C,{children:c.tokenIds.join(", ")})]})]}),Z==="approve"&&c.spender&&v(A,{children:[w(V,{children:"Spender"}),w(C,{children:w(T,{address:c.spender,url:X?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),(Z==="transferFrom"||Z==="safeTransferFrom"||Z==="safeBatchTransferFrom")&&c.transferFrom&&v(A,{children:[w(V,{children:"Transferring from"}),w(C,{children:w(T,{address:c.transferFrom,url:X?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),(Z==="transferFrom"||Z==="safeTransferFrom"||Z==="safeBatchTransferFrom")&&c.transferTo&&v(A,{children:[w(V,{children:"Transferring to"}),w(C,{children:w(T,{address:c.transferTo,url:X?.blockExplorers?.default?.url,showCopyIcon:!1})})]})]})})},V5=({variant:G,setPreventMaliciousTransaction:X,colorScheme:c="light",preventMaliciousTransaction:Q})=>G==="warn"?w(L1,{children:v(U1,{theme:c,children:[w("span",{style:{fontWeight:"500"},children:"Warning: Suspicious transaction"}),w("br",{}),"This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk."]})}):G==="error"?w(S,{children:v(L1,{children:[w(q1,{theme:c,children:v("div",{children:[w("strong",{children:"This is a malicious transaction"}),w("br",{}),"This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets."]})}),v(C5,{children:[w(l1,{color:"var(--privy-color-error)",checked:!Q,readOnly:!0,onClick:()=>X(!Q)}),w("span",{children:"I understand and want to proceed anyways."})]})]})}):null,L1=Y.div`
  margin-top: 1.5rem;
`,C5=Y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`,Z5=({transactionIndex:G,maxIndex:X})=>typeof G!="number"||X===0?"":` (${G+1} / ${X+1})`,r5=({img:G,submitError:X,prepareError:c,onClose:Q,action:g,title:N,subtitle:Z,to:L,tokenAddress:m,network:B,missingFunds:U,fee:l,from:D,cta:H,disabled:F,chain:p,isSubmitting:J,isPreparing:j,isTokenPriceLoading:E,isTokenContractInfoLoading:$,isSponsored:b,symbol:I,balance:K,onClick:q,transactionDetails:O,transactionIndex:s,maxIndex:M,onBack:h,chainName:z,validation:x,hasScanDetails:c1,setIsScanDetailsOpen:b1,preventMaliciousTransaction:K1,setPreventMaliciousTransaction:s1,tokensSent:G1,tokensReceived:k,isScanning:d1,isCancellable:a1,functionName:t1})=>{let{showTransactionDetails:i,setShowTransactionDetails:I1,hasMoreDetails:M1,isErc20Ish:x1}=((_)=>{let[W,f1]=t.useState(!1),f=!0,T1=!1;return(!_||_.isErc20Ish||_.action==="transaction")&&(f=!1),f&&(T1=Object.entries(_||{}).some(([r1,n1])=>n1&&!["action","isErc20Ish","isNFTIsh"].includes(r1))),{showTransactionDetails:W,setShowTransactionDetails:f1,hasMoreDetails:f&&T1,isErc20Ish:_?.isErc20Ish}})(O),k1=e(),i1=x1&&$||j||E||d1;return v(S,{children:[w(a,{onClose:Q,backFn:h}),G&&w(o1,{children:G}),v(Z1,{style:{marginTop:G?"1.5rem":0},children:[N,w(Z5,{maxIndex:M,transactionIndex:s})]}),w(C1,{children:Z}),v(u,{style:{marginTop:"2rem"},children:[(!!G1[0]||i1)&&v(A,{children:[k.length>0?w(V,{children:"Send"}):w(V,{children:g==="approve"?"Approval amount":"Amount"}),w("div",{className:"flex flex-col",children:G1.map((_,W)=>w(H1,{iconUrl:_.iconUrl,value:t1==="setApprovalForAll"?"All":_.value,usdValue:_.usdValue,symbol:_.symbol,nftName:_.nftName,nftCount:_.nftCount,decimals:_.decimals},W))})]}),k.length>0&&v(A,{children:[w(V,{children:"Receive"}),w("div",{className:"flex flex-col",children:k.map((_,W)=>w(H1,{iconUrl:_.iconUrl,value:_.value,usdValue:_.usdValue,symbol:_.symbol,nftName:_.nftName,nftCount:_.nftCount,decimals:_.decimals},W))})]}),O&&"spender"in O&&O?.spender?v(A,{children:[w(V,{children:"Spender"}),w(C,{children:w(T,{address:O.spender,url:p?.blockExplorers?.default?.url})})]}):null,L&&v(A,{children:[w(V,{children:"To"}),w(C,{children:w(T,{address:L,url:p?.blockExplorers?.default?.url,showCopyIcon:!0})})]}),m&&v(A,{children:[w(V,{children:"Token address"}),w(C,{children:w(T,{address:m,url:p?.blockExplorers?.default?.url})})]}),v(A,{children:[w(V,{children:"Network"}),w(C,{children:B})]}),v(A,{children:[w(V,{children:"Estimated fee"}),w(C,{$isLoading:j||E||b===void 0,children:b?v(u1,{children:[v($1,{children:["Sponsored by ",k1.name]}),w(h1,{height:16,width:16})]}):l})]}),M1&&!c1&&v(S,{children:[w(A,{className:"cursor-pointer",onClick:()=>I1(!i),children:v(D1,{className:"flex items-center gap-x-1",children:["Details"," ",w(A1,{style:{width:"0.75rem",marginLeft:"0.25rem",transform:i?"rotate(180deg)":void 0}})]})}),i&&O&&w(A5,{action:g,chain:p,transactionDetails:O,isTokenContractInfoLoading:$,symbol:I})]}),c1&&w(A,{children:v(r,{onClick:()=>b1(!0),children:[w("span",{className:"text-color-primary",children:"Details"}),w(R1,{height:"14px",width:"14px",strokeWidth:"2"})]})})]}),w(w1,{}),X?w(o,{style:{marginTop:"2rem"},children:X.message}):c&&s===0?w(o,{style:{marginTop:"2rem"},children:c.shortMessage??W1}):null,w(V5,{variant:x,preventMaliciousTransaction:K1,setPreventMaliciousTransaction:s1}),w(y1,{$useSmallMargins:!(!c&&!X&&x!=="warn"&&x!=="error"),address:D,balance:K,errMsg:j||c||X||!U?void 0:`Add funds on ${p?.name??z} to complete transaction.`}),w(d,{style:{marginTop:"1rem"},loading:J,disabled:F||j,onClick:q,children:H}),a1&&w(g1,{style:{marginTop:"1rem"},onClick:Q,isSubmitting:!1,children:"Not now"}),w(v1,{})]})},n5=({img:G,title:X,subtitle:c,cta:Q,instructions:g,network:N,blockExplorerUrl:Z,isMissingFunds:L,submitError:m,parseError:B,total:U,swap:l,transactingWalletAddress:D,fee:H,balance:F,disabled:p,isSubmitting:J,isPreparing:j,isTokenPriceLoading:E,onClick:$,onClose:b,onBack:I,isSponsored:K})=>{let q=j||E,[O,s]=t.useState(!1),M=e();return v(S,{children:[w(a,{onClose:b,backFn:I}),G&&w(o1,{children:G}),w(Z1,{style:{marginTop:G?"1.5rem":0},children:X}),w(C1,{children:c}),v(u,{style:{marginTop:"2rem",marginBottom:".5rem"},children:[(U||q)&&v(A,{children:[w(V,{children:"Amount"}),w(C,{$isLoading:q,children:U})]}),l&&v(A,{children:[w(V,{children:"Swap"}),w(C,{children:l})]}),N&&v(A,{children:[w(V,{children:"Network"}),w(C,{children:N})]}),(H||q||K!==void 0)&&v(A,{children:[w(V,{children:"Estimated fee"}),w(C,{$isLoading:q,children:K&&!q?v(u1,{children:[v($1,{children:["Sponsored by ",M.name]}),w(h1,{height:16,width:16})]}):H})]})]}),w(A,{children:v(r,{onClick:()=>s((h)=>!h),children:[w("span",{children:"Advanced"}),w(A1,{height:"16px",width:"16px",strokeWidth:"2",style:{transition:"all 300ms",transform:O?"rotate(180deg)":void 0}})]})}),O&&w(S,{children:g.map((h,z)=>h.type==="sol-transfer"?v(P,{children:[w(A,{children:v(R,{children:["Transfer ",h.withSeed?"with seed":""]})}),v(A,{children:[w(V,{children:"Amount"}),v(C,{children:[n({amount:h.value,decimals:h.token.decimals})," ",h.token.symbol]})]}),!!h.toAccount&&v(A,{children:[w(V,{children:"Destination"}),w(C,{children:w(T,{address:h.toAccount,url:Z})})]})]},z):h.type==="spl-transfer"?v(P,{children:[w(A,{children:v(R,{children:["Transfer ",h.token.symbol]})}),v(A,{children:[w(V,{children:"Amount"}),w(C,{children:h.value.toString()})]}),!!h.fromAta&&v(A,{children:[w(V,{children:"Source"}),w(C,{children:w(T,{address:h.fromAta,url:Z})})]}),!!h.toAta&&v(A,{children:[w(V,{children:"Destination"}),w(C,{children:w(T,{address:h.toAta,url:Z})})]}),!!h.token.address&&v(A,{children:[w(V,{children:"Token"}),w(C,{children:w(T,{address:h.token.address,url:Z})})]})]},z):h.type==="ata-creation"?v(P,{children:[w(A,{children:w(R,{children:"Create token account"})}),v(A,{children:[w(V,{children:"Program ID"}),w(C,{children:w(T,{address:h.program,url:Z})})]}),!!h.owner&&v(A,{children:[w(V,{children:"Owner"}),w(C,{children:w(T,{address:h.owner,url:Z})})]})]},z):h.type==="create-account"?v(P,{children:[w(A,{children:v(R,{children:["Create account ",h.withSeed?"with seed":""]})}),!!h.account&&v(A,{children:[w(V,{children:"Account"}),w(C,{children:w(T,{address:h.account,url:Z})})]}),v(A,{children:[w(V,{children:"Amount"}),v(C,{children:[n({amount:h.value,decimals:9})," SOL"]})]})]},z):h.type==="spl-init-account"?v(P,{children:[w(A,{children:w(R,{children:"Initialize token account"})}),!!h.account&&v(A,{children:[w(V,{children:"Account"}),w(C,{children:w(T,{address:h.account,url:Z})})]}),!!h.mint&&v(A,{children:[w(V,{children:"Mint"}),w(C,{children:w(T,{address:h.mint,url:Z})})]}),!!h.owner&&v(A,{children:[w(V,{children:"Owner"}),w(C,{children:w(T,{address:h.owner,url:Z})})]})]},z):h.type==="spl-close-account"?v(P,{children:[w(A,{children:w(R,{children:"Close token account"})}),!!h.source&&v(A,{children:[w(V,{children:"Source"}),w(C,{children:w(T,{address:h.source,url:Z})})]}),!!h.destination&&v(A,{children:[w(V,{children:"Destination"}),w(C,{children:w(T,{address:h.destination,url:Z})})]}),!!h.owner&&v(A,{children:[w(V,{children:"Owner"}),w(C,{children:w(T,{address:h.owner,url:Z})})]})]},z):h.type==="spl-sync-native"?v(P,{children:[w(A,{children:w(R,{children:"Sync native"})}),v(A,{children:[w(V,{children:"Program ID"}),w(C,{children:w(T,{address:h.program,url:Z})})]})]},z):h.type==="raydium-swap-base-input"?v(P,{children:[w(A,{children:v(R,{children:["Raydium swap"," ",h.tokenIn&&h.tokenOut?`${h.tokenIn.symbol} → ${h.tokenOut.symbol}`:""]})}),v(A,{children:[w(V,{children:"Amount in"}),w(C,{children:h.amountIn.toString()})]}),v(A,{children:[w(V,{children:"Minimum amount out"}),w(C,{children:h.minimumAmountOut.toString()})]}),h.mintIn&&v(A,{children:[w(V,{children:"Token in"}),w(C,{children:w(T,{address:h.mintIn,url:Z})})]}),h.mintOut&&v(A,{children:[w(V,{children:"Token out"}),w(C,{children:w(T,{address:h.mintOut,url:Z})})]})]},z):h.type==="raydium-swap-base-output"?v(P,{children:[w(A,{children:v(R,{children:["Raydium swap"," ",h.tokenIn&&h.tokenOut?`${h.tokenIn.symbol} → ${h.tokenOut.symbol}`:""]})}),v(A,{children:[w(V,{children:"Max amount in"}),w(C,{children:h.maxAmountIn.toString()})]}),v(A,{children:[w(V,{children:"Amount out"}),w(C,{children:h.amountOut.toString()})]}),h.mintIn&&v(A,{children:[w(V,{children:"Token in"}),w(C,{children:w(T,{address:h.mintIn,url:Z})})]}),h.mintOut&&v(A,{children:[w(V,{children:"Token out"}),w(C,{children:w(T,{address:h.mintOut,url:Z})})]})]},z):h.type==="jupiter-swap-shared-accounts-route"?v(P,{children:[w(A,{children:v(R,{children:["Jupiter swap"," ",h.tokenIn&&h.tokenOut?`${h.tokenIn.symbol} → ${h.tokenOut.symbol}`:""]})}),v(A,{children:[w(V,{children:"In amount"}),w(C,{children:h.inAmount.toString()})]}),v(A,{children:[w(V,{children:"Quoted out amount"}),w(C,{children:h.quotedOutAmount.toString()})]}),h.mintIn&&v(A,{children:[w(V,{children:"Token in"}),w(C,{children:w(T,{address:h.mintIn,url:Z})})]}),h.mintOut&&v(A,{children:[w(V,{children:"Token out"}),w(C,{children:w(T,{address:h.mintOut,url:Z})})]})]},z):h.type==="jupiter-swap-exact-out-route"?v(P,{children:[w(A,{children:v(R,{children:["Jupiter swap"," ",h.tokenIn&&h.tokenOut?`${h.tokenIn.symbol} → ${h.tokenOut.symbol}`:""]})}),v(A,{children:[w(V,{children:"Quoted in amount"}),w(C,{children:h.quotedInAmount.toString()})]}),v(A,{children:[w(V,{children:"Amount out"}),w(C,{children:h.outAmount.toString()})]}),h.mintIn&&v(A,{children:[w(V,{children:"Token in"}),w(C,{children:w(T,{address:h.mintIn,url:Z})})]}),h.mintOut&&v(A,{children:[w(V,{children:"Token out"}),w(C,{children:w(T,{address:h.mintOut,url:Z})})]})]},z):v(P,{children:[v(A,{children:[w(V,{children:"Program ID"}),w(C,{children:w(T,{address:h.program,url:Z})})]}),v(A,{children:[w(V,{children:"Data"}),w(C,{children:h.discriminator})]})]},z))}),w(w1,{}),m?w(o,{style:{marginTop:"2rem"},children:m.message}):B?w(o,{style:{marginTop:"2rem"},children:W1}):null,w(y1,{$useSmallMargins:!(!B&&!m),title:"",address:D,balance:F,errMsg:j||B||m||!L?void 0:"Add funds on Solana to complete transaction."}),w(d,{style:{marginTop:"1rem"},loading:J,disabled:p||j,onClick:$,children:Q}),w(v1,{})]})},y1=Y(O1)`
  ${(G)=>G.$useSmallMargins?"margin-top: 0.5rem;":"margin-top: 2rem;"}
`,P=Y(u)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`,W1="There was an error preparing your transaction. Your transaction request will likely fail.",o1=Y.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,u1=Y.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`,$1=Y.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,N1=(G)=>G?.code===F1.COMPLIANCE_BLOCKED,c5=()=>v(Y5,{children:[w(H5,{}),w(_5,{})]}),e5=({transactionError:G,chainId:X,onClose:c,onRetry:Q,chainType:g,transactionHash:N})=>{let{chains:Z}=P1(),[L,m]=t.useState(!1),{errorCode:B,errorMessage:U}=((H,F)=>{if(F==="ethereum")return N1(H)?{errorCode:"Transaction blocked",errorMessage:H.message}:{errorCode:H.details??H.message,errorMessage:H.shortMessage};let p=H.txSignature,J=H?.transactionMessage||"Something went wrong.";if(Array.isArray(H.logs)){let j=H.logs.find((E)=>/insufficient (lamports|funds)/gi.test(E));j&&(J=j)}return{transactionHash:p,errorMessage:J}})(G,g),l=N1(G),D=(({chains:H,chainId:F,chainType:p,transactionHash:J})=>p==="ethereum"?H.find((j)=>j.id===F)?.blockExplorers?.default.url??"https://etherscan.io":function(j,E){return`https://explorer.solana.com/tx/${j}?chain=${E}`}(J||"",F))({chains:Z,chainId:X,chainType:g,transactionHash:N});return v(S,{children:[w(a,{onClose:c}),v(G5,{children:[w(c5,{}),w(T5,{children:B}),w(X5,{children:l?"This transaction cannot be completed.":"Please try again."}),v(m1,{children:[w(j1,{children:"Error message"}),w(p1,{$clickable:!1,children:U})]}),N&&v(m1,{children:[w(j1,{children:"Transaction hash"}),v(L5,{children:["Copy this hash to view details about the transaction on a"," ",w("u",{children:w("a",{href:D,children:"block explorer"})}),"."]}),v(p1,{$clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(N),m(!0)},children:[N,w(m5,{clicked:L})]})]}),!l&&w(Q5,{onClick:()=>Q({resetNonce:!!N}),children:"Retry transaction"})]}),w(B1,{})]})},G5=Y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,T5=Y.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,X5=Y.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,Y5=Y.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,_5=Y(E1)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,H5=Y.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,Q5=Y(d)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,j1=Y.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,m1=Y.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,L5=Y.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  overflow-wrap: break-word;
`,p1=Y.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  overflow-wrap: break-word;
  ${(G)=>G.$clickable&&`cursor: pointer;
  transition: background-color 0.3s;
  padding-right: 45px;

  &:hover {
    background-color: var(--privy-color-foreground-4);
  }`}
`,N5=Y(_1)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,j5=Y(S1)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,m5=({clicked:G})=>w(G?j5:N5,{});
export{r5 as r,n5 as s,e5 as t};
