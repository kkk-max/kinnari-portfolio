import axios from "axios";

// import settings from "../settings";

const apiConfig = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT,DELETE,POST,GET,OPTION",
  };
};

export const getApi = (url) => {
  return axios.get(
    `${"https://kinnari-db-1.herokuapp.com"}${url}`,
    apiConfig()
  );
};

export const postApi = (url, apiData) => {
  return axios.post(
    `${"https://kinnari-db-1.herokuapp.com"}${url}`,
    apiData,
    apiConfig()
  );
};

export const putApi = (url, apiData) => {
  return axios.put(
    `${"https://kinnari-db-1.herokuapp.com"}${url}`,
    apiData
  );
};

export const deleteApi = (url) => {
  return axios.delete(
    `${"https://kinnari-db-1.herokuapp.com"}${url}`
  );
};

export const setupInterceptors = (store) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && [401].includes(error.response.status)) {
        window.location.reload();
      }

      return Promise.reject(error);
    }
  );
};
