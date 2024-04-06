import React from 'react'
import { NavbarContext } from '../context/navbarContext'
import { NavbarDimensionsContextType } from '../@types/navbar'

const useNavDimensions = () => {
  const context = React.useContext(NavbarContext) as NavbarDimensionsContextType

  if (!context) {
    throw new Error('useNavDimensions must be used within a NavbarProvider')
  }

  return context
}

export default useNavDimensions