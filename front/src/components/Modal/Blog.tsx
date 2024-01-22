
const Blog = () => {
  return (
    <form className="">
      <p className="text-center text-xl font-bold mb-4 uppercase">Agregar entrada de Blog</p>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Titulo</label>
        <input type="text" className="w-full py-2 pr-2 pl-20"/>
      </div>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Contenido</label>
        <textarea className="w-full py-2 pr-2 pl-24"/>
      </div>
      <div className="border mb-2 w-full">
        <label
          htmlFor="image"
          className=" block w-full px-6 py-2 bg-cs-purple rounded text-center text-white hover:cursor-pointer hover:bg-cs-purple-light"
        >
          Eligen una imagen
        </label>
        <input type="file" className="hidden" name="image" id="image"/>
      </div>
    </form>
  )
}

export default Blog