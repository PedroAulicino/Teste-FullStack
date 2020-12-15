import axios from "axios";

const request = () => {
  return axios.create({
    baseURL: "http://localhost:3333/api",
  });
};
export default request;
