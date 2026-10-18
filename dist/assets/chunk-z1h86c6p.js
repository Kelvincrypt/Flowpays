import{na as N}from"./chunk-kwh9e33x.js";import{oa as M}from"./chunk-sepc5393.js";import{pa as K}from"./chunk-ega05b8g.js";import{$a as J}from"./chunk-29d5vm69.js";import{me as k}from"./chunk-3ec7vns1.js";import{ye as p}from"./chunk-g20e8g1g.js";import"./chunk-habw07dy.js";import{ng as L,pg as G,tg as V,vg as b}from"./chunk-x6g0a0qc.js";import{Uo as D}from"./chunk-7qzdshjv.js";import{Wo as m}from"./chunk-dxjv5qr6.js";import"./chunk-vkwhypcn.js";import"./chunk-88dt3s9b.js";import"./chunk-37sgv7h3.js";import{ou as y,ut as q}from"./chunk-g0zvh043.js";import"./chunk-6etmxz3n.js";import{Au as e,Bu as H,Cu as a,Du as c}from"./chunk-0y5gb12m.js";import"./chunk-febpbmcg.js";import"./chunk-4zec644k.js";import"./chunk-0e590d22.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import{EH as O}from"./chunk-dgwf5jrz.js";var u=O(e(),1);var w=O(e(),1);function Y({title:n,titleId:d,...s},o){return w.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":d},s),n?w.createElement("title",{id:d},n):null,w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"}))}var Z=w.forwardRef(Y),h=Z;var _=m.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${(n)=>n.color??"var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }
`;function C(n){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...n,children:[a("circle",{cx:"12",cy:"12",r:"10"}),a("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),a("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]})}var P=({onTransfer:n,isTransferring:d,transferSuccess:s})=>a(L,{...s?{success:!0,children:"Success!"}:{warn:!0,loading:d,onClick:n,children:"Transfer and delete account"}}),Q=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
`,A=m.div`
  display: flex;
  flex-direction: column;
  && p {
    font-size: 14px;
  }
  width: 100%;
  gap: 16px;
`,U=m.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  border: 1px solid var(--privy-color-foreground-4) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 8px;
`,S=m(K)`
  position: relative;
  width: ${({$iconSize:n})=>`${n}px`};
  height: ${({$iconSize:n})=>`${n}px`};
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,T=m(h)`
  position: relative;
  width: 15px;
  height: 15px;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,$=m.ol`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  text-align: left;
