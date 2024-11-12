import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

import { useFetchGameData } from "../../hooks/useFetchGameData";
import { formatDate } from "../../utils/formatDate";
import { AccordionSkeleton } from "../skeleton/AccordionSkeleton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.4,
    color: theme.palette.primary.contrastText,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const BetAccordion = ({ resultId }: { resultId: string }) => {
  const { data, isLoading } = useFetchGameData(resultId);

  return isLoading ? (
    <AccordionSkeleton quantity={8} parentIndex={resultId} />
  ) : (
    <>
      {data &&
        data.races.map((race) => (
          <Accordion key={race.id + Math.random()} elevation={3}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant={"h6"} color={"textPrimary"}>
                {race.number} - {race.name} {formatDate(race.startTime)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table
                  size="small"
                  aria-label="race detail"
                  sx={{ minWidth: "50rem" }}
                >
                  <TableBody>
                    {race.starts.map((start) => (
                      <StyledTableRow key={start.id + Math.random()}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                          sx={{ width: "10%" }}
                        >
                          {start.number}
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: "20%" }}>
                          {start.horse.name}
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: "70%" }}>
                          {start.driver.firstName} {start.driver.lastName}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};
