import axios from "axios";

const putData = async (endpoint, { name, email }) =>
  axios
    .put(
      endpoint,
      { name, email },
      { headers: { Authorization: localStorage.getItem("token") } }
    )
    .catch(({ message }) => ({ error: message }));

const getData = async (endpoint) =>
  axios
    .get(endpoint, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .catch(({ message }) => ({ error: message }));

const postData = async ({ endpoint, body }) =>
  axios
    .post(endpoint, body)
    .catch((error) => ({ ...error.response.data, message: error.message }));

export { getData, putData, postData };
