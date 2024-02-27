import { FaRegTrashAlt } from "react-icons/fa"
import { TArticle } from "../../../pages/Blog/types"
import { UseMutationResult } from "react-query"
import { toast } from "react-toastify"
import { SetStateAction } from "react"

type TProps = {
    side: boolean
    data: TArticle[]
    erase: UseMutationResult<any, any, number, any>
    select: React.Dispatch<SetStateAction<TArticle | null>>
}

const RightPanel = ({ side, data, erase, select }: TProps) => {
    const handleDelete = (item: TArticle) => {
        erase.mutate(Number(item.id), {
            onSuccess() {
                toast.success("Post de Blog eliminado")
            }
        })
    }
    return (
        <div className={`
        bg-white h-full ${side ? 'flex-none w-0 opacity-0 ' : 'flex-1 w-full'} transition-all  duration-300 ease-in flex flex-col 
        lg:p-4
        lg:flex-1 lg:w-full lg:opacity-100
        `}>
            <div className='border h-full overflow-auto shadow-md'>
                <div className='bg-cs-purple p-2 rounded-t-md text-white'>
                    <p>Blogs</p>
                </div>
                {
                    Number(data.length) <= 0 && (
                        <div className='flex items-center justify-center h-full w-full'>
                            <p className='font-bold'>No hay Notas aun</p>
                        </div>
                    )
                }
                {
                    data.map((item) => (
                        <div className='px-4 py-2 border-b flex justify-between w-full gap-2' key={item.title}>
                            <div className="flex items-center">
                                <div className={`${item.isApproved ? 'bg-green-500' : 'bg-red-500'} w-6 h-6 rounded-lg`}></div>
                            </div>
                            <div onClick={() => select(item)} className='hover:cursor-pointer flex-1'>
                                <p className='font-bold'>{String(item?.es_title).slice(0, 20)}</p>
                                <p className='text-gray-400'>{String(item?.es_content).slice(0, 100)}</p>
                            </div>
                            <div onClick={() => handleDelete(item)} className='hover:cursor-pointer hover:text-red-500 basis-1/4 flex justify-center items-center text-xl'>
                                <FaRegTrashAlt />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RightPanel