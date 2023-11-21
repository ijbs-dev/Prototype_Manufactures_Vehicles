"use strict";
// implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    // o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }
}
exports.Veiculo = Veiculo;
