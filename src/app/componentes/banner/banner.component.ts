import { Component, input } from '@angular/core';
import { BoasVindasComponent } from "./boas-vindas/boas-vindas.component";
import { ContaComponent } from "./conta/conta.component";

@Component({
  selector: 'app-banner',
  imports: [BoasVindasComponent, ContaComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  saldo = input.required<number>(); //declara uma propriedade de entrada obrigatória
  //saldo deve ser fornecido por um componente pai ao usar <app-banner>

}
