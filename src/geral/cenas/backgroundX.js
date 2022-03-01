module.exports = [
    // Estrada
    {reg: 'E1', nome: 'Inicio da Estrada', img: './src/imagens/background/inicioEstrada.jpg', chance: 45, 
     npc: [ 103, 102, 103, 102, 103, 102, 103, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 104, 101, 101, ],
     derrota: 'E2' },
    {reg: 'E2', nome: 'Meio da Estrada', img: './src/imagens/background/meioEstrada.jpg', chance: 45, 
     npc: [ 101, 101, 102, 102, 102, 103, 103, 103, 103, 103, 103, 103, 102, 103, 104, 105, 106, 106, 105, 104 ],
     derrota: 'E3' },

    {reg: 'E3', nome: 'Final da Estrada', img: './src/imagens/background/finalEstrada.jpg' , chance: 45, 
     npc: [ 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 101, 103, 103, 101, 102, 103, 101, 103, 102 ],
     derrota: 'E1' },


    // Cidade
    {reg: 'C1', nome: 'Entrada da Cidade', img: './src/imagens/background/entradaCidade.jpg', chance: 20, 
     npc: [ 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108 ],
     derrota: 'E1' },

    {reg: 'C2', nome: 'Praça Geral', img: './src/imagens/background/dentroCidade.jpg', chance: 90, 
     npc: [ 101, 102, 103, 101, 102, 103, 101, 102, 103, 101, 102, 103, 101, 102, 103, 101, 102, 103, 104, 105 ],
     derrota: 'E1' },

    {reg: 'C3', nome: 'Entrada do Cassino', img: './src/imagens/background/entradaCassino.jpg', chance: 30, 
     npc: [ 105, 105, 105, 105, 105, 106, 106, 106, 106, 106, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1' },

    {reg: 'C4', nome: 'Cassino', img: './src/imagens/background/dentroCassino.jpg', chance: 00, 
     npc: [ 3, 3, 3, 3, 3, 7, 7, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1' },

    {reg: 'C5', nome: 'Bar do Svelter', img: './src/imagens/background/barDoSvelter.jpg', chance: 00, 
     npc: [ 3, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11 ],
     derrota: 'E1' },

    {reg: 'C6', nome: 'Puteiro', img: './src/imagens/background/tibulo.jpg', chance: 90, 
     npc: [ 106, 106, 106, 106, 103, 109, 109, 109, 103, 102, 102, 103, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1' },

    {reg: 'C7', nome: 'Biblioteca', img: './src/imagens/background/biblioteca.jpg', chance: 00, 
     npc: [ 3, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E1' },

    {reg: 'C8', nome: 'Prisão', img: './src/imagens/background/prisao.jpg', chance: 95, 
     npc: [ 111, 111, 111, 111, 107, 102, 107, 102, 106, 106, 106, 106, 102, 102, 102, 102, 111, 111, 111, 111 ],
     derrota: 'E1' },


    // Floresta
    {reg: 'F1', nome: 'Floresta', img: './src/imagens/background/floresta1.jpg', chance: 70, 
     npc: [ 103, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 104, 00, 00, 00, 00 ],
     derrota: 'E2' },

    {reg: 'F2', nome: 'Floresta', img: './src/imagens/background/floresta2.jpg', chance: 80, 
     npc: [ 103, 104, 104, 104, 104, 104, 103, 103, 103, 104, 104, 104, 104, 104, 104, 107, 107, 00, 00, 00 ],
     derrota: 'E2' },

    {reg: 'F3', nome: 'Floresta', img: './src/imagens/background/floresta3.jpg', chance: 80, 
     npc: [ 104, 104, 104, 104, 108, 108, 108, 104, 108, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00 ],
     derrota: 'E2' },

    {reg: 'F4', nome: 'Floresta', img: './src/imagens/background/floresta4.jpg', chance: 100, 
     npc: [ 108, 108, 108, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110 ],
     derrota: 'E2' },

    {reg: 'F5', nome: 'Cemitério', img: './src/imagens/background/cemiterio.jpg', chance: 80, 
     npc: [ 101, 101, 101, 101, 101, 101, 101, 106, 106 , 106, 106, 106, 106, 106, 106, 106, 101, 106, 00, 00 ],
     derrota: 'E2' },


    // Caverna
    {reg: 'CV1', nome: 'Entrada da Caverna', img: './src/imagens/background/entradaCaverna.jpg', chance: 75, 
     npc: [ 103, 107, 107, 107, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 105, 00, 00, 00, 00, 00 ],
     derrota: 'E2' },

    {reg: 'CV2', nome: 'Caverna', img: './src/imagens/background/dentroCaverna.jpg', chance: 85, 
     npc: [ 105, 105, 106, 106, 106, 106, 106, 105, 105, 107, 107, 107, 105, 105, 105, 106, 107, 107, 109, 109 ],
     derrota: 'E2' },


    // Montanha
    {reg: 'MT1', nome: 'Entrada da Montanha', img: './src/imagens/background/entradaMontanha.jpg', chance: 60, 
     npc: [ 107, 107, 107, 106, 109, 109, 108, 108, 108, 108, 107, 106, 107, 101, 101, 103, 103, 00, 00, 00 ],
     derrota: 'E3' },

    {reg: 'MT2', nome: 'Montanha', img: './src/imagens/background/dentroMontanha.jpg', chance: 90, 
     npc: [ 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 105, 105, 105, 105, 105, 105, 00, 00, 00 ],
     derrota: 'E3' },

    {reg: 'MT3', nome: 'Topo da Montanha', img: './src/imagens/background/topoMontanha.jpg', chance: 100, 
     npc: [ 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 00 ],
     derrota: 'E3' },


    // Castelo
    {reg: 'CA1', nome: 'Portão do Castelo', img: './src/imagens/background/portaoCastelo.jpg', chance: 65, 
     npc: [ 101, 101, 101, 101, 101, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113, 113 ],
     derrota: 'E3' },

    {reg: 'CA2', nome: 'Master Room', img: './src/imagens/background/salaDoTrono.jpg', chance: 100, 
     npc: [ 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114 ],
     derrota: 'E3' },

]