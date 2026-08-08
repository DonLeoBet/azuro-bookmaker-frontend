import Link from 'next/link'
import { mockLeagues } from 'lib/football/mock'


const mainNav = [
  { label: 'Live', href: '/football' },
  { label: 'Matches', href: '/football' },
  { label: 'Standings', href: '/football' },
  { label: 'Teams', href: '/football' },
  { label: 'Players', href: '/football' },
  { label: 'News', href: '/football' },
  { label: 'Predictions', href: '/football' },
]

export function TerminalLeftNav() {
  return (
    <aside
      className="flex w-[16rem] flex-shrink-0 flex-col overflow-y-auto border-r border-[var(--ft-line)] bg-[var(--ft-bg-elevated)] p-3"
    >
      <div className="mb-2 px-2 text-xs font-bold uppercase tracking-widest text-[var(--ft-dim)]">
        Competitions
      </div>
      <nav className="mb-6 space-y-0.5">
        {
          mockLeagues.map((league) => (
            <Link
              key={league.id}
              href={`/football/league/${league.slug}`}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-[var(--ft-muted)] transition hover:bg-[var(--ft-hover)] hover:text-[var(--ft-text)]"
            >
              <span>{league.flag}</span>
              <span className="truncate">{league.name}</span>
            </Link>
          ))
        }
      </nav>

      <div className="mb-2 px-2 text-xs font-bold uppercase tracking-widest text-[var(--ft-dim)]">
        Football Intelligence
      </div>
      <nav className="space-y-0.5">
        {
          mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-md px-2 py-1.5 text-sm font-medium text-[var(--ft-muted)] transition hover:bg-[var(--ft-hover)] hover:text-[var(--ft-text)]"
            >
              {item.label}
            </Link>
          ))
        }
      </nav>
    </aside>
  )
}
