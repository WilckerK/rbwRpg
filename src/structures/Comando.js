class Comando {
    constructor(client, options){
        this.client = client
        this.name = options.nome
        this.description = options.desc
        this.options = options.options
    }
}

module.exports = Comando