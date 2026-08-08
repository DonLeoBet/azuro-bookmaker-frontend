import type { OddsQuote } from 'lib/football/types'


interface OddsBarProps {
  odds: OddsQuote[]
}

export function OddsBar({ odds }: OddsBarProps) {
  return (
    <div className="ft-panel flex items-center gap-6 overflow-x-auto border-t border-b border-[var(--ft-line)] bg-[var(--ft-panel)] px-3 py-2">
      {
        odds.map((quote) => (
          <button
            key={quote.bookmaker}
            type="button"
            className="flex flex-shrink-0 items-center gap-2 rounded px-2 py-1 transition hover:bg-[var(--ft-hover)]"
          >
            <span className="text-xs font-bold text-[var(--ft-muted)]">{quote.bookmaker}</span>
            <span className="ft-font-mono text-xs font-bold text-[var(--ft-primary)]">{quote.home.toFixed(2)}</span>
            <span className="ft-font-mono text-xs font-bold text-[var(--ft-text)]">{quote.draw.toFixed(2)}</span>
            <span className="ft-font-mono text-xs font-bold text-[var(--ft-text)]">{quote.away.toFixed(2)}</span>
          </button>
        ))
      }
    </div>
  )
}
