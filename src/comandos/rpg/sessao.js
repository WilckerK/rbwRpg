const { Interaction } = require('discord.js');
const comando = require('../../structures/Comando');

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'sessao' ,
            desc: 'Inicia a sua sessão do rpg.'
        })
    }

    run = (Interaction) => {
        Interaction.reply(`Pong! O ping do bot é \` ${this.client.ws.ping} \` ms.`)
    }
}