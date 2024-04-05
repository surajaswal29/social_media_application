import { ChangeEvent } from "react"

export interface FormEvent {
  preventDefault: () => void
}

type theme = string

export interface PostProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  theme: theme
}

export interface RootAppProps {
  theme: theme
}

export interface UserAuthProps {
  theme: theme
}

export interface UserHomeProps {
  theme: theme
}

// Navbar props types
export interface NavbarProps {
  theme: theme
}

export type NavbarDimensionProps = {
    navHeight: number
    mainHeight:number
    mainWidth: number
}

export interface MainCompProps {
  navbarDimension: NavbarDimensionProps
}
export interface LinkProps {
  path: string
  className?: string
  title: string
  activeClass?: string
}

export interface MediaPostHookProps {
  theme: theme
  isImage: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export interface MediaPostProps {}
export interface TextPostProps {}
export interface LinkPostProps {}
export interface PollPostProps {}

export type validateEvent = ChangeEvent<HTMLInputElement>
