export default class Cliente {
    #nome
    #cpf
    #senha
    constructor(nome, cpf, senha) {
        this.nome = nome
        this.cpf = cpf
        this.senha = senha
    }

    set nome (novoNome) {
        if (novoNome === '' || novoNome.length < 5) {
            throw new Error ("nome com caracteres insuficientes")
        }
        this.#nome = novoNome
    }

    set cpf (novoCpf) {
        if (novoCpf.length !== 11) {
            throw new Error ("cpf inválido.")
        }

        this.#cpf = novoCpf
    }

    set senha (novaSenha) {
        if (novaSenha.length < 6) {
            throw new Error("Senha inválida, a mesma deve ter no minimo 6 caracteres")
        }

        const temMaiuscula = /[A-Z]/.test(novaSenha);

        if (!temMaiuscula) {
            throw new Error("A senha deve conter pelo menos uma letra maiúscula.");
        }

        const temEspecial = /[!@#$%^&*]/.test(novaSenha);

        if (!temEspecial) {
            throw new Error("A senha deve conter pelo menos um caractere especial (!@#$%^&*).");
        }

        this.#senha = novaSenha;
    }

    get nome () {
        return this.#nome
    }

    get cpf () {
        return this.#cpf
    }

    get senha () {
        return this.#senha
    }

    exibirInfos() {
         return {
            nome: this.nome,
            cpf: this.cpf,
            senha: this.senha
         }
    }

}

