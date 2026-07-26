import type { Metadata } from 'next'

import InfoPage, { generateInfoMetadata } from 'compositions/InfoPage/InfoPage'


export const metadata: Metadata = generateInfoMetadata('FAQ')

export default function FaqPage() {
  return (
    <InfoPage title="Frequently Asked Questions">
      <h2 className="text-heading-h4 font-semibold text-grey-90">Is DonLeo Bet custodial?</h2>
      <p>
        No. DonLeo Bet never holds your funds. You connect your own wallet and
        every bet is a direct on-chain transaction signed by you.
      </p>

      <h2 className="text-heading-h4 font-semibold text-grey-90">How are winnings paid?</h2>
      <p>
        When an event resolves, your winning bet can be redeemed instantly from
        the "My bets" tab. The payout is sent straight to your wallet.
      </p>

      <h2 className="text-heading-h4 font-semibold text-grey-90">What chains are supported?</h2>
      <p>
        DonLeo Bet supports Polygon, Gnosis, Chiliz, Base and BNB Chain. You can
        switch the active network from the balance dropdown in the header.
      </p>

      <h2 className="text-heading-h4 font-semibold text-grey-90">Can I cash out early?</h2>
      <p>
        Cash-out is available on selected live events. When available, a
        cash-out button appears on your bet in the "My bets" tab.
      </p>
    </InfoPage>
  )
}
