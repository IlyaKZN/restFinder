import TelegramBot from 'node-telegram-bot-api';

const TOKEN = '7589528748:AAHXQA2_0ALqnEj3BHrWqZeJCm7dpMdsY1E'; // вставь сюда токен твоего бота
const APP_URL = 'https://твое-приложение.vercel.app'; // ссылка на твое приложение

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Открыть приложение', url: APP_URL }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 'Привет! Нажми на кнопку, чтобы открыть веб-приложение:', opts);
});
