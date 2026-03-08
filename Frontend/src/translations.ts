// ──────────────── MULTI-LANGUAGE TRANSLATIONS ────────────────
// Supported: English, Hindi, Tamil, Telugu, Bengali, Marathi

export type Lang = 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr'

export const languageNames: Record<Lang, string> = {
    en: 'English',
    hi: 'हिन्दी',
    ta: 'தமிழ்',
    te: 'తెలుగు',
    bn: 'বাংলা',
    mr: 'मराठी',
}

export const languageFlags: Record<Lang, string> = {
    en: '🇬🇧',
    hi: '🇮🇳',
    ta: '🇮🇳',
    te: '🇮🇳',
    bn: '🇮🇳',
    mr: '🇮🇳',
}

type TranslationKeys = {
    // Nav
    navHow: string
    navScanner: string
    navFeatures: string
    navLearn: string
    navTryFree: string
    switchToLight: string
    switchToDark: string

    // Hero
    heroEyebrow: string
    heroSub: string
    heroAnalyze: string
    heroDemo: string
    heroAccuracy: string
    heroArticles: string
    heroThreats: string
    heroScroll: string

    // Marquee
    marquee1: string
    marquee2: string
    marquee3: string
    marquee4: string
    marquee5: string
    marquee6: string
    marquee7: string
    marquee8: string
    marquee9: string

    // How It Works
    howLabel: string
    howTitle1: string
    howTitle2: string
    howSubtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string

    // Scanner
    scannerLabel: string
    scannerTitle1: string
    scannerTitle2: string
    scannerDesc: string
    tabText: string
    tabVideo: string
    textPlaceholder: string
    scanBtnAnalyze: string
    scanBtnScanning: string
    scanBtnDone: string
    fakeProbability: string
    biasLevel: string
    trustScore: string
    aiVerdict: string
    manipulationDetected: string
    learnFromThis: string
    deepfakeEngine: string
    videoUrlPlaceholder: string
    videoDescPlaceholder: string
    deepfakeBtnAnalyze: string
    deepfakeBtnScanning: string
    deepfakeBtnDone: string
    fakeScore: string
    confidence: string
    facialAnalysis: string
    lipSync: string
    blinkPattern: string
    skinTexture: string
    overallFacial: string
    audioAnalysis: string
    avSync: string
    naturalness: string
    voiceClone: string
    deepfakeIndicators: string
    aiTechniques: string
    recommendation: string
    howToSpotDeepfakes: string
    credibility: string
    accuracy: string
    neuralActive: string
    geminiProcessing: string

    // Features
    featuresLabel: string
    featuresTitle1: string
    featuresTitle2: string
    comingSoon: string
    feat1Title: string
    feat1Desc: string
    feat2Title: string
    feat2Desc: string
    feat3Title: string
    feat3Desc: string
    feat4Title: string
    feat4Desc: string
    feat5Title: string
    feat5Desc: string
    feat6Title: string
    feat6Desc: string

    // Threats
    threatsLabel: string
    threatsTitle: string
    liveUpdated: string

    // Education
    eduLabel: string
    eduTitle1: string
    eduTitle2: string
    edu1Tab: string
    edu1Title1: string
    edu1Title2: string
    edu1Body: string
    edu1Check1: string
    edu1Check2: string
    edu1Check3: string
    edu2Tab: string
    edu2Title1: string
    edu2Title2: string
    edu2Body: string
    edu2Check1: string
    edu2Check2: string
    edu2Check3: string
    edu3Tab: string
    edu3Title1: string
    edu3Title2: string
    edu3Body: string
    edu3Check1: string
    edu3Check2: string
    edu3Check3: string
    edu4Tab: string
    edu4Title1: string
    edu4Title2: string
    edu4Body: string
    edu4Check1: string
    edu4Check2: string
    edu4Check3: string
    edu5Tab: string
    edu5Title1: string
    edu5Title2: string
    edu5Body: string
    edu5Check1: string
    edu5Check2: string
    edu5Check3: string

    // Stats
    statArticles: string
    statAccuracy: string
    statLanguages: string
    statTime: string

    // Testimonials
    testiLabel: string
    testiTitle1: string
    testiTitle2: string

    // CTA
    ctaEyebrow: string
    ctaTitle: string
    ctaSub: string
    ctaBtn: string

    // Footer
    footerCopy: string
    footerPrivacy: string
    footerAPI: string
    footerAbout: string
    footerContact: string
}

const en: TranslationKeys = {
    // Nav
    navHow: 'How It Works',
    navScanner: 'Scanner',
    navFeatures: 'Features',
    navLearn: 'Learn',
    navTryFree: 'Try Free',
    switchToLight: 'Switch to Light',
    switchToDark: 'Switch to Dark',

    // Hero
    heroEyebrow: 'AI-Powered Misinformation Detection',
    heroSub: 'Real-time detection of fake news & misinformation across social media and messaging platforms. Protecting India\'s digital citizens with AI that never sleeps.',
    heroAnalyze: 'Analyze Content',
    heroDemo: 'Watch Demo',
    heroAccuracy: 'Accuracy Rate',
    heroArticles: 'Articles Scanned',
    heroThreats: 'Threats Blocked Today',
    heroScroll: 'SCROLL',

    // Marquee
    marquee1: 'Fake News Detection',
    marquee2: 'Source Verification',
    marquee3: 'Deepfake Analysis',
    marquee4: 'Sentiment Bias Detection',
    marquee5: 'Credibility Scoring',
    marquee6: 'Real-time Alerts',
    marquee7: 'Manipulated Media',
    marquee8: 'Health Misinformation',
    marquee9: 'Financial Scam Detection',

    // How It Works
    howLabel: 'Process',
    howTitle1: 'HOW IT',
    howTitle2: 'WORKS',
    howSubtitle: 'Four intelligent steps transform any suspicious content into a verified truth score in under 3 seconds.',
    step1Title: 'Content Ingestion',
    step1Desc: 'Paste URLs, text, images, or videos. Our multimodal AI pipeline processes all formats simultaneously — including Hindi, Tamil, Telugu, and 12 regional languages.',
    step2Title: 'Neural Analysis',
    step2Desc: 'Our transformer-based model cross-references 47 credibility signals — tone, source history, claim consistency, image metadata, and linguistic manipulation patterns.',
    step3Title: 'Source Mapping',
    step3Desc: 'Traces claims to original sources using our curated knowledge graph of 2.8M verified facts from 12,000 trusted outlets and government databases.',
    step4Title: 'Truth Score',
    step4Desc: 'Delivers a 0–100 credibility score with category breakdown, manipulation technique identification, and an educational explainer for media literacy.',

    // Scanner
    scannerLabel: 'Live Demo',
    scannerTitle1: 'SCAN ANY',
    scannerTitle2: 'CONTENT',
    scannerDesc: 'Paste any news headline, social media post, WhatsApp message, or video link and get an instant AI-powered analysis.',
    tabText: 'Text Analysis',
    tabVideo: 'Deepfake Video Checker',
    textPlaceholder: 'Paste suspicious content here...\n\ne.g. "Government bans all online payments from midnight tonight — forward to your contacts!"',
    scanBtnAnalyze: '⟶  Analyze for Misinformation',
    scanBtnScanning: '⟳  Gemini AI Analyzing...',
    scanBtnDone: '✓  Analysis Complete — Scan Again',
    fakeProbability: 'Fake Probability',
    biasLevel: 'Bias Level',
    trustScore: 'Trust Score',
    aiVerdict: 'AI VERDICT',
    manipulationDetected: '⚡ Manipulation Techniques Detected',
    learnFromThis: '📚 Learn from this',
    deepfakeEngine: 'DEEPFAKE DETECTION ENGINE',
    videoUrlPlaceholder: 'Paste video URL (YouTube, Twitter/X, Instagram, Facebook...)',
    videoDescPlaceholder: 'Optional: Describe the video content (who appears, what is said, context)...',
    deepfakeBtnAnalyze: '🎬  Analyze Video for Deepfake',
    deepfakeBtnScanning: '⟳  Analyzing Video for Deepfakes...',
    deepfakeBtnDone: '✓  Analysis Complete — Scan Again',
    fakeScore: 'Fake Score',
    confidence: 'Confidence',
    facialAnalysis: '👤 Facial Analysis',
    lipSync: 'Lip Sync',
    blinkPattern: 'Blink Pattern',
    skinTexture: 'Skin Texture',
    overallFacial: 'Overall Facial',
    audioAnalysis: '🔊 Audio Analysis',
    avSync: 'AV Sync',
    naturalness: 'Naturalness',
    voiceClone: 'Voice Clone',
    deepfakeIndicators: '⚠️ Deepfake Indicators',
    aiTechniques: '🤖 AI Techniques Detected',
    recommendation: '🚨 Recommendation',
    howToSpotDeepfakes: '📚 How to Spot Deepfakes',
    credibility: 'Credibility',
    accuracy: 'Accuracy',
    neuralActive: 'NEURAL NETWORK ACTIVE',
    geminiProcessing: 'GEMINI AI PROCESSING',

    // Features
    featuresLabel: 'Capabilities',
    featuresTitle1: 'BUILT TO',
    featuresTitle2: 'PROTECT',
    comingSoon: 'Coming Soon',
    feat1Title: 'Deepfake Video Analysis',
    feat1Desc: 'Frame-by-frame forensic analysis detects AI-generated or manipulated video content using facial inconsistency models and metadata examination.',
    feat2Title: 'WhatsApp Message Scanner',
    feat2Desc: 'Directly paste forwarded messages from WhatsApp and Telegram. Detects emotionally manipulative language patterns common in viral misinformation chains.',
    feat3Title: 'Multilingual Indian Language Support',
    feat3Desc: 'Full analysis in Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati, Malayalam, Odia, Punjabi, Urdu, and Assamese.',
    feat4Title: 'Real-time Social Media Monitoring',
    feat4Desc: 'Continuous scanning of Twitter/X, Facebook, YouTube, and Instagram for trending misinformation clusters before they go viral.',
    feat5Title: 'Health Misinformation Shield',
    feat5Desc: 'Specialized detection for medical misinformation — unproven treatments, false vaccine claims, and quackery targeting vulnerable populations.',
    feat6Title: 'Media Literacy Education Engine',
    feat6Desc: 'Every scan comes with a detailed explainer teaching users HOW the content was manipulative — building long-term critical thinking skills.',

    // Threats
    threatsLabel: 'Live Feed',
    threatsTitle: 'ACTIVE THREATS',
    liveUpdated: 'LIVE · Updated',

    // Education
    eduLabel: 'Media Literacy',
    eduTitle1: 'SPOT THE',
    eduTitle2: 'LIE',
    edu1Tab: 'Emotional Manipulation',
    edu1Title1: 'EMOTIONAL ',
    edu1Title2: 'MANIPULATION',
    edu1Body: 'Misinformation thrives on triggering fear, anger, and outrage because emotional states reduce critical thinking. Manipulative content deliberately uses hyperbolic language and worst-case framing.',
    edu1Check1: 'Look for all-caps words, excessive exclamation marks, and urgent "share before it\'s deleted" calls to action',
    edu1Check2: 'Pause before sharing anything that makes you feel a sudden surge of fear or outrage — that feeling is the weapon',
    edu1Check3: 'Ask: "If this were true, would I have heard about it from a verified source first?"',
    edu2Tab: 'Source Spoofing',
    edu2Title1: 'SOURCE ',
    edu2Title2: 'SPOOFING',
    edu2Body: 'Fake news sites mimic legitimate outlets using similar names, logos, and formatting. URLs like "ndtv-live.net" or "abcnewslive24.com" are designed to deceive at a glance.',
    edu2Check1: 'Always check the full URL — look for misspellings or extra words like "-live", "-real", "-today"',
    edu2Check2: 'Verify the story exists on the outlet\'s official verified social media profiles',
    edu2Check3: 'Use TruthGuard\'s source database to instantly check a domain\'s credibility history',
    edu3Tab: 'Out-of-Context Imagery',
    edu3Title1: 'OUT-OF-CONTEXT ',
    edu3Title2: 'IMAGERY',
    edu3Body: 'Real photos from old events, different countries, or unrelated incidents are often repurposed with false captions to "prove" a fabricated narrative. This is the most common technique in India.',
    edu3Check1: 'Reverse image search any viral photo using Google Images or TinEye before sharing',
    edu3Check2: 'Check image metadata — creation date and location can expose old or foreign images',
    edu3Check3: 'TruthGuard automatically performs reverse search and metadata analysis on every image upload',
    edu4Tab: 'Statistical Deception',
    edu4Title1: 'STATISTICAL ',
    edu4Title2: 'DECEPTION',
    edu4Body: 'Real data can be weaponized through cherry-picking, misleading graphs, omitting baselines, and framing correlations as causation. Even accurate numbers can tell dangerous lies.',
    edu4Check1: 'Always ask "compared to what?" — percentages without baselines are meaningless',
    edu4Check2: 'Check if charts start at zero — truncated axes make small differences look massive',
    edu4Check3: 'Find the original study or government report — summaries are often selectively quoted',
    edu5Tab: 'Astroturfing',
    edu5Title1: 'ASTRO',
    edu5Title2: 'TURFING',
    edu5Body: 'Bot networks and coordinated fake accounts manufacture the illusion of public consensus. When thousands of accounts suddenly post identical content, it\'s often an organized disinformation campaign.',
    edu5Check1: 'Check account ages and post histories — recently created accounts with no personal content are red flags',
    edu5Check2: 'Identical phrasing across many accounts indicates coordinated inauthentic behavior',
    edu5Check3: 'Trending ≠ True. Popularity is manufactured — always verify with independent sources',

    // Stats
    statArticles: 'Articles Analyzed',
    statAccuracy: 'Detection Accuracy',
    statLanguages: 'Indian Languages',
    statTime: 'Avg Analysis Time',

    // Testimonials
    testiLabel: 'Impact',
    testiTitle1: 'TRUSTED BY',
    testiTitle2: 'THOUSANDS',

    // CTA
    ctaEyebrow: 'Join the fight against fake news',
    ctaTitle: 'DEFEND\nTRUTH\nTOGETHER',
    ctaSub: 'Free for individuals. Join 180,000 Indians who already use TruthGuard to fight misinformation every day.',
    ctaBtn: 'Get Started Free',

    // Footer
    footerCopy: '© 2025 TruthGuard. Built in India. Fighting for truth.',
    footerPrivacy: 'Privacy',
    footerAPI: 'API',
    footerAbout: 'About',
    footerContact: 'Contact',
}

