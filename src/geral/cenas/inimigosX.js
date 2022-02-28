module.exports = [
      {reg: 101,nome: 'Vijam',
        sprite: 'src/imagens/cubicos/Vijam.jpg',
        HP: 35,
        ATK: 20,
        SPE: 25,
        AC: 90,
        emblemas: ['Rei', 'Musica'],
        repetitivo: true,
        SKILL: `
        if(HPI < 35){
            EXPGanho -= Math.floor(EXPGanho / 2); derrotaI = true; 
            actI = actI + \'Seu inimigo foge da batalha. \' + \'\\n\';
            actU = actU + \'Você deixa seu inimigo escapar.\' + \'\\n\'
        }else{
            actI = actI + \'O inimigo tentou fugir mas não conseguiu.\' + \'\\n\';
            actU = actU + \'Você não deixa o inimigo escapar.\' + \'\\n\';
        }`
    },{reg: 102,nome: 'Crim',
        sprite: 'src/imagens/cubicos/Crim.jpg',
        HP: 45,
        ATK: 25,
        SPE: 20,
        AC: 85,
        emblemas: ['Engrenagem', 'Espada'],
        repetitivo: false,
        SKILL: `SPEI = 130; ATKI = Math.ceil(ATKI/2);
        actI = actI + \'Seu inimigo se torna extremamente rápido.\' + \'\\nComo se estivesse teleportando aos seus olhos.\' + \'\\n\';
        actU = actU + \'Você tenta acompanhar os movimentos do seu inimigo.\' + \'\\n\';`
    },{reg: 103,nome: 'Aum',
        sprite: 'src/imagens/cubicos/Aum.jpg',
        HP: 40, 
        ATK: 30,
        SPE: 25,
        AC: 80,
        emblemas: ['Sorriso', 'Musica'],
        repetitivo: false,
        SKILL: `HPU = ficha[5].HP_S; ATKU = ficha[5].ATK_S; SPEU = ficha[5].SPE_S; ACCU = ficha[5].AC_S;
        actI = actI + \'Seu inimigo retira seus itens e os arremessam para longe. \' + \'\\n\';
        actU = actU + \'Você ainda vê os seus itens, mas seu inimigo não o deixa chegar perto deles.\' + \'\\n\';`
    },{reg: 104,nome: 'Gueira',
        sprite: 'src/imagens/cubicos/Gueira.jpg',
        HP: 80,
        ATK: 85,
        SPE: 40,
        AC: 85,
        emblemas: ['Musica', 'Musica'],
        repetitivo: true,
        SKILL: `HPU -= Math.ceil(HPU/8);
        actI = actI + \'Seu inimigo tira 1/8 do seu HP com uma rajada de energia.\' + \'\\n\'
        actU = actU + \'A rajada de energia te acerta em cheio.\' + \'\\n\' `
    },{reg: 105,nome: 'Garnex',
        sprite: 'src/imagens/cubicos/Garnex.jpg',
        HP: 95,
        ATK: 70,
        SPE: 35,
        AC: 90,
        emblemas: ['Neutro', 'Neutro'],
        repetitivo: false,
        SKILL: `ACCI = 1000;
        actI = actI + \'Seu oponente não vai errar ataques, permitir que você desvie ou corra da batalha.\' + \'\\n\'
        actU = actU + \'Você percebe que seu inimigo está totalmente focado em você.\' + \'\\n\'`
    },{reg: 106,nome: 'Kubura',
        sprite: 'src/imagens/cubicos/Kubura.jpg',
        HP: 70,
        ATK: 100,
        SPE: 30,
        AC: 70,
        emblemas: ['Espada', 'Rei'],
        repetitivo: false,
        SKILL: `KuburaEffect = true;
        actI = actI + \'Seu inimigo te deixa confuso.\' + \'\\n\'
        actU = actU + \'Você perde a capacidade de ver as quantias dos HPs.\' + \'\\n\'`
    },{reg: 107,nome: 'Vulcan',
        sprite: 'src/imagens/cubicos/Vulcan.jpg',
        HP: 120,
        ATK: 90,
        SPE: 60,
        AC: 85,
        emblemas: ['Musica', 'Espada'],
        repetitivo: true,
        SKILL: `let d20U = Math.ceil(Math.random() * 20);
        let danoU = Math.ceil((((ATKU / ATKI) * 10) - (HPI / 10)) + (d20U - 5) + danoExtraDoUser);
        danoU = (danoU >= 0)? danoU : 0;
        if(d20U === 20){
            danoU += danoU/2
            actI = actI + \'**DANO CRÍTICO** \' + \'\\n\';} 
        HPU -= danoU
        actI = actI + \'Seu inimigo devolve o dano que seria direcionado a ele.\' + \'\\n\'
        actU = actU + \`Você tentou tirar \${danoU} de dano, mas ele refletiu seu ataque.\` + \'\\n\'`
    },{reg: 108,nome: 'Garoodia',
        sprite: 'src/imagens/cubicos/Garoodia.jpg',
        HP: 80,
        ATK: 150,
        SPE: 70,
        AC: 80,
        emblemas: ['Engrenagem', 'Sorriso'],
        repetitivo: false,
        SKILL: `ACCU -= Math.ceil(ACCU/10 * 4)
        actI = actI + \'Seu inimigo começa a voar.\' + \'\\n\'
        actU = actU + \'Você tem muita dificuldade em acertar o seu oponente.\' + \'\\n\'`
    },{reg: 109,nome: 'Duza',
        sprite: 'src/imagens/cubicos/Duza.jpg',
        HP: 150,
        ATK: 110,
        SPE: 50,
        AC: 90,
        emblemas: ['Engrenagem', 'Rei'],
        repetitivo: false,
        SKILL: `HPI *= 2;
        actI = actI + \'Seu oponente dobra o HP que tinha.\' + \'\\n\'
        actU = actU + \'Você percebe que a batalha vai durar mais do que imaginava.\' + \'\\n\'`
    },{reg: 110,nome: 'Indiora',
        sprite: 'src/imagens/cubicos/Indiora.jpg',
        HP: 300,
        ATK: 240,
        SPE: 80,
        AC: 85,
        emblemas: ['Sorriso', 'Rei'],
        repetitivo: true,
        SKILL: `HPU -= Math.ceil(ATKI/3)
        actI = actI + \'Seu inimigo te aflige 1/3 do ATK dele.\' + \'\\n\'
        actU = actU + \'Seu inimigo te acerta e você fica sem reação.\' + \'\\n\'`
    },{reg: 111,nome: 'Gundil',
        sprite: 'src/imagens/cubicos/Gundil.jpg',
        HP: 235,
        ATK: 300,
        SPE: 80,
        AC: 95,
        emblemas: ['Engrenagem', 'Musica'],
        repetitivo: false,
        SKILL: `SPEI = (SPEU * 3) + 1; ACCI -= Math.ceil(ACCI/3);
        actI = actI + \'Seu oponente se enfurece e se torna extremamente rápido.\' + \'\\n\'
        actU = actU + \'Você vê seu oponente vindo com tudo.\' + \'\\n\'`
    },{reg: 112,nome: 'Rasha',
        sprite: 'src/imagens/cubicos/Rasha.jpg',
        HP: 260,
        ATK: 260,
        SPE: 80,
        AC: 100,
        emblemas: ['Espada', 'Sorriso'],
        repetitivo: true,
        SKILL: `SPEU -= 10; 
        actI = actI + \'Seu oponente te congela e ataca.\' + \'\\n\'
        actU = actU + \'Você consegue sair do gelo, mas se sente mais lento.\' + \'\\n\'
        inimigoAtacar();`
    },{reg: 113,nome: 'Crimson Nova',
        sprite: 'src/imagens/cubicos/CrimsonNova.jpg',
        HP: 300,
        ATK: 300,
        SPE: 90,
        AC: 95,
        emblemas: ['Rei', 'Rei'],
        repetitivo: false,
        SKILL: `HPU -= Math.ceil(HPU/10 * 4); HPI -= Math.floor(HPI/10 * 4); 
        SPEI = (SPEU * 2) + 1; ACCI -= (ACCI/4);
        actI = actI + \'Seu inimigo remove 40% de ambos os HPs, e se torna extremamente rápido.\' + \'\\n\'
        actU = actU + \'Você sente nada além de medo.\' + \'\\n\'`
    },{reg: 114,nome: 'Trinity',
        sprite: 'src/imagens/cubicos/Trinity.jpg',
        HP: 500,
        ATK: 450,
        SPE: 100,
        AC: 100,
        emblemas: ['Neutro', 'Neutro'],
        repetitivo: false,
        SKILL: `HPU = HPU/2;
        actI = actI + \'Seu inimigo arrancametade do seu HP. \n Você provavelmente vai morrer.\' + \'\\n\' 
        actU = actU + \'Recomendo que tente fugir.\' + \'\\n\'
        inimigoAtacar();`
    }
]