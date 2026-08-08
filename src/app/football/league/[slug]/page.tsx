import { notFound } from 'next/navigation'
import { MatchCard, StandingsTable, OddsComparison } from 'components/football'
import { mockLeagues, mockMatches, mockStandings, mockOdds } from 'lib/football/mock'


export function generateStaticParams() {
  return mockLeagues.map((league) => ({ slug: league.slug }))
}

export default async function LeagueDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const league = mockLeagues.find((l) => l.slug === slug)

  if (!league) {
    notFound()
  }

  const matches = mockMatches.filter((m) => m.league.id === league.id)

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="ft-font-display mb-2 text-2xl font-bold text-[var(--ft-text)]">
        {league.flag} {league.name}
      </h1>
      <p className="mb-6 text-[var(--ft-muted)]">{league.country}</p>

      <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Fixtures
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {
              matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))
            }
          </div>
        </div>
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Odds
          </h2>
          <OddsComparison odds={mockOdds} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Standings
        </h2>
        <StandingsTable rows={mockStandings} />
      </section>
    </main>
  )
}
