
class ComponenteEletrico {
    String nome;

    public ComponenteEletrico(String nome) {
        this.nome = nome;
    }

    public double potencia() {
        return 0.0;
    }
}

class Resistor extends ComponenteEletrico {
    double resistencia;
    double corrente;

    public Resistor(double resistencia, double corrente) {
        super("Resistor");
        this.resistencia = resistencia;
        this.corrente = corrente;
    }

    @Override
    public double potencia() {
        return corrente * corrente * resistencia;
    }
}

class Capacitor extends ComponenteEletrico {
    double capacitancia;
    double tensao;

    public Capacitor(double capacitancia, double tensao) {
        super("Capacitor");
        this.capacitancia = capacitancia;
        this.tensao = tensao;
    }

    @Override
    public double potencia() {
        System.out.println("Capacitores ideais não dissipam potência.");
        return 0.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Resistor resistor = new Resistor(10, 2);
        Capacitor capacitor = new Capacitor(100, 5);

        System.out.println("Componente: " + resistor.nome);
        System.out.println("Potência do resistor: "
                + resistor.potencia() + " W");

        System.out.println();

        System.out.println("Componente: " + capacitor.nome);
        System.out.println("Potência do capacitor: "
                + capacitor.potencia() + " W");
    }
}