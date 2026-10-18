import{Ae as E}from"./chunk-mwrfap4b.js";import{Vo as w,Wo as A,Yo as D}from"./chunk-dxjv5qr6.js";import{Cu as z}from"./chunk-0y5gb12m.js";var Q=({children:f,color:q,isLoading:b,isPulsing:v,...F})=>z(G,{$color:q,$isLoading:b,$isPulsing:v,...F,children:f}),G=A.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${(f)=>{let q,b;f.$color==="green"&&(q="var(--privy-color-success-dark)",b="var(--privy-color-success-light)"),f.$color==="red"&&(q="var(--privy-color-error)",b="var(--privy-color-error-light)"),f.$color==="gray"&&(q="var(--privy-color-foreground-2)",b="var(--privy-color-background-2)");let v=D`
      from, to {
        background-color: ${b};
      }

      50% {
        background-color: rgba(${b}, 0.8);
      }
    `;return w`
      color: ${q};
      background-color: ${b};
      ${f.$isPulsing&&w`
        animation: ${v} 3s linear infinite;
      `};
    `}}

  ${E}
`;
export{Q as Wd};
