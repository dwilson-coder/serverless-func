const items = require("../assets/data");

exports.handler = async (events, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
