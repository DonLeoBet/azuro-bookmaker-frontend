import Link from 'next/link'
import { mockMatches } from 'lib/football/mock'


export function TerminalTicker() {
  const live = mockMatches.filter((m) => m.status === 'live')

  return (
    <div
      className="z-40 flex h-[var(--ft-ticker-h)] w-full items-center gap-6 overflow-x-auto border-t border-[var(--ft-line)] bg-[var(--ft-panel)] px-4"
    >
      <div className="flex items-center gap-2 text-xs font-bold text-[var(--ft-red)]">
        <span className="h-2 w-2 rounded-full bg-[var(--ft-red)]" />
        LIVE NOW
      </div>
      {
        live.map((match) => (
          <Link
            key={match.id}
            href={`/football/match/${match.id}`}
            className="flex flex-shrink-0 items-center gap-3 text-sm font-medium text-[var(--ft-text)] transition hover:text-[var(--ft-primary)]"
          >
            <span className="text-[var(--ft-dim)]">{match.minute}&apos;</span>
            <span>{match.home.shortName}</span>
            <span className="ft-font-mono font-bold text-[var(--ft-primary)]">
              {match.scoreHome} - {match.scoreAway}
            </span>
            <span>{match.away.shortName}</span>
          </Link>
        ))
      }
      <span className="ml-auto flex-shrink-0 cursor-pointer text-xs font-semibold text-[var(--ft-primary)] hover:underline">
        View all live
      </span>
    </div>
  )
}
