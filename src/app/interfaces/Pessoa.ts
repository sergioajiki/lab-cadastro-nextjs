export interface Pessoa {
    id?: number;
    nome: string;
    idade: number;
    email: string;
    data_nascimento: string;
    endereco: {
        id: number | null; // id pode ser número ou null
    }
}