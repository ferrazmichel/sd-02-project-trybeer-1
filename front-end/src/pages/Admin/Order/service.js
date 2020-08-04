import { getData } from "../../../services/Request";

const URL = "http://localhost:3001/orders";

const getOrder = async () => {
  const { data, error } = await getData(URL);

  if (error) {
    return { error: error.message, data: [] };
  }

  if (!data) {
    return { data: [] };
  }

  console.log(data)

  return { data: data.orders };
};

export { getOrder };
