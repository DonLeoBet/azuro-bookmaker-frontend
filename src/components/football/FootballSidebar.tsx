import Link from 'next/link'
import { mockLeagues } from 'lib/football/mock'


const navItems = [
  { href: '/football', label: 'Live matches' },
  { href: '/football', label: 'Matches today' },
  { href: '/football', label: 'Favorites' },
  { href: '/football', label: 'Standings' },
  { href: '/football', label: 'Top scorers' },
  { href: '/football', label: 'Injuries' },
  { href: '/football', label: 'Transfers' },
  { href: '/football', label: 'Odds' },
  { href: '/football', label: 'Predictions' },
  { href: '/football', label: 'News' },
]

export function FootballSidebar() {
  return (
    <aside
      className="hidden w-[var(--ft-sidebar-w)] flex-shrink-0 flex-col overflow-y-auto border-r border-[var(--ft-line)] bg-[var(--ft-bg-elevated)] p-3 lg:flex"
    >
      <div className="mb-2 px-2 text-xs font-bold uppercase tracking-widest text-[var(--ft-dim)]">
        Menu
      </div>
      <nav className="mb-6 space-y-0.5">
        {
          navItems.map((item) => (
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

      <div className="mb-2 px-2 text-xs font-bold uppercase tracking-widest text-[var(--ft-dim)]">
        Top competitions
      </div>
      <nav className="space-y-0.5">
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
    </aside>
  )
}
