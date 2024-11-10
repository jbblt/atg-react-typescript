import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Box from "@mui/material/Box";

import { UpcomingEvent } from "../../types/RaceInfo";

function ExpandMoreIcon() {
  return null;
}

export const BetAccordion = ({ event }: { event: UpcomingEvent }) => {
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${event.id}}-content`}
      id={`${event.id}}-header`}
      sx={{ display: "flex", gap: 2 }}
    >
      {event.id}
    </AccordionSummary>
    <AccordionDetails>
      {event.tracks.map((track) => (
        <Box>
          <Box>{track.id}</Box>
          <Box>{track.name}</Box>
        </Box>
      ))}
    </AccordionDetails>
  </Accordion>;
};
