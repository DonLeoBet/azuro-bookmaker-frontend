import cx from 'classnames'

import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <svg
        className="h-full"
        width="140"
        height="22"
        viewBox="0 0 140 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="11" r="9" fill="#FF6B00" />
        <path
          d="M6.2 6.5 L10 4 L13.8 6.5 L13.8 15.5 L10 18 L6.2 15.5 Z"
          fill="#111111"
        />
        <path
          d="M10 7.5 L11.5 10 L10 12.5 L8.5 10 Z"
          fill="#FF6B00"
        />
        <text x="24" y="16" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800" fill="#EBEBEB" letterSpacing="0.5">DONLEO</text>
        <text x="92" y="16" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="500" fill="#7E7E7E" letterSpacing="0.5">BET</text>
      </svg>
    </Href>
  )
}

export default Logo
