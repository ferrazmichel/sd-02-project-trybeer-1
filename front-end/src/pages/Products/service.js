import { getData } from "../../services/Request";

const URL = "http://localhost:3001/products";

const getProducts = async () => {
  const { data } = await getData(URL);

  if (data.error) {
    return [];
  }
  return data.products;
};

export { getProducts };
