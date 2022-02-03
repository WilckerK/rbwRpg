const { interaction } = require('discord.js');
const comando = require('../../structures/Comando');

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'cor' ,
            desc: 'Troca de cor',
            requireDatabase: true,
            options: [
                {
                    name: 'escolha',
                    type:'STRING',
                    description: 'Qual a cor? [Vermelho, Amarelo, Verde, Azul ou Preto]',
                    required: true
                }
            ]
        })
    }

    run = async (interaction) => {
        const cor = interaction.options.getString('escolha')
        let hex = 'x';
        switch(cor){
            case'Vermelho': hex = '#FF0000';
            break;
            case'Amarelo': hex = '#FFFF00';
            break;
            case'Verde': hex = '#00FF00';
            break;
            case'Azul': hex = '#0000FF';
            break;
            case'Preto': hex = '#010101';
            break;
            default: interaction.reply(({ content: `Por favor mande uma cor válida com a primeira letra maiúscula.`, ephemeral: true}))
        }
        
        if(hex !== 'x'){
            await interaction.userEdit.updateOne({_id: interaction.member.id, "ficha.dados.reg" : "Cor"},
            {$set: {"ficha.dados.$.value" : hex}});
        }
    }
}