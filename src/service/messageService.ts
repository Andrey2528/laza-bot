import { SendMessageOptions } from "node-telegram-bot-api";
import bot from "../index";
import { Users } from "../db/db";

class MessageService {

  hello_message = `Мы рады, что ты с нами! 
Теперь тебе больше не придется сливать кучу времени, денег, сил и энергии на бесконечные обучения, семинары, повышения квалификации🤭
<i>Ведь у нас ты получишь комплексное обучение по Маникюру // Педикюру, крутые инструменты для развития личного бренда, пошаговый план ведения бизнеса😯</i>

Сегодня у нас для тебя есть два разных формата: интенсив <b>«Скорость»</>b и <b>курс «Бизнес-система nail-мастера»</b>❗️

Чтобы узнать подробнее и забрать подарок, жми кнопки ниже⤵️  `

  hello_buttons: SendMessageOptions = {
    reply_markup: ({
      inline_keyboard: [
        [{ text: `Интенсив «Скорость»`, callback_data: 'speed' }],
        [{ text: `Курс «Бизнес-система nail-мастера»`, callback_data: 'buisness' }],
        [{ text: `Забирай подарок`, url: 'https://t.me/nailartclublaza' }]
      ]
    }),
    parse_mode: 'HTML'
  }

  async Hello(chatId: number) {
    bot.sendMessage(chatId, this.hello_message, this.hello_buttons)
    await Users.findOrCreate({
      where: { userId: chatId }
    })
  }

  Help(chatId: number) {
    bot.sendMessage(chatId, 'Просто напишите ваш вопрос Боту')
  }

}

export default MessageService
