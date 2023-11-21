// implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;

export abstract class Veiculo {
    // o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;
    constructor(
        public modelo: string,
        public marca: string,
        public cor: string,
        public numeroRodas: number
    ) {}

    public abstract clone(): Veiculo;

    public abstract represent(): string;
}