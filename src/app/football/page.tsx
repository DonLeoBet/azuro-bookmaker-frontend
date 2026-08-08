export const metadata = {
  title: 'Football Intelligence Terminal',
}

export default function FootballHomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-black text-[var(--ft-text)]">
        FOOTBALL INTELLIGENCE TERMINAL
      </h1>
      <p className="max-w-xl text-sm text-[var(--ft-muted)]">
        Shell prototype — left navigation, center content area and right
        contextual panel. Data blocks will be added after the shell is approved.
      </p>
    </div>
  )
}
