"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplicacao = void 0;
const Carro_1 = require("./Carro");
const Moto_1 = require("./Moto");
class Aplicacao {
    constructor() {
        this.veiculos = [];
    }
    main() {
        this.veiculos.push(new Carro_1.Carro("Gol", "Volkswagen", "Preto", 4, 4), new Carro_1.Carro("Uno", "Fiat", "Vermelho", 4, 2), new Carro_1.Carro("Celta", "Chevrolet", "Branco", 4, 4), new Moto_1.Moto("CG 150", "Honda", "Azul", 2, 150), new Moto_1.Moto("Bros 150", "Honda", "Vermelha", 2, 150), new Moto_1.Moto("XRE 300", "Honda", "Preta", 2, 300));
        const veiculosClone = this.clonarVeiculos(this.veiculos);
        veiculosClone.forEach(veiculo => {
            console.log(veiculo.represent());
        });
    }
    clonarVeiculos(veiculos) {
        return veiculos.map(veiculo => veiculo.clone());
    }
}
exports.Aplicacao = Aplicacao;
