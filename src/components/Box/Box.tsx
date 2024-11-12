import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return <div className='bg-neutral-900 p-4 text-center rounded-xl h-full'>{children}</div>
}
