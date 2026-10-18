/**
 * wagmi configuration
 * Built with Arc Studio — https://studio.arc.io
 */

import { http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { arc } from 'viem/chains'
import { createConfig } from '@privy-io/wagmi'
import { registerChain } from './tracing'

// Pre-register chain RPC URLs so trace events show correct chain names immediately
registerChain(arc.id, arc.rpcUrls.default.http[0])

// Privy-aware wagmi config — import createConfig from @privy-io/wagmi, not wagmi
export const config = createConfig({
  chains: [arc, mainnet],
  transports: {
    [arc.id]: http(),
    [mainnet.id]: http(),
  },
})
