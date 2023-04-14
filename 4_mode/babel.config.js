module.exports = (api) => {
  api.cache(true);

  const config = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-object-rest-spread"],
  };

  return config;
};
