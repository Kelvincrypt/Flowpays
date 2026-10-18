import{Wo as q}from"./chunk-dxjv5qr6.js";import{Au as A,Cu as h}from"./chunk-0y5gb12m.js";import{EH as z}from"./chunk-dgwf5jrz.js";var v=z(A(),1);var F=(b)=>{let[w,f]=v.useState(!1);return h(B,{color:b.color,href:b.url,target:"_blank",rel:"noreferrer noopener",onClick:()=>{f(!0),setTimeout(()=>f(!1),1500)},justOpened:w,children:b.text})},B=q.a`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${(b)=>b.justOpened?"var(--privy-color-foreground)":b.color||"var(--privy-color-foreground-3)"};
    font-weight: ${(b)=>b.justOpened?500:"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${(b)=>b.justOpened?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: var(--privy-color-foreground);
      font-weight: 500;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
export{F as Ma};
