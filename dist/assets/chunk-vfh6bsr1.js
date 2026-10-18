import{Wo as w}from"./chunk-dxjv5qr6.js";import{Cu as v}from"./chunk-0y5gb12m.js";var F=w.a`
  && {
    color: ${({$variant:b})=>b==="underlined"?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
    font-weight: 400;
    text-decoration: ${({$variant:b})=>b==="underlined"?"underline":"var(--privy-link-navigation-decoration, none)"};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${({$disabled:b})=>b?"not-allowed":"pointer"};
    opacity: ${({$disabled:b})=>b?0.5:1};

    font-size: ${({$size:b})=>{switch(b){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${({$size:b})=>{switch(b){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${({$variant:b,$disabled:f})=>b==="underlined"?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({$disabled:b})=>b?"none":"underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({$variant:b,$disabled:f})=>f?b==="underlined"?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      box-shadow: var(--privy-shadow-focus-ring);
      border-radius: 2px;
    }
  }
`,I=({size:b="md",variant:f="navigation",disabled:h=!1,as:z,children:A,onClick:C,...E})=>v(F,{as:z,$size:b,$variant:f,$disabled:h,onClick:(q)=>{h?q.preventDefault():C?.(q)},...E,children:A});
export{I as ae};
