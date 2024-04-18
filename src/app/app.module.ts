import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UnitComponent } from './components/warcry/unit/unit.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RandomTableComponent } from './shared/random-table/random-table.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PendragonComponent } from './components/pendragon/pendragon.component';
import { MythicBastionlandComponent } from './components/mythic-bastionland/mythic-bastionland.component';
import { WarcryComponent } from './components/warcry/warcry.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SpaceStationZeroComponent } from './components/space-station-zero/space-station-zero.component';
import { NarrativeRosterComponent } from './components/warcry/narrative-roster/narrative-roster.component';
import { EncampmentRosterComponent } from './components/warcry/encampment-roster/encampment-roster.component';
import { MordheimComponent } from './components/mordheim/mordheim.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    UnitComponent,
    MessagesComponent,
    DashboardComponent,
    RandomTableComponent,
    PendragonComponent,
    MythicBastionlandComponent,
    WarcryComponent,
    HeroSearchComponent,
    SpaceStationZeroComponent,
    NarrativeRosterComponent,
    EncampmentRosterComponent,
    MordheimComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
