import { Users } from "../db/db"
import bot from "../index"

class AdminService {

  adminGroupId = -710794900

  async sendToAll(reply: string | null, chatId: number, reply_video: string | null, photo_id: string | null, caption: string | null) {
    const usersList = await Users.findAll()
    let users: number[] = []
    for (let i = 0; i < usersList.length; i++) {
      users.push(usersList[i].dataValues.userId)
    }
    bot.sendMessage(chatId, 'Дорогой Администратор, начинаю рассылку сообщения')
    if (reply_video) {
      for (let i = 0; i < users.length; i++) {
        bot.sendVideo(users[i], reply_video, {
          caption: caption ? caption : ''
        })
      }
    } else if (reply) {
      for (let i = 0; i < users.length; i++) {
        bot.sendMessage(users[i], reply)
      }
    } else if (photo_id) {
      for (let i = 0; i < users.length; i++) {
        bot.sendPhoto(users[i], photo_id, {
          caption: caption ? caption : ''
        })
      }
    }
  }

  sentToAdmin(message_id: number, chatId: number, user: string) {
    bot.sendMessage(chatId, 'С вами скоро свяжется наш администратор :)')
    bot.forwardMessage(this.adminGroupId, chatId, message_id)
    bot.sendMessage(this.adminGroupId, `${'@' + user}`)
  }
}

export default AdminService
