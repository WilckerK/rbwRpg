const objeto = (local, etapa) =>{
    let obj = {textoPadrao: '', resps: []};
    let montagem = [];
    switch(local){
        
        case 'E1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Uma estrada de terra, os gramados ao redor possuem algumas poucas árvores com as flores amarelas. Um ambiente calmo para um bom piquenique.';
                    montagem.push(
                        {label: 'Seguir em direção ao Norte.', value: '100'},
                        {label: 'Seguir em direção ao Sul.', value: '200'},
                        {label: 'Procurar por um item.', value: '300'}
                        )
                break;
                default:
                break;
            }
        break;

        case'E2':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Uma estrada com uma leve névoa, caso saia da trilha vai adentrar uma floresta densa e misteriosa que aparenta ser nem um pouco amigável.';

                break;
                default:
                break;
            }
        break;

        case'E3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Local com uma forte névoa, porém com belas árvores laranjas, mesmo algumas estando secas e sem vida. A rua e o passeio não se separam mais. Também há banquinhos.';

                break;
                default:
                break;
            }
        break;

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

        case'f1':
            switch(etapa){
                case 0:
                    obj.textoPadrao ='Árvores e mais árvores sem fim, todo lado em que olha não vê nada além de mata densa.';

                break;
                default:
                break;
            }
        break;

        case'F2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'A mata se fecha cada vez mais, você não tem mais certeza do caminho que fez para chegar aqui.';

                break;
                default:
                break;
            }
        break;

        case'F3':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Alguns animais selvagens estão próximos a você, mas sempre que se aproxima eles fogem.';

                break;
                default:
                break;
            }
        break;

        case'F4':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Um canto secreto da floresta, poucos chegam até aqui, talvez nem você conseguirá retornar a este ponto novamente.';

                break;
                default:
                break;
            }
        break;

        case'F5':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Lápides de diversos formatos e tamanhos, esse lugar tem uma pessima sensação mórbida, pois até a vegetação aparenta morta.';

                break;
                default:
                break;
            }
        break;

        case'CV1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'A entrada de uma carverna escura e ameaçadora, você ouve sons de bichos e monstros saindo de lá de dentro.';

                break;
                default:
                break;
            }
        break;

        case'CV2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Um breu quase completo, você confia mais na sua audição do que na própria visão, pois não enxerga a quatro passos de você.';

                break;
                default:
                break;
            }
        break;

        case'MT1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Você vê uma monstanha gigantesca que vai além das nuvens, a entrada é estreita porém você pode passar entre ela.';

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

        case'CA1':
            switch(etapa){
                case 0:
                    obj.textoPadrao = 'Um portão com grades de ferro, o denso nevoeiro não lhe permite ver nada além dele e dos grandes muros, os muros são tão altos que não consegue ver o limite.';

                break;
                default:
                break;
            }
        break;

        case'CA2':
            switch(etapa){
                case 0:
                    obj.textoPadrao = '...'

                break;
                default:
                break;
            }
        break;

        default:
        break;

    }
    
    obj.resps = [{   
        customId: 'Dialogo',
        placeholder: 'O que vai fazer/dizer?',
        
        options: montagem
    }];

    return obj
    
} 

module.exports = objeto;