import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./componentes/banner/banner.component";
import { NovaTransacaoComponent } from "./componentes/nova-transacao/nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from './componentes/extrato/extrato.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

//signal inicializa propriedades de componentes que serão alteradas com o tempo.
// a lista transacoes inicializa vazia, mas será alterada conforme o uso da aplicação.
  transacoes = signal<Transacao[]>([]);

  processarTransacao(transacao: Transacao) {  // Método para processar uma nova transação recebida
    if(transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente sua pobre!!')
    }
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
//update() permite criar um novo valor a partir do atual
//função callback (() => {}) recebe a lista atual, nomeada como parâmetro (listaAtual), e retorna o novo valor da lista.
//spread operator (...), insere todos os elementos de listaAtual logo após a nova transação (transacao)
  }

  saldo = computed(() => { // Signal computado que recalcula automaticamente quando a lista de transações muda
    return this.transacoes().reduce((acc, transacaoAtual) => { // Reduz a lista para um único valor, o saldo
      switch (transacaoAtual.tipo) { // Verifica o tipo de cada transação
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor; // Soma valores de depósitos
        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor; // Subtrai valores de saques
        default:
          throw new Error('Tipo de transação não identificado'); // Erro para tipos não previstos
      }
    }, 0); // Valor inicial do saldo é 0
  });
}
