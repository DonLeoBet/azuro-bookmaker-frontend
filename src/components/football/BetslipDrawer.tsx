'use client'


export function BetslipDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {
        isOpen && (
          <button
            type="button"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50"
            aria-label="Close betslip"
          />
        )
      }
      <aside
        className="fixed right-0 top-[var(--ft-header-h)] z-50 w-80 border-l border-[var(--ft-line)] bg-[var(--ft-panel)] transition-transform"
        style={
          {
            height: 'calc(100vh - var(--ft-header-h) - var(--ft-ticker-h))',
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          }
        }
      >
        <div className="flex h-[var(--ft-header-h)] items-center justify-between border-b border-[var(--ft-line)] px-4">
          <h2 className="ft-font-display text-base font-bold text-[var(--ft-text)]">
            Betslip
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-[var(--ft-muted)] hover:text-[var(--ft-text)]"
          >
            Close
          </button>
        </div>
        <div className="p-4 text-sm text-[var(--ft-muted)]">
          Your selected bets will appear here. Connect your wallet to place wagers.
        </div>
      </aside>
    </>
  )
}
