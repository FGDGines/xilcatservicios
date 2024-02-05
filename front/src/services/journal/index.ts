import { TJournal } from "../../types/journal";
import get  from "./get";
import  post  from './post'
import  update  from './update'
import  erase  from './erase'


type TJournalServices = {
    get: () => Promise<TJournal[]>
    post: any
    update: any
    erase: any

}

const journals: TJournalServices = {
    get,
    post,
    update,
    erase
}

export default journals