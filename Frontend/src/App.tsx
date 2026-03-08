import { useState, useEffect, useRef, useCallback } from 'react'
import { Lang, t, languageNames } from './translations'

/* ═══════════════════════════════════════════════════════════════ */
/*  TRUTHLENS AI — React + CSS Ultra-Premium Application        */
/*  Bot cursor · Glass light/dark · Liquid canvas · Scroll FX    */
/* ═══════════════════════════════════════════════════════════════ */

// ──────────────── BOT CURSOR SVG ────────────────
const BotCursorSVG = () => (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Antenna */}
        <line x1="32" y1="6" x2="32" y2="16" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="5" r="3.5" fill="var(--accent)" opacity="0.9">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Head */}
        <rect x="12" y="16" width="40" height="34" rx="12" fill="var(--bg-secondary)" stroke="var(--accent)" strokeWidth="2" />
        {/* Glass visor */}
        <rect x="16" y="20" width="32" height="18" rx="8" fill="var(--bg-primary)" stroke="var(--accent)" strokeWidth="1" opacity="0.6" />
        {/* Eyes */}
        <circle cx="24" cy="29" r="4" fill="var(--accent)">
            <animate attributeName="r" values="4;3.5;4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="29" r="4" fill="var(--accent)">
            <animate attributeName="r" values="4;3.5;4" dur="3s" repeatCount="indefinite" begin="0.1s" />
        </circle>
        {/* Eye shine */}
        <circle cx="22" cy="27" r="1.5" fill="white" opacity="0.7" />
        <circle cx="38" cy="27" r="1.5" fill="white" opacity="0.7" />
        {/* Mouth */}
        <path d="M26 42 Q32 47 38 42" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        {/* Ear bolts */}
        <circle cx="10" cy="32" r="3" fill="var(--accent)" opacity="0.4" />
        <circle cx="54" cy="32" r="3" fill="var(--accent)" opacity="0.4" />
    </svg>
)

// ──────────────── CUSTOM BOT CURSOR COMPONENT ────────────────
function BotCursor() {
    const botRef = useRef<HTMLDivElement>(null)
    const trailRef = useRef<HTMLDivElement>(null)
    const mousePos = useRef({ x: -100, y: -100 })
    const trailPos = useRef({ x: -100, y: -100 })
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', onMove)

        // Hover detection
        const hoverEls = document.querySelectorAll('button, a, .edu-tab, .step-card, .feat-card, .threat-item, .theme-toggle, .scanner-textarea')
        const onEnter = () => setHovering(true)
        const onLeave = () => setHovering(false)
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })

        let raf: number
        const animate = () => {
            if (botRef.current) {
                botRef.current.style.left = mousePos.current.x + 'px'
                botRef.current.style.top = mousePos.current.y + 'px'
            }
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.12
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.12
            if (trailRef.current) {
                trailRef.current.style.left = trailPos.current.x + 'px'
                trailRef.current.style.top = trailPos.current.y + 'px'
            }
            raf = requestAnimationFrame(animate)
        }
        raf = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', onMove)
            cancelAnimationFrame(raf)
            hoverEls.forEach(el => {
                el.removeEventListener('mouseenter', onEnter)
                el.removeEventListener('mouseleave', onLeave)
            })
        }
    }, [])

    return (
        <>
            <div id="bot-cursor" ref={botRef}>
                <div className={`bot-cursor-img ${hovering ? 'hovering' : ''}`}>
                    <BotCursorSVG />
                </div>
            </div>
            <div className={`cursor-trail ${hovering ? 'hovering' : ''}`} ref={trailRef} />
        </>
    )
}

// ──────────────── LIQUID CANVAS BACKGROUND ────────────────
function LiquidCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d')!
        let W = canvas.width = window.innerWidth
        let H = canvas.height = window.innerHeight
        let raf: number

        const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
        window.addEventListener('resize', resize)

        const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light'

        class LiquidBlob {
            x: number; y: number; r: number; vx: number; vy: number;
            color: number[]; alpha: number;
            constructor() {
                this.x = Math.random() * W
                this.y = Math.random() * H
                this.r = 150 + Math.random() * 200
                this.vx = (Math.random() - .5) * .35
                this.vy = (Math.random() - .5) * .35
                const darkColors = [[74, 222, 128], [250, 204, 21], [163, 230, 53], [52, 211, 153], [187, 247, 80]]
                const lightColors = [[34, 168, 92], [212, 160, 23], [109, 170, 34], [26, 154, 92], [140, 200, 60]]
                const colors = isDark() ? darkColors : lightColors
                this.color = colors[Math.floor(Math.random() * colors.length)]
                this.alpha = isDark() ? (.03 + Math.random() * .05) : (.04 + Math.random() * .06)
            }
            update() {
                this.x += this.vx; this.y += this.vy
                if (this.x < -this.r || this.x > W + this.r) this.vx *= -1
                if (this.y < -this.r || this.y > H + this.r) this.vy *= -1
            }
            draw() {
                const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r)
                const [r, g2, b] = this.color
                g.addColorStop(0, `rgba(${r},${g2},${b},${this.alpha})`)
                g.addColorStop(1, `rgba(${r},${g2},${b},0)`)
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
                ctx.fillStyle = g
                ctx.fill()
            }
        }

        const blobs: LiquidBlob[] = []
        for (let i = 0; i < 12; i++) blobs.push(new LiquidBlob())

        const animate = () => {
            ctx.clearRect(0, 0, W, H)
            blobs.forEach(b => { b.update(); b.draw() })
            raf = requestAnimationFrame(animate)
        }
        animate()

        return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
    }, [])

    return <canvas id="liquid-bg" ref={canvasRef} />
}

