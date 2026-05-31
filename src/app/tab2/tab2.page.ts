import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  private url = 'http://127.0.0.1:3000';
  senha: string = '';
  tipo: string = '';

  constructor(private http: HttpClient) {}

  chamarProxima() {
    this.http.get(`${this.url}/proxima`).subscribe({
      next: (res: any) => {
        if (res && res.codigo) {
          this.senha = res.codigo;
          this.tipo = res.tipo;
        } else {
          this.senha = '';
          this.tipo = 'Fila vazia no momento.';
        }
      },
      error: () => {
        this.tipo = 'Erro ao conectar ao servidor.';
      }
    });
  }
}
