import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InvoiceService } from '../shared/invoice.service';
import { Invoice } from '../shared/invoice.model';
import { Timeouts } from 'selenium-webdriver';

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
  debounce = null;

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.invoices = this.service.getAll();
    this.filterInvoices = this.invoices;
    this.search = '';
  }
  handleFilter() {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.search = this.search.toLowerCase();
      this.filterInvoices =  this.invoices.filter(i => {
        if (~i.description.toLowerCase().indexOf(this.search) || ~i.name.toLowerCase().indexOf(this.search)) {
          return true;
        }
        return false;
      });
    }, 300);
  }

  onCreate() {
    this.router.navigate(['invoices', 'create']);
  }

  clearSearch() {
    this.refresh();
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
