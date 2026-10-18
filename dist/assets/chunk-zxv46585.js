import{Kf as A,ig as B}from"./chunk-habw07dy.js";import{Wo as b}from"./chunk-dxjv5qr6.js";import{Au as E,Cu as k,Du as z}from"./chunk-0y5gb12m.js";import{EH as C}from"./chunk-dgwf5jrz.js";var w=C(E(),1);var K=b.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;b.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;var N=({children:q,variant:f="default",icon:h})=>{let v=()=>{switch(f){case"success":return"var(--privy-color-icon-success)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}};return z(G,{children:[k(F,{$variant:f,"data-variant":f,children:(()=>{if(h)return w.default.isValidElement(h)?w.default.cloneElement(h,{stroke:v(),strokeWidth:2}):h;switch(f){case"success":default:return k(A,{size:12,stroke:v(),strokeWidth:3});case"error":return k(B,{size:12,stroke:v(),strokeWidth:3})}})()}),q]})},F=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$variant:q})=>{switch(q){case"success":return"var(--privy-color-success-bg)";case"error":return"var(--privy-color-error-bg)";default:return"var(--privy-color-background-2)"}}};
  flex-shrink: 0;
`,G=b.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align all elements to the top */
  text-align: left;
  gap: 8px;

  && {
    a {
      color: var(--privy-color-accent);
    }
  }
`;
export{K as ad,N as bd};
