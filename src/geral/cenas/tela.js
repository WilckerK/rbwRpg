const jimp = require('jimp');
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageAttachment } = require('discord.js');
const backgroundX = require('../../geral/cenas/backgroundX');

    const tela = async(interaction) => {
        const bg = backgroundX.map(function(e) { return e.reg; });      // <------ bg é o mapeamento 
        const img = backgroundX[bg.indexOf('E1')].img;                   // <------ a variavel img do reg procurado
        const nomeDoLugar = backgroundX[bg.indexOf('E1')].nome;

        const fonte = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
        
        let fundo = await jimp.read(img);

        //console.log('aaaa')                                                // <---- teste se o o endereço está pegando a imagem

        fundo.print(fonte, 300, 300, 'sÓ TESTANDO BRO');
        let nomeDaImagem =  interaction.user.id.toString() + '.jpg';
        fundo.write(nomeDaImagem)
        
        const file = new MessageAttachment(('./' + nomeDaImagem))

        let msg = new MessageEmbed()
            .setTitle(nomeDoLugar)
            .setImage('attachment://' + nomeDaImagem);
        console.log(nomeDaImagem)

        interaction.channel.send({ embeds: [msg] , files: [file] })


}
module.exports = tela;