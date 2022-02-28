const { Client } = require('discord.js');

const { readdirSync } = require('fs');
const { join } = require('path');

const { connect } = require('mongoose');
const Models = require('../database/models/Models')

module.exports = class extends Client {
    constructor (options) {
        super(options)
        this.comandos = []
        this.loadComands()
        this.loadEvents()
    }

    registroComandos() {
        this.guilds.cache.get('732276333429784707').commands.set(this.comandos)
    }
    
    loadComands(path = 'src/comandos'){
        const categorias = readdirSync(path)
        let cmds = '';
        for (const category of categorias){
            const comandos = readdirSync(`${path}/${category}`)

            for (const comando of comandos){
                const comandoClass = require(join(process.cwd(), `${path}/${category}/${comando}`))
                const cmd = new (comandoClass)(this)

                this.comandos.push(cmd)

                cmds = `${cmds}${cmd.name}, ` 
            }
        }
        console.log(`Comandos ${cmds} carregados. (+_+)`)
    }
    
    loadEvents(path = 'src/eventos'){
        const categorias = readdirSync(path)
        let evts = '';
        for (const category of categorias){
            const eventos = readdirSync(`${path}/${category}`)

            for (const evento of eventos){
                const eventoClass = require(join(process.cwd(), `${path}/${category}/${evento}`))
                const evt = new (eventoClass)(this)

                this.on(evt.name, evt.run)

                evts = `${evts}${evt.name}, `
            }
        }
        console.log(`Eventos ${evts} carregados. (+_+)`)
    }

    async connectToDatabase(){
        const connection = await connect(process.env.DATABASE_URL);

        console.log('Database conectada. (⌐■_■) ')

        this.db = { connection, ...Models }
    }
}