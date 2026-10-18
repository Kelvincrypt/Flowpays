import{mh as F,nh as G,oh as q,ph as H,qh as I,rh as y}from"./chunk-bpkcqqr4.js";import"./chunk-dgwf5jrz.js";var{defineProperty:J,getOwnPropertyDescriptor:K}=Object,z=(x,A,C,B)=>{for(var k=B>1?void 0:B?K(A,C):A,D=x.length-1,E;D>=0;D--)(E=x[D])&&(k=(B?E(A,C,k):E(k))||k);return B&&k&&J(A,C,k),k},b=class extends H{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var x;return G`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${b.weightsMap.get((x=this.weight)!=null?x:"regular")}
    </svg>`}};b.weightsMap=new Map([["thin",q`<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"/>`],["light",q`<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"/>`],["regular",q`<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>`],["bold",q`<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"/>`],["fill",q`<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"/>`],["duotone",q`<path d="M208,96l-80,80L48,96Z" opacity="0.2"/><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"/>`]]);b.styles=F`
    :host {
      display: contents;
    }
  `;z([y({type:String,reflect:!0})],b.prototype,"size",2);z([y({type:String,reflect:!0})],b.prototype,"weight",2);z([y({type:String,reflect:!0})],b.prototype,"color",2);z([y({type:Boolean,reflect:!0})],b.prototype,"mirrored",2);b=z([I("ph-caret-down")],b);export{b as PhCaretDown};
