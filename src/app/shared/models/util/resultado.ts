
export class Resultado<T> {

  itens: Array<T>;
  total: number;

  of(itens: Array<T>, total: number): Resultado<T> {
    this.itens = itens;
    this.total = total;
    return this;
  }

}
