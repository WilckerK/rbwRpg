module.exports = [
    {   
        reg: 'Nome',
        pergunta: 'Qual o nome do seu personagem?'
    },
    {   
        customId: 'Emblema',
        pergunta: 'Qual o seu emblema?',
        placeholder: 'Escolha um emblema',
        
        options: [
            {
                label: 'Rei',
                value: 'Rei',
                description: 'Equilibrio',
                emoji: '👑'
            },{
                label: 'Espada',
                value: 'Espada',
                description: 'Violência',
                emoji: '⚔️'
            },{
                label: 'Música',
                value: 'Musica',
                description: 'Harmonia',
                emoji: '🎵'
            },{
                label: 'Engrenagem',
                value: 'Engrenagem',
                description: 'Tecnologia',
                emoji: '⚙️'
            },{
                label: 'Sorriso',
                value: 'Sorriso',
                description: 'Felicidade',
                emoji: '🙂'
            }
        ]
    },
    {   
        reg: 'Natalidade',
        pergunta: 'De onde veio o seu personagem?'
    },
    {   
        customId: 'Sexo',
        pergunta: 'Qual o sexo do seu personagem?',
        placeholder: 'Escolha seu sexo.',
        
        options: [
            {
                label: 'Homem',
                value: 'M',
                description: 'Você se identifica do gênero masculino.',
                emoji: '🚹'
            },{
                label: 'Mulher',
                value: 'F',
                description: 'Você se identifica do gênero feminino.',
                emoji: '🚺'
            },{
                label: 'Prefiro não responder',
                value: 'MF',
                description: 'Você prefere não ter um gênero declarado.',
                emoji: '🚻'
            }
        ]
    },
    {   
        customId: 'Cor',
        pergunta: 'Qual cor dessas você prefere?',
        placeholder: 'Escolha uma cor.',
        
        options: [
            {
                label: 'Vermelho',
                value: '#FF0000',
                description: '',
                emoji: '🟥'
            },{
                label: 'Amarelo',
                value: '#FFFF00',
                description: '',
                emoji: '🟨'
            },{
                label: 'Verde',
                value: '#00FF00',
                description: '',
                emoji: '🟩'
            },{
                label: 'Azul',
                value: '#0000FF',
                description: '',
                emoji: '🟦'
            },{
                label: 'Preto',
                value: '#010101',
                description: '',
                emoji: '⬛'
            }
        ]
    }
]