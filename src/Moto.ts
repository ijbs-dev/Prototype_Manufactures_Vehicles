/**
 * crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, 
 por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;

 */

 import { Veiculo } from "./Veiculo";

// Criando subclasse de Veiculo
export class Moto extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        private cilindradas: number
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    public clone(): Moto {
        return new Moto(
            this.modelo,
            this.marca,
            this.cor,
            this.numeroRodas,
            this.cilindradas
        );
    }

    public represent(): string {
        return `Moto: ${this.modelo}, ${this.marca}, ${this.cor}, ${this.numeroRodas}, ${this.cilindradas}`;
    }
}