const { interaction } = require('discord.js');
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const comando = require('../../structures/Comando');
const tela  = require('../../geral/cenas/tela.js');

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'sessao' ,
            desc: 'Inicia a sua sessão do rpg.'
        })
    }

    run = (interaction) => {
        
        interaction.reply(`Ativou`);
        async function criar(){

            let foto = await tela(interaction);

        }

        criar();
        
    }
}

