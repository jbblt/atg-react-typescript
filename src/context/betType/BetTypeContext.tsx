import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useQuery } from "react-query";

import { fetchRaceInfoByBetType } from "../../services/fetchProducts";
import { BetType } from "../../types/Bet";

interface BetTypeContextProps {
  betType?: BetType;
  setBetType?: (betType: BetType) => void;
  data: any;
  isLoading: boolean;
}

export const BetTypeContext = createContext<BetTypeContextProps>({
  betType: undefined,
  setBetType: undefined,
  isLoading: false,
  data: undefined,
});

export const useBetTypeContext = () => {
  const context = useContext(BetTypeContext);
  if (!context) {
    throw new Error("useBetTypeContext must be wrapped inside BetTypeProvider");
  }
  return context;
};
export const BetTypeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [betType, setBetType] = useState<BetType | undefined>(undefined);

  const { data, isLoading } = useQuery(
    ["fetchRaceInfoByBetType", betType],
    () => fetchRaceInfoByBetType(betType as BetType).then((res) => res.data),
    {
      enabled: !!betType,
      staleTime: 30000,
    },
  );

  const handleSetBetType = useCallback((newBetType: BetType) => {
    setBetType(newBetType);
  }, []);

  return (
    <BetTypeContext.Provider
      value={{ betType, setBetType: handleSetBetType, data, isLoading }}
    >
      {children}
    </BetTypeContext.Provider>
  );
};
