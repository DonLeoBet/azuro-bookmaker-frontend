'use client'

import Link from 'next/link'
import { BrandLogo } from 'components/football/BrandLogo'
import { mockLeagues } from 'lib/football/mock'


const topLinks = [
  { label: 'Live', href: '/football' },
  { label: 'Matches', href: '/football' },
  { label: 'Odds', href: '/football' },
]

export function TerminalHeader() {
  return (
    <header
      className="z-50 flex h-[var(--ft-header-h)] w-full items-center border-b border-[var(--ft-line)] bg-[var(--ft-panel)] px-4"
    >
      <Link href="/" className="mr-6 flex h-7 items-center">
        <BrandLogo variant="full" theme="light" className="h-7" />
      </Link>

      <nav className="mr-6 hidden items-center gap-1 lg:flex">
        {
          mockLeagues.map((league) => (
            <Link
              key={league.id}
              href={`/football/league/${league.slug}`}
              className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-[var(--ft-muted)] transition hover:bg-[var(--ft-hover)] hover:text-[var(--ft-text)]"
              title={league.name}
            >
              {league.flag}
            </Link>
          ))
        }
        {
          topLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-[var(--ft-muted)] transition hover:bg-[var(--ft-hover)] hover:text-[var(--ft-text)]"
            >
              {link.label}
            </Link>
          ))
        }
      </nav>

      <div className="hidden flex-1 sm:block">
        <input
          type="search"
          placeholder="Search teams, players, leagues, matches..."
          className="w-full max-w-lg rounded-md border border-[var(--ft-line)] bg-[var(--ft-bg)] px-3 py-1.5 text-sm text-[var(--ft-text)] outline-none transition focus:border-[var(--ft-primary)]"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-[var(--ft-line)] px-3 py-1.5 text-sm font-semibold text-[var(--ft-text)] transition hover:bg-[var(--ft-hover)]"
        >
          Betslip
          <span className="ft-chip bg-[var(--ft-primary-soft)] text-[var(--ft-primary)]">0</span>
        </button>
        <button
          type="button"
          className="rounded-md bg-[var(--ft-primary)] px-4 py-1.5 text-sm font-bold text-[var(--ft-bg)] transition hover:bg-[var(--ft-primary-dark)]"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  )
}
