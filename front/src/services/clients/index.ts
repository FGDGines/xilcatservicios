import { get } from "./get";
import  post  from './post'
import getById from "./getById";
import { QueryFunctionContext } from "react-query";

type TClientServices = {
    getById: (ctx: QueryFunctionContext) => void
    get: () => void
    post: any
}

const clients: TClientServices = {
    get,
    post,
    getById,
}

export default clients