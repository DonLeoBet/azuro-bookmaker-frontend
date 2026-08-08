'use client'

import Link from 'next/link'


const topLeagues = [
  { id: 'pl', name: 'ENG', label: 'Premier League' },
  { id: 'll', name: 'ESP', label: 'La Liga' },
  { id: 'sa', name: 'ITA', label: 'Serie A' },
  { id: 'bl', name: 'GER', label: 'Bundesliga' },
  { id: 'er', name: 'NED', label: 'Eredivisie' },
]

export function FootballHeader({ onBetslipClick }: { onBetslipClick: () => void }) {
  return (
    <header
      className="z-50 flex h-[var(--ft-header-h)] w-full items-center border-b border-[var(--ft-line)] bg-[var(--ft-panel)] px-4"
    >
      <Link href="/football" className="mr-6 flex items-center gap-2">
        <span className="ft-font-display text-xl font-bold text-[var(--ft-primary)]">
          DONLEO
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--ft-muted)]">
          Bet
        </span>
      </Link>

      <nav className="mr-6 hidden items-center gap-1 lg:flex">
        {
          topLeagues.map((league) => (
            <Link
              key={league.id}
              href={`/football/league/${league.id}`}
              className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-[var(--ft-muted)] transition-colors hover:bg-[var(--ft-hover)] hover:text-[var(--ft-text)]"
              title={league.label}
            >
              {league.name}
            </Link>
          ))
        }
      </nav>

      <div className="hidden flex-1 sm:block">
        <input
          type="search"
          placeholder="Search matches, teams, players..."
          className="w-full max-w-md rounded-md border border-[var(--ft-line)] bg-[var(--ft-bg)] px-3 py-1.5 text-sm text-[var(--ft-text)] outline-none transition focus:border-[var(--ft-primary)]"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          onClick={onBetslipClick}
          className="rounded-md border border-[var(--ft-line)] px-3 py-1.5 text-sm font-semibold text-[var(--ft-text)] transition hover:bg-[var(--ft-hover)]"
        >
          Betslip
        </button>
        <button
          type="button"
          className="rounded-md bg-[var(--ft-primary)] px-3 py-1.5 text-sm font-bold text-[var(--ft-bg)] transition hover:bg-[var(--ft-primary-dark)]"
        >
          Connect
        </button>
      </div>
    </header>
  )
}
