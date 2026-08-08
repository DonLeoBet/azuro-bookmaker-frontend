import Link from 'next/link'
import type { Match } from 'lib/football/types'


const defaultOdds = { home: 1.85, draw: 3.60, away: 4.20 }

interface MatchRowProps {
  match: Match
  odds?: { home: number; draw: number; away: number }
}

export function MatchRow({ match, odds = defaultOdds }: MatchRowProps) {
  const { home, away, scoreHome, scoreAway, minute, status, league, kickoff } = match
  const live = status === 'live'
  const finished = status === 'finished'

  const time = new Date(kickoff).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <Link
      href={`/football/match/${match.id}`}
      className="ft-row flex items-center justify-between gap-3 border-b border-[var(--ft-line)] px-3 py-2.5 last:border-0"
    >
      <div className="flex w-24 items-center gap-1.5 text-xs text-[var(--ft-dim)]">
        {live && <span className="h-1.5 w-1.5 rounded-full bg-[var(--ft-red)]" />}
        <span className="truncate">{live ? `${minute}'` : finished ? 'FT' : time}</span>
        <span className="truncate">{league.flag}</span>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <span className="truncate text-right text-sm font-semibold text-[var(--ft-text)]">{home.shortName}</span>
          <span className="text-base">{home.badge}</span>
        </div>
        <div className="ft-score w-12 text-center text-base font-extrabold text-[var(--ft-text)]">
          {status === 'upcoming' ? '-' : scoreHome} - {status === 'upcoming' ? '-' : scoreAway}
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="text-base">{away.badge}</span>
          <span className="truncate text-sm font-semibold text-[var(--ft-text)]">{away.shortName}</span>
        </div>
      </div>

      <div className="hidden flex-shrink-0 items-center gap-1 md:flex">
        <OddPill value={odds.home} />
        <OddPill value={odds.draw} />
        <OddPill value={odds.away} />
      </div>
    </Link>
  )
}

function OddPill({ value }: { value: number }) {
  return (
    <span className="ft-font-mono rounded bg-[var(--ft-bg)] px-1.5 py-0.5 text-xs font-bold text-[var(--ft-primary)]">
      {value.toFixed(2)}
    </span>
  )
}
