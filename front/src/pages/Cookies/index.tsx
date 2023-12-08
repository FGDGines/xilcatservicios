import React from 'react'
import HeaderMenu from '../../components/HeaderMenu'
import Footer from '../../components/Footer'
import PoliticsBar from '../../components/PoliticsBar'

const Cookies = () => {
  return (
    <>
        <HeaderMenu />
        <section className='py-6 px-12 md:px-20 lg:px-40 xl:px-60 lg:pt-24'>
            <header className='mb-6 text-center'>
                <h1 className='text-3xl'>POLÍTICA DE COOKIES</h1>
                <h5 className='my-4'>www.xilcatservicios.com</h5>
                <div className='1px border border-cs-purple w-[5%] m-auto'></div>
            </header>

            <p>
              El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
              Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
              La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
              Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
            </p>
          <h3 className='text-2xl font-semibold my-2'>Cookies propias</h3>
          <p>Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por Gestoria xilcat servicios para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.</p>
          <h3 className='text-2xl font-semibold my-2'>Cookies de redes sociales</h3>
          <p>
          Gestoria xilcat servicios incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:
          </p>
          <h3 className='text-2xl font-semibold my-2'>Registro de Datos de Carácter Personal</h3>
          <p>En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por Gestoria xilcat servicios, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre Gestoría xilcat servicios y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.</p>
            <ul>
              <li>Facebook:&nbsp;<span>https://www.facebook.com/policies/cookies/</span> </li>
              <li>Twitter:&nbsp;<span>https://twitter.com/es/privacy</span></li>
              <li>Instagram:&nbsp;<span>https://help.instagram.com/1896641480634370?ref=ig</span></li>
              <li>YouTube:&nbsp;<span>https://policies.google.com/privacy?hl=es-419&gl=mx</span></li>
              <li>Pinterest:&nbsp;<span> https://policy.pinterest.com/es/privacy-policy</span></li>
              <li>LinkedIn:&nbsp;<span>https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies</span></li>
            </ul>
          <h3 className='text-2xl font-semibold my-2'>Deshabilitar, rechazar y eliminar cookies</h3>
          <p>El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.</p>
          <div><a href="mailto:#">gestion@xilcatservicios.com</a></div>
      </section>
        <Footer />
        <PoliticsBar />
    </>
  )
}

export default Cookies