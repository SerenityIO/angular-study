import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoiceEditorComponent } from './invoice-editor/invoice-editor.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'invoices', component: InvoicesListComponent },
  { path: 'invoices/edit/:id', component: InvoiceEditorComponent },
  { path: 'invoices/create', component: InvoiceEditorComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
