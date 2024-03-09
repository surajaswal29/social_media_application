export interface FormEvent {
  preventDefault: () => void
}

type theme = string

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

export interface LinkProps {
  path: string
  className?: string
  title: string
  activeClass?: string
}
