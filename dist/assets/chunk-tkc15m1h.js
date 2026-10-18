import{Ma as a}from"./chunk-842f6pgc.js";import{bb as o}from"./chunk-t18sfhaz.js";import{vb as k}from"./chunk-dd6hnjg5.js";import{fc as c}from"./chunk-aagm961e.js";import{$d as s}from"./chunk-d1r04sja.js";import{wf as d}from"./chunk-x1kejvva.js";import"./chunk-tj10rwq1.js";import{Kf as h,Of as j}from"./chunk-habw07dy.js";import"./chunk-7h4dat7a.js";import{pg as n}from"./chunk-x6g0a0qc.js";import"./chunk-ajc23y29.js";import"./chunk-t795qshv.js";import"./chunk-59n0ebnf.js";import"./chunk-sm1pt66h.js";import"./chunk-zbkskpm6.js";import"./chunk-vdszn4dp.js";import"./chunk-cp7qnsst.js";import"./chunk-75vpkpdc.js";import"./chunk-8h44c1p6.js";import"./chunk-vt3prnt7.js";import"./chunk-dzp8vngs.js";import"./chunk-37k4fp0g.js";import{Uo as m}from"./chunk-7qzdshjv.js";import{Wo as X,_o as p}from"./chunk-dxjv5qr6.js";import"./chunk-cmzq8e3k.js";import"./chunk-jahdzk1g.js";import"./chunk-640n8t3d.js";import"./chunk-7xcd2g77.js";import"./chunk-7f3mjpxv.js";import"./chunk-33gf305j.js";import{lr as qq}from"./chunk-bnfzemeq.js";import"./chunk-h502gd9e.js";import"./chunk-vkwhypcn.js";import{Qr as z,Ur as u}from"./chunk-88dt3s9b.js";import"./chunk-37sgv7h3.js";import{Kt as g,ou as f,su as b,ut as O}from"./chunk-g0zvh043.js";import"./chunk-6etmxz3n.js";import{Au as e,Bu as y,Cu as G,Du as E}from"./chunk-0y5gb12m.js";import"./chunk-febpbmcg.js";import"./chunk-hd1rrdpg.js";import"./chunk-s5t451sg.js";import"./chunk-4zec644k.js";import"./chunk-0e590d22.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import{EH as v}from"./chunk-dgwf5jrz.js";var Z=v(e(),1),N=v(qq(),1);var Gq=X.div`
  width: 100%;
`,Jq=X.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${(q)=>q.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${(q)=>q.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,Kq=X.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,l=X.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${(q)=>q.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,Vq=X(l)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,Xq=X(o)`
  margin-bottom: 0.5rem;
