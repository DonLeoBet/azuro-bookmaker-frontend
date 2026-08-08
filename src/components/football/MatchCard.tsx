import Link from 'next/link'
import type { Match } from 'lib/football/types'


function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

interface MatchCardProps {
  match: Match;
  compact?: boolean;
}

export function MatchCard({ match, compact }: MatchCardProps) {
  const { home, away, league, status, minute, scoreHome, scoreAway, kickoff } = match
  const live = status === 'live'
  const finished = status === 'finished'

  return (
    <Link
      href={`/football/match/${match.id}`}
      className="ft-card block p-4 transition-[background-color] hover:bg-[var(--ft-hover)]"
    >
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="font-semibold text-[var(--ft-muted)]">
          {league.flag} {league.name}
        </span>
        {
          live ? (
            <span className="ft-live-badge">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              {minute}&apos;
            </span>
          ) : finished ? (
            <span className="ft-finished-badge">FT</span>
          ) : (
            <span className="ft-time-badge">{fmtTime(kickoff)}</span>
          )
        }
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="text-xl">{home.badge}</span>
            <span className="truncate text-sm font-semibold text-[var(--ft-text)]">
              {home.shortName}
            </span>
          </div>
          <span
            className={
              `ft-score text-lg ${
                live ? 'text-[var(--ft-primary)]' : 'text-[var(--ft-text)]'
              }`
            }
          >
            {status === 'upcoming' ? '-' : scoreHome}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="text-xl">{away.badge}</span>
            <span className="truncate text-sm font-semibold text-[var(--ft-text)]">
              {away.shortName}
            </span>
          </div>
          <span
            className={
              `ft-score text-lg ${
                live ? 'text-[var(--ft-primary)]' : 'text-[var(--ft-text)]'
              }`
            }
          >
            {status === 'upcoming' ? '-' : scoreAway}
          </span>
        </div>
      </div>

      {
        !compact && match.venue && (
          <div className="mt-3 border-t border-[var(--ft-line)] pt-2 text-xs text-[var(--ft-dim)]">
            {match.venue} · {fmtTime(kickoff)}
          </div>
        )
      }
    </Link>
  )
}
