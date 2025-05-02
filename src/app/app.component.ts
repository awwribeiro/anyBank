import { Component } from '@angular/core';
import { BannerComponent } from "./componentes/banner/banner.component";
import { NovaTransacaoComponent } from "./componentes/nova-transacao/nova-transacao.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, NovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
}
