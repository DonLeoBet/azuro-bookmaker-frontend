import { notFound } from 'next/navigation'
import { MatchCard, OddsComparison, PredictionCard, NewsCard } from 'components/football'
import { mockMatches, mockOdds, mockPredictions, mockNews } from 'lib/football/mock'


export function generateStaticParams() {
  return mockMatches.map((match) => ({ id: match.id }))
}

export default async function MatchDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const match = mockMatches.find((m) => m.id === id)

  if (!match) {
    notFound()
  }

  const prediction = mockPredictions.find((p) => p.match.id === match.id)

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="ft-font-display mb-6 text-2xl font-bold text-[var(--ft-text)]">
        {match.home.name} vs {match.away.name}
      </h1>

      <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MatchCard match={match} />
        </div>
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Odds
          </h2>
          <OddsComparison odds={mockOdds} />
        </div>
      </section>

      {
        prediction && (
          <section className="mb-8">
            <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
              Wiseguy prediction
            </h2>
            <PredictionCard prediction={prediction} />
          </section>
        )
      }

      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Related news
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {
            mockNews.slice(0, 2).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))
          }
        </div>
      </section>
    </main>
  )
}