const hi: TranslationKeys = {
    // Nav
    navHow: 'कैसे काम करता है',
    navScanner: 'स्कैनर',
    navFeatures: 'विशेषताएँ',
    navLearn: 'सीखें',
    navTryFree: 'मुफ़्त शुरू करें',
    switchToLight: 'लाइट मोड',
    switchToDark: 'डार्क मोड',

    // Hero
    heroEyebrow: 'AI संचालित गलत सूचना पहचान',
    heroSub: 'सोशल मीडिया और मैसेजिंग प्लेटफॉर्म पर फेक न्यूज़ और गलत सूचना की रीयल-टाइम पहचान। भारत के डिजिटल नागरिकों की सुरक्षा करने वाली AI जो कभी नहीं सोती।',
    heroAnalyze: 'सामग्री विश्लेषण',
    heroDemo: 'डेमो देखें',
    heroAccuracy: 'सटीकता दर',
    heroArticles: 'स्कैन किए गए लेख',
    heroThreats: 'आज ब्लॉक किए गए खतरे',
    heroScroll: 'स्क्रॉल',

    // Marquee
    marquee1: 'फेक न्यूज़ पहचान',
    marquee2: 'स्रोत सत्यापन',
    marquee3: 'डीपफेक विश्लेषण',
    marquee4: 'भावनात्मक पूर्वाग्रह पहचान',
    marquee5: 'विश्वसनीयता स्कोरिंग',
    marquee6: 'रीयल-टाइम अलर्ट',
    marquee7: 'हेरफेर किया गया मीडिया',
    marquee8: 'स्वास्थ्य गलत सूचना',
    marquee9: 'वित्तीय धोखाधड़ी पहचान',

    // How It Works
    howLabel: 'प्रक्रिया',
    howTitle1: 'यह कैसे',
    howTitle2: 'काम करता है',
    howSubtitle: 'चार बुद्धिमान चरण किसी भी संदिग्ध सामग्री को 3 सेकंड में सत्यापित सत्य स्कोर में बदल देते हैं।',
    step1Title: 'सामग्री ग्रहण',
    step1Desc: 'URL, टेक्स्ट, इमेज या वीडियो पेस्ट करें। हमारी AI पाइपलाइन सभी फॉर्मेट को एक साथ प्रोसेस करती है — हिंदी, तमिल, तेलुगु और 12 क्षेत्रीय भाषाओं सहित।',
    step2Title: 'न्यूरल विश्लेषण',
    step2Desc: 'हमारा ट्रांसफॉर्मर-आधारित मॉडल 47 विश्वसनीयता संकेतों की जांच करता है — टोन, स्रोत इतिहास, दावा संगतता, इमेज मेटाडेटा और भाषाई हेरफेर पैटर्न।',
    step3Title: 'स्रोत मैपिंग',
    step3Desc: '12,000 विश्वसनीय आउटलेट्स और सरकारी डेटाबेस से 28 लाख सत्यापित तथ्यों के ज्ञान ग्राफ का उपयोग करके दावों का मूल स्रोत ट्रेस करता है।',
    step4Title: 'सत्य स्कोर',
    step4Desc: '0-100 विश्वसनीयता स्कोर प्रदान करता है जिसमें श्रेणी विभाजन, हेरफेर तकनीक पहचान और मीडिया साक्षरता के लिए शैक्षिक व्याख्या शामिल है।',

    // Scanner
    scannerLabel: 'लाइव डेमो',
    scannerTitle1: 'कोई भी',
    scannerTitle2: 'सामग्री स्कैन करें',
    scannerDesc: 'कोई भी समाचार शीर्षक, सोशल मीडिया पोस्ट, व्हाट्सएप संदेश या वीडियो लिंक पेस्ट करें और तुरंत AI-संचालित विश्लेषण प्राप्त करें।',
    tabText: 'टेक्स्ट विश्लेषण',
    tabVideo: 'डीपफेक वीडियो चेकर',
    textPlaceholder: 'संदिग्ध सामग्री यहाँ पेस्ट करें...\n\nउदा. "सरकार ने आज रात 12 बजे से सभी ऑनलाइन भुगतान बंद कर दिए — अपने संपर्कों को फॉरवर्ड करें!"',
    scanBtnAnalyze: '⟶  गलत सूचना के लिए विश्लेषण करें',
    scanBtnScanning: '⟳  Gemini AI विश्लेषण कर रहा है...',
    scanBtnDone: '✓  विश्लेषण पूरा — फिर से स्कैन करें',
    fakeProbability: 'फेक संभावना',
    biasLevel: 'पूर्वाग्रह स्तर',
    trustScore: 'विश्वास स्कोर',
    aiVerdict: 'AI निर्णय',
    manipulationDetected: '⚡ हेरफेर तकनीकें पाई गईं',
    learnFromThis: '📚 इससे सीखें',
    deepfakeEngine: 'डीपफेक पहचान इंजन',
    videoUrlPlaceholder: 'वीडियो URL पेस्ट करें (YouTube, Twitter/X, Instagram, Facebook...)',
    videoDescPlaceholder: 'वैकल्पिक: वीडियो सामग्री का वर्णन करें (कौन दिखाई देता है, क्या कहा गया, संदर्भ)...',
    deepfakeBtnAnalyze: '🎬  डीपफेक के लिए वीडियो विश्लेषण करें',
    deepfakeBtnScanning: '⟳  डीपफेक के लिए वीडियो विश्लेषण हो रहा है...',
    deepfakeBtnDone: '✓  विश्लेषण पूरा — फिर से स्कैन करें',
    fakeScore: 'फेक स्कोर',
    confidence: 'विश्वास',
    facialAnalysis: '👤 चेहरा विश्लेषण',
    lipSync: 'लिप सिंक',
    blinkPattern: 'ब्लिंक पैटर्न',
    skinTexture: 'त्वचा बनावट',
    overallFacial: 'कुल चेहरा',
    audioAnalysis: '🔊 ऑडियो विश्लेषण',
    avSync: 'AV सिंक',
    naturalness: 'स्वाभाविकता',
    voiceClone: 'वॉइस क्लोन',
    deepfakeIndicators: '⚠️ डीपफेक संकेतक',
    aiTechniques: '🤖 AI तकनीकें पाई गईं',
    recommendation: '🚨 सिफारिश',
    howToSpotDeepfakes: '📚 डीपफेक कैसे पहचानें',
    credibility: 'विश्वसनीयता',
    accuracy: 'सटीकता',
    neuralActive: 'न्यूरल नेटवर्क सक्रिय',
    geminiProcessing: 'GEMINI AI प्रोसेसिंग',

    // Features
    featuresLabel: 'क्षमताएँ',
    featuresTitle1: 'सुरक्षा के',
    featuresTitle2: 'लिए बना',
    comingSoon: 'जल्द आ रहा है',
    feat1Title: 'डीपफेक वीडियो विश्लेषण',
    feat1Desc: 'फ्रेम-दर-फ्रेम फोरेंसिक विश्लेषण AI-जनित या हेरफेर किए गए वीडियो सामग्री का चेहरे की असंगतता मॉडल और मेटाडेटा परीक्षण से पता लगाता है।',
    feat2Title: 'व्हाट्सएप संदेश स्कैनर',
    feat2Desc: 'व्हाट्सएप और टेलीग्राम से फॉरवर्ड किए गए संदेश सीधे पेस्ट करें। वायरल गलत सूचना श्रृंखलाओं में आम भावनात्मक रूप से हेरफेर करने वाले भाषा पैटर्न का पता लगाता है।',
    feat3Title: 'बहुभाषी भारतीय भाषा समर्थन',
    feat3Desc: 'हिंदी, तमिल, तेलुगु, बंगाली, मराठी, कन्नड़, गुजराती, मलयालम, ओड़िया, पंजाबी, उर्दू और असमिया में पूर्ण विश्लेषण।',
    feat4Title: 'रीयल-टाइम सोशल मीडिया मॉनिटरिंग',
    feat4Desc: 'वायरल होने से पहले ट्रेंडिंग गलत सूचना क्लस्टर्स के लिए Twitter/X, Facebook, YouTube और Instagram की निरंतर स्कैनिंग।',
    feat5Title: 'स्वास्थ्य गलत सूचना शील्ड',
    feat5Desc: 'चिकित्सा गलत सूचना के लिए विशेष पहचान — अप्रमाणित उपचार, झूठे वैक्सीन दावे और कमजोर आबादी को लक्षित करने वाली नीमहकीमी।',
    feat6Title: 'मीडिया साक्षरता शिक्षा इंजन',
    feat6Desc: 'हर स्कैन एक विस्तृत व्याख्या के साथ आता है जो उपयोगकर्ताओं को सिखाता है कि सामग्री कैसे हेरफेर करने वाली थी — दीर्घकालिक आलोचनात्मक सोच का निर्माण।',

    // Threats
    threatsLabel: 'लाइव फीड',
    threatsTitle: 'सक्रिय खतरे',
    liveUpdated: 'लाइव · अपडेट',

    // Education
    eduLabel: 'मीडिया साक्षरता',
    eduTitle1: 'झूठ को',
    eduTitle2: 'पहचानें',
    edu1Tab: 'भावनात्मक हेरफेर',
    edu1Title1: 'भावनात्मक ',
    edu1Title2: 'हेरफेर',
    edu1Body: 'गलत सूचना डर, गुस्सा और आक्रोश को ट्रिगर करके फलती-फूलती है क्योंकि भावनात्मक अवस्थाएँ आलोचनात्मक सोच को कम करती हैं।',
    edu1Check1: 'ऑल-कैप्स शब्दों, अत्यधिक विस्मयादिबोधक चिह्नों और "डिलीट होने से पहले शेयर करें" जैसी कॉल टू एक्शन की तलाश करें',
    edu1Check2: 'किसी भी चीज़ को शेयर करने से पहले रुकें जो आपको अचानक डर या गुस्से का एहसास कराए — वह एहसास ही हथियार है',
    edu1Check3: 'पूछें: "अगर यह सच होता, तो क्या मुझे पहले किसी सत्यापित स्रोत से पता नहीं चलता?"',
    edu2Tab: 'स्रोत स्पूफिंग',
    edu2Title1: 'स्रोत ',
    edu2Title2: 'स्पूफिंग',
    edu2Body: 'फेक न्यूज़ साइट्स समान नामों, लोगो और फॉर्मेटिंग का उपयोग करके वैध आउटलेट्स की नकल करती हैं।',
    edu2Check1: 'हमेशा पूरा URL चेक करें — गलत वर्तनी या "-live", "-real", "-today" जैसे अतिरिक्त शब्दों की तलाश करें',
    edu2Check2: 'सत्यापित करें कि कहानी आउटलेट के आधिकारिक सत्यापित सोशल मीडिया प्रोफाइल पर मौजूद है',
    edu2Check3: 'किसी डोमेन की विश्वसनीयता इतिहास तुरंत चेक करने के लिए TruthGuard के स्रोत डेटाबेस का उपयोग करें',
    edu3Tab: 'संदर्भ से बाहर इमेजरी',
    edu3Title1: 'संदर्भ से बाहर ',
    edu3Title2: 'इमेजरी',
    edu3Body: 'पुरानी घटनाओं, अलग देशों या असंबंधित घटनाओं की असली तस्वीरें अक्सर झूठे कैप्शन के साथ दोबारा इस्तेमाल की जाती हैं।',
    edu3Check1: 'शेयर करने से पहले किसी भी वायरल फोटो को Google Images या TinEye से रिवर्स इमेज सर्च करें',
    edu3Check2: 'इमेज मेटाडेटा चेक करें — निर्माण तिथि और स्थान पुरानी या विदेशी इमेज को उजागर कर सकते हैं',
    edu3Check3: 'TruthGuard हर इमेज अपलोड पर स्वचालित रूप से रिवर्स सर्च और मेटाडेटा विश्लेषण करता है',
    edu4Tab: 'सांख्यिकीय धोखा',
    edu4Title1: 'सांख्यिकीय ',
    edu4Title2: 'धोखा',
    edu4Body: 'वास्तविक डेटा को चेरी-पिकिंग, भ्रामक ग्राफ, बेसलाइन छोड़ना और सहसंबंध को कार्य-कारण के रूप में प्रस्तुत करके हथियार बनाया जा सकता है।',
    edu4Check1: 'हमेशा पूछें "किसकी तुलना में?" — बेसलाइन के बिना प्रतिशत अर्थहीन हैं',
    edu4Check2: 'जांचें कि ग्राफ शून्य से शुरू होते हैं या नहीं — कटे हुए एक्सिस छोटे अंतर को बड़ा दिखाते हैं',
    edu4Check3: 'मूल अध्ययन या सरकारी रिपोर्ट खोजें — सारांश अक्सर चुनिंदा रूप से उद्धृत किए जाते हैं',
    edu5Tab: 'एस्ट्रोटर्फिंग',
    edu5Title1: 'एस्ट्रो',
    edu5Title2: 'टर्फिंग',
    edu5Body: 'बॉट नेटवर्क और समन्वित नकली खाते सार्वजनिक सहमति का भ्रम पैदा करते हैं। जब हजारों खाते अचानक समान सामग्री पोस्ट करते हैं, तो यह अक्सर एक संगठित दुष्प्रचार अभियान होता है।',
    edu5Check1: 'खाते की उम्र और पोस्ट इतिहास जांचें — बिना व्यक्तिगत सामग्री वाले हाल ही में बनाए गए खाते खतरे के संकेत हैं',
    edu5Check2: 'कई खातों में समान शब्दावली समन्वित अप्रामाणिक व्यवहार को इंगित करती है',
    edu5Check3: 'ट्रेंडिंग ≠ सच। लोकप्रियता निर्मित होती है — हमेशा स्वतंत्र स्रोतों से सत्यापित करें',

    // Stats
    statArticles: 'विश्लेषित लेख',
    statAccuracy: 'पहचान सटीकता',
    statLanguages: 'भारतीय भाषाएँ',
    statTime: 'औसत विश्लेषण समय',

    // Testimonials
    testiLabel: 'प्रभाव',
    testiTitle1: 'हज़ारों लोगों',
    testiTitle2: 'का विश्वास',

    // CTA
    ctaEyebrow: 'फेक न्यूज़ के खिलाफ लड़ाई में शामिल हों',
    ctaTitle: 'सत्य की\nरक्षा\nमिलकर करें',
    ctaSub: 'व्यक्तियों के लिए मुफ़्त। 1,80,000 भारतीयों से जुड़ें जो पहले से हर दिन गलत सूचना से लड़ने के लिए TruthGuard का उपयोग करते हैं।',
    ctaBtn: 'मुफ़्त शुरू करें',

    // Footer
    footerCopy: '© 2025 TruthGuard. भारत में बना। सत्य के लिए लड़ रहा है।',
    footerPrivacy: 'गोपनीयता',
    footerAPI: 'API',
    footerAbout: 'हमारे बारे में',
    footerContact: 'संपर्क',
}

