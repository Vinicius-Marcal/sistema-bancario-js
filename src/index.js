import Banco from "./services/Banco.js"
import ContaCorrente from "./models/ContaCorrente.js"
import ContaPoupanca from "./models/ContaPoupanca.js"
import Cliente from "./models/Cliente.js"

try {
    const nubank = new Banco()

    const cliente1 = new Cliente("Vinicius", "12345678901", "Senha!123")
    const cliente2 = new Cliente("Maria", "98765432100", "Segredo#1")

    const contaVini = new ContaCorrente(cliente1, 0)
    const contaMaria = new ContaPoupanca(cliente2, 0)

    contaVini.depositar(1000)
    contaVini.sacar(200) 
    contaMaria.depositar(500)

    nubank.adicionarConta(contaVini)
    nubank.adicionarConta(contaMaria)

    console.log("Total no banco: R$", nubank.visualizarSaldoTotal())

} catch (erro) {
    console.log("Erro no sistema:", erro.message)
}