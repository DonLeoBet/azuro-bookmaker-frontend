import type {
  League,
  Team,
  Player,
  Match,
  StandingRow,
  NewsItem,
  Prediction,
  OddsQuote,
  TopScorer,
  Injury,
} from './types'


export const mockLeagues: League[] = [
  { id: 'pl', name: 'Premier League', country: 'England', flag: 'ENG', slug: 'premier-league', matchCount: 10 },
  { id: 'll', name: 'La Liga', country: 'Spain', flag: 'ESP', slug: 'la-liga', matchCount: 8 },
  { id: 'sa', name: 'Serie A', country: 'Italy', flag: 'ITA', slug: 'serie-a', matchCount: 7 },
  { id: 'bl', name: 'Bundesliga', country: 'Germany', flag: 'GER', slug: 'bundesliga', matchCount: 9 },
  { id: 'er', name: 'Eredivisie', country: 'Netherlands', flag: 'NED', slug: 'eredivisie', matchCount: 6 },
]

const makeTeam = (id: string, name: string, short: string, badge: string): Team => ({
  id,
  name,
  shortName: short,
  badge,
  country: 'England',
  founded: 1900,
  stadium: 'Unknown Stadium',
  form: 'WWDWL',
})

export const mockTeams: Record<string, Team> = {
  mci: makeTeam('mci', 'Manchester City', 'Man City', '🌙'),
  ars: makeTeam('ars', 'Arsenal', 'Arsenal', '🔫'),
  lvr: makeTeam('lvr', 'Liverpool', 'Liverpool', '🔴'),
  mnu: makeTeam('mnu', 'Manchester United', 'Man Utd', '👹'),
  che: makeTeam('che', 'Chelsea', 'Chelsea', '🔵'),
  tot: makeTeam('tot', 'Tottenham Hotspur', 'Spurs', '🐓'),
  rma: makeTeam('rma', 'Real Madrid', 'Real Madrid', '👑'),
  bar: makeTeam('bar', 'FC Barcelona', 'Barcelona', '🔴🔵'),
  juv: makeTeam('juv', 'Juventus', 'Juventus', '🦓'),
  bay: makeTeam('bay', 'Bayern Munich', 'Bayern', '🔴'),
  psg: makeTeam('psg', 'Paris Saint-Germain', 'PSG', '🔴🔵'),
  inter: makeTeam('inter', 'Inter Milan', 'Inter', '🔵⚫'),
  atm: makeTeam('atm', 'Atletico Madrid', 'Atletico', '🔴⚪'),
  mar: makeTeam('mar', 'Marseille', 'Marseille', '🔵⚪'),
  nap: makeTeam('nap', 'Napoli', 'Napoli', '🔵'),
}

export const mockMatches: Match[] = [
  {
    id: 'm1',
    home: mockTeams.mci,
    away: mockTeams.ars,
    league: mockLeagues[0],
    status: 'live',
    minute: 67,
    scoreHome: 2,
    scoreAway: 1,
    kickoff: '2026-08-08T16:00:00.000Z',
    venue: 'Etihad Stadium',
  },
  {
    id: 'm2',
    home: mockTeams.lvr,
    away: mockTeams.mnu,
    league: mockLeagues[0],
    status: 'upcoming',
    kickoff: '2026-08-08T18:30:00.000Z',
    venue: 'Anfield',
  },
  {
    id: 'm3',
    home: mockTeams.rma,
    away: mockTeams.bar,
    league: mockLeagues[1],
    status: 'finished',
    scoreHome: 3,
    scoreAway: 2,
    kickoff: '2026-08-07T20:00:00.000Z',
    venue: 'Santiago Bernabéu',
  },
  {
    id: 'm4',
    home: mockTeams.bay,
    away: mockTeams.nap,
    league: mockLeagues[3],
    status: 'live',
    minute: 45,
    scoreHome: 2,
    scoreAway: 0,
    kickoff: '2026-08-08T17:00:00.000Z',
    venue: 'Allianz Arena',
  },
  {
    id: 'm5',
    home: mockTeams.rma,
    away: mockTeams.atm,
    league: mockLeagues[1],
    status: 'upcoming',
    kickoff: '2026-08-08T20:00:00.000Z',
    venue: 'Metropolitano',
  },
  {
    id: 'm6',
    home: mockTeams.bar,
    away: mockTeams.rma,
    league: mockLeagues[1],
    status: 'upcoming',
    kickoff: '2026-08-08T22:00:00.000Z',
    venue: 'Camp Nou',
  },
  {
    id: 'm7',
    home: mockTeams.mci,
    away: mockTeams.che,
    league: mockLeagues[0],
    status: 'upcoming',
    kickoff: '2026-08-08T19:00:00.000Z',
    venue: 'Stamford Bridge',
  },
]

export const mockStandings: StandingRow[] = [
  { position: 1, team: mockTeams.mci, played: 34, wins: 26, draws: 5, losses: 3, goalsFor: 86, goalsAgainst: 32, points: 83, form: 'WWW' },
  { position: 2, team: mockTeams.ars, played: 34, wins: 24, draws: 5, losses: 5, goalsFor: 82, goalsAgainst: 38, points: 77, form: 'WWD' },
  { position: 3, team: mockTeams.lvr, played: 34, wins: 23, draws: 6, losses: 5, goalsFor: 78, goalsAgainst: 40, points: 75, form: 'LWW' },
  { position: 4, team: mockTeams.tot, played: 34, wins: 18, draws: 8, losses: 8, goalsFor: 70, goalsAgainst: 52, points: 62, form: 'DWD' },
  { position: 5, team: mockTeams.che, played: 34, wins: 14, draws: 10, losses: 10, goalsFor: 60, goalsAgainst: 56, points: 52, form: 'WDL' },
  { position: 6, team: mockTeams.mnu, played: 34, wins: 16, draws: 6, losses: 12, goalsFor: 52, goalsAgainst: 48, points: 54, form: 'LDL' },
]

