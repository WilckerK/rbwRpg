const Evento = require('../../structures/Evento');

module.exports = class extends Evento {
    constructor(client) {
        super(client, {
            nome: 'interactionCreate'
        })
    }

    run = async (interaction) => {
        if (interaction.isCommand()){
            if(!interaction.guild || !interaction.user ) return 
            const cmd = this.client.comandos.find(c => c.name === interaction.commandName)

            if(cmd){ 
                if(cmd.requireDatabase) {

                    interaction.guild.db = 
                    await this.client.db.guilds.findById(interaction.guild.id) ||
                    new this.client.db.guilds({ _id: interaction.guild.id})

                    interaction.user.db = 
                    await this.client.db.users.findById(interaction.member.id) ||
                    new this.client.db.users({ _id: interaction.member.id})
                    
                }

                cmd.run(interaction)
            }
        }
    }
}