import { Card, Skeleton } from "@mui/material";

import { SelectRace } from "../components/input/SelectRace";
import { useBetTypeContext } from "../context/betType/BetTypeContext";

export const RacesPage = () => {
  const { data, isLoading } = useBetTypeContext();

  return (
    <>
      <SelectRace />
      {isLoading || !data ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        data.results.map((race: any) => (
          <Card key={race.id} variant="outlined">
            {race.toString()}
          </Card>
        ))
      )}
    </>
  );
};
