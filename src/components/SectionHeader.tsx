type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="flex flex-col items-start gap-[18px] max-[980px]:items-stretch max-[560px]:gap-4">
      <p className="m-0 font-sans text-[0.88rem] font-extrabold uppercase leading-none text-[#1A73E8] max-[560px]:text-[0.78rem]">
        {eyebrow}
      </p>
      <h2 className="m-0 max-w-[18ch] font-sans text-[4rem] font-[850] leading-none tracking-normal text-[#0B1426] max-[980px]:max-w-full max-[980px]:text-5xl max-[560px]:text-[2.25rem] max-[390px]:text-[2rem]">
        {title}
      </h2>
      {description ? (
        <p className="m-0 max-w-[58ch] text-[1.22rem] leading-[1.75] text-[#5E6A7D] max-[560px]:text-[0.98rem] max-[560px]:leading-[1.6]">
          {description}
        </p>
      ) : null}
    </header>
  )
}
