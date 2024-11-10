import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useCallback } from "react";

import { useBetTypeContext } from "../../context/betType/BetTypeContext";
import { BetType } from "../../types/Bet";

export const SelectRace = () => {
  const { betType, setBetType } = useBetTypeContext();

  const handleOnChange = useCallback((event: SelectChangeEvent<BetType>) => {
    if (setBetType) setBetType(event.target.value as unknown as BetType);
  }, []);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="race-label">{betType ?? "Race"}</InputLabel>
        <Select
          labelId="race-label"
          id="race-select"
          value={betType ?? ""}
          label="Race"
          onChange={handleOnChange}
          aria-labelledby="race-label"
          aria-describedby="race-description"
        >
          {Object.values(BetType).map((type) => (
            <MenuItem value={type} aria-label={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
