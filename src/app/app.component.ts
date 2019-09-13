import { Component, OnInit } from '@angular/core';
import { DataserverService } from './dataserver.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Crud Simples';

  listaUsuarios = [];

  constructor(private dataServer: DataserverService) {}

  ngOnInit() {
    this.dataServer.getData().subscribe(lista => {
      this.listaUsuarios = lista;
    });
  }

}