export const mockPlayer: Player = {
  id: 'p1',
  name: 'Erling Haaland',
  position: 'ST',
  age: 26,
  team: mockTeams.mci,
  stats: {
    appearances: 38,
    goals: 32,
    assists: 7,
    minutes: 3204,
    yellowCards: 4,
    redCards: 0,
  },
}

export const mockTeam = mockTeams.mci

export const mockNews: NewsItem[] = [
  {
    id: 'n1',
    title: 'Guardiola: "We are ready for the title push"',
    excerpt: 'The City manager discusses the squad depth ahead of a crucial run.',
    category: 'Premier League',
    author: 'DonLeo Editorial',
    publishedAt: '2026-08-08T09:00:00.000Z',
  },
  {
    id: 'n2',
    title: 'Transfer watch: striker market heating up',
    excerpt: 'Top clubs across Europe are monitoring a handful of goalscorers.',
    category: 'Transfers',
    author: 'Wiseguy',
    publishedAt: '2026-08-08T10:30:00.000Z',
  },
  {
    id: 'n3',
    title: 'Injury update: key defender ruled out for Arsenal',
    excerpt: 'Saliba misses the Manchester City trip with a calf problem.',
    category: 'Injuries',
    author: 'DonLeo Editorial',
    publishedAt: '2026-08-08T11:00:00.000Z',
  },
]

export const mockPredictions: Prediction[] = [
  {
    id: 'pr1',
    match: mockMatches[0],
    tip: 'Man City to win & Over 2.5 goals',
    confidence: 78,
    reasoning: 'City dominate at home and Arsenal are missing key defenders.',
  },
  {
    id: 'pr2',
    match: mockMatches[1],
    tip: 'Liverpool clean sheet',
    confidence: 62,
    reasoning: 'United have struggled to create away from home.',
  },
  {
    id: 'pr3',
    match: mockMatches[4],
    tip: 'Atletico double chance',
    confidence: 68,
    reasoning: 'Real Madrid rotate after a tough midweek fixture.',
  },
]

export const mockOdds: OddsQuote[] = [
  { bookmaker: 'VB10', home: 1.85, draw: 3.60, away: 4.20 },
  { bookmaker: 'DonLeo', home: 1.88, draw: 3.55, away: 4.10 },
  { bookmaker: 'TopClass', home: 1.82, draw: 3.70, away: 4.30 },
  { bookmaker: 'Pinnacle', home: 1.86, draw: 3.58, away: 4.25 },
  { bookmaker: 'Bet365', home: 1.87, draw: 3.60, away: 4.15 },
]

export const mockTopScorers: TopScorer[] = [
  { position: 1, player: { ...mockPlayer, team: mockTeams.mci, photo: '👤' }, team: mockTeams.mci, goals: 32 },
  { position: 2, player: { id: 'p2', name: 'Kylian Mbappé', position: 'FW', age: 27, team: mockTeams.psg, stats: { appearances: 34, goals: 28, assists: 6, minutes: 3000, yellowCards: 3, redCards: 0 } }, team: mockTeams.psg, goals: 28 },
  { position: 3, player: { id: 'p3', name: 'Harry Kane', position: 'ST', age: 33, team: mockTeams.bay, stats: { appearances: 32, goals: 27, assists: 5, minutes: 2800, yellowCards: 2, redCards: 0 } }, team: mockTeams.bay, goals: 27 },
  { position: 4, player: { id: 'p4', name: 'Lautaro Martínez', position: 'ST', age: 28, team: mockTeams.inter, stats: { appearances: 36, goals: 24, assists: 4, minutes: 3100, yellowCards: 5, redCards: 1 } }, team: mockTeams.inter, goals: 24 },
  { position: 5, player: { id: 'p5', name: 'Mohamed Salah', position: 'RW', age: 34, team: mockTeams.lvr, stats: { appearances: 35, goals: 22, assists: 12, minutes: 3150, yellowCards: 1, redCards: 0 } }, team: mockTeams.lvr, goals: 22 },
]

export const mockInjuries: Injury[] = [
  { id: 'i1', player: { id: 'p6', name: 'Kevin De Bruyne', position: 'MID', age: 35, team: mockTeams.mci, stats: { appearances: 0, goals: 0, assists: 0, minutes: 0, yellowCards: 0, redCards: 0 } }, team: mockTeams.mci, status: 'Out' },
  { id: 'i2', player: { id: 'p7', name: 'Thibaut Courtois', position: 'GK', age: 34, team: mockTeams.rma, stats: { appearances: 0, goals: 0, assists: 0, minutes: 0, yellowCards: 0, redCards: 0 } }, team: mockTeams.rma, status: 'Out' },
  { id: 'i3', player: { id: 'p8', name: 'Pedri', position: 'MID', age: 23, team: mockTeams.bar, stats: { appearances: 0, goals: 0, assists: 0, minutes: 0, yellowCards: 0, redCards: 0 } }, team: mockTeams.bar, status: 'Doubtful' },
  { id: 'i4', player: { id: 'p9', name: 'Christopher Nkunku', position: 'FW', age: 28, team: mockTeams.che, stats: { appearances: 0, goals: 0, assists: 0, minutes: 0, yellowCards: 0, redCards: 0 } }, team: mockTeams.che, status: 'Out' },
]
