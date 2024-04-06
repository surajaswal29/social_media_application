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