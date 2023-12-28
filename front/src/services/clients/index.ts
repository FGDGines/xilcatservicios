import { get } from "./get";
import  post  from './post'
import getById from "./getById";
import { QueryFunctionContext } from "react-query";
import { TClient } from "../../types/client";
import erase from "./erase";
import update from "./update";

type TClientServices = {
    getById: (ctx: QueryFunctionContext) => Promise<TClient>
    get: () => Promise<TClient[]>
    erase: any
    post: any
    update: any
}

const clients: TClientServices = {
    get,
    post,
    getById,
    erase,
    update
}

export default clients