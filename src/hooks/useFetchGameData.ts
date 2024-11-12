import { useQuery } from "react-query";

import { fetchGameInfoById } from "../services/fetchGameInfo";

export const useFetchGameData = (selectedGameId?: string) =>
  useQuery({
    queryKey: ["fetchGameInfoById", selectedGameId],
    queryFn: () =>
      fetchGameInfoById(selectedGameId!).then((value) => {
        return value.data;
      }),
    enabled: !!selectedGameId,
    staleTime: 30000,
  });
