import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-cliente',
  standalone: false,
  templateUrl: './listar-cliente.html',
  styleUrl: './listar-cliente.css'
})
export class ListarCliente {
  private modalService = inject(NgbModal);

  open(content: TemplateRef<any>) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
        },
        (reason) => {
        },
      );
  }
}
