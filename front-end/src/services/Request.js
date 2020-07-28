import axios from "axios";

const headers = {
  Authentication: localStorage.getItem("token"),
};

const getData = async (endpoint) =>
  axios.get(endpoint, headers).catch(({ message }) => ({ error: message }));

export { getData };