const ta: TranslationKeys = {
    // Nav
    navHow: 'எப்படி வேலை செய்கிறது',
    navScanner: 'ஸ்கேனர்',
    navFeatures: 'அம்சங்கள்',
    navLearn: 'கற்றுக்கொள்',
    navTryFree: 'இலவசம்',
    switchToLight: 'லைட் மோட்',
    switchToDark: 'டார்க் மோட்',

    // Hero
    heroEyebrow: 'AI இயக்கும் தவறான தகவல் கண்டறிதல்',
    heroSub: 'சமூக ஊடகங்கள் மற்றும் செய்தி தளங்களில் போலி செய்திகள் மற்றும் தவறான தகவல்களை நிகழ்நேரத்தில் கண்டறிதல். இந்தியாவின் டிஜிட்டல் குடிமக்களை ஒருபோதும் தூங்காத AI மூலம் பாதுகாத்தல்.',
    heroAnalyze: 'உள்ளடக்கம் பகுப்பாய்வு',
    heroDemo: 'டெமோ பார்',
    heroAccuracy: 'துல்லிய விகிதம்',
    heroArticles: 'ஸ்கேன் செய்த கட்டுரைகள்',
    heroThreats: 'இன்று தடுக்கப்பட்ட அச்சுறுத்தல்கள்',
    heroScroll: 'ஸ்க்ரோல்',

    // Marquee
    marquee1: 'போலி செய்தி கண்டறிதல்',
    marquee2: 'ஆதார சரிபார்ப்பு',
    marquee3: 'டீப்ஃபேக் பகுப்பாய்வு',
    marquee4: 'உணர்ச்சி சார்பு கண்டறிதல்',
    marquee5: 'நம்பகத்தன்மை மதிப்பீடு',
    marquee6: 'நிகழ்நேர எச்சரிக்கைகள்',
    marquee7: 'மாற்றப்பட்ட மீடியா',
    marquee8: 'சுகாதார தவறான தகவல்',
    marquee9: 'நிதி மோசடி கண்டறிதல்',

    // How It Works
    howLabel: 'செயல்முறை',
    howTitle1: 'எப்படி',
    howTitle2: 'வேலை செய்கிறது',
    howSubtitle: 'நான்கு புத்திசாலி படிகள் எந்த சந்தேகத்திற்குரிய உள்ளடக்கத்தையும் 3 வினாடிகளில் சரிபார்க்கப்பட்ட உண்மை மதிப்பெண்ணாக மாற்றுகின்றன.',
    step1Title: 'உள்ளடக்க உள்ளீடு',
    step1Desc: 'URL, உரை, படங்கள் அல்லது வீடியோக்களை ஒட்டுங்கள். எங்கள் AI அனைத்து வடிவங்களையும் ஒரே நேரத்தில் செயலாக்குகிறது — தமிழ், இந்தி, தெலுங்கு மற்றும் 12 பிராந்திய மொழிகள் உட்பட.',
    step2Title: 'நியூரல் பகுப்பாய்வு',
    step2Desc: 'எங்கள் மாடல் 47 நம்பகத்தன்மை சமிக்ஞைகளை குறுக்கு-குறிப்பிடுகிறது — தொனி, ஆதார வரலாறு, உரிமை நிலைத்தன்மை, பட மெட்டாடேட்டா மற்றும் மொழி கையாளுதல் முறைகள்.',
    step3Title: 'ஆதார வரைபடம்',
    step3Desc: '12,000 நம்பகமான ஊடகங்கள் மற்றும் அரசு தரவுத்தளங்களிலிருந்து 28 லட்சம் சரிபார்க்கப்பட்ட உண்மைகளின் அறிவு வரைபடத்தைப் பயன்படுத்தி உரிமைகளை மூல ஆதாரங்களுக்கு கண்டறிகிறது.',
    step4Title: 'உண்மை மதிப்பெண்',
    step4Desc: 'வகை பிரிவு, கையாளுதல் நுட்ப அடையாளம் மற்றும் ஊடக எழுத்தறிவுக்கான கல்வி விளக்கத்துடன் 0-100 நம்பகத்தன்மை மதிப்பெண்ணை வழங்குகிறது.',

    // Scanner
    scannerLabel: 'நிகழ்நேர டெமோ',
    scannerTitle1: 'எந்த',
    scannerTitle2: 'உள்ளடக்கத்தையும் ஸ்கேன் செய்',
    scannerDesc: 'எந்த செய்தி தலைப்பு, சமூக ஊடக பதிவு, வாட்ஸ்அப் செய்தி அல்லது வீடியோ இணைப்பை ஒட்டி உடனடி AI பகுப்பாய்வு பெறுங்கள்.',
    tabText: 'உரை பகுப்பாய்வு',
    tabVideo: 'டீப்ஃபேக் வீடியோ சோதனை',
    textPlaceholder: 'சந்தேகத்திற்குரிய உள்ளடக்கத்தை இங்கே ஒட்டுங்கள்...\n\nஉதா. "அரசு இன்று நள்ளிரவு முதல் அனைத்து ஆன்லைன் கொடுப்பனவுகளையும் தடை செய்தது!"',
    scanBtnAnalyze: '⟶  தவறான தகவலுக்கு பகுப்பாய்வு செய்',
    scanBtnScanning: '⟳  Gemini AI பகுப்பாய்வு செய்கிறது...',
    scanBtnDone: '✓  பகுப்பாய்வு முடிந்தது — மீண்டும் ஸ்கேன்',
    fakeProbability: 'போலி நிகழ்தகவு',
    biasLevel: 'சார்பு நிலை',
    trustScore: 'நம்பிக்கை மதிப்பெண்',
    aiVerdict: 'AI தீர்ப்பு',
    manipulationDetected: '⚡ கையாளுதல் நுட்பங்கள் கண்டறியப்பட்டன',
    learnFromThis: '📚 இதிலிருந்து கற்றுக்கொள்',
    deepfakeEngine: 'டீப்ஃபேக் கண்டறிதல் இயந்திரம்',
    videoUrlPlaceholder: 'வீடியோ URL ஒட்டுங்கள் (YouTube, Twitter/X, Instagram, Facebook...)',
    videoDescPlaceholder: 'விருப்பம்: வீடியோ உள்ளடக்கத்தை விவரிக்கவும்...',
    deepfakeBtnAnalyze: '🎬  டீப்ஃபேக்கிற்கு வீடியோ பகுப்பாய்வு',
    deepfakeBtnScanning: '⟳  டீப்ஃபேக்கிற்கு வீடியோ பகுப்பாய்வு...',
    deepfakeBtnDone: '✓  பகுப்பாய்வு முடிந்தது — மீண்டும் ஸ்கேன்',
    fakeScore: 'போலி மதிப்பெண்',
    confidence: 'நம்பிக்கை',
    facialAnalysis: '👤 முக பகுப்பாய்வு',
    lipSync: 'லிப் சிங்க்',
    blinkPattern: 'கண் சிமிட்டல்',
    skinTexture: 'தோல் அமைப்பு',
    overallFacial: 'ஒட்டுமொத்த முகம்',
    audioAnalysis: '🔊 ஆடியோ பகுப்பாய்வு',
    avSync: 'AV சிங்க்',
    naturalness: 'இயல்பான தன்மை',
    voiceClone: 'குரல் குளோன்',
    deepfakeIndicators: '⚠️ டீப்ஃபேக் குறிகாட்டிகள்',
    aiTechniques: '🤖 AI நுட்பங்கள் கண்டறியப்பட்டன',
    recommendation: '🚨 பரிந்துரை',
    howToSpotDeepfakes: '📚 டீப்ஃபேக்குகளை எப்படி கண்டறிவது',
    credibility: 'நம்பகத்தன்மை',
    accuracy: 'துல்லியம்',
    neuralActive: 'நியூரல் நெட்வொர்க் செயலில்',
    geminiProcessing: 'GEMINI AI செயலாக்கம்',

    // Features
    featuresLabel: 'திறன்கள்',
    featuresTitle1: 'பாதுகாக்க',
    featuresTitle2: 'உருவாக்கப்பட்டது',
    comingSoon: 'விரைவில்',
    feat1Title: 'டீப்ஃபேக் வீடியோ பகுப்பாய்வு',
    feat1Desc: 'ஃபிரேம்-பை-ஃபிரேம் தடயவியல் பகுப்பாய்வு AI-உருவாக்கப்பட்ட அல்லது மாற்றப்பட்ட வீடியோ உள்ளடக்கத்தைக் கண்டறிகிறது.',
    feat2Title: 'வாட்ஸ்அப் செய்தி ஸ்கேனர்',
    feat2Desc: 'வாட்ஸ்அப் மற்றும் டெலிகிராமில் இருந்து அனுப்பப்பட்ட செய்திகளை நேரடியாக ஒட்டுங்கள்.',
    feat3Title: 'பல மொழி இந்திய மொழி ஆதரவு',
    feat3Desc: 'தமிழ், இந்தி, தெலுங்கு, வங்காளம், மராத்தி, கன்னடம், குஜராத்தி, மலையாளம், ஒடியா, பஞ்சாபி, உருது மற்றும் அசாமிய மொழிகளில் முழு பகுப்பாய்வு.',
    feat4Title: 'நிகழ்நேர சமூக ஊடக கண்காணிப்பு',
    feat4Desc: 'வைரலாவதற்கு முன் Twitter/X, Facebook, YouTube மற்றும் Instagram-ல் தவறான தகவல் கிளஸ்டர்களை தொடர்ச்சியாக ஸ்கேன் செய்தல்.',
    feat5Title: 'சுகாதார தவறான தகவல் கவசம்',
    feat5Desc: 'மருத்துவ தவறான தகவலுக்கான சிறப்பு கண்டறிதல் — நிரூபிக்கப்படாத சிகிச்சைகள், தவறான தடுப்பூசி உரிமைகள்.',
    feat6Title: 'ஊடக எழுத்தறிவு கல்வி இயந்திரம்',
    feat6Desc: 'ஒவ்வொரு ஸ்கேனும் உள்ளடக்கம் எப்படி கையாளப்பட்டது என்பதை கற்பிக்கும் விரிவான விளக்கத்துடன் வருகிறது.',

    // Threats
    threatsLabel: 'நேரடி ஊட்டம்',
    threatsTitle: 'செயலில் உள்ள அச்சுறுத்தல்கள்',
    liveUpdated: 'நேரடி · புதுப்பிப்பு',

    // Education
    eduLabel: 'ஊடக எழுத்தறிவு',
    eduTitle1: 'பொய்யை',
    eduTitle2: 'கண்டறி',
    edu1Tab: 'உணர்ச்சி கையாளுதல்',
    edu1Title1: 'உணர்ச்சி ',
    edu1Title2: 'கையாளுதல்',
    edu1Body: 'தவறான தகவல் பயம், கோபம் மற்றும் ஆத்திரத்தைத் தூண்டுவதால் செழிக்கிறது, ஏனெனில் உணர்ச்சி நிலைகள் விமர்சன சிந்தனையைக் குறைக்கின்றன.',
    edu1Check1: 'ஆல்-கேப்ஸ் வார்த்தைகள், அதிகப்படியான ஆச்சரியக்குறிகள் மற்றும் "நீக்கப்படுவதற்கு முன் பகிரவும்" போன்ற அழைப்புகளைத் தேடுங்கள்',
    edu1Check2: 'திடீர் பயம் அல்லது ஆத்திரத்தை உணர வைக்கும் எதையும் பகிர்வதற்கு முன் நிறுத்துங்கள்',
    edu1Check3: 'கேளுங்கள்: "இது உண்மையாக இருந்தால், முதலில் சரிபார்க்கப்பட்ட ஆதாரத்திலிருந்து கேள்விப்பட்டிருப்பேனா?"',
    edu2Tab: 'ஆதார ஏமாற்றம்',
    edu2Title1: 'ஆதார ',
    edu2Title2: 'ஏமாற்றம்',
    edu2Body: 'போலி செய்தி தளங்கள் ஒரே மாதிரியான பெயர்கள், லோகோக்கள் மற்றும் வடிவமைப்பைப் பயன்படுத்தி சட்டபூர்வமான ஊடகங்களை பிரதிபலிக்கின்றன.',
    edu2Check1: 'எப்போதும் முழு URL-ஐ சரிபார்க்கவும் — தவறான எழுத்துக்கள் அல்லது "-live", "-real" போன்ற கூடுதல் வார்த்தைகளைப் பாருங்கள்',
    edu2Check2: 'கதை ஊடகத்தின் அதிகாரப்பூர்வ சரிபார்க்கப்பட்ட சமூக ஊடக சுயவிவரங்களில் உள்ளதா என்பதை சரிபார்க்கவும்',
    edu2Check3: 'டொமைனின் நம்பகத்தன்மை வரலாற்றை உடனடியாக சரிபார்க்க TruthGuard-ன் ஆதார தரவுத்தளத்தைப் பயன்படுத்தவும்',
    edu3Tab: 'சூழலுக்கு வெளியே படங்கள்',
    edu3Title1: 'சூழலுக்கு வெளியே ',
    edu3Title2: 'படங்கள்',
    edu3Body: 'பழைய நிகழ்வுகள், வெவ்வேறு நாடுகள் அல்லது தொடர்பில்லாத சம்பவங்களின் உண்மையான புகைப்படங்கள் பொய்யான தலைப்புகளுடன் மீண்டும் பயன்படுத்தப்படுகின்றன.',
    edu3Check1: 'பகிர்வதற்கு முன் Google Images அல்லது TinEye மூலம் ரிவர்ஸ் இமேஜ் தேடல் செய்யுங்கள்',
    edu3Check2: 'பட மெட்டாடேட்டாவை சரிபார்க்கவும் — உருவாக்கிய தேதி மற்றும் இடம் பழைய படங்களை வெளிப்படுத்தும்',
    edu3Check3: 'TruthGuard ஒவ்வொரு பட பதிவேற்றத்திலும் தானாகவே ரிவர்ஸ் தேடல் மற்றும் மெட்டாடேட்டா பகுப்பாய்வு செய்கிறது',
    edu4Tab: 'புள்ளிவிவர ஏமாற்றம்',
    edu4Title1: 'புள்ளிவிவர ',
    edu4Title2: 'ஏமாற்றம்',
    edu4Body: 'உண்மையான தரவு செர்ரி-பிக்கிங், தவறான வரைபடங்கள், அடிப்படைகளை தவிர்ப்பது மற்றும் தொடர்புகளை காரண-காரியமாக முன்வைப்பதன் மூலம் ஆயுதமாக்கப்படலாம்.',
    edu4Check1: 'எப்போதும் கேளுங்கள் "எதனுடன் ஒப்பிடப்பட்டது?" — அடிப்படை இல்லாத சதவீதங்கள் அர்த்தமற்றவை',
    edu4Check2: 'வரைபடங்கள் பூஜ்ஜியத்திலிருந்து தொடங்குகிறதா என சரிபார்க்கவும்',
    edu4Check3: 'அசல் ஆய்வு அல்லது அரசு அறிக்கையைக் கண்டறியுங்கள்',
    edu5Tab: 'ஆஸ்ட்ரோடர்ஃபிங்',
    edu5Title1: 'ஆஸ்ட்ரோ',
    edu5Title2: 'டர்ஃபிங்',
    edu5Body: 'போட் நெட்வொர்க்குகள் மற்றும் ஒருங்கிணைக்கப்பட்ட போலி கணக்குகள் பொது ஒருமித்த கருத்தின் மாயையை உருவாக்குகின்றன.',
    edu5Check1: 'கணக்கு வயது மற்றும் பதிவு வரலாற்றை சரிபார்க்கவும் — தனிப்பட்ட உள்ளடக்கம் இல்லாத சமீபத்தில் உருவாக்கப்பட்ட கணக்குகள் ஆபத்து அறிகுறிகள்',
    edu5Check2: 'பல கணக்குகளில் ஒரே வார்த்தை ஒருங்கிணைக்கப்பட்ட போலி நடத்தையைக் குறிக்கிறது',
    edu5Check3: 'ட்ரெண்டிங் ≠ உண்மை. புகழ் உருவாக்கப்படுகிறது — எப்போதும் சுயாதீன ஆதாரங்களிலிருந்து சரிபார்க்கவும்',

    // Stats
    statArticles: 'பகுப்பாய்வு செய்த கட்டுரைகள்',
    statAccuracy: 'கண்டறிதல் துல்லியம்',
    statLanguages: 'இந்திய மொழிகள்',
    statTime: 'சராசரி பகுப்பாய்வு நேரம்',

    // Testimonials
    testiLabel: 'தாக்கம்',
    testiTitle1: 'ஆயிரக்கணக்கானோர்',
    testiTitle2: 'நம்புகிறார்கள்',

    // CTA
    ctaEyebrow: 'போலி செய்திகளுக்கு எதிரான போரில் இணையுங்கள்',
    ctaTitle: 'உண்மையை\nபாதுகாப்போம்\nஒன்றாக',
    ctaSub: 'தனிநபர்களுக்கு இலவசம். ஒவ்வொரு நாளும் தவறான தகவல்களை எதிர்த்துப் போராட ஏற்கனவே TruthGuard-ஐப் பயன்படுத்தும் 1,80,000 இந்தியர்களுடன் இணையுங்கள்.',
    ctaBtn: 'இலவசமாக தொடங்கு',

    // Footer
    footerCopy: '© 2025 TruthGuard. இந்தியாவில் உருவாக்கப்பட்டது. உண்மைக்காக போராடுகிறது.',
    footerPrivacy: 'தனியுரிமை',
    footerAPI: 'API',
    footerAbout: 'எங்களைப் பற்றி',
    footerContact: 'தொடர்பு',
}

