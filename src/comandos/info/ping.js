const comando = require('../../structures/Comando');

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'ping' ,
            desc: 'Mostra o ping do bot'
        })
    }

    run = (interaction) => {
        interaction.reply(`Pong! O ping do bot é \` ${this.client.ws.ping} \` ms.`)
    }
}