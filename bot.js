const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🔥 Welcome to Rise of Shadows!\nTap below to play the mafia story game.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "▶ Play Rise of Shadows",
              web_app: {
                url: "https://chipper-taffy-6f0d6e.netlify.app/",
              },
            },
          ],
        ],
      },
    }
  );
});

console.log("Bot is running...");
