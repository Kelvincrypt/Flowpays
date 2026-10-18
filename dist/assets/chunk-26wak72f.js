import{Kf as N,Of as O}from"./chunk-habw07dy.js";import{Wo as z}from"./chunk-dxjv5qr6.js";import{Au as Y,Bu as H,Cu as k,Du as E}from"./chunk-0y5gb12m.js";import{EH as X}from"./chunk-dgwf5jrz.js";var J=X(Y(),1);var I=z.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,P=z.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,S=z(N)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,V=z(O)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function b({children:q,iconOnly:F,value:A,hideCopyIcon:B,onCopy:G,iconSize:w=14,...D}){let[W,K]=J.useState(!1);return E(I,{...D,onClick:()=>{navigator.clipboard.writeText(A||(typeof q=="string"?q:"")).then(()=>G?.()).catch(console.error),K(!0),setTimeout(()=>K(!1),1500)},children:[q," ",W?E(P,{children:[k(S,{size:w})," ",!F&&"Copied"]}):!B&&k(V,{size:w})]})}var g=({value:q,includeChildren:F,children:A,...B})=>{let[G,w]=J.useState(!1),D=()=>{navigator.clipboard.writeText(q).catch(console.error),w(!0),setTimeout(()=>w(!1),1500)};return E(H,{children:[F?k(I,{...B,onClick:D,children:A}):k(H,{children:A}),k(I,{...B,onClick:D,children:G?k(P,{children:k(S,{})}):k(V,{})})]})};
export{b as gc,g as hc};
