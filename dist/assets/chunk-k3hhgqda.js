import{mh as E,nh as F,oh as q,ph as G,qh as I,rh as x}from"./chunk-bpkcqqr4.js";import"./chunk-dgwf5jrz.js";var{defineProperty:J,getOwnPropertyDescriptor:K}=Object,y=(w,z,B,A)=>{for(var k=A>1?void 0:A?K(z,B):z,C=w.length-1,D;C>=0;C--)(D=w[C])&&(k=(A?D(z,B,k):D(k))||k);return A&&k&&J(z,B,k),k},b=class extends G{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var w;return F`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${b.weightsMap.get((w=this.weight)!=null?w:"regular")}
    </svg>`}};b.weightsMap=new Map([["thin",q`<path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V92H36V56A4,4,0,0,1,40,52ZM216,204H40a4,4,0,0,1-4-4V100H220V200A4,4,0,0,1,216,204Z"/>`],["light",q`<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V90H38V56A2,2,0,0,1,40,54ZM216,202H40a2,2,0,0,1-2-2V102H218v98A2,2,0,0,1,216,202Z"/>`],["regular",q`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"/>`],["bold",q`<path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V84H44V60ZM44,196V108H212v88Z"/>`],["fill",q`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Z"/>`],["duotone",q`<path d="M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"/>`]]);b.styles=E`
    :host {
      display: contents;
    }
  `;y([x({type:String,reflect:!0})],b.prototype,"size",2);y([x({type:String,reflect:!0})],b.prototype,"weight",2);y([x({type:String,reflect:!0})],b.prototype,"color",2);y([x({type:Boolean,reflect:!0})],b.prototype,"mirrored",2);b=y([I("ph-browser")],b);export{b as PhBrowser};
