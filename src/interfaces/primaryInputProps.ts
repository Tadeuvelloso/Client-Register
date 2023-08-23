export interface PrimaryInputType {
    nome: string,
    email: string,
    cpf: number | string,
    nascimento: Date,
    endereco: Endereco
}

interface Endereco {
    estado: string,
    cidade: string,
    rua: string,
    numero: string | number
}