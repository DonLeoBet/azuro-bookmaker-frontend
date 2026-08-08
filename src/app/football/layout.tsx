import './styles/design-tokens.css'

import { FootballTerminalShell } from 'components/football/terminal/TerminalShell'


export default function FootballLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FootballTerminalShell>
      {children}
    </FootballTerminalShell>
  )
}
