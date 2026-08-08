import type {
  League,
  Team,
  Player,
  Match,
  StandingRow,
  NewsItem,
  Prediction,
  OddsQuote,
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
]

export const mockStandings: StandingRow[] = [
  { position: 1, team: mockTeams.mci, played: 3, wins: 3, draws: 0, losses: 0, goalsFor: 9, goalsAgainst: 3, points: 9, form: 'WWW' },
  { position: 2, team: mockTeams.ars, played: 3, wins: 2, draws: 1, losses: 0, goalsFor: 7, goalsAgainst: 2, points: 7, form: 'WWD' },
  { position: 3, team: mockTeams.lvr, played: 3, wins: 2, draws: 0, losses: 1, goalsFor: 6, goalsAgainst: 4, points: 6, form: 'LWW' },
  { position: 4, team: mockTeams.tot, played: 3, wins: 1, draws: 2, losses: 0, goalsFor: 5, goalsAgainst: 4, points: 5, form: 'DWD' },
  { position: 5, team: mockTeams.che, played: 3, wins: 1, draws: 1, losses: 1, goalsFor: 4, goalsAgainst: 5, points: 4, form: 'WDL' },
  { position: 6, team: mockTeams.mnu, played: 3, wins: 0, draws: 1, losses: 2, goalsFor: 2, goalsAgainst: 6, points: 1, form: 'LDL' },
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
]

export const mockOdds: OddsQuote[] = [
  { bookmaker: 'VB10', home: 1.85, draw: 3.60, away: 4.20 },
  { bookmaker: 'DonLeo', home: 1.88, draw: 3.55, away: 4.10 },
  { bookmaker: 'TopClass', home: 1.82, draw: 3.70, away: 4.30 },
]
