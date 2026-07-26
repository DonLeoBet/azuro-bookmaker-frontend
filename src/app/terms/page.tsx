import type { Metadata } from 'next'

import InfoPage, { generateInfoMetadata } from 'compositions/InfoPage/InfoPage'


export const metadata: Metadata = generateInfoMetadata('Terms')

export default function TermsPage() {
  return (
    <InfoPage title="Terms of Use">
      <p>
        By accessing and using NovaBet you accept these terms in full. If you do
        not accept any part of these terms, you must not use this website.
      </p>
      <p>
        NovaBet is a non-custodial interface to the Azuro protocol. We do not
        hold, custody, or control user funds. All bets are placed directly from
        your own wallet against on-chain liquidity pools.
      </p>
      <p>
        You are responsible for ensuring that your use of NovaBet complies with
        the laws of your jurisdiction. You must be of legal age to participate.
        NovaBet makes no guarantee as to the availability or correctness of odds
        at any given moment.
      </p>
      <p>
        Smart-contract transactions are final and irreversible. Please review
        your selections before confirming a bet in your wallet.
      </p>
    </InfoPage>
  )
}
