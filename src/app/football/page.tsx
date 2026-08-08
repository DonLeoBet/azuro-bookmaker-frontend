import {
  LeagueCard,
  MatchCard,
  StandingsTable,
  NewsCard,
  PredictionCard,
  OddsComparison,
} from 'components/football'
import {
  mockLeagues,
  mockMatches,
  mockStandings,
  mockNews,
  mockPredictions,
  mockOdds,
} from 'lib/football/mock'


export const metadata = {
  title: 'Football Intelligence',
}

const featured = mockMatches[0]
const liveMatches = mockMatches.filter((m) => m.status === 'live')
const upcomingMatches = mockMatches.filter((m) => m.status === 'upcoming')
const topLeagues = mockLeagues.slice(0, 5)

export default function FootballHomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Hero / featured match */}
      <section className="mb-8">
        <div className="ft-card p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--ft-primary)]">
                Featured match
              </p>
              <h1 className="ft-font-display mt-2 text-3xl font-bold text-[var(--ft-text)] lg:text-4xl">
                {featured.home.name} vs {featured.away.name}
              </h1>
              <p className="mt-2 text-[var(--ft-muted)]">
                {featured.league.name} · {featured.venue}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-4xl font-bold text-[var(--ft-text)]">
                  {featured.scoreHome} - {featured.scoreAway}
                </span>
                <span className="ft-live-badge">
                  Live {featured.minute}&apos;
                </span>
              </div>
            </div>
            <div className="lg:w-80">
              <MatchCard match={featured} compact />
            </div>
          </div>
        </div>
      </section>

      {/* Live matches */}
      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Live matches
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {
            liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          }
        </div>
      </section>

      {/* Top leagues */}
      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Top leagues
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {
            topLeagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))
          }
        </div>
      </section>

      {/* Predictions & News */}
      <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Wiseguy predictions
          </h2>
          <div className="space-y-4">
            {
              mockPredictions.map((prediction) => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))
            }
          </div>
        </div>
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Latest news
          </h2>
          <div className="space-y-4">
            {
              mockNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </section>

      {/* Odds & Standings */}
      <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Bookmaker comparison
          </h2>
          <OddsComparison odds={mockOdds} />
        </div>
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            League standings
          </h2>
          <StandingsTable rows={mockStandings} />
        </div>
      </section>

      {/* Upcoming */}
      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Upcoming fixtures
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {
            upcomingMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          }
        </div>
      </section>
    </main>
  )
}
