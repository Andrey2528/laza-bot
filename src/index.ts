import TelegramBot = require("node-telegram-bot-api")
import MessageService from "./service/messageService"
import CallbackService from "./service/callbackService"
import AdminService from "./service/adminService"
import { sequelize } from "./db/db"

const adminService = new AdminService
const messageService = new MessageService
const callbackService = new CallbackService
const token = '6161554599:AAGsl1GerAcjW0MVSLxHN78dFJ-7bcazO4Q'
const bot = new TelegramBot(token, { polling: true })

bot.setMyCommands([
  { command: '/start', description: 'Приветствие' },
  { command: '/help', description: 'Вопрос нам' }
])

sequelize.authenticate()
sequelize.sync()

const admins = [
  'anastasia_hryn',
  'aprioricool',
  'KseniaLaza',
  'sdcgba'
]

bot.on('message', msg => {
  const chatId = msg.chat.id
  const text = msg.text
  const user = msg.chat.username
  const reply = msg.reply_to_message?.text
  const caption = msg.reply_to_message?.caption
  const reply_video = msg.reply_to_message?.video?.file_id
  const message_id = msg.message_id
  const photo = msg.reply_to_message?.photo
  const photo_id = photo ? photo[0].file_id : null
  switch (text) {
    case '/start':
      messageService.Hello(chatId)
      break
    case '/help':
      messageService.Help(chatId)
      break
    case `/send`:
      if (user && admins.indexOf(user) !== -1 && (reply_video || reply || photo_id)) {
        adminService.sendToAll(reply ? reply : null, chatId, reply_video ? reply_video : null, photo_id ? photo_id : null, caption ? caption : null)
      }
      break
    default:
      user && admins.indexOf(user) == -1 ? adminService.sentToAdmin(message_id, chatId, user) : null
      break
  }
})

bot.on('callback_query', msg => {
  const chatId = msg.message?.chat.id
  const data = msg.data
  const id = chatId ? chatId : -1
  switch (data) {
    case 'speed':
      callbackService.Speed(id)
      break
    case 'buisness':
      callbackService.Buisness(id)
      break
  }
})

export { sequelize }
export default bot
