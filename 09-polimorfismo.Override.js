//classe base Personagem
class Personagem {
     constructor(nome,vida) {
         this.nome = nome;
         this.vida = vida;
     }
     atacar(){
        console.log(`${this.nome}realiza um ataque basico ` );
     }
     receberDano(dano){
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano.Vida restante ${this.vida} `);
     
}
}

class Guerreiro extends Personagem{
    constructor(nome, vida, arma){
        super(nome, vida);
        this.arma= arma;
    }
 AbstractRange(){
    console.log(`${this.nome} atacar ${this.arma}`);
}

}

class Mago extends Personag{
    constructor(nome, vida, fetiço){
        super(nome, vida);
        this.fetiço= fetico;
    }atacar(){
      console.log(`${this.nome} atacar ${this.feitico}!`);
}
      }
      class Arqueiro extends Personagem{
    constructor(nome, vida, tipoflash){
        super(nome, vida);
        this.tipoflash= tipoflash;
    }atacar(){
        console.log(`${this.nome} dispara flechas ${this.tipoflash}`);
} 
}

const guerreiro = new Guerreiro("Arthur",100,"espada");
guerreiro.atacar();
guerreiro.atacar(20);

const mago = new Mago("Merlin",80,"bola fogo");
mago.atacar();
mago.receberDano(15)

const arqueiro = new Arqueiro("Legolas",90,"explosivas");
arqueiro.atacar();
arqueiro.receberDano(10)