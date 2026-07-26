'use client'

import { Message } from '@locmod/intl'
import { Button, buttonMessages } from 'components/inputs'
import { Icon } from 'components/ui'

import messages from './messages'


const stats = [
  { value: '12+', label: 'Sports' },
  { value: '50K+', label: 'Live markets' },
  { value: '24/7', label: 'Instant payout' },
  { value: '0%', label: 'Custody held' },
]

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-bg-l0 border-b border-grey-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-10 size-96 rounded-full bg-brand-50 blur-[140px] opacity-20" />
        <div className="absolute top-20 left-1/3 size-72 rounded-full bg-accent-blue blur-[120px] opacity-10" />
      </div>
      <div className="relative px-4 pt-12 pb-10 ds:pt-20 ds:pb-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-caption-13 text-brand-50 font-semibold uppercase tracking-wider">
          <span className="inline-block size-1.5 rounded-full bg-brand-50 animate-pulse" />
          <Message value={messages.badge} />
        </div>
        <h1 className="mt-4 text-heading-h1 ds:text-[3rem] font-extrabold leading-[1.1] text-grey-90 max-w-3xl">
          <Message value={messages.title} />
        </h1>
        <p className="mt-4 text-caption-14 ds:text-base text-grey-60 max-w-xl leading-relaxed">
          <Message value={messages.subtitle} />
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button
            title={messages.cta}
            size={40}
            to="/football"
          />
          <Button
            title={buttonMessages.connectWallet}
            style="tertiary"
            size={40}
          />
        </div>
        <div className="mt-10 grid grid-cols-2 ds:grid-cols-4 gap-px bg-grey-10 rounded-sm overflow-hidden border border-grey-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg-l1 px-4 py-4">
              <div className="text-heading-h3 font-extrabold text-grey-90">{stat.value}</div>
              <div className="mt-1 text-caption-12 text-grey-40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
