import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { WarcryComponent } from './components/warcry/warcry.component';
import { MythicBastionlandComponent } from './components/mythic-bastionland/mythic-bastionland.component';
import { PendragonComponent } from './components/pendragon/pendragon.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'warcry', component: WarcryComponent },
  { path: 'mythicbastionland', component: MythicBastionlandComponent },
  { path: 'pendragon', component: PendragonComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
