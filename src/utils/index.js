// import axios from 'axios';

export const config = {
  // fetchUrl: 'https://farmaid-server-alpha.herokuapp.com/api/v1',
  fetchUrl: 'http://192.168.100.71:8000/api/v1',
};

// const callPlainApi = (url, data, method) =>
//   new Promise((resolve, reject) => {
//     const axiosOptions = {timeout: 30000};
//     if (method === 'PUT') {
//       axios
//         .put(`${config.fetchUrl}${url}`, data, {
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//     if (method === 'POST') {
//       axios
//         .post(`${config.fetchUrl}${url}`, data, {
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     } else {
//       axios
//         .get(`${config.fetchUrl}${url}`, {
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });

// const callSecuredApi = (url, data, method, token, callback) => {
//   const axiosOptions = {};
//   if (token) {
//     axiosOptions.headers = {
//       authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     };
//     axiosOptions.timeout = 20000;
//   }
//   return new Promise((resolve, reject) => {
//     if (method === 'PUT') {
//       axiosOptions.method = 'PUT';
//       axiosOptions.body = data;
//       axios
//         .put(`${config.fetchUrl}${url}`, data, {
//           headers: axiosOptions.headers,
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           if (callback) {
//             callback();
//           }
//           resolve(response.data);
//         })
//         .catch((err) => {
//           if (err.response && err.response.status === 403) {
//             reject('You are not authorized to perform this action');
//           }
//           if (err.response && err.response.status === 401) {
//             reject("You've been logged out, log in to continue.");
//           }
//           reject(err);
//         });
//     } else if (method === 'POST') {
//       axios
//         .post(`${config.fetchUrl}${url}`, data, {
//           headers: axiosOptions.headers,
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((err) => {
//           if (err.response && err.response.status === 403) {
//             reject('You are not authorized to perform this action');
//           }
//           if (err.response && err.response.status === 401) {
//             reject("You've been logged out, log in to continue.");
//           }
//           if (err.response && err.response.data) {
//             reject(err.response.data);
//           }
//           reject(err.response.status);
//         });
//     } else if (method === 'PATCH') {
//       axios
//         .patch(`${config.fetchUrl}${url}`, data, {
//           headers: axiosOptions.headers,
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((err) => {
//           if (err.response && err.response.status === 403) {
//             reject('You are not authorized to perform this action');
//           }
//           if (err.response && err.response.status === 401) {
//             reject("You've been logged out, log in to continue.");
//           }
//           if (err.response.data) {
//             reject(err.response.data);
//           }
//           reject(err.response.status);
//         });
//     } else if (method === 'DELETE') {
//       axios
//         .delete(`${config.fetchUrl}${url}`, {
//           headers: axiosOptions.headers,
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((err) => {
//           if (err.response && err.response.status === 403) {
//             reject('You are not authorized to perform this action');
//           }
//           if (err.response && err.response.status === 401) {
//             reject("You've been logged out, log in to continue.");
//           }
//           if (err.response.data) {
//             reject(err.response.data);
//           }
//           reject(err.response.status);
//         });
//     } else {
//       axios
//         .get(`${config.fetchUrl}${url}`, {
//           headers: axiosOptions.headers,
//           timeout: axiosOptions.timeout,
//         })
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((err) => {
//           if (err.response && err.response.status === 403) {
//             reject('You are not authorized to perform this action');
//           }
//           if (err.response && err.response.status === 401) {
//             reject("You've been logged out, log in to continue.");
//           }
//           reject(err);
//         });
//     }
//   });
// };

// export const callApi = (url, data, method, token, callback) => {
//   if (token) {
//     return callSecuredApi(url, data, method, token, callback);
//   }
//   return callPlainApi(url, data, method, callback);
// };

// export const validateEmail = (email) => {
//   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// };

// export const toSentenceCase = (word) => {
//   return word[0].toUpperCase() + word.slice(1);
// };
