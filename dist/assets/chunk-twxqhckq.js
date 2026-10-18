import{bb as U}from"./chunk-t18sfhaz.js";import{Vd as R}from"./chunk-ggq1psec.js";import{Yd as P}from"./chunk-dvgdxjsh.js";import{ye as S}from"./chunk-g20e8g1g.js";import{Kf as I,Of as N}from"./chunk-habw07dy.js";import{pg as O}from"./chunk-x6g0a0qc.js";import{Wo as G}from"./chunk-dxjv5qr6.js";import{Au as Z,Bu as E,Cu as z,Du as J}from"./chunk-0y5gb12m.js";import{EH as X}from"./chunk-dgwf5jrz.js";var K=X(Z(),1);var f=G(R)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,x=G.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,y=G.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,A=G.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,B=G(U)`
  text-align: left;
  margin-bottom: 0.5rem;
`,D=G(P)`
  margin-top: 0.25rem;
`,F=G(O)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,_=({errMsg:Q,balance:$,address:k,className:V,title:v,showCopyButton:W=!1})=>{let[T,C]=K.useState(!1);return K.useEffect(()=>{if(T){let Y=setTimeout(()=>C(!1),3000);return()=>clearTimeout(Y)}},[T]),J("div",{children:[v&&z(B,{children:v}),z(f,{className:V,$state:Q?"error":void 0,children:J(x,{children:[J(y,{children:[z(S,{address:k,showCopyIcon:!1}),$!==void 0&&z(A,{children:$})]}),W&&z(F,{onClick:function(Y){Y.stopPropagation(),navigator.clipboard.writeText(k).then(()=>C(!0)).catch(console.error)},size:"sm",children:J(E,T?{children:["Copied",z(I,{size:14})]}:{children:["Copy",z(N,{size:14})]})})]})}),Q&&z(D,{children:Q})]})};
export{_ as ab};
