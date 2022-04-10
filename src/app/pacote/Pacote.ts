//Classe

export class Pacote{

  //Atributos
  public nomePacote: string;
  public diasPacote: number;
  public hotelPacote: string;
  public valorPacote: number;

  //Construtor
  constructor(nome: string, dias: number, hotel: string, valor: number){
      this.nomePacote = nome;
      this.diasPacote = dias;
      this.hotelPacote = hotel;
      this.valorPacote = valor;

  }

}
