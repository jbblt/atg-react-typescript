import { ID } from "./BaseTypes";

export interface Horse {
  name: string;
}

export interface Start extends ID {
  number: number;
  horse: Horse;
  driver: { firstName: string; lastName: string };
}

export interface Race extends ID {
  starts: Start[];
  name: string;
  startTime: string;
  number: number;
}

export interface Favorite {
  raceId: string;
  legNumber: number;
  start: {
    number: number;
    name: string;
    distribution: number;
  };
}

export interface Track {
  id: number;
  name: string;
}

export interface UpcomingEvent extends ID {
  newBettingSystem: boolean;
  startTime: string;
  tracks: Track[];
  favorites: Favorite[];
  races: Race[];
  bettable: boolean;
}

export interface Result extends ID {
  tracks: Track[];
  totalToWin: number;
  startTime: string;
}

export interface RaceInfoResult {
  betType: string;
  upcoming: UpcomingEvent[];
  results: Result[];
}
