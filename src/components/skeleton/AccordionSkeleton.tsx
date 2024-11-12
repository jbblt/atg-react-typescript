import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";

import { RandomWidthSkeleton } from "./RandomWidthSkeleton";

export const AccordionSkeleton = ({
  quantity = 1,
  parentIndex,
}: {
  quantity?: number;
  parentIndex: string;
}) => {
  return (
    <Box display="flex" flexDirection="column">
      {[...Array(quantity)].map((_, index) => (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          boxShadow={1}
          key={index + parentIndex + Math.random()}
          gap={1}
          height="5.6rem"
          paddingLeft={1}
        >
          <Skeleton variant="rounded" height={20} width={10} animation="wave" />
          -
          <RandomWidthSkeleton height={20} minWidth={70} variant="rounded" />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap={0.2}
          >
            <Skeleton
              variant="rounded"
              height={20}
              width={25}
              animation="wave"
            />
            :
            <Skeleton
              variant="rounded"
              height={20}
              width={25}
              animation="wave"
            />
          </Box>
          <Box marginLeft="auto" paddingRight="1rem">
            <Skeleton
              variant="rounded"
              height={10}
              width={10}
              animation="wave"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
