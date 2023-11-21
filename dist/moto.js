"use strict";
/**
 * crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos,
 por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Veiculo_1 = require("./Veiculo");
// Criando subclasse de Veiculo
class Moto extends Veiculo_1.Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
        super(modelo, marca, cor, numeroRodas);
        this.cilindradas = cilindradas;
    }
    clone() {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
    represent() {
        return `Moto: ${this.modelo}, ${this.marca}, ${this.cor}, ${this.numeroRodas}, ${this.cilindradas}`;
    }
}
exports.Moto = Moto;
