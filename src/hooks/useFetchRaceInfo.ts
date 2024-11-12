import { useQuery } from "react-query";

import { fetchRaceInfoByBetType } from "../services/fetchRaceInfo";
import { BetType } from "../types/Bet";

export const useFetchRaceInfo = (betType?: BetType) =>
  useQuery(
    ["fetchRaceInfoByBetType", betType],
    () =>
      fetchRaceInfoByBetType(betType as BetType).then((res) => {
        const sortedResults = res.data.results.sort((a, b) => {
          const dateA = new Date(a.startTime).getTime();
          const dateB = new Date(b.startTime).getDate();
          return dateB - dateA;
        });

        return {
          ...res.data,
          results: sortedResults,
        };
      }),
    {
      enabled: !!betType,
      staleTime: 30000,
    },
  );
