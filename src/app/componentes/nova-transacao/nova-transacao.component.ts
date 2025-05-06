import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './nova-transacao.component.html',
  styleUrl: './nova-transacao.component.css'
})
export class NovaTransacaoComponent {
  valorTransacao = "";
  tipoTransacao = ""

  TipoTransacaoEnum = TipoTransacao;

  transacaoCriada = output<Transacao>();

  aoSubmeter() {

      const transacao = new Transacao(
          this.tipoTransacao as TipoTransacao,
          Number(this.valorTransacao)
      );

      this.transacaoCriada.emit(transacao);

      this.tipoTransacao = "";
      this.valorTransacao = "";
  }
}
