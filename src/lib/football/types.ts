export type MatchStatus = 'upcoming' | 'live' | 'finished'

export interface League {
  id: string
  name: string
  country: string
  flag: string
  slug: string
  matchCount: number
}

export interface Team {
  id: string
  name: string
  shortName: string
  badge: string
  country: string
  founded?: number
  stadium?: string
  form?: string
}

export interface Player {
  id: string
  name: string
  photo?: string
  position: string
  age: number
  team: Team
  stats: PlayerStats
}

export interface PlayerStats {
  appearances: number
  goals: number
  assists: number
  minutes: number
  yellowCards: number
  redCards: number
}

export interface Match {
  id: string
  home: Team
  away: Team
  league: League
  status: MatchStatus
  minute?: number
  scoreHome?: number
  scoreAway?: number
  kickoff: string
  venue?: string
}

export interface StandingRow {
  position: number
  team: Team
  played: number
  wins: number
  draws: number
  losses: number
  goalsFor: number
  goalsAgainst: number
  points: number
  form: string
}

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  image?: string
  category: string
  author: string
  publishedAt: string
}

export interface Prediction {
  id: string
  match: Match
  tip: string
  confidence: number
  reasoning: string
}

export interface OddsQuote {
  bookmaker: string
  logo?: string
  home: number
  draw: number
  away: number
  url?: string
}

export interface TopScorer {
  position: number
  player: Player
  team: Team
  goals: number
}

export interface Injury {
  id: string
  player: Player
  team: Team
  status: 'Out' | 'Doubtful' | 'Injured'
}
