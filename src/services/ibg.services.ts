import axios from "axios";

interface UF {
  sigla: string;
}

interface City {
  nome: string;
}

// "https://servicodados.ibge.gov.br/api/v1/localidades/"

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

export default {
  fetchUF: () => {
    return api
      .get<UF[]>("/estados?orderBy=nome")
      .then((response) => response.data.map((info) => info.sigla));
  },
  fetchCity: (uf: string) => {
    return api
      .get<City[]>(`estados/${uf}/municipios?orderBy=nome`)
      .then((response) => response.data.map((info) => info.nome));
  },
};
