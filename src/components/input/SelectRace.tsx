import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useCallback } from "react";

import { useAtgContext } from "../../context/atgType/atgContext";
import { BetType } from "../../types/Bet";

export const SelectRace = () => {
  const { betType, setBetType } = useAtgContext();

  const handleOnChange = useCallback(
    (event: SelectChangeEvent<BetType>) => {
      if (setBetType) setBetType(event.target.value as unknown as BetType);
    },
    [setBetType],
  );

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth color="secondary">
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
            <MenuItem value={type} aria-label={type} key={type + Math.random()}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
