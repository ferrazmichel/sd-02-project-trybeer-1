import axios from "axios";

const headers = { Authorization: localStorage.getItem("token") };

const patchData = async (endpoint, { name, email }) =>
  axios
    .patch(endpoint, { name, email }, { headers })
    .catch((error) => ({ ...error.response.data, message: error.message }));

const getData = async (endpoint) =>
  axios
    .get(endpoint, { headers })
    .catch((error) => ({ ...error.response.data, error: error.message }));

const validToken = async (endpoint) =>
  axios.get(endpoint, { headers: { Authorization: localStorage.getItem("token") } });

const postData = async ({ endpoint, body }) =>
  axios
    .post(endpoint, body)
    .catch((error) => ({ ...error.response.data, error: error.message }));

export { getData, patchData, postData, validToken };
