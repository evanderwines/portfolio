import { useRef, useState } from 'react'
import { Code } from 'lucide-react'
import cleverTravellerPreview from '../assets/projects/clever-traveller/1.png'
import taskManagementPreview from '../assets/projects/task-mngmt/1.png'
import ticketManagementPreview from '../assets/projects/ticket-mngmt/1.png'
import alumniPreview from '../assets/projects/task-mngmt/2.png'
import arellanoLmsPreview from '../assets/projects/ticket-mngmt/2.png'
import { portfolio } from '../data/portfolio'
import { BadgeList } from './BadgeList'
import { SectionHeader } from './SectionHeader'

type ProjectImageKey = (typeof portfolio.projects)[number]['imageKey']

const projectImages = {
	alumni: alumniPreview,
	arellanoLms: arellanoLmsPreview,
	cleverTraveller: cleverTravellerPreview,
	taskManagement: taskManagementPreview,
	ticketManagement: ticketManagementPreview,
} satisfies Record<ProjectImageKey, string>

function getCircularOffset(index: number, activeIndex: number, total: number) {
	const offset = (index - activeIndex + total) % total

	return offset > total / 2 ? offset - total : offset
}

export function ProjectsSlide() {
	const [activeIndex, setActiveIndex] = useState(0)
	const touchStartX = useRef<number | null>(null)
	const projects = portfolio.projects
	const activeProject = projects[activeIndex]

	const showPrevious = () => {
		setActiveIndex((current) => (current - 1 + projects.length) % projects.length)
	}

	const showNext = () => {
		setActiveIndex((current) => (current + 1) % projects.length)
	}

	const handleTouchEnd = (x: number) => {
		if (touchStartX.current === null) {
			return
		}

		const distance = x - touchStartX.current

		if (Math.abs(distance) > 38) {
			if (distance < 0) {
				showNext()
			} else {
				showPrevious()
			}
		}

		touchStartX.current = null
	}

	return (
		<section
			className="relative flex min-h-svh items-center overflow-hidden px-[72px] pb-12 pt-25 max-[1200px]:px-9 max-[980px]:px-[18px] max-[980px]:pb-8 max-[980px]:pt-9"
			aria-label="Projects"
		>
			<div className="mx-auto grid w-[min(1420px,100%)] grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] items-center gap-[70px] max-[1200px]:gap-10 max-[980px]:grid-cols-1">
				<SectionHeader
					eyebrow="Projects"
					title="Five builds for real workflows."
					description="A carousel of systems work across alumni tracking, learning management, travel discovery, task planning, and technical support."
				/>

				<div className="grid gap-5">
					<div
						className="relative min-h-[560px] px-6 py-7 max-[640px]:min-h-[485px] max-[560px]:px-0 max-[390px]:min-h-[510px]"
						aria-label="Project carousel"
						onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
						onTouchStart={(event) => {
							touchStartX.current = event.touches[0].clientX
						}}
					>
						<p className="sr-only" aria-live="polite">
							{activeProject.name}
						</p>

						<div className="absolute inset-x-0 bottom-[58px] top-[32px] max-[640px]:bottom-[62px] max-[640px]:top-[18px]">
							{projects.map((project, index) => {
								const offset = getCircularOffset(index, activeIndex, projects.length)
								const distance = Math.abs(offset)
								const isActive = offset === 0
								const scale = distance === 0 ? 1 : distance === 1 ? 0.84 : 0.68
								const opacity = distance === 0 ? 1 : distance === 1 ? 0.7 : 0

								return (
									<article
										className={`absolute left-1/2 top-1/2 grid h-[500px] w-[min(92vw,450px)] origin-center overflow-hidden rounded-lg border text-left shadow-[0_24px_60px_rgba(0,0,0,0.24)] transition-all duration-500 ease-out max-[560px]:h-[425px] max-[390px]:h-[450px] ${isActive
											? 'border-white bg-white text-[#0B1426]'
											: 'border-white/20 bg-[#7EA0EA] text-white'
											} ${!isActive ? 'max-[640px]:pointer-events-none max-[640px]:!opacity-0' : ''}`}
										key={project.name}
										style={{
											opacity,
											transform: `translate(calc(-50% + ${offset * 58}%), -50%) scale(${scale})`,
											zIndex: 30 - distance,
										}}
									>
										<div
											className={`relative h-[205px] overflow-hidden max-[560px]:h-[115px] ${isActive ? 'bg-[#EEF4FF]' : 'bg-white/12'
												}`}
										>
											<img
												alt=""
												className="h-full w-full object-contain"
												src={projectImages[project.imageKey]}
											/>
											<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(11,18,32,0.3)_100%)]" />
											<span
												className={`absolute left-5 top-5 inline-flex min-h-8 items-center gap-2 rounded-full px-3 text-[0.72rem] font-black uppercase leading-none max-[560px]:left-4 max-[560px]:top-4 max-[560px]:min-h-7 max-[560px]:text-[0.66rem] ${isActive
													? 'bg-white/92 text-[#1A73E8] shadow-[0_8px_20px_rgba(15,23,42,0.12)]'
													: 'bg-white/18 text-white'
													}`}
											>
												<Code className="size-3.5" />
												{project.status}
											</span>
										</div>

										<div className="relative z-10 grid content-between gap-4 p-6 max-[560px]:gap-3 max-[560px]:p-5">
											<div>
												<p
													className={`m-0 font-sans text-[0.75rem] font-extrabold uppercase leading-none tracking-[0.12em] ${isActive ? 'text-[#1A73E8]' : 'text-white/78'
														}`}
												>
													{project.type}
												</p>
												<h3
													className={`m-0 mt-3 text-[1.55rem] font-black leading-[1.08] tracking-normal max-[560px]:mt-2 max-[560px]:text-[1.12rem] ${isActive ? 'text-[#0B1426]' : 'text-white'
														}`}
												>
													{project.name}
												</h3>
											</div>

											{isActive ? (
												<>
													<ul className="m-0 grid list-none gap-2 p-0 text-[0.9rem] leading-[1.35] text-[#5E6A7D] max-[560px]:text-[0.8rem] max-[560px]:leading-[1.28]">
														{project.description.map((detail, detailIndex) => (
															<li className={`flex gap-3 ${detailIndex > 1 ? 'max-[560px]:hidden' : ''}`} key={detail}>
																<span className="mt-[0.58em] size-2 shrink-0 rounded-full bg-[#F59E42]" />
																<span>{detail}</span>
															</li>
														))}
													</ul>
													<div className="max-[390px]:hidden">
														<BadgeList items={project.tools} variant="primary" />
													</div>
												</>
											) : (
												<p className="m-0 text-[0.92rem] font-bold leading-[1.35] text-white/82">
													{project.status}
												</p>
											)}
										</div>

										{!isActive ? (
											<button
												aria-label={`Show ${project.name}`}
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
							{projects.map((project, index) => (
								<button
									aria-label={`Show ${project.name}`}
									className={`h-2.5 cursor-pointer rounded-full transition-all focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#9DBBFF]/45 ${activeIndex === index
										? 'w-10 bg-[#F59E42]'
										: 'w-2.5 bg-[#1A73E8]/35 hover:bg-[#1A73E8]/60'
										}`}
									key={project.name}
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
