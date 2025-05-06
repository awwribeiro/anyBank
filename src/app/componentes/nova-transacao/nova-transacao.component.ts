import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-transacao',
  imports: [FormsModule],
  templateUrl: './nova-transacao.component.html',
  styleUrl: './nova-transacao.component.css'
})
export class NovaTransacaoComponent {
  valorTransacao = "";
  tipoTransacao = ""

  aoSubmeter() {
      console.log(this.valorTransacao)
      console.log(this.tipoTransacao)
      this.tipoTransacao = "";
      this.valorTransacao = "";
  }
}
