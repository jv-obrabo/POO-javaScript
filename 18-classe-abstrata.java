abstract class Personagem {
    protected String nome;

    public Personagem(String nome) {
        this.nome = nome;
    }

  public abstract void atacar ();
  public abstract void defender ();
  }

  class Guerreiro extends Personagem {
    private String arma ;

    public Guerreiro(String nome, String arma) {
        super(nome);
        this.arma = arma;
    }
    
    @Override
    public void atacar() {
        System.out.println(this.nome + " ataca com a " + this.arma+"!");
    }

    @Override
    public void defender() {
        System.out.println(this.nome + " levanta o escudo para se defender!");
    }
  }

  class Mago extends Personagem {
    private String magia;
    
    public Mago(String nome, String magia) {
        super(nome);
        this.magia = magia;
    }
    
    @Override
    public void atacar() {
        System.out.println(this.nome + " lança a magia" + magia + "!");
    }
    
    @Override
    public void defender() {
        System.out.println(this.nome + " usa um escudo magico para se defender!");
    }
  }
  
  public class Main {
    public static void main(String[] args) {
        
        Personagem guerreiro = new Guerreiro("Thorin", "espada");
        guerreiro.atacar();
        guerreiro.defender();
        
        Personagem mago = new Mago("Loki", "Bola de fogo");
        mago.atacar();
        mago.defender();
    }
  } 
