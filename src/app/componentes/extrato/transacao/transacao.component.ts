import { Component, computed, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../../../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {

  // Declara uma propriedade reativa obrigatória do tipo Transacao.
  // Espera receber esse dado como input do componente pai.
  transacao = input.required<Transacao>();


  // Computed Signal: valor é calculado automaticamente com base na transação recebida.
  valor = computed(() => {
    // Se o tipo da transação for SAQUE, retorna o valor negativo
    if(this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }

    // Caso contrário, retorna o valor normalmente
    return this.transacao().valor;
  });
}
