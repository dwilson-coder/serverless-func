const items = require("../assets/resources");

exports.handler = async (events, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
