import{$c as q}from"./chunk-8mqt4jbh.js";import{rg as h}from"./chunk-x6g0a0qc.js";import{Wo as f,Yo as g}from"./chunk-dxjv5qr6.js";var D=f.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,E=f.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,F=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,G=f.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;f.div`
  font-size: 42px !important;
`;var u=f.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`,H=f(u)`
  && {
    font-size: 42px;
  }
`;f.button`
  cursor: pointer;
  padding-left: 4px;
`;var J=f.div`
  font-size: 18px;
`,K=f.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  /* we need this container to maintain a static height if there's no content */
  height: 20px;
`;f.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin: auto;
  }
`,f(q)`
  margin-top: 16px;
`;var v=g`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;f(h)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${v} 0.3s ease-in-out;
`;var M=f.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;
export{D as Pc,E as Qc,F as Rc,G as Sc,u as Tc,H as Uc,J as Vc,K as Wc,M as Xc};
