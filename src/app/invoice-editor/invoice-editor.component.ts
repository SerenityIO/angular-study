import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../shared/invoice.service';
import { Invoice } from '../shared/invoice.model';

@Component({
  selector: 'app-invoice-editor',
  templateUrl: './invoice-editor.component.html',
  styleUrls: ['./invoice-editor.component.css']
})
export class InvoiceEditorComponent implements OnInit {
  invoice: Invoice;

  constructor(private service: InvoiceService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id: number = +this.currentRoute.snapshot.paramMap.get('id');
    if (id) {
      this.invoice = this.service.getById(id);
    } else {
      this.invoice = new Invoice();
    }
  }

  onCancel() {
    this.goToList();
  }

  onSave() {
    if (this.invoice.id) {
      this.service.update(this.invoice);
    } else {
      this.service.create(this.invoice);
    }
    this.goToList();
  }

  goToList() {
    this.router.navigate(['invoices']);
  }
}
