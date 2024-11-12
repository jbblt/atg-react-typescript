import { Race } from "./RaceInfo";

export interface Game {
  "@type": string;
  id: string;
  status: string;
  pools: Pools;
  races: Race[];
}

interface Pools {
  [key: string]: Pool;
}

interface Pool {
  "@type": string;
  id: string;
  status: string;
  timestamp: string;
  turnover: number;
  addOns: string[];
  result: MarkingBetResult;
  betType: string;
  harry: boolean;
  systemCount: number;
  payouts: Payouts;
  potentialPayoutRaceId: string;
}

interface MarkingBetResult {
  "@type": string;
  payouts: Payouts;
  boostInfo: BoostInfo;
}

interface Payouts {
  [correct: number]: PayoutDetails;
}

interface PayoutDetails {
  systems: number;
  payout: number;
}

interface BoostInfo {
  boostCode: string;
  boostPayouts: BoostPayout[];
  resultComplete: boolean;
}

interface BoostPayout {
  correct: number;
  amount: number;
  multiplier: number;
}
