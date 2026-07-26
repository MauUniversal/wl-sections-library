export interface SportsEventOdd {
  label: string;
  value: string;
}

export interface SportsEventCardData {
  id: string;
  league: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  odds: SportsEventOdd[];
}
