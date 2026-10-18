import{p as N,q as S}from"./chunk-82d86v2z.js";import{La as y}from"./chunk-3kptv2hv.js";import{He as j}from"./chunk-v8yp5de1.js";import{wf as O}from"./chunk-x1kejvva.js";import"./chunk-tj10rwq1.js";import{Ff as x}from"./chunk-habw07dy.js";import"./chunk-7h4dat7a.js";import"./chunk-x6g0a0qc.js";import{Uo as p}from"./chunk-7qzdshjv.js";import{Wo as k}from"./chunk-dxjv5qr6.js";import{Qq as T,Rq as f}from"./chunk-640n8t3d.js";import"./chunk-33gf305j.js";import"./chunk-vkwhypcn.js";import"./chunk-88dt3s9b.js";import"./chunk-37sgv7h3.js";import{Kt as D,Ms as M,gu as L,su as i,ut as C}from"./chunk-g0zvh043.js";import{uu as v}from"./chunk-6etmxz3n.js";import{Au as o,Bu as E,Cu as J,Du as Q}from"./chunk-0y5gb12m.js";import"./chunk-febpbmcg.js";import"./chunk-4zec644k.js";import"./chunk-0e590d22.js";import"./chunk-1pe80pyv.js";import"./chunk-cyrsscv1.js";import{MA as g,Tz as R}from"./chunk-zs038p3b.js";import"./chunk-ehzyk93j.js";import{EH as r}from"./chunk-dgwf5jrz.js";var X=r(o(),1);var n=k.img`
  && {
    height: ${(G)=>G.size==="sm"?"65px":"140px"};
    width: ${(G)=>G.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`,s=(G)=>{if(!R(G))return G;try{let I=g(G);return I.includes("�")?G:I}catch{return G}},t=(G)=>{try{let I=v.decode(G),P=new TextDecoder().decode(I);return P.includes("�")?G:P}catch{return G}},e=(G)=>{let{types:I,primaryType:P,...$}=G.typedData;return Q(E,{children:[J(PG,{data:$}),J(y,{text:(Y=G.typedData,JSON.stringify(Y,null,2)),itemName:"full payload to clipboard"})," "]});var Y},GG=({method:G,messageData:I,copy:P,iconUrl:$,isLoading:Y,success:B,walletProxyIsLoading:F,errorMessage:H,isCancellable:q,onSign:b,onCancel:U,onClose:z})=>J(O,{title:P.title,subtitle:P.description,showClose:!0,onClose:z,icon:x,iconVariant:"subtle",helpText:H?J(JG,{children:H}):void 0,primaryCta:{label:P.buttonText,onClick:b,disabled:Y||B||F,loading:Y},secondaryCta:q?{label:"Not now",onClick:U,disabled:Y||B||F}:void 0,watermark:!0,children:Q(j,{children:[$?J(n,{style:{alignSelf:"center"},size:"sm",src:$,alt:"app image"}):null,Q(IG,{children:[G==="personal_sign"&&J(A,{children:s(I)}),G==="eth_signTypedData_v4"&&J(e,{typedData:I}),G==="solana_signMessage"&&J(A,{children:t(I)})]})]})}),TG={component:()=>{let{authenticated:G}=i(),{initializeWalletProxy:I,closePrivyModal:P}=C(),{navigate:$,data:Y,onUserCloseViaDialogOrKeybindRef:B}=p(),[F,H]=X.useState(!0),[q,b]=X.useState(""),[U,z]=X.useState(),[W,h]=X.useState(null),[u,_]=X.useState(!1);X.useEffect(()=>{G||$("LandingScreen")},[G]),X.useEffect(()=>{I(L).then((V)=>{H(!1),V||(b("An error has occurred, please try again."),z(new f(new T(q,M.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:w,data:d,confirmAndSign:l,onSuccess:m,onFailure:c,uiOptions:Z}=Y.signMessage,a={title:Z?.title||"Sign message",description:Z?.description||"Signing this message will not cost you any fees.",buttonText:Z?.buttonText||"Sign and continue"},K=(V)=>{V?m(V):c(U||new f(new T("The user rejected the request.",M.E4001_USER_REJECTED_REQUEST.eipCode))),P({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{h(null),b(""),z(void 0)},200)};return B.current=()=>{K(W)},J(GG,{method:w,messageData:d,copy:a,iconUrl:Z?.iconUrl&&typeof Z.iconUrl=="string"?Z.iconUrl:void 0,isLoading:u,success:W!==null,walletProxyIsLoading:F,errorMessage:q,isCancellable:Z?.isCancellable,onSign:async()=>{_(!0),b("");try{let V=await l();h(V),_(!1),setTimeout(()=>{K(V)},D)}catch(V){console.error(V),b("An error has occurred, please try again."),z(new f(new T(q,M.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),_(!1)}},onCancel:()=>K(null),onClose:()=>K(W)})}},IG=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,JG=k.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,PG=k(S)`
  margin-top: 0;
`,A=k(N)`
  margin-top: 0;
`;export{TG as default,GG as SignRequestView,TG as SignRequestScreen};
