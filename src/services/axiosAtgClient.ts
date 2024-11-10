import axios from "axios";

export const axiosAtgClient = axios.create({
  baseURL: "https://www.atg.se/services/racinginfo/v1/api",
  headers: {
    "Content-Type": "application/json",
  },
});
