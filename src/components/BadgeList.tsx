type BadgeListProps = {
  items: readonly string[]
  variant?: 'accent' | 'neutral' | 'primary'
}

const listClass = 'm-0 flex list-none flex-wrap gap-2 p-0'

const badgeBaseClass =
  'inline-flex min-h-[30px] items-center rounded-full border px-3 font-sans text-[0.78rem] font-bold leading-none max-[560px]:min-h-[26px] max-[560px]:px-2.5 max-[560px]:text-[0.7rem]'

const badgeVariants = {
  accent: 'border-transparent bg-[#F59E42] text-white',
  neutral: 'border-slate-700/10 bg-[#F9FAFB] text-[#374151]',
  primary: 'border-[#1A73E8]/15 bg-[#1A73E8]/8 text-[#1A73E8]',
}

export function BadgeList({ items, variant = 'neutral' }: BadgeListProps) {
  return (
    <ul className={listClass}>
      {items.map((item) => (
        <li className={`${badgeBaseClass} ${badgeVariants[variant]}`} key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
