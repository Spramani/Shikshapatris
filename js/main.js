/**
 * Shikshapatri Companion — Interactive Sacred Experience
 * Includes Mobile Splash Screen Animations, Particle Embers, and Shloka Reader
 */

// Shloka Sample Database for interactive web reader
const SHLOKA_DATA = {
  1: {
    id: 1,
    chapter: 1,
    artwork: "assets/chapter_1.jpg",
    title: "શિક્ષાપત્રી મંગલાચરણ · Invocation",
    sanskrit: "वामे यस्य स्थिता राधा श्रीश्च यस्यास्ति वक्षसि ।\nवृन्दावनविहारं तं श्रीकृष्णं हृदि भावये ॥१॥",
    transliteration: "vāme yasya sthitā rādhā śrīśca yasyāsti vakṣasi ।\nvṛndāvanavihāraṁ taṁ śrīkṛṣṇaṁ hṛdi bhāvaye ॥1॥",
    gu: "જેમના ડાબી બાજુ રાધાજી બિરાજમાન છે, જેમની છાતીમાં લક્ષ્મીજી નિવાસ કરે છે, અને જેઓ વૃંદાવનમાં વિહાર કરે છે તેવા શ્રીકૃષ્ણ ભગવાનનું હું હૃદયમાં ધ્યાન કરું છું.",
    hi: "जिनके वाम भाग में श्रीराधाजी विराजमान हैं, जिनके वक्षस्थल पर श्रीलक्ष्मीजी निवास करती हैं, और जो वृन्दावन में दिव्य विहार करते हैं, उन श्रीकृष्ण का मैं अपने हृदय में ध्यान करता हूँ।",
    en: "I meditate in my heart upon Lord Shri Krishna, who sports in the groves of Vrindavan, on whose left stands Radhika, and in whose heart abides Lakshmi."
  },
  11: {
    id: 11,
    chapter: 2,
    artwork: "assets/chapter_2.jpg",
    title: "અહિંસા પરમો ધર્મઃ · Non-Violence",
    sanskrit: "न हिंस्यात्सर्वथा जातु केनापि प्राणिनां तनुः ।\nसूक्ष्माणां खटमत्स्यादेरपि बुद्ध्या न चापि हि ॥११॥",
    transliteration: "na hiṁsyāt sarvathā jātu kenāpi prāṇināṁ tanuḥ ।\nsūkṣmāṇāṁ khaṭamatsyāderapi buddhyā na cāpi hi ॥11॥",
    gu: "કોઈપણ મનુષ્યે કોઈ પણ જીવજંતુ કે પ્રાણીની ક્યારેય હિંસા કરવી નહીં. ચાંચડ, જૂ, માંકડ કે માછલાં જેવા સૂક્ષ્મ જીવોને પણ જાણી જોઈને હણવા નહીં.",
    hi: "किसी भी मनुष्य को किसी भी प्राणी की कभी भी हिंसा नहीं करनी चाहिए। खटमल, जूँ अथवा मत्स्य आदि सूक्ष्म जीवों को भी जानबूझकर कभी न मारें।",
    en: "None shall ever intentionally harm or kill any living being, not even the smallest insects like bedbugs, lice, or fish."
  },
  26: {
    id: 26,
    chapter: 2,
    artwork: "assets/chapter_2.jpg",
    title: "સત્ય ભાષણ · Truthfulness",
    sanskrit: "सत्यं च यत्प्रियं वाक्यं तत्प्रभाष्यं विचक्षणैः ।\nअप्रियं सत्यमपि च न वक्तव्यं कदाचन ॥२६॥",
    transliteration: "satyaṁ ca yat priyaṁ vākyaṁ tat prabhāṣyaṁ vicakṣaṇaiḥ ।\napriyaṁ satyamapi ca na vaktavyaṁ kadācana ॥26॥",
    gu: "વિવેકી જનોએ હંમેશાં સત્ય અને પ્રિય લાગે તેવી વાણી બોલવી. અપ્રિય સત્ય પણ કોઈના દિલને દુભાવવા માટે ક્યારેય ન બોલવું.",
    hi: "बुद्धिमान मनुष्यों को सदैव सत्य और प्रिय वाणी ही बोलनी चाहिए। जो सत्य अप्रिय हो, उसे भी कभी नहीं बोलना चाहिए।",
    en: "The wise must always utter words that are both true and agreeable; one should never speak an unpleasant truth that inflicts pain upon others."
  },
  116: {
    id: 116,
    chapter: 2,
    artwork: "assets/chapter_2.jpg",
    title: "આત્મનિવેદન ભક્તિ · Pure Devotion",
    sanskrit: "निजात्मानं ब्रह्मरूपं देहत्रयविलक्षणम् ।\nविभाव्य तेन कर्तव्या भक्तिः कृष्णस्य सर्वदा ॥१૧૬॥",
    transliteration: "nijātmānaṁ brahmarūpaṁ dehatrayavilakṣaṇam ।\nvibhāvya tena kartavyā bhaktiḥ kṛṣṇasya sarvadā ॥116॥",
    gu: "ત્રણેય દેહ (સ્થૂળ, સૂક્ષ્મ અને કારણ) થી જુદો એવો પોતાનો આત્મા બ્રહ્મરૂપ માનીને, તે બ્રહ્મભાવથી સદાય શ્રીકૃષ્ણની અનન્ય ભક્તિ કરવી.",
    hi: "तीनों शरीरों (स्थूल, सूक्ष्म, कारण) से भिन्न अपने जीवात्मा को ब्रह्मरूप मानकर, उसी भाव से सदैव भगवान श्रीकृष्ण की निष्काम भक्ति करनी चाहिए।",
    en: "Identifying one's true Self as distinct from the three bodies (gross, subtle, and causal) and attaining the state of Brahman, one must constantly render devotional service unto Lord Krishna."
  },
  123: {
    id: 123,
    chapter: 3,
    artwork: "assets/chapter_3.jpg",
    title: "ધર્માચાર્ય ધર્મ · Duties of Acharyas",
    sanskrit: "धर्मगोप्ता सदा भूयात् सर्वसत्त्वहिते रतः ।\nअक्रोधो जितषड्वर्गः स्यादस्मद्धर्मपालकः ॥१२३॥",
    transliteration: "dharmagoptā sadā bhūyāt sarvasattvahite rataḥ ।\nakrodho jitaṣaḍvargaḥ syādasmaddharmapālakaḥ ॥123॥",
    gu: "ધર્મના આચાર્યોએ હંમેશાં સદ્ધર્મનું રક્ષણ કરવું, સર્વ જીવોના કલ્યાણમાં તત્પર રહેવું, ક્રોધ રહિત થવું અને કામ-ક્રોધાદિક છ શત્રુઓને જીતનારા થવું.",
    hi: "धर्म के आचार्यों को सदैव धर्म की रक्षा करनी चाहिए, समस्त जीवों के कल्याण में तत्पर रहना चाहिए, क्रोध से रहित और काम-क्रोध आदि छहों शत्रुओं को जीतने वाला होना चाहिए।",
    en: "The Spiritual Preceptors (Acharyas) must always protect righteousness, rejoice in the welfare of all living beings, conquer anger, and master the six internal enemies."
  },
  135: {
    id: 135,
    chapter: 5,
    artwork: "assets/chapter_5.jpg",
    title: "ગૃહસ્થ ધર્મ · Duties of Householders",
    sanskrit: "न्यायोपार्जितवित्तेन पोषणं परिवारिणाम् ।\nकर्तव्यं दानधर्मश्च यथाशक्ति प्रवर्त्यते ॥१३५॥",
    transliteration: "nyāyopārjitavittena poṣaṇaṁ parivāriṇām ।\nkartavyaṁ dānadharmaśca yathāśakti pravartyate ॥135॥",
    gu: "ગૃહસ્થોએ નીતિ અને ધર્મથી કમાયેલા ધન વડે જ પોતાના કુટુંબનું પોષણ કરવું અને પોતાની શક્તિ પ્રમાણે સત્પાત્રને દાન આપવું.",
    hi: "गृहस्थों को न्याय और नीति से उपार्जित धन से ही अपने परिवार का भरण-पोषण करना चाहिए तथा अपनी सामर्थ्यानुसार दान-धर्म करना चाहिए।",
    en: "Householders shall sustain their families solely through ethically earned wealth, and perform acts of charity according to their honest financial means."
  }
};

