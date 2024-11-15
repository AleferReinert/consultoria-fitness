import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

interface ButtonLinkProps extends ComponentProps<'a'> {
  children: ReactNode
  href: string
}

export function ButtonLink({ children, href, className }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${className} font-semibold py-3 px-5 bg-primary-theme rounded-lg inline-block`}>
      {children}
    </Link>
  )
}
