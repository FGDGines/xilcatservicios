const Contact = () => {
  return (
    <div className="mt-8 px-6">
      <p className='text-center text-2xl mb-8 font-bold '>Contáctanos</p>
      <form className="max-w-md mx-auto md:grid md:grid-cols-2 md:gap-4">
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
        <div className="text-center flex items-center justify-center md:col-span-2">
          <button className="bg-[#2C2949] hover:bg-gray-600 text-white py-4 px-8 rounded rounded-xl">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact