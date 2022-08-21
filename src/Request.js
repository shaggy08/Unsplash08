import axios from "axios";

//export const AccessKey = " d8sZcbwpA2tXzt7su-PHLF0zqt4alt5nouLINUUMxT4";
const request = axios.create({
  baseURL: "https://api.unsplash.com/",
});

export default request;
