import { formatDate } from "./formatDate";

describe("FormatDate Helpers", () => {
  test.each([
    ["no valide Date", "no valide Date"],
    ["2024-10-20T15:22:36", "15:22"],
    ["2024-10-20T16:09:17", "16:09"],
  ])(
    "Should convert %p to %p",
    (dateReceived: string, expectedDate: string) => {
      expect(formatDate(dateReceived)).toBe(expectedDate);
    },
  );
});

export {};
