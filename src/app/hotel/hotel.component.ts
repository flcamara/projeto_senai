import { Component, OnInit } from '@angular/core';
import { Hotel } from './Hotel'
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  exibirStatus: boolean = false

  //Atributos
  public vetorHotel: any | Hotel[];
  public hotel: any | Hotel;
  public id: any | number;
  public mensagem = ""

  constructor(private servico:HotelService) { }

  ngOnInit(): void {
    this.id = -1;
    this.hotel = new Hotel("","",0);
    this.vetorHotel = this.servico.listar();
  }

  cadastrar(){
    this.servico.cadastrar(this.hotel)
    this.hotel = new Hotel("","",0)
  }

  excluir(id: number){
    this.servico.excluir(id)
    this.id = -1
  }

  editar(id: number){
    this.id = id;

    this.hotel = new Hotel(
      this.vetorHotel[id].nomeHotel,
      this.vetorHotel[id].endAluno,
      this.vetorHotel[id].notaHotel,
    );
  }

  atualizar(){
    this.servico.alterar(this.id, this.hotel);
    this.hotel = new Hotel("","",0)
    this.id = -1
  }

}