`,j=m.li`
  font-size: 14px;
  list-style-type: auto;
  list-style-position: outside;
  margin-left: 1rem;
  margin-bottom: 0.5rem; /* Adjust the margin as needed */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`,x=m.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,z=()=>a(x,{children:a(S,{$iconSize:60})}),I=({address:n,onClose:d,onRetry:s,onTransfer:o,isTransferring:f,transferSuccess:t})=>{let{defaultChain:i}=y(),R=i.blockExplorers?.default.url??"https://etherscan.io";return c(H,{children:[a(V,{onClose:d,backFn:s}),c(Q,{children:[a(z,{}),c(A,{children:[a("h3",{children:"Check account assets before transferring"}),a("p",{children:"Before transferring, ensure there are no assets in the other account. Assets in that account will not transfer automatically and may be lost."}),c($,{children:[a("p",{children:" To check your balance, you can:"}),a(j,{children:"Log out and log back into the other account, or "}),c(j,{children:["Copy your wallet address and use a"," ",a("u",{children:a("a",{target:"_blank",href:R,children:"block explorer"})})," ","to see if the account holds any assets."]})]}),c(U,{onClick:()=>navigator.clipboard.writeText(n).catch(console.error),children:[a(k,{color:"var(--privy-color-foreground)",strokeWidth:2,height:"28px",width:"28px"}),a(p,{address:n,showCopyIcon:!1}),a(T,{})]}),a(P,{onTransfer:o,isTransferring:f,transferSuccess:t})]})]}),a(b,{})]})},A2={component:()=>{let{initiateAccountTransfer:n,closePrivyModal:d}=q(),{data:s,navigate:o,lastScreen:f,setModalData:t}=D(),[i,R]=u.useState(void 0),[v,W]=u.useState(!1),[B,E]=u.useState(!1),F=async()=>{try{if(!s?.accountTransfer?.nonce||!s?.accountTransfer?.account)throw Error("missing account transfer inputs");E(!0),await n({nonce:s?.accountTransfer?.nonce,account:s?.accountTransfer?.account,accountType:s?.accountTransfer?.linkMethod,externalWalletMetadata:s?.accountTransfer?.externalWalletMetadata,telegramWebAppData:s?.accountTransfer?.telegramWebAppData,telegramAuthResult:s?.accountTransfer?.telegramAuthResult,farcasterEmbeddedAddress:s?.accountTransfer?.farcasterEmbeddedAddress,oAuthUserInfo:s?.accountTransfer?.oAuthUserInfo}),W(!0),E(!1),setTimeout(d,1000)}catch(X){t({errorModalData:{error:X,previousScreen:f||"LinkConflictScreen"}}),o("ErrorScreen",!0)}};return i?a(I,{address:i,onClose:d,onRetry:()=>R(void 0),onTransfer:F,isTransferring:B,transferSuccess:v}):a(l,{onClose:d,onInfo:()=>R(s?.accountTransfer?.embeddedWalletAddress),onContinue:()=>R(s?.accountTransfer?.embeddedWalletAddress),onTransfer:F,isTransferring:B,transferSuccess:v,data:s})}},l=({onClose:n,onContinue:d,onInfo:s,onTransfer:o,transferSuccess:f,isTransferring:t,data:i})=>{if(!i?.accountTransfer?.linkMethod||!i?.accountTransfer?.displayName)return;let R={method:i?.accountTransfer?.linkMethod,handle:i?.accountTransfer?.displayName,disclosedAccount:i?.accountTransfer?.embeddedWalletAddress?{type:"wallet",handle:i?.accountTransfer?.embeddedWalletAddress}:void 0};return c(H,{children:[a(V,{closeable:!0}),c(Q,{children:[a(M,{children:c("div",{children:[a(_,{color:"var(--privy-color-error)"}),a(J,{height:38,width:38,stroke:"var(--privy-color-error)"})]})}),c(A,{children:[c("h3",{children:[function(v){switch(v){case"sms":return"Phone number";case"email":return"Email address";case"siwe":return"Wallet address";case"siws":return"Solana wallet address";case"linkedin":return"LinkedIn profile";case"google":case"apple":case"discord":case"github":case"instagram":case"spotify":case"tiktok":case"line":case"twitch":case"twitter":case"telegram":case"farcaster":return`${N(v.replace("_oauth",""))} profile`;default:return v.startsWith("privy:")?"Cross-app account":v}}(R.method)," is associated with another account"]}),c("p",{children:["Do you want to transfer",a("b",{children:R.handle?` ${R.handle}`:""})," to this account instead? This will delete your other account."]}),a(r,{onClick:s,disclosedAccount:R.disclosedAccount})]}),c(A,{style:{gap:12,marginTop:12},children:[i?.accountTransfer?.embeddedWalletAddress?a(L,{onClick:d,children:"Continue"}):a(P,{onTransfer:o,transferSuccess:f,isTransferring:t}),a(G,{onClick:n,children:"No thanks"})]})]}),a(b,{})]})};function r({disclosedAccount:n,onClick:d}){return n?c(U,{onClick:d,children:[a(k,{color:"var(--privy-color-foreground)",strokeWidth:2,height:"28px",width:"28px"}),a(p,{address:n.handle,showCopyIcon:!1}),a(C,{width:15,height:15,color:"var(--privy-color-foreground-3)",style:{marginLeft:"auto"}})]}):null}export{A2 as default,l as LinkConflictScreenView,A2 as LinkConflictScreen};
