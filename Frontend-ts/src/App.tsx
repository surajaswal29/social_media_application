import { FC } from "react"
import { useRoutes } from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import Chat from "./pages/chat/Chat"
import Home from "./pages/main/Home"

// utils
import * as Types from "./utility/types"
import NavbarProvider from "./context/navbarContext"

const App: FC<Types.RootAppProps> = () => {
  const theme: string = "light"

  // Defining routes as an array of objects
  const routes = [
    {
      path: "/",
      element: <Home theme={theme} />,
    },
    { path: "/auth", element: <Auth theme={theme} /> },
    { path: "/chat", element: <Chat theme={theme} /> },
    { path: "*", element: <div>Error: Page Does Not Exist</div> },
  ]

  // Use the useRoutes hook to dynamically create route elements
  const elements = useRoutes(routes)

  return (
    <>
      <NavbarProvider>{elements}</NavbarProvider>
    </>
  )
}

export default App
