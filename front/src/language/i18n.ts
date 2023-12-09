import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { TranslationSchema } from './schema-i18n'

const resources: Resource = {
  en: {
    translation: {
      title: 'Expert Advice for your Nationality Procedures in Barcelona',
      description:
        'More than a service, we offer personalized solutions for your situation',
      buttonAction: 'Book Appointment',
      about: {
        title: 'ABOUT US',
        description:
          'For over 15 years, we have been advising and improving the quality of life for many foreigners arriving in Spain. On our website, you will find some of the answers you need to resolve some basic immigration issues.',
      },
      bot: {
        welcome: 'Hello! How can we assist you?',
        question: {
          1: `Who are we?`,
          2: `Our best service?`,
          3: `How can you contact us?`,
        },
      },
      services: {
        title: 'OUR SERVICES',
        description:
          'We offer a complete range of solutions to manage your nationality and immigration procedures, adapting to your particular needs',
        service: {
          a: {
            subtitle: 'Multimanagement',
            description:
              'Comprehensive management of your administrative needs, simplifying each process for you',
          },
          b: {
            subtitle: 'Immigration',
            description:
              'We offer clear and effective solutions to regularize and understand your migratory situation in Spain',
          },
          c: {
            subtitle: 'Nationality',
            description:
              'We facilitate the path to citizenship, accompanying you at each stage of the process',
          },
          d: {
            subtitle: 'Legal Service',
            description:
              'We provide legal representation and specialized advice at each step of your legal procedures and challenges',
          },
        },
      },
      buttonAction2: 'Want to know more',
      powers: {
        title: 'WHAT WE OFFER',
        description:
          'Select your category of interest and learn more about the different services we offer',
        buttonAction: 'Select category',
        power: {
          a: {
            title: 'Notarial Powers',
            description:
              'It is the authority given to a person to carry out and execute certain legal and material acts on our behalf. The attorney-in-fact (the person who receives the authority) does not have to accept the power; it is a unilateral decision of the grantor (the person who grants the authority).',
          },
          b: {
            title: 'a',
            description: 'a',
          },
        },
      },
      teams: {
        title: 'OUR TEAM',
        description: 'Find your advisor',
        buttonAction: 'Schedule Appointment',
        team: {
          a: {
            name: 'Maria Torres',
            profession: 'Jurisdiction Specialist',
          },
          b: {
            name: 'Bella Fuentes',
            profession: 'Jurisdiction Specialist',
          },
          c: {
            name: 'Martha Ventanilla',
            profession: 'Jurisdiction Specialist',
          },
        },
      },
      contact: {
        title: 'Contact Information',
        description:
          'We work at 101% in your process to offer you the best solution.',
        numberPhoneOne: '(+34) 638.35.35.30',
        numberPhoneTwo: '(+34) 663.72.23.00',
        address: 'Calle Joan Güell 184 - Nou boulevard, Office 25, Barcelona.',
        social: 'Our social networks',
        form: {
          field1: {
            name: 'Name',
            placeholder: 'Jack Sullivan',
          },
          field2: {
            name: 'Email',
            placeholder: 'jack@example.com',
          },
          field3: {
            name: 'Subject or topic',
            placeholder: 'Legal Advice',
          },
          field4: {
            name: 'Message',
            placeholder: 'Write a message',
          },
          buttonAction: 'Send Message',
        },
      },
      footer: {
        description:
          'We work at 101% in your process to offer you the best solution',
        newsletter: {
          title: 'NEWSLETTER',
          description: 'Subscribe to our newsletter to get the latest news',
          placeholder: 'Your e-mail',
          links: {
            1: 'About Us',
            2: 'Our Services',
            3: 'Offerings',
            4: 'Contact Us',
            5: 'Blog',
          },
        },
      },
    } as TranslationSchema,
  },
//
  es: {
    translation: {
      title: 'Asesoría experta para tus gestiones de nacionalidad en Barcelona',
      description:
        'Más que un servicio, ofrecemos soluciones personalizadas para tu situación',
      buttonAction: 'Reservar Cita',
      about: {
        title: 'SOBRE NOSOTROS',
        description:
          'Llevamos más de 15 años asesorando y mejorando la calidad de vida de muchos extranjeros que llegan a España. En nuestra Web encontrarás algunas de las respuestas que necesitas para resolver algunos temas básicos de extranjería.',
      },
      bot: {
        welcome: 'Hola ¿Como podemos ayudarte?',
        question: {
          1: `Quienes Somos?`,
          2: `Nuestro mejor servicio?`,
          3: `Como te contactas con nosotros?`,
        },
      },
      services: {
        title: 'NUESTROS SERVICIOS',
        description:
          'Ofrecemos un rango completo de soluciones para gestionar tus trámites de nacionalidad y extranjería, adaptándonos a tus necesidades particulares',
        service: {
          a: {
            subtitle: 'Multigestión',
            description:
              'Gestión y manejo integral de tus necesidades administrativas, simplificando cada proceso para ti',
          },
          b: {
            subtitle: 'Extranjería',
            description:
              'Ofrecemos soluciones claras y efectivas para regularizar y comprender tu situación migratoria en España',
          },
          c: {
            subtitle: 'Nacionalidad',
            description:
              'Facilitamos el camino hacia la ciudadanía, acompañándote en cada etapa del proceso',
          },
          d: {
            subtitle: 'Servicio Jurídico',
            description:
              'Brindamos representación legal y asesoría especializada en cada paso de tus trámites y desafíos legales',
          },
        },
      },
      buttonAction2: 'Quieres saber mas',
      powers: {
        title: 'QUE OFRECEMOS',
        description:
          'Selecciona tu categoría de interés y conoce mas sobre los diferentes servicios que proponemos',
        buttonAction: 'Selecciona la categoría',
        power: {
          a: {
            title: 'Poderes Notariales',
            description:
              'Es la autoridad que se da a una persona para realizar y ejecutar determinados actos jurídicos y materiales en nuestro nombre. El apoderado (persona que recibe la autoridad) no tiene que aceptar el poder, es una decisión unilateral del poderdante (persona que concede la autoridad).',
          },
          b: {
            title: 'a',
            description: 'a',
          },
        },
      },
      teams: {
        title: 'NUESTRO EQUIPO',
        description: 'Encuentra tu asesor',
        buttonAction: 'Agendar Cita',
        team: {
          a: {
            name: 'Maria Torres',
            profession: 'Especialista en Jurisdicción',
          },
          b: {
            name: 'Bella Fuentes',
            profession: 'Especialista en Jurisdicción',
          },
          c: {
            name: 'Martha Ventanilla',
            profession: 'Especialista en Jurisdicción',
          },
        },
      },
      contact: {
        title: 'Información de Contacto',
        description:
          'Trabajamos al 101% en tu trámite para ofrecerte la mejor solución.',
        numberPhoneOne: '(+34) 638.35.35.30',
        numberPhoneTwo: '(+34) 663.72.23.00',
        address:
          'Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona.',
        social: 'Nuestras redes sociales',
        form: {
          field1: {
            name: 'Nombre',
            placeholder: 'Jack Sullivan',
          },
          field2: {
            name: 'Email',
            placeholder: 'jack@ejemplo.com',
          },
          field3: {
            name: 'Asunto o tema',
            placeholder: 'Asesoría Jurídica',
          },
          field4: {
            name: 'Mensaje',
            placeholder: 'Escribe un mensaje',
          },
          buttonAction: 'Enviar mensaje',
        },
      },
      footer: {
        description:
          'Trabajamos al 101% en tu tramite para ofrecerte la mejor solucion',
        newsletter: {
          title: 'NEWS LETTER',
          description:
            'Suscribete a nuestra newsletter para obtener las ultimas noticias',
          placeholder: 'Tu correo electrónico',
          links: {
            1: 'Nosotros',
            2: 'Nuestros Servicios',
            3: 'Ofrecemos',
            4: 'Contáctenos',
            5: 'Blog',
          },
        },
      },
    } as TranslationSchema,
  },
//
  ca: {
    translation: {
      title: `Consell Expert per als teus Procediments de Nacionalitat a Barcelona`,
      description: `Més que un servei, oferim solucions personalitzades per a la teva situació`,
      buttonAction: `Reservar Cita`,
      about: {
        title: `SOBRE NOSALTRES`,
        description: `Portem més de 15 anys assessorant i millorant la qualitat de vida de molts estrangers que arriben a Espanya. En el nostre web trobaràs algunes de les respostes que necessites per resoldre alguns temes bàsics d'estrangeria.`,
      },
      bot: {
        welcome: 'Hola! Com podem ajudar-te?',
        question: {
          1: `Qui som?`,
          2: `El nostre millor servei?`,
          3: `Com pots contactar amb nosaltres?`,
        },
      },
      services: {
        title: `ELS NOSTRES SERVEIS`,
        description: `Oferim una gamma completa de solucions per gestionar els teus tràmits de nacionalitat i estrangeria, adaptant-nos a les teves necessitats particulars`,
        service: {
          a: {
            subtitle: `Multigestió`,
            description: `Gestió i maneig integral de les teves necessitats administratives, simplificant cada procés per a tu`,
          },
          b: {
            subtitle: `Estrangeria`,
            description: `Oferim solucions clares i efectives per regularitzar i comprendre la teva situació migratòria a Espanya`,
          },
          c: {
            subtitle: `Nacionalitat`,
            description: `Facilitem el camí cap a la ciutadania, acompanyant-te en cada etapa del procés`,
          },
          d: {
            subtitle: `Servei Jurídic`,
            description: `Oferim representació legal i assessorament especialitzat en cada pas dels teus tràmits i reptes legals`,
          },
        },
      },
      buttonAction2: `Vols saber més`,
      powers: {
        title: `QUÈ OFERIM`,
        description: `Selecciona la teva categoria d'interès i coneix més sobre els diferents serveis que proposem`,
        buttonAction: `Selecciona la categoria`,
        power: {
          a: {
            title: `Poders Notarials`,
            description: `És l'autoritat que es dóna a una persona per realitzar i executar determinats actes jurídics i materials en el nostre nom. L'apoderat (persona que rep l'autoritat) no ha d'acceptar el poder, és una decisió unilateral del poderdant (persona que concedeix l'autoritat).`,
          },
          b: {
            title: `a`,
            description: `a`,
          },
        },
      },
      teams: {
        title: `EL NOSTRE EQUIP`,
        description: `Troba el teu assessor`,
        buttonAction: `Agenda Cita`,
        team: {
          a: {
            name: `Maria Torres`,
            profession: `Especialista en Jurisdicció`,
          },
          b: {
            name: `Bella Fuentes`,
            profession: `Especialista en Jurisdicció`,
          },
          c: {
            name: `Martha Ventanilla`,
            profession: `Especialista en Jurisdicció`,
          },
        },
      },
      contact: {
        title: `Informació de Contacte`,
        description: `Treballem al 101% en el teu tràmit per oferir-te la millor solució.`,
        numberPhoneOne: `(+34) 638.35.35.30`,
        numberPhoneTwo: `(+34) 663.72.23.00`,
        address: `Carrer Joan Güell 184 - Nou boulevard, Despatx 25, Barcelona.`,
        social: `Les nostres xarxes socials`,
        form: {
          field1: {
            name: `Nom`,
            placeholder: `Jack Sullivan`,
          },
          field2: {
            name: `Email`,
            placeholder: `jack@exemple.com`,
          },
          field3: {
            name: `Assumpte o tema`,
            placeholder: `Assessoria Jurídica`,
          },
          field4: {
            name: `Missatge`,
            placeholder: `Escriu un missatge`,
          },
          buttonAction: 'Enviar missatge',
        },
      },
      footer: {
        description: `Treballem al 101% en el teu tràmit per oferir-te la millor solució`,
        newsletter: {
          title: `NEWSLETTER`,
          description: `Subscriu-te a la nostra newsletter per obtenir les últimes notícies`,
          placeholder: `El teu correu electrònic`,
          links: {
            1: `Nosaltres`,
            2: `Els nostres Serveis`,
            3: `Oferim`,
            4: `Contacta amb nosaltres`,
            5: `Blog`,
          },
        },
      },
    } as TranslationSchema,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // idioma predeterminado
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
