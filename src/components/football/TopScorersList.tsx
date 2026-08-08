import type { TopScorer } from 'lib/football/types'


interface TopScorersListProps {
  scorers: TopScorer[]
}

export function TopScorersList({ scorers }: TopScorersListProps) {
  return (
    <div className="ft-card p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-[var(--ft-text)]">TOP SCORERS</h3>
        <span className="cursor-pointer text-xs font-semibold text-[var(--ft-primary)] hover:underline">View all</span>
      </div>
      <div className="space-y-2">
        {
          scorers.map((s) => (
            <div
              key={s.player.id}
              className="flex items-center justify-between rounded p-1.5 transition hover:bg-[var(--ft-hover)]"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-xs text-[var(--ft-dim)] w-4">{s.position}</span>
                <span className="text-lg">{s.player.photo ?? '👤'}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--ft-text)]">{s.player.name}</p>
                  <p className="truncate text-xs text-[var(--ft-dim)]">{s.team.shortName}</p>
                </div>
              </div>
              <span className="ft-font-mono font-bold text-[var(--ft-text)]">{s.goals}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
