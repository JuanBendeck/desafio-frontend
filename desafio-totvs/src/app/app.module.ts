import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { AutoCompleteModule } from 'angular-ngx-autocomplete';
import { CardsComponent } from './core/cards/cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmptystateComponent } from './core/emptystate/emptystate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    CardsComponent, EmptystateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AutoCompleteModule,
    FlexLayoutModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
