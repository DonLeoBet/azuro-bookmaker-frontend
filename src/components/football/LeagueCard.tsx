import Link from 'next/link'
import type { League } from 'lib/football/types'


interface LeagueCardProps {
  league: League;
}

export function LeagueCard({ league }: LeagueCardProps) {
  return (
    <Link
      href={`/football/league/${league.slug}`}
      className="ft-card block p-4 transition-[background-color] hover:bg-[var(--ft-hover)]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="text-2xl">{league.flag}</span>
          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-[var(--ft-text)]">
              {league.name}
            </h3>
            <p className="text-sm text-[var(--ft-muted)]">{league.country}</p>
          </div>
        </div>
        <span className="ft-chip bg-[var(--ft-primary-soft)] text-[var(--ft-primary)]">
          {league.matchCount} matches
        </span>
      </div>
    </Link>
  )
}
