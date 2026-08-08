import Link from 'next/link'
import { mockMatches } from 'lib/football/mock'


export function FootballTicker() {
  return (
    <div
      className="z-40 flex h-[var(--ft-ticker-h)] w-full items-center overflow-x-auto border-t border-[var(--ft-line)] bg-[var(--ft-bg-elevated)] px-3"
    >
      {
        mockMatches.map((match) => (
          <Link
            key={match.id}
            href={`/football/match/${match.id}`}
            className="mr-4 flex flex-shrink-0 items-center gap-2 rounded px-2 py-1 text-sm transition hover:bg-[var(--ft-hover)]"
          >
            <span className="text-[var(--ft-muted)]">{match.home.shortName}</span>
            <span className="ft-score text-[var(--ft-text)]">
              {match.status === 'upcoming' ? '-' : match.scoreHome}
            </span>
            <span className="text-[var(--ft-dim)]">-</span>
            <span className="ft-score text-[var(--ft-text)]">
              {match.status === 'upcoming' ? '-' : match.scoreAway}
            </span>
            <span className="text-[var(--ft-muted)]">{match.away.shortName}</span>
            {
              match.status === 'live' && (
                <span className="ft-live-badge">{match.minute}&apos;</span>
              )
            }
          </Link>
        ))
      }
    </div>
  )
}
