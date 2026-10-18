import {Nullable} from '../utils';

export interface Currency {
  id: string;
  asset_display_name: string;
  asset_code: string;
  currency_minor_units: number;
  currency_symbol: Nullable<string>;
  currency_symbol_location: Nullable<'prefix' | 'suffix'>;
  currency_network: string;
}

export interface QuoteFees {
  network_fee: string;
  transaction_fee: string;
  total_fee: string;
}

export interface QuoteBase {
  id: string;
  source_currency: Currency;
  destination_currency: Currency;
  source_amount: string;
  destination_amount: string;
  total_amount: string;
  fees: QuoteFees;
  expiration: Nullable<number>;
}

export type FixedCurrencySide = 'source' | 'destination';

export interface SessionQuote extends QuoteBase {
  fixed_currency_side: FixedCurrencySide;
  blockchain_tx_id: Nullable<string>;
  time_to_expiration: Nullable<number>;
}

export type OnrampSessionStatus =
  | 'initialized'
  | 'rejected'
  | 'requires_payment'
  | 'fulfillment_processing'
  | 'fulfillment_complete'
  | 'error';

export interface OnrampSessionResult {
  id: string;
  object: string;
  livemode: boolean;
  client_secret: string;
  status: OnrampSessionStatus;
  quote: Nullable<SessionQuote>;
  wallet_address: Nullable<string>;
}
