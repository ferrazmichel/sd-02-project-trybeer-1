import { getData } from "../../services/Request";

const URL = "http://localhost:3001/products";

const getProducts = async () => {
  const { data, error } = await getData(URL);

  if (error) {
    return [];
  }

  return data.products;
};

export { getProducts };
