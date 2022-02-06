const comando = require('../../structures/Comando')

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'fale' ,
            desc: 'Faz o bot repetir algo que escrever',
            options: [
                {
                    name: 'canal',
                    type:'CHANNEL',
                    description: 'Qual canal?',
                    required: true
                },
                
                {
                    name: 'mensagem',
                    type:'STRING',
                    description: 'Qual a mensagem?',
                    required: true
                }
            ]
        })
    }

    run = (interaction) => {
       const canal = interaction.options.getChannel('canal')
        if (!['GUILD_TEXT', 'GUILD_ANNOUCEMENTS'].includes(canal.type)) 
            return interaction.reply('Por favor cite apenas canais de texto do servidor.')

        const mensagem = interaction.options.getString('mensagem')

        canal.send({content: mensagem})
            .then(() => interaction.reply({content: 'Enviado! (^-^)-b ', ephemeral: true}))
            .catch(() => interaction.reply({content: 'Algo deu errado.', ephemeral: true}))
    }
}