import * as React from "react"
import {
  NavbarDimensionsContextType,
  NavbarDimensionsType,
} from "../@types/navbar"

export const NavbarContext =
  React.createContext<NavbarDimensionsContextType | null>(null)

const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // navbar dimension state
  const [navbarDimension, setNavbarDimension] =
    React.useState<NavbarDimensionsType>({
      navHeight: 0,
      mainWidth: 0,
      mainHeight: 0,
    })

  return (
    <NavbarContext.Provider value={{ navbarDimension, setNavbarDimension }}>
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider
