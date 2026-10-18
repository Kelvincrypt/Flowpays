var d=new Set(["https:","mailto:"]);function h(b){if(!b)return null;try{if(d.has(new URL(b).protocol))return b}catch{}return null}
export{h as Wb};
