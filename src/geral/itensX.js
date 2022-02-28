module.exports = [
    //#region iniciais
    {reg: 0, nome: 'Nada', 
    emblema: 'Rei',
    run: ""},
    {reg: 1 , nome: 'Cálice', 
    emblema: 'Rei', 
    run: "HPU += Math.floor(HPU/10); curaExtra += 10;" },
    {reg: 2 , nome: 'Faca', 
    emblema: 'Espada', 
    run: "SPEU += Math.floor(SPEU/100) * 5; ATKU += 10;"},
    {reg: 3 , nome: 'Flauta', 
    emblema: 'Musica', 
    run: "ACCU += 6; ACCI -= 5;"},
    {reg: 4 , nome: 'Estilingue', 
    emblema: 'Engrenagem', 
    run: "SPEU += 10; ACCU += 3;"},
    {reg: 5 , nome: 'Balão', 
    emblema: 'Sorriso', 
    run: "SPEU += 6; ACCI -= 5;"},
    {reg: 6 , nome: 'Capa', 
    emblema: 'Rei', 
    run: "SPEU += Math.floor(SPEI/10) * 3; desv += 20;"},
    {reg: 7 , nome: 'Escudo', 
    emblema: 'Espada', 
    run: "HPU += Math.floor(HPU/100) * 15; if(Item.i1 === 'Escudo' || Item.i2 === 'Escudo'){ACCI -= 3; desv += 10}"},
    {reg: 8 , nome: 'Sino', 
    emblema: 'Musica', 
    run: `ACCI -= 5; ficha[5].EXP += ficha[5].LVL * 4; salvar(interaction, ficha, 5)`},
    {reg: 9 , nome: 'Flash Bang', 
    emblema: 'Engrenagem', 
    run: "ACCI -= 13; desv += 5; corrida += 5;"},
    {reg: 10, nome: 'Flores', 
    emblema: 'Sorriso', 
    run: "HPU += 20; ATKI -= Math.floor(ATKI/10);"},
    //#endregion

    //#region Médios
    {reg: 11, nome: 'Cetro', 
    emblema: 'Rei',
    run: "HPU += Math.floor(HPU/10 * 2 ); ATKU += Math.floor(ATKU/10 * 2 ); SPEU += Math.floor(SPEU/10 * 2); ACCU += 2;"},
    {reg: 12, nome: 'Espada', 
    emblema: 'Espada',
    run: "ATKU += 35; if(Item.i1 === 'Escudo' || Item.i2 === 'Escudo'){ATKU += 15; ACCI -= 2;}"},
    {reg: 13, nome: 'Violão', 
    emblema: 'Musica',
    run: "corrida += 30; curaExtra += 15;"},
    {reg: 14, nome: 'Revólver', 
    emblema: 'Engrenagem',
    run: "ACCU += 5; desv += 10; ATKU += 40"},
    {reg: 15, nome: 'Livro', 
    emblema: 'Sorriso',
    run: "corrida += 1000; ACCU += 5; HPU += 30"},
    {reg: 16, nome: 'Colar', 
    emblema: 'Rei',
    run: "EXPGanho += (Math.floor((ATKI + HPI + SPEI + (ficha[5].LVL * 4)) * ACCI/100) / 2)"},
    {reg: 17, nome: 'Machado', 
    emblema: 'Espada',
    run: "danoExtraDoUser += 30; ACCU -= Math.ceil(ACCU/10); SPEU -= 10;"},
    {reg: 18, nome: 'Teclado', 
    emblema: 'Musica',
    run: "desv += 20; curaExtra += Math.floor(HPU/10 * 2); ATKU -= Math.ceil(ATKU/10 * 30)"},
    {reg: 19, nome: 'Laser Gun', 
    emblema: 'Engrenagem',
    run: "SPEU += 35; ACCU -= 10; ACCI += 10; corrida -= 30; "},
    {reg: 20, nome: 'Guarda-Chuva', 
    emblema: 'Sorriso',
    run: "ACCI -= 30; ATKU -= 30; HPU -= Math.ceil(HPU/10 * 2)"},
    //#endregion

    //#region Finais
    {reg: 21, nome: 'Coroa', 
    emblema: 'Rei',
    run: 
    `Math.ceil(Math.random() * 10)
        switch(coroa){
            case 1: HPI -= Math.ceil(Math.random() * HPI);
            actU = actU + 'A coroa removeu vida do oponente.';
            break;
            case 2: HPU += Math.ceil(Math.random() * ficha[5].HP_S);
            actU = actU + 'A coroa adicionou vida a você.';
            break;
            case 3: ATKI -= Math.ceil(Math.random() * ATKI);
            actU = actU + 'A coroa removeu ataque do oponente.';
            break;
            case 4: ATKU += Math.ceil(Math.random() * ficha[5].ATK_S);
            actU = actU + 'A coroa adicionou ataque a você.';
            break;
            case 5: SPEI -= Math.ceil(Math.random() * SPEI);
            actU = actU + 'A coroa removeu velocidade do oponente.';
            break;
            case 6: SPEU += Math.ceil(Math.random() * ficha[5].SPE_S);
            actU = actU + 'A coroa adicionou velocidade a você.';
            break;
            case 7: ACCI -= Math.ceil(Math.random() * ACCI);
            actU = actU + 'A coroa removeu acerto do oponente.';
            break;
            case 8: ACCU += Math.ceil(Math.random() * ficha[5].AC_S);
            actU = actU + 'A coroa adicionou acerto a você.';
            break;
            default: actU = actU + "Nada aconteceu"
            break;
            
        }
    }
    `},
    {reg: 22, nome: 'Katana', 
    emblema: 'Espada',
    run:
    `danoExtraDoUser += 40; ACCU = 1000;
    actU = actU + 'A Katana aumentou seu dano e apartir de agora você não errará.';`},
    {reg: 23, nome: 'Guitarra', 
    emblema: 'Musica',
    run: 
    `inimigo.SKILL = null; SPEI -= Math.floor(SPEI / 10); ACCI -= 10; KuburaEffect = false;
    actU = actU + 'A Guitarra negou a skill do seu oponente, aumentou sua velocidade e diminuiu o acerto do oponente.';`},
    {reg: 24, nome: 'Canhão', 
    emblema: 'Engrenagem',
    run: 
    `HPI -= 150; ACCU -= 30; SPEU -= Math.floor(SPEI / 10);
    actU = actU + 'O tiro do canhão removeu 150 do HP oponente, mas vc perdeu acerto e velocidade.';`},
    {reg: 25, nome: 'Filhotinho', 
    emblema: 'Sorriso',
    run:
    `HPU += Math.ceil(ficha[5].HP_S / 10 * 3); SPEU += 10;
    actU = actU + 'Você curou um pouco de vida e ganhou velocidade.';`
    }
    //#endregion

]