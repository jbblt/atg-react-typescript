import { createContext, FC, ReactNode, useContext, useState } from "react";

import { useFetchGameData } from "../../hooks/useFetchGameData";
import { useFetchRaceInfo } from "../../hooks/useFetchRaceInfo";
import { BetType } from "../../types/Bet";
import { Game } from "../../types/Game";
import { RaceInfoResult } from "../../types/RaceInfo";

interface BetTypeContextProps {
  betType?: BetType;
  setBetType?: (betType: BetType) => void;
  data: RaceInfoResult | undefined;
  isLoading: boolean;
  selectedGameId?: string;
  gameData?: Game;
  setSelectedGameId?: (id: string) => void;
}

export const AtgContext = createContext<BetTypeContextProps>({
  betType: undefined,
  setBetType: undefined,
  isLoading: false,
  data: undefined,
  gameData: undefined,
  selectedGameId: undefined,
  setSelectedGameId: undefined,
});

export const useAtgContext = () => {
  const context = useContext(AtgContext);
  if (!context) {
    throw new Error("useBetTypeContext must be wrapped inside BetTypeProvider");
  }
  return context;
};
export const AtgProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [betType, setBetType] = useState<BetType | undefined>(undefined);

  const [selectedGameId, setSelectedGameId] = useState<string | undefined>(
    undefined,
  );
  const { data, isLoading } = useFetchRaceInfo(betType);
  const { data: gameData } = useFetchGameData(selectedGameId);

  return (
    <AtgContext.Provider
      value={{
        betType,
        setBetType,
        data,
        gameData,
        isLoading,
        selectedGameId,
        setSelectedGameId,
      }}
    >
      {children}
    </AtgContext.Provider>
  );
};
