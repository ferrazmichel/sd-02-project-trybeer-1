import { getData } from "../../services/Request";

const URL = "http://localhost:3001/products";

const getProducts = async () => {
  const { data, error } = await getData(URL);

  if (error) {
    console.error(error);
    return [];
  }

  if (!data) {
    return { data: [] };
  }

  return { data: data.products };
};

export { getProducts };
