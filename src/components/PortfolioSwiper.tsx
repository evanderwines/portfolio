import { useState } from 'react'
import { A11y, Keyboard, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { AboutSlide } from './AboutSlide'
import { ContactSlide } from './ContactSlide'
import { ExperienceSlide } from './ExperienceSlide'
import { HeroSlide } from './HeroSlide'
import { DownloadIcon } from './Icons'			
import { ProjectsSlide } from './ProjectsSlide'

const slides = [
	{ id: 'intro', label: 'Intro', component: <HeroSlide /> },
	{ id: 'about', label: 'About', component: <AboutSlide /> },
	{ id: 'experience', label: 'Experience', component: <ExperienceSlide /> },
	{ id: 'projects', label: 'Projects', component: <ProjectsSlide /> },
	{ id: 'contact', label: 'Contact', component: <ContactSlide /> },
] as const

const resumeUrl = '/resume.pdf'

export function PortfolioSwiper() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
	const isFirstSlide = activeIndex === 0
	const isLastSlide = activeIndex === slides.length - 1

	return (
		<main className="min-h-svh overflow-hidden bg-[radial-gradient(circle_at_10%_14%,rgba(26,115,232,0.11),transparent_26rem),radial-gradient(circle_at_92%_86%,rgba(245,158,66,0.12),transparent_24rem),linear-gradient(120deg,#f7fbff_0%,#ffffff_52%,#f9fafb_100%)] text-[#374151]">
			<nav
				className="fixed left-1/2 top-[26px] z-50 grid min-h-[76px] w-[min(1480px,calc(100%_-_140px))] -translate-x-1/2 grid-cols-[minmax(220px,1fr)_auto_minmax(220px,1fr)] items-center rounded-[18px] border border-slate-700/10 bg-white/90 py-2.5 pl-6 pr-4 shadow-[0_22px_58px_rgba(23,37,84,0.1)] backdrop-blur-[18px] max-[1200px]:w-[calc(100%_-_40px)] max-[980px]:hidden"
				aria-label="Portfolio sections"
			>
				<div
					className="flex min-w-0 items-center gap-4 max-[980px]:hidden"
					aria-label="Evander V. Wines"
				>
					<span className="inline-flex size-[46px] items-center justify-center font-sans text-[1.42rem] font-black tracking-[-0.08em] text-[#1A73E8]">
						EVW
					</span>
					<span className="truncate font-sans text-[1.08rem] font-extrabold text-[#101828]">
						Evander V. Wines
					</span>
				</div>

				<div className="flex items-center justify-center gap-11 max-[1200px]:gap-[26px] max-[980px]:w-full max-[980px]:justify-start max-[980px]:gap-1">
					{slides.map((slide, index) => {
						const isActive = activeIndex === index

						return (
							<button
								aria-current={isActive ? 'page' : undefined}
								className={`group relative min-h-12 border-0 bg-transparent p-0 font-sans text-base font-extrabold transition-colors hover:text-[#1A73E8] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#1A73E8]/25 max-[980px]:min-h-[46px] max-[980px]:min-w-[98px] max-[980px]:shrink-0 max-[980px]:rounded-lg max-[980px]:px-3 max-[980px]:text-[0.92rem] max-[560px]:min-h-10 max-[560px]:min-w-[82px] max-[560px]:px-2 max-[560px]:text-[0.78rem] ${isActive
										? 'text-[#1A73E8] max-[980px]:bg-[#1A73E8] max-[980px]:text-white'
										: 'text-[#182236]'
									}`}
								key={slide.id}
								onClick={() => swiper?.slideTo(index)}
								type="button"
							>
								<span className="relative z-10">{slide.label}</span>
								<span
									aria-hidden="true"
									className={`absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#1A73E8] transition max-[980px]:hidden ${isActive
											? 'scale-x-100 opacity-100'
											: 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100'
										}`}
								/>
							</button>
						)
					})}
				</div>

				<div className="flex items-center justify-end gap-5 max-[980px]:hidden">
					{/* <button	
						aria-label="Toggle color theme"
						className="inline-flex h-[50px] w-[58px] cursor-pointer items-center justify-center rounded-2xl border border-slate-700/10 bg-white/80 text-[#111827] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#1A73E8]/25"
						type="button"
					>
						<SunIcon className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" />
					</button> */}
					<a
						className="inline-flex h-[50px] min-w-36 cursor-pointer items-center justify-center gap-4 rounded-[14px] border border-transparent bg-[#1A73E8] px-[22px] font-sans text-[0.98rem] font-extrabold text-white no-underline shadow-[0_14px_26px_rgba(26,115,232,0.24)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#1A73E8]/25"
						download="Evander-Wines-Resume.pdf"
						href={resumeUrl}
					>
						Resume
						<DownloadIcon className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" />
					</a>
				</div>
			</nav>

			<div
				aria-label="Portfolio slide pagination"
				className="fixed right-[34px] top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 min-[981px]:flex"
			>
				{slides.map((slide, index) => (
					<button
						aria-label={`Go to ${slide.label}`}
						className={`size-[11px] rounded-full transition ${activeIndex === index ? 'bg-[#1A73E8]' : 'bg-[#B8C0CC]'
							}`}
						key={slide.id}
						onClick={() => swiper?.slideTo(index)}
						type="button"
					/>
				))}
			</div>

			<div
				aria-label="Mobile slide controls"
				className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 min-[981px]:hidden"
			>
				<button
					aria-label="Previous section"
					className={`grid size-10 place-items-center rounded-full border border-slate-700/10 bg-white/92 text-[#1A73E8] shadow-[0_12px_28px_rgba(15,23,42,0.16)] backdrop-blur transition ${isFirstSlide ? 'opacity-35' : 'cursor-pointer active:scale-95'}`}
					disabled={isFirstSlide}
					onClick={() => swiper?.slidePrev()}
					type="button"
				>
					<ChevronUp className="size-5" />
				</button>
				<button
					aria-label="Next section"
					className={`grid size-10 place-items-center rounded-full border border-slate-700/10 bg-[#1A73E8] text-white shadow-[0_12px_28px_rgba(26,115,232,0.28)] transition ${isLastSlide ? 'opacity-35' : 'cursor-pointer active:scale-95'}`}
					disabled={isLastSlide}
					onClick={() => swiper?.slideNext()}
					type="button"
				>
					<ChevronDown className="size-5" />
				</button>
			</div>

			<a
				aria-label="Download resume"
				className="fixed bottom-4 left-4 z-50 inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-700/10 bg-white/92 px-4 text-[0.82rem] font-extrabold text-[#1A73E8] no-underline shadow-[0_12px_28px_rgba(15,23,42,0.16)] backdrop-blur active:scale-95 min-[981px]:hidden"
				download="Evander-Wines-Resume.pdf"
				href={resumeUrl}
			>
				<DownloadIcon className="size-4 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" />
				Resume
			</a>

			<Swiper
				a11y={{ enabled: true }}
				className="h-svh w-full"
				direction="vertical"
				keyboard={{ enabled: true }}
				modules={[Mousewheel, Keyboard, A11y]}
				mousewheel={{
					forceToAxis: true,
					sensitivity: 0.8,
					thresholdDelta: 18,
				}}
				onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
				onSwiper={setSwiper}
				resistanceRatio={0.25}
				slidesPerView={1}
				speed={650}
				threshold={6}
				touchReleaseOnEdges
				touchStartPreventDefault={false}
			>
				{slides.map((slide) => (
					<SwiperSlide className="!h-full overflow-y-auto overscroll-contain" key={slide.id}>
						{slide.component}
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	)
}
