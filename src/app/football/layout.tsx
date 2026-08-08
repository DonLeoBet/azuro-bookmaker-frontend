import './styles/design-tokens.css'


export default function FootballLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="football-scope min-h-screen w-full bg-[var(--ft-bg)] text-[var(--ft-text)]">
      {children}
    </div>
  )
}
