const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const perguntas = require('../../geral/fichaX');
const comando = require('../../structures/Comando');
const { once } = require('events');
const linksEmbedImg = require('../../geral/embedImg')



module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'ficha' ,
            desc: 'Cria uma ficha para você.',
            requireDatabase: true
        })
    }

    run = async (interaction) => {
        const userDB = await this.client.db.users.findById(interaction.member.id);
       // const check = userDB.ficha?console.log('true'):console.log('false');         <--------- Checar ficha
        let reply = false;
        if (!userDB?.ficha) {

            interaction.reply({ content: `Bem vindo(a), vamos nos divertir muito (^-^). Vamos começar...`})
            reply = true;
            let cor = '';
            let ATKF = 0, HPF = 0, SPEF = 0, ACF = 85
            let Itemf1 = '';
            let Itemf2 = '';

            criarFicha()
                .then()
                .catch((erro) => {
                    const embed = new MessageEmbed()
                        .setColor('RED')
                        .setTitle('Ficha não concluída!')
                        .setDescription(`${erro}`)

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
                        const collector = msg.createMessageComponentCollector({ filter, max: 1, time: (5 * 60000)})

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
                        const collector = channel.createMessageCollector({ filter, max: 1, time: (5 * 60000)})

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
                } //for

                const pos = resps.map(function(e) { return e.reg; });

                cor = resps[pos.indexOf('Cor')].value

                //definir valores e itens pelo emblema

                switch(resps[pos.indexOf('Emblema')].value){
                    case 'Rei': ATKF = 20; HPF = 40; SPEF = 20; ACF = 1;
                        Itemf1 = 'Cálice'; Itemf2 = 'Capa';
                        break;
                    case 'Espada': ATKF = 30; HPF = 30; SPEF = 30; ACF = 0;
                        Itemf1 = 'Faca'; Itemf2 = 'Escudo';
                        break;
                    case 'Musica': ATKF = 10; HPF = 50; SPEF = 10; ACF = 2;
                        Itemf1 = 'Flauta'; Itemf2 = 'Sino';
                        break;
                    case 'Engrenagem':  ATKF = 30; HPF = 30; SPEF = 10; ACF = 2;
                        Itemf1 = 'Estilingue'; Itemf2 = 'Flash Bang';
                        break;
                    case 'Sorriso':  ATKF = 10; HPF = 50; SPEF = 30; ACF = 0;
                        Itemf1 = 'Balão'; Itemf2 = 'Flores';
                        break;
                    default: throw ('Algo deu errado com o emblema')
                        break;
                } //switch

                resps.push(
                    {
                        reg: 'Status',
                        LVL: 1,
                        EXP: 0,
                        ATK_S: ATKF,
                        ATK: ATKF,
                        HP_S: HPF,
                        HP: HPF,
                        SPE_S: SPEF,
                        SPE: SPEF,
                        AC_S: ACF,
                        AC: (85 + ACF)
                    },{reg: 'Item1', value: Itemf1},{reg: 'Item2', value: Itemf2})

                //console.log(resps)                                           <------------------ checar resps
                
                if(interaction.user.db.ficha) interaction.user.db.ficha.dados = resps
                else interaction.user.db.ficha = {dados: resps}
                
                interaction.user.db.save()           //  <--------------- Salvar a db aqui
                interaction.channel.send('Ficha criada. Agora este comando servirá para você visualizar a sua ficha \n d~(o-o)~b')
                } //criarFicha

        }else{   //userDB.Ficha?

        status().then()
                .catch((erro) => {
                    const embed = new MessageEmbed()
                        .setColor('RED')
                        .setTitle('Erro na ficha!')
                        .setDescription(`${erro}`)

                        interaction.channel.send({ content: interaction.user.toString(), embeds: [embed]})
                    })

                async function status() {
                if(!reply){                                               // <-------------------- reply
                    interaction.reply({ content: `**Ficha de ${interaction.user.toString()}**`})
                }

                    const member = interaction.member; const channel = interaction.channel;

                    if (userDB?.ficha) {
                        const dados = userDB.ficha.dados;
                        const img = linksEmbedImg.map(function(e) { return e.reg; });
                        const posF = dados.map(function(e) { return e.reg; });
                        
                        let Nome = dados[posF.indexOf('Nome')].value; let Emblema = dados[posF.indexOf('Emblema')].value;
                        let Natalidade = dados[posF.indexOf('Natalidade')].value; let Sexo = dados[posF.indexOf('Sexo')].value;
                        let It1 =  dados[posF.indexOf('Item1')].value; let It2 =  dados[posF.indexOf('Item2')].value;
                        let St = dados[posF.indexOf('Status')]; var barraExp =''; let LVLup = (((St.LVL - 1) * 100) + (50 * (0 ** (St.LVL - 1))))
                        let qtdLVLF = parseInt(((100 / LVLup) * St.EXP) / 10);
                        let url = linksEmbedImg[img.indexOf(Emblema)].value;
                        
                        //console.log(qtdLVLF , LVLup)

                        if(!cor) {var cor = dados[posF.indexOf('Cor')].value;}

                        switch(cor){
                            case '#FF0000': 
                                for(let i = 0; i < qtdLVLF ; i++){barraExp = barraExp + '⬜'}
                                for(let i = 0; i < 10 - qtdLVLF; i++){barraExp = barraExp + '🟥'}
                                break;
                            case '#FFFF00':
                                for(let i = 0; i < qtdLVLF ; i++){barraExp = barraExp + '⬜'}
                                for(let i = 0; i < 10 - qtdLVLF; i++){barraExp = barraExp + '🟨'}
                                break;
                            case '#00FF00':
                                for(let i = 0; i < qtdLVLF ; i++){barraExp = barraExp + '⬜'}
                                for(let i = 0; i < 10 - qtdLVLF; i++){barraExp = barraExp + '🟩'}
                                break;
                            case '#0000FF':
                                for(let i = 0; i < qtdLVLF ; i++){barraExp = barraExp + '⬜'}
                                for(let i = 0; i < 10 - qtdLVLF; i++){barraExp = barraExp + '🟦'}
                                break;
                            case '#010101':
                                for(let i = 0; i < qtdLVLF ; i++){barraExp = barraExp + '⬜'}
                                for(let i = 0; i < 10 - qtdLVLF; i++){barraExp = barraExp + '⬛'}
                                break;
                            default: throw('Algo deu errado com a barra de HP')
                        }
                
                        let ficha = new MessageEmbed()
                            .setTitle('Ficha:')
                            .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true }))
                            .setTimestamp()
                            .setFooter(`ID de usuário: ${interaction.user.id}`)
                            .setColor(cor)
                            .setThumbnail(url)
                            .setDescription(
                                `**Nome:** \`\`\` ${Nome} \`\`\`
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**LVL**~(**${St.LVL}**)   |   **Emblema:** **${Emblema}**
**Próximo LVL:** ${St.EXP}/${LVLup}
 \`\`\` ${barraExp} \`\`\`
**Veio de:** \`${Natalidade}\` | **Sexo:** ${Sexo}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**HP:** ~**${St.HP_S}**~   |   **AC:** \` ${St.AC_S}% \` 

**Item1:** \` ${It1} \`   |   **Item2:** \` ${It2} \`
**ATK:** \` ${St.ATK_S} \`           |       **SPE:** \` ${St.SPE_S} \``)

                
                        interaction.channel.send({ embeds: [ficha] })
                        
                }else throw('Erro na database')     //UserDB Denovo
                        
            } //statusFunção
            
        } //else userDB.ficha
    } //run
} //module.exports