const { Client } = require('discord.js')

const { readdirSync } = require('fs')
const { join } = require('path')

const { connect } = require('mongoose')

module.exports = class extends Client {
    constructor (options) {
        super(options)
        this.comandos = []
        this.loadComands()
        this.loadEvents()
    }

    registroComandos() {
        this.guilds.cache.get('922185174517678111').commands.set(this.comandos)
    }
    
    loadComands(path = 'src/comandos'){
        const categorias = readdirSync(path)

        for (const category of categorias){
            const comandos = readdirSync(`${path}/${category}`)

            for (const comando of comandos){
                const comandoClass = require(join(process.cwd(), `${path}/${category}/${comando}`))
                const cmd = new (comandoClass)(this)

                this.comandos.push(cmd)

                console.log(`Comando ${cmd.name} carregado. :)`)
            }
        }
    }
    
    loadEvents(path = 'src/eventos'){
        const categorias = readdirSync(path)

        for (const category of categorias){
            const eventos = readdirSync(`${path}/${category}`)

            for (const evento of eventos){
                const eventoClass = require(join(process.cwd(), `${path}/${category}/${evento}`))
                const evt = new (eventoClass)(this)

                this.on(evt.name, evt.run)
                console.log(`Evento ${evt.name} carregado. :)`)
            }
        }
    }

    async connectToDatabase(){
        const connection = await connect(process.env.DATABASE_URL);

        console.log('Database conectada. (⌐■_■) ')

        this.db = { connection }
    }
}