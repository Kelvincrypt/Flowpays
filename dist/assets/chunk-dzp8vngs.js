var l=({address:f,nonce:h})=>`${window.location.host} wants you to sign in with your Solana account:
${f}

${`You are proving you own ${f}.`}

URI: ${window.location.origin}
Version: 1
Chain ID: mainnet
Nonce: ${h}
Issued At: ${new Date().toISOString()}
Resources:
- https://privy.io`;var t=Symbol("solana-funding-plugin"),x=Symbol("solana-ledger-plugin");
export{l as Ko,t as Lo,x as Mo};
