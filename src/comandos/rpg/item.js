const { MessageEmbed } = require('discord.js');
const comando = require('../../structures/Comando');
const linksEmbedImg = require('../../geral/embedImg')

module.exports = class extends comando{
    constructor(client){
        super(client, {
            nome: 'item' ,
            desc: 'Mostra informações sobre um item especifico.',
            options: [
                {
                    name: 'nome',
                    type:'STRING',
                    description: 'Qual o nome do item? Lembre-se que deve estar correto.',
                    required: true
                }
            ]
        })
    }

    run = (interaction) => {
        const item = interaction.options.getString('nome');
        let txt = '', Emblema = '';
        switch(item.toLowerCase()){
            case 'cálice': txt = 'Aumenta seu HP em 10% e te dá 10 de cura extra durante desvios.'; 
            Emblema = 'Rei';
            break;
            case 'faca': txt = 'Aumenta sua velocidade em 5% e acrescenta 10 de ataque.'; 
            Emblema = 'Espada';
            break;
            case 'flauta': txt = 'Aumenta 6% do seu acerto e diminui 5% do acerto do seu oponente.';  
            Emblema = 'Musica';
            break;
            case 'estilingue': txt = 'Adiciona 10 de velocidade e acrescenta 3% do seu acerto.';  
            Emblema = 'Engrenagem';
            break;
            case 'balão': txt = 'Aumenta em 6 sua velocidade e reduz em 5% o acerto do oponente.';  
            Emblema = 'Sorriso';
            break;
            case 'capa': txt = 'Acrescenta 30% da sua velocidade e 20 pontos de desvio extra.';  
            Emblema = 'Rei';
            break;
            case 'escudo': txt = 'Aumenta seu HP em 15%, se estiver acompanhado de uma espada, seu inimigo perde 3% de acerto e você ganha 10 pontos de desvio.';  
            Emblema = 'Espada';
            break;
            case 'sino': txt = 'Você ganha de EXP seu LVL multiplicado por 3 toda vez que entrar em uma batalha.';  
            Emblema = 'Musica';
            break;
            case 'flash bang': txt = 'Seu oponente perde 13% de acerto, você ganha 5 pontos de desvio e corrida.';  
            Emblema = 'Engrenagem';
            break;
            case 'flores': txt = 'Seu HP aumenta em 20 pontos e seu oponente perde 10% do ataque dele.';  
            Emblema = 'Sorriso';
            break;
            case 'cetro': txt = 'Você ganha 20% em HP, ataque e velocidade, além de ganhar 2% de acerto.';  
            Emblema = 'Rei';
            break;
            case 'espada': txt = 'Acrescenta 35 pontos de ataque, se estiver acompanhado do escudo, ganha mais 15 pontos de ataque e seu oponente perde 2% de acerto.';  
            Emblema = 'Espada';
            break;
            case 'violão': txt = 'Adiciona 5 pontos de corrida e 15 pontos de cura extra nos desvios.';  
            Emblema = 'Musica';
            break;
            case 'revólver': txt = 'Adiciona 40 pontos de ataque, 5% no seu acerto e 10 pontos de desvio.';  
            Emblema = 'Engrenagem';
            break;
            case 'livro': txt = 'Torna a corrida garantida, acrescenta 5% de acerto e 30 pontos no seu HP.';  
            Emblema = 'Sorriso';
            break;
            case 'colar': txt = 'Sempre que vencer uma batalha você vai ganhar 150% do EXP.';  
            Emblema = 'Rei';
            break;
            case 'machado': txt = 'Acrescenta 30 de dano extra a cada ataque, mas você perde 10% da sua porcentagem de acerto e perde 10 pontos de velocidade.';  
            Emblema = 'Espada';
            break;
            case 'teclado': txt = 'Você ganha 20 pontos de desvio e 20% do HP de cura Extra a cada desvio, mas perde 30% de ataque.';  
            Emblema = 'Musica';
            break;
            case 'laser gun': txt = 'Aumenta em 35 pontos a sua velocidade, mas seu oponente ganha 10% de acerto, você perde 10% de acerto e oerde 30 pontos de corrida. ';  
            Emblema = 'Engrenagem';
            break;
            case 'guarda-chuva': txt = 'Seu oponente perde 30% de acerto, mas você perde 30 pontos de ataque e 20% do seu HP.';  
            Emblema = 'Sorriso';
            break;
            case 'coroa': txt = '???';  
            Emblema = 'Rei';
            break;
            case 'katana': txt = '???';  
            Emblema = 'Espada';
            break;
            case 'guitarra': txt = '???';  
            Emblema = 'Musica';
            break;
            case 'canhão': txt = '???';
            Emblema = 'Engrenagem';
            break;
            case 'filhotinho': txt = '???';  
            Emblema = 'Sorriso';
            break;
            default: txt = 'O item não foi reconhecido, talvez esse item não exista ou você escreveu errado. Lembre-se sempre dos acentos e espaços corretamente.'
            Emblema = '';
            break;
        }
        let msg = null;
        const brasao = linksEmbedImg.map(function(e) { return e.reg; });
        if(Emblema !== ''){const url = linksEmbedImg[brasao.indexOf(Emblema)].value;

            msg = new MessageEmbed()
                .setTitle(`${item[0].toUpperCase() + item.slice(1).toLowerCase()}`)
                .setColor('#010101')
                .setThumbnail(url)
                .setDescription(txt)
                .setTimestamp()
                .setFooter(`ID de usuário: ${interaction.user.id}`)
        }else{
            msg = new MessageEmbed()
                .setTitle(`${item}`)
                .setColor('#010101')
                .setDescription(txt)
                .setTimestamp()
                .setFooter(`ID de usuário: ${interaction.user.id}`)
        }
        interaction.reply({ embeds: [msg] })
    }
}
/*'Nada': txt = ''; 
'Cálice': txt = ''; 
'Faca': txt = ''; 
'Flauta': txt = ''; 
'Estilingue': txt = ''; 
'Balão': txt = ''; 
'Capa': txt = ''; 
'Escudo': txt = ''; 
'Sino': txt = ''; 
'Flash Bang': txt = ''; 
'Flores': txt = ''; 
'Cetro': txt = ''; 
'Espada': txt = ''; 
'Violão': txt = ''; 
'Revólver': txt = ''; 
'Livro': txt = ''; 
'Colar': txt = ''; 
'Machado': txt = ''; 
'Teclado': txt = ''; 
'Laser Gun': txt = ''; 
'Guarda-Chuva': txt = ''; 
'Coroa': txt = ''; 
'Katana': txt = ''; 
'Guitarra': txt = ''; 
'Canhão': txt = ''; 
'Filhotinho': txt = '';  */