import { Veiculo } from "./Veiculo";

// Criando subclasse de Veiculo
export class Carro extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        private numeroPortas: number
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    public clone(): Carro {
        return new Carro(
            this.modelo,
            this.marca,
            this.cor,
            this.numeroRodas,
            this.numeroPortas
        );
    }

    public represent(): string {
        return `Carro: ${this.modelo}, ${this.marca}, ${this.cor}, ${this.numeroRodas}, ${this.numeroPortas}`;
    }
}