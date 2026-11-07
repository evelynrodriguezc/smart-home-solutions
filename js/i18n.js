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
      'nav.services.all': 'Ver todos',
      'nav.contact': 'Contacto',

      /* Hero (index) */
      'hero.eyebrow': 'Domótica Residencial de Lujo',
      'hero.headline1': 'Tu hogar,',
      'hero.headline2': 'Inteligente',
      'hero.body': 'Diseñamos y automatizamos espacios residenciales con tecnología invisible que se adapta a tu vida — no al revés.',
      'hero.cta.primary': 'Ver Servicios',
      'hero.cta.secondary': 'Hablar con un experto',
      'hero.scroll': 'Descubrir',
      'dimmer.label': 'Intensidad de la luz',
      'dimmer.hint': 'Desliza',

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
      'footer.svc.auto': 'Automatización',
      'footer.svc.sec': 'Seguridad',
      'footer.svc.clima': 'Climatización',
      'footer.svc.light': 'Iluminación',
      'theme.img.alt': 'Interior de hogar inteligente',
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

      /* Energy / Voice / Climate pages */
      'energy.layers.alt': 'Sala luminosa de día',
      'title.energy': 'Ahorro Energético — SmartHome',
      'energy.hero.eyebrow': 'Servicio 03 · Ahorro energético',
      'energy.hero.title': 'Gastar menos,<br><em>sin pensar en ello</em>',
      'energy.hero.body': 'La casa mide lo que consume, apaga lo que nadie usa y aprovecha la energía cuando es más barata. Tú solo ves la factura bajar.',
      'energy.layers.eyebrow': 'Un mes cualquiera',
      'energy.layers.title': 'Lo que no se ve,<br><em>se puede ahorrar</em>',
      'energy.layers.body': 'Baja despacio: el mes de una casa, semana a semana.',
      'energy.l1.time': 'Semana 1 · Medir',
      'energy.l1.title': 'Ves qué gasta cada cosa',
      'energy.l1.body': 'Un medidor en el tablero eléctrico mide el consumo de cada circuito en tiempo real. Por fin sabes qué aparato se lleva la factura.',
      'energy.l2.time': 'Semana 2 · Cortar',
      'energy.l2.title': 'Nada encendido sin razón',
      'energy.l2.body': 'Lo que queda en standby se apaga de noche y cuando sales. Las luces y el aire no trabajan para una casa vacía.',
      'energy.l3.time': 'Semana 3 · Mover',
      'energy.l3.title': 'Gastar en el mejor momento',
      'energy.l3.body': 'La lavadora y el calentador funcionan cuando la tarifa es más baja o cuando hay sol en los paneles. El mismo confort, menos factura.',
      'energy.legend.1': 'Medir',
      'energy.legend.2': 'Cortar',
      'energy.legend.3': 'Mover',
      'energy.card.label': 'Consumo · este mes',
      'energy.card.tag': 'Ejemplo',
      'energy.card.vs': 'vs. el mes pasado',
      'energy.inc.title': 'Ahorro que se puede medir,<br><em>no promesas</em>',
      'energy.inc.1.title': 'Medidor por circuito',
      'energy.inc.1.body': 'Se instala en el tablero, sin obras. Ves el consumo de la cocina, el aire o el calentador por separado.',
      'energy.inc.2.title': 'Enchufes inteligentes',
      'energy.inc.2.body': 'Para televisores, consolas y todo lo que se queda en standby. Se apagan solos cuando no hacen falta.',
      'energy.inc.3.title': 'Paneles solares y batería',
      'energy.inc.3.body': 'Si los tienes o los quieres, la casa decide cuándo usar, guardar o comprar energía.',
      'energy.inc.4.title': 'Informe cada mes',
      'energy.inc.4.body': 'Un resumen simple en la app: cuánto gastaste, cuánto ahorraste y en qué.',
      'energy.faq.1.q': '¿Cuánto se ahorra de verdad?',
      'energy.faq.1.a': 'Depende de cada casa. En la visita medimos tu consumo y te damos una estimación con tus números antes de instalar nada.',
      'energy.faq.2.q': '¿Necesito paneles solares?',
      'energy.faq.2.a': 'No. Los paneles suman, pero medir y cortar el consumo innecesario ya se nota en la factura.',
      'energy.faq.3.q': '¿Quién ve mis datos de consumo?',
      'energy.faq.3.a': 'Solo tú. Se guardan en la central de tu casa y tú decides si compartes algo.',
      'voice.layers.alt': 'Puerta de entrada con porche',
      'title.voice': 'Control por Voz — SmartHome',
      'voice.hero.eyebrow': 'Servicio 05 · Control por voz',
      'voice.hero.title': 'Pídelo,<br><em>sin buscar el móvil</em>',
      'voice.hero.body': 'Alexa, Google Home o Siri conectados a toda la casa. Le preguntas como a una persona y te responde con lo que de verdad está pasando.',
      'voice.layers.eyebrow': 'Antes de salir',
      'voice.layers.title': 'Pregúntale<br><em>a la casa</em>',
      'voice.layers.body': 'Baja despacio. Estás en la puerta, a punto de salir, y no quieres dar una vuelta revisando todo.',
      'voice.l1.time': '08:10 · Revisar',
      'voice.l1.title': '“¿Quedó alguna ventana abierta?”',
      'voice.l1.body': 'La casa sabe el estado de cada sensor. No tienes que subir al estudio para comprobarlo.',
      'voice.l2.time': '08:11 · Preguntar',
      'voice.l2.title': '“¿Apagué la plancha?”',
      'voice.l2.body': 'Los enchufes inteligentes saben qué está encendido. Si algo quedó prendido, lo apagas con la misma frase.',
      'voice.l3.time': '08:12 · Salir',
      'voice.l3.title': '“Me voy”',
      'voice.l3.body': 'Una sola frase cierra la puerta con llave, apaga las luces, pone el aire en eco y activa la alarma.',
      'voice.legend.1': 'Revisar',
      'voice.legend.2': 'Preguntar',
      'voice.legend.3': 'Salir',
      'voice.say.1': '“¿Quedó alguna ventana abierta?”',
      'voice.reply.1': 'Sí: la del estudio. ¿La cierro?',
      'voice.say.2': '“¿Apagué la plancha?”',
      'voice.reply.2': 'Seguía encendida. Ya la apagué.',
      'voice.say.3': '“Me voy”',
      'voice.reply.3': 'Puerta cerrada · luces apagadas · alarma activada',
      'voice.inc.title': 'Tu voz,<br><em>tus reglas</em>',
      'voice.inc.1.title': 'Con el asistente que ya tienes',
      'voice.inc.1.body': 'Alexa, Google Home o Siri. Si no tienes ninguno, te recomendamos el que mejor encaja con tu casa.',
      'voice.inc.2.title': 'Frases que tú eliges',
      'voice.inc.2.body': '“Buenas noches”, “Me voy” o “Hora de cine”: cada frase puede mover varias cosas a la vez.',
      'voice.inc.3.title': 'Micrófono que se apaga',
      'voice.inc.3.body': 'Cada parlante tiene un botón físico de silencio. Si está apagado, no escucha nada.',
      'voice.inc.4.title': 'Sin voz también',
      'voice.inc.4.body': 'Todo lo que haces con la voz también funciona con los interruptores y con la app.',
      'voice.faq.1.q': '¿Tengo que comprar parlantes nuevos?',
      'voice.faq.1.a': 'No necesariamente. Usamos los que ya tienes si son compatibles, y solo sumamos los que hagan falta.',
      'voice.faq.2.q': '¿Está escuchando todo el tiempo?',
      'voice.faq.2.a': 'Solo espera la palabra de activación, como “Alexa” u “Oye Siri”. Nada se graba antes de eso.',
      'voice.faq.3.q': '¿Entiende español?',
      'voice.faq.3.a': 'Sí. Y en una misma casa cada persona puede hablarle en su idioma.',
      'clima.layers.alt': 'Dormitorio con paredes azules',
      'title.clima': 'Climatización Inteligente — SmartHome',
      'clima.hero.eyebrow': 'Servicio 06 · Climatización',
      'clima.hero.title': 'La temperatura justa,<br><em>antes de llegar</em>',
      'clima.hero.body': 'Termostatos que aprenden tus horarios y ajustan cada habitación por separado. Llegas y la casa ya está como te gusta.',
      'clima.layers.eyebrow': 'Una tarde cualquiera',
      'clima.layers.title': 'La casa<br><em>se prepara sola</em>',
      'clima.layers.body': 'Baja despacio y mira el termostato mientras vuelves a casa.',
      'clima.l1.time': '17:30 · Fuera de casa',
      'clima.l1.title': 'Ahorra mientras no estás',
      'clima.l1.body': 'Con la casa vacía, el aire se queda en modo eco. Nada de enfriar habitaciones para nadie.',
      'clima.l2.time': '17:50 · De camino',
      'clima.l2.title': 'Sabe que vienes',
      'clima.l2.body': 'Cuando tu móvil se acerca, empieza a enfriar. Al abrir la puerta ya está a 22°.',
      'clima.l3.time': '23:00 · A dormir',
      'clima.l3.title': 'Cada habitación, a su temperatura',
      'clima.l3.body': 'La sala se apaga y el dormitorio baja a 20°. A las 6:00 vuelve sola a la temperatura de día.',
      'clima.legend.1': 'Eco',
      'clima.legend.2': 'Llegada',
      'clima.legend.3': 'Noche',
      'clima.status.0': 'Casa vacía · modo eco',
      'clima.status.1': 'Fuera de casa · modo eco',
      'clima.status.2': 'Vienes en camino · enfriando',
      'clima.status.3': 'Dormitorio · hasta las 6:00',
      'clima.card.label': 'Termostato',
      'clima.inc.title': 'Confort por habitación,<br><em>no para toda la casa</em>',
      'clima.inc.1.title': 'Termostato por habitación',
      'clima.inc.1.body': 'Cada espacio tiene su temperatura. El dormitorio no tiene por qué estar como la sala.',
      'clima.inc.2.title': 'Sensores de ventana',
      'clima.inc.2.body': 'Si abres una ventana, el aire se pausa en esa habitación para no enfriar la calle.',
      'clima.inc.3.title': 'Aprende tus horarios',
      'clima.inc.3.body': 'Después de unas semanas sabe a qué hora llegas y a qué hora duermes, y se adelanta.',
      'clima.inc.4.title': 'Con tu equipo actual',
      'clima.inc.4.body': 'Funciona con la mayoría de aires y calefacciones. No hace falta cambiar los equipos.',
      'clima.faq.1.q': '¿Sirve con mi aire acondicionado actual?',
      'clima.faq.1.a': 'En la mayoría de casos sí, con integración directa o con un control infrarrojo. Lo revisamos en la visita.',
      'clima.faq.2.q': '¿Y si alguien se queda en casa?',
      'clima.faq.2.a': 'Los sensores detectan presencia, así que no pasa a modo eco mientras haya alguien.',
      'clima.faq.3.q': '¿Cuánto se nota en la factura?',
      'clima.faq.3.a': 'Depende del clima y de la casa. En la visita te damos una estimación con tus números.',

      /* Security page */
      'title.security': 'Seguridad Inteligente — SmartHome',
      'sec.hero.eyebrow': 'Servicio 02 · Seguridad',
      'sec.hero.title': 'Tranquilidad,<br><em>aunque no estés</em>',
      'sec.hero.body': 'Cámaras, sensores y luces que trabajan juntos. La casa nota lo que pasa, reacciona sola y te avisa solo cuando importa.',
      'sec.layers.eyebrow': 'Una noche cualquiera',
      'sec.layers.title': 'La casa<br><em>no duerme</em>',
      'sec.layers.body': 'Baja despacio. Todos duermen y la alarma está activada. Esto es lo que pasa sin que nadie toque nada.',
      'sec.layers.alt': 'Casa moderna de noche con luces automáticas',
      'sec.l1.time': '02:14 · Jardín',
      'sec.l1.title': 'Algo se mueve afuera',
      'sec.l1.body': 'Un sensor detecta movimiento en el jardín. Se encienden las luces exteriores y la cámara empieza a grabar.',
      'sec.l2.time': '02:15 · Planta baja',
      'sec.l2.title': 'Parece que hay alguien',
      'sec.l2.body': 'Se prende la planta baja, como si alguien se hubiera levantado. Casi siempre basta para que se vayan. Te llega el video, no una sirena.',
      'sec.l3.time': '22:40 · De vuelta',
      'sec.l3.title': 'Llegas a casa',
      'sec.l3.body': 'La puerta te reconoce, la alarma se desactiva sola y la casa te recibe con las luces encendidas.',
      'sec.n1.title': 'Movimiento en el jardín',
      'sec.n1.body': 'Cámara delantera grabando · ahora',
      'sec.n2.title': 'Luces de disuasión encendidas',
      'sec.n2.body': 'La persona se alejó · ver video',
      'sec.n3.title': 'Bienvenida a casa',
      'sec.n3.body': 'Alarma desactivada · puerta abierta',
      'sec.legend.1': 'Jardín',
      'sec.legend.2': 'Planta baja',
      'sec.legend.3': 'Casa',
      'sec.inc.title': 'Menos alarmas falsas,<br><em>más calma</em>',
      'sec.inc.1.title': 'Cámaras que distinguen',
      'sec.inc.1.body': 'Reconocen personas, autos y mascotas. El gato del vecino no te despierta a las 3 de la mañana.',
      'sec.inc.2.title': 'Sensores en puertas y ventanas',
      'sec.inc.2.body': 'Pequeños e inalámbricos. Sabes qué quedó abierto antes de salir, sin dar la vuelta a la casa.',
      'sec.inc.3.title': 'Cerradura inteligente',
      'sec.inc.3.body': 'Abre con el móvil, un código o la llave de siempre. Puedes dar acceso temporal a quien limpia o a una visita.',
      'sec.inc.4.title': 'Grabación local',
      'sec.inc.4.body': 'Los videos se guardan en casa, cifrados. Tú decides si algo sube a la nube.',
      'sec.faq.1.q': '¿Funciona si se va la luz o el internet?',
      'sec.faq.1.a': 'Sí. La central tiene batería de respaldo y conexión móvil propia, así que sigue grabando y avisando.',
      'sec.faq.2.q': '¿Quién puede ver las cámaras?',
      'sec.faq.2.a': 'Solo las personas que tú autorices desde la app. Nosotros no tenemos acceso a tus videos.',
      'sec.faq.3.q': '¿Sirve en un apartamento?',
      'sec.faq.3.a': 'Sí. En apartamentos solemos empezar por la puerta, una cámara interior y sensores en ventanas.',

      /* Automation page */
      'title.automation': 'Automatización del Hogar — SmartHome',
      'auto.hero.eyebrow': 'Servicio 01 · Automatización',
      'auto.hero.title': 'La casa,<br><em>en piloto automático</em>',
      'auto.hero.body': 'Rutinas que corren solas: la casa sabe a qué hora despiertas, cuándo sales y cuándo vuelves. Tú no tienes que tocar nada.',
      'auto.layers.eyebrow': 'Un día cualquiera',
      'auto.layers.title': 'La casa<br><em>sigue al sol</em>',
      'auto.layers.body': 'Baja despacio: un día cualquiera, de la madrugada a la tarde, y lo que la casa hace sola en cada momento.',
      'auto.layers.alt': 'Sala con ventana y persiana motorizada',
      'auto.l1.time': '06:30 · Amanecer',
      'auto.l1.title': 'Despertar con luz real',
      'auto.l1.body': 'Las persianas suben un poco antes de que suene la alarma. Despiertas con luz natural, no con un pitido.',
      'auto.l2.time': '09:00 · Mañana',
      'auto.l2.title': 'Abiertas del todo',
      'auto.l2.body': 'Cuando ya no hay nadie durmiendo, se abren del todo y las luces se apagan solas. Toda la luz es natural.',
      'auto.l3.time': '14:00 · Sol fuerte',
      'auto.l3.title': 'Sombra a tiempo',
      'auto.l3.body': 'Si el sol pega directo, bajan a la mitad. Protegen los muebles y la casa no se calienta.',
      'auto.inc.title': 'Lo que se mueve solo,<br><em>y lo que no</em>',
      'auto.inc.1.title': 'Motores silenciosos',
      'auto.inc.1.body': 'Para persianas, cortinas y toldos. En la mayoría de ventanas se instalan sobre lo que ya tienes.',
      'auto.inc.2.title': 'Rutinas por hora y por sol',
      'auto.inc.2.body': 'Se ajustan solas a la hora del amanecer de cada época del año, sin reprogramar nada.',
      'auto.inc.3.title': 'Escenas de un toque',
      'auto.inc.3.body': '"Salgo de casa" apaga las luces, baja las persianas y cierra el garaje a la vez.',
      'auto.inc.4.title': 'Control manual, siempre',
      'auto.inc.4.body': 'Botones de pared y app. Si quieres cambiar algo en el momento, lo cambias.',
      'auto.faq.1.q': '¿Puedo motorizar las persianas que ya tengo?',
      'auto.faq.1.a': 'En la mayoría de casos sí. En la visita revisamos el tipo de persiana y te decimos si conviene adaptarla o cambiarla.',
      'auto.faq.2.q': '¿Qué pasa si se va la luz?',
      'auto.faq.2.a': 'Los motores se quedan donde estaban y se pueden mover a mano. Cuando vuelve la energía, retoman sus rutinas.',
      'auto.faq.3.q': '¿Es difícil cambiar una rutina?',
      'auto.faq.3.a': 'No. Se edita desde la app en segundos: cambias la hora o cuánto se abren y listo.',

      /* Lighting page */
      'title.lighting': 'Iluminación Inteligente — SmartHome',
      'svc.back': 'Todos los servicios',
      'services.row.more': 'Ver servicio',
      'lighting.hero.eyebrow': 'Servicio 04 · Iluminación',
      'lighting.hero.title': 'La luz,<br><em>por capas</em>',
      'lighting.hero.body': 'Una buena iluminación no es poner más focos. Es combinar tres tipos de luz y dejar que cada una aparezca cuando hace falta.',
      'lighting.layers.eyebrow': 'Cómo se diseña',
      'lighting.layers.title': 'Tres capas,<br><em>una escena</em>',
      'lighting.layers.body': 'Baja despacio. La habitación se va encendiendo capa por capa, igual que la diseñamos.',
      'lighting.layers.alt': 'Apartamento de noche con luz bajo los gabinetes, luz de acento y luz en el techo',
      'lighting.l1.title': 'Luz de tarea',
      'lighting.l1.body': 'Donde haces algo: la tira bajo los gabinetes ilumina la encimera para cocinar. Se enciende al entrar a la cocina y se apaga sola cuando sales.',
      'lighting.l2.title': 'Luz de acento',
      'lighting.l2.body': 'Resalta lo que importa: una luz dirigida al cuadro. No sirve para hacer nada, pero le da profundidad a la sala.',
      'lighting.l3.title': 'Luz ambiental',
      'lighting.l3.body': 'La base de todo: luz oculta en los bordes del techo que baña las paredes y llena el espacio de forma pareja.',
      'lighting.legend.1': 'Tarea',
      'lighting.legend.2': 'Acento',
      'lighting.legend.3': 'Ambiente',
      'lighting.inc.eyebrow': 'Qué incluye',
      'lighting.inc.title': 'Todo lo necesario,<br><em>nada de más</em>',
      'lighting.inc.1.title': 'Estudio de luz',
      'lighting.inc.1.body': 'Visitamos el espacio, vemos cómo lo usas y diseñamos las capas de cada habitación antes de instalar nada.',
      'lighting.inc.2.title': 'Luminarias regulables',
      'lighting.inc.2.body': 'Focos, lámparas y tiras LED sin parpadeo, que bajan hasta el 1% sin cambiar de color ni zumbar.',
      'lighting.inc.3.title': 'Interruptores de siempre',
      'lighting.inc.3.body': 'El móvil es un extra, no un requisito. Los interruptores de pared siguen funcionando para cualquiera que viva o visite la casa.',
      'lighting.inc.4.title': 'Escenas programadas',
      'lighting.inc.4.body': 'Cena, película, trabajo, descanso. Las dejamos configuradas y las ajustamos contigo durante el primer mes.',
      'lighting.faq.eyebrow': 'Preguntas frecuentes',
      'lighting.faq.title': 'Antes de<br><em>empezar</em>',
      'lighting.faq.1.q': '¿Hay que cambiar toda la instalación eléctrica?',
      'lighting.faq.1.a': 'No. En la mayoría de casas usamos el cableado existente y solo cambiamos los interruptores y algunas luminarias.',
      'lighting.faq.2.q': '¿Qué pasa si se cae el internet?',
      'lighting.faq.2.a': 'Todo sigue funcionando. Los interruptores y las escenas programadas corren dentro de la casa, sin depender de la nube.',
      'lighting.faq.3.q': '¿Funciona con Alexa, Google Home o Siri?',
      'lighting.faq.3.a': 'Sí, con los tres. Puedes usar el asistente que ya tienes o ninguno.',

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
      'nav.services.all': 'View all',
      'nav.contact': 'Contact',

      /* Hero */
      'hero.eyebrow': 'Luxury Residential Home Automation',
      'hero.headline1': 'Your home,',
      'hero.headline2': 'Intelligent',
      'hero.body': 'We design and automate residential spaces with invisible technology that adapts to your life — not the other way around.',
      'hero.cta.primary': 'View Services',
      'hero.cta.secondary': 'Talk to an expert',
      'hero.scroll': 'Discover',
      'dimmer.label': 'Light intensity',
      'dimmer.hint': 'Slide',

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
      'footer.svc.auto': 'Automation',
      'footer.svc.sec': 'Security',
      'footer.svc.clima': 'Climate',
      'footer.svc.light': 'Lighting',
      'theme.img.alt': 'Smart home interior',
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

      /* Energy / Voice / Climate pages */
      'energy.layers.alt': 'Bright living room during the day',
      'title.energy': 'Energy Savings — SmartHome',
      'energy.hero.eyebrow': 'Service 03 · Energy savings',
      'energy.hero.title': 'Spend less,<br><em>without thinking about it</em>',
      'energy.hero.body': 'The house measures what it uses, switches off what nobody needs and uses energy when it is cheapest. You just watch the bill go down.',
      'energy.layers.eyebrow': 'Any given month',
      'energy.layers.title': 'What you can\'t see,<br><em>you can save</em>',
      'energy.layers.body': 'Scroll slowly: one home\'s month, week by week.',
      'energy.l1.time': 'Week 1 · Measure',
      'energy.l1.title': 'See what everything uses',
      'energy.l1.body': 'A meter in the electrical panel measures every circuit in real time. You finally know which appliance is behind the bill.',
      'energy.l2.time': 'Week 2 · Cut',
      'energy.l2.title': 'Nothing on for no reason',
      'energy.l2.body': 'Anything on standby switches off at night and when you leave. Lights and air conditioning don\'t run for an empty house.',
      'energy.l3.time': 'Week 3 · Shift',
      'energy.l3.title': 'Use energy at the right time',
      'energy.l3.body': 'The washing machine and water heater run when rates are lowest or the panels have sun. Same comfort, smaller bill.',
      'energy.legend.1': 'Measure',
      'energy.legend.2': 'Cut',
      'energy.legend.3': 'Shift',
      'energy.card.label': 'Usage · this month',
      'energy.card.tag': 'Example',
      'energy.card.vs': 'vs. last month',
      'energy.inc.title': 'Savings you can measure,<br><em>not promises</em>',
      'energy.inc.1.title': 'Per-circuit meter',
      'energy.inc.1.body': 'Installed in the panel, no construction. See the kitchen, AC or water heater separately.',
      'energy.inc.2.title': 'Smart plugs',
      'energy.inc.2.body': 'For TVs, consoles and anything left on standby. They switch off on their own when not needed.',
      'energy.inc.3.title': 'Solar panels and battery',
      'energy.inc.3.body': 'If you have them or want them, the house decides when to use, store or buy energy.',
      'energy.inc.4.title': 'Monthly report',
      'energy.inc.4.body': 'A simple summary in the app: how much you used, how much you saved and on what.',
      'energy.faq.1.q': 'How much do you really save?',
      'energy.faq.1.a': 'It depends on the home. During the visit we measure your usage and give you an estimate with your own numbers before installing anything.',
      'energy.faq.2.q': 'Do I need solar panels?',
      'energy.faq.2.a': 'No. Panels help, but measuring and cutting unnecessary usage already shows on the bill.',
      'energy.faq.3.q': 'Who sees my usage data?',
      'energy.faq.3.a': 'Only you. They are stored on your home hub and you decide whether to share anything.',
      'voice.layers.alt': 'Front door with a porch',
      'title.voice': 'Voice Control — SmartHome',
      'voice.hero.eyebrow': 'Service 05 · Voice control',
      'voice.hero.title': 'Just say it,<br><em>no phone needed</em>',
      'voice.hero.body': 'Alexa, Google Home or Siri connected to the whole house. Ask it like you would a person and it answers with what is really going on.',
      'voice.layers.eyebrow': 'Before you leave',
      'voice.layers.title': 'Just ask<br><em>the house</em>',
      'voice.layers.body': 'Scroll slowly. You are at the door, about to leave, and you don\'t want to walk around checking everything.',
      'voice.l1.time': '08:10 · Check',
      'voice.l1.title': '“Is any window open?”',
      'voice.l1.body': 'The house knows the state of every sensor. No need to go up to the study to check.',
      'voice.l2.time': '08:11 · Ask',
      'voice.l2.title': '“Did I turn off the iron?”',
      'voice.l2.body': 'Smart plugs know what is on. If something was left on, you turn it off with the same phrase.',
      'voice.l3.time': '08:12 · Leave',
      'voice.l3.title': '“I\'m leaving”',
      'voice.l3.body': 'One phrase locks the door, turns off the lights, sets the AC to eco and arms the alarm.',
      'voice.legend.1': 'Check',
      'voice.legend.2': 'Ask',
      'voice.legend.3': 'Leave',
      'voice.say.1': '“Is any window open?”',
      'voice.reply.1': 'Yes, the study one. Shall I close it?',
      'voice.say.2': '“Did I turn off the iron?”',
      'voice.reply.2': 'It was still on. I turned it off.',
      'voice.say.3': '“I\'m leaving”',
      'voice.reply.3': 'Door locked · lights off · alarm on',
      'voice.inc.title': 'Your voice,<br><em>your rules</em>',
      'voice.inc.1.title': 'With the assistant you already have',
      'voice.inc.1.body': 'Alexa, Google Home or Siri. If you have none, we recommend the one that fits your home best.',
      'voice.inc.2.title': 'Phrases you choose',
      'voice.inc.2.body': '“Good night”, “I\'m leaving” or “Movie time”: each phrase can control several things at once.',
      'voice.inc.3.title': 'A microphone you can switch off',
      'voice.inc.3.body': 'Every speaker has a physical mute button. When it is off, it hears nothing.',
      'voice.inc.4.title': 'Without voice too',
      'voice.inc.4.body': 'Everything you do by voice also works with the switches and the app.',
      'voice.faq.1.q': 'Do I need new speakers?',
      'voice.faq.1.a': 'Not necessarily. We use the ones you have if they are compatible and only add what is missing.',
      'voice.faq.2.q': 'Is it always listening?',
      'voice.faq.2.a': 'It only waits for the wake word, like “Alexa” or “Hey Siri”. Nothing is recorded before that.',
      'voice.faq.3.q': 'Does it understand Spanish?',
      'voice.faq.3.a': 'Yes. And in the same home everyone can speak to it in their own language.',
      'clima.layers.alt': 'Bedroom with blue walls',
      'title.clima': 'Smart Climate Control — SmartHome',
      'clima.hero.eyebrow': 'Service 06 · Climate control',
      'clima.hero.title': 'The right temperature,<br><em>before you arrive</em>',
      'clima.hero.body': 'Thermostats that learn your schedule and adjust each room separately. You walk in and the house is already just right.',
      'clima.layers.eyebrow': 'Any given evening',
      'clima.layers.title': 'The house<br><em>gets ready on its own</em>',
      'clima.layers.body': 'Scroll slowly and watch the thermostat while you head home.',
      'clima.l1.time': '17:30 · Away',
      'clima.l1.title': 'Saving while you\'re out',
      'clima.l1.body': 'With the house empty, the AC stays in eco mode. No cooling rooms for nobody.',
      'clima.l2.time': '17:50 · On the way',
      'clima.l2.title': 'It knows you\'re coming',
      'clima.l2.body': 'As your phone gets closer, it starts cooling. By the time you open the door it\'s 22°.',
      'clima.l3.time': '23:00 · Bedtime',
      'clima.l3.title': 'Every room at its own temperature',
      'clima.l3.body': 'The living room switches off and the bedroom drops to 20°. At 6:00 it goes back to the daytime setting on its own.',
      'clima.legend.1': 'Eco',
      'clima.legend.2': 'Arrival',
      'clima.legend.3': 'Night',
      'clima.status.0': 'Empty house · eco mode',
      'clima.status.1': 'Away · eco mode',
      'clima.status.2': 'On your way · cooling',
      'clima.status.3': 'Bedroom · until 6:00',
      'clima.card.label': 'Thermostat',
      'clima.inc.title': 'Comfort per room,<br><em>not the whole house</em>',
      'clima.inc.1.title': 'A thermostat per room',
      'clima.inc.1.body': 'Every space has its own temperature. The bedroom doesn\'t have to match the living room.',
      'clima.inc.2.title': 'Window sensors',
      'clima.inc.2.body': 'Open a window and the AC pauses in that room so you\'re not cooling the street.',
      'clima.inc.3.title': 'Learns your schedule',
      'clima.inc.3.body': 'After a few weeks it knows when you get home and when you sleep, and gets ahead of you.',
      'clima.inc.4.title': 'With your current system',
      'clima.inc.4.body': 'Works with most AC and heating systems. No need to replace them.',
      'clima.faq.1.q': 'Does it work with my current AC?',
      'clima.faq.1.a': 'In most cases yes, through direct integration or an infrared controller. We check during the visit.',
      'clima.faq.2.q': 'What if someone stays home?',
      'clima.faq.2.a': 'Sensors detect presence, so it won\'t switch to eco mode while someone is home.',
      'clima.faq.3.q': 'How much does it show on the bill?',
      'clima.faq.3.a': 'It depends on the climate and the home. During the visit we give you an estimate with your own numbers.',

      /* Security page */
      'title.security': 'Smart Security — SmartHome',
      'sec.hero.eyebrow': 'Service 02 · Security',
      'sec.hero.title': 'Peace of mind,<br><em>even when you\'re away</em>',
      'sec.hero.body': 'Cameras, sensors and lights that work together. The house notices what happens, reacts on its own and only alerts you when it matters.',
      'sec.layers.eyebrow': 'Any given night',
      'sec.layers.title': 'The house<br><em>never sleeps</em>',
      'sec.layers.body': 'Scroll slowly. Everyone is asleep and the alarm is on. This is what happens without anyone touching a thing.',
      'sec.layers.alt': 'Modern house at night with automatic lights',
      'sec.l1.time': '02:14 · Garden',
      'sec.l1.title': 'Something moves outside',
      'sec.l1.body': 'A sensor picks up movement in the garden. The outdoor lights come on and the camera starts recording.',
      'sec.l2.time': '02:15 · Ground floor',
      'sec.l2.title': 'Looks like someone\'s up',
      'sec.l2.body': 'The ground floor lights up, as if someone just got out of bed. That\'s almost always enough to make them leave. You get the video, not a siren.',
      'sec.l3.time': '22:40 · Back home',
      'sec.l3.title': 'You get home',
      'sec.l3.body': 'The door recognizes you, the alarm turns itself off and the house welcomes you with the lights on.',
      'sec.n1.title': 'Motion in the garden',
      'sec.n1.body': 'Front camera recording · now',
      'sec.n2.title': 'Deterrent lights on',
      'sec.n2.body': 'The person walked away · view video',
      'sec.n3.title': 'Welcome home',
      'sec.n3.body': 'Alarm off · door unlocked',
      'sec.legend.1': 'Garden',
      'sec.legend.2': 'Ground floor',
      'sec.legend.3': 'House',
      'sec.inc.title': 'Fewer false alarms,<br><em>more calm</em>',
      'sec.inc.1.title': 'Cameras that tell things apart',
      'sec.inc.1.body': 'They recognize people, cars and pets. The neighbor\'s cat won\'t wake you up at 3 a.m.',
      'sec.inc.2.title': 'Door and window sensors',
      'sec.inc.2.body': 'Small and wireless. Know what was left open before you leave, without walking around the house.',
      'sec.inc.3.title': 'Smart lock',
      'sec.inc.3.body': 'Open it with your phone, a code or your regular key. Give temporary access to a cleaner or a guest.',
      'sec.inc.4.title': 'Local recording',
      'sec.inc.4.body': 'Videos are stored at home, encrypted. You decide whether anything goes to the cloud.',
      'sec.faq.1.q': 'Does it work if the power or internet goes down?',
      'sec.faq.1.a': 'Yes. The hub has a backup battery and its own cellular connection, so it keeps recording and alerting.',
      'sec.faq.2.q': 'Who can see the cameras?',
      'sec.faq.2.a': 'Only the people you authorize in the app. We have no access to your videos.',
      'sec.faq.3.q': 'Does it work in an apartment?',
      'sec.faq.3.a': 'Yes. In apartments we usually start with the door, an indoor camera and window sensors.',

      /* Automation page */
      'title.automation': 'Home Automation — SmartHome',
      'auto.hero.eyebrow': 'Service 01 · Automation',
      'auto.hero.title': 'Your home,<br><em>on autopilot</em>',
      'auto.hero.body': 'Routines that run on their own: the house knows when you wake up, when you leave and when you get back. You don\'t have to touch a thing.',
      'auto.layers.eyebrow': 'Any given day',
      'auto.layers.title': 'The house<br><em>follows the sun</em>',
      'auto.layers.body': 'Scroll slowly: an ordinary day, from before dawn to the afternoon, and what the house does on its own at each moment.',
      'auto.layers.alt': 'Living room with a window and a motorized shade',
      'auto.l1.time': '06:30 · Sunrise',
      'auto.l1.title': 'Wake up to real light',
      'auto.l1.body': 'The shades rise a little before the alarm goes off. You wake up to daylight, not a beep.',
      'auto.l2.time': '09:00 · Morning',
      'auto.l2.title': 'Fully open',
      'auto.l2.body': 'Once nobody is sleeping, they open all the way and the lights switch off on their own. All the light is natural.',
      'auto.l3.time': '14:00 · Strong sun',
      'auto.l3.title': 'Shade, right on time',
      'auto.l3.body': 'When the sun hits directly, they come down halfway. Your furniture is protected and the house stays cool.',
      'auto.inc.title': 'What moves on its own,<br><em>and what doesn\'t</em>',
      'auto.inc.1.title': 'Quiet motors',
      'auto.inc.1.body': 'For shades, curtains and awnings. On most windows they fit onto what you already have.',
      'auto.inc.2.title': 'Routines by clock and by sun',
      'auto.inc.2.body': 'They adjust to the sunrise time of each season on their own, with no reprogramming.',
      'auto.inc.3.title': 'One-tap scenes',
      'auto.inc.3.body': '"Leaving home" turns off the lights, lowers the shades and closes the garage at once.',
      'auto.inc.4.title': 'Manual control, always',
      'auto.inc.4.body': 'Wall buttons and an app. If you want to change something in the moment, you just do.',
      'auto.faq.1.q': 'Can I motorize the shades I already have?',
      'auto.faq.1.a': 'In most cases, yes. During the visit we check the type of shade and tell you whether to adapt or replace it.',
      'auto.faq.2.q': 'What happens during a power cut?',
      'auto.faq.2.a': 'The motors stay where they were and can be moved by hand. When power returns, they pick up their routines again.',
      'auto.faq.3.q': 'Is it hard to change a routine?',
      'auto.faq.3.a': 'No. You edit it in the app in seconds: change the time or how far they open, and that\'s it.',

      /* Lighting page */
      'title.lighting': 'Smart Lighting — SmartHome',
      'svc.back': 'All services',
      'services.row.more': 'View service',
      'lighting.hero.eyebrow': 'Service 04 · Lighting',
      'lighting.hero.title': 'Light,<br><em>in layers</em>',
      'lighting.hero.body': 'Good lighting isn\'t about adding more fixtures. It\'s about combining three kinds of light and letting each one appear when it\'s needed.',
      'lighting.layers.eyebrow': 'How it\'s designed',
      'lighting.layers.title': 'Three layers,<br><em>one scene</em>',
      'lighting.layers.body': 'Scroll slowly. The room lights up layer by layer, just the way we design it.',
      'lighting.layers.alt': 'Apartment at night with under-cabinet, accent and ceiling light',
      'lighting.l1.title': 'Task light',
      'lighting.l1.body': 'Where you do something: the strip under the cabinets lights the counter for cooking. On when you walk into the kitchen, off on its own when you leave.',
      'lighting.l2.title': 'Accent light',
      'lighting.l2.body': 'It highlights what matters: a light aimed at the painting. It isn\'t for doing anything, but it gives the room depth.',
      'lighting.l3.title': 'Ambient light',
      'lighting.l3.body': 'The base of everything: light hidden along the ceiling edges that washes the walls and fills the space evenly.',
      'lighting.legend.1': 'Task',
      'lighting.legend.2': 'Accent',
      'lighting.legend.3': 'Ambient',
      'lighting.inc.eyebrow': 'What\'s included',
      'lighting.inc.title': 'Everything you need,<br><em>nothing more</em>',
      'lighting.inc.1.title': 'Lighting study',
      'lighting.inc.1.body': 'We visit the space, see how you use it and design the layers for each room before installing anything.',
      'lighting.inc.2.title': 'Dimmable fixtures',
      'lighting.inc.2.body': 'Flicker-free spots, lamps and LED strips that dim down to 1% without shifting color or buzzing.',
      'lighting.inc.3.title': 'Regular switches',
      'lighting.inc.3.body': 'The phone is an extra, not a requirement. Wall switches keep working for anyone who lives in or visits the house.',
      'lighting.inc.4.title': 'Programmed scenes',
      'lighting.inc.4.body': 'Dinner, movie, work, rest. We set them up and fine-tune them with you during the first month.',
      'lighting.faq.eyebrow': 'FAQ',
      'lighting.faq.title': 'Before you<br><em>start</em>',
      'lighting.faq.1.q': 'Do I need to rewire the whole house?',
      'lighting.faq.1.a': 'No. In most homes we use the existing wiring and only replace the switches and a few fixtures.',
      'lighting.faq.2.q': 'What happens if the internet goes down?',
      'lighting.faq.2.a': 'Everything keeps working. Switches and programmed scenes run inside the house, without relying on the cloud.',
      'lighting.faq.3.q': 'Does it work with Alexa, Google Home or Siri?',
      'lighting.faq.3.a': 'Yes, all three. Use the assistant you already have, or none at all.',

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

    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang } }));

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
