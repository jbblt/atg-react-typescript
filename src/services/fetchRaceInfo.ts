import { BetType } from "../types/Bet";
import { RaceInfoResult } from "../types/RaceInfo";
import { axiosAtgClient } from "./axiosAtgClient";

export const fetchRaceInfoByBetType = async (betType: BetType) => {
  return await axiosAtgClient.get<RaceInfoResult>(`/products/${betType}`);
};
