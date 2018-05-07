export class Ocorrencia {
    constructor(public data_ocorrencia: Date,
                public tipo: String,
                public local_ocorrencia: String,
                public crianca_associada: String,
                public turno: String,
                public descricao: String,
                public responsavel: String) {}
}