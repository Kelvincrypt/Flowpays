import{Wd as I}from"./chunk-psbrk9sm.js";import{ng as v,sg as x}from"./chunk-x6g0a0qc.js";import{do as u}from"./chunk-cp7qnsst.js";import{Wo as $}from"./chunk-dxjv5qr6.js";import{$s as D,Js as Z,Vs as G,Xs as T,Zs as _,_s as k,at as P,ou as h}from"./chunk-g0zvh043.js";import{Au as p,Bu as U,Cu as b,Du as V}from"./chunk-0y5gb12m.js";import{EH as j}from"./chunk-dgwf5jrz.js";var f=j(p(),1);var N=({value:J,onChange:W})=>b("select",{value:J,onChange:W,children:k.map((F)=>V("option",{value:F.code,children:[F.code," +",F.callCode]},F.code))}),o=f.forwardRef((J,W)=>{let F=h(),[K,L]=f.useState(!1),{accountType:B}=u(),[X,g]=f.useState(""),[Q,C]=f.useState(J.defaultCountry??F?.intl.defaultCountry??"US"),l=G(X,Q),q=_(Q),y=D(Q),d=Z(Q),w=!l,[z,E]=f.useState(!1),i=d.length,M=(O)=>{let A=O.target.value;C(A),g(""),J.onChange&&J.onChange({rawPhoneNumber:X,qualifiedPhoneNumber:T(X,A),countryCode:A,isValid:G(X,Q)})},R=(O,A)=>{try{let H=O.replace(/\D/g,"")===X.replace(/\D/g,"")?O:q.input(O);g(H),J.onChange&&J.onChange({rawPhoneNumber:H,qualifiedPhoneNumber:T(O,A),countryCode:A,isValid:G(O,A)})}catch(H){console.error("Error processing phone number:",H)}},Y=()=>{E(!0);let O=T(X,Q);J.onSubmit({rawPhoneNumber:X,qualifiedPhoneNumber:O,countryCode:Q,isValid:G(X,Q)}).finally(()=>E(!1))};return f.useEffect(()=>{if(J.defaultValue){let O=P(J.defaultValue);q.reset(),M({target:{value:O.countryCode}}),R(O.phone,O.countryCode)}},[J.defaultValue]),V(U,{children:[b(c,{children:V(m,{$callingCodeLength:i,$stacked:J.stacked,children:[b(N,{value:Q,onChange:M}),b("input",{ref:W,id:"phone-number-input",className:"login-method-button",type:"tel",placeholder:y,onFocus:()=>L(!0),onChange:(O)=>{R(O.target.value,Q)},onKeyUp:(O)=>{O.key==="Enter"&&Y()},value:X,autoComplete:"tel"}),B!=="phone"||K||J.hideRecent?J.stacked||J.noIncludeSubmitButton?b("span",{}):b(x,{isSubmitting:z,onClick:Y,disabled:w,children:"Submit"}):b(I,{color:"gray",children:"Recent"})]})}),J.stacked&&!J.noIncludeSubmitButton?b(v,{loading:z,loadingText:null,onClick:Y,disabled:w,children:"Submit"}):null]})}),c=$.div`
  width: 100%;
`,m=$.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${(J)=>J.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${(J)=>J.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${(J)=>J.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${(J)=>J.$stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`;
export{o as wb};
