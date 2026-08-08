import type { Team } from 'lib/football/types'


interface TeamHeaderProps {
  team: Team;
}

export function TeamHeader({ team }: TeamHeaderProps) {
  return (
    <div className="ft-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--ft-panel)] text-4xl">
            {team.badge}
          </div>
          <div>
            <h1 className="ft-font-display text-2xl font-bold text-[var(--ft-text)]">
              {team.name}
            </h1>
            <p className="text-sm text-[var(--ft-muted)]">
              {team.country} · {team.founded}
            </p>
            <p className="text-sm text-[var(--ft-dim)]">{team.stadium}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-[var(--ft-dim)]">Form</p>
            <p className="ft-font-mono mt-1 text-sm font-bold text-[var(--ft-text)]">
              {team.form}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
