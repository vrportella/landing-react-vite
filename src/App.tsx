import './assets/scss/styles.scss'
import Navbar from './components/global/navbar'
import IntroSection from './components/intro'
import CoursesSection from './components/courses'
import Footer from './components/global/footer'

function App() {
  return (
    <>
      <div className='hero-image' />
      <div className='main-wrapper'>
        <Navbar />
        <main>
          <IntroSection />
          <CoursesSection />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