`,Yq=X(n)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`,Zq=({value:q,title:M,placeholder:B,className:J,showCopyButton:H=!0,truncate:Y,maxLength:U=40,disabled:$=!1})=>{let[x,P]=Z.useState(!1),w=Y&&q?((K,C,A)=>{if((K=K.startsWith("https://")?K.slice(8):K).length<=A)return K;if(C==="middle"){let Q=Math.ceil(A/2)-2,L=Math.floor(A/2)-1;return`${K.slice(0,Q)}...${K.slice(-L)}`}return`${K.slice(0,A-3)}...`})(q,Y,U):q;return Z.useEffect(()=>{if(x){let K=setTimeout(()=>P(!1),3000);return()=>clearTimeout(K)}},[x]),E(Gq,{className:J,children:[M&&G(Xq,{children:M}),E(Jq,{$disabled:$,children:[G(Kq,{children:q?G(l,{$disabled:$,title:q,children:w}):G(Vq,{$disabled:$,children:B||"No value"})}),H&&q&&G(Yq,{onClick:function(K){K.stopPropagation(),navigator.clipboard.writeText(q).then(()=>P(!0)).catch(console.error)},size:"sm",children:E(y,x?{children:["Copied",G(h,{size:14})]}:{children:["Copy",G(j,{size:14})]})})]})]})},zq=({connectUri:q,loading:M,success:B,errorMessage:J,onBack:H,onClose:Y,onOpenFarcaster:U})=>G(d,N.isMobile||M?N.isIOS?{title:J?J.message:"Sign in with Farcaster",subtitle:J?J.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:k,iconVariant:"loading",iconLoadingStatus:{success:B,fail:!!J},primaryCta:q&&U?{label:"Open Farcaster app",onClick:U}:void 0,onBack:H,onClose:Y,watermark:!0}:{title:J?J.message:"Signing in with Farcaster",subtitle:J?J.detail:"This should only take a moment",icon:k,iconVariant:"loading",iconLoadingStatus:{success:B,fail:!!J},onBack:H,onClose:Y,watermark:!0,children:q&&N.isMobile&&G(Bq,{children:G(a,{text:"Take me to Farcaster",url:q,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:H,onClose:Y,watermark:!0,children:E(Hq,{children:[G(Mq,{children:q?G(c,{url:q,size:275,squareLogoElement:k}):G(xq,{children:G(p,{})})}),E(Uq,{children:[G($q,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),q&&G(Zq,{value:q,truncate:"end",maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),Fq={component:()=>{let{authenticated:q,logout:M,ready:B,user:J}=b(),{lastScreen:H,navigate:Y,navigateBack:U,setModalData:$}=m(),x=f(),{getAuthFlow:P,loginWithFarcaster:w,closePrivyModal:K,createAnalyticsEvent:C}=O(),[A,Q]=Z.useState(void 0),[L,t]=Z.useState(!1),[W,r]=Z.useState(!1),S=Z.useRef([]),T=P(),_=T?.meta.connectUri;return Z.useEffect(()=>{let D=Date.now(),F=setInterval(async()=>{let R=await T.pollForReady.execute(),i=Date.now()-D;if(R){clearInterval(F),t(!0);try{await w(),r(!0)}catch(V){let I={retryable:!1,message:"Authentication failed"};if(V?.privyErrorCode===z.ALLOWLIST_REJECTED)return void Y("AllowlistRejectionScreen");if(V?.privyErrorCode===z.USER_LIMIT_REACHED)return console.error(new u(V).toString()),void Y("UserLimitReachedScreen");if(V?.privyErrorCode===z.USER_DOES_NOT_EXIST)return void Y("AccountNotFoundScreen");if(V?.privyErrorCode===z.LINKED_TO_ANOTHER_USER)I.detail=V.message??"This account has already been linked to another user.";else{if(V?.privyErrorCode===z.ACCOUNT_TRANSFER_REQUIRED&&V.data?.data?.nonce)return $({accountTransfer:{nonce:V.data?.data?.nonce,account:V.data?.data?.subject,displayName:V.data?.data?.account?.displayName,linkMethod:"farcaster",embeddedWalletAddress:V.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:V.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void Y("LinkConflictScreen");V?.privyErrorCode===z.INVALID_CREDENTIALS?(I.retryable=!0,I.detail="Something went wrong. Try again."):V?.privyErrorCode===z.TOO_MANY_REQUESTS&&(I.detail="Too many requests. Please wait before trying again.")}Q(I)}}else i>120000&&(clearInterval(F),Q({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))},2000);return()=>{clearInterval(F),S.current.forEach((R)=>clearTimeout(R))}},[]),Z.useEffect(()=>{if(B&&q&&W&&J){if(x?.legal.requireUsersAcceptTerms&&!J.hasAcceptedTerms){let D=setTimeout(()=>{Y("AffirmativeConsentScreen")},g);return()=>clearTimeout(D)}W&&(s(J,x.embeddedWallets)?S.current.push(setTimeout(()=>{$({createWallet:{onSuccess:()=>{},onFailure:(D)=>{console.error(D),C({eventName:"embedded_wallet_creation_failure_logout",payload:{error:D,screen:"FarcasterConnectStatusScreen"}}),M()},callAuthOnSuccessOnClose:!0}}),Y("EmbeddedWalletOnAccountCreateScreen")},g)):S.current.push(setTimeout(()=>K({shouldCallAuthOnSuccess:!0,isSuccess:!0}),g)))}},[W,B,q,J]),G(zq,{connectUri:_,loading:L,success:W,errorMessage:A,onBack:H?U:void 0,onClose:K,onOpenFarcaster:()=>{_&&(window.location.href=_)}})}},Bq=X.div`
  margin-top: 24px;
`,Hq=X.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,Mq=X.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,Uq=X.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,$q=X.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,xq=X.div`
  position: relative;
  width: 82px;
  height: 82px;
`;export{Fq as default,zq as FarcasterConnectStatusView,Fq as FarcasterConnectStatusScreen};
