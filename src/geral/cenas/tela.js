const jimp = require('jimp');
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageAttachment } = require('discord.js');
const backgroundX = require('../../geral/cenas/backgroundX');

    const tela = async(interaction) => {
        let bg = backgroundX.map(function(e) { return e.reg; });      // <------ bg é o mapeamento
        let index = bg.indexOf('E1');
        let fundo = backgroundX[index].img;                   // <------ a variavel img do reg procurado
        const nomeDoLugar = backgroundX[index].nome;

        let fonte = await jimp.loadFont(jimp.FONT_SANS_64_WHITE);
        
        let img = await jimp.read(fundo);
        let texto = 'Eu preciso escrever um texto com 160 letras pra testar qual é o limite da caixa de diálogo que eu coloquei nas imagens, pois eu não consigo diminuir a fonte no jimp triste dms slk.'
        let person = await jimp.read('src/imagens/personagens/c0r0nga.png');

        img.print(fonte, 50, 730, texto, 1200);
        img.composite(person, 640, 720);
        let nomeDaImagem =  interaction.user.id.toString() + '.jpg';

        //#region limpar
        index = null;                                        // <---- liberando memória para uma melhor performace
        fonte = null;
        fundo = null;
        bg = null;
        texto = null;
        person = null;
        //#endregion

        img.write(nomeDaImagem)
        img = null;


        const file = new MessageAttachment(('./' + nomeDaImagem))              // <--- colocando a imagem no Attachment do embed

        let msg = new MessageEmbed()
            .setTitle(nomeDoLugar)
            .setImage('attachment://' + nomeDaImagem);
        console.log(nomeDaImagem)

        interaction.channel.send({ embeds: [msg] , files: [file] })                    // <--- enviando a mensagem


    }
module.exports = tela;