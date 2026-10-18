import{Zd as t0}from"./chunk-2g7rwkrw.js";import{_d as a0}from"./chunk-z116x22n.js";import{$d as T}from"./chunk-d1r04sja.js";import{ae as e}from"./chunk-vfh6bsr1.js";import{De as l0}from"./chunk-v8yp5de1.js";import{wf as s}from"./chunk-x1kejvva.js";import"./chunk-tj10rwq1.js";import"./chunk-7h4dat7a.js";import"./chunk-x6g0a0qc.js";import"./chunk-t795qshv.js";import"./chunk-59n0ebnf.js";import"./chunk-sm1pt66h.js";import"./chunk-zbkskpm6.js";import"./chunk-vdszn4dp.js";import"./chunk-cp7qnsst.js";import"./chunk-75vpkpdc.js";import"./chunk-8h44c1p6.js";import"./chunk-vt3prnt7.js";import"./chunk-dzp8vngs.js";import"./chunk-37k4fp0g.js";import{Uo as g}from"./chunk-7qzdshjv.js";import{Wo as J}from"./chunk-dxjv5qr6.js";import"./chunk-cmzq8e3k.js";import"./chunk-jahdzk1g.js";import"./chunk-640n8t3d.js";import"./chunk-7xcd2g77.js";import"./chunk-7f3mjpxv.js";import"./chunk-33gf305j.js";import{lr as d0}from"./chunk-bnfzemeq.js";import"./chunk-h502gd9e.js";import"./chunk-vkwhypcn.js";import{Kr as z,Qr as B,Ur as A}from"./chunk-88dt3s9b.js";import"./chunk-37sgv7h3.js";import{Kt as M,ou as j,su as _,ut as D}from"./chunk-g0zvh043.js";import"./chunk-6etmxz3n.js";import{Au as O,Cu as a,Du as h}from"./chunk-0y5gb12m.js";import"./chunk-febpbmcg.js";import"./chunk-hd1rrdpg.js";import"./chunk-s5t451sg.js";import"./chunk-4zec644k.js";import"./chunk-0e590d22.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import{EH as I}from"./chunk-dgwf5jrz.js";var Y=I(O(),1);function n0({title:t,titleId:Z,...k},f){return Y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:f,"aria-labelledby":Z},k),t?Y.createElement("title",{id:Z},t):null,Y.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))}var i0=Y.forwardRef(n0),P=i0;var R=I(O(),1),c0=I(d0(),1);var R0=({contactMethod:t,authFlow:Z,emailDomain:k,appName:f="Privy",whatsAppEnabled:U=!1,onBack:K,onCodeSubmit:$,onResend:L,errorMessage:q,success:F=!1,resendCountdown:W=0,onInvalidInput:y,onClearError:u})=>{let[r,m]=R.useState(v);R.useEffect(()=>{q||m(v)},[q]);let V=async(G)=>{G.preventDefault();let c=G.currentTarget.value.replace(" ","");if(c==="")return;if(isNaN(Number(c)))return void y?.("Code should be numeric");u?.();let x=Number(G.currentTarget.name?.charAt(5)),i=[...c||[""]].slice(0,o-x),d=[...r.slice(0,x),...i,...r.slice(x+i.length)];m(d);let X=Math.min(Math.max(x+i.length,0),o-1);if(!isNaN(Number(G.currentTarget.value)))document.querySelector(`input[name=code-${X}]`)?.focus();if(d.every((p)=>p&&!isNaN(+p)))document.querySelector(`input[name=code-${X}]`)?.blur(),await $?.(d.join(""))};return a(s,{title:"Enter confirmation code",subtitle:h("span",Z==="email"?{children:["Please check ",a(S,{children:t})," for an email from"," ",k??"privy.io"," and enter your code below."]}:{children:["Please check ",a(S,{children:t})," for a",U?" WhatsApp":""," message from ",f," and enter your code below."]}),icon:Z==="email"?t0:a0,onBack:K,showBack:!0,helpText:h(x0,{children:[h("span",{children:["Didn't get ",Z==="email"?"an email":"a message","?"]}),W?h(z0,{children:[a(P,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),a("span",{children:"Code sent"})]}):a(e,{as:"button",size:"sm",onClick:L,children:"Resend code"})]}),children:a(Z0,{children:a(l0,{children:h(f0,{children:[a("div",{children:r.map((G,c)=>a("input",{name:`code-${c}`,type:"text",value:r[c],onChange:V,onKeyUp:(x)=>{x.key==="Backspace"&&((i)=>{if(u?.(),m([...r.slice(0,i),"",...r.slice(i+1)]),i>0)document.querySelector(`input[name=code-${i-1}]`)?.focus()})(c)},inputMode:"numeric",autoFocus:c===0,pattern:"[0-9]",className:`${F?"success":""} ${q?"fail":""}`,autoComplete:c0.isMobile?"one-time-code":"off"},c))}),a(q0,{$fail:!!q,$success:F,children:a("span",{children:q==="Invalid or expired verification code"?"Incorrect code":q||(F?"Success!":"")})})]})})})})},o=6,v=Array(6).fill(""),H,b,p0=((H=p0||{})[H.RESET_AFTER_DELAY=0]="RESET_AFTER_DELAY",H[H.CLEAR_ON_NEXT_VALID_INPUT=1]="CLEAR_ON_NEXT_VALID_INPUT",H),r0=((b=r0||{})[b.EMAIL=0]="EMAIL",b[b.SMS=1]="SMS",b),C0={component:()=>{let{navigate:t,lastScreen:Z,navigateBack:k,setModalData:f,onUserCloseViaDialogOrKeybindRef:U}=g(),K=j(),{closePrivyModal:$,resendEmailCode:L,resendSmsCode:q,getAuthMeta:F,loginWithCode:W,updateWallets:y,createAnalyticsEvent:u}=D(),{authenticated:r,logout:m,user:V}=_(),{whatsAppEnabled:G}=j(),[c,x]=R.useState(!1),[i,d]=R.useState(null),[X,p]=R.useState(null),[C,w]=R.useState(0);U.current=()=>null;let Q=F()?.email?0:1,E=Q===0?F()?.email||"":F()?.phoneNumber||"",N=M-500;return R.useEffect(()=>{if(C){let n=setTimeout(()=>{w(C-1)},1000);return()=>clearTimeout(n)}},[C]),R.useEffect(()=>{if(r&&c&&V){if(K?.legal.requireUsersAcceptTerms&&!V.hasAcceptedTerms){let n=setTimeout(()=>{t("AffirmativeConsentScreen")},N);return()=>clearTimeout(n)}if(T(V,K.embeddedWallets)){let n=setTimeout(()=>{f({createWallet:{onSuccess:()=>{},onFailure:(l)=>{console.error(l),u({eventName:"embedded_wallet_creation_failure_logout",payload:{error:l,screen:"AwaitingPasswordlessCodeScreen"}}),m()},callAuthOnSuccessOnClose:!0}}),t("EmbeddedWalletOnAccountCreateScreen")},N);return()=>clearTimeout(n)}{y();let n=setTimeout(()=>$({shouldCallAuthOnSuccess:!0,isSuccess:!0}),M);return()=>clearTimeout(n)}}},[r,c,V]),R.useEffect(()=>{if(i&&X===0){let n=setTimeout(()=>{d(null),p(null),document.querySelector("input[name=code-0]")?.focus()},1400);return()=>clearTimeout(n)}},[i,X]),a(R0,{contactMethod:E,authFlow:Q===0?"email":"sms",emailDomain:K?.appearance.emailDomain,appName:K?.name,whatsAppEnabled:G,onBack:()=>k(),onCodeSubmit:async(n)=>{try{await W(n),x(!0)}catch(l){if(l instanceof z&&l.privyErrorCode===B.INVALID_CREDENTIALS)d("Invalid or expired verification code"),p(0);else if(l instanceof z&&l.privyErrorCode===B.CANNOT_LINK_MORE_OF_TYPE)d(l.message);else{if(l instanceof z&&l.privyErrorCode===B.USER_LIMIT_REACHED)return console.error(new A(l).toString()),void t("UserLimitReachedScreen");if(l instanceof z&&l.privyErrorCode===B.USER_DOES_NOT_EXIST)return void t("AccountNotFoundScreen");if(l instanceof z&&l.privyErrorCode===B.LINKED_TO_ANOTHER_USER)return f({errorModalData:{error:l,previousScreen:Z??"AwaitingPasswordlessCodeScreen"}}),void t("ErrorScreen",!1);if(l instanceof z&&l.privyErrorCode===B.DISALLOWED_PLUS_EMAIL)return f({inlineError:{error:l}}),void t("ConnectOrCreateScreen",!1);if(l instanceof z&&l.privyErrorCode===B.ACCOUNT_TRANSFER_REQUIRED&&l.data?.data?.nonce)return f({accountTransfer:{nonce:l.data?.data?.nonce,account:E,displayName:l.data?.data?.account?.displayName,linkMethod:Q===0?"email":"sms",embeddedWalletAddress:l.data?.data?.otherUser?.embeddedWalletAddress}}),void t("LinkConflictScreen");d("Issue verifying code"),p(0)}}},onResend:async()=>{w(30),Q===0?await L():await q()},errorMessage:i||void 0,success:c,resendCountdown:C,onInvalidInput:(n)=>{d(n),p(1)},onClearError:()=>{X===1&&(d(null),p(null))}})}},Z0=J.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,f0=J.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0);
    }
    33% {
      transform: translate(-1px, 0);
    }
    67% {
      transform: translate(-1px, 0);
    }
    100% {
      transform: translate(1px, 0);
    }
  }
`,q0=J.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${(t)=>t.$success?"var(--privy-color-success-dark)":t.$fail?"var(--privy-color-error-dark)":"transparent"};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,x0=J.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,z0=J.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,S=J.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;export{C0 as default,R0 as AwaitingPasswordlessCodeScreenView,C0 as AwaitingPasswordlessCodeScreen};
