import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListAdherentComponent } from './pages/list-adherent/list-adherent.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAdherentComponent } from './pages/add-adherent/add-adherent.component';
import { ModifierAdherentComponent } from './pages/modifier-adherent/modifier-adherent.component';
import { ProgrammeComponent } from './pages/programme/programme.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListAdherentComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    AddAdherentComponent,
    ModifierAdherentComponent,
    ProgrammeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
