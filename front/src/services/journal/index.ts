import { TJournal } from "../../types/journal";
import get  from "./get";
import  post  from './post'
import  update  from './update'


type TJournalServices = {
    get: () => Promise<TJournal[]>
    post: any
    update: any

}

const journals: TJournalServices = {
    get,
    post,
    update
}

export default journals