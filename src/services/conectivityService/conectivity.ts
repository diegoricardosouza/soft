import { httpClient } from "../httpClient";

export interface ConectivityResponse {
  content: {
    id: string;
    descricao: string;
    sistemasConexaoBle: string;
    aplicacoes: string;
    anatel: string;
    urlImg1?: string;
    urlImg2?: string;
    urlImg3?: string;
  }[]
}

export async function getConectivity() {
  const { data } = await httpClient.get<ConectivityResponse>("/conectividade-soft");

  return data;
}
