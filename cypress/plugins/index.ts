import webpack from "@cypress/webpack-preprocessor";

module.exports = (on: any, config: any) => {
  const options = {
    // @ts-ignore
    webpackOptions: import("..//webpack.config.js"),
  };
  // @ts-ignore
  on("file:preprocessor", webpack(options));

  return config;
};
