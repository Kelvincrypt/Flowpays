import{mh as F,nh as G,oh as q,ph as H,qh as I,rh as x}from"./chunk-bpkcqqr4.js";import"./chunk-dgwf5jrz.js";var{defineProperty:J,getOwnPropertyDescriptor:K}=Object,y=(w,z,C,B)=>{for(var k=B>1?void 0:B?K(z,C):z,D=w.length-1,E;D>=0;D--)(E=w[D])&&(k=(B?E(z,C,k):E(k))||k);return B&&k&&J(z,C,k),k},b=class extends H{constructor(){super(...arguments),this.size="1em",this.weight="regular",this.color="currentColor",this.mirrored=!1}render(){var w;return G`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored?"scale(-1, 1)":null}
    >
      ${b.weightsMap.get((w=this.weight)!=null?w:"regular")}
    </svg>`}};b.weightsMap=new Map([["thin",q`<path d="M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"/>`],["light",q`<path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"/>`],["regular",q`<path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"/>`],["bold",q`<path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"/>`],["fill",q`<path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"/>`],["duotone",q`<path d="M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z" opacity="0.2"/><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"/>`]]);b.styles=F`
    :host {
      display: contents;
    }
  `;y([x({type:String,reflect:!0})],b.prototype,"size",2);y([x({type:String,reflect:!0})],b.prototype,"weight",2);y([x({type:String,reflect:!0})],b.prototype,"color",2);y([x({type:Boolean,reflect:!0})],b.prototype,"mirrored",2);b=y([I("ph-dots-three")],b);export{b as PhDotsThree};
