import type { Metadata } from 'next'

import InfoPage, { generateInfoMetadata } from 'compositions/InfoPage/InfoPage'


export const metadata: Metadata = generateInfoMetadata('About')

export default function AboutPage() {
  return (
    <InfoPage title="About DonLeo Bet">
      <p>
        DonLeo Bet is a premium on-chain sportsbook built on the Azuro protocol.
        Every bet is settled transparently on-chain, with no central custodian
        holding your funds. You keep full custody of your wallet at all times.
      </p>
      <p>
        We offer competitive odds across football, basketball, tennis, cricket,
        MMA, ice hockey, esports and more. Live markets update in real time, and
        cash-out is available on selected events.
      </p>
      <p>
        DonLeo Bet is non-custodial: connect your wallet, pick your selections, and
        place a bet directly from your account. Winnings are paid out instantly
        once the event resolves.
      </p>
    </InfoPage>
  )
}
