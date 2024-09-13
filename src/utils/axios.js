import axios from "axios";

const instancse = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "X-API-KEY": "CYE4W49-C8544FW-PFWEDHC-YABZPNV",
  },
});
export default instancse;
