import { SemanticUI } from "developer-icons"
import { Outlet } from "react-router-dom"
import { Header, Navbar } from "../components"

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* This is necessary for nested routes to work */}
      <section className='align-element py-20'>
        <Outlet />
        {/* First render the Landing component */}
      </section>
    </div>
  )
}

export { HomeLayout }
