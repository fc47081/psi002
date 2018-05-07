export class Atividade {
    constructor(public data_atividade: Date,
                public tipo_da_atividade: String,
                public local_atividade: String,
                public crianca_associada: String,
                public responsavel: String) {}
}