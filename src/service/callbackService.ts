import bot from '../index'

class CallbackService {
  first_file_id = 'AgACAgIAAxkBAAIBhGQx1aar6UwyXEjM8newf1j8zLPIAAL9xzEbRE-RSXqqa6aLlsjCAQADAgADcwADLwQ'
  first_button_text = `❗️<b>ПРОГРАММА ИНТЕНСИВА «СКОРОСТЬ»</b>❗️

 1. План бизнес-развития и роста Мастеров Маникюра. 
 2. Как увеличить средний чек на Верхних формах. 
 3. Как делать крепко // тонко // носибельно // быстро. 
 4. Моделирование на Верхних Форм за 1,5 часа. 
 5. Коррекция за 1 час. 
 6. Разновидность материалов для работы на Верхних Формах. 

<b>Вы научитесь⤵️</b>

✔️ Подбирать Верхние Формы под разные ногти. 
✔️ Быстро выкладывать материал в форму без затеков и пузырей. 
✔️ Работать без опила. 
✔️ Применять Верхние Формы в сложные коррекции. 

<b>Скоростной опил </b>
✅ Форма квадрат, френч. 
✅ Форма овал омбре, стемпинг. 

 7. Схема скоростного маникюра.
 8. Правильная подготовка НП. 
 9. Секреты работы без отслоек. 
 10. Планирование и баланс контента мастера. 
 11. Инструменты работы для фото- и видео-съемки. 

💸<b>Стоимость</b>: первым 100 по 100€ (вместо <s>300€</s>).

👉<a href='https://docs.google.com/forms/d/e/1FAIpQLScyPcapCAlfkEWtKtahKQDi9XClwTZZnMUPpmwJ_2TC8OLGcg/viewform'>ПРЕДЗАПИСЬ НА ИНТЕНСИВ</a>`

  second_button_text = 'Немного терпения.\nМы скоро вам всё расскажем!'

  Speed(chatId: number) {
    bot.sendPhoto(chatId, this.first_file_id, {
      caption: this.first_button_text,
      parse_mode: 'HTML'
    })
  }

  Buisness(chatId: number) {
    bot.sendMessage(chatId, this.second_button_text)
  }
}

export default CallbackService
