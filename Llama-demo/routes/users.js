const Axios = require("axios");
var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  const symbol = "SHOP";
  // const result = await Axios.get(
  //   `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.API_KEY}`
  // );
  // const lastRefreshed = result.data["Meta Data"]["3. Last Refreshed"];
  // const lastClose =
  //   result.data["Time Series (Daily)"][lastRefreshed]["4. close"];

  const lastClose = "200";
  await Axios.post(
    `https://hooks.slack.com/services/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`,
    {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Alert! Alert! This is sample text sent via SLACK hook`,
          },
        },
      ],
    }
  );

  res.json({
    lastClose,
    date: new Date().toISOString(),
  });
});

module.exports = router;