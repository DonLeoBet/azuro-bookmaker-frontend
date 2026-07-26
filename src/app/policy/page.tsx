import type { Metadata } from 'next'

import InfoPage, { generateInfoMetadata } from 'compositions/InfoPage/InfoPage'


export const metadata: Metadata = generateInfoMetadata('Privacy Policy')

export default function PolicyPage() {
  return (
    <InfoPage title="Privacy Policy">
      <p>
        DonLeo Bet is a non-custodial, on-chain application. We do not collect or
        store personal data beyond what is strictly necessary to operate the
        interface.
      </p>
      <p>
        When you connect a wallet, your public wallet address is read locally in
        your browser to display your bets and balances. This address is sent to
        the Azuro subgraph and RPC providers to fetch your data — the same data
        anyone could read on-chain.
      </p>
      <p>
        We use local storage to remember your odds format, slippage preference,
        and collapsed-market settings. No tracking cookies are placed.
      </p>
      <p>
        DonLeo Bet does not sell or share user data with third parties.
      </p>
    </InfoPage>
  )
}
