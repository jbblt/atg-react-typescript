import { Track } from "../types/RaceInfo";
import { formatTrackDisplay } from "./formatLabels";

describe("FormatTrackDisplay", () => {
  test.each([
    [[{ name: "Name 1" }, { name: "Name 2" }] as Track[], "Name 1 - Name 2"],
    [[{ name: "Name 1" }] as Track[], "Name 1"],
  ])(
    "Should convert %p to %p",
    (dateReceived: Track[], expectedDate: string) => {
      expect(formatTrackDisplay(dateReceived)).toBe(expectedDate);
    },
  );
});

export {};
