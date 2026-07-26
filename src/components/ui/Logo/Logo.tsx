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
        width="120"
        height="20"
        viewBox="0 0 120 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 2.5 L14.5 17.5 L11 17.5 L10.1 14.3 L5.4 14.3 L4.5 17.5 L1 17.5 L6 2.5 Z M7.8 11.4 L9.5 5.7 L11.2 11.4 Z"
          fill="#FF6B00"
        />
        <text x="18" y="15" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#EBEBEB" letterSpacing="0.5">NOVA</text>
        <text x="58" y="15" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#7E7E7E" letterSpacing="0.5">BET</text>
      </svg>
    </Href>
  )
}

export default Logo