let currentShlokaId = 1;
let currentLanguage = 'gu';
let isAudioPlaying = false;
let audioTimer = null;
let currentSpeechUtterance = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Sticky Navbar logic matching BhaktiQuest
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  initTheme();
  initEmbersCanvas();
  initScrollReveal();
  initShlokaInteractiveViewer();
  initFaqAccordions();
  initContactForm();
  initSmoothScroll();
  initStatCounters();
});

/* ==============================================================
   PARTICLES: FLOATING GOLDEN & SAFFRON EMBERS (Matching Screenshot)
   ============================================================== */
function initEmbersCanvas() {
  const canvas = document.getElementById('embersCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = 55;
  const particles = [];
  const palette = [
    'rgba(224, 90, 27,',   // Deep Saffron
    'rgba(245, 158, 11,',  // Amber
    'rgba(251, 191, 36,',  // Golden
    'rgba(255, 112, 67,',  // Warm Orange
    'rgba(230, 81, 0,',    // Rich Devotional Red-Orange
    'rgba(255, 183, 77,'   // Radiant Peach
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3.2 + 1.2,
      baseY: Math.random() * height,
      speedY: Math.random() * 0.55 + 0.25,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayOffset: Math.random() * Math.PI * 2,
      swayRadius: Math.random() * 25 + 10,
      opacity: Math.random() * 0.6 + 0.35,
      color: palette[Math.floor(Math.random() * palette.length)],
      hasGlow: Math.random() > 0.45
    });
  }

  let frame = 0;

  function renderEmbers() {
    ctx.clearRect(0, 0, width, height);
    frame++;

    particles.forEach(p => {
      p.y -= p.speedY;
      const currentX = p.x + Math.sin(frame * p.swaySpeed + p.swayOffset) * p.swayRadius;

      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(currentX, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color} ${p.opacity})`;

      if (p.hasGlow) {
        ctx.shadowBlur = 12;
        ctx.shadowColor = `${p.color} 0.85)`;
      } else {
        ctx.shadowBlur = 4;
        ctx.shadowColor = `${p.color} 0.4)`;
      }

      ctx.fill();
    });

    requestAnimationFrame(renderEmbers);
  }

  renderEmbers();
}

/* ==============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

/* ==============================================================
   ANIMATED STAT COUNTERS
   ============================================================== */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const increment = Math.ceil(target / 45);

          const updateCount = () => {
            count += increment;
            if (count < target) {
              counter.innerText = count;
              setTimeout(updateCount, 25);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-banner');
  if (statsSection) observer.observe(statsSection);
}

/* Theme Switcher */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('shikshapatri-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('shikshapatri-theme', theme);
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    toggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`);
  }
}

