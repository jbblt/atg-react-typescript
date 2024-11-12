import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";

import { AccordionSkeleton } from "./AccordionSkeleton";
import { RandomWidthSkeleton } from "./RandomWidthSkeleton";

export const BetResultSkeleton = ({ quantity = 1 }: { quantity?: number }) => {
  return (
    <>
      {[...Array(quantity)].map((_, index) => (
        <Box
          key={`BetResultSkeleton${index}${Math.random()}`}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            height="3.4rem"
            boxShadow={2}
            sx={{ borderRadius: "5px 5px 0 0", overflow: "hidden" }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              boxShadow={1}
              gap={1}
              height="3.4rem"
            >
              <RandomWidthSkeleton
                variant="rounded"
                height={20}
                minWidth={80}
                maxWidth={200}
              />
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap={"2px"}
              >
                <Skeleton
                  variant="rounded"
                  height={20}
                  width={"3rem"}
                  animation="wave"
                />
                {":"}
                <Skeleton
                  variant="rounded"
                  height={20}
                  width={"3rem"}
                  animation="wave"
                />
              </Box>
            </Box>
          </Box>
          <AccordionSkeleton
            quantity={8}
            parentIndex={`BetResultSkeleton${index + 1}`}
          />
        </Box>
      ))}
    </>
  );
};
