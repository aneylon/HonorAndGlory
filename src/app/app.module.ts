import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UnitComponent } from './components/warcry/unit/unit.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, UnitComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
