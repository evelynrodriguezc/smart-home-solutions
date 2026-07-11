(function () {
  'use strict';

  const STORAGE_KEY = 'smartHome.lang';
  const DEFAULT_LANG = 'es';

  const translations = {
    es: {
      /* Nav */
      'nav.home': 'Inicio',
      'nav.what': '¿Qué es?',
      'nav.services': 'Servicios',
      'nav.contact': 'Contacto',

      /* Hero (index) */
      'hero.eyebrow': 'Domótica Residencial de Lujo',
      'hero.headline1': 'Tu hogar,',
      'hero.headline2': 'Inteligente',
      'hero.body': 'Diseñamos y automatizamos espacios residenciales con tecnología invisible que se adapta a tu vida — no al revés.',
      'hero.cta.primary': 'Ver Servicios',
      'hero.cta.secondary': 'Hablar con un experto',
      'hero.scroll': 'Descubrir',

      /* Features strip */
      'features.01.label': 'Automatización Total',
      'features.01.sub': 'Luces, persianas, clima y más',
      'features.02.label': 'Seguridad Avanzada',
      'features.02.sub': 'Vigilancia en tiempo real',
      'features.03.label': 'Eficiencia Energética',
      'features.03.sub': 'Consumo optimizado y medible',

      /* Services showcase (index) */
      'showcase.eyebrow': 'Lo que hacemos',
      'showcase.title': 'Servicios <em>destacados</em>',
      'showcase.link': 'Ver todos los servicios',
      'showcase.iluminacion.tag': 'Automatización',
      'showcase.iluminacion.title': 'Iluminación Inteligente',
      'showcase.iluminacion.desc': 'Control total del ambiente luminoso con escenas personalizadas por habitación.',
      'showcase.seguridad.tag': 'Seguridad',
      'showcase.seguridad.title': 'Seguridad Conectada',
      'showcase.seguridad.desc': 'Cámaras HD, sensores y alertas en tiempo real desde cualquier lugar.',
      'showcase.clima.tag': 'Confort',
      'showcase.clima.title': 'Climatización Inteligente',
      'showcase.clima.desc': 'Temperatura perfecta en cada habitación, de forma automática.',

      /* Stats */
      'stats.homes': 'Hogares automatizados',
      'stats.years': 'Años de experiencia',
      'stats.satisfaction': 'Clientes satisfechos',

      /* CTA index */
      'cta.home.title': '¿Quieres transformar<br><em>tu hogar?</em>',
      'cta.home.body': 'Un experto de nuestro equipo visitará tu hogar sin compromiso y te propondrá la solución perfecta.',
      'cta.home.primary': 'Solicitar consulta gratuita',
      'cta.home.secondary': 'Conocer más',

      /* Footer */
      'footer.tagline': 'Tecnología residencial de lujo. Diseñamos hogares que responden a quienes los habitan.',
      'footer.nav.heading': 'Navegación',
      'footer.services.heading': 'Servicios',
      'footer.contact.heading': 'Contacto',
      'footer.contact.visit': 'Solicitar visita',
      'footer.legal': '© 2024 SmartHome by ERC. Todos los derechos reservados.',
      'footer.accent': 'Vivir bien, es vivir inteligente.',

      /* Theme page hero */
      'theme.hero.eyebrow': 'Tecnología del hogar',
      'theme.hero.title': '¿Qué es<br>la <em>Domótica?</em>',
      'theme.hero.body': 'La inteligencia aplicada al espacio donde más importa: tu hogar.',

      /* Theme intro */
      'theme.intro.eyebrow': 'La idea',
      'theme.intro.lead': 'Tu hogar responde a ti — no tú a él. Eso es la <em>domótica.</em>',
      'theme.intro.p1': 'La domótica es la automatización integral del hogar: luces, temperatura, seguridad, persianas y electrodomésticos conectados en un solo ecosistema que puedes controlar desde tu teléfono o con tu voz.',
      'theme.intro.p2': 'Imagina que tu cafetera enciende cuando te despiertas, que las persianas suben solas con el sol, o que recibes una alerta en tu móvil si se detecta movimiento en casa mientras estás de viaje. Todo eso es posible hoy, y lo hacemos realidad en tu hogar.',
      'theme.intro.p3': 'No es ciencia ficción: es tecnología discreta, elegante y al servicio de quien vive en el espacio.',
      'theme.intro.badge.label': 'Sistemas integrados',

      /* Theme benefits */
      'theme.benefits.eyebrow': 'Por qué importa',
      'theme.benefits.title': 'Tres razones para <em>automatizar</em>',
      'theme.benefit.01.title': 'Comodidad sin esfuerzo',
      'theme.benefit.01.body': 'Controla todos tus dispositivos desde un solo lugar — tu teléfono, tu voz, o de manera completamente automática según tus rutinas diarias. Tu hogar aprende cómo vives.',
      'theme.benefit.02.title': 'Ahorro de energía',
      'theme.benefit.02.body': 'Monitoriza el consumo en tiempo real y programa dispositivos para funcionar solo cuando se necesitan. La eficiencia no se nota en el día a día — se nota en la factura.',
      'theme.benefit.03.title': 'Seguridad real',
      'theme.benefit.03.body': 'Cámaras conectadas, sensores de movimiento y alarmas inteligentes te avisan al instante. Monitoriza tu hogar estés donde estés, en tiempo real.',

      /* Theme quote */
      'theme.quote': 'Un hogar inteligente no es un lujo — es la decisión de vivir con <em>más tiempo, más seguridad y más confort.</em>',

      /* CTA theme */
      'cta.theme.title': 'Descubre los <em>servicios</em><br>que ofrecemos',
      'cta.theme.body': 'Desde la automatización más sencilla hasta instalaciones integrales de alta gama para toda la vivienda.',
      'cta.theme.primary': 'Ver todos los servicios',
      'cta.theme.secondary': 'Contactar',

      /* Services page hero */
      'services.hero.eyebrow': 'Lo que ofrecemos',
      'services.hero.title': 'Nuestros<br><em>Servicios</em>',
      'services.hero.body': 'Soluciones integrales de domótica para espacios residenciales. Cada instalación se diseña a medida.',

      /* Services list header */
      'services.list.eyebrow': 'Catálogo completo',
      'services.list.title': 'Cada servicio, <em>a tu medida</em>',

      /* Services 6 rows */
      'services.01.title': 'Automatización del Hogar',
      'services.01.body': 'Conecta y controla luces, persianas, puertas de garaje y electrodomésticos desde una única aplicación. Crea rutinas que se activan automáticamente: amanecer, noche, salida de casa.',
      'services.02.title': 'Seguridad Inteligente',
      'services.02.body': 'Cámaras de alta resolución, sensores de movimiento y sistemas de alarma conectados. Recibe alertas instantáneas en tu móvil y accede al vídeo en vivo desde cualquier lugar del mundo.',
      'services.03.title': 'Ahorro Energético',
      'services.03.body': 'Monitoriza el consumo en tiempo real y automatiza dispositivos para que solo funcionen cuando se necesitan. Nuestros sistemas reducen el consumo eléctrico hasta un 30% en el primer año.',
      'services.04.title': 'Iluminación Inteligente',
      'services.04.body': 'Controla la intensidad y temperatura de color de cada punto de luz desde tu móvil. Crea escenas personalizadas para cada momento: cena, película, trabajo, descanso.',
      'services.05.title': 'Control por Voz',
      'services.05.body': 'Integración nativa con Alexa, Google Home y Siri. Controla toda tu instalación con comandos naturales. Sin pantallas, sin fricciones — solo di lo que necesitas.',
      'services.06.title': 'Climatización Inteligente',
      'services.06.body': 'Termostatos inteligentes que aprenden tus hábitos y ajustan la temperatura de forma automática por habitación. El ambiente perfecto siempre que llegues a casa.',
      'services.row.link': 'Solicitar información',

      /* CTA services */
      'cta.services.title': '¿Te interesa algún<br><em>servicio?</em>',
      'cta.services.body': 'Cuéntanos qué necesitas y te proponemos la instalación perfecta para tu hogar, sin compromiso.',
      'cta.services.primary': 'Solicitar presupuesto',
      'cta.services.secondary': '¿Qué es la domótica?',

      /* Contact page hero */
      'contact.hero.eyebrow': 'Hablemos',
      'contact.hero.title': 'Empecemos<br>a <em>crear</em> tu hogar',
      'contact.hero.body': 'Cuéntanos tu proyecto. Te respondemos en menos de 24 horas con una propuesta personalizada.',

      /* Contact form */
      'contact.form.title': 'Escríbenos',
      'contact.form.sub': 'Completa el formulario y un experto te contactará para agendar una visita sin compromiso.',
      'contact.form.name.label': 'Nombre completo',
      'contact.form.name.placeholder': '¿Cómo te llamamos?',
      'contact.form.email.label': 'Correo electrónico',
      'contact.form.email.placeholder': 'tu@correo.com',
      'contact.form.phone.label': 'Teléfono',
      'contact.form.phone.optional': '(opcional)',
      'contact.form.phone.placeholder': '+1 234 567 890',
      'contact.form.message.label': 'Tu mensaje',
      'contact.form.message.placeholder': 'Cuéntanos qué quieres automatizar, el tamaño de tu hogar, o cualquier detalle que consideres relevante…',
      'contact.form.submit': 'Enviar mensaje',

      /* Contact info */
      'contact.info.title': 'También puedes<br>encontrarnos aquí',
      'contact.info.sub': 'Nuestro equipo está disponible de lunes a viernes, de 9:00 a 18:00. Para urgencias, llámanos directamente.',
      'contact.info.address.label': 'Dirección',
      'contact.info.address.value': 'Calle 123 #45-67<br>Ciudad, País',
      'contact.info.email.label': 'Correo electrónico',
      'contact.info.phone.label': 'Teléfono',
      'contact.info.hours.label': 'Horario',
      'contact.info.hours.value': 'Lun – Vie: 9:00 – 18:00<br>Sáb: 10:00 – 14:00',

      /* Titles */
      'title.home': 'SmartHome — Domótica Residencial de Lujo',
      'title.theme': '¿Qué es la Domótica? — SmartHome',
      'title.services': 'Servicios — SmartHome',
      'title.contact': 'Contacto — SmartHome'
    },

    en: {
      /* Nav */
      'nav.home': 'Home',
      'nav.what': 'What is it?',
      'nav.services': 'Services',
      'nav.contact': 'Contact',

      /* Hero */
      'hero.eyebrow': 'Luxury Residential Home Automation',
      'hero.headline1': 'Your home,',
      'hero.headline2': 'Intelligent',
      'hero.body': 'We design and automate residential spaces with invisible technology that adapts to your life — not the other way around.',
      'hero.cta.primary': 'View Services',
      'hero.cta.secondary': 'Talk to an expert',
      'hero.scroll': 'Discover',

      /* Features */
      'features.01.label': 'Full Automation',
      'features.01.sub': 'Lighting, shades, climate and more',
      'features.02.label': 'Advanced Security',
      'features.02.sub': 'Real-time surveillance',
      'features.03.label': 'Energy Efficiency',
      'features.03.sub': 'Optimized, measurable consumption',

      /* Showcase */
      'showcase.eyebrow': 'What we do',
      'showcase.title': 'Featured <em>services</em>',
      'showcase.link': 'View all services',
      'showcase.iluminacion.tag': 'Automation',
      'showcase.iluminacion.title': 'Smart Lighting',
      'showcase.iluminacion.desc': 'Full control of lighting ambience with custom scenes for each room.',
      'showcase.seguridad.tag': 'Security',
      'showcase.seguridad.title': 'Connected Security',
      'showcase.seguridad.desc': 'HD cameras, sensors and real-time alerts from anywhere.',
      'showcase.clima.tag': 'Comfort',
      'showcase.clima.title': 'Smart Climate Control',
      'showcase.clima.desc': 'Perfect temperature in every room, automatically.',

      /* Stats */
      'stats.homes': 'Homes automated',
      'stats.years': 'Years of experience',
      'stats.satisfaction': 'Client satisfaction',

      /* CTA index */
      'cta.home.title': 'Ready to transform<br><em>your home?</em>',
      'cta.home.body': 'An expert from our team will visit your home with no obligation and propose the perfect solution.',
      'cta.home.primary': 'Request free consultation',
      'cta.home.secondary': 'Learn more',

      /* Footer */
      'footer.tagline': 'Luxury residential technology. We design homes that respond to those who live in them.',
      'footer.nav.heading': 'Navigation',
      'footer.services.heading': 'Services',
      'footer.contact.heading': 'Contact',
      'footer.contact.visit': 'Request visit',
      'footer.legal': '© 2024 SmartHome by ERC. All rights reserved.',
      'footer.accent': 'To live well is to live intelligently.',

      /* Theme hero */
      'theme.hero.eyebrow': 'Home technology',
      'theme.hero.title': 'What is<br><em>Home Automation?</em>',
      'theme.hero.body': 'Intelligence applied to the space that matters most: your home.',

      /* Theme intro */
      'theme.intro.eyebrow': 'The idea',
      'theme.intro.lead': 'Your home responds to you — not the other way around. That is <em>home automation.</em>',
      'theme.intro.p1': 'Home automation is the full integration of your home: lighting, temperature, security, shades and appliances connected in a single ecosystem you can control from your phone or with your voice.',
      'theme.intro.p2': 'Imagine your coffee maker starting when you wake up, your shades rising with the sun, or getting an alert on your phone if motion is detected at home while you\'re away. All of it is possible today, and we make it real in your home.',
      'theme.intro.p3': 'It\'s not science fiction: it\'s discreet, elegant technology at the service of the people who live in the space.',
      'theme.intro.badge.label': 'Integrated systems',

      /* Theme benefits */
      'theme.benefits.eyebrow': 'Why it matters',
      'theme.benefits.title': 'Three reasons to <em>automate</em>',
      'theme.benefit.01.title': 'Effortless comfort',
      'theme.benefit.01.body': 'Control every device from a single place — your phone, your voice, or fully automatically based on your daily routines. Your home learns how you live.',
      'theme.benefit.02.title': 'Energy savings',
      'theme.benefit.02.body': 'Monitor consumption in real time and schedule devices to run only when needed. Efficiency is invisible day to day — visible on the bill.',
      'theme.benefit.03.title': 'Real security',
      'theme.benefit.03.body': 'Connected cameras, motion sensors and smart alarms keep you informed instantly. Monitor your home from wherever you are, in real time.',

      /* Quote */
      'theme.quote': 'A smart home is not a luxury — it\'s the decision to live with <em>more time, more security and more comfort.</em>',

      /* CTA theme */
      'cta.theme.title': 'Discover the <em>services</em><br>we offer',
      'cta.theme.body': 'From the simplest automation to full high-end installations for the entire home.',
      'cta.theme.primary': 'View all services',
      'cta.theme.secondary': 'Contact us',

      /* Services hero */
      'services.hero.eyebrow': 'What we offer',
      'services.hero.title': 'Our<br><em>Services</em>',
      'services.hero.body': 'Complete home automation solutions for residential spaces. Every installation is designed to measure.',

      /* Services list */
      'services.list.eyebrow': 'Full catalog',
      'services.list.title': 'Every service, <em>tailored to you</em>',

      /* 6 services */
      'services.01.title': 'Home Automation',
      'services.01.body': 'Connect and control lights, shades, garage doors and appliances from a single app. Create routines that trigger automatically: sunrise, night, leaving home.',
      'services.02.title': 'Smart Security',
      'services.02.body': 'High-resolution cameras, motion sensors and connected alarm systems. Get instant alerts on your phone and access live video from anywhere in the world.',
      'services.03.title': 'Energy Savings',
      'services.03.body': 'Monitor consumption in real time and automate devices to run only when needed. Our systems reduce electricity consumption by up to 30% in the first year.',
      'services.04.title': 'Smart Lighting',
      'services.04.body': 'Control the intensity and color temperature of every light point from your phone. Create custom scenes for every moment: dinner, movie, work, rest.',
      'services.05.title': 'Voice Control',
      'services.05.body': 'Native integration with Alexa, Google Home and Siri. Control your entire installation with natural commands. No screens, no friction — just say what you need.',
      'services.06.title': 'Smart Climate Control',
      'services.06.body': 'Smart thermostats that learn your habits and adjust temperature automatically per room. The perfect environment every time you come home.',
      'services.row.link': 'Request info',

      /* CTA services */
      'cta.services.title': 'Interested in a<br><em>service?</em>',
      'cta.services.body': 'Tell us what you need and we\'ll propose the perfect installation for your home, with no obligation.',
      'cta.services.primary': 'Request a quote',
      'cta.services.secondary': 'What is home automation?',

      /* Contact hero */
      'contact.hero.eyebrow': 'Let\'s talk',
      'contact.hero.title': 'Let\'s start<br><em>building</em> your home',
      'contact.hero.body': 'Tell us about your project. We reply in under 24 hours with a tailored proposal.',

      /* Contact form */
      'contact.form.title': 'Write to us',
      'contact.form.sub': 'Complete the form and an expert will contact you to schedule a no-obligation visit.',
      'contact.form.name.label': 'Full name',
      'contact.form.name.placeholder': 'What should we call you?',
      'contact.form.email.label': 'Email address',
      'contact.form.email.placeholder': 'you@email.com',
      'contact.form.phone.label': 'Phone',
      'contact.form.phone.optional': '(optional)',
      'contact.form.phone.placeholder': '+1 234 567 890',
      'contact.form.message.label': 'Your message',
      'contact.form.message.placeholder': 'Tell us what you want to automate, the size of your home, or any detail you consider relevant…',
      'contact.form.submit': 'Send message',

      /* Contact info */
      'contact.info.title': 'You can also<br>find us here',
      'contact.info.sub': 'Our team is available Monday to Friday, 9:00 to 18:00. For urgent matters, call us directly.',
      'contact.info.address.label': 'Address',
      'contact.info.address.value': '123 Street #45-67<br>City, Country',
      'contact.info.email.label': 'Email address',
      'contact.info.phone.label': 'Phone',
      'contact.info.hours.label': 'Hours',
      'contact.info.hours.value': 'Mon – Fri: 9:00 – 18:00<br>Sat: 10:00 – 14:00',

      /* Titles */
      'title.home': 'SmartHome — Luxury Home Automation',
      'title.theme': 'What is Home Automation? — SmartHome',
      'title.services': 'Services — SmartHome',
      'title.contact': 'Contact — SmartHome'
    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  function apply(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.lang = lang;

    // Text-only (safe from XSS)
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val != null) el.textContent = val;
    });

    // Rich HTML (only from our translations dict — trusted source)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = dict[key];
      if (val != null) el.innerHTML = val;
    });

    // Attributes: format="attr:key,attr:key"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach((pair) => {
        const [attr, key] = pair.trim().split(':');
        const val = dict[key];
        if (val != null) el.setAttribute(attr, val);
      });
    });

    // Page title
    const titleKey = document.querySelector('title')?.getAttribute('data-i18n-title');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];

    // Update toggle button labels
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.textContent = lang === 'es' ? 'EN' : 'ES';
      btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    });
  }

  // Toggle handler
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang-toggle]');
    if (!btn) return;
    e.preventDefault();
    const cur = getLang();
    setLang(cur === 'es' ? 'en' : 'es');
  });

  // Apply on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => apply(getLang()));
  } else {
    apply(getLang());
  }
})();
