module.exports = [
    // Estrada
    {reg: 'E1', nome: 'Inicio da Estrada', img: './src/imagens/background/inicioEstrada.jpg', chance: 80, 
     npc: [ 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, ],
     derrota: 'E2', textoPadrao: 'Uma estrada de terra, os gramados ao redor possuem algumas poucas árvores com as flores amarelas. Um ambiente calmo para um bom piquenique.'},
//3, 3, 3, 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00
    {reg: 'E2', nome: 'Meio da Estrada', img: './src/imagens/background/meioEstrada.jpg', chance: 60, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E3', textoPadrao: 'Uma estrada com uma leve névoa, caso saia da trilha vai adentrar uma floresta densa e misteriosa que aparenta ser nem um pouco amigável.'},

    {reg: 'E3', nome: 'Final da Estrada', img: './src/imagens/background/finalEstrada.jpg' , chance: 30, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: 'Local com uma forte névoa, porém com belas árvores laranjas, mesmo algumas estando secas e sem vida. A rua e o passeio não se separam mais. Também há banquinhos. Portanto eu vou extrever um texto imenso na intençã de descobrir o limite e até onde vai o comprimento permitido pelo bot para saber quantos caracteres são necessários.'},


    // Cidade
    {reg: 'C1', nome: 'Entrada da Cidade', img: './src/imagens/background/entradaCidade.jpg', chance: 50, 
     npc: [ 3, 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: ''},

    {reg: 'C2', nome: 'Dentro da Cidade', img: './src/imagens/background/dentroCidade.jpg', chance: 90, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: ''},

    {reg: 'C3', nome: 'Entrada do Cassino', img: './src/imagens/background/entradaCassino.jpg', chance: 50, 
     npc: [ 3, 7, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: ''},

    {reg: 'C4', nome: 'Cassino', img: './src/imagens/background/dentroCassino.jpg', chance: 30, 
     npc: [ 3, 3, 3, 3, 3, 7, 7, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: ''},

    {reg: 'C5', nome: 'Bar do Svelter', img: './src/imagens/background/barDoSvelter.jpg', chance: 100, 
     npc: [ 3, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11 ],
     derrota: 'E1', textoPadrao: ''},

    {reg: 'C6', nome: 'Puteiro', img: './src/imagens/background/tibulo.jpg', chance: 90, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: ''},

    {reg: 'C7', nome: 'Biblioteca', img: './src/imagens/background/biblioteca.jpg', chance: 100, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: ''},

    {reg: 'C8', nome: 'Prisão', img: './src/imagens/background/prisao.jpg', chance: 75, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1', textoPadrao: ''},


    // Floresta
    {reg: 'F1', nome: 'Floresta', img: './src/imagens/background/floresta1.jpg', chance: 70, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2', textoPadrao: ''},

    {reg: 'F2', nome: 'Floresta', img: './src/imagens/background/floresta2.jpg', chance: 40, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2', textoPadrao: ''},

    {reg: 'F3', nome: 'Floresta', img: './src/imagens/background/floresta3.jpg', chance: 0, 
     npc: [ 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2', textoPadrao: ''},

    {reg: 'F4', nome: 'Floresta', img: './src/imagens/background/floresta4.jpg', chance: 0, 
     npc: [ 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2', textoPadrao: ''},

    {reg: 'F5', nome: 'Cemitério', img: './src/imagens/background/cemiterio.jpg', chance: 80, 
     npc: [ 3, 6, 6, 6, 6, 6, 6, 6, 6 , 6, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2', textoPadrao: ''},


    // Caverna
    {reg: 'CV1', nome: 'Entrada da Caverna', img: './src/imagens/background/entradaCaverna.jpg', chance: 75, 
     npc: [ 3, 7, 7, 7, 7, 7, 7, 7, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2', textoPadrao: ''},

    {reg: 'CV2', nome: 'Caverna', img: './src/imagens/background/dentroCaverna.jpg', chance: 85, 
     npc: [ 3, 7, 7, 7, 7, 7, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2', textoPadrao: ''},


    // Montanha
    {reg: 'MT1', nome: 'Entrada da Montanha', img: './src/imagens/background/entradaMontanha.jpg', chance: 60, 
     npc: [ 3, 3, 3, 11, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E3', textoPadrao: ''},

    {reg: 'MT2', nome: 'Montanha', img: './src/imagens/background/dentroMontanha.jpg', chance: 90, 
     npc: [ 3, 3, 11, 11, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E3', textoPadrao: ''},

    {reg: 'MT3', nome: 'Montanha', img: './src/imagens/background/topoMontanha.jpg', chance: 100, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E3', textoPadrao: ''},


    // Castelo
    {reg: 'CA1', nome: 'Portão do Castelo', img: './src/imagens/background/portaoCastelo.jpg', chance: 65, 
     npc: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 3, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E3', textoPadrao: ''},

    {reg: 'CA2', nome: 'Sala do Trono', img: './src/imagens/background/salaDoTrono.jpg', chance: 100, 
     npc: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
     derrota: 'E3', textoPadrao: ''},

]