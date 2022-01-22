const {MessageActionRow , MessageButton, MessageEmbed} = require('discord.js');
const inimigosX = require('./inimigosX');

    const Row = new MessageActionRow().addComponents([
        new MessageButton().setStyle('DANGER').setLabel('Ataque').setCustomId('Ataque'),
        new MessageButton().setStyle('SUCCESS').setLabel('Desvio').setCustomId('Desvio'),
        new MessageButton().setStyle('SECONDARY').setLabel('Fugir').setCustomId('Fugir')
    ])

    const battle = async(interaction, inimigo, ficha) => {
        let actP = 'Escoha a sua ação...'
        let actI = 'Avança em sua direção prestes a te atacar'


        //embed
        let msg = new MessageEmbed()
            .setTitle(inimigo.nome)
            .setDescription(`=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${ficha[5].HP}
${actP}

=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${ficha[8].HP}
${actI}`);
        
        await interaction.channel.send({ embeds: [msg], components:[Row] });
 
    }

module.exports = battle;

/*
indexação da data, para evitar mapeamento, que pesaria no processamento

0 = Nome
1 = emblema
2 = Natalidade
3 = Sexo
4 = cor
5 = status
6 = item
7 = local
8 = inimigo
*/