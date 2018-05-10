import { Injectable } from '@angular/core';
import { Invoice } from './invoice.model';

@Injectable()
export class InvoiceService {
    constructor() { }
    data = [
        { id: 1, name: 'first', completed: false,  description: 'Aorem Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 2, name: 'first2', completed: true,  description: 'Borem 3 IpsumCreate app with login page and  page where user can add invoice by adding its name in input field and clicking on button. Page must include invoices list with search field to search invoice(search should be debounced). Invoice list should be scrollable(search field should always be on top) and each invoice item in list must haves settings(right aligned icon) with delete and duplicate options.is simply dummy text of the printing and trem Ipsum.' },
        { id: 3, name: 'first3', completed: false,  description: 'Lorem 2 Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 4, name: 'first4', completed: true,  description: 'Lorem Ipsum is simply dummy text of the printing and trem Ipsum.' },
        { id: 5, name: 'first5', completed: true,  description: 'corem Ipsum is simply dummy text of the printing and trem Ipsum.' }
    ];
    id = 5;

    getAll = () => this.data.sort((a, b) => b.id - a.id);

    getById = (id: number) => this.data.find(i => i.id === id );

    create = (invoice: Invoice) => this.data.push({...invoice, id: ++this.id });

    dublicate = (id: number) => {
        const invoice = this.data.find(i => i.id === id);
        this.create({...invoice, completed: false });
    }

    update = (invoice: Invoice) => {
        return this.data.map(i => {
            if (i.id === invoice.id) {
                i.id = invoice.id;
                i.name = invoice.name;
                i.completed = invoice.completed;
                i.description = invoice.description;
            }
        });
    }

    delete = (id: number) => {
        const toDelete = this.getById(id);
        this.data.splice(this.data.indexOf(toDelete), 1);
    }
}
