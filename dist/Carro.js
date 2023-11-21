"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
// Criando subclasse de Veiculo
class Carro extends Veiculo_1.Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }
    clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
    represent() {
        return `Carro: ${this.modelo}, ${this.marca}, ${this.cor}, ${this.numeroRodas}, ${this.numeroPortas}`;
    }
}
exports.Carro = Carro;
