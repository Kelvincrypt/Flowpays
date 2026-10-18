import{ad as U,bd as R}from"./chunk-zxv46585.js";import{wf as P}from"./chunk-x1kejvva.js";import{Af as h,dg as C,yf as b}from"./chunk-habw07dy.js";import{vm as S}from"./chunk-zbkskpm6.js";import{Uo as k}from"./chunk-7qzdshjv.js";import{Vo as A,Wo as q,ap as v}from"./chunk-dxjv5qr6.js";import{Jr as W,Qr as O}from"./chunk-88dt3s9b.js";import{su as _,ut as Q}from"./chunk-g0zvh043.js";import{Au as w,Cu as G,Du as K}from"./chunk-0y5gb12m.js";import{EH as L}from"./chunk-dgwf5jrz.js";var M=L(w(),1);var x=({passkeys:J,name:V,isLoading:f,errorReason:z,success:X,expanded:F,onLinkPasskey:E,onUnlinkPasskey:$,onExpand:Y,onBack:D,onClose:H})=>X?G(P,{title:"Passkeys updated",icon:h,iconVariant:"success",primaryCta:{label:"Done",onClick:H},onClose:H,watermark:!0}):F?G(P,{icon:b,title:"Your passkeys",onBack:D,onClose:H,watermark:!0,children:G(I,{passkeys:J,expanded:F,onUnlink:$,onExpand:Y})}):K(P,{icon:b,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:E,loading:f},onClose:H,watermark:!0,helpText:z||void 0,children:[J.length===0?G(d,{}):G(g,{children:G(I,{passkeys:J,expanded:F,onUnlink:$,onExpand:Y})}),V?K(j,{children:[G(p,{children:"New Passkey Name"}),G(u,{children:V})]}):null]}),g=q.div`
  margin-bottom: 0.75rem;
`,j=q.div`
  margin-top: 0.25rem;
`,p=q.div`
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,u=q.div`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
`,I=({passkeys:J,expanded:V,onUnlink:f,onExpand:z})=>{let[X,F]=M.useState([]),E=V?J.length:2;return K("div",{children:[G(c,{children:"Your passkeys"}),K(l,{children:[J.slice(0,E).map(($)=>{return K(r,{children:[K("div",{children:[G(m,{children:(Y=$,Y.authenticatorName?Y.createdWithBrowser?`${Y.authenticatorName} on ${Y.createdWithBrowser}`:Y.authenticatorName:Y.createdWithBrowser?Y.createdWithOs?`${Y.createdWithBrowser} on ${Y.createdWithOs}`:`${Y.createdWithBrowser}`:"Unknown device")}),K(t,{children:["Last used:"," ",($.latestVerifiedAt??$.firstVerifiedAt)?.toLocaleString()??"N/A"]})]}),G(o,{disabled:X.includes($.credentialId),onClick:()=>(async(D)=>{F((H)=>H.concat([D])),await f(D),F((H)=>H.filter((N)=>N!==D))})($.credentialId),children:X.includes($.credentialId)?G(v,{}):G(C,{size:16})})]},$.credentialId);var Y}),J.length>2&&!V&&G(i,{onClick:z,children:"View all"})]})]})},d=()=>K(U,{style:{color:"var(--privy-color-foreground)"},children:[G(R,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),G(R,{children:"Takes seconds to set up and use"}),G(R,{children:"Use your passkey to verify transactions and login to your account"})]}),MG={component:()=>{let{user:J}=_(),{unlink:V}=S(),{linkWithPasskey:f,closePrivyModal:z}=Q(),{data:X}=k(),F=J?.linkedAccounts.filter((Z)=>Z.type==="passkey"),[E,$]=M.useState(!1),[Y,D]=M.useState(""),[H,N]=M.useState(!1),[y,T]=M.useState(!1);return M.useEffect(()=>{F.length===0&&T(!1)},[F.length]),G(x,{passkeys:F,name:X?.passkeyAuthModalData?.name,isLoading:E,errorReason:Y,success:H,expanded:y,onLinkPasskey:()=>{$(!0),f({name:X?.passkeyAuthModalData?.name}).then(()=>N(!0)).catch((Z)=>{if(Z instanceof W){if(Z.privyErrorCode===O.CANNOT_LINK_MORE_OF_TYPE)return void D("Cannot link more passkeys to account.");if(Z.privyErrorCode===O.PASSKEY_NOT_ALLOWED)return void D("Passkey request timed out or rejected by user.")}D("Unknown error occurred.")}).finally(()=>{$(!1)})},onUnlinkPasskey:async(Z)=>($(!0),await V({credentialId:Z}).then(()=>N(!0)).catch((B)=>{B instanceof W&&B.privyErrorCode===O.MISSING_MFA_CREDENTIALS?D("Cannot unlink a passkey enrolled in MFA"):D("Unknown error occurred.")}).finally(()=>{$(!1)})),onExpand:()=>T(!0),onBack:()=>T(!1),onClose:()=>z()})}},VG=q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`,a=A`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,i=q.button`
  ${a}
`,l=q.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0 0;
  flex-grow: 1;
  width: 100%;
`,c=q.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`,m=q.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,t=q.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,r=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid var(--privy-color-border-default) !important;
  width: 100%;
  height: 5em;
`,n=A`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,o=q.button`
  ${n}
`;export{x as Yc,MG as Zc,VG as _c,i as $c};
