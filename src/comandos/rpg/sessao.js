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
        
        interaction.reply(`Bem vindo de volta!!! 
O bot está preparando a cena,
assim que pronta começaremos... ~(°~°)~`);
        async function criar(){

            let foto = await tela(interaction);

        }

        criar();
        
    }
}

