import{Wo as v}from"./chunk-dxjv5qr6.js";import{Cu as b,Du as q}from"./chunk-0y5gb12m.js";var D=({data:k})=>{let f=(h)=>typeof h=="object"&&h!==null?b(F,{children:Object.entries(h).map(([w,A])=>q("li",{children:[q("strong",{children:[w,":"]})," ",f(A)]},w))}):b("span",{children:String(h)});return b("div",{children:f(k)})},E=v.div`
  margin-top: 1.5rem;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  padding: 12px;
  text-align: left;
  max-height: 310px;
  overflow: scroll;
  white-space: pre-wrap;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground);
  line-height: 1.5;

  /* hide the scrollbars */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`,F=v.ul`
  margin-left: 12px !important;
  white-space: nowrap;

  &:first-child {
    margin-left: 0 !important;
  }

  strong {
    font-weight: 500 !important;
  }
`,K=({data:k,className:f})=>b(E,{className:f,children:b(D,{data:k})});
export{E as p,K as q};