// ──────────────── SCROLL PIXEL SHIELD ────────────────
function ScrollPixelShield() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext('2d')!
        let W = canvas.width = window.innerWidth
        let H = canvas.height = window.innerHeight
        let raf: number
        let scrollProgress = 0

        const resize = () => {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
            generateShieldPixels()
        }

        // Shield shape definition — TruthGuard shield outline + "TG" text
        // The shield is drawn on a virtual grid, then sampled into pixel positions
        const pixels: { tx: number; ty: number; sx: number; sy: number; x: number; y: number; size: number; color: string; delay: number }[] = []

        function generateShieldPixels() {
            pixels.length = 0
            const centerX = W / 2
            const centerY = H / 2
            const scale = Math.min(W, H) * 0.35
            const pixelSize = Math.max(2, Math.floor(scale / 60))
            const gap = pixelSize + 2

            // Create an offscreen canvas to draw the shield shape
            const offCanvas = document.createElement('canvas')
            offCanvas.width = W
            offCanvas.height = H
            const offCtx = offCanvas.getContext('2d')!

            // Draw shield outline
            offCtx.save()
            offCtx.translate(centerX, centerY - scale * 0.05)

            // Shield path
            offCtx.beginPath()
            offCtx.moveTo(0, -scale * 0.55)
            offCtx.bezierCurveTo(scale * 0.55, -scale * 0.55, scale * 0.6, -scale * 0.35, scale * 0.6, -scale * 0.1)
            offCtx.bezierCurveTo(scale * 0.6, scale * 0.25, scale * 0.35, scale * 0.5, 0, scale * 0.65)
            offCtx.bezierCurveTo(-scale * 0.35, scale * 0.5, -scale * 0.6, scale * 0.25, -scale * 0.6, -scale * 0.1)
            offCtx.bezierCurveTo(-scale * 0.6, -scale * 0.35, -scale * 0.55, -scale * 0.55, 0, -scale * 0.55)
            offCtx.closePath()
            offCtx.lineWidth = Math.max(3, scale * 0.02)
            offCtx.strokeStyle = '#fff'
            offCtx.stroke()

            // Draw "TG" text inside
            offCtx.font = `900 ${Math.floor(scale * 0.45)}px sans-serif`
            offCtx.textAlign = 'center'
            offCtx.textBaseline = 'middle'
            offCtx.fillStyle = '#fff'
            offCtx.fillText('TG', 0, scale * 0.02)

            // Small checkmark below text
            offCtx.beginPath()
            offCtx.moveTo(-scale * 0.12, scale * 0.32)
            offCtx.lineTo(-scale * 0.03, scale * 0.42)
            offCtx.lineTo(scale * 0.14, scale * 0.22)
            offCtx.lineWidth = Math.max(2, scale * 0.025)
            offCtx.strokeStyle = '#fff'
            offCtx.stroke()

            offCtx.restore()

            // Sample pixels from the offscreen canvas
            const imageData = offCtx.getImageData(0, 0, W, H)
            const data = imageData.data

            const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
            const colors = isDark
                ? ['rgba(74,222,128,0.6)', 'rgba(74,222,128,0.4)', 'rgba(250,204,21,0.35)', 'rgba(163,230,53,0.45)', 'rgba(52,211,153,0.3)']
                : ['rgba(34,168,92,0.5)', 'rgba(34,168,92,0.35)', 'rgba(212,160,23,0.3)', 'rgba(109,170,34,0.4)', 'rgba(26,154,92,0.25)']

            for (let y = 0; y < H; y += gap) {
                for (let x = 0; x < W; x += gap) {
                    const idx = (y * W + x) * 4
                    if (data[idx + 3] > 128) {
                        // Target position = where pixel should be in the shield
                        const tx = x
                        const ty = y
                        // Scatter position = random position far from center
                        const angle = Math.random() * Math.PI * 2
                        const dist = Math.max(W, H) * (0.5 + Math.random() * 0.8)
                        const sx = centerX + Math.cos(angle) * dist
                        const sy = centerY + Math.sin(angle) * dist

                        pixels.push({
                            tx, ty, sx, sy,
                            x: sx, y: sy,
                            size: pixelSize * (0.6 + Math.random() * 0.6),
                            color: colors[Math.floor(Math.random() * colors.length)],
                            delay: Math.random() * 0.3,
                        })
                    }
                }
            }
        }

        generateShieldPixels()

        const onScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight
            scrollProgress = Math.min(1, window.scrollY / (maxScroll * 0.6))
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', resize)

        const animate = () => {
            ctx.clearRect(0, 0, W, H)

            for (const p of pixels) {
                // Each pixel has a delay, so they assemble progressively
                const prog = Math.max(0, Math.min(1, (scrollProgress - p.delay) / (1 - p.delay)))
                // Smooth easing
                const ease = prog < 0.5
                    ? 4 * prog * prog * prog
                    : 1 - Math.pow(-2 * prog + 2, 3) / 2

                p.x = p.sx + (p.tx - p.sx) * ease
                p.y = p.sy + (p.ty - p.sy) * ease

                ctx.globalAlpha = ease * 0.9 + 0.05
                ctx.fillStyle = p.color
                ctx.fillRect(p.x, p.y, p.size, p.size)
            }

            ctx.globalAlpha = 1
            raf = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(raf)
        }
    }, [])

    return <canvas id="pixel-shield-bg" ref={canvasRef} />
}

// ──────────────── PARTICLES ────────────────
function ParticleField() {
    const particles = Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        duration: (8 + Math.random() * 12) + 's',
        delay: (Math.random() * 10) + 's',
        size: (1 + Math.random() * 3) + 'px',
    }))

    return (
        <div className="particle-field">
            {particles.map(p => (
                <div key={p.id} className="particle" style={{
                    left: p.left,
                    animationDuration: p.duration,
                    animationDelay: p.delay,
                    width: p.size, height: p.size,
                }} />
            ))}
        </div>
    )
}

// ──────────────── SCROLL REVEAL HOOK ────────────────
function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible')
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .step-card, .feat-card')
            .forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}

// ──────────────── MAGNETIC BUTTON HOOK ────────────────
function useMagnetic() {
    useEffect(() => {
        const btns = document.querySelectorAll('.magnetic')
        const onMove = (e: Event) => {
            const me = e as MouseEvent
            const btn = me.currentTarget as HTMLElement
            const rect = btn.getBoundingClientRect()
            const x = me.clientX - rect.left - rect.width / 2
            const y = me.clientY - rect.top - rect.height / 2
            btn.style.transform = `translate(${x * .2}px, ${y * .2}px)`
        }
        const onLeave = (e: Event) => {
            (e.currentTarget as HTMLElement).style.transform = ''
        }
        btns.forEach(btn => {
            btn.addEventListener('mousemove', onMove)
            btn.addEventListener('mouseleave', onLeave)
        })
        return () => {
            btns.forEach(btn => {
                btn.removeEventListener('mousemove', onMove)
                btn.removeEventListener('mouseleave', onLeave)
            })
        }
    }, [])
}

// ──────────────── PARALLAX HERO HOOK ────────────────
function useParallaxHero() {
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const xPct = (e.clientX / window.innerWidth - .5) * 20
            const yPct = (e.clientY / window.innerHeight - .5) * 10
            const title = document.querySelector('.hero-title') as HTMLElement
            if (title) title.style.transform = `translate(${xPct * .3}px, ${yPct * .3}px)`
        }
        window.addEventListener('mousemove', onMove)
        return () => window.removeEventListener('mousemove', onMove)
    }, [])
}

