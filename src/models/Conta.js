export default class Conta {
    #nomeCliente
    #saldo
    constructor(nomeCliente, saldo) {
        this.#nomeCliente = nomeCliente
        this.#saldo = saldo
    }

    get nomeCliente () {
        return this.#nomeCliente
    }

    get saldo () {
        return this.#saldo
    }

    depositar(dinheiroDeposito) {
        if (dinheiroDeposito < 0 || dinheiroDeposito === 0) {
            throw new Error ("Valor inválido.")
        }

        this.#saldo += dinheiroDeposito
        
    }

    sacar(dinheiroSacado) {
        if (this.#saldo < dinheiroSacado) {
            throw new Error ("Saldo insuficiente.")
        }
        if (dinheiroSacado < 0 || dinheiroSacado === 0) {
            throw new Error ("Valor inválido.")
        }

        this.#saldo -= dinheiroSacado
    }

}