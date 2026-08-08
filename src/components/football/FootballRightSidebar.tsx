import { OddsComparison, TopScorersList, InjuriesList } from 'components/football'
import { mockOdds, mockTopScorers, mockInjuries } from 'lib/football/mock'


export function FootballRightSidebar() {
  return (
    <aside
      className="hidden w-[18rem] flex-shrink-0 flex-col gap-3 overflow-y-auto border-l border-[var(--ft-line)] bg-[var(--ft-bg-elevated)] p-3 lg:flex"
    >
      <div className="ft-card p-3">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[var(--ft-text)]">BETSLIP</h2>
          <span className="text-xs text-[var(--ft-dim)]">0 selections</span>
        </div>
        <p className="mb-3 text-xs text-[var(--ft-muted)]">
          Your selected bets will appear here. Connect your wallet to place wagers.
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-[var(--ft-muted)]">
            <span>Total Odds</span>
            <span className="ft-font-mono font-bold text-[var(--ft-text)]">—</span>
          </div>
          <div className="flex justify-between text-xs text-[var(--ft-muted)]">
            <span>Possible Payout</span>
            <span className="ft-font-mono font-bold text-[var(--ft-text)]">—</span>
          </div>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-md bg-[var(--ft-primary)] py-2 text-xs font-bold text-[var(--ft-bg)] transition hover:bg-[var(--ft-primary-dark)]"
        >
          Place Bet
        </button>
      </div>

      <div className="ft-card p-3">
        <h2 className="mb-3 text-sm font-bold text-[var(--ft-text)]">ODDS COMPARISON</h2>
        <OddsComparison odds={mockOdds.slice(0, 3)} />
      </div>

      <TopScorersList scorers={mockTopScorers} />
      <InjuriesList injuries={mockInjuries} />
    </aside>
  )
}
