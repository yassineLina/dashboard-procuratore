import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      nationality: 'Italiana',
      position: 'Attaccante',
      currentTeam: 'Team A',
      marketValue: 5000000,
      contractExpiry: new Date('2024-12-31'),
      phoneNumber: '+39 123 456 7890',
      email: 'mario.rossi@email.com',
      agentNotes: 'Giocatore promettente'
    }
    // Aggiungi altri giocatori qui...
  ];

  getPlayers(): Player[] {
    return this.players;
  }

  getPlayer(id: number): Player | undefined {
    return this.players.find(p => p.id === id);
  }
}