import {
  FeaturedMatch,
  MatchRow,
  TopScorersList,
  InjuriesList,
  OddsBar,
  StandingsTable,
  NewsCard,
  PredictionCard,
  LeagueCard,
  OddsComparison,
} from 'components/football'
import {
  mockMatches,
  mockOdds,
  mockStandings,
  mockNews,
  mockPredictions,
  mockLeagues,
  mockTopScorers,
  mockInjuries,
} from 'lib/football/mock'


export const metadata = {
  title: 'Football Intelligence Terminal',
}

const featured = mockMatches[0]
const liveMatches = mockMatches.filter((m) => m.status === 'live')
const upcomingMatches = mockMatches.filter((m) => m.status === 'upcoming')
const topLeagues = mockLeagues.slice(0, 5)

export default function FootballHomePage() {
  return (
    <div className="space-y-4">
      <FeaturedMatch match={featured} odds={mockOdds[0]} />

      <OddsBar odds={mockOdds} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <section className="ft-card">
            <div className="ft-group-header">
              <h2 className="text-sm font-bold text-[var(--ft-text)]">LIVE MATCHES</h2>
              <span className="ml-auto cursor-pointer text-xs font-semibold text-[var(--ft-primary)] hover:underline">View all</span>
            </div>
            <div>
              {
                liveMatches.map((match) => (
                  <MatchRow key={match.id} match={match} />
                ))
              }
            </div>
          </section>

          <section className="ft-card">
            <div className="ft-group-header">
              <h2 className="text-sm font-bold text-[var(--ft-text)]">UPCOMING MATCHES</h2>
              <span className="ml-auto cursor-pointer text-xs font-semibold text-[var(--ft-primary)] hover:underline">View all</span>
            </div>
            <div>
              {
                upcomingMatches.slice(0, 5).map((match) => (
                  <MatchRow key={match.id} match={match} />
                ))
              }
            </div>
          </section>

          <section>
            <div className="ft-group-header">
              <h2 className="text-sm font-bold text-[var(--ft-text)]">LEAGUE STANDINGS</h2>
              <span className="ml-auto cursor-pointer text-xs font-semibold text-[var(--ft-primary)] hover:underline">View full table</span>
            </div>
            <StandingsTable rows={mockStandings} />
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold text-[var(--ft-text)]">TOP LEAGUES</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {
                topLeagues.map((league) => (
                  <LeagueCard key={league.id} league={league} />
                ))
              }
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section>
            <h2 className="mb-3 text-sm font-bold text-[var(--ft-text)]">LATEST NEWS</h2>
            <div className="space-y-3">
              {
                mockNews.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))
              }
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold text-[var(--ft-text)]">WISEGUY PREDICTIONS</h2>
            <div className="space-y-3">
              {
                mockPredictions.map((prediction) => (
                  <PredictionCard key={prediction.id} prediction={prediction} />
                ))
              }
            </div>
          </section>

          <section className="ft-card p-3">
            <h2 className="mb-3 text-sm font-bold text-[var(--ft-text)]">BOOKMAKER COMPARISON</h2>
            <OddsComparison odds={mockOdds.slice(0, 3)} />
          </section>

          <TopScorersList scorers={mockTopScorers} />
          <InjuriesList injuries={mockInjuries} />
        </div>
      </div>
    </div>
  )
}
