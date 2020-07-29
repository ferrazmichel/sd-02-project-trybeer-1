import axios from "axios";

const headers = { Authorization: localStorage.getItem("token") };

const putData = async (endpoint, { name, email }) =>
  axios
    .put(endpoint, { name, email }, { headers })
    .catch((error) => ({ ...error.response.data, message: error.message }));

const getData = async (endpoint) =>
  axios
    .get(endpoint, { headers })
    .catch((error) => ({ ...error.response.data, message: error.message }));

const validToken = async (endpoint) =>
  axios.get(endpoint, { headers: { Authorization: localStorage.getItem("token") } });

export { getData, putData, validToken };
