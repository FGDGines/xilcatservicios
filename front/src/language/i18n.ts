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
      cookies: {
        title: "Cookies Politics",
        description: `Access to this Website may involve the use of cookies. Cookies are small amounts of information that are stored in the browser used by each User - on the different devices they may use to browse - so that the server remembers certain information that will later be read only by the server that implemented it. Cookies make browsing easier, more user-friendly, and do not damage the browsing device.
        Cookies are automatic procedures for collecting information related to the preferences determined by the User during their visit to the Website in order to recognize them as a User, and personalize their experience and use of the Website, and they can also, for example, help to identify and resolve errors.
        The information collected through cookies may include the date and time of visits to the Website, the pages viewed, the time spent on the Website and the sites visited just before and after the Website. However, no cookie allows it to contact the User's telephone number or any other means of personal contact. No cookie can extract information from the User's hard drive or steal personal information. The only way for the User's private information to be part of the Cookie file is for the user to personally provide that information to the server.
        Cookies that allow a person to be identified are considered personal data. Therefore, the Privacy Policy described above will apply to them. In this sense, the User's consent will be necessary for their use. This consent will be communicated, based on an authentic choice, offered through an affirmative and positive decision, before the initial, removable and documented treatment.`,
        subtitle1: 'Our own cookies',
        subdescription1: `They are those cookies that are sent to the User's computer or device and managed exclusively by Gestoria xilcat services for the best functioning of the Website. The information collected is used to improve the quality of the Website and its Content and your experience as a User. These cookies allow us to recognize the User as a recurring visitor to the Website and adapt the content to offer content that fits their preferences.`,
        subtitle2: 'Social media cookies',
        subdescription2: `Gestoria xilcat services incorporates social network plugins, which allow access to them from the Website. For this reason, social network cookies may be stored in the User's browser. The owners of these social networks have their own data protection and cookie policies, being themselves, in each case, responsible for their own files and their own privacy practices. The User must refer to them to find out about these cookies and, where applicable, the processing of their personal data. For information purposes only, the links where you can consult these privacy and/or cookie policies are indicated below:`,
        
        subtitle3: 'Registration of Personal Data',
        subdescription3: `In compliance with the provisions of the RGPD and the LOPD-GDD, we inform you that the personal data collected by Gestoria xilcat services, through the forms extended on its pages, will be incorporated and processed in our file in order to facilitate, expedite and fulfill the commitments established between Gestoría xilcat services and the User or maintain the relationship established in the forms that the user fills out, or to respond to a request or query from the same. Likewise, in accordance with the provisions of the RGPD and the LOPD-GDD, unless the exception provided for in article 30.5 of the RGPD applies, a record of processing activities is maintained that specifies, according to its purposes, the processing activities. carried out and the other circumstances established in the RGPD.`,

        subtitle4: 'Disable, reject and delete cookies',
        subdescription4: `The User can disable, reject and delete the cookies – totally or partially – installed on their device through the settings of their browser (including, for example, Chrome, Firefox, Safari, Explorer). In this sense, the procedures for rejecting and deleting cookies may differ from one Internet browser to another. Consequently, the User must follow the instructions provided by the Internet browser he or she is using. In the event that you reject the use of cookies – in whole or in part – you may continue using the Website, although the use of some of its features may be limited.`
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
      cookies: {
        title: 'Politica de cookies',
        description: `El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
        Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
        La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
        Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.`,
        subtitle1: 'Cookies propias',
        subdescription1: `Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por Gestoria xilcat servicios para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.`,
        subtitle2: 'Cookies de redes sociales',
        subdescription2: `Gestoria xilcat servicios incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:`,
        
        subtitle3: 'Registro de Datos de Carácter Personal',
        subdescription3: `En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por Gestoria xilcat servicios, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre Gestoría xilcat servicios y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.`,

        subtitle4: 'Deshabilitar, rechazar y eliminar cookies',
        subdescription4: `El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.`
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
      cookies: {
        title: 'Política e cookies',
        description: `L'accés a aquest Lloc Web pot implicar la utilització de galetes. Les galetes són petites quantitats d'informació que s'emmagatzemen al navegador utilitzat per cada Usuari -en els diferents dispositius que pugui utilitzar per navegar- perquè el servidor recordi certa informació que posteriorment i únicament el servidor que la va implementar llegirà. Les galetes faciliten la navegació, la fan més amigable, i no fan malbé el dispositiu de navegació.
        Les cookies són procediments automàtics de recollida d'informació relativa a les preferències determinades per l'Usuari durant la visita al Lloc Web per tal de reconèixer-lo com a Usuari, i personalitzar la seva experiència i l'ús del Lloc Web, i poden també, per exemple, ajudar a identificar i resoldre errors.
        La informació recollida a través de les galetes pot incloure la data i hora de visites al Lloc Web, les pàgines visionades, el temps que ha estat al Lloc Web i els llocs visitats just abans i després. Tot i això, cap galeta permet que aquesta mateixa pugui contactar amb el número de telèfon de l'Usuari o amb qualsevol altre mitjà de contacte personal. Cap galeta no pot extreure informació del disc dur de l'Usuari o robar informació personal. L'única manera que la informació privada de l'Usuari formi part del fitxer Cookie és que l'usuari doni personalment aquesta informació al servidor.
        Les galetes que permeten identificar una persona es consideren dades personals. Per tant, a les mateixes els serà aplicable la Política de Privadesa anteriorment descrita. En aquest sentit, per utilitzar-les serà necessari el consentiment de l'Usuari. Aquest consentiment serà comunicat, en base a una elecció autèntica, ofert mitjançant una decisió afirmativa i positiva, abans del tractament inicial, removible i documentat.`,
        subtitle1: 'Cookies pròpies',
        subdescription1: `Són aquelles galetes que són enviades a l'ordinador o dispositiu de l'Usuari i gestionades exclusivament per Gestoria xilcat serveis per al millor funcionament del Lloc Web. La informació que es recull s'empra per millorar la qualitat del Lloc Web i el seu Contingut i la seva experiència com a Usuari. Aquestes cookies permeten reconèixer l'Usuari com a visitant recurrent del Lloc Web i adaptar el contingut per oferir continguts que s'ajustin a les seves preferències.`,
        subtitle2: 'Cookies de xarxes socials',
        subdescription2: `Gestoria xilcat serveis incorpora plugins de xarxes socials, que permeten accedir-hi a partir del Lloc Web. Per aquesta raó, les galetes de xarxes socials es poden emmagatzemar al navegador de l'Usuari. Els titulars de les xarxes socials esmentades disposen de les seves pròpies polítiques de protecció de dades i de cookies, sent ells mateixos, en cada cas, responsables dels seus propis fitxers i de les seves pròpies pràctiques de privadesa. L'Usuari ha de referir-s'hi per informar-se sobre aquestes galetes i, si escau, del tractament de les seves dades personals. Únicament a títol informatiu s'indiquen a continuació els enllaços en què es poden consultar aquestes polítiques de privadesa i/o de cookies:`,
        
        subtitle3: 'Registre de Dades de Caràcter Personal',
        subdescription3: `En compliment del que estableix el RGPD i la LOPD-GDD, us informem que les dades personals demanades per Gestoria xilcat serveis, mitjançant els formularis estesos a les vostres pàgines quedaran incorporats i seran tractats al nostre fitxer per tal de poder facilitar, agilitzar i complir els compromisos establerts entre Gestoria xilcat serveis i l'Usuari o el manteniment de la relació que s'estableixi als formularis que aquest empleni, o per atendre'n una sol·licitud o consulta. Així mateix, de conformitat amb el que preveu el RGPD i la LOPD-GDD, llevat que sigui aplicable l'excepció prevista a l'article 30.5 del RGPD, es manté un registre d'activitats de tractament que especifica, segons les seves finalitats, les activitats de tractament dutes a terme i les altres circumstàncies establertes al RGPD.`,

        subtitle4: 'Deshabilitar, rebutjar i eliminar cookies',
        subdescription4: `L'Usuari pot deshabilitar, rebutjar i eliminar les cookies —totalment o parcialment— instal·lades al dispositiu mitjançant la configuració del vostre navegador (entre els quals es troben, per exemple, Chrome, Firefox, Safari, Explorer). En aquest sentit, els procediments per rebutjar i eliminar les galetes poden diferir d'un navegador d'Internet a un altre. En conseqüència, l'Usuari ha d'acudir a les instruccions facilitades pel navegador d'Internet que utilitzi. En cas que rebutgi l'ús de cookies —totalment o parcialment— podrà continuar usant el Lloc Web, si bé podrà tenir limitada la utilització d'algunes de les prestacions del mateix.`
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
