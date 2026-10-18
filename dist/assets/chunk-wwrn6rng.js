import{Wo as h}from"./chunk-dxjv5qr6.js";import{Bu as z,Cu as f,Du as w}from"./chunk-0y5gb12m.js";var D=({title:k,description:b,children:q,...v})=>f(A,{...v,children:w(z,{children:[f("h3",{children:k}),typeof b=="string"?f("p",{children:b}):b,q]})});h(D)`
  margin-bottom: 24px;
`;var I=({title:k,description:b,icon:q,children:v,...B})=>w(E,{...B,children:[q||null,f("h3",{children:k}),b&&typeof b=="string"?f("p",{children:b}):b,v]}),A=h.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,E=h(A)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;
export{D as ne,I as oe};
