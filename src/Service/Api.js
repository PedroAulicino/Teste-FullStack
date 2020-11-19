import axios from "axios";

const request = () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
};
export default request;
