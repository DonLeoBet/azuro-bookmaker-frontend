'use client'

import { useState } from 'react'

import { FootballHeader } from './FootballHeader'
import { FootballSidebar } from './FootballSidebar'
import { FootballTicker } from './FootballTicker'
import { BetslipDrawer } from './BetslipDrawer'


export function FootballShell({ children }: { children: React.ReactNode }) {
  const [ betslipOpen, setBetslipOpen ] = useState(false)

  return (
    <div className="football-scope relative h-screen w-full overflow-hidden bg-[var(--ft-bg)] text-[var(--ft-text)]">
      <FootballHeader onBetslipClick={() => setBetslipOpen((v) => !v)} />

      <div
        className="flex w-full"
        style={
          {
            height: 'calc(100vh - var(--ft-header-h) - var(--ft-ticker-h))',
          }
        }
      >
        <FootballSidebar />
        <main className="min-w-0 flex-1 overflow-y-auto p-4">
          {children}
        </main>
        <BetslipDrawer isOpen={betslipOpen} onClose={() => setBetslipOpen(false)} />
      </div>

      <FootballTicker />
    </div>
  )
}
