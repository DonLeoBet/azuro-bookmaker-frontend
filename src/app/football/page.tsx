import {
  LeagueCard,
  MatchCard,
  StandingsTable,
  TeamHeader,
  PlayerHeader,
  NewsCard,
  PredictionCard,
  OddsComparison,
} from 'components/football'
import {
  mockLeagues,
  mockMatches,
  mockStandings,
  mockTeam,
  mockPlayer,
  mockNews,
  mockPredictions,
  mockOdds,
} from 'lib/football/mock'


export const metadata = {
  title: 'Football Intelligence',
}

export default function FootballPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="ft-font-display mb-8 text-3xl font-bold text-[var(--ft-text)]">
        Football Intelligence
      </h1>

      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Leagues
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {
            mockLeagues.slice(0, 3).map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))
          }
        </div>
      </section>

      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Matches
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {
            mockMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          }
        </div>
      </section>

      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Standings
        </h2>
        <StandingsTable rows={mockStandings} />
      </section>

      <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Team
          </h2>
          <TeamHeader team={mockTeam} />
        </div>
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Player
          </h2>
          <PlayerHeader player={mockPlayer} />
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            News
          </h2>
          <div className="space-y-4">
            {
              mockNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))
            }
          </div>
        </div>
        <div>
          <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
            Predictions
          </h2>
          <div className="space-y-4">
            {
              mockPredictions.map((prediction) => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))
            }
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="ft-font-display mb-4 text-lg font-bold text-[var(--ft-text)]">
          Odds Comparison
        </h2>
        <OddsComparison odds={mockOdds} />
      </section>
    </main>
  )
}
