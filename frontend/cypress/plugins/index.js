const inyectDevServer = require("@cypress/react/plugins/react-scripts")

module.exports = (on, config) => {
  inyectDevServer(on, config);
  return config
}