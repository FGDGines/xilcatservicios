import { useState } from "react"
import useBlog from "../../hooks/useBlog"
import truncateText from "../../utils/truncateText"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCheckCircle, FaTrash } from "react-icons/fa"
import Card from "../Blog/Card"
import { toast } from "react-toastify"
import { TArticle } from "../../pages/Blog/types"

type TState = {
    state: boolean,
    data: TArticle | {}
}

const PendingBlogs = () => {
    const [selected, setSelected] = useState<TState>({
        state: false,
        data: {}
    })
    const [page, setPage] = useState(1)
    const { list, erase, update } = useBlog({ page, limit: 10, category: 'ALL', showApproved: 'false' })
    console.log('list', list)

    const handleSelect = (data: any) => {
        setSelected({
            state: true,
            data
        })
    }
    const handleDelete = (data: any) => {
        erase.mutate(data.id, {
            onSuccess: () => {
                toast.success('blog Eliminado')
                setSelected({
                    state: false,
                    data: {}
                })
            }
        })
    }

    const handleApprove = (data: any) => {
        update.mutate({ data: { isApproved: true }, id: data.id }, {
            onSuccess() {
                console.log('aporbado')
                toast.success('Blog Aprobado para publicacion'),
                    setSelected({
                        state: false,
                        data: {}
                    })
            },
        })
    }

    return (
        <div>
            {
                !selected.state && list.data?.map((item) => (
                    <>
                        <div className="flex items-center justify-between border rounded-md mb-2 shadow-md px-4 py-2">
                            <div className="flex items-center justify-between gap-2 hover:cursor-pointer" onClick={() => handleSelect(item)}>
                                <p className="font-bold">{item.title}</p>
                                <p>{truncateText(item.content)}</p>
                            </div>
                            <div className="flex gap-2 text-xl">
                                <button className="shadow-lg hover:text-cs-purple-light" onClick={() => handleDelete(item)}><FaTrash /></button>
                                <button className="shadow-lg hover:text-cs-purple-light" onClick={() => handleApprove(item)}><FaCheckCircle /></button>
                            </div>
                        </div>
                    </>
                ))
            }
            {
                !selected.state && (
                    <div className='flex justify-center items-center text-xl gap-2'>
                        <button
                            disabled={page <= 1}
                            className={`${page <= 1 && 'text-gray-300 hover:cursor-not-allowed'}`}
                            onClick={() => setPage(prev => prev - 1)}
                        >
                            <FaArrowAltCircleLeft />
                        </button>
                        <div>{page}</div>
                        <button
                            disabled={Number(list.data?.length) <= 10}
                            className={`${Number(list.data?.length) <= 10 && 'text-gray-300 hover:cursor-not-allowed'}`}
                            onClick={() => setPage(prev => prev + 1)}
                        >
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                )
            }
            {
                selected.state && (
                    <>
                        <h3 className="text-center mb-2 font-bold">Preview del Post</h3>
                        <Card article={selected.data as TArticle} current="ALL" />
                        <div className="flex items-center justify-center">
                            <div
                                className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                role="group">
                                <button
                                    onClick={() => handleDelete(selected.data)}
                                    type="button"
                                    className={`
                        inline-block rounded-l bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700
                        hover:bg-red-300
                        `}
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Eliminar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelected({ state: false, data: {} })}
                                    className="inline-block  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleApprove(selected.data)}
                                    className="
                        inline-block rounded-r bg-cs-purple px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700
                        hover:bg-cs-purple-light
                        "
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Aprobar
                                </button>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default PendingBlogs