import api from "./api";

export default {
  fetch: () => {
    return api.get("items").then((response) => response.data);
  },
};
