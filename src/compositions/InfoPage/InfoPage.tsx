import React from 'react'
import { type Metadata } from 'next'
import cx from 'classnames'


type InfoPageProps = {
  title: string
  children: React.ReactNode
}

export const generateInfoMetadata = (title: string): Metadata => ({
  title,
})

const InfoPage: React.FC<InfoPageProps> = ({ title, children }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-heading-h1 font-bold text-grey-90">{title}</h1>
      <div className="mt-6 space-y-4 text-caption-14 text-grey-70 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export default InfoPage
