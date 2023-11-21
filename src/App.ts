/**
 * 1) Desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes 
 *    (subclasses), utilizando o método clone dos objetos para preencher o array;
 * 2) Na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos,
 *    onde cada elemento deve ser um clone dos elementos do array veículos; 
 * 3) no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de 
 *    clones de veículos.
 */
import { Veiculo } from "./Veiculo";
import { Carro } from "./Carro";
import { Moto } from "./Moto";

export class Aplicacao {
    private veiculos: Veiculo[] = [];

    public main(): void {
        this.veiculos.push(
            new Carro("Gol", "Volkswagen", "Preto", 4, 4),
            new Carro("Uno", "Fiat", "Vermelho", 4, 2),
            new Carro("Celta", "Chevrolet", "Branco", 4, 4),
            new Moto("CG 150", "Honda", "Azul", 2, 150),
            new Moto("Bros 150", "Honda", "Vermelha", 2, 150),
            new Moto("XRE 300", "Honda", "Preta", 2, 300)
        );

        const veiculosClone = this.clonarVeiculos(this.veiculos);

        veiculosClone.forEach(veiculo => {
            console.log(veiculo.represent());
        });
    }

    private clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
        return veiculos.map(veiculo => veiculo.clone());
    }
}
