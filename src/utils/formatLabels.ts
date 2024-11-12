import { Track } from "../types/RaceInfo";

export const formatTrackDisplay = (track: Track[]) =>
  track.length > 1
    ? track
        .map((track) => {
          return track?.name;
        })
        .join(" - ")
    : track[0].name;
