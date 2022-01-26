const jimp = require('jimp');
const { MessageEmbed, MessageAttachment, MessageActionRow , MessageButton } = require('discord.js');
const backgroundX = require('./backgroundX'); 
let inimigosX = require('./inimigosX'); let personagensX = require('./personagensX')
var continuidade = false; var trava = true;

//#region funções

    async function imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor){
        console.log(nomeDaImagem);
        img.write(nomeDaImagem);
        let check = false;
        do{
            file = new MessageAttachment(('./' + nomeDaImagem)); 
            let msg = new MessageEmbed()
                .setTitle(nomeDoLugar)
                .setColor(cor)
                .setImage('attachment://' + nomeDaImagem);
            await interaction.channel.send({ embeds: [msg] , files: [file]}).then((msg) => { // console.log(msg.embeds[0].image)
                if (msg.embeds[0].image){ check = true;}
                else {msg.delete().catch(() => {});}
            })
            
        }while(check === false)
    }

    async function coletarBatalha(collector, ATKI, ATKU, SPEU, SPEI, ACCI, ACCU, actU, actI, HPI, HPU, ficha, inimigo, derrotaI, derrotaU, Item1, Item2, interaction, derrota, enviada){

                //#region Funções de batalha

                function userAtacar(){
                    //console.log('Chamou userAtacar')
                    if(Math.floor(Math.random() * 100) + 1 <= ACCU){
                        let d20U = Math.floor(Math.random() * 20) + 1;
                        let danoU = Math.floor((((ATKU / ATKI) * 10) - (HPI / 10)) + (d20U - 5) + delta);
                        danoU = (danoU >= 0)? danoU : 0;
                        HPI -= danoU;
                        actU = actU +  `Você atacou o inimigo e tirou ${danoU} de Dano.
`;           
                        if(HPI <= 0){derrotaI = true;}
                    }else{actU = actU +  `Você errou o ataque.
`;}
                }
                
                function inimigoAtacar(){
                    //console.log('Chamou inimigoAtacar')
                    //let chanceSkill
                    if(Math.floor(Math.random() * 100) + 1 <= ACCI){
                        let d20I = Math.floor(Math.random() * 20);
                        let danoI = Math.floor((((ATKI / ATKU) * 10) - (HPU / 10)) + (d20I - 5));
                        danoI = (danoI >= 0)? danoI : 0;
                        HPU -= danoI;
                        actI =  actI + `O inimigo te atacou e tirou ${danoI} de Dano.
`;           
                        if(HPU <= 0){derrotaU = true;}
                    }else{actI = actI +  `Seu inimigo errou o ataque.
`;}
                }
                //#endregion

        collector.on('collect', (i) => {
            switch(i.customId){
                case 'Ataque':
                    let primeiroAIr = (SPEU != SPEI)?(SPEU > SPEI)?'U':'I':(Math.floor(Math.random() * 2) == 0)?'U':'I';
                    actU = '';
                    actI = '';
                    if (primeiroAIr == 'U'){
                        for(let turno = SPEU; turno >= SPEI; turno -= SPEI){
                            userAtacar();
                            if(derrotaI){break;}
                            if((turno -= SPEI >= SPEI)){ actU = actU + `Você é tão mais rápido que seu oponente, que ataca novamente.
`}
                        }
                        if(!derrotaI){inimigoAtacar();}
                        else{HPI = 0; actU = `O oponente foi derrotado por você.`}

                        txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}`
                    }else{
                        for(let turno = SPEI; turno >= SPEU; turno -= SPEU){
                            inimigoAtacar();
                            if (derrotaU){break;}
                            if((turno -= SPEI > SPEU)){ actI = actI + `Seu oponente e tão mais rápido que você, que ataca novamente.
`}
                        }

                        if(!derrotaU){userAtacar()}
                        else{HPU = 0; actU = `Você foi derrotado pelo oponente.`}

                        txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}                       
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}`
                    }

                    msg = new MessageEmbed()
                        .setTitle(inimigo.nome)
                        .setFooter(`Item 1: ${Item1} | Item 2: ${Item2}`)
                        .setDescription(txt);
                    
                    break;
                case 'Desvio':
                    break;
                case 'Correr':
                    break;
                default:
                    break;
            }
            if(!derrotaU && !derrotaI){i.update({embeds: [msg]})}
            else{
                i.update({embeds: [msg], components: []}); 
                collector.stop();
                if(derrotaU){interaction.user.db.ficha.dados[7].bg = derrota; interaction.user.db.save()}
                tela(interaction, ficha);
            }
        })
        
        collector.on('end', async(collected, reason) => {
            if (reason === 'time'){


                let timeMsg = new MessageEmbed()
                    .setTitle('Seção Finalizada')
                    .setDescription(`A seção foi terminada devido ao tempo de resposta.
Cada ação de batalha tem 10 minutos para terminar uma batalha.
Caso queira continua-la inicie a seção novamente.`);

                await enviada.edit({embeds: [timeMsg], components: []});
                //                                                                  // <-- salvar estado do inimigo na db
            }
        })
        
    }

