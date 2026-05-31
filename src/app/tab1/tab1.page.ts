import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  private url = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient, private alertController: AlertController) {}

  async exibirAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }

  gerarSenha(tipo: string) {
    this.http.post(`${this.url}/emitir`, { tipo }).subscribe({
      next: (res: any) => {
        this.exibirAlerta('Senha Gerada!', `Sua senha: <b>${res.codigo}</b>. Aguarde ser chamado.`);
      },
      error: () => {
        this.exibirAlerta('Erro', 'Não foi possível conectar ao servidor.');
      }
    });
  }
}
