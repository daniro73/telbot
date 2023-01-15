const { Telegraf } = require("telegraf");
require('dotenv').config();

const bot = new Telegraf(process.env.TELBOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Welcome to Dani's shop",
    {
      "text": "Menu",
      "web_app": {
        "url": process.env.WEBAPP_URL
      }
    }
  )
);

bot.launch();
