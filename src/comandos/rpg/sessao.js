const comando = require('../../structures/Comando');
const tela  = require('../../geral/cenas/tela.js');

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'sessao' ,
            desc: 'Inicia a sua sessão do rpg.',
            requireDatabase: true
        })
    }

    run = async(interaction) => {
        const userDB = await this.client.db.users.findById(interaction.member.id);
        if (!userDB?.ficha) {
            interaction.reply(`Antes de começar, pfv faça a sua ficha com o comando: /ficha `);
        }else{
        
            interaction.reply(`Bem vindo de volta!!! 
O bot está preparando a cena,
assim que pronta começaremos... ~(°~°)~`);
            async function criar(){

                await tela(interaction, userDB.ficha.dados);

            }

            criar();
        }
    }
}

