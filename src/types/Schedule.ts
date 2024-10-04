interface doctor {
  nome: string;

}
interface client {
  nome: string;
  dataNascimento: string
}

export interface Schedule {
    id: number;
    medico: doctor;
    paciente: client;
    dataCriacao: string;
  }
  
  export interface Filters {
    medico?: string;
    paciente?: string;
    dataCriacao?: string;
  }