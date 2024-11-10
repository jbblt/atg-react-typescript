import { useQuery } from "react-query";

import { fetchRaceInfoByBetType } from "../services/fetchProducts";
import { BetType } from "../types/Bet";

export const useFetchRaceInfo = (betType?: BetType) =>
  useQuery({
    queryKey: ["fetchRaceInfoByBetType", betType],
    queryFn: () =>
      fetchRaceInfoByBetType(betType as BetType).then((value) => {
        return value.data;
      }),
    enabled: !!betType,
    staleTime: 30000,
  });
