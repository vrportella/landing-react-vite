import Logo from '../../assets/svg/logo-light.svg'

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <img className="logo" src={Logo} alt="logo" />
        <a href="#" className="footer-button">Get Started</a>
      </div>
    </footer>
  )
}
