import { Game } from "../types/Game";
import { axiosAtgClient } from "./axiosAtgClient";

export const fetchGameInfoById = async (id: string) => {
  return await axiosAtgClient.get<Game>(`/games/${id}`);
};
