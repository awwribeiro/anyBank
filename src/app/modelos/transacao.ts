import { nanoid } from "nanoid";

export class Transacao {

  //função `nanoid` gera um ID único automaticamente
  readonly id = nanoid();
  readonly data = new Date();

  // Construtor da classe, recebe o tipo (DEPOSITO ou SAQUE) e o valor numérico da transação
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}

//enum permite definir um conjunto de valores nomeados constantes.
// É usado para representar um grupo fixo de opções de forma mais legível e segura
export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
