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

  //inicializar propriedades de componentes que serão alteradas com o tempo.
  // a lista transacoes inicializa vazia, mas será alterada conforme o uso da aplicação.
  transacoes = signal<Transacao[]>([]);

  processarTransacao(transacao: Transacao) {
    if(transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente sua pobre!!')
    }
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
    //update() permite criar um novo valor a partir do atual
    //função callback (() => {}) recebe a lista atual, nomeada como parâmetro (listaAtual), e retorna o novo valor da lista.
    //spread operator (...), insere todos os elementos de listaAtual logo após a nova transação (transacao)
  }

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;
        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor;

          default:
            throw new Error('Tipo de transação não identificado');
      }
    }, 0);
  });
  //computed: calcula valores com base em signals e reage automaticamente quando os sinais utilizados mudam.
  //reduce: reduz um array a um único valor, soma todos os valores das transações

}
