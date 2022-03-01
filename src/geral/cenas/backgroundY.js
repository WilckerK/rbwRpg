/* Lembrete: 3 digitos do value são referentes a árvore de eventos
Milhar: Raiz                        Ex: 4305
Centena: Galho                          4: Raiz 4
Dezena: Galho                            3: Galho 3
Unidade: Id da resposta no menu           0: Galho 0 referente a base do galho 3,
Zero representa a base.                    5: Id 5 do menu
*/

const objeto = (local, etapa, ficha) =>{
    let obj = {textoPadrao: '', resps: [], run: []};
    let montagem = [];
    let Str1 = ``, Str2 = ``, Str3 = ``, Str4 = ``, Str5 = ``; StrP = ``;
    switch(local){

        //#region Estrada
        case'E1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Uma estrada de terra, os gramados ao redor possuem algumas poucas árvores com as flores amarelas, um ambiente calmo para um bom piquenique. Mas no fundo você vê algo parecido com uma caverna.';
                    montagem.push(
                            {label: 'Seguir em direção ao Norte.', value: '0001'},
                            {label: 'Seguir em direção ao Sul.', value: '0002'},
                            {label: 'Seguir em direção à caverna.', value: '0003'},
                            {label: 'Procurar por um item.', value: '1004'}
                        )
                        Str1 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str2 = `ficha[7].bg = "C1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str3 = `ficha[7].bg = "CV1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str4 = `if(Math.ceil(Math.random() * 10 ) === 10){negarTela = true; encontrarItem('Neutro', 'Neutro', interaction, ficha, Database)}
                            else{texto = 'Você revirou pedras e cavou na terra, mas infelizmente você não conseguiu encontrar um item.'}
                            calcularEtapa();`;
                break;
                case 1000:
                    obj.textoPadrao = 'Uma estrada de terra, os gramados ao redor possuem algumas poucas árvores com as flores amarelas, um ambiente calmo para um bom piquenique. Mas no fundo você vê algo parecido com uma caverna.';
                    montagem.push(
                            {label: 'Seguir em direção ao Norte.', value: '0001'},
                            {label: 'Seguir em direção ao Sul.', value: '0002'},
                            {label: 'Entrar na caverna.', value: '0003'}
                        )
                        Str1 = `zerarEtapa = true; ficha[7].bg = "E2"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str2 = `zerarEtapa = true; ficha[7].bg = "C1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str3 = `zerarEtapa = true; ficha[7].bg = "CV1"; salvar(interaction, ficha, 7);npc = ''; `;

                break;
                default:
                break;
            }
        break;

        case'E2':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Uma estrada com uma leve névoa, caso saia da trilha vai adentrar uma floresta densa e misteriosa que não aparenta amigável, você também vê de longe um cemitério no meio da mata.';
                    montagem.push(
                            {label: 'Seguir em direção ao Norte.', value: '0001'},
                            {label: 'Seguir em direção ao Sul.', value: '0002'},
                            {label: 'Entrar na floresta.', value: '0003'},
                            {label: 'Entrar no cemitério.', value: '0004'},
                            {label: 'Procurar por um item.', value: '1005'}
                        )

                        Str1 = `ficha[7].bg = "E3"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str2 = `ficha[7].bg = "E1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str3 = `ficha[7].bg = "F1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str4 = `ficha[7].bg = "F5"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str5 = `if(Math.ceil(Math.random() * 10 ) === 10){negarTela = true; encontrarItem('Neutro', 'Neutro', interaction, ficha, Database)}
                        else{texto = 'Você revirou pedras e cavou na terra, mas infelizmente você não conseguiu encontrar um item.'}
                        calcularEtapa();`;
                break;
                case 1000: 
                obj.textoPadrao ='Uma estrada com uma leve névoa, caso saia da trilha vai adentrar uma floresta densa e misteriosa que não aparenta amigável, você também vê de longe um cemitério no meio da mata.';
                montagem.push(
                        {label: 'Seguir em direção ao Norte.', value: '0001'},
                        {label: 'Seguir em direção ao Sul.', value: '0002'},
                        {label: 'Entrar na floresta.', value: '0003'},
                        {label: 'Entrar no cemitério.', value: '0004'},
                    )

                    Str1 = `zerarEtapa = true; ficha[7].bg = "E3"; salvar(interaction, ficha, 7);npc = ''; `;
                    Str2 = `zerarEtapa = true; ficha[7].bg = "E1"; salvar(interaction, ficha, 7);npc = ''; `;
                    Str3 = `zerarEtapa = true; ficha[7].bg = "F1"; salvar(interaction, ficha, 7);npc = ''; `;
                    Str4 = `zerarEtapa = true; ficha[7].bg = "F5"; salvar(interaction, ficha, 7);npc = ''; `;
            break;
                break;
                default:
                break;
            }
        break;

        case'E3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Local com uma forte névoa, porém com belas árvores laranjas, mesmo algumas estando secas e sem vida. A rua e o passeio não se separam mais. Também há banquinhos.';
                    montagem.push(
                            {label: 'Seguir em direção ao Norte.', value: '0001'},
                            {label: 'Seguir em direção ao Sul.', value: '0002'},
                            {label: 'Seguir em direção à Montanha.', value: '0003'},
                            {label: 'Procurar por um item.', value: '1004'}
                        )

                        Str1 = `ficha[7].bg = "CA1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str2 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str3 = `ficha[7].bg = "MT1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str4 = `if(Math.ceil(Math.random() * 10 ) === 10){negarTela = true; encontrarItem('Neutro', 'Neutro', interaction, ficha, Database)}
                        else{texto = 'Você revirou pedras e cavou na terra, mas infelizmente você não conseguiu encontrar um item.'}
                        calcularEtapa();`;
                break;
                case 1000:
                    obj.textoPadrao = 'Local com uma forte névoa, porém com belas árvores laranjas, mesmo algumas estando secas e sem vida. A rua e o passeio não se separam mais. Também há banquinhos.';
                    montagem.push(
                            {label: 'Seguir em direção ao Norte.', value: '0001'},
                            {label: 'Seguir em direção ao Sul.', value: '0002'},
                            {label: 'Seguir em direção à Montanha.', value: '0003'}
                        )

                        Str1 = `zerarEtapa = true; ficha[7].bg = "CA1"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str2 = `zerarEtapa = true; ficha[7].bg = "E2"; salvar(interaction, ficha, 7);npc = ''; `;
                        Str3 = `zerarEtapa = true; ficha[7].bg = "MT1"; salvar(interaction, ficha, 7);npc = ''; `;
                break;
                default:
                break;
            }
        break;
        
        //#endregion

        //#region Cidade
        case'C1':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='O portão da cidade, com uma placa entre os pilares pintado como a bandeira da cidade. Muitas plantas e flores em vasos ao redor da avenida, pouca movimentação de carros.';
                    montagem.push(
                        {label: 'Entrar na cidade.', value: '0001'},
                        {label: 'Voltar para a estrada.', value: '0002'},
                        {label: 'Observar as plantas.', value: '1003'}
                    );
                    Str1 = `ficha[7].bg = "C2"; salvar(interaction, ficha, 7);npc = '';`;
                    Str2 = `ficha[7].bg = "E1"; salvar(interaction, ficha, 7);npc = '';`;
                    Str3 = `if(Math.ceil(Math.random() * 3) === 2) {texto = 'Você observa as plantas, e ao chegar mais perto você esbarra e derruba um vaso quebrando ele.;'}
                    else{calcularEtapa();}`;
                break;
                case 1000:
                    obj.textoPadrao ='Você nota um caminho estreito indo em direção a algum lugar, gostaria de segui-lo?.';
                    montagem.push(
                        {label: 'Entrar na cidade.', value: '0001'},
                        {label: 'Voltar para a estrada.', value: '0002'},
                        {label: 'Seguir o caminho.', value: '0003'}
                    );
                    Str1 = `ficha[7].bg = "C2"; salvar(interaction, ficha, 7);npc = ''; zerarEtapa = true;`;
                    Str2 = `ficha[7].bg = "E1"; salvar(interaction, ficha, 7);npc = ''; zerarEtapa = true;`;
                    Str3 = `ficha[7].bg = "C8"; salvar(interaction, ficha, 7);npc = ''; zerarEtapa = true;`;
                break;
                default:
                break;
            }
        break;

        case'C2':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Uma constante movimentação de carros, um fluxo de pessoas indo e vindo de cada canto. Você vê placas informando que você está na "Praça Geral".';
                    montagem.push(
                        {label: 'Ir para o bar.', value: '0001'},
                        {label: 'Ir para o cassino.', value: '0002'},
                        {label: 'Ir para a biblioteca.', value: '0003'},
                        {label: 'Voltar para a entrada da cidade.', value: '0004'}
                    );
                    Str1 = `ficha[7].bg = "C5"; salvar(interaction, ficha, 7);`;
                    Str2 = `ficha[7].bg = "C3"; salvar(interaction, ficha, 7);`;
                    Str3 = `ficha[7].bg = "C7"; salvar(interaction, ficha, 7);`;
                    Str4 = `ficha[7].bg = "C1"; salvar(interaction, ficha, 7);npc = '';`;
                break;
                default:
                break;
            }
        break;

        case'C3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Luzes fortes e seguranças rodeando descrevem o lugar, você vê uma placa onde diz "aberto" 24hrs. Mas atrás do cassino você vê uma rua meio escura com uma boate ao fundo.';
                    montagem.push(
                        {label: 'Entrar no cassino.', value: '0001'},
                        {label: 'Ir até a boate.', value: '0002'},
                        {label: 'Voltar para a Praça Geral.', value: '0003'},
                    );
                    Str1 = `ficha[7].bg = "C4"; salvar(interaction, ficha, 7);`;
                    Str2 = `ficha[7].bg = "C6"; salvar(interaction, ficha, 7);`;
                    Str3 = `ficha[7].bg = "C2"; salvar(interaction, ficha, 7);`;
                break;
                default:
                break;
            }
        break;

        case'C4':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Máquinas de apostas e uma musica Eletro-Pop incessante, você vê diversas pessoas perdendo dinheiro, porém uma exclamando ter tirado a sorte grande!';
                    montagem.push(
                        {label: 'Jogar "Jogo do Bixo".', value: '0001'},
                        {label: 'Apostar.', value: '1002'},
                        {label: 'Ir nas máquinas caça-níquel.', value: '2003'},
                        {label: 'Sair do cassino.', value: '0004'},
                    );
                    Str1 = `interaction.channel.send({content: 'https://discord.gg/ZQC2JxXzZR'})`;
                    Str2 = `if(ficha[10].rewbs >=  50){
                        calcularEtapa();
                    }else{
                        texto = 'Você não tem dinheiro o suficiente para fazer nenhuma aposta.'
                    }`;
                    Str3 = `if(ficha[10].rewbs > 5){
                        calcularEtapa();
                    }else{
                        texto = 'Você não tem dinheiro o suficiente para poder rodar uma máquina caça-níquel.'
                    }`;
                    Str4 = `ficha[7].bg = "C3"; salvar(interaction, ficha, 7);`;
                break;
                case 1000:
                    obj.textoPadrao = 'Você pessoas apostando em uma corrida de cavalos que está passando na televisão, a aposta é de 50 rewbs. Em qual cavalo quer apostar?'
                    montagem.push(
                        {label: 'Reizin, o campeão.', value: '0001'},
                        {label: 'Adaga, a violenta.', value: '0002'},
                        {label: 'Sonoro, o elegante.', value: '0003'},
                        {label: 'Engen, o esperto.', value: '0004'},
                        {label: 'Gargalho, o contente.', value: '0005'}
                    );
                    StrP = `if(ficha[10].rewbs >= 50){
                    ficha[10].rewbs -= 50;
                    let decis = Math.ceil(Math.random() * 5)
                    switch(decis){
                        case 1: decis = 'Reizin';
                        break;
                        case 2: decis = 'Adaga';
                        break;
                        case 3: decis = 'Sonoro';
                        break;
                        case 4: decis = 'Engen';
                        break;
                        case 5: decis = 'Gargalho';
                        break;
                    } 
                    zerarEtapa = true;
                    texto = 'O vencedor foi ' + decis + '.'; `;
                    Str1 = StrP + `if(decis === 'Reizin'){
                        ficha[10].rewbs += 200; salvar(interaction, ficha, 10); 
                        texto = texto + ' Parabéns você ganhou.';
                    }else{
                        salvar(interaction, ficha, 10); 
                        texto = texto + ' Infelizmente você perdeu.';
                    }}else{texto = 'Você não tem rewbs o suficiente para fazer uma aposta.'}`;
                    Str2 = StrP + `if(decis === 'Adaga'){
                        ficha[10].rewbs += 200; salvar(interaction, ficha, 10); 
                        texto = texto + ' Parabéns você ganhou.';
                    }else{
                        salvar(interaction, ficha, 10); 
                        texto = texto + ' Infelizmente você perdeu.';
                    }}else{texto = 'Você não tem rewbs o suficiente para fazer uma aposta.'}`;
                    Str3 = StrP + `if(decis === 'Sonoro'){
                        ficha[10].rewbs += 200; salvar(interaction, ficha, 10); 
                        texto = texto + ' Parabéns você ganhou.';
                    }else{
                        salvar(interaction, ficha, 10); 
                        texto = texto + ' Infelizmente você perdeu.';
                    }}else{texto = 'Você não tem rewbs o suficiente para fazer uma aposta.'}`;
                    Str4 = StrP + `if(decis === 'Engen'){
                        ficha[10].rewbs += 200; salvar(interaction, ficha, 10); 
                        texto = texto + ' Parabéns você ganhou.';
                    }else{
                        salvar(interaction, ficha, 10); 
                        texto = texto + ' Infelizmente você perdeu.';
                    }}else{texto = 'Você não tem rewbs o suficiente para fazer uma aposta.'}`;
                    Str5 = StrP + `if(decis === 'Gargalho'){
                        ficha[10].rewbs += 200; salvar(interaction, ficha, 10); 
                        texto = texto + ' Parabéns você ganhou.';
                    }else{
                        salvar(interaction, ficha, 10); 
                        texto = texto + ' Infelizmente você perdeu.';
                    }}else{texto = 'Você não tem rewbs o suficiente para fazer uma aposta.'}`;
                break;
                case 2000:
                    obj.textoPadrao = 'Quanto você quer colocar na máquina?'
                    montagem.push(
                        {label: '5', value: '0001'},
                        {label: '10', value: '0002'},
                        {label: '50', value: '0003'},
                        {label: '100', value: '0004'},
                        {label: '500', value: '0005'}
                    );
                    StrP = `chanceDeGanhar = Math.ceil(Math.random() * 3); zerarEtapa = true;`
                    Str1 = StrP + `if(ficha[10].rewbs >= 5){if(chanceDeGanhar === 3){ficha[10].rewbs += 10; texto = 'Parabéns, você dobrou o seu dinheiro.'}
                    else{ficha[10].rewbs -= 5; texto = 'Infelizmente, você deu azar e a máquina ficou com o seu dinheiro.'} salvar(interaction, ficha, 10);}
                    else{texto = 'Você não tem o suficiente para colocar essa quantia na máquina.'}`;
                    Str2 = StrP + `if(ficha[10].rewbs >= 5){if(chanceDeGanhar === 3){ficha[10].rewbs += 20; texto = 'Parabéns, você dobrou o seu dinheiro.'}
                    else{ficha[10].rewbs -= 10; texto = 'Infelizmente, você deu azar e a máquina ficou com o seu dinheiro.'} salvar(interaction, ficha, 10);}
                    else{texto = 'Você não tem o suficiente para colocar essa quantia na máquina.'}`;
                    Str3 = StrP + `if(ficha[10].rewbs >= 5){if(chanceDeGanhar === 3){ficha[10].rewbs += 100; texto = 'Parabéns, você dobrou o seu dinheiro.'}
                    else{ficha[10].rewbs -= 50; texto = 'Infelizmente, você deu azar e a máquina ficou com o seu dinheiro.'} salvar(interaction, ficha, 10);}
                    else{texto = 'Você não tem o suficiente para colocar essa quantia na máquina.'}`;
                    Str4 = StrP + `if(ficha[10].rewbs >= 5){if(chanceDeGanhar === 3){ficha[10].rewbs += 200; texto = 'Parabéns, você dobrou o seu dinheiro.'}
                    else{ficha[10].rewbs -= 100; texto = 'Infelizmente, você deu azar e a máquina ficou com o seu dinheiro.'} salvar(interaction, ficha, 10);}
                    else{texto = 'Você não tem o suficiente para colocar essa quantia na máquina.'}`;
                    Str5 = StrP + `if(ficha[10].rewbs >= 5){if(chanceDeGanhar === 3){ficha[10].rewbs += 1000; texto = 'Parabéns, você dobrou o seu dinheiro.'}
                    else{ficha[10].rewbs -= 500; texto = 'Infelizmente, você deu azar e a máquina ficou com o seu dinheiro.'} salvar(interaction, ficha, 10);}
                    else{texto = 'Você não tem o suficiente para colocar essa quantia na máquina.'}`;
                break;
                default:
                break;
            }
        break;

        case'C5':
        etapa = (etapa === 0)?(Math.floor(Math.random() * 20) === 0)?etapa = 100: etapa : etapa;
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Dentro do bar você vê diversas bebidas e camisas de esportes, porém na frente do barman você vê diversos itens e uma placa que diz "Compra-mos ouro".';
                    montagem.push(
                        {label: 'Perguntar dos itens.', value: '2001'},
                        {label: 'Vender ouro.', value: '3002'},
                        {label: 'Sair do bar.', value: '9003'}
                    );
                    Str1 = `calcularEtapa();`;
                    Str2 = `if(ficha[10].ouroP === 0 && ficha[10].ouroM === 0 && ficha[10].ouroG === 0){
                        texto = 'Você não tem nenhum ouro para poder vender no momento.'
                    }else{etapa = 3000;}`;
                    Str3 = `ficha[7].bg = "C2"; salvar(interaction, ficha, 7);`;
                break;
                case 100:
                    obj.textoPadrao ='Você estranhamente encontra o bar vazio, e percebe um item sobre a mesa.';
                    montagem.push(
                        {label: 'Tentar pegar.', value: '1001'},
                        {label: 'Sair do bar.', value: '0002'}
                    );
                    Str1 = `if(Math.ceil(Math.random() * 4) === 4){calcularEtapa(); negarTela = true; encontrarItem('Neutro', 'Neutro', interaction, ficha, Database);}
                    else{texto = 'O dono do bar vê você tentando o roubar, ele te espanca, retira do bar e rouba todos os seus rewbs.';
                    ficha[10].rewbs = 0; salvar(interaction, ficha, 10);
                    ficha[7].bg = "C2"; salvar(interaction, ficha, 7);}`;                                                                    // Ajustar Svelter <-------------
                    Str2 = `ficha[7].bg = "C2"; salvar(interaction, ficha, 7);`;
                break;
                case 1000:
                    obj.textoPadrao ='O bar permanece vazio.';
                    montagem.push(
                        {label: 'Aguardar.', value: '1101'},
                        {label: 'Sair do bar.', value: '0002'}
                    );
                    Str1 = `if(Math.ceil(Math.random() * 4) === 4){etapa = 10001;zerarEtapa = true;}
                    else{calcularEtapa(); texto = 'Ele ainda não chegou...';}`;
                    Str2 = `ficha[7].bg = "C2";zerarEtapa = true; salvar(interaction, ficha, 7);`;
                break;
                case 1100:
                    obj.textoPadrao ='Você estranhamente encontra o bar vazio, e percebe um item sobre a mesa.';
                    montagem.push(
                        {label: 'Aguardar.', value: '1101'},
                        {label: 'Sair do bar.', value: '0002'}
                    );
                    Str1 = `if(Math.ceil(Math.random() * 4) === 4){zerarEtapa = true;}
                    else{texto = 'Talvez ele demore a vir...';}`;
                    Str2 = `ficha[7].bg = "C2";zerarEtapa = true; salvar(interaction, ficha, 7);`;
                break;
                case 2000:
                    let it1, it2, it3, it4;
                    if(ficha[11].reset === true){
                    const nivelDosItensGanhos = (ficha[5].LVL >= 15)? 4:(ficha[5].LVL >= 7)?3:2;
                    const itensX = require('../itensX');
                    it1 = itensX[Math.ceil(Math.random() * (nivelDosItensGanhos * 5))];
                    it2 = itensX[Math.ceil(Math.random() * (nivelDosItensGanhos * 5))];
                    it3 = itensX[Math.ceil(Math.random() * (nivelDosItensGanhos * 5))];
                    it4 = itensX[Math.ceil(Math.random() * (nivelDosItensGanhos * 5))];
                    ficha[11].it1 = it1;
                    ficha[11].it2 = it2;
                    ficha[11].it3 = it3;
                    ficha[11].it4 = it4;
                    }else{
                        it1 = ficha[11].it1;
                        it2 = ficha[11].it2;
                        it3 = ficha[11].it3;
                        it4 = ficha[11].it4;
                    }
                    const itv1 = (it1.reg - (it1.reg % 5)) * 10 + (90 + Math.ceil(Math.random() * 30))
                    const itv2 = (it2.reg - (it2.reg % 5)) * 10 + (90 + Math.ceil(Math.random() * 30))
                    const itv3 = (it3.reg - (it3.reg % 5)) * 10 + (90 + Math.ceil(Math.random() * 30))
                    const itv4 = (it4.reg - (it4.reg % 5)) * 10 + (90 + Math.ceil(Math.random() * 30))

                    obj.textoPadrao = `O barman te oferece quatro itens.
