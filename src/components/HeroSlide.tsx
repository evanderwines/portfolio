import { Code, GraduationCap, Mail, Trophy } from 'lucide-react'
import heroImg from '../assets/pic.png'
import { portfolio } from '../data/portfolio'
import { GithubIcon } from './Icons'

const statIcons = [GraduationCap, Trophy, Code]

export function HeroSlide() {
	return (
		<section
			className="relative min-h-svh overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(26,115,232,0.13),transparent_36%),linear-gradient(135deg,#F7FBFF_0%,#FFFFFF_52%,#F8FAFC_100%)] px-[72px] pb-12 pt-32 max-[1200px]:px-9 max-[980px]:px-[18px] max-[980px]:pb-[92px] max-[980px]:pt-9"
			aria-label="Portfolio intro"
		>
			<div className="mx-auto mb-10 grid w-full max-w-[1480px] grid-cols-[minmax(0,0.95fr)_minmax(460px,1fr)] items-center gap-16 max-[1024px]:grid-cols-1 max-[1024px]:gap-10 max-[560px]:mb-6 max-[560px]:gap-7">
				<div className="flex flex-col items-start">
					<p className="m-0 mb-7 font-sans text-[0.88rem] font-extrabold uppercase leading-none text-[#1A73E8] max-[560px]:mb-4 max-[560px]:text-[0.78rem]">
						Introduction
					</p>

					<h1 className="m-0 max-w-[14ch] font-sans text-[5.25rem] font-black leading-[0.96] tracking-normal text-[#071226] max-[1280px]:text-[4.8rem] max-[1024px]:max-w-full max-[640px]:text-[3.45rem] max-[390px]:text-[2.9rem]">
						Evander <span className="bg-gradient-to-r from-[#1A73E8] to-[#0B5FD3] bg-clip-text text-transparent">
							Wines
						</span>

					</h1>

					<p className="mt-9 max-w-[620px] text-[1.1rem] leading-[1.75] text-[#5F6B7A] max-[640px]:mt-6 max-[640px]:text-base max-[390px]:text-[0.96rem]">
						{portfolio.summary}
					</p>

					<div className="mt-12 flex flex-wrap gap-4 max-[640px]:mt-8 max-[560px]:w-full">
						<a
							href={`mailto:${portfolio.personal.email}`}
							className="inline-flex min-h-[58px] min-w-[205px] items-center justify-center gap-3 rounded-xl bg-[#1A73E8] px-7 text-base font-extrabold text-white no-underline shadow-[0_18px_34px_rgba(26,115,232,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0F66DB] max-[560px]:min-h-[52px] max-[560px]:w-full"
						>
							<Mail className="size-5 fill-current" />
							Contact Me
						</a>

						<a
							href={portfolio.personal.github}
							target="_blank"
							rel="noreferrer"
							className="inline-flex min-h-[58px] min-w-[175px] items-center justify-center gap-3 rounded-xl bg-white px-7 text-base font-extrabold text-[#101827] no-underline shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 max-[560px]:min-h-[52px] max-[560px]:w-full"
						>
							<GithubIcon className="size-5 fill-current" />
							GitHub
						</a>
					</div>
				</div>

				<div className="flex justify-end max-[1024px]:justify-center max-[420px]:hidden" aria-hidden="true">
					<div className="relative grid min-h-[310px] w-full max-w-[640px] place-items-center overflow-hidden rounded-[22px] border border-[#1A73E8]/10 bg-[linear-gradient(rgba(26,115,232,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.045)_1px,transparent_1px),linear-gradient(145deg,#FFFFFF,#EAF2FF)] bg-[length:44px_44px,44px_44px,auto] shadow-[0_28px_80px_rgba(37,99,235,0.14)] max-[640px]:min-h-[270px]">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(26,115,232,0.2),transparent_38%)]" />

						<div className="pointer-events-none absolute right-[88px] top-[75px] h-[260px] w-[430px] rotate-[-31deg] skew-x-[29deg] rounded-[34px] border border-[#1A73E8]/12 max-[640px]:hidden" />

						<div className="relative z-[2] h-[360px] w-[400px] place-items-center max-[640px]:h-[250px] max-[640px]:w-[260px]">
							<img
								src={heroImg}
								alt=""
								className="absolute left-[50%] top-[50%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-white object-cover opacity-95 shadow-[0_20px_60px_rgba(26,115,232,0.25)] max-[640px]:h-[210px] max-[640px]:w-[210px] max-[640px]:border-[7px]"
							/>
						</div>

						{/* <div className="absolute bottom-9 left-9 right-9 z-[4] grid gap-4 rounded-xl bg-[#1D293B] px-7 py-6 font-mono text-[0.92rem] font-bold leading-tight text-[#D8E7FF] shadow-[0_20px_44px_rgba(15,23,42,0.24)] max-[640px]:left-5 max-[640px]:right-5 max-[640px]:bottom-5 max-[640px]:text-[0.75rem]">
							<span>
								<b className="mr-4 text-[#AEB9C9]">01</b>
								const focus ={' '}
								<mark className="bg-transparent text-[#ECF56F]">'clean systems'</mark>;
							</span>
							<span>
								<b className="mr-4 text-[#AEB9C9]">02</b>
								const stack = ['React',{' '}
								<mark className="bg-transparent text-[#ECF56F]">'Laravel'</mark>];
							</span>
							<span>
								<b className="mr-4 text-[#AEB9C9]">03</b>
								const goal ={' '}
								<mark className="bg-transparent text-[#ECF56F]">'useful interfaces'</mark>;
							</span>
						</div> */}
					</div>
				</div>
			</div>

			<dl className="mx-auto mt-8 grid w-full max-w-[1480px] grid-cols-3 overflow-hidden rounded-[20px] border border-slate-900/5 bg-white/90 px-8 py-7 shadow-[0_24px_65px_rgba(15,23,42,0.08)] backdrop-blur max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[560px]:mt-6 max-[560px]:rounded-xl max-[560px]:px-4 max-[560px]:py-5">
				{portfolio.stats.map((stat, index) => {
					const Icon = statIcons[index]

					return (
						<div
							key={stat.label}
							className="relative grid grid-cols-[92px_minmax(0,1fr)] items-center gap-5 px-3 max-[560px]:grid-cols-[58px_minmax(0,1fr)] max-[560px]:gap-3 max-[560px]:px-0"
						>
							<div className="grid size-[82px] place-items-center rounded-full bg-[#1A73E8]/10 text-[#1A73E8] max-[560px]:size-[62px]">
								<Icon className="size-8" />
							</div>

							<div>
								<dt className="text-[2rem] font-black leading-none tracking-normal text-[#1A73E8] max-[560px]:text-[1.45rem]">
									{stat.value}
								</dt>
								<dd className="m-0 mt-2 max-w-[220px] text-[0.96rem] leading-[1.35] text-[#5F6B7A] max-[560px]:max-w-none max-[560px]:text-[0.86rem]">
									{stat.label}
								</dd>
							</div>
						</div>
					)
				})}
			</dl>
		</section>
	)
}
