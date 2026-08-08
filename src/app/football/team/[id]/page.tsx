import { notFound } from 'next/navigation'
import { TeamHeader, MatchCard } from 'components/football'
import { mockTeams, mockMatches } from 'lib/football/mock'


export function generateStaticParams() {
  return Object.keys(mockTeams).map((id) => ({ id }))
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const team = mockTeams[id]

  if (!team) {
    notFound()
  }

  const matches = mockMatches.filter((m) => m.home.id === id || m.away.id === id)

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <TeamHeader team={team} />

      <section className="mt-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Matches
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {
            matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          }
        </div>
      </section>
    </main>
  )
}
