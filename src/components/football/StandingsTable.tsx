import type { StandingRow } from 'lib/football/types'


interface StandingsTableProps {
  rows: StandingRow[];
}

const FormDot = ({ result }: { result: string }) => {
  const color =
    result === 'W'
      ? 'bg-[var(--ft-green)]'
      : result === 'D'
        ? 'bg-[var(--ft-gold)]'
        : 'bg-[var(--ft-red)]'

  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${color}`}
      title={result === 'W' ? 'Win' : result === 'D' ? 'Draw' : 'Loss'}
    />
  )
}

export function StandingsTable({ rows }: StandingsTableProps) {
  return (
    <div className="ft-panel overflow-hidden">
      <div className="ft-group-header">
        <span className="text-sm font-bold text-[var(--ft-text)]">#</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">Team</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">P</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">W</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">D</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">L</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">GF</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">GA</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">GD</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">Pts</span>
        <span className="text-sm font-bold text-[var(--ft-text)]">Form</span>
      </div>
      <div className="divide-y divide-[var(--ft-line)]">
        {
          rows.map((row) => (
            <div
              key={row.team.id}
              className="ft-row grid grid-cols-[2rem_1.5fr_2rem_2rem_2rem_2rem_2rem_2rem_2rem_2rem_4.5rem] items-center gap-2 px-4 py-2.5"
            >
              <span className="text-sm text-[var(--ft-muted)]">{row.position}</span>
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-base">{row.team.badge}</span>
                <span className="truncate text-sm font-semibold text-[var(--ft-text)]">
                  {row.team.shortName}
                </span>
              </div>
              <span className="text-sm text-[var(--ft-muted)]">{row.played}</span>
              <span className="text-sm text-[var(--ft-muted)]">{row.wins}</span>
              <span className="text-sm text-[var(--ft-muted)]">{row.draws}</span>
              <span className="text-sm text-[var(--ft-muted)]">{row.losses}</span>
              <span className="text-sm text-[var(--ft-muted)]">{row.goalsFor}</span>
              <span className="text-sm text-[var(--ft-muted)]">{row.goalsAgainst}</span>
              <span className="text-sm text-[var(--ft-muted)]">
                {row.goalsFor - row.goalsAgainst}
              </span>
              <span className="text-sm font-bold text-[var(--ft-text)]">{row.points}</span>
              <div className="flex items-center gap-1">
                {
                  row.form.split('').map((r, i) => (
                    <FormDot key={i} result={r} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
