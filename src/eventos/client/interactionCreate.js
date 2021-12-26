const Evento = require('../../structures/Evento')

module.exports = class extends Evento {
    constructor(client) {
        super(client, {
            nome: 'interactionCreate'
        })
    }

    run = (interaction) => {
        if (interaction.isCommand()){
            const cmd = this.client.comandos.find(c => c.name === interaction.commandName)

            if(cmd) cmd.run(interaction)
        }
    }
}