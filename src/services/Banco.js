import Conta from "../models/Conta.js"

export default class Banco {
    #contas

    constructor() {
        this.#contas = []
    }

    adicionarConta(conta) {
        if (!(conta instanceof Conta)) {
            throw new Error("Somente objetos do tipo Conta podem ser adicionados")
        }

        const contaExiste = this.#contas.some(
            c => c.nomeCliente === conta.nomeCliente
        )

        if (contaExiste) {
            throw new Error("Já existe uma conta com esse nome")
        }

        this.#contas.push(conta)
    }

    listarContas() {
        return this.#contas.map(conta => ({
            nome: conta.nomeCliente,
            saldo: conta.saldo
        }))
    }

    buscarContaPorNome(nome) {
        const conta = this.#contas.find(
            conta => conta.nomeCliente === nome
        )

        if (!conta) {
            throw new Error("Conta não encontrada")
        }

        return conta
    }

    visualizarSaldoTotal() {
        return this.#contas.reduce((total, conta) => {
            return total + conta.saldo
        }, 0)
    }
}