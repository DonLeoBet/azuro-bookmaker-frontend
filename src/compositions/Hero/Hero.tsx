'use client'

import { Message } from '@locmod/intl'
import { Button, buttonMessages } from 'components/inputs'
import { Icon } from 'components/ui'

import messages from './messages'


const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-bg-l0">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -right-20 size-80 rounded-full bg-brand-50 blur-[120px]" />
        <div className="absolute top-40 left-1/4 size-60 rounded-full bg-accent-blue blur-[100px] opacity-40" />
      </div>
      <div className="relative px-4 pt-10 pb-8 ds:pt-16 ds:pb-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-caption-13 text-brand-50 font-semibold uppercase tracking-wider">
          <Icon className="size-4" name="interface/live" />
          <Message value={messages.badge} />
        </div>
        <h1 className="mt-3 text-heading-h1 ds:text-[2.75rem] font-extrabold leading-tight text-grey-90 max-w-2xl">
          <Message value={messages.title} />
        </h1>
        <p className="mt-3 text-caption-14 text-grey-60 max-w-xl">
          <Message value={messages.subtitle} />
        </p>
        <div className="mt-6 flex items-center gap-3">
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
      </div>
    </section>
  )
}

export default Hero
