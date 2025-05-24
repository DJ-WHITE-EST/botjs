require('dotenv').config();
const { Telegraf } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL || 'http://localhost:3000';

if (!BOT_TOKEN) {
  console.error('Укажите BOT_TOKEN в .env');
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Добро пожаловать в Козыринг 2.0! Запустите мини-приложение:', {
    reply_markup: {
      keyboard: [
        [{ text: 'Открыть Козыринг 2.0', web_app: { url: WEBAPP_URL } }]
      ],
      resize_keyboard: true
    }
  });
});

bot.launch();

console.log('Бот запущен!');

// Для корректного завершения
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 