const config = {
  serverUrl: import.meta.env.VITE_APP_SERVERURL,
  localUrl: "https://hianimebcapi.vercel.app/api/v1" || "http://localhost:3030/api/v1",
  proxyUrl: import.meta.env.VITE_APP_PROXYURL,
};

export default config;
