import { httpClient } from "../httpClient";

export interface LedsResponse {
  content: {
    id: string;
    descricao: string;
    producao: string;
    projetos: string;
    aplicacoes: string;
    conclusao: string;
    urlImg: string;
    urlImg_2: string;
    urlImg_3: string;
    urlImg_4: string;
    urlImg_5: string;
    urlImg_6: string;
  }[]
}

export async function getLeds() {
  const { data } = await httpClient.get<LedsResponse>("/led-soft");

  return data;
}