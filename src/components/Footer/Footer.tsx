import { EnterpriseProps } from 'app/layout'
import { Container } from 'components/Container/Container'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { formatPhone } from 'utils/formatPhone'

export interface FooterProps extends Omit<EnterpriseProps, 'shortDescription' | 'socialShare'> {}

export interface SocialLinkProps {
  url: string | null
  Icon: IconType
  title: string
}

export function Footer({ phone, email, facebook, instagram, linkedin, whatsapp, name }: FooterProps) {
  const SocialLink = ({ url, Icon, title }: SocialLinkProps) => {
    if (!url) return null

    return (
      <Link href={url} target='_blank' title={title}>
        <Icon className='size-8' role='img' />
      </Link>
    )
  }

  return (
    <footer className='py-6 text-center sm:text-left'>
      <Container>
        <h4 className='uppercase font-bold mb-2'>{name}</h4>
        <div className='sm:flex justify-between items-center space-y-6'>
          <div className='space-y-1'>
            <p>
              <span className='font-bold'>Tel.: </span>
              <Link href={`tel:${formatPhone(phone)}`}>{formatPhone(phone)}</Link>
            </p>
            <p>
              <span className='font-bold'>E-mail: </span>
              <Link href={`mailto:${email}`}>{email}</Link>
            </p>
          </div>
          <nav className='space-x-2 inline-flex'>
            <SocialLink title='Facebook' url={facebook} Icon={FaFacebook} />
            <SocialLink title='Instagram' url={instagram} Icon={FaInstagram} />
            <SocialLink title='LinkedIn' url={linkedin} Icon={FaLinkedin} />
            <SocialLink title='Whatsapp' url={`https://wa.me/55${whatsapp}`} Icon={FaWhatsapp} />
          </nav>
        </div>
      </Container>
    </footer>
  )
}
