import { PacoteService } from './pacote.service';
import { Component, OnInit } from '@angular/core';
import { Pacote } from './Pacote'


@Component({
  selector: 'app-pacote',
  templateUrl: './pacote.component.html',
  styleUrls: ['./pacote.component.css']
})
export class PacoteComponent implements OnInit {

  exibirStatus: boolean = false

  //Atributos
  public vetorPacote: any | Pacote[];
  public pacote: any | Pacote;
  public id: any | number;
  public mensagem = ""

  constructor(private servico:PacoteService) { }

  ngOnInit(): void {
    this.id = -1;
    this.pacote = new Pacote("",0,"",0);
    this.vetorPacote = this.servico.listar();
  }

  cadastrar(){
    this.servico.cadastrar(this.pacote)
    this.pacote = new Pacote("",0,"",0)
  }

  excluir(id: number){
    this.servico.excluir(id)
    this.id = -1
  }

  editar(id: number){
    this.id = id;

    this.pacote = new Pacote(
      this.vetorPacote[id].nomePacote,
      this.vetorPacote[id].diasPacote,
      this.vetorPacote[id].hotelPacote,
      this.vetorPacote[id].valorPacote,
    );
  }

  atualizar(){
    this.servico.alterar(this.id, this.pacote);
    this.pacote = new Pacote("",0,"",0)
    this.id = -1
  }
}

