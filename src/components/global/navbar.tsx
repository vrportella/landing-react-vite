import Logo from '../../assets/svg/logo-dark.svg'

export default function navbar() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="logo" />
      <a href="#" className="header-button">Get Started</a>
    </header>
  )
}