//#endregion
    const tela = async(interaction, ficha) => {
        continuidade = true;
        let cor = ficha[4].value;
        
        //mapeando index
        let indexDoFundo = (backgroundX.map(function(e) { return e.reg; })).indexOf(ficha[7].bg);
        const nomeDaImagem =  interaction.user.id.toString() + '.jpg';
        const nomeDoLugar = backgroundX[indexDoFundo].nome;

        //checando aparição/battle/npc

        let chance = backgroundX[indexDoFundo].chance;
        let npc = (Math.floor(Math.random() * 100) + 1 <= chance)?backgroundX[indexDoFundo].npc[Math.floor(Math.random() * 20)] : 0 ;

        if (npc !== 0){ //encontro
            if(npc < 100){ //personagem

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

            }else{ //se for uma batalha

                personagensX = null;
                let inimigo = inimigosX[(npc - 101)];

                const RowBattle = new MessageActionRow().addComponents([
                    new MessageButton().setStyle('DANGER').setLabel('Ataque').setCustomId('Ataque'),
                    new MessageButton().setStyle('SUCCESS').setLabel('Desvio').setCustomId('Desvio'),
                    new MessageButton().setStyle('SECONDARY').setLabel('Correr').setCustomId('Correr')
                ]);

                //#region dados
                //#region dados inimigo
                let HPI = inimigo.HP;
                let ATKI = inimigo.ATK;
                let SPEI = inimigo.SPE;
                let ACCI = inimigo.ACC;
                let derrotaI = false;

                //#endregion
                //#region dados user
                let HPU = ficha[5].HP;
                let ATKU = ficha[5].ATK;
                let SPEU = ficha[5].SPE;
                let ACCU = ficha[5].ACC;
                let Item1 = ficha[6].item1;
                let Item2 = ficha[6].item2;
                let derrotaU = false;
                //#endregion
                let delta = 0;
                let actU = 'Escoha a sua ação...';
                let actI = 'Avança em sua direção prestes a te atacar';
                let txt = '';
                //#endregion

               
                await jimp.read(inimigo.sprite).then(async img  => {
                    await imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor);
                })

                //#region embed battle
                let msg = new MessageEmbed()
                    .setTitle(inimigo.nome)
                    .setFooter(`Item 1: ${Item1} | Item 2: ${Item2}`)
                    .setDescription(`=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}

=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}`);

                //#endregion
                
                const enviada = await interaction.channel.send({ embeds: [msg], components:[RowBattle], fetchReply: true });

                const filter = (b) => b.user.id === interaction.user.id;
                const collector = enviada.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: ( 10 * 60000) });
                
                await coletarBatalha(collector, ATKI, ATKU, SPEU, SPEI, ACCI, ACCU, actU, actI,  HPI, HPU, ficha, inimigo, derrotaI, derrotaU, Item1, Item2, interaction, backgroundX[indexDoFundo].derrota, enviada)
                console.log(inimigo.sprite);
                
            }
        } else {                                                           // <--- se não tiver rolado encontro
            null
        }

        trava = true;
    
    }
module.exports = tela;