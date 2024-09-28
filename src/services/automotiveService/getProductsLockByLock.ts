import { httpClient } from "../httpClient";

export interface ProductsUniqueByAutomakerResponse {
  id: string;
  code: string;
  name: string;
  descriptionCommercial: string;
  descriptionInstalesoft: string;
  weight: string,
  length: string,
  width: string,
  height: string,
  capaImagem: string;
  imgUrl1: string;
  imgUrl2: string;
  imgUrl3: string;
  imgUrl4: string;
  imgUrl5: string;
  urlManual: string;
  categoryCommercialId: string;
  nameCategoryCommercial: string;
}

export async function getProductsLockByLock(automaker: string) {
  const { data } = await httpClient.get<ProductsUniqueByAutomakerResponse[]>(`/products/travaProdutoMontadora?montadora=${automaker}`);

  return data;
}