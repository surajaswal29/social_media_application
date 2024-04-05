import React from 'react'


const useNavDimensions = (CustomRef?: React.RefObject<HTMLDivElement>) => {

  const [navbarDimension, setNavbarDimension] = React.useState({
    navHeight: CustomRef?.current?.offsetHeight || 0,
    mainHeight: window.innerHeight,
    mainWidth: window.innerWidth,
  })

  return { navbarDimension, setNavbarDimension }
}

export default useNavDimensions