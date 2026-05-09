import { useState } from 'react'
import {
	CalendarDays,
	Medal,
	Trophy,
	UserRound,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeader } from './SectionHeader'

function getCircularOffset(index: number, activeIndex: number, total: number) {
	const offset = (index - activeIndex + total) % total

	return offset > total / 2 ? offset - total : offset
}

export function ExperienceSlide() {
	const [activeIndex, setActiveIndex] = useState(0)
	const competitions = portfolio.experience
	const activeCompetition = competitions[activeIndex]

	return (
		<section
			className="relative flex min-h-svh items-center overflow-hidden px-[72px] pb-12 pt-25 max-[1200px]:px-9 max-[980px]:px-[18px] max-[980px]:pb-[92px] max-[980px]:pt-9"
			aria-label="Experience"
		>
			<div className="mx-auto grid w-[min(1420px,100%)] grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] items-center gap-[70px] max-[1200px]:gap-10 max-[980px]:grid-cols-1">
				<SectionHeader
					eyebrow="Experience"
					title="Competition-tested problem solving."
					description="A focused snapshot of programming work, school representation, and the results that anchor the portfolio."
				/>

				<div className="grid gap-5">
					<div
						className="relative min-h-[490px] px-6 py-7 max-[640px]:min-h-[560px] max-[560px]:px-0 max-[390px]:min-h-[585px]"
						aria-label="Competition carousel"
					>
						<p className="sr-only" aria-live="polite">
							{activeCompetition.title}
						</p>

						<div className="absolute inset-x-0 bottom-[58px] top-[70px] max-[640px]:bottom-[62px] max-[640px]:top-[18px]">
							{competitions.map((item, index) => {
								const offset = getCircularOffset(index, activeIndex, competitions.length)
								const distance = Math.abs(offset)
								const isActive = offset === 0
								const isHighlight =
									item.role.includes('Finalist') ||
									item.details.some(
										(detail) =>
											detail.includes('second place') ||
											detail.includes('4th place') ||
											detail.includes('Grand finalist'),
									)
								const scale = distance === 0 ? 1 : distance === 1 ? 0.84 : 0.68
								const opacity = distance === 0 ? 1 : distance === 1 ? 0.70 : 0

								return (
									<article
										className={`absolute left-1/2 top-1/2 grid h-[440px] w-[min(92vw,390px)] origin-center overflow-hidden rounded-lg border p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.28)] transition-all duration-500 ease-out max-[560px]:h-[485px] max-[560px]:p-5 ${isActive
											? 'border-white bg-white text-[#0B1426]'
											: 'border-white/20 bg-[#7EA0EA] text-white'
											} ${!isActive ? 'max-[640px]:pointer-events-none max-[640px]:!opacity-0' : ''}`}
										key={item.title}
										style={{
											opacity,
											transform: `translate(calc(-50% + ${offset * 58}%), -50%) scale(${scale})`,
											zIndex: 30 - distance,
										}}
									>
										<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.36),transparent_34%)]" />
										<div className="relative z-10 grid content-between gap-6">
											<div className="grid gap-5 max-[560px]:gap-4">
												<div className="flex items-start justify-between gap-4">
													<span
														className={`grid size-12 shrink-0 place-items-center rounded-lg ${isActive
															? 'bg-[#1A73E8]/10 text-[#1A73E8]'
															: 'bg-white/14 text-white'
															}`}
													>
														{isHighlight ? (
															<Trophy className="size-6" />
														) : (
															<Medal className="size-6" />
														)}
													</span>
													<span
														className={`rounded-full px-3 py-2 text-[0.72rem] font-black uppercase leading-none ${isActive
															? 'bg-[#F59E42] text-white'
															: 'bg-white/14 text-white'
															}`}
													>
														{String(index + 1).padStart(2, '0')}
													</span>
												</div>

												<div>
													<p
														className={`m-0 font-sans text-[0.76rem] font-extrabold uppercase leading-none tracking-[0.12em] ${isActive ? 'text-[#1A73E8]' : 'text-white/78'
															}`}
													>
														{item.organization}
													</p>
													<h4
														className={`m-0 mt-3 text-[1.72rem] font-black leading-[1.08] tracking-normal max-[560px]:text-[1.34rem] ${isActive ? 'text-[#0B1426]' : 'text-white'
															}`}
													>
														{item.title}
													</h4>
												</div>

												<div className="grid gap-2.5">
													<p
														className={`m-0 flex items-center gap-2 text-[0.94rem] font-bold ${isActive ? 'text-[#4B5565]' : 'text-white/86'
															}`}
													>
														<CalendarDays className="size-4 shrink-0" />
														{item.date}
													</p>
													<p
														className={`m-0 flex items-center gap-2 text-[0.94rem] font-bold ${isActive ? 'text-[#4B5565]' : 'text-white/86'
															}`}
													>
														<UserRound className="size-4 shrink-0" />
														{item.role}
													</p>
												</div>
											</div>

											{isActive ? (
												<ul className="m-0 grid list-none gap-2.5 p-0 text-[0.92rem] leading-[1.38] text-[#5E6A7D] max-[560px]:gap-2 max-[560px]:text-[0.86rem]">
													{item.details.map((detail) => (
														<li className="flex gap-3" key={detail}>
															<span className="mt-[0.58em] size-2 shrink-0 rounded-full bg-[#F59E42]" />
															<span>{detail}</span>
														</li>
													))}
												</ul>
											) : null}
										</div>

										{!isActive ? (
											<button
												aria-label={`Show ${item.title}`}
												className="absolute inset-0 z-20 cursor-pointer border-0 bg-transparent p-0"
												onClick={() => setActiveIndex(index)}
												type="button"
											/>
										) : null}
									</article>
								)
							})}
						</div>

						<div className="absolute bottom-0 left-6 right-6 z-40 flex items-center justify-center gap-2 max-[560px]:left-0 max-[560px]:right-0 max-[560px]:flex-wrap">
							{competitions.map((item, index) => (
								<button
									aria-label={`Show ${item.title}`}
									className={`h-2.5 rounded-full cursor-pointer transition-all focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#9DBBFF]/45 ${activeIndex === index
										? 'w-10 bg-[#F59E42]'
										: 'w-2.5 bg-[#1A73E8]/35 hover:bg-[#1A73E8]/60'
										}`}
									key={item.title}
									onClick={() => setActiveIndex(index)}
									type="button"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
