import{La as f}from"./chunk-3kptv2hv.js";import{Ma as O}from"./chunk-842f6pgc.js";import{vb as P}from"./chunk-dd6hnjg5.js";import{fc as U}from"./chunk-aagm961e.js";import{wf as Q}from"./chunk-x1kejvva.js";import"./chunk-tj10rwq1.js";import"./chunk-7h4dat7a.js";import"./chunk-x6g0a0qc.js";import"./chunk-ajc23y29.js";import{Uo as k}from"./chunk-7qzdshjv.js";import{Wo as W,_o as L}from"./chunk-dxjv5qr6.js";import{lr as d}from"./chunk-bnfzemeq.js";import"./chunk-vkwhypcn.js";import"./chunk-88dt3s9b.js";import"./chunk-37sgv7h3.js";import{Kt as H,ou as T,ut as F}from"./chunk-g0zvh043.js";import"./chunk-6etmxz3n.js";import{Au as v,Cu as E,Du as D}from"./chunk-0y5gb12m.js";import"./chunk-febpbmcg.js";import"./chunk-4zec644k.js";import"./chunk-0e590d22.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import{EH as h}from"./chunk-dgwf5jrz.js";var N=h(v(),1),A=h(d(),1);var b="#8a63d2",w=({appName:G,loading:R,success:K,errorMessage:z,connectUri:I,onBack:V,onClose:$,onOpenFarcaster:X})=>E(Q,A.isMobile||R?A.isIOS?{title:z?z.message:"Add a signer to Farcaster",subtitle:z?z.detail:`This will allow ${G} to add casts, likes, follows, and more on your behalf.`,icon:P,iconVariant:"loading",iconLoadingStatus:{success:K,fail:!!z},primaryCta:I&&X?{label:"Open Farcaster app",onClick:X}:void 0,onBack:V,onClose:$,watermark:!0}:{title:z?z.message:"Requesting signer from Farcaster",subtitle:z?z.detail:"This should only take a moment",icon:P,iconVariant:"loading",iconLoadingStatus:{success:K,fail:!!z},onBack:V,onClose:$,watermark:!0,children:I&&A.isMobile&&E(x,{children:E(O,{text:"Take me to Farcaster",url:I,color:b})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${G} to add casts, likes, follows, and more on your behalf.`,onBack:V,onClose:$,watermark:!0,children:D(C,{children:[E(u,{children:I?E(U,{url:I,size:275,squareLogoElement:P}):E(o,{children:E(L,{})})}),D(i,{children:[E(j,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),I&&E(f,{text:I,itemName:"link",color:b})]})]})}),x=W.div`
  margin-top: 24px;
`,C=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,u=W.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,i=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,j=W.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,o=W.div`
  position: relative;
  width: 82px;
  height: 82px;
`,Iz={component:()=>{let{lastScreen:G,navigateBack:R,data:K}=k(),z=T(),{requestFarcasterSignerStatus:I,closePrivyModal:V}=F(),[$,X]=N.useState(void 0),[y,J]=N.useState(!1),[l,Z]=N.useState(!1),_=N.useRef([]),q=K?.farcasterSigner;N.useEffect(()=>{let S=Date.now(),Y=setInterval(async()=>{if(!q?.public_key)return clearInterval(Y),void X({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});q.status==="approved"&&(clearInterval(Y),J(!1),Z(!0),_.current.push(setTimeout(()=>V({shouldCallAuthOnSuccess:!1,isSuccess:!0}),H)));let M=await I(q?.public_key),g=Date.now()-S;M.status==="approved"?(clearInterval(Y),J(!1),Z(!0),_.current.push(setTimeout(()=>V({shouldCallAuthOnSuccess:!1,isSuccess:!0}),H))):g>300000?(clearInterval(Y),X({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):M.status==="revoked"&&(clearInterval(Y),X({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2000);return()=>{clearInterval(Y),_.current.forEach((M)=>clearTimeout(M))}},[]);let B=q?.status==="pending_approval"?q.signer_approval_url:void 0;return E(w,{appName:z.name,loading:y,success:l,errorMessage:$,connectUri:B,onBack:G?R:void 0,onClose:V,onOpenFarcaster:()=>{B&&(window.location.href=B)}})}};export{Iz as default,w as FarcasterSignerStatusView,Iz as FarcasterSignerStatusScreen};
