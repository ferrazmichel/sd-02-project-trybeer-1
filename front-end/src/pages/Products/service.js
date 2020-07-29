import { getData } from "../../services/Request";

const URL = "http://localhost:3001/products";

const errorType = {
  'Network Error': 'Falha no servidor!',
};

const getProducts = async () => {
  const { data , error } = await getData(URL);

  if (error) {
    return { error: errorType[error], data: [] };
  }

  if (!data) {
    return { data: [] };
  }

  return { data: data?.products }
};

export { getProducts };
