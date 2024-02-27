import { SetStateAction } from "react"
import { TArticle } from "../../../pages/Blog/types"
import Card from "../../Blog/Card"
import { FiDelete } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { UseMutationResult } from "react-query";
import { toast } from "react-toastify";

type TProps = {
    side: boolean
    data: TArticle[]
    selected: TArticle | null
    erase: UseMutationResult<any, any, number, any>
    select: React.Dispatch<SetStateAction<TArticle | null>>

}

const LeftPanel = ({ side, data, selected, select, erase }: TProps) => {
    const total = data.length
    const approved = data.filter(item => item.isApproved).length
    const pending = data.filter(item => !item.isApproved).length

    const handleDelete = (item: TArticle) => {
        erase.mutate(Number(item.id), {
            onSuccess() {
                toast.success("Post de Blog eliminado")
            }
        })
    }

    return (
        <div className={`
        bg-white h-full ${side ? 'flex-1 w-full ' : 'flex-none w-0 opacity-0'} transition-all duration-300 ease-in flex flex-col lg:p-4
        lg:flex-1 lg:w-full lg:opacity-100
        `}>
            <div className="flex justify-around items-center gap-1">
                <div className="
                text-white rounded-md px-2 py-1 min-w-[140px] md:min-w-[180px] lg:min-w-[200px] bg-cs-blue flex justify-between
                    hover:bg-blue-300 hover:shadow-lg hover:-translate-y-px hover:shadow-gray-700 hover:text-gray-600 transition-all
                ">
                    <p>Total</p>
                    <span className="bg-white px-2 rounded-md text-black">{total}</span>
                </div>
                <div className="
                text-white rounded-md px-2 py-1 min-w-[140px] md:min-w-[200px] lg:min-w-[200px] bg-green-500 flex justify-between
                    hover:bg-green-300 hover:shadow-lg hover:-translate-y-px hover:shadow-gray-700 hover:text-gray-600 transition-all
                ">
                    <p>Aprobados</p>
                    <span className="bg-white px-2 rounded-md text-black">{approved}</span>
                </div>
                <div className="
                text-white rounded-md px-2 py-1 min-w-[140px] md:min-w-[180px] lg:min-w-[200px] bg-red-500 flex justify-between
                    hover:bg-red-300 hover:shadow-lg hover:-translate-y-px hover:shadow-gray-700 hover:text-gray-600 transition-all
                ">
                    <p>Por Aprobar</p>
                    <span className="bg-white px-2 rounded-md text-black">{pending}</span>
                </div>
            </div>
            {
                selected === null && (
                    <div className="border mt-4 px-4 py-2 shadow-lg">No has seleccionado ningun blog para previzualizar</div>
                )
            }
            {
                selected !== null && (
                    <div className="relative border mt-4 px-4 py-2 h-full flex items-center justify-center shadow-lg">
                        <button className="absolute text-black top-4 right-4 text-xl hover:text-cs-blue transition-all" onClick={() => select(null)}><FiDelete /></button>
                        <button className="absolute text-black top-4 right-12 text-xl hover:text-cs-blue transition-all" onClick={() => handleDelete(selected)}><FaRegTrashAlt /></button>
                        <Card article={selected} current="ALL" />
                    </div>
                )
            }

        </div>
    )
}

export default LeftPanel