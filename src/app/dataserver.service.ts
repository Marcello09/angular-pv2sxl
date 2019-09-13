import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class DataserverService {

  data = [
      {nome: "Joao", idade: 36, id: "1ptzkh"},
      {nome: "Maria", idade: 25, id: "2mkdneh"}
  ];

  constructor() {}

  /**
   * Coleta lista de usuarios do servidor
   */
  getData(): Observable<any> {
    let dados = of(this.data);
    return dados;
  }

  /**
   * Adiciona usuario no servidor
   */
  addUser(nome: string, idade: number, id: string = 'temp123'): Observable<any> {
    if (Math.random() < 0.1) {
      return of({success: false});
    }
    let user = {
      nome: nome,
      idade: idade,
      id: id
    };
    this.data.push(user);
    return of({success: true});
  }

  /**
   * Requisita ao servidor para gerar um id único do usuario
   */
  getID(nome: string, idade: number): Observable<any> {
    let str = nome + idade.toString();
    let id = btoa(str).slice(1,9);
    return of(id);
  }

}