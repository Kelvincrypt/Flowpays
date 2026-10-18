import {StandaloneOnrampOptions} from '../types/crypto-js/standalone-onramp-session';

export type LoadStandaloneOnrampUrl = (
  args: StandaloneOnrampOptions
) => Promise<string | null>;
