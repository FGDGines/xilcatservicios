import { useDeviceSize } from "../../hooks/Responsive";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { isDesktop, isMobileOrTablet } = useDeviceSize();
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return <section id="Contact">
    {isMobileOrTablet && <h1 style={{ fontSize: 40, fontWeight: 700 }} className="text-center my-5">Contáctanos</h1>}
    {isMobileOrTablet && (
      <form className="mx-7 md:grid md:grid-cols-2 md:gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            Nombre
          </label>
          <input
            {...register('name')}
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight md:bg-gray-100"
            id="name"
            type="text"
            placeholder="Jack Sullivan"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            {...register('email')}
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight md:bg-gray-100"
            id="email"
            type="email"
            placeholder="jacksullivan@gmail.com"
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="subject">
            Asunto o tema
          </label>
          <input
            {...register('subject')}
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight md:bg-gray-100"
            id="subject"
            type="text"
            placeholder="Asesoría jurídica"
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
            Mensaje
          </label>
          <textarea
            {...register('message')}
            className="outline-none focus:border-blue-600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight resize-none md:bg-gray-100"
            id="message"
            rows={4}
            placeholder="Escribe un mensaje "
          ></textarea>
        </div>
        <div className="text-center justify-center flex md:col-span-2">
          <button className="bg-[#2C2949] hover:bg-gray-600 text-white py-4 px-8 rounded-xl md:text-[21px] md:rounded-[20px] md:px-12">
            Enviar mensaje
          </button>
        </div>
        <div>
        </div>
      </form>
    )}

    {isDesktop && <div
      style={{ borderRadius: 32, background: "#EBEBEB", boxShadow: "0px 8.61667px 25.85px 0px rgba(0, 0, 0, 0.25)" }}
      className="mt-24 mx-8 px-6 py-8 flex -mb-20 gap-6 xl:mx-20">
      <section className="p-8 rounded" style={{ color: 'white', maxWidth: '435px', background: 'linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)', borderRadius: 21 }}>
        <h1 style={{ fontSize: 25, fontWeight: 700 }} className="mb-4">Información de Contacto</h1>
        <p style={{ fontSize: 15, fontWeight: 400 }} className="mb-4">Trabajamos al 101% en tu trámite para ofrecerte la mejor solución.</p>

        <div className="flex my-8">
          <div className="flex items-center">
            <FaPhoneAlt className="m-5" />
          </div>
          <div className="flex flex-col">
            <p className="mb-2" style={{ fontSize: 15, fontWeight: 400, textDecorationLine: 'underline' }}>
              (+34) 638.35.35.30
            </p>
            <p className="mb-0" style={{ fontSize: 15, fontWeight: 400, textDecorationLine: 'underline' }}>
              (+34) 663.72.23.00
            </p>
          </div>
        </div>

        <div className="flex my-8">
          <div className="flex items-center">
            <FaMapMarkerAlt className="m-5" />
          </div>
          <div className="flex flex-col">
            <p style={{ fontSize: 15, fontWeight: 400 }} className="mb-0">Calle Joan Güell 184 - Nou boulevard, Despacho 25, Barcelona.</p>
          </div>
        </div>

        <p style={{ fontSize: 15, fontWeight: 400 }} className="mb-3 text-center">Nuestras redes sociales</p>
        <div className="flex justify-center">
          <FaFacebook className="mr-3" />
          <IoLogoInstagram />
        </div>
      </section>

      <form className="max-w-5xl md:grid md:grid-cols-2 md:gap-4 flex-1 xl:ml-40">
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            Nombre
          </label>
          <input
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="name"
            type="text"
            placeholder="Jack Sullivan"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="email"
            type="email"
            placeholder="jacksullivan@gmail.com"
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Asunto o tema
          </label>
          <input
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="email"
            type="email"
            placeholder="Asesoría jurídica"
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="outline-none focus:border-blue-600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight resize-none"
            id="message"
            rows={4}
            placeholder="Escribe un mensaje "
          ></textarea>
        </div>
        <div className="text-center flex md:col-span-2">
          <button className="bg-[#2C2949] hover:bg-gray-600 text-white py-4 px-8 rounded rounded-xl">
            Enviar mensaje
          </button>
        </div>
        <div>
        </div>
      </form>
    </div>}

  </section>
}

export default Contact