import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useCallback, useState } from "react";

import { BetType } from "../../types/Bet";
export const SelectRace = () => {
  const [race, setRace] = useState("");
  const handleChange = useCallback((event: SelectChangeEvent<typeof race>) => {
    setRace(event.target.value);
  }, []);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="race-label">{race ? race : "Race"}</InputLabel>
        <Select
          labelId="race-label"
          id="race-select"
          value={race}
          label="Race"
          onChange={handleChange}
          aria-labelledby="race-label"
          aria-describedby="race-description"
        >
          {Object.keys(BetType).map((type) => (
            <MenuItem value={type} aria-label={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
