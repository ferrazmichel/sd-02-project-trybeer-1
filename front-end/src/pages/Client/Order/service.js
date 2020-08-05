import { getData } from "../../../services/Request";

const getOrder = async (id) => {
  const { data, error } = await getData(`http://localhost:3001/orders/${id}`);

  if (error) {
    return { error: error.message, data: [] };
  }

  if (!data) {
    return { data: [] };
  }

  return { data: data.order };
};

export { getOrder };
