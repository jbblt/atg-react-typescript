import { ID } from "./BaseTypes";

export interface Horse {
  name: string;
}

export interface Start {
  number: number;
  horse: Horse;
}

export interface Race extends ID {
  starts: Start[];
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
