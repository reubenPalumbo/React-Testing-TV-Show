import axios from "axios";

export default function fetchShow(setShow, setSeasons, formatSeasons) {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res;
    });
}
