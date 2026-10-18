import{Kf as I,Of as J}from"./chunk-habw07dy.js";import{pg as K}from"./chunk-x6g0a0qc.js";import{Wo as z}from"./chunk-dxjv5qr6.js";import{tr as G}from"./chunk-vkwhypcn.js";import{Au as Y,Bu as F,Cu as b,Du as w}from"./chunk-0y5gb12m.js";import{EH as X}from"./chunk-dgwf5jrz.js";var C=X(Y(),1);var R=({address:q,showCopyIcon:P,url:Q,className:T})=>{let[v,V]=C.useState(!1);function W(E){E.stopPropagation(),navigator.clipboard.writeText(q).then(()=>V(!0)).catch(console.error)}return C.useEffect(()=>{if(v){let E=setTimeout(()=>V(!1),3000);return()=>clearTimeout(E)}},[v]),w(Z,Q?{children:[b(k,{title:q,className:T,href:`${Q}/address/${q}`,target:"_blank",children:G(q)}),P&&b(K,{onClick:W,size:"sm",style:{gap:"0.375rem"},children:w(F,v?{children:["Copied",b(I,{size:16})]}:{children:["Copy",b(J,{size:16})]})})]}:{children:[b($,{title:q,className:T,children:G(q)}),P&&b(K,{onClick:W,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:w(F,v?{children:["Copied",b(I,{size:14})]}:{children:["Copy",b(J,{size:14})]})})]})},Z=z.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,$=z.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,k=z.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export{R as ye};
