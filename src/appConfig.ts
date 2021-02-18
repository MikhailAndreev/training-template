export const appConfig = {
  apiUrl: {
    dev: 'https://jsonplaceholder.typicode.com/',
    prod: process.env.REACT_APP_API_URL, // this var require on server
  },
  tokenStorageKey: '_exampleAccessToken', // _[projectName]AccessToken
};
