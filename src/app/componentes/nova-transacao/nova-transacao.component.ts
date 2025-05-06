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
  valorTransacao = ""; // Armazena temporariamente o valor digitado pelo usuário
  tipoTransacao = ""; // Armazena temporariamente o tipo de transação selecionado

  TipoTransacaoEnum = TipoTransacao; // Referência ao enum para ser usado no template

  transacaoCriada = output<Transacao>(); // Output que emite o evento com uma nova transação

  aoSubmeter() { // Método executado ao submeter o formulário
      const transacao = new Transacao( // Cria uma nova transação com os dados fornecidos
          this.tipoTransacao as TipoTransacao, // Converte o tipo de string para TipoTransacao
          Number(this.valorTransacao) // Converte a string de valor para número
      );

      this.transacaoCriada.emit(transacao); // Emite o evento com a nova transação criada

      this.tipoTransacao = ""; // Limpa o campo tipoTransacao
      this.valorTransacao = ""; // Limpa o campo valorTransacao
  }
}

