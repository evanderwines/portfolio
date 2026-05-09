import type { ReactNode } from 'react'

type InfoCardProps = {
  eyebrow?: string
  title: string
  meta?: string
  children: ReactNode
  className?: string
}

export function InfoCard({
  eyebrow,
  title,
  meta,
  children,
  className,
}: InfoCardProps) {
  const classNames = [
    'grid gap-[18px] rounded-lg border border-slate-700/10 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] max-[560px]:gap-4 max-[560px]:p-5',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classNames}>
      {eyebrow ? (
        <p className="m-0 font-sans text-[0.88rem] font-extrabold uppercase leading-none text-[#1A73E8] max-[560px]:text-[0.76rem]">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex items-start justify-between gap-[18px] max-[560px]:flex-col">
        <h3 className="m-0 font-sans text-[1.35rem] font-extrabold leading-[1.22] text-[#0B1426] max-[560px]:text-[1.12rem]">
          {title}
        </h3>
        {meta ? (
          <span className="shrink-0 rounded-full bg-[#F59E42] px-2.5 py-[7px] font-sans text-[0.78rem] font-bold leading-none text-white max-[560px]:w-fit">
            {meta}
          </span>
        ) : null}
      </div>
      <div className="grid gap-4 leading-[1.65] text-[#5E6A7D]">{children}</div>
    </article>
  )
}
