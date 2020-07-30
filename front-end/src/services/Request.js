import axios from "axios";

const headers = { Authorization: localStorage.getItem("token") };

const handleError = (error) => {
  if (error.response) {
    return error.response.data;
  }
  if (error.request) {
    return error.request;
  }
  return error;
};

const patchData = async (endpoint, { name, email }) =>
  axios
    .patch(endpoint, { name, email }, { headers })
    .catch(handleError);

const getData = async (endpoint) =>
  axios
    .get(endpoint, { headers })
    .catch(handleError);

const validToken = async (endpoint) =>
  axios.get(endpoint, { headers: { Authorization: localStorage.getItem("token") } });

const postData = async ({ endpoint, body }) =>
  axios
    .post(endpoint, body)
    .catch(handleError);

export { getData, patchData, postData, validToken };
