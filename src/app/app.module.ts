import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { SettingsComponent } from './settings/settings.component';
import { InvoiceService } from './shared/invoice.service';
import { InvoiceEditorComponent } from './invoice-editor/invoice-editor.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
    SettingsComponent,
    InvoiceEditorComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
