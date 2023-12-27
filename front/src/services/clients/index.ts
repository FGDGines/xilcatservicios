import { get } from "./get";
import  post  from './post'
import getById from "./getById";
import { QueryFunctionContext } from "react-query";
import { TClient } from "../../types/client";

type TClientServices = {
    getById: (ctx: QueryFunctionContext) => Promise<TClient>
    get: () => Promise<TClient[]>
    post: any
}

const clients: TClientServices = {
    get,
    post,
    getById,
}

export default clients