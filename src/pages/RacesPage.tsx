import { Card, Paper, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { BetAccordion } from "../components/accordion/BetAccordion";
import { SelectRace } from "../components/input/SelectRace";
import { BetResultSkeleton } from "../components/skeleton/BetResultSkeleton";
import { useAtgContext } from "../context/atgType/atgContext";
import { formatDate } from "../utils/formatDate";
import { formatTrackDisplay } from "../utils/formatLabels";

export const RacesPage = () => {
  const { data, isLoading, setSelectedGameId } = useAtgContext();
  const theme = useTheme();
  return (
    <Paper
      elevation={8}
      sx={{
        backgroundColor: theme.palette.background.default,
        width: "100%",
        padding: 1,
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Typography align="center" variant={"h4"}>
        Latest Results
      </Typography>
      <SelectRace />
      {isLoading ? (
        <>
          <BetResultSkeleton />
        </>
      ) : (
        data?.results &&
        data.results.map((result) => (
          <Box
            key={result.id}
            onClick={() => setSelectedGameId && setSelectedGameId(result.id)}
          >
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#ffffff",
                color: theme.palette.text.primary,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "background.paper",
                  fontWeight: "bold",
                }}
                variant={"h5"}
                color={"primary"}
              >
                {formatTrackDisplay(result.tracks)}{" "}
                {formatDate(result.startTime)}
              </Typography>
              <BetAccordion resultId={result.id} />
            </Card>
          </Box>
        ))
      )}
    </Paper>
  );
};
