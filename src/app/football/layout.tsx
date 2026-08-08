import './styles/design-tokens.css'

import { FootballShell } from 'components/football'


export default function FootballLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FootballShell>
      {children}
    </FootballShell>
  )
}
