import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
 totalPlayers: number = 0;
  totalMarketValue: number = 0;
  formattedMarketValue: string = '';
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }
 loadDashboardData(): void {
    this.players = this.playerService.getPlayers();
    this.totalPlayers = this.players.length;
    this.totalMarketValue = this.players.reduce((sum, player) => sum + player.marketValue, 0);
    this.formattedMarketValue = this.formatCurrency(this.totalMarketValue);
  }
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(value);
  }
  getPlayers(): void {
    const players = this.playerService.getPlayers();
    this.totalPlayers = players.length;
    this.totalMarketValue = players.reduce((sum, player) => sum + player.marketValue, 0);
  }
}