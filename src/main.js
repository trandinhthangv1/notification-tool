import 'dotenv/config';
import { Telegraf } from 'telegraf';

const main = async () => {
  const token = process.env.TELEGRAM_TOKEN;
  const channelID = process.env.TELEGRAM_CHANNEL_ID;
  const message = '⏰⏰⏰ ĐÃ TỚI LÚC LẤY VỢ RỒI BẠN ƠI!!!';

  const bot = new Telegraf(token);
  await bot.telegram.sendMessage(channelID, message);
};

export default main;