const te: TranslationKeys = {
    // Nav
    navHow: 'ఎలా పనిచేస్తుంది',
    navScanner: 'స్కానర్',
    navFeatures: 'ఫీచర్లు',
    navLearn: 'నేర్చుకో',
    navTryFree: 'ఉచితం',
    switchToLight: 'లైట్ మోడ్',
    switchToDark: 'డార్క్ మోడ్',

    // Hero
    heroEyebrow: 'AI-ఆధారిత తప్పుడు సమాచార గుర్తింపు',
    heroSub: 'సోషల్ మీడియా మరియు మెసేజింగ్ ప్లాట్‌ఫారమ్‌లలో ఫేక్ న్యూస్ & తప్పుడు సమాచారాన్ని రియల్-టైమ్‌లో గుర్తించడం. ఎప్పుడూ నిద్రపోని AI తో భారతదేశ డిజిటల్ పౌరులను రక్షించడం.',
    heroAnalyze: 'కంటెంట్ విశ్లేషణ',
    heroDemo: 'డెమో చూడు',
    heroAccuracy: 'ఖచ్చితత్వ రేటు',
    heroArticles: 'స్కాన్ చేసిన కథనాలు',
    heroThreats: 'ఈ రోజు నిరోధించిన బెదిరింపులు',
    heroScroll: 'స్క్రోల్',

    // Marquee
    marquee1: 'ఫేక్ న్యూస్ గుర్తింపు',
    marquee2: 'మూలం ధృవీకరణ',
    marquee3: 'డీప్‌ఫేక్ విశ్లేషణ',
    marquee4: 'సెంటిమెంట్ పక్షపాత గుర్తింపు',
    marquee5: 'విశ్వసనీయత స్కోరింగ్',
    marquee6: 'రియల్-టైమ్ అలర్ట్‌లు',
    marquee7: 'మార్పు చేసిన మీడియా',
    marquee8: 'ఆరోగ్య తప్పుడు సమాచారం',
    marquee9: 'ఆర్థిక మోసం గుర్తింపు',

    // How It Works
    howLabel: 'ప్రక్రియ',
    howTitle1: 'ఎలా',
    howTitle2: 'పనిచేస్తుంది',
    howSubtitle: 'నాలుగు తెలివైన దశలు ఏదైనా అనుమానాస్పద కంటెంట్‌ను 3 సెకన్లలో ధృవీకరించిన సత్య స్కోర్‌గా మారుస్తాయి.',
    step1Title: 'కంటెంట్ ఇన్‌జెషన్',
    step1Desc: 'URLలు, టెక్స్ట్, చిత్రాలు లేదా వీడియోలను పేస్ట్ చేయండి. మా AI అన్ని ఫార్మాట్‌లను ఏకకాలంలో ప్రాసెస్ చేస్తుంది — తెలుగు, హిందీ, తమిళం మరియు 12 ప్రాంతీయ భాషలు సహా.',
    step2Title: 'న్యూరల్ విశ్లేషణ',
    step2Desc: 'మా మోడల్ 47 విశ్వసనీయత సంకేతాలను క్రాస్-రిఫరెన్స్ చేస్తుంది — టోన్, మూల చరిత్ర, క్లెయిమ్ స్థిరత్వం, చిత్ర మెటాడేటా మరియు భాషా మానిప్యులేషన్ నమూనాలు.',
    step3Title: 'మూల మ్యాపింగ్',
    step3Desc: '12,000 విశ్వసనీయ అవుట్‌లెట్లు మరియు ప్రభుత్వ డేటాబేస్‌ల నుండి 28 లక్షల ధృవీకరించిన వాస్తవాల నాలెడ్జ్ గ్రాఫ్ ఉపయోగించి క్లెయిమ్‌లను అసలు మూలాలకు ట్రేస్ చేస్తుంది.',
    step4Title: 'సత్య స్కోర్',
    step4Desc: 'వర్గ విభజన, మానిప్యులేషన్ టెక్నిక్ గుర్తింపు మరియు మీడియా అక్షరాస్యత కోసం విద్యా వివరణతో 0-100 విశ్వసనీయత స్కోర్‌ను అందిస్తుంది.',

    // Scanner
    scannerLabel: 'లైవ్ డెమో',
    scannerTitle1: 'ఏదైనా',
    scannerTitle2: 'కంటెంట్ స్కాన్ చేయి',
    scannerDesc: 'ఏదైనా వార్తా శీర్షిక, సోషల్ మీడియా పోస్ట్, వాట్సాప్ మెసేజ్ లేదా వీడియో లింక్‌ను పేస్ట్ చేసి తక్షణ AI విశ్లేషణ పొందండి.',
    tabText: 'టెక్స్ట్ విశ్లేషణ',
    tabVideo: 'డీప్‌ఫేక్ వీడియో చెకర్',
    textPlaceholder: 'అనుమానాస్పద కంటెంట్ ఇక్కడ పేస్ట్ చేయండి...\n\nఉదా. "ప్రభుత్వం ఈ రోజు అర్ధరాత్రి నుండి అన్ని ఆన్‌లైన్ చెల్లింపులను నిషేధించింది!"',
    scanBtnAnalyze: '⟶  తప్పుడు సమాచారం కోసం విశ్లేషించు',
    scanBtnScanning: '⟳  Gemini AI విశ్లేషిస్తోంది...',
    scanBtnDone: '✓  విశ్లేషణ పూర్తయింది — మళ్ళీ స్కాన్',
    fakeProbability: 'ఫేక్ సంభావ్యత',
    biasLevel: 'పక్షపాత స్థాయి',
    trustScore: 'నమ్మకం స్కోర్',
    aiVerdict: 'AI తీర్పు',
    manipulationDetected: '⚡ మానిప్యులేషన్ టెక్నిక్‌లు గుర్తించబడ్డాయి',
    learnFromThis: '📚 దీని నుండి నేర్చుకో',
    deepfakeEngine: 'డీప్‌ఫేక్ గుర్తింపు ఇంజన్',
    videoUrlPlaceholder: 'వీడియో URL పేస్ట్ చేయండి (YouTube, Twitter/X, Instagram, Facebook...)',
    videoDescPlaceholder: 'ఐచ్ఛికం: వీడియో కంటెంట్‌ను వివరించండి...',
    deepfakeBtnAnalyze: '🎬  డీప్‌ఫేక్ కోసం వీడియో విశ్లేషించు',
    deepfakeBtnScanning: '⟳  డీప్‌ఫేక్ కోసం వీడియో విశ్లేషిస్తోంది...',
    deepfakeBtnDone: '✓  విశ్లేషణ పూర్తయింది — మళ్ళీ స్కాన్',
    fakeScore: 'ఫేక్ స్కోర్',
    confidence: 'నమ్మకం',
    facialAnalysis: '👤 ముఖ విశ్లేషణ',
    lipSync: 'లిప్ సింక్',
    blinkPattern: 'కన్ను మూస్తే నమూనా',
    skinTexture: 'చర్మ ఆకృతి',
    overallFacial: 'మొత్తం ముఖం',
    audioAnalysis: '🔊 ఆడియో విశ్లేషణ',
    avSync: 'AV సింక్',
    naturalness: 'సహజత్వం',
    voiceClone: 'వాయిస్ క్లోన్',
    deepfakeIndicators: '⚠️ డీప్‌ఫేక్ సూచికలు',
    aiTechniques: '🤖 AI టెక్నిక్‌లు గుర్తించబడ్డాయి',
    recommendation: '🚨 సిఫార్సు',
    howToSpotDeepfakes: '📚 డీప్‌ఫేక్‌లను ఎలా గుర్తించాలి',
    credibility: 'విశ్వసనీయత',
    accuracy: 'ఖచ్చితత్వం',
    neuralActive: 'న్యూరల్ నెట్‌వర్క్ యాక్టివ్',
    geminiProcessing: 'GEMINI AI ప్రాసెసింగ్',

    // Features
    featuresLabel: 'సామర్థ్యాలు',
    featuresTitle1: 'రక్షణ కోసం',
    featuresTitle2: 'నిర్మించబడింది',
    comingSoon: 'త్వరలో',
    feat1Title: 'డీప్‌ఫేక్ వీడియో విశ్లేషణ',
    feat1Desc: 'ఫ్రేమ్-బై-ఫ్రేమ్ ఫోరెన్సిక్ విశ్లేషణ AI-ఉత్పత్తి చేసిన లేదా మార్పు చేసిన వీడియో కంటెంట్‌ను గుర్తిస్తుంది.',
    feat2Title: 'వాట్సాప్ మెసేజ్ స్కానర్',
    feat2Desc: 'వాట్సాప్ మరియు టెలిగ్రామ్ నుండి ఫార్వర్డ్ చేసిన మెసేజ్‌లను నేరుగా పేస్ట్ చేయండి.',
    feat3Title: 'బహుళ భారతీయ భాషా మద్దతు',
    feat3Desc: 'తెలుగు, హిందీ, తమిళం, బంగ్లా, మరాఠీ, కన్నడ, గుజరాతీ, మలయాళం, ఒడియా, పంజాబీ, ఉర్దూ మరియు అస్సామీలో పూర్తి విశ్లేషణ.',
    feat4Title: 'రియల్-టైమ్ సోషల్ మీడియా మానిటరింగ్',
    feat4Desc: 'వైరల్ అవ్వడానికి ముందు Twitter/X, Facebook, YouTube మరియు Instagram లో తప్పుడు సమాచార క్లస్టర్‌లను నిరంతరం స్కాన్ చేయడం.',
    feat5Title: 'ఆరోగ్య తప్పుడు సమాచార రక్షణ',
    feat5Desc: 'వైద్య తప్పుడు సమాచారానికి ప్రత్యేక గుర్తింపు — నిరూపితం కాని చికిత్సలు, తప్పుడు వ్యాక్సిన్ వాదనలు.',
    feat6Title: 'మీడియా అక్షరాస్యత విద్యా ఇంజన్',
    feat6Desc: 'ప్రతి స్కాన్ కంటెంట్ ఎలా మానిప్యులేటివ్‌గా ఉందో వివరంగా బోధించే వివరణతో వస్తుంది.',

    // Threats
    threatsLabel: 'లైవ్ ఫీడ్',
    threatsTitle: 'యాక్టివ్ బెదిరింపులు',
    liveUpdated: 'లైవ్ · అప్‌డేట్',

    // Education
    eduLabel: 'మీడియా అక్షరాస్యత',
    eduTitle1: 'అబద్ధాన్ని',
    eduTitle2: 'గుర్తించు',
    edu1Tab: 'భావోద్వేగ మానిప్యులేషన్',
    edu1Title1: 'భావోద్వేగ ',
    edu1Title2: 'మానిప్యులేషన్',
    edu1Body: 'తప్పుడు సమాచారం భయం, కోపం మరియు ఆగ్రహాన్ని రేకెత్తించడం ద్వారా వర్ధిల్లుతుంది ఎందుకంటే భావోద్వేగ స్థితులు విమర్శనాత్మక ఆలోచనను తగ్గిస్తాయి.',
    edu1Check1: 'ఆల్-క్యాప్స్ పదాలు, అధిక ఆశ్చర్య చిహ్నాలు మరియు "తొలగించబడే ముందు షేర్ చేయండి" వంటి కాల్స్ టు యాక్షన్ కోసం చూడండి',
    edu1Check2: 'హఠాత్తు భయం లేదా ఆగ్రహాన్ని కలిగించే ఏదైనా షేర్ చేయడానికి ముందు ఆపండి',
    edu1Check3: 'అడగండి: "ఇది నిజమైతే, ముందుగా ధృవీకరించిన మూలం నుండి తెలిసి ఉండేదా?"',
    edu2Tab: 'సోర్స్ స్పూఫింగ్',
    edu2Title1: 'సోర్స్ ',
    edu2Title2: 'స్పూఫింగ్',
    edu2Body: 'ఫేక్ న్యూస్ సైట్‌లు ఒకే రకమైన పేర్లు, లోగోలు మరియు ఫార్మాటింగ్‌ను ఉపయోగించి చట్టబద్ధమైన అవుట్‌లెట్‌లను అనుకరిస్తాయి.',
    edu2Check1: 'ఎల్లప్పుడూ పూర్తి URL ను తనిఖీ చేయండి — తప్పుడు స్పెల్లింగ్‌లు లేదా "-live", "-real" వంటి అదనపు పదాల కోసం చూడండి',
    edu2Check2: 'కథ అవుట్‌లెట్ యొక్క అధికారిక ధృవీకరించిన సోషల్ మీడియా ప్రొఫైల్‌లలో ఉందో నిర్ధారించండి',
    edu2Check3: 'డొమైన్ యొక్క విశ్వసనీయత చరిత్రను తక్షణమే తనిఖీ చేయడానికి TruthGuard యొక్క సోర్స్ డేటాబేస్‌ను ఉపయోగించండి',
    edu3Tab: 'సందర్భం లేని చిత్రాలు',
    edu3Title1: 'సందర్భం లేని ',
    edu3Title2: 'చిత్రాలు',
    edu3Body: 'పాత సంఘటనలు, వేరే దేశాలు లేదా సంబంధం లేని సంఘటనల నుండి నిజమైన ఫోటోలు తరచుగా తప్పుడు క్యాప్షన్‌లతో తిరిగి ఉపయోగించబడతాయి.',
    edu3Check1: 'షేర్ చేయడానికి ముందు Google Images లేదా TinEye ఉపయోగించి రివర్స్ ఇమేజ్ సెర్చ్ చేయండి',
    edu3Check2: 'ఇమేజ్ మెటాడేటా తనిఖీ చేయండి — సృష్టి తేదీ మరియు స్థానం పాత చిత్రాలను బయటపెడతాయి',
    edu3Check3: 'TruthGuard ప్రతి ఇమేజ్ అప్‌లోడ్‌లో ఆటోమాటిక్‌గా రివర్స్ సెర్చ్ మరియు మెటాడేటా విశ్లేషణ చేస్తుంది',
    edu4Tab: 'గణాంక మోసం',
    edu4Title1: 'గణాంక ',
    edu4Title2: 'మోసం',
    edu4Body: 'నిజమైన డేటా చెర్రీ-పికింగ్, తప్పుదారి పట్టించే గ్రాఫ్‌లు, బేస్‌లైన్‌లను మినహాయించడం మరియు సహసంబంధాలను కారణంగా ప్రదర్శించడం ద్వారా ఆయుధంగా మార్చవచ్చు.',
    edu4Check1: 'ఎల్లప్పుడూ అడగండి "దేనితో పోల్చారు?" — బేస్‌లైన్‌లు లేని శాతాలు అర్థరహితం',
    edu4Check2: 'చార్ట్‌లు సున్నా నుండి మొదలవుతున్నాయా తనిఖీ చేయండి',
    edu4Check3: 'అసలు అధ్యయనం లేదా ప్రభుత్వ నివేదికను కనుగొనండి',
    edu5Tab: 'ఆస్ట్రోటర్ఫింగ్',
    edu5Title1: 'ఆస్ట్రో',
    edu5Title2: 'టర్ఫింగ్',
    edu5Body: 'బాట్ నెట్‌వర్క్‌లు మరియు సమన్వయ నకిలీ ఖాతాలు ప్రజా ఏకాభిప్రాయం యొక్క భ్రమను తయారు చేస్తాయి.',
    edu5Check1: 'ఖాతా వయస్సు మరియు పోస్ట్ చరిత్రలను తనిఖీ చేయండి — వ్యక్తిగత కంటెంట్ లేని ఇటీవల సృష్టించిన ఖాతాలు ఎర్ర జెండాలు',
    edu5Check2: 'అనేక ఖాతాలలో ఒకే పదజాలం సమన్వయ అనధికార ప్రవర్తనను సూచిస్తుంది',
    edu5Check3: 'ట్రెండింగ్ ≠ నిజం. ప్రజాదరణ తయారు చేయబడింది — ఎల్లప్పుడూ స్వతంత్ర మూలాల నుండి ధృవీకరించండి',

    // Stats
    statArticles: 'విశ్లేషించిన కథనాలు',
    statAccuracy: 'గుర్తింపు ఖచ్చితత్వం',
    statLanguages: 'భారతీయ భాషలు',
    statTime: 'సగటు విశ్లేషణ సమయం',

    // Testimonials
    testiLabel: 'ప్రభావం',
    testiTitle1: 'వేలాది మంది',
    testiTitle2: 'నమ్ముతున్నారు',

    // CTA
    ctaEyebrow: 'ఫేక్ న్యూస్‌కు వ్యతిరేకంగా పోరాటంలో చేరండి',
    ctaTitle: 'సత్యాన్ని\nరక్షిద్దాం\nకలిసి',
    ctaSub: 'వ్యక్తులకు ఉచితం. ప్రతిరోజూ తప్పుడు సమాచారంతో పోరాడటానికి ఇప్పటికే TruthGuard ఉపయోగిస్తున్న 1,80,000 భారతీయులతో చేరండి.',
    ctaBtn: 'ఉచితంగా ప్రారంభించు',

    // Footer
    footerCopy: '© 2025 TruthGuard. భారతదేశంలో నిర్మించబడింది. సత్యం కోసం పోరాడుతోంది.',
    footerPrivacy: 'గోప్యత',
    footerAPI: 'API',
    footerAbout: 'మా గురించి',
    footerContact: 'సంప్రదించు',
}

