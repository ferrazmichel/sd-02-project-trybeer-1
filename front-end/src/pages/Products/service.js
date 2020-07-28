import { getData } from "../../services/Request";

const URL = "http://localhost:3001/products";

const getProducts = async () => {
  const data = await getData(URL);
  if (data.error) {
    return null;
  }
  // Precisamos saber como a request do get na rota /products no backend vai retornar estes dados para acrescenta-los no products;
  return data;
};

export { getProducts };
