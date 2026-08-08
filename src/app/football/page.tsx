import {
  FeaturedMatch,
  MatchRow,
  OddsBar,
  StandingsTable,
  LeagueCard,
} from 'components/football'
import {
  mockMatches,
  mockOdds,
  mockStandings,
  mockLeagues,
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
      <section>
        <FeaturedMatch match={featured} odds={mockOdds[0]} />
        <div className="mt-2">
          <OddsBar odds={mockOdds} />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
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
      </div>

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
  )
}
