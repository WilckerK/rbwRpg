const Evento = require('../../structures/Evento');

module.exports = class extends Evento {
    constructor(client) {
        super(client, {
            nome: 'ready'
        })
    }

    run = async () => {
        console.log(`O bot ${this.client.user.username} foi logado. \\(0-0)/`)
        this.client.registroComandos()
        this.client.connectToDatabase()
    }
}