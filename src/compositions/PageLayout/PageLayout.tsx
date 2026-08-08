'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { GlobalModalsRegistrar } from 'compositions/modals'

import { Content, Footer } from './components'


const PageLayout: React.CFC = (props) => {
  const { children } = props
  const pathname = usePathname()
  const isFootball = pathname?.startsWith('/football')

  if (isFootball) {
    return (
      <>
        {children}
        <div id="modals" />
      </>
    )
  }

  return (
    <>
      <Content>
        <div className="flex-1">{children}</div>
        <Footer />
        <GlobalModalsRegistrar />
      </Content>
      <div id="modals" />
    </>
  )
}

export default PageLayout