const bn: TranslationKeys = {
    // Nav
    navHow: 'কিভাবে কাজ করে',
    navScanner: 'স্ক্যানার',
    navFeatures: 'বৈশিষ্ট্য',
    navLearn: 'শিখুন',
    navTryFree: 'বিনামূল্যে',
    switchToLight: 'লাইট মোড',
    switchToDark: 'ডার্ক মোড',

    // Hero
    heroEyebrow: 'AI চালিত ভুল তথ্য সনাক্তকরণ',
    heroSub: 'সোশ্যাল মিডিয়া এবং মেসেজিং প্ল্যাটফর্মে ফেক নিউজ এবং ভুল তথ্যের রিয়েল-টাইম সনাক্তকরণ। ভারতের ডিজিটাল নাগরিকদের রক্ষা করা এমন AI দিয়ে যা কখনও ঘুমায় না।',
    heroAnalyze: 'বিষয়বস্তু বিশ্লেষণ',
    heroDemo: 'ডেমো দেখুন',
    heroAccuracy: 'নির্ভুলতার হার',
    heroArticles: 'স্ক্যান করা নিবন্ধ',
    heroThreats: 'আজ ব্লক করা হুমকি',
    heroScroll: 'স্ক্রোল',

    // Marquee
    marquee1: 'ফেক নিউজ সনাক্তকরণ',
    marquee2: 'উৎস যাচাই',
    marquee3: 'ডীপফেক বিশ্লেষণ',
    marquee4: 'আবেগ পক্ষপাত সনাক্তকরণ',
    marquee5: 'বিশ্বাসযোগ্যতা স্কোরিং',
    marquee6: 'রিয়েল-টাইম সতর্কতা',
    marquee7: 'পরিবর্তিত মিডিয়া',
    marquee8: 'স্বাস্থ্য ভুল তথ্য',
    marquee9: 'আর্থিক প্রতারণা সনাক্তকরণ',

    // How It Works
    howLabel: 'প্রক্রিয়া',
    howTitle1: 'কিভাবে',
    howTitle2: 'কাজ করে',
    howSubtitle: 'চারটি বুদ্ধিমান পদক্ষেপ যেকোনো সন্দেহজনক বিষয়বস্তুকে ৩ সেকেন্ডে যাচাইকৃত সত্য স্কোরে রূপান্তরিত করে।',
    step1Title: 'বিষয়বস্তু গ্রহণ',
    step1Desc: 'URL, টেক্সট, ছবি বা ভিডিও পেস্ট করুন। আমাদের AI সমস্ত ফর্ম্যাট একসাথে প্রসেস করে — বাংলা, হিন্দি, তামিল, তেলুগু এবং ১২টি আঞ্চলিক ভাষা সহ।',
    step2Title: 'নিউরাল বিশ্লেষণ',
    step2Desc: 'আমাদের মডেল ৪৭টি বিশ্বাসযোগ্যতা সংকেত ক্রস-রেফারেন্স করে — টোন, উৎস ইতিহাস, দাবি সামঞ্জস্য, ছবি মেটাডেটা এবং ভাষা ম্যানিপুলেশন প্যাটার্ন।',
    step3Title: 'উৎস ম্যাপিং',
    step3Desc: '১২,০০০ বিশ্বস্ত আউটলেট এবং সরকারি ডাটাবেস থেকে ২৮ লক্ষ যাচাইকৃত তথ্যের নলেজ গ্রাফ ব্যবহার করে দাবিগুলিকে মূল উৎসে ট্রেস করে।',
    step4Title: 'সত্য স্কোর',
    step4Desc: 'বিভাগ ভাঙ্গন, ম্যানিপুলেশন কৌশল শনাক্তকরণ এবং মিডিয়া সাক্ষরতার জন্য শিক্ষামূলক ব্যাখ্যা সহ ০-১০০ বিশ্বাসযোগ্যতা স্কোর প্রদান করে।',

    // Scanner
    scannerLabel: 'লাইভ ডেমো',
    scannerTitle1: 'যেকোনো',
    scannerTitle2: 'বিষয়বস্তু স্ক্যান করুন',
    scannerDesc: 'যেকোনো সংবাদ শিরোনাম, সোশ্যাল মিডিয়া পোস্ট, হোয়াটসঅ্যাপ বার্তা বা ভিডিও লিঙ্ক পেস্ট করুন এবং তাৎক্ষণিক AI বিশ্লেষণ পান।',
    tabText: 'টেক্সট বিশ্লেষণ',
    tabVideo: 'ডীপফেক ভিডিও চেকার',
    textPlaceholder: 'সন্দেহজনক বিষয়বস্তু এখানে পেস্ট করুন...\n\nযেমন "সরকার আজ মধ্যরাত থেকে সমস্ত অনলাইন পেমেন্ট নিষিদ্ধ করেছে!"',
    scanBtnAnalyze: '⟶  ভুল তথ্যের জন্য বিশ্লেষণ করুন',
    scanBtnScanning: '⟳  Gemini AI বিশ্লেষণ করছে...',
    scanBtnDone: '✓  বিশ্লেষণ সম্পূর্ণ — আবার স্ক্যান করুন',
    fakeProbability: 'ফেক সম্ভাবনা',
    biasLevel: 'পক্ষপাত স্তর',
    trustScore: 'বিশ্বাস স্কোর',
    aiVerdict: 'AI রায়',
    manipulationDetected: '⚡ ম্যানিপুলেশন কৌশল সনাক্ত হয়েছে',
    learnFromThis: '📚 এটি থেকে শিখুন',
    deepfakeEngine: 'ডীপফেক সনাক্তকরণ ইঞ্জিন',
    videoUrlPlaceholder: 'ভিডিও URL পেস্ট করুন (YouTube, Twitter/X, Instagram, Facebook...)',
    videoDescPlaceholder: 'ঐচ্ছিক: ভিডিও বিষয়বস্তু বর্ণনা করুন...',
    deepfakeBtnAnalyze: '🎬  ডীপফেক বিশ্লেষণ করুন',
    deepfakeBtnScanning: '⟳  ডীপফেকের জন্য ভিডিও বিশ্লেষণ করা হচ্ছে...',
    deepfakeBtnDone: '✓  বিশ্লেষণ সম্পূর্ণ — আবার স্ক্যান করুন',
    fakeScore: 'ফেক স্কোর',
    confidence: 'আস্থা',
    facialAnalysis: '👤 মুখ বিশ্লেষণ',
    lipSync: 'লিপ সিংক',
    blinkPattern: 'চোখের পলক',
    skinTexture: 'ত্বকের গঠন',
    overallFacial: 'সামগ্রিক মুখ',
    audioAnalysis: '🔊 অডিও বিশ্লেষণ',
    avSync: 'AV সিংক',
    naturalness: 'স্বাভাবিকতা',
    voiceClone: 'ভয়েস ক্লোন',
    deepfakeIndicators: '⚠️ ডীপফেক সূচক',
    aiTechniques: '🤖 AI কৌশল সনাক্ত হয়েছে',
    recommendation: '🚨 সুপারিশ',
    howToSpotDeepfakes: '📚 ডীপফেক কিভাবে চিনবেন',
    credibility: 'বিশ্বাসযোগ্যতা',
    accuracy: 'নির্ভুলতা',
    neuralActive: 'নিউরাল নেটওয়ার্ক সক্রিয়',
    geminiProcessing: 'GEMINI AI প্রসেসিং',

    // Features
    featuresLabel: 'সক্ষমতা',
    featuresTitle1: 'রক্ষা করতে',
    featuresTitle2: 'নির্মিত',
    comingSoon: 'শীঘ্রই আসছে',
    feat1Title: 'ডীপফেক ভিডিও বিশ্লেষণ',
    feat1Desc: 'ফ্রেম-বাই-ফ্রেম ফরেনসিক বিশ্লেষণ AI-উৎপন্ন বা পরিবর্তিত ভিডিও বিষয়বস্তু সনাক্ত করে।',
    feat2Title: 'হোয়াটসঅ্যাপ বার্তা স্ক্যানার',
    feat2Desc: 'হোয়াটসঅ্যাপ এবং টেলিগ্রাম থেকে ফরওয়ার্ড করা বার্তা সরাসরি পেস্ট করুন।',
    feat3Title: 'বহুভাষিক ভারতীয় ভাষা সমর্থন',
    feat3Desc: 'বাংলা, হিন্দি, তামিল, তেলুগু, মরাঠি, কন্নড়, গুজরাটি, মালায়ালম, ওড়িয়া, পাঞ্জাবি, উর্দু এবং অসমিয়াতে সম্পূর্ণ বিশ্লেষণ।',
    feat4Title: 'রিয়েল-টাইম সোশ্যাল মিডিয়া মনিটরিং',
    feat4Desc: 'ভাইরাল হওয়ার আগে Twitter/X, Facebook, YouTube এবং Instagram-এ ভুল তথ্য ক্লাস্টারের ক্রমাগত স্ক্যানিং।',
    feat5Title: 'স্বাস্থ্য ভুল তথ্য রক্ষাকবচ',
    feat5Desc: 'চিকিৎসা সংক্রান্ত ভুল তথ্যের বিশেষ সনাক্তকরণ — অপ্রমাণিত চিকিৎসা, মিথ্যা ভ্যাকসিন দাবি।',
    feat6Title: 'মিডিয়া সাক্ষরতা শিক্ষা ইঞ্জিন',
    feat6Desc: 'প্রতিটি স্ক্যান একটি বিস্তারিত ব্যাখ্যা সহ আসে যা ব্যবহারকারীদের শেখায় কিভাবে বিষয়বস্তু প্রতারণামূলক ছিল।',

    // Threats
    threatsLabel: 'লাইভ ফিড',
    threatsTitle: 'সক্রিয় হুমকি',
    liveUpdated: 'লাইভ · আপডেট',

    // Education
    eduLabel: 'মিডিয়া সাক্ষরতা',
    eduTitle1: 'মিথ্যা',
    eduTitle2: 'চিনুন',
    edu1Tab: 'আবেগ ম্যানিপুলেশন',
    edu1Title1: 'আবেগ ',
    edu1Title2: 'ম্যানিপুলেশন',
    edu1Body: 'ভুল তথ্য ভয়, রাগ এবং ক্ষোভ উদ্রেক করে সফল হয় কারণ আবেগপূর্ণ অবস্থা সমালোচনামূলক চিন্তাভাবনা হ্রাস করে।',
    edu1Check1: 'অল-ক্যাপস শব্দ, অত্যধিক বিস্ময়বোধক চিহ্ন এবং "ডিলিট হওয়ার আগে শেয়ার করুন" এর মতো কল টু অ্যাকশন খুঁজুন',
    edu1Check2: 'হঠাৎ ভয় বা রাগ অনুভব করায় এমন কিছু শেয়ার করার আগে থামুন — সেই অনুভূতিই অস্ত্র',
    edu1Check3: 'জিজ্ঞাসা করুন: "এটি সত্য হলে, প্রথমে কি কোনো যাচাইকৃত উৎস থেকে জানতাম না?"',
    edu2Tab: 'সোর্স স্পুফিং',
    edu2Title1: 'সোর্স ',
    edu2Title2: 'স্পুফিং',
    edu2Body: 'ফেক নিউজ সাইটগুলি একই রকম নাম, লোগো এবং ফর্ম্যাটিং ব্যবহার করে বৈধ আউটলেটগুলির অনুকরণ করে।',
    edu2Check1: 'সবসময় সম্পূর্ণ URL চেক করুন — ভুল বানান বা "-live", "-real" এর মতো অতিরিক্ত শব্দ খুঁজুন',
    edu2Check2: 'গল্পটি আউটলেটের অফিসিয়াল যাচাইকৃত সোশ্যাল মিডিয়া প্রোফাইলে আছে কিনা যাচাই করুন',
    edu2Check3: 'একটি ডোমেইনের বিশ্বাসযোগ্যতার ইতিহাস তাৎক্ষণিকভাবে পরীক্ষা করতে TruthGuard-এর সোর্স ডাটাবেস ব্যবহার করুন',
    edu3Tab: 'প্রসঙ্গবিহীন ছবি',
    edu3Title1: 'প্রসঙ্গবিহীন ',
    edu3Title2: 'ছবি',
    edu3Body: 'পুরনো ঘটনা, বিভিন্ন দেশ বা সম্পর্কহীন ঘটনার আসল ছবি প্রায়ই মিথ্যা ক্যাপশন দিয়ে পুনরায় ব্যবহার করা হয়।',
    edu3Check1: 'শেয়ার করার আগে Google Images বা TinEye ব্যবহার করে রিভার্স ইমেজ সার্চ করুন',
    edu3Check2: 'ইমেজ মেটাডেটা চেক করুন — তৈরির তারিখ এবং অবস্থান পুরনো ছবি প্রকাশ করতে পারে',
    edu3Check3: 'TruthGuard প্রতিটি ছবি আপলোডে স্বয়ংক্রিয়ভাবে রিভার্স সার্চ এবং মেটাডেটা বিশ্লেষণ করে',
    edu4Tab: 'পরিসংখ্যান প্রতারণা',
    edu4Title1: 'পরিসংখ্যান ',
    edu4Title2: 'প্রতারণা',
    edu4Body: 'আসল ডেটা চেরি-পিকিং, বিভ্রান্তিকর গ্রাফ, বেসলাইন বাদ দেওয়া এবং পারস্পরিক সম্পর্ককে কার্যকারণ হিসেবে উপস্থাপনের মাধ্যমে অস্ত্র তৈরি করা যেতে পারে।',
    edu4Check1: 'সবসময় জিজ্ঞাসা করুন "কার তুলনায়?" — বেসলাইন ছাড়া শতাংশ অর্থহীন',
    edu4Check2: 'চার্টগুলি শূন্য থেকে শুরু হয় কিনা পরীক্ষা করুন',
    edu4Check3: 'মূল গবেষণা বা সরকারি রিপোর্ট খুঁজুন',
    edu5Tab: 'অ্যাস্ট্রোটার্ফিং',
    edu5Title1: 'অ্যাস্ট্রো',
    edu5Title2: 'টার্ফিং',
    edu5Body: 'বট নেটওয়ার্ক এবং সমন্বিত ভুয়া অ্যাকাউন্ট জনমতের বিভ্রম তৈরি করে। যখন হাজার হাজার অ্যাকাউন্ট হঠাৎ একই বিষয়বস্তু পোস্ট করে, এটি প্রায়ই একটি সংগঠিত ভুল তথ্য প্রচারণা।',
    edu5Check1: 'অ্যাকাউন্টের বয়স এবং পোস্ট ইতিহাস পরীক্ষা করুন — ব্যক্তিগত বিষয়বস্তু ছাড়া সম্প্রতি তৈরি অ্যাকাউন্টগুলি বিপদ সংকেত',
    edu5Check2: 'অনেক অ্যাকাউন্টে একই বাক্যাংশ সমন্বিত অপ্রামাণিক আচরণ নির্দেশ করে',
    edu5Check3: 'ট্রেন্ডিং ≠ সত্য। জনপ্রিয়তা তৈরি করা হয় — সবসময় স্বাধীন উৎস থেকে যাচাই করুন',

    // Stats
    statArticles: 'বিশ্লেষিত নিবন্ধ',
    statAccuracy: 'সনাক্তকরণ নির্ভুলতা',
    statLanguages: 'ভারতীয় ভাষা',
    statTime: 'গড় বিশ্লেষণ সময়',

    // Testimonials
    testiLabel: 'প্রভাব',
    testiTitle1: 'হাজারো মানুষের',
    testiTitle2: 'বিশ্বাস',

    // CTA
    ctaEyebrow: 'ফেক নিউজের বিরুদ্ধে লড়াইয়ে যোগ দিন',
    ctaTitle: 'সত্য\nরক্ষা করুন\nএকসাথে',
    ctaSub: 'ব্যক্তিদের জন্য বিনামূল্যে। প্রতিদিন ভুল তথ্যের বিরুদ্ধে লড়াই করতে ইতিমধ্যে TruthGuard ব্যবহার করা ১,৮০,০০০ ভারতীয়দের সাথে যোগ দিন।',
    ctaBtn: 'বিনামূল্যে শুরু করুন',

    // Footer
    footerCopy: '© ২০২৫ TruthGuard. ভারতে তৈরি। সত্যের জন্য লড়াই।',
    footerPrivacy: 'গোপনীয়তা',
    footerAPI: 'API',
    footerAbout: 'আমাদের সম্পর্কে',
    footerContact: 'যোগাযোগ',
}

