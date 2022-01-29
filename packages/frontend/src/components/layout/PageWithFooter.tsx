import type { ReactNode } from 'react'

type PageWithFooterProps = {
  children: ReactNode
  footer: ReactNode
}

export const PageWithFooter = ({ children, footer }: PageWithFooterProps) => {
  return (
    <>
      {children}
      {footer}
    </>
  )
}
