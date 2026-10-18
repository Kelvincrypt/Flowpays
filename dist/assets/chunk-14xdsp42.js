import{mh as E,nh as F,oh as q,ph as G,qh as H,rh as x}from"./chunk-bpkcqqr4.js";import"./chunk-dgwf5jrz.js";var{defineProperty:I,getOwnPropertyDescriptor:J}=Object,y=(w,z,B,A)=>{for(var k=A>1?void 0:A?J(z,B):z,C=w.length-1,D;C>=0;C--)(D=w[C])&&(k=(A?D(z,B,k):D(k))||k);return A&&k&&I(z,B,k),k},b=class extends G{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var w;return F`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${b.weightsMap.get((w=this.weight)!=null?w:"regular")}
    </svg>`}};b.weightsMap=new Map([["thin",q`<path d="M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"/>`],["light",q`<path d="M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"/>`],["regular",q`<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>`],["bold",q`<path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"/>`],["fill",q`<path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"/>`],["duotone",q`<path d="M160,48V208L80,128Z" opacity="0.2"/><path d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"/>`]]);b.styles=E`
    :host {
      display: contents;
    }
  `;y([x({type:String,reflect:!0})],b.prototype,"size",2);y([x({type:String,reflect:!0})],b.prototype,"weight",2);y([x({type:String,reflect:!0})],b.prototype,"color",2);y([x({type:Boolean,reflect:!0})],b.prototype,"mirrored",2);b=y([H("ph-caret-left")],b);export{b as PhCaretLeft};
