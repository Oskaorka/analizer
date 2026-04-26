import axios from "axios";
import configFile from "./configfile.json";

const http = axios.create({
  baseURL: configFile.apiPath,
});

http.interceptors.request.use(
  async function (config) {
    // console.log("Request URL:", config.url);
    if (configFile.isFireBase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
    } else {
      // Для не-Firebase API: авторизация через токены
      // Импорты должны быть добавлены при необходимости:
      // import localStorageService from "./localStorageService";
      // import authService from "./authService";
      // const expiresDate = localStorageService.getTokenExpiresDate();
      // const refreshToken = localStorageService.getRefreshToken();
      // if (refreshToken && expiresDate < Date.now()) {
      //     const data = await authService.refresh();
      //     localStorageService.setTokens(data);
      // }
      // const accessToken = localStorageService.getAccessToken();
      // if (accessToken) {
      //     config.headers = {
      //         ...config.headers,
      //         Authorization: `Bearer ${accessToken}`
      //     };
      // }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Добавляем обработчик ошибок ответа
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("HTTP Error:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default http;
