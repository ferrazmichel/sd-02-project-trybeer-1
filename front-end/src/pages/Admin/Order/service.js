import { getData, patchData } from "../../../services/Request";

const getOrder = async (id) => {
  const { data, error } = await getData(`http://localhost:5000/orders/${id}`);

  if (error) {
    return { error: error.message, data: [] };
  }

  if (!data) {
    return { data: [] };
  }

  return { data: data.order };
};

const updateOrder = async (id) => {
  return await patchData(`http://localhost:5000/orders/${id}`);
};

export { getOrder, updateOrder };
