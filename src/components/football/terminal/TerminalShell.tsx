import { TerminalHeader } from './TerminalHeader'
import { TerminalLeftNav } from './TerminalLeftNav'
import { TerminalRightPanel } from './TerminalRightPanel'
import { TerminalTicker } from './TerminalTicker'


export function FootballTerminalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="football-scope relative flex h-screen w-full flex-col overflow-hidden bg-[var(--ft-bg)] text-[var(--ft-text)]">
      <TerminalHeader />

      <div
        className="flex w-full min-h-0 flex-1"
        style={
          {
            height: 'calc(100vh - var(--ft-header-h) - var(--ft-ticker-h))',
          }
        }
      >
        <TerminalLeftNav />
        <main className="min-w-0 flex-1 overflow-y-auto p-4">
          {children}
        </main>
        <TerminalRightPanel />
      </div>

      <TerminalTicker />
    </div>
  )
}
