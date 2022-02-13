/* Lembrete: 3 digitos do value são referentes a árvore de eventos
Milhar: Raiz                        Ex: 4305
Centena: Galho                          4: Raiz 4
Dezena: Galho                            3: Galho 3
Unidade: Id da resposta no menu           0: Galho 0 referente a base do galho 3,
Zero representa a base.                    5: Id 5 do menu
*/

const objeto = (local, etapa) =>{
    let obj = {textoPadrao: '', resps: [], run: []};
    let montagem = [];
    let Str1 = ``, Str2 = ``, Str3 = ``, Str4 = ``, Str5 = ``;
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
                        Str1 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7); `;
                        Str2 = `ficha[7].bg = "C1"; salvar(interaction, ficha, 7); `;
                        Str3 = `ficha[7].bg = "CV1"; salvar(interaction, ficha, 7); `;
                        Str4 = `if(Math.ceil(Math.random() * 4) === 4){negarTela = true; encontrarItem('Neutro', 'Neutro', interaction, ficha, Database)}
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
                        Str1 = `zerarEtapa = true; ficha[7].bg = "E2"; salvar(interaction, ficha, 7); `;
                        Str2 = `zerarEtapa = true; ficha[7].bg = "C1"; salvar(interaction, ficha, 7); `;
                        Str3 = `zerarEtapa = true; ficha[7].bg = "CV1"; salvar(interaction, ficha, 7); `;

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

                        Str1 = `calcularEtapa(); ficha[7].bg = "E3"; salvar(interaction, ficha, 7); `;
                        Str2 = `calcularEtapa(); ficha[7].bg = "E1"; salvar(interaction, ficha, 7); `;
                        Str3 = `calcularEtapa(); ficha[7].bg = "F1"; salvar(interaction, ficha, 7); `;
                        Str4 = `calcularEtapa(); ficha[7].bg = "F5"; salvar(interaction, ficha, 7); `;
                        Str5 = `if(Math.ceil(Math.random() * 4 ) === 4){negarTela = true; encontrarItem('Neutro', 'Neutro', interaction, ficha, Database)}
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

                    Str1 = `zerarEtapa = true; ficha[7].bg = "E3"; salvar(interaction, ficha, 7); `;
                    Str2 = `zerarEtapa = true; ficha[7].bg = "E1"; salvar(interaction, ficha, 7); `;
                    Str3 = `zerarEtapa = true; ficha[7].bg = "F1"; salvar(interaction, ficha, 7); `;
                    Str4 = `zerarEtapa = true; ficha[7].bg = "F5"; salvar(interaction, ficha, 7); `;
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

                        Str1 = `ficha[7].bg = "CA1"; salvar(interaction, ficha, 7); `;
                        Str2 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7); `;
                        Str3 = `ficha[7].bg = "MT1"; salvar(interaction, ficha, 7); `;
                        Str4 = `if(Math.ceil(Math.random() * 4 ) === 4){negarTela = true; encontrarItem('Neutro', 'Neutro', interaction, ficha, Database)}
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

                        Str1 = `zerarEtapa = true; ficha[7].bg = "CA1"; salvar(interaction, ficha, 7); `;
                        Str2 = `zerarEtapa = true; ficha[7].bg = "E2"; salvar(interaction, ficha, 7); `;
                        Str3 = `zerarEtapa = true; ficha[7].bg = "MT1"; salvar(interaction, ficha, 7); `;
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

                break;
                default:
                break;
            }
        break;

        case'C2':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Uma constante movimentação de carros, um fluxo de pessoas indo e vindo de cada canto. Você vê placas informando que você está na "Praça Geral".';

                break;
                default:
                break;
            }
        break;

        case'C3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Luzes fortes e seguranças rodeando descrevem o lugar, você vê uma placa onde diz "aberto" 24hrs.';

                break;
                default:
                break;
            }
        break;

        case'C4':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Máquinas de apostas e uma musica Eletro-Pop incessante, você vê diversas pessoas perdendo dinheiro, porém uma exclamando ter tirado a sorte grande!';

                break;
                default:
                break;
            }
        break;

        case'C5':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Você estranhamente encontra o bar vazio, e percebe um item sobre a mesa.';

                break;
                default:
                break;
            }
        break;

        case'C6':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Uma musica sensual bem baixinha vinda de dentro do local. Pessoas semi-nuas saindo e entrando do estabelecimento.';

                break;
                default:
                break;
            }
        break;

        case'C7':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Você encontra a biblioteca vazia, e alguém no banheiro.';

                break;
                default:
                break;
            }
        break;

        case'C8':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='A prisão da cidade, os muros estavam com cartazes com um rosto de palhaço espalhados. Convenientemente o portão está aberto. ';

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
                    Str1 = `ficha[7].bg = "F2"; salvar(interaction, ficha, 7);`;
                    Str2 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7);`;
                    Str3 = `ficha[7].bg = "F5"; salvar(interaction, ficha, 7);`;
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
                    Str1 = `ficha[7].bg = "F3"; salvar(interaction, ficha, 7);`;
                    Str2 = `if(Math.ceil(Math.random() * 100) <= 30){
                        ficha[7].bg = "F1"
                    }else if(Math.ceil(Math.random() * 100) <= 90){
                        ficha[7].bg = "F3";
                        texto = 'Você não consegue sair da floresta pois está perdido.'
                    }else{
                        ficha[7].bg = "F4";
                    }
                    salvar(interaction, ficha, 7);`;
                    Str3 = `if(Math.ceil(Math.random() * 100) > 25){
                        npc = 3;
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
                    salvar(interaction, ficha, 7);`;
                    Str2 = `if(Math.ceil(Math.random() * 100) <= 30){
                        ficha[7].bg = "F1";
                    }else if(Math.ceil(Math.random() * 100) <= 90){
                        ficha[7].bg = "F3";
                        texto = 'Você não consegue encontrar a saida da floresta e acaba perdido.'
                    }else{
                        ficha[7].bg = "F4";
                    }
                    salvar(interaction, ficha, 7);`;
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
                    Str1 = `ficha[7].bg = "F1"; salvar(interaction, ficha, 7);`;
                    Str2 = `calcularEtapa();`;
                    Str3 = `texto = 'Você aprecia a vista.';`;
                break;

                case 1000:
                    obj.textoPadrao = 'Você encontra um filhotinho perdido no meio da floresta, ele está sozinho e com fome. Você não consegue levar ele com você a menos que deixe seus itens.'
                    montagem.push(
                        {label: 'Pegar o filhotinho.', value: '2001'},
                        {label: 'Deixar ele.', value: '0002'}
                    );
                    Str1 = `ficha[6].v1 = 25; ficha[6].v2 = 0; ficha[6].i1 = "Filhotinho"; ficha[6].i2 = "Nada"; salvar(interaction, ficha, 6); calcularEtapa(); ficha[1].value = 'Sorriso'; salvar(interaction, ficha, 1);`;
                    Str2 = `texto = 'Você deixa o filhotinho para trás.'; zerarEtapa = true;;`;
                break;

                case 2000:
                    obj.textoPadrao = 'Você pega o cachorrinho e leva ele com você.'
                    montagem.push(
                        {label: 'Voltar para o começo da floresta.', value: '0001'},
                        {label: 'Apreciar a vista.', value: '0002'}
                    );
                    Str1 = `ficha[7].bg = "F1"; salvar(interaction, ficha, 7); zerarEtapa = true;`;
                    Str2 = `texto = 'Você aprecia a vista.';`;
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
                    Str2 = `ficha[7].bg = "E2"; salvar(interaction, ficha, 7);`;
                    Str3 = `ficha[7].bg = "F3"; salvar(interaction, ficha, 7);`;
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
                    Str1 = `ficha[7].bg = "CV2"; salvar(interaction, ficha, 7); `;
                    Str2 = `ficha[7].bg = "E1"; salvar(interaction, ficha, 7); `;
                    Str3 = `if(Math.ceil(Math.random() * 20) >= 13){
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
                    Str1 = `ficha[7].bg = "CV1"; salvar(interaction, ficha, 7); `;
                    Str2 = `if(Math.ceil(Math.random() * 100) > 35){
                        let ini = Math.ceil(Math.random() * 5);
                        switch(ini){
                            case 1: npc = 105;
                            break;
                            case 2: npc = 106;
                            break; 
                            case 3: npc = 107;
                            break; 
                            case 4: npc = 109;
                            break;
                            case 5: npc = 103;
                            break;
                        }
                    }else{
                        texto = 'Você não encontrou nenhum inimigo.';
                    } `;
                    Str3 = `if(Math.ceil(Math.random() * 20) >= 13){
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
                    Str1 = `ficha[7].bg = "MT2"; salvar(interaction, ficha, 7);`;
                    Str2 = `ficha[7].bg = "E3"; salvar(interaction, ficha, 7);`;
                break;
                default:
                break;
            }
        break;

        case'MT2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Local frio e congelante, toda a iluminação do ambiente sai do topo, você vê um caminho coberto de gelo longo e escorregadio até lá.';

                break;
                default:
                break;
            }
        break;

        case'MT3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Você fica maravilhado com o céu azul, as nuvens passam sobre os seus pés, os ventos fazem você sentir como se estivesse voando.';

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
                            npc = 2; etapa = 1000;
                        }else{
                            texto = 'Voce bate no portão, mas ninguém aparece';
                        }`;
                        Str2 = `if(ficha[5].LVL >= 25){
                            ficha[7].bg = "CA2"; salvar(interaction, ficha, 7);
                        }else{
                            texto = 'Seu LVL não é o suficiente para abrir o portão';
                        } `;
                        Str3 = `if( Math.ceil( Math.random() * 20 ) === 20){ficha[7].bg = "CA2"; salvar(interaction, ficha, 7);}
                        else{texto = 'Você não encontrou outra forma de entrar.'}`;
                        Str4 = `ficha[7].bg = "E3"; salvar(interaction, ficha, 7);`;
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
                    Str1 = `npc = 1`;
                    Str2 = `npc = 1`;
                    Str3 = `npc = 1`;
                    Str4 = `npc = 1`;
                    Str5 = `npc = 1`;
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