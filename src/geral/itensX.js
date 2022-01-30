module.exports = [
    //#region iniciais
    {reg: 1 , nome: 'Cálice', emblema: 'Rei', 
    run: "HPU += Math.floor(HPU/10); curaExtra += 2;" 
    },
    {reg: 2 , nome: 'Faca', emblema: 'Espada', 
    run: "SPEU += Math.floor(SPEU/100) * 5; ATKU += 10;"
    },
    {reg: 3 , nome: 'Flauta', emblema: 'Musica', 
    run: "ACCU += 6; ATKU += 5;"
    },
    {reg: 4 , nome: 'Estilingue', emblema: 'Engrenagem', 
    run: "SPEU += 10; ACCU += 3;"
    },
    {reg: 5 , nome: 'Balão', emblema: 'Sorriso', 
    run: "SPEU += 5; ACCI -= 5;"
    },
    {reg: 6 , nome: 'Capa', emblema: 'Rei', 
    run: "SPEU += Math.floor(SPEI/10) * 3; desv += 20;"
    },
    {reg: 7 , nome: 'Escudo', emblema: 'Espada', 
    run: "HPU += Math.floor(HPU/100) * 15; if(Item.i1 === 'Escudo' || Item.i2 === 'Escudo'){ACCI -= 3; desv += 10}"
    },
    {reg: 8 , nome: 'Sino', emblema: 'Musica', 
    run: `ACCI -= 5; await interaction.userEdit.updateOne({_id: interaction.member.id, "ficha.dados.reg" : "Status"},
    {$set: {"ficha.dados.$.EXP" : (ficha[5].EXP + (ficha[5].LVL * 5))}});`
    },
    {reg: 9 , nome: 'Flash Bang', emblema: 'Engrenagem', 
    run: "ACCI -= 10; desv += 5; corrida += 5;"
    },
    {reg: 10, nome: 'Flores', emblema: 'Sorriso', 
    run: "HPU += 20; ATKI -= Math.floor(ATK/10);"
    },
    //#endregion

    //#region Médios
    {reg: 11, nome: 'Cetro', emblema: 'Rei',
    run: "HPU += Math.floor(HPU/10 * 2 ); ATKU += Math.floor(ATKU/10 * 2 ); SPEU += Math.floor(SPEU/10 * 2); ACCU += 2;"
    },
    {reg: 12, nome: 'Espada', emblema: 'Espada',
    run: "ATKU += 35; if(Item.i1 === 'Escudo' || Item.i2 === 'Escudo'){ATKU += 15; ACCI -= 2;}"
    },
    {reg: 13, nome: 'Violão', emblema: 'Musica',
    run: "corrida += 30; curaExtra += 4;"
    },
    {reg: 14, nome: 'Revólver', emblema: 'Engrenagem',
    run: "ACCU += 5; desv += 10; ATKU += 40"
    },
    {reg: 15, nome: 'Livro', emblema: 'Sorriso',
    run: "corrida += 100; ACCU += 5; HPU += 30"
    },
    {reg: 16, nome: 'Colar', emblema: 'Rei',
    run: "EXPGanho += (Math.floor((ATKI + HPI + SPEI + (ficha[5].LVL * 4)) * ACCI/100) / 2)"
    },
    {reg: 17, nome: 'Machado', emblema: 'Espada',
    run: "danoExtraDoUser += 30; ACCU -= Math.ceil(ACCU/10); SPEU -= 10;"
    },
    {reg: 18, nome: 'Teclado', emblema: 'Musica',
    run: "desv += 20; curaExtra += Math.floor(HPU/10 * 2); ATKU -= Math.ceil(ATKU/10 * 30)"
    },
    {reg: 19, nome: 'Laser Gun', emblema: 'Engrenagem',
    run: "SPEU += 30; ACCU -= 10; ACCI += 10; corrida -= 30; "
    },
    {reg: 20, nome: 'Guarda-Chuva', emblema: 'Sorriso',
    run: "ACCI -= 30; ATKU -= 40; HPU -= Math.ceil(HPU/10 * 3)"
    },
    //#endregion

    //#region Finais
    {reg: 21, nome: 'Coroa', emblema: 'Rei',
    run: 
    `Math.ceil(Math.random() * 10)
        switch(coroa){
            case 1: HPI -= Math.ceil(Math.random() * HPI);
            break;
            case 2: HPU += Math.ceil(Math.random() * ficha[5].HP_S);
            break;
            case 3: ATKI -= Math.ceil(Math.random() * ATKI);
            break;
            case 4: ATKU += Math.ceil(Math.random() * ficha[5].ATK_S);
            break;
            case 5: SPEI -= Math.ceil(Math.random() * SPEI);
            break;
            case 6: SPEU += Math.ceil(Math.random() * ficha[5].SPE_S);
            break;
            case 7: ACCI -= Math.ceil(Math.random() * ACCI);
            break;
            case 8: ACCU += Math.ceil(Math.random() * ficha[5].AC_S);
            break;
            default: actU = actU + "Nada aconteceu"
            break;
            
        }
    }
    `
    },
    {reg: 22, nome: 'Katana', emblema: 'Espada',
    run:
    `danoExtraDoUser += 40; ACCU = 1000`
    },
    {reg: 23, nome: 'Guitarra', emblema: 'Musica',
    run: 
    `inimigo.SKILL = null; SPEI -= Math.floor(SPEI / 10); ACCI -= 10`
    },
    {reg: 24, nome: 'Canhão', emblema: 'Engrenagem',
    run: 
    `HPI -= 150; ACCU -= 30; SPEU -= Math.floor(SPEI / 10)`
    },
    {reg: 25, nome: 'Filhotinho', emblema: 'Sorriso',
    run:
    `HPU += Math.ceil(ficha[5].HP_S / 10 * 3); SPEU += 10;`
    }
    //#endregion

]