import { Skeleton } from "@mui/material";

export const RandomWidthSkeleton = ({
  minWidth = 100,
  maxWidth = 300,
  height = 20,
  variant = "rectangular",
}: {
  minWidth?: number;
  maxWidth?: number;
  height?: number;
  variant?: "rounded" | "text" | "rectangular" | "circular";
}) => {
  const randomWidth =
    Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

  return (
    <Skeleton
      variant={variant}
      width={randomWidth}
      height={height}
      animation="wave"
    />
  );
};
