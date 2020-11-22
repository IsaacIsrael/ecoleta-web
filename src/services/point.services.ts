import api from "./api";

export default {
  add: () => {
    return api.get("items").then((response) => response.data);
  },
};
