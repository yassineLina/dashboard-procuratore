import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { PlayerList } from './components/player-list/player-list';
import { PlayerDetail } from './components/player-detail/player-detail';

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { App } from './app';
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'players', component: PlayerList },
  { path: 'player/:id', component: PlayerDetail }
];

registerLocaleData(localeIt);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
   providers: [
    { provide: LOCALE_ID, useValue: 'it' } 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }