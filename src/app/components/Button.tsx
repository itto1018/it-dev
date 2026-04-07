import Link from 'next/link'

type HeroButtonProps = {
  href: string
  variant?: 'primary' | 'outline'
  children: React.ReactNode
}

type ContactButtonProps = {
  children: React.ReactNode
}

export const HeroButton = ({ href, variant = 'primary', children }: HeroButtonProps) => {
  const base = 'inline-flex items-center justify-center w-full md:w-40 gap-2 font-semibold px-6 py-3 rounded-lg transition-colors'
  const styles = {
    primary: 'bg-[#a3e635] text-gray-900 hover:bg-[#84cc16]',
    outline: 'border border-gray-300 text-gray-700 hover:border-[#a3e635] hover:text-[#84cc16]',
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  )
}

export const ContactButton = ({ children }: ContactButtonProps) => {
  const base = 'w-full bg-[#a3e635] text-gray-900 font-semibold py-3 rounded-lg hover:bg-[#84cc16] transition-colors'
  return (
    <button type='submit' className={`${base}`}>
      {children}
    </button>
  )
}