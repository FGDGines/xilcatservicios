import HeaderMenu from '../../components/HeaderMenu'
import Footer from '../../components/Footer'
import PoliticsBar from '../../components/PoliticsBar'
import { useTranslation } from 'react-i18next'

const Politics = () => {
  const { t} = useTranslation()
  return (
    <>
    <HeaderMenu />
    <section className='py-6 px-12 md:px-20 lg:px-40 xl:px-60 lg:pt-24'>
    <div>
      
    <h1 className='text-4xl mb-6'>{t('politics.title')}</h1>
    <div className='h-[2px] bg-cs-purple w-[5%] my-8 mx-auto'></div>

      <details className='text-justify leading-loose lg:mb-6'>
        <summary className='text-3xl mb-6 font-semibold'>I. {t('politics.section1.title')}</summary>
        <p>{t('politics.section1.description')}
        </p>
      </details>

      <details className='text-justify leading-loose lg:mb-6'>

        <summary className='text-lg mb-6 font-semibold'>II. {t('politics.section2.title')}</summary>
        <h6 className='text-xl mt-6 mb-4 font-semibold'>El objeto de las condiciones: El Sitio Web</h6>
        <p>
          El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización
          del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los
          interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los
          elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos
          aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).
          <span><strong> Gestoria xilcat servicios</strong></span> se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación
          y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce
          y acepta que en cualquier momento <span><strong> Gestoria xilcat servicios</strong></span> pueda interrumpir, desactivar y/o cancelar cualquiera de estos
          elementos que se integran en el Sitio Web o el acceso a los mismos.
          El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que
          proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la
          red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario.
          La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o registro previo
          del Usuario.
        </p>       
        <h4 className='text-xl mt-6 mb-4'>El Usuario</h4>
        <p>
          El acceso, la navegación y uso del Sitio Web, así como por los espacios habilitados para interactuar entre los Usuarios, y
          el Usuario y<span><strong> Gestoria xilcat servicios</strong></span>, como los comentarios
          y/o espacios de blogging, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el
          Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación
          de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se
          recomienda al Usuario leerlas cada vez que visite el Sitio Web.
          El Sitio Web de <span><strong> Gestoria xilcat servicios</strong></span> proporciona gran diversidad de información, servicios
          y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:
        </p>
        <ul className="list-disc ml-8 my-4">
          <li className='mb-2'>Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por <span><strong> Gestoria xilcat servicios </strong></span> 
          sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro
          modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.</li>
          <li>La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por
          <span><strong> Gestoria xilcat servicios</strong></span> para el acceso a ciertos Contenidos o Servicios ofrecidos
            por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a <span><strong> Gestoria xilcat servicios </strong></span>
            acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no solo,
            el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.</li>
        </ul>
        <p>
        <span><strong>Gestoria xilcat servicios </strong></span>se reserva el derecho de retirar todos aquellos
        comentarios y aportaciones que vulneren la ley, el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas,
          pornográficos, spamming, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no
          resultaran adecuados para su publicación.
          En cualquier caso, <span><strong> Gestoria xilcat servicios</strong></span> no será responsable de las opiniones vertidas por los Usuarios 
          a través de comentarios u otras herramientas de blogging o de participación que pueda haber.
          El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter comercial entre
          <span><strong> Gestoria xilcat servicios</strong></span> y el Usuario.
          El Usuario declara ser mayor de edad y disponer de la capacidad jurídica suficiente para vincularse por las presentes Condiciones. Por lo tanto, 
          este Sitio Web de <span><strong> Gestoria xilcat servicios</strong></span> no se dirige a menores de edad. 
          <span><strong> Gestoria xilcat servicios</strong></span> declina cualquier responsabilidad por el incumplimiento de este requisito.
          El Sitio Web está dirigido principalmente a Usuarios residentes en España.<span><strong> Gestoria xilcat servicios </strong></span>
          no asegura que el Sitio Web cumpla con legislaciones de otros países, ya sea total o parcialmente. Si el Usuario reside o tiene su domiciliado
          en otro lugar y decide acceder y/o navegar en el Sitio Web lo hará bajo su propia responsabilidad, deberá asegurarse de que tal acceso 
          y navegación cumple con la legislación local que le es aplicable, no asumiendo <span><strong> Gestoria xilcat servicios </strong></span> 
          responsabilidad alguna que se pueda derivar de dicho acceso.
        </p>
      </details>

      <details className='text-justify leading-loose lg:mb-6'>
        <summary className='text-lg mb-6 font-semibold'>III. {t('politics.section3.title')}</summary>
        <p>{t('politics.section3.description')}</p>         
      </details>

      <details className='text-justify leading-loose lg:mb-6'>
        <summary className='text-lg mb-6 font-semibold'>IV. {t('politics.section4.title')}</summary>
        <p>{t('politics.section4.description')}</p> 
      </details>

      <details className='text-justify leading-loose lg:mb-6'>
          <summary className='text-lg mb-6 font-semibold'>V. {t('politics.section5.title')}</summary>

          <p>{t('politics.section5.description')}</p> 
      </details>

      <details className='text-justify leading-loose mb-6'>
    <summary className='text-lg mb-6 font-semibold'>VI. {t('politics.section6.title')}</summary>
    <p>{t('politics.section6.description')}</p> 
      </details>
    <div><a href="contactar.php"><span><strong>gestion@xilcatservicios.com</strong></span></a></div>
  </div>
</section>
<Footer />
<PoliticsBar />
</>
  )
}

export default Politics