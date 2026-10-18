import{wf as b}from"./chunk-x1kejvva.js";import{Lf as Y}from"./chunk-habw07dy.js";import{Ul as U}from"./chunk-sm1pt66h.js";import{Wo as q}from"./chunk-dxjv5qr6.js";import{Au as S,Cu as D,Du as P}from"./chunk-0y5gb12m.js";import{EH as L}from"./chunk-dgwf5jrz.js";var G=L(S(),1);var o=({currency:E="usd",value:M,onChange:J,inputMode:K="decimal",autoFocus:V})=>{let[W,g]=G.useState("0"),[Z,j]=G.useState(null),_=G.useRef(null),f=G.useRef(null),N=M??W,B=U[E]?.symbol??"$",T=N.length>9?"small":N.length>6?"compact":"default";G.useLayoutEffect(()=>{let F=f.current?.offsetWidth;j(F?Math.ceil(F)+2:null)},[T,N]);let v=G.useCallback((F)=>{let I=F.target.value,X=(I=I.replace(/[^\d.]/g,"")).split(".");X.length>2&&(I=X[0]+"."+X.slice(1).join(""));let[C="",H]=I.split("."),O=C.replace(/^0+(?=\d)/,"");((I=H!==void 0?`${O||"0"}.${H}`:O||"0")===""||I===".")&&(I="0"),J?J(I):g(I)},[J]),A=G.useCallback((F)=>{!(["Delete","Backspace","Tab","Escape","Enter",".","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(F.key)||(F.ctrlKey||F.metaKey)&&["a","c","v","x"].includes(F.key.toLowerCase()))&&(F.key>="0"&&F.key<="9"||F.preventDefault())},[]);return P(h,{$size:T,onClick:()=>_.current?.focus(),children:[D(R,{$size:T,children:B}),D(m,{ref:_,type:"text",inputMode:K,value:N,onChange:v,onKeyDown:A,autoFocus:V,placeholder:"0","aria-label":"Amount",style:Z?{width:`${Z}px`}:void 0}),D(u,{ref:f,"aria-hidden":"true",children:N}),D(R,{$size:T,style:{opacity:0},children:B})]})},r=({selectedAsset:E,onEditSourceAsset:M})=>{let{icon:J}=U[E];return P(z,{onClick:M,children:[D(Q,{children:J}),D(l,{children:E.toLocaleUpperCase()}),D(w,{children:D(Y,{})})]})},h=q.span`
  position: relative;
  background-color: var(--privy-color-background);
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  && {
    color: var(--privy-color-foreground);
    font-size: ${({$size:E})=>E==="small"?"2.25rem":E==="compact"?"3rem":"3.75rem"};
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,m=q.input`
  appearance: none;
  align-self: flex-start;
  min-width: 1ch;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: left;
  caret-color: currentcolor;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`,u=q.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  pointer-events: none;
`,R=q.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: ${({$size:E})=>E==="small"?"0.75rem":E==="compact"?"0.875rem":"1rem"};
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,z=q.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,Q=q.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,l=q.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,w=q.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,e=({opts:E,isLoading:M,onSelectSource:J})=>D(b,{showClose:!1,showBack:!0,onBack:()=>J(E.source.selectedAsset),title:"Select currency",children:D(x,{children:E.source.assets.map((K)=>{let{icon:V,name:W}=U[K];return D(p,{onClick:()=>J(K),disabled:M,children:P(y,{children:[D($,{children:V}),P(c,{children:[D(k,{children:W}),D(n,{children:K.toLocaleUpperCase()})]})]})},K)})})}),x=q.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,p=q.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,y=q.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,$=q.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,c=q.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,k=q.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,n=q.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;
export{o as Na,r as Oa,e as Pa};
