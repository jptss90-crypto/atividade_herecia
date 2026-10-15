abstract class Personagem {
    private String nome;
    private int vida;
    private int poderAtaque;

    public Personagem(String nome, int vida, int poderAtaque) {
        this.nome = nome;
        this.vida = vida;
        this.poderAtaque = poderAtaque;
    }

    public void atacar(Personagem alvo) {
        System.out.println(nome + " atacou " + alvo.nome);
        alvo.receberDano(poderAtaque);
    }

    public void receberDano(int dano) {
        vida -= dano;

        if (vida < 0) {
            vida = 0;
        }

        System.out.println(nome + " recebeu " + dano
                + " de dano. Vida: " + vida);
    }

    public int getPoderAtaque() {
        return poderAtaque;
    }

    public void setPoderAtaque(int poderAtaque) {
        this.poderAtaque = poderAtaque;
    }
}

class Guerreiro extends Personagem {
    private int escudo;

    public Guerreiro(String nome, int vida, int poderAtaque, int escudo) {
        super(nome, vida, poderAtaque);
        this.escudo = escudo;
    }

    @Override
    public void receberDano(int dano) {
        int danoFinal = dano - escudo;

        if (danoFinal < 0) {
            danoFinal = 0;
        }

        super.receberDano(danoFinal);
    }

    public void usarSuperForca() {
        setPoderAtaque(getPoderAtaque() * 2);
        System.out.println("Superforça ativada! Poder de ataque dobrado.");
    }
}

public class Main {
    public static void main(String[] args) {
        Guerreiro guerreiro = new Guerreiro("Thor", 100, 20, 5);
        Guerreiro inimigo = new Guerreiro("Loki", 80, 15, 3);

        guerreiro.usarSuperForca();
        guerreiro.atacar(inimigo);
        inimigo.atacar(guerreiro);
    }
}