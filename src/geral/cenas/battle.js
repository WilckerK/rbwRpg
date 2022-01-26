const {MessageActionRow , MessageButton, MessageEmbed} = require('discord.js');
const inimigosX = require('./inimigosX');


    const Row = new MessageActionRow().addComponents([
        new MessageButton().setStyle('DANGER').setLabel('Ataque').setCustomId('Ataque'),
        new MessageButton().setStyle('SUCCESS').setLabel('Desvio').setCustomId('Desvio'),
        new MessageButton().setStyle('SECONDARY').setLabel('Correr').setCustomId('Correr')
    ]);

    const battle = async(interaction, inimigo, ficha, derrota) => {

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

        //#region embed
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
        
        const enviada = await interaction.channel.send({ embeds: [msg], components:[Row], fetchReply: true });

        const filter = (b) => b.user.id === interaction.user.id;
        const collector = enviada.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: ( 10 * 60000) });

         collector.on('collect', (i) => {
            switch(i.customId){
                case 'Ataque':
                    let primeiroAIr = (SPEU != SPEI)?(SPEU > SPEI)?'U':'I':(Math.floor(Math.random() * 2) == 0)?'U':'I';
                    actU = '';
                    actI = '';
                    if (primeiroAIr == 'U'){
                        for(let turno = SPEU; turno >= SPEI; turno -= SPEI){
                            userAtacar();
                            if (derrotaI){break;}
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

module.exports = battle;

/*
indexação da data, para evitar mapeamento, que pesaria no processamento

0 = Nome
1 = emblema
2 = Natalidade
3 = Sexo
4 = cor
5 = status
6 = item
7 = local
8 = inimigo
*/