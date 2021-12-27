const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const perguntas = require('../../geral/fichaX');
const comando = require('../../structures/Comando');
const { once } = require('events');

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'ficha' ,
            desc: 'Cria uma ficha para você.'
        })
    }

    run = (interaction) => {
        interaction.reply({ content: `Bem vindo(a), vamos nos divertir muito (^-^). Vamos começar...`})

        criarFicha()
            .then(resps => {
                //Colocar db aqui
            })
            .catch((erro) => {
                const embed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle('Ficha não concluída!')
                    .setDescription(erro)

                interaction.channel.send({ content: interaction.user.toString(), embeds: [embed]})
            })

        async function criarFicha(){
            const resps = []
            const channel = interaction.channel

            for (const pergunta of perguntas){
                const embed = new MessageEmbed()
                    .setTitle(pergunta.pergunta)
                    .setFooter('Você tem 5 minutos para responder cada pergunta, relaxe. (^-^)')

                if(pergunta.options){
                    const Row = new MessageActionRow().addComponents(new MessageSelectMenu(pergunta))

                    const msg = await channel.send({content: interaction.user.toString(), embeds: [embed], components: [Row]})
                    const filter = (i) => i.user.id === interaction.user.id
                    const collector = msg.createMessageComponentCollector({ filter, max: 1, time: (5 * 6000)})

                    const [collected, reason] = await once(collector, 'end')

                    if (reason === 'limit'){
                        msg.delete().catch(() => {})
                        resps.push({
                            reg: collected.first().customId,
                            value: collected.first().values.join(', ')
                        })
                    }else if (reason === 'time'){
                        msg.delete().catch(() => {})
                        throw ('O tempo acabou, por favor tente denovo.')
                    }else throw ('Ocorreu um erro estranho, por favor me avise sobre o ocorrido.')
                }else{
                    const msg = await channel.send({ content: interaction.user.toString(), embeds: [embed] })
                    const filter = (m) => m.author.id === interaction.user.id && m.content?.length
                    const collector = channel.createMessageCollector({ filter, max: 1, time: (5 * 6000)})

                    const [collected, reason] = await once(collector, 'end')

                    if (reason === 'limit'){
                        channel.bulkDelete([msg.id, collected.first().id]).catch(() => {})
                        resps.push({
                            reg: pergunta.reg,
                            value: collected.first().content
                        })
                    }else if (reason === 'time'){
                        msg.delete().catch(() => {})
                        throw ('O tempo acabou, por favor tente denovo.')
                    }else throw ('Ocorreu um erro estranho, por favor me avise sobre o ocorrido.')
                }

                console.log(resps)
            }
        }
    }
}