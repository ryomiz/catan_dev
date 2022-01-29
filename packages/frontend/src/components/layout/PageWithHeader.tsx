import type { ReactNode } from 'react'

type PageWithHeaderProps = {
  children: ReactNode
  header: ReactNode
}

export const PageWithHeader = ({ children, header }: PageWithHeaderProps) => {
  return (
    <>
      {header}
      {children}
    </>
  )
}
