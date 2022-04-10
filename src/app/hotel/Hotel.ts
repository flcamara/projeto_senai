//Classe

export class Hotel{

  //Atributos
  public nomeHotel: string;
  public endHotel: string;
  public notaHotel: number;


  //Construtor
  constructor(nome: string, endereco: string, nota: number){
      this.nomeHotel = nome;
      this.endHotel = endereco;
      this.notaHotel = nota;

  }

}
