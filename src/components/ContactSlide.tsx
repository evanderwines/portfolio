import { portfolio } from '../data/portfolio'
import { InfoCard } from './InfoCard'
import { ExternalLinkIcon, GithubIcon, MailIcon } from './Icons'
import { SectionHeader } from './SectionHeader'
import { Phone } from 'lucide-react'

export function ContactSlide() {
  return (
    <section
      className="relative flex min-h-svh items-center px-[72px] pb-12 pt-32 max-[1200px]:px-9 max-[980px]:px-[18px] max-[980px]:pb-8 max-[980px]:pt-9"
      aria-label="Contact"
    >
      <div className="mx-auto grid w-[min(1420px,100%)] grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] items-center gap-[70px] max-[1200px]:gap-10 max-[980px]:grid-cols-1">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something useful."
          description="Reach out for projects, programming collaborations, or opportunities connected to student developer work."
        />

        <div className="grid gap-4 max-[560px]:gap-3">
          <InfoCard title="Email">
            <a
              className="inline-flex min-h-[60px] w-fit max-w-full items-center gap-3 break-all rounded-lg font-sans text-base font-extrabold text-[#374151] no-underline hover:text-[#1A73E8] max-[560px]:min-h-[42px] max-[560px]:text-[0.95rem]"
              href={`mailto:${portfolio.personal.email}`}
            >
              <MailIcon className="size-5 fill-current" />
              {portfolio.personal.email}
            </a>
          </InfoCard>

          <InfoCard title="GitHub">
            <a
              className="inline-flex min-h-[60px] w-fit max-w-full items-center gap-3 break-words rounded-lg font-sans text-base font-extrabold text-[#374151] no-underline hover:text-[#1A73E8] max-[560px]:min-h-[42px] max-[560px]:text-[0.95rem]"
              href={portfolio.personal.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="size-5 fill-current" />
              Evander Wines
              <ExternalLinkIcon className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" />
            </a>
          </InfoCard>

          <InfoCard title="Contact number">
            <p className="inline-flex min-h-0 w-fit max-w-full items-center gap-3 break-words rounded-lg font-sans text-base font-extrabold text-[#374151] no-underline hover:text-[#1A73E8] max-[560px]:text-[0.95rem]">
              <Phone className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" />
              {portfolio.personal.address}
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
