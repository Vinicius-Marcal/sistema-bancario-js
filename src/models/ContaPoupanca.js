import Conta from "./Conta.js"

export default class ContaPoupanca extends Conta{
    constructor(nomeCliente, saldo) {
        super(nomeCliente, saldo)
    }

    sacar(valor) {
        if (this.saldo - valor < 1) {
            throw new Error("Valor inválido, deve sacar um valor menor da sua poupança")
        }

        super.sacar(valor)
    }
}