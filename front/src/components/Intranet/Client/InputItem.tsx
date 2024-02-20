import { Dispatch, SetStateAction } from "react"
import { TClientServer } from "./LeftPanel"

type TParams = {
    isEditing: boolean
    value:string
    type: string
    icon: JSX.Element
    setValue: Dispatch<SetStateAction<TClientServer>>
}

const InputItem = (props: TParams) => {
    const typeToSpanish: { [idx: string]: string} = {
        name: 'Nombre',
        'email': 'Correo',
        'address': "Direccion",
        "mainPhone": 'Telefono 1',
        "secondaryPhone": 'Telefono 2'
    }

  return (
    <>
      {
          props.isEditing ? (
              <div className="relative flex gap-2 w-full">
              <input onChange={(e) => props.setValue((prev) => ({
                ...prev,
                [props.type]: e.target.value
              }))} value={props.value} type="email" className="peer py-3 pe-0 ps-24 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" placeholder="Enter name"/>
              <div className="absolute inset-y-0 start-0 flex gap-1 items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              {props.icon}
              <span className="text-sm">
                {typeToSpanish[props.type]}
              </span>
              </div>
              </div>
              ) : (
                <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
                    {props.icon}
                    <p>{typeToSpanish[props.type]}: <span className='text-cs-purple font-normal'>{props.value}</span></p>
                </div>
      )
    }
    </>
  )
}

export default InputItem