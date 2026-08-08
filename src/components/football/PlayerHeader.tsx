import type { Player } from 'lib/football/types'


interface PlayerHeaderProps {
  player: Player;
}

export function PlayerHeader({ player }: PlayerHeaderProps) {
  return (
    <div className="ft-card p-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--ft-panel)] text-4xl">
          {player.photo ?? '👤'}
        </div>
        <div className="flex-1">
          <h1 className="ft-font-display text-2xl font-bold text-[var(--ft-text)]">
            {player.name}
          </h1>
          <p className="text-sm text-[var(--ft-muted)]">
            {player.position} · {player.age} years · {player.team.name}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            <Stat label="Apps" value={player.stats.appearances} />
            <Stat label="Goals" value={player.stats.goals} />
            <Stat label="Assists" value={player.stats.assists} />
            <Stat label="Minutes" value={player.stats.minutes} />
            <Stat label="Yellows" value={player.stats.yellowCards} />
            <Stat label="Reds" value={player.stats.redCards} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md bg-[var(--ft-bg)] p-2 text-center">
      <p className="text-xs uppercase tracking-wider text-[var(--ft-dim)]">{label}</p>
      <p className="ft-font-mono mt-1 text-lg font-bold text-[var(--ft-text)]">{value}</p>
    </div>
  )
}
