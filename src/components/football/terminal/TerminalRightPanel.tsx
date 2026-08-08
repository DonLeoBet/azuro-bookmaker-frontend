export function TerminalRightPanel() {
  return (
    <aside
      className="flex w-[18rem] flex-shrink-0 flex-col gap-3 overflow-y-auto border-l border-[var(--ft-line)] bg-[var(--ft-bg-elevated)] p-3"
    >
      <section className="ft-card p-3">
        <h2 className="mb-2 text-sm font-bold text-[var(--ft-text)]">BETSLIP</h2>
        <p className="text-xs text-[var(--ft-dim)]">Wallet-connected betslip will render here.</p>
      </section>

      <section className="ft-card p-3">
        <h2 className="mb-2 text-sm font-bold text-[var(--ft-text)]">ODDS COMPARISON</h2>
        <p className="text-xs text-[var(--ft-dim)]">Bookmaker odds comparison widget area.</p>
      </section>

      <section className="ft-card p-3">
        <h2 className="mb-2 text-sm font-bold text-[var(--ft-text)]">TOP SCORERS</h2>
        <p className="text-xs text-[var(--ft-dim)]">Top scorers widget area.</p>
      </section>

      <section className="ft-card p-3">
        <h2 className="mb-2 text-sm font-bold text-[var(--ft-text)]">INJURIES</h2>
        <p className="text-xs text-[var(--ft-dim)]">Injury list widget area.</p>
      </section>
    </aside>
  )
}
