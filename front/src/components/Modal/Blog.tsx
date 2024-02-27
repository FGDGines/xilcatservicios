import { SubmitHandler, useForm } from "react-hook-form";
import useBlog from "../../hooks/useBlog"
import { jwtDecode } from "jwt-decode";
import { useAppStore } from "../../store";
import { toast } from "react-toastify";
import errorHandler from "../../utils/errorHandler";
import Carrousel from "../Common/Carrousel";
import { CATEGORIES } from "./Constants";
import { BlogInputs } from "./types";

import spanishIcon from '../../assets/castellano.png';
import { useReducer } from "react";
import catalaIcon from '../../assets/catala.png'
import inglesIcon from '../../assets/ingles.png'

const languages = [
  {
    value: 'es',
    icon: spanishIcon
  },
  {
    value: 'ca',
    icon: catalaIcon
  },
  {
    value: 'en',
    icon: inglesIcon
  }
]

const Blog = () => {
  const [language, setLanguage] = useReducer((prev) => {
    const idx = languages.findIndex(item => item.value === prev.value)
    const isLast = idx + 1 === languages.length

    if (isLast) return languages[0]
    else return languages[idx + 1]
  }, languages[0])
  const { closeModal, modal } = useAppStore()
  const { list, postImage, post, erase, postGuest } = useBlog({ page: 1, category: 'ALL', limit: 10, showApproved: 'false' })
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<BlogInputs>()
  const onSubmit: SubmitHandler<BlogInputs> = async (data) => {
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
      <p className="text-center text-xl font-bold mb-2 uppercase">{modal.params?.type === "no_registered" ? "Quieres publicar con nosotros?" : 'Agregar entrada de Blog'}</p>
      <p className="text-sm italic text-center mb-4">Por favor no olvides de escribir tu titulo y contenido en INGLES - CATALAN - ESPANOL</p>
      <div className="border mb-2 relative">
        <label htmlFor="" className="absolute top-2 left-2 flex gap-1">
          <button type="button" onClick={setLanguage}>
            <img src={language.icon} alt="" className="w-4 h-4" />
          </button>
          <p>Titulo</p>
        </label>
        {
          languages.map(lang => <input type="text" className={`w-full py-2 pr-2 pl-20 ${lang.value === language.value ? 'inline-flex' : 'hidden'}`} id={`${lang.value}_title`} key={`${lang.value}_title`} {...register(`${lang.value}_title` as any)} />)
        }

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
        <label htmlFor="" className="absolute top-2 left-2 flex gap-1">
          <button type="button" onClick={setLanguage}>
            <img src={language.icon} alt="" className="w-4 h-4" />
          </button>
          <p>Contenido</p>
        </label>
        {
          languages.map(lang => <textarea className={`w-full py-2 pr-2 pl-28 ${lang.value === language.value ? 'block' : 'hidden'}`} id={`${lang.value}_title`} key={`${lang.value}_title`} {...register(`${lang.value}_content` as any)} />)
        }
      </div>
      <div className="my-4 relative">
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center justify-evenly">
            <Carrousel
              items={CATEGORIES}
              action={setValue}
            />
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