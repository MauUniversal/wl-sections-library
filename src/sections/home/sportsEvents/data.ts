import type { SportsEventCardData } from "./types";

export const sportsEvents: SportsEventCardData[] = [
  {
    id: "event-flamengo-palmeiras",
    league: "Copa Libertadores",
    time: "Hoy 21:00",
    homeTeam: "Flamengo",
    awayTeam: "Palmeiras",
    odds: [
      { label: "Local", value: "2.45" },
      { label: "Empate", value: "3.2" },
      { label: "Visit.", value: "2.9" },
    ],
  },
  {
    id: "event-river-boca",
    league: "Copa Libertadores",
    time: "Mañana 18:30",
    homeTeam: "River Plate",
    awayTeam: "Boca Juniors",
    odds: [
      { label: "Local", value: "2.10" },
      { label: "Empate", value: "3.40" },
      { label: "Visit.", value: "3.25" },
    ],
  },
  {
    id: "event-barcelona-madrid",
    league: "La Liga",
    time: "Sáb 16:00",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    odds: [
      { label: "Local", value: "2.30" },
      { label: "Empate", value: "3.50" },
      { label: "Visit.", value: "2.85" },
    ],
  },
  {
    id: "event-city-liverpool",
    league: "Premier League",
    time: "Dom 14:00",
    homeTeam: "Man. City",
    awayTeam: "Liverpool",
    odds: [
      { label: "Local", value: "2.05" },
      { label: "Empate", value: "3.60" },
      { label: "Visit.", value: "3.40" },
    ],
  },
  {
    id: "event-psg-marseille",
    league: "Ligue 1",
    time: "Dom 21:00",
    homeTeam: "PSG",
    awayTeam: "Marseille",
    odds: [
      { label: "Local", value: "1.55" },
      { label: "Empate", value: "4.10" },
      { label: "Visit.", value: "5.50" },
    ],
  },
];

export const defaultSportsEventsTitle = "Eventos Deportivos";
