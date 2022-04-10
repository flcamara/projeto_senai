import { Hotel } from './Hotel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  //Vetor de boletim

  private vetorHotel: Hotel[] = [
    new Hotel("El Divino", "Rua Glória Maria, 98", 9),
    new Hotel("Bahamas", "Avenida Brasil, 987", 7),
    new Hotel("Boulevard", "Avenida Marechal, 1187", 8),
  ];

  //Cadastro de Hotel
  public cadastrar(hotel:Hotel){
    this.vetorHotel.push(hotel)
  }

  //Selecão de Hotel
  public listar(){
    return this.vetorHotel
  }

  //Alteração de Hotel
  public alterar(id: number, hotel:Hotel){
    this.vetorHotel[id] = hotel
  }

  //Exclusão de Hotel
  public excluir(id: number){
    this.vetorHotel.splice(id, 1)
  }
}
