const jimp = require('jimp');
const { MessageEmbed, MessageAttachment, MessageActionRow , MessageButton, MessageSelectMenu} = require('discord.js');
const backgroundX = require('./backgroundX');const backgroundY = require('./backgroundY'); 
const personagensX = require('./personagensX'); let menu = true;
const itensX = require('../itensX');const inimigosX = require('./inimigosX'); 
let obj = null; let texto = null; let npc = ''; let derrotaU = false; let etapa = 00;

async function salvar(interaction, ficha, num){
    index = "";
    switch(num){
        case 0: index = "Nome";
        break;
        case 1: index = "Emblema";
        break;
        case 2: index = "Natalidade";
        break;
        case 3: index = "Sexo";
        break;
        case 4: index = "Cor";
        break;
        case 5: index = "Status";
        break;
        case 6: index = "Item";
        break;
        case 7: index = "Local";
        break;
        case 8: index = "Inimigo";
        break;
        case 9: index = "Personagem";
        break;
        case 10: index = "Coletaveis";
        break;
        case 11: index = "Loja";
        break;
    }
 
    await interaction.userEdit.updateOne({_id: interaction.member.id, "ficha.dados.reg" : (index)},{$set: {"ficha.dados.$" : ficha[num]}});
}

async function imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor, row, ficha, Database){
    
    async function enviar(){
        let check = false;
        if (row){      
        do{
            const file = new MessageAttachment((path + nomeDaImagem)); 
            let msg = new MessageEmbed()
                .setTitle(nomeDoLugar)
                .setColor(cor)
                .setImage('attachment://' + nomeDaImagem);
            await interaction.channel.send({ embeds: [msg] , files: [file], components: [row], fetchReply: true}).then((msg) => {
                if (msg.embeds[0].image){check = true;
                    const filter = (b) => b.user.id === interaction.user.id; 
                    let collector = msg.createMessageComponentCollector({ filter, max: 1, componentType: 'SELECT_MENU', time: (7 * 60000) });
                    
                    coletarRespostas(collector, msg, ficha, interaction, Database);
                }
                else {msg.delete().catch(() => {});}
            })
        }while(check === false)
        
        }else{
        do{
            const file = new MessageAttachment((path + nomeDaImagem)); 
            let msg = new MessageEmbed()
                .setTitle(nomeDoLugar)
                .setColor(cor)
                .setImage('attachment://' + nomeDaImagem);
            await interaction.channel.send({ embeds: [msg] , files: [file], fetchReply: true}).then((msg) => {
                if (msg.embeds[0].image){ check = true;}
                else {msg.delete().catch(() => {});}
            })
            
        }while(check === false)}
    }

    const path = 'src/telas/';
    img.write(path + nomeDaImagem, enviar());
}

async function coletarRespostas(collector, enviada, ficha, interaction, Database){
    
    ficha[7].pers = npc;

    async function ocorrido(id, i){
        
        let UnidadeId = (id%10) - 1;
        let negarTela = false;
        let zerarEtapa = false;

        async function runDoObjeto(){
            eval(obj.run[UnidadeId]);
        }

        async function calcularEtapa(){
            etapa = id - (id%10);
            zerarEtapa = false;
        }
        

        runDoObjeto().then(() => {
            if (zerarEtapa === true){etapa = 0;}
            if(negarTela === false){tela(interaction, Database);}
        });
    }

    collector.on('collect', async(i) => {
        let id = 1;
        let delay = 550;
        

        if(menu === true){
            id =  parseInt(i.values);
            
            setTimeout(() => enviada.delete().catch(() => {}), delay );
            ocorrido(id, i);
        }else{
            setTimeout(() => interaction.channel.bulkDelete([enviada.id, i.id]).catch(() => {}), delay );
            ocorrido(id, i).then(() => {menu = true;});
        }
    });

    collector.on('end', async(collected, reason) => {
        if (reason === 'time'){


            let timeMsg = new MessageEmbed()
                .setTitle('Seção Finalizada')
                .setDescription(`A seção foi terminada devido ao tempo de resposta.
Cada interação tem 7 minutos para terminar.
Caso queira continua-la inicie a seção novamente.`);

            await enviada.edit({embeds: [timeMsg], components: []});

            salvar(interaction, ficha, 7);
        }
    })
    
}

