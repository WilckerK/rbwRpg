const objeto = (local, etapa, ficha) =>{
    let obj = {textoPadrao: '', resps: [], run: []};
    let montagem = [];
    let Str1 = ``, Str2 = ``, Str3 = ``, Str4 = ``, Str5 = ``; StrP = ``;
    switch(ficha[9].C0r0nga){
        case 0: 
            switch(etapa){
            case 0: obj.textoPadrao = 'Bom dia. Não te conheço, qual o seu nome?';
                montagem.push(
                    {label: 'Falar a verdade.', value: '1001'},
                    {label: 'Ignora-lo.', value: '8002'},
                    {label: 'Mentir', value: '2003'}
                );
                Str1 = `texto = 'Prazer em te conhecer ' + ficha[0].value + '. Sou o C0r0nga, de onde você veio?'; etapa = 1000;`;
                Str2 = `calcularEtapa()`;
                Str3 = `calcularEtapa()`;
               
            break;
        case 1000: obj.textoPadrao = '';
                montagem.push(
                    {label: 'Falar a verdade.', value: '1201'},
                    {label: 'Ignora-lo.', value: '8002'},
                    {label: 'Mentir', value: '1103'}
                );
                Str1 = `calcularEtapa()`;
                Str2 = `calcularEtapa();`;
                Str3 = `texto = 'Prazer em te conhecer ' + i.content + '. Sou o C0r0nga, de onde você veio?'; calcularEtapa()`;
                break;

                case 1100: obj.textoPadrao = 'Qual lugar? [escreva]';
                Str1 = `etapa = 1200;`;
                break;
                
                case 1200: obj.textoPadrao = 'Nunca ouvi falar desse lugar, sou meio ruim de geografia. O que você faz aqui?';
                montagem.push(
                    {label: 'Eu mudei para cá recentemente.', value: '1211'},
                    {label: 'Passeando.', value: '1212'},
                    {label: 'Não sei.', value: '1223'},
                    {label: 'Onde fica a cidade mais próxima?', value: '1304'}
                );
                Str1 = `calcularEtapa()`;
                Str2 = `calcularEtapa()`;
                Str3 = `calcularEtapa()`;
                Str4 = `calcularEtapa()`;
                break;
                case 1210: obj.textoPadrao = 'Ahh, você veio ajudar na infestação dos monstros?';
                montagem.push(
                    {label: 'Sim.', value: '9001'},
                    {label: 'Não.', value: '1212'},
                    {label: 'Que monstros?', value: '3003'}
                );
                Str1 = `calcularEtapa()`;
                Str2 = `calcularEtapa()`;
                Str3 = `calcularEtapa()`;
                break;

                case 1220: obj.textoPadrao = 'Como assim não sabe? Perdeu a memoria?';
                    montagem.push(
                        {label: 'Não sei.', value: '0001'},
                        {label: 'Acho que sim.', value: '0011'},
                        {label: 'Não me lembro de nada.', value: '0101'}
                    );
                    Str1 = `texto = 'Tente refazer os seus passos. Qualquer coisa vá até a cidade, ela fica seguindo ao sul da estrada.'; etapa = 1300;`;
                break;
                case 1300: obj.textoPadrao = 'A cidade fica seguindo em direção ao sul da estrada, pode ir lá o pessoal é bem legal.'
                montagem.push(
                    {label: 'Ok.', value: '1001'},
                    {label: 'Muito obrigado.', value: '0101'},
                    {label: 'Vou até lá.', value: '0011'}
                );
                Str1 = `etapa = 9000;`;
                Str2 = `etapa = 9000;`;
                Str3 = `etapa = 9000;`;
                break;
            case 2000: obj.textoPadrao = 'Qual nome? [escreva]';
                Str1 = `texto = 'Prazer em te conhecer ' + i.content + '. Sou o C0r0nga, de onde você veio?'; etapa = 1000;`;
            break;
            case 3000:obj.textoPadrao = 'Você não sabe? Os monstros cúbicos que eram usados como treinamento dentro do castelo escaparam, e como a maioria dos guerreiros estão em expedição, estamos com um pouco de dificuldade para prender eles de novo.';
                montagem.push(
                    {label: 'É muito dificil se livrar deles?', value: '3011'},
                    {label: 'Eu posso ajudar vocês.', value: '9002'},
                    {label: 'Castelo?', value: '3103'}
                );
                Str1 = `calcularEtapa();`;
                Str2 = `texto = 'Obrigado, toda ajuda é bem vinda, eu fico andando por todo o reino, eventuamente vamos nos ver de novo.'; calcularEtapa();`;
                Str3 = `calcularEtapa();`;
            break;
            case 3010:obj.textoPadrao = 'Depende de qual é o monstro que você vai enfrentar. Tem alguns que podem te espancar e você não tem nem uma chance de reação.';
                montagem.push(
                    {label: 'Ganho tranquilo deles.', value: '9001'},
                    {label: 'Vou tentar evitar esses bichos.', value: '3022'},
                    {label: 'Eu posso ajudar vocês.', value: '9003'}
                );
                Str1 = `texto = 'Obrigado, toda ajuda é bem vinda, eu fico andando por todo o reino, eventuamente vamos nos ver de novo.'; calcularEtapa();`;
                Str2 = `calcularEtapa();`;
                Str3 = `texto = 'Obrigado, toda ajuda é bem vinda, eu fico andando por todo o reino, eventuamente vamos nos ver de novo.'; calcularEtapa();`;
            break;
            case 3020:obj.textoPadrao = 'Não precisa ter medo, eles apenas te nocauteam e te arrastam para longe, nenhum chega a matar até porque são monstros para treino.';
                montagem.push(
                    {label: 'Entendi', value: '9001'},
                    {label: 'Vou tentar evitar mesmo assim.', value: '9002'},
                    {label: 'Você falou sobre um castelo?', value: '3103'}
                );
                Str1 = `calcularEtapa();`
                Str2 = `calcularEtapa();`;
                Str3 = `calcularEtapa();`;
            break;
            case 3100:obj.textoPadrao = 'Ah sim, é onde o rei e a rainha moram, lá tem as reuniões da staff e treinamento dos guerreiros e da administração.';
            montagem.push(
                {label: 'Entendi', value: '9102'},
                {label: 'Rei?', value: '9012'},
                {label: 'Staff?', value: '9022'},
                {label: 'Onde fica?', value: '9003'}
            );
            Str2 = `texto = 'Aqui estou um pouco atrasado, eu fico andando por todo o reino, eventuamente vamos nos ver de novo e eu te explico tudo certinho. Flw.'; etapa = 9000;`;
            Str3 = `texto = 'Fica ao norte da estrada, aqui estou um pouco atrasado, eu fico andando por todo o reino, eventuamente vamos nos ver de novo.'; etapa = 9000;`;
        break;
            case 8000:obj.textoPadrao = 'Eh... Vc não fala muito né?';
                montagem.push(
                    {label: 'Eu falo, só não quero responder essa pergunta.', value: '0001'},
                    {label: '...', value: '0002'}
                );
                Str1 = `texto = 'Sem problema kkkkkkkkkkkkkk, eu também sou meio timído. Você veio aqui por causa da infestação de monstros?'; etapa = 1210;`;
                Str2 = `texto = 'De todo jeito, prazer em te conhecer, logo nos vemos.' etapa = 9000`;
            break;
            case 9000: obj.textoPadrao = 'Prazer em te conhecer, eu fico andando por todo o reino, eventuamente vamos nos ver de novo.';
                montagem.push(
                    {label: 'Tchau.', value: '9201'},
                    {label: 'Até logo.', value: '0901'},
                    {label: '...', value: '9001'}
                );
                
                Str1 = `ficha[9].C0r0nga ++; npc = 0; salvar(interaction, ficha, 9); zerarEtapa = true;`;
            break;
                default:
                break;
                }
            break;
        default:
        break;

    }
    
    
    obj.run = [Str1, Str2, Str3, Str4, Str5];
    if(montagem.length > 1){
        obj.resps = [{   
            customId: 'Dialogo',
            placeholder: 'O que vai fazer/dizer?',
            
            options: montagem
    }];
    }else{
        obj.resps = [montagem]
    }

    return obj
    
} 

module.exports = objeto;