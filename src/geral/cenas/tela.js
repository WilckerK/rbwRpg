const jimp = require('jimp');
const { MessageEmbed, MessageAttachment, MessageActionRow , MessageButton } = require('discord.js');
const backgroundX = require('./backgroundX'); 
let inimigosX = require('./inimigosX'); let personagensX = require('./personagensX')
let npc = 0; var teste = false; 
//#region funções

    async function imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor){

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
                    let delta = 0;
                    let turno = SPEU;
                    do{
                        
                    if( Math.ceil(Math.random() * 100) <= ACCU){
                        let d20U = Math.ceil(Math.random() * 20);
                        let danoU = Math.ceil((((ATKU / ATKI) * 10) - (HPI / 10)) + (d20U - 5) + delta);
                        danoU = (danoU >= 0)? danoU : 0;
                        HPI -= danoU;
                        actU = actU +  `Você atacou o inimigo e tirou ${danoU} de Dano.
`;           
                        if(HPI <= 0){derrotaI = true;}
                    }else{actU = actU +  `Você errou o ataque.
`;}
                    if(derrotaI){break;}
                    if((turno - SPEI >= SPEI)){ actU = actU + `Você é tão mais rápido que seu oponente, que ataca novamente.
`}
                    turno -= SPEI;
                    }while(turno >= SPEI)
                }
                
                function inimigoAtacar(){
                    let turno = SPEI;
                    do{
                    if(Math.ceil(Math.random() * 100) <= ACCI){
                        let d20I = Math.ceil(Math.random() * 20);
                        let danoI = Math.ceil((((ATKI / ATKU) * 10) - (HPU / 10)) + (d20I - 5));
                        danoI = (danoI >= 0)? danoI : 0;
                        HPU -= danoI;
                        actI =  actI + `O inimigo te atacou e tirou ${danoI} de Dano.
`;
                        if(HPU <= 0){derrotaU = true;}
                    }else{actI = actI +  `Seu inimigo errou o ataque.
`;}
                    if (derrotaU){break;}
                    if((turno - SPEU >= SPEU)){ actI = actI + `Seu oponente e tão mais rápido que você, que ataca novamente.
`}
                    turno -= SPEU;  
                    }while(turno >= SPEU)
                }

                function desviar(){
                    if((Math.ceil(Math.random() * 100) + (SPEU / 4)) >= (60 + (ACCI - 80))){
                        let cura = (ficha[5].HP_S * (Math.ceil(Math.random() * 8) / 10));
                        cura = (HPU + cura > ficha[5].HP_S)?(ficha[5].HP_S - HPU) : cura;
                        HPU += cura;
                        actU = actU + ` Você conseguiu desviar do ataque e recuperou ${cura} de HP. 
`;
                        actI = actI + `Seu inimigo errou o ataque.
`;
                    }else{
                        actU = actU + `Você não conseguiu desviar do inimigo.
`;
                        inimigoAtacar();
                    }
                }

                function correr(){
                    let gama = (Math.ceil(Math.random() * (5 * ficha[5].LVL))) + 10000;
                    if((Math.ceil(Math.random() * SPEU ) / 3 ) + (((HPU * 100) / ficha[5].HP_S) / 2) + gama > (((HPI * 100) / inimigo.HP) / 2) + (SPEI/2)){
                        actU = actU + ` Você conseguiu correr do seu inimigo e ir para longe. 
`;
                        actI = actI + `Seu inimigo deixa você escapar.
`;
                        derrotaU = true;
                    }else{
                        actU = actU + `Você não conseguiu correr do seu inimigo.
`;
                            inimigoAtacar();
                    }
                }
                //#endregion

        collector.on('collect', async(i) => {

            actU = '';
            actI = '';

            switch(i.customId){
                case 'Ataque':
                    let primeiroAIr = (SPEU != SPEI)?(SPEU > SPEI)?'U':'I':(Math.floor(Math.random() * 2) == 0)?'U':'I';
                    if (primeiroAIr == 'U'){
                        userAtacar();
                        if(!derrotaI){inimigoAtacar();}
                        else{HPI = 0; actU = `O oponente foi derrotado por você.`}

                        txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}`
                    }else{
                        inimigoAtacar();
                        if (!derrotaU){userAtacar();}
                        else{HPU = 0; actU = `Você foi derrotado pelo oponente.`}
                    
                        txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}                       
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}`
                    }
                    
                    break;
                case 'Desvio':
                    desviar();
                    txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}`
                    break;
                case 'Correr':
                    correr();
                    txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}`
                    break;
                default:
                    break;
            }

            msg = new MessageEmbed()
                .setTitle(inimigo.nome)
                .setFooter(`Item 1: ${Item1} | Item 2: ${Item2}`)
                .setDescription(txt);

            if(!derrotaU && !derrotaI){i.update({embeds: [msg]})}
            else{
                i.update({embeds: [msg], components: []}); 
                collector.stop(); teste = true;
                if(derrotaU){
                    interaction.user.db.ficha.dados[7].bg = derrota; 
                    console.log = interaction.user.db.ficha.dados[7].bg;
                    await interaction.user.db.save()}
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
        let cor = ficha[4].value;
        
        //mapeando index
        let indexDoFundo = (backgroundX.map(function(e) { return e.reg; })).indexOf(ficha[7].bg);
        const nomeDaImagem =  interaction.user.id.toString() + '.jpg';
        const nomeDoLugar = backgroundX[indexDoFundo].nome;

        //checando aparição/battle/npc

        let chance = backgroundX[indexDoFundo].chance;
        npc = (teste === false )? 114 : 3 //(Math.ceil(Math.random() * 100) <= chance)?backgroundX[indexDoFundo].npc[Math.floor(Math.random() * 20)] : 0 ;

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
                await imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor);

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
                let ACCI = inimigo.AC;
                let derrotaI = false;

                //#endregion
                //#region dados user
                let HPU = ficha[5].HP;
                let ATKU = ficha[5].ATK;
                let SPEU = ficha[5].SPE;
                let ACCU = ficha[5].AC;
                let Item1 = ficha[6].item1;
                let Item2 = ficha[6].item2;
                let derrotaU = false;
                //#endregion
                
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
    
    }

module.exports = tela;