async function encontrarItem(PrimeiroEmblema, SegundoEmblema, interaction, ficha, Database){
    let idDoItemGanho = Math.ceil(Math.random() * 3);
    if (PrimeiroEmblema === 'Neutro' || PrimeiroEmblema === 'Rei' || PrimeiroEmblema === 'Espada' || PrimeiroEmblema === 'Musica' || PrimeiroEmblema === 'Engrenagem' || PrimeiroEmblema === 'Sorriso'){
    let nivelDosItensGanhos = (ficha[5].LVL >= 15)? 4:(ficha[5].LVL >= 7)?3:2;
    
    if (idDoItemGanho < 3){
        switch(PrimeiroEmblema){
            case 'Rei': idDoItemGanho = 1 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            
            case 'Espada': idDoItemGanho = 2 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            
            case 'Musica': idDoItemGanho = 3 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
                
            case 'Engrenagem': idDoItemGanho = 4 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            
            case 'Sorriso': idDoItemGanho = 5 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            default: idDoItemGanho = Math.floor(Math.random() * (nivelDosItensGanhos * 5));
        }
    }else{
        switch(SegundoEmblema){
            case 'Rei': idDoItemGanho = 1 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            
            case 'Espada': idDoItemGanho = 2 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            
            case 'Musica': idDoItemGanho = 3 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
                
            case 'Engrenagem': idDoItemGanho = 4 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            
            case 'Sorriso': idDoItemGanho = 5 + 5 * (Math.floor(Math.random() * nivelDosItensGanhos));
                break;
            default: idDoItemGanho = Math.floor(Math.random() * (nivelDosItensGanhos * 5));
        }
    }
    }else{ idDoItemGanho = PrimeiroEmblema;}
    let itemGanho  = itensX[idDoItemGanho];
    let txt = '';
    if(ficha[6].v1 > 20){
    txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Você encontrou um **${itemGanho.nome}**.
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Seu item é **${ficha[6].i1}**.
Deseja trocar pelo item encontrado?`
    }else{
        
    txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Você encontrou um **${itemGanho.nome}**.
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Seus itens são **${ficha[6].i1}** e **${ficha[6].i2}**.
Deseja trocar algum deles pelo item encontrado?`
    }
    let msg = new MessageEmbed()
                .setTitle(`Você encontrou um item!!!`)
                .setColor(ficha[4].value)
                .setDescription(txt)
    const RowItem = new MessageActionRow().addComponents([
        new MessageButton().setStyle('PRIMARY').setLabel('Trocar item 1').setCustomId('TI1'),
        new MessageButton().setStyle('PRIMARY').setLabel('Trocar item 2').setCustomId('TI2'),
        new MessageButton().setStyle('DANGER').setLabel('Manter atuais').setCustomId('MIA')
    ]);

    const enviada = await interaction.channel.send({ embeds: [msg], components:[RowItem], fetchReply: true });

    const filter = (b) => b.user.id === interaction.user.id;
    const collector = enviada.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: ( 5 * 60000) });

    collector.on('collect', async(i) => {

        switch(i.customId){

            case 'TI1':
                ficha[6].i1 = itemGanho.nome; ficha[6].v1 = itemGanho.reg; ficha[1].value = itemGanho.emblema;
                salvar(interaction, ficha, 6);
                salvar(interaction, ficha, 1);

                msg = new MessageEmbed()
                    .setTitle(`Novo item`)
                    .setFooter(`Item 1: ${ficha[6].i1} | Item 2: ${ficha[6].i2}`)
                    .setDescription(`**Feito!!!**
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Seus itens foram atualizados.`);
                break;
            case 'TI2':
                ficha[6].i2 = itemGanho.nome; ficha[6].v2 = itemGanho.reg;
                salvar(interaction, ficha, 6);

                msg = new MessageEmbed()
                    .setTitle(`Novo item`)
                    .setFooter(`Item 1: ${ficha[6].i1} | Item 2: ${ficha[6].i2}`)
                    .setDescription(`**Feito!!! **
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Seus itens foram atualizados.`);
                break;
            case 'MIA':
                msg = new MessageEmbed()
                    .setTitle(`Manteve os itens`)
                    .setFooter(`Item 1: ${ficha[6].i1} | Item 2: ${ficha[6].i2}`)
                    .setDescription(`**Feito!!!**
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Seus itens permaneceram, mas você pode encontrar esse item novamente.`);
                break;
            default:
                break;
        }

        i.update({embeds: [msg], components: []}); 
        collector.stop();
        tela(interaction, Database);
        
    })
    
    collector.on('end', async(collected, reason) => {
        if (reason === 'time'){


            let timeMsg = new MessageEmbed()
                .setTitle('Seção Finalizada')
                .setDescription(`A seção foi terminada devido ao tempo de resposta.
Você tem 5 minutos para decidir se iria ficar com o item ou não.
O item foi perdido, mas pode ser que você encontre ele novamente.
Caso queira continuar inicie a seção novamente.`);

            await enviada.edit({embeds: [timeMsg], components: []});
        }
    })
}

