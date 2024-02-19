import { SubmitHandler, useForm } from "react-hook-form";
import useBlog from "../../hooks/useBlog"
import { jwtDecode } from "jwt-decode";
import { useAppStore } from "../../store";
import { toast } from "react-toastify";
import errorHandler from "../../utils/errorHandler";
// import { jwtDecode } from "jwt-decode";
// import { useAppStore } from "../../store";
// import axios from "axios";

type TCategory = 'SELLING' | 'RENT' | 'NEWS' | 'COMMUNITY'

type TCategoryList = {
  value: TCategory,
  text: string
}

type Inputs = {
  title: string;
  content: string;
  image: FileList;
  category: TCategory;
  contact: string
}

const categories: TCategoryList[] = [
  {
    value: 'SELLING',
    text: 'Venta'
  },
  {
    value: 'RENT',
    text: 'Renta'
  },
  {
    value: 'COMMUNITY',
    text: 'Comunidad'
  },
  {
    value: 'NEWS',
    text: 'Noticias'
  },
]

const Blog = () => {
  const { closeModal } = useAppStore()
  const { list, postImage, post, erase } = useBlog({ page: 1, category: 'ALL', limit: 10, showApproved: 'false'})
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const auth = jwtDecode(String(localStorage.getItem('auth_token'))) as any
    if (list.data === undefined) return
    const {image, ...rest } = data

    post.mutate({ ...rest, auth: auth.id}, {
      onSuccess(data) {
        postImage.mutate({ data: image[0], id: data?.id}, {
          onSuccess: () => {
            closeModal()
            toast.success('Se ha agregado una entrada de Blog')
          },
          onError: (error) => {
            errorHandler(error)
            erase.mutate(data.id)
          }
        })
      },
      onError(error) {
        errorHandler(error)
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
        <label htmlFor="" className="absolute top-2 left-2">Telf. de contacto</label>
        <input  className="w-full py-2 pr-2 pl-32" {...register('contact')} maxLength={9}/>
      </div>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Contenido</label>
        <textarea className="w-full py-2 pr-2 pl-24" {...register('content')}/>
      </div>
      <div className="my-4 relative">
        <div className="flex gap-2 flex-col">
          {/* <p className="border-b border-cs-purple">Categoria</p> */}
          <div className="flex gap-2 items-center justify-evenly">

          {
            categories.map(category => (
              <button
              onClick={() => setValue('category', category.value)}
              type="button"
              className="
              text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800
              hover:bg-gradient-to-br
              focus:ring-4 focus:outline-none focus:ring-fuchsia-300
              font-xs rounded-lg text-sm px-2 py-1 text-center
              w-full
              "
              >
                  {category.text}
              </button>
              
              ))
            }
            </div>
          
        </div>
      </div>
      <div className="border mb-2 w-full">
        <label
          htmlFor="image"
          className=" block w-full px-6 py-2 bg-cs-purple rounded text-center text-white hover:cursor-pointer hover:bg-cs-purple-light"
        >
          Elige una imagen
        </label>
        <input type="file" className="hidden" id="image" {...register('image')}/>
      </div>
      <div className="border w-full">
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