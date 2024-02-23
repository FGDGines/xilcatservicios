import { SubmitHandler, useForm } from "react-hook-form";
import useBlog from "../../hooks/useBlog"
import { jwtDecode } from "jwt-decode";
import { useAppStore } from "../../store";
import { toast } from "react-toastify";
import errorHandler from "../../utils/errorHandler";
import { ArticleCategory } from "../../pages/Blog/types";
import Carrousel from "../Common/Carrousel";

type TCategoryList = {
  value: ArticleCategory,
  text: string
}

type Inputs = {
  title: string;
  content: string;
  image: FileList;
  category: ArticleCategory;
  contact: string
  email?: string
  name?: string
}

const categories: TCategoryList[] = [
  {
    value: 'SELLING',
    text: 'Motor'
  },
  {
    value: 'RENT',
    text: 'Alquiler'
  },
  {
    value: 'COMMUNITY',
    text: 'Comunidad'
  },
  {
    value: 'NEWS',
    text: 'Noticias'
  },
  {
    value: 'FORMATION',
    text: 'Formacion'
  },
]

const Blog = () => {
  const { closeModal, modal } = useAppStore()
  const { list, postImage, post, erase, postGuest } = useBlog({ page: 1, category: 'ALL', limit: 10, showApproved: 'false' })
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { image, ...rest } = data

    if (modal.params?.type === "no_registered") {
      console.log('here in no registered')
      postGuest.mutate({ ...rest, isApproved: false, auth: 3 }, {
        onSuccess(data) {
          postImage.mutate({ data: image[0], id: data?.id }, {
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
      return
    }
    const auth = jwtDecode(String(localStorage.getItem('auth_token'))) as any
    if (list.data === undefined) return
    console.log('in here', list?.data)

    post.mutate({ ...rest, isApproved: auth?.rol === 'ADMINISTRADOR', auth: auth?.id }, {
      onSuccess(data) {
        postImage.mutate({ data: image[0], id: data?.id }, {
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
      <p className="text-center text-xl font-bold mb-4 uppercase">{modal.params?.type === "no_registered" ? "Quieres publicar con nosotros?" : 'Agregar entrada de Blog'}</p>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Titulo</label>
        <input type="text" className="w-full py-2 pr-2 pl-20" {...register('title')} />
      </div>
      {
        modal?.params?.type === 'no_registered' && (
          <>
            <div className="border mb-2 relative">
              <label htmlFor="" className="absolute top-2 left-2">Nombre del Publicante</label>
              <input type="text" className="w-full py-2 pr-2 pl-44" {...register('name')} />
            </div>
            <div className="border mb-2 relative">
              <label htmlFor="" className="absolute top-2 left-2">Correo</label>
              <input type="email" className="w-full py-2 pr-2 pl-20" {...register('email')} />
            </div>
          </>
        )
      }
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Telf. de contacto</label>
        <input className="w-full py-2 pr-2 pl-32" {...register('contact')} maxLength={9} />
      </div>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2">Contenido</label>
        <textarea className="w-full py-2 pr-2 pl-24" {...register('content')} />
      </div>
      <div className="my-4 relative">
        <div className="flex gap-2 flex-col">
          {/* <p className="border-b border-cs-purple">Categoria</p> */}
          <div className="flex gap-2 items-center justify-evenly">
            <Carrousel
              items={categories}
              action={setValue}
            />
            {/* {
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
            } */}
          </div>

        </div>
      </div>
      <div className="border mb-2 w-full">
        <label
          htmlFor="image"
          className=" block w-full px-6 py-2 bg-cs-purple rounded text-center transition-all text-white hover:cursor-pointer hover:bg-cs-purple-light"
        >
          Elige una imagen
        </label>
        <input type="file" className="hidden" id="image" {...register('image')} />
      </div>
      <div className="border w-full">
        <button
          type="submit"
          className=" block w-full px-6 py-2 bg-blue-300 rounded text-center transition-all hover:text-white hover:cursor-pointer hover:bg-cs-purple-light"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Blog