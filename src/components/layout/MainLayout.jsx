import ScrollToTop from "../common/scrollToTop"
import Footer from "./Footer"
import Navbar from "./Navbar"
function MainLayout({ children }) {
  return (
    <div className='main-layout'>
      <Navbar />

      <main>
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default MainLayout
