import axios from 'axios';
import React, { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAppStore } from '../../store';
import useClients from '../../hooks/useClients';

type Inputs = {
    name: string;
    email: string;
    mainPhone: string;
    address: string;
  }

const AddClient = () => {
  const { add } = useClients()
    const {closeModal} = useAppStore()
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const bodyToSend = {
            ...data,
            priceQuote: 0,
            price: 0,
            auth: 1,
            pdf: JSON.stringify({}),
            tramiteType: 'TYPE1',
            paymentStatus: 'NONE'
        }
        try {
            add.mutate(bodyToSend)
            toast.success('Cliente Agregado Exitosamente')
            closeModal()
        } catch (error: any) {
            console.log('error', error.response)
            const messages = error.response.data.message

            messages.forEach((item: any) => {
                toast.error(item)
              })
        }
      }

  return (
    <>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add Client</h3>
                    <div className="mt-2">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register('name')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mainPhone">
                            phone
                          </label>
                          <input
                            type="text"
                            id="mainPhone"
                            {...register('mainPhone')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            {...register('email')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            {...register('address')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="py-4 md:flex md:justify-evenly md:items-center md:gap-2">
                            <button
                                type='submit'
                            className="
                                w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cs-purple text-base font-medium text-white
                                hover:bg-cs-purple-light
                                sm:text-sm"
                            >
                            Add
                            </button>
                            <button
                                type='button'
                            className="
                                mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700
                                hover:bg-gray-300 md:mt-0
                                sm:text-sm"
                            >
                            Cancel
                            </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

    </>

  )
}

export default AddClient