import Conta from "./Conta.js";

export default class ContaCorrente extends Conta {
    constructor(nomeCliente, saldo) {
        super(nomeCliente, saldo)
    }

    sacar(valor) {
        let taxa = valor * 0.02
        let valorDebitado = valor + taxa
        super.sacar(valorDebitado)
    }
}