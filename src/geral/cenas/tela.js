const jimp = require('jimp');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const backgroundX = require('./backgroundX'); 
let inimigosX = require('./inimigosX'); let personagensX = require('./personagensX')
const battle = require('./battle');

    async function imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor){
        console.log(nomeDaImagem);
        img.write(nomeDaImagem);
            
        const file = new MessageAttachment(('./' + nomeDaImagem));              // <--- colocando a imagem no Attachment do embed
        let msg = new MessageEmbed()
            .setTitle(nomeDoLugar)
            .setColor(cor)
            .setImage('attachment://' + nomeDaImagem);
        await interaction.channel.send({ embeds: [msg] , files: [file]});                    // <--- enviando a mensagem
    
    }

    const tela = async(interaction, ficha) => {

        let cor = ficha[4].value;

        //mapeando index
        let indexDoFundo = (backgroundX.map(function(e) { return e.reg; })).indexOf(ficha[7].bg);
        const nomeDaImagem =  interaction.user.id.toString() + '.jpg';
        const nomeDoLugar = backgroundX[indexDoFundo].nome;

        //checando aparição/battle/npc

        let chance = backgroundX[indexDoFundo].chance;
        let npc = 114 //(Math.floor(Math.random() * 100) + 1 >= chance)?backgroundX[indexDoFundo].npc[Math.floor(Math.random() * 20)] : 0 ;

        if (npc !== 0){
            if(npc < 100){

                let inimigosX = null;
                //lendo infos
                
                let fundo = backgroundX[indexDoFundo].img;                  
                let fonte = await jimp.loadFont(jimp.FONT_SANS_64_WHITE);
                let img = await jimp.read(fundo);
                let texto = 'Eu preciso escrever um texto com 160 letras pra testar qual é o limite da caixa de diálogo que eu coloquei nas imagens, pois eu não consigo diminuir a fonte no jimp triste dms slk.'
                let person = await jimp.read('src/imagens/personagens/c0r0nga.png');

                //montando a imagem
                img.print(fonte, 50, 730, texto, 1200);
                img.composite(person, 640, 720);

                //#region limpar
                indexDoFundo = null;                                        // <---- liberando memória para uma melhor performace
                fonte = null;
                fundo = null;
                texto = null;
                person = null;
                npc = null;
                //#endregion

                //criando a imagem
                await imprimir(img, nomeDaImagem);

            }else{                                                         // <--- se for uma batalha
                
                personagensX = null;

                var inimigo = inimigosX[(npc - 101)];
                await jimp.read(inimigo.sprite).then(async img  => {
                    await imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor);
                })
                console.log(inimigo.sprite);
                await battle(interaction, inimigo, ficha,(backgroundX[indexDoFundo].derrota));
            }
        } else {                                                           // <--- se não tiver rolado encontro
            null
        }
        
    }
module.exports = tela;