const mr: TranslationKeys = {
    // Nav
    navHow: 'कसं काम करतं',
    navScanner: 'स्कॅनर',
    navFeatures: 'वैशिष्ट्ये',
    navLearn: 'शिका',
    navTryFree: 'मोफत',
    switchToLight: 'लाइट मोड',
    switchToDark: 'डार्क मोड',

    // Hero
    heroEyebrow: 'AI चालित चुकीची माहिती शोध',
    heroSub: 'सोशल मीडिया आणि मेसेजिंग प्लॅटफॉर्मवर फेक न्यूज आणि चुकीच्या माहितीचे रिअल-टाइम शोध. भारताच्या डिजिटल नागरिकांचे AI ने संरक्षण जे कधीच झोपत नाही.',
    heroAnalyze: 'सामग्री विश्लेषण',
    heroDemo: 'डेमो पहा',
    heroAccuracy: 'अचूकता दर',
    heroArticles: 'स्कॅन केलेले लेख',
    heroThreats: 'आज रोखलेले धोके',
    heroScroll: 'स्क्रोल',

    // Marquee
    marquee1: 'फेक न्यूज शोध',
    marquee2: 'स्रोत पडताळणी',
    marquee3: 'डीपफेक विश्लेषण',
    marquee4: 'भावनिक पक्षपात शोध',
    marquee5: 'विश्वासार्हता स्कोरिंग',
    marquee6: 'रिअल-टाइम अलर्ट',
    marquee7: 'बदललेला मीडिया',
    marquee8: 'आरोग्य चुकीची माहिती',
    marquee9: 'आर्थिक फसवणूक शोध',

    // How It Works
    howLabel: 'प्रक्रिया',
    howTitle1: 'कसं',
    howTitle2: 'काम करतं',
    howSubtitle: 'चार बुद्धिमान पायऱ्या कोणत्याही संशयास्पद सामग्रीला ३ सेकंदात सत्यापित सत्य स्कोअरमध्ये बदलतात.',
    step1Title: 'सामग्री ग्रहण',
    step1Desc: 'URL, मजकूर, चित्रे किंवा व्हिडिओ पेस्ट करा. आमची AI सर्व फॉर्मॅट एकाच वेळी प्रोसेस करते — मराठी, हिंदी, तमिळ, तेलुगू आणि १२ प्रादेशिक भाषांसह.',
    step2Title: 'न्यूरल विश्लेषण',
    step2Desc: 'आमचे मॉडेल ४७ विश्वासार्हता संकेतांची क्रॉस-रेफरन्स करते — टोन, स्रोत इतिहास, दावा सुसंगतता, चित्र मेटाडेटा आणि भाषिक हेरफेर नमुने.',
    step3Title: 'स्रोत मॅपिंग',
    step3Desc: '१२,००० विश्वसनीय आउटलेट्स आणि सरकारी डेटाबेसमधून २८ लाख सत्यापित तथ्यांचा नॉलेज ग्राफ वापरून दाव्यांचा मूळ स्रोत शोधतो.',
    step4Title: 'सत्य स्कोअर',
    step4Desc: 'श्रेणी विभाजन, हेरफेर तंत्र ओळख आणि मीडिया साक्षरतेसाठी शैक्षणिक स्पष्टीकरणासह ०-१०० विश्वासार्हता स्कोअर प्रदान करतो.',

    // Scanner
    scannerLabel: 'लाइव्ह डेमो',
    scannerTitle1: 'कोणतीही',
    scannerTitle2: 'सामग्री स्कॅन करा',
    scannerDesc: 'कोणतीही बातमी शीर्षक, सोशल मीडिया पोस्ट, व्हॉट्सअॅप संदेश किंवा व्हिडिओ लिंक पेस्ट करा आणि तात्काळ AI विश्लेषण मिळवा.',
    tabText: 'मजकूर विश्लेषण',
    tabVideo: 'डीपफेक व्हिडिओ तपासणी',
    textPlaceholder: 'संशयास्पद सामग्री येथे पेस्ट करा...\n\nउदा. "सरकारने आजपासून सर्व ऑनलाइन पेमेंट बंद केले — आपल्या संपर्कांना फॉरवर्ड करा!"',
    scanBtnAnalyze: '⟶  चुकीच्या माहितीसाठी विश्लेषण करा',
    scanBtnScanning: '⟳  Gemini AI विश्लेषण करत आहे...',
    scanBtnDone: '✓  विश्लेषण पूर्ण — पुन्हा स्कॅन करा',
    fakeProbability: 'फेक शक्यता',
    biasLevel: 'पक्षपात पातळी',
    trustScore: 'विश्वास स्कोअर',
    aiVerdict: 'AI निकाल',
    manipulationDetected: '⚡ हेरफेर तंत्रे आढळली',
    learnFromThis: '📚 यातून शिका',
    deepfakeEngine: 'डीपफेक शोध इंजिन',
    videoUrlPlaceholder: 'व्हिडिओ URL पेस्ट करा (YouTube, Twitter/X, Instagram, Facebook...)',
    videoDescPlaceholder: 'पर्यायी: व्हिडिओ सामग्रीचे वर्णन करा...',
    deepfakeBtnAnalyze: '🎬  डीपफेकसाठी व्हिडिओ विश्लेषण करा',
    deepfakeBtnScanning: '⟳  डीपफेकसाठी व्हिडिओ विश्लेषण होत आहे...',
    deepfakeBtnDone: '✓  विश्लेषण पूर्ण — पुन्हा स्कॅन करा',
    fakeScore: 'फेक स्कोअर',
    confidence: 'आत्मविश्वास',
    facialAnalysis: '👤 चेहरा विश्लेषण',
    lipSync: 'लिप सिंक',
    blinkPattern: 'डोळे मिचकावणे',
    skinTexture: 'त्वचा पोत',
    overallFacial: 'एकूण चेहरा',
    audioAnalysis: '🔊 ऑडिओ विश्लेषण',
    avSync: 'AV सिंक',
    naturalness: 'नैसर्गिकता',
    voiceClone: 'व्हॉइस क्लोन',
    deepfakeIndicators: '⚠️ डीपफेक निर्देशक',
    aiTechniques: '🤖 AI तंत्रे आढळली',
    recommendation: '🚨 शिफारस',
    howToSpotDeepfakes: '📚 डीपफेक कसे ओळखावे',
    credibility: 'विश्वासार्हता',
    accuracy: 'अचूकता',
    neuralActive: 'न्यूरल नेटवर्क सक्रिय',
    geminiProcessing: 'GEMINI AI प्रोसेसिंग',

    // Features
    featuresLabel: 'क्षमता',
    featuresTitle1: 'संरक्षणासाठी',
    featuresTitle2: 'बनवलेले',
    comingSoon: 'लवकरच येत आहे',
    feat1Title: 'डीपफेक व्हिडिओ विश्लेषण',
    feat1Desc: 'फ्रेम-बाय-फ्रेम फॉरेन्सिक विश्लेषण AI-निर्मित किंवा बदललेली व्हिडिओ सामग्री शोधते.',
    feat2Title: 'व्हॉट्सअॅप संदेश स्कॅनर',
    feat2Desc: 'व्हॉट्सअॅप आणि टेलिग्रामवरून फॉरवर्ड केलेले संदेश थेट पेस्ट करा.',
    feat3Title: 'बहुभाषिक भारतीय भाषा समर्थन',
    feat3Desc: 'मराठी, हिंदी, तमिळ, तेलुगू, बंगाली, कन्नड, गुजराती, मल्याळम, ओडिया, पंजाबी, उर्दू आणि आसामी मध्ये पूर्ण विश्लेषण.',
    feat4Title: 'रिअल-टाइम सोशल मीडिया मॉनिटरिंग',
    feat4Desc: 'व्हायरल होण्यापूर्वी Twitter/X, Facebook, YouTube आणि Instagram वर चुकीच्या माहितीच्या क्लस्टर्सचे सतत स्कॅनिंग.',
    feat5Title: 'आरोग्य चुकीची माहिती कवच',
    feat5Desc: 'वैद्यकीय चुकीच्या माहितीसाठी विशेष शोध — अप्रमाणित उपचार, खोटे लस दावे.',
    feat6Title: 'मीडिया साक्षरता शिक्षण इंजिन',
    feat6Desc: 'प्रत्येक स्कॅनसह एक तपशीलवार स्पष्टीकरण येते जे वापरकर्त्यांना शिकवते की सामग्री कशी हेरफेर करणारी होती.',

    // Threats
    threatsLabel: 'लाइव्ह फीड',
    threatsTitle: 'सक्रिय धोके',
    liveUpdated: 'लाइव्ह · अपडेट',

    // Education
    eduLabel: 'मीडिया साक्षरता',
    eduTitle1: 'खोटं',
    eduTitle2: 'ओळखा',
    edu1Tab: 'भावनिक हेरफेर',
    edu1Title1: 'भावनिक ',
    edu1Title2: 'हेरफेर',
    edu1Body: 'चुकीची माहिती भय, राग आणि संताप जागवून यशस्वी होते कारण भावनिक अवस्था गंभीर विचार कमी करतात.',
    edu1Check1: 'ऑल-कॅप्स शब्द, अत्यधिक उद्गारवाचक चिन्हे आणि "डिलीट होण्यापूर्वी शेअर करा" सारख्या कॉल टू अॅक्शन शोधा',
    edu1Check2: 'अचानक भय किंवा संताप निर्माण करणारे काहीही शेअर करण्यापूर्वी थांबा — ती भावनाच शस्त्र आहे',
    edu1Check3: 'विचारा: "हे खरं असतं, तर आधी एखाद्या सत्यापित स्रोताकडून कळलं नसतं का?"',
    edu2Tab: 'स्रोत स्पूफिंग',
    edu2Title1: 'स्रोत ',
    edu2Title2: 'स्पूफिंग',
    edu2Body: 'फेक न्यूज साइट्स समान नावे, लोगो आणि फॉर्मेटिंग वापरून कायदेशीर आउटलेट्सचे अनुकरण करतात.',
    edu2Check1: 'नेहमी पूर्ण URL तपासा — चुकीचे स्पेलिंग किंवा "-live", "-real" सारखे अतिरिक्त शब्द शोधा',
    edu2Check2: 'कथा आउटलेटच्या अधिकृत सत्यापित सोशल मीडिया प्रोफाइलवर आहे का ते तपासा',
    edu2Check3: 'डोमेनचा विश्वासार्हता इतिहास तात्काळ तपासण्यासाठी TruthGuard चा स्रोत डेटाबेस वापरा',
    edu3Tab: 'संदर्भाबाहेरची चित्रे',
    edu3Title1: 'संदर्भाबाहेरची ',
    edu3Title2: 'चित्रे',
    edu3Body: 'जुन्या घटना, वेगवेगळ्या देशांतील किंवा असंबंधित घटनांचे खरे फोटो अनेकदा खोट्या कॅप्शनसह पुन्हा वापरले जातात.',
    edu3Check1: 'शेअर करण्यापूर्वी Google Images किंवा TinEye वापरून रिव्हर्स इमेज सर्च करा',
    edu3Check2: 'इमेज मेटाडेटा तपासा — निर्मिती तारीख आणि स्थान जुने फोटो उघड करू शकतात',
    edu3Check3: 'TruthGuard प्रत्येक इमेज अपलोडवर स्वयंचलितपणे रिव्हर्स सर्च आणि मेटाडेटा विश्लेषण करते',
    edu4Tab: 'सांख्यिकीय फसवणूक',
    edu4Title1: 'सांख्यिकीय ',
    edu4Title2: 'फसवणूक',
    edu4Body: 'खरा डेटा चेरी-पिकिंग, भ्रामक ग्राफ, बेसलाइन वगळणे आणि सहसंबंध कार्यकारणभाव दाखवून शस्त्र बनवला जाऊ शकतो.',
    edu4Check1: 'नेहमी विचारा "कशाच्या तुलनेत?" — बेसलाइनशिवाय टक्केवारी निरर्थक आहे',
    edu4Check2: 'चार्ट शून्यापासून सुरू होतात का तपासा',
    edu4Check3: 'मूळ अभ्यास किंवा सरकारी अहवाल शोधा',
    edu5Tab: 'अॅस्ट्रोटर्फिंग',
    edu5Title1: 'अॅस्ट्रो',
    edu5Title2: 'टर्फिंग',
    edu5Body: 'बॉट नेटवर्क आणि समन्वित बनावट खाती सार्वजनिक सहमतीचा भ्रम निर्माण करतात.',
    edu5Check1: 'खात्याचे वय आणि पोस्ट इतिहास तपासा — वैयक्तिक सामग्री नसलेली नुकतीच तयार केलेली खाती धोक्याचे संकेत आहेत',
    edu5Check2: 'अनेक खात्यांमध्ये समान शब्दरचना समन्वित अप्रामाणिक वर्तन दर्शवते',
    edu5Check3: 'ट्रेंडिंग ≠ खरं. लोकप्रियता तयार केली जाते — नेहमी स्वतंत्र स्रोतांकडून सत्यापित करा',

    // Stats
    statArticles: 'विश्लेषित लेख',
    statAccuracy: 'शोध अचूकता',
    statLanguages: 'भारतीय भाषा',
    statTime: 'सरासरी विश्लेषण वेळ',

    // Testimonials
    testiLabel: 'प्रभाव',
    testiTitle1: 'हजारो लोकांचा',
    testiTitle2: 'विश्वास',

    // CTA
    ctaEyebrow: 'फेक न्यूजविरुद्ध लढ्यात सामील व्हा',
    ctaTitle: 'सत्याचे\nरक्षण\nएकत्र करा',
    ctaSub: 'व्यक्तींसाठी मोफत. दररोज चुकीच्या माहितीशी लढण्यासाठी आधीच TruthGuard वापरणाऱ्या १,८०,००० भारतीयांसोबत सामील व्हा.',
    ctaBtn: 'मोफत सुरू करा',

    // Footer
    footerCopy: '© २०२५ TruthGuard. भारतात बनवलेले. सत्यासाठी लढत आहे.',
    footerPrivacy: 'गोपनीयता',
    footerAPI: 'API',
    footerAbout: 'आमच्याबद्दल',
    footerContact: 'संपर्क',
}

export const translations: Record<Lang, TranslationKeys> = { en, hi, ta, te, bn, mr }

export function t(lang: Lang, key: keyof TranslationKeys): string {
    return translations[lang]?.[key] ?? translations.en[key] ?? key
}
