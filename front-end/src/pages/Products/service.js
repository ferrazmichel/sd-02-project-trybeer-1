import { getData } from "../../services/Request";

const URL = "http://localhost:3001/products";

const getProducts = async () => {
  const { data , message } = await getData(URL);

  if (message) {
    return { message, data: [] };
  }

  if (!data) {
    return { data: [] };
  }

  return { data: data.products }
};

export { getProducts };
