import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages/hub"

//* error element
import { ErrorElement } from "./components"

//* react router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"

//* loaders
import { loader as landingLoaders } from "./pages/Landing"

const router = createBrowserRouter([
  {
    //@ parent element ( when we open a page we see that page )
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        // below the home layout Landing page
        index: true,
        element: <Landing />,
        loader: landingLoaders,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App

//! react router dom in different way

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import {
//   About,
//   Cart,
//   Checkout,
//   Error,
//   HomeLayout,
//   Landing,
//   Login,
//   Orders,
//   Products,
//   Register,
//   SingleProduct,
// } from "./pages/hub"

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Parent Route with Nested Routes */}
//         <Route path='/' element={<HomeLayout />}>
//           <Route index element={<Landing />} />
//           <Route path='products' element={<Products />} />
//           <Route path='products/:id' element={<SingleProduct />} />
//           <Route path='cart' element={<Cart />} />
//           <Route path='about' element={<About />} />
//           <Route path='checkout' element={<Checkout />} />
//           <Route path='orders' element={<Orders />} />
//         </Route>
//         {/* Standalone Routes with Wrappers */}
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />

//         {/* Catch-all Error Route */}
//         <Route path='*' element={<Error />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

//! different approach

// import {
//   About,
//   Cart,
//   Checkout,
//   Error,
//   HomeLayout,
//   Landing,
//   Login,
//   Orders,
//   Products,
//   Register,
//   SingleProduct,
// } from "./pages/hub"

// import { BrowserRouter, Routes, Route } from "react-router-dom"

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Parent route with HomeLayout as the layout */}
//         <Route path='/' element={<HomeLayout />} errorElement={<Error />}>
//           {/* Index route for Landing page */}
//           <Route index element={<Landing />} />

//           {/* Other nested routes */}
//           <Route path='products' element={<Products />} />
//           <Route path='products/:id' element={<SingleProduct />} />
//           <Route path='cart' element={<Cart />} />
//           <Route path='about' element={<About />} />
//           <Route path='checkout' element={<Checkout />} />
//           <Route path='orders' element={<Orders />} />
//         </Route>

//         <Route errorElement={<Error />}>
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
