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
    run: "ACCI -= 5; ficha[5].EXP += Math.floor(ficha[5].LVL/10)"
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
    run: ""
    },
    {reg: 17, nome: 'Machado', emblema: 'Espada',
    run: "danoExtraDoUser += 30; ACCU -= Math.ceil(ACCU/10); SPEU -= 10;"
    },
    {reg: 18, nome: 'Teclado', emblema: 'Musica',
    run: "desv += 20; curaExtra += Math.floor(HPU/10 * 2); ATKU -= Math.ceil(ATKU/10 * 30)"
    },
    {reg: 19, nome: 'Laser Gun', emblema: 'Engrenagem',
    run: "SPEU += 30; ACCU = 10; ACCI += 10; corrida -= 30; "
    },
    {reg: 20, nome: 'Guarda-Chuva', emblema: 'Sorriso',
    run: "ACCI -= 30; ATKU -= 40; HPU -= Math.ceil(HPU/10 * 3)"
    },
    //#endregion

    //#region Finais
    {reg: 21, nome: 'Coroa', emblema: 'Rei',
    run: 
    `function runX() {
        let coroa = Math.ceil(Math.random() * 10)
        switch(coroa){
            case 1: HPI -= Math.ceil(Math.random() * HPI);
            break;
            case 2: ATKU += Math.ceil()
        }
    }
    `
    },
    {reg: 22, nome: 'Katana', emblema: 'Espada'},
    {reg: 23, nome: 'Guitarra', emblema: 'Musica'},
    {reg: 24, nome: 'Canhão', emblema: 'Engrenagem'},
    {reg: 25, nome: 'Filhotinho', emblema: 'Sorriso'}
    //#endregion

]