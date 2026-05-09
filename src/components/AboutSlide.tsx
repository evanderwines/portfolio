import { portfolio } from '../data/portfolio'
import { BadgeList } from './BadgeList'
import { GraduationCap } from 'lucide-react'

export function AboutSlide() {

	return (
		<section
			className="relative flex min-h-svh items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(26,115,232,0.13),transparent_34%),linear-gradient(135deg,#F7FBFF_0%,#FFFFFF_52%,#F8FAFC_100%)] px-[72px] pb-16 pt-32 max-[1200px]:px-9 max-[980px]:px-[18px] max-[980px]:pb-[92px] max-[980px]:pt-9"
			aria-label="About me"
		>
			<div className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[58%] rounded-tr-[100%] bg-[#1A73E8]/5 max-[560px]:hidden" />
			<div className="pointer-events-none absolute left-8 top-[30%] h-[130px] w-[130px] bg-[radial-gradient(circle,#1A73E8_1.5px,transparent_1.5px)] bg-[length:24px_24px] opacity-20 max-[760px]:hidden" />

			<div className="relative z-[1] mx-auto grid w-[min(1420px,100%)] grid-cols-[minmax(0,0.9fr)_minmax(560px,1.1fr)] items-center gap-[70px] max-[1200px]:gap-10 max-[980px]:grid-cols-1">
				<header className="flex flex-col items-start">
					<p className="m-0 font-sans text-[0.92rem] font-extrabold uppercase text-[#1A73E8] max-[560px]:text-[0.78rem]">
						About me
					</p>
					<div className="mt-2 h-[3px] w-8 rounded-full bg-[#1A73E8]" />

					<h2 className="mt-9 max-w-[15ch] font-sans text-[3.7rem] font-black leading-[1.08] tracking-normal text-[#071226] max-[1200px]:text-[3.45rem] max-[560px]:mt-6 max-[560px]:text-[2.35rem] max-[390px]:text-[2.05rem]">
						A practical builder with a{' '}
						<span className="bg-gradient-to-r from-[#1A73E8] to-[#0B5FD3] bg-clip-text text-transparent">
							student mindset.
						</span>
					</h2>

					<p className="mt-9 max-w-[620px] text-[1.1rem] leading-[1.75] text-[#5E6A7D] max-[560px]:mt-6 max-[560px]:text-[0.98rem] max-[560px]:leading-[1.6]">
						I like turning academic work, organization needs, and real community workflows into software that people can understand and use.
					</p>
				</header>

				<div className="grid gap-6 max-[560px]:gap-4">
					<div className="relative overflow-hidden rounded-[18px] border border-slate-900/5 bg-white px-8 py-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-[#1A73E8] max-[560px]:rounded-xl max-[560px]:px-5 max-[560px]:py-6">
						<div className="grid grid-cols-[96px_1fr_auto] gap-6 max-[760px]:grid-cols-1">
							<div className="grid size-[78px] place-items-center rounded-full bg-[#1A73E8]/10 text-[#1A73E8] max-[560px]:size-[58px]">
								<GraduationCap className="size-10 fill-current stroke-current max-[560px]:size-7" />
							</div>

							<div>
								<h3 className="m-0 mb-3 max-w-[520px] text-[1.75rem] font-black leading-tight tracking-normal text-[#071226] max-[560px]:text-[1.28rem]">
									{portfolio.education.degree}
								</h3>
								<p className="m-0 mt-5 text-lg text-[#5E6A7D] max-[560px]:mt-3 max-[560px]:text-[0.98rem]">{portfolio.education.institution}</p>
								<div className="my-5 h-px bg-slate-900/10 max-[560px]:my-4" />
								<BadgeList items={portfolio.education.activities} variant="accent" />
							</div>

							<div className="h-fit w-fit rounded-full bg-orange-100 px-5 py-2 text-sm font-black text-orange-500 max-[560px]:px-4 max-[560px]:text-xs">
								{portfolio.education.period}
							</div>
						</div>
					</div>

					<div className="rounded-[18px] border border-slate-900/5 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)] max-[560px]:rounded-xl max-[560px]:p-5">
						<div className="flex flex-wrap gap-x-3 gap-y-5 max-[560px]:gap-2">
							{portfolio.skillGroups.flatMap((group) => group.items).map((skill) => (
								<div
									key={skill}
									className="inline-flex h-11 items-center rounded-full border border-[#1A73E8]/10 bg-[#F5F9FF] px-5 text-[0.95rem] font-bold text-[#1A73E8] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] max-[560px]:h-9 max-[560px]:px-3 max-[560px]:text-[0.78rem]"
								>
									{skill}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
