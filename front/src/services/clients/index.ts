import { get } from "./get";
import  post  from './post'
import getById from "./getById";
import { QueryFunctionContext } from "react-query";
import { TClient } from "../../types/client";
import erase from "./erase";
import update from "./update";
import addPdf from './addPdf'

type TClientServices = {
    getById: (ctx: QueryFunctionContext) => Promise<TClient>
    get: ({ queryKey}: {queryKey: any}) => Promise<TClient[]>
    erase: any
    post: any
    update: any,
    addPdf: any
}

const clients: TClientServices = {
    get,
    post,
    getById,
    erase,
    update,
    addPdf
}

export default clients