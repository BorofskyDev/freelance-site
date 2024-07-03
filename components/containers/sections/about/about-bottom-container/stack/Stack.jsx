import ExternalLink from '@/components/links/external-link/ExternalLink'
import { links } from './links'

export default function Stack() {
  return (
    <div className='flex-wrap'>
      {links.map((link) => (
        <ExternalLink href={link.href} key={link.href}>
          {link.text}
        </ExternalLink>
      ))}
    </div>
  )
}
