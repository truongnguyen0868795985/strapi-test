module.exports = ({ env }) => ({
  url: env("APP_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["afe7405d67f206b6", "63e90c0711630990"]),
  },
});
