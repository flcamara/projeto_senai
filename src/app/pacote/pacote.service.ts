import { Pacote } from './Pacote';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PacoteService {

  constructor() { }

  //Vetor de boletim

  private vetorPacote: Pacote[] = [
    new Pacote("Manaus", 4, "Boulevard", 500),
    new Pacote("Fortaleza", 3, "Bahamas", 800),
    new Pacote("Vitória", 4, "El Divino", 300),
  ];

  //Cadastro de Pacote
  public cadastrar(pacote:Pacote){
    this.vetorPacote.push(pacote)
  }

  //Selecão de Pacote
  public listar(){
    return this.vetorPacote
  }

  //Alteração de Pacote
  public alterar(id: number, pacote:Pacote){
    this.vetorPacote[id] = pacote
  }

  //Exclusão de Pacote
  public excluir(id: number){
    this.vetorPacote.splice(id, 1)
  }
}
