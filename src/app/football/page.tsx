export const metadata = {
  title: 'Football Intelligence Terminal',
}

export default function FootballHomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="ft-font-display text-3xl font-bold text-[var(--ft-text)]">
        DonLeo Football Intelligence Terminal
      </h1>
      <p className="mt-3 max-w-md text-[var(--ft-muted)]">
        Shell is ready. Content blocks will be added in the next iteration.
      </p>
    </div>
  )
}
