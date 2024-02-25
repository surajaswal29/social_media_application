import { FC } from "react"
import { useRoutes } from "react-router-dom"
import Join from "./pages/main/Auth"
import Chat from "./pages/chat/Chat"

type Props = {
  theme: string
}

const App: FC<Props> = () => {
  const theme: string = "light"

  // Defining routes as an array of objects
  const routes = [
    { path: "/", element: <Join theme={theme} /> },
    { path: "/chat", element: <Chat theme={theme} /> },
    { path: "*", element: <div>Error: Page Does Not Exist</div> },
  ]

  // Use the useRoutes hook to dynamically create route elements
  const elements = useRoutes(routes)

  return <>{elements}</>
}

export default App
