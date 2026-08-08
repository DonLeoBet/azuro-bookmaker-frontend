import Link from 'next/link'
import type { Match, OddsQuote } from 'lib/football/types'


interface FeaturedMatchProps {
  match: Match
  odds: OddsQuote
}

export function FeaturedMatch({ match, odds }: FeaturedMatchProps) {
  const { home, away, scoreHome, scoreAway, minute, status, league, venue } = match
  const live = status === 'live'

  return (
    <div className="ft-card overflow-hidden">
      <div className="ft-group-header">
        <span className="text-xs font-bold text-[var(--ft-primary)]">FEATURED MATCH</span>
        <span className="text-xs text-[var(--ft-muted)]">{league.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2">
        <Link href={`/football/match/${match.id}`}>
          <div className="flex items-center justify-between">
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              <span className="text-5xl">{home.badge}</span>
              <span className="font-semibold text-[var(--ft-text)]">{home.shortName}</span>
            </div>
            <div className="flex flex-col items-center px-4">
              <div className="ft-score text-5xl font-extrabold text-[var(--ft-text)]">
                {status === 'upcoming' ? '-' : scoreHome} : {status === 'upcoming' ? '-' : scoreAway}
              </div>
              {
                live && (
                  <span className="mt-2 ft-live-badge">{minute}&apos;</span>
                )
              }
              {
                status === 'upcoming' && (
                  <span className="mt-2 ft-time-badge">{new Date(match.kickoff).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
                )
              }
            </div>
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              <span className="text-5xl">{away.badge}</span>
              <span className="font-semibold text-[var(--ft-text)]">{away.shortName}</span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col justify-between">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-[var(--ft-dim)]">{venue}</span>
            <span className="text-xs text-[var(--ft-primary)] font-semibold">MATCH ODDS</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <OddCell label="1" value={odds.home} />
            <OddCell label="X" value={odds.draw} />
            <OddCell label="2" value={odds.away} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <ExtraMarket label="Over 2.5" value="1.72" />
            <ExtraMarket label="BTTS" value="1.90" />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--ft-line)] px-4 py-2">
        <nav className="flex gap-4 text-xs font-semibold text-[var(--ft-muted)]">
          {
            [ 'OVERVIEW', 'STATS', 'LINEUPS', 'TIMELINE', 'H2H', 'TABLE', 'BETS' ].map((tab) => (
              <span key={tab} className="cursor-pointer hover:text-[var(--ft-text)]">{tab}</span>
            ))
          }
        </nav>
      </div>
    </div>
  )
}

function OddCell({ label, value }: { label: string; value: number }) {
  return (
    <button
      type="button"
      className="rounded bg-[var(--ft-bg)] p-2 text-center transition hover:bg-[var(--ft-hover)]"
    >
      <div className="text-xs text-[var(--ft-dim)]">{label}</div>
      <div className="ft-font-mono font-bold text-[var(--ft-primary)]">{value.toFixed(2)}</div>
    </button>
  )
}

function ExtraMarket({ label, value }: { label: string; value: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-between rounded border border-[var(--ft-line)] px-2 py-1.5 text-xs transition hover:bg-[var(--ft-hover)]"
    >
      <span className="text-[var(--ft-muted)]">{label}</span>
      <span className="ft-font-mono font-bold text-[var(--ft-text)]">{value}</span>
    </button>
  )
}
