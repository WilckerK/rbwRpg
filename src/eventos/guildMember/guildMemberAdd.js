const Evento = require('../../structures/Evento')

module.exports = class extends Evento {
    constructor(client) {
        super(client, {
            nome: 'guildMemberAdd'
        })
    }

    run = async (member) => {
        const guildDB = await this.client.db.guilds.findById(member.guild.id)

        if (guildDB?.welcome) {
            const welcomeChannel = member.guild.channels.cache.get(guildDB.welcome.channel)

            welcomeChannel?.send(`${member.toString()}, seja bem vindo ao nosso servidor!`) // <--- Mensagem de boas vindas
        }
    }
}