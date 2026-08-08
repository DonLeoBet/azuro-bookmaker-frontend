import cx from 'classnames'


type BrandLogoVariant = 'full' | 'compact' | 'wordmark'
type BrandLogoTheme = 'light' | 'dark'

interface BrandLogoProps {
  variant?: BrandLogoVariant
  theme?: BrandLogoTheme
  className?: string
}

const srcMap: Record<BrandLogoVariant, Record<BrandLogoTheme, string>> = {
  full: {
    light: '/images/donleo-logo-light.png',
    dark: '/images/donleo-logo-dark.png',
  },
  wordmark: {
    light: '/images/donleo-logo-light.png',
    dark: '/images/donleo-logo-dark.png',
  },
  compact: {
    light: '/images/donleo-icon.png',
    dark: '/images/donleo-icon.png',
  },
}

export function BrandLogo({
  variant = 'full',
  theme = 'light',
  className,
}: BrandLogoProps) {
  const src = srcMap[variant][theme]

  return (
    <img
      src={src}
      alt="DonLeo.bet"
      className={cx('h-full w-auto object-contain', className)}
    />
  )
}
