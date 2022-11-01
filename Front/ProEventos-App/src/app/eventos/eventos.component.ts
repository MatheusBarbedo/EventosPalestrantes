import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  larguraImagem: number = 50;
  margemImagem: number = 2;
  exibirImagem: boolean = true;
  filtroLista: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.recuperarEventos();
  }

  mostrarImagem()
  {
    this.exibirImagem = !this.exibirImagem;
  }

  public recuperarEventos(): void {
    this.http.get('https://localhost:5001/api/evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }
}
