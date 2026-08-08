import type { OddsQuote } from 'lib/football/types'


interface OddsComparisonProps {
  odds: OddsQuote[];
}

export function OddsComparison({ odds }: OddsComparisonProps) {
  const minHome = Math.min(...odds.map((o) => o.home))

  return (
    <div className="ft-panel overflow-hidden">
      <div className="ft-group-header grid grid-cols-4 gap-2">
        <span className="text-sm font-bold text-[var(--ft-text)]">Bookmaker</span>
        <span className="text-center text-sm font-bold text-[var(--ft-text)]">1</span>
        <span className="text-center text-sm font-bold text-[var(--ft-text)]">X</span>
        <span className="text-center text-sm font-bold text-[var(--ft-text)]">2</span>
      </div>
      <div className="divide-y divide-[var(--ft-line)]">
        {
          odds.map((quote) => (
            <div
              key={quote.bookmaker}
              className="ft-row grid grid-cols-4 gap-2 px-4 py-3"
            >
              <span className="text-sm font-semibold text-[var(--ft-text)]">
                {quote.bookmaker}
              </span>
              <OddCell value={quote.home} best={quote.home === minHome} />
              <OddCell value={quote.draw} best={false} />
              <OddCell value={quote.away} best={false} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

function OddCell({ value, best }: { value: number; best: boolean }) {
  return (
    <span
      className={
        `ft-font-mono rounded-md px-2 py-1 text-center text-sm font-bold ${
          best
            ? 'bg-[var(--ft-green)]/10 text-[var(--ft-green)]'
            : 'text-[var(--ft-text)]'
        }`
      }
    >
      {value.toFixed(2)}
    </span>
  )
}