${it1.nome} por ${itv1},
${it2.nome} por ${itv2},
${it3.nome} por ${itv3},
${it4.nome} por ${itv4}.`
                    montagem.push(
                        {label: it1.nome , value: '2001'},
                        {label: it2.nome , value: '0002'},
                        {label: it3.nome , value: '9003'},
                        {label: it4.nome , value: '9004'},
                        {label: "Voltar", value: '0005'}
                    );
                    StrP = `negarTela = true; zerarEtapa = true; ficha[11].reset = false; salvar(interaction, ficha, 11); salvar(interaction, ficha, 10);`
                    Str1 = `if(ficha[10].rewbs >= ${itv1}){ficha[10].rewbs -= ${itv1}; encontrarItem( ${parseInt(it1.reg)} , 'Neutro', interaction, ficha, Database); ` + StrP + ` }
                    else{texto = 'Você não tem rewbs o bastante para comprar este item.';}` 
                    Str2 = `if(ficha[10].rewbs >= ${itv2}){ficha[10].rewbs -= ${itv2}; encontrarItem( ${parseInt(it2.reg)} , 'Neutro', interaction, ficha, Database); ` + StrP + ` }
                    else{texto = 'Você não tem rewbs o bastante para comprar este item.';}` 
                    Str3 = `if(ficha[10].rewbs >= ${itv3}){ficha[10].rewbs -= ${itv3}; encontrarItem( ${parseInt(it3.reg)} , 'Neutro', interaction, ficha, Database); ` + StrP + ` }
                    else{texto = 'Você não tem rewbs o bastante para comprar este item.';}` 
                    Str4 = `if(ficha[10].rewbs >= ${itv4}){ficha[10].rewbs -= ${itv4}; encontrarItem( ${parseInt(it4.reg)} , 'Neutro', interaction, ficha, Database); ` + StrP + ` }
                    else{texto = 'Você não tem rewbs o bastante para comprar este item.';}` 
                    Str5 = `zerarEtapa = true; ficha[11].reset = false; salvar(interaction, ficha, 11);`;
                break;
                case 3000:
                    obj.textoPadrao = `Quais ouros você quer vender? Você possui ${ficha[10].ouroP} de ouro pequeno, ${ficha[10].ouroM} de ouro médio e ${ficha[10].ouroG} de ouro grande.`;
                    montagem.push(
                        {label: 'Vender Pequenos', value: '0001'},
                        {label: 'Vender Médios', value: '0002'},
                        {label: 'Vender Grandes', value: '0003'},
                        {label: "Voltar", value: '0004'}
                    )
                    Str1 = `if(ficha[10].ouroP > 0){ficha[10].rewbs += (ficha[10].ouroP * 15);texto = 'Voce vendeu ${ficha[10].ouroP} e ganhou ${ficha[10].ouroP * 15} de rewbs.'; ficha[10].ouroP = 0; salvar(interaction, ficha, 10); }
                    else{texto = 'Você não possui ouros pequenos.'}`;
                    Str2 = `if(ficha[10].ouroM > 0){ficha[10].rewbs += (ficha[10].ouroM * 33);texto = 'Voce vendeu ${ficha[10].ouroM} e ganhou ${ficha[10].ouroM * 33} de rewbs.'; ficha[10].ouroM = 0; salvar(interaction, ficha, 10); }
                    else{texto = 'Você não possui ouros médios.'}`;
                    Str3 = `if(ficha[10].ouroG > 0){ficha[10].rewbs += (ficha[10].ouroG * 50);texto = 'Voce vendeu ${ficha[10].ouroG} e ganhou ${ficha[10].ouroG * 50} de rewbs.'; ficha[10].ouroG = 0; salvar(interaction, ficha, 10); }
                    else{texto = 'Você não possui ouros grandes.'}`;
                    Str4 = `zerarEtapa = true; salvar(interaction, ficha, 11);`;
                break;
                default:
                break;
            }
        break;

        case'C6':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Uma musica sensual bem baixinha vinda de dentro do local. Pessoas semi-nuas saindo e entrando do estabelecimento.';
                    montagem.push(
                        {label: 'Entrar no puteiro.', value: '0001'},
                        {label: 'Entrar pelo fundo do Cassino.', value: '0002'},
                        {label: 'Voltar para a Praça Geral.', value: '0003'},
                    );
                    Str1 = `texto: 'O guarda diz que está lotado o local, e fala para você voltar depois.'`;
                    Str2 = `ficha[7].bg = "C4"; salvar(interaction, ficha, 7);`;
                    Str3 = `ficha[7].bg = "C2"; salvar(interaction, ficha, 7);`;
                break;
                default:
                break;
            }
        break;

        case'C7':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Você encontra a biblioteca vazia, e alguém no banheiro.';
                    montagem.push(
                        {label: 'Pegar um livro.', value: '1001'},
                        {label: 'Sair do bar.', value: '0002'}
                    );
                    Str1 = `calcularEtapa(); negarTela = true; encontrarItem( 15, 'Neutro', interaction, ficha, Database);`; 
                    Str2 = `ficha[7].bg = "C2"; salvar(interaction, ficha, 7);`;
                break;
                case 1000:
                    obj.textoPadrao = 'A biblioteca ainda está vazia e a pessoa ainda está no banheiro.';
                    montagem.push(
                        {label: 'Aguardar.', value: '1101'},
                        {label: 'Sair do bar.', value: '0002'}
                    );
                    Str1 = `if(Math.ceil(Math.random() * 4) === 4){zerarEtapa = true;}
                    else{calcularEtapa(); texto = 'Ele ainda não saiu...';}`;
                    Str2 = `ficha[7].bg = "C2";zerarEtapa = true; salvar(interaction, ficha, 7);`;
                break;
                case 1100:
                    obj.textoPadrao = 'A biblioteca ainda está vazia e a pessoa ainda está no banheiro.';
                    montagem.push(
                        {label: 'Aguardar.', value: '1101'},
                        {label: 'Sair do bar.', value: '0002'}
                    );
                    Str1 = `texto = 'Aparentemente ele irá demorar...';`;
                    Str2 = `ficha[7].bg = "C2";zerarEtapa = true; salvar(interaction, ficha, 7);`;
                break;
                default:
                break;
            }
        break;

        case'C8':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='A prisão da cidade, os muros estão com cartazes espalhados com um rosto de palhaço. O porteiro fica atrás de um vidro a prova de balas. O vidro e preto e você não consegue ver nada além dele.';
                    montagem.push(
                        {label: 'Tentar entrar.', value: '0001'},
                        {label: 'Conversar com o guarda.', value: '1002'},
                        {label: 'Voltar para a entrada da cidade.', value: '0003'}
                    );
                    Str1 = `texto = 'O homem da portaria diz que não está em horário de visita.'`;
                    Str2 = `calcularEtapa();`;
                    Str3 = `ficha[7].bg = "C1"; salvar(interaction, ficha, 7);`;
                break;
                case 1000:
                    obj.textoPadrao ='Você tenta comprimentar o guarda, mas ele não te responde.';
                    montagem.push(
                        {label: 'Qual o seu nome?', value: '1101'},
                        {label: 'Quando é o horário de visita?', value: '1102'},
                        {label: 'Por que os palhaços na parede?', value: '1103'}
                    );
                    Str1 = `calcularEtapa();`;
                    Str2 = `calcularEtapa();`;
                    Str3 = `calcularEtapa();`;
                break;
                case 1100:
                    obj.textoPadrao ='Ele ignora a sua pergunta.';
                    montagem.push(
                        {label: 'Continuar tentando falar com ele.', value: '1001'},
                        {label: 'Parar de falar com ele.', value: '0002'}
                    );
                    Str1 = `texto = 'Qual pergunta quer fazer?';calcularEtapa();`;
                    Str2 = `calcularEtapa();`;
                break;
                default:
                break;
            }
        break;

        //#endregion

        //#region Floresta
        case'F1':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Árvores e mais árvores sem fim, todo lado em que olha não vê nada além de mata densa.';
                    montagem.push(
                        {label: 'Adentrar a floresta.', value: '0001'},
                        {label: 'Voltar para a estrada.', value: '0002'},
                        {label: 'Ir para o cemitério.', value: '0003'}
                    );
                    Str1 = `ficha[7].bg = "F2"; salvar(interaction, ficha, 7);npc = '';`;
                    Str2 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7);npc = '';`;
                    Str3 = `ficha[7].bg = "F5"; salvar(interaction, ficha, 7);npc = '';`;
                break;
                default:
                break;
            }
        break;

        case'F2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'A mata se fecha cada vez mais, você não tem mais certeza do caminho que fez para chegar aqui.';
                    montagem.push(
                        {label: 'Adentrar mais a floresta.', value: '0001'},
                        {label: 'Tentar voltar.', value: '0002'},
                        {label: 'Gritar por ajuda.', value: '0003'}
                    );
                    Str1 = `ficha[7].bg = "F3"; salvar(interaction, ficha, 7);npc = '';`;
                    Str2 = `if(Math.ceil(Math.random() * 100) <= 30){
                        ficha[7].bg = "F1"
                    }else if(Math.ceil(Math.random() * 100) <= 90){
                        ficha[7].bg = "F3";
                        texto = 'Você não consegue sair da floresta pois está perdido.'
                    }else{
                        ficha[7].bg = "F4";
                    }
                    salvar(interaction, ficha, 7);npc = '';`;
                    Str3 = `if(Math.ceil(Math.random() * 100) > 25){
                        etapa = 0;
                    }else{texto = 'Ninguém apareceu.';}`;
                break;
                default:
                break;
            }
        break;

        case'F3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Alguns animais selvagens estão próximos a você, mas sempre que se aproxima eles fogem.';
                    montagem.push(
                        {label: 'Adentrar mais a floresta.', value: '0001'},
                        {label: 'Tentar voltar.', value: '0002'},
                        {label: 'Gritar por ajuda.', value: '0003'}
                    );
                    Str1 = `if (Math.ceil(Math.random() * 100) > 10){ficha[7].bg = "F2";}
                    else{ficha[7].bg = "F4";}
                    salvar(interaction, ficha, 7);npc = '';`;
                    Str2 = `if(Math.ceil(Math.random() * 100) <= 30){
                        ficha[7].bg = "F1";
                    }else if(Math.ceil(Math.random() * 100) <= 90){
                        ficha[7].bg = "F3";
                        texto = 'Você não consegue encontrar a saida da floresta e acaba perdido.'
                    }else{
                        ficha[7].bg = "F4";
                    }
                    salvar(interaction, ficha, 7);npc = '';`;
                    Str3 = `if(Math.ceil(Math.random() * 100) > 25){
                        npc = 3;
                    }else{texto = 'Ninguém apareceu.';}`;
                break;
                default:
                break;
            }
        break;

        case'F4':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Um canto secreto da floresta, poucos chegam até aqui, talvez nem você conseguirá retornar a este ponto novamente.';
                    montagem.push(
                        {label: 'Voltar para o começo da floresta.', value: '0001'},
                        {label: 'Olhar melhor ao redor.', value: '1002'},
                        {label: 'Apreciar a vista.', value: '0003'}
                    );
                    Str1 = `ficha[7].bg = "F1"; salvar(interaction, ficha, 7);npc = '';`;
                    Str2 = `calcularEtapa();`;
                    Str3 = `texto = 'Você aprecia a vista da floresta, vê o brilho do sol atravessar as folhas das árvores e sente como se fosse um lugar encantado.';`;
                break;

                case 1000:
                    obj.textoPadrao = 'Você encontra um filhotinho perdido no meio da floresta, ele está sozinho e com fome. Você não consegue levar ele com você a menos que deixe seus itens.'
                    montagem.push(
                        {label: 'Pegar o filhotinho.', value: '2001'},
                        {label: 'Deixar ele.', value: '0002'}
                    );
                    Str1 = `ficha[6].v1 = 25; ficha[6].v2 = 0; ficha[6].i1 = "Filhotinho"; ficha[6].i2 = "Nada"; salvar(interaction, ficha, 6); calcularEtapa(); ficha[1].value = 'Sorriso'; salvar(interaction, ficha, 1);`;
                    Str2 = `texto = 'Você deixa o filhotinho para trás.'; zerarEtapa = true;`;
                break;

                case 2000:
                    obj.textoPadrao = 'Você pega o cachorrinho e leva ele com você.'
                    montagem.push(
                        {label: 'Voltar para o começo da floresta.', value: '0001'},
                        {label: 'Apreciar a vista.', value: '0002'}
                    );
                    Str1 = `ficha[7].bg = "F1"; salvar(interaction, ficha, 7);npc = ''; zerarEtapa = true;`;
                    Str2 = `texto = 'Você aprecia a vista da floresta, vê o brilho do sol atravessar as folhas das árvores e sente como se fosse um lugar encantado.';`;
                break;

                default:
                break;
            }
        break;

        case'F5':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Lápides de diversos formatos e tamanhos, esse lugar tem uma pessima sensação mórbida, pois até a vegetação aparenta morta.';
                    montagem.push(
                        {label: 'Olhar as lápides.', value: '0001'},
                        {label: 'Voltar para a estrada.', value: '0002'},
                        {label: 'Ir para a floresta.', value: '0003'}
                    );
                    Str1 = `let nome = Math.ceil(Math.random() * 4); 
                    switch(nome){
                        case 1: nome = 'Argentino.';
                        break;
                        case 2: nome = 'Copiador.';
                        break;
                        case 3: nome = 'Senhor Batata Glamuroso.';
                        break;
                        case 4: nome = 'C0r0nga?';
                        break;
                        default:
                        break;
                    }
                    texto = "Você vê uma lápide com o nome " + nome;`;
                    Str2 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7);npc = '';`;
                    Str3 = `ficha[7].bg = "F3"; salvar(interaction, ficha, 7);npc = '';`;
                break;
                default:
                break;
            }
        break;

        //#endregion

        //#region Caverna e Montanha
        case'CV1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'A entrada de uma carverna escura e ameaçadora, você ouve sons de bichos e monstros saindo de lá de dentro.';
                    montagem.push(
                        {label: 'Entrar na Caverna.', value: '0001'},
                        {label: 'Voltar para a estrada.', value: '0002'},
                        {label: 'Procurar ouro.', value: '0003'}
                    );
                    Str1 = `ficha[7].bg = "CV2"; salvar(interaction, ficha, 7);npc = ''; `;
                    Str2 = `ficha[7].bg = "E1"; salvar(interaction, ficha, 7);npc = ''; `;
                    Str3 = `if(Math.ceil(Math.random() * 20) >= 15){
                        let ouro = '';
                        switch(Math.ceil(Math.random() * 6)){
                            case 1: ficha[10].ouroP ++; ouro = 'pequeno pedaço de ouro';
                            break;
                            case 2: ficha[10].ouroP ++; ouro = 'pequeno pedaço de ouro';
                            break;
                            case 3: ficha[10].ouroP ++; ouro = 'pequeno pedaço de ouro';
                            break;
                            case 4: ficha[10].ouroM ++; ouro = 'pedaço médio de ouro';
                            break;
                            case 5: ficha[10].ouroM ++; ouro = 'pedaço médio de ouro';
                            break;
                            case 6: ficha[10].ouroG ++; ouro = 'grande pedaço de ouro';
                            break;
                        }
                        salvar(interaction, ficha, 10); 
                        texto = 'Você encontrou um ' + ouro + ' bruto.';
                    }else{ texto = 'Você não encontrou ouro na entrada da caverna.'}`;
                break;
                default:
                break;
            }
        break;

        case'CV2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Um breu quase completo, você confia mais na sua audição do que na própria visão, pois não enxerga a quatro passos de você.';
                    montagem.push(
                        {label: 'Sair da caverna.', value: '0001'},
                        {label: 'Procurar inimigos.', value: '0002'},
                        {label: 'Procurar ouro.', value: '0003'}
                    );
                    Str1 = `ficha[7].bg = "CV1"; salvar(interaction, ficha, 7);npc = ''; `;
                    Str2 = `if(Math.ceil(Math.random() * 100) > 35){
                        const ini = Math.ceil(Math.random() * 13);
                        npc = (ini + 100)
                    }else{
                        texto = 'Você não encontrou nenhum inimigo.';
                    } `;
                    Str3 = `if(Math.ceil(Math.random() * 20) >= 15){
                        let ouro = '';
                        switch(Math.ceil(Math.random() * 6)){
                            case 1: ficha[10].ouroP ++; ouro = 'pequeno pedaço de ouro';
                            break;
                            case 2: ficha[10].ouroP ++; ouro = 'pequeno pedaço de ouro';
                            break;
                            case 3: ficha[10].ouroM ++; ouro = 'pedaço médio de ouro';
                            break;
                            case 4: ficha[10].ouroM ++; ouro = 'pedaço médio de ouro';
                            break;
                            case 5: ficha[10].ouroM ++; ouro = 'pedaço médio de ouro';
                            break;
                            case 6: ficha[10].ouroG ++; ouro = 'grande pedaço de ouro';
                            break;
                        }
                        salvar(interaction, ficha, 10); 
                        texto = 'Você encontrou um ' + ouro + ' bruto.';
                    }else{ texto = 'Você não encontrou ouro dentro da caverna.'}`;
                break;
                default:
                break;
            }
        break;

        case'MT1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Você vê uma monstanha gigantesca que vai além das nuvens, a entrada é estreita porém você pode passar entre ela.';
                    montagem.push(
                        {label: 'Entrar na montanha.', value: '0001'},
                        {label: 'Voltar para a estrada.', value: '0002'}
                    );
                    Str1 = `ficha[7].bg = "MT2"; salvar(interaction, ficha, 7);npc = '';`;
                    Str2 = `ficha[7].bg = "E3"; salvar(interaction, ficha, 7);npc = '';`;
                break;
                default:
                break;
            }
        break;

        case'MT2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Local frio e congelante, toda a iluminação do ambiente sai do topo, você vê um caminho coberto de gelo longo e escorregadio até lá.';
                    montagem.push(
                        {label: 'Tentar subir pelo caminho.', value: '0001'},
                        {label: 'Sair da montanha.', value: '0002'}
                    );
                    Str1 = `if(Math.ceil(Math.random() * 100) >= 95){ficha[7].bg = "MT3"; salvar(interaction, ficha, 7); etapa = 0; npc = '';}
                    else{
                        const ini = Math.ceil(Math.random() * 5);
                        switch(ini){
                            case 1: npc = 109;
                            break;
                            case 2: npc = 108;
                            break; 
                            case 3: npc = 107;
                            break; 
                            case 4: npc = 109;
                            break;
                            case 5: npc = 106;
                            break;
                        }
                    }`;
                    Str2 = `ficha[7].bg = "MT1"; salvar(interaction, ficha, 7);npc = '';`;
                break;
                default:
                break;
            }
        break;

        case'MT3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Você fica maravilhado com o céu azul, as nuvens passam sobre os seus pés, os ventos fazem você sentir como se estivesse voando.';
                    montagem.push(
                        {label: 'Apreciar a vista.', value: '0001'},
                        {label: 'Voltar para dentro da montanha.', value: '0002'},
                        {label: 'Olhar melhor ao redor.', value: '1003'},
                        {label: 'Pular do topo.', value: '0004'}
                    );
                    Str1 = `texto = Você olha a beleza do céu durante um bom tempo.`;
                    Str2 = `ficha[7].bg = "MT2"; salvar(interaction, ficha, 7);npc = '';`;
                    Str3 = `calcularEtapa()`;
                    Str4 = ` texto = 'Você pula do topo da montanha e acaba caindo no meio da floresta, felizmente as folhas do chão diminuem o impacto da queda.';
                    ficha[7].bg = "F3"; salvar(interaction, ficha, 7);npc = '';`
                break;

                case 1000:
                    obj.textoPadrao = 'Você encontra uma Katana enterrada no meio da neve. Você não consegue levar ela com você a menos que deixe seus itens.'
                    montagem.push(
                        {label: 'Pegar a Katana.', value: '2001'},
                        {label: 'Deixar ela.', value: '0002'}
                    );
                    Str1 = `ficha[6].v1 = 22; ficha[6].v2 = 0; ficha[6].i1 = "Katana"; ficha[6].i2 = "Nada"; salvar(interaction, ficha, 6); calcularEtapa(); ficha[1].value = 'Espada'; salvar(interaction, ficha, 1);`;
                    Str2 = `texto = 'Você deixa a Katana para trás.'; zerarEtapa = true;`;
                break;

                case 2000:
                    obj.textoPadrao = 'Você pega a Katana e leva ele com você.'
                    montagem.push(
                        {label: 'Apreciar a vista.', value: '0001'},
                        {label: 'Voltar para dentro da montanha.', value: '0002'},
                        {label: 'Pular do topo.', value: '0003'}
                    );
                    Str1 = `texto = Você olha a beleza do céu durante um bom tempo.`;
                    Str2 = `ficha[7].bg = "MT2"; salvar(interaction, ficha, 7);npc = '';`;
                    Str3 = ` texto = 'Você pula do topo da montanha e acaba caindo no meio da floresta, felizmente as folhas do chão diminuem o impacto da queda.';
                    ficha[7].bg = "F3"; salvar(interaction, ficha, 7);npc = '';`
                break;
                default:
                break;
            }
        break;
        //#endregion

        //#region Castelo
        case'CA1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Um portão com grades de ferro, o denso nevoeiro não lhe permite ver nada além do portão e dos grandes muros. Os muros são tão altos que você não consegue ver o limite.';
                    montagem.push(
                            {label: 'Bater no portão.', value: '0001'},
                            {label: 'Tentar abrir o portão.', value: '0002'},
                            {label: 'Procurar outra forma de entrar.', value: '0003'},
                            {label: 'Voltar para a estrada.', value: '0004'}
                        )

                        Str1 = `if(Math.ceil(Math.random() * 100) <= 15){
                            etapa = 1000;
                        }else{
                            texto = 'Voce bate no portão, mas ninguém aparece';
                        }`;
                        Str2 = `if(ficha[5].LVL >= 25){
                            ficha[7].bg = "CA2"; salvar(interaction, ficha, 7);npc = '';
                        }else{
                            texto = 'Seu LVL não é o suficiente para abrir o portão';
                        } `;
                        Str3 = `if( Math.ceil( Math.random() * 20 ) === 20){ficha[7].bg = "CA2"; salvar(interaction, ficha, 7);npc = '';}
                        else{texto = 'Você não encontrou outra forma de entrar.'}`;
                        Str4 = `ficha[7].bg = "E3"; salvar(interaction, ficha, 7);npc = '';`;
                break;
                default:
                break;
            }
        break;

        case'CA2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = '... ... ...'
                    montagem.push(
                        {label: '...', value: '0001'},
                        {label: '...', value: '0002'},
                        {label: '...', value: '0003'},
                        {label: '...', value: '0004'},
                        {label: '...', value: '0005'}
                    );
                    Str1 = `etapa = 1000`;
                    Str2 = `etapa = 1000`;
                    Str3 = `etapa = 1000`;
                    Str4 = `etapa = 1000`;
                    Str5 = `etapa = 1000`;
                break;
                case 1000:
                    obj.textoPadrao = 'Você encontra uma coroa. Você não consegue levar ela com você a menos que deixe seus itens.'
                    montagem.push(
                        {label: 'Pegar a coroa.', value: '2001'},
                        {label: 'Deixar ele.', value: '0002'}
                    );
                    Str1 = `ficha[6].v1 = 21; ficha[6].v2 = 0; ficha[6].i1 = "Coroa"; ficha[6].i2 = "Nada"; salvar(interaction, ficha, 6); calcularEtapa(); ficha[1].value = 'Rei'; salvar(interaction, ficha, 1);`;
                    Str2 = `texto = 'Você deixa a coroa para trás.'; etapa = 2000;`;
                break;
                case 2000:
                    obj.textoPadrao = 'Você pegou a coroa.'
                    montagem.push(
                        {label: 'Sair.', value: '2001'}
                    );
                    Str1 = `ficha[7].bg = "CA1"; salvar(interaction, ficha, 7);npc = '';`;
                break;
                default:
                break;
            }
        break;
        //#endregion
        
        default:
        break;

    }
    
    
    obj.run = [Str1, Str2, Str3, Str4, Str5];

    obj.resps = [{   
        customId: 'Dialogo',
        placeholder: 'O que vai fazer/dizer?',
        
        options: montagem
    }];

    return obj
    
} 

module.exports = objeto;