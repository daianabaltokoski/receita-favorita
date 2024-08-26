export class Receita {
    constructor(titulo, serve, ingredientes, modoDeFazer) {
        this._titulo = titulo;
        this.quantosServe = serve;
        this.ingredientes = ingredientes;
        this.modoDeFazer = modoDeFazer
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    imprime() {
        console.log(this.titulo);
        console.log(`Serve: ${this.quantosServe} pessoa(s)`);
        console.log('Ingredientes:');
        for (let e of this.ingredientes) {
            console.log(e);
        }
        console.log('Modo de fazer:');
        for (let f of this.modoDeFazer) {
            console.log(f);
        }
    }
}
