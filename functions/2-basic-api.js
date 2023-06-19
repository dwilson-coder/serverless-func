const items = require("../assets/data");

exports.handler = async (events, context) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
