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