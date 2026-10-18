import{jg as H}from"./chunk-7h4dat7a.js";import{tg as D,vg as F}from"./chunk-x6g0a0qc.js";import{Wo as N,Zo as v}from"./chunk-dxjv5qr6.js";import{Au as W,Cu as I,Du as T}from"./chunk-0y5gb12m.js";import{EH as U}from"./chunk-dgwf5jrz.js";var P=U(W(),1);var _=N.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,B=N.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,L=N.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,M=N(D)`
  margin: 0 -8px;
`,S=N.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:G})=>G==="light"?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":G==="dark"?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,g=N.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`,k=N.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,u=N.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=N.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,b=N.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,q=N.div`
  background: ${({$variant:G})=>{switch(G){case"success":return"var(--privy-color-success-bg)";case"warning":return"var(--privy-color-warn)";case"error":return"var(--privy-color-error-bg)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,p=N.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,h=N.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,O=({children:G,...J})=>I(_,{children:I(B,{...J,children:G})}),l=N.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,x=N(F)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,c=N.div`
  height: 100%;
  width: ${({pct:G})=>G}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,d=({step:G})=>G?I(l,{children:I(c,{pct:Math.min(100,G.current/G.total*100)})}):null;O.Header=({title:G,subtitle:J,icon:Q,iconVariant:V,iconLoadingStatus:K,showBack:Y,onBack:Z,showInfo:$,onInfo:z,showClose:X,onClose:A,step:f,headerTitle:C,eyebrow:E,...R})=>T(L,{...R,children:[I(M,{backFn:Y?Z:void 0,infoFn:$?z:void 0,onClose:X?A:void 0,title:C,eyebrow:E,closeable:X}),(Q||V||G||J)&&T(k,{children:[Q||V?I(O.Icon,{icon:Q,variant:V,loadingStatus:K}):null,!(!G&&!J)&&T(u,{children:[G&&I(y,{children:G}),J&&I(b,{children:J})]})]}),f&&I(d,{step:f})]}),(O.Body=P.default.forwardRef(({children:G,...J},Q)=>I(S,{ref:Q,...J,children:G}))).displayName="Screen.Body",O.Footer=({children:G,...J})=>I(g,{id:"privy-content-footer-container",...J,children:G}),O.Actions=({children:G,...J})=>I(j,{...J,children:G}),O.HelpText=({children:G,...J})=>I(m,{...J,children:G}),O.FooterText=({children:G,...J})=>I(s,{...J,children:G}),O.Watermark=()=>I(x,{}),O.Icon=({icon:G,variant:J="subtle",loadingStatus:Q})=>J==="logo"&&G?I(p,typeof G=="string"?{children:I("img",{src:G,alt:""})}:P.default.isValidElement(G)?{children:G}:{children:P.default.createElement(G)}):J==="loading"?G?I(h,{children:T("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[I(v,{success:Q?.success,fail:Q?.fail}),typeof G=="string"?I("span",{style:{background:`url('${G}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):P.default.isValidElement(G)?P.default.cloneElement(G,{style:{width:"38px",height:"38px"}}):P.default.createElement(G,{style:{width:"38px",height:"38px"}})]})}):I(q,{$variant:J,children:I(H,{size:"64px"})}):I(q,{$variant:J,children:G&&(typeof G=="string"?I("img",{src:G,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):P.default.isValidElement(G)?G:P.default.createElement(G,{width:32,height:32,stroke:(()=>{switch(J){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});var j=N.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,m=N.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 13px;
    line-height: 20px;

    & a {
      text-decoration: underline;
    }
  }
`,s=N.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; /* 11px */
    line-height: 1rem; /* 16px */
  }
`;
export{O as xf};
