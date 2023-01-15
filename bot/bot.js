const { Telegraf } = require("telegraf");
require('dotenv').config();

const bot = new Telegraf(process.env.TELBOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Welcome to Dani's shop",
    {
      "text": "Menu",
      "web_app": {
        "url": "https://revenkroz.github.io/telegram-web-app-bot-example/index.html"
      }
    }
  )
);

bot.launch();
