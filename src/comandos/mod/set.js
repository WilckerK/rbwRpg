const comando = require('../../structures/Comando')

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'set' ,
            desc: 'Salvar algo na db',
            requireDatabase: true,
            options: [
                {
                    name: 'index',
                    type:'STRING',
                    description: 'Qual database deseja mexer?',
                    required: true,
                    choices: [
                        {
                            name: 'Nome',
                            value: 'Nome'
                        },
                        {
                            name: 'Emblema',
                            value: 'Emblema'
                        },
                        {
                            name: 'Natalidade',
                            value: 'Natalidade'
                        },
                        {
                            name: 'Sexo',
                            value: 'Sexo'
                        },
                        {
                            name: 'Cor',
                            value: 'Cor'
                        },
                        {
                            name: 'Status',
                            value: 'Status'
                        },
                        {
                            name: 'Item',
                            value: 'Item'
                        },
                        {
                            name: 'Local',
                            value: 'Local'
                        },
                        {
                            name: 'Inimigo',
                            value: 'Inimigo'
                        },
                        {
                            name: 'Personagem',
                            value: 'Personagem'
                        },
                        {
                            name: 'Coletaveis',
                            value: 'Coletaveis'
                        }
                    ]
                },
                
                {
                    name: 'variavel',
                    type:'STRING',
                    description: 'Qual a variavel?',
                    required: true
                },

                {
                    name: 'valor',
                    type:'STRING',
                    description: 'Qual o novo valor?',
                    required: true
                },
            ]
        })
    }

    run = (interaction) => {
       const index = interaction.options.getString('index');
       let variavel = interaction.options.getString('variavel');
       let valor = interaction.options.getString('valor');

        salvar(interaction, index, variavel, valor)
            .then(() => interaction.reply({content: 'Salvo! (^-^)-b ', ephemeral: true}))
            .catch(() => interaction.reply({content: 'Algo deu errado.', ephemeral: true}))
    }
}

async function salvar(interaction, index, variavel, valor){
    variavel = 'ficha.dados.$.' + variavel;
    let Nan = valor;
    if (!isNaN(valor)){valor = parseFloat(valor);}
    console.log(index + ', ' + variavel + ', ' + valor);
    await interaction.userEdit.updateOne({_id: interaction.member.id, "ficha.dados.reg" : (index)},{$set: {[variavel] : (valor)}});
}