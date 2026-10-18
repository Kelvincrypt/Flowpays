var A=({origin:h,path:v,query:w={},hash:y={}})=>{let z=h.endsWith("/")?h:`${h}/`,k=new URL(v,z);for(let[b,f]of Object.entries(w))f!==void 0&&k.searchParams.set(b,f);let l=Object.entries(y);if(l.length>0){let b=new URLSearchParams;for(let[f,q]of l)q!==void 0&&b.append(f,q);k.hash=b.toString()}return k.href};
export{A as Sl};
