export interface NavbarDimensionsType{
    navHeight: number
    mainHeight:number
    mainWidth: number
}

export interface NavbarDimensionsContextType{
    navbarDimension: NavbarDimensionsType
    setNavbarDimension: (navbarDimension: NavbarDimensionsType) => void
}

export interface NavbarPropsType {
  theme: theme
}