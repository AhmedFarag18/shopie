import Footer from "./Footer"
import Navbar from "./Navbar"
function MainLayout({ children }) {
  return (
    <div className='main-layout'>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
