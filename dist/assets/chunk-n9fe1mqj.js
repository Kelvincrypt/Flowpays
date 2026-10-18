import{Na as f,Oa as n,Pa as u}from"./chunk-jynrt1wf.js";import{Qa as a}from"./chunk-5d8qjh0q.js";import{hc as v}from"./chunk-26wak72f.js";import{wf as D}from"./chunk-x1kejvva.js";import"./chunk-tj10rwq1.js";import{Df as T,Kf as C,Uf as d,fg as j}from"./chunk-habw07dy.js";import"./chunk-7h4dat7a.js";import"./chunk-x6g0a0qc.js";import{Vl as y}from"./chunk-sm1pt66h.js";import{pm as m}from"./chunk-zbkskpm6.js";import"./chunk-vdszn4dp.js";import"./chunk-8h44c1p6.js";import"./chunk-vt3prnt7.js";import{Uo as l}from"./chunk-7qzdshjv.js";import{Wo as A}from"./chunk-dxjv5qr6.js";import"./chunk-jahdzk1g.js";import"./chunk-7xcd2g77.js";import{lr as e}from"./chunk-bnfzemeq.js";import"./chunk-h502gd9e.js";import"./chunk-vkwhypcn.js";import"./chunk-88dt3s9b.js";import"./chunk-37sgv7h3.js";import{lt as P,su as h}from"./chunk-g0zvh043.js";import"./chunk-6etmxz3n.js";import{Au as t,Bu as k,Cu as z,Du as x}from"./chunk-0y5gb12m.js";import"./chunk-febpbmcg.js";import"./chunk-4zec644k.js";import"./chunk-0e590d22.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import{EH as W}from"./chunk-dgwf5jrz.js";var X=W(t(),1);var i=W(e(),1);var qq=(q)=>{try{return q.location.origin}catch{return}},zq=({data:q,onClose:K})=>z(D,{showClose:!0,onClose:K,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:K},watermark:!1,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:z(Gq,{children:(y[q.deposit_instructions.asset]||[]).map(([O,$],F)=>{let Z=q.deposit_instructions[O];if(!Z||Array.isArray(Z))return null;let V=O==="asset"?Z.toUpperCase():Z,N=V.length>100?`${V.slice(0,9)}...${V.slice(-9)}`:V;return x(Hq,{children:[z(Jq,{children:$}),z(v,{value:V,includeChildren:i.isMobile,children:z(Kq,{children:N})})]},F)})})}),Gq=A.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,Hq=A.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,Jq=A.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,Kq=A.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`,Mq=({onClose:q})=>z(D,{showClose:!0,onClose:q,icon:T,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:q},watermark:!0}),Nq=({onClose:q,reason:K})=>{let O=K?K.charAt(0).toLowerCase()+K.slice(1):void 0;return z(D,{showClose:!0,onClose:q,icon:T,iconVariant:"error",title:"Identity verification failed",subtitle:O?`We can't complete identity verification because ${O}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:q},watermark:!0})},Oq=({onClose:q,email:K})=>z(D,{showClose:!0,onClose:q,icon:d,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:q},watermark:!0,children:x(a,{theme:"light",children:["You'll receive an email at ",K," once approved with instructions for completing your deposit."]})}),Qq=({onClose:q,onAcceptTerms:K,isLoading:O})=>z(D,{showClose:!0,onClose:q,icon:j,title:"Verify your identity to continue",subtitle:"Finish verification with Persona — it takes just a few minutes and requires a government ID.",helpText:x(k,{children:[`This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge's`," ",z("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",z("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:K,loading:O},watermark:!0}),Rq=({onClose:q})=>z(D,{showClose:!0,onClose:q,icon:C,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:!0},watermark:!0}),Vq=({opts:q,onClose:K,onBack:O,onEditSourceAsset:$,onSelectAmount:F,isLoading:Z})=>x(D,{showClose:!0,onClose:K,showBack:!!O,onBack:O,headerTitle:`Buy ${q.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:F,loading:Z},watermark:!0,children:[z(f,{currency:q.source.selectedAsset,inputMode:"decimal",autoFocus:!0}),z(n,{selectedAsset:q.source.selectedAsset,onEditSourceAsset:$})]}),Xq=({onClose:q,onBack:K,onAcceptTerms:O,onSelectAmount:$,onSelectSource:F,onEditSourceAsset:Z,opts:V,state:N,email:p,isLoading:M})=>N.status==="select-amount"?z(Vq,{onClose:q,onBack:K,onSelectAmount:$,onEditSourceAsset:Z,opts:V,isLoading:M}):N.status==="select-source-asset"?z(u,{onSelectSource:F,opts:V,isLoading:M}):N.status==="kyc-prompt"?z(Qq,{onClose:q,onAcceptTerms:O,opts:V,isLoading:M}):N.status==="kyc-incomplete"?z(Oq,{onClose:q,email:p}):N.status==="kyc-success"?z(Rq,{onClose:q}):N.status==="kyc-error"?z(Nq,{onClose:q,reason:N.reason}):N.status==="account-details"?z(zq,{onClose:q,data:N.data}):N.status==="create-customer-error"||N.status==="get-customer-error"?z(Mq,{onClose:q}):null,Eq={component:()=>{let{user:q}=h(),K=l().data;if(!K?.FundWithBankDepositScreen)throw Error("Missing data");let{onSuccess:O,onFailure:$,onBack:F,opts:Z,createOrUpdateCustomer:V,getCustomer:N,getOrCreateVirtualAccount:p}=K.FundWithBankDepositScreen,[M,U]=X.useState(Z),[I,G]=X.useState({status:"select-amount"}),[B,R]=X.useState(null),[s,J]=X.useState(!1),_=X.useRef(null),b=X.useCallback(async()=>{let H;J(!0),R(null);try{H=await N({kycRedirectUrl:window.location.origin})}catch(Q){if(!Q||typeof Q!="object"||!("status"in Q)||Q.status!==404)return G({status:"get-customer-error"}),R(Q),void J(!1)}if(!H)try{H=await V({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin})}catch(Q){return G({status:"create-customer-error"}),R(Q),void J(!1)}if(!H)return G({status:"create-customer-error"}),R(Error("Unable to create customer")),void J(!1);if(H.status==="not_started"&&H.kyc_url)return G({status:"kyc-prompt",kycUrl:H.kyc_url}),void J(!1);if(H.status==="not_started")return G({status:"get-customer-error"}),R(Error("Unexpected user state")),void J(!1);if(H.status==="rejected")return G({status:"kyc-error",reason:H.rejection_reasons?.[0]?.reason}),R(Error("User KYC rejected.")),void J(!1);if(H.status==="incomplete")return G({status:"kyc-incomplete"}),void J(!1);if(H.status!=="active")return G({status:"get-customer-error"}),R(Error("Unexpected user state")),void J(!1);H.status;try{let Q=await p({destination:M.destination,provider:M.provider,source:{asset:M.source.selectedAsset}});G({status:"account-details",data:Q})}catch(Q){return G({status:"create-customer-error"}),R(Q),void J(!1)}},[M]),g=X.useCallback(async()=>{if(R(null),J(!0),I.status!=="kyc-prompt")return R(Error("Unexpected state")),void J(!1);let H=m({location:I.kycUrl});if(await V({hasAcceptedTerms:!0}),!H)return R(Error("Unable to begin kyc flow.")),J(!1),void G({status:"create-customer-error"});_.current=new AbortController;let Q=await(async(Y,o)=>{let E=await P({operation:async()=>({done:qq(Y)===window.location.origin,closed:Y.closed}),until:({done:c,closed:r})=>c||r,delay:0,interval:500,attempts:360,signal:o});return E.status==="aborted"?(Y.close(),{status:"aborted"}):E.status==="max_attempts"?{status:"timeout"}:E.result.done?(Y.close(),{status:"redirected"}):{status:"closed"}})(H,_.current.signal);if(Q.status==="aborted")return;if(Q.status==="closed")return void J(!1);Q.status;let L=await P({operation:()=>N({}),until:(Y)=>Y.status==="active"||Y.status==="rejected",delay:0,interval:2000,attempts:60,signal:_.current.signal});if(L.status!=="aborted"){if(L.status==="max_attempts")return G({status:"kyc-incomplete"}),void J(!1);if(L.status,L.result.status==="rejected")return G({status:"kyc-error",reason:L.result.rejection_reasons?.[0]?.reason}),R(Error("User KYC rejected.")),void J(!1);if(L.result.status!=="active")return G({status:"kyc-incomplete"}),void J(!1);H.closed||H.close(),L.result.status;try{G({status:"kyc-success"});let Y=await p({destination:M.destination,provider:M.provider,source:{asset:M.source.selectedAsset}});G({status:"account-details",data:Y})}catch(Y){G({status:"create-customer-error"}),R(Y)}finally{J(!1)}}},[G,R,J,V,p,I,M,_]),S=X.useCallback((H)=>{G({status:"select-amount"}),U({...M,source:{...M.source,selectedAsset:H}})},[G,U]),w=X.useCallback(()=>{G({status:"select-source-asset"})},[G]);return z(Xq,{onClose:X.useCallback(async()=>{_.current?.abort(),!M.showBackButton||I.status!=="select-amount"&&I.status!=="select-source-asset"?B?$(B):await O():$(Error("User cancelled funding"))},[B,_,$,O,M.showBackButton,I.status]),onBack:F,opts:M,state:I,isLoading:s,email:q.email.address,onAcceptTerms:g,onSelectAmount:b,onSelectSource:S,onEditSourceAsset:w})}};export{Eq as default,Eq as FundWithBankDepositScreen};
