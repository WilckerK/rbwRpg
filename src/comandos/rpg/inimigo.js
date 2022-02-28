const { MessageEmbed, MessageAttachment } = require('discord.js');
const comando = require('../../structures/Comando');
const inimigosX = require('../../geral/cenas/inimigosX')

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'inimigo' ,
            desc: 'Mostra informações sobre um inimigo especifico.',
            options: [
                {
                    name: 'nome',
                    type:'STRING',
                    description: 'Qual o nome do inimigo? Lembre-se que deve estar correto.',
                    required: true
                }
            ]
        })
    }

    run = (interaction) => {
        const inimigo = interaction.options.getString('nome');
        let txt = '', reg = 0, url = '', img = '';
        switch(inimigo.toLowerCase()){
            case 'vijam':
                reg = 101; txt = 'Uma bolinha azul que flutua em movimentos que se assemelham a uma dança.';
                url = './src/imagens/cubicos/Vijam.jpg'; img = 'Vijam.jpg';
                break;
            case 'crim':
                reg = 102; txt = 'Seu corpo aparenta estar cercado por um vidro vermelho, ele é completamente agitado.';
                url = './src/imagens/cubicos/Crim.jpg'; img = 'Crim.jpg';
                break;
            case 'aum':
                reg = 103; txt = 'Em volta do seu corpo aparenta que está sendo criado uma ilusão.';
                url = './src/imagens/cubicos/Aum.jpg'; img = 'Aum.jpg';
                break;
            case 'gueira':
                reg = 104; txt = 'Uma melodia profunda sai do seu corpo, como se estivesse cantando o tempo todo.';
                url = './src/imagens/cubicos/Gueira.jpg'; img = 'Gueira.jpg';
                break;
            case 'garnex':
                reg = 105; txt = 'Seus passos fazem a terra tremer, ele se move lentamente mas com impacto a cada passo.';
                url = './src/imagens/cubicos/Garnex.jpg'; img = 'Garnex.jpg';
                break;
            case 'kubura':
                reg = 106; txt = 'Semelhante a um dragão, ele dessaparece em meio as sombras e é rápido como vulto.';
                url = './src/imagens/cubicos/Kubura.jpg'; img = 'Kubura.jpg';
                break;
            case 'vulcan':
                reg = 107; txt = 'Os tentáculos aparentam ter vida própria. Ele bate suas garras de metal como se estivesse tocando instrumentos.';
                url = './src/imagens/cubicos/Vulcan.jpg'; img = 'Vulcan.jpg';
                break;
            case 'garoodia':
                reg = 108; txt = 'Parecido com uma ave o seu piado lembra um riso como se estivesse gargalhando.';
                url = './src/imagens/cubicos/Garoodia.jpg'; img = 'Garoodia.jpg';
                break;
            case 'duza':
                reg = 109; txt = 'Seus braços se esticam por metros, mesmo seu corpo aparentando ser de metal, ele flutua sem dificuldade.';
                url = './src/imagens/cubicos/Duza.jpg'; img = 'Duza.jpg';
                break;
            case 'indiora':
                reg = 110; txt = 'O sorriso no seu peito é capaz paralizar de medo qualquer ser vivo.';
                url = './src/imagens/cubicos/Indiora.jpg'; img = 'Indiora.jpg';
                break;
            case 'gundil':
                reg = 111; txt = 'Seu corpo formado por rochas não o impede de ser rápido e forte em seus ataques.';
                url = './src/imagens/cubicos/Gundil.jpg'; img = 'Gundil.jpg';
                break;
            case 'rasha':
                reg = 112; txt = 'Sua longa espada é capaz de cortar os metais mais rígidos da terra.';
                url = './src/imagens/cubicos/Rasha.jpg'; img = 'Rasha.jpg';
                break;
            case 'crimson nova':
                reg = 113; txt = 'Suas laminas em conjunto da sua velocidade são capazes de cortar seu oponente em segundos.';
                url = './src/imagens/cubicos/CrimsonNova.jpg'; img = 'CrimsonNova.jpg';
                break;
            case 'trinity':
                reg = 114; txt = '???';
                url = './src/imagens/cubicos/Trinity.jpg'; img = 'Trinity.jpg';
                break;
                default: txt = 'O inimigo não foi reconhecido, talvez esse inimigo não exista ou você escreveu errado. Lembre-se sempre dos acentos e espaços corretamente.';
                break;
            }
            let msg = null;
            if(reg !== 0){
            const status = inimigosX[(reg - 101)]; let check = false;
            const hp = status.HP, atk = status.ATK, spe = status.SPE, acc = status.AC, emb1 = status.emblemas[0], emb2 = status.emblemas[1];
           
            let file = new MessageAttachment((url))
                msg = new MessageEmbed()
                    .setTitle(`${inimigo[0].toUpperCase() + inimigo.slice(1).toLowerCase()}`)
                    .setColor('#010101')
                    .setImage('attachment://' + img)
                    .setDescription(`=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**HP:** ~**${hp}**~   |   **AC:** ** ${acc}%  **
**ATK:**  ${atk}    |   **SPE:**  ${spe} 
**Emblema 1:** **\` ${emb1} \`** 
**Emblema 2:** **\` ${emb2} \`**
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
${txt}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=`)
                    .setTimestamp()
                    .setFooter(`ID de usuário: ${interaction.user.id}`)
                    
                interaction.reply({ embeds: [msg], files: [file], fetchReply: true})
            }else{
                msg = new MessageEmbed()
                    .setTitle(`${inimigo}`)
                    .setColor('#010101')
                    .setDescription(txt)
                    .setTimestamp()
                    .setFooter(`ID de usuário: ${interaction.user.id}`)
                    
                interaction.reply({ embeds: [msg] })   
            }
            
    }
}