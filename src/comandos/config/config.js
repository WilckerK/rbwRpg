const { interaction } = require('discord.js');
const comando = require('../../structures/Comando');

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'config' ,
            desc: 'Configurar a database.',
            requireDatabase: true,
            options: [
                {
                    type: 'SUB_COMMAND_GROUP',
                    name: 'welcome',
                    description: 'Configurar o sistema de boas vindas.',
                    options: [
                        {
                            type: 'SUB_COMMAND',
                            name: 'canal_entrada',
                            description: 'Configurar o canal onde será enviado.',
                            options: [{
                                type: 'CHANNEL',
                                name: 'canal',
                                description: 'Canal de texto onde será enviado',
                                required: true
                            }]
                        }
                    ]
                }
            ]
        })
    }

    run = (interaction) => {
        if(!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({content: 'Você não tem permissão para este comando.'})

        const subCommandGroup = interaction.options.getSubcommandGroup()
        const subCommand = interaction.options.getSubcommand()

        require(`../../subComandos/config/${subCommandGroup}/${subCommand}`)(this.client, interaction)
        
    }
}