import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number = 0;
  situacao: string = '';
  calcularMedia() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) +
      (this.ag * 0.10) + (this.af * 0.45);
    this.situacao = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
