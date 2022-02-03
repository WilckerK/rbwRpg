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
                    description: 'Qual a cor?[Vermelho, Amarelo, Verde, Azul ou Preto]',
                    required: true
                }
            ]
        })
    }

    run = async (interaction) => {
        const cor = interaction.options.getString('escolha')
        let hex = 'x';
        switch(cor.toLowerCase()){
            case'vermelho': hex = '#FF0000';
            break;
            case'amarelo': hex = '#FFFF00';
            break;
            case'verde': hex = '#00FF00';
            break;
            case'azul': hex = '#0000FF';
            break;
            case'preto': hex = '#010101';
            break;
            case'roxo': hex = '#6A0DAD';
            break;
            case'rosa': hex = '#FF00FF';
            break;
            case'zzz': hex = '#00FFFF';
            break;
            default: interaction.reply(({ content: `Por favor mande uma cor válida.`, ephemeral: true}))
        }
        
        if(hex !== 'x'){
            await interaction.userEdit.updateOne({_id: interaction.member.id, "ficha.dados.reg" : "Cor"},
            {$set: {"ficha.dados.$.value" : hex}});
            interaction.reply(({ content: `Feito! (C_C)`, ephemeral: true}));
        }
    }
}