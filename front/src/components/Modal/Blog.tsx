import { SubmitHandler, useForm } from "react-hook-form";
import useBlog from "../../hooks/useBlog"
import { jwtDecode } from "jwt-decode";
import { useAppStore } from "../../store";
import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode";
// import { useAppStore } from "../../store";
// import axios from "axios";

type Inputs = {
  title: string;
  content: string;
  image: FileList
}

const Blog = () => {
  const { closeModal } = useAppStore()
  const { list, postImage, post, erase } = useBlog()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const auth = jwtDecode(String(localStorage.getItem('auth_token'))) as any
    if (list.data === undefined) return
    const {image, ...rest } = data

    post.mutate({ ...rest, auth: auth.id}, {
      onSuccess(data) {
        postImage.mutate({ data: image[0], id: data.id}, {
          onSuccess: () => {
            closeModal()
            toast.success('Se ha agregado una entrada de Blog')
          },
          onError: (error) => {
            console.log("error in blog postimage", error)
            const messages = error?.response?.data?.message || error.message
            console.log('messages', messages)

            if (Array.isArray(messages)) {
              messages.forEach((item: any) => {
                  toast.error(item)
                })
            } else if (typeof messages === 'string') toast.error(messages)

            console.log('new error', error)
            erase.mutate(data.id)
          }
        })
      },
    })
  }
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-center text-xl font-bold mb-4 uppercase">Agregar entrada de Blog</p>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Titulo</label>
        <input type="text" className="w-full py-2 pr-2 pl-20" {...register('title')} />
      </div>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Contenido</label>
        <textarea className="w-full py-2 pr-2 pl-24" {...register('content')}/>
      </div>
      <div className="border mb-2 w-full">
        <label
          htmlFor="image"
          className=" block w-full px-6 py-2 bg-cs-purple rounded text-center text-white hover:cursor-pointer hover:bg-cs-purple-light"
        >
          Eligen una imagen
        </label>
        <input type="file" className="hidden" id="image" {...register('image')}/>
      </div>
      <div className="border mt-4 w-full">
          <button
            type="submit"
            className=" block w-full px-6 py-2 bg-blue-300 rounded text-center text-white hover:cursor-pointer hover:bg-cs-purple-light"
          >
            Enviar
          </button>
      </div>
    </form>
  )
}

export default Blog