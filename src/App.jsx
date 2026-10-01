import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  }
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App