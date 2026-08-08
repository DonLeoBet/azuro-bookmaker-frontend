import type { Injury } from 'lib/football/types'


interface InjuriesListProps {
  injuries: Injury[]
}

const statusColor: Record<Injury['status'], string> = {
  Out: 'bg-[var(--ft-red)]/20 text-[var(--ft-red)]',
  Doubtful: 'bg-[var(--ft-gold)]/20 text-[var(--ft-gold)]',
  Injured: 'bg-[var(--ft-gold)]/20 text-[var(--ft-gold)]',
}

export function InjuriesList({ injuries }: InjuriesListProps) {
  return (
    <div className="ft-card p-3">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-[var(--ft-text)]">INJURIES</h3>
        <span className="cursor-pointer text-xs font-semibold text-[var(--ft-primary)] hover:underline">View all</span>
      </div>
      <div className="space-y-2">
        {
          injuries.map((i) => (
            <div
              key={i.id}
              className="flex items-center justify-between rounded p-1.5 transition hover:bg-[var(--ft-hover)]"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-lg">{i.player.photo ?? '👤'}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--ft-text)]">{i.player.name}</p>
                  <p className="truncate text-xs text-[var(--ft-dim)]">{i.team.shortName}</p>
                </div>
              </div>
              <span className={`ft-chip ${statusColor[i.status]}`}>{i.status}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