async function batalha(ficha, inimigo, interaction, derrota, Database){

    //#region dados
    let RowBattle;
    if(ficha[6].v1 > 20){
        RowBattle = new MessageActionRow().addComponents([
            new MessageButton().setStyle('DANGER').setLabel('Ataque').setCustomId('Ataque'),
            new MessageButton().setStyle('PRIMARY').setLabel('Item').setCustomId('Item'),
            new MessageButton().setStyle('SUCCESS').setLabel('Desvio').setCustomId('Desvio'),
            new MessageButton().setStyle('SECONDARY').setLabel('Correr').setCustomId('Correr')
        ]);
    }else{
        RowBattle = new MessageActionRow().addComponents([
            new MessageButton().setStyle('DANGER').setLabel('Ataque').setCustomId('Ataque'),
            new MessageButton().setStyle('SUCCESS').setLabel('Desvio').setCustomId('Desvio'),
            new MessageButton().setStyle('SECONDARY').setLabel('Correr').setCustomId('Correr')
        ]);
    }

        let actU = 'Escoha a sua ação...';
        let actI = 'Avança em sua direção prestes a te atacar.';
        let EXPGanho = 0
        let KuburaEffect = false;
        //#region dados inimigo
        let HPI = 0, ATKI = 0, SPEI = 0, ACCI = 0;
        let derrotaI = false;

        if(!inimigo.id){
            HPI = Math.ceil((inimigo.HP < 500)?inimigo.HP + (inimigo.HP * ((ficha[5].LVL * 2) / 100) + ficha[5].LVL * 2):inimigo.HP);
            ATKI = Math.ceil((inimigo.ATK < 450)?inimigo.ATK + (inimigo.ATK * ((ficha[5].LVL * 2) / 100) + ficha[5].LVL * 2):inimigo.ATK);
            SPEI = inimigo.SPE + (inimigo.HP * ((ficha[5].LVL * 2) / 100));
            ACCI = inimigo.AC;
        }else{
            
            inimigo.reg = inimigo.id;
            HPI = inimigo.HPI;
            ATKI = inimigo.ATKI;
            SPEI = inimigo.SPEI;
            ACCI = inimigo.ACCI;
            actI = inimigo.actI;
            actU = inimigo.actU;
        }

        let skillUsada = false;
        //#endregion
        
        //#region dados user
        let HPU = ficha[5].HP;
        let ATKU = ficha[5].ATK;
        let SPEU = ficha[5].SPE;
        let ACCU = ficha[5].AC;
        let Item = ficha[6];
        //#endregion
        
        //#region dados gerais
        let desv = 0;
        let danoExtraDoUser = 0;
        let danoExtraDoInimigo = 0;
        let corrida = 0;
        let curaExtra = 0;
        let txt = '';
        
        if (Item.v1 <= 20){
            eval(itensX[Item.v1].run); eval(itensX[Item.v2].run);
        }

        EXPGanho += Math.floor(((ATKI + HPI + SPEI + (ficha[5].LVL * 4)) * ACCI/100) / 1.5);
        //#endregion
        switch(inimigo.emblemas[0]){
            case 'Rei': 
                if(ficha[1].value === 'Espada' || ficha[1].value === 'Engrenagem')
                    {danoExtraDoInimigo += 5}
                else if(ficha[1].value === 'Musica' || ficha[1].value === 'Sorriso')
                    {danoExtraDoUser += 5}
                break;
            case 'Espada': 
                if(ficha[1].value === 'Musica' || ficha[1].value === 'Sorriso')
                    {danoExtraDoInimigo += 5}
                else if(ficha[1].value === 'Rei' || ficha[1].value === 'Engrenagem')
                    {danoExtraDoUser += 5}
                break;
            case 'Musica': 
                if(ficha[1].value === 'Rei' || ficha[1].value === 'Sorriso')
                    {danoExtraDoInimigo += 5}
                else if(ficha[1].value === 'Espada' || ficha[1].value === 'Engrenagem')
                    {danoExtraDoUser += 5}
                break;
            case 'Engrenagem': 
                if(ficha[1].value === 'Espada' || ficha[1].value === 'Musica')
                    {danoExtraDoInimigo += 5}
                else if(ficha[1].value === 'Rei' || ficha[1].value === 'Sorriso')
                    {danoExtraDoUser += 5}
                break;
            case 'Sorriso': 
                if(ficha[1].value === 'Rei' || ficha[1].value === 'Engrenagem')
                    {danoExtraDoInimigo += 5}
                else if(ficha[1].value === 'Espada' || ficha[1].value === 'Musica')
                    {danoExtraDoUser += 5}
                break;
            default:
                break;
        }
   
    let msg = new MessageEmbed()
        .setTitle(inimigo.nome)
        .setFooter(`Item 1: ${Item.i1} | Item 2: ${Item.i2}`)
        .setDescription(`=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${HPU}
${actU}

=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${HPI}
${actI}`);

     //#endregion

    const enviada = await interaction.channel.send({ embeds: [msg], components:[RowBattle], fetchReply: true });
    const filter = (b) => b.user.id === interaction.user.id;
    const collector = enviada.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: ( 10 * 60000) });

    //#region Funções de batalha

    function userAtacar(){
        let delta = 0 ;
        let turno = SPEU;
        do{

        if( Math.floor(Math.random() * 100) <= ACCU){
            let d20U = Math.ceil(Math.random() * 20);
            let calcU = Math.ceil(((ATKU / (ATKI / 2)) * 8) - Math.ceil(HPI / 50))
            let danoU = ((calcU > 0)?calcU:-5)+ d20U + danoExtraDoUser;
            danoU = (danoU >= 0)? danoU : 0;
            if(d20U === 20){
                danoU += Math.floor(danoU/2);
                actU = actU + `**DANO CRÍTICO**
`;}
            HPI -= danoU;
            actU = actU +  `Você atacou o inimigo e tirou ${danoU} de Dano.
`;
            if(HPI <= 0){HPI = 0;derrotaI = true;}
        }else{actU = actU +  `Você errou o ataque.
`;}
        if(derrotaI){break;}
        if((turno - SPEI > SPEI)){ actU = actU + `Você é tão mais rápido que seu oponente, que ataca novamente.
`}
        turno -= SPEI;
        }while(turno > SPEI)
        if(Item.v1 === 25 || Item.v2 === 25){
            HPI -= danoU/10 * 2;
            { actU = actU + `O filhotinho ataca também e tira ${danoU/10 * 2} de Dano.
`}
        }
    }
    
    function inimigoAtacar(){
        let turno = SPEI;
        do{
        if(Math.ceil(Math.random() * 100) <= ACCI){
            let d20I = Math.ceil(Math.random() * 20);
            let calcI = Math.ceil(((ATKI / ATKU) * 8) - Math.floor(HPU / 50))
            let danoI = ((calcI > 0)?calcI:-5) + d20I + danoExtraDoInimigo;
            danoI = (danoI >= 0)? danoI : 0;
            if(d20I === 20){
                danoI += Math.ceil(danoI/2);
                actI = actI + `**DANO CRÍTICO**
`;}
            HPU -= danoI;
            actI =  actI + `O inimigo te atacou e tirou ${danoI} de Dano.
`;
            if(HPU <= 0){HPU = 0;derrotaU = true;}
        }else{actI = actI +  `Seu inimigo errou o ataque.
`;}
        if (derrotaU){break;}
        if((turno - SPEU > SPEU)){ actI = actI + `Seu oponente e tão mais rápido que você, que ataca novamente.
`}
        turno -= SPEU;  
        }while(turno > SPEU)
    }

    function desviar(){
        if((Math.ceil(Math.random() * 100) + (SPEU / 4)) + desv >= (60 + (ACCI - 80))){
            let cura = (ficha[5].HP_S * (Math.ceil(Math.random() * 12 + curaExtra) / 20));
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
        let gama = (Math.ceil(Math.random() * (5 * ficha[5].LVL))) + corrida;
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

    function item(){
        eval(itensX[Item.v1].run);
    }

    async function upar(){

        ficha[5].EXP += EXPGanho;
        if(ficha[5].EXP >= ((ficha[5].LVL - 1) * 100 ) + (50 * (0 **(ficha[5].LVL - 1)))){
            interaction.user.db.ficha.dados[5].LVL = ficha[5].LVL++;
            ficha[5].EXP = 0;
            switch(ficha[1].value){
                case 'Rei': ficha[5].HP_S += 10; ficha[5].ATK_S += 10; 
                        if(ficha[5].LVL % 2 === 0){ficha[5].SPE_S += 4; ficha[5].AC_S += 1;}
                    break;
                case 'Espada': ficha[5].HP_S += 5; ficha[5].ATK_S += 15; 
                        if(ficha[5].LVL % 2 === 0){ficha[5].SPE_S += 5; ficha[5].AC_S += 0.5;}
                    break;
                case 'Musica': ficha[5].HP_S += 15; ficha[5].ATK_S += 5; 
                        if(ficha[5].LVL % 2 === 0){ficha[5].SPE_S += 3; ficha[5].AC_S += 1.5;}
                    break;
                case 'Engrenagem': ficha[5].HP_S += 5; ficha[5].ATK_S += 15; 
                        if(ficha[5].LVL % 2 === 0){ficha[5].SPE_S += 3; ficha[5].AC_S += 1.5;}
                    break;
                case 'Sorriso': ficha[5].HP_S += 15; ficha[5].ATK_S += 5; 
                        if(ficha[5].LVL % 2 === 0){ficha[5].SPE_S += 5; ficha[5].AC_S += 0.5;}
                    break;
                default:
                    break;
            }
            let msg = new MessageEmbed()
                .setTitle(ficha[0].value + ` upou de LVL`)
                .setColor(ficha[4].value)
                .setDescription(`=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**Parabéns!!! Agora você é nivel ${ficha[5].LVL}**
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
Seus Status Base agora são:
**HP:** ${ficha[5].HP_S}
**ATK:** ${ficha[5].ATK_S} 
**SPE:** ${ficha[5].SPE_S}
**AC:** ${ficha[5].AC_S}%  
**(O-O)-b**`)
            await interaction.channel.send({ embeds: [msg]})
            ficha[7].battle = false;
            ficha[5].HP = ficha[5].HP_S; ficha[5].ATK = ficha[5].ATK_S; ficha[5].SPE = ficha[5].SPE_S; ficha[5].AC = ficha[5].AC_S;
            salvar(interaction, ficha, 5);
            salvar(interaction, ficha, 7);

            tela(interaction, Database);
            
        }else{
            let msg = new MessageEmbed()
                .setTitle(ficha[0].value + ` ganhou EXP`)
                .setColor(ficha[4].value)
                .setDescription(`**Você venceu!!!** 
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**Ganhou ${EXPGanho} de EXP!** 
Falta apenas **${((ficha[5].LVL - 1) * 100 ) + (50 * (0 **(ficha[5].LVL - 1))) - ficha[5].EXP}** para o próximo LVL.`)
            await interaction.channel.send({ embeds: [msg]})

            ficha[7].battle = false;
            salvar(interaction, ficha, 7)
            ficha[5].HP = ficha[5].HP_S; ficha[5].ATK = ficha[5].ATK_S; ficha[5].SPE = ficha[5].SPE_S; ficha[5].AC = ficha[5].AC_S;
            salvar(interaction, ficha, 5);
    
            let chanceItem = Math.ceil(Math.random() * 100);
            if (chanceItem <= 35){encontrarItem(inimigo.emblemas[0], inimigo.emblemas[1], interaction, ficha, Database);}
            else{tela(interaction, Database);}
        }
            
    }

    async function finalizarBatalha(){
        npc = 0
        if(derrotaU){
            texto = 'Você misteriosamente acorda na estrada após ficar um tempo desacordado. O inimigo não te matou, mas te nocauteou.';
            etapa = 0;
            ficha[7].battle = false; ficha[7].bg = derrota;
            ficha[5].HP = ficha[5].HP_S; ficha[5].ATK = ficha[5].ATK_S; ficha[5].SPE = ficha[5].SPE_S; ficha[5].AC = ficha[5].AC_S;
            salvar(interaction, ficha, 5);
            salvar(interaction, ficha, 7);
            tela(interaction, Database);
        }else{
            ficha[10].rewbs += (ficha[5].LVL * 2 + (Math.floor((ficha[5].LVL * 2) * ((Math.random() * 50)/ 100)) + ((((inimigo.reg - 100) - ((inimigo.reg - 100) % 3 )) * 5) )));
            salvar(interaction, ficha, 10);
            await upar()
        }

    }


    //#endregion

    collector.on('collect', async(i) => {

        actU = '';
        actI = '';

        switch(i.customId){

            case 'Ataque':
            let skillRand = Math.ceil(Math.random() * 3)
            if(skillRand === 3 && skillUsada === false){
                eval(inimigo.SKILL); skillUsada = (inimigo.repetitivo === true)?false:true;
                txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${(KuburaEffect === false)?HPI:'???'}
**SKILL**
${actI}                       
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${(KuburaEffect === false)?HPU:'???'}
${actU}`
                
                break;
            }

                let primeiroAIr = (SPEU != SPEI)?(SPEU > SPEI)?'U':'I':(Math.ceil(Math.random() * 2) == 0)?'U':'I';

                if (primeiroAIr == 'U'){
                    userAtacar();
                    if(!derrotaI){inimigoAtacar();}
                    else{HPI = 0; actI = `O oponente foi derrotado por você.`}

                    txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${(KuburaEffect === false)?HPU:'???'}
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${(KuburaEffect === false)?HPI:'???'}
${actI}`
                }else{
                    inimigoAtacar();
                    if (!derrotaU){userAtacar();}
                    else{HPU = 0; actU = `Você foi derrotado pelo oponente.`}
                
                    txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${(KuburaEffect === false)?HPI:'???'}
${actI}                       
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${(KuburaEffect === false)?HPU:'???'}
${actU}`
                }
                
                break;
            case 'Desvio':
                desviar();
                txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${(KuburaEffect === false)?HPU:'???'}
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${(KuburaEffect === false)?HPI:'???'}
${actI}`
                break;
            case 'Correr':
                correr();
                txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${(KuburaEffect === false)?HPU:'???'}
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${(KuburaEffect === false)?HPI:'???'}
${actI}`
                break;
            case 'Item':
                item();
                txt = `=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${ficha[0].value}**: | HP: ${(KuburaEffect === false)?HPU:'???'}
Você usou o efeito de ${ficha[6].i1},
${actU}
=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=
**${inimigo.nome}**: | HP: ${(KuburaEffect === false)?HPI:'???'}
${actI}`
                break;
            default:
                break;
        }
        msg = new MessageEmbed()
            .setTitle(inimigo.nome)
            .setFooter(`Item 1: ${Item.i1} | Item 2: ${Item.i2}`)
            .setDescription(txt);

        if(!derrotaU && !derrotaI){i.update({embeds: [msg]})}
        else{
            i.update({embeds: [msg], components: []}); 
            collector.stop();
            finalizarBatalha();
        }
    })
    
    collector.on('end', async(collected, reason) => {
        if (reason === 'time'){


            let timeMsg = new MessageEmbed()
                .setTitle('Seção Finalizada')
                .setDescription(`A seção foi terminada devido ao tempo de resposta.
Cada ação de batalha tem 10 minutos para terminar.
Caso queira continua-la inicie a seção novamente.`);

            await enviada.edit({embeds: [timeMsg], components: []});

            ficha[7].battle = true;
            ficha[8] = {reg: "Inimigo", id: inimigo.reg, HPI: HPI, ATKI: ATKI, SPEI: SPEI, ACCI: ACCI, actI: actI, actU: actU};
            ficha[5].HP = HPU; ficha[5].ATK = ATKU; ficha[5].SPE = SPEU; ficha[5].AC = ACCU;
            salvar(interaction, ficha, 8);
            salvar(interaction, ficha, 5);
            salvar(interaction, ficha, 7);
        }
    })
    
}

const tela = async(interaction, Database) => {
    let ficha = Database.ficha.dados;
    let cor = ficha[4].value;
    let row = null; 
    //mapeando index
    let indexDoFundo = (backgroundX.map(function(e) { return e.reg; })).indexOf(ficha[7].bg);
    const nomeDaImagem =  interaction.user.id.toString() + '.jpg';
    const nomeDoLugar = backgroundX[indexDoFundo].nome;

    //checando aparição/battle/npc
    if(ficha[7].battle === true){
        
        personagensX = null;
        let inimigo = ficha[8];
        inimigo.nome = inimigosX[(inimigo.id - 101)].nome;
        inimigo.SKILL = inimigosX[(inimigo.id - 101)].SKILL;
        inimigo.emblemas = inimigosX[(inimigo.id - 101)].emblemas;
        inimigo.repetitivo = inimigosX[(inimigo.id - 101)].repetitivo;
        ficha[7].battle = false;
        salvar(interaction, ficha, 7)
        
        await jimp.read(inimigosX[(inimigo.id - 101)].sprite).then(async img  => {
            await imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor, row, ficha, Database);
        })

        
        await batalha(ficha, inimigo, interaction, backgroundX[indexDoFundo].derrota, Database);
        return;
    }
    npc = (typeof npc === 'string' || npc instanceof String)?(Math.ceil(Math.random() * 100) <= backgroundX[indexDoFundo].chance)?backgroundX[indexDoFundo].npc[Math.floor(Math.random() * 20)] : 0 : npc;
    if(derrotaU === true ){
        derrotaU = false; 
        if(npc > 100){npc = 0}
    }

    if (npc !== 0){ //encontro
        if(npc < 100){ //personagem
            let personagem = personagensX[npc - 1];
            const arquivo = require(personagem.arquivo);
            obj = arquivo(ficha[7].bg, etapa, ficha);
            texto = (texto === null || texto === '')?obj.textoPadrao:texto;
            let fundo = backgroundX[indexDoFundo].img;
            let fonte =  await jimp.loadFont('src/extra/fonte.fnt');  
            let img = await jimp.read(fundo);
            let person = await jimp.read(personagem.sprite);

            img.print(fonte, 30, 730, texto, 970);
            //img.composite(person, 640, 720);

            //#region limpar
            indexDoFundo = null;                                        // <---- liberando memória para uma melhor performace
            fonte = null;
            fundo = null;
            texto = null;
            person = null;
            //#endregion
            
            row = (obj.resps[0].customId)?new MessageActionRow().addComponents(new MessageSelectMenu(obj.resps[0])):obj.resps;

            await imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor, row, ficha, Database);

        }else{ //se for uma batalha

            let inimigo = inimigosX[(npc - 101)];
            ficha[11].reset = true; salvar(interaction, ficha, 11);
            await jimp.read(inimigo.sprite).then(async img  => {
                await imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor, row, ficha, Database);
            })

            await batalha(ficha, inimigo, interaction, backgroundX[indexDoFundo].derrota, Database);
        }

    } else {// se não tiver rolado encontro

        obj = backgroundY(ficha[7].bg, etapa, ficha);
        texto = (texto === null || texto === '')?obj.textoPadrao:texto;
        let fundo = backgroundX[indexDoFundo].img;
        let fonte =  await jimp.loadFont('src/extra/fonte.fnt')
        let img = await jimp.read(fundo);

        img.print(fonte, 30, 730, texto, 989);

        //#region limpar                                      // <---- liberando memória para uma melhor performace
        fonte = null;
        fundo = null;
        texto = null;
        person = null;
        //#endregion
        
        row = new MessageActionRow().addComponents(new MessageSelectMenu(obj.resps[0]));
        
        await imprimir(img, nomeDaImagem, interaction, nomeDoLugar, cor, row, ficha, Database);
    }

}

module.exports = tela;