/* Interactive Shloka Reader & Simulator */
function initShlokaInteractiveViewer() {
  updateShlokaDisplay();

  // Selector chips on landing page
  const shlokaChips = document.querySelectorAll('.shloka-chip');
  shlokaChips.forEach(chip => {
    chip.addEventListener('click', () => {
      shlokaChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentShlokaId = parseInt(chip.getAttribute('data-shloka'), 10) || 1;
      stopAudioChant();
      updateShlokaDisplay();
    });
  });

  // Language chips on phone simulator
  const langChips = document.querySelectorAll('.lang-chip-btn');
  langChips.forEach(chip => {
    chip.addEventListener('click', () => {
      langChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentLanguage = chip.getAttribute('data-lang') || 'gu';
      stopAudioChant();
      updateShlokaDisplay();
    });
  });

  // Chapter Artwork Cards click-to-preview
  const artworkCards = document.querySelectorAll('.artwork-card');
  artworkCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetShloka = parseInt(card.getAttribute('data-target-shloka'), 10);
      if (targetShloka) {
        currentShlokaId = targetShloka;
        stopAudioChant();
        updateShlokaDisplay();

        // Sync chips
        shlokaChips.forEach(chip => {
          if (parseInt(chip.getAttribute('data-shloka'), 10) === targetShloka) {
            shlokaChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
          }
        });

        // Smooth scroll to showcase
        const previewSection = document.getElementById('shloka-preview');
        if (previewSection) {
          previewSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });

  // Audio Play Button
  const playBtn = document.getElementById('audioPlayBtn');
  if (playBtn) {
    playBtn.addEventListener('click', toggleAudioChant);
  }
}

