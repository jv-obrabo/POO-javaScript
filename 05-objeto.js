class Pessoa {
    constructor(nome, idade,altura,peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
     // Metodo
       falar() {
        console.log(`ola,meu nome e ${this.nome}!`);
}
}
//objeto/Instancia "pessoa" criada apartir da classe Pessoa
const pessoa1 = new Pessoa (`wanderson`,40,1.65,70.0);
pessoa1.falar(); // chamada do metodo falar () da classe Pessoa