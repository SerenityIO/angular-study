import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InvoiceService } from '../shared/invoice.service';
import { Invoice } from '../shared/invoice.model';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  invoices: Invoice[];
  filterInvoices: Invoice[];
  search: string;

  constructor(private service: InvoiceService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.invoices = this.service.getAll();
    this.filterInvoices = this.invoices;
    this.search = '';
  }
  handleFilter() {
    this.filterInvoices =  this.invoices.filter(i => {
      if (~i.description.indexOf(this.search)) {
        return true;
      }
      if (~i.name.indexOf(this.search)) {
        return true;
      }
      return false;
    });
  }

  onCreate() {
    this.router.navigate(['invoices', 'create']);
  }
  onDublicate(invoice: Invoice) {
    this.service.dublicate(invoice.id);
    this.refresh();
  }

  onEdit(invoice: Invoice) {
    this.router.navigate(['invoices', 'edit', invoice.id]);
  }

  onDelete(invoice: Invoice) {
    this.service.delete(invoice.id);
    this.refresh();
  }

}
