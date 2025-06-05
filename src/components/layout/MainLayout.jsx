
function MainLayout({ children }) {
  return (
    <div className='main-layout'>
      <div className='navbar'>
        Add Navbar Component Here
      </div>

      <div className="card bg-light p-3 m-5 rounded-md w-[300px] h-[300px] font-heading shadow-md text-text-primary">
        Card 1 Lorem, ipsum.
      </div>

      <main>
        {children}
      </main>

      <div className='footer'>
        Add Footer Component Here
      </div>
    </div>
  )
}

export default MainLayout