function updateShlokaDisplay() {
  const data = SHLOKA_DATA[currentShlokaId] || SHLOKA_DATA[1];

  // Phone Mockup Elements
  const miniBadge = document.getElementById('miniShlokaBadge');
  const miniSanskrit = document.getElementById('miniSanskrit');
  const miniMeaning = document.getElementById('miniMeaning');
  const simulatorBg = document.getElementById('simulatorBgArtwork');

  if (miniBadge) miniBadge.textContent = `શ્લોક ${data.id} · Shloka ${data.id}`;
  if (miniSanskrit) miniSanskrit.textContent = data.sanskrit;
  if (miniMeaning) miniMeaning.textContent = data[currentLanguage] || data.gu;
  if (simulatorBg && data.artwork) simulatorBg.src = data.artwork;

  // Showcase elements if present
  const showTitle = document.getElementById('showcaseTitle');
  const showSanskrit = document.getElementById('showcaseSanskrit');
  const showTranslit = document.getElementById('showcaseTranslit');
  const showMeaning = document.getElementById('showcaseMeaning');

  if (showTitle) showTitle.textContent = data.title;
  if (showSanskrit) showSanskrit.textContent = data.sanskrit;
  if (showTranslit) showTranslit.textContent = data.transliteration;
  if (showMeaning) showMeaning.textContent = data[currentLanguage] || data.gu;
}

/* Audio Chant Simulation with Web Speech Synthesis */
function toggleAudioChant() {
  if (isAudioPlaying) {
    stopAudioChant();
  } else {
    startAudioChant();
  }
}

function startAudioChant() {
  isAudioPlaying = true;
  const playBtn = document.getElementById('audioPlayBtn');
  const progressFill = document.getElementById('playerProgressFill');
  const waveform = document.getElementById('audioWaveform');
  if (playBtn) playBtn.innerHTML = '⏸';
  if (waveform) waveform.classList.add('is-playing');

  const data = SHLOKA_DATA[currentShlokaId] || SHLOKA_DATA[1];
  const textToRead = currentLanguage === 'en' ? data.en : (currentLanguage === 'hi' ? data.hi : data.gu);

  // Web Speech API chant preview
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentSpeechUtterance = new SpeechSynthesisUtterance(textToRead);
    currentSpeechUtterance.lang = currentLanguage === 'en' ? 'en-US' : (currentLanguage === 'hi' ? 'hi-IN' : 'gu-IN');
    currentSpeechUtterance.rate = 0.88;

    currentSpeechUtterance.onend = () => {
      stopAudioChant();
    };
    currentSpeechUtterance.onerror = () => {
      stopAudioChant();
    };
    window.speechSynthesis.speak(currentSpeechUtterance);
  }

  // Simulated progress bar animation
  let progress = 0;
  if (progressFill) progressFill.style.width = '0%';

  clearInterval(audioTimer);
  audioTimer = setInterval(() => {
    progress += 2;
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progress >= 100) {
      stopAudioChant();
    }
  }, 120);
}

function stopAudioChant() {
  isAudioPlaying = false;
  const playBtn = document.getElementById('audioPlayBtn');
  const progressFill = document.getElementById('playerProgressFill');
  const waveform = document.getElementById('audioWaveform');
  if (playBtn) playBtn.innerHTML = '▶';
  if (waveform) waveform.classList.remove('is-playing');
  if (progressFill) progressFill.style.width = '0%';
  if (audioTimer) clearInterval(audioTimer);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/* FAQ Accordion */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/* Contact / Support Form */
function initContactForm() {
  const form = document.getElementById('supportForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields.', 3000);
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';
    }

    // Simulate reliable dispatch
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
      form.reset();
      showToast('✨ Thank you! Your support ticket has been received. Our team will get back to you shortly.', 4500);
    }, 1000);
  });
}

/* Toast Notice Notification */
function showToast(message, duration = 3500) {
  let toast = document.getElementById('websiteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'websiteToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

/* Smooth Scrolling & Navigation */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