// ──────────────── NAV ────────────────
function Nav({ theme, toggleTheme, lang, setLang }: { theme: string; toggleTheme: () => void; lang: Lang; setLang: (l: Lang) => void }) {
    const [langOpen, setLangOpen] = useState(false)
    const langRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    return (
        <nav className="nav">
            <div className="nav-logo">TRUTH<span>LENS</span></div>
            <div className="nav-center">
                <a href="#how">{t(lang, 'navHow')}</a>
                <a href="#scanner">{t(lang, 'navScanner')}</a>
                <a href="#features">{t(lang, 'navFeatures')}</a>
                <a href="#education">{t(lang, 'navLearn')}</a>
            </div>
            <div className="nav-right">
                {/* Language Selector */}
                <div className="lang-selector" ref={langRef}>
                    <button className="lang-btn" onClick={() => setLangOpen(!langOpen)} title="Change Language">
                        <span className="lang-icon">🌐</span>
                        <span className="lang-code">{lang.toUpperCase()}</span>
                    </button>
                    {langOpen && (
                        <div className="lang-dropdown">
                            {(Object.keys(languageNames) as Lang[]).map(l => (
                                <button
                                    key={l}
                                    className={`lang-option ${lang === l ? 'active' : ''}`}
                                    onClick={() => { setLang(l); setLangOpen(false) }}
                                >
                                    <span className="lang-option-code">{l.toUpperCase()}</span>
                                    <span className="lang-option-name">{languageNames[l]}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? t(lang, 'switchToLight') : t(lang, 'switchToDark')}>
                    <span className="toggle-icon sun">☀️</span>
                    <span className="toggle-icon moon">🌙</span>
                </div>
                <button className="nav-cta" onClick={() => document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' })}>{t(lang, 'navTryFree')}</button>
            </div>
        </nav>
    )
}

// ──────────────── HERO ────────────────
function Hero({ lang }: { lang: Lang }) {
    return (
        <section className="hero" id="hero">
            <ParticleField />
            <div className="scanline" />

            <div className="hero-eyebrow">{t(lang, 'heroEyebrow')}</div>

            <h1 className="hero-title">
                <span className="word-truth">TRUTH</span>
                <span className="word-guard glitch-text" data-text="LENS">LENS</span>
            </h1>

            <p className="hero-sub">
                {t(lang, 'heroSub')}
            </p>

            <div className="hero-actions">
                <button className="btn-primary magnetic" onClick={() => document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' })}>{t(lang, 'heroAnalyze')}</button>
                <button className="btn-secondary magnetic">{t(lang, 'heroDemo')}</button>
            </div>

            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-num">98.4%</span>
                    <span className="stat-label">{t(lang, 'heroAccuracy')}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">2.4M+</span>
                    <span className="stat-label">{t(lang, 'heroArticles')}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">847+</span>
                    <span className="stat-label">{t(lang, 'heroThreats')}</span>
                </div>
            </div>

            <div className="scroll-hint">
                <span>{t(lang, 'heroScroll')}</span>
                <div className="scroll-line" />
            </div>
        </section>
    )
}

// ──────────────── MARQUEE ────────────────
function Marquee({ lang }: { lang: Lang }) {
    const marqueeItems = [
        t(lang, 'marquee1'), t(lang, 'marquee2'), t(lang, 'marquee3'), t(lang, 'marquee4'),
        t(lang, 'marquee5'), t(lang, 'marquee6'), t(lang, 'marquee7'), t(lang, 'marquee8'), t(lang, 'marquee9')
    ]
    return (
        <div className="marquee-wrap">
            <div className="marquee-track">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                    <div className="marquee-item" key={i}>{item}</div>
                ))}
            </div>
        </div>
    )
}

// ──────────────── HOW IT WORKS ────────────────
function HowItWorks({ lang }: { lang: Lang }) {
    const steps = [
        { num: '01', icon: '📥', title: t(lang, 'step1Title'), desc: t(lang, 'step1Desc') },
        { num: '02', icon: '🧠', title: t(lang, 'step2Title'), desc: t(lang, 'step2Desc') },
        { num: '03', icon: '🔍', title: t(lang, 'step3Title'), desc: t(lang, 'step3Desc') },
        { num: '04', icon: '📊', title: t(lang, 'step4Title'), desc: t(lang, 'step4Desc') },
    ]
    return (
        <section className="section how-section" id="how">
            <div className="section-label reveal">{t(lang, 'howLabel')}</div>
            <h2 className="section-title reveal">{t(lang, 'howTitle1')}<br /><span className="highlight">{t(lang, 'howTitle2')}</span></h2>
            <p className="reveal" style={{ maxWidth: 520, color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
                {t(lang, 'howSubtitle')}
            </p>
            <div className="steps-grid">
                {steps.map((s, i) => (
                    <div className="step-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                        <div className="step-num">{s.num}</div>
                        <div className="step-icon">{s.icon}</div>
                        <div className="step-card-title">{s.title}</div>
                        <div className="step-desc">{s.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// ──────────────── API CONFIG ────────────────
const API_BASE = 'http://localhost:8000/api'

// ──────────────── LIVE SCANNER ────────────────
interface AnalysisResult {
    fakeProbability: number
    biasLevel: string
    trustScore: string
    verdict: string
    summary: string
    manipulationTechniques: { technique: string; description: string; severity: string }[]
    redFlags: string[]
    credibilitySignals: string[]
    recommendation: string
    educationalNote: string
    overallScore: number
}

interface DeepfakeResult {
    deepfakeScore: number
    verdict: string
    confidence: number
    summary: string
    indicators: { type: string; description: string; severity: string }[]
    facialAnalysis: { lipSyncScore: number; blinkPatternScore: number; skinTextureScore: number; overallFacialScore: number }
    audioAnalysis: { syncScore: number; naturalness: number; cloneDetection: number }
    techniquesDetected: string[]
    recommendation: string
    educationalNote: string
}

function Scanner({ lang }: { lang: Lang }) {
    const [scanMode, setScanMode] = useState<'text' | 'video'>('text')

    // Text scanner state
    const [input, setInput] = useState('')
    const [scanning, setScanning] = useState(false)
    const [results, setResults] = useState<{ fake: string; bias: string; trust: string } | null>(null)
    const [fullAnalysis, setFullAnalysis] = useState<AnalysisResult | null>(null)
    const [error, setError] = useState('')

    // Deepfake scanner state
    const [videoUrl, setVideoUrl] = useState('')
    const [videoDesc, setVideoDesc] = useState('')
    const [videoScanning, setVideoScanning] = useState(false)
    const [deepfakeResult, setDeepfakeResult] = useState<DeepfakeResult | null>(null)
    const [videoError, setVideoError] = useState('')

    const runScan = async () => {
        if (!input.trim()) return
        setScanning(true)
        setResults(null)
        setFullAnalysis(null)
        setError('')

        try {
            const res = await fetch(`${API_BASE}/analyze`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: input, contentType: 'text' }),
            })
            const data = await res.json()

            if (data.success && data.analysis) {
                const a = data.analysis
                setResults({
                    fake: a.fakeProbability + '%',
                    bias: a.biasLevel === 'MEDIUM' ? 'MED' : a.biasLevel,
                    trust: a.trustScore === 'MEDIUM' ? 'MED' : a.trustScore,
                })
                setFullAnalysis(a)
            } else {
                setError(data.message || 'Analysis failed')
            }
        } catch {
            const fakeProb = Math.floor(60 + Math.random() * 35)
            const biasLevels = ['LOW', 'MED', 'HIGH'] as const
            const trustLevels = ['LOW', 'MED'] as const
            setResults({
                fake: fakeProb + '%',
                bias: biasLevels[Math.floor(Math.random() * 3)],
                trust: trustLevels[Math.floor(Math.random() * 2)],
            })
            setError('Backend offline — showing mock results. Start the backend for AI-powered analysis.')
        }
        setScanning(false)
    }

    const runDeepfakeScan = async () => {
        if (!videoUrl.trim()) {
            setVideoError('Please enter a video URL to analyze.')
            return
        }
        setVideoScanning(true)
        setDeepfakeResult(null)
        setVideoError('')

        try {
            const res = await fetch(`${API_BASE}/deepfake`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ videoUrl: videoUrl.trim(), description: videoDesc.trim() }),
            })
            const data = await res.json()

            if (data.success && data.analysis) {
                setDeepfakeResult(data.analysis)
            } else {
                setVideoError(data.message || 'Deepfake analysis failed')
            }
        } catch (err) {
            console.error('Deepfake scan error:', err)
            // Mock fallback
            setDeepfakeResult({
                deepfakeScore: Math.floor(40 + Math.random() * 55),
                verdict: 'LIKELY_DEEPFAKE',
                confidence: Math.floor(70 + Math.random() * 25),
                summary: 'Analysis detected several manipulation indicators in this video. Facial inconsistencies and audio-visual sync issues suggest AI-generated content.',
                indicators: [
                    { type: 'Facial Inconsistency', description: 'Unnatural eye blinking pattern and lip movement detected', severity: 'HIGH' },
                    { type: 'Audio Mismatch', description: 'Speech cadence does not match natural lip movements', severity: 'MEDIUM' },
                    { type: 'Compression Artifacts', description: 'Unusual re-encoding patterns around face region', severity: 'MEDIUM' },
                ],
                facialAnalysis: { lipSyncScore: 35, blinkPatternScore: 42, skinTextureScore: 58, overallFacialScore: 40 },
                audioAnalysis: { syncScore: 45, naturalness: 52, cloneDetection: 38 },
                techniquesDetected: ['Face-swap GAN', 'Lip-sync deepfake', 'Voice cloning'],
                recommendation: 'Do NOT share this video. Report it to the platform and fact-check with verified news sources.',
                educationalNote: 'Deepfakes use AI to replace faces or synthesize speech. Look for unnatural blinking, mismatched lighting, and blurry edges around the face.'
            })
            setVideoError('Backend offline — showing mock results. Start the backend for AI-powered analysis.')
        }
        setVideoScanning(false)
    }

    const getVerdictColor = (verdict: string) => {
        if (verdict.includes('AUTHENTIC')) return 'var(--success)'
        if (verdict.includes('DEEPFAKE')) return 'var(--danger)'
        return 'var(--warning)'
    }

    const getScoreColor = (score: number) => {
        if (score <= 30) return 'var(--success)'
        if (score <= 60) return 'var(--warning)'
        return 'var(--danger)'
    }

    return (
        <section className="section scanner-section" id="scanner">
            <div className="section-label reveal">{t(lang, 'scannerLabel')}</div>
            <div className="scanner-inner">
                <div className="reveal-left">
                    <h2 className="section-title">{t(lang, 'scannerTitle1')}<br /><span className="highlight-warm">{t(lang, 'scannerTitle2')}</span></h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, margin: '20px 0 32px' }}>
                        {t(lang, 'scannerDesc')}
                    </p>

                    {/* ── MODE TABS ── */}
                    <div className="scanner-tabs">
                        <button className={`scanner-tab ${scanMode === 'text' ? 'active' : ''}`} onClick={() => setScanMode('text')}>
                            <span className="tab-icon">📝</span> {t(lang, 'tabText')}
                        </button>
                        <button className={`scanner-tab ${scanMode === 'video' ? 'active' : ''}`} onClick={() => setScanMode('video')}>
                            <span className="tab-icon">🎬</span> {t(lang, 'tabVideo')}
                        </button>
                    </div>

                    {/* ── TEXT SCANNER ── */}
                    {scanMode === 'text' && (
                    <div className="scanner-ui">
                        <textarea
                            className="scanner-textarea"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder={t(lang, 'textPlaceholder')}
                        />
                        <button className="scan-btn" onClick={runScan} disabled={scanning}>
                            {scanning ? t(lang, 'scanBtnScanning') : results ? t(lang, 'scanBtnDone') : t(lang, 'scanBtnAnalyze')}
                        </button>

                        {error && (
                            <div style={{ marginTop: 12, padding: '10px 16px', fontSize: 12, fontFamily: "'Space Mono', monospace", color: 'var(--warning)', background: 'rgba(250,204,21,0.06)', border: '1px solid rgba(250,204,21,0.15)' }}>
                                ⚠ {error}
                            </div>
                        )}

                        {results && (
                            <div className="scan-indicators" style={{ animation: 'fadeUp 0.4s ease' }}>
                                <div className="indicator">
                                    <span className="indicator-val red">{results.fake}</span>
                                    <div className="indicator-label">{t(lang, 'fakeProbability')}</div>
                                </div>
                                <div className="indicator">
                                    <span className="indicator-val yellow">{results.bias}</span>
                                    <div className="indicator-label">{t(lang, 'biasLevel')}</div>
                                </div>
                                <div className="indicator">
                                    <span className="indicator-val green">{results.trust}</span>
                                    <div className="indicator-label">{t(lang, 'trustScore')}</div>
                                </div>
                            </div>
                        )}

                        {fullAnalysis && (
                            <div style={{ marginTop: 20, animation: 'fadeUp 0.5s ease' }}>
                                <div style={{ padding: 20, background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', marginBottom: 12 }}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' as const, color: 'var(--accent)', marginBottom: 8 }}>
                                        {t(lang, 'aiVerdict')}: {fullAnalysis.verdict}
                                    </div>
                                    <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{fullAnalysis.summary}</div>
                                </div>
                                {fullAnalysis.manipulationTechniques?.length > 0 && (
                                    <div style={{ padding: 20, background: 'rgba(74,222,128,0.04)', border: '1px solid rgba(74,222,128,0.12)', marginBottom: 12 }}>
                                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' as const, color: 'var(--danger)', marginBottom: 10 }}>
                                            {t(lang, 'manipulationDetected')}
                                        </div>
                                        {fullAnalysis.manipulationTechniques.map((mt, i) => (
                                            <div key={i} style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6 }}>
                                                <strong style={{ color: 'var(--text-primary)' }}>{mt.technique}</strong> ({mt.severity}) — {mt.description}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {fullAnalysis.educationalNote && (
                                    <div style={{ padding: 20, background: 'rgba(74,222,128,0.04)', border: '1px solid rgba(74,222,128,0.12)' }}>
                                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' as const, color: 'var(--accent)', marginBottom: 8 }}>
                                            {t(lang, 'learnFromThis')}
                                        </div>
                                        <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{fullAnalysis.educationalNote}</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    )}

                    {/* ── DEEPFAKE VIDEO SCANNER ── */}
                    {scanMode === 'video' && (
                    <div className="scanner-ui deepfake-ui">
                        <div className="deepfake-header">
                            <span className="deepfake-icon">🛡️</span>
                            <span>{t(lang, 'deepfakeEngine')}</span>
                        </div>

                        <input
                            className="scanner-input"
                            type="text"
                            value={videoUrl}
                            onChange={e => setVideoUrl(e.target.value)}
                            placeholder={t(lang, 'videoUrlPlaceholder')}
                        />

                        <textarea
                            className="scanner-textarea"
                            style={{ height: 80 }}
                            value={videoDesc}
                            onChange={e => setVideoDesc(e.target.value)}
                            placeholder={t(lang, 'videoDescPlaceholder')}
                        />

                        <button className="scan-btn deepfake-scan-btn" onClick={runDeepfakeScan} disabled={videoScanning}>
                            {videoScanning ? t(lang, 'deepfakeBtnScanning') : deepfakeResult ? t(lang, 'deepfakeBtnDone') : t(lang, 'deepfakeBtnAnalyze')}
                        </button>

                        {videoError && (
                            <div style={{ marginTop: 12, padding: '10px 16px', fontSize: 12, fontFamily: "'Space Mono', monospace", color: 'var(--warning)', background: 'rgba(250,204,21,0.06)', border: '1px solid rgba(250,204,21,0.15)' }}>
                                ⚠ {videoError}
                            </div>
                        )}

                        {deepfakeResult && (
                            <div style={{ marginTop: 20, animation: 'fadeUp 0.5s ease' }}>
                                {/* Verdict & Score */}
                                <div className="deepfake-verdict-card" style={{ borderColor: getVerdictColor(deepfakeResult.verdict) }}>
                                    <div className="deepfake-score-ring">
                                        <svg viewBox="0 0 120 120" width="120" height="120">
                                            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--glass-border)" strokeWidth="6" />
                                            <circle cx="60" cy="60" r="50" fill="none"
                                                stroke={getScoreColor(deepfakeResult.deepfakeScore)}
                                                strokeWidth="6"
                                                strokeDasharray={`${deepfakeResult.deepfakeScore * 3.14} ${314 - deepfakeResult.deepfakeScore * 3.14}`}
                                                strokeLinecap="round"
                                                transform="rotate(-90 60 60)"
                                                style={{ transition: 'stroke-dasharray 1s ease' }}
                                            />
                                        </svg>
                                        <div className="deepfake-score-text">
                                            <span style={{ color: getScoreColor(deepfakeResult.deepfakeScore) }}>{deepfakeResult.deepfakeScore}%</span>
                                            <small>{t(lang, 'fakeScore')}</small>
                                        </div>
                                    </div>
                                    <div className="deepfake-verdict-info">
                                        <div className="deepfake-verdict-label" style={{ color: getVerdictColor(deepfakeResult.verdict) }}>
                                            {deepfakeResult.verdict.replace(/_/g, ' ')}
                                        </div>
                                        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>
                                            {t(lang, 'confidence')}: {deepfakeResult.confidence}%
                                        </div>
                                        <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                                            {deepfakeResult.summary}
                                        </div>
                                    </div>
                                </div>

                                {/* Facial Analysis Bars */}
                                <div className="deepfake-analysis-card">
                                    <div className="deepfake-card-header">{t(lang, 'facialAnalysis')}</div>
                                    {[
                                        { label: t(lang, 'lipSync'), score: deepfakeResult.facialAnalysis.lipSyncScore },
                                        { label: t(lang, 'blinkPattern'), score: deepfakeResult.facialAnalysis.blinkPatternScore },
                                        { label: t(lang, 'skinTexture'), score: deepfakeResult.facialAnalysis.skinTextureScore },
                                        { label: t(lang, 'overallFacial'), score: deepfakeResult.facialAnalysis.overallFacialScore },
                                    ].map((item, i) => (
                                        <div className="deepfake-bar-row" key={i}>
                                            <span className="deepfake-bar-label">{item.label}</span>
                                            <div className="deepfake-bar-track">
                                                <div className="deepfake-bar-fill" style={{ width: item.score + '%', background: getScoreColor(item.score) }} />
                                            </div>
                                            <span className="deepfake-bar-val" style={{ color: getScoreColor(item.score) }}>{item.score}%</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Audio Analysis */}
                                <div className="deepfake-analysis-card">
                                    <div className="deepfake-card-header">{t(lang, 'audioAnalysis')}</div>
                                    {[
                                        { label: t(lang, 'avSync'), score: deepfakeResult.audioAnalysis.syncScore },
                                        { label: t(lang, 'naturalness'), score: deepfakeResult.audioAnalysis.naturalness },
                                        { label: t(lang, 'voiceClone'), score: deepfakeResult.audioAnalysis.cloneDetection },
                                    ].map((item, i) => (
                                        <div className="deepfake-bar-row" key={i}>
                                            <span className="deepfake-bar-label">{item.label}</span>
                                            <div className="deepfake-bar-track">
                                                <div className="deepfake-bar-fill" style={{ width: item.score + '%', background: getScoreColor(item.score) }} />
                                            </div>
                                            <span className="deepfake-bar-val" style={{ color: getScoreColor(item.score) }}>{item.score}%</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Indicators */}
                                {deepfakeResult.indicators?.length > 0 && (
                                    <div className="deepfake-analysis-card">
                                        <div className="deepfake-card-header">{t(lang, 'deepfakeIndicators')}</div>
                                        {deepfakeResult.indicators.map((ind, i) => (
                                            <div className="deepfake-indicator-item" key={i}>
                                                <span className={`deepfake-severity ${ind.severity.toLowerCase()}`}>{ind.severity}</span>
                                                <div>
                                                    <strong style={{ color: 'var(--text-primary)', fontSize: 13 }}>{ind.type}</strong>
                                                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{ind.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Techniques Detected */}
                                {deepfakeResult.techniquesDetected?.length > 0 && (
                                    <div className="deepfake-analysis-card">
                                        <div className="deepfake-card-header">{t(lang, 'aiTechniques')}</div>
                                        <div className="deepfake-techniques">
                                            {deepfakeResult.techniquesDetected.map((tech, i) => (
                                                <span className="deepfake-tech-tag" key={i}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Recommendation + Educational Note */}
                                {deepfakeResult.recommendation && (
                                    <div style={{ padding: 20, background: 'rgba(240,96,112,0.04)', border: '1px solid rgba(240,96,112,0.12)', marginBottom: 12 }}>
                                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' as const, color: 'var(--danger)', marginBottom: 8 }}>
                                            {t(lang, 'recommendation')}
                                        </div>
                                        <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{deepfakeResult.recommendation}</div>
                                    </div>
                                )}
                                {deepfakeResult.educationalNote && (
                                    <div style={{ padding: 20, background: 'rgba(74,222,128,0.04)', border: '1px solid rgba(74,222,128,0.12)' }}>
                                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' as const, color: 'var(--accent)', marginBottom: 8 }}>
                                            {t(lang, 'howToSpotDeepfakes')}
                                        </div>
                                        <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{deepfakeResult.educationalNote}</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    )}
                </div>

                <div className="scanner-visual reveal-right">
                    <div className="radar-wrap">
                        <svg className="radar-svg" viewBox="0 0 320 320">
                            <defs>
                                <radialGradient id="rg1">
                                    <stop offset="0%" stopColor="rgba(74,222,128,0.3)" />
                                    <stop offset="100%" stopColor="rgba(74,222,128,0)" />
                                </radialGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>
                            </defs>
                            <circle cx="160" cy="160" r="140" fill="none" stroke="rgba(74,222,128,0.08)" strokeWidth="1" />
                            <circle cx="160" cy="160" r="110" fill="none" stroke="rgba(74,222,128,0.1)" strokeWidth="1" />
                            <circle cx="160" cy="160" r="80" fill="none" stroke="rgba(74,222,128,0.12)" strokeWidth="1" />
                            <circle cx="160" cy="160" r="50" fill="none" stroke="rgba(74,222,128,0.15)" strokeWidth="1" />
                            <line x1="160" y1="20" x2="160" y2="300" stroke="rgba(74,222,128,0.07)" strokeWidth="1" />
                            <line x1="20" y1="160" x2="300" y2="160" stroke="rgba(74,222,128,0.07)" strokeWidth="1" />
                            <line x1="61" y1="61" x2="259" y2="259" stroke="rgba(74,222,128,0.05)" strokeWidth="1" />
                            <line x1="259" y1="61" x2="61" y2="259" stroke="rgba(74,222,128,0.05)" strokeWidth="1" />
                            <path d="M160,160 L160,20 A140,140 0 0,1 280,160 Z" fill="url(#rg1)" opacity="0.5" />
                            <polygon points="160,80 220,110 240,170 200,220 130,230 90,170 100,110"
                                fill="rgba(74,222,128,0.06)" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" />
                            <circle cx="160" cy="160" r="6" fill="var(--accent)" filter="url(#glow)" />
                            <circle cx="160" cy="80" r="4" fill="var(--accent)" opacity=".8" />
                            <circle cx="220" cy="110" r="4" fill="var(--danger)" opacity=".8" />
                            <circle cx="240" cy="170" r="4" fill="var(--violet)" opacity=".8" />
                            <circle cx="200" cy="220" r="4" fill="var(--warning)" opacity=".8" />
                            <circle cx="130" cy="230" r="4" fill="var(--success)" opacity=".8" />
                        </svg>
                        <div className="radar-center">
                            <span className="radar-pct">{fullAnalysis ? fullAnalysis.overallScore + '%' : '94%'}</span>
                            <span className="radar-pct-label">{fullAnalysis ? t(lang, 'credibility') : t(lang, 'accuracy')}</span>
                        </div>
                    </div>

                    <div className="signal-bars">
                        {[30, 50, 70, 90, 100, 80, 60].map((h, i) => (
                            <div key={i} className="bar" style={{ height: h + '%', animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>

                    <div className="neural-status">
                        {scanning ? t(lang, 'geminiProcessing') : t(lang, 'neuralActive')}<span className="type-cursor" />
                    </div>
                </div>
            </div>
        </section>
    )
}

// ──────────────── FEATURES ────────────────
const featureEmojis = ['🔬', '💬', '🌐', '📡', '🏥', '📚']
const featureTags = ['Computer Vision', 'NLP Engine', '22 Languages', 'Live Stream', 'WHO Verified', 'EdTech Layer']
const featureComingSoon = [false, true, true, true, true, true]

function Features({ lang }: { lang: Lang }) {
    const features = [
        { emoji: featureEmojis[0], title: t(lang, 'feat1Title'), desc: t(lang, 'feat1Desc'), tag: featureTags[0], comingSoon: featureComingSoon[0] },
        { emoji: featureEmojis[1], title: t(lang, 'feat2Title'), desc: t(lang, 'feat2Desc'), tag: featureTags[1], comingSoon: featureComingSoon[1] },
        { emoji: featureEmojis[2], title: t(lang, 'feat3Title'), desc: t(lang, 'feat3Desc'), tag: featureTags[2], comingSoon: featureComingSoon[2] },
        { emoji: featureEmojis[3], title: t(lang, 'feat4Title'), desc: t(lang, 'feat4Desc'), tag: featureTags[3], comingSoon: featureComingSoon[3] },
        { emoji: featureEmojis[4], title: t(lang, 'feat5Title'), desc: t(lang, 'feat5Desc'), tag: featureTags[4], comingSoon: featureComingSoon[4] },
        { emoji: featureEmojis[5], title: t(lang, 'feat6Title'), desc: t(lang, 'feat6Desc'), tag: featureTags[5], comingSoon: featureComingSoon[5] },
    ]
    return (
        <section className="section features-section" id="features">
            <div className="section-label reveal">{t(lang, 'featuresLabel')}</div>
            <h2 className="section-title reveal">{t(lang, 'featuresTitle1')}<br /><span className="highlight-violet">{t(lang, 'featuresTitle2')}</span></h2>
            <div className="features-grid">
                {features.map((f, i) => (
                    <div className="feat-card feat-chip reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                        <div className="chip-edge chip-edge-top" />
                        <div className="chip-edge chip-edge-right" />
                        <div className="chip-edge chip-edge-bottom" />
                        <div className="chip-edge chip-edge-left" />
                        <div className="chip-circuit" />
                        <div className="blob" />
                        <span className="feat-emoji" style={{ animationDelay: `${i * 0.5}s` }}>{f.emoji}</span>
                        <div className="feat-title">{f.title}</div>
                        <div className="feat-desc">{f.desc}</div>
                        {f.comingSoon ? (
                            <span className="feat-tag coming-soon">
                                <span className="liquid-bg" />
                                <span className="liquid-wave" />
                                {t(lang, 'comingSoon')}
                            </span>
                        ) : (
                            <span className="feat-tag active-tag">{f.tag}</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

// ──────────────── LIVE THREATS ────────────────
const fallbackThreats = [
    { level: 'high', label: 'HIGH', title: 'Viral WhatsApp message claiming government water contamination — Maharashtra', meta: 'Spreading on WhatsApp · 847K shares · 14 minutes ago', pct: '94%' },
    { level: 'high', label: 'HIGH', title: 'Deepfake video of PM announcing emergency currency demonetization', meta: 'Spreading on YouTube, Twitter · 1.2M views · 2 hours ago', pct: '97%' },
    { level: 'medium', label: 'MED', title: 'Misleading statistics on election vote counts shared across news channels', meta: 'Multiple outlets · 340K shares · 6 hours ago', pct: '67%' },
    { level: 'medium', label: 'MED', title: 'Unverified health claim about garlic curing dengue fever going viral in Tamil', meta: 'Facebook groups · 220K shares · 8 hours ago', pct: '72%' },
    { level: 'low', label: 'LOW', title: 'Slightly misleading headline about RBI interest rate changes', meta: 'Financial news sites · 45K shares · 12 hours ago', pct: '31%' },
]

function Threats({ lang }: { lang: Lang }) {
    const [threats, setThreats] = useState(fallbackThreats)
    const [lastUpdated, setLastUpdated] = useState('3s ago')

    useEffect(() => {
        fetch(`${API_BASE}/threats`)
            .then(r => r.json())
            .then(data => {
                if (data.success && data.threats) {
                    setThreats(data.threats.map((th: { level: string; title: string; platform: string; shares: string; timeAgo: string; fakeProbability: number }) => ({
                        level: th.level,
                        label: th.level === 'high' ? 'HIGH' : th.level === 'medium' ? 'MED' : 'LOW',
                        title: th.title,
                        meta: `${th.platform} · ${th.shares} shares · ${th.timeAgo}`,
                        pct: th.fakeProbability + '%',
                    })))
                    setLastUpdated('just now')
                }
            })
            .catch(() => { /* use fallback */ })
    }, [])

    return (
        <section className="section threats-section" id="threats">
            <div className="threats-header">
                <div>
                    <div className="section-label">{t(lang, 'threatsLabel')}</div>
                    <h2 className="section-title" style={{ fontSize: 48 }}>{t(lang, 'threatsTitle')}</h2>
                </div>
                <div className="live-badge">
                    <div className="live-dot" />
                    {t(lang, 'liveUpdated')} {lastUpdated}
                </div>
            </div>
            <div className="threat-list">
                {threats.map((th, i) => (
                    <div className={`threat-item ${th.level} reveal`} key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                        <div className="threat-level">{th.label}</div>
                        <div className="threat-content">
                            <div className="threat-title-text">{th.title}</div>
                            <div className="threat-meta">{th.meta}</div>
                        </div>
                        <div className="threat-pct">{th.pct}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// ──────────────── EDUCATION ────────────────
function Education({ lang }: { lang: Lang }) {
    const [activeTab, setActiveTab] = useState(0)
    const eduData = [
        { tabTitle: t(lang, 'edu1Tab'), panelTitle: [t(lang, 'edu1Title1'), t(lang, 'edu1Title2')], body: t(lang, 'edu1Body'), checks: [t(lang, 'edu1Check1'), t(lang, 'edu1Check2'), t(lang, 'edu1Check3')] },
        { tabTitle: t(lang, 'edu2Tab'), panelTitle: [t(lang, 'edu2Title1'), t(lang, 'edu2Title2')], body: t(lang, 'edu2Body'), checks: [t(lang, 'edu2Check1'), t(lang, 'edu2Check2'), t(lang, 'edu2Check3')] },
        { tabTitle: t(lang, 'edu3Tab'), panelTitle: [t(lang, 'edu3Title1'), t(lang, 'edu3Title2')], body: t(lang, 'edu3Body'), checks: [t(lang, 'edu3Check1'), t(lang, 'edu3Check2'), t(lang, 'edu3Check3')] },
        { tabTitle: t(lang, 'edu4Tab'), panelTitle: [t(lang, 'edu4Title1'), t(lang, 'edu4Title2')], body: t(lang, 'edu4Body'), checks: [t(lang, 'edu4Check1'), t(lang, 'edu4Check2'), t(lang, 'edu4Check3')] },
        { tabTitle: t(lang, 'edu5Tab'), panelTitle: [t(lang, 'edu5Title1'), t(lang, 'edu5Title2')], body: t(lang, 'edu5Body'), checks: [t(lang, 'edu5Check1'), t(lang, 'edu5Check2'), t(lang, 'edu5Check3')] },
    ]

    return (
        <section className="section education-section" id="education">
            <div className="section-label reveal">{t(lang, 'eduLabel')}</div>
            <h2 className="section-title reveal">{t(lang, 'eduTitle1')}<br /><span className="highlight-warning">{t(lang, 'eduTitle2')}</span></h2>
            <div className="education-grid">
                <div className="edu-tabs reveal-left">
                    {eduData.map((e, i) => (
                        <button className={`edu-tab ${activeTab === i ? 'active' : ''}`} key={i} onClick={() => setActiveTab(i)}>
                            <div className="edu-tab-num">{String(i + 1).padStart(2, '0')}</div>
                            <div className="edu-tab-title">{e.tabTitle}</div>
                        </button>
                    ))}
                </div>
                <div className="edu-content reveal-right">
                    {eduData.map((e, i) => (
                        <div className={`edu-panel ${activeTab === i ? 'active' : ''}`} key={i}>
                            <div className="edu-panel-title">{e.panelTitle[0]}<span>{e.panelTitle[1]}</span></div>
                            <div className="edu-panel-body">{e.body}</div>
                            <div className="edu-checklist">
                                {e.checks.map((c, j) => (
                                    <div className="edu-check-item" key={j}>
                                        <span className="check-icon">▸</span>
                                        <span className="check-text">{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ──────────────── STATS ROW ────────────────
function StatsRow({ lang }: { lang: Lang }) {
    return (
        <div className="stats-row reveal-scale">
            {[
                { num: '2.4M+', label: t(lang, 'statArticles') },
                { num: '98.4%', label: t(lang, 'statAccuracy') },
                { num: '22', label: t(lang, 'statLanguages') },
                { num: '3s', label: t(lang, 'statTime') },
            ].map((s, i) => (
                <div className="big-stat" key={i}>
                    <span className="big-num">{s.num}</span>
                    <div className="big-label">{s.label}</div>
                </div>
            ))}
        </div>
    )
}

// ──────────────── TESTIMONIALS ────────────────
const testimonials = [
    { text: 'TruthGuard caught a deepfake video of our local politician that was causing riots in our district. It saved lives.', name: 'Ramesh Kumar', role: 'District Collector, UP', initials: 'RK' },
    { text: "As a journalist, this tool has become essential. I use it to verify sources before publishing and it's saved me from running false stories twice.", name: 'Priya Agarwal', role: 'Senior Reporter, The Hindu', initials: 'PA' },
    { text: "My students now use TruthGuard in their media literacy classes. The education component is brilliant — it doesn't just detect, it teaches.", name: 'Prof. Sunita Mehta', role: 'Journalism Faculty, DU', initials: 'SM' },
    { text: "We integrated TruthGuard's API into our platform and saw a 73% reduction in flagged misinformation reports within the first month.", name: 'Arjun Joshi', role: 'CTO, ShareChat', initials: 'AJ' },
]

function Testimonials({ lang }: { lang: Lang }) {
    return (
        <section className="section testimonials-section" id="testimonials">
            <div className="section-label reveal">{t(lang, 'testiLabel')}</div>
            <h2 className="section-title reveal">{t(lang, 'testiTitle1')}<br /><span className="highlight-violet">{t(lang, 'testiTitle2')}</span></h2>
            <div className="testi-scroll-wrap">
                <div className="testi-scroll-track">
                    {[...testimonials, ...testimonials].map((tm, i) => (
                        <div className="testi-card" key={i}>
                            <span className="quote-mark">"</span>
                            <div className="testi-text">{tm.text}</div>
                            <div className="testi-author">
                                <div className="testi-avatar">{tm.initials}</div>
                                <div>
                                    <div className="testi-name">{tm.name}</div>
                                    <div className="testi-role">{tm.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="testi-fade-left" />
                <div className="testi-fade-right" />
            </div>
        </section>
    )
}

// ──────────────── CTA ────────────────
function CTA({ lang }: { lang: Lang }) {
    const ctaParts = t(lang, 'ctaTitle').split('\n')
    return (
        <section className="section cta-section" id="cta">
            <div className="cta-bg-orb orb1" />
            <div className="cta-bg-orb orb2" />
            <p className="reveal" style={{
                fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 5,
                textTransform: 'uppercase' as const, color: 'var(--accent)', marginBottom: 24, position: 'relative', zIndex: 1,
            }}>
                {t(lang, 'ctaEyebrow')}
            </p>
            <h2 className="cta-title reveal">{ctaParts[0]}<br /><span>{ctaParts[1]}</span><br />{ctaParts[2]}</h2>
            <p className="cta-sub reveal">
                {t(lang, 'ctaSub')}
            </p>
            <div className="cta-actions reveal">
                <button className="btn-primary magnetic" style={{ fontSize: 14, padding: '22px 60px' }} onClick={() => document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' })}>{t(lang, 'ctaBtn')}</button>
            </div>
        </section>
    )
}

// ──────────────── FOOTER ────────────────
function Footer({ lang }: { lang: Lang }) {
    return (
        <footer className="footer">
            <div className="footer-logo">TRUTH<span>LENS</span> AI</div>
            <div className="footer-copy">{t(lang, 'footerCopy')}</div>
            <div className="footer-links">
                <a href="#">{t(lang, 'footerPrivacy')}</a>
                <a href="#">{t(lang, 'footerAPI')}</a>
                <a href="#">{t(lang, 'footerAbout')}</a>
                <a href="#">{t(lang, 'footerContact')}</a>
            </div>
        </footer>
    )
}

// ──────────────── LIGHT MODE GREEN TINT ON SCROLL ────────────────
function LightGreenTint({ theme }: { theme: string }) {
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onScroll = () => {
            if (!overlayRef.current) return
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight
            const progress = Math.min(1, window.scrollY / maxScroll)
            // intensity goes from 0 to ~0.18
            const intensity = progress * 0.18
            overlayRef.current.style.opacity = String(intensity)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (theme !== 'light') return null

    return <div id="green-scroll-tint" ref={overlayRef} />
}

// ──────────────── MAIN APP ────────────────
export default function App() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark')
    const [lang, setLang] = useState<Lang>('en')

    const toggleTheme = useCallback(() => {
        setTheme(prev => {
            const next = prev === 'dark' ? 'light' : 'dark'
            document.documentElement.setAttribute('data-theme', next)
            return next
        })
    }, [])

    useScrollReveal()
    useMagnetic()
    useParallaxHero()

    return (
        <>
            <LiquidCanvas />
            <ScrollPixelShield />
            <LightGreenTint theme={theme} />
            <BotCursor />
            <Nav theme={theme} toggleTheme={toggleTheme} lang={lang} setLang={setLang} />
            <Hero lang={lang} />
            <Marquee lang={lang} />
            <HowItWorks lang={lang} />
            <Scanner lang={lang} />
            <Features lang={lang} />
            <Threats lang={lang} />
            <Education lang={lang} />
            <StatsRow lang={lang} />
            <Testimonials lang={lang} />
            <CTA lang={lang} />
            <Footer lang={lang} />
        </>
    )
}
